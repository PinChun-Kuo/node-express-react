var Sequelize = require('sequelize');
var sequelize = require('../models/connectDB');
var issueDB = require('../models/issueDB');

function getAllIssues(callback) {
  issueDB.findAll({
    order: 'seq',
    raw: true
  }).then( function(issues) {
    if (issues.length === 0) {
      callback(true, 'There is no data.');
    } else {
      callback(false, issues);
    }
  });
}

function postIssue(data, callback) {
  issueDB.create(data).then( function(issue) {
    const postIssue = {
      seq: issue.dataValues.seq,
      status: issue.dataValues.status,
      category: issue.dataValues.category,
      title: issue.dataValues.title,
      owner: issue.dataValues.owner,
      priority: issue.dataValues.priority,
    }
    const result = {
      message: 'Successfully insert an issue.',
      postIssue: postIssue
    };
    callback(false, result);
  });
}

function updateIssue(data, callback) {
  issueDB.update({
    status: data.status,
    category: data.category,
    title: data.title,
    owner: data.owner,
    priority: data.priority
  }, {
      where: {
        seq: data.seq
    }
  }).then( function(issue) {
    if (issue.length === 1) {
      callback(false, 'Successfully update the issue.');
    } else {
      callback(true, 'Update the issue failed.');
    }
  });
}

function deleteIssue(data, callback) {
  issueDB.destroy({
    where: {
      seq: data.seq
    }
  }).then( function(issue) {
    if (issue === 1) {
      callback(false, 'Successfully delete an issue.');
    } else {
      callback(true, 'Delete an issue failed.');
    }
  });
}

module.exports = {
  getAllIssues: getAllIssues,
  postIssue: postIssue,
  updateIssue: updateIssue,
  deleteIssue: deleteIssue
};
