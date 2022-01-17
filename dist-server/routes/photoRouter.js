"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _canvas = require("canvas");

var _color = _interopRequireDefault(require("color"));

var _nameParameterCheck = _interopRequireDefault(require("../middleware/nameParameterCheck"));

var _parseQuery = _interopRequireDefault(require("../middleware/parseQuery"));

var _checkParams = _interopRequireDefault(require("../middleware/checkParams"));

var _setDrawObject = _interopRequireDefault(require("../middleware/setDrawObject"));

var _setContentTypeToPng = _interopRequireDefault(require("../middleware/setContentTypeToPng"));

var _errorHandling = _interopRequireDefault(require("../middleware/errorHandling"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use(_nameParameterCheck["default"]);
router.use(_parseQuery["default"]);
router.use(_checkParams["default"]);
router.use(_setDrawObject["default"]);
router.use(_setContentTypeToPng["default"]);
router.use(_errorHandling["default"]);
router.get('/', function (req, res) {
  var canvas = req.draw;
  res.send(canvas.toBuffer());
});
var _default = router;
exports["default"] = _default;