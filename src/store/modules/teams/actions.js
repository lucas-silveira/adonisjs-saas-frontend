export function getTeamsRequest() {
  return {
    type: '@teams/GET_TEAMS_REQUEST',
  };
}

export function getTeamsSuccess(data) {
  return {
    type: '@teams/GET_TEAMS_SUCCESS',
    payload: { data },
  };
}

export function selectTeam(team) {
  return {
    type: '@teams/SELECT_TEAM',
    payload: { team },
  };
}

export function createTeamRequest(name) {
  return {
    type: '@teams/CREATE_TEAM_REQUEST',
    payload: { name },
  };
}

export function createTeamSuccess(team) {
  return {
    type: '@teams/CREATE_TEAM_SUCCESS',
    payload: { team },
  };
}

export function openModal() {
  return {
    type: '@teams/OPEN_MODAL',
  };
}

export function closeModal() {
  return {
    type: '@teams/CLOSE_MODAL',
  };
}
