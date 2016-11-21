import React from 'react';
import ReactDOM from 'react-dom';

import Table_content from './table_content';

const datalist = [
    ['Seq', 'Status', 'Category', 'Title', 'Owner', 'Priority'],
    [1, 'Open', 'category1', 'title1', 'Allen', 'P1'],
    [2, 'Open', 'category2', 'title2', 'Allen', 'P2'],
    [3, 'Close', 'category3', 'title3', 'Allen', 'P3'],
    [4, 'Pending', 'category4', 'title4', 'Allen', 'P4'],
    [5, 'Processing', 'category5', 'title5', 'Allen', 'P5']
];

// const datalist = [{
//     sequence: 'sequence',
//     status: 'status',
//     category: 'category',
//     title: 'title',
//     owner: 'owner',
//     priority: 'priority'
// },{
//     sequence: 1,
//     status: 'Open',
//     category: 'category1',
//     title: 'title1',
//     owner: 'Allen',
//     priority: 'P1'
// }, {
//     sequence: 2,
//     status: 'Open',
//     category: 'category2',
//     title: 'title2',
//     owner: 'Allen',
//     priority: 'P2'
// }, {
//     sequence: 3,
//     status: 'Close',
//     category: 'category3',
//     title: 'title3',
//     owner: 'Allen',
//     priority: 'P3'
// }, {
//     sequence: 4,
//     status: 'Pending',
//     category: 'category4',
//     title: 'title4',
//     owner: 'Allen',
//     priority: 'P4'
// }, {
//     sequence: 5,
//     status: 'Processing',
//     category: 'category5',
//     title: 'title5',
//     owner: 'Allen',
//     priority: 'P5'
// }];

ReactDOM.render(
  <Table_content datalist = {datalist} />,
  document.getElementById('root')
);
