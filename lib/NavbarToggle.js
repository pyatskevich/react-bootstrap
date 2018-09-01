'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var NavbarToggle = (function (_React$Component) {
  _inherits(NavbarToggle, _React$Component);

  function NavbarToggle() {
    _classCallCheck(this, NavbarToggle);

    _React$Component.apply(this, arguments);
  }

  NavbarToggle.prototype.render = function render() {
    var _props = this.props;
    var onClick = _props.onClick;
    var className = _props.className;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['onClick', 'className', 'children']);

    var _context = this.context;
    var _context$$bs_navbar_bsClass = _context.$bs_navbar_bsClass;
    var bsClass = _context$$bs_navbar_bsClass === undefined ? 'navbar' : _context$$bs_navbar_bsClass;
    var onToggle = _context.$bs_navbar_onToggle;

    var buttonProps = _extends({
      type: 'button'
    }, props, {
      onClick: _utilsCreateChainedFunction2['default'](onClick, onToggle),
      className: _classnames2['default'](className, _utilsBootstrapUtils2['default'].prefix({ bsClass: bsClass }, 'toggle'))
    });

    if (children) {
      return _react2['default'].createElement(
        'button',
        buttonProps,
        children
      );
    }

    return _react2['default'].createElement(
      'button',
      buttonProps,
      _react2['default'].createElement(
        'span',
        { className: 'sr-only' },
        'Toggle navigation'
      ),
      _react2['default'].createElement('span', { className: 'icon-bar' }),
      _react2['default'].createElement('span', { className: 'icon-bar' }),
      _react2['default'].createElement('span', { className: 'icon-bar' })
    );
  };

  _createClass(NavbarToggle, null, [{
    key: 'propTypes',
    value: {
      onClick: _propTypes2['default'].func,
      /**
       * The toggle content, if left empty it will render the default toggle (seen above).
       */
      children: _propTypes2['default'].node
    },
    enumerable: true
  }, {
    key: 'contextTypes',
    value: {
      $bs_navbar_bsClass: _propTypes2['default'].string,
      $bs_navbar_onToggle: _propTypes2['default'].func
    },
    enumerable: true
  }]);

  return NavbarToggle;
})(_react2['default'].Component);

exports['default'] = NavbarToggle;
module.exports = exports['default'];