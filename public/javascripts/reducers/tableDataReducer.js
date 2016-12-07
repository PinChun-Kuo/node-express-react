import { tableActionaType } from '../actions/tableAction';
import { dataList } from '../data/tableData';

export default function(state = dataList, action) {
  // console.log('tableActionaType : ', tableActionaType);
  switch (action.type) {
    case tableActionaType.addItem: {
      const newState = Object.assign([], state);
      const newItem = Object.assign({}, action.payload.addRow);
      const length = newState.length;
      const insertItemKey = Number(newState[length - 1].seq) + 1;     // calculate key value for new item
      newItem.seq = insertItemKey;
      newState.push(newItem);
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
