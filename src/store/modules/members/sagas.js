import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import { getMembersSuccess } from './actions';

export function* getMembers() {
  try {
    const response = yield call(api.get, 'members');

    yield put(getMembersSuccess(response.data));
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export function* updateMember({ payload }) {
  try {
    const { id, roles } = payload;

    yield call(api.put, `members/${id}`, {
      roles: roles.map(role => role.id),
    });

    toast.success('Membro atualizado com sucesso!');
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export function* inviteMember({ payload }) {
  try {
    const { email } = payload;

    yield call(api.post, 'invites', {
      invites: [email],
    });

    toast.success('Convite enviado!');
  } catch (err) {
    toast.error(err.response.data[0].message);
  }
}

export default all([
  takeLatest('@members/GET_MEMBERS_REQUEST', getMembers),
  takeLatest('@members/UPDATE_MEMBER_REQUEST', updateMember),
  takeLatest('@members/INVITE_MEMBER_REQUEST', inviteMember),
]);
