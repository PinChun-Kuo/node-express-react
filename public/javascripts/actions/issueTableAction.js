export const tableActionaType = {
  getIssuesSuccess: 'fetch issues successfully',
  addIssue: 'add issue',
  editIssue: 'edit issue',
  deleteIssue: 'delete issue',
  actionFail: 'action fail',
  openPopModal: 'open pop modal',
  closePopModal: 'close pop modal'
};

export function getIssues() {
  return (dispatch) => {
    fetch('http://' + process.env.HOST + ':' + process.env.PORT + '/issue')
    .then(response => response.json())
    .then((json) => {
      if (json.status === 200) {
        // When everything is ok, dispatching success action.
        dispatch({
          type: tableActionaType.getIssuesSuccess,
          payload: {
            issues: json.result,
            successMsg: ''
          }
        });
      } else {
        dispatch({
          type: tableActionaType.actionFail,
          payload: {
            errorMsg: json.result
          }
        });
      }
    }).catch(() => {
      dispatch({
        type: tableActionaType.actionFail,
        payload: {
          errorMsg: 'Fail to fetch issues.'
        }
      });
    });
  };
}

export function addIssueAction(issue) {
  return (dispatch) => {
    fetch('http://' + process.env.HOST + ':' + process.env.PORT + '/issue', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: issue.status,
        category: issue.category,
        title: issue.title,
        owner: issue.owner,
        priority: issue.priority
      })
    })
    .then(response => response.json())
    .then((json) => {
      if (json.status === 200) {
        dispatch({
          type: tableActionaType.addIssue,
          payload: {
            addIssue: json.result.postIssue,
            successMsg: json.result.message
          }
        });
      } else {
        dispatch({
          type: tableActionaType.actionFail,
          payload: {
            errorMsg: json.result
          }
        });
      }
    }).catch(() => {
      dispatch({
        type: tableActionaType.actionFail,
        payload: {
          errorMsg: 'Fail to insert issues.'
        }
      });
    });
  };
}

export function editIssueAction(issue) {
  return (dispatch) => {
    fetch('http://' + process.env.HOST + ':' + process.env.PORT + '/issue/' + issue.seq, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        status: issue.status,
        category: issue.category,
        title: issue.title,
        owner: issue.owner,
        priority: issue.priority
      })
    })
    .then(response => response.json())
    .then((json) => {
      if (json.status === 200) {
        dispatch({
          type: tableActionaType.editIssue,
          payload: {
            editIssue: issue,
            successMsg: json.result
          }
        });
      } else {
        dispatch({
          type: tableActionaType.actionFail,
          payload: {
            errorMsg: json.result
          }
        });
      }
    }).catch(() => {
      dispatch({
        type: tableActionaType.actionFail,
        payload: {
          errorMsg: 'Fail to update issues.'
        }
      });
    });
  };
}

export function deleteIssueAction(seq) {
  return (dispatch) => {
    fetch('http://' + process.env.HOST + ':' + process.env.PORT + '/issue/' + seq, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then((json) => {
      if (json.status === 200) {
        dispatch({
          type: tableActionaType.deleteIssue,
          payload: {
            seq: seq,
            successMsg: json.result
          }
        });
      } else {
        dispatch({
          type: tableActionaType.actionFail,
          payload: {
            errorMsg: json.result
          }
        });
      }
    }).catch(() => {
      dispatch({
        type: tableActionaType.actionFail,
        payload: {
          errorMsg: 'Fail to delete issues.'
        }
      });
    });
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
