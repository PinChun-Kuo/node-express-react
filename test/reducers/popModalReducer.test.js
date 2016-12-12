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
      should.exist(popModalReducer(undefined, {
        type: tableActionaType.addIssue,
        payload: {
          issue: issue
        }
      }));

      popModalReducer(undefined, {
        type: tableActionaType.addIssue,
        payload: {
          issue: issue
        }
      }).should.be.equal(false);
    });

    it('should handle edit issue.', () => {
      should.exist(popModalReducer(undefined, {
        type: tableActionaType.editIssue,
        payload: {
          issue: issue
        }
      }));

      popModalReducer(undefined, {
        type: tableActionaType.editIssue,
        payload: {
          issue: issue
        }
      }).should.be.equal(false);
    });

    it('should handle open modal.', () => {
      should.exist(popModalReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          issue: issue
        }
      }));

      popModalReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          issue: issue
        }
      }).should.be.equal(true);
    });

    it('should handle close modal.', () => {
      should.exist(popModalReducer(undefined, {
        type: tableActionaType.closePopModal
      }));

      popModalReducer(undefined, {
        type: tableActionaType.closePopModal
      }).should.be.equal(false);
    });

    it('should return initial state.', () => {
      should.exist(popModalReducer(undefined, {}));
      popModalReducer(undefined, {}).should.be.equal(false);
    });
  });
});
