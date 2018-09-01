// https://www.npmjs.org/package/react-interpolate-component
// TODO: Drop this in favor of es6 string interpolation

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

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var REGEXP = /\%\((.+?)\)s/;

var Interpolate = (function (_React$Component) {
  _inherits(Interpolate, _React$Component);

  function Interpolate() {
    _classCallCheck(this, Interpolate);

    _React$Component.apply(this, arguments);
  }

  Interpolate.prototype.render = function render() {
    var format = _utilsValidComponentChildren2['default'].hasValidComponent(this.props.children) || typeof this.props.children === 'string' ? this.props.children : this.props.format;
    var parent = this.props.component;
    var unsafe = this.props.unsafe === true;
    var props = _extends({}, this.props);

    delete props.children;
    delete props.format;
    delete props.component;
    delete props.unsafe;

    if (unsafe) {
      var content = format.split(REGEXP).reduce(function (memo, match, index) {
        var html = undefined;

        if (index % 2 === 0) {
          html = match;
        } else {
          html = props[match];
          delete props[match];
        }

        if (_react2['default'].isValidElement(html)) {
          throw new Error('cannot interpolate a React component into unsafe text');
        }

        memo += html;

        return memo;
      }, '');

      props.dangerouslySetInnerHTML = { __html: content };

      return _react2['default'].createElement(parent, props);
    }
    var kids = format.split(REGEXP).reduce(function (memo, match, index) {
      var child = undefined;

      if (index % 2 === 0) {
        if (match.length === 0) {
          return memo;
        }

        child = match;
      } else {
        child = props[match];
        delete props[match];
      }

      memo.push(child);

      return memo;
    }, []);

    return _react2['default'].createElement(parent, props, kids);
  };

  _createClass(Interpolate, null, [{
    key: 'displayName',
    value: 'Interpolate',
    enumerable: true
  }, {
    key: 'propTypes',
    value: {
      component: _propTypes2['default'].node,
      format: _propTypes2['default'].string,
      unsafe: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      component: 'span',
      unsafe: false
    },
    enumerable: true
  }]);

  return Interpolate;
})(_react2['default'].Component);

exports['default'] = Interpolate;
module.exports = exports['default'];