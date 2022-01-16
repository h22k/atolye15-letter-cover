"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var parseQuery = function parseQuery(req, res, next) {
  var query = req.query; //default values

  var shape = 'Circle';
  var size = '75';

  if (query.hasOwnProperty('shape') && query.shape.trim() !== '') {
    shape = query.shape.capitalize();
  }

  if (query.hasOwnProperty('size') && query.size.trim() !== '') {
    size = query.size;
  }

  req.shape = shape;
  req.size = size;
  req.name = req.query.name;
  next();
};

var _default = parseQuery;
exports["default"] = _default;