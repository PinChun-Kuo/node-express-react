import { combineReducers } from 'redux';
import tableDataReducer from './tableDataReducer';
import popModalReducer from './popModalReducer';
import updateRowReducer from './updateRowReducer';

const rootReducer = combineReducers({
  dataList: tableDataReducer,
  modalShow: popModalReducer,
  updateRow: updateRowReducer
});

export default rootReducer;
