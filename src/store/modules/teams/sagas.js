import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getTeamsSuccess, createTeamSuccess } from './actions';

export function* getTeams() {
  try {
    const response = yield call(api.get, 'teams');
    yield put(getTeamsSuccess(response.data));
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export function* createTeam({ payload }) {
  try {
    const { name } = payload;
    const response = yield call(api.post, 'teams', {
      name,
    });

    yield put(createTeamSuccess(response.data));
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export function selectTeam({ payload }) {
  const { team } = payload;

  if (team) api.defaults.headers.Team = team.slug;
}

export default all([
  takeLatest('@teams/GET_TEAMS_REQUEST', getTeams),
  takeLatest('@teams/CREATE_TEAM_REQUEST', createTeam),
  takeLatest('@teams/SELECT_TEAM', selectTeam),
]);
