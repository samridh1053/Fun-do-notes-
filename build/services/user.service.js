"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newUser = exports.getUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
//create new user
var newUser = exports.newUser = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(body) {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _bcrypt["default"].hash(body.password, 11);
        case 2:
          body.password = _context.sent;
          _context.next = 5;
          return _user["default"].create(body);
        case 5:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function newUser(_x) {
    return _ref.apply(this, arguments);
  };
}();

//get single user
var getUser = exports.getUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data, match;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _user["default"].findOne({
            email: body.email
          });
        case 2:
          data = _context2.sent;
          if (data) {
            _context2.next = 5;
            break;
          }
          throw new Error("Email not found");
        case 5:
          _context2.next = 7;
          return _bcrypt["default"].compare(body.password, data.password);
        case 7:
          match = _context2.sent;
          if (!match) {
            _context2.next = 12;
            break;
          }
          return _context2.abrupt("return", "Login Successfully");
        case 12:
          throw new Error("invalid password");
        case 13:
          return _context2.abrupt("return", data);
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getUser(_x2) {
    return _ref2.apply(this, arguments);
  };
}();