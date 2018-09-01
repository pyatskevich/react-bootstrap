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

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var Grid = (function (_React$Component) {
  _inherits(Grid, _React$Component);

  function Grid() {
    _classCallCheck(this, Grid);

    _React$Component.apply(this, arguments);
  }

  Grid.prototype.render = function render() {
    var ComponentClass = this.props.componentClass;
    var className = this.props.fluid ? 'container-fluid' : 'container';

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, className) }),
      this.props.children
    );
  };

  _createClass(Grid, null, [{
    key: 'propTypes',
    value: {
      /**
       * Turn any fixed-width grid layout into a full-width layout by this property.
       *
       * Adds `container-fluid` class.
       */
      fluid: _propTypes2['default'].bool,
      /**
       * You can use a custom element for this component
       */
      componentClass: _reactPropTypesLibElementType2['default']
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      componentClass: 'div',
      fluid: false
    },
    enumerable: true
  }]);

  return Grid;
})(_react2['default'].Component);

exports['default'] = Grid;
module.exports = exports['default'];