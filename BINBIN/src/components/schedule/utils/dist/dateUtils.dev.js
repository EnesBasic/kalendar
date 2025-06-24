"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateDatesForWeek = exports.formatDateRange = exports.generateWeeksForYear = void 0;

var generateWeeksForYear = function generateWeeksForYear(year) {
  var weeks = [];
  var firstDayOfYear = new Date(year, 0, 1); // Generate week 1 (Jan 1-7)

  var firstWeekEnd = new Date(firstDayOfYear);
  firstWeekEnd.setDate(firstWeekEnd.getDate() + 6);
  weeks.push({
    weekNumber: 1,
    year: year,
    dateRange: formatDateRange(firstDayOfYear, firstWeekEnd)
  }); // Generate remaining weeks...

  return weeks;
};

exports.generateWeeksForYear = generateWeeksForYear;

var formatDateRange = function formatDateRange(startDate, endDate) {
  var options = {
    month: 'short',
    day: 'numeric'
  };
  var startStr = startDate.toLocaleDateString('en-US', options);
  var endStr = endDate.toLocaleDateString('en-US', options);
  return "".concat(startStr, " - ").concat(endStr, " ").concat(endDate.getFullYear());
};

exports.formatDateRange = formatDateRange;

var generateDatesForWeek = function generateDatesForWeek(dateRange) {// Parse date range and generate all dates
  // Return array of { date: "01.01", day: "P" } objects
};

exports.generateDatesForWeek = generateDatesForWeek;