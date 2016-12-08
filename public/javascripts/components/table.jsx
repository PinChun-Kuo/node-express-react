import React from 'react';
import PopModal from './popModal';

export default class tableContent extends React.Component {
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

  editClick(editRow) {
    this.props.openPopModal(editRow);
  }

  deleteClick(seq) {
    alert('Are you sure to delete this item?');
    this.props.deleteItemAction(seq);
  }

  handleModalSubmit(item) {
    if (Object.keys(this.props.updateRow).length === 0) {     // add Item
      this.props.addItemAction(item);
    } else {     // edit Item
      this.props.editItemAction(item);
    }
  }

  handleModalClose() {
    this.props.closePopModal();
  }

  render() {
    const dataList = this.props.dataList;
    const tableHead = dataList.filter(item => item.seq === 'Seq');
    const tableHeadRow = Object.keys(tableHead[0]).map(number =>
      <th className={'center ' + number}>{tableHead[0][number]}</th>
    );

    const tableData = dataList.filter(item => item.seq !== 'Seq');
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
        <PopModal modalShow={this.props.modalShow} displayData={this.props.updateRow} onModalSubmit={this.handleModalSubmit} onModalClose={this.handleModalClose} />
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
  })).isRequired,
  modalShow: React.PropTypes.bool, // pop modal show or not
  updateRow: React.PropTypes.shape({
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
  addItemAction: React.PropTypes.func,
  editItemAction: React.PropTypes.func,
  deleteItemAction: React.PropTypes.func,
  openPopModal: React.PropTypes.func,
  closePopModal: React.PropTypes.func
};
