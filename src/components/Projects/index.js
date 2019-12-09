import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getProjectsRequest } from '~/store/modules/projects/actions';

import Button from '~/styles/components/Button';

import { Container, Project } from './styles';

export default function Projects() {
  const dispatch = useDispatch();
  const teams = useSelector(state => state.teams);
  const projects = useSelector(state => state.projects);

  useEffect(() => {
    dispatch(getProjectsRequest());
  }, [teams.active]); //eslint-disable-line

  return (
    <Container>
      {teams.active ? (
        <>
          <header>
            <h1>{teams.active.name}</h1>
            <div>
              <Button onClick={() => {}}>+ Novo</Button>
              <Button onClick={() => {}}>Membros</Button>
            </div>
          </header>

          {projects.data.map(project => (
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
    </Container>
  );
}
