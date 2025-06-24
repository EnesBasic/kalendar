"use strict";
exports.__esModule = true;
exports.useTheme = exports.ThemeProvider = void 0;
var react_1 = require("react");
var theme_1 = require("../theme/theme");
var ThemeContext = react_1.createContext({
    theme: theme_1.lightTheme,
    toggleTheme: function () { },
    isDarkMode: false
});
exports.ThemeProvider = function (_a) {
    var children = _a.children;
    var _b = react_1.useState(false), isDarkMode = _b[0], setIsDarkMode = _b[1];
    var toggleTheme = function () {
        setIsDarkMode(!isDarkMode);
    };
    var theme = isDarkMode ? theme_1.darkTheme : theme_1.lightTheme;
    return (react_1["default"].createElement(ThemeContext.Provider, { value: { theme: theme, toggleTheme: toggleTheme, isDarkMode: isDarkMode } }, children));
};
exports.useTheme = function () {
    return react_1.useContext(ThemeContext);
};
