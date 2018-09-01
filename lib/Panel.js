'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

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

var _styleMaps = require('./styleMaps');

var _Collapse = require('./Collapse');

var _Collapse2 = _interopRequireDefault(_Collapse);

var Panel = (function (_React$Component) {
  _inherits(Panel, _React$Component);

  function Panel() {
    var _this = this;

    _classCallCheck(this, Panel);

    _React$Component.apply(this, arguments);

    this.state = {
      expanded: this.props.defaultExpanded
    };

    this.handleSelect = function (e) {
      e.selected = true;

      if (_this.props.onSelect) {
        _this.props.onSelect(e, _this.props.eventKey);
      } else {
        e.preventDefault();
      }

      if (e.selected) {
        _this.handleToggle();
      }
    };

    this.handleToggle = function () {
      _this.setState({ expanded: !_this.state.expanded });
    };

    this.isExpanded = function () {
      return _this.props.expanded != null ? _this.props.expanded : _this.state.expanded;
    };

    this.renderCollapsibleBody = function (panelRole) {
      var collapseProps = {
        onEnter: _this.props.onEnter,
        onEntering: _this.props.onEntering,
        onEntered: _this.props.onEntered,
        onExit: _this.props.onExit,
        onExiting: _this.props.onExiting,
        onExited: _this.props.onExited,
        'in': _this.isExpanded()
      };
      var props = {
        className: _utilsBootstrapUtils2['default'].prefix(_this.props, 'collapse'),
        id: _this.props.id,
        ref: 'panel',
        'aria-hidden': !_this.isExpanded()
      };
      if (panelRole) {
        props.role = panelRole;
      }

      return _react2['default'].createElement(
        _Collapse2['default'],
        collapseProps,
        _react2['default'].createElement(
          'div',
          props,
          _this.renderBody()
        )
      );
    };

    this.renderBody = function () {
      var allChildren = _this.props.children;
      var bodyElements = [];
      var panelBodyChildren = [];
      var bodyClass = _utilsBootstrapUtils2['default'].prefix(_this.props, 'body');

      function getProps() {
        return { key: bodyElements.length };
      }

      function addPanelChild(child) {
        bodyElements.push(_react.cloneElement(child, getProps()));
      }

      function addPanelBody(children) {
        bodyElements.push(_react2['default'].createElement(
          'div',
          _extends({ className: bodyClass }, getProps()),
          children
        ));
      }

      function maybeRenderPanelBody() {
        if (panelBodyChildren.length === 0) {
          return;
        }

        addPanelBody(panelBodyChildren);
        panelBodyChildren = [];
      }

      // Handle edge cases where we should not iterate through children.
      if (!Array.isArray(allChildren) || allChildren.length === 0) {
        if (_this.shouldRenderFill(allChildren)) {
          addPanelChild(allChildren);
        } else {
          addPanelBody(allChildren);
        }
      } else {
        allChildren.forEach(function (child) {
          if (_this.shouldRenderFill(child)) {
            maybeRenderPanelBody();

            // Separately add the filled element.
            addPanelChild(child);
          } else {
            panelBodyChildren.push(child);
          }
        });

        maybeRenderPanelBody();
      }

      return bodyElements;
    };

    this.shouldRenderFill = function (child) {
      return _react2['default'].isValidElement(child) && child.props.fill != null;
    };

    this.renderHeading = function (headerRole) {
      var header = _this.props.header;

      if (!header) {
        return null;
      }

      if (!_react2['default'].isValidElement(header) || Array.isArray(header)) {
        header = _this.props.collapsible ? _this.renderCollapsibleTitle(header, headerRole) : header;
      } else {
        var className = _classnames2['default'](_utilsBootstrapUtils2['default'].prefix(_this.props, 'title'), header.props.className);

        if (_this.props.collapsible) {
          header = _react.cloneElement(header, {
            className: className,
            children: _this.renderAnchor(header.props.children, headerRole)
          });
        } else {
          header = _react.cloneElement(header, { className: className });
        }
      }

      return _react2['default'].createElement(
        'div',
        { className: _utilsBootstrapUtils2['default'].prefix(_this.props, 'heading') },
        header
      );
    };

    this.renderAnchor = function (header, headerRole) {
      return _react2['default'].createElement(
        'a',
        {
          href: '#' + (_this.props.id || ''),
          'aria-controls': _this.props.collapsible ? _this.props.id : null,
          className: _this.isExpanded() ? null : 'collapsed',
          'aria-expanded': _this.isExpanded(),
          'aria-selected': _this.isExpanded(),
          onClick: _this.handleSelect,
          role: headerRole },
        header
      );
    };

    this.renderCollapsibleTitle = function (header, headerRole) {
      return _react2['default'].createElement(
        'h4',
        { className: _utilsBootstrapUtils2['default'].prefix(_this.props, 'title'), role: 'presentation' },
        _this.renderAnchor(header, headerRole)
      );
    };

    this.renderFooter = function () {
      if (!_this.props.footer) {
        return null;
      }

      return _react2['default'].createElement(
        'div',
        { className: _utilsBootstrapUtils2['default'].prefix(_this.props, 'footer') },
        _this.props.footer
      );
    };
  }

  Panel.prototype.render = function render() {
    var _props = this.props;
    var headerRole = _props.headerRole;
    var panelRole = _props.panelRole;

    var props = _objectWithoutProperties(_props, ['headerRole', 'panelRole']);

    return _react2['default'].createElement(
      'div',
      _extends({}, props, {
        className: _classnames2['default'](this.props.className, _utilsBootstrapUtils2['default'].getClassSet(this.props)),
        id: this.props.collapsible ? null : this.props.id, onSelect: null }),
      this.renderHeading(headerRole),
      this.props.collapsible ? this.renderCollapsibleBody(panelRole) : this.renderBody(),
      this.renderFooter()
    );
  };

  _createClass(Panel, null, [{
    key: 'propTypes',
    value: {
      collapsible: _propTypes2['default'].bool,
      onSelect: _propTypes2['default'].func,
      header: _propTypes2['default'].node,
      id: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
      footer: _propTypes2['default'].node,
      defaultExpanded: _propTypes2['default'].bool,
      expanded: _propTypes2['default'].bool,
      eventKey: _propTypes2['default'].any,
      headerRole: _propTypes2['default'].string,
      panelRole: _propTypes2['default'].string,

      onEnter: _Collapse2['default'].propTypes.onEnter,
      onEntering: _Collapse2['default'].propTypes.onEntering,
      onEntered: _Collapse2['default'].propTypes.onEntered,
      onExit: _Collapse2['default'].propTypes.onExit,
      onExiting: _Collapse2['default'].propTypes.onExiting,
      onExited: _Collapse2['default'].propTypes.onExited
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      defaultExpanded: false
    },
    enumerable: true
  }]);

  return Panel;
})(_react2['default'].Component);

var PANEL_STATES = _styleMaps.State.values().concat(_styleMaps.DEFAULT, _styleMaps.PRIMARY);

exports['default'] = _utilsBootstrapUtils.bsStyles(PANEL_STATES, _styleMaps.DEFAULT, _utilsBootstrapUtils.bsClass('panel', Panel));
module.exports = exports['default'];