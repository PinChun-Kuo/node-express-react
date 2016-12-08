import should from 'should';
import * as tableAction from '../../public/javascripts/actions/tableAction';

const dataRow = {
  seq: 1,
  status: 'Open',
  category: 'category1',
  title: 'title1',
  owner: 'Owner1',
  priority: 'P1'
};

const seq = 1;

describe('public/javascripts/actions/tableAction.js Spec', () => {
  describe('Actions output', () => {
    it('Should return an object which type is add item when running addItemAction.', () => {
      should.exist(tableAction.addItemAction(dataRow));
      tableAction.addItemAction(dataRow).type.should.be.equal(tableAction.tableActionaType.addItem);
      tableAction.addItemAction(dataRow).payload.addRow.should.be.equal(dataRow);
    });

    it('Should return an object which type is edit item when running editItemAction.', () => {
      should.exist(tableAction.editItemAction(dataRow));
      tableAction.editItemAction(dataRow).type.should.be.equal(tableAction.tableActionaType.editItem);
      tableAction.editItemAction(dataRow).payload.editRow.should.be.equal(dataRow);
    });

    it('Should return an object which type is delete item when running deleteItemAction.', () => {
      should.exist(tableAction.deleteItemAction(dataRow));
      tableAction.deleteItemAction(seq).type.should.be.equal(tableAction.tableActionaType.deleteItem);
      tableAction.deleteItemAction(seq).payload.seq.should.be.equal(seq);
    });

    it('Should return an object which type is open pop modal when running openPopModal.', () => {
      should.exist(tableAction.openPopModal(dataRow));
      tableAction.openPopModal(dataRow).type.should.be.equal(tableAction.tableActionaType.openPopModal);
      tableAction.openPopModal(dataRow).payload.editRow.should.be.equal(dataRow);
    });

    it('Should return an object which type is close pop modal when running closePopModal.', () => {
      should.exist(tableAction.closePopModal());
      tableAction.closePopModal().type.should.be.equal(tableAction.tableActionaType.closePopModal);
    });
  });
});
