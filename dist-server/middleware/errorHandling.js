"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var errorHandling = function errorHandling(err, req, res, next) {
  if (err) {
    res.json({
      errorMsg: err.message,
      statusCode: 422
    }, 422);
  }

  next();
};

var _default = errorHandling;
exports["default"] = _default;