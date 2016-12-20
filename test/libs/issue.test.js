var should = require('should');
var Sequelize = require('sequelize');
var issue = require('../../libs/issue');
// var issueTable = require('../../models/issueTable');

var addIssue = {
  status: 'Close',
  category: 'category6',
  title: 'title6',
  owner: 'owner6',
  priority: 'P6',
}

const editIssue = {
  seq: 1,
  status: 'Close',
  category: 'category111',
  title: 'title111',
  owner: 'Owner111',
  priority: 'P111'
};

const deleteIssue = {
  seq: 5
};

describe('lib/issue.js Spec', () => {
  describe('DB CRUD action', () => {
    before( function(done) {
      this.timeout(15000);
      // var sequelize = new Sequelize('issueTrackerTest', 'postgres', 12345678, {
      //   dialect: 'postgres',
      //   host: process.env.HOST,
      //   port: 5432,
      //   timezone: 'Asia/Taipei',
      //   define: {
      //     timestamps: true
      //   }
      // });
      //
      // sequelize.authenticate().then(function() {
      //   console.log('Connection has been established successfully.');
      // }).catch(function(error) {
      //   console.log('Unable to connect to the database:', error);
      // });
      //
      // const issueTable = sequelize.define('issue', {
      //   seq: {
      //     type: Sequelize.INTEGER,
      //     autoIncrement: true,
      //     primaryKey: true
      //   },
      //   status: {
      //     type: Sequelize.STRING,
      //     allowNull: false,
      //     validate: {
      //       notEmpty: true
      //     }
      //   },
      //   category: {
      //     type: Sequelize.STRING,
      //     allowNull: false,
      //     validate: {
      //       notEmpty: true
      //     }
      //   },
      //   title: {
      //     type: Sequelize.STRING,
      //     allowNull: false,
      //     validate: {
      //       notEmpty: true
      //     }
      //   },
      //   owner: {
      //     type: Sequelize.STRING,
      //     allowNull: false,
      //     validate: {
      //       notEmpty: true
      //     }
      //   },
      //   priority: {
      //     type: Sequelize.STRING,
      //     allowNull: false,
      //     validate: {
      //       notEmpty: true
      //     }
      //   }
      // }, {
      //   freezeTableName: true,
      //   paranoid: true
      // });

      var issueTable = require('../../models/issueTable');
      // creat table
      issueTable.sync({
        force: true
      }).then(function() {
        // insert fake data
        return issueTable.bulkCreate([
          { status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' },
          { status: 'Open', category: 'category2', title: 'title2', owner: 'Owner2', priority: 'P2' },
          { status: 'Close', category: 'category3', title: 'title3', owner: 'Owner3', priority: 'P3' },
          { status: 'Pending', category: 'category4', title: 'title4', owner: 'Owner4', priority: 'P4' },
          { status: 'Processing', category: 'category5', title: 'title5', owner: 'Owner5', priority: 'P5' }
        ]).then( function() {
          done();
        });
      });
    });

    it('Should fetch data from DB', (done) => {
      issue.getAllIssues( function(error, result) {
        console.log('\n\n --- getAllIssues');
        if(!error) {
          result.length.should.be.equal(5);
          done();
        } else {
          result.length.should.be.equal('There is no data.');
          done();
        }
      });
    });

    it('Should add data to DB', (done) => {
      issue.postIssue(addIssue, function(error, result) {
        console.log('\n\n --- postIssue');
        if(!error) {
          result.message.should.be.equal('Successfully insert an issue.');
          result.postIssue.status.should.be.equal(addIssue.status);
          result.postIssue.category.should.be.equal(addIssue.category);
          result.postIssue.title.should.be.equal(addIssue.title);
          result.postIssue.owner.should.be.equal(addIssue.owner);
          result.postIssue.priority.should.be.equal(addIssue.priority);
          done();
        }
      });
    });

    it('Should update data to DB', (done) => {
      issue.updateIssue(editIssue, function(error, result) {
        if(!error) {
          result.should.be.equal('Successfully update the issue.');
          done();
        } else {
          result.should.be.equal('Update the issue failed.');
          done();
        }
      });
    });

    it('Should delete data from DB', (done) => {
      issue.deleteIssue(deleteIssue, function(error, result) {
        if(!error) {
          result.should.be.equal('Successfully delete an issue.');
          done();
        } else {
          result.should.be.equal('Delete an issue failed.');
          done();
        }
      });
    });
  });
});
