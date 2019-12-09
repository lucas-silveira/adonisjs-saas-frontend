import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { signInSuccess, signInFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    const { token } = response.data;

    yield put(signInSuccess(token));
    history.push('/');
  } catch (err) {
    toast.error(err.response.data[0].message);
    yield put(signInFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { auth, teams } = payload;

  if (auth) api.defaults.headers.Authorization = `Bearer ${auth.token}`;
  if (teams) api.defaults.headers.Team = teams.active.slug;
}

export function signOut() {
  history.push('/signin');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
