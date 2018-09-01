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

var _reactPropTypesLibDeprecated = require('react-prop-types/lib/deprecated');

var _reactPropTypesLibDeprecated2 = _interopRequireDefault(_reactPropTypesLibDeprecated);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _Grid = require('../Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _NavBrand = require('../NavBrand');

var _NavBrand2 = _interopRequireDefault(_NavBrand);

var _utilsBootstrapUtils = require('../utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _styleMaps = require('../styleMaps');

var _utilsCreateChainedFunction = require('../utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsValidComponentChildren = require('../utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _this = this;

    _classCallCheck(this, Navbar);

    _React$Component.apply(this, arguments);

    this.state = {
      navExpanded: this.props.defaultNavExpanded
    };

    this.handleToggle = function () {
      if (_this.props.onToggle) {
        _this._isChanging = true;
        _this.props.onToggle();
        _this._isChanging = false;
      }

      _this.setState({
        navExpanded: !_this.state.navExpanded
      });
    };

    this.isNavExpanded = function () {
      return _this.props.navExpanded != null ? _this.props.navExpanded : _this.state.navExpanded;
    };

    this.hasNavBrandChild = function () {
      return _utilsValidComponentChildren2['default'].findValidComponents(_this.props.children, function (child) {
        return child.props.bsRole === 'brand';
      }).length > 0;
    };

    this.renderBrandHeader = function () {
      var brand = _this.props.brand;

      if (brand) {
        brand = _react2['default'].createElement(
          _NavBrand2['default'],
          null,
          brand
        );
      }

      return _this.renderHeader(brand);
    };

    this.renderHeader = function (brand) {
      var hasToggle = _this.props.toggleButton || _this.props.toggleNavKey != null;
      var headerClass = _utilsBootstrapUtils2['default'].prefix(_this.props, 'header');

      return _react2['default'].createElement(
        'div',
        { className: headerClass },
        brand,
        hasToggle ? _this.renderToggleButton() : null
      );
    };

    this.renderChild = function (child, index) {
      var key = child.key != null ? child.key : index;

      if (child.props.bsRole === 'brand') {
        return _react2['default'].cloneElement(_this.renderHeader(child), { key: key });
      }

      var toggleNavKey = _this.props.toggleNavKey;

      var collapsible = toggleNavKey != null && toggleNavKey === child.props.eventKey;

      return _react2['default'].cloneElement(child, {
        navbar: true,
        collapsible: collapsible,
        expanded: collapsible && _this.isNavExpanded(),
        key: key
      });
    };

    this.renderToggleButton = function () {
      var toggleButton = _this.props.toggleButton;

      var toggleClass = _utilsBootstrapUtils2['default'].prefix(_this.props, 'toggle');

      if (_react2['default'].isValidElement(toggleButton)) {
        return _react2['default'].cloneElement(toggleButton, {
          className: _classnames2['default'](toggleButton.props.className, toggleClass),
          onClick: _utilsCreateChainedFunction2['default'](_this.handleToggle, toggleButton.props.onClick)
        });
      }

      var children = undefined;
      if (toggleButton != null) {
        children = toggleButton;
      } else {
        children = [_react2['default'].createElement(
          'span',
          { className: 'sr-only', key: 0 },
          'Toggle navigation'
        ), _react2['default'].createElement('span', { className: 'icon-bar', key: 1 }), _react2['default'].createElement('span', { className: 'icon-bar', key: 2 }), _react2['default'].createElement('span', { className: 'icon-bar', key: 3 })];
      }

      return _react2['default'].createElement(
        'button',
        {
          type: 'button',
          onClick: _this.handleToggle,
          className: toggleClass
        },
        children
      );
    };
  }

  Navbar.prototype.getChildContext = function getChildContext() {
    return {
      $bs_deprecated_navbar: true
    };
  };

  Navbar.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  };

  Navbar.prototype.render = function render() {
    var _props = this.props;
    var brand = _props.brand;
    var toggleButton = _props.toggleButton;
    var toggleNavKey = _props.toggleNavKey;
    var fixedTop = _props.fixedTop;
    var fixedBottom = _props.fixedBottom;
    var staticTop = _props.staticTop;
    var inverse = _props.inverse;
    var ComponentClass = _props.componentClass;
    var fluid = _props.fluid;
    var className = _props.className;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['brand', 'toggleButton', 'toggleNavKey', 'fixedTop', 'fixedBottom', 'staticTop', 'inverse', 'componentClass', 'fluid', 'className', 'children']);

    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one
    if (props.role === undefined && ComponentClass !== 'nav') {
      props.role = 'navigation';
    }

    var classes = _utilsBootstrapUtils2['default'].getClassSet(this.props);

    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'fixed-top')] = this.props.fixedTop;
    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'fixed-bottom')] = this.props.fixedBottom;
    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'static-top')] = this.props.staticTop;

    // handle built-in styles manually to provide the convenience `inverse` prop
    classes[_utilsBootstrapUtils2['default'].prefix(this.props, _styleMaps.INVERSE)] = this.props.inverse;
    classes[_utilsBootstrapUtils2['default'].prefix(this.props, _styleMaps.DEFAULT)] = !this.props.inverse;

    var showHeader = (brand || toggleButton || toggleNavKey != null) && !this.hasNavBrandChild();

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, props, { className: _classnames2['default'](className, classes) }),
      _react2['default'].createElement(
        _Grid2['default'],
        { fluid: fluid },
        showHeader ? this.renderBrandHeader() : null,
        _utilsValidComponentChildren2['default'].map(children, this.renderChild)
      )
    );
  };

  _createClass(Navbar, null, [{
    key: 'propTypes',
    value: {
      fixedTop: _propTypes2['default'].bool,
      fixedBottom: _propTypes2['default'].bool,
      staticTop: _propTypes2['default'].bool,
      inverse: _propTypes2['default'].bool,
      fluid: _propTypes2['default'].bool,
      role: _propTypes2['default'].string,
      /**
       * You can use a custom element for this component
       */
      componentClass: _reactPropTypesLibElementType2['default'],
      brand: _reactPropTypesLibDeprecated2['default'](_propTypes2['default'].node, 'Use the `NavBrand` component.'),
      toggleButton: _propTypes2['default'].node,
      toggleNavKey: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
      onToggle: _propTypes2['default'].func,
      navExpanded: _propTypes2['default'].bool,
      defaultNavExpanded: _propTypes2['default'].bool
    },

    // TODO Remove in 0.29
    enumerable: true
  }, {
    key: 'childContextTypes',
    value: {
      $bs_deprecated_navbar: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      role: 'navigation',
      componentClass: 'nav',
      fixedTop: false,
      fixedBottom: false,
      staticTop: false,
      inverse: false,
      fluid: false,
      defaultNavExpanded: false
    },
    enumerable: true
  }]);

  return Navbar;
})(_react2['default'].Component);

var NAVBAR_STATES = [_styleMaps.DEFAULT, _styleMaps.INVERSE];

exports['default'] = _utilsBootstrapUtils.bsStyles(NAVBAR_STATES, _styleMaps.DEFAULT, _utilsBootstrapUtils.bsClass('navbar', Navbar));
module.exports = exports['default'];