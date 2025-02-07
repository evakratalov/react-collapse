"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collapse = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Collapse = /*#__PURE__*/function (_React$Component) {
  _inherits(Collapse, _React$Component);

  var _super = _createSuper(Collapse);

  function Collapse(props) {
    var _this;

    _classCallCheck(this, Collapse);

    _this = _super.call(this, props);

    _defineProperty(_assertThisInitialized(_this), "timeout", undefined);

    _defineProperty(_assertThisInitialized(_this), "container", undefined);

    _defineProperty(_assertThisInitialized(_this), "content", undefined);

    _defineProperty(_assertThisInitialized(_this), "onResize", function () {
      clearTimeout(_this.timeout);

      if (!_this.container || !_this.content) {
        return;
      }

      if (_this.container.style.height === 'auto') {
        var _contentHeight = _this.content.clientHeight;
        _this.container.style.height = "".concat(_contentHeight, "px");
      }

      var _this$props = _this.props,
          isOpened = _this$props.isOpened,
          checkTimeout = _this$props.checkTimeout;
      var containerHeight = Math.floor(_this.container.clientHeight);
      var contentHeight = Math.floor(_this.content.clientHeight);
      var isFullyOpened = isOpened && Math.abs(contentHeight - containerHeight) <= 1;
      var isFullyClosed = !isOpened && Math.abs(containerHeight) <= 1;

      if (isFullyOpened || isFullyClosed) {
        _this.onRest({
          isFullyOpened: isFullyOpened,
          isFullyClosed: isFullyClosed,
          isOpened: isOpened,
          containerHeight: containerHeight,
          contentHeight: contentHeight
        });
      } else {
        _this.onWork({
          isFullyOpened: isFullyOpened,
          isFullyClosed: isFullyClosed,
          isOpened: isOpened,
          containerHeight: containerHeight,
          contentHeight: contentHeight
        });

        _this.timeout = setTimeout(function () {
          return _this.onResize();
        }, checkTimeout);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onRest", function (_ref) {
      var isFullyOpened = _ref.isFullyOpened,
          isFullyClosed = _ref.isFullyClosed,
          isOpened = _ref.isOpened,
          containerHeight = _ref.containerHeight,
          contentHeight = _ref.contentHeight;

      if (!_this.container || !_this.content) {
        return;
      }

      var hasOpened = isOpened && _this.container.style.height === "".concat(contentHeight, "px");
      var hasClosed = !isOpened && _this.container.style.height === '0px';

      if (hasOpened || hasClosed) {
        _this.container.style.overflow = isOpened ? 'initial' : 'hidden';
        _this.container.style.height = isOpened ? 'auto' : '0px';
        var onRest = _this.props.onRest;

        if (onRest) {
          onRest({
            isFullyOpened: isFullyOpened,
            isFullyClosed: isFullyClosed,
            isOpened: isOpened,
            containerHeight: containerHeight,
            contentHeight: contentHeight
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onWork", function (_ref2) {
      var isFullyOpened = _ref2.isFullyOpened,
          isFullyClosed = _ref2.isFullyClosed,
          isOpened = _ref2.isOpened,
          containerHeight = _ref2.containerHeight,
          contentHeight = _ref2.contentHeight;

      if (!_this.container || !_this.content) {
        return;
      }

      var isOpenining = isOpened && _this.container.style.height === "".concat(contentHeight, "px");
      var isClosing = !isOpened && _this.container.style.height === '0px';

      if (isOpenining || isClosing) {
        // No need to do any work
        return;
      }

      _this.container.style.overflow = 'hidden';
      _this.container.style.height = isOpened ? "".concat(contentHeight, "px") : '0px';
      var onWork = _this.props.onWork;

      if (onWork) {
        onWork({
          isFullyOpened: isFullyOpened,
          isFullyClosed: isFullyClosed,
          isOpened: isOpened,
          containerHeight: containerHeight,
          contentHeight: contentHeight
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onRefContainer", function (container) {
      _this.container = container;
    });

    _defineProperty(_assertThisInitialized(_this), "onRefContent", function (content) {
      _this.content = content;
    });

    if (props.initialStyle) {
      _this.initialStyle = props.initialStyle;
    } else {
      _this.initialStyle = props.isOpened ? {
        height: 'auto',
        overflow: 'initial'
      } : {
        height: '0px',
        overflow: 'hidden'
      };
    }

    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onResize();
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props2 = this.props,
          theme = _this$props2.theme,
          isOpened = _this$props2.isOpened,
          children = _this$props2.children;
      return children !== nextProps.children || isOpened !== nextProps.isOpened || Object.keys(theme).some(function (c) {
        return theme[c] !== nextProps.theme[c];
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.onResize();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          theme = _this$props3.theme,
          children = _this$props3.children,
          isOpened = _this$props3.isOpened;
      return /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.onRefContainer,
        className: theme.collapse,
        style: this.initialStyle,
        "aria-hidden": !isOpened
      }, /*#__PURE__*/_react["default"].createElement("div", {
        ref: this.onRefContent,
        className: theme.content
      }, children));
    }
  }]);

  return Collapse;
}(_react["default"].Component);

exports.Collapse = Collapse;

_defineProperty(Collapse, "defaultProps", {
  theme: {
    collapse: 'ReactCollapse--collapse',
    content: 'ReactCollapse--content'
  },
  initialStyle: undefined,
  onRest: undefined,
  onWork: undefined,
  checkTimeout: 50
});