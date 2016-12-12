import { combineReducers } from 'redux';
import issueTableReducer from './issueTableReducer';
import popModalReducer from './popModalReducer';
import updateIssueReducer from './updateIssueReducer';

const rootReducer = combineReducers({
  issues: issueTableReducer,
  modalShow: popModalReducer,
  updateIssue: updateIssueReducer
});

export default rootReducer;
