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

var _utilsValidComponentChildren = require('./utils/ValidComponentChildren');

var _utilsValidComponentChildren2 = _interopRequireDefault(_utilsValidComponentChildren);

var _BreadcrumbItem = require('./BreadcrumbItem');

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

var Breadcrumb = (function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    _React$Component.apply(this, arguments);

    this.renderBreadcrumbItem = function (child, index) {
      return _react.cloneElement(child, { key: child.key || index });
    };
  }

  Breadcrumb.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;

    var props = _objectWithoutProperties(_props, ['className']);

    return _react2['default'].createElement(
      'ol',
      _extends({}, props, {
        role: 'navigation',
        'aria-label': 'breadcrumbs',
        className: _classnames2['default'](className, this.props.bsClass) }),
      _utilsValidComponentChildren2['default'].map(this.props.children, this.renderBreadcrumbItem)
    );
  };

  _createClass(Breadcrumb, null, [{
    key: 'propTypes',
    value: {
      /**
       * bootstrap className
       * @private
       */
      bsClass: _propTypes2['default'].string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      bsClass: 'breadcrumb'
    },
    enumerable: true
  }]);

  return Breadcrumb;
})(_react2['default'].Component);

Breadcrumb.Item = _BreadcrumbItem2['default'];

exports['default'] = Breadcrumb;
module.exports = exports['default'];