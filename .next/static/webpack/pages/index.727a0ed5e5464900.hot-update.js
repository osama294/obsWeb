/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/carousel.js":
/*!********************************!*\
  !*** ./components/carousel.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NextJsCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive-carousel/lib/styles/carousel.min.css */ \"./node_modules/react-responsive-carousel/lib/styles/carousel.min.css\");\n/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-responsive-carousel */ \"./node_modules/react-responsive-carousel/lib/js/index.js\");\n/* harmony import */ var _testimonials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./testimonials */ \"./components/testimonials.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _public_next_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../public/next.png */ \"./public/next.png\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.scss */ \"./styles/Home.module.scss\");\n/* harmony import */ var _styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _public_prev_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/prev.png */ \"./public/prev.png\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hooks */ \"./components/hooks.js\");\n/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_hooks__WEBPACK_IMPORTED_MODULE_8__);\nfunction _assertThisInitialized(self) {\n    if (self === void 0) {\n        throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n    }\n    return self;\n}\nfunction _classCallCheck(instance, Constructor) {\n    if (!(instance instanceof Constructor)) {\n        throw new TypeError(\"Cannot call a class as a function\");\n    }\n}\nfunction _defineProperties(target, props) {\n    for(var i = 0; i < props.length; i++){\n        var descriptor = props[i];\n        descriptor.enumerable = descriptor.enumerable || false;\n        descriptor.configurable = true;\n        if (\"value\" in descriptor) descriptor.writable = true;\n        Object.defineProperty(target, descriptor.key, descriptor);\n    }\n}\nfunction _createClass(Constructor, protoProps, staticProps) {\n    if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n    if (staticProps) _defineProperties(Constructor, staticProps);\n    return Constructor;\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _getPrototypeOf(o1) {\n    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n        return o.__proto__ || Object.getPrototypeOf(o);\n    };\n    return _getPrototypeOf(o1);\n}\nfunction _inherits(subClass, superClass) {\n    if (typeof superClass !== \"function\" && superClass !== null) {\n        throw new TypeError(\"Super expression must either be null or a function\");\n    }\n    subClass.prototype = Object.create(superClass && superClass.prototype, {\n        constructor: {\n            value: subClass,\n            writable: true,\n            configurable: true\n        }\n    });\n    if (superClass) _setPrototypeOf(subClass, superClass);\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nfunction _possibleConstructorReturn(self, call) {\n    if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) {\n        return call;\n    }\n    return _assertThisInitialized(self);\n}\nfunction _setPrototypeOf(o2, p1) {\n    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n        o.__proto__ = p;\n        return o;\n    };\n    return _setPrototypeOf(o2, p1);\n}\nvar _typeof = function(obj) {\n    \"@swc/helpers - typeof\";\n    return obj && typeof Symbol !== \"undefined\" && obj.constructor === Symbol ? \"symbol\" : typeof obj;\n};\nfunction _isNativeReflectConstruct() {\n    if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n    if (Reflect.construct.sham) return false;\n    if (typeof Proxy === \"function\") return true;\n    try {\n        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));\n        return true;\n    } catch (e) {\n        return false;\n    }\n}\nfunction _createSuper(Derived) {\n    var hasNativeReflectConstruct = _isNativeReflectConstruct();\n    return function _createSuperInternal() {\n        var Super = _getPrototypeOf(Derived), result;\n        if (hasNativeReflectConstruct) {\n            var NewTarget = _getPrototypeOf(this).constructor;\n            result = Reflect.construct(Super, arguments, NewTarget);\n        } else {\n            result = Super.apply(this, arguments);\n        }\n        return _possibleConstructorReturn(this, result);\n    };\n}\n\n\n\n\n\n\n\n\n\n\nvar NextJsCarousel = /*#__PURE__*/ function(Component1) {\n    \"use strict\";\n    _inherits(NextJsCarousel, Component1);\n    var _super = _createSuper(NextJsCarousel);\n    function NextJsCarousel(props) {\n        _classCallCheck(this, NextJsCarousel);\n        var _this;\n        _this = _super.call(this, props);\n        _this.state = {\n            data: null\n        };\n        return _this;\n    }\n    _createClass(NextJsCarousel, [\n        {\n            key: \"componentDidMount\",\n            value: function componentDidMount() {\n                var _this = this;\n                fetch(\"https://obstechnologia.com/webAdmin/api/testomshow\").then(function(response) {\n                    return response.json();\n                }).then(function(data) {\n                    return _this.setState({\n                        data: data\n                    });\n                });\n                console.log(\"SSS\", this.state);\n            }\n        },\n        {\n            key: \"render\",\n            value: function render() {\n                var _this = this;\n                var data = this.state.data;\n                console.log(\"data\", data);\n                var isRowBased = (0,_hooks__WEBPACK_IMPORTED_MODULE_8__.useMediaQuery)(\"(min-width: 500px)\");\n                var arrowStyles = {\n                    position: \"absolute\",\n                    top: \"0\",\n                    bottom: \"auto\",\n                    padding: \".4em\",\n                    zIndex: 2,\n                    width: \"55px\",\n                    height: \"100%\"\n                };\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_3__.Carousel, {\n                        renderArrowPrev: function(onClickHandler, hasPrev, label) {\n                            return hasPrev && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                onClick: onClickHandler,\n                                title: label,\n                                className: (_styles_Home_module_scss__WEBPACK_IMPORTED_MODULE_9___default().arrowbtn),\n                                style: _objectSpread({}, arrowStyles, {\n                                    left: \"0\",\n                                    backgroundColor: \"transparent\",\n                                    border: \"none\",\n                                    margin: \"auto 74px \"\n                                }),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: _public_prev_png__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                                        alt: \"quote\",\n                                        width: 52,\n                                        height: 52,\n                                        smooth: true\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0);\n                        },\n                        renderArrowNext: function(onClickHandler, hasNext, label) {\n                            return hasNext && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                type: \"button\",\n                                className: \"arrow\",\n                                onClick: onClickHandler,\n                                title: label,\n                                style: _objectSpread({}, arrowStyles, {\n                                    right: 0,\n                                    background: \"transparent\",\n                                    border: \"none\",\n                                    margin: \"auto 74px \"\n                                }),\n                                children: [\n                                    \" \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                        src: _public_next_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                                        alt: \"quote\",\n                                        width: 52,\n                                        height: 52\n                                    }, void 0, false, void 0, void 0)\n                                ]\n                            }, void 0, true, void 0, void 0);\n                        },\n                        showStatus: false,\n                        showThumbs: false,\n                        // autoPlay={true}\n                        style: _objectSpread({}, arrowStyles, {\n                            left: 15\n                        }),\n                        children: data === null || data === void 0 ? void 0 : data.map(function(child, index) {\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_testimonials__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                review: child.discription,\n                                cname: child.company\n                            }, index, false, {\n                                fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\carousel.js\",\n                                lineNumber: 90,\n                                columnNumber: 15\n                            }, _this);\n                        })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\carousel.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Moin Latif\\\\Downloads\\\\OBS-main\\\\components\\\\carousel.js\",\n                    lineNumber: 41,\n                    columnNumber: 7\n                }, this);\n            }\n        }\n    ]);\n    return NextJsCarousel;\n}(react__WEBPACK_IMPORTED_MODULE_1__.Component);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssRUFBRSxDQUFDO29DQUNSQyxVQUFVLEVBQUUsYUFBYTtvQ0FDekJSLE1BQU0sRUFBRSxNQUFNO29DQUNkQyxNQUFNLEVBQUUsWUFBWTtrQ0FDckI7O29DQUVBLEdBQUc7a0RBQ0osOERBQUMxQyxtREFBSzt3Q0FBQzJDLEdBQUcsRUFBRTFDLHdEQUFJO3dDQUFFMkMsR0FBRyxFQUFDLE9BQU87d0NBQUNuQixLQUFLLEVBQUUsRUFBRTt3Q0FBRUMsTUFBTSxFQUFFLEVBQUU7cUVBQUk7OzREQUNoRDt5QkFDVjt3QkFFSHdCLFVBQVUsRUFBRSxLQUFLO3dCQUNqQkMsVUFBVSxFQUFFLEtBQUs7d0JBQ2pCLGtCQUFrQjt3QkFDbEJiLEtBQUssRUFBRSxrQkFBS25CLFdBQVc7NEJBQUVvQixJQUFJLEVBQUUsRUFBRTswQkFBRTtrQ0FFbEMvQixJQUFJLGFBQUpBLElBQUksV0FBSyxHQUFUQSxLQUFBQSxDQUFTLEdBQVRBLElBQUksQ0FBRTRDLEdBQUcsQ0FBQyxTQUFDQyxLQUFLLEVBQUVDLEtBQUssRUFBSzs0QkFDM0IscUJBQ0UsOERBQUN2RCxxREFBWTtnQ0FDWHdELE1BQU0sRUFBRUYsS0FBSyxDQUFDRyxXQUFXO2dDQUN6QkMsS0FBSyxFQUFFSixLQUFLLENBQUNLLE9BQU87K0JBQ2ZKLEtBQUs7Ozs7cUNBQ1YsQ0FDRjt5QkFDSCxDQUFDOzs7Ozs0QkFDTzs7Ozs7d0JBQ1AsQ0FDTjthQUNIOzs7O0NBQ0YsQ0ExRjJDMUQsNENBQVMsQ0EwRnBEO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jYXJvdXNlbC5qcz9jM2MwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFwicmVhY3QtcmVzcG9uc2l2ZS1jYXJvdXNlbC9saWIvc3R5bGVzL2Nhcm91c2VsLm1pbi5jc3NcIjtcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcInJlYWN0LXJlc3BvbnNpdmUtY2Fyb3VzZWxcIjtcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSBcIi4vdGVzdGltb25pYWxzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBuZXh0IGZyb20gXCIuLi9wdWJsaWMvbmV4dC5wbmdcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5zY3NzXCI7XG5pbXBvcnQgcHJldiBmcm9tIFwiLi4vcHVibGljL3ByZXYucG5nXCI7XG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSBcIi4vaG9va3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV4dEpzQ2Fyb3VzZWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBkYXRhOiBudWxsLFxuICAgIH07XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgZmV0Y2goXCJodHRwczovL29ic3RlY2hub2xvZ2lhLmNvbS93ZWJBZG1pbi9hcGkvdGVzdG9tc2hvd1wiKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbigoZGF0YSkgPT4gdGhpcy5zZXRTdGF0ZSh7IGRhdGEgfSkpO1xuICAgIGNvbnNvbGUubG9nKFwiU1NTXCIsIHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbiAgICBjb25zdCBpc1Jvd0Jhc2VkID0gdXNlTWVkaWFRdWVyeShcIihtaW4td2lkdGg6IDUwMHB4KVwiKTtcbiAgICBjb25zdCBhcnJvd1N0eWxlcyA9IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICB0b3A6IFwiMFwiLFxuICAgICAgYm90dG9tOiBcImF1dG9cIixcbiAgICAgIHBhZGRpbmc6IFwiLjRlbVwiLFxuICAgICAgekluZGV4OiAyLFxuICAgICAgd2lkdGg6IFwiNTVweFwiLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8Q2Fyb3VzZWxcbiAgICAgICAgICByZW5kZXJBcnJvd1ByZXY9eyhvbkNsaWNrSGFuZGxlciwgaGFzUHJldiwgbGFiZWwpID0+XG4gICAgICAgICAgICBoYXNQcmV2ICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tIYW5kbGVyfVxuICAgICAgICAgICAgICAgIHRpdGxlPXtsYWJlbH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hcnJvd2J0bn1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgLi4uYXJyb3dTdHlsZXMsXG4gICAgICAgICAgICAgICAgICBsZWZ0OiBcIjBcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICAgICAgICAgICAgYm9yZGVyOiBcIm5vbmVcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvIDc0cHggXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtcIiBcIn1cbiAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcmV2fSBhbHQ9XCJxdW90ZVwiIHdpZHRoPXs1Mn0gaGVpZ2h0PXs1Mn0gc21vb3RoIC8+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICByZW5kZXJBcnJvd05leHQ9eyhvbkNsaWNrSGFuZGxlciwgaGFzTmV4dCwgbGFiZWwpID0+XG4gICAgICAgICAgICBoYXNOZXh0ICYmIChcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFycm93XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrSGFuZGxlcn1cbiAgICAgICAgICAgICAgICB0aXRsZT17bGFiZWx9XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIC4uLmFycm93U3R5bGVzLFxuICAgICAgICAgICAgICAgICAgcmlnaHQ6IDAsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInRyYW5zcGFyZW50XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwibm9uZVwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG8gNzRweCBcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge1wiIFwifVxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e25leHR9IGFsdD1cInF1b3RlXCIgd2lkdGg9ezUyfSBoZWlnaHQ9ezUyfSAvPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgICAgc2hvd1N0YXR1cz17ZmFsc2V9XG4gICAgICAgICAgc2hvd1RodW1icz17ZmFsc2V9XG4gICAgICAgICAgLy8gYXV0b1BsYXk9e3RydWV9XG4gICAgICAgICAgc3R5bGU9e3sgLi4uYXJyb3dTdHlsZXMsIGxlZnQ6IDE1IH19XG4gICAgICAgID5cbiAgICAgICAgICB7ZGF0YT8ubWFwKChjaGlsZCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUZXN0aW1vbmlhbHNcbiAgICAgICAgICAgICAgICByZXZpZXc9e2NoaWxkLmRpc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgIGNuYW1lPXtjaGlsZC5jb21wYW55fVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L0Nhcm91c2VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwidXNlRWZmZWN0IiwiQ2Fyb3VzZWwiLCJUZXN0aW1vbmlhbHMiLCJJbWFnZSIsIm5leHQiLCJzdHlsZXMiLCJwcmV2IiwidXNlTWVkaWFRdWVyeSIsIk5leHRKc0Nhcm91c2VsIiwicHJvcHMiLCJzdGF0ZSIsImRhdGEiLCJjb21wb25lbnREaWRNb3VudCIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsInNldFN0YXRlIiwiY29uc29sZSIsImxvZyIsInJlbmRlciIsImlzUm93QmFzZWQiLCJhcnJvd1N0eWxlcyIsInBvc2l0aW9uIiwidG9wIiwiYm90dG9tIiwicGFkZGluZyIsInpJbmRleCIsIndpZHRoIiwiaGVpZ2h0IiwiZGl2IiwicmVuZGVyQXJyb3dQcmV2Iiwib25DbGlja0hhbmRsZXIiLCJoYXNQcmV2IiwibGFiZWwiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInRpdGxlIiwiY2xhc3NOYW1lIiwiYXJyb3didG4iLCJzdHlsZSIsImxlZnQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiLCJtYXJnaW4iLCJzcmMiLCJhbHQiLCJzbW9vdGgiLCJyZW5kZXJBcnJvd05leHQiLCJoYXNOZXh0IiwicmlnaHQiLCJiYWNrZ3JvdW5kIiwic2hvd1N0YXR1cyIsInNob3dUaHVtYnMiLCJtYXAiLCJjaGlsZCIsImluZGV4IiwicmV2aWV3IiwiZGlzY3JpcHRpb24iLCJjbmFtZSIsImNvbXBhbnkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/carousel.js\n");

/***/ }),

/***/ "./components/hooks.js":
/*!*****************************!*\
  !*** ./components/hooks.js ***!
  \*****************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports on update so we can compare the boundary
                // signatures.
                module.hot.dispose(function (data) {
                    data.prevExports = currentExports;
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevExports !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevExports !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});