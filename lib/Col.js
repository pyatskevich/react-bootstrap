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

var Col = (function (_React$Component) {
  _inherits(Col, _React$Component);

  function Col() {
    _classCallCheck(this, Col);

    _React$Component.apply(this, arguments);
  }

  Col.prototype.render = function render() {
    var _this = this;

    var ComponentClass = this.props.componentClass;
    var classes = {};

    _Object$keys(_styleMaps2['default'].SIZES).forEach(function (key) {
      var size = _styleMaps2['default'].SIZES[key];
      var prop = size;
      var classPart = size + '-';

      if (_this.props[prop]) {
        classes['col-' + classPart + _this.props[prop]] = true;
      }

      classes['hidden-' + size] = _this.props[size + 'Hidden'];

      prop = size + 'Offset';
      classPart = size + '-offset-';
      if (_this.props[prop] >= 0) {
        classes['col-' + classPart + _this.props[prop]] = true;
      }

      prop = size + 'Push';
      classPart = size + '-push-';
      if (_this.props[prop] >= 0) {
        classes['col-' + classPart + _this.props[prop]] = true;
      }

      prop = size + 'Pull';
      classPart = size + '-pull-';
      if (_this.props[prop] >= 0) {
        classes['col-' + classPart + _this.props[prop]] = true;
      }
    }, this);

    return _react2['default'].createElement(
      ComponentClass,
      _extends({}, this.props, { className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  };

  _createClass(Col, null, [{
    key: 'propTypes',
    value: {
      /**
       * The number of columns you wish to span
       *
       * for Extra small devices Phones (<768px)
       *
       * class-prefix `col-xs-`
       */
      xs: _propTypes2['default'].number,
      /**
       * The number of columns you wish to span
       *
       * for Small devices Tablets (≥768px)
       *
       * class-prefix `col-sm-`
       */
      sm: _propTypes2['default'].number,
      /**
       * The number of columns you wish to span
       *
       * for Medium devices Desktops (≥992px)
       *
       * class-prefix `col-md-`
       */
      md: _propTypes2['default'].number,
      /**
       * The number of columns you wish to span
       *
       * for Large devices Desktops (≥1200px)
       *
       * class-prefix `col-lg-`
       */
      lg: _propTypes2['default'].number,
      /**
       * Hide column
       *
       * on Extra small devices Phones
       *
       * adds class `hidden-xs`
       */
      xsHidden: _propTypes2['default'].bool,
      /**
       * Hide column
       *
       * on Small devices Tablets
       *
       * adds class `hidden-sm`
       */
      smHidden: _propTypes2['default'].bool,
      /**
       * Hide column
       *
       * on Medium devices Desktops
       *
       * adds class `hidden-md`
       */
      mdHidden: _propTypes2['default'].bool,
      /**
       * Hide column
       *
       * on Large devices Desktops
       *
       * adds class `hidden-lg`
       */
      lgHidden: _propTypes2['default'].bool,
      /**
       * Move columns to the right
       *
       * for Extra small devices Phones
       *
       * class-prefix `col-xs-offset-`
       */
      xsOffset: _propTypes2['default'].number,
      /**
       * Move columns to the right
       *
       * for Small devices Tablets
       *
       * class-prefix `col-sm-offset-`
       */
      smOffset: _propTypes2['default'].number,
      /**
       * Move columns to the right
       *
       * for Medium devices Desktops
       *
       * class-prefix `col-md-offset-`
       */
      mdOffset: _propTypes2['default'].number,
      /**
       * Move columns to the right
       *
       * for Large devices Desktops
       *
       * class-prefix `col-lg-offset-`
       */
      lgOffset: _propTypes2['default'].number,
      /**
       * Change the order of grid columns to the right
       *
       * for Extra small devices Phones
       *
       * class-prefix `col-xs-push-`
       */
      xsPush: _propTypes2['default'].number,
      /**
       * Change the order of grid columns to the right
       *
       * for Small devices Tablets
       *
       * class-prefix `col-sm-push-`
       */
      smPush: _propTypes2['default'].number,
      /**
       * Change the order of grid columns to the right
       *
       * for Medium devices Desktops
       *
       * class-prefix `col-md-push-`
       */
      mdPush: _propTypes2['default'].number,
      /**
       * Change the order of grid columns to the right
       *
       * for Large devices Desktops
       *
       * class-prefix `col-lg-push-`
       */
      lgPush: _propTypes2['default'].number,
      /**
       * Change the order of grid columns to the left
       *
       * for Extra small devices Phones
       *
       * class-prefix `col-xs-pull-`
       */
      xsPull: _propTypes2['default'].number,
      /**
       * Change the order of grid columns to the left
       *
       * for Small devices Tablets
       *
       * class-prefix `col-sm-pull-`
       */
      smPull: _propTypes2['default'].number,
      /**
       * Change the order of grid columns to the left
       *
       * for Medium devices Desktops
       *
       * class-prefix `col-md-pull-`
       */
      mdPull: _propTypes2['default'].number,
      /**
       * Change the order of grid columns to the left
       *
       * for Large devices Desktops
       *
       * class-prefix `col-lg-pull-`
       */
      lgPull: _propTypes2['default'].number,
      /**
       * You can use a custom element for this component
       */
      componentClass: _reactPropTypesLibElementType2['default']
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      componentClass: 'div'
    },
    enumerable: true
  }]);

  return Col;
})(_react2['default'].Component);

exports['default'] = Col;
module.exports = exports['default'];