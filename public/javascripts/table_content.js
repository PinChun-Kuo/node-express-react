import React from 'react';

module.exports = function (props) {
  const datalist = props.datalist;
  const table_head = datalist[0].map((number) => <th className='center'>{number}</th>);
  const table_datas = new Array;

  for (var i = 1; i < datalist.length; i++) {
    const table_data = props.datalist[i].map((number) => <td className='center'>{number}</td>);
    table_datas.push(<tr>{table_data}</tr>);
  }

  return (
    <div>
      <table className='table table-bordered table-striped table-hover'>
        <thead className='thead-inverse'>
          <tr>
            {table_head}
          </tr>
        </thead>
        <tbody>
          {table_datas}
        </tbody>
      </table>
    </div>
  );
}
