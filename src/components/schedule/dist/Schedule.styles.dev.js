"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = exports.Wrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 2rem;\n  \n  &::after {\n    content: '';\n    display: block;\n    width: 3rem;\n    height: 3rem;\n    border-radius: 50%;\n    border: 4px solid #67e8f9;\n    border-color: #67e8f9 transparent #67e8f9 transparent;\n    animation: spin 1.2s linear infinite;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  background: #1D1D1F;\n  border-radius: 0.5rem;\n  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  overflow: hidden;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents["default"].div(_templateObject());

exports.Wrapper = Wrapper;

var LoadingIndicator = _styledComponents["default"].div(_templateObject2()); // ... other styled components


exports.LoadingIndicator = LoadingIndicator;