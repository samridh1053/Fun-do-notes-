"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _helmet = _interopRequireDefault(require("helmet"));
var _routes = _interopRequireDefault(require("./routes"));
var _database = _interopRequireDefault(require("./config/database"));
var _error = require("./middlewares/error.middleware");
var _logger = _interopRequireWildcard(require("./config/logger"));
var _morgan = _interopRequireDefault(require("morgan"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
_dotenv["default"].config();
var app = (0, _express["default"])();
var host = process.env.APP_HOST;
var port = process.env.APP_PORT;
var api_version = process.env.API_VERSION;
app.use((0, _cors["default"])());
app.use((0, _helmet["default"])());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use(_express["default"].json());
app.use((0, _morgan["default"])('combined', {
  stream: _logger.logStream
}));
(0, _database["default"])();
app.use("/api/".concat(api_version), (0, _routes["default"])());
app.use(_error.appErrorHandler);
app.use(_error.genericErrorHandler);
app.use(_error.notFound);
app.listen(port, function () {
  _logger["default"].info("Server started at ".concat(host, ":").concat(port, "/api/").concat(api_version, "/"));
});
var _default = exports["default"] = app;