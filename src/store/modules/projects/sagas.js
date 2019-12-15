import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getProjectsSuccess, createProjectSuccess } from './actions';

export function* getProjects() {
  try {
    const response = yield call(api.get, 'projects');

    yield put(getProjectsSuccess(response.data));
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export function* createProject({ payload }) {
  const { data } = payload;

  try {
    const response = yield call(api.post, 'projects', { title: data });

    yield put(createProjectSuccess(response.data));
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export default all([
  takeLatest('@projects/GET_PROJECTS_REQUEST', getProjects),
  takeLatest('@projects/CREATE_PROJECT_REQUEST', createProject),
]);
