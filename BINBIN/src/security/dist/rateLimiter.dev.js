"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiLimiter = void 0;

var _expressRateLimit = _interopRequireDefault(require("express-rate-limit"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var apiLimiter = (0, _expressRateLimit["default"])({
  windowMs: 15 * 60 * 1000,
  // 15 minutes
  max: 100,
  // limit each IP to 100 requests per windowMs
  message: 'Too many requests from this IP, please try again later'
});
exports.apiLimiter = apiLimiter;