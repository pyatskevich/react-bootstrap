'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _objectWithoutProperties = require('babel-runtime/helpers/object-without-properties')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var BreadcrumbItem = (function (_React$Component) {
  _inherits(BreadcrumbItem, _React$Component);

  function BreadcrumbItem() {
    _classCallCheck(this, BreadcrumbItem);

    _React$Component.apply(this, arguments);
  }

  BreadcrumbItem.prototype.render = function render() {
    var _props = this.props;
    var active = _props.active;
    var className = _props.className;
    var id = _props.id;
    var linkId = _props.linkId;
    var children = _props.children;
    var href = _props.href;
    var title = _props.title;
    var target = _props.target;

    var props = _objectWithoutProperties(_props, ['active', 'className', 'id', 'linkId', 'children', 'href', 'title', 'target']);

    var linkProps = {
      href: href,
      title: title,
      target: target,
      id: linkId
    };

    return _react2['default'].createElement(
      'li',
      { id: id, className: _classnames2['default'](className, { active: active }) },
      active ? _react2['default'].createElement(
        'span',
        props,
        children
      ) : _react2['default'].createElement(
        _SafeAnchor2['default'],
        _extends({}, props, linkProps),
        children
      )
    );
  };

  _createClass(BreadcrumbItem, null, [{
    key: 'propTypes',
    value: {
      /**
       * If set to true, renders `span` instead of `a`
       */
      active: _propTypes2['default'].bool,
      /**
       * HTML id for the wrapper `li` element
       */
      id: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
      /**
       * HTML id for the inner `a` element
       */
      linkId: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
      /**
       * `href` attribute for the inner `a` element
       */
      href: _propTypes2['default'].string,
      /**
       * `title` attribute for the inner `a` element
       */
      title: _propTypes2['default'].node,
      /**
       * `target` attribute for the inner `a` element
       */
      target: _propTypes2['default'].string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      active: false
    },
    enumerable: true
  }]);

  return BreadcrumbItem;
})(_react2['default'].Component);

exports['default'] = BreadcrumbItem;
module.exports = exports['default'];