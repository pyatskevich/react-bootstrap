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

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _reactPropTypesLibIsRequiredForA11y = require('react-prop-types/lib/isRequiredForA11y');

var _reactPropTypesLibIsRequiredForA11y2 = _interopRequireDefault(_reactPropTypesLibIsRequiredForA11y);

var Popover = (function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _this = this;

    _classCallCheck(this, Popover);

    _React$Component.apply(this, arguments);

    this.renderTitle = function () {
      return _react2['default'].createElement(
        'h3',
        { className: _utilsBootstrapUtils2['default'].prefix(_this.props, 'title') },
        _this.props.title
      );
    };
  }

  Popover.prototype.render = function render() {
    var _classes;

    var classes = (_classes = {}, _classes[_utilsBootstrapUtils2['default'].prefix(this.props)] = true, _classes[this.props.placement] = true, _classes);

    var style = _extends({
      'left': this.props.positionLeft,
      'top': this.props.positionTop,
      'display': 'block'
    }, this.props.style);

    // eslint-disable-line react/prop-types
    var arrowStyle = {
      'left': this.props.arrowOffsetLeft,
      'top': this.props.arrowOffsetTop
    };

    return _react2['default'].createElement(
      'div',
      _extends({ role: 'tooltip' }, this.props, { className: _classnames2['default'](this.props.className, classes), style: style, title: null }),
      _react2['default'].createElement('div', { className: 'arrow', style: arrowStyle }),
      this.props.title ? this.renderTitle() : null,
      _react2['default'].createElement(
        'div',
        { className: _utilsBootstrapUtils2['default'].prefix(this.props, 'content') },
        this.props.children
      )
    );
  };

  _createClass(Popover, null, [{
    key: 'propTypes',
    value: {

      /**
       * An html id attribute, necessary for accessibility
       * @type {string}
       * @required
       */
      id: _reactPropTypesLibIsRequiredForA11y2['default'](_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])),

      /**
       * Sets the direction the Popover is positioned towards.
       */
      placement: _propTypes2['default'].oneOf(['top', 'right', 'bottom', 'left']),

      /**
       * The "left" position value for the Popover.
       */
      positionLeft: _propTypes2['default'].number,
      /**
       * The "top" position value for the Popover.
       */
      positionTop: _propTypes2['default'].number,
      /**
       * The "left" position value for the Popover arrow.
       */
      arrowOffsetLeft: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
      /**
       * The "top" position value for the Popover arrow.
       */
      arrowOffsetTop: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
      /**
       * Title text
       */
      title: _propTypes2['default'].node
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      placement: 'right',
      bsClass: 'popover'
    },
    enumerable: true
  }]);

  return Popover;
})(_react2['default'].Component);

exports['default'] = Popover;
module.exports = exports['default'];
// we don't want to expose the `style` property