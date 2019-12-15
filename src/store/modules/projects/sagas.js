import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { createProjectSuccess } from './actions';

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
  takeLatest('@projects/CREATE_PROJECT_REQUEST', createProject),
]);
