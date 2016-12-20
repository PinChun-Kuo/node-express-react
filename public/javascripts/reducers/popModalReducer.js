import { tableActionaType } from '../actions/issueTableAction';

export default function(state = false, action) {
  switch (action.type) {
    case tableActionaType.addIssue: {
      return false;
    }
    case tableActionaType.editIssue: {
      return false;
    }
    case tableActionaType.openPopModal: {
      return true;
    }
    case tableActionaType.closePopModal: {
      return false;
    }
    default:
      return state;
  }
}
