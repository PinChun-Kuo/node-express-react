import React from 'react';
import { Link } from 'react-router';

export default class issueTable extends React.Component {
  constructor(props) {
    super(props);
    this.deleteClick = this.deleteClick.bind(this);
  }

  componentWillMount() {
    this.props.renderData.successMsg = '';
    this.props.renderData.errorMsg = '';
  }

  componentDidMount() {
    this.props.getIssues();
  }

  deleteClick(seq) {
    alert('Are you sure to delete this issue?');
    this.props.deleteIssueAction(seq);
  }

  render() {
    const issues = this.props.renderData.issues;
    let empty = false;

    if (issues.length === 0) {
      empty = true;
    }

    if (this.props.renderData.successMsg !== '') {
      alert(this.props.renderData.successMsg);
    }

    if (this.props.renderData.errorMsg !== '') {
      alert(this.props.renderData.errorMsg);
    }

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

    return (
      <div>
        <Link to='/addIssue'><button>Add</button></Link>
        {empty ? <h2>There are no data.</h2> :
        <table className='table table-bordered table-hover'>
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
        }
      </div>
    );
  }
}

issueTable.propTypes = {
  renderData: React.PropTypes.shape({
    issues: React.PropTypes.arrayOf(React.PropTypes.shape({
      seq: React.PropTypes.number,
      status: React.PropTypes.string,
      category: React.PropTypes.string,
      title: React.PropTypes.string,
      owner: React.PropTypes.string,
      priority: React.PropTypes.string
    })),
    successMsg: React.PropTypes.string,
    errorMsg: React.PropTypes.string
  }).isRequired,
  getIssues: React.PropTypes.func,
  deleteIssueAction: React.PropTypes.func
};
