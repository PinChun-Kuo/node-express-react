import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, hashHistory } from 'react-router';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';
import App from './containers/app';
import AddModal from './containers/addModal';
import EditModal from './containers/editModal';

require('../css/style.scss');

const middleware = routerMiddleware(browserHistory);
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, middleware)
);

const history = syncHistoryWithStore(browserHistory, store);

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

console.log('App : ', App);
console.log('Modal : ', Modal);

ReactDOM.render(
  <Provider store={store}>
    <Router history={process.env.NODE_ENV === 'production' ? browserHistory : hashHistory}>
      <Route path='/' component={App} />
      <Route path='/addIssue' component={AddModal} />
      <Route path='/editIssue/:issueSeq' component={EditModal} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
