import { tableActionaType } from '../actions/tableAction';
import { updateRow } from '../data/tableData';

export default function(state = updateRow, action) {
  switch (action.type) {
    case tableActionaType.openPopModal: {
      if (action.payload.editRow !== null) {
        return action.payload.editRow;
      }
      return {};
    }
    default:
      return state;
  }
}
