import React from 'react';
import ReactDOM from 'react-dom';
import { dataList, modalShow, updateRow } from './data/tableData';
import Table from './components/table';
// redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/reducers';

require('../css/style.scss');

const store = createStore(rootReducer);


// test code
console.log('store : ', store);
console.log('Initial state:', store.getState());
import { deleteAction } from './actions/tableDataAction';
import { openAction } from './actions/popModalAction';

console.log('deleteAction : ', deleteAction);
store.dispatch(deleteAction(1));
store.dispatch(openAction());
console.log('after state:', store.getState());
// test code


ReactDOM.render(
  <Provider store={store}>
    <Table dataList={dataList} modalShow={modalShow} updateRow={updateRow} />
  </Provider>,
  document.getElementById('root')
);
