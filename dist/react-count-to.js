'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                Forked from @MicheleBertoli's react-count-to component at:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                https://github.com/MicheleBertoli/react-count-to/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var CountTo = function (_React$Component) {
  _inherits(CountTo, _React$Component);

  function CountTo(props) {
    _classCallCheck(this, CountTo);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CountTo).call(this, props));

    _this.formatter = props.formatter ? props.formatter : function (value) {
      return value;
    };
    return _this;
  }

  _createClass(CountTo, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.start(this.props);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.start(nextProps);
    }
  }, {
    key: 'next',
    value: function next() {
      if (this.state.counter < this.state.to) {
        var step = Math.round(this.state.counter + this.state.increment);
        this.setState({
          counter: step > this.state.to ? this.state.to : step
        });
        window.requestAnimationFrame(this.next.bind(this));
      }
    }
  }, {
    key: 'start',
    value: function start(props) {
      this.state = {
        counter: this.props.hasOwnProperty('from') ? this.props.from : 0,
        delay: this.props.hasOwnProperty('delay') ? this.props.delay : 100,
        to: this.props.hasOwnProperty('to') ? this.props.to : 0
      };
      this.state['loops'] = Math.ceil(props.speed / this.state.delay);
      this.state['increment'] = (props.to - this.state.counter) / this.state.loops;
      window.requestAnimationFrame(this.next.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      var counter = this.state ? this.state.counter : 0;
      return _react2.default.createElement(
        'span',
        null,
        this.formatter(counter)
      );
    }
  }]);

  return CountTo;
}(_react2.default.Component);

;

CountTo.propTypes = {
  from: _react2.default.PropTypes.number,
  to: _react2.default.PropTypes.number.isRequired,
  speed: _react2.default.PropTypes.number.isRequired,
  delay: _react2.default.PropTypes.number,
  formatter: _react2.default.PropTypes.func
};

exports.default = CountTo;