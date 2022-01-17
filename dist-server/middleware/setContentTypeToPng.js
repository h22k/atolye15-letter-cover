"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var setContentTypeToPng = function setContentTypeToPng(req, res, next) {
  res.set('Content-Type', 'image/png');
  next();
};

var _default = setContentTypeToPng;
exports["default"] = _default;