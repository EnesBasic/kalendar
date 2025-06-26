"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeHTML = exports.sanitizeInput = void 0;

var _dompurify = _interopRequireDefault(require("dompurify"));

var _jsdom = require("jsdom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var window = new _jsdom.JSDOM('').window;
var purify = (0, _dompurify["default"])(window);

var sanitizeInput = function sanitizeInput(input) {
  return purify.sanitize(input, {
    ALLOWED_TAGS: [],
    // No HTML tags allowed
    ALLOWED_ATTR: [] // No attributes allowed

  });
};

exports.sanitizeInput = sanitizeInput;

var sanitizeHTML = function sanitizeHTML(html) {
  return purify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'],
    ALLOWED_ATTR: ['href', 'target']
  });
};

exports.sanitizeHTML = sanitizeHTML;