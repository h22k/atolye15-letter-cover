"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToColour = exports.parseName = exports.initCapitalize = exports.getObject = exports.getContrastYIQ = exports.adjust = void 0;

var _this = void 0;

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var parseName = function parseName(name) {
  var splitNameArray = name.toLocaleUpperCase('tr').split(' ');
  var firstName = splitNameArray[0],
      lastName = splitNameArray[splitNameArray.length - 1];
  return firstName[0] + lastName[0];
};

exports.parseName = parseName;

var stringToColour = function stringToColour(str) {
  var hash = 0;
  str = str.toLocaleLowerCase('tr');

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }

  var colour = '#';

  for (var _i = 0; _i < 3; _i++) {
    var value = hash >> _i * 8 & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }

  return colour;
};

exports.stringToColour = stringToColour;

var getContrastYIQ = function getContrastYIQ(hexColor) {
  if (hexColor[0] === '#') hexColor = hexColor.slice(1);

  var _RGB = RGB(hexColor),
      _RGB2 = _slicedToArray(_RGB, 3),
      r = _RGB2[0],
      g = _RGB2[1],
      b = _RGB2[2];

  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 128 ? '#000000' : '#ffffff';
};

exports.getContrastYIQ = getContrastYIQ;

var RGB = function RGB(hexColor) {
  var rgb = [];

  for (var i = 0; i < hexColor.length; i += 2) {
    rgb.push(parseInt(hexColor.substr(i, 2), 16));
  }

  return rgb;
};

var initCapitalize = function initCapitalize() {
  Object.defineProperty(String.prototype, 'capitalize', {
    value: function value() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });
};

exports.initCapitalize = initCapitalize;

var getObject = function getObject(fileName) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  var shapeObject = Promise.resolve("".concat(__dirname, "/../shapes/").concat(fileName, ".js")).then(function (s) {
    return _interopRequireWildcard(require(s));
  });
  var shape = _this;
  return new Promise(function (resolve, reject) {
    shapeObject.then(function (module) {
      return module["default"];
    }).then(function (obj) {
      resolve(_construct(obj, args));
    })["catch"](function (e) {
      reject(e);
    });
  });
};

exports.getObject = getObject;

var adjust = function adjust(color, amount) {
  return '#' + color.replace(/^#/, '').replace(/../g, function (color) {
    return ('0' + Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2);
  });
};

exports.adjust = adjust;