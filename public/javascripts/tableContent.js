import React from 'react';
import Modal from 'react-modal';

class TableContent extends React.Component  {
  constructor(props) {
    super(props);
    this.addClick = this.addClick.bind(this);
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.statusChange = this.statusChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.titleChange = this.titleChange.bind(this);
    this.ownerChange = this.ownerChange.bind(this);
    this.priorityChange = this.priorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      open: false, // pop modal open or not
      dataList: this.props.dataList,
      action: 'add', // add or edit
      modalTitle: ' ', // pop modal title
      editIndex: 0, // index of edited data
      statusValue: '',
      categoryValue: '',
      titleValue: '',
      ownerValue: '',
      priorityValue: ''
    };
  }

  addClick () {
    this.setState({
      open: true,
      action: 'add',
      modalTitle: 'Add Item',
    });
  }

  editClick(index) {
    this.setState({
      open: true,
      action: 'edit',
      modalTitle: 'Edit Item',
      editIndex: index,
      statusValue: this.state.dataList[index][1],
      categoryValue: this.state.dataList[index][2],
      titleValue: this.state.dataList[index][3],
      ownerValue: this.state.dataList[index][4],
      priorityValue: this.state.dataList[index][5]
    });
  }

  deleteClick(index) {
    alert('Are you sure to delete this item?');
    delete this.state.dataList[index];
    this.setState({dataList: this.state.dataList});
  }

  closeModal (e) {
    this.setState({
      open: false,
      statusValue: '',
      categoryValue: '',
      titleValue: '',
      ownerValue: '',
      priorityValue: ''
    });
  }

  statusChange(e) {
    this.setState({statusValue: e.target.value});
  }

  categoryChange(e) {
    this.setState({categoryValue: e.target.value});
  }

  titleChange(e) {
    this.setState({titleValue: e.target.value});
  }

  ownerChange(e) {
    this.setState({ownerValue: e.target.value});
  }

  priorityChange(e) {
    this.setState({priorityValue: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    let newItem = [], inputEmpty = false;

    for (var i = 0; i < e.target.length - 1; i++) {
      if(e.target[i].value === '') {
        inputEmpty = true;
      }
      newItem.push(e.target[i].value);
    }

    if(inputEmpty) {     // check input empty or not
      alert('欄位不得為空')
    } else {
      if(this.state.action == 'add') {     // add Item
        newItem.splice(0, 0, this.state.dataList.length);
        this.state.dataList.push(newItem);
      } else {     // edit Item
        this.state.dataList[this.state.editIndex][1] = newItem[0];
        this.state.dataList[this.state.editIndex][2] = newItem[1];
        this.state.dataList[this.state.editIndex][3] = newItem[2];
        this.state.dataList[this.state.editIndex][4] = newItem[3];
        this.state.dataList[this.state.editIndex][5] = newItem[4];
      }

      this.setState({
        open: false,
        dataList: this.state.dataList,
        statusValue: '',
        categoryValue: '',
        titleValue: '',
        ownerValue: '',
        priorityValue: ''
      });
    }
  }

  render() {
    const dataList = this.state.dataList;
    const newDataList = dataList.slice(0);
    const tableHead = newDataList[0].map((number) => <th className={number + ' center'}>{number}</th>);
    delete newDataList[0];
    const tableDatas = newDataList.map((number) =>
      <tr key={number[0]}>
        <td className='center Seq'>{number[0]}</td>
        <td className='center Status'>{number[1]}</td>
        <td className='center Category'>{number[2]}</td>
        <td className='center Title'>{number[3]}</td>
        <td className='center Owner'>{number[4]}</td>
        <td className='center Priority'>{number[5]}</td>
        <td className='editBtn' onClick={() => this.editClick(number[0])}><button>Edit</button></td>
        <td className='deleteBtn' onClick={() => this.deleteClick(number[0])}><button>Delete</button></td>
      </tr>
    );

    return (
      <div>
        <button onClick={this.addClick}>Add</button>
        <PopModal target={this}/>
        <table id="table" className='table table-bordered table-striped table-hover'>
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

function PopModal(props) {
  let target = props.target;

  // console.log("target: ", target);

  return(
    <Modal isOpen={target.state.open}>
      <h1>{target.state.modalTitle}</h1>
      <button id='closeBtn' onClick={target.closeModal}>X</button>
      <form onSubmit={target.handleSubmit}>
        <div>
          Status : &nbsp;
          <input type='text' value={target.state.statusValue} onChange={target.statusChange} /><br/>
        </div>
        <div>
          Category : &nbsp;
          <input type='text' value={target.state.categoryValue} onChange={target.categoryChange} /><br/>
        </div>
        <div>
          Title : &nbsp;
          <input type='text' value={target.state.titleValue} onChange={target.titleChange} /><br/>
        </div>
        <div>
          Owner : &nbsp;
          <input type='text' value={target.state.ownerValue} onChange={target.ownerChange} /><br/>
        </div>
        <div>
          Priority : &nbsp;
          <input type='text' value={target.state.priorityValue} onChange={target.priorityChange} /><br/>
        </div>
        <input id='submitBtn' type="submit" />
      </form>
    </Modal>
  );
}

module.exports = {
  TableContent: TableContent,
  PopModal: PopModal
}
