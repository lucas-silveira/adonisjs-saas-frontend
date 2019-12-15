import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import api from '~/services/api';

import {
  createProjectRequest,
  openProjectsModal,
  closeProjectsModal,
} from '~/store/modules/projects/actions';

import { openMembersModal } from '~/store/modules/members/actions';

import Button from '~/styles/components/Button';
import Modal from '~/components/Modal';
import Members from '~/components/Members';

import { Container, Project } from './styles';

export default function Projects() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);
  const members = useSelector(state => state.members);
  const projects = useSelector(state => state.projects);
  const [projectsData, setProjectsData] = useState([]);
  const [newProject, setNewProject] = useState('');

  useEffect(() => {
    async function getProjects() {
      const response = await api.get('projects');
      setProjectsData(response.data);
    }

    getProjects();
  }, [teams.active]); //eslint-disable-line

  function handleInputChange(event) {
    setNewProject(event.target.value);
  }

  function handleCreateProject(event) {
    event.preventDefault();

    dispatch(createProjectRequest(newProject));
  }

  return (
    <Container>
      {teams.active ? (
        <>
          <header>
            <h1>{teams.active.name}</h1>
            <div>
              <Button onClick={() => dispatch(openProjectsModal())}>
                + Novo
              </Button>
              <Button onClick={() => dispatch(openMembersModal())}>
                Membros
              </Button>
            </div>
          </header>

          {projectsData.map(project => (
              <Project key={project.id}>
                <p>{project.title}</p>
              </Project>
            ))}
        </>
      ) : (
        <header>
          <h1>Selecione um time ao lado.</h1>
        </header>
      )}

      {projects.projectModalOpen && (
        <Modal>
          <h1>Criar projeto</h1>
          <form onSubmit={handleCreateProject}>
            <span>NOME</span>
            <input
              name="newProject"
              value={newProject}
              onChange={handleInputChange}
            />

            <Button size="large" type="submit">
              Salvar
            </Button>
            <Button
              onClick={() => dispatch(closeProjectsModal())}
              size="small"
              color="gray"
            >
              Cancelar
            </Button>
          </form>
        </Modal>
      )}

      {members.membersModalOpen && <Members />}
    </Container>
  );
}
