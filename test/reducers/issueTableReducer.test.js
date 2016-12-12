import should from 'should';
import issueTableReducer from '../../public/javascripts/reducers/issueTableReducer';
import { tableActionaType } from '../../public/javascripts/actions/issueTableAction';

const issues = [
  { seq: 'Seq', status: 'Status', category: 'Category', title: 'Title', owner: 'Owner', priority: 'Priority' },
  { seq: 1, status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' },
  { seq: 2, status: 'Open', category: 'category2', title: 'title2', owner: 'Owner2', priority: 'P2' },
  { seq: 3, status: 'Close', category: 'category3', title: 'title3', owner: 'Owner3', priority: 'P3' }
];

const addIssue = {
  seq: 4,
  status: 'Close',
  category: 'category4',
  title: 'title4',
  owner: 'Owner4',
  priority: 'P4'
};

const editIssue = {
  seq: 1,
  status: 'Close',
  category: 'category111',
  title: 'title111',
  owner: 'Owner111',
  priority: 'P111'
};

const seq = 3;

describe('public/javascripts/reducers/issueTableReducer.js Spec', () => {
  describe('tableData reducer output', () => {
    it('should handle add issue.', () => {
      const newIssues = issueTableReducer(issues, {
        type: tableActionaType.addIssue,
        payload: {
          issue: addIssue
        }
      });

      should.exist(newIssues);
      newIssues.length.should.be.equal(issues.length + 1);
      newIssues[newIssues.length - 1].seq.should.be.equal(addIssue.seq);
      newIssues[newIssues.length - 1].status.should.be.equal(addIssue.status);
      newIssues[newIssues.length - 1].category.should.be.equal(addIssue.category);
      newIssues[newIssues.length - 1].title.should.be.equal(addIssue.title);
      newIssues[newIssues.length - 1].owner.should.be.equal(addIssue.owner);
      newIssues[newIssues.length - 1].priority.should.be.equal(addIssue.priority);
    });

    it('should handle edit issue.', () => {
      const newIssues = issueTableReducer(issues, {
        type: tableActionaType.editIssue,
        payload: {
          issue: editIssue
        }
      });

      should.exist(newIssues);
      newIssues.length.should.be.equal(issues.length);

      let index;
      for (let i = 0; i < newIssues.length; i += 1) {
        if (newIssues[i].seq === editIssue.seq) {
          index = i;
        }
      }

      should.exist(index);
      newIssues[index].seq.should.be.equal(editIssue.seq);
      newIssues[index].status.should.be.equal(editIssue.status);
      newIssues[index].category.should.be.equal(editIssue.category);
      newIssues[index].title.should.be.equal(editIssue.title);
      newIssues[index].owner.should.be.equal(editIssue.owner);
      newIssues[index].priority.should.be.equal(editIssue.priority);
    });

    it('should handle delete issue.', () => {
      should.exist(issueTableReducer(issues, {
        type: tableActionaType.deleteIssue,
        payload: {
          seq: seq
        }
      }));

      issueTableReducer(issues, {
        type: tableActionaType.deleteIssue,
        payload: {
          seq: seq
        }
      }).length.should.be.equal(issues.length - 1);
    });

    it('should return initial state.', () => {
      should.exist(issueTableReducer(issues, {}));
      issueTableReducer(issues, {}).length.should.be.equal(issues.length);
    });
  });
});
