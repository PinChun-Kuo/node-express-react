var Sequelize = require('sequelize');
var sequelize = require('../models/connectDB');
var issueDB = require('../models/issueDB');
// var isAnyEmptyOrNull = require('../../common/isAnyEmptyOrNull');

function Get(callback) {
  issueDB.findAll().then( function(issues) {
    if (issues.length === 0) {
      callback(true, 'There is no data.');
    } else {
      callback(false, issues);
    }
  });
}

function Post(data, callback) {
  issueDB.create(data).then( function(issue) {
    callback(false, 'Successfully insert an issue.');
  });
}

function Put(data, callback) {
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

function Delete(data, callback) {
  issueDB.destroy({
    where: {
      seq: data.seq
    }
  }).then( function(issue) {
    if (issue.length === 1) {
      callback(false, 'Successfully delete an issue.');
    } else {
      callback(true, 'Delete an issue failed.');
    }
  });
}

module.exports = {
  Get: Get,
  Post: Post,
  Put: Put,
  Delete: Delete
};
