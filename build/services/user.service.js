"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.newUser = exports.getUser = exports.getAllUsers = exports.deleteUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _user = _interopRequireDefault(require("../models/user.model"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
//get all users
var getAllUsers = exports.getAllUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return _user["default"].find();
        case 2:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function getAllUsers() {
    return _ref.apply(this, arguments);
  };
}();

//create new user
var newUser = exports.newUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(body) {
    var data;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return _bcrypt["default"].hash(body.password, 11);
        case 2:
          body.password = _context2.sent;
          _context2.next = 5;
          return _user["default"].create(body);
        case 5:
          data = _context2.sent;
          return _context2.abrupt("return", data);
        case 7:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function newUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();

//update single user
var updateUser = exports.updateUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(_id, body) {
    var data;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _user["default"].findByIdAndUpdate({
            _id: _id
          }, body, {
            "new": true
          });
        case 2:
          data = _context3.sent;
          return _context3.abrupt("return", data);
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function updateUser(_x2, _x3) {
    return _ref3.apply(this, arguments);
  };
}();

//delete single user
var deleteUser = exports.deleteUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(id) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _user["default"].findByIdAndDelete(id);
        case 2:
          return _context4.abrupt("return", '');
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function deleteUser(_x4) {
    return _ref4.apply(this, arguments);
  };
}();

//get single user
var getUser = exports.getUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(body) {
    var data, match;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return _user["default"].findOne({
            email: body.email
          });
        case 2:
          data = _context5.sent;
          if (data) {
            _context5.next = 5;
            break;
          }
          return _context5.abrupt("return", "Email not found");
        case 5:
          _context5.next = 7;
          return _bcrypt["default"].compare(body.password, data.password);
        case 7:
          match = _context5.sent;
          if (!match) {
            _context5.next = 12;
            break;
          }
          return _context5.abrupt("return", "Login Successfully");
        case 12:
          throw new Error("invalid password");
        case 13:
          return _context5.abrupt("return", data);
        case 14:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function getUser(_x5) {
    return _ref5.apply(this, arguments);
  };
}();