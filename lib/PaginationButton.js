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

var _utilsCreateSelectedEvent = require('./utils/createSelectedEvent');

var _utilsCreateSelectedEvent2 = _interopRequireDefault(_utilsCreateSelectedEvent);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var PaginationButton = (function (_React$Component) {
  _inherits(PaginationButton, _React$Component);

  function PaginationButton() {
    var _this = this;

    _classCallCheck(this, PaginationButton);

    _React$Component.apply(this, arguments);

    this.handleClick = function (event) {
      if (_this.props.disabled) {
        return;
      }

      if (_this.props.onSelect) {
        var selectedEvent = _utilsCreateSelectedEvent2['default'](_this.props.eventKey);
        _this.props.onSelect(event, selectedEvent);
      }
    };
  }

  PaginationButton.prototype.render = function render() {
    var classes = {
      active: this.props.active,
      disabled: this.props.disabled
    };

    var _props = this.props;
    var className = _props.className;

    var anchorProps = _objectWithoutProperties(_props, ['className']);

    var ButtonComponentClass = this.props.buttonComponentClass;

    return _react2['default'].createElement(
      'li',
      { className: _classnames2['default'](className, classes) },
      _react2['default'].createElement(ButtonComponentClass, _extends({}, anchorProps, {
        onClick: this.handleClick }))
    );
  };

  _createClass(PaginationButton, null, [{
    key: 'propTypes',
    value: {
      className: _propTypes2['default'].string,
      eventKey: _propTypes2['default'].oneOfType([_propTypes2['default'].string, _propTypes2['default'].number]),
      onSelect: _propTypes2['default'].func,
      disabled: _propTypes2['default'].bool,
      active: _propTypes2['default'].bool,
      /**
       * You can use a custom element for this component
       */
      buttonComponentClass: _reactPropTypesLibElementType2['default']
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      active: false,
      disabled: false
    },
    enumerable: true
  }]);

  return PaginationButton;
})(_react2['default'].Component);

exports['default'] = PaginationButton;
module.exports = exports['default'];