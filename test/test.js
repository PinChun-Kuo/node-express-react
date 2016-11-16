import React from 'react';
import assert from 'assert';
import ReactTestUtils from 'react-addons-test-utils';
import Component from '../public/javascripts/helloWorld.js';

describe('The root div', () => {
    it('should contain text: Hello, World!', done => {
        const renderer = ReactTestUtils.createRenderer();

        renderer.render(
            React.createElement(Component)
        );

        const content = renderer.getRenderOutput().props.children.props.children;

        assert.equal(content, 'Hello, World!');
        done();
    });
});
