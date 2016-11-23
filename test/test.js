import React from 'react';
import ReactDOM from 'react-dom';
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

describe('Render table', () => {
    beforeEach(function() {
        instance = ReactTestUtils.renderIntoDocument(
            <Wrapper>
                <TableContent dataList = {dataList} />
            </Wrapper>
        );

        // dom = ReactDOM.findDOMNode(instance);
    });

    it('Should render table DOM correctly.', () => {
        const table = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'table');
        (table.className.indexOf('table table-bordered table-striped table-hover') > -1).should.be.ok;
        should.exist(table);
    });

    it('Should render thead DOM correctly.', () => {
        const thead = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'thead');
        (thead.className.indexOf('thead-inverse') > -1).should.be.ok;
        should.exist(thead);
    });

    it('Should render tbody DOM correctly.', () => {
        const tbody = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'tbody');
        should.exist(tbody);
    });

    it('Should render table correctly.', () => {
        for (var i = 0; i < dataList[0].length; i++) {
            const th = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'th');
            (th[i].className.indexOf('center') > -1).should.be.ok;
            th[i].textContent.should.be.equal(dataList[0][i]);
        }

        for (var i = 1; i < dataList.length; i++) {
            for (var j = 0; j < dataList[i].length; j++) {
                const td = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'td');
                for (var variable in td) {
                    (td[variable].className.indexOf('center') > -1).should.be.ok;
                    (td[variable].textContent == dataList[i][j]).should.be.ok;
                }
            }
        }
    });
});
