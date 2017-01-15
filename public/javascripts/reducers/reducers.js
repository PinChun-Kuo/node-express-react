import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import issueTableReducer from './issueTableReducer';
// import popModalReducer from './popModalReducer';
import updateIssueReducer from './updateIssueReducer';

const rootReducer = combineReducers({
  renderData: issueTableReducer,
  // modalShow: popModalReducer,
  updateIssue: updateIssueReducer,
  routing: routerReducer
});

export default rootReducer;
