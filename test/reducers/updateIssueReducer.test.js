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
      should.exist(updateIssueReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          issue: null
        }
      }));

      Object.keys(updateIssueReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          issue: null
        }
      })).length.should.be.equal(0);
    });

    it('should handle open pop modal when editing data.', () => {
      should.exist(updateIssueReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          issue: issue
        }
      }));

      updateIssueReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          issue: issue
        }
      }).should.be.equal(issue);
    });

    // it('should return initial state.', () => {
    //   should.exist(updateIssueReducer(undefined, {}));
    //   updateIssueReducer(undefined, {}).should.be.equal(false);
    // });
  });
});
