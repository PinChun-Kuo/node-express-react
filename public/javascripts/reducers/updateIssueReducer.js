import { tableActionaType } from '../actions/issueTableAction';

export default function(state = {}, action) {
  switch (action.type) {
    case tableActionaType.openPopModal: {
      if (action.payload.issue !== null) {
        return action.payload.issue;
      }
      return {};
    }
    default:
      return state;
  }
}
