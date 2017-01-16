import should from 'should';
import popModalReducer from '../../public/javascripts/reducers/popModalReducer';
import { tableActionaType } from '../../public/javascripts/actions/issueTableAction';

const issue = {
  seq: 1,
  status: 'Open',
  category: 'category1',
  title: 'title1',
  owner: 'Owner1',
  priority: 'P1'
};

describe('public/javascripts/reducers/popModalReducer.js Spec', () => {
  describe('PopModal reducer output', () => {
    it('should handle add issue.', () => {
      const newState = popModalReducer(undefined, {
        type: tableActionaType.addIssue,
        payload: {
          issue: issue
        }
      });

      should.exist(newState);
      newState.should.be.equal(false);
    });

    it('should handle edit issue.', () => {
      const newState = popModalReducer(undefined, {
        type: tableActionaType.editIssue,
        payload: {
          issue: issue
        }
      });

      should.exist(newState);
      newState.should.be.equal(false);
    });

    it('should handle open modal.', () => {
      const newState = popModalReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          issue: issue
        }
      });

      should.exist(newState);
      newState.should.be.equal(true);
    });

    it('should handle close modal.', () => {
      const newState = popModalReducer(undefined, {
        type: tableActionaType.closePopModal
      });

      should.exist(newState);
      newState.should.be.equal(false);
    });

    it('should handle default.', () => {
      const newState = popModalReducer(undefined, {});

      should.exist(popModalReducer(undefined, {}));
      newState.should.be.equal(false);
    });
  });
});
