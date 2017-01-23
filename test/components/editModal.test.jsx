import React from 'react';
import should from 'should';
import ReactTestUtils from 'react-addons-test-utils';
import wrapper from '../wrapper';
import EditModal from '../../public/javascripts/components/editModal';

const issue = { seq: 1, status: 'Open', category: 'category1', title: 'title1', owner: 'Owner1', priority: 'P1' };
const seq = 1;
const keys = ['seq', 'status', 'category', 'title', 'owner', 'priority'];

describe('public/javascripts/components/editModal.jsx Spec', () => {
  let modalInstance;
  const Wrapper = wrapper();
  const spy = sinon.spy();

  describe('Render editModal', () => {
    beforeEach(function() {
      modalInstance = ReactTestUtils.renderIntoDocument(
        <Wrapper>
          <EditModal updateIssue={issue} seq={seq} getIssue={spy} />
        </Wrapper>
      );
    });

    it('Should render DOM correctly.', () => {
      const modalBackground = ReactTestUtils.findRenderedDOMComponentWithClass(modalInstance, 'modalBackground');
      modalBackground.tagName.should.be.equal('DIV');
      modalBackground.childNodes.length.should.be.equal(1);
      modalBackground.childNodes[0].tagName.should.be.equal('DIV');
      modalBackground.childNodes[0].childNodes.length.should.be.equal(3);
      modalBackground.childNodes[0].childNodes[0].tagName.should.be.equal('H1');
      modalBackground.childNodes[0].childNodes[1].tagName.should.be.equal('BUTTON');
      modalBackground.childNodes[0].childNodes[2].tagName.should.be.equal('FORM');
      should.exist(modalBackground);
    });

    it('Should render modalBox correctly.', () => {
      const modalBox = ReactTestUtils.findRenderedDOMComponentWithClass(modalInstance, 'modalBox');
      modalBox.tagName.should.be.equal('DIV');
      should.exist(modalBox);
    });

    it('Should render close button correctly.', () => {
      const closeBtn = ReactTestUtils.findRenderedDOMComponentWithTag(modalInstance, 'button');
      (closeBtn.className.indexOf('closeBtn')).should.be.greaterThan(-1);
      closeBtn.textContent.should.be.equal('Cancel');
      should.exist(closeBtn);
    });

    it('Should render form correctly.', () => {
      const input = ReactTestUtils.scryRenderedDOMComponentsWithTag(modalInstance, 'input');
      input.length.should.be.equal(6);
      for (let i = 0; i < input.length; i += 1) {
        if (input[i].className === 'submitBtn') {
          input[i].type.should.be.equal('submit');
          input[i].value.should.be.equal('submit');
        } else {
          input[i].type.should.be.equal('text');
          (input[i].value.toString()).should.be.equal(issue[keys[i + 1]].toString());
        }
      }
      should.exist(input);
    });
  });
});
