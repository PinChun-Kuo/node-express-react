import { tableActionaType } from '../actions/issueTableAction';

const initValue = {
  issues: [],
  errorMsg: ''
};

export default function(state = initValue, action) {
  switch (action.type) {
    case tableActionaType.getIssues: {
      return {
        issues: action.payload.issues,
        errorMsg: ''
      };
    }
    case tableActionaType.addIssue: {
      return {
        issues: [...state.issues, action.payload.addIssue],
        errorMsg: ''
      };
    }
    case tableActionaType.editIssue: {
      const newState = {};

      newState.issues = state.issues.map((issue) => {
        if (issue.seq === action.payload.editIssue.seq) {
          return action.payload.editIssue;
        }
        return issue;
      });
      newState.errorMsg = '';
      return newState;
    }
    case tableActionaType.deleteIssue: {
      const newState = {};
      newState.issues = state.issues.filter(issue => issue.seq !== action.payload.seq);
      newState.errorMsg = '';
      return newState;
    }
    case tableActionaType.actionFail: {
      return {
        issues: [...state.issues],
        errorMsg: action.payload.errorMsg
      };
    }
    default:
      return state;
  }
}
