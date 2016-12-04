import React from 'react';
import ReactDOM from 'react-dom';
import dataList from './constant';
import Table from './table';

require('../stylesheets/style.scss');

ReactDOM.render(
  <Table dataList={dataList} />,
  document.getElementById('root')
);
