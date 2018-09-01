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

var Image = (function (_React$Component) {
  _inherits(Image, _React$Component);

  function Image() {
    _classCallCheck(this, Image);

    _React$Component.apply(this, arguments);
  }

  Image.prototype.render = function render() {
    var classes = {
      'img-responsive': this.props.responsive,
      'img-rounded': this.props.rounded,
      'img-circle': this.props.circle,
      'img-thumbnail': this.props.thumbnail
    };

    return _react2['default'].createElement('img', _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }));
  };

  _createClass(Image, null, [{
    key: 'propTypes',
    value: {

      /**
       * Sets image as responsive image
       */
      responsive: _propTypes2['default'].bool,

      /**
       * Sets image shape as rounded
       */
      rounded: _propTypes2['default'].bool,

      /**
       * Sets image shape as circle
       */
      circle: _propTypes2['default'].bool,

      /**
       * Sets image shape as thumbnail
       */
      thumbnail: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      responsive: false,
      rounded: false,
      circle: false,
      thumbnail: false
    },
    enumerable: true
  }]);

  return Image;
})(_react2['default'].Component);

exports['default'] = Image;
module.exports = exports['default'];