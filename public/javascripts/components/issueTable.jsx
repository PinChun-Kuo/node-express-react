import React from 'react';
import PopModal from './popModal';

export default class issueTable extends React.Component {
  constructor(props) {
    super(props);
    this.addClick = this.addClick.bind(this);
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }

  addClick() {
    this.props.openPopModal(null);
  }

  editClick(editIssue) {
    this.props.openPopModal(editIssue);
  }

  deleteClick(seq) {
    alert('Are you sure to delete this issue?');
    this.props.deleteIssueAction(seq);
  }

  handleModalSubmit(issue) {
    if (Object.keys(this.props.updateIssue).length === 0) {     // add issues
      this.props.addIssueAction(issue);
    } else {     // edit issue
      this.props.editIssueAction(issue);
    }
  }

  handleModalClose() {
    this.props.closePopModal();
  }

  render() {
    const issues = this.props.issues;
    const tableHead = issues.filter(issue => issue.seq === 'Seq');
    const tableHeadRow = Object.keys(tableHead[0]).map(number =>
      <th className={'center ' + number}>{tableHead[0][number]}</th>
    );

    const tableData = issues.filter(issue => issue.seq !== 'Seq');
    const tableDataRows = tableData.map(number => (
      <tr>
        <td className='center seq'>{number.seq}</td>
        <td className='center status'>{number.status}</td>
        <td className='center category'>{number.category}</td>
        <td className='center title'>{number.title}</td>
        <td className='center owner'>{number.owner}</td>
        <td className='center priority'>{number.priority}</td>
        <td className='editBtn'><button onClick={() => this.editClick(number)}>Edit</button></td>
        <td className='deleteBtn'><button onClick={() => this.deleteClick(number.seq)}>Delete</button></td>
      </tr>
    ));

    return (
      <div>
        <button onClick={this.addClick}>Add</button>
        <PopModal modalShow={this.props.modalShow} displayData={this.props.updateIssue} onModalSubmit={this.handleModalSubmit} onModalClose={this.handleModalClose} />
        <table className='table table-bordered table-striped table-hover'>
          <thead className='thead-inverse'>
            <tr>
              {tableHeadRow}
            </tr>
          </thead>
          <tbody>
            {tableDataRows}
          </tbody>
        </table>
      </div>
    );
  }
}

issueTable.propTypes = {
  issues: React.PropTypes.arrayOf(React.PropTypes.shape({
    seq: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    status: React.PropTypes.string,
    category: React.PropTypes.string,
    title: React.PropTypes.string,
    owner: React.PropTypes.string,
    priority: React.PropTypes.string
  })).isRequired,
  modalShow: React.PropTypes.bool, // pop modal show or not
  updateIssue: React.PropTypes.shape({
    seq: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    status: React.PropTypes.string,
    category: React.PropTypes.string,
    title: React.PropTypes.string,
    owner: React.PropTypes.string,
    priority: React.PropTypes.string
  }),
  addIssueAction: React.PropTypes.func,
  editIssueAction: React.PropTypes.func,
  deleteIssueAction: React.PropTypes.func,
  openPopModal: React.PropTypes.func,
  closePopModal: React.PropTypes.func
};
