import should from 'should';
import updateIssueReducer from '../../public/javascripts/reducers/updateIssueReducer';
import { tableActionaType } from '../../public/javascripts/actions/issueTableAction';

const issue = {
  seq: 1,
  status: 'Open',
  category: 'category1',
  title: 'title1',
  owner: 'Owner1',
  priority: 'P1'
};

describe('public/javascripts/reducers/updateIssueReducer.js Spec', () => {
  describe('updateIssue reducer output', () => {
    it('should handle open pop modal when adding data.', () => {
      const newState = updateIssueReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          issue: null
        }
      });

      should.exist(newState);
      Object.keys(newState).length.should.be.equal(0);
    });

    it('should handle open pop modal when editing data.', () => {
      const newState = updateIssueReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          issue: issue
        }
      });

      should.exist(newState);
      newState.should.be.equal(issue);
    });

    it('should handle default.', () => {
      const newState = updateIssueReducer(undefined, {});

      should.exist(newState);
      Object.keys(newState).length.should.be.equal(0);
    });
  });
});
