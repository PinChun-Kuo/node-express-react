import React from 'react';
import assert from 'assert';
import ReactTestUtils from 'react-addons-test-utils';
import Component from '../public/javascripts/helloWorld.js';

describe('Array', function() {
    describe('indexOf()', function() {
        it('should return -1 when the value is not present', function(done) {
            assert.equal(-1, [1, 2, 3, 4].indexOf(5));
            done();
        })

        it('should return -12 when the value is not present', function(done) {
            assert.equal(-1, [1, 2, 3, 4].indexOf(0));
            done();
        })
    })
});

describe('The root div', () => {
    it('should contain text: Hello, World!', done => {
        const renderer = ReactTestUtils.createRenderer();

        renderer.render(
            React.createElement(Component)
        );

        // const output = renderer.getRenderOutput().props.children;
        const content = renderer.getRenderOutput().props.children.props.children;

        // console.log("-----output----- : ", output);
        // console.log("-----content----- : ", content);

        assert.equal(content, 'Hello, World!');
        done();
    });
});
