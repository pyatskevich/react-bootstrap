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

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var NavItem = (function (_React$Component) {
  _inherits(NavItem, _React$Component);

  function NavItem() {
    var _this = this;

    _classCallCheck(this, NavItem);

    _React$Component.apply(this, arguments);

    this.handleClick = function (e) {
      if (_this.props.onSelect) {
        e.preventDefault();

        if (!_this.props.disabled) {
          _this.props.onSelect(_this.props.eventKey, _this.props.href, _this.props.target);
        }
      }
    };
  }

  NavItem.prototype.render = function render() {
    var _props = this.props;
    var role = _props.role;
    var linkId = _props.linkId;
    var disabled = _props.disabled;
    var active = _props.active;
    var href = _props.href;
    var onClick = _props.onClick;
    var title = _props.title;
    var target = _props.target;
    var children = _props.children;
    var tabIndex = _props.tabIndex;
    var ariaControls = _props['aria-controls'];

    var props = _objectWithoutProperties(_props, ['role', 'linkId', 'disabled', 'active', 'href', 'onClick', 'title', 'target', 'children', 'tabIndex', 'aria-controls']);

    var classes = {
      active: active,
      disabled: disabled
    };
    var linkProps = {
      role: role,
      href: href,
      onClick: _utilsCreateChainedFunction2['default'](onClick, this.handleClick),
      title: title,
      target: target,
      tabIndex: tabIndex,
      id: linkId
    };

    if (!role && href === '#') {
      linkProps.role = 'button';
    } else if (role === 'tab') {
      linkProps['aria-selected'] = active;
    }

    return _react2['default'].createElement(
      'li',
      _extends({}, props, { role: 'presentation', className: _classnames2['default'](props.className, classes) }),
      _react2['default'].createElement(
        _SafeAnchor2['default'],
        _extends({}, linkProps, { 'aria-controls': ariaControls }),
        children
      )
    );
  };

  _createClass(NavItem, null, [{
    key: 'propTypes',
    value: {
      linkId: _propTypes2['default'].string,
      onSelect: _propTypes2['default'].func,
      active: _propTypes2['default'].bool,
      disabled: _propTypes2['default'].bool,
      href: _propTypes2['default'].string,
      onClick: _propTypes2['default'].func,
      role: _propTypes2['default'].string,
      title: _propTypes2['default'].node,
      eventKey: _propTypes2['default'].any,
      target: _propTypes2['default'].string,
      'aria-controls': _propTypes2['default'].string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      active: false,
      disabled: false
    },
    enumerable: true
  }]);

  return NavItem;
})(_react2['default'].Component);

exports['default'] = NavItem;
module.exports = exports['default'];
//eslint-disable-line