'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var CarouselCaption = (function (_React$Component) {
  _inherits(CarouselCaption, _React$Component);

  function CarouselCaption() {
    _classCallCheck(this, CarouselCaption);

    _React$Component.apply(this, arguments);
  }

  CarouselCaption.prototype.render = function render() {
    var ComponentClass = this.props.componentClass;

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'carousel-caption') }),
      this.props.children
    );
  };

  _createClass(CarouselCaption, null, [{
    key: 'displayName',
    value: 'Carousel.Caption',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      /**
       * You can use a custom element for this component
       */
      componentClass: _reactPropTypesLibElementType2['default']
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      componentClass: 'div'
    },
    enumerable: true
  }]);

  return CarouselCaption;
})(_react2['default'].Component);

exports['default'] = CarouselCaption;
module.exports = exports['default'];