export const tableActionaType = {
  addItem: 'add item',
  editItem: 'edit item',
  deleteItem: 'delete item',
  openPopModal: 'open pop modal',
  closePopModal: 'close pop modal'
};

export function addItemAction(addRow) {
  return {
    type: tableActionaType.addItem,
    payload: {
      addRow: addRow
    }
  };
}

export function editItemAction(editRow) {
  return {
    type: tableActionaType.editItem,
    payload: {
      editRow: editRow
    }
  };
}

export function deleteItemAction(seq) {
  return {
    type: tableActionaType.deleteItem,
    payload: {
      seq: seq
    }
  };
}

export function openPopModal(editRow) {
  return {
    type: tableActionaType.openPopModal,
    payload: {
      editRow: editRow
    }
  };
}

export function closePopModal() {
  return {
    type: tableActionaType.closePopModal
  };
}
