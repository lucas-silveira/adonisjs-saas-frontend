import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  active: null,
};

export default function teams(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@teams/GET_TEAMS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      case '@teams/SELECT_TEAM': {
        draft.active = action.payload.team;
        break;
      }
      default:
    }
  });
}
