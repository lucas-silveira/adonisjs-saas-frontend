import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '~/services/api';

import { getTeamsSuccess } from './actions';

export function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');

    yield put(getTeamsSuccess(response.data));
  } catch (err) {
    console.tron.log(err.response);
  }
}

export default all([takeLatest('@teams/GET_TEAMS_REQUEST', getTeams)]);
