/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Ckatar%5CDocuments%5CLearningStuff%5CleaderboardPortal%5Cpages%5Cindex.js!":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Ckatar%5CDocuments%5CLearningStuff%5CleaderboardPortal%5Cpages%5Cindex.js! ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.js */ \"./pages/index.js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkYmYWJzb2x1dGVQYWdlUGF0aD1DJTNBJTVDVXNlcnMlNUNrYXRhciU1Q0RvY3VtZW50cyU1Q0xlYXJuaW5nU3R1ZmYlNUNsZWFkZXJib2FyZFBvcnRhbCU1Q3BhZ2VzJTVDaW5kZXguanMhLmpzIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsMENBQWtCO0FBQ3pDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLz9kOGNhIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9pbmRleC5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Ckatar%5CDocuments%5CLearningStuff%5CleaderboardPortal%5Cpages%5Cindex.js!\n");

/***/ }),

/***/ "./components/Row.js":
/*!***************************!*\
  !*** ./components/Row.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Row; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction Row(param) {\n    var id = param.id, rank = param.rank, name = param.name, client = param.client;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Box, {\n            sx: {\n                display: \"grid\",\n                gridTemplateAreas: \"'rank name button'\",\n                gridTemplateColumns: \"10% 75% 15%\",\n                width: \"100%\",\n                justifyContent: \"center\",\n                alignItems: \"center\",\n                backgroundColor: 'beige',\n                marginBottom: '1rem'\n            },\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    sx: {\n                        gridArea: \"rank\",\n                        fontSize: \"1rem\",\n                        display: \"grid\",\n                        textAlign: \"left\",\n                        color: 'black'\n                    },\n                    children: rank\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\components\\\\Row.js\",\n                    lineNumber: 17,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Text, {\n                    sx: {\n                        gridArea: \"name\",\n                        fontSize: \"1rem\",\n                        display: \"grid\",\n                        textAlign: \"left\",\n                        color: 'black'\n                    },\n                    children: name\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\components\\\\Row.js\",\n                    lineNumber: 24,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    sx: _defineProperty({\n                        gridArea: \"button\",\n                        fontSize: \"1rem\",\n                        display: \"grid\",\n                        alignItems: \"center\",\n                        justifyContent: \"center\",\n                        textAlign: \"left\",\n                        color: 'black',\n                        cursor: 'pointer',\n                        backgroundColor: 'red'\n                    }, \"color\", 'white'),\n                    onClick: function() {\n                        return client.sendMessage();\n                    },\n                    children: \"Notify\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\components\\\\Row.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, id, true, {\n            fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\components\\\\Row.js\",\n            lineNumber: 7,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\components\\\\Row.js\",\n        lineNumber: 6,\n        columnNumber: 9\n    }, this));\n};\n_c = Row;\nvar _c;\n$RefreshReg$(_c, \"Row\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1Jvdy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUE0Qzs7Ozs7Ozs7Ozs7Ozs7QUFFN0IsUUFBUSxDQUFDRyxHQUFHLENBQUMsS0FBMEIsRUFBRSxDQUFDO1FBQTNCQyxFQUFFLEdBQUosS0FBMEIsQ0FBeEJBLEVBQUUsRUFBRUMsSUFBSSxHQUFWLEtBQTBCLENBQXBCQSxJQUFJLEVBQUVDLElBQUksR0FBaEIsS0FBMEIsQ0FBZEEsSUFBSSxFQUFFQyxNQUFNLEdBQXhCLEtBQTBCLENBQVJBLE1BQU07SUFFaEQsTUFBTSw2RUFDREMsQ0FBRzs4RkFDQ1IseUNBQUc7WUFBVVMsRUFBRSxFQUFFLENBQUM7Z0JBQ2ZDLE9BQU8sRUFBRSxDQUFNO2dCQUNmQyxpQkFBaUIsRUFBRSxDQUFvQjtnQkFDdkNDLG1CQUFtQixFQUFFLENBQWE7Z0JBQ2xDQyxLQUFLLEVBQUUsQ0FBTTtnQkFDYkMsY0FBYyxFQUFFLENBQVE7Z0JBQ3hCQyxVQUFVLEVBQUUsQ0FBUTtnQkFDcEJDLGVBQWUsRUFBRSxDQUFPO2dCQUN4QkMsWUFBWSxFQUFFLENBQU07WUFDeEIsQ0FBQzs7NEZBQ0loQiwwQ0FBSTtvQkFBQ1EsRUFBRSxFQUFFLENBQUM7d0JBQ1BTLFFBQVEsRUFBRSxDQUFNO3dCQUNoQkMsUUFBUSxFQUFFLENBQU07d0JBQ2hCVCxPQUFPLEVBQUUsQ0FBTTt3QkFDZlUsU0FBUyxFQUFFLENBQU07d0JBQ2pCQyxLQUFLLEVBQUUsQ0FBTztvQkFDbEIsQ0FBQzs4QkFBR2hCLElBQUk7Ozs7Ozs0RkFDUEosMENBQUk7b0JBQUNRLEVBQUUsRUFBRSxDQUFDO3dCQUNQUyxRQUFRLEVBQUUsQ0FBTTt3QkFDaEJDLFFBQVEsRUFBRSxDQUFNO3dCQUNoQlQsT0FBTyxFQUFFLENBQU07d0JBQ2ZVLFNBQVMsRUFBRSxDQUFNO3dCQUNqQkMsS0FBSyxFQUFFLENBQU87b0JBQ2xCLENBQUM7OEJBQUdmLElBQUk7Ozs7Ozs0RkFDUEosNENBQU07b0JBQUNPLEVBQUU7d0JBQ05TLFFBQVEsRUFBRSxDQUFRO3dCQUNsQkMsUUFBUSxFQUFFLENBQU07d0JBQ2hCVCxPQUFPLEVBQUUsQ0FBTTt3QkFDZkssVUFBVSxFQUFFLENBQVE7d0JBQ3BCRCxjQUFjLEVBQUUsQ0FBUTt3QkFDeEJNLFNBQVMsRUFBRSxDQUFNO3dCQUNqQkMsS0FBSyxFQUFFLENBQU87d0JBQ2RDLE1BQU0sRUFBRSxDQUFTO3dCQUNqQk4sZUFBZSxFQUFFLENBQUs7dUJBQ3RCSyxDQUFLLFFBQUUsQ0FBTztvQkFDZkUsT0FBTyxFQUFFLFFBQVE7d0JBQUZoQixNQUFNLENBQU5BLE1BQU0sQ0FBQ2lCLFdBQVc7OzhCQUFJLENBQU07Ozs7Ozs7V0FuQ3hDcEIsRUFBRTs7Ozs7Ozs7OztBQXVDeEIsQ0FBQztLQTNDdUJELEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Sb3cuanM/Y2ZmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFRleHQsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJvdyh7IGlkLCByYW5rLCBuYW1lLCBjbGllbnQgfSkge1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEJveCBrZXk9e2lkfSBzeD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJncmlkXCIsXHJcbiAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVBcmVhczogXCIncmFuayBuYW1lIGJ1dHRvbidcIixcclxuICAgICAgICAgICAgICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFwiMTAlIDc1JSAxNSVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JlaWdlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzFyZW0nXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBncmlkQXJlYTogXCJyYW5rXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICAgICAgICAgIH19PntyYW5rfTwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEFyZWE6IFwibmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgICAgICAgICAgICAgICB9fT57bmFtZX08L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEFyZWE6IFwiYnV0dG9uXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ2JsYWNrJyxcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnXHJcbiAgICAgICAgICAgICAgICB9fSBvbkNsaWNrPXsoKSA9PiBjbGllbnQuc2VuZE1lc3NhZ2UoKX0+Tm90aWZ5PC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbIkJveCIsIlRleHQiLCJCdXR0b24iLCJSb3ciLCJpZCIsInJhbmsiLCJuYW1lIiwiY2xpZW50IiwiZGl2Iiwic3giLCJkaXNwbGF5IiwiZ3JpZFRlbXBsYXRlQXJlYXMiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXJnaW5Cb3R0b20iLCJncmlkQXJlYSIsImZvbnRTaXplIiwidGV4dEFsaWduIiwiY29sb3IiLCJjdXJzb3IiLCJvbkNsaWNrIiwic2VuZE1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Row.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n/* harmony import */ var _components_Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Row */ \"./components/Row.js\");\n\n\n\nvar __N_SSG = true;\nfunction Home(param) {\n    var users = param.users;\n    var _this = this;\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                sx: {\n                    display: \"grid\",\n                    gridTemplateAreas: \"'rank name button'\",\n                    gridTemplateColumns: \"10% 90%\",\n                    width: \"100%\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\",\n                    backgroundColor: 'lightBlue',\n                    marginBottom: '1rem'\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        sx: {\n                            gridArea: \"rank\",\n                            fontSize: \"1rem\",\n                            display: \"grid\",\n                            textAlign: \"left\",\n                            color: 'black'\n                        },\n                        children: \"#\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\index.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(theme_ui__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                        sx: {\n                            gridArea: \"name\",\n                            fontSize: \"1rem\",\n                            display: \"grid\",\n                            textAlign: \"left\",\n                            color: 'black'\n                        },\n                        children: \"Player\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\index.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            users.map(function(user) {\n                /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Row__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    rank: user.rank,\n                    name: user.player.name\n                }, user.id, false, {\n                    fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\index.js\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, _this);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\katar\\\\Documents\\\\LearningStuff\\\\leaderboardPortal\\\\pages\\\\index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this));\n};\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW9DO0FBQ0Q7O0FBRXBCLFFBQVEsQ0FBQ0csSUFBSSxDQUFDLEtBQVMsRUFBRSxDQUFDO1FBQVZDLEtBQUssR0FBUCxLQUFTLENBQVBBLEtBQUs7O0lBRWhDLE1BQU0sNkVBQ0RKLHlDQUFHOzt3RkFHQ0EseUNBQUc7Z0JBQUNLLEVBQUUsRUFBRSxDQUFDO29CQUNOQyxPQUFPLEVBQUUsQ0FBTTtvQkFDZkMsaUJBQWlCLEVBQUUsQ0FBb0I7b0JBQ3ZDQyxtQkFBbUIsRUFBRSxDQUFTO29CQUM5QkMsS0FBSyxFQUFFLENBQU07b0JBQ2JDLGNBQWMsRUFBRSxDQUFRO29CQUN4QkMsVUFBVSxFQUFFLENBQVE7b0JBQ3BCQyxlQUFlLEVBQUUsQ0FBVztvQkFDNUJDLFlBQVksRUFBRSxDQUFNO2dCQUN4QixDQUFDOztnR0FDSVosMENBQUk7d0JBQUNJLEVBQUUsRUFBRSxDQUFDOzRCQUNQUyxRQUFRLEVBQUUsQ0FBTTs0QkFDaEJDLFFBQVEsRUFBRSxDQUFNOzRCQUNoQlQsT0FBTyxFQUFFLENBQU07NEJBQ2ZVLFNBQVMsRUFBRSxDQUFNOzRCQUNqQkMsS0FBSyxFQUFFLENBQU87d0JBQ2xCLENBQUM7a0NBQUUsQ0FBQzs7Ozs7O2dHQUNIaEIsMENBQUk7d0JBQUNJLEVBQUUsRUFBRSxDQUFDOzRCQUNQUyxRQUFRLEVBQUUsQ0FBTTs0QkFDaEJDLFFBQVEsRUFBRSxDQUFNOzRCQUNoQlQsT0FBTyxFQUFFLENBQU07NEJBQ2ZVLFNBQVMsRUFBRSxDQUFNOzRCQUNqQkMsS0FBSyxFQUFFLENBQU87d0JBQ2xCLENBQUM7a0NBQUUsQ0FBTTs7Ozs7Ozs7Ozs7O1lBR1piLEtBQUssQ0FBQ2MsR0FBRyxDQUFDQyxRQUFRLENBQVJBLElBQUk7OEJBQ2YsTUFDWixDQUFDLDhEQURZakIsdURBQUc7b0JBRUFrQixJQUFJLEVBQUVELElBQUksQ0FBQ0MsSUFBSTtvQkFDZkMsSUFBSSxFQUFJRixJQUFJLENBQUNHLE1BQU0sQ0FBQ0QsSUFBSTttQkFGbEJGLElBQUksQ0FBQ0ksRUFBRTs7Ozs7Ozs7Ozs7O0FBTTdCLENBQUM7S0F4Q3VCcEIsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJveCwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJ1xyXG5pbXBvcnQgUm93IGZyb20gJy4uL2NvbXBvbmVudHMvUm93J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHVzZXJzIH0pIHtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxCb3g+XHJcbiAgICAgICAgICAgIHsvKjxhIGhyZWY9XCIvYXBpL2F1dGgvbG9naW5cIj5Mb2dpbjwvYT4qL31cclxuXHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgZ3JpZFRlbXBsYXRlQXJlYXM6IFwiJ3JhbmsgbmFtZSBidXR0b24nXCIsXHJcbiAgICAgICAgICAgICAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBcIjEwJSA5MCVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2xpZ2h0Qmx1ZScsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxcmVtJ1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIDxUZXh0IHN4PXt7XHJcbiAgICAgICAgICAgICAgICAgICAgZ3JpZEFyZWE6IFwicmFua1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjFyZW1cIixcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImdyaWRcIixcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnYmxhY2snXHJcbiAgICAgICAgICAgICAgICB9fT4jPC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPFRleHQgc3g9e3tcclxuICAgICAgICAgICAgICAgICAgICBncmlkQXJlYTogXCJuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMXJlbVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZ3JpZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdibGFjaydcclxuICAgICAgICAgICAgICAgIH19PlBsYXllcjwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcblxyXG4gICAgICAgICAgICB7dXNlcnMubWFwKHVzZXIgPT4gKFxyXG4gICAgICAgICAgICA8Um93XHJcbiAgICAgICAgICAgICAgICBrZXk9IHt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgcmFuaz17dXNlci5yYW5rfVxyXG4gICAgICAgICAgICAgICAgbmFtZSA9IHt1c2VyLnBsYXllci5uYW1lfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L0JveD5cclxuICAgIClcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U3RhdGljUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zdCBsZWFkZXJib2FyZCA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9zY29yZWJvdC1hcGktc2VydmljZS1xM251My5vbmRpZ2l0YWxvY2Vhbi5hcHAvdjEvbGVhZGVyYm9hcmRzL1BQM1NQQTZobUU4OWRYLVpMcS1zOS9lbnRyaWVzP3BhZ2U9MSZzaXplPTUwXCIpO1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGxlYWRlcmJvYXJkLmpzb24oKVxyXG5cclxuICAgIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZygpO1xyXG4gICAgY29uc3QgYWNjb3VudFNpZCA9IHByb2Nlc3MuZW52LlRXSUxJT19BQ0NPVU5UX1NJRDsgLy8gWW91ciBBY2NvdW50IFNJRCBmcm9tIHd3dy50d2lsaW8uY29tL2NvbnNvbGVcclxuICAgIGNvbnN0IGF1dGhUb2tlbiA9IHByb2Nlc3MuZW52LlRXSUxJT19BVVRIX1RPS0VOOyAvLyBZb3VyIEF1dGggVG9rZW4gZnJvbSB3d3cudHdpbGlvLmNvbS9jb25zb2xlXHJcbiAgICBjb25zdCBjbGllbnQgPSByZXF1aXJlKCd0d2lsaW8nKShhY2NvdW50U2lkLCBhdXRoVG9rZW4pO1xyXG5cclxuICAgIGNsaWVudC5tZXNzYWdlc1xyXG4gICAgLmNyZWF0ZSh7XHJcbiAgICAgICAgYm9keTogJ0hlbGxvIGZyb20gVFdJTElPIScsXHJcbiAgICAgICAgdG86ICcrMTI4OTkyODAzMTUnLCAvLyBUZXh0IHRoaXMgbnVtYmVyXHJcbiAgICAgICAgZnJvbTogJysxMjE2MzY5NjE5OScsIC8vIEZyb20gYSB2YWxpZCBUd2lsaW8gbnVtYmVyXHJcbiAgICB9KVxyXG4gICAgLnRoZW4oKG1lc3NhZ2UpID0+IGNvbnNvbGUubG9nKG1lc3NhZ2Uuc2lkKSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICB1c2VyczogZGF0YS5pdGVtc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOlsiQm94IiwiVGV4dCIsIlJvdyIsIkhvbWUiLCJ1c2VycyIsInN4IiwiZGlzcGxheSIsImdyaWRUZW1wbGF0ZUFyZWFzIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwiYmFja2dyb3VuZENvbG9yIiwibWFyZ2luQm90dG9tIiwiZ3JpZEFyZWEiLCJmb250U2l6ZSIsInRleHRBbGlnbiIsImNvbG9yIiwibWFwIiwidXNlciIsInJhbmsiLCJuYW1lIiwicGxheWVyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2F&absolutePagePath=C%3A%5CUsers%5Ckatar%5CDocuments%5CLearningStuff%5CleaderboardPortal%5Cpages%5Cindex.js!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);