webpackHotUpdate("eventList",{

/***/ "./src/management/LocationMap.js":
/*!***************************************!*\
  !*** ./src/management/LocationMap.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ \"./node_modules/google-maps-react/dist/index.js\");\n/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n/**\n * This class creates google map component\n */\n\nvar LocationMap =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LocationMap, _Component);\n\n  function LocationMap() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, LocationMap);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LocationMap)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"state\", {\n      markers: [{\n        name: \"Current location\",\n        position: {\n          lat: 37.70,\n          lng: -122.47\n        }\n      }]\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"onMarkerDragEnd\", function (coord, index) {\n      var latLng = coord.latLng;\n      var lat = latLng.lat();\n      var lng = latLng.lng();\n\n      _this.setState(function (prevState) {\n        var markers = _toConsumableArray(_this.state.markers);\n\n        markers[index] = _objectSpread({}, markers[index], {\n          position: {\n            lat: lat,\n            lng: lng\n          }\n        });\n        return {\n          markers: markers\n        };\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(LocationMap, [{\n    key: \"updateLocation\",\n    value: function updateLocation(location) {\n      var _this2 = this;\n\n      if (location) {\n        location = location.replace(/ /g, \"+\");\n        alert(location);\n        var queryString = \"https://maps.googleapis.com/maps/api/geocode/json?address=\" + location + \"&key=\" + \"AIzaSyCwQGCqTjEPs1-9trnQpw0ye622g1FyxnU\";\n        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(queryString).then(function (result) {\n          //TODO integration with logged in user\n          console.log(result);\n          var latitude = parseFloat(result.data.results[0].geometry.location.lat.toFixed(2));\n          var longitude = parseFloat(result.data.results[0].geometry.location.lng.toFixed(2));\n\n          _this2.setState({\n            markers: [{\n              name: _this2.props.location,\n              position: {\n                lat: latitude,\n                lng: longitude\n              }\n            }]\n          });\n\n          _this2.forceUpdate();\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    }\n  }, {\n    key: \"shouldComponentUpdate\",\n    value: function shouldComponentUpdate(nextProps, nextState, nextContext) {\n      console.log(nextProps.location);\n\n      if (nextProps.location !== this.props.location) {\n        this.updateLocation(nextProps.location);\n        return true;\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      this.updateLocation(this.props.location);\n    }\n    /**\n     * This function updates the state/position of marker according to new co-ordinates\n     * @param coord\n     * @param index\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this3 = this;\n\n      console.log('state', this.state);\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"Map\"], {\n        google: this.props.google,\n        style: {\n          width: this.props.width,\n          height: this.props.height\n        },\n        zoom: 10\n      }, this.state.markers.map(function (marker, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"Marker\"], {\n          position: marker.position,\n          draggable: true,\n          onDragend: function onDragend(t, map, coord) {\n            return _this3.onMarkerDragEnd(coord, index);\n          },\n          name: marker.name,\n          title: marker.name\n        });\n      }));\n    }\n  }]);\n\n  return LocationMap;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__[\"GoogleApiWrapper\"])({\n  apiKey: \"AIzaSyCwQGCqTjEPs1-9trnQpw0ye622g1FyxnU\"\n})(LocationMap));\n\n//# sourceURL=webpack:///./src/management/LocationMap.js?");

/***/ })

})