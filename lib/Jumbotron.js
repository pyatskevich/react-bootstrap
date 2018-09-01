'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var Jumbotron = (function (_React$Component) {
  _inherits(Jumbotron, _React$Component);

  function Jumbotron() {
    _classCallCheck(this, Jumbotron);

    _React$Component.apply(this, arguments);
  }

  Jumbotron.prototype.render = function render() {
    var ComponentClass = this.props.componentClass;

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'jumbotron') }),
      this.props.children
    );
  };

  _createClass(Jumbotron, null, [{
    key: 'propTypes',
    value: {
      /**
       * You can use a custom element for this component
       */
      componentClass: _reactPropTypesLibElementType2['default']
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: { componentClass: 'div' },
    enumerable: true
  }]);

  return Jumbotron;
})(_react2['default'].Component);

exports['default'] = Jumbotron;
module.exports = exports['default'];