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

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _styleMaps = require('./styleMaps');

var types = ['button', 'reset', 'submit'];

var ButtonStyles = _styleMaps.State.values().concat(_styleMaps.DEFAULT, _styleMaps.PRIMARY, _styleMaps.LINK);

var Button = (function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button() {
    var _this = this;

    _classCallCheck(this, Button);

    _React$Component.apply(this, arguments);

    this.renderAnchor = function (classes) {
      var Component = _this.props.componentClass || 'a';
      var href = _this.props.href || '#';
      classes.disabled = _this.props.disabled;

      return _react2['default'].createElement(
        Component,
        _extends({}, _this.props, {
          href: href,
          className: _classnames2['default'](_this.props.className, classes),
          role: 'button' }),
        _this.props.children
      );
    };

    this.renderButton = function (classes) {
      var Component = _this.props.componentClass || 'button';

      return _react2['default'].createElement(
        Component,
        _extends({}, _this.props, {
          type: _this.props.type || 'button',
          className: _classnames2['default'](_this.props.className, classes) }),
        _this.props.children
      );
    };

    this.renderNavItem = function (classes) {
      var liClasses = {
        active: _this.props.active
      };

      return _react2['default'].createElement(
        'li',
        { className: _classnames2['default'](liClasses) },
        _this.renderAnchor(classes)
      );
    };
  }

  Button.prototype.render = function render() {
    var _extends2;

    var classes = this.props.navDropdown ? {} : _utilsBootstrapUtils2['default'].getClassSet(this.props);
    var renderFuncName = undefined;

    var blockClass = _utilsBootstrapUtils2['default'].prefix(this.props, 'block');

    classes = _extends((_extends2 = {
      active: this.props.active
    }, _extends2[blockClass] = this.props.block, _extends2), classes);

    if (this.props.navItem) {
      return this.renderNavItem(classes);
    }

    renderFuncName = this.props.href || this.props.target || this.props.navDropdown ? 'renderAnchor' : 'renderButton';

    return this[renderFuncName](classes);
  };

  _createClass(Button, null, [{
    key: 'propTypes',
    value: {
      active: _propTypes2['default'].bool,
      disabled: _propTypes2['default'].bool,
      block: _propTypes2['default'].bool,
      navItem: _propTypes2['default'].bool,
      navDropdown: _propTypes2['default'].bool,
      /**
       * You can use a custom element for this component
       */
      componentClass: _reactPropTypesLibElementType2['default'],
      href: _propTypes2['default'].string,
      target: _propTypes2['default'].string,
      /**
       * Defines HTML button type Attribute
       * @type {("button"|"reset"|"submit")}
       * @defaultValue 'button'
       */
      type: _propTypes2['default'].oneOf(types)
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      active: false,
      block: false,
      disabled: false,
      navItem: false,
      navDropdown: false
    },
    enumerable: true
  }]);

  return Button;
})(_react2['default'].Component);

Button.types = types;

exports['default'] = _utilsBootstrapUtils.bsStyles(ButtonStyles, _styleMaps.DEFAULT, _utilsBootstrapUtils.bsSizes([_styleMaps.Sizes.LARGE, _styleMaps.Sizes.SMALL, _styleMaps.Sizes.XSMALL], _utilsBootstrapUtils.bsClass('btn', Button)));
module.exports = exports['default'];