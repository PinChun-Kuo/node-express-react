import should from 'should';
import issueTableReducer from '../../public/javascripts/reducers/issueTableReducer';
import { tableActionaType } from '../../public/javascripts/actions/issueTableAction';

const initState = {
  issues: [],
  errorMsg: ''
};

const issues = [
  { seq: 1, status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' },
  { seq: 2, status: 'Open', category: 'category2', title: 'title2', owner: 'Owner2', priority: 'P2' },
  { seq: 3, status: 'Close', category: 'category3', title: 'title3', owner: 'Owner3', priority: 'P3' }
];

const oldState = {
  issues: issues,
  errorMsg: ''
};

const addIssue = {
  seq: 4,
  status: 'Close',
  category: 'category4',
  title: 'title4',
  owner: 'Owner4',
  priority: 'P4'
};

const editIssue = {
  seq: 1,
  status: 'Close',
  category: 'category111',
  title: 'title111',
  owner: 'Owner111',
  priority: 'P111'
};

const deleteSeq = 3;
const errorMsg = 'There is no data.';

describe('public/javascripts/reducers/issueTableReducer.js Spec', () => {
  describe('tableData reducer output', () => {
    it('should handle get issues.', () => {
      const newState = issueTableReducer(initState, {
        type: tableActionaType.getIssuesSuccess,
        payload: {
          issues: issues
        }
      });

      should.exist(newState);
      newState.issues.length.should.be.equal(issues.length);
      for (let i = 0; i < newState.issues.length; i += 1) {
        newState.issues[i].seq.should.be.equal(issues[i].seq);
        newState.issues[i].status.should.be.equal(issues[i].status);
        newState.issues[i].category.should.be.equal(issues[i].category);
        newState.issues[i].title.should.be.equal(issues[i].title);
        newState.issues[i].owner.should.be.equal(issues[i].owner);
        newState.issues[i].priority.should.be.equal(issues[i].priority);
      }
      newState.errorMsg.should.be.equal('');
    });

    it('should handle add issue.', () => {
      const newState = issueTableReducer(oldState, {
        type: tableActionaType.addIssue,
        payload: {
          addIssue: addIssue
        }
      });
      const addIssueIndex = newState.issues.length - 1;

      should.exist(newState);
      newState.issues.length.should.be.equal(oldState.issues.length + 1);
      newState.issues[addIssueIndex].seq.should.be.equal(addIssue.seq);
      newState.issues[addIssueIndex].status.should.be.equal(addIssue.status);
      newState.issues[addIssueIndex].category.should.be.equal(addIssue.category);
      newState.issues[addIssueIndex].title.should.be.equal(addIssue.title);
      newState.issues[addIssueIndex].owner.should.be.equal(addIssue.owner);
      newState.issues[addIssueIndex].priority.should.be.equal(addIssue.priority);
      newState.errorMsg.should.be.equal('');
    });

    it('should handle edit issue.', () => {
      const newState = issueTableReducer(oldState, {
        type: tableActionaType.editIssue,
        payload: {
          editIssue: editIssue
        }
      });

      should.exist(newState);
      newState.issues.length.should.be.equal(oldState.issues.length);

      let index;
      for (let i = 0; i < newState.issues.length; i += 1) {
        if (newState.issues[i].seq === editIssue.seq) {
          index = i;
          break;
        }
      }

      newState.issues[index].seq.should.be.equal(editIssue.seq);
      newState.issues[index].status.should.be.equal(editIssue.status);
      newState.issues[index].category.should.be.equal(editIssue.category);
      newState.issues[index].title.should.be.equal(editIssue.title);
      newState.issues[index].owner.should.be.equal(editIssue.owner);
      newState.issues[index].priority.should.be.equal(editIssue.priority);
      newState.errorMsg.should.be.equal('');
    });

    it('should handle delete issue.', () => {
      const newState = issueTableReducer(oldState, {
        type: tableActionaType.deleteIssue,
        payload: {
          seq: deleteSeq
        }
      });

      should.exist(newState);
      newState.issues.length.should.be.equal(oldState.issues.length - 1);
      newState.errorMsg.should.be.equal('');
    });

    it('should handle action fail.', () => {
      const newState = issueTableReducer(oldState, {
        type: tableActionaType.actionFail,
        payload: {
          errorMsg: errorMsg
        }
      });

      should.exist(newState);
      newState.issues.length.should.be.equal(oldState.issues.length);
      newState.errorMsg.should.be.equal(errorMsg);
    });

    it('should handle default.', () => {
      const newState = issueTableReducer(oldState, {});
      should.exist(newState);
      newState.issues.length.should.be.equal(oldState.issues.length);
      newState.errorMsg.should.be.equal(oldState.errorMsg);
    });
  });
});
