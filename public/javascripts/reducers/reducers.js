import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import issueTableReducer from './issueTableReducer';
import updateIssueReducer from './updateIssueReducer';

const rootReducer = combineReducers({
  renderData: issueTableReducer,
  updateIssue: updateIssueReducer,
});

export default rootReducer;
