webpackHotUpdate("management",{

/***/ "./src/management/LocationMap.js":
/*!***************************************!*\
  !*** ./src/management/LocationMap.js ***!
  \***************************************/
/*! exports provided: LocationMap, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LocationMap\", function() { return LocationMap; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n/*\n\nimport React, { Component } from 'react'\nimport GoogleMapReact from 'google-map-react'\nexport default class Map extends Component {\n\n    render() {\n        const defaultProps = {\n            center: { lat: 40.7446790, lng: -73.9485420 },\n            zoom: 11\n        }\n        return (\n            <div className='google-map' style={{ height: `500px`, width: '500px' }}>\n                <GoogleMapReact\n                    defaultCenter={ defaultProps.center}\n                    defaultZoom={defaultProps.zoom }>\n                    <div style={{ height: `500px`, width: '500px' }}\n                        lat={ 40.7473310 }\n                        lng={ -73.8517440 }\n                        text={ 'Where' }\n                            />\n                </GoogleMapReact>\n                            </div>\n                            )\n                        }\n}*/\n\n\nvar LocationMap =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LocationMap, _Component);\n\n  function LocationMap() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, LocationMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LocationMap)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onMarkerClick\", function (props, marker, e) {\n      return _this.setState({\n        selectedPlace: props,\n        activeMarker: marker //showingInfoWindow: true\n\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(LocationMap, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          height: \"500px\",\n          width: '500px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"Map\"], {\n        google: this.props.google,\n        zoom: 14,\n        style: {\n          height: \"500px\",\n          width: '500px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n        onClick: this.onMarkerClick,\n        name: 'Current location'\n      })));\n    }\n  }]);\n\n  return LocationMap;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"GoogleApiWrapper\"])({//  apiKey: (YOUR_GOOGLE_API_KEY_GOES_HERE)\n})(LocationMap));\n\n//# sourceURL=webpack:///./src/management/LocationMap.js?");

/***/ })

})