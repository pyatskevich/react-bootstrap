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

/* eslint-disable react/prop-types */

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _styleMaps = require('./styleMaps');

var _domHelpersUtilScrollbarSize = require('dom-helpers/util/scrollbarSize');

var _domHelpersUtilScrollbarSize2 = _interopRequireDefault(_domHelpersUtilScrollbarSize);

var _domHelpersUtilInDOM = require('dom-helpers/util/inDOM');

var _domHelpersUtilInDOM2 = _interopRequireDefault(_domHelpersUtilInDOM);

var _domHelpersOwnerDocument = require('dom-helpers/ownerDocument');

var _domHelpersOwnerDocument2 = _interopRequireDefault(_domHelpersOwnerDocument);

var _domHelpersEvents = require('dom-helpers/events');

var _domHelpersEvents2 = _interopRequireDefault(_domHelpersEvents);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _Fade = require('./Fade');

var _Fade2 = _interopRequireDefault(_Fade);

var _ModalDialog = require('./ModalDialog');

var _ModalDialog2 = _interopRequireDefault(_ModalDialog);

var _ModalBody = require('./ModalBody');

var _ModalBody2 = _interopRequireDefault(_ModalBody);

var _ModalHeader = require('./ModalHeader');

var _ModalHeader2 = _interopRequireDefault(_ModalHeader);

var _ModalTitle = require('./ModalTitle');

var _ModalTitle2 = _interopRequireDefault(_ModalTitle);

var _ModalFooter = require('./ModalFooter');

var _ModalFooter2 = _interopRequireDefault(_ModalFooter);

var _reactOverlaysLibModal = require('react-overlays/lib/Modal');

var _reactOverlaysLibModal2 = _interopRequireDefault(_reactOverlaysLibModal);

var _reactOverlaysLibUtilsIsOverflowing = require('react-overlays/lib/utils/isOverflowing');

var _reactOverlaysLibUtilsIsOverflowing2 = _interopRequireDefault(_reactOverlaysLibUtilsIsOverflowing);

var _lodashCompatObjectPick = require('lodash-compat/object/pick');

var _lodashCompatObjectPick2 = _interopRequireDefault(_lodashCompatObjectPick);

var Modal = (function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _this = this;

    _classCallCheck(this, Modal);

    _React$Component.apply(this, arguments);

    this.state = {
      modalStyles: {}
    };

    this._onShow = function () {
      _domHelpersEvents2['default'].on(window, 'resize', _this.handleWindowResize);

      _this.setState(_this._getStyles());

      if (_this.props.onEntering) {
        var _props;

        (_props = _this.props).onEntering.apply(_props, arguments);
      }
    };

    this._onHide = function () {
      _domHelpersEvents2['default'].off(window, 'resize', _this.handleWindowResize);

      if (_this.props.onExited) {
        var _props2;

        (_props2 = _this.props).onExited.apply(_props2, arguments);
      }
    };

    this.handleDialogClick = function (e) {
      if (e.target !== e.currentTarget) {
        return;
      }

      _this.props.onHide();
    };

    this.handleWindowResize = function () {
      _this.setState(_this._getStyles());
    };

    this._getStyles = function () {
      if (!_domHelpersUtilInDOM2['default']) {
        return {};
      }

      var node = _reactDom2['default'].findDOMNode(_this._modal);
      var doc = _domHelpersOwnerDocument2['default'](node);

      var scrollHt = node.scrollHeight;
      var bodyIsOverflowing = _reactOverlaysLibUtilsIsOverflowing2['default'](_reactDom2['default'].findDOMNode(_this.props.container || doc.body));
      var modalIsOverflowing = scrollHt > doc.documentElement.clientHeight;

      return {
        modalStyles: {
          paddingRight: bodyIsOverflowing && !modalIsOverflowing ? _domHelpersUtilScrollbarSize2['default']() : void 0,
          paddingLeft: !bodyIsOverflowing && modalIsOverflowing ? _domHelpersUtilScrollbarSize2['default']() : void 0
        }
      };
    };
  }

  Modal.prototype.getChildContext = function getChildContext() {
    return {
      $bs_onModalHide: this.props.onHide
    };
  };

  Modal.prototype.componentWillUnmount = function componentWillUnmount() {
    _domHelpersEvents2['default'].off(window, 'resize', this.handleWindowResize);
  };

  Modal.prototype.render = function render() {
    var _this2 = this;

    var _props3 = this.props;
    var className = _props3.className;
    var children = _props3.children;
    var dialogClassName = _props3.dialogClassName;
    var animation = _props3.animation;

    var props = _objectWithoutProperties(_props3, ['className', 'children', 'dialogClassName', 'animation']);

    var modalStyles = this.state.modalStyles;

    var inClass = { 'in': props.show && !animation };
    var Dialog = props.dialogComponent;

    var parentProps = _lodashCompatObjectPick2['default'](props, _Object$keys(_reactOverlaysLibModal2['default'].propTypes).concat(['onExit', 'onExiting', 'onEnter', 'onEntered']) // the rest are fired in _onHide() and _onShow()
    );

    var modal = _react2['default'].createElement(
      Dialog,
      _extends({
        key: 'modal',
        ref: function (ref) {
          return _this2._modal = ref;
        }
      }, props, {
        style: modalStyles,
        className: _classnames2['default'](className, inClass),
        dialogClassName: dialogClassName,
        onClick: props.backdrop === true ? this.handleDialogClick : null
      }),
      this.props.children
    );

    return _react2['default'].createElement(
      _reactOverlaysLibModal2['default'],
      _extends({}, parentProps, {
        show: props.show,
        ref: function (ref) {
          _this2._wrapper = ref && ref.refs.modal;
          _this2._backdrop = ref && ref.refs.backdrop;
        },
        onEntering: this._onShow,
        onExited: this._onHide,
        backdropClassName: _classnames2['default'](_utilsBootstrapUtils2['default'].prefix(props, 'backdrop'), inClass),
        containerClassName: _utilsBootstrapUtils2['default'].prefix(props, 'open'),
        transition: animation ? _Fade2['default'] : undefined,
        dialogTransitionTimeout: Modal.TRANSITION_DURATION,
        backdropTransitionTimeout: Modal.BACKDROP_TRANSITION_DURATION
      }),
      modal
    );
  };

  _createClass(Modal, null, [{
    key: 'propTypes',
    value: _extends({}, _reactOverlaysLibModal2['default'].propTypes, _ModalDialog2['default'].propTypes, {

      /**
       * Include a backdrop component. Specify 'static' for a backdrop that doesn't trigger an "onHide" when clicked.
       */
      backdrop: _propTypes2['default'].oneOf(['static', true, false]),

      /**
       * Close the modal when escape key is pressed
       */
      keyboard: _propTypes2['default'].bool,

      /**
       * Open and close the Modal with a slide and fade animation.
       */
      animation: _propTypes2['default'].bool,

      /**
       * A Component type that provides the modal content Markup. This is a useful prop when you want to use your own
       * styles and markup to create a custom modal component.
       */
      dialogComponent: _reactPropTypesLibElementType2['default'],

      /**
       * When `true` The modal will automatically shift focus to itself when it opens, and replace it to the last focused element when it closes.
       * Generally this should never be set to false as it makes the Modal less accessible to assistive technologies, like screen-readers.
       */
      autoFocus: _propTypes2['default'].bool,

      /**
       * When `true` The modal will prevent focus from leaving the Modal while open.
       * Consider leaving the default value here, as it is necessary to make the Modal work well with assistive technologies,
       * such as screen readers.
       */
      enforceFocus: _propTypes2['default'].bool,

      /**
       * Hide this from automatic props documentation generation.
       * @private
       */
      bsStyle: _propTypes2['default'].string,

      /**
       * When `true` The modal will show itself.
       */
      show: _propTypes2['default'].bool,

      /**
       * A callback fired when the header closeButton or non-static backdrop is
       * clicked. Required if either are specified.
       */
      onHide: _propTypes2['default'].func,

      /**
       * Callback fired before the Modal transitions in
       */
      onEnter: _propTypes2['default'].func,

      /**
       * Callback fired as the Modal begins to transition in
       */
      onEntering: _propTypes2['default'].func,

      /**
       * Callback fired after the Modal finishes transitioning in
       */
      onEntered: _propTypes2['default'].func,

      /**
       * Callback fired right before the Modal transitions out
       */
      onExit: _propTypes2['default'].func,

      /**
       * Callback fired as the Modal begins to transition out
       */
      onExiting: _propTypes2['default'].func,

      /**
       * Callback fired after the Modal finishes transitioning out
       */
      onExited: _propTypes2['default'].func
    }),
    enumerable: true
  }, {
    key: 'childContextTypes',
    value: {
      '$bs_onModalHide': _propTypes2['default'].func
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: _extends({}, _reactOverlaysLibModal2['default'].defaultProps, {
      bsClass: 'modal',
      animation: true,
      dialogComponent: _ModalDialog2['default']
    }),
    enumerable: true
  }]);

  return Modal;
})(_react2['default'].Component);

Modal.Body = _ModalBody2['default'];
Modal.Header = _ModalHeader2['default'];
Modal.Title = _ModalTitle2['default'];
Modal.Footer = _ModalFooter2['default'];

Modal.Dialog = _ModalDialog2['default'];

Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;

exports['default'] = _utilsBootstrapUtils.bsSizes([_styleMaps.Sizes.LARGE, _styleMaps.Sizes.SMALL], _utilsBootstrapUtils.bsClass('modal', Modal));
module.exports = exports['default'];