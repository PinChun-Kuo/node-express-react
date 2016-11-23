import React from 'react';

module.exports = function (props) {
  const dataList = props.dataList;
  const tableHead = dataList[0].map((number) => <th className='center'>{number}</th>);
  const tableDatas = dataList.map((number) => {
      return (
          <tr key={number[0]}>
              <td className='center'>{number[0]}</td>
              <td className='center'>{number[1]}</td>
              <td className='center'>{number[2]}</td>
              <td className='center'>{number[3]}</td>
              <td className='center'>{number[4]}</td>
              <td className='center'>{number[5]}</td>
          </tr>
      );
  });

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
