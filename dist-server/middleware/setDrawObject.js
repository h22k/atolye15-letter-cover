"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helper = require("../helper/helper");

var _canvas = require("canvas");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var setDrawObject = function setDrawObject(req, res, next) {
  var name = req.name,
      shape = req.shape,
      size = req.size;
  var height = shape === 'Circle' ? Math.max.apply(Math, _toConsumableArray(size)) * 3 : size[0];
  var width = shape === 'Circle' ? Math.max.apply(Math, _toConsumableArray(size)) * 3 : size[1];
  var COLOR = (0, _helper.stringToColour)(name);
  var CANVAS = (0, _canvas.createCanvas)(width, height);
  var shapeObject = (0, _helper.getObject)(shape, name, COLOR, size, CANVAS);
  shapeObject.then(function (object) {
    req.draw = object.draw();
    next();
  });
};

var _default = setDrawObject;
exports["default"] = _default;