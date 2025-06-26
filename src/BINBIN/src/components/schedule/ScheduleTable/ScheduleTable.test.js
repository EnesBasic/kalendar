"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_2 = require("@testing-library/react");
var ScheduleTable_1 = require("./ScheduleTable");
var mockData = [
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
];
describe('ScheduleTable', function () {
    it('renders without crashing', function () {
        react_2.render(react_1["default"].createElement(ScheduleTable_1["default"], { scheduleData: mockData, machines: ['M58-J-467', 'M53-E-929'], shifts: ['08.00-16.00'], isEditing: false }));
        expect(react_2.screen.getByText('01.01')).toBeInTheDocument();
    });
    it('displays correct operator assignments', function () {
        react_2.render(react_1["default"].createElement(ScheduleTable_1["default"], { scheduleData: mockData, machines: ['M58-J-467', 'M53-E-929'], shifts: ['08.00-16.00'], isEditing: false }));
        expect(react_2.screen.getByText('Operator 1')).toBeInTheDocument();
        expect(react_2.screen.getByText('Operator 2')).toBeInTheDocument();
    });
});
