import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/reducers';
import App from './containers/app';
import Modal from './containers/modal';

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
    <Router history={history}>
      <Route path='/' component={App} />
      <Route path='/addIssue' component={Modal} />
      <Route path='/editIssue/:issueSeq' component={Modal} />
    </Router>
  </Provider>,
  document.getElementById('root')
);
