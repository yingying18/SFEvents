webpackHotUpdate("management",{

/***/ "./src/management/MyEvent.js":
/*!***********************************!*\
  !*** ./src/management/MyEvent.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return CreateEvent; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ \"./node_modules/moment/moment.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _LocationMap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocationMap */ \"./src/management/LocationMap.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-moment */ \"./node_modules/react-moment/dist/index.js\");\n/* harmony import */ var react_moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_moment__WEBPACK_IMPORTED_MODULE_5__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nvar RangePicker = antd__WEBPACK_IMPORTED_MODULE_1__[\"DatePicker\"].RangePicker;\n\n\n\nvar google = window.google;\n\nvar CreateEvent =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CreateEvent, _Component);\n\n  function CreateEvent(props) {\n    var _this;\n\n    _classCallCheck(this, CreateEvent);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(CreateEvent).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"sendInvitations\", function (e) {\n      e.preventDefault();\n      axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/sendMail', _this.state.dataToUpdate).then(function (data) {\n        antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].success('Event invitation has been sent successfully.');\n      }).catch(function (err) {\n        antd__WEBPACK_IMPORTED_MODULE_1__[\"message\"].success('Fail to send invitation');\n        console.log(err);\n      });\n    });\n\n    _this.state = {\n      eventAction: \"Send Invitation\",\n      data: {},\n      isPublic: 'No',\n      dataToUpdate: {},\n      invitations: []\n    };\n    return _this;\n  }\n\n  _createClass(CreateEvent, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var updateData = this.props.data;\n      console.log(updateData);\n\n      if (updateData && Object.keys(updateData).length > 0) {\n        axios__WEBPACK_IMPORTED_MODULE_2___default.a.get('/api/fetchEventAttending?eid=' + updateData.eid).then(function (result) {\n          console.log(result);\n\n          _this2.setState({\n            isPublic: updateData.is_public.data[0] == 1 ? 'Yes' : 'No'\n          });\n\n          _this2.setState({\n            dataToUpdate: updateData\n          });\n\n          var invitationData = [];\n\n          for (var i in result.data) {\n            invitationData.push({\n              mail: result.data[i].email,\n              isAttending: result.data[i].isAttending.data[0] == 1 ? 'Yes' : 'No'\n            });\n          }\n\n          _this2.setState({\n            invitations: invitationData\n          });\n        }).catch(function (err) {\n          console.log(err);\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var labelStyle = {\n        margin: 10\n      };\n      var labelStyle1 = {};\n      var labelStyle2 = {\n        textAlign: 'center',\n        fontSize: 36\n      };\n      var col1 = {\n        marginLeft: '10%',\n        marginRight: '5%',\n        backgroundColor: 'white',\n        border: '1px solid lightgray',\n        minHeight: '250px',\n        boxShadow: '10px 10px 5px #aaaaaa'\n      };\n      var col2 = {\n        marginLeft: '5%',\n        marginRight: '10%',\n        backgroundColor: 'white',\n        minHeight: '250px',\n        overflow: 'auto',\n        border: '1px solid lightgray',\n        boxShadow: '10px 10px 5px #aaaaaa'\n      };\n      var mapStyle = {\n        height: '300px',\n        marginRight: '5%',\n        marginLeft: '5%',\n        marginTop: 20,\n        boxShadow: '10px 10px 5px #aaaaaa'\n      };\n      var columns = [{\n        title: 'Email',\n        dataIndex: 'email'\n      }, {\n        title: 'Email',\n        dataIndex: 'isAttending'\n      }];\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        style: labelStyle2\n      }, \"Invitation\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: col1\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: labelStyle\n      }, \"Event:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        id: \"title\",\n        style: labelStyle1\n      }, this.state.dataToUpdate.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: labelStyle\n      }, \"Description:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        id: \"description\",\n        style: labelStyle1\n      }, this.state.dataToUpdate.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: labelStyle\n      }, \"Start On:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        id: \"start_date_time\",\n        style: labelStyle1\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        format: \"YYYY/MM/DD\"\n      }, this.state.dataToUpdate.start_time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        format: \"HH:mm\"\n      }, this.state.dataToUpdate.start_time)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: labelStyle\n      }, \"End On:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        id: \"start_date_time\",\n        style: labelStyle1\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        format: \"YYYY/MM/DD\"\n      }, this.state.dataToUpdate.end_time), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_moment__WEBPACK_IMPORTED_MODULE_5___default.a, {\n        format: \"HH:mm\"\n      }, this.state.dataToUpdate.end_time)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: labelStyle\n      }, \"Public:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        id: \"is_public\",\n        style: labelStyle1\n      }, this.state.isPublic), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: labelStyle\n      }, \"Maximun Attending:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        id: \"max_attending\",\n        style: labelStyle1\n      }, this.state.dataToUpdate.max_attending), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", {\n        style: labelStyle\n      }, \"Price:\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"label\", {\n        id: \"price\",\n        style: labelStyle1\n      }, this.state.dataToUpdate.price), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        span: 12\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: col2\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Table\"], {\n        dataSource: this.state.invitations,\n        columns: columns\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n        style: mapStyle\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], {\n        xs: 24,\n        sm: 24\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LocationMap__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        id: \"mapLocation\",\n        width: \"100%\",\n        height: \"300px\",\n        location: this.state.dataToUpdate.location\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], {\n        style: {\n          marginTop: 50\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Button\"], {\n        id: \"send\",\n        style: {\n          width: '200px',\n          marginLeft: '45%'\n        },\n        type: \"primary\",\n        onClick: this.sendInvitations\n      }, this.state.eventAction))));\n    }\n  }]);\n\n  return CreateEvent;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/management/MyEvent.js?");

/***/ })

})