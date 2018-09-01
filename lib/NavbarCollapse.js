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

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _Collapse = require('./Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var NavbarCollapse = (function (_React$Component) {
  _inherits(NavbarCollapse, _React$Component);

  function NavbarCollapse() {
    _classCallCheck(this, NavbarCollapse);

    _React$Component.apply(this, arguments);
  }

  NavbarCollapse.prototype.render = function render() {
    var _props = this.props;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['children']);

    var _context = this.context;
    var _context$$bs_navbar_bsClass = _context.$bs_navbar_bsClass;
    var bsClass = _context$$bs_navbar_bsClass === undefined ? 'navbar' : _context$$bs_navbar_bsClass;
    var expanded = _context.$bs_navbar_expanded;

    return _react2['default'].createElement(
      _Collapse2['default'],
      _extends({ 'in': expanded }, props),
      _react2['default'].createElement(
        'div',
        { className: _utilsBootstrapUtils2['default'].prefix({ bsClass: bsClass }, 'collapse') },
        children
      )
    );
  };

  _createClass(NavbarCollapse, null, [{
    key: 'contextTypes',
    value: {
      $bs_navbar_bsClass: _propTypes2['default'].string,
      $bs_navbar_expanded: _propTypes2['default'].bool
    },
    enumerable: true
  }]);

  return NavbarCollapse;
})(_react2['default'].Component);

exports['default'] = NavbarCollapse;
module.exports = exports['default'];