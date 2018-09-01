'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _domHelpersQueryContains = require('dom-helpers/query/contains');

var _domHelpersQueryContains2 = _interopRequireDefault(_domHelpersQueryContains);

var _lodashCompatObjectPick = require('lodash-compat/object/pick');

var _lodashCompatObjectPick2 = _interopRequireDefault(_lodashCompatObjectPick);

/* eslint-disable react/prop-types */

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _Overlay = require('./Overlay');

var _Overlay2 = _interopRequireDefault(_Overlay);

var _utilsCreateChainedFunction = require('./utils/createChainedFunction');

var _utilsCreateChainedFunction2 = _interopRequireDefault(_utilsCreateChainedFunction);

/**
 * Check if value one is inside or equal to the of value
 *
 * @param {string} one
 * @param {string|array} of
 * @returns {boolean}
 */
function isOneOf(one, of) {
  if (Array.isArray(of)) {
    return of.indexOf(one) >= 0;
  }
  return one === of;
}

var OverlayTrigger = (function (_React$Component) {
  _inherits(OverlayTrigger, _React$Component);

  function OverlayTrigger() {
    var _this = this;

    _classCallCheck(this, OverlayTrigger);

    _React$Component.apply(this, arguments);

    this.state = {
      isOverlayShown: this.props.defaultOverlayShown
    };

    this.show = function () {
      _this.setState({
        isOverlayShown: true
      });
    };

    this.hide = function () {
      _this.setState({
        isOverlayShown: false
      });
    };

    this.toggle = function () {
      if (_this.state.isOverlayShown) {
        _this.hide();
      } else {
        _this.show();
      }
    };

    this.renderOverlay = function () {
      _reactDom2['default'].unstable_renderSubtreeIntoContainer(_this, _this._overlay, _this._mountNode);
    };

    this.getOverlayTarget = function () {
      return _reactDom2['default'].findDOMNode(_this);
    };

    this.getOverlay = function () {
      var overlayProps = _extends({}, _lodashCompatObjectPick2['default'](_this.props, _Object$keys(_Overlay2['default'].propTypes)), {
        show: _this.state.isOverlayShown,
        onHide: _this.hide,
        target: _this.getOverlayTarget,
        onExit: _this.props.onExit,
        onExiting: _this.props.onExiting,
        onExited: _this.props.onExited,
        onEnter: _this.props.onEnter,
        onEntering: _this.props.onEntering,
        onEntered: _this.props.onEntered
      });

      var overlay = _react.cloneElement(_this.props.overlay, {
        placement: overlayProps.placement,
        container: overlayProps.container
      });

      return _react2['default'].createElement(
        _Overlay2['default'],
        overlayProps,
        overlay
      );
    };

    this.handleDelayedShow = function () {
      if (_this._hoverHideDelay != null) {
        clearTimeout(_this._hoverHideDelay);
        _this._hoverHideDelay = null;
        return;
      }

      if (_this.state.isOverlayShown || _this._hoverShowDelay != null) {
        return;
      }

      var delay = _this.props.delayShow != null ? _this.props.delayShow : _this.props.delay;

      if (!delay) {
        _this.show();
        return;
      }

      _this._hoverShowDelay = setTimeout(function () {
        _this._hoverShowDelay = null;
        _this.show();
      }, delay);
    };

    this.handleDelayedHide = function () {
      if (_this._hoverShowDelay != null) {
        clearTimeout(_this._hoverShowDelay);
        _this._hoverShowDelay = null;
        return;
      }

      if (!_this.state.isOverlayShown || _this._hoverHideDelay != null) {
        return;
      }

      var delay = _this.props.delayHide != null ? _this.props.delayHide : _this.props.delay;

      if (!delay) {
        _this.hide();
        return;
      }

      _this._hoverHideDelay = setTimeout(function () {
        _this._hoverHideDelay = null;
        _this.hide();
      }, delay);
    };

    this.handleMouseOverOut = function (handler, e) {
      var target = e.currentTarget;
      var related = e.relatedTarget || e.nativeEvent.toElement;

      if (!related || related !== target && !_domHelpersQueryContains2['default'](target, related)) {
        handler(e);
      }
    };
  }

  OverlayTrigger.prototype.componentWillMount = function componentWillMount() {
    this.handleMouseOver = this.handleMouseOverOut.bind(null, this.handleDelayedShow);
    this.handleMouseOut = this.handleMouseOverOut.bind(null, this.handleDelayedHide);
  };

  OverlayTrigger.prototype.componentDidMount = function componentDidMount() {
    this._mountNode = document.createElement('div');
    this.renderOverlay();
  };

  OverlayTrigger.prototype.componentWillUnmount = function componentWillUnmount() {
    _reactDom2['default'].unmountComponentAtNode(this._mountNode);
    this._mountNode = null;
    clearTimeout(this._hoverShowDelay);
    clearTimeout(this._hoverHideDelay);
  };

  OverlayTrigger.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this._mountNode) {
      this.renderOverlay();
    }
  };

  OverlayTrigger.prototype.render = function render() {
    var trigger = _react2['default'].Children.only(this.props.children);
    var triggerProps = trigger.props;

    var props = {
      'aria-describedby': this.props.overlay.props.id
    };

    // create in render otherwise owner is lost...
    this._overlay = this.getOverlay();

    props.onClick = _utilsCreateChainedFunction2['default'](triggerProps.onClick, this.props.onClick);

    if (isOneOf('click', this.props.trigger)) {
      props.onClick = _utilsCreateChainedFunction2['default'](this.toggle, props.onClick);
    }

    if (isOneOf('hover', this.props.trigger)) {
      process.env.NODE_ENV !== 'production' ? _warning2['default'](!(this.props.trigger === 'hover'), '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibilty of the overlay to just mouse users. ' + 'Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : undefined;

      props.onMouseOver = _utilsCreateChainedFunction2['default'](this.handleMouseOver, this.props.onMouseOver, triggerProps.onMouseOver);
      props.onMouseOut = _utilsCreateChainedFunction2['default'](this.handleMouseOut, this.props.onMouseOut, triggerProps.onMouseOut);
    }

    if (isOneOf('focus', this.props.trigger)) {
      props.onFocus = _utilsCreateChainedFunction2['default'](this.handleDelayedShow, this.props.onFocus, triggerProps.onFocus);
      props.onBlur = _utilsCreateChainedFunction2['default'](this.handleDelayedHide, this.props.onBlur, triggerProps.onBlur);
    }

    return _react.cloneElement(trigger, props);
  };

  _createClass(OverlayTrigger, null, [{
    key: 'propTypes',
    value: _extends({}, _Overlay2['default'].propTypes, {

      /**
      * Specify which action or actions trigger Overlay visibility
      */
      trigger: _propTypes2['default'].oneOfType([_propTypes2['default'].oneOf(['click', 'hover', 'focus']), _propTypes2['default'].arrayOf(_propTypes2['default'].oneOf(['click', 'hover', 'focus']))]),

      /**
       * A millisecond delay amount to show and hide the Overlay once triggered
       */
      delay: _propTypes2['default'].number,
      /**
       * A millisecond delay amount before showing the Overlay once triggered.
       */
      delayShow: _propTypes2['default'].number,
      /**
       * A millisecond delay amount before hiding the Overlay once triggered.
       */
      delayHide: _propTypes2['default'].number,

      /**
       * The initial visibility state of the Overlay, for more nuanced visibility controll consider
       * using the Overlay component directly.
       */
      defaultOverlayShown: _propTypes2['default'].bool,

      /**
       * An element or text to overlay next to the target.
       */
      overlay: _propTypes2['default'].node.isRequired,

      /**
       * @private
       */
      onBlur: _propTypes2['default'].func,
      /**
       * @private
       */
      onClick: _propTypes2['default'].func,
      /**
       * @private
       */
      onFocus: _propTypes2['default'].func,
      /**
       * @private
       */
      onMouseEnter: _propTypes2['default'].func,
      /**
       * @private
       */
      onMouseLeave: _propTypes2['default'].func,

      // override specific overlay props
      /**
       * @private
       */
      target: function target() {},
      /**
      * @private
      */
      onHide: function onHide() {},
      /**
       * @private
       */
      show: function show() {}
    }),
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      defaultOverlayShown: false,
      trigger: ['hover', 'focus']
    },
    enumerable: true
  }]);

  return OverlayTrigger;
})(_react2['default'].Component);

exports['default'] = OverlayTrigger;
module.exports = exports['default'];

// Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker moving
// from one child element to another.