export function getProjectsRequest() {
  return {
    type: '@projects/GET_PROJECTS_REQUEST',
  };
}

export function getProjectsSuccess(data) {
  return {
    type: '@projects/GET_PROJECTS_SUCCESS',
    payload: { data },
  };
}

export function createProjectRequest(data) {
  return {
    type: '@projects/CREATE_PROJECT_REQUEST',
    payload: { data },
  };
}

export function createProjectSuccess(data) {
  return {
    type: '@projects/CREATE_PROJECT_SUCCESS',
    payload: { data },
  };
}

export function openProjectsModal() {
  return {
    type: '@projects/OPEN_MODAL',
  };
}

export function closeProjectsModal() {
  return {
    type: '@projects/CLOSE_MODAL',
  };
}
