import React from 'react';
import PopModal from './popModal';

function findIndex(seq, dataList) {
  for (let i = 0; i < Object.keys(dataList).length; i += 1) {
    if (seq === dataList[i].seq) {
      return i;
    }
  }
  return -1;
}

export default class tableContent extends React.Component {
  constructor(props) {
    super(props);
    this.addClick = this.addClick.bind(this);
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.handleModalSubmit = this.handleModalSubmit.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.state = {
      dataList: this.props.dataList,
      show: false, // pop modal show or not
      updateRow: {}
    };
    this.editIndex = -1;
  }

  addClick() {
    this.setState({
      show: true,
      updateRow: []
    });
  }

  editClick(seq) {
    this.editIndex = findIndex(seq, this.state.dataList);
    this.setState({
      show: true,
      updateRow: this.state.dataList[this.editIndex]
    });
  }

  deleteClick(seq) {
    const index = findIndex(seq, this.state.dataList);
    alert('Are you sure to delete this item?');
    this.state.dataList.splice(index, 1);
    this.setState({ dataList: this.state.dataList });
  }

  handleModalSubmit(item) {
    const newItem = item;
    if (this.state.updateRow.length === 0) {     // add Item
      const length = this.state.dataList.length;
      const insertItemKey = Number(this.state.dataList[length - 1].seq) + 1;     // calculate key value for new item
      newItem.seq = insertItemKey;
      this.state.dataList.push(newItem);
    } else {     // edit Item
      newItem.seq = this.state.dataList[this.editIndex].seq;     // add seq value
      this.state.dataList[this.editIndex] = newItem;
    }

    this.setState({
      dataList: this.state.dataList,
      show: false,
      updateRow: []
    });
  }

  handleModalClose() {
    this.setState({
      show: false,
      updateRow: []
    });
  }

  render() {
    const dataList = this.state.dataList;
    const copyDataList = Object.assign([], dataList);
    const tableHead = Object.keys(copyDataList[0]).map(number =>
      <th className={'center ' + number}>{copyDataList[0][number]}</th>
    );

    delete copyDataList[0];
    const tableDatas = copyDataList.map(number => (
      <tr>
        <td className='center seq'>{number.seq}</td>
        <td className='center status'>{number.status}</td>
        <td className='center category'>{number.category}</td>
        <td className='center title'>{number.title}</td>
        <td className='center owner'>{number.owner}</td>
        <td className='center priority'>{number.priority}</td>
        <td className='editBtn'><button onClick={() => this.editClick(number.seq)}>Edit</button></td>
        <td className='deleteBtn'><button onClick={() => this.deleteClick(number.seq)}>Delete</button></td>
      </tr>
    ));

    return (
      <div>
        <button onClick={this.addClick}>Add</button>
        <PopModal show={this.state.show} displayData={this.state.updateRow} onModalSubmit={this.handleModalSubmit} onModalClose={this.handleModalClose} />
        <table className='table table-bordered table-striped table-hover'>
          <thead className='thead-inverse'>
            <tr>
              {tableHead}
            </tr>
          </thead>
          <tbody>
            {tableDatas}
          </tbody>
        </table>
      </div>
    );
  }
}

tableContent.propTypes = {
  dataList: React.PropTypes.arrayOf(React.PropTypes.shape({
    seq: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.number
    ]),
    status: React.PropTypes.string,
    category: React.PropTypes.string,
    title: React.PropTypes.string,
    owner: React.PropTypes.string,
    priority: React.PropTypes.string
  })).isRequired
};
