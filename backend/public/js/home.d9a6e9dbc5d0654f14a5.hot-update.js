webpackHotUpdate("home",{

/***/ "./src/home/Home.js":
/*!**************************!*\
  !*** ./src/home/Home.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\nvar Header = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Header,\n    Content = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Content,\n    Sider = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Sider,\n    Footer = antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"].Footer;\nvar Search = antd__WEBPACK_IMPORTED_MODULE_1__[\"Input\"].Search;\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home(props) {\n    var _this;\n\n    _classCallCheck(this, Home);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(Home).call(this, props));\n    _this.state = {\n      event: '',\n      events: []\n    };\n    return _this;\n  }\n\n  _createClass(Home, [{\n    key: \"onTextChange\",\n    value: function onTextChange(e) {\n      this.setState({\n        event: e.target.value\n      });\n    }\n  }, {\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('/api/random/events').then(function (_ref) {\n        var data = _ref.data;\n\n        _this2.setState({\n          events: data\n        });\n      }).catch(function (err) {\n        console.log(err);\n      });\n    }\n  }, {\n    key: \"search\",\n    value: function search() {\n      window.location.replace('/api/loadSearch?filter=' + this.state.event);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var formItemLayout = {\n        labelCol: {\n          xs: {\n            span: 24\n          },\n          sm: {\n            span: 8\n          }\n        },\n        wrapperCol: {\n          xs: {\n            span: 24\n          },\n          sm: {\n            span: 16\n          }\n        }\n      };\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__[\"HashRouter\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], {\n        className: \"layout\",\n        style: {\n          height: '100vh'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"logo\"\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"], {\n        selectedKeys: [\"100\"],\n        theme: \"dark\",\n        mode: \"horizontal\",\n        style: {\n          lineHeight: '64px'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n        key: \"2\",\n        style: {\n          float: 'left',\n          fontSize: 24\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/\",\n        style: {\n          color: 'inherit'\n        }\n      }, \"SF EVENTS\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n        key: \"3\",\n        style: {\n          width: '70%'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Search, {\n        style: {\n          width: '100%'\n        },\n        value: this.state.event,\n        placeholder: \"Type to Search Event by Name, Description or Location\",\n        onSearch: this.search.bind(this),\n        onChange: this.onTextChange.bind(this)\n      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n        key: \"5\",\n        style: {\n          float: 'right'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/login\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Login\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Menu\"].Item, {\n        key: \"6\",\n        style: {\n          float: 'right'\n        }\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/signup\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"b\", null, \"Register\"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Layout\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Row\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Carousel\"], {\n        autoplay: true\n      }, this.state.events.map(function (item, i) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"], {\n          hoverable: true,\n          style: {\n            height: '80vh',\n            width: '100%',\n            margin: 'auto'\n          },\n          cover: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n            style: {\n              height: '80vh',\n              width: 'auto'\n            },\n            alt: \"example\",\n            src: item.poster\n          })\n        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Card\"].Meta, {\n          title: \"Europe Street beat\",\n          description: \"www.instagram.com\"\n        })); // return <div key={i}>\n        //     <img alt=\"example\" src={item.poster}  style={{height:'80vh',width:'100%',margin:'auto'}}/>\n        // </div>\n      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Col\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_1__[\"Form\"], _extends({}, formItemLayout, {\n        style: {\n          margin: 20\n        }\n      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        style: {\n          \"text-align\": \"center\"\n        }\n      }, \"@2019 SFEvents.com \", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"/privacy\"\n      }, \"privacy Policy\"))))));\n    }\n  }]);\n\n  return Home;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/home/Home.js?");

/***/ })

})