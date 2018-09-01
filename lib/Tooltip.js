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

var Tooltip = (function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip() {
    _classCallCheck(this, Tooltip);

    _React$Component.apply(this, arguments);
  }

  Tooltip.prototype.render = function render() {
    var _classes;

    var classes = (_classes = {}, _classes[_utilsBootstrapUtils2['default'].prefix(this.props)] = true, _classes[this.props.placement] = true, _classes);

    var style = _extends({
      'left': this.props.positionLeft,
      'top': this.props.positionTop
    }, this.props.style);

    var arrowStyle = {
      'left': this.props.arrowOffsetLeft,
      'top': this.props.arrowOffsetTop
    };

    return _react2['default'].createElement(
      'div',
      _extends({ role: 'tooltip' }, this.props, { className: _classnames2['default'](this.props.className, classes), style: style }),
      _react2['default'].createElement('div', { className: _utilsBootstrapUtils2['default'].prefix(this.props, 'arrow'), style: arrowStyle }),
      _react2['default'].createElement(
        'div',
        { className: _utilsBootstrapUtils2['default'].prefix(this.props, 'inner') },
        this.props.children
      )
    );
  };

  _createClass(Tooltip, null, [{
    key: 'propTypes',
    value: {
      /**
       * An html id attribute, necessary for accessibility
       * @type {string}
       * @required
       */
      id: _reactPropTypesLibIsRequiredForA11y2['default'](_propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number])),

      /**
       * Sets the direction the Tooltip is positioned towards.
       */
      placement: _propTypes2['default'].oneOf(['top', 'right', 'bottom', 'left']),

      /**
       * The "left" position value for the Tooltip.
       */
      positionLeft: _propTypes2['default'].number,
      /**
       * The "top" position value for the Tooltip.
       */
      positionTop: _propTypes2['default'].number,
      /**
       * The "left" position value for the Tooltip arrow.
       */
      arrowOffsetLeft: _propTypes2['default'].oneOfType([_propTypes2['default'].number, _propTypes2['default'].string]),
      /**
       * The "top" position value for the Tooltip arrow.
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
      bsClass: 'tooltip',
      placement: 'right'
    },
    enumerable: true
  }]);

  return Tooltip;
})(_react2['default'].Component);

exports['default'] = Tooltip;
module.exports = exports['default'];