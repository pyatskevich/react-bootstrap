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

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var ButtonToolbar = (function (_React$Component) {
  _inherits(ButtonToolbar, _React$Component);

  function ButtonToolbar() {
    _classCallCheck(this, ButtonToolbar);

    _React$Component.apply(this, arguments);
  }

  ButtonToolbar.prototype.render = function render() {
    var classes = _utilsBootstrapUtils2['default'].getClassSet(this.props);

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        role: 'toolbar',
        className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  };

  _createClass(ButtonToolbar, null, [{
    key: 'propTypes',
    value: {
      bsSize: _Button2['default'].propTypes.bsSize
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      bsClass: 'btn-toolbar'
    },
    enumerable: true
  }]);

  return ButtonToolbar;
})(_react2['default'].Component);

exports['default'] = ButtonToolbar;
module.exports = exports['default'];