export const tableDataType = {
  addItem: 'add item',
  editItem: 'edit item',
  deleteItem: 'delete item'
};

export function addAction(addRow) {
  return {
    type: tableDataType.addItem,
    payload: {
      addRow: addRow
    }
  };
}

export function editAction(index, editRow) {
  return {
    type: tableDataType.editItem,
    payload: {
      index: index,
      editRow: editRow
    }
  };
}

export function deleteAction(index) {
  return {
    type: tableDataType.deleteItem,
    payload: {
      index: index
    }
  };
}
