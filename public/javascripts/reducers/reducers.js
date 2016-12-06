import { combineReducers } from 'redux';
import { tableDataType } from '../actions/tableDataAction';
import { modalType } from '../actions/popModalAction';
import { updateRowType } from '../actions/updateRowAction';
import { dataList, modalShow, updateRow } from '../data/tableData';

function tableData(state = dataList, action) {
  switch (action.type) {
    case tableDataType.addItem: {
      state.push(action.payload.addRow);
      return state;
    }
    case tableDataType.editItem: {
      state[action.payload.index] = action.payload.editRow;
      return state;
    }
    case tableDataType.deleteItem: {
      state.splice(action.payload.index, 1);
      return state;
    }
    default:
      return state;
  }
}

function modalControl(state = modalShow, action) {
  switch (action.type) {
    case modalType.open: {
      state = true;
      return state;
    }
    case modalType.close: {
      console.log('close');
      console.log('1 : ', state);
      state = false;
      console.log('2 : ', state);
      return state;
    }
    default:
      return state;
  }
}

function updateRowControl(state = updateRow, action) {
  switch (action.type) {
    case updateRowType.empty: {
      return {};
    }
    case updateRowType.nonEmpty: {
      return action.payload.updateRow;
    }
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  tableData,
  modalControl,
  updateRowControl
});

export default rootReducer;
