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

var _PaginationButton = require('./PaginationButton');

var _PaginationButton2 = _interopRequireDefault(_PaginationButton);

var _reactPropTypesLibElementType = require('react-prop-types/lib/elementType');

var _reactPropTypesLibElementType2 = _interopRequireDefault(_reactPropTypesLibElementType);

var _SafeAnchor = require('./SafeAnchor');

var _SafeAnchor2 = _interopRequireDefault(_SafeAnchor);

var Pagination = (function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    var _this = this;

    _classCallCheck(this, Pagination);

    _React$Component.apply(this, arguments);

    this.renderPageButtons = function () {
      var pageButtons = [];
      var startPage = undefined,
          endPage = undefined,
          hasHiddenPagesAfter = undefined;
      var _props = _this.props;
      var maxButtons = _props.maxButtons;
      var activePage = _props.activePage;
      var items = _props.items;
      var onSelect = _props.onSelect;
      var ellipsis = _props.ellipsis;
      var buttonComponentClass = _props.buttonComponentClass;
      var boundaryLinks = _props.boundaryLinks;

      if (maxButtons) {
        var hiddenPagesBefore = activePage - parseInt(maxButtons / 2, 10);
        startPage = hiddenPagesBefore > 1 ? hiddenPagesBefore : 1;
        hasHiddenPagesAfter = startPage + maxButtons <= items;

        if (!hasHiddenPagesAfter) {
          endPage = items;
          startPage = items - maxButtons + 1;
          if (startPage < 1) {
            startPage = 1;
          }
        } else {
          endPage = startPage + maxButtons - 1;
        }
      } else {
        startPage = 1;
        endPage = items;
      }

      for (var pagenumber = startPage; pagenumber <= endPage; pagenumber++) {
        pageButtons.push(_react2['default'].createElement(
          _PaginationButton2['default'],
          {
            key: pagenumber,
            eventKey: pagenumber,
            active: pagenumber === activePage,
            onSelect: onSelect,
            buttonComponentClass: buttonComponentClass },
          pagenumber
        ));
      }

      if (boundaryLinks && ellipsis && startPage !== 1) {
        pageButtons.unshift(_react2['default'].createElement(
          _PaginationButton2['default'],
          {
            key: 'ellipsisFirst',
            disabled: true,
            buttonComponentClass: buttonComponentClass },
          _react2['default'].createElement(
            'span',
            { 'aria-label': 'More' },
            _this.props.ellipsis === true ? '…' : _this.props.ellipsis
          )
        ));

        pageButtons.unshift(_react2['default'].createElement(
          _PaginationButton2['default'],
          {
            key: 1,
            eventKey: 1,
            active: false,
            onSelect: onSelect,
            buttonComponentClass: buttonComponentClass },
          '1'
        ));
      }

      if (maxButtons && hasHiddenPagesAfter && ellipsis) {
        pageButtons.push(_react2['default'].createElement(
          _PaginationButton2['default'],
          {
            key: 'ellipsis',
            disabled: true,
            buttonComponentClass: buttonComponentClass },
          _react2['default'].createElement(
            'span',
            { 'aria-label': 'More' },
            _this.props.ellipsis === true ? '…' : _this.props.ellipsis
          )
        ));

        if (boundaryLinks && endPage !== items) {
          pageButtons.push(_react2['default'].createElement(
            _PaginationButton2['default'],
            {
              key: items,
              eventKey: items,
              active: false,
              onSelect: onSelect,
              buttonComponentClass: buttonComponentClass },
            items
          ));
        }
      }

      return pageButtons;
    };

    this.renderPrev = function () {
      if (!_this.props.prev) {
        return null;
      }

      return _react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: 'prev',
          eventKey: _this.props.activePage - 1,
          disabled: _this.props.activePage === 1,
          onSelect: _this.props.onSelect,
          buttonComponentClass: _this.props.buttonComponentClass },
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'Previous' },
          _this.props.prev === true ? '‹' : _this.props.prev
        )
      );
    };

    this.renderNext = function () {
      if (!_this.props.next) {
        return null;
      }

      return _react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: 'next',
          eventKey: _this.props.activePage + 1,
          disabled: _this.props.activePage >= _this.props.items,
          onSelect: _this.props.onSelect,
          buttonComponentClass: _this.props.buttonComponentClass },
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'Next' },
          _this.props.next === true ? '›' : _this.props.next
        )
      );
    };

    this.renderFirst = function () {
      if (!_this.props.first) {
        return null;
      }

      return _react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: 'first',
          eventKey: 1,
          disabled: _this.props.activePage === 1,
          onSelect: _this.props.onSelect,
          buttonComponentClass: _this.props.buttonComponentClass },
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'First' },
          _this.props.first === true ? '«' : _this.props.first
        )
      );
    };

    this.renderLast = function () {
      if (!_this.props.last) {
        return null;
      }

      return _react2['default'].createElement(
        _PaginationButton2['default'],
        {
          key: 'last',
          eventKey: _this.props.items,
          disabled: _this.props.activePage >= _this.props.items,
          onSelect: _this.props.onSelect,
          buttonComponentClass: _this.props.buttonComponentClass },
        _react2['default'].createElement(
          'span',
          { 'aria-label': 'Last' },
          _this.props.last === true ? '»' : _this.props.last
        )
      );
    };
  }

  Pagination.prototype.render = function render() {
    return _react2['default'].createElement(
      'ul',
      _extends({}, this.props, {
        className: _classnames2['default'](this.props.className, _utilsBootstrapUtils2['default'].getClassSet(this.props)) }),
      this.renderFirst(),
      this.renderPrev(),
      this.renderPageButtons(),
      this.renderNext(),
      this.renderLast()
    );
  };

  _createClass(Pagination, null, [{
    key: 'propTypes',
    value: {
      activePage: _propTypes2['default'].number,
      items: _propTypes2['default'].number,
      maxButtons: _propTypes2['default'].number,
      /**
       * When `true`, will display the first and the last button page
       */
      boundaryLinks: _propTypes2['default'].bool,
      /**
       * When `true`, will display the default node value ('&hellip;').
       * Otherwise, will display provided node (when specified).
       */
      ellipsis: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
      /**
       * When `true`, will display the default node value ('&laquo;').
       * Otherwise, will display provided node (when specified).
       */
      first: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
      /**
       * When `true`, will display the default node value ('&raquo;').
       * Otherwise, will display provided node (when specified).
       */
      last: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
      /**
       * When `true`, will display the default node value ('&lsaquo;').
       * Otherwise, will display provided node (when specified).
       */
      prev: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
      /**
       * When `true`, will display the default node value ('&rsaquo;').
       * Otherwise, will display provided node (when specified).
       */
      next: _propTypes2['default'].oneOfType([_propTypes2['default'].bool, _propTypes2['default'].node]),
      onSelect: _propTypes2['default'].func,
      /**
       * You can use a custom element for the buttons
       */
      buttonComponentClass: _reactPropTypesLibElementType2['default']
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      activePage: 1,
      items: 1,
      maxButtons: 0,
      first: false,
      last: false,
      prev: false,
      next: false,
      ellipsis: true,
      boundaryLinks: false,
      buttonComponentClass: _SafeAnchor2['default'],
      bsClass: 'pagination'
    },
    enumerable: true
  }]);

  return Pagination;
})(_react2['default'].Component);

exports['default'] = _utilsBootstrapUtils.bsClass('pagination', Pagination);
module.exports = exports['default'];