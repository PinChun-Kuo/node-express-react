import { tableActionaType } from '../actions/issueTableAction';

const initValue = {
  issues: [],
  errorMsg: ''
};

export default function(state = initValue, action) {
  switch (action.type) {
    case tableActionaType.getIssuesSuccess: {
      const newState = Object.assign({}, state);
      newState.issues = action.payload.issues;
      newState.errorMsg = '';
      return newState;
    }
    case tableActionaType.addIssue: {
      const newState = Object.assign({}, state);
      newState.issues.push(action.payload.addIssue);
      newState.errorMsg = '';
      return newState;
    }
    case tableActionaType.editIssue: {
      const newState = Object.assign({}, state);
      newState.issues = newState.issues.map((issue) => {
        if (issue.seq === action.payload.editIssue.seq) {
          return action.payload.editIssue;
        }
        return issue;
      });
      newState.errorMsg = '';
      return newState;
    }
    case tableActionaType.deleteIssue: {
      const newState = Object.assign({}, state);
      newState.issues = newState.issues.filter(issue => issue.seq !== action.payload.seq);
      newState.errorMsg = '';
      return newState;
    }
    case tableActionaType.actionFail: {
      const newState = Object.assign({}, state);
      newState.errorMsg = action.payload.errorMsg;
      return newState;
    }
    default:
      return state;
  }
}
