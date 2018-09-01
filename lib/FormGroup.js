'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var FormGroup = (function (_React$Component) {
  _inherits(FormGroup, _React$Component);

  function FormGroup() {
    _classCallCheck(this, FormGroup);

    _React$Component.apply(this, arguments);
  }

  FormGroup.prototype.render = function render() {
    var classes = {
      'form-group': !this.props.standalone,
      'form-group-lg': !this.props.standalone && this.props.bsSize === 'large',
      'form-group-sm': !this.props.standalone && this.props.bsSize === 'small',
      'has-feedback': this.props.hasFeedback,
      'has-success': this.props.bsStyle === 'success',
      'has-warning': this.props.bsStyle === 'warning',
      'has-error': this.props.bsStyle === 'error'
    };

    return _react2['default'].createElement(
      'div',
      { className: _classnames2['default'](classes, this.props.groupClassName) },
      this.props.children
    );
  };

  return FormGroup;
})(_react2['default'].Component);

FormGroup.defaultProps = {
  hasFeedback: false,
  standalone: false
};

FormGroup.propTypes = {
  standalone: _propTypes2['default'].bool,
  hasFeedback: _propTypes2['default'].bool,
  bsSize: function bsSize(props) {
    if (props.standalone && props.bsSize !== undefined) {
      return new Error('bsSize will not be used when `standalone` is set.');
    }

    return _propTypes2['default'].oneOf(['small', 'medium', 'large']).apply(null, arguments);
  },
  bsStyle: _propTypes2['default'].oneOf(['success', 'warning', 'error']),
  groupClassName: _propTypes2['default'].string
};

exports['default'] = FormGroup;
module.exports = exports['default'];