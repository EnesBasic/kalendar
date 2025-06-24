"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = useSchedule;

var _react = require("react");

var _dateUtils = require("../components/schedule/utils/dateUtils");

var _colors = require("../components/schedule/constants/colors");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useSchedule(_ref) {
  var weekNumber = _ref.weekNumber,
      year = _ref.year,
      dateRange = _ref.dateRange,
      initialData = _ref.initialData,
      initialOperators = _ref.initialOperators,
      onSave = _ref.onSave,
      onCancel = _ref.onCancel,
      onWeekChange = _ref.onWeekChange,
      onBack = _ref.onBack;

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      allWeeks = _useState2[0],
      setAllWeeks = _useState2[1];

  var _useState3 = (0, _react.useState)(initialData),
      _useState4 = _slicedToArray(_useState3, 2),
      scheduleData = _useState4[0],
      setScheduleData = _useState4[1];

  var _useState5 = (0, _react.useState)({
    weekNumber: weekNumber,
    year: year,
    dateRange: dateRange
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      selectedWeek = _useState6[0],
      setSelectedWeek = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isEditing = _useState8[0],
      setIsEditing = _useState8[1]; // ... all other state


  (0, _react.useEffect)(function () {
    var generatedWeeks = (0, _dateUtils.generateWeeksForYear)(year);
    setAllWeeks(generatedWeeks);
  }, [year]); // ... all other effects and handlers

  var handleCellChange = function handleCellChange(date, day, shift, machine, value) {// ... implementation
  }; // ... other handlers


  return {
    allWeeks: allWeeks,
    scheduleData: scheduleData,
    selectedWeek: selectedWeek,
    isEditing: isEditing,
    // ... all other state and handlers
    handleCellChange: handleCellChange // ... other handlers

  };
}