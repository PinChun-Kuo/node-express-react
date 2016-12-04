import React from 'react';
import ReactDOM from 'react-dom';
import dataList from './constant';
import Table from './table';
import style from '../stylesheets/style.scss';

ReactDOM.render(
  <Table dataList={dataList} />,
  document.getElementById('root')
);
