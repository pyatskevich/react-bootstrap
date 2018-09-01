/* eslint react/no-multi-comp: 0 */
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

var _uncontrollable = require('uncontrollable');

var _uncontrollable2 = _interopRequireDefault(_uncontrollable);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _reactPropTypesLibDeprecated = require('react-prop-types/lib/deprecated');

var _reactPropTypesLibDeprecated2 = _interopRequireDefault(_reactPropTypesLibDeprecated);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _Grid = require('./Grid');

var _Grid2 = _interopRequireDefault(_Grid);

var _deprecatedNavbar = require('./deprecated/Navbar');

var _deprecatedNavbar2 = _interopRequireDefault(_deprecatedNavbar);

var _NavbarBrand = require('./NavbarBrand');

var _NavbarBrand2 = _interopRequireDefault(_NavbarBrand);

var _NavbarHeader = require('./NavbarHeader');

var _NavbarHeader2 = _interopRequireDefault(_NavbarHeader);

var _NavbarToggle = require('./NavbarToggle');

var _NavbarToggle2 = _interopRequireDefault(_NavbarToggle);

var _NavbarCollapse = require('./NavbarCollapse');

var _NavbarCollapse2 = _interopRequireDefault(_NavbarCollapse);

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _styleMaps = require('./styleMaps');

var has = function has(obj, key) {
  return obj && ({}).hasOwnProperty.call(obj, key);
};

function shouldRenderOldNavbar(component) {
  var props = component.props;
  return has(props, 'brand') || has(props, 'toggleButton') || has(props, 'toggleNavKey') || has(props, 'navExpanded') || has(props, 'defaultNavExpanded') ||
  // this should be safe b/c the new version requires wrapping in a Header
  _utilsValidComponentChildren2['default'].findValidComponents(props.children, function (child) {
    return child.props.bsRole === 'brand';
  }).length > 0;
}

var Navbar = (function (_React$Component) {
  _inherits(Navbar, _React$Component);

  function Navbar() {
    var _this = this;

    _classCallCheck(this, Navbar);

    _React$Component.apply(this, arguments);

    this.handleToggle = function () {
      _this.props.onToggle(!_this.props.expanded);
    };

    this.isNavExpanded = function () {
      return !!_this.props.expanded;
    };
  }

  Navbar.prototype.getChildContext = function getChildContext() {
    return {
      $bs_navbar: true,
      $bs_navbar_bsClass: this.props.bsClass,
      $bs_navbar_onToggle: this.handleToggle,
      $bs_navbar_expanded: this.props.expanded
    };
  };

  Navbar.prototype.render = function render() {
    if (shouldRenderOldNavbar(this)) {
      _utilsDeprecationWarning2['default']({ message: 'Rendering a deprecated version of the Navbar due to the use of deprecated ' + 'props. Please use the new Navbar api, and remove `toggleButton`, ' + '`toggleNavKey`, `brand`, `navExpanded`, `defaultNavExpanded` props or the ' + 'use of the `<NavBrand>` component outside of a `<Navbar.Header>`. \n\n' + 'for more details see: http://react-bootstrap.github.io/components.html#navbars'
      });

      return _react2['default'].createElement(_deprecatedNavbar2['default'], this.props);
    }

    var _props = this.props;
    var fixedTop = _props.fixedTop;
    var fixedBottom = _props.fixedBottom;
    var staticTop = _props.staticTop;
    var inverse = _props.inverse;
    var ComponentClass = _props.componentClass;
    var fluid = _props.fluid;
    var className = _props.className;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['fixedTop', 'fixedBottom', 'staticTop', 'inverse', 'componentClass', 'fluid', 'className', 'children']);

    // will result in some false positives but that seems better
    // than false negatives. strict `undefined` check allows explicit
    // "nulling" of the role if the user really doesn't want one
    if (props.role === undefined && ComponentClass !== 'nav') {
      props.role = 'navigation';
    }

    if (inverse) {
      props.bsStyle = _styleMaps.INVERSE;
    }

    var classes = _utilsBootstrapUtils2['default'].getClassSet(props);

    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'fixed-top')] = fixedTop;
    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'fixed-bottom')] = fixedBottom;
    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'static-top')] = staticTop;

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, props, { className: _classnames2['default'](className, classes) }),
      _react2['default'].createElement(
        _Grid2['default'],
        { fluid: fluid },
        children
      )
    );
  };

  _createClass(Navbar, null, [{
    key: 'propTypes',
    value: {
      /**
       * Create a fixed navbar along the top of the screen, that scrolls with the page
       */
      fixedTop: _propTypes2['default'].bool,
      /**
       * Create a fixed navbar along the bottom of the screen, that scrolls with the page
       */
      fixedBottom: _propTypes2['default'].bool,
      /**
       * Create a full-width navbar that scrolls away with the page
       */
      staticTop: _propTypes2['default'].bool,
      /**
       * An alternative dark visual style for the Navbar
       */
      inverse: _propTypes2['default'].bool,
      /**
       * Allow the Navbar to fluidly adjust to the page or container width, instead of at the
       * predefined screen breakpoints
       */
      fluid: _propTypes2['default'].bool,

      /**
       * Set a custom element for this component.
       */
      componentClass: _reactPropTypesLibElementType2['default'],
      /**
       * A callback fired when the `<Navbar>` body collapses or expands.
       * Fired when a `<Navbar.Toggle>` is clicked and called with the new `navExpanded` boolean value.
       *
       * @controllable navExpanded
       */
      onToggle: _propTypes2['default'].func,

      /**
       * Explicitly set the visiblity of the navbar body
       *
       * @controllable onToggle
       */
      expanded: _propTypes2['default'].bool,

      /**
       * @deprecated
       */
      navExpanded: _reactPropTypesLibDeprecated2['default'](_propTypes2['default'].bool, 'Use `expanded` and `defaultExpanded` instead.')
    },
    enumerable: true
  }, {
    key: 'childContextTypes',
    value: {
      $bs_navbar: _propTypes2['default'].bool,
      $bs_navbar_bsClass: _propTypes2['default'].string,
      $bs_navbar_onToggle: _propTypes2['default'].func,
      $bs_navbar_expanded: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      componentClass: 'nav',
      fixedTop: false,
      fixedBottom: false,
      staticTop: false,
      inverse: false,
      fluid: false
    },
    enumerable: true
  }]);

  return Navbar;
})(_react2['default'].Component);

var NAVBAR_STATES = [_styleMaps.DEFAULT, _styleMaps.INVERSE];

Navbar = _utilsBootstrapUtils.bsStyles(NAVBAR_STATES, _styleMaps.DEFAULT, _utilsBootstrapUtils.bsClass('navbar', _uncontrollable2['default'](Navbar, { expanded: 'onToggle' })));

function createSimpleWrapper(tag, suffix, displayName) {
  var wrapper = function wrapper(_ref, _ref2) {
    var Tag = _ref.componentClass;
    var className = _ref.className;

    var props = _objectWithoutProperties(_ref, ['componentClass', 'className']);

    var _classNames;

    var _ref2$$bs_navbar_bsClass = _ref2.$bs_navbar_bsClass;
    var bsClass = _ref2$$bs_navbar_bsClass === undefined ? 'navbar' : _ref2$$bs_navbar_bsClass;
    return _react2['default'].createElement(Tag, _extends({}, props, {
      className: _classnames2['default'](className, _utilsBootstrapUtils2['default'].prefix({ bsClass: bsClass }, suffix), (_classNames = {}, _classNames[_utilsBootstrapUtils2['default'].prefix({ bsClass: bsClass }, 'right')] = props.pullRight, _classNames[_utilsBootstrapUtils2['default'].prefix({ bsClass: bsClass }, 'left')] = props.pullLeft, _classNames))
    }));
  };

  wrapper.displayName = displayName;

  wrapper.propTypes = {
    componentClass: _reactPropTypesLibElementType2['default'],
    pullRight: _propTypes2['default'].bool,
    pullLeft: _propTypes2['default'].bool
  };
  wrapper.defaultProps = {
    componentClass: tag,
    pullRight: false,
    pullLeft: false
  };

  wrapper.contextTypes = {
    $bs_navbar_bsClass: _propTypes2['default'].string
  };

  return wrapper;
}

Navbar.Brand = _NavbarBrand2['default'];
Navbar.Header = _NavbarHeader2['default'];
Navbar.Toggle = _NavbarToggle2['default'];
Navbar.Collapse = _NavbarCollapse2['default'];

Navbar.Form = createSimpleWrapper('div', 'form', 'NavbarForm');
Navbar.Text = createSimpleWrapper('p', 'text', 'NavbarText');
Navbar.Link = createSimpleWrapper('a', 'link', 'NavbarLink');

exports['default'] = Navbar;
module.exports = exports['default'];