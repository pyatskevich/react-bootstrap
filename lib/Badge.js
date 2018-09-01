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

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var Badge = (function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    var _this = this;

    _classCallCheck(this, Badge);

    _React$Component.apply(this, arguments);

    this.hasContent = function () {
      return _utilsValidComponentChildren2['default'].hasValidComponent(_this.props.children) || _react2['default'].Children.count(_this.props.children) > 1 || typeof _this.props.children === 'string' || typeof _this.props.children === 'number';
    };
  }

  Badge.prototype.render = function render() {
    var _classes;

    var classes = (_classes = {
      'pull-right': this.props.pullRight
    }, _classes[_utilsBootstrapUtils2['default'].prefix(this.props)] = this.hasContent(), _classes);
    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  };

  _createClass(Badge, null, [{
    key: 'propTypes',
    value: {
      pullRight: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      pullRight: false,
      bsClass: 'badge'
    },
    enumerable: true
  }]);

  return Badge;
})(_react2['default'].Component);

exports['default'] = Badge;
module.exports = exports['default'];