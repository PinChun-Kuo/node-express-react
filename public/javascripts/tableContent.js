import React from 'react';

class TableContent extends React.Component  {
  constructor(props) {
    super(props);
    this.addClick = this.addClick.bind(this);
    this.editClick = this.editClick.bind(this);
    this.deleteClick = this.deleteClick.bind(this);
  }

  addClick() {

  }

  editClick(index) {
    console.log("index : ", index);
  }

  deleteClick(index) {
    console.log("index : ", index);
  }

  render() {
    const dataList = this.props.dataList;
    const tableHead = dataList[0].map((number) => <th className='center'>{number}</th>);
    delete dataList[0];
    const tableDatas = dataList.map((number) =>
      <tr key={number[0]}>
        <td className='center'>{number[0]}</td>
        <td className='center'>{number[1]}</td>
        <td className='center'>{number[2]}</td>
        <td className='center'>{number[3]}</td>
        <td className='center'>{number[4]}</td>
        <td className='center'>{number[5]}</td>
        <td className='editBtn' onClick={() => this.editClick(number[0])}><button>Edit</button></td>
        <td className='deleteBtn' onClick={() => this.deleteClick(number[0])}><button>Delete</button></td>
      </tr>
    );

    console.log("tableHead ", tableHead);
    console.log("tableDatas ", tableDatas);

    return (
      <div>
        <button onClick={this.addClick}>Add</button>
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

module.exports = {
  TableContent: TableContent
}
