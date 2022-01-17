"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helper = require("./helper");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Canvas = /*#__PURE__*/function () {
  function Canvas(name, color, sizes, canvas) {
    _classCallCheck(this, Canvas);

    this.name = name;
    this.color = color;
    this.sizes = sizes;
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
  }

  _createClass(Canvas, [{
    key: "draw",
    value: function draw() {
      this.context.beginPath();
      this.fill().calculate().darken().text().stroke();
      return this.canvas;
    }
  }, {
    key: "fill",
    value: function fill() {
      this.context.fillStyle = (0, _helper.stringToColour)(this.name);
      return this;
    }
  }, {
    key: "darken",
    value: function darken() {
      this.context.lineWidth = 20;
      this.context.strokeStyle = (0, _helper.adjust)(this.color, -10);
      return this;
    }
  }, {
    key: "text",
    value: function text() {
      var _this$canvasSizes = this.canvasSizes(),
          _this$canvasSizes2 = _slicedToArray(_this$canvasSizes, 2),
          centerHeight = _this$canvasSizes2[0],
          centerWidth = _this$canvasSizes2[1];

      var shortSide = Math.min.apply(Math, _toConsumableArray(this.sizes));
      this.context.font = "".concat(shortSide / 2, "px Arial");
      this.context.textAlign = 'center';
      this.context.textBaseline = 'middle';
      this.context.fillStyle = (0, _helper.getContrastYIQ)(this.color);
      this.context.fillText((0, _helper.parseName)(this.name), centerWidth, centerHeight);
      return this;
    }
  }, {
    key: "stroke",
    value: function stroke() {
      this.context.stroke();
      return this;
    }
  }, {
    key: "canvasSizes",
    value: function canvasSizes() {
      var centerWidth = this.canvas.width / 2;
      var centerHeight = this.canvas.height / 2;
      return [centerHeight, centerWidth];
    }
  }]);

  return Canvas;
}();

var _default = Canvas;
exports["default"] = _default;