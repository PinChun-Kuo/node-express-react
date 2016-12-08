import should from 'should';
import tableDataReducer from '../../public/javascripts/reducers/tableDataReducer';
import { tableActionaType } from '../../public/javascripts/actions/tableAction';

const dataList = [
  { seq: 'Seq', status: 'Status', category: 'Category', title: 'Title', owner: 'Owner', priority: 'Priority' },
  { seq: 1, status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' },
  { seq: 2, status: 'Open', category: 'category2', title: 'title2', owner: 'Owner2', priority: 'P2' },
  { seq: 3, status: 'Close', category: 'category3', title: 'title3', owner: 'Owner3', priority: 'P3' }
];

const addRow = {
  seq: 4,
  status: 'Close',
  category: 'category4',
  title: 'title4',
  owner: 'Owner4',
  priority: 'P4'
};

const editRow = {
  seq: 1,
  status: 'Close',
  category: 'category111',
  title: 'title111',
  owner: 'Owner111',
  priority: 'P111'
};

const seq = 3;

describe('public/javascripts/reducers/tableDataReducer.js Spec', () => {
  describe('tableData reducer output', () => {
    it('should handle add item.', () => {
      const newDataList = tableDataReducer(dataList, {
        type: tableActionaType.addItem,
        payload: {
          addRow: addRow
        }
      });

      should.exist(newDataList);
      newDataList.length.should.be.equal(dataList.length + 1);
      newDataList[newDataList.length - 1].seq.should.be.equal(addRow.seq);
      newDataList[newDataList.length - 1].status.should.be.equal(addRow.status);
      newDataList[newDataList.length - 1].category.should.be.equal(addRow.category);
      newDataList[newDataList.length - 1].title.should.be.equal(addRow.title);
      newDataList[newDataList.length - 1].owner.should.be.equal(addRow.owner);
      newDataList[newDataList.length - 1].priority.should.be.equal(addRow.priority);
    });

    it('should handle edit item.', () => {
      const newDataList = tableDataReducer(dataList, {
        type: tableActionaType.editItem,
        payload: {
          editRow: editRow
        }
      });

      should.exist(newDataList);
      newDataList.length.should.be.equal(dataList.length);

      let index;
      for (let i = 0; i < newDataList.length; i += 1) {
        if (newDataList[i].seq === editRow.seq) {
          index = i;
        }
      }

      should.exist(index);
      newDataList[index].seq.should.be.equal(editRow.seq);
      newDataList[index].status.should.be.equal(editRow.status);
      newDataList[index].category.should.be.equal(editRow.category);
      newDataList[index].title.should.be.equal(editRow.title);
      newDataList[index].owner.should.be.equal(editRow.owner);
      newDataList[index].priority.should.be.equal(editRow.priority);
    });

    it('should handle delete item.', () => {
      should.exist(tableDataReducer(dataList, {
        type: tableActionaType.deleteItem,
        payload: {
          seq: seq
        }
      }));

      tableDataReducer(dataList, {
        type: tableActionaType.deleteItem,
        payload: {
          seq: seq
        }
      }).length.should.be.equal(dataList.length - 1);
    });

    it('should return initial state.', () => {
      should.exist(tableDataReducer(dataList, {}));
      tableDataReducer(dataList, {}).length.should.be.equal(dataList.length);
    });
  });
});
