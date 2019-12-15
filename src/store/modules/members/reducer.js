import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  membersModalOpen: false,
};

export default function members(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@members/OPEN_MODAL': {
        draft.membersModalOpen = true;
        break;
      }
      case '@members/CLOSE_MODAL': {
        draft.membersModalOpen = false;
        break;
      }
      case '@members/GET_MEMBERS_SUCCESS': {
        draft.data = action.payload.data;
        break;
      }
      case '@members/UPDATE_MEMBER_REQUEST': {
        draft.data = draft.data.map(member =>
          member.id === action.payload.id
            ? { ...member, roles: action.payload.roles }
            : member
        );
        break;
      }
      default:
    }
  });
}
