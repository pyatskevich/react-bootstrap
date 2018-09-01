'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var Pager = (function (_React$Component) {
  _inherits(Pager, _React$Component);

  function Pager() {
    var _this = this;

    _classCallCheck(this, Pager);

    _React$Component.apply(this, arguments);

    this.renderPageItem = function (child, index) {
      return _react.cloneElement(child, {
        onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, _this.props.onSelect),
        key: child.key ? child.key : index
      });
    };
  }

  Pager.prototype.render = function render() {
    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, 'pager') }),
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderPageItem)
    );
  };

  _createClass(Pager, null, [{
    key: 'propTypes',
    value: {
      onSelect: _propTypes2['default'].func
    },
    enumerable: true
  }]);

  return Pager;
})(_react2['default'].Component);

exports['default'] = Pager;
module.exports = exports['default'];