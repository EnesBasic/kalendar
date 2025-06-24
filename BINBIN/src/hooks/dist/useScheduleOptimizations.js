"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.useEventHandlers = exports.useScheduleMemo = exports.useMemoizedOperators = void 0;
var react_1 = require("react");
exports.useMemoizedOperators = function (operators) {
    return react_1.useMemo(function () {
        return operators.map(function (op) { return (__assign(__assign({}, op), { contrastColor: getContrastTextColor(op.color) })); });
    }, [operators]);
};
exports.useScheduleMemo = function (scheduleData) {
    return react_1.useMemo(function () {
        return scheduleData.map(function (day) { return (__assign(__assign({}, day), { shifts: day.shifts.map(function (shift) { return (__assign(__assign({}, shift), { isWeekend: ['S', 'N'].includes(day.day) })); }) })); });
    }, [scheduleData]);
};
exports.useEventHandlers = function (dispatch) {
    var handleCellChange = react_1.useCallback(function (date, day, shift, machine, value) {
        dispatch({
            type: 'UPDATE_CELL',
            payload: { date: date, day: day, shift: shift, machine: machine, value: value }
        });
    }, [dispatch]);
    return { handleCellChange: handleCellChange };
};
