import { tableActionaType } from '../actions/tableAction';
import { modalShow } from '../data/tableData';

export default function(state = modalShow, action) {
  switch (action.type) {
    case tableActionaType.addItem: {
      return false;
    }
    case tableActionaType.editItem: {
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
