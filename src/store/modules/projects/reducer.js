import produce from 'immer';

const INITIAL_STATE = {
  projectModalOpen: false,
};

export default function projects(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
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
