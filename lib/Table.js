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

var Table = (function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table() {
    _classCallCheck(this, Table);

    _React$Component.apply(this, arguments);
  }

  Table.prototype.render = function render() {
    var classes = {
      'table': true,
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-condensed': this.props.condensed,
      'table-hover': this.props.hover
    };
    var table = _react2['default'].createElement(
      'table',
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );

    return this.props.responsive ? _react2['default'].createElement(
      'div',
      { className: 'table-responsive' },
      table
    ) : table;
  };

  _createClass(Table, null, [{
    key: 'propTypes',
    value: {
      striped: _propTypes2['default'].bool,
      bordered: _propTypes2['default'].bool,
      condensed: _propTypes2['default'].bool,
      hover: _propTypes2['default'].bool,
      responsive: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      bordered: false,
      condensed: false,
      hover: false,
      responsive: false,
      striped: false
    },
    enumerable: true
  }]);

  return Table;
})(_react2['default'].Component);

exports['default'] = Table;
module.exports = exports['default'];