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

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var PanelGroup = (function (_React$Component) {
  _inherits(PanelGroup, _React$Component);

  _createClass(PanelGroup, null, [{
    key: 'propTypes',
    value: {
      accordion: _propTypes2['default'].bool,
      activeKey: _propTypes2['default'].any,
      className: _propTypes2['default'].string,
      children: _propTypes2['default'].node,
      defaultActiveKey: _propTypes2['default'].any,
      onSelect: _propTypes2['default'].func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      accordion: false
    },
    enumerable: true
  }]);

  function PanelGroup(props) {
    var _this = this;

    _classCallCheck(this, PanelGroup);

    _React$Component.call(this, props);

    this.renderPanel = function (child, index) {
      var activeKey = _this.props.activeKey != null ? _this.props.activeKey : _this.state.activeKey;

      var props = {
        bsStyle: child.props.bsStyle || _this.props.bsStyle,
        key: child.key ? child.key : index,
        ref: child.ref
      };

      if (_this.props.accordion) {
        props.headerRole = 'tab';
        props.panelRole = 'tabpanel';
        props.collapsible = true;
        props.expanded = child.props.eventKey === activeKey;
        props.onSelect = _this.handleSelect;
      }

      return _react.cloneElement(child, props);
    };

    this.handleSelect = function (e, key) {
      e.preventDefault();

      if (_this.props.onSelect) {
        _this._isChanging = true;
        _this.props.onSelect(key);
        _this._isChanging = false;
      }

      if (_this.state.activeKey === key) {
        key = null;
      }

      _this.setState({
        activeKey: key
      });
    };

    var defaultActiveKey = props.defaultActiveKey;

    this.state = {
      activeKey: defaultActiveKey
    };
  }

  PanelGroup.prototype.render = function render() {
    var classes = _utilsBootstrapUtils2['default'].getClassSet(this.props);
    var _props = this.props;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['className']);

    if (this.props.accordion) {
      props.role = 'tablist';
    }
    return _react2['default'].createElement(
      'div',
      _extends({}, props, { className: _classnames2['default'](className, classes), onSelect: null }),
      _utilsValidComponentChildren2['default'].map(props.children, this.renderPanel)
    );
  };

  PanelGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  };

  return PanelGroup;
})(_react2['default'].Component);

exports['default'] = _utilsBootstrapUtils.bsClass('panel-group', PanelGroup);
module.exports = exports['default'];