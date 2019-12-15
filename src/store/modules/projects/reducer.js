import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  projectModalOpen: false,
};

export default function projects(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@projects/GET_PROJECTS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      case '@projects/CREATE_PROJECT_SUCCESS': {
        draft.data.push(action.payload.data);
        draft.projectModalOpen = false;
        break;
      }
      case '@teams/SELECT_TEAM': {
        draft.data = [];
        break;
      }
      case '@projects/OPEN_MODAL': {
        draft.projectModalOpen = true;
        break;
      }
      case '@projects/CLOSE_MODAL': {
        draft.projectModalOpen = false;
        break;
      }
      default:
    }
  });
}
