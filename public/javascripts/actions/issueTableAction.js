export const tableActionaType = {
  addIssue: 'add issue',
  editIssue: 'edit issue',
  deleteIssue: 'delete issue',
  openPopModal: 'open pop modal',
  closePopModal: 'close pop modal'
};

export function addIssueAction(issue) {
  return {
    type: tableActionaType.addIssue,
    payload: {
      issue: issue
    }
  };
}

export function editIssueAction(issue) {
  return {
    type: tableActionaType.editIssue,
    payload: {
      issue: issue
    }
  };
}

export function deleteIssueAction(seq) {
  return {
    type: tableActionaType.deleteIssue,
    payload: {
      seq: seq
    }
  };
}

export function openPopModal(issue) {
  return {
    type: tableActionaType.openPopModal,
    payload: {
      issue: issue
    }
  };
}

export function closePopModal() {
  return {
    type: tableActionaType.closePopModal
  };
}
