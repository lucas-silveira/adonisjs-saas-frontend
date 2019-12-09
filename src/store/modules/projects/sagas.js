import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getProjectsSuccess } from './actions';

export function* getProjects() {
  try {
    const response = yield call(api.get, 'projects');

    yield put(getProjectsSuccess(response.data));
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export default all([takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects)]);
