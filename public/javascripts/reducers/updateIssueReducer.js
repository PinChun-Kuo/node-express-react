import { tableActionaType } from '../actions/issueTableAction';

const initValue = {
  issue: {},
  errorMsg: ''
};

export default function(state = initValue, action) {
  switch (action.type) {
    case tableActionaType.getIssue: {
      console.log('action.payload.issue : ', action.payload.issue);
      return {
        issue: action.payload.issue,
        errorMsg: ''
      };
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
