import should from 'should';
import popModalReducer from '../../public/javascripts/reducers/popModalReducer';
import { tableActionaType } from '../../public/javascripts/actions/tableAction';

const dataRow = {
  seq: 1,
  status: 'Open',
  category: 'category1',
  title: 'title1',
  owner: 'Owner1',
  priority: 'P1'
};

describe('public/javascripts/reducers/popModalReducer.js Spec', () => {
  describe('PopModal reducer output', () => {
    it('should handle add item.', () => {
      should.exist(popModalReducer(undefined, {
        type: tableActionaType.addItem,
        payload: {
          addRow: dataRow
        }
      }));

      popModalReducer(undefined, {
        type: tableActionaType.addItem,
        payload: {
          addRow: dataRow
        }
      }).should.be.equal(false);
    });

    it('should handle edit item.', () => {
      should.exist(popModalReducer(undefined, {
        type: tableActionaType.editItem,
        payload: {
          editRow: dataRow
        }
      }));

      popModalReducer(undefined, {
        type: tableActionaType.editItem,
        payload: {
          editRow: dataRow
        }
      }).should.be.equal(false);
    });

    it('should handle open modal.', () => {
      should.exist(popModalReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          editRow: dataRow
        }
      }));

      popModalReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          editRow: dataRow
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
