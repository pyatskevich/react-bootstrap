/* eslint-disable react/prop-types */
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

var ModalDialog = (function (_React$Component) {
  _inherits(ModalDialog, _React$Component);

  function ModalDialog() {
    _classCallCheck(this, ModalDialog);

    _React$Component.apply(this, arguments);
  }

  ModalDialog.prototype.render = function render() {
    var modalStyle = _extends({
      display: 'block'
    }, this.props.style);
    var prefix = _utilsBootstrapUtils2['default'].prefix(this.props);
    var dialogClasses = _utilsBootstrapUtils2['default'].getClassSet(this.props);

    delete dialogClasses[prefix];
    dialogClasses[_utilsBootstrapUtils2['default'].prefix(this.props, 'dialog')] = true;

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        title: null,
        tabIndex: '-1',
        role: 'dialog',
        style: modalStyle,
        className: _classnames2['default'](this.props.className, prefix)
      }),
      _react2['default'].createElement(
        'div',
        { className: _classnames2['default'](this.props.dialogClassName, dialogClasses) },
        _react2['default'].createElement(
          'div',
          { className: _utilsBootstrapUtils2['default'].prefix(this.props, 'content'), role: 'document' },
          this.props.children
        )
      )
    );
  };

  _createClass(ModalDialog, null, [{
    key: 'propTypes',
    value: {
      /**
       * A css class to apply to the Modal dialog DOM node.
       */
      dialogClassName: _propTypes2['default'].string
    },
    enumerable: true
  }]);

  return ModalDialog;
})(_react2['default'].Component);

exports['default'] = _utilsBootstrapUtils.bsSizes([_styleMaps.Sizes.LARGE, _styleMaps.Sizes.SMALL], _utilsBootstrapUtils.bsClass('modal', ModalDialog));
module.exports = exports['default'];