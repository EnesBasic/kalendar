"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useScheduleData = useScheduleData;

var _react = require("react");

var _ScheduleContext = require("../contexts/ScheduleContext");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function useScheduleData(initialData) {
  var _useScheduleContext = (0, _ScheduleContext.useScheduleContext)(),
      state = _useScheduleContext.state,
      dispatch = _useScheduleContext.dispatch;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var fetchData = (0, _react.useCallback)(function _callee() {
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            try {
              setLoading(true); // API call would go here

              dispatch({
                type: 'SET_SCHEDULE_DATA',
                payload: initialData
              });
            } catch (err) {
              setError(err);
            } finally {
              setLoading(false);
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    });
  }, [initialData, dispatch]);
  (0, _react.useEffect)(function () {
    fetchData();
  }, [fetchData]);
  return {
    data: state.scheduleData,
    loading: loading,
    error: error,
    refetch: fetchData
  };
}