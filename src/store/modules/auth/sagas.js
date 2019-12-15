import { takeLatest, select, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, getPermissionsSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token));
    history.push('/');
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    const response = yield call(api.post, 'users', {
      email,
      name,
      password,
    });

    const { token } = response.data;

    yield put(signInSuccess(token));
    history.push('/');
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export function* getPermissions() {
  try {
    const team = yield select(state => state.teams.active);
    const signed = yield select(state => state.auth.signed);

    if (!signed || !team) return;

    const response = yield call(api.get, 'permissions');

    const { roles, permissions } = response.data;

    yield put(getPermissionsSuccess(roles, permissions));
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { auth, teams } = payload;

  if (auth.token) {
    api.defaults.headers.Authorization = `Bearer ${auth.token}`;
    api.defaults.headers.Team = teams.active.slug;
  }
}

export function signOut() {
  history.push('/signin');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('persist/REHYDRATE', getPermissions),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
