import { tableActionaType } from '../actions/issueTableAction';
import { updateIssue } from '../data/constant';

export default function(state = updateIssue, action) {
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
