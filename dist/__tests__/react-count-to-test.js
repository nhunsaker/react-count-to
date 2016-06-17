'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactAddonsTestUtils2 = _interopRequireDefault(_reactAddonsTestUtils);

var _reactCountTo = require('../react-count-to');

var _reactCountTo2 = _interopRequireDefault(_reactCountTo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.unmock('../react-count-to');

describe('CountTo', function () {
  var countTo = void 0;

  describe('with `to` and `speed` props', function () {
    it('starts from 0, ends to 1', function () {
      countTo = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_reactCountTo2.default, { to: 1, speed: 1 }));
      var span = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag(countTo, 'span');
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('0');
      jest.runAllTimers();
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('1');
    });
  });

  describe('with `from` prop', function () {
    it('starts from 1', function () {
      countTo = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_reactCountTo2.default, { from: 1, to: 1, speed: 1 }));
      var span = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag(countTo, 'span');
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('1');
    });
  });

  describe('with `delay` prop', function () {
    it('sets increment to 1', function () {
      countTo = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_reactCountTo2.default, { to: 1, speed: 1, delay: 1 }));
      expect(countTo.increment).toEqual(1);
    });
  });

  describe('with `onComplete` prop', function () {
    it('calls onComplete', function () {
      var onComplete = jest.genMockFunction();
      countTo = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_reactCountTo2.default, { to: 1, speed: 1, onComplete: onComplete }));
      jest.runAllTimers();
      expect(onComplete).toBeCalled();
    });
  });

  describe('with negative values', function () {
    it('starts from -1, ends to 1', function () {
      countTo = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_reactCountTo2.default, { from: -1, to: 1, speed: 1 }));
      var span = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag(countTo, 'span');
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('-1');
      jest.runAllTimers();
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('1');
    });

    it('starts from 1, ends to -1', function () {
      countTo = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_reactCountTo2.default, { from: 1, to: -1, speed: 1 }));
      var span = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag(countTo, 'span');
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('1');
      jest.runAllTimers();
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('-1');
    });

    it('starts sfrom -1, ends to -2', function () {
      countTo = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_reactCountTo2.default, { from: -1, to: -2, speed: 1 }));
      var span = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag(countTo, 'span');
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('-1');
      jest.runAllTimers();
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('-2');
    });
  });

  describe('with decimal values', function () {
    it('starts from -0.5, ends to 0.5', function () {
      countTo = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(_reactCountTo2.default, { from: -0.5, to: 0.5, speed: 1, digits: 1 }));
      var span = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag(countTo, 'span');
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('-0.5');
      jest.runAllTimers();
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('0.5');
    });
  });

  describe('when receive new props', function () {
    it('starts from 0, ends to 1', function () {
      var Parent = _react2.default.createClass({
        displayName: 'Parent',
        getInitialState: function getInitialState() {
          return {
            to: 1
          };
        },
        render: function render() {
          return _react2.default.createElement(_reactCountTo2.default, { to: this.state.to, speed: 1 });
        }
      });
      var parent = _reactAddonsTestUtils2.default.renderIntoDocument(_react2.default.createElement(Parent, null));
      var span = _reactAddonsTestUtils2.default.findRenderedDOMComponentWithTag(parent, 'span');
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('0');
      jest.runAllTimers();
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('1');
      parent.setState({
        to: 2
      });
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('0');
      jest.runAllTimers();
      expect(_reactDom2.default.findDOMNode(span).textContent).toEqual('2');
    });
  });
});