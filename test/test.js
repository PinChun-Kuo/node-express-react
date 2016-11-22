import React from 'react';
import ReactDOM from 'react-dom';
import assert from 'assert';
import should from 'should';
import ReactTestUtils from 'react-addons-test-utils';
import TableContent from '../public/javascripts/tableContent';
import wrapper from './wrapper'

const dataList = [
    ['Seq', 'Status', 'Category', 'Title', 'Owner', 'Priority'],
    [1, 'Open', 'category1', 'title1', 'Allen', 'P1'],
    [2, 'Open', 'category2', 'title2', 'Allen', 'P2'],
    [3, 'Close', 'category3', 'title3', 'Allen', 'P3']
];

var instance, dom;
var Wrapper = wrapper();

describe('Render data list', () => {
    beforeEach(function() {
        instance = ReactTestUtils.renderIntoDocument(
          <Wrapper>
            <TableContent dataList = {dataList} />
          </Wrapper>
        );

        dom = ReactDOM.findDOMNode(instance);

        // console.log('\n\n---instance--- : ', instance);
        // console.log('\n\n---dom1--- : ', dom);
        // console.log('\n\n---dom2--- : ', dom.childNodes[0].tagName);
        // console.log('\n\n---dom3--- : ', dom.childNodes[0].childNodes[1]);
        // console.log('\n\n---dom4--- : ', dom.childNodes[0].childNodes[0].tagName);
        // console.log('\n\n---dom5--- : ', dom.childNodes[0].childNodes[1].tagName);
        // console.log('\n\n---dom6--- : ', dom.childNodes[0].childNodes[1].childNodes[2]);
    });

    it('Should render table DOM', done => {
        const table = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'table');
        should.exist(table);
        // assert.equal(dom.childNodes[0].tagName, 'TABLE');
        done();
    });

    it('Should have 24 items', done => {
        console.log('\n\n---isCompositeComponent--- : ', ReactTestUtils.isCompositeComponent(instance));
        const length = ReactTestUtils.scryRenderedDOMComponentsWithClass(instance, 'center').length;
        assert.equal(length, 24);
        done();
    });

    it('Should have 6 table headers.', done => {
        const THNumber = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'th').length;
        assert.equal(THNumber, 6);
        done();
    });

    it('Compare content of table header.', done => {
        for (var i = 0; i < dataList[0].length; i++) {
            let temp1 = dom.childNodes[0].childNodes[0].childNodes[0].childNodes[i].childNodes[0].textContent;
            let temp2 = dataList[0][i];
            // console.log('temp1 : ', temp1);
            // console.log('temp2 : ', temp2);
            // console.log('type of temp1 : ', typeof temp1);
            // console.log('type of temp2 : ', typeof temp2);
            // console.log("--------compare : ", temp1 == temp2);
            assert.equal(temp1, temp2);
        }
        done();
    });

    it('Should have 18 table data.', done => {
        const TDNumber = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'td').length;
        assert.equal(TDNumber, 18);
        done();
    });

    it('Compare content of table data.', done => {
        for (var i = 1; i < dataList.length; i++) {
            for (var j = 0; j < dataList[i].length; j++) {
                let temp1 = dom.childNodes[0].childNodes[1].childNodes[i-1].childNodes[j].childNodes[0].textContent;
                let temp2 = dataList[i][j];
                assert.equal(temp1, temp2);
            }
        }
        done();
    });
});
