'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var NavbarHeader = (function (_React$Component) {
  _inherits(NavbarHeader, _React$Component);

  function NavbarHeader() {
    _classCallCheck(this, NavbarHeader);

    _React$Component.apply(this, arguments);
  }

  NavbarHeader.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['className']);

    var _context$$bs_navbar_bsClass = this.context.$bs_navbar_bsClass;
    var bsClass = _context$$bs_navbar_bsClass === undefined ? 'navbar' : _context$$bs_navbar_bsClass;

    var headerClasses = _utilsBootstrapUtils2['default'].prefix({ bsClass: bsClass }, 'header');

    return _react2['default'].createElement('div', _extends({}, props, { className: _classnames2['default'](className, headerClasses) }));
  };

  _createClass(NavbarHeader, null, [{
    key: 'contextTypes',
    value: {
      $bs_navbar_bsClass: _propTypes2['default'].string
    },
    enumerable: true
  }]);

  return NavbarHeader;
})(_react2['default'].Component);

exports['default'] = NavbarHeader;
module.exports = exports['default'];