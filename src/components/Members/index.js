import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Select from 'react-select';

import api from '~/services/api';

import {
  getMembersRequest,
  updateMemberRequest,
  inviteMemberRequest,
  closeMembersModal,
} from '~/store/modules/members/actions';

import Can from '~/components/Can';
import Modal from '~/components/Modal';
import Button from '~/styles/components/Button';

import { MembersList, Invite } from './styles';

export default function Members() {
  const dispatch = useDispatch();
  const members = useSelector(state => state.members);
  const [roles, setRoles] = useState([]);
  const [invite, setInvite] = useState('');

  useEffect(() => {
    dispatch(getMembersRequest());

    async function getRoles() {
      const response = await api.get('roles');
      setRoles(response.data);
    }

    getRoles();
  }, []); //eslint-disable-line

  async function handleRolesChange(id, rolesInput) {
    dispatch(updateMemberRequest(id, rolesInput));
  }

  function handleInputChange(event) {
    setInvite(event.target.value);
  }

  function handleInvite(event) {
    event.preventDefault();

    dispatch(inviteMemberRequest(invite));
  }

  return (
    <Modal size="large">
      <h1>Membros</h1>

      <Can checkPermission="invites_create">
        <Invite onSubmit={handleInvite}>
          <input
            name="invite"
            placeholder="Convidar para o time"
            value={invite}
            onChange={handleInputChange}
          />
          <Button type="submit">Enviar</Button>
        </Invite>
      </Can>

      <form>
        <MembersList>
          {members.data.map(member => (
            <li key={member.id}>
              <strong>{member.user.name}</strong>
              <Can checkRole="administrator">
                {can => (
                  <Select
                    isMulti
                    isDisabled={!can}
                    options={roles}
                    value={member.roles}
                    getOptionLabel={role => role.name}
                    getOptionValue={role => role.id}
                    onChange={value => handleRolesChange(member.id, value)}
                  />
                )}
              </Can>
            </li>
          ))}
        </MembersList>

        <Button
          onClick={() => dispatch(closeMembersModal())}
          filled={false}
          color="gray"
        >
          Cancelar
        </Button>
      </form>
    </Modal>
  );
}
