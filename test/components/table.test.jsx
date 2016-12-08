import React from 'react';
import should from 'should';
import ReactTestUtils from 'react-addons-test-utils';
import wrapper from '../wrapper';
import Table from '../../public/javascripts/components/table';

const dataList = [
  { seq: 'Seq', status: 'Status', category: 'Category', title: 'Title', owner: 'Owner', priority: 'Priority' },
  { seq: 1, status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' },
  { seq: 2, status: 'Open', category: 'category2', title: 'title2', owner: 'Owner2', priority: 'P2' },
  { seq: 3, status: 'Close', category: 'category3', title: 'title3', owner: 'Owner3', priority: 'P3' }
];

const keys = ['seq', 'status', 'category', 'title', 'owner', 'priority'];
// for event test :
// const spy = sinon.spy();
describe('public/javascripts/components/table.jsx Spec', () => {
  let instance;
  const Wrapper = wrapper();

  describe('Render table', () => {
    beforeEach(function() {
      // for event test :
      // const action = {
      //   openPopModal: spy
      // };
      // <Table dataList={dataList} modalShow={false} updateRow={{}} {...action}/>

      instance = ReactTestUtils.renderIntoDocument(
        <Wrapper>
          <Table dataList={dataList} modalShow={false} updateRow={{}} />
        </Wrapper>
      );
    });

    it('Should render DOM correctly.', () => {
      const div = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');

      div[0].tagName.should.eql('DIV');
      div[0].childNodes[0].childNodes.length.should.eql(3);
      div[0].childNodes[0].childNodes[0].tagName.should.eql('BUTTON');
      div[0].childNodes[0].childNodes[2].tagName.should.eql('TABLE');
    });

    it('Should render button correctly.', () => {
      const button = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
      should.exist(button);
      button[0].textContent.should.be.equal('Add');
      for (let i = 1; i < button.length; i += 1) {
        if (i % 2 === 1) {
          button[i].textContent.should.be.equal('Edit');
        } else {
          button[i].textContent.should.be.equal('Delete');
        }
      }
    });

    // for event test :
    // it('Should open modal after click add button.', () => {
    //   const button = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
    //   console.log('\n\n isElement() : ', ReactTestUtils.isElement(button[0]));
    //   // console.log('\n\n instance : ', instance);
    //   console.log('\n\n instance.props.children.props.modalShow : ', instance.props.children.props.modalShow);
    //   ReactTestUtils.Simulate.click(button[0]);
    //   spy.calledOnce.should.be.ok;
    //
    //   // console.log('\n\n instance.props.children.props.modalShow : ', instance.props.children.props.modalShow);
    // });

    it('Should render table correctly.', () => {
      const table = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'table');
      (table.className.indexOf('table table-bordered table-striped table-hover') > -1).should.be.ok;
      should.exist(table);
    });

    it('Should render thead correctly.', () => {
      const thead = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'thead');
      (thead.className.indexOf('thead-inverse') > -1).should.be.ok;
      should.exist(thead);
    });

    it('Should render tbody correctly.', () => {
      const tbody = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'tbody');
      should.exist(tbody);
    });

    it('Should render table content correctly.', () => {
      const th = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'th');

      // check table head column
      should.exist(th);
      for (let i = 0; i < keys.length; i += 1) {
        (th[i].className.indexOf('center ' + keys[i])).should.be.greaterThan(-1);
        th[i].textContent.should.be.equal(dataList[0][keys[i]]);
      }

      const td = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'td');
      let dataListIndex;
      let keysIndex;

      // check table body column
      should.exist(td);
      for (let i = 0; i < td.length; i += 1) {
        dataListIndex = Math.floor(i / 8) + 1;
        keysIndex = i % 8;
        if (keysIndex === 6) { // check edit button for each row
          (td[i].className.indexOf('editBtn')).should.be.greaterThan(-1);
          td[i].childNodes[0].textContent.should.be.equal('Edit');
        } else if (keysIndex === 7) { // check delete button for each row
          (td[i].className.indexOf('deleteBtn')).should.be.greaterThan(-1);
          td[i].childNodes[0].textContent.should.be.equal('Delete');
        } else { // check data context for each row
          (td[i].className.indexOf('center ' + keys[keysIndex])).should.be.greaterThan(-1);
          (td[i].textContent.toString()).should.be.equal(dataList[dataListIndex][keys[keysIndex]].toString());
        }
      }
    });
  });
});
