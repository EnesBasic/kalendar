"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MachineHeader = exports.TableRow = exports.TableHead = exports.Table = exports.TableWrapper = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  background: ", ";\n  color: ", ";\n  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);\n  font-weight: bold;\n  padding: 8px 4px;\n  text-align: center;\n  font-size: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  border-bottom: ", ";\n  background: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  background: #2A2A2A;\n  color: #67e8f9;\n  text-transform: uppercase;\n  font-size: 0.75rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n  border-collapse: collapse;\n  text-align: left;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  overflow-x: auto;\n  background: #1D1D1F;\n  border-radius: 0 0 8px 8px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TableWrapper = _styledComponents["default"].div(_templateObject());

exports.TableWrapper = TableWrapper;

var Table = _styledComponents["default"].table(_templateObject2());

exports.Table = Table;

var TableHead = _styledComponents["default"].thead(_templateObject3());

exports.TableHead = TableHead;

var TableRow = _styledComponents["default"].tr(_templateObject4(), function (props) {
  return props.isWeekend ? '1px solid #3A3A3A' : 'none';
}, function (props) {
  return props.isWeekend ? '#2A2A2A30' : 'transparent';
});

exports.TableRow = TableRow;

var MachineHeader = _styledComponents["default"].th(_templateObject5(), function (props) {
  return "rgba(".concat(hexToRgb(props.color), ", 0.25)");
}, function (props) {
  return props.color;
}); // Helper function


exports.MachineHeader = MachineHeader;

var hexToRgb = function hexToRgb(hex) {// implementation
};