import React from 'react';
import { browserHistory, hashHistory } from 'react-router';

// check whether there is empty input
function checkInputEmptyOrNot(formFields) {
  for (let i = 0; i < formFields.length; i += 1) {
    if (formFields[i].type === 'text' && formFields[i].value === '') {
      return i;
    }
  }
  return -1;
}

export default class editModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleOwnerChange = this.handleOwnerChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      statusValue: this.props.updateIssue.status,
      categoryValue: this.props.updateIssue.category,
      titleValue: this.props.updateIssue.title,
      ownerValue: this.props.updateIssue.owner,
      priorityValue: this.props.updateIssue.priority
    };
  }

  componentWillMount() {
    if (this.props.seq !== 'undefined') {
      this.props.getIssue(this.props.seq);
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ statusValue: nextProps.updateIssue.status });
    this.setState({ categoryValue: nextProps.updateIssue.category });
    this.setState({ titleValue: nextProps.updateIssue.title });
    this.setState({ ownerValue: nextProps.updateIssue.owner });
    this.setState({ priorityValue: nextProps.updateIssue.priority });
  }

  handleStatusChange(e) {
    this.setState({ statusValue: e.target.value });
  }

  handleCategoryChange(e) {
    this.setState({ categoryValue: e.target.value });
  }

  handleTitleChange(e) {
    this.setState({ titleValue: e.target.value });
  }

  handleOwnerChange(e) {
    this.setState({ ownerValue: e.target.value });
  }

  handlePriorityChange(e) {
    this.setState({ priorityValue: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const EmptyIndex = checkInputEmptyOrNot(e.target);

    if (EmptyIndex > -1) {     // check input empty or not
      alert(e.target[EmptyIndex].getAttribute('data-field-name') + ' can not be empty.');
    } else {
      const newIssue = {
        seq: this.props.updateIssue.seq,
        status: this.status.trim(),
        category: this.category.trim(),
        title: this.title.trim(),
        owner: this.owner.trim(),
        priority: this.priority.trim(),
      };

      this.props.editIssueAction(newIssue);
      hashHistory.push('/');
    }
  }

  handleClose() {
    if (process.env.NODE_ENV === 'development') {
      hashHistory.push('/');
    } else {
      browserHistory.push('/');
    }
  }

  render() {
    return (
      <div className='modalBackground'>
        <div className='modalBox'>
          <h1>Edit Issues {' > ' + this.props.seq}<span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;* 為必填欄位</span></h1>
          <button className='closeBtn' onClick={this.handleClose}>Cancel</button>
          <form onSubmit={this.handleSubmit}>
            <div>
              &nbsp;Status : &nbsp;
              <input data-field-name='Status' type='text' ref={() => { this.status = this.state.statusValue; }} value={this.state.statusValue || ''} onChange={this.handleStatusChange} /><span> *</span>
            </div>
            <div>
              &nbsp;Category : &nbsp;
              <input data-field-name='Category' type='text' ref={() => { this.category = this.state.categoryValue; }} value={this.state.categoryValue || ''} onChange={this.handleCategoryChange} /><span> *</span>
            </div>
            <div>
              &nbsp;Title : &nbsp;
              <input data-field-name='Title' type='text' ref={() => { this.title = this.state.titleValue; }} value={this.state.titleValue || ''} onChange={this.handleTitleChange} /><span> *</span>
            </div>
            <div>
              &nbsp;Owner : &nbsp;
              <input data-field-name='Owner' type='text' ref={() => { this.owner = this.state.ownerValue; }} value={this.state.ownerValue || ''} onChange={this.handleOwnerChange} /><span> *</span>
            </div>
            <div>
              &nbsp;Priority : &nbsp;
              <input data-field-name='Priority' type='text' ref={() => { this.priority = this.state.priorityValue; }} value={this.state.priorityValue || ''} onChange={this.handlePriorityChange} /><span> *</span>
            </div>
            <input className='submitBtn' type='submit' value='submit' />
          </form>
        </div>
      </div>
    );
  }
}


editModal.propTypes = {
  updateIssue: React.PropTypes.shape({
    seq: React.PropTypes.number,
    status: React.PropTypes.string,
    category: React.PropTypes.string,
    title: React.PropTypes.string,
    owner: React.PropTypes.string,
    priority: React.PropTypes.string
  }),
  seq: React.PropTypes.number,
  getIssue: React.PropTypes.func,
  editIssueAction: React.PropTypes.func
};
