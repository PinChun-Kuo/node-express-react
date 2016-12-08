import should from 'should';
import updateRowReducer from '../../public/javascripts/reducers/updateRowReducer';
import { tableActionaType } from '../../public/javascripts/actions/tableAction';

const dataRow = {
  seq: 1,
  status: 'Open',
  category: 'category1',
  title: 'title1',
  owner: 'Owner1',
  priority: 'P1'
};

describe('public/javascripts/reducers/updateRowReducer.js Spec', () => {
  describe('updateRow reducer output', () => {
    it('should handle open pop modal when adding data.', () => {
      should.exist(updateRowReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          editRow: null
        }
      }));

      Object.keys(updateRowReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          editRow: null
        }
      })).length.should.be.equal(0);
    });

    it('should handle open pop modal when editing data.', () => {
      should.exist(updateRowReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          editRow: dataRow
        }
      }));

      updateRowReducer(undefined, {
        type: tableActionaType.openPopModal,
        payload: {
          editRow: dataRow
        }
      }).should.be.equal(dataRow);
    });

    // it('should return initial state.', () => {
    //   should.exist(updateRowReducer(undefined, {}));
    //   updateRowReducer(undefined, {}).should.be.equal(false);
    // });
  });
});
