import should from 'should';
// import Sequelize from 'sequelize';
import issue from '../../libs/issue';
import issueTable from '../../models/issueTable';

const addIssue = {
  status: 'Processing',
  category: 'category4',
  title: 'title4',
  owner: 'owner4',
  priority: 'P4',
};

const editIssue = {
  seq: 1,
  status: 'Processing',
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
    before(function(done) {
      // insert data to table
      issueTable.sync({
        force: true
      }).then(function() {
        // insert fake data
        return issueTable.bulkCreate([
          { status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' },
          { status: 'Close', category: 'category2', title: 'title2', owner: 'Owner2', priority: 'P2' },
          { status: 'Pending', category: 'category3', title: 'title3', owner: 'Owner3', priority: 'P3' }
        ]).then(function() {
          done();
        }).catch(function(error) {
          console.log('\n error is : ', error);
        });
      }).catch(function(error) {
        console.log('\n error is : ', error);
      });
    });

    it('Should fetch data from DB', (done) => {
      issue.getIssues(function(error, result) {
        if (!error) {
          result.length.should.be.equal(3);
          done();
        } else {
          result.should.be.equal('Fail to fetch issues.');
          done();
        }
      });
    });

    it('Should fetch special data from DB', (done) => {
      issue.getIssue(editIssue, function(error, result) {
        if (!error) {
          result.seq.should.be.equal(editIssue.seq);
          result.status.should.be.equal(editIssue.status);
          result.category.should.be.equal(editIssue.category);
          result.title.should.be.equal(editIssue.title);
          result.owner.should.be.equal(editIssue.owner);
          result.priority.should.be.equal(editIssue.priority);
          done();
        } else {
          result.should.be.equal('Fail to fetch special issue.');
          done();
        }
      });
    });

    it('Should add data to DB', (done) => {
      issue.postIssue(addIssue, function(error, result) {
        if (!error) {
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
        if (!error) {
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
        if (!error) {
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
