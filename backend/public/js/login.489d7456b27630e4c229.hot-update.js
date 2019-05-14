webpackHotUpdate("login",{

/***/ "./src/login/index.js":
/*!****************************!*\
  !*** ./src/login/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\n\nvar NormalLoginForm =\n/*#__PURE__*/\nfunction (_React$Component) {\n  _inherits(NormalLoginForm, _React$Component);\n\n  function NormalLoginForm() {\n    var _getPrototypeOf2;\n\n    var _this;\n\n    _classCallCheck(this, NormalLoginForm);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(NormalLoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));\n\n    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), \"handleSubmit\", function (e) {\n      e.preventDefault();\n\n      _this.props.form.validateFields(function (err, values) {\n        if (!err) {\n          axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/api/login', values).then(function () {}).catch(function (err) {\n            console.log(err);\n          });\n        }\n      });\n    });\n\n    return _this;\n  }\n\n  _createClass(NormalLoginForm, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      document.getElementsByClassName('login-form')[0].action = '/api/login';\n      document.getElementsByClassName('login-form')[0].method = 'post';\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var getFieldDecorator = this.props.form.getFieldDecorator;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Row\"], {\n        style: {\n          marginTop: '5%'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"center\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n        src: \"http://lms.iukl.edu.my/images/icons/register_icon.png\",\n        id: \"icon\",\n        alt: \"\",\n        width: \"200\",\n        height: \"200\"\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n        style: {\n          textAlign: 'center'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"font\", {\n        size: \"+10\"\n      }, \"Login\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Col\"], {\n        lg: 8,\n        offset: 8\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Form\"], {\n        method: 'post',\n        action: '/api/login',\n        className: \"login-form\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Form\"].Item, null, getFieldDecorator('username', {\n        rules: [{\n          required: true,\n          message: 'Email can not be empty!'\n        }]\n      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n        prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n          type: \"user\",\n          style: {\n            color: 'rgba(0,0,0,.25)'\n          }\n        }),\n        placeholder: \"Username\"\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Form\"].Item, null, getFieldDecorator('password', {\n        rules: [{\n          required: true,\n          message: 'Password can not be empty!'\n        }]\n      })(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Input\"], {\n        prefix: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Icon\"], {\n          type: \"lock\",\n          style: {\n            color: 'rgba(0,0,0,.25)'\n          }\n        }),\n        type: \"password\",\n        placeholder: \"Password\"\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          textAlign: 'center',\n          marginTop: 10,\n          marginBottom: 20\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_4__[\"Button\"], {\n        type: \"primary\",\n        htmlType: \"submit\",\n        style: {\n          width: '100%'\n        },\n        className: \"login-form-button\"\n      }, \"Log in\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          textAlign: 'center'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        className: \"login-form-forgot\",\n        href: \"/password/recovery\"\n      }, \"Forgot password\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          textAlign: 'center',\n          marginTop: 15\n        }\n      }, \"Don't have an account ?  \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/signup\"\n      }, \"register now!\")))));\n    }\n  }]);\n\n  return NormalLoginForm;\n}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);\n\nvar WrappedNormalLoginForm = antd__WEBPACK_IMPORTED_MODULE_4__[\"Form\"].create({\n  name: 'normal_login'\n})(NormalLoginForm);\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedNormalLoginForm, null), document.getElementById('app'));\nmodule.hot.accept();\n\n//# sourceURL=webpack:///./src/login/index.js?");

/***/ })

})