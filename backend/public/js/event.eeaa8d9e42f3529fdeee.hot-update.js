webpackHotUpdate("event",{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/event/Event.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/event/Event.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Imports\nexports.i(__webpack_require__(/*! -!../../node_modules/css-loader/dist/cjs.js!antd/dist/antd.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/antd/dist/antd.css\"), \"\");\n\n// Module\nexports.push([module.i, \".Event {\\n  text-align: center;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./src/event/Event.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/event/Event.css":
/*!*****************************!*\
  !*** ./src/event/Event.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Event.css */ \"./node_modules/css-loader/dist/cjs.js!./src/event/Event.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(true) {\n\tmodule.hot.accept(/*! !../../node_modules/css-loader/dist/cjs.js!./Event.css */ \"./node_modules/css-loader/dist/cjs.js!./src/event/Event.css\", function() {\n\t\tvar newContent = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./Event.css */ \"./node_modules/css-loader/dist/cjs.js!./src/event/Event.css\");\n\n\t\tif(typeof newContent === 'string') newContent = [[module.i, newContent, '']];\n\n\t\tvar locals = (function(a, b) {\n\t\t\tvar key, idx = 0;\n\n\t\t\tfor(key in a) {\n\t\t\t\tif(!b || a[key] !== b[key]) return false;\n\t\t\t\tidx++;\n\t\t\t}\n\n\t\t\tfor(key in b) idx--;\n\n\t\t\treturn idx === 0;\n\t\t}(content.locals, newContent.locals));\n\n\t\tif(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');\n\n\t\tupdate(newContent);\n\t});\n\n\tmodule.hot.dispose(function() { update(); });\n}\n\n//# sourceURL=webpack:///./src/event/Event.css?");

/***/ }),

/***/ "./src/event/Event.js":
/*!****************************!*\
  !*** ./src/event/Event.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Event_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Event.css */ \"./src/event/Event.css\");\n/* harmony import */ var _Event_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Event_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _management_LocationMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../management/LocationMap */ \"./src/management/LocationMap.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_6__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Header,\n    Content = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Content,\n    Sider = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Sider,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"].Footer;\nvar Meta = antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"].Meta;\nvar Search = antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].Search;\n\nvar EventInfo =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(EventInfo, _Component);\n\n  function EventInfo(props) {\n    var _this;\n\n    _classCallCheck(this, EventInfo);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventInfo).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"populateEvent\", function () {\n      var urlParams = new URLSearchParams(window.location.search);\n      var eventID = urlParams.get('eventID');\n\n      if (eventID) {\n        axios__WEBPACK_IMPORTED_MODULE_5___default.a.get('/api/fetchEvent?eventID=' + eventID).then(function (result) {\n          _this.setState({\n            eventData: result.data[0]\n          });\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"reportEvent\", function () {\n      _this.props.form.validateFields(function (err, values) {\n        if (!err) {\n          axios__WEBPACK_IMPORTED_MODULE_5___default.a.put(\"/api/report/event/\".concat(_this.state.eventData.eid), values).then(function () {\n            antd__WEBPACK_IMPORTED_MODULE_2__[\"message\"].success('Event reported successfully');\n\n            _this.setState({\n              visible: false\n            });\n          }).catch(function (err) {\n            console.log(err);\n          });\n        }\n      });\n    });\n\n    _this.state = {\n      eventData: {},\n      visible: false\n    };\n    return _this;\n  }\n\n  _createClass(EventInfo, [{\n    key: \"onTextChange\",\n    value: function onTextChange(e) {\n      this.setState({\n        event: e.target.value\n      });\n    }\n  }, {\n    key: \"search\",\n    value: function search() {\n      window.location.replace('/api/loadSearch?filter=' + this.state.event);\n    }\n  }, {\n    key: \"showModal\",\n    value: function showModal() {\n      this.setState({\n        visible: true\n      });\n    }\n  }, {\n    key: \"componentWillMount\",\n    value: function componentWillMount() {\n      this.populateEvent();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var getFieldDecorator = this.props.form.getFieldDecorator;\n      console.log('event', this.state.eventData);\n      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"], {\n        theme: \"dark\",\n        mode: \"horizontal\",\n        style: {\n          lineHeight: '64px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n        key: \"2\",\n        style: {\n          float: 'left',\n          fontSize: 24\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: \"/\",\n        style: {\n          color: 'inherit'\n        }\n      }, \"SF EVENTS\"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n        key: \"4\",\n        style: {\n          float: 'right'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: \"/login\"\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Login\"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n        key: \"5\",\n        style: {\n          float: 'right'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: \"/signup\"\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Register\"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n        key: \"6\",\n        style: {\n          float: 'right'\n        },\n        onClick: this.showModal.bind(this)\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Report\")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Menu\"].Item, {\n        key: \"7\",\n        style: {\n          float: 'right'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: \"/login\"\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Book\")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Layout\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Card\"], {\n        hoverable: true,\n        style: {\n          width: '80%',\n          marginTop: 40,\n          marginBottom: 40,\n          display: 'block',\n          marginLeft: 'auto',\n          marginRight: 'auto'\n        },\n        cover: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n          style: {\n            backgroundImage: \"uri(\".concat(this.state.eventData.poster, \")\")\n          }\n        }) // <img alt=\"example\" src={this.state.eventData.poster}  style={{ maxHeight: 'auto'}}/>\n\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Meta, {\n        title: this.state.eventData.title\n      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        style: {\n          width: '45%',\n          borderStyle: 'solid',\n          borderWidth: '1px',\n          marginBottom: 48,\n          marginLeft: 48,\n          backgroundColor: '#FFFFFF',\n          minHeight: 360,\n          borderColor: '#a6a7a8',\n          float: 'left'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_management_LocationMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        width: \"45%\",\n        height: \"360px\",\n        location: this.state.eventData.location\n      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        style: {\n          width: '45%',\n          borderStyle: 'solid',\n          borderWidth: '1px',\n          marginBottom: 16,\n          marginRight: 48,\n          backgroundColor: '#FFFFFF',\n          minHeight: 32,\n          borderColor: '#a6a7a8',\n          float: 'right'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", {\n        style: {\n          marginLeft: 24\n        }\n      }, \"People attending:\"), \" \", this.state.eventData.max_attending, \" people are attending this event\", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"br\", null))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        style: {\n          width: '45%',\n          borderStyle: 'solid',\n          borderWidth: '1px',\n          marginBottom: 48,\n          marginRight: 48,\n          backgroundColor: '#FFFFFF',\n          minHeight: 312,\n          borderColor: '#a6a7a8',\n          float: 'right'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        style: {\n          marginLeft: 24,\n          marginRight: 24\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Description: \"), \"  \", this.state.eventData.description), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        style: {\n          marginLeft: 24,\n          marginRight: 24\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Date: \"), \" \", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        format: \"YYYY/MM/DD\"\n      }, \"  \", this.state.eventData.start_time)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        style: {\n          marginLeft: 24,\n          marginRight: 24\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Start Time:\"), \" \", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        format: \"HH:mm\"\n      }, \"  \", this.state.eventData.start_time), \" \"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        style: {\n          marginLeft: 24,\n          marginRight: 24\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"End Time: \"), \" \", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_6___default.a, {\n        format: \"HH : mm\"\n      }, \" \", this.state.eventData.end_time), \"  \"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        style: {\n          marginLeft: 24,\n          marginRight: 24\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Price: \"), \" \", this.state.eventData.price, \" \"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"div\", {\n        style: {\n          marginLeft: 24,\n          marginRight: 24\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"b\", null, \"Is Reported: \"), \" \", this.state.eventData.isReported == null || this.state.eventData.isReported == false ? 'No' : 'Yes', \"  \")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Modal\"], {\n        title: \"Report Event\",\n        visible: this.state.visible,\n        okText: \"Report\",\n        onOk: this.reportEvent.bind(this),\n        onCancel: function onCancel() {\n          _this2.setState({\n            visible: false\n          });\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].Item, {\n        label: \"Reason\"\n      }, getFieldDecorator('reason', {\n        rules: [{\n          required: true,\n          message: 'Please tell us why are want to report this event'\n        }]\n      })(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_2__[\"Input\"].TextArea, {\n        rows: 5,\n        placeholder: \"please tell us why you want to report this event\",\n        style: {\n          width: '100%'\n        }\n      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Footer, {\n        style: {\n          textAlign: 'center'\n        }\n      }, \"@2019 SFEvents.com \", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(\"a\", {\n        href: \"/privacy\"\n      }, \"privacy Policy\")))));\n    }\n  }]);\n\n  return EventInfo;\n}(react__WEBPACK_IMPORTED_MODULE_1__[\"Component\"]);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (antd__WEBPACK_IMPORTED_MODULE_2__[\"Form\"].create()(EventInfo));\n\n//# sourceURL=webpack:///./src/event/Event.js?");

/***/ })

})