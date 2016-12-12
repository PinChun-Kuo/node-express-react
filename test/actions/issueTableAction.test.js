import should from 'should';
import * as issueTableAction from '../../public/javascripts/actions/issueTableAction';

const issue = {
  seq: 1,
  status: 'Open',
  category: 'category1',
  title: 'title1',
  owner: 'Owner1',
  priority: 'P1'
};

const seq = 1;

describe('public/javascripts/actions/issueTableAction.js Spec', () => {
  describe('Actions output', () => {
    it('Should handle add issue.', () => {
      should.exist(issueTableAction.addIssueAction(issue));
      issueTableAction.addIssueAction(issue).type.should.be.equal(issueTableAction.tableActionaType.addIssue);
      issueTableAction.addIssueAction(issue).payload.issue.should.be.equal(issue);
    });

    it('Should handle edit issue.', () => {
      should.exist(issueTableAction.editIssueAction(issue));
      issueTableAction.editIssueAction(issue).type.should.be.equal(issueTableAction.tableActionaType.editIssue);
      issueTableAction.editIssueAction(issue).payload.issue.should.be.equal(issue);
    });

    it('Should handle delete issue.', () => {
      should.exist(issueTableAction.deleteIssueAction(issue));
      issueTableAction.deleteIssueAction(seq).type.should.be.equal(issueTableAction.tableActionaType.deleteIssue);
      issueTableAction.deleteIssueAction(seq).payload.seq.should.be.equal(seq);
    });

    it('Should handle open pop modal.', () => {
      should.exist(issueTableAction.openPopModal(issue));
      issueTableAction.openPopModal(issue).type.should.be.equal(issueTableAction.tableActionaType.openPopModal);
      issueTableAction.openPopModal(issue).payload.issue.should.be.equal(issue);
    });

    it('Should handle close pop modal.', () => {
      should.exist(issueTableAction.closePopModal());
      issueTableAction.closePopModal().type.should.be.equal(issueTableAction.tableActionaType.closePopModal);
    });
  });
});
