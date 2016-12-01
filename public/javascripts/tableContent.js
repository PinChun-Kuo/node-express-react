import React from 'react';
import PopModal from './popModal';

export default class extends React.Component {
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

  editClick(index) {
    this.editIndex = Number(index);
    this.setState({
      show: true,
      updateRow: this.state.dataList[index]
    });
  }

  deleteClick(index) {
    alert('Are you sure to delete this item?');
    this.state.dataList.splice(index, 1);
    this.setState({ dataList: this.state.dataList });
  }

  handleModalSubmit(newItem) {
    if (this.state.updateRow.length === 0) {     // add Item
      const length = this.state.dataList.length;
      const insertItemKey = Number(this.state.dataList[length - 1].seq) + 1;     // calculate key value for new item
      newItem.seq = insertItemKey;
      this.state.dataList[insertItemKey] = newItem;
    } else {     // edit Item
      newItem.seq = this.editIndex;     // add seq value
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
    const tableHead = Object.keys(copyDataList[0]).map((number) =>
      <th className={"center " + number}>{copyDataList[0][number]}</th>
    );

    delete copyDataList[0];
    const tableDatas = copyDataList.map((number) =>
      <tr>
        <td className="center seq">{number.seq}</td>
        <td className="center status">{number.status}</td>
        <td className="center category">{number.category}</td>
        <td className="center title">{number.title}</td>
        <td className="center owner">{number.owner}</td>
        <td className="center priority">{number.priority}</td>
        <td className="editBtn" onClick={() => this.editClick(number.seq)}><button>Edit</button></td>
        <td className="deleteBtn" onClick={() => this.deleteClick(number.seq)}><button>Delete</button></td>
      </tr>
    );

    return (
      <div>
        <button onClick={this.addClick}>Add</button>
        <PopModal show={this.state.show} displayData={this.state.updateRow} onModalSubmit={this.handleModalSubmit} onModalClose={this.handleModalClose} />
        <table className="table table-bordered table-striped table-hover">
          <thead className="thead-inverse">
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
