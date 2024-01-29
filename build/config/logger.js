"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logStream = exports["default"] = void 0;
var _winston = _interopRequireWildcard(require("winston"));
require("winston-daily-rotate-file");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
/**
 * Logger handles all logs in the application
 */
var logger = _winston["default"].createLogger({
  format: _winston.format.combine(_winston.format.timestamp(), _winston.format.simple()),
  colorize: true,
  transports: [new _winston["default"].transports.File({
    filename: 'logs/server/error.log',
    level: 'error',
    handleExceptions: true
  }), new _winston["default"].transports.File({
    filename: 'logs/server/all.log',
    level: 'info',
    handleExceptions: true
  }), new _winston["default"].transports.DailyRotateFile({
    maxFiles: '14d',
    level: 'info',
    dirname: 'logs/server/daily',
    datePattern: 'YYYY-MM-DD',
    filename: '%DATE%.log'
  }), new _winston["default"].transports.Console({
    level: 'debug',
    json: false,
    handleExceptions: true
  })]
});

/**
 * morganLogger logs all http request in a dedicated file and on console
 */
var morganLogger = _winston["default"].createLogger({
  format: _winston.format.combine(_winston.format.simple()),
  transports: [new _winston["default"].transports.File({
    filename: 'logs/requests/all.log',
    level: 'debug',
    handleExceptions: true
  }), new _winston["default"].transports.Console({
    level: 'debug',
    json: false,
    handleExceptions: true
  }), new _winston["default"].transports.DailyRotateFile({
    maxFiles: '14d',
    level: 'info',
    dirname: 'logs/requests/daily',
    datePattern: 'YYYY-MM-DD',
    filename: '%DATE%.log'
  })]
});
var logStream = exports.logStream = {
  /**
   * A writable stream for winston logger.
   *
   * @param {any} message
   */
  write: function write(message) {
    morganLogger.info(message.toString());
  }
};
var _default = exports["default"] = logger;