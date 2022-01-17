"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var setContentTypeToPng = function setContentTypeToPng(req, res, next) {
  res.set('Content-Type', 'image/png');
  res.set('Content-Disposition', "attachment; filename=\"".concat(req.name, ".png\""));
  next();
};

var _default = setContentTypeToPng;
exports["default"] = _default;