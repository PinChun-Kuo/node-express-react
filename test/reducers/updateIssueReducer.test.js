import should from 'should';
import updateIssueReducer from '../../public/javascripts/reducers/updateIssueReducer';
import { tableActionaType } from '../../public/javascripts/actions/issueTableAction';

const initState = {
  issue: {},
  successMsg: '',
  errorMsg: ''
};

const issue = {
  seq: 1,
  status: 'Open',
  category: 'category1',
  title: 'title1',
  owner: 'Owner1',
  priority: 'P1'
};

const oldState = {
  issue: issue,
  successMsg: '',
  errorMsg: ''
};

const errorMsg = 'Fail to fetch special data.';

describe('public/javascripts/reducers/updateIssueReducer.js Spec', () => {
  describe('updateIssue reducer output', () => {
    it('should handle get special issue.', () => {
      const newState = updateIssueReducer(initState, {
        type: tableActionaType.getIssue,
        payload: {
          issue: issue,
          successMsg: '',
          errorMsg: ''
        }
      });

      should.exist(newState);
      newState.issue.seq.should.be.equal(issue.seq);
      newState.issue.status.should.be.equal(issue.status);
      newState.issue.category.should.be.equal(issue.category);
      newState.issue.title.should.be.equal(issue.title);
      newState.issue.owner.should.be.equal(issue.owner);
      newState.issue.priority.should.be.equal(issue.priority);
      newState.successMsg.should.be.equal('');
      newState.errorMsg.should.be.equal('');
    });

    it('should handle action fail.', () => {
      const newState = updateIssueReducer(oldState, {
        type: tableActionaType.actionFail,
        payload: {
          errorMsg: errorMsg
        }
      });

      should.exist(newState);
      Object.keys(newState.issue).length.should.be.equal(0);
      newState.successMsg.should.be.equal('');
      newState.errorMsg.should.be.equal(errorMsg);
    });

    it('should handle default.', () => {
      const newState = updateIssueReducer(oldState, {});
      should.exist(newState);
      Object.keys(newState.issue).length.should.be.equal(0);
      newState.successMsg.should.be.equal('');
      newState.errorMsg.should.be.equal('');
    });
  });
});
