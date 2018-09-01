'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Col = require('./Col');

var _Col2 = _interopRequireDefault(_Col);

var _Nav = require('./Nav');

var _Nav2 = _interopRequireDefault(_Nav);

var _NavItem = require('./NavItem');

var _NavItem2 = _interopRequireDefault(_NavItem);

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

var _keycode = require('keycode');

var _keycode2 = _interopRequireDefault(_keycode);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var paneId = function paneId(props, child) {
  return child.props.id ? child.props.id : props.id && props.id + '___pane___' + child.props.eventKey;
};
var tabId = function tabId(props, child) {
  return child.props.id ? child.props.id + '___tab' : props.id && props.id + '___tab___' + child.props.eventKey;
};

var findChild = _utilsValidComponentChildren2['default'].find;

function getDefaultActiveKeyFromChildren(children) {
  var defaultActiveKey = undefined;

  _utilsValidComponentChildren2['default'].forEach(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });

  return defaultActiveKey;
}

function move(children, currentKey, keys, moveNext) {
  var lastIdx = keys.length - 1;
  var stopAt = keys[moveNext ? Math.max(lastIdx, 0) : 0];
  var nextKey = currentKey;

  function getNext() {
    var idx = keys.indexOf(nextKey);
    nextKey = moveNext ? keys[Math.min(lastIdx, idx + 1)] : keys[Math.max(0, idx - 1)];

    return findChild(children, function (_child) {
      return _child.props.eventKey === nextKey;
    });
  }

  var next = getNext();

  while (next.props.eventKey !== stopAt && next.props.disabled) {
    next = getNext();
  }

  return next.props.disabled ? currentKey : next.props.eventKey;
}

var Tabs = (function (_React$Component) {
  _inherits(Tabs, _React$Component);

  _createClass(Tabs, null, [{
    key: 'propTypes',
    value: {
      activeKey: _propTypes2['default'].any,
      defaultActiveKey: _propTypes2['default'].any,
      /**
       * Navigation style for tabs
       *
       * If not specified, it will be treated as `'tabs'` when vertically
       * positioned and `'pills'` when horizontally positioned.
       */
      bsStyle: _propTypes2['default'].oneOf(['tabs', 'pills']),
      animation: _propTypes2['default'].bool,
      id: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
      onSelect: _propTypes2['default'].func,
      position: _propTypes2['default'].oneOf(['top', 'left', 'right']),
      /**
       * Number of grid columns for the tabs if horizontally positioned
       *
       * This accepts either a single width or a mapping of size to width.
       */
      tabWidth: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object]),
      /**
       * Number of grid columns for the panes if horizontally positioned
       *
       * This accepts either a single width or a mapping of size to width. If not
       * specified, it will be treated as `styleMaps.GRID_COLUMNS` minus
       * `tabWidth`.
       */
      paneWidth: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].object]),
      /**
       * Render without clearfix if horizontally positioned
       */
      standalone: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      bsClass: 'tab',
      animation: true,
      tabWidth: 2,
      position: 'top',
      standalone: false
    },
    enumerable: true
  }]);

  function Tabs(props) {
    var _this = this;

    _classCallCheck(this, Tabs);

    _React$Component.call(this, props);

    this.handlePaneAnimateOutEnd = function () {
      _this.setState({
        previousActiveKey: null
      });
    };

    this.getActiveKey = function () {
      return _this.props.activeKey !== undefined ? _this.props.activeKey : _this.state.activeKey;
    };

    this.renderPane = function (child, index) {
      var previousActiveKey = _this.state.previousActiveKey;

      var shouldPaneBeSetActive = child.props.eventKey === _this.getActiveKey();
      var thereIsNoActivePane = previousActiveKey == null;

      var paneIsAlreadyActive = previousActiveKey != null && child.props.eventKey === previousActiveKey;

      return _react.cloneElement(child, {
        active: shouldPaneBeSetActive && (thereIsNoActivePane || !_this.props.animation),
        id: paneId(_this.props, child),
        'aria-labelledby': tabId(_this.props, child),
        key: child.key ? child.key : index,
        animation: _this.props.animation,
        onAnimateOutEnd: paneIsAlreadyActive ? _this.handlePaneAnimateOutEnd : null
      });
    };

    this.renderTab = function (child, index) {
      if (child.props.title == null) {
        return null;
      }

      var _child$props = child.props;
      var eventKey = _child$props.eventKey;
      var title = _child$props.title;
      var disabled = _child$props.disabled;
      var onKeyDown = _child$props.onKeyDown;
      var tabClassName = _child$props.tabClassName;
      var _child$props$tabIndex = _child$props.tabIndex;
      var tabIndex = _child$props$tabIndex === undefined ? 0 : _child$props$tabIndex;

      var isActive = _this.getActiveKey() === eventKey;

      return _react2['default'].createElement(
        _NavItem2['default'],
        {
          linkId: tabId(_this.props, child),
          ref: function (ref) {
            return (_this._tabs || (_this._tabs = []))[index] = ref;
          },
          'aria-controls': paneId(_this.props, child),
          onKeyDown: _utilsCreateChainedFunction2['default'](_this.handleKeyDown, onKeyDown),
          eventKey: eventKey,
          tabIndex: isActive ? tabIndex : -1,
          disabled: disabled,
          className: tabClassName },
        title
      );
    };

    this.getColProps = function (_ref) {
      var tabWidth = _ref.tabWidth;
      var paneWidth = _ref.paneWidth;

      var tabsColProps = undefined;
      if (tabWidth instanceof Object) {
        tabsColProps = tabWidth;
      } else {
        tabsColProps = { xs: tabWidth };
      }

      var panesColProps = undefined;
      if (paneWidth == null) {
        panesColProps = {};
        _Object$keys(tabsColProps).forEach(function (size) {
          panesColProps[size] = _styleMaps2['default'].GRID_COLUMNS - tabsColProps[size];
        });
      } else if (paneWidth instanceof Object) {
        panesColProps = paneWidth;
      } else {
        panesColProps = { xs: paneWidth };
      }

      return { tabsColProps: tabsColProps, panesColProps: panesColProps };
    };

    this.handleSelect = function (selectedKey) {
      if (_this.props.onSelect) {
        _this._isChanging = true;
        _this.props.onSelect(selectedKey);
        _this._isChanging = false;
        return;
      }

      // if there is no external handler, then use embedded one
      var previousActiveKey = _this.getActiveKey();
      if (selectedKey !== previousActiveKey) {
        _this.setState({
          activeKey: selectedKey,
          previousActiveKey: previousActiveKey
        });
      }
    };

    this.handleKeyDown = function (event) {
      var keys = _this._eventKeys();
      var currentKey = _this.getActiveKey() || keys[0];
      var next = undefined;

      switch (event.keyCode) {

        case _keycode2['default'].codes.left:
        case _keycode2['default'].codes.up:
          next = move(_this.props.children, currentKey, keys, false);

          if (next && next !== currentKey) {
            event.preventDefault();
            _this.handleSelect(next);
            _this._needsRefocus = true;
          }
          break;
        case _keycode2['default'].codes.right:
        case _keycode2['default'].codes.down:
          next = move(_this.props.children, currentKey, keys, true);

          if (next && next !== currentKey) {
            event.preventDefault();
            _this.handleSelect(next);
            _this._needsRefocus = true;
          }
          break;
        default:
      }
    };

    this._eventKeys = function () {
      var keys = [];

      _utilsValidComponentChildren2['default'].forEach(_this.props.children, function (_ref2) {
        var eventKey = _ref2.props.eventKey;
        return keys.push(eventKey);
      });

      return keys;
    };

    var defaultActiveKey = props.defaultActiveKey != null ? props.defaultActiveKey : getDefaultActiveKeyFromChildren(props.children);

    this.state = {
      activeKey: defaultActiveKey,
      previousActiveKey: null
    };
  }

  Tabs.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if (nextProps.activeKey != null && nextProps.activeKey !== this.props.activeKey) {
      (function () {
        // check if the 'previousActiveKey' child still exists
        var previousActiveKey = _this2.props.activeKey;
        _react2['default'].Children.forEach(nextProps.children, function (child) {
          if (_react2['default'].isValidElement(child)) {
            if (child.props.eventKey === previousActiveKey) {
              _this2.setState({
                previousActiveKey: previousActiveKey
              });
              return;
            }
          }
        });
      })();
    }
  };

  Tabs.prototype.componentDidUpdate = function componentDidUpdate() {
    var tabs = this._tabs;
    var tabIdx = this._eventKeys().indexOf(this.getActiveKey());

    if (this._needsRefocus) {
      this._needsRefocus = false;
      if (tabs && tabIdx !== -1) {
        var tabNode = _reactDom2['default'].findDOMNode(tabs[tabIdx]);

        if (tabNode) {
          tabNode.firstChild.focus();
        }
      }
    }
  };

  Tabs.prototype.render = function render() {
    var _props = this.props;
    var id = _props.id;
    var className = _props.className;
    var style = _props.style;
    var position = _props.position;
    var bsStyle = _props.bsStyle;
    var tabWidth = _props.tabWidth;
    var paneWidth = _props.paneWidth;
    var standalone = _props.standalone;
    var children = _props.children;

    var props = _objectWithoutProperties(_props, ['id', 'className', 'style', 'position', 'bsStyle', 'tabWidth', 'paneWidth', 'standalone', 'children']);

    var isHorizontal = position === 'left' || position === 'right';

    if (bsStyle == null) {
      bsStyle = isHorizontal ? 'pills' : 'tabs';
    }

    var containerProps = { id: id, className: className, style: style };

    var tabsProps = _extends({}, props, {
      bsStyle: bsStyle,
      bsClass: undefined,
      stacked: isHorizontal,
      activeKey: this.getActiveKey(),
      onSelect: this.handleSelect,
      ref: 'tabs',
      role: 'tablist'
    });
    var childTabs = _utilsValidComponentChildren2['default'].map(children, this.renderTab);

    var panesProps = {
      className: _utilsBootstrapUtils2['default'].prefix(this.props, 'content'),
      ref: 'panes'
    };
    var childPanes = _utilsValidComponentChildren2['default'].map(children, this.renderPane);

    if (isHorizontal) {
      if (!standalone) {
        containerProps.className = _classnames2['default'](containerProps.className, 'clearfix');
      }

      var _getColProps = this.getColProps({ tabWidth: tabWidth, paneWidth: paneWidth });

      var tabsColProps = _getColProps.tabsColProps;
      var panesColProps = _getColProps.panesColProps;

      var tabs = _react2['default'].createElement(
        _Col2['default'],
        _extends({ componentClass: _Nav2['default'] }, tabsProps, tabsColProps),
        childTabs
      );
      var panes = _react2['default'].createElement(
        _Col2['default'],
        _extends({}, panesProps, panesColProps),
        childPanes
      );

      if (position === 'left') {
        return _react2['default'].createElement(
          'div',
          containerProps,
          tabs,
          panes
        );
      }

      return _react2['default'].createElement(
        'div',
        containerProps,
        panes,
        tabs
      );
    }

    return _react2['default'].createElement(
      'div',
      containerProps,
      _react2['default'].createElement(
        _Nav2['default'],
        tabsProps,
        childTabs
      ),
      _react2['default'].createElement(
        'div',
        panesProps,
        childPanes
      )
    );
  };

  Tabs.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    // Defer any updates to this component during the `onSelect` handler.
    return !this._isChanging;
  };

  return Tabs;
})(_react2['default'].Component);

exports['default'] = Tabs;
module.exports = exports['default'];