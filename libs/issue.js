import issueTable from '../models/issueTable';

require('../models/connectDB');

function getAllIssues(callback) {
  issueTable.findAll({
    order: 'seq',
    raw: true
  }).then((issues) => {
    callback(false, issues);
  }).catch(() => {
    callback(true, 'Fail to fetch issues.');
  });
}

function postIssue(data, callback) {
  issueTable.create(data).then((issue) => {
    const postIssueData = {
      seq: issue.dataValues.seq,
      status: issue.dataValues.status,
      category: issue.dataValues.category,
      title: issue.dataValues.title,
      owner: issue.dataValues.owner,
      priority: issue.dataValues.priority,
    };

    const result = {
      message: 'Successfully insert an issue.',
      postIssue: postIssueData
    };
    callback(false, result);
  }).catch(() => {
    callback(true, 'Fail to insert issue.');
  });
}

function updateIssue(data, callback) {
  issueTable.update({
    status: data.status,
    category: data.category,
    title: data.title,
    owner: data.owner,
    priority: data.priority
  }, {
    where: {
      seq: data.seq
    }
  }).then(() => {
    callback(false, 'Successfully update the issue.');
  }).catch(() => {
    callback(true, 'Fail to update issue.');
  });
}

function deleteIssue(data, callback) {
  issueTable.destroy({
    where: {
      seq: data.seq
    }
  }).then(() => {
    callback(false, 'Successfully delete an issue.');
  }).catch(() => {
    callback(true, 'Fail to delete issue.');
  });
}

module.exports = {
  getAllIssues: getAllIssues,
  postIssue: postIssue,
  updateIssue: updateIssue,
  deleteIssue: deleteIssue
};
