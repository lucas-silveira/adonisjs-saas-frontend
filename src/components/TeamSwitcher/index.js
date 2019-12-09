import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '../Modal';
import Button from '~/styles/components/Button';

import { signOut } from '~/store/modules/auth/actions';

import {
  getTeamsRequest,
  createTeamRequest,
  selectTeam,
  openModal,
  closeModal,
} from '~/store/modules/teams/actions';

import { Container, TeamList, Team, NewTeam, Logout } from './styles';

export default function TeamSwitcher() {
  const dispatch = useDispatch();
  const [newTeam, setNewTeam] = useState('');
  const teams = useSelector(state => state.teams);

  useEffect(() => {
    dispatch(getTeamsRequest());
  }, []); //eslint-disable-line

  function handleSelectTeam(team) {
    dispatch(selectTeam(team));
  }

  function handleOpenModal() {
    dispatch(openModal());
  }

  function handleCloseModal() {
    dispatch(closeModal());
  }

  function handleInputChange(event) {
    setNewTeam(event.target.value);
  }

  function handleCreateTeam(event) {
    event.preventDefault();

    dispatch(createTeamRequest(newTeam));
  }

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <TeamList>
        {teams.data.map(team => (
          <Team key={team.id} onClick={() => handleSelectTeam(team)}>
            <img
              alt={team.name}
              src={`https://ui-avatars.com/api?font-size=0.33&background=7159c1&color=fff&name=${team.name}`}
            />
          </Team>
        ))}

        <NewTeam onClick={handleOpenModal}>Novo</NewTeam>

        {teams.teamModalOpen && (
          <Modal>
            <h1>Criar time</h1>

            <form onSubmit={handleCreateTeam}>
              <span>NOME</span>
              <input
                name="newTeam"
                value={newTeam}
                onChange={handleInputChange}
              />

              <Button size="large" type="submit">
                Salvar
              </Button>
              <Button size="small" color="gray" onClick={handleCloseModal}>
                Cancelar
              </Button>
            </form>
          </Modal>
        )}
      </TeamList>

      <Logout onClick={handleSignOut}>Sair</Logout>
    </Container>
  );
}
