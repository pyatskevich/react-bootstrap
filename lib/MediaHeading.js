'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var MediaHeading = (function (_React$Component) {
  _inherits(MediaHeading, _React$Component);

  function MediaHeading() {
    _classCallCheck(this, MediaHeading);

    _React$Component.apply(this, arguments);
  }

  MediaHeading.prototype.render = function render() {
    var _props = this.props;
    var ComponentClass = _props.componentClass;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    return _react2['default'].createElement(ComponentClass, _extends({}, props, { className: _classnames2['default'](className, 'media-heading') }));
  };

  _createClass(MediaHeading, null, [{
    key: 'displayName',
    value: 'Media.Heading',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      /**
       * You can use a custom element for the media heading
       */
      componentClass: _reactPropTypesLibElementType2['default']
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      componentClass: 'h4'
    },
    enumerable: true
  }]);

  return MediaHeading;
})(_react2['default'].Component);

exports['default'] = MediaHeading;
module.exports = exports['default'];