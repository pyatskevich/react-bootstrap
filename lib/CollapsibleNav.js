'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Collapse = require('./Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _utilsDeprecationWarning = require('./utils/deprecationWarning');

var _utilsDeprecationWarning2 = _interopRequireDefault(_utilsDeprecationWarning);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var CollapsibleNav = (function (_React$Component) {
  _inherits(CollapsibleNav, _React$Component);

  function CollapsibleNav() {
    var _this = this;

    _classCallCheck(this, CollapsibleNav);

    _React$Component.apply(this, arguments);

    this.getChildActiveProp = function (child) {
      if (child.props.active) {
        return true;
      }
      if (_this.props.activeKey != null) {
        if (child.props.eventKey === _this.props.activeKey) {
          return true;
        }
      }
      if (_this.props.activeHref != null) {
        if (child.props.href === _this.props.activeHref) {
          return true;
        }
      }

      return child.props.active;
    };

    this.renderChildren = function (child, index) {
      var key = child.key ? child.key : index;
      return _react.cloneElement(child, {
        activeKey: _this.props.activeKey,
        activeHref: _this.props.activeHref,
        ref: 'nocollapse_' + key,
        key: key,
        navItem: true
      });
    };

    this.renderCollapsibleNavChildren = function (child, index) {
      var key = child.key ? child.key : index;
      return _react.cloneElement(child, {
        active: _this.getChildActiveProp(child),
        activeKey: _this.props.activeKey,
        activeHref: _this.props.activeHref,
        onSelect: _utilsCreateChainedFunction2['default'](child.props.onSelect, _this.props.onSelect),
        ref: 'collapsible_' + key,
        key: key,
        navItem: true
      });
    };
  }

  CollapsibleNav.prototype.render = function render() {
    /*
     * this.props.collapsible is set in NavBar when an eventKey is supplied.
     */
    var classes = this.props.collapsible ? 'navbar-collapse' : null;
    var renderChildren = this.props.collapsible ? this.renderCollapsibleNavChildren : this.renderChildren;

    var nav = _react2['default'].createElement(
      'div',
      { eventKey: this.props.eventKey, className: _classnames2['default'](this.props.className, classes) },
      _utilsValidComponentChildren2['default'].map(this.props.children, renderChildren)
    );

    if (this.props.collapsible) {
      return _react2['default'].createElement(
        _Collapse2['default'],
        { 'in': this.props.expanded },
        nav
      );
    }
    return nav;
  };

  _createClass(CollapsibleNav, null, [{
    key: 'propTypes',
    value: {
      onSelect: _propTypes2['default'].func,
      activeHref: _propTypes2['default'].string,
      activeKey: _propTypes2['default'].any,
      collapsible: _propTypes2['default'].bool,
      expanded: _propTypes2['default'].bool,
      eventKey: _propTypes2['default'].any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      collapsible: false,
      expanded: false
    },
    enumerable: true
  }]);

  return CollapsibleNav;
})(_react2['default'].Component);

exports['default'] = _utilsDeprecationWarning2['default'].wrapper(CollapsibleNav, 'CollapsibleNav', 'Navbar.Collapse', 'http://react-bootstrap.github.io/components.html#navbars');
module.exports = exports['default'];