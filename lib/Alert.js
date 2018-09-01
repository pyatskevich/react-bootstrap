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

var _utilsBootstrapUtils = require('./utils/bootstrapUtils');

var _utilsBootstrapUtils2 = _interopRequireDefault(_utilsBootstrapUtils);

var _styleMaps = require('./styleMaps');

var Alert = (function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert() {
    var _this = this;

    _classCallCheck(this, Alert);

    _React$Component.apply(this, arguments);

    this.renderDismissButton = function () {
      return _react2['default'].createElement(
        'button',
        {
          type: 'button',
          className: 'close',
          onClick: _this.props.onDismiss,
          'aria-hidden': 'true',
          tabIndex: '-1' },
        _react2['default'].createElement(
          'span',
          null,
          '×'
        )
      );
    };

    this.renderSrOnlyDismissButton = function () {
      return _react2['default'].createElement(
        'button',
        {
          type: 'button',
          className: 'close sr-only',
          onClick: _this.props.onDismiss },
        _this.props.closeLabel
      );
    };
  }

  Alert.prototype.render = function render() {
    var classes = _utilsBootstrapUtils2['default'].getClassSet(this.props);
    var isDismissable = !!this.props.onDismiss;

    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'dismissable')] = isDismissable;

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, { role: 'alert', className: _classnames2['default'](this.props.className, classes) }),
      isDismissable ? this.renderDismissButton() : null,
      this.props.children,
      isDismissable ? this.renderSrOnlyDismissButton() : null
    );
  };

  Alert.prototype.componentDidMount = function componentDidMount() {
    if (this.props.dismissAfter && this.props.onDismiss) {
      this.dismissTimer = setTimeout(this.props.onDismiss, this.props.dismissAfter);
    }
  };

  Alert.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.dismissTimer);
  };

  _createClass(Alert, null, [{
    key: 'propTypes',
    value: {
      onDismiss: _propTypes2['default'].func,
      dismissAfter: _propTypes2['default'].number,
      closeLabel: _propTypes2['default'].string
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      closeLabel: 'Close Alert'
    },
    enumerable: true
  }]);

  return Alert;
})(_react2['default'].Component);

exports['default'] = _utilsBootstrapUtils.bsStyles(_styleMaps.State.values(), _styleMaps.State.INFO, _utilsBootstrapUtils.bsClass('alert', Alert));
module.exports = exports['default'];