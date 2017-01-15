import React from 'react';
import { Link, IndexLink } from 'react-router';
// import PopModal from './popModal';

export default class issueTable extends React.Component {
  constructor(props) {
    super(props);
    // this.addClick = this.addClick.bind(this);
    // this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    // this.handleModalSubmit = this.handleModalSubmit.bind(this);
    // this.handleModalClose = this.handleModalClose.bind(this);
  }

  componentWillMount() {
    this.props.getIssues();
  }

  // addClick() {
  //   this.props.openPopModal(null);
  // }
  //
  // editClick(editIssue) {
  //   this.props.openPopModal(editIssue);
  // }

  deleteClick(seq) {
    alert('Are you sure to delete this issue?');
    this.props.deleteIssueAction(seq);
  }

  // handleModalSubmit(issue) {
  //   if (Object.keys(this.props.updateIssue).length === 0) {     // add issues
  //     this.props.addIssueAction(issue);
  //   } else {     // edit issue
  //     this.props.editIssueAction(issue);
  //   }
  // }
  //
  // handleModalClose() {
  //   this.props.closePopModal();
  // }

  render() {
    const issues = this.props.renderData.issues;
    const tableDataRows = issues.map(number => (
      <tr key={number.seq}>
        <td className='center seq'>{number.seq}</td>
        <td className='center status'>{number.status}</td>
        <td className='center category'>{number.category}</td>
        <td className='center title'>{number.title}</td>
        <td className='center owner'>{number.owner}</td>
        <td className='center priority'>{number.priority}</td>
        <td className='editBtn'><Link to={'/editIssue/' + number.seq}><button>Edit</button></Link></td>
        <td className='deleteBtn'><button onClick={() => this.deleteClick(number.seq)}>Delete</button></td>
      </tr>
    ));

    if (this.props.renderData.errorMsg !== '') {
      alert(this.props.renderData.errorMsg);
    }

    return (
      <div>
        <Link to='/addIssue'><button>Add</button></Link>
        <table className='table table-bordered table-striped table-hover'>
          <thead className='thead-inverse'>
            <tr>
              <th className='center seq'>Seq</th>
              <th className='center status'>Status</th>
              <th className='center category'>Category</th>
              <th className='center title'>Title</th>
              <th className='center owner'>Owner</th>
              <th className='center priority'>Priority</th>
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
  renderData: React.PropTypes.shape({
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
    })),
    errorMsg: React.PropTypes.string
  }).isRequired,
  // modalShow: React.PropTypes.bool, // pop modal show or not
  // updateIssue: React.PropTypes.shape({
  //   seq: React.PropTypes.oneOfType([
  //     React.PropTypes.string,
  //     React.PropTypes.number
  //   ]),
  //   status: React.PropTypes.string,
  //   category: React.PropTypes.string,
  //   title: React.PropTypes.string,
  //   owner: React.PropTypes.string,
  //   priority: React.PropTypes.string
  // }),
  getIssues: React.PropTypes.func,
  // addIssueAction: React.PropTypes.func,
  // editIssueAction: React.PropTypes.func,
  deleteIssueAction: React.PropTypes.func,
  // openPopModal: React.PropTypes.func,
  // closePopModal: React.PropTypes.func
};
