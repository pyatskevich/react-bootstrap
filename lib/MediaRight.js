'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var MediaRight = (function (_React$Component) {
  _inherits(MediaRight, _React$Component);

  function MediaRight() {
    _classCallCheck(this, MediaRight);

    _React$Component.apply(this, arguments);
  }

  MediaRight.prototype.render = function render() {
    var _classNames;

    var _props = this.props;
    var align = _props.align;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['align', 'className']);

    var classes = _classnames2['default'](className, 'media-right', (_classNames = {}, _classNames['media-' + align] = Boolean(align), _classNames));

    // Only add the media-alignment class if align is passed in props
    return _react2['default'].createElement('div', _extends({}, props, { className: classes }));
  };

  _createClass(MediaRight, null, [{
    key: 'displayName',
    value: 'Media.Right',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      /**
       * Align the media to the top, middle or bottom
       * of the media object
       */
      align: _propTypes2['default'].oneOf(['top', 'middle', 'bottom'])
    },
    enumerable: true
  }]);

  return MediaRight;
})(_react2['default'].Component);

exports['default'] = MediaRight;
module.exports = exports['default'];