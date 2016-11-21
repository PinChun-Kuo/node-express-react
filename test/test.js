import React from 'react';
import assert from 'assert';
import ReactTestUtils from 'react-addons-test-utils';
import Table_content from '../public/javascripts/table_content.js';
import test from './test_component'

// const datalist = [{
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
// }];

console.log('---Table_content--- : ', Table_content);
console.log('---test--- : ', test);


describe('Render data list', () => {
    it('has 6 columns', done => {
        // const renderer = ReactTestUtils.createRenderer();
        //
        // renderer.render(
        //     React.createElement(Component)
        // );
        //
        // const content = renderer.getRenderOutput();
        //
        // console.log("---content--- : ", content);
        //
        // assert.equal(6, content.props.children.length);
        done();
    });
});
