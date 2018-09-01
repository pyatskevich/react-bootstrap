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

var _reactPropTypesLibAll = require('react-prop-types/lib/all');

var _reactPropTypesLibAll2 = _interopRequireDefault(_reactPropTypesLibAll);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var ButtonGroup = (function (_React$Component) {
  _inherits(ButtonGroup, _React$Component);

  function ButtonGroup() {
    _classCallCheck(this, ButtonGroup);

    _React$Component.apply(this, arguments);
  }

  ButtonGroup.prototype.render = function render() {
    var classes = _utilsBootstrapUtils2['default'].getClassSet(this.props);

    classes[_utilsBootstrapUtils2['default'].prefix(this.props)] = !this.props.vertical;
    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'vertical')] = this.props.vertical;
    classes[_utilsBootstrapUtils2['default'].prefix(this.props, 'justified')] = this.props.justified;

    // this is annoying, since the class is `btn-block` not `btn-group-block`
    classes[_utilsBootstrapUtils2['default'].prefix(_Button2['default'].defaultProps, 'block')] = this.props.block;

    return _react2['default'].createElement(
      'div',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, classes) }),
      this.props.children
    );
  };

  _createClass(ButtonGroup, null, [{
    key: 'propTypes',
    value: {
      vertical: _propTypes2['default'].bool,
      justified: _propTypes2['default'].bool,
      /**
       * Display block buttons, only useful when used with the "vertical" prop.
       * @type {bool}
       */
      block: _reactPropTypesLibAll2['default'](_propTypes2['default'].bool, function (props) {
        if (props.block && !props.vertical) {
          return new Error('The block property requires the vertical property to be set to have any effect');
        }
      })
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      block: false,
      justified: false,
      vertical: false
    },
    enumerable: true
  }]);

  return ButtonGroup;
})(_react2['default'].Component);

exports['default'] = _utilsBootstrapUtils.bsClass('btn-group', ButtonGroup);
module.exports = exports['default'];