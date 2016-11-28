import React from 'react';
import ReactDOM from 'react-dom';
import should from 'should';
import ReactTestUtils from 'react-addons-test-utils';
import wrapper from './wrapper';
import TableContent from '../public/javascripts/tableContent';

const dataList = [
  ['Seq', 'Status', 'Category', 'Title', 'Owner', 'Priority'],
  [1, 'Open', 'category1', 'title1', 'Allen', 'P1', 'Edit', 'Delete'],
  [2, 'Open', 'category2', 'title2', 'Allen', 'P2', 'Edit', 'Delete'],
  [3, 'Close', 'category3', 'title3', 'Allen', 'P3', 'Edit', 'Delete']
];

const popModalData = {
  state: {
    show: true, // pop modal open or not
    modalTitle: '', // pop modal title
    statusValue: '',
    categoryValue: '',
    titleValue: '',
    ownerValue: '',
    priorityValue: ''
  }
}

describe('public/javascripts/tableContent.js Spec', () => {
  var instance, modalInstance, button, dom;
  var Wrapper = wrapper();

  describe('Render table', () => {
    beforeEach(function() {
      instance = ReactTestUtils.renderIntoDocument(
        <Wrapper>
          <TableContent.TableContent dataList = {dataList} />
        </Wrapper>
      );
    });

    it('Should render button DOM correctly.', () => {
      const button = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
      should.exist(button);
      button[0].textContent.should.be.equal('Add');
      for (var i = 1; i < button.length; i++) {
        if(i % 2 === 1) {
          button[i].textContent.should.be.equal('Edit');
        } else {
          button[i].textContent.should.be.equal('Delete');
        }
      }
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
  });

  describe('Render PopModal', () => {
    beforeEach(function() {
      modalInstance = ReactTestUtils.renderIntoDocument(
        <Wrapper>
          <TableContent.PopModal target={popModalData}/>
        </Wrapper>
      );
    });

    it('Should render modalBackground DOM correctly.', () => {
      const modalBackground = ReactTestUtils.findRenderedDOMComponentWithClass(modalInstance, 'modalBackground');
      modalBackground.tagName.should.be.equal('DIV');
      should.exist(modalBackground);
    });

    it('Should render modalBox DOM correctly.', () => {
      const modalBox = ReactTestUtils.findRenderedDOMComponentWithClass(modalInstance, 'modalBox');
      modalBox.tagName.should.be.equal('DIV');
      should.exist(modalBox);
    });

    it('Should render h1 DOM correctly.', () => {
      const h1 = ReactTestUtils.findRenderedDOMComponentWithTag(modalInstance, 'h1');
      should.exist(h1);
    });

    it('Should render close button DOM correctly.', () => {
      const closeBtn = ReactTestUtils.findRenderedDOMComponentWithTag(modalInstance, 'button');
      (closeBtn.className.indexOf('closeBtn')).should.be.greaterThan(-1);
      closeBtn.textContent.should.be.equal('X');
      should.exist(closeBtn);
    });

    it('Should render input DOM and submit button DOM correctly.', () => {
      const form = ReactTestUtils.scryRenderedDOMComponentsWithTag(modalInstance, 'input');
      form.length.should.be.equal(dataList[0].length);
      for (var i = 0; i < form.length; i++) {
        if(i === form.length-1) {
          form[i].type.should.be.equal('submit');
          form[i].value.should.be.equal('submit');
        } else {
          form[i].type.should.be.equal('text');
        }
      }
      should.exist(form);
    });
  });
});
