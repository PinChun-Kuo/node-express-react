import { tableActionaType } from '../actions/issueTableAction';
import { issues } from '../data/constant';

export default function(state = issues, action) {
  switch (action.type) {
    case tableActionaType.addIssue: {
      const newState = Object.assign([], state);
      const length = newState.length;
      const insertIssueKey = Number(newState[length - 1].seq) + 1;     // calculate key value for new issue
      action.payload.issue.seq = insertIssueKey;
      newState.push(action.payload.issue);
      return newState;
    }
    case tableActionaType.editIssue: {
      const newState = state.map((issue) => {
        if (issue.seq === action.payload.issue.seq) {
          return action.payload.issue;
        }
        return issue;
      });

      return newState;
    }
    case tableActionaType.deleteIssue: {
      const newState = state.filter(issue => issue.seq !== action.payload.seq);
      return newState;
    }
    default:
      return state;
  }
}
