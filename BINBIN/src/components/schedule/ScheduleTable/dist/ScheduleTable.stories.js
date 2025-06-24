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
exports.EditingMode = exports.Default = void 0;
var react_1 = require("react");
var ScheduleTable_1 = require("./ScheduleTable");
exports["default"] = {
    title: 'Schedule/ScheduleTable',
    component: ScheduleTable_1["default"],
    parameters: {
        layout: 'fullscreen'
    }
};
var Template = function (args) { return react_1["default"].createElement(ScheduleTable_1["default"], __assign({}, args)); };
exports.Default = Template.bind({});
exports.Default.args = {
    scheduleData: [
        {
            date: '01.01',
            day: 'P',
            shifts: [
                {
                    time: '08.00-16.00',
                    operators: {
                        'M58-J-467': 'Operator 1',
                        'M53-E-929': 'Operator 2'
                    }
                }
            ]
        }
    ],
    machines: ['M58-J-467', 'M53-E-929'],
    shifts: ['08.00-16.00'],
    isEditing: false
};
exports.EditingMode = Template.bind({});
exports.EditingMode.args = __assign(__assign({}, exports.Default.args), { isEditing: true });
