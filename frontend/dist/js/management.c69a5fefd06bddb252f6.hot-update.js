webpackHotUpdate("management",{

/***/ "./src/management/LocationMap.js":
/*!***************************************!*\
  !*** ./src/management/LocationMap.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*\n\nimport React, { Component } from 'react'\nimport GoogleMapReact from 'google-map-react'\nexport default class Map extends Component {\n\n    render() {\n        const defaultProps = {\n            center: { lat: 40.7446790, lng: -73.9485420 },\n            zoom: 11\n        }\n        return (\n            <div className='google-map' style={{ height: `500px`, width: '500px' }}>\n                <GoogleMapReact\n                    defaultCenter={ defaultProps.center}\n                    defaultZoom={defaultProps.zoom }>\n                    <div style={{ height: `500px`, width: '500px' }}\n                        lat={ 40.7473310 }\n                        lng={ -73.8517440 }\n                        text={ 'Where' }\n                            />\n                            </GoogleMapReact>\n                            </div>\n                            )\n                        }\n}*/\n\n//# sourceURL=webpack:///./src/management/LocationMap.js?");

/***/ }),

/***/ "./src/management/MyEvent.js":
/*!***********************************!*\
  !*** ./src/management/MyEvent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return MyEvent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"../../../node_modules/antd/es/index.js\");\n/* harmony import */ var _LocationMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocationMap */ \"./src/management/LocationMap.js\");\n/* harmony import */ var _LocationMap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_LocationMap__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar MyEvent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(MyEvent, _Component);\n\n  function MyEvent(props) {\n    var _this;\n\n    _classCallCheck(this, MyEvent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(MyEvent).call(this, props));\n    _this.state = {};\n    return _this;\n  }\n\n  _createClass(MyEvent, [{\n    key: \"handleSubmit\",\n    value: function handleSubmit() {}\n  }, {\n    key: \"render\",\n    value: function render() {\n      var TextArea = antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].TextArea;\n      var formItemLayout = {\n        labelCol: {\n          xs: {\n            span: 24\n          },\n          sm: {\n            span: 8\n          }\n        },\n        wrapperCol: {\n          xs: {\n            span: 24\n          },\n          sm: {\n            span: 16\n          }\n        }\n      };\n      var pickerStyle = {\n        width: '100%',\n        minWidth: '600px'\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], _extends({}, formItemLayout, {\n        style: {\n          margin: 20\n        }\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        value: 'SFEvent'\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextArea, {\n        placeholder: \"Description\",\n        style: pickerStyle\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LocationMap__WEBPACK_IMPORTED_MODULE_2___default.a, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"], {\n        prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n          type: \"mail\",\n          style: {\n            color: 'rgba(0,0,0,.25)'\n          }\n        }),\n        placeholder: \"Invitation\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        style: {\n          float: 'right'\n        },\n        type: \"primary\",\n        htmlType: \"submit\"\n      }, \"Send\")));\n    }\n  }]);\n\n  return MyEvent;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/management/MyEvent.js?");

/***/ })

})