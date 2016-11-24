import React from 'react';
import ReactDOM from 'react-dom';
import should from 'should';
import ReactTestUtils from 'react-addons-test-utils';
import TableContent from '../public/javascripts/tableContent';
import wrapper from './wrapper'

const dataList = [
  ['Seq', 'Status', 'Category', 'Title', 'Owner', 'Priority'],
  [1, 'Open', 'category1', 'title1', 'Allen', 'P1', 'Edit', 'Delete'],
  [2, 'Open', 'category2', 'title2', 'Allen', 'P2', 'Edit', 'Delete'],
  [3, 'Close', 'category3', 'title3', 'Allen', 'P3', 'Edit', 'Delete']
];

var instance, dom;
var Wrapper = wrapper();

describe('Render table', () => {
  beforeEach(function() {
    instance = ReactTestUtils.renderIntoDocument(
      <Wrapper>
          <TableContent.TableContent dataList = {dataList} />
      </Wrapper>
    );

    // console.log('\n\n----- instance : ', instance);

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
    const th = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'th');
    for (var i = 0; i < dataList[0].length; i++) {
      (th[i].className.indexOf('center')).should.be.greaterThan(-1);
      th[i].textContent.should.be.equal(dataList[0][i]);
    }

    const td = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'td');

    for (var i = 1; i < dataList.length; i++) {
      for (var j = 0; j < dataList[i].length; j++) {
        let tdIndex = (i-1)*dataList[i].length + j;
        (td[tdIndex].textContent == dataList[i][j]).should.be.ok;
        if(td[tdIndex].textContent == 'Edit') {
          (td[tdIndex].className.indexOf('editBtn')).should.be.greaterThan(-1);
        } else if(td[tdIndex].textContent == 'Delete') {
          (td[tdIndex].className.indexOf('deleteBtn')).should.be.greaterThan(-1);
        } else {
          (td[tdIndex].className.indexOf('center')).should.be.greaterThan(-1);
          switch(j) {
            case 0:
              (td[tdIndex].className.indexOf('Seq')).should.be.greaterThan(-1);
              break;
            case 1:
              (td[tdIndex].className.indexOf('Status')).should.be.greaterThan(-1);
              break;
            case 2:
              (td[tdIndex].className.indexOf('Category')).should.be.greaterThan(-1);
              break;
            case 3:
              (td[tdIndex].className.indexOf('Title')).should.be.greaterThan(-1);
              break;
            case 4:
              (td[tdIndex].className.indexOf('Owner')).should.be.greaterThan(-1);
              break;
            case 5:
              (td[tdIndex].className.indexOf('Priority')).should.be.greaterThan(-1);
              break;
            default:
              break;
          }
        }
      }
    }
  });

  it('Test.', () => {
    (101).should.be.greaterThan(100);
  });
});
