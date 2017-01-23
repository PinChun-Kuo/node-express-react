export const tableActionaType = {
  getIssues: 'fetch issues',
  getIssue: 'fetch special issue',
  addIssue: 'add issue',
  editIssue: 'edit issue',
  deleteIssue: 'delete issue',
  actionFail: 'action fail'
};

export function getIssues() {
  return (dispatch) => {
    fetch('http://' + process.env.HOST + ':' + process.env.PORT + '/issue')
    .then(response => response.json())
    .then((json) => {
      if (json.status === 200) {
        // When everything is ok, dispatching success action.
        dispatch({
          type: tableActionaType.getIssues,
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

export function getIssue(seq) {
  return (dispatch) => {
    fetch('http://' + process.env.HOST + ':' + process.env.PORT + '/issue/' + seq)
    .then(response => response.json())
    .then((json) => {
      if (json.status === 200) {
        // When everything is ok, dispatching success action.
        dispatch({
          type: tableActionaType.getIssue,
          payload: {
            issue: json.result,
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
          errorMsg: 'Fail to fetch special issues.'
        }
      });
    });
  };
}

export function getIssue(seq) {
  return (dispatch) => {
    fetch('http://' + process.env.HOST + ':' + process.env.PORT + '/issue/' + seq)
    .then(response => response.json())
    .then((json) => {
      if (json.status === 200) {
        // When everything is ok, dispatching success action.
        console.log('json.result : ', json.result);
        dispatch({
          type: tableActionaType.getIssue,
          payload: {
            issue: json.result
          }
        });
      } else {
        console.log('json.result : ', json.result);
        dispatch({
          type: tableActionaType.actionFail,
          payload: {
            errorMsg: json.result
          }
        });
      }
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
