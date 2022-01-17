"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var errorHandling = function errorHandling(err, req, res, next) {
  if (err) {
    res.status(422).json({
      errorMsg: err.message,
      statusCode: 422
    });
  }

  next();
};

var _default = errorHandling;
exports["default"] = _default;