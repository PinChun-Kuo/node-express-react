import React from 'react';
import should from 'should';
import ReactTestUtils from 'react-addons-test-utils';
import wrapper from '../wrapper';
import AddModal from '../../public/javascripts/components/addModal';

const issue = { status: '', category: '', title: '', owner: '', priority: '' };

describe('public/javascripts/components/addModal.jsx Spec', () => {
  let modalInstance;
  const Wrapper = wrapper();

  describe('Render addModal', () => {
    beforeEach(function() {
      modalInstance = ReactTestUtils.renderIntoDocument(
        <Wrapper>
          <AddModal updateIssue={issue} />
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
          input[i].value.should.be.equal('');
        }
      }
      should.exist(input);
    });
  });
});
