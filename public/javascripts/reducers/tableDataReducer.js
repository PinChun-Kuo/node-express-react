import { tableActionaType } from '../actions/tableAction';
import { dataList } from '../data/tableData';

export default function(state = dataList, action) {
  switch (action.type) {
    case tableActionaType.addItem: {
      const newState = Object.assign([], state);
      const length = newState.length;
      const insertItemKey = Number(newState[length - 1].seq) + 1;     // calculate key value for new item
      action.payload.addRow.seq = insertItemKey;
      newState.push(action.payload.addRow);
      return newState;
    }
    case tableActionaType.editItem: {
      const newState = state.map((item) => {
        if (item.seq === action.payload.editRow.seq) {
          return action.payload.editRow;
        }
        return item;
      });

      return newState;
    }
    case tableActionaType.deleteItem: {
      const newState = state.filter(item => item.seq !== action.payload.seq);
      return newState;
    }
    default:
      return state;
  }
}
