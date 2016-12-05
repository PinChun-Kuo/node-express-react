import React from 'react';

// check whether there is empty input
function checkInputEmptyOrNot(itemObj) {
  const itemObjKeys = Object.keys(itemObj);
  for (let i = 0; i < itemObjKeys.length; i += 1) {
    if (itemObj[itemObjKeys[i]] === '') {
      return true;
    }
  }
  return false;
}

export default class popModal extends React.Component {
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
      statusValue: this.props.displayData.status,
      categoryValue: this.props.displayData.category,
      titleValue: this.props.displayData.title,
      ownerValue: this.props.displayData.owner,
      priorityValue: this.props.displayData.priority
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      statusValue: nextProps.displayData.status,
      categoryValue: nextProps.displayData.category,
      titleValue: nextProps.displayData.title,
      ownerValue: nextProps.displayData.owner,
      priorityValue: nextProps.displayData.priority
    });
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
    const newItem = {
      status: this.status === undefined ? '' : this.status.trim(),
      category: this.category === undefined ? '' : this.category.trim(),
      title: this.title === undefined ? '' : this.title.trim(),
      owner: this.owner === undefined ? '' : this.owner.trim(),
      priority: this.priority === undefined ? '' : this.priority.trim(),
    };

    const inputEmpty = checkInputEmptyOrNot(newItem);

    if (inputEmpty) {     // check input empty or not
      alert('Field can not be empty.');
    } else {
      this.props.onModalSubmit(newItem);
    }
  }

  handleClose() {
    this.props.onModalClose();
  }

  render() {
    if (this.props.show) {
      return (
        <div className='modalBackground'>
          <div className='modalBox'>
            <h1>{Object.keys(this.props.displayData).length > 0 ? 'Edit Item > ' + this.props.displayData.seq : 'Add Item'}<span> *為必填欄位</span></h1>
            <button className='closeBtn' onClick={this.handleClose}>X</button>
            <form onSubmit={this.handleSubmit}>
              <div>
                &nbsp;Status : &nbsp;
                <input type='text' ref={() => { this.status = this.state.statusValue; }} value={this.state.statusValue || ''} onChange={this.handleStatusChange} /><span> *</span>
              </div>
              <div>
                &nbsp;Category : &nbsp;
                <input type='text' ref={() => { this.category = this.state.categoryValue; }} value={this.state.categoryValue || ''} onChange={this.handleCategoryChange} /><span> *</span>
              </div>
              <div>
                &nbsp;Title : &nbsp;
                <input type='text' ref={() => { this.title = this.state.titleValue; }} value={this.state.titleValue || ''} onChange={this.handleTitleChange} /><span> *</span>
              </div>
              <div>
                &nbsp;Owner : &nbsp;
                <input type='text' ref={() => { this.owner = this.state.ownerValue; }} value={this.state.ownerValue || ''} onChange={this.handleOwnerChange} /><span> *</span>
              </div>
              <div>
                &nbsp;Priority : &nbsp;
                <input type='text' ref={() => { this.priority = this.state.priorityValue; }} value={this.state.priorityValue || ''} onChange={this.handlePriorityChange} /><span> *</span>
              </div>
              <input className='submitBtn' type='submit' value='submit' />
            </form>
          </div>
        </div>
      );
    }
    return null;
  }
}


popModal.propTypes = {
  displayData: React.PropTypes.shape({
    seq: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number,
    ]),
    status: React.PropTypes.string,
    category: React.PropTypes.string,
    title: React.PropTypes.string,
    owner: React.PropTypes.string,
    priority: React.PropTypes.string
  }).isRequired,
  show: React.PropTypes.bool.isRequired,
  onModalSubmit: React.PropTypes.func,
  onModalClose: React.PropTypes.func
};
