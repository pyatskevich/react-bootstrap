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

var PageItem = (function (_React$Component) {
  _inherits(PageItem, _React$Component);

  function PageItem() {
    var _this = this;

    _classCallCheck(this, PageItem);

    _React$Component.apply(this, arguments);

    this.handleSelect = function (e) {
      if (_this.props.onSelect || _this.props.disabled) {
        e.preventDefault();

        if (!_this.props.disabled) {
          _this.props.onSelect(_this.props.eventKey, _this.props.href, _this.props.target);
        }
      }
    };
  }

  PageItem.prototype.render = function render() {
    var classes = {
      'disabled': this.props.disabled,
      'previous': this.props.previous,
      'next': this.props.next
    };

    return _react2['default'].createElement(
      'li',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, classes) }),
      _react2['default'].createElement(
        _SafeAnchor2['default'],
        {
          href: this.props.href,
          title: this.props.title,
          target: this.props.target,
          onClick: this.handleSelect },
        this.props.children
      )
    );
  };

  _createClass(PageItem, null, [{
    key: 'propTypes',
    value: {
      href: _propTypes2['default'].string,
      target: _propTypes2['default'].string,
      title: _propTypes2['default'].string,
      disabled: _propTypes2['default'].bool,
      previous: _propTypes2['default'].bool,
      next: _propTypes2['default'].bool,
      onSelect: _propTypes2['default'].func,
      eventKey: _propTypes2['default'].any
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      disabled: false,
      previous: false,
      next: false
    },
    enumerable: true
  }]);

  return PageItem;
})(_react2['default'].Component);

exports['default'] = PageItem;
module.exports = exports['default'];