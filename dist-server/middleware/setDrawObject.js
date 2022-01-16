"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _helper = require("../helper/helper");

var _canvas = require("canvas");

var setDrawObject = function setDrawObject(req, res, next) {
  var name = req.name,
      shape = req.shape,
      size = req.size;
  var height = 1080;
  var width = 1920;
  var shapeObject = (0, _helper.getObject)(shape, name, (0, _helper.stringToColour)(name), size, (0, _canvas.createCanvas)(width, height));
  shapeObject.then(function (object) {
    req.draw = object.draw();
    next();
  });
};

var _default = setDrawObject;
exports["default"] = _default;