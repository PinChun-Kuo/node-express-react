import React from 'react';

// check whether there is empty input
function checkInputEmptyOrNot(itemObj) {
  for (const key in itemObj) {
    if (itemObj[key] === '') {
      return true;
    }
  }
  return false;
}

export default class extends React.Component {
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
      statusValue: props.displayData.status,
      categoryValue: props.displayData.category,
      titleValue: props.displayData.title,
      ownerValue: props.displayData.owner,
      priorityValue: props.displayData.priority
    };
  }

  // propTypes: {
  //   displayData: React.PropTypes.array.isRequired,
  //   show: React.PropTypes.bool.isRequired,
  //   onModalSubmit: React.PropTypes.func.isRequired,
  //   onModalClose: React.PropTypes.func.isRequired
  // };

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
      status: this.refs.status.value.trim(),
      category: this.refs.category.value.trim(),
      title: this.refs.title.value.trim(),
      owner: this.refs.owner.value.trim(),
      priority: this.refs.priority.value.trim()
    };

    const inputEmpty = checkInputEmptyOrNot(newItem);

    if (inputEmpty) {     // check input empty or not
      alert('欄位不得為空');
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
        <div className="modalBackground">
          <div className="modalBox">
            <h1>{this.props.displayData.length > 0 ? 'Edit Item > ' + this.props.displayData[0] : 'Add Item'}</h1>
            <button className="closeBtn" onClick={this.handleClose}>X</button>
            <form onSubmit={this.handleSubmit}>
              <div>
                &nbsp;Status : &nbsp;
                <input type="text" ref="status" value={this.state.statusValue || ''} onChange={this.handleStatusChange} />
              </div>
              <div>
                &nbsp;Category : &nbsp;
                <input type="text" ref="category" value={this.state.categoryValue || ''} onChange={this.handleCategoryChange} />
              </div>
              <div>
                &nbsp;Title : &nbsp;
                <input type="text" ref="title" value={this.state.titleValue || ''} onChange={this.handleTitleChange} />
              </div>
              <div>
                &nbsp;Owner : &nbsp;
                <input type="text" ref="owner" value={this.state.ownerValue || ''} onChange={this.handleOwnerChange} />
              </div>
              <div>
                &nbsp;Priority : &nbsp;
                <input type="text" ref="priority" value={this.state.priorityValue || ''} onChange={this.handlePriorityChange} />
              </div>
              <input className="submitBtn" type="submit" value="submit" />
            </form>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
};
