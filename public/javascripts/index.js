import React from 'react';
import ReactDOM from 'react-dom';

import TableContent from './tableContent';

const dataList = [
    ['Seq', 'Status', 'Category', 'Title', 'Owner', 'Priority'],
    [1, 'Open', 'category1', 'title1', 'Allen', 'P1'],
    [2, 'Open', 'category2', 'title2', 'Allen', 'P2'],
    [3, 'Close', 'category3', 'title3', 'Allen', 'P3'],
    [4, 'Pending', 'category4', 'title4', 'Allen', 'P4'],
    [5, 'Processing', 'category5', 'title5', 'Allen', 'P5']
];

ReactDOM.render(
  <TableContent dataList = {dataList} />,
  document.getElementById('root')
);
