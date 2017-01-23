import { tableActionaType } from '../actions/issueTableAction';

const initValue = {
  issue: {},
  successMsg: '',
  errorMsg: ''
};

export default function(state = initValue, action) {
  switch (action.type) {
    case tableActionaType.getIssue: {
      return {
        issue: action.payload.issue,
        successMsg: '',
        errorMsg: ''
      };
    }
    case tableActionaType.actionFail: {
      return {
        issue: {},
        successMsg: '',
        errorMsg: action.payload.errorMsg
      };
    }
    default:
      return initValue;
  }
}
