"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/ourteam.js":
/*!*******************************!*\
  !*** ./components/ourteam.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./spinner */ \"./components/spinner.js\");\n\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Ourteam() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), team1 = ref[0], setTeam = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), isLoading = ref1[0], setIsLoading = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        setIsLoading(true);\n        fetch(\"https://obstechnologia.com/webAdmin/api/teamshow\").then(function(res) {\n            setIsLoading(true);\n            if (res.status == 200) {\n                return res.json();\n            }\n        }).then(function(res) {\n            console.log(\"&&&&&&&&&&&&&\", res);\n            if (res.length > 0) {\n                var team = res;\n                setTeam(team);\n                setIsLoading(false);\n            } else {\n                return;\n            }\n        });\n        console.log(\"EEEEEE\", team1);\n    }, []);\n    var domain = \"https://obstechnologia.com/webAdmin/\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapper),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ourteam),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrw),\n                        children: [\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().yhc),\n                                children: \"MEET OUR TALENTED TEAM\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                lineNumber: 39,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().bhc),\n                                children: \"We are a family of 20+ talented individuals.\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().row_container),\n                        children: team1 === null || team1 === void 0 ? void 0 : team1.map(function(mem, index) {\n                            return isLoading ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_spinner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, index, false, {\n                                fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                lineNumber: 47,\n                                columnNumber: 17\n                            }, _this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().card),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().picture),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                            loader: function() {\n                                                return domain + mem.url;\n                                            },\n                                            src: domain + mem.url,\n                                            alt: \"member\",\n                                            layout: \"fill\",\n                                            objectFit: \"contain\",\n                                            priority: true\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                            lineNumber: 51,\n                                            columnNumber: 21\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                        lineNumber: 50,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().yc),\n                                        children: index + 1\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cn),\n                                        children: mem.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().cl)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 19\n                                    }, _this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_4___default().position),\n                                        children: mem.designation\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 19\n                                    }, _this)\n                                ]\n                            }, index, true, {\n                                fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n                lineNumber: 36,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\ourteam.js\",\n            lineNumber: 35,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Ourteam, \"e+Qj8lEadTQIYcROuVnJ4J/+oDY=\");\n_c = Ourteam;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ourteam);\nvar _c;\n$RefreshReg$(_c, \"Ourteam\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNyQixLQUFHO3dDQUFDQyxTQUFTLEVBQUVsQixvRUFBUztrREFBRzRCLEtBQUssR0FBRyxDQUFDOzs7Ozs2Q0FBTztrREFDNUMsOERBQUNYLEtBQUc7d0NBQUNDLFNBQVMsRUFBRWxCLG9FQUFTO2tEQUFHMkIsR0FBRyxDQUFDYyxJQUFJOzs7Ozs2Q0FBTztrREFDM0MsOERBQUN4QixLQUFHO3dDQUFDQyxTQUFTLEVBQUVsQixvRUFBUzs7Ozs7NkNBQVE7a0RBQ2pDLDhEQUFDaUIsS0FBRzt3Q0FBQ0MsU0FBUyxFQUFFbEIsMEVBQWU7a0RBQUcyQixHQUFHLENBQUNpQixXQUFXOzs7Ozs2Q0FBTzs7K0JBaEJoRGhCLEtBQUs7Ozs7cUNBaUJULENBQ047eUJBQ0gsQ0FBQzs7Ozs7NEJBQ0U7Ozs7OztvQkFDRjs7Ozs7Z0JBQ0Y7cUJBQ0wsQ0FDSDtDQUNIO0dBbkVRekIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBcUVoQiwrREFBZUEsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvb3VydGVhbS5qcz8zNjhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBMb2FkaW5nU3Bpbm5lciBmcm9tIFwiLi9zcGlubmVyXCI7XG5cbmZ1bmN0aW9uIE91cnRlYW0oKSB7XG4gIGNvbnN0IFt0ZWFtLCBzZXRUZWFtXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICBmZXRjaChcImh0dHBzOi8vb2JzdGVjaG5vbG9naWEuY29tL3dlYkFkbWluL2FwaS90ZWFtc2hvd1wiKVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgICAgIGlmIChyZXMuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcIiYmJiYmJiYmJiYmJiZcIiwgcmVzKTtcbiAgICAgICAgaWYgKHJlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgY29uc3QgdGVhbSA9IHJlcztcbiAgICAgICAgICBzZXRUZWFtKHRlYW0pO1xuICAgICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIkVFRUVFRVwiLCB0ZWFtKTtcbiAgfSwgW10pO1xuICBjb25zdCBkb21haW4gPSBcImh0dHBzOi8vb2JzdGVjaG5vbG9naWEuY29tL3dlYkFkbWluL1wiO1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLndyYXBwZXJ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm91cnRlYW19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud3J3fT5cbiAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnloY30+TUVFVCBPVVIgVEFMRU5URUQgVEVBTTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmJoY30+XG4gICAgICAgICAgICAgIFdlIGFyZSBhIGZhbWlseSBvZiAyMCsgdGFsZW50ZWQgaW5kaXZpZHVhbHMuXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3dfY29udGFpbmVyfT5cbiAgICAgICAgICAgIHt0ZWFtPy5tYXAoKG1lbSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlzTG9hZGluZyA/IChcbiAgICAgICAgICAgICAgICA8TG9hZGluZ1NwaW5uZXIga2V5PXtpbmRleH0gLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICAgICAgPGZpZ3VyZSBjbGFzc05hbWU9e3N0eWxlcy5waWN0dXJlfT5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgbG9hZGVyPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZG9tYWluICsgbWVtLnVybDtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17ZG9tYWluICsgbWVtLnVybH1cbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJtZW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cImZpbGxcIlxuICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvbnRhaW5cIlxuICAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMueWN9PntpbmRleCArIDF9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNufT57bWVtLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNsfT48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucG9zaXRpb259PnttZW0uZGVzaWduYXRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgT3VydGVhbTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSW1hZ2UiLCJMb2FkaW5nU3Bpbm5lciIsIk91cnRlYW0iLCJ0ZWFtIiwic2V0VGVhbSIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsImZldGNoIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiZG9tYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwid3JhcHBlciIsIm91cnRlYW0iLCJ3cnciLCJwIiwieWhjIiwiYmhjIiwicm93X2NvbnRhaW5lciIsIm1hcCIsIm1lbSIsImluZGV4IiwiY2FyZCIsImZpZ3VyZSIsInBpY3R1cmUiLCJsb2FkZXIiLCJ1cmwiLCJzcmMiLCJhbHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJwcmlvcml0eSIsInljIiwiY24iLCJuYW1lIiwiY2wiLCJwb3NpdGlvbiIsImRlc2lnbmF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ourteam.js\n");

/***/ })

});