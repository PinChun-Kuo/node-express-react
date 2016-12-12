import { tableActionaType } from '../actions/issueTableAction';
import { modalShow } from '../data/constant';

export default function(state = modalShow, action) {
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
