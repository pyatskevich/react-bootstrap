'use strict';

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _createClass = require('babel-runtime/helpers/create-class')['default'];

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _extends = require('babel-runtime/helpers/extends')['default'];

var _Object$keys = require('babel-runtime/core-js/object/keys')['default'];

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

exports.__esModule = true;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styleMaps = require('./styleMaps');

var _styleMaps2 = _interopRequireDefault(_styleMaps);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var Clearfix = (function (_React$Component) {
  _inherits(Clearfix, _React$Component);

  function Clearfix() {
    _classCallCheck(this, Clearfix);

    _React$Component.apply(this, arguments);
  }

  Clearfix.prototype.render = function render() {
    var _this = this;

    var ComponentClass = this.props.componentClass;

    var classes = {};

    _Object$keys(_styleMaps2['default'].SIZES).forEach(function (key) {
      var size = _styleMaps2['default'].SIZES[key];

      classes['visible-' + size + '-block'] = _this.props['visible' + size.charAt(0).toUpperCase() + size.slice(1) + 'Block'];
    }, this);

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, 'clearfix', classes) }),
      this.props.children
    );
  };

  _createClass(Clearfix, null, [{
    key: 'propTypes',
    value: {
      /**
       * You can use a custom element for this component
       */
      componentClass: _reactPropTypesLibElementType2['default'],
      /**
       * Apply clearfix
       *
       * on Extra small devices Phones
       *
       * adds class `visible-xs-block`
       */
      visibleXsBlock: _propTypes2['default'].bool,
      /**
       * Apply clearfix
       *
       * on Small devices Tablets
       *
       * adds class `visible-sm-block`
       */
      visibleSmBlock: _propTypes2['default'].bool,
      /**
       * Apply clearfix
       *
       * on Medium devices Desktops
       *
       * adds class `visible-md-block`
       */
      visibleMdBlock: _propTypes2['default'].bool,
      /**
       * Apply clearfix
       *
       * on Large devices Desktops
       *
       * adds class `visible-lg-block`
       */
      visibleLgBlock: _propTypes2['default'].bool
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      componentClass: 'div'
    },
    enumerable: true
  }]);

  return Clearfix;
})(_react2['default'].Component);

exports['default'] = Clearfix;
module.exports = exports['default'];