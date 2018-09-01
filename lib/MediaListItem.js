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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var MediaListItem = (function (_React$Component) {
  _inherits(MediaListItem, _React$Component);

  function MediaListItem() {
    _classCallCheck(this, MediaListItem);

    _React$Component.apply(this, arguments);
  }

  MediaListItem.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['className']);

    return _react2['default'].createElement('li', _extends({}, props, { className: _classnames2['default'](className, 'media') }));
  };

  _createClass(MediaListItem, null, [{
    key: 'displayName',
    value: 'Media.ListItem',
    enumerable: true
  }]);

  return MediaListItem;
})(_react2['default'].Component);

exports['default'] = MediaListItem;
module.exports = exports['default'];