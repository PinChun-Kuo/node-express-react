import React from 'react';

module.exports = function (props) {
  const dataList = props.dataList;
  const tableHead = dataList[0].map((number) => <th className='center'>{number}</th>);
  const tableDatas = new Array;

  for (var i = 1; i < dataList.length; i++) {
    const tableData = props.dataList[i].map((number) => <td className='center'>{number}</td>);
    tableDatas.push(<tr>{tableData}</tr>);
  }

  return (
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
  );
}
