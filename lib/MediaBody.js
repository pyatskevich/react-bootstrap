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

var MediaBody = (function (_React$Component) {
  _inherits(MediaBody, _React$Component);

  function MediaBody() {
    _classCallCheck(this, MediaBody);

    _React$Component.apply(this, arguments);
  }

  MediaBody.prototype.render = function render() {
    var _props = this.props;
    var ComponentClass = _props.componentClass;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['componentClass', 'className']);

    return _react2['default'].createElement(ComponentClass, _extends({}, props, { className: _classnames2['default'](className, 'media-body') }));
  };

  _createClass(MediaBody, null, [{
    key: 'displayName',
    value: 'Media.Body',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      /**
       * You can use a custom element for the media body
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

  return MediaBody;
})(_react2['default'].Component);

exports['default'] = MediaBody;
module.exports = exports['default'];