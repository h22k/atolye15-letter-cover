"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var isQueryHasNameParameter = function isQueryHasNameParameter(req, res, next) {
  var queries = req.query;

  if (!queries.hasOwnProperty('name')) {
    throw new Error('The name param required!');
  }

  queries.name = queries.name.trim();

  if (queries.name === '') {
    throw new Error('The name param cannot be empty!');
  }

  if (/\d/.test(queries.name)) {
    throw new Error('The name param cannot contains number!');
  }

  var names = queries.name.split(' ');

  if (names.length < 2) {
    throw new Error('The name param must has at least 2 word');
  }

  next();
};

var _default = isQueryHasNameParameter;
exports["default"] = _default;