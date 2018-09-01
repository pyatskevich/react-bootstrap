/* eslint react/prop-types: [2, {ignore: ["container", "containerPadding", "target", "placement", "children"] }] */
/* These properties are validated in 'Portal' and 'Position' components */

'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOverlaysLibOverlay = require('react-overlays/lib/Overlay');

var _reactOverlaysLibOverlay2 = _interopRequireDefault(_reactOverlaysLibOverlay);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var Overlay = (function (_React$Component) {
  _inherits(Overlay, _React$Component);

  function Overlay() {
    _classCallCheck(this, Overlay);

    _React$Component.apply(this, arguments);
  }

  Overlay.prototype.render = function render() {
    var _props = this.props;
    var child = _props.children;
    var transition = _props.animation;

    var props = _objectWithoutProperties(_props, ['children', 'animation']);

    if (transition === true) {
      transition = _Fade2['default'];
    }

    if (transition === false) {
      transition = null;
    }

    if (!transition) {
      child = _react.cloneElement(child, {
        className: _classnames2['default']('in', child.props.className)
      });
    }

    return _react2['default'].createElement(
      _reactOverlaysLibOverlay2['default'],
      _extends({}, props, {
        transition: transition
      }),
      child
    );
  };

  return Overlay;
})(_react2['default'].Component);

Overlay.propTypes = _extends({}, _reactOverlaysLibOverlay2['default'].propTypes, {

  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes2['default'].bool,
  /**
   * Specify whether the overlay should trigger onHide when the user clicks outside the overlay
   */
  rootClose: _propTypes2['default'].bool,
  /**
   * A callback invoked by the overlay when it wishes to be hidden. Required if
   * `rootClose` is specified.
   */
  onHide: _propTypes2['default'].func,

  /**
   * Use animation
   */
  animation: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _reactPropTypesLibElementType2['default']]),

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes2['default'].func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes2['default'].func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes2['default'].func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes2['default'].func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes2['default'].func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes2['default'].func
});

Overlay.defaultProps = {
  animation: _Fade2['default'],
  rootClose: false,
  show: false
};

exports['default'] = Overlay;
module.exports = exports['default'];