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

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var Thumbnail = (function (_React$Component) {
  _inherits(Thumbnail, _React$Component);

  function Thumbnail() {
    _classCallCheck(this, Thumbnail);

    _React$Component.apply(this, arguments);
  }

  Thumbnail.prototype.render = function render() {
    var classes = _utilsBootstrapUtils2['default'].getClassSet(this.props);

    if (this.props.href) {
      return _react2['default'].createElement(
        _SafeAnchor2['default'],
        _extends({}, this.props, { href: this.props.href, className: _classnames2['default'](this.props.className, classes) }),
        _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt })
      );
    }

    if (this.props.children) {
      return _react2['default'].createElement(
        'div',
        _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
        _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt }),
        _react2['default'].createElement(
          'div',
          { className: 'caption' },
          this.props.children
        )
      );
    }

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      _react2['default'].createElement('img', { src: this.props.src, alt: this.props.alt })
    );
  };

  _createClass(Thumbnail, null, [{
    key: 'propTypes',
    value: {
      alt: _propTypes2['default'].string,
      href: _propTypes2['default'].string,
      src: _propTypes2['default'].string
    },
    enumerable: true
  }]);

  return Thumbnail;
})(_react2['default'].Component);

exports['default'] = _utilsBootstrapUtils.bsClass('thumbnail', Thumbnail);
module.exports = exports['default'];