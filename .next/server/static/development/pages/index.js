module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./environment.js":
/*!************************!*\
  !*** ./environment.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Henova',
  author: 'Hcode',
  url: `http://henova.com.br`,
  baseUrl: `http://henova.com.br`,
  themeColor: '#02AAF1',
  ogImage: `http://henova.com.br/images/henova.png`
});

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environment */ "./environment.js");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../styles/index.scss */ "./styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "D:\\htdocs\\henova.com.br\\v2\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const HomePage = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("title", {
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "Henova"), __jsx("meta", {
    name: "author",
    content: _environment__WEBPACK_IMPORTED_MODULE_3__["default"].author,
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("meta", {
    name: "application-name",
    content: _environment__WEBPACK_IMPORTED_MODULE_3__["default"].name,
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("meta", {
    name: "msapplication-TileColor",
    content: _environment__WEBPACK_IMPORTED_MODULE_3__["default"].themeColor,
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("meta", {
    name: "theme-color",
    content: _environment__WEBPACK_IMPORTED_MODULE_3__["default"].themeColor,
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("meta", {
    name: "viewport",
    content: "initial-scale=1.0, width=device-width",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), __jsx("meta", {
    name: "description",
    content: "Henova - Decora\xE7\xE3o de Interiores, Logotipia e Comunica\xE7\xE3o Visual",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:image",
    content: _environment__WEBPACK_IMPORTED_MODULE_3__["default"].ogImage,
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:title",
    content: "Henova - Decora\xE7\xE3o de Interiores, Logotipia e Comunica\xE7\xE3o Visual",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:url",
    content: _environment__WEBPACK_IMPORTED_MODULE_3__["default"].url,
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:site_name",
    content: _environment__WEBPACK_IMPORTED_MODULE_3__["default"].name,
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:description",
    content: "Henova - Decora\xE7\xE3o de Interiores, Logotipia e Comunica\xE7\xE3o Visual",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx("link", {
    rel: "apple-touch-icon",
    href: "/favicon.png",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon",
    href: "/favicon.svg",
    type: "image/svg+xml",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("link", {
    rel: "icon alternate",
    href: "/favicon.png",
    type: "image/png",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("link", {
    rel: "manifest",
    href: "/manifest.json",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  })), __jsx("main", {
    className: "jsx-1972528322" + " " + (_styles_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a.main || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("img", {
    src: "/images/henova.webp",
    alt: "Logo Henova",
    className: "jsx-1972528322",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1972528322",
    __self: undefined
  }, "body{margin:0;padding:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxodGRvY3NcXGhlbm92YS5jb20uYnJcXHYyXFxwYWdlc1xcaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkIrQixBQUc4QixTQUNDLFVBQ2QiLCJmaWxlIjoiRDpcXGh0ZG9jc1xcaGVub3ZhLmNvbS5iclxcdjJcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGVudmlyb25tZW50IGZyb20gJy4uL2Vudmlyb25tZW50J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vLi4vc3R5bGVzL2luZGV4LnNjc3MnXHJcblxyXG5jb25zdCBIb21lUGFnZSA9IHByb3BzID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+SGVub3ZhPC90aXRsZT5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJhdXRob3JcIiBjb250ZW50PXtlbnZpcm9ubWVudC5hdXRob3J9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiYXBwbGljYXRpb24tbmFtZVwiIGNvbnRlbnQ9e2Vudmlyb25tZW50Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiBjb250ZW50PXtlbnZpcm9ubWVudC50aGVtZUNvbG9yfSAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInRoZW1lLWNvbG9yXCIgY29udGVudD17ZW52aXJvbm1lbnQudGhlbWVDb2xvcn0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJIZW5vdmEgLSBEZWNvcmHDp8OjbyBkZSBJbnRlcmlvcmVzLCBMb2dvdGlwaWEgZSBDb211bmljYcOnw6NvIFZpc3VhbFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17ZW52aXJvbm1lbnQub2dJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PVwiSGVub3ZhIC0gRGVjb3Jhw6fDo28gZGUgSW50ZXJpb3JlcywgTG9nb3RpcGlhIGUgQ29tdW5pY2HDp8OjbyBWaXN1YWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtlbnZpcm9ubWVudC51cmx9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e2Vudmlyb25tZW50Lm5hbWV9IC8+XHJcbiAgICAgICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cIkhlbm92YSAtIERlY29yYcOnw6NvIGRlIEludGVyaW9yZXMsIExvZ290aXBpYSBlIENvbXVuaWNhw6fDo28gVmlzdWFsXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImFwcGxlLXRvdWNoLWljb25cIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uc3ZnXCIgdHlwZT1cImltYWdlL3N2Zyt4bWxcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpbmsgcmVsPVwiaWNvbiBhbHRlcm5hdGVcIiBocmVmPVwiL2Zhdmljb24ucG5nXCIgdHlwZT1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJtYW5pZmVzdFwiIGhyZWY9XCIvbWFuaWZlc3QuanNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9pbWFnZXMvaGVub3ZhLndlYnBcIiBhbHQ9XCJMb2dvIEhlbm92YVwiIC8+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGJvZHkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn1cclxuICBcclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXX0= */\n/*@ sourceURL=D:\\\\htdocs\\\\henova.com.br\\\\v2\\\\pages\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (HomePage);

/***/ }),

/***/ "./styles/index.scss":
/*!***************************!*\
  !*** ./styles/index.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"main": "iKYYlP1J0KVadIp2qpADB"
};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\htdocs\henova.com.br\v2\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map