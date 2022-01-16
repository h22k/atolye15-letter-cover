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

var _errorHandling = _interopRequireDefault(require("../middleware/errorHandling"));

var _helper = require("../helper/helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.use(_nameParameterCheck["default"]);
router.use(_parseQuery["default"]);
router.use(_checkParams["default"]);
router.use(_setDrawObject["default"]);
router.use(_errorHandling["default"]);
router.get('/', function (req, res) {
  var width = 1920;
  var height = 1080;
  var canvas = (0, _canvas.createCanvas)(width, height);
  var context = canvas.getContext('2d');
  var centerX = canvas.width / 2;
  var centerY = canvas.height / 2;
  var radius = 140;
  context.beginPath();
  context.fillStyle = (0, _helper.stringToColour)(req.name);
  context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false); // context.fillRect(860, 490, 200, 100)

  context.fill();
  context.lineWidth = 20;
  context.strokeStyle = (0, _helper.adjust)((0, _helper.stringToColour)(req.name), -10);
  context.font = '70px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillStyle = (0, _helper.getContrastYIQ)((0, _helper.stringToColour)(req.name));
  context.fillText((0, _helper.parseName)(req.name), centerX, centerY);
  context.stroke();
  res.set('Content-Type', 'image/png');
  res.send(canvas.toBuffer());
});
var _default = router;
exports["default"] = _default;