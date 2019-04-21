webpackHotUpdate("management",{

/***/ "./src/management/Event.js":
/*!*********************************!*\
  !*** ./src/management/Event.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Event; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"../../../node_modules/antd/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _CreateEvent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CreateEvent */ \"./src/management/CreateEvent.js\");\n/* harmony import */ var _MyEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MyEvent */ \"./src/management/MyEvent.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Header,\n    Content = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Content,\n    Sider = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Sider,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Footer;\n\nvar Event =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Event, _Component);\n\n  function Event(props) {\n    var _this;\n\n    _classCallCheck(this, Event);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Event).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(Event, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n        style: {\n          minHeight: '100vh'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Sider, {\n        style: {\n          zIndex: 10000\n        },\n        breakpoint: \"lg\",\n        collapsedWidth: \"0\",\n        onBreakpoint: function onBreakpoint(broken) {\n          console.log(broken);\n        },\n        onCollapse: function onCollapse(collapsed, type) {\n          console.log(collapsed, type);\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"logo\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"], {\n        onClick: function onClick() {},\n        mode: \"vertical\",\n        theme: 'dark'\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n        key: 'reportedUsers'\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: '/admin/report/users'\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n        type: \"user\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Reported Users\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n        key: 'reportedEvents'\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Link\"], {\n        to: '/admin/report/events'\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n        type: \"form\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"Reported Events\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {\n        style: {\n          background: '#fff',\n          padding: 0\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: '/admin/report/users',\n        component: _CreateEvent__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"Route\"], {\n        exact: true,\n        path: '/admin/report/events',\n        component: _MyEvent__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {\n        style: {\n          textAlign: 'center'\n        }\n      }, \"\\xA9\", new Date().getFullYear(), \" SFEVENT\"))));\n    }\n  }]);\n\n  return Event;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/management/Event.js?");

/***/ }),

/***/ "./src/management/MyEvent.js":
/*!***********************************!*\
  !*** ./src/management/MyEvent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ReportedUser; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"../../../node_modules/antd/es/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\nvar ReportedUser =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ReportedUser, _Component);\n\n  function ReportedUser(props) {\n    var _this;\n\n    _classCallCheck(this, ReportedUser);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(ReportedUser).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(ReportedUser, [{\n    key: \"render\",\n    value: function render() {\n      var columns = [{\n        title: 'User ID',\n        dataIndex: 'id'\n      }, {\n        title: 'Username',\n        dataIndex: 'userName'\n      }, {\n        title: 'Reason',\n        dataIndex: 'reason'\n      }, {\n        title: 'Reported By',\n        dataIndex: 'reportedBy'\n      }];\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n        columns: columns,\n        dataSource: []\n      });\n    }\n  }]);\n\n  return ReportedUser;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/management/MyEvent.js?");

/***/ })

})