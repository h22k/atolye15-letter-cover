"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = require("fs");

var checkParams = function checkParams(req, res, next) {
  var shape = req.shape.capitalize();
  var numbersOfSize = req.size.split('x');
  var MAX_HEIGHT = 1080;
  var MAX_WIDTH = 1920;

  if (!(0, _fs.existsSync)("".concat(__dirname, "/../shapes/").concat(shape, ".js"))) {
    throw new Error("The shape {".concat(shape, "} is not exists"));
  }

  if (numbersOfSize.length > 2) {
    throw new Error('The size that is accepted are this formats: 150 OR 150x150');
  }

  numbersOfSize.forEach(function (e, key) {
    if (isNaN(e)) {
      throw new Error('Every size should be an integer!');
    }

    numbersOfSize[key] = parseInt(e);
  });

  if (numbersOfSize.length < 2) {
    if (numbersOfSize[0] > MAX_HEIGHT) {
      throw new Error("First parameter of size is the short side (for +4 sides) and it can not be bigger than ".concat(MAX_HEIGHT));
    }

    numbersOfSize.push(numbersOfSize[0]);
  }

  if (numbersOfSize[1] > MAX_WIDTH) {
    throw new Error("Second parameter of size is the long side (for +4 sides) and it can not be bigger than ".concat(MAX_WIDTH));
  }

  req.size = numbersOfSize;
  next();
};

var _default = checkParams;
exports["default"] = _default;