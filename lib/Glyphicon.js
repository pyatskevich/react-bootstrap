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

var Glyphicon = (function (_React$Component) {
  _inherits(Glyphicon, _React$Component);

  function Glyphicon() {
    _classCallCheck(this, Glyphicon);

    _React$Component.apply(this, arguments);
  }

  Glyphicon.prototype.render = function render() {
    var _classNames;

    var className = _classnames2['default'](this.props.className, (_classNames = {}, _classNames[this.props.bsClass] = true, _classNames['glyphicon-' + this.props.glyph] = true, _classNames['form-control-feedback'] = this.props.formControlFeedback, _classNames));

    return _react2['default'].createElement(
      'span',
      _extends({}, this.props, { className: className }),
      this.props.children
    );
  };

  _createClass(Glyphicon, null, [{
    key: 'propTypes',
    value: {
      /**
       * bootstrap className
       * @private
       */
      bsClass: _propTypes2['default'].string,
      /**
       * An icon name. See e.g. http://getbootstrap.com/components/#glyphicons
       */
      glyph: _propTypes2['default'].string.isRequired,
      /**
       * Adds 'form-control-feedback' class
       * @private
       */
      formControlFeedback: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      bsClass: 'glyphicon',
      formControlFeedback: false
    },
    enumerable: true
  }]);

  return Glyphicon;
})(_react2['default'].Component);

exports['default'] = Glyphicon;
module.exports = exports['default'];