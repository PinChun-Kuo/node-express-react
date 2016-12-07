import { tableActionaType } from '../actions/tableAction';
import { updateRow } from '../data/tableData';

export default function(state = updateRow, action) {
  switch (action.type) {
    // case tableActionaType.addItem: {
    //   return {};
    // }
    //
    // case tableActionaType.editItem: {
    //   return {};
    // }
    case tableActionaType.openPopModal: {
      if (action.payload.seq !== null) {
        const newState = action.payload.dataList.filter(item => item.seq === action.payload.seq);
        return newState[0];
      }
      return {};
    }
    // case tableActionaType.closePopModal: {
    //   return {};
    // }
    default:
      return state;
  }
}
