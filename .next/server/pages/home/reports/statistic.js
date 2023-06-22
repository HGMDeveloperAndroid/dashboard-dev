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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home/reports/statistic.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./components/backdrop/Backdrop.tsx":
/*!******************************************!*\
  !*** ./components/backdrop/Backdrop.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Backdrop; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _backdrop_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backdrop.module.scss */ "./components/backdrop/backdrop.module.scss");
/* harmony import */ var _backdrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backdrop_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\backdrop\\Backdrop.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Backdrop({
  display,
  children
}) {
  return __jsx("div", {
    style: {
      display
    },
    className: _backdrop_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Backdrop,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, children);
}

/***/ }),

/***/ "./components/backdrop/backdrop.module.scss":
/*!**************************************************!*\
  !*** ./components/backdrop/backdrop.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"Backdrop": "backdrop_Backdrop__-CWnZ"
};


/***/ }),

/***/ "./components/buttons/PrimaryButton.tsx":
/*!**********************************************!*\
  !*** ./components/buttons/PrimaryButton.tsx ***!
  \**********************************************/
/*! exports provided: PrimaryButton, PrimaryButtonVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return PrimaryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryButtonVariant", function() { return PrimaryButtonVariant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.module.scss */ "./components/buttons/button.module.scss");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\buttons\\PrimaryButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var PrimaryButtonVariant = /*#__PURE__*/function (PrimaryButtonVariant) {
  PrimaryButtonVariant[PrimaryButtonVariant["Success"] = 0] = "Success";
  PrimaryButtonVariant[PrimaryButtonVariant["Error"] = 1] = "Error";
  return PrimaryButtonVariant;
}(PrimaryButtonVariant || {});
const PrimaryButton = ({
  className,
  tabindex,
  label,
  type,
  onClick,
  disabled,
  variant
}) => {
  const buttonClass = variant === PrimaryButtonVariant.Error ? _button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.primaryButtonError : _button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.primaryButton;
  return __jsx("button", {
    className: `${buttonClass} ${className}`,
    type: type,
    onClick: onClick,
    disabled: disabled,
    tabIndex: tabindex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, label);
};
PrimaryButton.defaultProps = {
  type: 'button',
  onClick: () => {},
  disabled: false,
  variant: PrimaryButtonVariant.Success
};


/***/ }),

/***/ "./components/buttons/SecondaryButton.tsx":
/*!************************************************!*\
  !*** ./components/buttons/SecondaryButton.tsx ***!
  \************************************************/
/*! exports provided: SecondaryButton, SecondaryButtonVariant */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryButton", function() { return SecondaryButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryButtonVariant", function() { return SecondaryButtonVariant; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.module.scss */ "./components/buttons/button.module.scss");
/* harmony import */ var _button_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_button_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\buttons\\SecondaryButton.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SecondaryButtonVariant = /*#__PURE__*/function (SecondaryButtonVariant) {
  SecondaryButtonVariant[SecondaryButtonVariant["Success"] = 0] = "Success";
  SecondaryButtonVariant[SecondaryButtonVariant["Error"] = 1] = "Error";
  return SecondaryButtonVariant;
}(SecondaryButtonVariant || {});
const SecondaryButton = ({
  className,
  tabindex,
  label,
  type,
  onClick,
  variant,
  noBorder,
  disabled
}) => {
  const buttonClass = variant === SecondaryButtonVariant.Success ? _button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.secondaryButton : _button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.secondaryButtonError;
  return __jsx("button", {
    className: `${buttonClass} ${className} ${disabled && _button_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.disabled}`,
    style: noBorder ? {
      border: 'none'
    } : {},
    type: type,
    disabled: disabled,
    onClick: onClick,
    tabIndex: tabindex,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, label);
};
SecondaryButton.defaultProps = {
  type: 'button',
  disabled: false,
  onClick: () => {},
  variant: SecondaryButtonVariant.Success,
  noBorder: false
};


/***/ }),

/***/ "./components/buttons/button.module.scss":
/*!***********************************************!*\
  !*** ./components/buttons/button.module.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"primaryButton": "button_primaryButton__27mbY",
	"primaryButtonError": "button_primaryButtonError__3qmyM",
	"disabled": "button_disabled__W5_vN",
	"secondaryButton": "button_secondaryButton__1N1vM",
	"secondaryButtonError": "button_secondaryButtonError__2JdXs"
};


/***/ }),

/***/ "./components/buttons/index.js":
/*!*************************************!*\
  !*** ./components/buttons/index.js ***!
  \*************************************/
/*! exports provided: PrimaryButton, SecondaryButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PrimaryButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrimaryButton */ "./components/buttons/PrimaryButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrimaryButton", function() { return _PrimaryButton__WEBPACK_IMPORTED_MODULE_0__["PrimaryButton"]; });

/* harmony import */ var _SecondaryButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SecondaryButton */ "./components/buttons/SecondaryButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecondaryButton", function() { return _SecondaryButton__WEBPACK_IMPORTED_MODULE_1__["SecondaryButton"]; });





/***/ }),

/***/ "./components/datepicker/datepicker.tsx":
/*!**********************************************!*\
  !*** ./components/datepicker/datepicker.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Datepicker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input_input_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input/input.module.scss */ "./components/input/input.module.scss");
/* harmony import */ var _input_input_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_input_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-datepicker */ "react-datepicker");
/* harmony import */ var react_datepicker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_datepicker__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\datepicker\\datepicker.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



class Datepicker extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      label,
      selected,
      onSelect,
      placeholder,
      dateFormat,
      errorMsg,
      isLabel,
      inlineLabel
    } = this.props;
    const inlineLabelClass = inlineLabel ? 'inline-label' : '';
    return __jsx("div", {
      className: _input_input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inputContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }
    }, isLabel && __jsx("label", {
      className: inlineLabelClass,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 25
      }
    }, label, ":"), __jsx("div", {
      className: _input_input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inputLineContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 17
      }
    }, __jsx(react_datepicker__WEBPACK_IMPORTED_MODULE_2___default.a, {
      className: _input_input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.input,
      selected: selected,
      onSelect: onSelect,
      dateFormat: dateFormat,
      placeholderText: placeholder,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    })), errorMsg ? __jsx("div", {
      className: _input_input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 30
      }
    }, errorMsg) : null);
  }
}
_defineProperty(Datepicker, "defaultProps", {
  label: '',
  selected: '',
  onSelect: () => false,
  dateFormat: 'MM/dd/yyy',
  placeholder: '',
  errorMsg: '',
  isLabel: true,
  inlineLabel: false
});

/***/ }),

/***/ "./components/header/Header.tsx":
/*!**************************************!*\
  !*** ./components/header/Header.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.module.scss */ "./components/header/header.module.scss");
/* harmony import */ var _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_header_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/session-management */ "./utils/session-management.ts");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\header\\Header.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









class Header extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      name: '',
      profilePicture: null,
      showMenu: false,
      howShowMenu: 'key',
      isAnalyst: '',
      logo: ''
    });
    _defineProperty(this, "handleKeydown", e => {
      const key = e.which || e.keyCode;
      const ctrl = e.ctrlKey ? e.ctrlKey : key === 17 ? true : false;
      if (key == 55 && ctrl) {
        if (!this.state.showMenu) {
          this.setState({
            showMenu: true,
            howShowMenu: 'key'
          });
        } else if (this.state.howShowMenu === 'key' && this.state.showMenu) {
          this.setState({
            showMenu: false
          });
        }
      }
    });
    _defineProperty(this, "closeSession", () => {
      Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_7__["deleteSession"])();
      next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/login');
    });
  }
  componentDidMount() {
    const rolAnalyst = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_7__["validateIsAnalyst"])();
    const logo = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_7__["getLogo"])();
    this.setState({
      name: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_7__["getName"])(),
      profilePicture: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_7__["getProfilePicture"])(),
      isAnalyst: rolAnalyst,
      logo
    });
    window.addEventListener("keydown", e => this.handleKeydown(e));
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', e => this.handleKeydown(e));
  }
  render() {
    const {
      name,
      profilePicture,
      showMenu,
      isAnalyst,
      logo
    } = this.state;
    const locale = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_7__["getLocale"])();
    return __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.header,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 13
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 36
      }
    }, __jsx("img", {
      src: logo,
      style: logo != "" ? {
        width: '55px',
        height: '50px'
      } : {},
      alt: "Logo 3B",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 39
      }
    }))), __jsx("ul", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.optionsList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx("li", {
      className: isAnalyst ? _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.optionDisabled : _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.option,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.validations'))), __jsx("li", {
      className: isAnalyst ? _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.optionDisabled : _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.option,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/missions",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 25
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.missions'))), __jsx("li", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.option,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/scans",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 25
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.captures'))), __jsx("li", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.option,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/products",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 25
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.products'))), __jsx("li", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.option,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 21
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/rankings",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 25
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.rankings'))), __jsx("li", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.option,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "#",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 25
      }
    }, "Reportes"), __jsx("ul", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropdown,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.triangle,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretDown"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 29
      }
    }), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/reports/statistic",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 33
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.reports.statistic'))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/reports/product",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 33
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.reports.product'))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/reports/scans",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 33
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.reports.scans'))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/reports/geolocalization",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 33
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.reports.geolocalization')))))), __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.leftContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 17
      }
    }, !isAnalyst && __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.configuration,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 29
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCog"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 33
      }
    }), __jsx("ul", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropdown,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 33
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.triangle,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretDown"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 37
      }
    }), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 37
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/newCatalogs",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 41
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.catalogs'))))), __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.profile,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.defaultImg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faUser"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 60
      }
    })), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 25
      }
    }, name), __jsx("ul", {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dropdown,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 25
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      className: _header_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.triangle,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretDown"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 29
      }
    }), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 29
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/home/profile",
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 33
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.editProfile'))), __jsx("li", {
      onClick: () => this.closeSession(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 29
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_6__["getI18nLabel"])(locale, 'navbar.option.signOut'))))));
  }
}
const withRouter = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(Header, _extends({}, props, {
    router: router,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 12
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (withRouter);

/***/ }),

/***/ "./components/header/header.module.scss":
/*!**********************************************!*\
  !*** ./components/header/header.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"header": "header_header__3hRD-",
	"optionsList": "header_optionsList__35hHq",
	"option": "header_option__1x7yy",
	"dropdown": "header_dropdown__2nkoK",
	"optionDisabled": "header_optionDisabled__1Zo3R",
	"leftContainer": "header_leftContainer__2rcfp",
	"configuration": "header_configuration__OrMfk",
	"profile": "header_profile__3t0_I",
	"defaultImg": "header_defaultImg__1aafD",
	"profilePicture": "header_profilePicture__2Expr",
	"triangle": "header_triangle__OfVZ1"
};


/***/ }),

/***/ "./components/header/index.js":
/*!************************************!*\
  !*** ./components/header/index.js ***!
  \************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/header/Header.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./components/input/input.module.scss":
/*!********************************************!*\
  !*** ./components/input/input.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"inputContainer": "input_inputContainer__3t-Zv",
	"inputLineContainer": "input_inputLineContainer__2vR2c",
	"input": "input_input__3WNmP",
	"blackInput": "input_blackInput__1wfBX",
	"errorMessage": "input_errorMessage__16yxH",
	"fileContainer": "input_fileContainer__2nKHW",
	"file": "input_file__203al",
	"button": "input_button__1m3_t",
	"tagContainer": "input_tagContainer__1Fl6r",
	"tags": "input_tags__SjHqK",
	"tag": "input_tag__1erH7"
};


/***/ }),

/***/ "./components/loader/Loader.tsx":
/*!**************************************!*\
  !*** ./components/loader/Loader.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Loader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loader_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader.module.scss */ "./components/loader/loader.module.scss");
/* harmony import */ var _loader_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loader_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../backdrop/Backdrop */ "./components/backdrop/Backdrop.tsx");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\loader\\Loader.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function Loader({
  show
}) {
  const display = show ? 'block' : 'none';
  const style = {
    display
  };
  return __jsx("div", {
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(_backdrop_Backdrop__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: "show",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _loader_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loaderContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: _loader_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.Loader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }), __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 25
    }
  })))));
}

/***/ }),

/***/ "./components/loader/loader.module.scss":
/*!**********************************************!*\
  !*** ./components/loader/loader.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"loaderContainer": "loader_loaderContainer__2m7lY",
	"Loader": "loader_Loader__3IqEy",
	"bounce": "loader_bounce__3e5zZ"
};


/***/ }),

/***/ "./i18n/en/advanced-search.ts":
/*!************************************!*\
  !*** ./i18n/en/advanced-search.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  filters: {
    searchField: 'Search by name or product code'
  },
  actions: {
    search: 'Search',
    cleanFilter: 'Clean  Filters',
    download: 'Download',
    comparativeChart: 'Graph Comparatives',
    georeference: 'Geolocation',
    getCurrentReport: 'GET CURRENT LIST'
  }
});

/***/ }),

/***/ "./i18n/en/brands-catalog.ts":
/*!***********************************!*\
  !*** ./i18n/en/brands-catalog.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Brands',
  table: {
    headers: {
      name: 'Name'
    }
  },
  toast: {
    success: {
      title: 'Edit brand'
    },
    error: {
      title: 'Error in  the Request.',
      message: 'Error in the Request.'
    },
    createBrand: {
      success: {
        title: 'Success Notification.',
        message: 'The Brand has been created succesfully. '
      }
    },
    deleteBrand: {
      success: {
        title: 'Success Notification.',
        message: 'The brand has been removed succesfully. '
      }
    },
    editBrand: {
      success: {
        title: 'Success Notification.',
        message: 'The brand has been edited correctly.'
      }
    },
    downloadData: {
      success: {
        title: 'Success Notification.',
        message: 'The report has been downloaded successfully  .'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Create Brand',
      search: 'Search Brand',
      searchByName: 'Search by brand '
    },
    editModal: {
      title: 'Edit brand'
    },
    actions: {
      add: 'Add Brand',
      download: 'Download Report'
    },
    options: {
      save: 'Save',
      create: 'Create'
    }
  }
});

/***/ }),

/***/ "./i18n/en/capture.ts":
/*!****************************!*\
  !*** ./i18n/en/capture.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Capture details',
  input: {
    captureId: {
      label: 'Capture'
    },
    price: {
      label: 'Price'
    },
    priceWithPromotion: {
      label: 'Promo Price'
    },
    barcode: {
      label: 'Bar Code'
    },
    name: {
      label: 'Name'
    },
    brand: {
      label: 'Brand'
    },
    unit: {
      label: 'Unit'
    },
    store: {
      label: 'Store'
    },
    type: {
      label: 'Type'
    },
    group: {
      label: 'Group'
    },
    line: {
      label: 'Line'
    },
    amount: {
      label: 'Grammage / Quantity'
    },
    captureDate: {
      label: 'Date of Capture'
    },
    status: {
      label: 'Status'
    },
    scannedBy: {
      label: 'Scanned by'
    },
    reviewed: {
      label: 'Review'
    },
    branchOffice: {
      label: 'Branch'
    },
    mainImage: {
      label: 'Main Photo'
    },
    priceImage: {
      label: 'Price Photo'
    }
  },
  detailsContainer: {
    title: 'Promo Photo'
  },
  options: {
    changeImage: 'Change Image',
    editInformation: 'Edit Information',
    saveInformation: 'Save Information',
    cancelInformation: 'Cancel'
  }
});

/***/ }),

/***/ "./i18n/en/captures.ts":
/*!*****************************!*\
  !*** ./i18n/en/captures.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'CAPTURES',
  filters: {
    searchField: 'Search by  name or product code',
    startDate: 'From',
    endDate: 'To',
    withImage: 'With Photo',
    withoutImage: 'Without Photo',
    statusRejected: 'Rejected',
    normalPrice: 'Normal Price',
    statusPending: 'Pending',
    statusValidated: 'Validated',
    priceWithPromotion: 'Promo Price',
    param: 'Parameter',
    value: 'Value',
    geolocalitation: 'Geolocation'
  },
  actions: {
    search: 'Search',
    cleanFilter: 'Clean Filters',
    exportGeoData: 'Export Geolocation Data'
  },
  optionsCatalog: {
    brandsCatalog: 'Brand',
    groupsCatalog: 'Group',
    linesCatalog: 'Line',
    storesCatalog: 'Branch',
    unitsCatalog: 'Unit'
  },
  table: {
    head: {
      selected: 'Select',
      id: 'Capture',
      photo_main: 'Main Photo',
      photo_price: 'Price Photo',
      barcode: 'Barcode',
      product: 'Product',
      brand: 'Brand',
      type: 'Type',
      chain: 'Commercial Chain',
      branch: 'Branch',
      scanned_by: 'Capturist',
      reviewed: 'Validator',
      status: 'Status',
      grammage_quantity: 'Quantity',
      unit: 'Unit',
      unit_price: 'Unit Price',
      group: 'Group',
      line: 'Line',
      product_created_date: 'Date of Product Registration',
      lower_price: 'Lowest Price',
      highest_price: 'Highest Price',
      capture_date: 'Capture Date',
      capture_price: 'Capture Price',
      actions: 'Actions'
    }
  },
  status: {
    validated: 'Validated',
    pending: 'Pending'
  },
  units: {
    cm: 'Centimeter',
    m: 'Meter',
    ml: 'Mililiters',
    lt: 'Liter',
    mg: 'Miligram',
    g: 'Gram',
    kg: 'Kilogram',
    pieza: 'Piece'
  },
  modal: {
    delete: {
      buttonAcceptLabel: 'Eliminate',
      message: 'This operation is permanent, Do you  want to  eliminate this element?'
    }
  }
});

/***/ }),

/***/ "./i18n/en/catalogs.ts":
/*!*****************************!*\
  !*** ./i18n/en/catalogs.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Catalogs',
  options: {
    brands: 'Brands',
    unities: 'Units',
    groups: 'Groups',
    lines: 'Lines',
    chain: 'Chains',
    region: 'Regions',
    users: 'Users'
  }
});

/***/ }),

/***/ "./i18n/en/chains-catalog.ts":
/*!***********************************!*\
  !*** ./i18n/en/chains-catalog.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Chains',
  search: 'Search  Chain',
  searchByName: 'Search by name ',
  actions: {
    add: 'Add Chain',
    download: 'Download Report'
  },
  table: {
    headers: {
      id: 'Id',
      name: 'Name',
      alias: 'Alias'
    }
  },
  toast: {
    success: {
      title: 'Success Notification.'
    },
    error: {
      title: 'Error with the request.',
      message: 'Error with the request.'
    },
    create: {
      success: {
        title: 'Success Notification.',
        message: 'Chain created successfully. '
      }
    },
    delete: {
      success: {
        title: 'Success Notification.',
        message: 'Chain has been deleted successfully. '
      }
    },
    edit: {
      success: {
        title: 'Success Notification.',
        message: 'The chain has been edited succesdully.'
      }
    },
    downloadData: {
      success: {
        title: 'Success Notification.',
        message: 'Report has been downloaded successfully.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Create Chain'
    },
    editModal: {
      title: 'Edit Chain'
    },
    options: {
      save: 'Save',
      create: 'Create'
    }
  }
});

/***/ }),

/***/ "./i18n/en/graph-tab-compare.ts":
/*!**************************************!*\
  !*** ./i18n/en/graph-tab-compare.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  tabs: {
    headers: {
      priceList: 'Charts - List Price',
      unitaryPrice: 'Charts - Unit Price',
      history: 'Price History'
    },
    history: {
      headers: {
        date: 'Date',
        price: 'Price'
      }
    }
  },
  startDate: 'Start Date',
  endDate: 'End Date',
  search: 'Search capture by ID',
  modal: {
    delete: {
      buttonAcceptLabel: 'Eliminate',
      message: 'This operation is permanent Do you want to delete this element?'
    }
  }
});

/***/ }),

/***/ "./i18n/en/graph-tab.ts":
/*!******************************!*\
  !*** ./i18n/en/graph-tab.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  startDate: 'Start Date',
  endDate: 'End Date',
  modal: {
    delete: {
      buttonAcceptLabel: 'Eliminate',
      message: 'This operation is permanent, do you want to eliminate this element?'
    }
  }
});

/***/ }),

/***/ "./i18n/en/groups-catalog.ts":
/*!***********************************!*\
  !*** ./i18n/en/groups-catalog.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Groups',
  search: 'Search a group',
  searchByName: 'Search by Name ',
  actions: {
    add: 'Add group',
    download: 'Download Report'
  },
  table: {
    headers: {
      name: 'Name',
      abbreviation: 'Abbreviation'
    }
  },
  toast: {
    success: {
      title: 'Success Notification.'
    },
    error: {
      title: 'Error with the request.',
      message: 'Error with the request.'
    },
    create: {
      success: {
        title: 'Success Notification.',
        message: 'Group has been created successfully. '
      }
    },
    delete: {
      success: {
        title: 'Success Notification.',
        message: 'Group deleted successfully. '
      }
    },
    edit: {
      success: {
        title: 'Success Notification.',
        message: 'Group has been edited successfully.'
      }
    },
    downloadData: {
      success: {
        title: 'Success Notification.',
        message: 'Report downloaded succesfully.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Create  group'
    },
    editModal: {
      title: 'Edit Group'
    },
    options: {
      save: 'Save',
      create: 'Create'
    }
  }
});

/***/ }),

/***/ "./i18n/en/home.ts":
/*!*************************!*\
  !*** ./i18n/en/home.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Validation',
  welcome: 'Select a capture to start.',
  sidebar: {
    title: 'Captures',
    input: {
      mission: {
        label: 'Mission',
        placeholder: ''
      },
      product: {
        label: 'Product',
        placeholder: ''
      }
    },
    scanFilter: {
      all: 'All',
      withProduct: 'With product',
      withoutProduct: 'Without product'
    }
  },
  scan: {
    topBar: {
      beingValidated: 'This register is being validated, select another one',
      withoutNumber: 'Without Number',
      withoutMission: 'Without Mission'
    },
    productImage: {
      label: 'Product'
    },
    priceImage: {
      label: 'Price'
    },
    input: {
      barcode: {
        label: 'Barcode',
        error: 'The Field is required'
      },
      price: {
        label: 'Price',
        error: 'The field is required'
      },
      promotionPrice: {
        label: 'Promo Price',
        error: 'The Field is required'
      },
      store: {
        label: 'Branch',
        error: 'The field is required'
      },
      address: {
        label: 'Address',
        error: 'The field is required'
      },
      aditionalComments: {
        label: 'Additional comments',
        error: 'The field is required'
      }
    },
    option: {
      showPicture: 'Show Photo',
      reject: 'Reject',
      validate: 'Validate capture',
      validateAndAdd: 'Validate and Add'
    }
  },
  product: {
    title: 'Create new product',
    input: {
      name: {
        label: 'Product Name',
        error: 'The field is required'
      },
      barcode: {
        label: 'Barcode',
        error: 'The field is required'
      },
      brand: {
        label: 'Brand',
        error: 'The field is required'
      },
      amount: {
        label: 'Quantity',
        error: 'The field is required'
      },
      unit: {
        label: 'Unit',
        error: 'The field is required'
      },
      group: {
        label: 'Group',
        error: 'The field is required'
      },
      line: {
        label: 'Line',
        error: 'The field is required'
      },
      type: {
        label: 'Type',
        error: 'The field is required'
      }
    },
    option: {
      changeImage: 'Change image'
    }
  },
  modal: {
    reject: {
      subject: 'Select a reason of rejection'
    }
  },
  toast: {
    sendCriterion: {
      success: {
        title: 'Success Notification. ',
        message: 'Capture was rejected succesfully.'
      },
      error: {
        title: 'Error Notification. ',
        message: 'Error with  the  request.'
      }
    }
  },
  radioMapFirst: {
    blurry: 'Blurry  Caption',
    farAway: 'Distant Capture',
    dark: 'Dark Capture',
    incomplete: 'Product description incomplete',
    doesntMatch: 'Mismatched Products'
  },
  radioSecond: {
    outsideShop: 'Capture out of store',
    shopTicket: 'Ticket Capture',
    anotherCell: 'Capture taken with another cellphone',
    testScan: 'Tests'
  },
  history: {
    recent: 'Most Recent',
    mostExpensive: 'Most Expensive',
    cheapest: 'Cheapest',
    cheapestWithPromotion: 'Cheapest with  Promo'
  }
});

/***/ }),

/***/ "./i18n/en/index.ts":
/*!**************************!*\
  !*** ./i18n/en/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./i18n/en/navbar.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./i18n/en/home.ts");
/* harmony import */ var _missions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missions */ "./i18n/en/missions.ts");
/* harmony import */ var _captures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captures */ "./i18n/en/captures.ts");
/* harmony import */ var _capture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capture */ "./i18n/en/capture.ts");
/* harmony import */ var _catalogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalogs */ "./i18n/en/catalogs.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile */ "./i18n/en/profile.ts");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products */ "./i18n/en/products.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product */ "./i18n/en/product.ts");
/* harmony import */ var _rankings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rankings */ "./i18n/en/rankings.ts");
/* harmony import */ var _graph_tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graph-tab */ "./i18n/en/graph-tab.ts");
/* harmony import */ var _advanced_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./advanced-search */ "./i18n/en/advanced-search.ts");
/* harmony import */ var _table_tab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-tab */ "./i18n/en/table-tab.ts");
/* harmony import */ var _product_tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-tab */ "./i18n/en/product-tab.ts");
/* harmony import */ var _scanners_tab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scanners-tab */ "./i18n/en/scanners-tab.ts");
/* harmony import */ var _validators_tab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./validators-tab */ "./i18n/en/validators-tab.ts");
/* harmony import */ var _brands_catalog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./brands-catalog */ "./i18n/en/brands-catalog.ts");
/* harmony import */ var _units_catalog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./units-catalog */ "./i18n/en/units-catalog.ts");
/* harmony import */ var _groups_catalog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./groups-catalog */ "./i18n/en/groups-catalog.ts");
/* harmony import */ var _lines_catalog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lines-catalog */ "./i18n/en/lines-catalog.ts");
/* harmony import */ var _chains_catalog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chains-catalog */ "./i18n/en/chains-catalog.ts");
/* harmony import */ var _regions_catalog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./regions-catalog */ "./i18n/en/regions-catalog.ts");
/* harmony import */ var _users_catalog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./users-catalog */ "./i18n/en/users-catalog.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./table */ "./i18n/en/table.ts");
/* harmony import */ var _graph_tab_compare__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./graph-tab-compare */ "./i18n/en/graph-tab-compare.ts");
/* harmony import */ var _product_report__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./product-report */ "./i18n/en/product-report.ts");
/* harmony import */ var _scans_report__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./scans-report */ "./i18n/en/scans-report.ts");
// EN



























/* harmony default export */ __webpack_exports__["default"] = ({
  navbar: _navbar__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _home__WEBPACK_IMPORTED_MODULE_1__["default"],
  table: _table__WEBPACK_IMPORTED_MODULE_23__["default"],
  missions: _missions__WEBPACK_IMPORTED_MODULE_2__["default"],
  captures: _captures__WEBPACK_IMPORTED_MODULE_3__["default"],
  capture: _capture__WEBPACK_IMPORTED_MODULE_4__["default"],
  catalogs: _catalogs__WEBPACK_IMPORTED_MODULE_5__["default"],
  profile: _profile__WEBPACK_IMPORTED_MODULE_6__["default"],
  products: _products__WEBPACK_IMPORTED_MODULE_7__["default"],
  product: _product__WEBPACK_IMPORTED_MODULE_8__["default"],
  rankings: _rankings__WEBPACK_IMPORTED_MODULE_9__["default"],
  graphTab: _graph_tab__WEBPACK_IMPORTED_MODULE_10__["default"],
  advancedSearch: _advanced_search__WEBPACK_IMPORTED_MODULE_11__["default"],
  tableTab: _table_tab__WEBPACK_IMPORTED_MODULE_12__["default"],
  productTab: _product_tab__WEBPACK_IMPORTED_MODULE_13__["default"],
  scannersTab: _scanners_tab__WEBPACK_IMPORTED_MODULE_14__["default"],
  validatorsTab: _validators_tab__WEBPACK_IMPORTED_MODULE_15__["default"],
  brandsCatalog: _brands_catalog__WEBPACK_IMPORTED_MODULE_16__["default"],
  unitsCatalog: _units_catalog__WEBPACK_IMPORTED_MODULE_17__["default"],
  groupsCatalog: _groups_catalog__WEBPACK_IMPORTED_MODULE_18__["default"],
  linesCatalog: _lines_catalog__WEBPACK_IMPORTED_MODULE_19__["default"],
  chainsCatalog: _chains_catalog__WEBPACK_IMPORTED_MODULE_20__["default"],
  regionsCatalog: _regions_catalog__WEBPACK_IMPORTED_MODULE_21__["default"],
  usersCatalog: _users_catalog__WEBPACK_IMPORTED_MODULE_22__["default"],
  graphTabCompare: _graph_tab_compare__WEBPACK_IMPORTED_MODULE_24__["default"],
  productReport: _product_report__WEBPACK_IMPORTED_MODULE_25__["default"],
  scansReport: _scans_report__WEBPACK_IMPORTED_MODULE_26__["default"]
});

/***/ }),

/***/ "./i18n/en/lines-catalog.ts":
/*!**********************************!*\
  !*** ./i18n/en/lines-catalog.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Lines',
  search: 'Search a line',
  searchByName: 'Search by name ',
  actions: {
    add: 'Add line',
    download: 'Download Report'
  },
  table: {
    headers: {
      name_line: 'Line',
      name_group: 'Group'
    }
  },
  toast: {
    success: {
      title: 'Success Notification.'
    },
    error: {
      title: 'Error with the Request.',
      message: 'Error with the Request.'
    },
    create: {
      success: {
        title: 'Success Notification.',
        message: 'Line created succesfully. '
      }
    },
    delete: {
      success: {
        title: 'Success Notification.',
        message: 'Line has been deleted succesfully. '
      }
    },
    edit: {
      success: {
        title: 'Success Notification.',
        message: 'Line has been edited succesfully.'
      }
    },
    downloadData: {
      success: {
        title: 'Success Notification.',
        message: 'Report downloaded succesfully.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Create line'
    },
    editModal: {
      title: 'Edit line'
    },
    options: {
      save: 'Save',
      create: 'Create'
    }
  }
});

/***/ }),

/***/ "./i18n/en/missions.ts":
/*!*****************************!*\
  !*** ./i18n/en/missions.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'MISSIONS',
  table: {
    head: {
      title: 'Title',
      description: 'Description',
      capture_points: 'Capture Points',
      mission_points: 'Mission Points',
      start_date: 'Start Date',
      end_date: 'End Date',
      regions: 'Region',
      actions: 'Actions'
    }
  },
  options: {
    add: 'New Mission'
  },
  toast: {
    createMission: {
      success: {
        title: 'Success Notification. ',
        message: 'The mission has been created correctly. '
      },
      error: {
        title: 'Error Notification. ',
        duplicatedMessage: 'Duplicated  Title.',
        message: 'Something went wrong. '
      }
    }
  },
  modal: {
    dialog: {
      message: 'This operation cannot be performed because the mission has associated captures',
      options: {
        acept: 'Acept'
      }
    },
    add: {
      title: 'New Mission',
      options: {
        cancel: 'Cancel',
        create: 'Create'
      }
    },
    edit: {
      title: 'Edit Mission',
      options: {
        cancel: 'Cancel',
        edit: 'edit'
      }
    },
    input: {
      title: {
        label: 'Title (required)',
        validations: {
          required: 'The field is required'
        }
      },
      description: {
        label: 'Description (required / max 255 characters)',
        validations: {
          required: 'The field is required',
          minLength: 'The description most have at least 5 characters.',
          maxLength: 'The description most have max 255 characters.'
        }
      },
      startDate: {
        label: 'Start Date',
        validations: {
          required: 'Start date is not valid',
          greaterThan: 'Start date must be greater than yesterday.'
        }
      },
      endDate: {
        label: 'End Date',
        validations: {
          required: 'End date is not valid'
        }
      },
      region: {
        label: 'Select a region',
        validations: {
          required: 'You must select at least one region'
        }
      },
      missionPoints: {
        label: 'Points by Mission',
        validations: {
          valid: 'The score must be a valid number'
        }
      },
      capturePoints: {
        label: 'Points by capture',
        validations: {
          valid: 'The score must be a valid number'
        }
      }
    }
  }
});

/***/ }),

/***/ "./i18n/en/navbar.ts":
/*!***************************!*\
  !*** ./i18n/en/navbar.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  option: {
    validations: 'Validation',
    missions: 'Missions',
    captures: 'Captures',
    products: 'Products',
    rankings: 'Rankings',
    catalogs: 'Catalogs',
    editProfile: 'Edit profile',
    signOut: 'Sign Out',
    reports: {
      geolocalization: 'Reporte de geolocalizacion',
      statistic: 'Reporte de estadísticos',
      product: 'Reporte de producto',
      scans: 'Reporte de capturas'
    }
  }
});

/***/ }),

/***/ "./i18n/en/product-report.ts":
/*!***********************************!*\
  !*** ./i18n/en/product-report.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Product Report',
  newSerach: 'New search',
  placeholderSearch: 'Name / Code',
  selected: 'Selected',
  search: 'Search',
  myList: 'View my list',
  generalSearch: 'General Search',
  saveList: 'Save to my list',
  graphic: 'Graph',
  clearGraphic: 'Clean my list',
  emptyState: 'Do a search to see results',
  emptGraphyState: 'Graph to see the results',
  saveProducts: 'Products have been added to the list',
  saveProductsError: 'An error occurred while saving the list',
  parameter: 'Parameter',
  values: 'Value',
  startDate: 'Start date',
  endDate: 'End date',
  deleteFilters: "Clean filters",
  download: "Download",
  nameOrCode: "Name / code",
  successDownload: "Report downloaded successfully",
  deleteFromList: "Delete from my list",
  successDelete: "Products have been removed from the list",
  errorDelete: "An error occurred while removing products from the list",
  errorDownload: "Error occurred while downloading the report",
  noSelected: "No products selected...",
  card: {
    id: "ID:",
    barcode: "BARCODE:",
    brand: "BRAND:",
    line: "LINE:",
    group: "GROUP:",
    unit: "UNIT:",
    type: "TYPE:",
    name: "NAME:",
    lower_price: "LOWEST PRICE:",
    highest_price: "HIGHEST PRICE:",
    grammage: "GRAMMAGE / UNIT:",
    recently: "Recently",
    higher: "Highest",
    lower: "Lower",
    lowerPromotion: "Lowest with promotion"
  }
});

/***/ }),

/***/ "./i18n/en/product-tab.ts":
/*!********************************!*\
  !*** ./i18n/en/product-tab.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  detail: {
    input: {
      productId: {
        label: 'Product ID'
      },
      barcode: {
        label: 'Barcode'
      },
      name: {
        label: 'Name',
        validations: {
          minLength: 'The field must have at  least two characters'
        }
      },
      brand: {
        label: 'Brand'
      },
      type: {
        label: 'Type'
      },
      group: {
        label: 'Group'
      },
      line: {
        label: 'Line'
      },
      amount: {
        label: 'Grammage / Quantity',
        validations: {
          valid: 'The grammage or quantity must be a valid number: Two decimals max.'
        }
      },
      unit: {
        label: 'Unit'
      },
      mainImage: {
        label: 'Main Photo'
      },
      priceImage: {
        label: 'Price Photo'
      },
      minPrice: {
        label: 'Lowest Price'
      },
      maxPrice: {
        label: 'Highest Price'
      }
    },
    detailsContainer: {
      title: 'Product Price'
    },
    options: {
      cancel: 'Cancel',
      changeImage: 'Change Photo',
      editInformation: 'Edit Information',
      saveInformation: 'Save Information'
    }
  }
});

/***/ }),

/***/ "./i18n/en/product.ts":
/*!****************************!*\
  !*** ./i18n/en/product.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  options: {
    listPrice: 'Graph - List Price',
    unitaryPrice: 'Graph - Unit Price',
    priceHistory: 'Price History',
    detail: 'Detail'
  }
});

/***/ }),

/***/ "./i18n/en/products.ts":
/*!*****************************!*\
  !*** ./i18n/en/products.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'PRODUCTS',
  filters: {
    searchField: 'Search by  name or product code',
    startDate: 'From',
    endDate: 'To',
    updatedAt: 'Modification Date',
    createdAt: 'Create Date',
    param: 'Parameter',
    value: 'Value'
  },
  actions: {
    search: 'Search',
    cleanFilter: 'Clean Filters',
    download: 'Download',
    comparativeChart: 'Graph comparatives'
  },
  optionsCatalog: {
    brandsCatalog: 'Brand',
    groupsCatalog: 'Group',
    linesCatalog: 'Line',
    storesCatalog: 'Chain',
    unitsCatalog: 'Unit'
  },
  modal: {
    delete: {
      buttonAcceptLabel: 'Eliminate',
      message: ''
    }
  },
  table: {
    head: {
      selected: 'Select',
      photo: 'Product Photo',
      product: 'Name',
      barcode: 'Code',
      brand: 'Brand',
      type: 'Type',
      created_at: 'Capture Date',
      updated_at: 'Modification Date',
      grammage_quantity: 'Quantity',
      unit: 'Unit',
      group: 'Group',
      line: 'Line',
      highest_price: 'Highest Price',
      lower_price: 'Lowest Price',
      promotion_lower_price: 'Lowest  Price with promo',
      last_price: 'Last price captured'
    }
  }
});

/***/ }),

/***/ "./i18n/en/profile.ts":
/*!****************************!*\
  !*** ./i18n/en/profile.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  input: {
    role: {
      label: 'Rol *',
      error: 'The field is required'
    },
    first_name: {
      label: 'Name *',
      error: 'The field is required'
    },
    last_name: {
      label: 'Last name *',
      error: 'The field is required'
    },
    mother_last_name: {
      label: 'Mothers last name',
      error: 'The field is required'
    },
    theme: {
      label: 'use dark mode',
      error: 'The field is required'
    },
    locale: {
      label: 'Select Language',
      error: 'The field is required'
    },
    employee_number: {
      label: 'Employee number',
      error: 'The field is required'
    },
    cellphone: {
      label: 'Cellphone Number',
      error: 'The field is required'
    },
    region: {
      label: 'Region',
      error: 'The field is required'
    },
    username: {
      label: 'User *',
      error: 'The field is required'
    },
    password: {
      label: 'Password *',
      error: 'The field is required'
    }
  },
  options: {
    close: 'Close',
    save: 'Save'
  }
});

/***/ }),

/***/ "./i18n/en/rankings.ts":
/*!*****************************!*\
  !*** ./i18n/en/rankings.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Rankings',
  tabs: {
    capturists: {
      title: 'Capturists',
      startDate: 'Start Date',
      endDate: 'End Date',
      input: {
        search: {
          placeholder: 'Search by name or employee number'
        }
      },
      options: {
        clearDate: 'Clean Dates'
      },
      table: {
        header: {
          position: 'Position',
          employeeNumber: 'Employee number',
          name: 'Name',
          percentage: 'Percentaje',
          validatedCaptures: 'Validated Captures',
          points: 'Points'
        }
      }
    },
    validators: {
      title: 'Validators',
      startDate: 'Start Date',
      endDate: 'End Date',
      input: {
        search: {
          placeholder: 'Search by name or employee number'
        }
      },
      options: {
        clearDate: 'Clean Dates',
        generateData: 'Generate Data'
      },
      total: {
        captures: 'Captures  Date',
        validated: 'Validated Total'
      },
      history: {
        captures: 'Captures History',
        validated: 'Validated History'
      },
      table: {
        header: {
          employeeNumber: 'Employee Number',
          nombre: 'Name',
          percentage: 'Percentage',
          validatedCaptures: 'Validated Captures'
        }
      }
    }
  }
});

/***/ }),

/***/ "./i18n/en/regions-catalog.ts":
/*!************************************!*\
  !*** ./i18n/en/regions-catalog.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Regions',
  search: 'Search by Region',
  searchByName: 'Search by Name ',
  actions: {
    add: 'Add Region',
    download: 'Download Report'
  },
  table: {
    headers: {
      name: 'Name',
      alias: 'Alias'
    }
  },
  toast: {
    success: {
      title: 'Success Notification.'
    },
    error: {
      title: 'Error with the Request.',
      message: 'Error with the Request.'
    },
    create: {
      success: {
        title: 'Success Notification.',
        message: 'Region created succesfully. '
      }
    },
    delete: {
      success: {
        title: 'Success Notification.',
        message: 'Region has been deleted succesfully. '
      }
    },
    edit: {
      success: {
        title: 'Success Notification.',
        message: 'Region has been edited succesfully.'
      }
    },
    downloadData: {
      success: {
        title: 'Success Notification.',
        message: 'Report  downloaded successfully.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Create Region'
    },
    editModal: {
      title: 'Edit Region'
    },
    options: {
      save: 'Save',
      create: 'Create'
    }
  }
});

/***/ }),

/***/ "./i18n/en/scanners-tab.ts":
/*!*********************************!*\
  !*** ./i18n/en/scanners-tab.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  startDate: 'Start Date',
  endDate: 'End Date',
  input: {
    search: {
      placeholder: 'Search by  name or employee number'
    },
    mission: {
      placeholder: 'Mission'
    }
  },
  options: {
    clearDate: 'Clean Dates'
  },
  table: {
    header: {
      ranking: 'Position',
      employee_number: 'Employee Number',
      name: 'Name',
      efficiency: 'Percentage',
      validated_captures: 'Validated Captures',
      points: 'Points'
    }
  }
});

/***/ }),

/***/ "./i18n/en/scans-report.ts":
/*!*********************************!*\
  !*** ./i18n/en/scans-report.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Reporte de capturas'
});

/***/ }),

/***/ "./i18n/en/table-tab.ts":
/*!******************************!*\
  !*** ./i18n/en/table-tab.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  table: {
    headers: {
      branchOffice: 'Branch',
      minPrice: 'Lowest Price',
      maxPrice: 'Highest Price',
      currentPrice: 'Current Price',
      averagePrice: 'Average Price'
    },
    options: {
      seeHistory: 'See History'
    }
  },
  modal: {
    table: {
      headers: {
        scan: 'Capture',
        capturedAt: 'Capture Date',
        price: 'Price'
      }
    },
    options: {
      close: 'close'
    }
  }
});

/***/ }),

/***/ "./i18n/en/table.ts":
/*!**************************!*\
  !*** ./i18n/en/table.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  actions: 'Actions'
});

/***/ }),

/***/ "./i18n/en/units-catalog.ts":
/*!**********************************!*\
  !*** ./i18n/en/units-catalog.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Units',
  search: 'Search by Unit',
  searchByName: 'Search by Name ',
  actions: {
    add: 'Add Unit',
    download: 'Download Report'
  },
  table: {
    headers: {
      name: 'Name',
      abbreviation: 'Abbreviation'
    }
  },
  toast: {
    success: {
      title: 'Success Notification.'
    },
    error: {
      title: 'Error with the Request.',
      message: 'Error with the Request.'
    },
    create: {
      success: {
        title: 'Success Notification.',
        message: 'Unit created suuccessfully. '
      }
    },
    delete: {
      success: {
        title: 'Success Notification.',
        message: 'Unit deleted successfully. '
      }
    },
    edit: {
      success: {
        title: 'Success Notification.',
        message: 'Unit has been edited successfully.'
      }
    },
    downloadData: {
      success: {
        title: 'Success Notification.',
        message: 'Report downloaded successfully.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Create Unit'
    },
    editModal: {
      title: 'Edit Unit'
    },
    options: {
      save: 'Save',
      create: 'Create'
    }
  }
});

/***/ }),

/***/ "./i18n/en/users-catalog.ts":
/*!**********************************!*\
  !*** ./i18n/en/users-catalog.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Users',
  search: 'Search User',
  searchByName: 'Search by name, user, email, tags or employee number.',
  tags: 'Tags',
  actions: {
    add: 'Create new user',
    addTags: 'Add Tags',
    close: 'Close',
    download: 'Download Report'
  },
  filters: {
    role: 'Filter by role',
    region: 'Filter by region',
    allRegions: 'All Regions'
  },
  table: {
    headers: {
      first_name: 'Name',
      last_name: 'Last Name',
      mother_last_name: 'Mothers Last Name',
      username: 'User',
      email: 'EMail',
      employee_number: 'Employee Number',
      rolSelected: 'Role'
    }
  },
  toast: {
    success: {
      title: 'Success Notification.'
    },
    error: {
      title: 'Error with the Request.',
      message: 'Error with the Request.'
    },
    create: {
      success: {
        title: 'Success Notification.',
        message: 'User has been created succesfully. '
      }
    },
    delete: {
      success: {
        title: 'Success Notification.',
        message: 'User has been deleted succesfully. '
      }
    },
    edit: {
      success: {
        title: 'Success Notification.',
        message: 'User has been edited successfully.'
      }
    },
    downloadData: {
      success: {
        title: 'Success Notification.',
        message: 'Report downloaded successfully.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Create user'
    },
    editModal: {
      title: 'Edita User'
    },
    options: {
      save: 'Save',
      create: 'Create'
    }
  }
});

/***/ }),

/***/ "./i18n/en/validators-tab.ts":
/*!***********************************!*\
  !*** ./i18n/en/validators-tab.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  startDate: 'Start Date',
  endDate: 'End Date',
  input: {
    search: {
      placeholder: 'Search by name or employee number'
    },
    mission: {
      placeholder: 'Mission'
    }
  },
  options: {
    clearDate: 'Clean Dates',
    generateData: 'Generate Data'
  },
  total: {
    captures: 'Captures Total',
    validated: 'Validated Total'
  },
  history: {
    captures: 'Captures History',
    validated: 'Validated History'
  },
  table: {
    header: {
      employee_number: 'Employee Number',
      fullName: 'Name',
      efficiency: 'Percentage',
      userValidates: 'Validated Captures'
    }
  }
});

/***/ }),

/***/ "./i18n/es/advanced-search.ts":
/*!************************************!*\
  !*** ./i18n/es/advanced-search.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  filters: {
    searchField: 'Buscar por nombre o código del producto'
  },
  actions: {
    search: 'Buscar',
    generateReport: 'GENERAR REPORTE',
    cleanFilter: 'Limpiar filtros',
    download: 'Descargar',
    comparativeChart: 'Graficar comparativos',
    georeference: 'Georeferencia',
    getCurrentReport: 'VER LISTA ACTUAL'
  }
});

/***/ }),

/***/ "./i18n/es/brands-catalog.ts":
/*!***********************************!*\
  !*** ./i18n/es/brands-catalog.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Marcas',
  table: {
    headers: {
      name: 'Nombre'
    }
  },
  toast: {
    success: {
      title: 'Notificación de éxito.'
    },
    error: {
      title: 'Error con la petición.',
      message: 'Error con la petición.'
    },
    create: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha creado la marca correctamente. '
      }
    },
    delete: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha eliminado la marca correctamente. '
      }
    },
    edit: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha editado la marca correctamente.'
      }
    },
    downloadData: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha descargado el reporte exitosamente.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Crear marca',
      search: 'Buscar una marca',
      searchByName: 'Buscar por nombre '
    },
    editModal: {
      title: 'Editar marca'
    },
    actions: {
      add: 'Añadir marca',
      download: 'Descargar Reporte'
    },
    options: {
      save: 'Guardar',
      create: 'Crear'
    }
  }
});

/***/ }),

/***/ "./i18n/es/capture.ts":
/*!****************************!*\
  !*** ./i18n/es/capture.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Detalles de captura',
  input: {
    captureId: {
      label: 'Captura'
    },
    price: {
      label: 'Precio'
    },
    priceWithPromotion: {
      label: 'Precio de promoción'
    },
    barcode: {
      label: 'Código de barras'
    },
    name: {
      label: 'Nombre'
    },
    brand: {
      label: 'Marca'
    },
    unit: {
      label: 'Unidad'
    },
    store: {
      label: 'Cadena'
    },
    type: {
      label: 'Tipo'
    },
    group: {
      label: 'Grupo'
    },
    line: {
      label: 'Línea'
    },
    amount: {
      label: 'Gramaje / Cantidad'
    },
    captureDate: {
      label: 'Fecha de Captura'
    },
    status: {
      label: 'Estatus'
    },
    scannedBy: {
      label: 'Escaneado'
    },
    reviewed: {
      label: 'Revisado'
    },
    branchOffice: {
      label: 'sucursal'
    },
    mainImage: {
      label: 'Foto principal'
    },
    priceImage: {
      label: 'Foto de precio'
    }
  },
  detailsContainer: {
    title: 'Foto de promoción'
  },
  options: {
    changeImage: 'Cambiar imagen',
    editInformation: 'Editar información',
    saveInformation: 'Guardar información',
    cancelInformation: 'Cancelar'
  }
});

/***/ }),

/***/ "./i18n/es/captures.ts":
/*!*****************************!*\
  !*** ./i18n/es/captures.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'CAPTURAS',
  filters: {
    searchField: 'Buscar por nombre o código del producto',
    startDate: 'Desde',
    endDate: 'Hasta',
    withImage: 'Con foto',
    withoutImage: 'Sin foto',
    statusRejected: 'Rechazado',
    normalPrice: 'Precio normal',
    statusPending: 'Pendiente',
    statusValidated: 'Validado',
    priceWithPromotion: 'Precio de promoción',
    param: 'Parámetro',
    value: 'Valor',
    geolocalitation: 'Geolocalizaciones'
  },
  actions: {
    search: 'Buscar',
    cleanFilter: 'Limpiar filtros',
    exportGeoData: 'Exportar Datos Georeferencia'
  },
  optionsCatalog: {
    brandsCatalog: 'Marca',
    groupsCatalog: 'Grupo',
    linesCatalog: 'Línea',
    storesCatalog: 'Cadena',
    unitsCatalog: 'Unidad'
  },
  table: {
    head: {
      selected: 'Seleccionar',
      id: 'Captura',
      photo_main: 'Foto principal',
      photo_price: 'Foto precio',
      barcode: 'Código de barras',
      product: 'Producto',
      brand: 'Marca',
      type: 'Tipo',
      chain: 'Cadena comercial',
      branch: 'Sucursal',
      scanned_by: 'Capturista',
      reviewed: 'Validador',
      status: 'Estado',
      grammage_quantity: 'Cantidad',
      unit: 'Unidad',
      unit_price: 'Precio unitario',
      group: 'Grupo',
      line: 'Línea',
      product_created_date: 'Fecha de alta de producto',
      lower_price: 'Precio mínimo',
      highest_price: 'Precio máximo',
      capture_date: 'Fecha de captura',
      capture_price: 'Precio de captura',
      actions: 'Acciones'
    }
  },
  status: {
    validated: 'Validado',
    pending: 'Pendiente'
  },
  units: {
    cm: 'Centimetro',
    m: 'Metro',
    ml: 'Mililitro',
    lt: 'Litro',
    mg: 'Miligramo',
    g: 'Gramo',
    kg: 'Kilogramo',
    pieza: 'Pieza'
  },
  modal: {
    delete: {
      buttonAcceptLabel: 'Eliminar',
      message: 'Esta operación es permanente ¿desea eliminar este elemento?'
    }
  }
});

/***/ }),

/***/ "./i18n/es/catalogs.ts":
/*!*****************************!*\
  !*** ./i18n/es/catalogs.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Catálogos',
  options: {
    brands: 'Marcas',
    unities: 'Unidades',
    groups: 'Grupos',
    lines: 'Líneas',
    chain: 'Cadenas',
    region: 'Regiones',
    users: 'Usuarios'
  }
});

/***/ }),

/***/ "./i18n/es/chains-catalog.ts":
/*!***********************************!*\
  !*** ./i18n/es/chains-catalog.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Cadenas',
  search: 'Buscar una cadena',
  searchByName: 'Buscar por nombre ',
  actions: {
    add: 'Añadir cadena',
    download: 'Descargar Reporte'
  },
  table: {
    headers: {
      id: 'Id',
      name: 'Nombre',
      alias: 'Alias'
    }
  },
  toast: {
    success: {
      title: 'Notificación de éxito.'
    },
    error: {
      title: 'Error con la petición.',
      message: 'Error con la petición.'
    },
    create: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha creado la cadena correctamente. '
      }
    },
    delete: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha eliminado la cadena correctamente. '
      }
    },
    edit: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha editado la cadena correctamente.'
      }
    },
    downloadData: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha descargado el reporte exitosamente.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Crear cadena'
    },
    editModal: {
      title: 'Editar cadena'
    },
    options: {
      save: 'Guardar',
      create: 'Crear'
    }
  }
});

/***/ }),

/***/ "./i18n/es/graph-tab-compare.ts":
/*!**************************************!*\
  !*** ./i18n/es/graph-tab-compare.ts ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  tabs: {
    headers: {
      priceList: 'Gráficas - Precio de lista',
      unitaryPrice: 'Gráficas - Precio unitario',
      history: 'Historial de precios'
    },
    history: {
      headers: {
        date: 'Fecha',
        price: 'Precio'
      }
    }
  },
  startDate: 'Fecha inicial',
  endDate: 'Fecha final',
  search: 'Buscar captura por id',
  modal: {
    delete: {
      buttonAcceptLabel: 'Eliminar',
      message: 'Esta operación es permanente ¿desea eliminar este elemento?'
    }
  }
});

/***/ }),

/***/ "./i18n/es/graph-tab.ts":
/*!******************************!*\
  !*** ./i18n/es/graph-tab.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  startDate: 'Fecha inicial',
  endDate: 'Fecha final',
  modal: {
    delete: {
      buttonAcceptLabel: 'Eliminar',
      message: 'Esta operación es permanente ¿desea eliminar este elemento?'
    }
  }
});

/***/ }),

/***/ "./i18n/es/groups-catalog.ts":
/*!***********************************!*\
  !*** ./i18n/es/groups-catalog.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Grupos',
  search: 'Buscar un grupo',
  searchByName: 'Buscar por nombre ',
  actions: {
    add: 'Añadir grupo',
    download: 'Descargar Reporte'
  },
  table: {
    headers: {
      name: 'Nombre',
      abbreviation: 'Abreviación'
    }
  },
  toast: {
    success: {
      title: 'Notificación de éxito.'
    },
    error: {
      title: 'Error con la petición.',
      message: 'Error con la petición.'
    },
    create: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha creado el grupo correctamente. '
      }
    },
    delete: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha eliminado el grupo correctamente. '
      }
    },
    edit: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha editado el grupo correctamente.'
      }
    },
    downloadData: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha descargado el reporte exitosamente.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Crear grupo'
    },
    editModal: {
      title: 'Editar grupo'
    },
    options: {
      save: 'Guardar',
      create: 'Crear'
    }
  }
});

/***/ }),

/***/ "./i18n/es/home.ts":
/*!*************************!*\
  !*** ./i18n/es/home.ts ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Validación',
  welcome: 'Seleccione una captura para iniciar.',
  sidebar: {
    title: 'Capturas',
    input: {
      mission: {
        label: 'Misión',
        placeholder: ''
      },
      product: {
        label: 'Producto',
        placeholder: ''
      }
    },
    scanFilter: {
      all: 'Todos',
      withProduct: 'Con producto',
      withoutProduct: 'Sin producto'
    }
  },
  scan: {
    topBar: {
      beingValidated: 'Este registro está siendo validado, selecciona uno diferente',
      withoutNumber: 'Sin Número',
      withoutMission: 'Sin Misión'
    },
    productImage: {
      label: 'Producto'
    },
    priceImage: {
      label: 'Precio'
    },
    input: {
      barcode: {
        label: 'Código de barras',
        error: 'El campo es requerido'
      },
      price: {
        label: 'Precio',
        error: 'El campo es requerido'
      },
      promotionPrice: {
        label: 'Precio de promoción',
        error: 'El campo es requerido'
      },
      store: {
        label: 'Cadena',
        error: 'El campo es requerido'
      },
      address: {
        label: 'Dirección',
        error: 'El campo es requerido'
      },
      aditionalComments: {
        label: 'Comentarios adicionales',
        error: 'El campo es requerido'
      }
    },
    option: {
      showPicture: 'Ver foto',
      reject: 'Rechazar',
      validate: 'Validar captura',
      validateAndAdd: 'Validar y agregar'
    }
  },
  product: {
    title: 'Crear nuevo producto',
    input: {
      name: {
        label: 'Nombre del producto',
        error: 'El campo es requerido'
      },
      barcode: {
        label: 'Código de barras',
        error: 'El campo es requerido'
      },
      brand: {
        label: 'Marca',
        error: 'El campo es requerido'
      },
      amount: {
        label: 'Cantidad',
        error: 'El campo es requerido'
      },
      unit: {
        label: 'Unidad',
        error: 'El campo es requerido'
      },
      group: {
        label: 'Grupo',
        error: 'El campo es requerido'
      },
      line: {
        label: 'Línea',
        error: 'El campo es requerido'
      },
      type: {
        label: 'Tipo',
        error: 'El campo es requerido'
      }
    },
    option: {
      changeImage: 'Cambiar imagen'
    }
  },
  modal: {
    reject: {
      subject: 'Selecciona un motivo de rechazo'
    }
  },
  toast: {
    sendCriterion: {
      success: {
        title: 'Notificación de éxito. ',
        message: 'Se ha rechazado la captura correctamente.'
      },
      error: {
        title: 'Notificación de error. ',
        message: 'Error con la petición.'
      }
    }
  },
  radioMapFirst: {
    blurry: 'Captura borrosa',
    farAway: 'Captura lejana',
    dark: 'Captura oscura',
    incomplete: 'Descripción de producto incompleta',
    doesntMatch: 'Productos que no coinciden'
  },
  radioSecond: {
    outsideShop: 'Captura fuera de tienda',
    shopTicket: 'Captura de tickets de compra',
    anotherCell: 'Captura tomada a otro celular',
    testScan: 'Pruebas'
  },
  history: {
    recent: 'Más reciente',
    mostExpensive: 'Más alto',
    cheapest: 'Más bajo',
    cheapestWithPromotion: 'Más bajo con promoción'
  }
});

/***/ }),

/***/ "./i18n/es/index.ts":
/*!**************************!*\
  !*** ./i18n/es/index.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navbar */ "./i18n/es/navbar.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./i18n/es/home.ts");
/* harmony import */ var _missions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./missions */ "./i18n/es/missions.ts");
/* harmony import */ var _captures__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./captures */ "./i18n/es/captures.ts");
/* harmony import */ var _capture__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./capture */ "./i18n/es/capture.ts");
/* harmony import */ var _catalogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./catalogs */ "./i18n/es/catalogs.ts");
/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile */ "./i18n/es/profile.ts");
/* harmony import */ var _products__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products */ "./i18n/es/products.ts");
/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./product */ "./i18n/es/product.ts");
/* harmony import */ var _rankings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./rankings */ "./i18n/es/rankings.ts");
/* harmony import */ var _graph_tab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./graph-tab */ "./i18n/es/graph-tab.ts");
/* harmony import */ var _advanced_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./advanced-search */ "./i18n/es/advanced-search.ts");
/* harmony import */ var _table_tab__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./table-tab */ "./i18n/es/table-tab.ts");
/* harmony import */ var _product_tab__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product-tab */ "./i18n/es/product-tab.ts");
/* harmony import */ var _scanners_tab__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./scanners-tab */ "./i18n/es/scanners-tab.ts");
/* harmony import */ var _validators_tab__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./validators-tab */ "./i18n/es/validators-tab.ts");
/* harmony import */ var _brands_catalog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./brands-catalog */ "./i18n/es/brands-catalog.ts");
/* harmony import */ var _units_catalog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./units-catalog */ "./i18n/es/units-catalog.ts");
/* harmony import */ var _groups_catalog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./groups-catalog */ "./i18n/es/groups-catalog.ts");
/* harmony import */ var _lines_catalog__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lines-catalog */ "./i18n/es/lines-catalog.ts");
/* harmony import */ var _chains_catalog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chains-catalog */ "./i18n/es/chains-catalog.ts");
/* harmony import */ var _regions_catalog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./regions-catalog */ "./i18n/es/regions-catalog.ts");
/* harmony import */ var _users_catalog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./users-catalog */ "./i18n/es/users-catalog.ts");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./table */ "./i18n/es/table.ts");
/* harmony import */ var _graph_tab_compare__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./graph-tab-compare */ "./i18n/es/graph-tab-compare.ts");
/* harmony import */ var _statistic_report__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./statistic-report */ "./i18n/es/statistic-report.ts");
/* harmony import */ var _product_report__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./product-report */ "./i18n/es/product-report.ts");
/* harmony import */ var _scans_report__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./scans-report */ "./i18n/es/scans-report.ts");
// ES




























/* harmony default export */ __webpack_exports__["default"] = ({
  navbar: _navbar__WEBPACK_IMPORTED_MODULE_0__["default"],
  home: _home__WEBPACK_IMPORTED_MODULE_1__["default"],
  table: _table__WEBPACK_IMPORTED_MODULE_23__["default"],
  missions: _missions__WEBPACK_IMPORTED_MODULE_2__["default"],
  captures: _captures__WEBPACK_IMPORTED_MODULE_3__["default"],
  capture: _capture__WEBPACK_IMPORTED_MODULE_4__["default"],
  catalogs: _catalogs__WEBPACK_IMPORTED_MODULE_5__["default"],
  profile: _profile__WEBPACK_IMPORTED_MODULE_6__["default"],
  products: _products__WEBPACK_IMPORTED_MODULE_7__["default"],
  product: _product__WEBPACK_IMPORTED_MODULE_8__["default"],
  rankings: _rankings__WEBPACK_IMPORTED_MODULE_9__["default"],
  graphTab: _graph_tab__WEBPACK_IMPORTED_MODULE_10__["default"],
  advancedSearch: _advanced_search__WEBPACK_IMPORTED_MODULE_11__["default"],
  tableTab: _table_tab__WEBPACK_IMPORTED_MODULE_12__["default"],
  productTab: _product_tab__WEBPACK_IMPORTED_MODULE_13__["default"],
  scannersTab: _scanners_tab__WEBPACK_IMPORTED_MODULE_14__["default"],
  validatorsTab: _validators_tab__WEBPACK_IMPORTED_MODULE_15__["default"],
  brandsCatalog: _brands_catalog__WEBPACK_IMPORTED_MODULE_16__["default"],
  unitsCatalog: _units_catalog__WEBPACK_IMPORTED_MODULE_17__["default"],
  groupsCatalog: _groups_catalog__WEBPACK_IMPORTED_MODULE_18__["default"],
  linesCatalog: _lines_catalog__WEBPACK_IMPORTED_MODULE_19__["default"],
  chainsCatalog: _chains_catalog__WEBPACK_IMPORTED_MODULE_20__["default"],
  regionsCatalog: _regions_catalog__WEBPACK_IMPORTED_MODULE_21__["default"],
  usersCatalog: _users_catalog__WEBPACK_IMPORTED_MODULE_22__["default"],
  graphTabCompare: _graph_tab_compare__WEBPACK_IMPORTED_MODULE_24__["default"],
  statisticReport: _statistic_report__WEBPACK_IMPORTED_MODULE_25__["default"],
  productReport: _product_report__WEBPACK_IMPORTED_MODULE_26__["default"],
  scansReport: _scans_report__WEBPACK_IMPORTED_MODULE_27__["default"]
});

/***/ }),

/***/ "./i18n/es/lines-catalog.ts":
/*!**********************************!*\
  !*** ./i18n/es/lines-catalog.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Líneas',
  search: 'Buscar una línea',
  searchByName: 'Buscar por nombre ',
  actions: {
    add: 'Añadir línea',
    download: 'Descargar Reporte'
  },
  table: {
    headers: {
      name_line: 'Línea',
      name_group: 'Grupo'
    }
  },
  toast: {
    success: {
      title: 'Notificación de éxito.'
    },
    error: {
      title: 'Error con la petición.',
      message: 'Error con la petición.'
    },
    create: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha creado la línea correctamente. '
      }
    },
    delete: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha eliminado la línea correctamente. '
      }
    },
    edit: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha editado la línea correctamente.'
      }
    },
    downloadData: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha descargado el reporte exitosamente.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Crear línea'
    },
    editModal: {
      title: 'Editar línea'
    },
    options: {
      save: 'Guardar',
      create: 'Crear'
    }
  }
});

/***/ }),

/***/ "./i18n/es/missions.ts":
/*!*****************************!*\
  !*** ./i18n/es/missions.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'MISIONES',
  table: {
    head: {
      title: 'Título',
      description: 'Descripción',
      capture_points: 'Puntos por capturas',
      mission_points: 'Puntos por misión',
      start_date: 'Fecha de inicio',
      end_date: 'Fecha de fin',
      regions: 'Región',
      actions: 'Acciones'
    }
  },
  options: {
    add: 'Nueva misión'
  },
  toast: {
    createMission: {
      success: {
        title: 'Notificación de éxito. ',
        message: 'Se ha creado la misión correctamente. '
      },
      error: {
        title: 'Notificación de error. ',
        duplicatedMessage: 'El Titulo se duplicó.',
        message: 'Algo salió mal. '
      }
    }
  },
  modal: {
    dialog: {
      message: 'Esta operación no se puede realizar debido a que la misión tiene capturas asociadas',
      options: {
        acept: 'Aceptar'
      }
    },
    add: {
      title: 'Nueva misión',
      options: {
        cancel: 'Cancelar',
        create: 'Crear'
      }
    },
    edit: {
      title: 'Editar misión',
      options: {
        cancel: 'Cancelar',
        edit: 'editar'
      }
    },
    input: {
      title: {
        label: 'Título (obligatorio)',
        validations: {
          required: 'El campo es requerido'
        }
      },
      description: {
        label: 'Descripción (obligatorio / máximo 255 caracteres)',
        validations: {
          required: 'El campo es requerido',
          minLength: 'La descripción debe tener por lo menos 5 caracteres.',
          maxLength: 'La descripción debe tener máximo 255 caracteres.'
        }
      },
      startDate: {
        label: 'Fecha de inicio',
        validations: {
          required: 'La fecha de inicio no es válida',
          greaterThan: 'La fecha de inicio debe ser mayor al día de ayer.'
        }
      },
      endDate: {
        label: 'Fecha de fin',
        validations: {
          required: 'La fecha de fin no es válida'
        }
      },
      region: {
        label: 'Selecciona una región',
        validations: {
          required: 'Debes seleccionar por lo menos una región'
        }
      },
      missionPoints: {
        label: 'Puntaje de la misión',
        validations: {
          valid: 'El puntaje debe ser un número válido'
        }
      },
      capturePoints: {
        label: 'Puntaje de captura',
        validations: {
          valid: 'El puntaje debe ser un número válido'
        }
      }
    }
  }
});

/***/ }),

/***/ "./i18n/es/navbar.ts":
/*!***************************!*\
  !*** ./i18n/es/navbar.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  option: {
    validations: 'Validación',
    missions: 'Misiones',
    captures: 'Capturas',
    products: 'Productos',
    rankings: 'Rankings',
    catalogs: 'Catálogos',
    editProfile: 'Editar perfil',
    signOut: 'Cerrar sesión',
    reports: {
      geolocalization: 'Reporte de geolocalización',
      statistic: 'Reporte comparativo de precios',
      product: 'Reporte de producto',
      scans: 'Reporte de capturas'
    }
  }
});

/***/ }),

/***/ "./i18n/es/product-report.ts":
/*!***********************************!*\
  !*** ./i18n/es/product-report.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Reporte de Producto',
  newSerach: 'Nueva Búsqueda',
  placeholderSearch: 'Nombre / Código',
  selected: 'Seleccionado',
  search: 'Buscar',
  myList: 'Ver mi lista',
  generalSearch: 'Búsqueda General',
  saveList: 'Guardar a mi lista',
  graphic: 'Gráfica',
  clearGraphic: 'Limpiar Gráfica',
  emptyState: 'Hacer búsqueda para ver resultados',
  emptGraphyState: 'Graficar para ver resultados',
  saveProducts: 'Productos han sido agregados a la lista',
  saveProductsError: 'Un error ocurrio mientras se guardaba la lista',
  parameter: 'Parametros',
  values: 'Valor',
  startDate: 'Fecha Inicio',
  endDate: 'Fecha Terminación',
  deleteFilters: "Limpiar Filtros",
  download: "Descargar",
  nameOrCode: "Nombre / Código del producto",
  successDownload: "Reporte descargado exitosamente",
  deleteFromList: "Borrar de mi lista",
  successDelete: "Los productos han sido borrados de la lista",
  errorDelete: "Un error ocurrio mientras se removian productos de la lista",
  errorDownload: "Un  error ocurrio mientras se descargaba el reporte",
  noSelected: "No hay productos seleccionados.....",
  card: {
    id: "ID:",
    barcode: "CÓDIGO DE BARRAS:",
    brand: "MARCA:",
    line: "LINEA:",
    group: "GRUPO:",
    unit: "UNIDAD:",
    type: "TIPO:",
    name: "NOMBRE:",
    lower_price: "MENOR PRECIO:",
    highest_price: "MAYOR PRECIO:",
    grammage: "GRAMAJE / UNIDAD:",
    recently: "Reciente",
    higher: "Más alto",
    lower: "Más bajo",
    lowerPromotion: "Más bajo con descuento"
  }
});

/***/ }),

/***/ "./i18n/es/product-tab.ts":
/*!********************************!*\
  !*** ./i18n/es/product-tab.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  detail: {
    input: {
      productId: {
        label: 'ID Producto'
      },
      barcode: {
        label: 'Código de barras'
      },
      name: {
        label: 'Nombre',
        validations: {
          minLength: 'El campo debe contener al menos dos caracteres'
        }
      },
      brand: {
        label: 'Marca'
      },
      type: {
        label: 'Tipo'
      },
      group: {
        label: 'Grupo'
      },
      line: {
        label: 'Línea'
      },
      amount: {
        label: 'Gramaje / Cantidad',
        validations: {
          valid: 'El gramaje o cantidad debe ser un número válido: Con dos decimales máximo.'
        }
      },
      unit: {
        label: 'Unidad'
      },
      mainImage: {
        label: 'Foto principal'
      },
      priceImage: {
        label: 'Foto de precio'
      },
      minPrice: {
        label: 'Precio mínimo'
      },
      maxPrice: {
        label: 'Precio máximo'
      }
    },
    detailsContainer: {
      title: 'Foto del producto'
    },
    options: {
      cancel: 'Cancelar',
      changeImage: 'Cambiar imagen',
      editInformation: 'Editar información',
      saveInformation: 'Guardar información'
    }
  }
});

/***/ }),

/***/ "./i18n/es/product.ts":
/*!****************************!*\
  !*** ./i18n/es/product.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  options: {
    listPrice: 'Gráfica - Precio de lista',
    unitaryPrice: 'Gráfica - Precio unitario',
    priceHistory: 'Historial de precios',
    detail: 'Detalle'
  },
  startDate: 'Fecha inicial',
  endDate: 'Fecha final',
  table: {
    headers: {
      branchOffice: 'Sucursal',
      minPrice: 'Precio mínimo',
      maxPrice: 'Precio máximo',
      currentPrice: 'Precio actual',
      averagePrice: 'Precio promedio'
    },
    options: {
      seeHistory: 'Ver historial'
    }
  },
  detail: {
    input: {
      productId: {
        label: 'ID Producto'
      },
      barcode: {
        label: 'Código de barras'
      },
      name: {
        label: 'Nombre'
      },
      brand: {
        label: 'Marca'
      },
      type: {
        label: 'Tipo'
      },
      group: {
        label: 'Grupo'
      },
      line: {
        label: 'Línea'
      },
      amount: {
        label: 'Gramaje / Cantidad'
      },
      unit: {
        label: 'Unidad'
      },
      mainImage: {
        label: 'Foto principal'
      },
      priceImage: {
        label: 'Foto de precio'
      }
    },
    options: {
      changeImage: 'Cambiar imagen',
      editInformation: 'Editar información',
      saveInformation: 'Guardar información'
    }
  }
});

/***/ }),

/***/ "./i18n/es/products.ts":
/*!*****************************!*\
  !*** ./i18n/es/products.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'PRODUCTOS',
  filters: {
    searchField: 'Buscar por nombre o código del producto',
    startDate: 'Desde',
    endDate: 'Hasta',
    updatedAt: 'Fecha de modificación',
    createdAt: 'Fecha de Alta',
    param: 'Parámetro',
    value: 'Valor'
  },
  actions: {
    search: 'Buscar',
    cleanFilter: 'Limpiar filtros',
    download: 'Descargar',
    comparativeChart: 'Graficar comparativos'
  },
  optionsCatalog: {
    brandsCatalog: 'Marca',
    groupsCatalog: 'Grupo',
    linesCatalog: 'Línea',
    storesCatalog: 'Cadena',
    unitsCatalog: 'Unidad'
  },
  modal: {
    delete: {
      buttonAcceptLabel: 'Eliminar',
      message: ''
    }
  },
  table: {
    head: {
      selected: 'Seleccionar',
      photo: 'Foto del producto',
      product: 'Nombre',
      barcode: 'Código',
      brand: 'Marca',
      type: 'Tipo',
      created_at: 'Fecha de captura',
      updated_at: 'Fecha de modificación',
      grammage_quantity: 'Cantidad',
      unit: 'Unidad',
      group: 'Grupo',
      line: 'Línea',
      highest_price: 'Precio más alto',
      lower_price: 'Precio más bajo',
      promotion_lower_price: 'Precio más bajo con promoción',
      last_price: 'Último precio capturado'
    }
  }
});

/***/ }),

/***/ "./i18n/es/profile.ts":
/*!****************************!*\
  !*** ./i18n/es/profile.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  input: {
    role: {
      label: 'Rol *',
      error: 'El campo es requerido'
    },
    first_name: {
      label: 'Nombre *',
      error: 'El campo es requerido'
    },
    last_name: {
      label: 'Apellido paterno *',
      error: 'El campo es requerido'
    },
    mother_last_name: {
      label: 'Apellido materno',
      error: 'El campo es requerido'
    },
    theme: {
      label: 'Usar tema oscuro',
      error: 'El campo es requerido'
    },
    locale: {
      label: 'Cambiar idioma',
      error: 'El campo es requerido'
    },
    employee_number: {
      label: 'Número de empleado',
      error: 'El campo es requerido'
    },
    cellphone: {
      label: 'Número de celular',
      error: 'El campo es requerido'
    },
    region: {
      label: 'Región',
      error: 'El campo es requerido'
    },
    username: {
      label: 'Usuario *',
      error: 'El campo es requerido'
    },
    password: {
      label: 'Contraseña *',
      error: 'El campo es requerido'
    }
  },
  options: {
    close: 'Cerrar',
    save: 'Guardar'
  }
});

/***/ }),

/***/ "./i18n/es/rankings.ts":
/*!*****************************!*\
  !*** ./i18n/es/rankings.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Rankings',
  tabs: {
    capturists: {
      title: 'capturistas',
      startDate: 'Fecha inicial',
      endDate: 'Fecha final',
      input: {
        search: {
          placeholder: 'Buscar por nombre o número de empleado'
        }
      },
      options: {
        clearDate: 'Limpiar fechas'
      },
      table: {
        header: {
          position: 'Posición',
          employeeNumber: 'No. de empleado',
          name: 'Nombre',
          percentage: 'Porcentaje',
          validatedCaptures: 'Capturas validadas',
          points: 'Puntos'
        }
      }
    },
    validators: {
      title: 'Validadores',
      startDate: 'Fecha inicial',
      endDate: 'Fecha final',
      input: {
        search: {
          placeholder: 'Buscar por nombre o número de empleado'
        }
      },
      options: {
        clearDate: 'Limpiar fechas',
        generateData: 'Generar datos'
      },
      total: {
        captures: 'Total de capturas',
        validated: 'Total validadas'
      },
      history: {
        captures: 'Historial de capturas',
        validated: 'Historial de validadas'
      },
      table: {
        header: {
          employeeNumber: 'No. de empleado',
          nombre: 'Nombre',
          percentage: 'Porcentaje',
          validatedCaptures: 'Capturas validadas'
        }
      }
    }
  }
});

/***/ }),

/***/ "./i18n/es/regions-catalog.ts":
/*!************************************!*\
  !*** ./i18n/es/regions-catalog.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Regiones',
  search: 'Buscar una región',
  searchByName: 'Buscar por nombre ',
  actions: {
    add: 'Añadir región',
    download: 'Descargar Reporte'
  },
  table: {
    headers: {
      name: 'Nombre',
      alias: 'Alias'
    }
  },
  toast: {
    success: {
      title: 'Notificación de éxito.'
    },
    error: {
      title: 'Error con la petición.',
      message: 'Error con la petición.'
    },
    create: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha creado la región correctamente. '
      }
    },
    delete: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha eliminado la región correctamente. '
      }
    },
    edit: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha editado la región correctamente.'
      }
    },
    downloadData: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha descargado el reporte exitosamente.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Crear región'
    },
    editModal: {
      title: 'Editar región'
    },
    options: {
      save: 'Guardar',
      create: 'Crear'
    }
  }
});

/***/ }),

/***/ "./i18n/es/scanners-tab.ts":
/*!*********************************!*\
  !*** ./i18n/es/scanners-tab.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  startDate: 'Fecha inicial',
  endDate: 'Fecha final',
  input: {
    search: {
      placeholder: 'Buscar por nombre o número de empleado'
    },
    mission: {
      placeholder: 'Misión'
    }
  },
  options: {
    clearDate: 'Limpiar fechas'
  },
  table: {
    header: {
      ranking: 'Posición',
      employee_number: 'No. de empleado',
      name: 'Nombre',
      efficiency: 'Porcentaje',
      validated_captures: 'Capturas validadas',
      points: 'Puntos'
    }
  }
});

/***/ }),

/***/ "./i18n/es/scans-report.ts":
/*!*********************************!*\
  !*** ./i18n/es/scans-report.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Reporte de capturas',
  filters: {
    region: 'Región',
    scanner: 'Capturista',
    mission: 'Misión'
  }
});

/***/ }),

/***/ "./i18n/es/statistic-report.ts":
/*!*************************************!*\
  !*** ./i18n/es/statistic-report.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Reporte Comparativo de Precios'
});

/***/ }),

/***/ "./i18n/es/table-tab.ts":
/*!******************************!*\
  !*** ./i18n/es/table-tab.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  table: {
    headers: {
      branchOffice: 'Sucursal',
      minPrice: 'Precio mínimo',
      maxPrice: 'Precio máximo',
      currentPrice: 'Precio actual',
      averagePrice: 'Precio promedio'
    },
    options: {
      seeHistory: 'Ver historial'
    }
  },
  modal: {
    table: {
      headers: {
        scan: 'Captura',
        capturedAt: 'Fecha de captura',
        price: 'Precio'
      }
    },
    options: {
      close: 'cerrar'
    }
  }
});

/***/ }),

/***/ "./i18n/es/table.ts":
/*!**************************!*\
  !*** ./i18n/es/table.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  actions: 'Acciones'
});

/***/ }),

/***/ "./i18n/es/units-catalog.ts":
/*!**********************************!*\
  !*** ./i18n/es/units-catalog.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Unidades',
  search: 'Buscar una unidad',
  searchByName: 'Buscar por nombre ',
  actions: {
    add: 'Añadir unidad',
    download: 'Descargar Reporte'
  },
  table: {
    headers: {
      name: 'Nombre',
      abbreviation: 'Abreviación'
    }
  },
  toast: {
    success: {
      title: 'Notificación de éxito.'
    },
    error: {
      title: 'Error con la petición.',
      message: 'Error con la petición.'
    },
    create: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha creado la unidad correctamente. '
      }
    },
    delete: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha eliminado la unidad correctamente. '
      }
    },
    edit: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha editado la unidad correctamente.'
      }
    },
    downloadData: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha descargado el reporte exitosamente.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Crear unidad'
    },
    editModal: {
      title: 'Editar unidad'
    },
    options: {
      save: 'Guardar',
      create: 'Crear'
    }
  }
});

/***/ }),

/***/ "./i18n/es/users-catalog.ts":
/*!**********************************!*\
  !*** ./i18n/es/users-catalog.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: 'Usuarios',
  search: 'Buscar un usuario',
  searchByName: 'Buscar por nombre, usuario, email, etiquetas, o número de empleado.',
  tags: 'Etiquetas',
  actions: {
    add: 'Crear nuevo usuario',
    addTags: 'Agregar etiquetas',
    close: 'Cerrar',
    download: 'Descargar Reporte'
  },
  filters: {
    role: 'Filtrar por rol',
    region: 'Filtrar por región',
    allRegions: 'Todas las regiones'
  },
  table: {
    headers: {
      first_name: 'Nombre',
      last_name: 'Apellido paterno',
      mother_last_name: 'Apellido materno',
      username: 'Usuario',
      email: 'Correo electrónico',
      employee_number: 'No. de empleado',
      rolSelected: 'Rol'
    }
  },
  toast: {
    success: {
      title: 'Notificación de éxito.'
    },
    error: {
      title: 'Error con la petición.',
      message: 'Error con la petición.'
    },
    create: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha creado el usuario correctamente. '
      }
    },
    delete: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha eliminado el usuario correctamente. '
      }
    },
    edit: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha editado el usuario correctamente.'
      }
    },
    downloadData: {
      success: {
        title: 'Notificación de éxito.',
        message: 'Se ha descargado el reporte exitosamente.'
      }
    }
  },
  modal: {
    createModal: {
      title: 'Crear usuario'
    },
    editModal: {
      title: 'Editar usuario'
    },
    options: {
      save: 'Guardar',
      create: 'Crear'
    }
  }
});

/***/ }),

/***/ "./i18n/es/validators-tab.ts":
/*!***********************************!*\
  !*** ./i18n/es/validators-tab.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  startDate: 'Fecha inicial',
  endDate: 'Fecha final',
  input: {
    search: {
      placeholder: 'Buscar por nombre o número de empleado'
    },
    mission: {
      placeholder: 'Misión'
    }
  },
  options: {
    clearDate: 'Limpiar fechas',
    generateData: 'Generar datos'
  },
  total: {
    captures: 'Total de capturas',
    validated: 'Total validadas'
  },
  history: {
    captures: 'Historial de capturas',
    validated: 'Historial de validadas'
  },
  table: {
    header: {
      employee_number: 'Núm de empleado',
      fullName: 'Nombre',
      efficiency: 'Porcentaje',
      userValidates: 'Capturas validadas'
    }
  }
});

/***/ }),

/***/ "./i18n/index.ts":
/*!***********************!*\
  !*** ./i18n/index.ts ***!
  \***********************/
/*! exports provided: getI18nLabel, translateTableHeader, translateTableComplexHeader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getI18nLabel", function() { return getI18nLabel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTableHeader", function() { return translateTableHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateTableComplexHeader", function() { return translateTableComplexHeader; });
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.get */ "lodash.get");
/* harmony import */ var lodash_get__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_get__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _es__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./es */ "./i18n/es/index.ts");
/* harmony import */ var _en__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en */ "./i18n/en/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


// LOCALES


const locales = {
  es: _es__WEBPACK_IMPORTED_MODULE_1__["default"],
  en: _en__WEBPACK_IMPORTED_MODULE_2__["default"]
};
const getI18nLabel = (locale, key) => lodash_get__WEBPACK_IMPORTED_MODULE_0___default()(locales[locale], key) || '';
const translateTableHeader = (locale, headers, path) => headers.map(header => _objectSpread(_objectSpread({}, header), {}, {
  label: getI18nLabel(locale, `${path}.${header.key}`)
}));
const translateTableComplexHeader = (locale, headers, path) => headers.map(header => _objectSpread(_objectSpread({}, header), {}, {
  title: getI18nLabel(locale, `${path}.${header.name}`)
}));

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
exports.__esModule = true;
exports.default = void 0;
var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");
var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};
function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser
  if (!IntersectionObserver) {
    return undefined;
  }
  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }
      const cb = listeners.get(entry.target);
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}
const listenToIntersections = (el, cb) => {
  const observer = getObserver();
  if (!observer) {
    return () => {};
  }
  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }
    listeners.delete(el);
  };
};
function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch
  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character
  prefetched[href + '%' + as] = true;
}
function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey ||
  // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;
  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }
  e.preventDefault(); //  avoid scroll for urls with anchor refs
  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present
  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;
    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}
function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:
    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:
    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];
      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const hasWarned = _react.default.useRef(false);
    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }
  const p = props.prefetch !== false;
  const [childElm, setChildElm] = _react.default.useState();
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';
  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);
  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];
      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);
  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag
  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error
  const child = _react.Children.only(children);
  const childProps = {
    ref: el => {
      if (el) setChildElm(el);
      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }
      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };
  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;
      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }
      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user
  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }
  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}
var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0; /**
                                             * Removes the trailing slash of a path if there is one. Preserves the root path `/`.
                                             */
function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
} /**
  * Normalizes the trailing slash of a path according to the `trailingSlash` option
  * in `next.config.js`.
  */
const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));
exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;
var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");
var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));
exports.withRouter = _withRouter.default; /* global window */
const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],
  ready(cb) {
    if (this.router) return cb();
    if (false) {}
  }
}; // Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }
});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }
  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;
      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});
function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }
  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.
var _default = singletonRouter; // Reexport the withRoute HOC
exports.default = _default;
function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.
const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance
exports.createRouter = createRouter;
function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};
  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful
      continue;
    }
    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it
  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");
exports.__esModule = true;
exports.default = withRouter;
var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));
var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");
function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }
  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }
  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;
function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char
  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }
    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt; /*
                        MIT License
                        Copyright (c) Jason Miller (https://jasonformat.com/)
                        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
                        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
                        */ // This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file
function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },
    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },
    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");
var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));
var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");
var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));
var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");
var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");
var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} /* global __NEXT_DATA__ */ // tslint:disable:no-console
const basePath =  false || '';
function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}
function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}
function addLocale(path, locale, defaultLocale) {
  if (true) {
    return locale && locale !== defaultLocale && !path.startsWith('/' + locale) ? addPathPrefix(path, '/' + locale) : path;
  }
  return path;
}
function delLocale(path, locale) {
  if (true) {
    return locale && path.startsWith('/' + locale) ? path.substr(locale.length + 1) || '/' : path;
  }
  return path;
}
function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}
function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}
function delBasePath(path) {
  return path.slice(basePath.length) || '/';
} /**
  * Detects whether a given url is routable by the Next.js router (browser only).
  */
function isLocalURL(url) {
  if (url.startsWith('/')) return true;
  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}
function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches =
  // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') ||
  // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);
  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)
    let replaced = `[${repeat ? '...' : ''}${param}]`;
    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }
    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (
    // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }
  return {
    params,
    result: interpolatedRoute
  };
}
function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
} /**
  * Resolves a given hyperlink with a certain router state (basePath not included).
  * Preserves absolute urls.
  */
function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);
  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';
    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href
    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}
const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');
function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}
function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}
const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';
function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }
      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }
      throw new Error(`Failed to load static props`);
    }
    return res.json();
  });
}
function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }
    throw err;
  });
}
class Router {
  /**
  * Map of all components loaded in `Router`
  */ // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.onPopState = e => {
      const state = e.state;
      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }
      if (!state.__N) {
        return;
      }
      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site
      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.
      if (this._bps && !this._bps(state)) {
        return;
      }
      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key
    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)
    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.
    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }
    this.components['/_app'] = {
      Component: App,
      styleSheets: [/* /_app does not need its stylesheets managed */]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch
    this.asPath =
    // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site
    this.isSsr = true;
    this.isFallback = isFallback;
    if (true) {
      this.locale = locale;
      this.locales = locales;
      this.defaultLocale = defaultLocale;
    }
    if (false) {}
  }
  reload() {
    window.location.reload();
  } /**
    * Go back in history
    */
  back() {
    window.history.back();
  } /**
    * Performs a `pushState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  } /**
    * Performs a `replaceState` with arguments
    * @param url of the route
    * @param as masks `url` for the browser
    * @param options object you can define `shallow` and other options
    */
  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }
  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }
    if (true) {
      this.locale = options.locale || this.locale;
      if (typeof options.locale === 'undefined') {
        options.locale = this.locale;
      }
      const {
        normalizeLocalePath
      } = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");
      const localePathResult = normalizeLocalePath(as, this.locales);
      if (localePathResult.detectedLocale) {
        this.locale = localePathResult.detectedLocale;
        url = localePathResult.pathname;
      }
    }
    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry
    if (_utils.ST) {
      performance.mark('routeChange');
    }
    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }
    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.
    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?
      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to
    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1
    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url
    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }
    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly
    let resolvedAs = as;
    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);
      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded
        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }
    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);
    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);
        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }
          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }
    Router.events.emit('routeChangeStart', as);
    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition
      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not
        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
          this._resolveHref(parsedHref, pages);
          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }
        window.location.href = destination;
        return new Promise(() => {});
      }
      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);
      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }
      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });
      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }
      if (false) {}
      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }
      throw err;
    }
  }
  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }
      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }
    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      },
      // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }
  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }
    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.
      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.
      throw buildCancellationError();
    }
    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;
      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?
          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }
      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }
      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };
      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }
      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }
  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];
      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;
      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");
        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }
      let dataHref;
      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }
      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component,
      // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }
  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  } /**
    * Callback to execute before replacing router state
    * @param cb callback to be executed
    */
  beforePopState(cb) {
    this._bps = cb;
  }
  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same
    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change
    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.
    return oldHash !== newHash;
  }
  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value
    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found
    const idEl = document.getElementById(hash);
    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers
    const nameEl = document.getElementsByName(hash)[0];
    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }
  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));
    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }
    return parsedHref;
  } /**
    * Prefetch page code, you may wait for the data during page rendering.
    * This feature only works in production!
    * @param url the href of prefetched page
    * @param asPath the as path of the prefetched page
    */
  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);
    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries
    if (true) {
      return;
    }
    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }
  async fetchComponent(route) {
    let cancelled = false;
    const cancel = this.clc = () => {
      cancelled = true;
    };
    const componentResult = await this.pageLoader.loadPage(route);
    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }
    if (cancel === this.clc) {
      this.clc = null;
    }
    return componentResult;
  }
  _getData(fn) {
    let cancelled = false;
    const cancel = () => {
      cancelled = true;
    };
    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }
      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }
      return data;
    });
  }
  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);
    if (false) {}
    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }
  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }
  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];
    const AppTree = this._wrapApp(App);
    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }
  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }
  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }
}
exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp
function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;
var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }
  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }
  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';
  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }
  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string
const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;
function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;
var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
const DUMMY_BASE = new URL(true ? 'http://n' : undefined); /**
                                                                                 * Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
                                                                                 * (e.g. `./hello`) then at least base must be.
                                                                                 * Absolute urls are rejected with one exception, in the browser, absolute urls that are on
                                                                                 * the current origin will be parsed as relative
                                                                                 */
function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);
  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }
  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
exports.pathToRegexp = pathToRegexp;
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;
const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});
exports.customRouteMatcherOptions = customRouteMatcherOptions;
var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);
      if (!res) {
        return false;
      }
      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }
      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
exports.__esModule = true;
exports.default = prepareDestination;
var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");
var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));
function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();
  _getRequireWildcardCache = function () {
    return cache;
  };
  return cache;
}
function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }
  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }
  var cache = _getRequireWildcardCache();
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj.default = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}
function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};
  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }
  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath,
  // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values
  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;
    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }
    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path
  const paramKeys = Object.keys(params);
  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }
  const shouldAddBasePath = destination.startsWith('/') && basePath;
  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }
    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values
  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;
function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}
function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}
function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}
function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;
var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));
var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));
var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
const customRouteMatcher = (0, _pathMatch.default)(true);
function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);
      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }
        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);
        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain
        const resolvedHref = resolveHref(asPath);
        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }
  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;
function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);
    if (!routeMatch) {
      return false;
    }
    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };
    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];
      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes
function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}
function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');
  if (optional) {
    param = param.slice(1, -1);
  }
  const repeat = param.startsWith('...');
  if (repeat) {
    param = param.slice(3);
  }
  return {
    key: param,
    repeat,
    optional
  };
}
function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest
  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters
    const getSafeRouteKey = () => {
      let routeKey = '';
      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;
        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }
      return routeKey;
    };
    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex
        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key
        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }
        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }
        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }
        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }
  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;
var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js"); /**
                                                       * Utils
                                                       */
function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }
    return result;
  };
}
function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}
function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
  return res.finished || res.headersSent;
}
async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;
    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`
  const res = ctx.res || ctx.ctx && ctx.ctx.res;
  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }
    return {};
  }
  const props = await App.getInitialProps(ctx);
  if (res && isResSent(res)) {
    return props;
  }
  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }
  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }
  return props;
}
const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;
function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }
  return (0, _formatUrl.formatUrl)(url);
}
const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./pages/home/reports/component/statistic.form-table.js":
/*!**************************************************************!*\
  !*** ./pages/home/reports/component/statistic.form-table.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/buttons */ "./components/buttons/index.js");
/* harmony import */ var _statistic_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../statistic.module.scss */ "./pages/home/reports/statistic.module.scss");
/* harmony import */ var _statistic_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_statistic_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\pages\\home\\reports\\component\\statistic.form-table.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const onlyNumbersHandler = event => {
  const {
    value
  } = event.target;
  const code = event.which ? event.which : event.keyCode;
  if (code > 31 && (code < 48 || code > 57)) {
    event.preventDefault();
    return false;
  }
  return true;
};
const FormTable = props => {
  let {
    chains,
    products
  } = props;
  chains = chains && chains.length ? chains : [];
  products = products && products.length ? products : [];
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("table", {
    className: _statistic_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.reportTable,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "C\xF3digo de barras"), __jsx("th", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 25
    }
  }, "Producto"), chains.map((chain, index) => __jsx("th", {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  }, chain.name)))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, products.map((product, index) => __jsx("tr", {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 25
    }
  }, __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 29
    }
  }, product.barcode), __jsx("td", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, product.description), chains.map((field, index) => __jsx("td", {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 33
    }
  }, __jsx("input", {
    type: "text",
    className: "barcode-input",
    onKeyPress: onlyNumbersHandler,
    onChange: props.barcodeFieldHandler,
    "data-index": index,
    "data-barcode": product.barcode,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 37
    }
  }))))))), __jsx("ul", {
    className: _statistic_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.filterOptions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }, __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_1__["SecondaryButton"], {
    label: "cancelar",
    onClick: props.clearBarcodes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  })), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_1__["PrimaryButton"], {
    label: "guardar y cerrar",
    onClick: props.getEquivalences,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 21
    }
  }))));
};
/* harmony default export */ __webpack_exports__["default"] = (FormTable);

/***/ }),

/***/ "./pages/home/reports/statistic.module.scss":
/*!**************************************************!*\
  !*** ./pages/home/reports/statistic.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container-fluid": "statistic_container-fluid__28VlE",
	"fileUpload": "statistic_fileUpload__1GcHF",
	"reportTable": "statistic_reportTable__3LpVR",
	"filterOptions": "statistic_filterOptions__jzG1U",
	"geoToggle": "statistic_geoToggle__3NYmm"
};


/***/ }),

/***/ "./pages/home/reports/statistic.tsx":
/*!******************************************!*\
  !*** ./pages/home/reports/statistic.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/loader/Loader */ "./components/loader/Loader.tsx");
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/session-management */ "./utils/session-management.ts");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../utils/theme */ "./utils/theme.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../i18n */ "./i18n/index.ts");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/header */ "./components/header/index.js");
/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/buttons */ "./components/buttons/index.js");
/* harmony import */ var _component_statistic_form_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/statistic.form-table */ "./pages/home/reports/component/statistic.form-table.js");
/* harmony import */ var _components_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/datepicker/datepicker */ "./components/datepicker/datepicker.tsx");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/api */ "./utils/api.ts");
/* harmony import */ var _statistic_module_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./statistic.module.scss */ "./pages/home/reports/statistic.module.scss");
/* harmony import */ var _statistic_module_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_statistic_module_scss__WEBPACK_IMPORTED_MODULE_13__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\pages\\home\\reports\\statistic.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }














class StatisticReport extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      chains: [],
      products: [],
      differences: [],
      equivalences: {},
      showFormTable: false,
      from: '',
      to: '',
      chainFilter: [],
      hasUploadedReport: false,
      lastUploadedReportDate: false,
      onFileChangeMessage: '',
      onFileChangeError: false,
      showLoader: false
    });
    _defineProperty(this, "timeout", null);
    _defineProperty(this, "emptyEquivalences", (chains, products) => {
      if (products.length && chains.length) {
        let equivalences = {};
        for (let i = 0; i < products.length; i++) {
          const product = products[i];
          equivalences[product.barcode] = [...new Array(chains.length)].fill(-1);
        }
        return equivalences;
      }
    });
    _defineProperty(this, "barcodeFieldHandler", event => {
      const {
        dataset,
        value
      } = event.target;
      const {
        index,
        barcode
      } = dataset;
      const equivalences = this.state.equivalences;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        equivalences[barcode][parseInt(index)] = parseInt(value);
        this.setState({
          equivalences
        });
      }, 1200);
    });
    _defineProperty(this, "clearBarcodes", () => {
      const {
        chains,
        products
      } = this.state;
      const equivalences = this.emptyEquivalences(chains, products);
      const inputs = document.querySelectorAll('.barcode-input');
      for (let i = 0; i < inputs.length; i++) {
        const input = inputs[i];
        input.value = '';
      }
      this.setState({
        equivalences
      });
    });
    _defineProperty(this, "onFileChange", async event => {
      try {
        event.preventDefault();
        const {
          files
        } = event.target;
        const selectedFile = files.length && files[0];
        const endpoint = 'api/master-file/import';
        const request = new FormData();
        const headers = {
          'Content-Type': 'multipart/form-data',
          headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_5__["getHeader"])()
        };
        request.append('csv', selectedFile);
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_12__["default"].post(endpoint, request, headers);
        const {
          data: {
            chains,
            products
          }
        } = response;
        const equivalences = this.emptyEquivalences(chains, products);
        this.setState({
          chains,
          products: [],
          differences: [],
          equivalences: {},
          from: '',
          to: '',
          selectedFile,
          showFormTable: false,
          onFileChangeMessage: 'Archivo CSV correcto'
        }, () => {
          const chainCheckbox = document.querySelectorAll('.chain-checkbox');
          for (let checkbox of chainCheckbox) {
            if (!checkbox.checked) {
              checkbox.checked = true;
            }
          }
        });
      } catch (error) {
        console.log('aaa - error: ', error);
        this.setState({
          onFileChangeMessage: 'Archivo incorrecto, adjunta un CSV válido',
          onFileChangeError: true
        });
      }
    });
    _defineProperty(this, "getReportStatus", async () => {
      try {
        const endpoint = 'api/master-file/import';
        const headers = {
          'Content-Type': 'application/json',
          headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_5__["getHeader"])()
        };
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_12__["default"].get(endpoint, headers);
        const {
          data
        } = response;
        let lastUploadedReportDate = data && data.data ? new Date(data.data.date).toDateString() : '';
        lastUploadedReportDate = this.formatDate(lastUploadedReportDate);
        this.setState({
          hasUploadedReport: data.status,
          lastUploadedReportDate: data && data.data ? Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(data.data.date), 'MM/dd/yyyy') : '',
          chains: data && data.data ? data.data.chains : []
        }, () => {
          const chainCheckbox = document.querySelectorAll('.chain-checkbox');
          for (let checkbox of chainCheckbox) {
            if (!checkbox.checked) {
              checkbox.checked = true;
            }
          }
        });
      } catch (error) {
        console.log('aaa - error: ', error);
      }
    });
    _defineProperty(this, "getEquivalences", async () => {
      try {
        event.preventDefault();
        const {
          chains,
          chainFilter,
          equivalences,
          from,
          to
        } = this.state;
        const endpoint = 'api/master-file/compare';
        let request = {
          fromDate: this.formatDate(from),
          toDate: this.formatDate(to),
          chains: chainFilter.length ? chainFilter : chains.map(chain => chain.id),
          equivalences
        };
        for (let barcode in equivalences) {
          request.equivalences[barcode] = equivalences[barcode].filter(barcode => barcode);
          if (!request.equivalences[barcode].length) {
            delete request.equivalences[barcode];
          }
        }
        const headers = {
          'Content-Type': 'application/json',
          headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_5__["getHeader"])()
        };
        delete request.equivalences;
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_12__["default"].post(endpoint, request, headers);
        const {
          data: {
            count,
            product_differences,
            resume
          }
        } = response;
        this.setState({
          count,
          differences: product_differences,
          resume,
          chainFilter: request.chains,
          showFormTable: false
        });
      } catch (error) {
        console.log('aaa - error: ', error);
      }
    });
    _defineProperty(this, "downloadReport", async (disableDateFilter = false) => {
      try {
        event.preventDefault();
        const {
          chains,
          chainFilter,
          equivalences,
          from,
          to
        } = this.state;
        const endpoint = 'api/master-file/compare';
        let request = {
          fromDate: disableDateFilter ? '' : this.formatDate(from),
          toDate: disableDateFilter ? '' : this.formatDate(to),
          csv: true,
          chains: chainFilter.length ? chainFilter : chains.map(chain => chain.id),
          equivalences
        };
        for (let barcode in equivalences) {
          request.equivalences[barcode] = equivalences[barcode].filter(barcode => barcode);
          if (!request.equivalences[barcode].length) {
            delete request.equivalences[barcode];
          }
        }
        const headers = {
          'Content-Type': 'application/json',
          headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_5__["getHeader"])()
        };
        delete request.equivalences;
        this.setState({
          showLoader: true
        });
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_12__["default"].post(endpoint, request, headers);
        this.setState({
          showLoader: false
        });
        this.download(response.data);
      } catch (error) {
        console.log('aaa - error: ', error);
      }
    });
    _defineProperty(this, "fromDateHandler", date => {
      this.setState({
        from: date
      });
    });
    _defineProperty(this, "toDateHandler", date => {
      this.setState({
        to: date
      });
    });
    _defineProperty(this, "chainCheckboxHandler", event => {
      const {
        value,
        checked
      } = event.target;
      const {
        chainFilter
      } = this.state;
      const chainIndex = chainFilter.findIndex(chainId => chainId == value);
      if (!checked) {
        chainFilter.splice(chainIndex, 1);
      }
      if (checked) {
        chainFilter.push(parseInt(value));
      }
    });
  }
  componentDidMount() {
    const hasDarkTheme = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_5__["getDarkTheme"])() === '1' ? true : false;
    const isCustom = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_5__["IsCustomTheme"])();
    if (hasDarkTheme) {
      document.querySelector('body').classList.remove('custom');
      document.querySelector('body').classList.add('darkmode');
    }
    if (isCustom) {
      const theme = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_5__["getTheme"])();
      const currentTheme = Object(_utils_theme__WEBPACK_IMPORTED_MODULE_6__["buildTheme"])(theme);
      const style = document.createElement('style');
      style.innerHTML = currentTheme;
      document.body.appendChild(style);
      document.querySelector('body').classList.add('custom');
    }
    this.getReportStatus();
    Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_5__["validateSession"])();
  }
  download(res, type = 'text/csv;charset=utf-8;', extension = 'csv') {
    const url = window.URL.createObjectURL(new Blob(["\ufeff", res], {
      type
    }));
    const date = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(new Date(), 'MM-dd-yyyy-HH:mm');
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `statistic-report-${date}.${extension}`);
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  }
  formatDate(date) {
    if (date) {
      date = new Date(date);
      let month = '' + (date.getMonth() + 1);
      let day = '' + date.getDate();
      let year = date.getFullYear();
      if (month.length < 2) {
        month = '0' + month;
      }
      if (day.length < 2) {
        day = '0' + day;
      }
      return `${year}-${month}-${day}`;
    }
    return '';
  }
  render() {
    const {
      onFileChangeMessage,
      onFileChangeError,
      products,
      chains,
      differences,
      showFormTable,
      from,
      to,
      hasUploadedReport,
      lastUploadedReportDate,
      showLoader
    } = this.state;
    const locale = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_5__["getLocale"])();
    const formTableProps = {
      barcodeFieldHandler: this.barcodeFieldHandler,
      clearBarcodes: this.clearBarcodes,
      getEquivalences: this.getEquivalences,
      chains,
      products
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 369,
        columnNumber: 13
      }
    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_8__["Header"], {
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 370,
        columnNumber: 17
      }
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 372,
        columnNumber: 17
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 21
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["getI18nLabel"])(locale, 'statisticReport.title'))), __jsx("div", {
      className: "container-fluid",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 378,
        columnNumber: 17
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 21
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["getI18nLabel"])(locale, 'statisticReport.title')), hasUploadedReport && __jsx("div", {
      className: _statistic_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.reportStatus,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 382,
        columnNumber: 25
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 383,
        columnNumber: 29
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 29
      }
    }), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 385,
        columnNumber: 29
      }
    }, " 1) Selecci\xF3n de lista de productos"), __jsx("div", {
      className: "update-info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 386,
        columnNumber: 29
      }
    }, __jsx("h4", {
      className: "update-info-title",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 33
      }
    }, "\xDAltima actualizaci\xF3n del listado: ", lastUploadedReportDate), __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_9__["SecondaryButton"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["getI18nLabel"])(locale, 'advancedSearch.actions.getCurrentReport'),
      onClick: () => this.downloadReport(true),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 390,
        columnNumber: 33
      }
    }))), __jsx("div", {
      className: _statistic_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.fileUpload,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 21
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 399,
        columnNumber: 25
      }
    }, "\xBFDesea subir una lista nueva?"), __jsx("div", {
      className: "input-file-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 401,
        columnNumber: 25
      }
    }, __jsx("input", {
      className: "input-file",
      type: "file",
      onChange: this.onFileChange,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 29
      }
    }), onFileChangeMessage && __jsx("p", {
      className: onFileChangeError ? 'input-file-error' : 'input-file-success',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 404,
        columnNumber: 33
      }
    }, onFileChangeMessage))), chains.length ? __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-md-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 33
      }
    }, __jsx("h4", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 37
      }
    }, "2) Selecciona un periodo para comparar precios")), __jsx("div", {
      className: "col-md-7",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "fromDate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 37
      }
    }, __jsx(_components_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["getI18nLabel"])(locale, 'captures.filters.startDate'),
      selected: from,
      inlineLabel: true,
      onSelect: this.fromDateHandler,
      placeholder: "dd/mm/yyyy",
      dateFormat: "dd/MM/yyyy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "toDate",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 37
      }
    }, __jsx(_components_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_11__["default"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["getI18nLabel"])(locale, 'captures.filters.endDate'),
      selected: to,
      inlineLabel: true,
      onSelect: this.toDateHandler,
      placeholder: "dd/mm/yyyy",
      dateFormat: "dd/MM/yyyy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 41
      }
    })))), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "col-md-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 442,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "col-md-7 search-button-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 445,
        columnNumber: 33
      }
    }, __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_9__["PrimaryButton"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["getI18nLabel"])(locale, 'advancedSearch.actions.generateReport'),
      onClick: () => this.getEquivalences(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 37
      }
    }), "\xA0\xA0", __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_9__["PrimaryButton"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_7__["getI18nLabel"])(locale, 'advancedSearch.actions.download'),
      onClick: () => this.downloadReport(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 37
      }
    })))) : null, products.length && showFormTable ? __jsx(_component_statistic_form_table__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({}, formTableProps, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 460,
        columnNumber: 58
      }
    })) : false, differences.length ? __jsx("div", {
      className: "report-table-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 463,
        columnNumber: 25
      }
    }, __jsx("table", {
      className: _statistic_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.reportTable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 29
      }
    }, __jsx("thead", {
      className: "report-table-sticky-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 33
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 37
      }
    }, __jsx("th", {
      className: "chain-3b item-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 41
      }
    }, "Item"), __jsx("th", {
      className: "chain-3b code-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 41
      }
    }, "Clave de producto 3B"), __jsx("th", {
      className: "chain-3b barcode-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 41
      }
    }, "C\xF3digo de barras"), __jsx("th", {
      className: "chain-3b description-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 476,
        columnNumber: 41
      }
    }, "Descripci\xF3n 3B"), __jsx("th", {
      className: "chain-3b content-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 41
      }
    }, "Contenido"), __jsx("th", {
      className: "chain-3b unit-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 482,
        columnNumber: 41
      }
    }, "Unidad"), __jsx("th", {
      className: "chain-3b type-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 41
      }
    }, "Tipo"), __jsx("th", {
      className: "chain-3b status-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 41
      }
    }, "Estatus"), __jsx("th", {
      className: "chain-3b price-col",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 491,
        columnNumber: 41
      }
    }, "Precio de venta 3B"), chains.map((chain, index) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 45
      }
    }, __jsx("th", {
      className: "chain-header-container",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 496,
        columnNumber: 49
      }
    }, __jsx("div", {
      className: "chain-header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 53
      }
    }, __jsx("h1", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 57
      }
    }, " ", chain.name, " "), __jsx("table", {
      className: "chain-header-table",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 57
      }
    }, __jsx("thead", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 61
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 65
      }
    }, __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 69
      }
    }, " Precio de venta ", chain.name, " "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 69
      }
    }, " Gramaje "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 69
      }
    }, " Unidad "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 505,
        columnNumber: 69
      }
    }, " Descripci\xF3n "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 69
      }
    }, " C\xF3digo de barras "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 69
      }
    }, " Precio comparado "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 69
      }
    }, " Diferencia en pesos "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 509,
        columnNumber: 69
      }
    }, " Porcentaje de diferencia "), __jsx("th", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 510,
        columnNumber: 69
      }
    }, " Capturas ")))))))))), __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 521,
        columnNumber: 33
      }
    }, differences.map((difference, index) => __jsx("tr", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 41
      }
    }, __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 45
      }
    }, difference.item), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 527,
        columnNumber: 45
      }
    }, difference.keycode), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 45
      }
    }, difference.barcode), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 45
      }
    }, difference.description), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 536,
        columnNumber: 45
      }
    }, difference.unit_quantity), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 45
      }
    }, difference.unit), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 45
      }
    }, difference.type), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 545,
        columnNumber: 45
      }
    }, difference.status), __jsx("td", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 45
      }
    }, difference.price ? `$${difference.price}` : ''), difference.comparations.map((comparation, index) => __jsx("td", {
      key: index,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 49
      }
    }, __jsx("table", {
      className: _statistic_module_scss__WEBPACK_IMPORTED_MODULE_13___default.a.reportTable,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 553,
        columnNumber: 53
      }
    }, __jsx("tbody", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 554,
        columnNumber: 57
      }
    }, __jsx("tr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 61
      }
    }, __jsx("td", {
      className: "field field-barcode",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 65
      }
    }, " ", comparation.chain_price ? `$${comparation.chain_price}` : '', " "), __jsx("td", {
      className: "field field-grammage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 65
      }
    }, " ", comparation.grammage, " "), __jsx("td", {
      className: "field field-unit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 558,
        columnNumber: 65
      }
    }, " ", comparation.unit, " "), __jsx("td", {
      className: "field field-unit_price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 559,
        columnNumber: 65
      }
    }, " ", comparation.description, " "), __jsx("td", {
      className: "field field-price",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 65
      }
    }, " ", comparation.barcode, " "), __jsx("td", {
      className: "field field-barcode",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 65
      }
    }, " ", comparation.compared_price ? `$${comparation.compared_price}` : '', " "), __jsx("td", {
      className: "field field-difference",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562,
        columnNumber: 65
      }
    }, " ", comparation.difference ? `$${comparation.difference}` : '', " "), __jsx("td", {
      className: "field field-percentage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 563,
        columnNumber: 65
      }
    }, " ", comparation.percentage, " "), __jsx("td", {
      className: "field field-total_of_scans",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 65
      }
    }, " ", comparation.total_of_scans, " "))))))))))) : false), __jsx(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_4__["default"], {
      show: showLoader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 17
      }
    }));
  }
}
const withRouter = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(StatisticReport, _extends({}, props, {
    router: router,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 586,
      columnNumber: 12
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (withRouter);

/***/ }),

/***/ "./utils/api.ts":
/*!**********************!*\
  !*** ./utils/api.ts ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.ts");


/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: _baseUrl__WEBPACK_IMPORTED_MODULE_1__["baseURL"],
  withCredentials: false
  //timeout: 1000
}));

/***/ }),

/***/ "./utils/baseUrl.ts":
/*!**************************!*\
  !*** ./utils/baseUrl.ts ***!
  \**************************/
/*! exports provided: baseURL, baseURLGeoref, georefApiKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURLGeoref", function() { return baseURLGeoref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "georefApiKey", function() { return georefApiKey; });
const baseURL = "http://192.200.2.169:8000";
const baseURLGeoref = "https://pricecheck-location-api-dev.yema.mx/";
const georefApiKey = "8870826a-ebca-4866-8c52-9f962b50de09";

/***/ }),

/***/ "./utils/session-management.ts":
/*!*************************************!*\
  !*** ./utils/session-management.ts ***!
  \*************************************/
/*! exports provided: getLogo, IsCustomTheme, createSession, deleteSession, getToken, getName, getProfilePicture, getRoles, validateSession, getHeader, getId, getDarkTheme, getLocale, validateIsAnalyst, getTheme, validateIsAdmin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLogo", function() { return getLogo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IsCustomTheme", function() { return IsCustomTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSession", function() { return createSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSession", function() { return deleteSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getName", function() { return getName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProfilePicture", function() { return getProfilePicture; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRoles", function() { return getRoles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateSession", function() { return validateSession; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHeader", function() { return getHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getId", function() { return getId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDarkTheme", function() { return getDarkTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocale", function() { return getLocale; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIsAnalyst", function() { return validateIsAnalyst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTheme", function() { return getTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateIsAdmin", function() { return validateIsAdmin; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);

const createSession = (token, name, rol, profilePictre, id, dark_theme, theme, logo, locale) => {
  localStorage.setItem('token', token);
  localStorage.setItem('name', name);
  localStorage.setItem('rol', rol.join('|'));
  localStorage.setItem('id', id);
  localStorage.setItem('dark_theme', dark_theme.toString());
  localStorage.setItem('locale', locale);
  if (theme !== null || !theme) {
    localStorage.setItem('theme', JSON.stringify(theme));
  } else {
    localStorage.setItem('theme', JSON.stringify({}));
  }
  if (profilePictre && profilePictre.length > 0) {
    localStorage.setItem('profilePicture', `https://cdn-pricecheck.sfo2.digitaloceanspaces.com/${profilePictre}`);
  }
  if (logo && logo.length > 0) {
    localStorage.setItem('logo', `https://lampt3bdiag.blob.core.windows.net/pricecheckv2/${logo}`);
  } else {
    localStorage.setItem('logo', `/img/logo.png`);
  }
};
const deleteSession = () => {
  localStorage.removeItem('locale');
  localStorage.removeItem('dark_theme');
  localStorage.removeItem('token');
  localStorage.removeItem('name');
  localStorage.removeItem('rol');
  localStorage.setItem('logo', `/img/logo.png`);
  localStorage.removeItem('profilePicture');
  localStorage.removeItem('theme');
};
const getToken = () => localStorage.getItem('token');
const getName = () => localStorage.getItem('name');
const getId = () => localStorage.getItem('id');
const getDarkTheme = () => localStorage.getItem('dark_theme');
const getLocale = () => {
  const isBrowser = () => false;
  const hasLocale = () => localStorage.getItem('locale') || false;
  let locale = 'es';
  if (isBrowser() && hasLocale()) {
    locale = localStorage.getItem('locale') || locale;
  }
  return locale;
};
const getProfilePicture = () => localStorage.getItem('profilePicture');
const getRoles = () => {
  const roles = localStorage.getItem('rol');
  if (roles) return roles.split('|');
  return null;
};
const validateSession = newRoute => {
  if (!localStorage.getItem('token')) {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/login');
  } else if (newRoute) {
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push(newRoute);
  }
};
const getHeader = () => {
  const token = localStorage.getItem('token');
  return {
    Authorization: `Bearer ${token}`
  };
};
const validateIsAnalyst = () => {
  let role = '';
  if (false) {}
  const validation = role === 'Analista';
  return validation;
};
const validateIsAdmin = () => {
  let role = '';
  if (false) {}
  return role === 'Admin';
};
const getLogo = () => {
  let logo = "/img/logo.png";
  if (false) {}
  return logo;
};
const IsCustomTheme = () => {
  let isCustom = false;
  let theme = "";
  let objTheme = {};
  if (false) {}
  return isCustom;
};
const getTheme = () => {
  let theme = "";
  let objTheme = {};
  if (false) {}
  return objTheme;
};


/***/ }),

/***/ "./utils/theme.ts":
/*!************************!*\
  !*** ./utils/theme.ts ***!
  \************************/
/*! exports provided: buildTheme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildTheme", function() { return buildTheme; });
const LightenDarkenColor = (col, amt) => {
  let usePound = false;
  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }
  let num = parseInt(col, 16);
  let r = (num >> 16) + amt;
  if (r > 255) r = 255;else if (r < 0) r = 0;
  let b = (num >> 8 & 0x00FF) + amt;
  if (b > 255) b = 255;else if (b < 0) b = 0;
  let g = (num & 0x0000FF) + amt;
  if (g > 255) g = 255;else if (g < 0) g = 0;
  return (usePound ? "#" : "") + (g | b << 8 | r << 16).toString(16);
};
const buildTheme = theme => {
  if (theme && Object.keys(theme).length !== 0) {
    const lighten = (theme === null || theme === void 0 ? void 0 : theme.wallpaper) && `${LightenDarkenColor(theme.wallpaper, 20)} !important`;
    const darken = (theme === null || theme === void 0 ? void 0 : theme.wallpaper) && `${LightenDarkenColor(theme.wallpaper, -20)} !important`;
    const fontDarken = (theme === null || theme === void 0 ? void 0 : theme.text) && `${LightenDarkenColor(theme.text, -20)} !important`;
    const fontLighter = (theme === null || theme === void 0 ? void 0 : theme.text) && `${LightenDarkenColor(theme.text, 60)} !important`;
    return `
        .custom {
            --bgColor: ${theme.wallpaper};
            --font: ${theme.font};
            --textColor: ${theme.text};
            --bgBtnPrimary: ${theme.primary_button};
            --bgBtnSecondary: ${theme.secondary_button};
            --btnPrimaryText: ${theme.primary_text};
            --btnSecondaryText: ${theme.secondary_text};
    
            color: var(--textColor) !important;
            font-family: var(--font) !important;
            background-color: var(--bgColor) !important;
       }
        .custom-font, .custom-block-woodsmoke, .custom [class^='home_messageNoElementsContainer'], .custom [class^='header_header'], .custom [class^='header_optionsList'], .custom [class^='header_leftContainer'], .custom [class^='header_dropdown'], .custom [class^='advanced-search_container'], .custom [class^="input_input"], .custom [class^="advanced-search_inputSearch"], .custom [class^='modal_modal_'], .custom [class^="select_select"], .custom [class^="react-datepicker-popper"], .custom [class^="home_dataContainer"], .custom [class^="home_historyContainer"], .custom [class^="home_productDataContainerCompleted"], .custom [class^="home_productDataContainer"], .custom [class^="home_scannerDataContainer"], .custom [class^="modal_dialogModal"], .custom [class^="productDetails_price"], .custom [class^="productCompareDetails_graphContainer"], .custom [class^="productDetails_graphContainer"], .custom [class^="detailsContainer_details"], .custom [class^="react-datepicker-popper"] .react-datepicker__header, .custom [class^="react-datepicker-popper"] .react-datepicker, .custom-font *, .custom-block-woodsmoke *, .custom [class^='home_messageNoElementsContainer'] *, .custom [class^='header_header'] *, .custom [class^='header_optionsList'] *, .custom [class^='header_leftContainer'] *, .custom [class^='header_dropdown'] *, .custom [class^='advanced-search_container'] *, .custom [class^="input_input"] *, .custom [class^="advanced-search_inputSearch"] *, .custom [class^='modal_modal_'] *, .custom [class^="select_select"] *, .custom [class^="react-datepicker-popper"] *, .custom [class^="home_dataContainer"] *, .custom [class^="home_historyContainer"] *, .custom [class^="home_productDataContainerCompleted"] *, .custom [class^="home_productDataContainer"] *, .custom [class^="home_scannerDataContainer"] *, .custom [class^="modal_dialogModal"] *, .custom [class^="productDetails_price"] *, .custom [class^="productCompareDetails_graphContainer"] *, .custom [class^="productDetails_graphContainer"] *, .custom [class^="detailsContainer_details"] *, .custom [class^="react-datepicker-popper"] .react-datepicker__header *, .custom [class^="react-datepicker-popper"] .react-datepicker * {
            color: var(--textColor) !important;
       }
        .custom-block-woodsmoke, .custom [class^='home_messageNoElementsContainer'], .custom [class^='header_header'], .custom [class^='header_optionsList'], .custom [class^='header_leftContainer'], .custom [class^='header_dropdown'], .custom [class^='advanced-search_container'], .custom [class^="input_input"], .custom [class^="advanced-search_inputSearch"], .custom [class^='modal_modal_'], .custom [class^="select_select"], .custom [class^="react-datepicker-popper"], .custom [class^="home_dataContainer"], .custom [class^="home_historyContainer"], .custom [class^="home_productDataContainerCompleted"], .custom [class^="home_productDataContainer"], .custom [class^="home_scannerDataContainer"], .custom [class^="modal_dialogModal"], .custom [class^="productDetails_price"], .custom [class^="productCompareDetails_graphContainer"], .custom [class^="productDetails_graphContainer"], .custom [class^="detailsContainer_details"], .custom [class^="react-datepicker-popper"] .react-datepicker__header, .custom [class^="react-datepicker-popper"] .react-datepicker {
            background: var(--bgColor)!important;
       }
        .custom-link, .custom a, .custom [class^='home_messageNoElementsContainer'], .custom [class^='header_header'], .custom [class^='header_optionsList'], .custom [class^='header_leftContainer'], .custom [class^='header_dropdown'], .custom [class^='advanced-search_container'], .custom [class^="input_input"], .custom [class^="advanced-search_inputSearch"], .custom [class^='modal_modal_'], .custom [class^="select_select"], .custom [class^="react-datepicker-popper"], .custom [class^='home_messageNoElementsContainer'] a, .custom [class^='header_header'] a, .custom [class^='header_optionsList'] a, .custom [class^='header_leftContainer'] a, .custom [class^='header_dropdown'] a, .custom [class^='advanced-search_container'] a, .custom [class^="input_input"] a, .custom [class^="advanced-search_inputSearch"] a, .custom [class^='modal_modal_'] a, .custom [class^="select_select"] a, .custom [class^="react-datepicker-popper"] a {
            color: ${fontLighter};
       }
        .custom-link:hover, .custom a:hover, .custom [class^='home_messageNoElementsContainer']:hover, .custom [class^='header_header']:hover, .custom [class^='header_optionsList']:hover, .custom [class^='header_leftContainer']:hover, .custom [class^='header_dropdown']:hover, .custom [class^='advanced-search_container']:hover, .custom [class^="input_input"]:hover, .custom [class^="advanced-search_inputSearch"]:hover, .custom [class^='modal_modal_']:hover, .custom [class^="select_select"]:hover, .custom [class^="react-datepicker-popper"]:hover, .custom [class^='home_messageNoElementsContainer'] a:hover, .custom [class^='header_header'] a:hover, .custom [class^='header_optionsList'] a:hover, .custom [class^='header_leftContainer'] a:hover, .custom [class^='header_dropdown'] a:hover, .custom [class^='advanced-search_container'] a:hover, .custom [class^="input_input"] a:hover, .custom [class^="advanced-search_inputSearch"] a:hover, .custom [class^='modal_modal_'] a:hover, .custom [class^="select_select"] a:hover, .custom [class^="react-datepicker-popper"] a:hover {
            color: ${fontLighter};
       }
        .custom [class^="home_historyContainer"]:not(.productHistoryContainer) [class^="square_square"] {
            color: var(--textColor) !important;
            background: var(--bgColor) !important;
       }
        .custom [class^='optionList_tabBar'] [class^='optionList_selected'] {
            background: var(--bgColor) !important;
       }
        .custom [class^='optionList_tabBar'] li {
            background: var(--bgColor) !important;
       }
        .custom .table, .custom [class^='table_tableComplex'] {
            background: ${lighten};
            color: ${fontDarken};
            box-shadow: 0px 10px 10px -6px black;
            
       }
        .custom .table th, .custom [class^='table_tableComplex'] th {
            background: ${darken};

       }
        .custom .table tr:nth-child(odd), .custom [class^='table_tableComplex'] tr:nth-child(odd) {
            background: ${lighten};
       }
        .custom [class^="modal_dialogModalContainer"], .custom [class^="modal_modalContainer"] {
            background: ${lighten};
       }
        .custom [class^="input_blackInput"] {
            color: var(--btnPrimaryText) !important;
            background: var(--bgBtnPrimary) !important;
       }
        .custom [class^="button_primaryButton__27mbY"] {
            color: var(--btnPrimaryText) !important;
            background: var(--bgBtnPrimary) !important;
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            padding: 0.5em;
            width: 100%;
            border: 2px solid var(--bgBtnPrimary) !important;
            border-radius: 0.5rem;
       }
       .custom [class^="button_secondaryButton__1N1vM"] {
            color: var(--btnSecondaryText) !important;
            background: var(--bgBtnSecondary) !important;
            text-align: center;
            text-transform: uppercase;
            font-weight: bold;
            padding: 0.5em;
            width: 100%;
            border: 2px solid ;
            border-radius: 0.5rem;
        }
        .custom [class^="home_capturesList"] p {
            color: var(--textColor) !important;
       }
        .custom [class^="home_capturesList"] p[class^="home_withProduct"] {
            color: var(--btnSecondaryText) !important;
       }
        .custom [class^="react-datepicker-popper"] .react-datepicker__day--keyboard-selected {
            background: #de3c26 !important;
       }
        .custom [class^="react-datepicker-popper"] .react-datepicker__day:hover {
            background: #1f2223 !important;
       }
       .custom [class^="home_messageNoElementsContainer__1q9IW"] {
            background: var(--bgBtnPrimary) !important;
            color: var(--btnPrimaryText) !important;
        }
        .custom [class^="btn-theme"] {
            background: var(--bgBtnPrimary) !important;
            color: var(--btnPrimaryText) !important;
        }
        .custom [class^="btn"] {
            background: var(--bgBtnPrimary) !important;
            color: var(--btnPrimaryText) !important;
        }
        .custom [class^="input_errorMessage__16yxH"] {
            color: red !important;
        }
        .current-product {
            background: var(--bgBtnPrimary) !important;
        }

        .custom .react-autosuggest__input::placeholder {  
            color: ${fontLighter};
        }
        .custom .react-autosuggest__input {
            min-width: 100%;
            width: 100%;
            height: 30px;
            font-family: "Catamaran", sans-serif;
            font-weight: 300;
            font-size: 0.9em;
            border: none;
            color: ${fontLighter};
            border-bottom: 1px solid #565656;
            border-radius: 0;
            -webkit-appearance: none;
            background-color: transparent;
          }
          .product-report_divContent__2U1XK {
            background: var(--bgBtnPrimary) !important;
          }
          .card_text-border__aIQRZ {
            color: var(--textColor) !important;
            font-weight: bold !important;
          }
          .card_border-product__3pKKS {
            color: var(--textColor) !important;
          }
          .product-report_tags__OG2vn {
            border: 2px solid ${fontLighter};
          }
          .product-report_btnToggle__1IR7O {
            color: var(--textColor) !important; 
          }
    `;
  }
  return "";
};

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns");

/***/ }),

/***/ "lodash.get":
/*!*****************************!*\
  !*** external "lodash.get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.get");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-datepicker":
/*!***********************************!*\
  !*** external "react-datepicker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-datepicker");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmFja2Ryb3AvQmFja2Ryb3AudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYmFja2Ryb3AvYmFja2Ryb3AubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL1ByaW1hcnlCdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9TZWNvbmRhcnlCdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L2lucHV0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9hZGVyL0xvYWRlci50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sb2FkZXIvbG9hZGVyLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2kxOG4vZW4vYWR2YW5jZWQtc2VhcmNoLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vYnJhbmRzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9jYXB0dXJlLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vY2FwdHVyZXMudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9jYXRhbG9ncy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2NoYWlucy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vZ3JhcGgtdGFiLWNvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9ncmFwaC10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9ncm91cHMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2xpbmVzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9taXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL25hdmJhci50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL3Byb2R1Y3QtcmVwb3J0LnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vcHJvZHVjdC10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vcmFua2luZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9yZWdpb25zLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9zY2FubmVycy10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9zY2Fucy1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi90YWJsZS10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi90YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL3VuaXRzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi91c2Vycy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vdmFsaWRhdG9ycy10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9hZHZhbmNlZC1zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9icmFuZHMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2NhcHR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9jYXB0dXJlcy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2NhdGFsb2dzLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvY2hhaW5zLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9ncmFwaC10YWItY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2dyYXBoLXRhYi50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2dyb3Vwcy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvbGluZXMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL21pc3Npb25zLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvbmF2YmFyLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvcHJvZHVjdC1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9wcm9kdWN0LXRhYi50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9wcm9kdWN0cy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9yYW5raW5ncy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3JlZ2lvbnMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3NjYW5uZXJzLXRhYi50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3NjYW5zLXJlcG9ydC50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3N0YXRpc3RpYy1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy90YWJsZS10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy90YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3VuaXRzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy91c2Vycy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvdmFsaWRhdG9ycy10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvcmVwb3J0cy9jb21wb25lbnQvc3RhdGlzdGljLmZvcm0tdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9yZXBvcnRzL3N0YXRpc3RpYy5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL3JlcG9ydHMvc3RhdGlzdGljLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYmFzZVVybC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9zZXNzaW9uLW1hbmFnZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZuc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImxvZGFzaC5nZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZGF0ZXBpY2tlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiXSwibmFtZXMiOlsiQmFja2Ryb3AiLCJkaXNwbGF5IiwiY2hpbGRyZW4iLCJfX2pzeCIsInN0eWxlIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiX19zZWxmIiwiX19zb3VyY2UiLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJQcmltYXJ5QnV0dG9uVmFyaWFudCIsIlByaW1hcnlCdXR0b24iLCJ0YWJpbmRleCIsImxhYmVsIiwidHlwZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJidXR0b25DbGFzcyIsIkVycm9yIiwicHJpbWFyeUJ1dHRvbkVycm9yIiwicHJpbWFyeUJ1dHRvbiIsInRhYkluZGV4IiwiZGVmYXVsdFByb3BzIiwiU3VjY2VzcyIsIlNlY29uZGFyeUJ1dHRvblZhcmlhbnQiLCJTZWNvbmRhcnlCdXR0b24iLCJub0JvcmRlciIsInNlY29uZGFyeUJ1dHRvbiIsInNlY29uZGFyeUJ1dHRvbkVycm9yIiwiYm9yZGVyIiwiRGF0ZXBpY2tlciIsIlB1cmVDb21wb25lbnQiLCJyZW5kZXIiLCJzZWxlY3RlZCIsIm9uU2VsZWN0IiwicGxhY2Vob2xkZXIiLCJkYXRlRm9ybWF0IiwiZXJyb3JNc2ciLCJpc0xhYmVsIiwiaW5saW5lTGFiZWwiLCJwcm9wcyIsImlubGluZUxhYmVsQ2xhc3MiLCJpbnB1dENvbnRhaW5lciIsImlucHV0TGluZUNvbnRhaW5lciIsIkRhdGVQaWNrZXIiLCJpbnB1dCIsInBsYWNlaG9sZGVyVGV4dCIsImVycm9yTWVzc2FnZSIsIl9kZWZpbmVQcm9wZXJ0eSIsIkhlYWRlciIsImNvbnN0cnVjdG9yIiwiYXJncyIsIm5hbWUiLCJwcm9maWxlUGljdHVyZSIsInNob3dNZW51IiwiaG93U2hvd01lbnUiLCJpc0FuYWx5c3QiLCJsb2dvIiwiZSIsImtleSIsIndoaWNoIiwia2V5Q29kZSIsImN0cmwiLCJjdHJsS2V5Iiwic3RhdGUiLCJzZXRTdGF0ZSIsImRlbGV0ZVNlc3Npb24iLCJSb3V0ZXIiLCJwdXNoIiwiY29tcG9uZW50RGlkTW91bnQiLCJyb2xBbmFseXN0IiwidmFsaWRhdGVJc0FuYWx5c3QiLCJnZXRMb2dvIiwiZ2V0TmFtZSIsImdldFByb2ZpbGVQaWN0dXJlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleWRvd24iLCJjb21wb25lbnRXaWxsVW5tb3VudCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJsb2NhbGUiLCJnZXRMb2NhbGUiLCJoZWFkZXIiLCJMaW5rIiwiaHJlZiIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0Iiwib3B0aW9uc0xpc3QiLCJvcHRpb25EaXNhYmxlZCIsIm9wdGlvbiIsImdldEkxOG5MYWJlbCIsImRyb3Bkb3duIiwiRm9udEF3ZXNvbWVJY29uIiwidHJpYW5nbGUiLCJpY29uIiwiZmFDYXJldERvd24iLCJsZWZ0Q29udGFpbmVyIiwiY29uZmlndXJhdGlvbiIsImZhQ29nIiwicHJvZmlsZSIsImRlZmF1bHRJbWciLCJmYVVzZXIiLCJjbG9zZVNlc3Npb24iLCJ3aXRoUm91dGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiX2V4dGVuZHMiLCJMb2FkZXIiLCJzaG93IiwibG9hZGVyQ29udGFpbmVyIiwiZmlsdGVycyIsInNlYXJjaEZpZWxkIiwiYWN0aW9ucyIsInNlYXJjaCIsImNsZWFuRmlsdGVyIiwiZG93bmxvYWQiLCJjb21wYXJhdGl2ZUNoYXJ0IiwiZ2VvcmVmZXJlbmNlIiwiZ2V0Q3VycmVudFJlcG9ydCIsInRpdGxlIiwidGFibGUiLCJoZWFkZXJzIiwidG9hc3QiLCJzdWNjZXNzIiwiZXJyb3IiLCJtZXNzYWdlIiwiY3JlYXRlQnJhbmQiLCJkZWxldGVCcmFuZCIsImVkaXRCcmFuZCIsImRvd25sb2FkRGF0YSIsIm1vZGFsIiwiY3JlYXRlTW9kYWwiLCJzZWFyY2hCeU5hbWUiLCJlZGl0TW9kYWwiLCJhZGQiLCJvcHRpb25zIiwic2F2ZSIsImNyZWF0ZSIsImNhcHR1cmVJZCIsInByaWNlIiwicHJpY2VXaXRoUHJvbW90aW9uIiwiYmFyY29kZSIsImJyYW5kIiwidW5pdCIsInN0b3JlIiwiZ3JvdXAiLCJsaW5lIiwiYW1vdW50IiwiY2FwdHVyZURhdGUiLCJzdGF0dXMiLCJzY2FubmVkQnkiLCJyZXZpZXdlZCIsImJyYW5jaE9mZmljZSIsIm1haW5JbWFnZSIsInByaWNlSW1hZ2UiLCJkZXRhaWxzQ29udGFpbmVyIiwiY2hhbmdlSW1hZ2UiLCJlZGl0SW5mb3JtYXRpb24iLCJzYXZlSW5mb3JtYXRpb24iLCJjYW5jZWxJbmZvcm1hdGlvbiIsInN0YXJ0RGF0ZSIsImVuZERhdGUiLCJ3aXRoSW1hZ2UiLCJ3aXRob3V0SW1hZ2UiLCJzdGF0dXNSZWplY3RlZCIsIm5vcm1hbFByaWNlIiwic3RhdHVzUGVuZGluZyIsInN0YXR1c1ZhbGlkYXRlZCIsInBhcmFtIiwidmFsdWUiLCJnZW9sb2NhbGl0YXRpb24iLCJleHBvcnRHZW9EYXRhIiwib3B0aW9uc0NhdGFsb2ciLCJicmFuZHNDYXRhbG9nIiwiZ3JvdXBzQ2F0YWxvZyIsImxpbmVzQ2F0YWxvZyIsInN0b3Jlc0NhdGFsb2ciLCJ1bml0c0NhdGFsb2ciLCJoZWFkIiwiaWQiLCJwaG90b19tYWluIiwicGhvdG9fcHJpY2UiLCJwcm9kdWN0IiwiY2hhaW4iLCJicmFuY2giLCJzY2FubmVkX2J5IiwiZ3JhbW1hZ2VfcXVhbnRpdHkiLCJ1bml0X3ByaWNlIiwicHJvZHVjdF9jcmVhdGVkX2RhdGUiLCJsb3dlcl9wcmljZSIsImhpZ2hlc3RfcHJpY2UiLCJjYXB0dXJlX2RhdGUiLCJjYXB0dXJlX3ByaWNlIiwidmFsaWRhdGVkIiwicGVuZGluZyIsInVuaXRzIiwiY20iLCJtIiwibWwiLCJsdCIsIm1nIiwiZyIsImtnIiwicGllemEiLCJkZWxldGUiLCJidXR0b25BY2NlcHRMYWJlbCIsImJyYW5kcyIsInVuaXRpZXMiLCJncm91cHMiLCJsaW5lcyIsInJlZ2lvbiIsInVzZXJzIiwiYWxpYXMiLCJlZGl0IiwidGFicyIsInByaWNlTGlzdCIsInVuaXRhcnlQcmljZSIsImhpc3RvcnkiLCJkYXRlIiwiYWJicmV2aWF0aW9uIiwid2VsY29tZSIsInNpZGViYXIiLCJtaXNzaW9uIiwic2NhbkZpbHRlciIsImFsbCIsIndpdGhQcm9kdWN0Iiwid2l0aG91dFByb2R1Y3QiLCJzY2FuIiwidG9wQmFyIiwiYmVpbmdWYWxpZGF0ZWQiLCJ3aXRob3V0TnVtYmVyIiwid2l0aG91dE1pc3Npb24iLCJwcm9kdWN0SW1hZ2UiLCJwcm9tb3Rpb25QcmljZSIsImFkZHJlc3MiLCJhZGl0aW9uYWxDb21tZW50cyIsInNob3dQaWN0dXJlIiwicmVqZWN0IiwidmFsaWRhdGUiLCJ2YWxpZGF0ZUFuZEFkZCIsInN1YmplY3QiLCJzZW5kQ3JpdGVyaW9uIiwicmFkaW9NYXBGaXJzdCIsImJsdXJyeSIsImZhckF3YXkiLCJkYXJrIiwiaW5jb21wbGV0ZSIsImRvZXNudE1hdGNoIiwicmFkaW9TZWNvbmQiLCJvdXRzaWRlU2hvcCIsInNob3BUaWNrZXQiLCJhbm90aGVyQ2VsbCIsInRlc3RTY2FuIiwicmVjZW50IiwibW9zdEV4cGVuc2l2ZSIsImNoZWFwZXN0IiwiY2hlYXBlc3RXaXRoUHJvbW90aW9uIiwibmF2YmFyIiwiaG9tZSIsIm1pc3Npb25zIiwiY2FwdHVyZXMiLCJjYXB0dXJlIiwiY2F0YWxvZ3MiLCJwcm9kdWN0cyIsInJhbmtpbmdzIiwiZ3JhcGhUYWIiLCJhZHZhbmNlZFNlYXJjaCIsInRhYmxlVGFiIiwicHJvZHVjdFRhYiIsInNjYW5uZXJzVGFiIiwidmFsaWRhdG9yc1RhYiIsImNoYWluc0NhdGFsb2ciLCJyZWdpb25zQ2F0YWxvZyIsInVzZXJzQ2F0YWxvZyIsImdyYXBoVGFiQ29tcGFyZSIsInByb2R1Y3RSZXBvcnQiLCJzY2Fuc1JlcG9ydCIsIm5hbWVfbGluZSIsIm5hbWVfZ3JvdXAiLCJkZXNjcmlwdGlvbiIsImNhcHR1cmVfcG9pbnRzIiwibWlzc2lvbl9wb2ludHMiLCJzdGFydF9kYXRlIiwiZW5kX2RhdGUiLCJyZWdpb25zIiwiY3JlYXRlTWlzc2lvbiIsImR1cGxpY2F0ZWRNZXNzYWdlIiwiZGlhbG9nIiwiYWNlcHQiLCJjYW5jZWwiLCJ2YWxpZGF0aW9ucyIsInJlcXVpcmVkIiwibWluTGVuZ3RoIiwibWF4TGVuZ3RoIiwiZ3JlYXRlclRoYW4iLCJtaXNzaW9uUG9pbnRzIiwidmFsaWQiLCJjYXB0dXJlUG9pbnRzIiwiZWRpdFByb2ZpbGUiLCJzaWduT3V0IiwicmVwb3J0cyIsImdlb2xvY2FsaXphdGlvbiIsInN0YXRpc3RpYyIsInNjYW5zIiwibmV3U2VyYWNoIiwicGxhY2Vob2xkZXJTZWFyY2giLCJteUxpc3QiLCJnZW5lcmFsU2VhcmNoIiwic2F2ZUxpc3QiLCJncmFwaGljIiwiY2xlYXJHcmFwaGljIiwiZW1wdHlTdGF0ZSIsImVtcHRHcmFwaHlTdGF0ZSIsInNhdmVQcm9kdWN0cyIsInNhdmVQcm9kdWN0c0Vycm9yIiwicGFyYW1ldGVyIiwidmFsdWVzIiwiZGVsZXRlRmlsdGVycyIsIm5hbWVPckNvZGUiLCJzdWNjZXNzRG93bmxvYWQiLCJkZWxldGVGcm9tTGlzdCIsInN1Y2Nlc3NEZWxldGUiLCJlcnJvckRlbGV0ZSIsImVycm9yRG93bmxvYWQiLCJub1NlbGVjdGVkIiwiY2FyZCIsImdyYW1tYWdlIiwicmVjZW50bHkiLCJoaWdoZXIiLCJsb3dlciIsImxvd2VyUHJvbW90aW9uIiwiZGV0YWlsIiwicHJvZHVjdElkIiwibWluUHJpY2UiLCJtYXhQcmljZSIsImxpc3RQcmljZSIsInByaWNlSGlzdG9yeSIsInVwZGF0ZWRBdCIsImNyZWF0ZWRBdCIsInBob3RvIiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRfYXQiLCJwcm9tb3Rpb25fbG93ZXJfcHJpY2UiLCJsYXN0X3ByaWNlIiwicm9sZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJtb3RoZXJfbGFzdF9uYW1lIiwidGhlbWUiLCJlbXBsb3llZV9udW1iZXIiLCJjZWxscGhvbmUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY2xvc2UiLCJjYXB0dXJpc3RzIiwiY2xlYXJEYXRlIiwicG9zaXRpb24iLCJlbXBsb3llZU51bWJlciIsInBlcmNlbnRhZ2UiLCJ2YWxpZGF0ZWRDYXB0dXJlcyIsInBvaW50cyIsInZhbGlkYXRvcnMiLCJnZW5lcmF0ZURhdGEiLCJ0b3RhbCIsIm5vbWJyZSIsInJhbmtpbmciLCJlZmZpY2llbmN5IiwidmFsaWRhdGVkX2NhcHR1cmVzIiwiY3VycmVudFByaWNlIiwiYXZlcmFnZVByaWNlIiwic2VlSGlzdG9yeSIsImNhcHR1cmVkQXQiLCJ0YWdzIiwiYWRkVGFncyIsImFsbFJlZ2lvbnMiLCJlbWFpbCIsInJvbFNlbGVjdGVkIiwiZnVsbE5hbWUiLCJ1c2VyVmFsaWRhdGVzIiwiZ2VuZXJhdGVSZXBvcnQiLCJzdGF0aXN0aWNSZXBvcnQiLCJzY2FubmVyIiwibG9jYWxlcyIsImVzIiwiZW4iLCJnZXQiLCJ0cmFuc2xhdGVUYWJsZUhlYWRlciIsInBhdGgiLCJtYXAiLCJfb2JqZWN0U3ByZWFkIiwidHJhbnNsYXRlVGFibGVDb21wbGV4SGVhZGVyIiwiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJ0YXJnZXQiLCJjYiIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwicHJlZmV0Y2giLCJhcyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsInNoaWZ0S2V5IiwiYWx0S2V5IiwibmF0aXZlRXZlbnQiLCJsaW5rQ2xpY2tlZCIsInJlcGxhY2UiLCJzaGFsbG93Iiwic2Nyb2xsIiwibm9kZU5hbWUiLCJwcmV2ZW50RGVmYXVsdCIsImluZGV4T2YiLCJ0aGVuIiwic2Nyb2xsVG8iLCJkb2N1bWVudCIsImJvZHkiLCJmb2N1cyIsImNyZWF0ZVByb3BFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwidXNlUmVmIiwiY3VycmVudCIsIndhcm4iLCJwIiwiY2hpbGRFbG0iLCJzZXRDaGlsZEVsbSIsInVzZVN0YXRlIiwicGF0aG5hbWUiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInVzZUVmZmVjdCIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJyZWYiLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwibWFrZVB1YmxpY1JvdXRlckluc3RhbmNlIiwiX3JvdXRlciIsImluc3RhbmNlIiwicHJvcGVydHkiLCJhc3NpZ24iLCJBcnJheSIsImlzQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwicGF0aG5hbWVQYXJ0cyIsInNwbGl0Iiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwiam9pbiIsIm1pdHQiLCJoYW5kbGVyIiwib2ZmIiwiZW1pdCIsImV2dHMiLCJiYXNlUGF0aCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJjYW5jZWxsZWQiLCJhZGRQYXRoUHJlZml4IiwicHJlZml4Iiwic3RhcnRzV2l0aCIsImFkZExvY2FsZSIsImRlbExvY2FsZSIsInN1YnN0ciIsImxlbmd0aCIsImhhc0Jhc2VQYXRoIiwiYWRkQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImlzTG9jYWxVUkwiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiaW50ZXJwb2xhdGVBcyIsInJvdXRlIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJwYXJhbXMiLCJldmVyeSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVIcmVmIiwiY3VycmVudFBhdGgiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwic2VhcmNoUGFyYW1zIiwiaGFzaCIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsIm1hcmtMb2FkaW5nRXJyb3IiLCJwcmVwYXJlVXJsQXMiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwicmVzIiwib2siLCJqc29uIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsImluaXRpYWxTdHlsZVNoZWV0cyIsInN1YnNjcmlwdGlvbiIsImlzRmFsbGJhY2siLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwiX2JwcyIsIl93cmFwQXBwIiwiaXNTc3IiLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93Iiwib25Qb3BTdGF0ZSIsImNoYW5nZVN0YXRlIiwiX19OIiwiY2hhbmdlIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiX19OX1NTUCIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0IiwicmVsb2FkIiwibG9jYXRpb24iLCJiYWNrIiwibWV0aG9kIiwicmVxdWlyZSIsImxvY2FsZVBhdGhSZXN1bHQiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJmaWx0ZXIiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwic3NnNDA0IiwibW9kIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiX2dldFN0YXRpY0RhdGEiLCJnZXREYXRhSHJlZiIsIl9lcnIiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZGF0YSIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJyZSIsInRlc3QiLCJwcmVmZXRjaERhdGEiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImZuIiwiY2FjaGVLZXkiLCJjdHgiLCJBcHBUcmVlIiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwiZm9ybWF0VXJsIiwidXJsT2JqIiwiYXV0aCIsImhvc3RuYW1lIiwicHJvdG9jb2wiLCJob3N0IiwicG9ydCIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwidXJsUXVlcnlUb1NlYXJjaFBhcmFtcyIsInNsYXNoZXMiLCJURVNUX1JPVVRFIiwiaXNEeW5hbWljUm91dGUiLCJEVU1NWV9CQVNFIiwicGFyc2VSZWxhdGl2ZVVybCIsInJlc29sdmVkQmFzZSIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInJlZ2V4cFRvRnVuY3Rpb24iLCJwcmVwYXJlRGVzdGluYXRpb24iLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5IiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwiY29tcGlsZSIsIm5ld1VybCIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwic2hvdWxkQWRkQmFzZVBhdGgiLCJtYXRjaCIsInNlYXJjaFBhcmFtc1RvVXJsUXVlcnkiLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwiaXNOYU4iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJvbmx5TnVtYmVyc0hhbmRsZXIiLCJGb3JtVGFibGUiLCJjaGFpbnMiLCJGcmFnbWVudCIsInJlcG9ydFRhYmxlIiwiaW5kZXgiLCJvbktleVByZXNzIiwib25DaGFuZ2UiLCJiYXJjb2RlRmllbGRIYW5kbGVyIiwiZmlsdGVyT3B0aW9ucyIsImNsZWFyQmFyY29kZXMiLCJnZXRFcXVpdmFsZW5jZXMiLCJTdGF0aXN0aWNSZXBvcnQiLCJkaWZmZXJlbmNlcyIsImVxdWl2YWxlbmNlcyIsInNob3dGb3JtVGFibGUiLCJ0byIsImNoYWluRmlsdGVyIiwiaGFzVXBsb2FkZWRSZXBvcnQiLCJsYXN0VXBsb2FkZWRSZXBvcnREYXRlIiwib25GaWxlQ2hhbmdlTWVzc2FnZSIsIm9uRmlsZUNoYW5nZUVycm9yIiwic2hvd0xvYWRlciIsImZpbGwiLCJkYXRhc2V0IiwiY2xlYXJUaW1lb3V0IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJlbXB0eUVxdWl2YWxlbmNlcyIsImlucHV0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaWxlcyIsInNlbGVjdGVkRmlsZSIsImVuZHBvaW50IiwicmVxdWVzdCIsIkZvcm1EYXRhIiwiZ2V0SGVhZGVyIiwicmVzcG9uc2UiLCJhcGkiLCJwb3N0IiwiY2hhaW5DaGVja2JveCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImxvZyIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJmb3JtYXREYXRlIiwiZm9ybWF0IiwiZnJvbURhdGUiLCJ0b0RhdGUiLCJjb3VudCIsInByb2R1Y3RfZGlmZmVyZW5jZXMiLCJyZXN1bWUiLCJkaXNhYmxlRGF0ZUZpbHRlciIsImNzdiIsImNoYWluSW5kZXgiLCJmaW5kSW5kZXgiLCJjaGFpbklkIiwiaGFzRGFya1RoZW1lIiwiZ2V0RGFya1RoZW1lIiwiaXNDdXN0b20iLCJJc0N1c3RvbVRoZW1lIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdldFRoZW1lIiwiY3VycmVudFRoZW1lIiwiYnVpbGRUaGVtZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsImdldFJlcG9ydFN0YXR1cyIsInZhbGlkYXRlU2Vzc2lvbiIsImV4dGVuc2lvbiIsImNyZWF0ZU9iamVjdFVSTCIsIkJsb2IiLCJsaW5rIiwic2V0QXR0cmlidXRlIiwiY2xpY2siLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsImZvcm1UYWJsZVByb3BzIiwiSGVhZCIsInJlcG9ydFN0YXR1cyIsImRvd25sb2FkUmVwb3J0IiwiZmlsZVVwbG9hZCIsIm9uRmlsZUNoYW5nZSIsImZyb21EYXRlSGFuZGxlciIsInRvRGF0ZUhhbmRsZXIiLCJkaWZmZXJlbmNlIiwia2V5Y29kZSIsInVuaXRfcXVhbnRpdHkiLCJjb21wYXJhdGlvbnMiLCJjb21wYXJhdGlvbiIsImNoYWluX3ByaWNlIiwiY29tcGFyZWRfcHJpY2UiLCJ0b3RhbF9vZl9zY2FucyIsImF4aW9zIiwiYmFzZVVSTCIsIndpdGhDcmVkZW50aWFscyIsImJhc2VVUkxHZW9yZWYiLCJnZW9yZWZBcGlLZXkiLCJjcmVhdGVTZXNzaW9uIiwidG9rZW4iLCJyb2wiLCJwcm9maWxlUGljdHJlIiwiZGFya190aGVtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwiZ2V0SWQiLCJpc0Jyb3dzZXIiLCJoYXNMb2NhbGUiLCJnZXRSb2xlcyIsInJvbGVzIiwibmV3Um91dGUiLCJBdXRob3JpemF0aW9uIiwidmFsaWRhdGlvbiIsInZhbGlkYXRlSXNBZG1pbiIsIm9ialRoZW1lIiwiTGlnaHRlbkRhcmtlbkNvbG9yIiwiY29sIiwiYW10IiwidXNlUG91bmQiLCJudW0iLCJyIiwiYiIsImxpZ2h0ZW4iLCJ3YWxscGFwZXIiLCJkYXJrZW4iLCJmb250RGFya2VuIiwidGV4dCIsImZvbnRMaWdodGVyIiwiZm9udCIsInByaW1hcnlfYnV0dG9u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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDQSxXQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztFQUNEO0VBQ0EsT0FBTyxFQUFFO0FBRWIsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3JMRCw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9ob21lL3JlcG9ydHMvc3RhdGlzdGljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ob21lL3JlcG9ydHMvc3RhdGlzdGljLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Q2hpbGQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2JhY2tkcm9wLm1vZHVsZS5zY3NzJ1xuXG50eXBlIFByb3BzID0ge1xuICAgIGRpc3BsYXk6IHN0cmluZyxcbiAgICBjaGlsZHJlbjogUmVhY3RDaGlsZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja2Ryb3AoeyBkaXNwbGF5LCBjaGlsZHJlbiB9OiBQcm9wcykge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3tkaXNwbGF5fX0gY2xhc3NOYW1lPXtzdHlsZXMuQmFja2Ryb3B9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJCYWNrZHJvcFwiOiBcImJhY2tkcm9wX0JhY2tkcm9wX18tQ1duWlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5zY3NzJ1xuXG50eXBlIFByb3BzID0ge1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgdHlwZT86ICdidXR0b24nIHwgJ3N1Ym1pdCcgfCAncmVzZXQnLFxuICAgIG9uQ2xpY2s/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50KSA9PiB2b2lkLFxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcbiAgICB2YXJpYW50PzogUHJpbWFyeUJ1dHRvblZhcmlhbnQsXG4gICAgdGFiaW5kZXg/OiBudW1iZXIsXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5lbnVtIFByaW1hcnlCdXR0b25WYXJpYW50IHtcbiAgICBTdWNjZXNzLFxuICAgIEVycm9yLFxufVxuXG5jb25zdCBQcmltYXJ5QnV0dG9uOiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyBjbGFzc05hbWUsIHRhYmluZGV4LCBsYWJlbCwgdHlwZSwgb25DbGljaywgZGlzYWJsZWQsIHZhcmlhbnQgfSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gdmFyaWFudCA9PT0gUHJpbWFyeUJ1dHRvblZhcmlhbnQuRXJyb3IgP1xuICAgICAgICBzdHlsZXMucHJpbWFyeUJ1dHRvbkVycm9yIDpcbiAgICAgICAgc3R5bGVzLnByaW1hcnlCdXR0b25cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YnV0dG9uQ2xhc3N9ICR7Y2xhc3NOYW1lfWB9XG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIHRhYkluZGV4PXt0YWJpbmRleH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApXG59XG5cblByaW1hcnlCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICB2YXJpYW50OiBQcmltYXJ5QnV0dG9uVmFyaWFudC5TdWNjZXNzLFxufVxuXG5leHBvcnQge1xuICAgIFByaW1hcnlCdXR0b24sXG4gICAgUHJpbWFyeUJ1dHRvblZhcmlhbnQsXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLnNjc3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gICAgdHlwZT86ICdidXR0b24nIHwgJ3N1Ym1pdCcgfCAncmVzZXQnLFxuICAgIG9uQ2xpY2s/OiAoZXZlbnQ6IFN5bnRoZXRpY0V2ZW50KSA9PiB2b2lkLFxuICAgIHZhcmlhbnQ/OiBTZWNvbmRhcnlCdXR0b25WYXJpYW50LFxuICAgIG5vQm9yZGVyPzogYm9vbGVhbixcbiAgICB0YWJpbmRleD86IG51bWJlcixcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmVudW0gU2Vjb25kYXJ5QnV0dG9uVmFyaWFudCB7XG4gICAgU3VjY2VzcyxcbiAgICBFcnJvcixcbn1cblxuY29uc3QgU2Vjb25kYXJ5QnV0dG9uOiBGdW5jdGlvbkNvbXBvbmVudDxQcm9wcz4gPSAoeyBjbGFzc05hbWUsIHRhYmluZGV4LCBsYWJlbCwgdHlwZSwgb25DbGljaywgdmFyaWFudCwgbm9Cb3JkZXIsIGRpc2FibGVkIH0pID0+IHtcbiAgICBjb25zdCBidXR0b25DbGFzcyA9IHZhcmlhbnQgPT09IFNlY29uZGFyeUJ1dHRvblZhcmlhbnQuU3VjY2VzcyA/XG4gICAgICAgIHN0eWxlcy5zZWNvbmRhcnlCdXR0b24gOlxuICAgICAgICBzdHlsZXMuc2Vjb25kYXJ5QnV0dG9uRXJyb3JcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7YnV0dG9uQ2xhc3N9ICR7Y2xhc3NOYW1lfSAke2Rpc2FibGVkICYmIHN0eWxlcy5kaXNhYmxlZH1gfVxuICAgICAgICAgICAgc3R5bGU9e25vQm9yZGVyID8geyBib3JkZXI6ICdub25lJyB9IDoge30gfVxuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICB0YWJJbmRleD17dGFiaW5kZXh9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuXG5TZWNvbmRhcnlCdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICAgIHR5cGU6ICdidXR0b24nLFxuICAgIGRpc2FibGVkOiBmYWxzZSxcbiAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICB2YXJpYW50OiBTZWNvbmRhcnlCdXR0b25WYXJpYW50LlN1Y2Nlc3MsXG4gICAgbm9Cb3JkZXI6IGZhbHNlLFxufVxuXG5leHBvcnQge1xuICAgIFNlY29uZGFyeUJ1dHRvbixcbiAgICBTZWNvbmRhcnlCdXR0b25WYXJpYW50LFxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwicHJpbWFyeUJ1dHRvblwiOiBcImJ1dHRvbl9wcmltYXJ5QnV0dG9uX18yN21iWVwiLFxuXHRcInByaW1hcnlCdXR0b25FcnJvclwiOiBcImJ1dHRvbl9wcmltYXJ5QnV0dG9uRXJyb3JfXzNxbXlNXCIsXG5cdFwiZGlzYWJsZWRcIjogXCJidXR0b25fZGlzYWJsZWRfX1c1X3ZOXCIsXG5cdFwic2Vjb25kYXJ5QnV0dG9uXCI6IFwiYnV0dG9uX3NlY29uZGFyeUJ1dHRvbl9fMU4xdk1cIixcblx0XCJzZWNvbmRhcnlCdXR0b25FcnJvclwiOiBcImJ1dHRvbl9zZWNvbmRhcnlCdXR0b25FcnJvcl9fMkpkWHNcIlxufTtcbiIsImltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tICcuL1ByaW1hcnlCdXR0b24nXG5pbXBvcnQgeyBTZWNvbmRhcnlCdXR0b24gfSBmcm9tICcuL1NlY29uZGFyeUJ1dHRvbidcblxuZXhwb3J0IHtcbiAgICBQcmltYXJ5QnV0dG9uLFxuICAgIFNlY29uZGFyeUJ1dHRvbixcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2lucHV0L2lucHV0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBEYXRlUGlja2VyIGZyb20gJ3JlYWN0LWRhdGVwaWNrZXInO1xuXG50eXBlIFByb3BzID0ge1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgc2VsZWN0ZWQ6IHN0cmluZyxcbiAgICBvblNlbGVjdDogRnVuY3Rpb24sXG4gICAgcGxhY2Vob2xkZXI6IHN0cmluZyxcbiAgICBkYXRlRm9ybWF0OiBzdHJpbmcsXG4gICAgZXJyb3JNc2c6IHN0cmluZyxcbiAgICBpc0xhYmVsOiBib29sZWFuLFxuICAgIGlubGluZUxhYmVsOiBib29sZWFuLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEYXRlcGlja2VyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBsYWJlbDogJycsXG4gICAgICAgIHNlbGVjdGVkOiAnJyxcbiAgICAgICAgb25TZWxlY3Q6ICgpPT4gZmFsc2UsXG4gICAgICAgIGRhdGVGb3JtYXQ6ICdNTS9kZC95eXknLFxuICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgIGVycm9yTXNnOiAnJyxcbiAgICAgICAgaXNMYWJlbDogdHJ1ZSxcbiAgICAgICAgaW5saW5lTGFiZWw6IGZhbHNlLFxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbGFiZWwsXG4gICAgICAgICAgICBzZWxlY3RlZCxcbiAgICAgICAgICAgIG9uU2VsZWN0LFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBkYXRlRm9ybWF0LFxuICAgICAgICAgICAgZXJyb3JNc2csXG4gICAgICAgICAgICBpc0xhYmVsLFxuICAgICAgICAgICAgaW5saW5lTGFiZWwsXG4gICAgICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgY29uc3QgaW5saW5lTGFiZWxDbGFzcyA9IGlubGluZUxhYmVsID8gJ2lubGluZS1sYWJlbCcgOiAnJztcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpc0xhYmVsICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2lubGluZUxhYmVsQ2xhc3N9PntsYWJlbH06PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0TGluZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxEYXRlUGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ9e2RhdGVGb3JtYXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlclRleHQ9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2Vycm9yTXNnID8gKDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXJyb3JNZXNzYWdlfT57ZXJyb3JNc2d9PC9kaXY+KSA6IG51bGx9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGZhQ29nLCBmYUNhcmV0RG93biwgZmFVc2VyIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaGVhZGVyLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7Z2V0STE4bkxhYmVsfSBmcm9tICcuLi8uLi9pMThuJ1xuaW1wb3J0IHsgZGVsZXRlU2Vzc2lvbiwgZ2V0TG9nbywgZ2V0TmFtZSwgZ2V0UHJvZmlsZVBpY3R1cmUsIHZhbGlkYXRlSXNBbmFseXN0LCBnZXRMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLW1hbmFnZW1lbnQnXG5cbmNsYXNzIEhlYWRlciBleHRlbmRzIFB1cmVDb21wb25lbnQ8YW55LCBhbnk+IHtcblxuICAgIHN0YXRlID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgcHJvZmlsZVBpY3R1cmU6IG51bGwsXG4gICAgICAgIHNob3dNZW51OiBmYWxzZSxcbiAgICAgICAgaG93U2hvd01lbnU6ICdrZXknLFxuICAgICAgICBpc0FuYWx5c3Q6ICcnLFxuICAgICAgICBsb2dvOiAnJ1xuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBjb25zdCByb2xBbmFseXN0ID0gdmFsaWRhdGVJc0FuYWx5c3QoKTtcbiAgICAgICAgY29uc3QgbG9nbyA9IGdldExvZ28oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBuYW1lOiBnZXROYW1lKCksXG4gICAgICAgICAgICBwcm9maWxlUGljdHVyZTogZ2V0UHJvZmlsZVBpY3R1cmUoKSxcbiAgICAgICAgICAgIGlzQW5hbHlzdDogcm9sQW5hbHlzdCxcbiAgICAgICAgICAgIGxvZ28sXG4gICAgICAgIH0pXG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGUgPT4gdGhpcy5oYW5kbGVLZXlkb3duKGUpKVxuICAgIH1cblxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5oYW5kbGVLZXlkb3duKGUpKVxuICAgIH1cblxuICAgIGhhbmRsZUtleWRvd24gPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGtleSA9IGUud2hpY2ggfHwgZS5rZXlDb2RlXG4gICAgICAgIGNvbnN0IGN0cmwgPSBlLmN0cmxLZXkgPyBlLmN0cmxLZXkgOiAoKGtleSA9PT0gMTcpID8gdHJ1ZSA6IGZhbHNlKVxuICAgICAgICBpZiAoa2V5ID09IDU1ICYmIGN0cmwpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5zaG93TWVudSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93TWVudTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgaG93U2hvd01lbnU6ICdrZXknLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaG93U2hvd01lbnUgPT09ICdrZXknICYmIHRoaXMuc3RhdGUuc2hvd01lbnUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd01lbnU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlU2Vzc2lvbiA9ICgpID0+IHtcbiAgICAgICAgZGVsZXRlU2Vzc2lvbigpXG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH1cblxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IG5hbWUsIHByb2ZpbGVQaWN0dXJlLCBzaG93TWVudSwgaXNBbmFseXN0LCBsb2dvIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgICBjb25zdCBsb2NhbGUgPSBnZXRMb2NhbGUoKVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZVwiPjxhPjxpbWcgc3JjPXtsb2dvfSBzdHlsZT17bG9nbyAhPSBcIlwiID8geyB3aWR0aDogJzU1cHgnLCBoZWlnaHQ6ICc1MHB4JyB9IDoge319IGFsdD1cIkxvZ28gM0JcIiAvPjwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbnNMaXN0fT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aXNBbmFseXN0ID8gc3R5bGVzLm9wdGlvbkRpc2FibGVkIDogc3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWVcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLnZhbGlkYXRpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2lzQW5hbHlzdCA/IHN0eWxlcy5vcHRpb25EaXNhYmxlZCA6IHN0eWxlcy5vcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL21pc3Npb25zXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5taXNzaW9ucycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9zY2Fuc1wiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24uY2FwdHVyZXMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvcHJvZHVjdHNcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLnByb2R1Y3RzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL3JhbmtpbmdzXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5yYW5raW5ncycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9JyMnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlcG9ydGVzXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMudHJpYW5nbGV9IGljb249e2ZhQ2FyZXREb3dufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL3JlcG9ydHMvc3RhdGlzdGljXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLnJlcG9ydHMuc3RhdGlzdGljJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL3JlcG9ydHMvcHJvZHVjdFwiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5yZXBvcnRzLnByb2R1Y3QnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvcmVwb3J0cy9zY2Fuc1wiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5yZXBvcnRzLnNjYW5zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL3JlcG9ydHMvZ2VvbG9jYWxpemF0aW9uXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLnJlcG9ydHMuZ2VvbG9jYWxpemF0aW9uJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgIWlzQW5hbHlzdCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb25maWd1cmF0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNvZ30gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMudHJpYW5nbGV9IGljb249e2ZhQ2FyZXREb3dufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9uZXdDYXRhbG9nc1wiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLmNhdGFsb2dzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGVQaWN0dXJlID09PSBudWxsID8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVmYXVsdEltZ30+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVQaWN0dXJlfT48aW1nIHNyYz17YCR7cHJvZmlsZVBpY3R1cmV9YH0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gKi99XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVmYXVsdEltZ30+PEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVVzZXJ9IC8+PC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntuYW1lfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy50cmlhbmdsZX0gaWNvbj17ZmFDYXJldERvd259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvcHJvZmlsZVwiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5lZGl0UHJvZmlsZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgb25DbGljaz17KCkgPT4gdGhpcy5jbG9zZVNlc3Npb24oKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5zaWduT3V0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG5cbn1cblxuY29uc3Qgd2l0aFJvdXRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgcmV0dXJuIDxIZWFkZXIgey4uLnByb3BzfSByb3V0ZXI9e3JvdXRlcn0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImhlYWRlclwiOiBcImhlYWRlcl9oZWFkZXJfXzNoUkQtXCIsXG5cdFwib3B0aW9uc0xpc3RcIjogXCJoZWFkZXJfb3B0aW9uc0xpc3RfXzM1aEhxXCIsXG5cdFwib3B0aW9uXCI6IFwiaGVhZGVyX29wdGlvbl9fMXg3eXlcIixcblx0XCJkcm9wZG93blwiOiBcImhlYWRlcl9kcm9wZG93bl9fMm5rb0tcIixcblx0XCJvcHRpb25EaXNhYmxlZFwiOiBcImhlYWRlcl9vcHRpb25EaXNhYmxlZF9fMVpvM1JcIixcblx0XCJsZWZ0Q29udGFpbmVyXCI6IFwiaGVhZGVyX2xlZnRDb250YWluZXJfXzJyY2ZwXCIsXG5cdFwiY29uZmlndXJhdGlvblwiOiBcImhlYWRlcl9jb25maWd1cmF0aW9uX19Pck1ma1wiLFxuXHRcInByb2ZpbGVcIjogXCJoZWFkZXJfcHJvZmlsZV9fM3QwX0lcIixcblx0XCJkZWZhdWx0SW1nXCI6IFwiaGVhZGVyX2RlZmF1bHRJbWdfXzFhYWZEXCIsXG5cdFwicHJvZmlsZVBpY3R1cmVcIjogXCJoZWFkZXJfcHJvZmlsZVBpY3R1cmVfXzJFeHByXCIsXG5cdFwidHJpYW5nbGVcIjogXCJoZWFkZXJfdHJpYW5nbGVfX09mVloxXCJcbn07XG4iLCJpbXBvcnQgSGVhZGVyIGZyb20gJy4vSGVhZGVyJ1xuXG5leHBvcnQge1xuICAgIEhlYWRlcixcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbnB1dENvbnRhaW5lclwiOiBcImlucHV0X2lucHV0Q29udGFpbmVyX18zdC1adlwiLFxuXHRcImlucHV0TGluZUNvbnRhaW5lclwiOiBcImlucHV0X2lucHV0TGluZUNvbnRhaW5lcl9fMnZSMmNcIixcblx0XCJpbnB1dFwiOiBcImlucHV0X2lucHV0X18zV05tUFwiLFxuXHRcImJsYWNrSW5wdXRcIjogXCJpbnB1dF9ibGFja0lucHV0X18xd2ZCWFwiLFxuXHRcImVycm9yTWVzc2FnZVwiOiBcImlucHV0X2Vycm9yTWVzc2FnZV9fMTZ5eEhcIixcblx0XCJmaWxlQ29udGFpbmVyXCI6IFwiaW5wdXRfZmlsZUNvbnRhaW5lcl9fMm5LSFdcIixcblx0XCJmaWxlXCI6IFwiaW5wdXRfZmlsZV9fMjAzYWxcIixcblx0XCJidXR0b25cIjogXCJpbnB1dF9idXR0b25fXzFtM190XCIsXG5cdFwidGFnQ29udGFpbmVyXCI6IFwiaW5wdXRfdGFnQ29udGFpbmVyX18xRmw2clwiLFxuXHRcInRhZ3NcIjogXCJpbnB1dF90YWdzX19TakhxS1wiLFxuXHRcInRhZ1wiOiBcImlucHV0X3RhZ19fMWVySDdcIlxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xvYWRlci5tb2R1bGUuc2NzcydcbmltcG9ydCBCYWNrZHJvcCBmcm9tICcuLi9iYWNrZHJvcC9CYWNrZHJvcCdcblxudHlwZSBQcm9wcyA9IHtcbiAgICBzaG93OiBib29sZWFuLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkZXIoeyBzaG93IH06IFByb3BzKSB7XG4gICAgY29uc3QgZGlzcGxheSA9IHNob3cgPyAnYmxvY2snIDogJ25vbmUnXG4gICAgY29uc3Qgc3R5bGUgPSB7IGRpc3BsYXkgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAgPEJhY2tkcm9wIGRpc3BsYXk9XCJzaG93XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2FkZXJDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLkxvYWRlcn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9CYWNrZHJvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibG9hZGVyQ29udGFpbmVyXCI6IFwibG9hZGVyX2xvYWRlckNvbnRhaW5lcl9fMm03bFlcIixcblx0XCJMb2FkZXJcIjogXCJsb2FkZXJfTG9hZGVyX18zSXFFeVwiLFxuXHRcImJvdW5jZVwiOiBcImxvYWRlcl9ib3VuY2VfXzNlNXpaXCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZmlsdGVyczoge1xuICAgICAgICBzZWFyY2hGaWVsZDogJ1NlYXJjaCBieSBuYW1lIG9yIHByb2R1Y3QgY29kZScsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgICAgIGNsZWFuRmlsdGVyOiAnQ2xlYW4gIEZpbHRlcnMnLFxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkJyxcbiAgICAgICAgY29tcGFyYXRpdmVDaGFydDogJ0dyYXBoIENvbXBhcmF0aXZlcycsXG4gICAgICAgIGdlb3JlZmVyZW5jZTogJ0dlb2xvY2F0aW9uJyxcbiAgICAgICAgZ2V0Q3VycmVudFJlcG9ydDogJ0dFVCBDVVJSRU5UIExJU1QnLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdCcmFuZHMnLFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdCBicmFuZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIGluICB0aGUgUmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGluIHRoZSBSZXF1ZXN0LicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUJyYW5kOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgQnJhbmQgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlQnJhbmQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBicmFuZCBoYXMgYmVlbiByZW1vdmVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0QnJhbmQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBicmFuZCBoYXMgYmVlbiBlZGl0ZWQgY29ycmVjdGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHJlcG9ydCBoYXMgYmVlbiBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseSAgLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUgQnJhbmQnLFxuICAgICAgICAgICAgc2VhcmNoOiAnU2VhcmNoIEJyYW5kJyxcbiAgICAgICAgICAgIHNlYXJjaEJ5TmFtZTogJ1NlYXJjaCBieSBicmFuZCAnLFxuXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IGJyYW5kJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgYWRkOiAnQWRkIEJyYW5kJyxcbiAgICAgICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQgUmVwb3J0JyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXRlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ2FwdHVyZSBkZXRhaWxzJyxcbiAgICBpbnB1dDoge1xuICAgICAgICBjYXB0dXJlSWQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2FwdHVyZScsXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1ByaWNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VXaXRoUHJvbW90aW9uOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1Byb21vIFByaWNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgbGFiZWw6ICdCYXIgQ29kZScsXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTmFtZScsXG4gICAgICAgIH0sXG4gICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0JyYW5kJyxcbiAgICAgICAgfSxcbiAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgbGFiZWw6ICdVbml0JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnU3RvcmUnLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1R5cGUnLFxuICAgICAgICB9LFxuICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgbGFiZWw6ICdHcm91cCcsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGluZScsXG4gICAgICAgIH0sXG4gICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgbGFiZWw6ICdHcmFtbWFnZSAvIFF1YW50aXR5JyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FwdHVyZURhdGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZSBvZiBDYXB0dXJlJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1N0YXR1cycsXG4gICAgICAgIH0sXG4gICAgICAgIHNjYW5uZWRCeToge1xuICAgICAgICAgICAgbGFiZWw6ICdTY2FubmVkIGJ5JyxcbiAgICAgICAgfSxcbiAgICAgICAgcmV2aWV3ZWQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUmV2aWV3JyxcbiAgICAgICAgfSxcbiAgICAgICAgYnJhbmNoT2ZmaWNlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0JyYW5jaCcsXG4gICAgICAgIH0sXG4gICAgICAgIG1haW5JbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdNYWluIFBob3RvJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VJbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdQcmljZSBQaG90bycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZXRhaWxzQ29udGFpbmVyOiB7XG4gICAgICAgIHRpdGxlOiAnUHJvbW8gUGhvdG8nLFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBjaGFuZ2VJbWFnZTogJ0NoYW5nZSBJbWFnZScsXG4gICAgICAgIGVkaXRJbmZvcm1hdGlvbjogJ0VkaXQgSW5mb3JtYXRpb24nLFxuICAgICAgICBzYXZlSW5mb3JtYXRpb246ICdTYXZlIEluZm9ybWF0aW9uJyxcbiAgICAgICAgY2FuY2VsSW5mb3JtYXRpb246ICdDYW5jZWwnLFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ0FQVFVSRVMnLFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgc2VhcmNoRmllbGQ6ICdTZWFyY2ggYnkgIG5hbWUgb3IgcHJvZHVjdCBjb2RlJyxcbiAgICAgICAgc3RhcnREYXRlOiAnRnJvbScsXG4gICAgICAgIGVuZERhdGU6ICdUbycsXG4gICAgICAgIHdpdGhJbWFnZTogJ1dpdGggUGhvdG8nLFxuICAgICAgICB3aXRob3V0SW1hZ2U6ICdXaXRob3V0IFBob3RvJyxcbiAgICAgICAgc3RhdHVzUmVqZWN0ZWQ6ICdSZWplY3RlZCcsXG4gICAgICAgIG5vcm1hbFByaWNlOiAnTm9ybWFsIFByaWNlJyxcbiAgICAgICAgc3RhdHVzUGVuZGluZzogJ1BlbmRpbmcnLFxuICAgICAgICBzdGF0dXNWYWxpZGF0ZWQ6ICdWYWxpZGF0ZWQnLFxuICAgICAgICBwcmljZVdpdGhQcm9tb3Rpb246ICdQcm9tbyBQcmljZScsXG4gICAgICAgIHBhcmFtOiAnUGFyYW1ldGVyJyxcbiAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgIGdlb2xvY2FsaXRhdGlvbjogJ0dlb2xvY2F0aW9uJyxcbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICAgICAgY2xlYW5GaWx0ZXI6ICdDbGVhbiBGaWx0ZXJzJyxcbiAgICAgICAgZXhwb3J0R2VvRGF0YTogJ0V4cG9ydCBHZW9sb2NhdGlvbiBEYXRhJyxcbiAgICB9LFxuICAgIG9wdGlvbnNDYXRhbG9nOiB7XG4gICAgICAgIGJyYW5kc0NhdGFsb2c6ICdCcmFuZCcsXG4gICAgICAgIGdyb3Vwc0NhdGFsb2c6ICdHcm91cCcsXG4gICAgICAgIGxpbmVzQ2F0YWxvZzogJ0xpbmUnLFxuICAgICAgICBzdG9yZXNDYXRhbG9nOiAnQnJhbmNoJyxcbiAgICAgICAgdW5pdHNDYXRhbG9nOiAnVW5pdCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDogJ1NlbGVjdCcsXG4gICAgICAgICAgICBpZDogJ0NhcHR1cmUnLFxuICAgICAgICAgICAgcGhvdG9fbWFpbjogJ01haW4gUGhvdG8nLFxuICAgICAgICAgICAgcGhvdG9fcHJpY2U6ICdQcmljZSBQaG90bycsXG4gICAgICAgICAgICBiYXJjb2RlOiAnQmFyY29kZScsXG4gICAgICAgICAgICBwcm9kdWN0OiAnUHJvZHVjdCcsXG4gICAgICAgICAgICBicmFuZDogJ0JyYW5kJyxcbiAgICAgICAgICAgIHR5cGU6ICdUeXBlJyxcbiAgICAgICAgICAgIGNoYWluOiAnQ29tbWVyY2lhbCBDaGFpbicsXG4gICAgICAgICAgICBicmFuY2g6ICdCcmFuY2gnLFxuICAgICAgICAgICAgc2Nhbm5lZF9ieTogJ0NhcHR1cmlzdCcsXG4gICAgICAgICAgICByZXZpZXdlZDogJ1ZhbGlkYXRvcicsXG4gICAgICAgICAgICBzdGF0dXM6ICdTdGF0dXMnLFxuICAgICAgICAgICAgZ3JhbW1hZ2VfcXVhbnRpdHk6ICdRdWFudGl0eScsXG4gICAgICAgICAgICB1bml0OiAnVW5pdCcsXG4gICAgICAgICAgICB1bml0X3ByaWNlOiAnVW5pdCBQcmljZScsXG4gICAgICAgICAgICBncm91cDogJ0dyb3VwJyxcbiAgICAgICAgICAgIGxpbmU6ICdMaW5lJyxcbiAgICAgICAgICAgIHByb2R1Y3RfY3JlYXRlZF9kYXRlOiAnRGF0ZSBvZiBQcm9kdWN0IFJlZ2lzdHJhdGlvbicsXG4gICAgICAgICAgICBsb3dlcl9wcmljZTogJ0xvd2VzdCBQcmljZScsXG4gICAgICAgICAgICBoaWdoZXN0X3ByaWNlOiAnSGlnaGVzdCBQcmljZScsXG4gICAgICAgICAgICBjYXB0dXJlX2RhdGU6ICdDYXB0dXJlIERhdGUnLFxuICAgICAgICAgICAgY2FwdHVyZV9wcmljZTogJ0NhcHR1cmUgUHJpY2UnLFxuICAgICAgICAgICAgYWN0aW9uczogJ0FjdGlvbnMnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBzdGF0dXM6IHtcbiAgICAgICAgdmFsaWRhdGVkOiAnVmFsaWRhdGVkJyxcbiAgICAgICAgcGVuZGluZzogJ1BlbmRpbmcnLFxuICAgIH0sXG5cbiAgICB1bml0czoge1xuICAgICAgICBjbTogJ0NlbnRpbWV0ZXInLFxuICAgICAgICBtOiAnTWV0ZXInLFxuICAgICAgICBtbDogJ01pbGlsaXRlcnMnLFxuICAgICAgICBsdDogJ0xpdGVyJyxcbiAgICAgICAgbWc6ICdNaWxpZ3JhbScsXG4gICAgICAgIGc6ICdHcmFtJyxcbiAgICAgICAga2c6ICdLaWxvZ3JhbScsXG4gICAgICAgIHBpZXphOiAnUGllY2UnLFxuICAgIH0sXG5cbiAgICBtb2RhbDoge1xuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIGJ1dHRvbkFjY2VwdExhYmVsOiAnRWxpbWluYXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGlzIG9wZXJhdGlvbiBpcyBwZXJtYW5lbnQsIERvIHlvdSAgd2FudCB0byAgZWxpbWluYXRlIHRoaXMgZWxlbWVudD8nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ2F0YWxvZ3MnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYnJhbmRzOiAnQnJhbmRzJyxcbiAgICAgICAgdW5pdGllczogJ1VuaXRzJyxcbiAgICAgICAgZ3JvdXBzOiAnR3JvdXBzJyxcbiAgICAgICAgbGluZXM6ICdMaW5lcycsXG4gICAgICAgIGNoYWluOiAnQ2hhaW5zJyxcbiAgICAgICAgcmVnaW9uOiAnUmVnaW9ucycsXG4gICAgICAgIHVzZXJzOiAnVXNlcnMnLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdDaGFpbnMnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCAgQ2hhaW4nLFxuICAgIHNlYXJjaEJ5TmFtZTogJ1NlYXJjaCBieSBuYW1lICcsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdBZGQgQ2hhaW4nLFxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkIFJlcG9ydCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBpZDogJ0lkJyxcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGFsaWFzOiAnQWxpYXMnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciB3aXRoIHRoZSByZXF1ZXN0LicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3Igd2l0aCB0aGUgcmVxdWVzdC4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NoYWluIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NoYWluIGhhcyBiZWVuIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgY2hhaW4gaGFzIGJlZW4gZWRpdGVkIHN1Y2Nlc2R1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVwb3J0IGhhcyBiZWVuIGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUgQ2hhaW4nLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdCBDaGFpbicsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0YWJzOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIHByaWNlTGlzdDogJ0NoYXJ0cyAtIExpc3QgUHJpY2UnLFxuICAgICAgICAgICAgdW5pdGFyeVByaWNlOiAnQ2hhcnRzIC0gVW5pdCBQcmljZScsXG4gICAgICAgICAgICBoaXN0b3J5OiAnUHJpY2UgSGlzdG9yeScsXG4gICAgICAgIH0sXG4gICAgICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnRGF0ZScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICdQcmljZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgc3RhcnREYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgZW5kRGF0ZTogJ0VuZCBEYXRlJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggY2FwdHVyZSBieSBJRCcsXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmF0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBvcGVyYXRpb24gaXMgcGVybWFuZW50IERvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGVsZW1lbnQ/JyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGFydERhdGU6ICdTdGFydCBEYXRlJyxcbiAgICBlbmREYXRlOiAnRW5kIERhdGUnLFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgYnV0dG9uQWNjZXB0TGFiZWw6ICdFbGltaW5hdGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoaXMgb3BlcmF0aW9uIGlzIHBlcm1hbmVudCwgZG8geW91IHdhbnQgdG8gZWxpbWluYXRlIHRoaXMgZWxlbWVudD8nLFxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnR3JvdXBzJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggYSBncm91cCcsXG4gICAgc2VhcmNoQnlOYW1lOiAnU2VhcmNoIGJ5IE5hbWUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0FkZCBncm91cCcsXG4gICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQgUmVwb3J0JyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbjogJ0FiYnJldmlhdGlvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIHdpdGggdGhlIHJlcXVlc3QuJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciB3aXRoIHRoZSByZXF1ZXN0LicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnR3JvdXAgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnR3JvdXAgZGVsZXRlZCBzdWNjZXNzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0dyb3VwIGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZXBvcnQgZG93bmxvYWRlZCBzdWNjZXNmdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXRlICBncm91cCcsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IEdyb3VwJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXRlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnVmFsaWRhdGlvbicsXG4gICAgd2VsY29tZTogJ1NlbGVjdCBhIGNhcHR1cmUgdG8gc3RhcnQuJyxcbiAgICBzaWRlYmFyOiB7XG4gICAgICAgIHRpdGxlOiAnQ2FwdHVyZXMnLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgbWlzc2lvbjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTWlzc2lvbicsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3QnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjYW5GaWx0ZXI6IHtcbiAgICAgICAgICAgIGFsbDogJ0FsbCcsXG4gICAgICAgICAgICB3aXRoUHJvZHVjdDogJ1dpdGggcHJvZHVjdCcsXG4gICAgICAgICAgICB3aXRob3V0UHJvZHVjdDogJ1dpdGhvdXQgcHJvZHVjdCcsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHNjYW46IHtcbiAgICAgICAgdG9wQmFyOiB7XG4gICAgICAgICAgICBiZWluZ1ZhbGlkYXRlZDogJ1RoaXMgcmVnaXN0ZXIgaXMgYmVpbmcgdmFsaWRhdGVkLCBzZWxlY3QgYW5vdGhlciBvbmUnLFxuICAgICAgICAgICAgd2l0aG91dE51bWJlcjogJ1dpdGhvdXQgTnVtYmVyJyxcbiAgICAgICAgICAgIHdpdGhvdXRNaXNzaW9uOiAnV2l0aG91dCBNaXNzaW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdEltYWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3QnLFxuICAgICAgICB9LFxuICAgICAgICBwcmljZUltYWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1ByaWNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0JhcmNvZGUnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIEZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJpY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9tb3Rpb25QcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvbW8gUHJpY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIEZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQnJhbmNoJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkaXRpb25hbENvbW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdBZGRpdGlvbmFsIGNvbW1lbnRzJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgIHNob3dQaWN0dXJlOiAnU2hvdyBQaG90bycsXG4gICAgICAgICAgICByZWplY3Q6ICdSZWplY3QnLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdWYWxpZGF0ZSBjYXB0dXJlJyxcbiAgICAgICAgICAgIHZhbGlkYXRlQW5kQWRkOiAnVmFsaWRhdGUgYW5kIEFkZCcsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgdGl0bGU6ICdDcmVhdGUgbmV3IHByb2R1Y3QnLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvZHVjdCBOYW1lJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQmFyY29kZScsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdCcmFuZCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUXVhbnRpdHknLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdVbml0JyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0dyb3VwJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTGluZScsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1R5cGUnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgY2hhbmdlSW1hZ2U6ICdDaGFuZ2UgaW1hZ2UnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb2RhbDoge1xuICAgICAgICByZWplY3Q6IHtcbiAgICAgICAgICAgIHN1YmplY3Q6ICdTZWxlY3QgYSByZWFzb24gb2YgcmVqZWN0aW9uJyxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0b2FzdDoge1xuICAgICAgICBzZW5kQ3JpdGVyaW9uOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4gJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2FwdHVyZSB3YXMgcmVqZWN0ZWQgc3VjY2VzZnVsbHkuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgTm90aWZpY2F0aW9uLiAnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciB3aXRoICB0aGUgIHJlcXVlc3QuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmFkaW9NYXBGaXJzdDoge1xuICAgICAgICBibHVycnk6ICdCbHVycnkgIENhcHRpb24nLFxuICAgICAgICBmYXJBd2F5OiAnRGlzdGFudCBDYXB0dXJlJyxcbiAgICAgICAgZGFyazogJ0RhcmsgQ2FwdHVyZScsXG4gICAgICAgIGluY29tcGxldGU6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGluY29tcGxldGUnLFxuICAgICAgICBkb2VzbnRNYXRjaDogJ01pc21hdGNoZWQgUHJvZHVjdHMnLFxuICAgIH0sXG5cbiAgICByYWRpb1NlY29uZDoge1xuICAgICAgICBvdXRzaWRlU2hvcDogJ0NhcHR1cmUgb3V0IG9mIHN0b3JlJyxcbiAgICAgICAgc2hvcFRpY2tldDogJ1RpY2tldCBDYXB0dXJlJyxcbiAgICAgICAgYW5vdGhlckNlbGw6ICdDYXB0dXJlIHRha2VuIHdpdGggYW5vdGhlciBjZWxscGhvbmUnLFxuICAgICAgICB0ZXN0U2NhbjogJ1Rlc3RzJyxcbiAgICB9LFxuXG4gICAgaGlzdG9yeToge1xuICAgICAgICByZWNlbnQ6ICdNb3N0IFJlY2VudCcsXG4gICAgICAgIG1vc3RFeHBlbnNpdmU6ICdNb3N0IEV4cGVuc2l2ZScsXG4gICAgICAgIGNoZWFwZXN0OiAnQ2hlYXBlc3QnLFxuICAgICAgICBjaGVhcGVzdFdpdGhQcm9tb3Rpb246ICdDaGVhcGVzdCB3aXRoICBQcm9tbycsXG4gICAgfSxcbn1cbiIsIi8vIEVOXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IG1pc3Npb25zIGZyb20gJy4vbWlzc2lvbnMnO1xuaW1wb3J0IGNhcHR1cmVzIGZyb20gJy4vY2FwdHVyZXMnO1xuaW1wb3J0IGNhcHR1cmUgZnJvbSAnLi9jYXB0dXJlJztcbmltcG9ydCBjYXRhbG9ncyBmcm9tICcuL2NhdGFsb2dzJztcbmltcG9ydCBwcm9maWxlIGZyb20gJy4vcHJvZmlsZSc7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9wcm9kdWN0cyc7XG5pbXBvcnQgcHJvZHVjdCBmcm9tICcuL3Byb2R1Y3QnO1xuaW1wb3J0IHJhbmtpbmdzIGZyb20gJy4vcmFua2luZ3MnO1xuaW1wb3J0IGdyYXBoVGFiIGZyb20gJy4vZ3JhcGgtdGFiJztcbmltcG9ydCBhZHZhbmNlZFNlYXJjaCBmcm9tICcuL2FkdmFuY2VkLXNlYXJjaCc7XG5pbXBvcnQgdGFibGVUYWIgZnJvbSAnLi90YWJsZS10YWInO1xuaW1wb3J0IHByb2R1Y3RUYWIgZnJvbSAnLi9wcm9kdWN0LXRhYic7XG5pbXBvcnQgc2Nhbm5lcnNUYWIgZnJvbSAnLi9zY2FubmVycy10YWInO1xuaW1wb3J0IHZhbGlkYXRvcnNUYWIgZnJvbSAnLi92YWxpZGF0b3JzLXRhYic7XG5pbXBvcnQgYnJhbmRzQ2F0YWxvZyBmcm9tICcuL2JyYW5kcy1jYXRhbG9nJztcbmltcG9ydCB1bml0c0NhdGFsb2cgZnJvbSAnLi91bml0cy1jYXRhbG9nJztcbmltcG9ydCBncm91cHNDYXRhbG9nIGZyb20gJy4vZ3JvdXBzLWNhdGFsb2cnO1xuaW1wb3J0IGxpbmVzQ2F0YWxvZyBmcm9tICcuL2xpbmVzLWNhdGFsb2cnO1xuaW1wb3J0IGNoYWluc0NhdGFsb2cgZnJvbSAnLi9jaGFpbnMtY2F0YWxvZyc7XG5pbXBvcnQgcmVnaW9uc0NhdGFsb2cgZnJvbSAnLi9yZWdpb25zLWNhdGFsb2cnO1xuaW1wb3J0IHVzZXJzQ2F0YWxvZyBmcm9tICcuL3VzZXJzLWNhdGFsb2cnO1xuaW1wb3J0IHRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IGdyYXBoVGFiQ29tcGFyZSBmcm9tICcuL2dyYXBoLXRhYi1jb21wYXJlJ1xuaW1wb3J0IHN0YXRpc3RpY1JlcG9ydCBmcm9tICcuL3N0YXRpc3RpYy1yZXBvcnQnXG5pbXBvcnQgcHJvZHVjdFJlcG9ydCBmcm9tICcuL3Byb2R1Y3QtcmVwb3J0J1xuaW1wb3J0IHNjYW5zUmVwb3J0IGZyb20gJy4vc2NhbnMtcmVwb3J0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmF2YmFyLFxuICAgIGhvbWUsXG4gICAgdGFibGUsXG4gICAgbWlzc2lvbnMsXG4gICAgY2FwdHVyZXMsXG4gICAgY2FwdHVyZSxcbiAgICBjYXRhbG9ncyxcbiAgICBwcm9maWxlLFxuICAgIHByb2R1Y3RzLFxuICAgIHByb2R1Y3QsXG4gICAgcmFua2luZ3MsXG4gICAgZ3JhcGhUYWIsXG4gICAgYWR2YW5jZWRTZWFyY2gsXG4gICAgdGFibGVUYWIsXG4gICAgcHJvZHVjdFRhYixcbiAgICBzY2FubmVyc1RhYixcbiAgICB2YWxpZGF0b3JzVGFiLFxuICAgIGJyYW5kc0NhdGFsb2csXG4gICAgdW5pdHNDYXRhbG9nLFxuICAgIGdyb3Vwc0NhdGFsb2csXG4gICAgbGluZXNDYXRhbG9nLFxuICAgIGNoYWluc0NhdGFsb2csXG4gICAgcmVnaW9uc0NhdGFsb2csXG4gICAgdXNlcnNDYXRhbG9nLFxuICAgIGdyYXBoVGFiQ29tcGFyZSxcbiAgICBwcm9kdWN0UmVwb3J0LFxuICAgIHNjYW5zUmVwb3J0LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnTGluZXMnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCBhIGxpbmUnLFxuICAgIHNlYXJjaEJ5TmFtZTogJ1NlYXJjaCBieSBuYW1lICcsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdBZGQgbGluZScsXG4gICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQgUmVwb3J0JyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWVfbGluZTogJ0xpbmUnLFxuICAgICAgICAgICAgbmFtZV9ncm91cDogJ0dyb3VwJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3Igd2l0aCB0aGUgUmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMaW5lIGNyZWF0ZWQgc3VjY2VzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTGluZSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMaW5lIGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNmdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlcG9ydCBkb3dubG9hZGVkIHN1Y2Nlc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUgbGluZScsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IGxpbmUnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhdGUnLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdNSVNTSU9OUycsXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGU6ICdUaXRsZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIGNhcHR1cmVfcG9pbnRzOiAnQ2FwdHVyZSBQb2ludHMnLFxuICAgICAgICAgICAgbWlzc2lvbl9wb2ludHM6ICdNaXNzaW9uIFBvaW50cycsXG4gICAgICAgICAgICBzdGFydF9kYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgICAgICBlbmRfZGF0ZTogJ0VuZCBEYXRlJyxcbiAgICAgICAgICAgIHJlZ2lvbnM6ICdSZWdpb24nLFxuICAgICAgICAgICAgYWN0aW9uczogJ0FjdGlvbnMnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBhZGQ6ICdOZXcgTWlzc2lvbicsXG4gICAgfSxcblxuICAgIHRvYXN0OiB7XG4gICAgICAgIGNyZWF0ZU1pc3Npb246IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLiAnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgbWlzc2lvbiBoYXMgYmVlbiBjcmVhdGVkIGNvcnJlY3RseS4gJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgTm90aWZpY2F0aW9uLiAnLFxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZWRNZXNzYWdlOiAnRHVwbGljYXRlZCAgVGl0bGUuJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcuICcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb2RhbDoge1xuICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGlzIG9wZXJhdGlvbiBjYW5ub3QgYmUgcGVyZm9ybWVkIGJlY2F1c2UgdGhlIG1pc3Npb24gaGFzIGFzc29jaWF0ZWQgY2FwdHVyZXMnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGFjZXB0OiAnQWNlcHQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05ldyBNaXNzaW9uJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXQgTWlzc2lvbicsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBlZGl0OiAnZWRpdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RpdGxlIChyZXF1aXJlZCknLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEZXNjcmlwdGlvbiAocmVxdWlyZWQgLyBtYXggMjU1IGNoYXJhY3RlcnMpJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1RoZSBkZXNjcmlwdGlvbiBtb3N0IGhhdmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzLicsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ1RoZSBkZXNjcmlwdGlvbiBtb3N0IGhhdmUgbWF4IDI1NSBjaGFyYWN0ZXJzLicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1N0YXJ0IERhdGUnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnU3RhcnQgZGF0ZSBpcyBub3QgdmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICBncmVhdGVyVGhhbjogJ1N0YXJ0IGRhdGUgbXVzdCBiZSBncmVhdGVyIHRoYW4geWVzdGVyZGF5LicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmREYXRlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdFbmQgRGF0ZScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFbmQgZGF0ZSBpcyBub3QgdmFsaWQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaW9uOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZWxlY3QgYSByZWdpb24nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IG9uZSByZWdpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWlzc2lvblBvaW50czoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUG9pbnRzIGJ5IE1pc3Npb24nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiAnVGhlIHNjb3JlIG11c3QgYmUgYSB2YWxpZCBudW1iZXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FwdHVyZVBvaW50czoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUG9pbnRzIGJ5IGNhcHR1cmUnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiAnVGhlIHNjb3JlIG11c3QgYmUgYSB2YWxpZCBudW1iZXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG9wdGlvbjoge1xuICAgICAgICB2YWxpZGF0aW9uczogJ1ZhbGlkYXRpb24nLFxuICAgICAgICBtaXNzaW9uczogJ01pc3Npb25zJyxcbiAgICAgICAgY2FwdHVyZXM6ICdDYXB0dXJlcycsXG4gICAgICAgIHByb2R1Y3RzOiAnUHJvZHVjdHMnLFxuICAgICAgICByYW5raW5nczogJ1JhbmtpbmdzJyxcbiAgICAgICAgY2F0YWxvZ3M6ICdDYXRhbG9ncycsXG4gICAgICAgIGVkaXRQcm9maWxlOiAnRWRpdCBwcm9maWxlJyxcbiAgICAgICAgc2lnbk91dDogJ1NpZ24gT3V0JyxcbiAgICAgICAgcmVwb3J0czoge1xuICAgICAgICAgICAgZ2VvbG9jYWxpemF0aW9uOiAnUmVwb3J0ZSBkZSBnZW9sb2NhbGl6YWNpb24nLFxuICAgICAgICAgICAgc3RhdGlzdGljOiAnUmVwb3J0ZSBkZSBlc3RhZMOtc3RpY29zJyxcbiAgICAgICAgICAgIHByb2R1Y3Q6ICdSZXBvcnRlIGRlIHByb2R1Y3RvJyxcbiAgICAgICAgICAgIHNjYW5zOiAnUmVwb3J0ZSBkZSBjYXB0dXJhcycsXG4gICAgICAgIH0sXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUHJvZHVjdCBSZXBvcnQnLFxuICAgIG5ld1NlcmFjaDogJ05ldyBzZWFyY2gnLFxuICAgIHBsYWNlaG9sZGVyU2VhcmNoOiAnTmFtZSAvIENvZGUnLFxuICAgIHNlbGVjdGVkOiAnU2VsZWN0ZWQnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgbXlMaXN0OiAnVmlldyBteSBsaXN0JyxcbiAgICBnZW5lcmFsU2VhcmNoOiAnR2VuZXJhbCBTZWFyY2gnLFxuICAgIHNhdmVMaXN0OiAnU2F2ZSB0byBteSBsaXN0JyxcbiAgICBncmFwaGljOiAnR3JhcGgnLFxuICAgIGNsZWFyR3JhcGhpYzogJ0NsZWFuIG15IGxpc3QnLFxuICAgIGVtcHR5U3RhdGU6ICdEbyBhIHNlYXJjaCB0byBzZWUgcmVzdWx0cycsXG4gICAgZW1wdEdyYXBoeVN0YXRlOiAnR3JhcGggdG8gc2VlIHRoZSByZXN1bHRzJyxcbiAgICBzYXZlUHJvZHVjdHM6ICdQcm9kdWN0cyBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGxpc3QnLFxuICAgIHNhdmVQcm9kdWN0c0Vycm9yOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc2F2aW5nIHRoZSBsaXN0JyxcbiAgICBwYXJhbWV0ZXI6ICdQYXJhbWV0ZXInLFxuICAgIHZhbHVlczogJ1ZhbHVlJyxcbiAgICBzdGFydERhdGU6ICdTdGFydCBkYXRlJyxcbiAgICBlbmREYXRlOiAnRW5kIGRhdGUnLFxuICAgIGRlbGV0ZUZpbHRlcnM6IFwiQ2xlYW4gZmlsdGVyc1wiLFxuICAgIGRvd25sb2FkOiBcIkRvd25sb2FkXCIsXG4gICAgbmFtZU9yQ29kZTogXCJOYW1lIC8gY29kZVwiLFxuICAgIHN1Y2Nlc3NEb3dubG9hZDogXCJSZXBvcnQgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICBkZWxldGVGcm9tTGlzdDogXCJEZWxldGUgZnJvbSBteSBsaXN0XCIsXG4gICAgc3VjY2Vzc0RlbGV0ZTogXCJQcm9kdWN0cyBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBsaXN0XCIsXG4gICAgZXJyb3JEZWxldGU6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVtb3ZpbmcgcHJvZHVjdHMgZnJvbSB0aGUgbGlzdFwiLFxuICAgIGVycm9yRG93bmxvYWQ6IFwiRXJyb3Igb2NjdXJyZWQgd2hpbGUgZG93bmxvYWRpbmcgdGhlIHJlcG9ydFwiLFxuICAgIG5vU2VsZWN0ZWQ6IFwiTm8gcHJvZHVjdHMgc2VsZWN0ZWQuLi5cIixcbiAgICBjYXJkOiB7XG4gICAgICAgIGlkOiBcIklEOlwiLFxuICAgICAgICBiYXJjb2RlOiBcIkJBUkNPREU6XCIsXG4gICAgICAgIGJyYW5kOiBcIkJSQU5EOlwiLFxuICAgICAgICBsaW5lOiBcIkxJTkU6XCIsXG4gICAgICAgIGdyb3VwOiBcIkdST1VQOlwiLFxuICAgICAgICB1bml0OiBcIlVOSVQ6XCIsXG4gICAgICAgIHR5cGU6IFwiVFlQRTpcIixcbiAgICAgICAgbmFtZTogXCJOQU1FOlwiLFxuICAgICAgICBsb3dlcl9wcmljZTogXCJMT1dFU1QgUFJJQ0U6XCIsXG4gICAgICAgIGhpZ2hlc3RfcHJpY2U6IFwiSElHSEVTVCBQUklDRTpcIixcbiAgICAgICAgZ3JhbW1hZ2U6IFwiR1JBTU1BR0UgLyBVTklUOlwiLFxuICAgICAgICByZWNlbnRseTogXCJSZWNlbnRseVwiLFxuICAgICAgICBoaWdoZXI6IFwiSGlnaGVzdFwiLFxuICAgICAgICBsb3dlcjogXCJMb3dlclwiLFxuICAgICAgICBsb3dlclByb21vdGlvbjogXCJMb3dlc3Qgd2l0aCBwcm9tb3Rpb25cIixcbiAgICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZXRhaWw6e1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgcHJvZHVjdElkOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9kdWN0IElEJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXJjb2RlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdCYXJjb2RlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdUaGUgZmllbGQgbXVzdCBoYXZlIGF0ICBsZWFzdCB0d28gY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQnJhbmQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1R5cGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcm91cCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTGluZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcmFtbWFnZSAvIFF1YW50aXR5JyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ1RoZSBncmFtbWFnZSBvciBxdWFudGl0eSBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyOiBUd28gZGVjaW1hbHMgbWF4LicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdVbml0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWluSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01haW4gUGhvdG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1ByaWNlIFBob3RvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaW5QcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTG93ZXN0IFByaWNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXhQcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnSGlnaGVzdCBQcmljZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBkZXRhaWxzQ29udGFpbmVyOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1Byb2R1Y3QgUHJpY2UnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgY2hhbmdlSW1hZ2U6ICdDaGFuZ2UgUGhvdG8nLFxuICAgICAgICAgICAgZWRpdEluZm9ybWF0aW9uOiAnRWRpdCBJbmZvcm1hdGlvbicsXG4gICAgICAgICAgICBzYXZlSW5mb3JtYXRpb246ICdTYXZlIEluZm9ybWF0aW9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbGlzdFByaWNlOiAnR3JhcGggLSBMaXN0IFByaWNlJyxcbiAgICAgICAgdW5pdGFyeVByaWNlOiAnR3JhcGggLSBVbml0IFByaWNlJyxcbiAgICAgICAgcHJpY2VIaXN0b3J5OiAnUHJpY2UgSGlzdG9yeScsXG4gICAgICAgIGRldGFpbDogJ0RldGFpbCcsXG4gICAgfSxcbn07XG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1BST0RVQ1RTJyxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHNlYXJjaEZpZWxkOiAnU2VhcmNoIGJ5ICBuYW1lIG9yIHByb2R1Y3QgY29kZScsXG4gICAgICAgIHN0YXJ0RGF0ZTogJ0Zyb20nLFxuICAgICAgICBlbmREYXRlOiAnVG8nLFxuICAgICAgICB1cGRhdGVkQXQ6ICdNb2RpZmljYXRpb24gRGF0ZScsXG4gICAgICAgIGNyZWF0ZWRBdDogJ0NyZWF0ZSBEYXRlJyxcbiAgICAgICAgcGFyYW06ICdQYXJhbWV0ZXInLFxuICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICAgICAgY2xlYW5GaWx0ZXI6ICdDbGVhbiBGaWx0ZXJzJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCcsXG4gICAgICAgIGNvbXBhcmF0aXZlQ2hhcnQ6ICdHcmFwaCBjb21wYXJhdGl2ZXMnLFxuICAgIH0sXG4gICAgb3B0aW9uc0NhdGFsb2c6IHtcbiAgICAgICAgYnJhbmRzQ2F0YWxvZzogJ0JyYW5kJyxcbiAgICAgICAgZ3JvdXBzQ2F0YWxvZzogJ0dyb3VwJyxcbiAgICAgICAgbGluZXNDYXRhbG9nOiAnTGluZScsXG4gICAgICAgIHN0b3Jlc0NhdGFsb2c6ICdDaGFpbicsXG4gICAgICAgIHVuaXRzQ2F0YWxvZzogJ1VuaXQnLFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmF0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdTZWxlY3QnLFxuICAgICAgICAgICAgcGhvdG86ICdQcm9kdWN0IFBob3RvJyxcbiAgICAgICAgICAgIHByb2R1Y3Q6ICdOYW1lJyxcbiAgICAgICAgICAgIGJhcmNvZGU6ICdDb2RlJyxcbiAgICAgICAgICAgIGJyYW5kOiAnQnJhbmQnLFxuICAgICAgICAgICAgdHlwZTogJ1R5cGUnLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogJ0NhcHR1cmUgRGF0ZScsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiAnTW9kaWZpY2F0aW9uIERhdGUnLFxuICAgICAgICAgICAgZ3JhbW1hZ2VfcXVhbnRpdHk6ICdRdWFudGl0eScsXG4gICAgICAgICAgICB1bml0OiAnVW5pdCcsXG4gICAgICAgICAgICBncm91cDogJ0dyb3VwJyxcbiAgICAgICAgICAgIGxpbmU6ICdMaW5lJyxcbiAgICAgICAgICAgIGhpZ2hlc3RfcHJpY2U6ICdIaWdoZXN0IFByaWNlJyxcbiAgICAgICAgICAgIGxvd2VyX3ByaWNlOiAnTG93ZXN0IFByaWNlJyxcbiAgICAgICAgICAgIHByb21vdGlvbl9sb3dlcl9wcmljZTogJ0xvd2VzdCAgUHJpY2Ugd2l0aCBwcm9tbycsXG4gICAgICAgICAgICBsYXN0X3ByaWNlOiAnTGFzdCBwcmljZSBjYXB0dXJlZCcsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5wdXQ6IHtcbiAgICAgICAgcm9sZToge1xuICAgICAgICAgICAgbGFiZWw6ICdSb2wgKicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0X25hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTmFtZSAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdF9uYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0xhc3QgbmFtZSAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW90aGVyX2xhc3RfbmFtZToge1xuICAgICAgICAgICAgbGFiZWw6ICdNb3RoZXJzIGxhc3QgbmFtZScsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ3VzZSBkYXJrIG1vZGUnLFxuICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhbGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VsZWN0IExhbmd1YWdlJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0VtcGxveWVlIG51bWJlcicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNlbGxwaG9uZToge1xuICAgICAgICAgICAgbGFiZWw6ICdDZWxscGhvbmUgTnVtYmVyJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaW9uOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1JlZ2lvbicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1VzZXIgKicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1Bhc3N3b3JkIConLFxuICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSYW5raW5ncycsXG4gICAgdGFiczoge1xuICAgICAgICBjYXB0dXJpc3RzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NhcHR1cmlzdHMnLFxuICAgICAgICAgICAgc3RhcnREYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgICAgICBlbmREYXRlOiAnRW5kIERhdGUnLFxuICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggYnkgbmFtZSBvciBlbXBsb3llZSBudW1iZXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNsZWFyRGF0ZTogJ0NsZWFuIERhdGVzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ1Bvc2l0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOdW1iZXI6ICdFbXBsb3llZSBudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6ICdQZXJjZW50YWplJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQ2FwdHVyZXM6ICdWYWxpZGF0ZWQgQ2FwdHVyZXMnLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6ICdQb2ludHMnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnVmFsaWRhdG9ycycsXG4gICAgICAgICAgICBzdGFydERhdGU6ICdTdGFydCBEYXRlJyxcbiAgICAgICAgICAgIGVuZERhdGU6ICdFbmQgRGF0ZScsXG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBieSBuYW1lIG9yIGVtcGxveWVlIG51bWJlcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2xlYXJEYXRlOiAnQ2xlYW4gRGF0ZXMnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlRGF0YTogJ0dlbmVyYXRlIERhdGEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZXM6ICdDYXB0dXJlcyAgRGF0ZScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkOiAnVmFsaWRhdGVkIFRvdGFsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaXN0b3J5OiB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZXM6ICdDYXB0dXJlcyBIaXN0b3J5JyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWQ6ICdWYWxpZGF0ZWQgSGlzdG9yeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOdW1iZXI6ICdFbXBsb3llZSBOdW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBub21icmU6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogJ1BlcmNlbnRhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRDYXB0dXJlczogJ1ZhbGlkYXRlZCBDYXB0dXJlcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSZWdpb25zJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggYnkgUmVnaW9uJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdTZWFyY2ggYnkgTmFtZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQWRkIFJlZ2lvbicsXG4gICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQgUmVwb3J0JyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGFsaWFzOiAnQWxpYXMnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciB3aXRoIHRoZSBSZXF1ZXN0LicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3Igd2l0aCB0aGUgUmVxdWVzdC4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlZ2lvbiBjcmVhdGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlZ2lvbiBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZWdpb24gaGFzIGJlZW4gZWRpdGVkIHN1Y2Nlc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVwb3J0ICBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXRlIFJlZ2lvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IFJlZ2lvbicsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGFydERhdGU6ICdTdGFydCBEYXRlJyxcbiAgICBlbmREYXRlOiAnRW5kIERhdGUnLFxuICAgIGlucHV0OiB7XG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggYnkgIG5hbWUgb3IgZW1wbG95ZWUgbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWlzc2lvbjoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdNaXNzaW9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2xlYXJEYXRlOiAnQ2xlYW4gRGF0ZXMnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICByYW5raW5nOiAnUG9zaXRpb24nLFxuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiAnRW1wbG95ZWUgTnVtYmVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGVmZmljaWVuY3k6ICdQZXJjZW50YWdlJyxcbiAgICAgICAgICAgIHZhbGlkYXRlZF9jYXB0dXJlczogJ1ZhbGlkYXRlZCBDYXB0dXJlcycsXG4gICAgICAgICAgICBwb2ludHM6ICdQb2ludHMnLFxuICAgICAgICB9XG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1JlcG9ydGUgZGUgY2FwdHVyYXMnLFxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYnJhbmNoT2ZmaWNlOiAnQnJhbmNoJyxcbiAgICAgICAgICAgIG1pblByaWNlOiAnTG93ZXN0IFByaWNlJyxcbiAgICAgICAgICAgIG1heFByaWNlOiAnSGlnaGVzdCBQcmljZScsXG4gICAgICAgICAgICBjdXJyZW50UHJpY2U6ICdDdXJyZW50IFByaWNlJyxcbiAgICAgICAgICAgIGF2ZXJhZ2VQcmljZTogJ0F2ZXJhZ2UgUHJpY2UnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzZWVIaXN0b3J5OiAnU2VlIEhpc3RvcnknLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBzY2FuOiAnQ2FwdHVyZScsXG4gICAgICAgICAgICAgICAgY2FwdHVyZWRBdDogJ0NhcHR1cmUgRGF0ZScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICdQcmljZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjbG9zZTogJ2Nsb3NlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFjdGlvbnM6ICdBY3Rpb25zJyxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1VuaXRzJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggYnkgVW5pdCcsXG4gICAgc2VhcmNoQnlOYW1lOiAnU2VhcmNoIGJ5IE5hbWUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0FkZCBVbml0JyxcbiAgICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCBSZXBvcnQnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnQWJicmV2aWF0aW9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3Igd2l0aCB0aGUgUmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbml0IGNyZWF0ZWQgc3V1Y2Nlc3NmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbml0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbml0IGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZXBvcnQgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZSBVbml0JyxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdE1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXQgVW5pdCcsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1VzZXJzJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggVXNlcicsXG4gICAgc2VhcmNoQnlOYW1lOiAnU2VhcmNoIGJ5IG5hbWUsIHVzZXIsIGVtYWlsLCB0YWdzIG9yIGVtcGxveWVlIG51bWJlci4nLFxuICAgIHRhZ3M6ICdUYWdzJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0NyZWF0ZSBuZXcgdXNlcicsXG4gICAgICAgIGFkZFRhZ3M6ICdBZGQgVGFncycsXG4gICAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkIFJlcG9ydCcsXG4gICAgfSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHJvbGU6ICdGaWx0ZXIgYnkgcm9sZScsXG4gICAgICAgIHJlZ2lvbjogJ0ZpbHRlciBieSByZWdpb24nLFxuICAgICAgICBhbGxSZWdpb25zOiAnQWxsIFJlZ2lvbnMnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogJ05hbWUnLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiAnTGFzdCBOYW1lJyxcbiAgICAgICAgICAgIG1vdGhlcl9sYXN0X25hbWU6ICdNb3RoZXJzIExhc3QgTmFtZScsXG4gICAgICAgICAgICB1c2VybmFtZTogJ1VzZXInLFxuICAgICAgICAgICAgZW1haWw6ICdFTWFpbCcsXG4gICAgICAgICAgICBlbXBsb3llZV9udW1iZXI6ICdFbXBsb3llZSBOdW1iZXInLFxuICAgICAgICAgICAgcm9sU2VsZWN0ZWQ6ICdSb2xlJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3Igd2l0aCB0aGUgUmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2VzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZXBvcnQgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZSB1c2VyJyxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdE1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXRhIFVzZXInLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhdGUnLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhcnREYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgZW5kRGF0ZTogJ0VuZCBEYXRlJyxcbiAgICBpbnB1dDoge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGJ5IG5hbWUgb3IgZW1wbG95ZWUgbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWlzc2lvbjoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdNaXNzaW9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2xlYXJEYXRlOiAnQ2xlYW4gRGF0ZXMnLFxuICAgICAgICBnZW5lcmF0ZURhdGE6ICdHZW5lcmF0ZSBEYXRhJyxcbiAgICB9LFxuICAgIHRvdGFsOiB7XG4gICAgICAgIGNhcHR1cmVzOiAnQ2FwdHVyZXMgVG90YWwnLFxuICAgICAgICB2YWxpZGF0ZWQ6ICdWYWxpZGF0ZWQgVG90YWwnLFxuICAgIH0sXG4gICAgaGlzdG9yeToge1xuICAgICAgICBjYXB0dXJlczogJ0NhcHR1cmVzIEhpc3RvcnknLFxuICAgICAgICB2YWxpZGF0ZWQ6ICdWYWxpZGF0ZWQgSGlzdG9yeScsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGVtcGxveWVlX251bWJlcjogJ0VtcGxveWVlIE51bWJlcicsXG4gICAgICAgICAgICBmdWxsTmFtZTogJ05hbWUnLFxuICAgICAgICAgICAgZWZmaWNpZW5jeTogJ1BlcmNlbnRhZ2UnLFxuICAgICAgICAgICAgdXNlclZhbGlkYXRlczogJ1ZhbGlkYXRlZCBDYXB0dXJlcycsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHNlYXJjaEZpZWxkOiAnQnVzY2FyIHBvciBub21icmUgbyBjw7NkaWdvIGRlbCBwcm9kdWN0bycsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ0J1c2NhcicsXG4gICAgICAgIGdlbmVyYXRlUmVwb3J0OiAnR0VORVJBUiBSRVBPUlRFJyxcbiAgICAgICAgY2xlYW5GaWx0ZXI6ICdMaW1waWFyIGZpbHRyb3MnLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhcicsXG4gICAgICAgIGNvbXBhcmF0aXZlQ2hhcnQ6ICdHcmFmaWNhciBjb21wYXJhdGl2b3MnLFxuICAgICAgICBnZW9yZWZlcmVuY2U6ICdHZW9yZWZlcmVuY2lhJyxcbiAgICAgICAgZ2V0Q3VycmVudFJlcG9ydDogJ1ZFUiBMSVNUQSBBQ1RVQUwnLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdNYXJjYXMnLFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBsYSBtYXJjYSBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVsaW1pbmFkbyBsYSBtYXJjYSBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGxhIG1hcmNhIGNvcnJlY3RhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBkZXNjYXJnYWRvIGVsIHJlcG9ydGUgZXhpdG9zYW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhciBtYXJjYScsXG4gICAgICAgICAgICBzZWFyY2g6ICdCdXNjYXIgdW5hIG1hcmNhJyxcbiAgICAgICAgICAgIHNlYXJjaEJ5TmFtZTogJ0J1c2NhciBwb3Igbm9tYnJlICcsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgbWFyY2EnLFxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICBhZGQ6ICdBw7FhZGlyIG1hcmNhJyxcbiAgICAgICAgICAgIGRvd25sb2FkOiAnRGVzY2FyZ2FyIFJlcG9ydGUnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0RldGFsbGVzIGRlIGNhcHR1cmEnLFxuICAgIGlucHV0OiB7XG4gICAgICAgIGNhcHR1cmVJZDoge1xuICAgICAgICAgICAgbGFiZWw6ICdDYXB0dXJhJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lvJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VXaXRoUHJvbW90aW9uOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1ByZWNpbyBkZSBwcm9tb2Npw7NuJyxcbiAgICAgICAgfSxcbiAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgbGFiZWw6ICdDw7NkaWdvIGRlIGJhcnJhcycsXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTm9tYnJlJyxcbiAgICAgICAgfSxcbiAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTWFyY2EnLFxuICAgICAgICB9LFxuICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICBsYWJlbDogJ1VuaWRhZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0NhZGVuYScsXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGlwbycsXG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0dydXBvJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgICAgbGFiZWw6ICdMw61uZWEnLFxuICAgICAgICB9LFxuICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnR3JhbWFqZSAvIENhbnRpZGFkJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FwdHVyZURhdGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnRmVjaGEgZGUgQ2FwdHVyYScsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgbGFiZWw6ICdFc3RhdHVzJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Nhbm5lZEJ5OiB7XG4gICAgICAgICAgICBsYWJlbDogJ0VzY2FuZWFkbycsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmlld2VkOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1JldmlzYWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgYnJhbmNoT2ZmaWNlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ3N1Y3Vyc2FsJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWFpbkltYWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0ZvdG8gcHJpbmNpcGFsJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VJbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdGb3RvIGRlIHByZWNpbycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZXRhaWxzQ29udGFpbmVyOiB7XG4gICAgICAgIHRpdGxlOiAnRm90byBkZSBwcm9tb2Npw7NuJyxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2hhbmdlSW1hZ2U6ICdDYW1iaWFyIGltYWdlbicsXG4gICAgICAgIGVkaXRJbmZvcm1hdGlvbjogJ0VkaXRhciBpbmZvcm1hY2nDs24nLFxuICAgICAgICBzYXZlSW5mb3JtYXRpb246ICdHdWFyZGFyIGluZm9ybWFjacOzbicsXG4gICAgICAgIGNhbmNlbEluZm9ybWF0aW9uOiAnQ2FuY2VsYXInLFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ0FQVFVSQVMnLFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgc2VhcmNoRmllbGQ6ICdCdXNjYXIgcG9yIG5vbWJyZSBvIGPDs2RpZ28gZGVsIHByb2R1Y3RvJyxcbiAgICAgICAgc3RhcnREYXRlOiAnRGVzZGUnLFxuICAgICAgICBlbmREYXRlOiAnSGFzdGEnLFxuICAgICAgICB3aXRoSW1hZ2U6ICdDb24gZm90bycsXG4gICAgICAgIHdpdGhvdXRJbWFnZTogJ1NpbiBmb3RvJyxcbiAgICAgICAgc3RhdHVzUmVqZWN0ZWQ6ICdSZWNoYXphZG8nLFxuICAgICAgICBub3JtYWxQcmljZTogJ1ByZWNpbyBub3JtYWwnLFxuICAgICAgICBzdGF0dXNQZW5kaW5nOiAnUGVuZGllbnRlJyxcbiAgICAgICAgc3RhdHVzVmFsaWRhdGVkOiAnVmFsaWRhZG8nLFxuICAgICAgICBwcmljZVdpdGhQcm9tb3Rpb246ICdQcmVjaW8gZGUgcHJvbW9jacOzbicsXG4gICAgICAgIHBhcmFtOiAnUGFyw6FtZXRybycsXG4gICAgICAgIHZhbHVlOiAnVmFsb3InLFxuICAgICAgICBnZW9sb2NhbGl0YXRpb246ICdHZW9sb2NhbGl6YWNpb25lcycsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ0J1c2NhcicsXG4gICAgICAgIGNsZWFuRmlsdGVyOiAnTGltcGlhciBmaWx0cm9zJyxcbiAgICAgICAgZXhwb3J0R2VvRGF0YTogJ0V4cG9ydGFyIERhdG9zIEdlb3JlZmVyZW5jaWEnLFxuICAgIH0sXG4gICAgb3B0aW9uc0NhdGFsb2c6IHtcbiAgICAgICAgYnJhbmRzQ2F0YWxvZzogJ01hcmNhJyxcbiAgICAgICAgZ3JvdXBzQ2F0YWxvZzogJ0dydXBvJyxcbiAgICAgICAgbGluZXNDYXRhbG9nOiAnTMOtbmVhJyxcbiAgICAgICAgc3RvcmVzQ2F0YWxvZzogJ0NhZGVuYScsXG4gICAgICAgIHVuaXRzQ2F0YWxvZzogJ1VuaWRhZCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDogJ1NlbGVjY2lvbmFyJyxcbiAgICAgICAgICAgIGlkOiAnQ2FwdHVyYScsXG4gICAgICAgICAgICBwaG90b19tYWluOiAnRm90byBwcmluY2lwYWwnLFxuICAgICAgICAgICAgcGhvdG9fcHJpY2U6ICdGb3RvIHByZWNpbycsXG4gICAgICAgICAgICBiYXJjb2RlOiAnQ8OzZGlnbyBkZSBiYXJyYXMnLFxuICAgICAgICAgICAgcHJvZHVjdDogJ1Byb2R1Y3RvJyxcbiAgICAgICAgICAgIGJyYW5kOiAnTWFyY2EnLFxuICAgICAgICAgICAgdHlwZTogJ1RpcG8nLFxuICAgICAgICAgICAgY2hhaW46ICdDYWRlbmEgY29tZXJjaWFsJyxcbiAgICAgICAgICAgIGJyYW5jaDogJ1N1Y3Vyc2FsJyxcbiAgICAgICAgICAgIHNjYW5uZWRfYnk6ICdDYXB0dXJpc3RhJyxcbiAgICAgICAgICAgIHJldmlld2VkOiAnVmFsaWRhZG9yJyxcbiAgICAgICAgICAgIHN0YXR1czogJ0VzdGFkbycsXG4gICAgICAgICAgICBncmFtbWFnZV9xdWFudGl0eTogJ0NhbnRpZGFkJyxcbiAgICAgICAgICAgIHVuaXQ6ICdVbmlkYWQnLFxuICAgICAgICAgICAgdW5pdF9wcmljZTogJ1ByZWNpbyB1bml0YXJpbycsXG4gICAgICAgICAgICBncm91cDogJ0dydXBvJyxcbiAgICAgICAgICAgIGxpbmU6ICdMw61uZWEnLFxuICAgICAgICAgICAgcHJvZHVjdF9jcmVhdGVkX2RhdGU6ICdGZWNoYSBkZSBhbHRhIGRlIHByb2R1Y3RvJyxcbiAgICAgICAgICAgIGxvd2VyX3ByaWNlOiAnUHJlY2lvIG3DrW5pbW8nLFxuICAgICAgICAgICAgaGlnaGVzdF9wcmljZTogJ1ByZWNpbyBtw6F4aW1vJyxcbiAgICAgICAgICAgIGNhcHR1cmVfZGF0ZTogJ0ZlY2hhIGRlIGNhcHR1cmEnLFxuICAgICAgICAgICAgY2FwdHVyZV9wcmljZTogJ1ByZWNpbyBkZSBjYXB0dXJhJyxcbiAgICAgICAgICAgIGFjdGlvbnM6ICdBY2Npb25lcycsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHN0YXR1czoge1xuICAgICAgICB2YWxpZGF0ZWQ6ICdWYWxpZGFkbycsXG4gICAgICAgIHBlbmRpbmc6ICdQZW5kaWVudGUnLFxuICAgIH0sXG5cbiAgICB1bml0czoge1xuICAgICAgICBjbTogJ0NlbnRpbWV0cm8nLFxuICAgICAgICBtOiAnTWV0cm8nLFxuICAgICAgICBtbDogJ01pbGlsaXRybycsXG4gICAgICAgIGx0OiAnTGl0cm8nLFxuICAgICAgICBtZzogJ01pbGlncmFtbycsXG4gICAgICAgIGc6ICdHcmFtbycsXG4gICAgICAgIGtnOiAnS2lsb2dyYW1vJyxcbiAgICAgICAgcGllemE6ICdQaWV6YScsXG4gICAgfSxcblxuICAgIG1vZGFsOiB7XG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgYnV0dG9uQWNjZXB0TGFiZWw6ICdFbGltaW5hcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXN0YSBvcGVyYWNpw7NuIGVzIHBlcm1hbmVudGUgwr9kZXNlYSBlbGltaW5hciBlc3RlIGVsZW1lbnRvPycsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdDYXTDoWxvZ29zJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGJyYW5kczogJ01hcmNhcycsXG4gICAgICAgIHVuaXRpZXM6ICdVbmlkYWRlcycsXG4gICAgICAgIGdyb3VwczogJ0dydXBvcycsXG4gICAgICAgIGxpbmVzOiAnTMOtbmVhcycsXG4gICAgICAgIGNoYWluOiAnQ2FkZW5hcycsXG4gICAgICAgIHJlZ2lvbjogJ1JlZ2lvbmVzJyxcbiAgICAgICAgdXNlcnM6ICdVc3VhcmlvcycsXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0NhZGVuYXMnLFxuICAgIHNlYXJjaDogJ0J1c2NhciB1bmEgY2FkZW5hJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdCdXNjYXIgcG9yIG5vbWJyZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQcOxYWRpciBjYWRlbmEnLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhciBSZXBvcnRlJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGlkOiAnSWQnLFxuICAgICAgICAgICAgbmFtZTogJ05vbWJyZScsXG4gICAgICAgICAgICBhbGlhczogJ0FsaWFzJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBjcmVhZG8gbGEgY2FkZW5hIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWxpbWluYWRvIGxhIGNhZGVuYSBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGxhIGNhZGVuYSBjb3JyZWN0YW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZGVzY2FyZ2FkbyBlbCByZXBvcnRlIGV4aXRvc2FtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXIgY2FkZW5hJyxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdE1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXRhciBjYWRlbmEnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0YWJzOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIHByaWNlTGlzdDogJ0dyw6FmaWNhcyAtIFByZWNpbyBkZSBsaXN0YScsXG4gICAgICAgICAgICB1bml0YXJ5UHJpY2U6ICdHcsOhZmljYXMgLSBQcmVjaW8gdW5pdGFyaW8nLFxuICAgICAgICAgICAgaGlzdG9yeTogJ0hpc3RvcmlhbCBkZSBwcmVjaW9zJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGlzdG9yeToge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIGRhdGU6ICdGZWNoYScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICdQcmVjaW8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgIGVuZERhdGU6ICdGZWNoYSBmaW5hbCcsXG4gICAgc2VhcmNoOiAnQnVzY2FyIGNhcHR1cmEgcG9yIGlkJyxcbiAgICBtb2RhbDoge1xuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIGJ1dHRvbkFjY2VwdExhYmVsOiAnRWxpbWluYXInLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0VzdGEgb3BlcmFjacOzbiBlcyBwZXJtYW5lbnRlIMK/ZGVzZWEgZWxpbWluYXIgZXN0ZSBlbGVtZW50bz8nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgIGVuZERhdGU6ICdGZWNoYSBmaW5hbCcsXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmFyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFc3RhIG9wZXJhY2nDs24gZXMgcGVybWFuZW50ZSDCv2Rlc2VhIGVsaW1pbmFyIGVzdGUgZWxlbWVudG8/JyxcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0dydXBvcycsXG4gICAgc2VhcmNoOiAnQnVzY2FyIHVuIGdydXBvJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdCdXNjYXIgcG9yIG5vbWJyZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQcOxYWRpciBncnVwbycsXG4gICAgICAgIGRvd25sb2FkOiAnRGVzY2FyZ2FyIFJlcG9ydGUnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgbmFtZTogJ05vbWJyZScsXG4gICAgICAgICAgICBhYmJyZXZpYXRpb246ICdBYnJldmlhY2nDs24nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBlbCBncnVwbyBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVsaW1pbmFkbyBlbCBncnVwbyBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGVsIGdydXBvIGNvcnJlY3RhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBkZXNjYXJnYWRvIGVsIHJlcG9ydGUgZXhpdG9zYW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhciBncnVwbycsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgZ3J1cG8nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1ZhbGlkYWNpw7NuJyxcbiAgICB3ZWxjb21lOiAnU2VsZWNjaW9uZSB1bmEgY2FwdHVyYSBwYXJhIGluaWNpYXIuJyxcbiAgICBzaWRlYmFyOiB7XG4gICAgICAgIHRpdGxlOiAnQ2FwdHVyYXMnLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgbWlzc2lvbjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTWlzacOzbicsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3RvJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY2FuRmlsdGVyOiB7XG4gICAgICAgICAgICBhbGw6ICdUb2RvcycsXG4gICAgICAgICAgICB3aXRoUHJvZHVjdDogJ0NvbiBwcm9kdWN0bycsXG4gICAgICAgICAgICB3aXRob3V0UHJvZHVjdDogJ1NpbiBwcm9kdWN0bycsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHNjYW46IHtcbiAgICAgICAgdG9wQmFyOiB7XG4gICAgICAgICAgICBiZWluZ1ZhbGlkYXRlZDogJ0VzdGUgcmVnaXN0cm8gZXN0w6Egc2llbmRvIHZhbGlkYWRvLCBzZWxlY2Npb25hIHVubyBkaWZlcmVudGUnLFxuICAgICAgICAgICAgd2l0aG91dE51bWJlcjogJ1NpbiBOw7ptZXJvJyxcbiAgICAgICAgICAgIHdpdGhvdXRNaXNzaW9uOiAnU2luIE1pc2nDs24nLFxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0SW1hZ2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUHJvZHVjdG8nLFxuICAgICAgICB9LFxuICAgICAgICBwcmljZUltYWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1ByZWNpbycsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICBiYXJjb2RlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDw7NkaWdvIGRlIGJhcnJhcycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQcmVjaW8nLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9tb3Rpb25QcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lvIGRlIHByb21vY2nDs24nLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2FkZW5hJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRGlyZWNjacOzbicsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkaXRpb25hbENvbW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDb21lbnRhcmlvcyBhZGljaW9uYWxlcycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICBzaG93UGljdHVyZTogJ1ZlciBmb3RvJyxcbiAgICAgICAgICAgIHJlamVjdDogJ1JlY2hhemFyJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnVmFsaWRhciBjYXB0dXJhJyxcbiAgICAgICAgICAgIHZhbGlkYXRlQW5kQWRkOiAnVmFsaWRhciB5IGFncmVnYXInLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBwcm9kdWN0OiB7XG4gICAgICAgIHRpdGxlOiAnQ3JlYXIgbnVldm8gcHJvZHVjdG8nLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTm9tYnJlIGRlbCBwcm9kdWN0bycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0PDs2RpZ28gZGUgYmFycmFzJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01hcmNhJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDYW50aWRhZCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1VuaWRhZCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcnVwbycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0zDrW5lYScsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RpcG8nLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgY2hhbmdlSW1hZ2U6ICdDYW1iaWFyIGltYWdlbicsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vZGFsOiB7XG4gICAgICAgIHJlamVjdDoge1xuICAgICAgICAgICAgc3ViamVjdDogJ1NlbGVjY2lvbmEgdW4gbW90aXZvIGRlIHJlY2hhem8nLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHRvYXN0OiB7XG4gICAgICAgIHNlbmRDcml0ZXJpb246IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLiAnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSByZWNoYXphZG8gbGEgY2FwdHVyYSBjb3JyZWN0YW1lbnRlLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgZXJyb3IuICcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmFkaW9NYXBGaXJzdDoge1xuICAgICAgICBibHVycnk6ICdDYXB0dXJhIGJvcnJvc2EnLFxuICAgICAgICBmYXJBd2F5OiAnQ2FwdHVyYSBsZWphbmEnLFxuICAgICAgICBkYXJrOiAnQ2FwdHVyYSBvc2N1cmEnLFxuICAgICAgICBpbmNvbXBsZXRlOiAnRGVzY3JpcGNpw7NuIGRlIHByb2R1Y3RvIGluY29tcGxldGEnLFxuICAgICAgICBkb2VzbnRNYXRjaDogJ1Byb2R1Y3RvcyBxdWUgbm8gY29pbmNpZGVuJyxcbiAgICB9LFxuXG4gICAgcmFkaW9TZWNvbmQ6IHtcbiAgICAgICAgb3V0c2lkZVNob3A6ICdDYXB0dXJhIGZ1ZXJhIGRlIHRpZW5kYScsXG4gICAgICAgIHNob3BUaWNrZXQ6ICdDYXB0dXJhIGRlIHRpY2tldHMgZGUgY29tcHJhJyxcbiAgICAgICAgYW5vdGhlckNlbGw6ICdDYXB0dXJhIHRvbWFkYSBhIG90cm8gY2VsdWxhcicsXG4gICAgICAgIHRlc3RTY2FuOiAnUHJ1ZWJhcycsXG4gICAgfSxcblxuICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgcmVjZW50OiAnTcOhcyByZWNpZW50ZScsXG4gICAgICAgIG1vc3RFeHBlbnNpdmU6ICdNw6FzIGFsdG8nLFxuICAgICAgICBjaGVhcGVzdDogJ03DoXMgYmFqbycsXG4gICAgICAgIGNoZWFwZXN0V2l0aFByb21vdGlvbjogJ03DoXMgYmFqbyBjb24gcHJvbW9jacOzbicsXG4gICAgfSxcbn1cbiIsIi8vIEVTXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IG1pc3Npb25zIGZyb20gJy4vbWlzc2lvbnMnO1xuaW1wb3J0IGNhcHR1cmVzIGZyb20gJy4vY2FwdHVyZXMnO1xuaW1wb3J0IGNhcHR1cmUgZnJvbSAnLi9jYXB0dXJlJztcbmltcG9ydCBjYXRhbG9ncyBmcm9tICcuL2NhdGFsb2dzJztcbmltcG9ydCBwcm9maWxlIGZyb20gJy4vcHJvZmlsZSc7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9wcm9kdWN0cyc7XG5pbXBvcnQgcHJvZHVjdCBmcm9tICcuL3Byb2R1Y3QnO1xuaW1wb3J0IHJhbmtpbmdzIGZyb20gJy4vcmFua2luZ3MnO1xuaW1wb3J0IGdyYXBoVGFiIGZyb20gJy4vZ3JhcGgtdGFiJztcbmltcG9ydCBhZHZhbmNlZFNlYXJjaCBmcm9tICcuL2FkdmFuY2VkLXNlYXJjaCc7XG5pbXBvcnQgdGFibGVUYWIgZnJvbSAnLi90YWJsZS10YWInO1xuaW1wb3J0IHByb2R1Y3RUYWIgZnJvbSAnLi9wcm9kdWN0LXRhYic7XG5pbXBvcnQgc2Nhbm5lcnNUYWIgZnJvbSAnLi9zY2FubmVycy10YWInO1xuaW1wb3J0IHZhbGlkYXRvcnNUYWIgZnJvbSAnLi92YWxpZGF0b3JzLXRhYic7XG5pbXBvcnQgYnJhbmRzQ2F0YWxvZyBmcm9tICcuL2JyYW5kcy1jYXRhbG9nJztcbmltcG9ydCB1bml0c0NhdGFsb2cgZnJvbSAnLi91bml0cy1jYXRhbG9nJztcbmltcG9ydCBncm91cHNDYXRhbG9nIGZyb20gJy4vZ3JvdXBzLWNhdGFsb2cnO1xuaW1wb3J0IGxpbmVzQ2F0YWxvZyBmcm9tICcuL2xpbmVzLWNhdGFsb2cnO1xuaW1wb3J0IGNoYWluc0NhdGFsb2cgZnJvbSAnLi9jaGFpbnMtY2F0YWxvZyc7XG5pbXBvcnQgcmVnaW9uc0NhdGFsb2cgZnJvbSAnLi9yZWdpb25zLWNhdGFsb2cnO1xuaW1wb3J0IHVzZXJzQ2F0YWxvZyBmcm9tICcuL3VzZXJzLWNhdGFsb2cnO1xuaW1wb3J0IHRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IGdyYXBoVGFiQ29tcGFyZSBmcm9tICcuL2dyYXBoLXRhYi1jb21wYXJlJ1xuaW1wb3J0IHN0YXRpc3RpY1JlcG9ydCBmcm9tICcuL3N0YXRpc3RpYy1yZXBvcnQnXG5pbXBvcnQgcHJvZHVjdFJlcG9ydCBmcm9tICcuL3Byb2R1Y3QtcmVwb3J0J1xuaW1wb3J0IHNjYW5zUmVwb3J0IGZyb20gJy4vc2NhbnMtcmVwb3J0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmF2YmFyLFxuICAgIGhvbWUsXG4gICAgdGFibGUsXG4gICAgbWlzc2lvbnMsXG4gICAgY2FwdHVyZXMsXG4gICAgY2FwdHVyZSxcbiAgICBjYXRhbG9ncyxcbiAgICBwcm9maWxlLFxuICAgIHByb2R1Y3RzLFxuICAgIHByb2R1Y3QsXG4gICAgcmFua2luZ3MsXG4gICAgZ3JhcGhUYWIsXG4gICAgYWR2YW5jZWRTZWFyY2gsXG4gICAgdGFibGVUYWIsXG4gICAgcHJvZHVjdFRhYixcbiAgICBzY2FubmVyc1RhYixcbiAgICB2YWxpZGF0b3JzVGFiLFxuICAgIGJyYW5kc0NhdGFsb2csXG4gICAgdW5pdHNDYXRhbG9nLFxuICAgIGdyb3Vwc0NhdGFsb2csXG4gICAgbGluZXNDYXRhbG9nLFxuICAgIGNoYWluc0NhdGFsb2csXG4gICAgcmVnaW9uc0NhdGFsb2csXG4gICAgdXNlcnNDYXRhbG9nLFxuICAgIGdyYXBoVGFiQ29tcGFyZSxcbiAgICBzdGF0aXN0aWNSZXBvcnQsXG4gICAgcHJvZHVjdFJlcG9ydCxcbiAgICBzY2Fuc1JlcG9ydCxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0zDrW5lYXMnLFxuICAgIHNlYXJjaDogJ0J1c2NhciB1bmEgbMOtbmVhJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdCdXNjYXIgcG9yIG5vbWJyZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQcOxYWRpciBsw61uZWEnLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhciBSZXBvcnRlJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWVfbGluZTogJ0zDrW5lYScsXG4gICAgICAgICAgICBuYW1lX2dyb3VwOiAnR3J1cG8nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBsYSBsw61uZWEgY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlbGltaW5hZG8gbGEgbMOtbmVhIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVkaXRhZG8gbGEgbMOtbmVhIGNvcnJlY3RhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBkZXNjYXJnYWRvIGVsIHJlcG9ydGUgZXhpdG9zYW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhciBsw61uZWEnLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdGFyIGzDrW5lYScsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdHdWFyZGFyJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWFyJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnTUlTSU9ORVMnLFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnVMOtdHVsbycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXBjacOzbicsXG4gICAgICAgICAgICBjYXB0dXJlX3BvaW50czogJ1B1bnRvcyBwb3IgY2FwdHVyYXMnLFxuICAgICAgICAgICAgbWlzc2lvbl9wb2ludHM6ICdQdW50b3MgcG9yIG1pc2nDs24nLFxuICAgICAgICAgICAgc3RhcnRfZGF0ZTogJ0ZlY2hhIGRlIGluaWNpbycsXG4gICAgICAgICAgICBlbmRfZGF0ZTogJ0ZlY2hhIGRlIGZpbicsXG4gICAgICAgICAgICByZWdpb25zOiAnUmVnacOzbicsXG4gICAgICAgICAgICBhY3Rpb25zOiAnQWNjaW9uZXMnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBhZGQ6ICdOdWV2YSBtaXNpw7NuJyxcbiAgICB9LFxuXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgY3JlYXRlTWlzc2lvbjoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uICcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBsYSBtaXNpw7NuIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgZXJyb3IuICcsXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlZE1lc3NhZ2U6ICdFbCBUaXR1bG8gc2UgZHVwbGljw7MuJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQWxnbyBzYWxpw7MgbWFsLiAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGlhbG9nOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnRXN0YSBvcGVyYWNpw7NuIG5vIHNlIHB1ZWRlIHJlYWxpemFyIGRlYmlkbyBhIHF1ZSBsYSBtaXNpw7NuIHRpZW5lIGNhcHR1cmFzIGFzb2NpYWRhcycsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgYWNlcHQ6ICdBY2VwdGFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZDoge1xuICAgICAgICAgICAgdGl0bGU6ICdOdWV2YSBtaXNpw7NuJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWxhcicsXG4gICAgICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgbWlzacOzbicsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsYXInLFxuICAgICAgICAgICAgICAgIGVkaXQ6ICdlZGl0YXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUw610dWxvIChvYmxpZ2F0b3JpbyknLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEZXNjcmlwY2nDs24gKG9ibGlnYXRvcmlvIC8gbcOheGltbyAyNTUgY2FyYWN0ZXJlcyknLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnTGEgZGVzY3JpcGNpw7NuIGRlYmUgdGVuZXIgcG9yIGxvIG1lbm9zIDUgY2FyYWN0ZXJlcy4nLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdMYSBkZXNjcmlwY2nDs24gZGViZSB0ZW5lciBtw6F4aW1vIDI1NSBjYXJhY3RlcmVzLicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0ZlY2hhIGRlIGluaWNpbycsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdMYSBmZWNoYSBkZSBpbmljaW8gbm8gZXMgdsOhbGlkYScsXG4gICAgICAgICAgICAgICAgICAgIGdyZWF0ZXJUaGFuOiAnTGEgZmVjaGEgZGUgaW5pY2lvIGRlYmUgc2VyIG1heW9yIGFsIGTDrWEgZGUgYXllci4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kRGF0ZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRmVjaGEgZGUgZmluJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0xhIGZlY2hhIGRlIGZpbiBubyBlcyB2w6FsaWRhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lvbjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2VsZWNjaW9uYSB1bmEgcmVnacOzbicsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdEZWJlcyBzZWxlY2Npb25hciBwb3IgbG8gbWVub3MgdW5hIHJlZ2nDs24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWlzc2lvblBvaW50czoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHVudGFqZSBkZSBsYSBtaXNpw7NuJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ0VsIHB1bnRhamUgZGViZSBzZXIgdW4gbsO6bWVybyB2w6FsaWRvJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhcHR1cmVQb2ludHM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1B1bnRhamUgZGUgY2FwdHVyYScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdFbCBwdW50YWplIGRlYmUgc2VyIHVuIG7Dum1lcm8gdsOhbGlkbycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgb3B0aW9uOiB7XG4gICAgICAgIHZhbGlkYXRpb25zOiAnVmFsaWRhY2nDs24nLFxuICAgICAgICBtaXNzaW9uczogJ01pc2lvbmVzJyxcbiAgICAgICAgY2FwdHVyZXM6ICdDYXB0dXJhcycsXG4gICAgICAgIHByb2R1Y3RzOiAnUHJvZHVjdG9zJyxcbiAgICAgICAgcmFua2luZ3M6ICdSYW5raW5ncycsXG4gICAgICAgIGNhdGFsb2dzOiAnQ2F0w6Fsb2dvcycsXG4gICAgICAgIGVkaXRQcm9maWxlOiAnRWRpdGFyIHBlcmZpbCcsXG4gICAgICAgIHNpZ25PdXQ6ICdDZXJyYXIgc2VzacOzbicsXG4gICAgICAgIHJlcG9ydHM6IHtcbiAgICAgICAgICAgIGdlb2xvY2FsaXphdGlvbjogJ1JlcG9ydGUgZGUgZ2VvbG9jYWxpemFjacOzbicsXG4gICAgICAgICAgICBzdGF0aXN0aWM6ICdSZXBvcnRlIGNvbXBhcmF0aXZvIGRlIHByZWNpb3MnLFxuICAgICAgICAgICAgcHJvZHVjdDogJ1JlcG9ydGUgZGUgcHJvZHVjdG8nLFxuICAgICAgICAgICAgc2NhbnM6ICdSZXBvcnRlIGRlIGNhcHR1cmFzJyxcbiAgICAgICAgfSxcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSZXBvcnRlIGRlIFByb2R1Y3RvJyxcbiAgICBuZXdTZXJhY2g6ICdOdWV2YSBCw7pzcXVlZGEnLFxuICAgIHBsYWNlaG9sZGVyU2VhcmNoOiAnTm9tYnJlIC8gQ8OzZGlnbycsXG4gICAgc2VsZWN0ZWQ6ICdTZWxlY2Npb25hZG8nLFxuICAgIHNlYXJjaDogJ0J1c2NhcicsXG4gICAgbXlMaXN0OiAnVmVyIG1pIGxpc3RhJyxcbiAgICBnZW5lcmFsU2VhcmNoOiAnQsO6c3F1ZWRhIEdlbmVyYWwnLFxuICAgIHNhdmVMaXN0OiAnR3VhcmRhciBhIG1pIGxpc3RhJyxcbiAgICBncmFwaGljOiAnR3LDoWZpY2EnLFxuICAgIGNsZWFyR3JhcGhpYzogJ0xpbXBpYXIgR3LDoWZpY2EnLFxuICAgIGVtcHR5U3RhdGU6ICdIYWNlciBiw7pzcXVlZGEgcGFyYSB2ZXIgcmVzdWx0YWRvcycsXG4gICAgZW1wdEdyYXBoeVN0YXRlOiAnR3JhZmljYXIgcGFyYSB2ZXIgcmVzdWx0YWRvcycsXG4gICAgc2F2ZVByb2R1Y3RzOiAnUHJvZHVjdG9zIGhhbiBzaWRvIGFncmVnYWRvcyBhIGxhIGxpc3RhJyxcbiAgICBzYXZlUHJvZHVjdHNFcnJvcjogJ1VuIGVycm9yIG9jdXJyaW8gbWllbnRyYXMgc2UgZ3VhcmRhYmEgbGEgbGlzdGEnLFxuICAgIHBhcmFtZXRlcjogJ1BhcmFtZXRyb3MnLFxuICAgIHZhbHVlczogJ1ZhbG9yJyxcbiAgICBzdGFydERhdGU6ICdGZWNoYSBJbmljaW8nLFxuICAgIGVuZERhdGU6ICdGZWNoYSBUZXJtaW5hY2nDs24nLFxuICAgIGRlbGV0ZUZpbHRlcnM6IFwiTGltcGlhciBGaWx0cm9zXCIsXG4gICAgZG93bmxvYWQ6IFwiRGVzY2FyZ2FyXCIsXG4gICAgbmFtZU9yQ29kZTogXCJOb21icmUgLyBDw7NkaWdvIGRlbCBwcm9kdWN0b1wiLFxuICAgIHN1Y2Nlc3NEb3dubG9hZDogXCJSZXBvcnRlIGRlc2NhcmdhZG8gZXhpdG9zYW1lbnRlXCIsXG4gICAgZGVsZXRlRnJvbUxpc3Q6IFwiQm9ycmFyIGRlIG1pIGxpc3RhXCIsXG4gICAgc3VjY2Vzc0RlbGV0ZTogXCJMb3MgcHJvZHVjdG9zIGhhbiBzaWRvIGJvcnJhZG9zIGRlIGxhIGxpc3RhXCIsXG4gICAgZXJyb3JEZWxldGU6IFwiVW4gZXJyb3Igb2N1cnJpbyBtaWVudHJhcyBzZSByZW1vdmlhbiBwcm9kdWN0b3MgZGUgbGEgbGlzdGFcIixcbiAgICBlcnJvckRvd25sb2FkOiBcIlVuICBlcnJvciBvY3VycmlvIG1pZW50cmFzIHNlIGRlc2NhcmdhYmEgZWwgcmVwb3J0ZVwiLFxuICAgIG5vU2VsZWN0ZWQ6IFwiTm8gaGF5IHByb2R1Y3RvcyBzZWxlY2Npb25hZG9zLi4uLi5cIixcbiAgICBjYXJkOiB7XG4gICAgICAgIGlkOiBcIklEOlwiLFxuICAgICAgICBiYXJjb2RlOiBcIkPDk0RJR08gREUgQkFSUkFTOlwiLFxuICAgICAgICBicmFuZDogXCJNQVJDQTpcIixcbiAgICAgICAgbGluZTogXCJMSU5FQTpcIixcbiAgICAgICAgZ3JvdXA6IFwiR1JVUE86XCIsXG4gICAgICAgIHVuaXQ6IFwiVU5JREFEOlwiLFxuICAgICAgICB0eXBlOiBcIlRJUE86XCIsXG4gICAgICAgIG5hbWU6IFwiTk9NQlJFOlwiLFxuICAgICAgICBsb3dlcl9wcmljZTogXCJNRU5PUiBQUkVDSU86XCIsXG4gICAgICAgIGhpZ2hlc3RfcHJpY2U6IFwiTUFZT1IgUFJFQ0lPOlwiLFxuICAgICAgICBncmFtbWFnZTogXCJHUkFNQUpFIC8gVU5JREFEOlwiLFxuICAgICAgICByZWNlbnRseTogXCJSZWNpZW50ZVwiLFxuICAgICAgICBoaWdoZXI6IFwiTcOhcyBhbHRvXCIsXG4gICAgICAgIGxvd2VyOiBcIk3DoXMgYmFqb1wiLFxuICAgICAgICBsb3dlclByb21vdGlvbjogXCJNw6FzIGJham8gY29uIGRlc2N1ZW50b1wiLFxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGV0YWlsOntcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIHByb2R1Y3RJZDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnSUQgUHJvZHVjdG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0PDs2RpZ28gZGUgYmFycmFzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdOb21icmUnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ0VsIGNhbXBvIGRlYmUgY29udGVuZXIgYWwgbWVub3MgZG9zIGNhcmFjdGVyZXMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01hcmNhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUaXBvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3J1cG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0zDrW5lYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcmFtYWplIC8gQ2FudGlkYWQnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiAnRWwgZ3JhbWFqZSBvIGNhbnRpZGFkIGRlYmUgc2VyIHVuIG7Dum1lcm8gdsOhbGlkbzogQ29uIGRvcyBkZWNpbWFsZXMgbcOheGltby4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVW5pZGFkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWluSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0ZvdG8gcHJpbmNpcGFsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdGb3RvIGRlIHByZWNpbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWluUHJpY2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1ByZWNpbyBtw61uaW1vJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXhQcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lvIG3DoXhpbW8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZGV0YWlsc0NvbnRhaW5lcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdGb3RvIGRlbCBwcm9kdWN0bycsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbGFyJyxcbiAgICAgICAgICAgIGNoYW5nZUltYWdlOiAnQ2FtYmlhciBpbWFnZW4nLFxuICAgICAgICAgICAgZWRpdEluZm9ybWF0aW9uOiAnRWRpdGFyIGluZm9ybWFjacOzbicsXG4gICAgICAgICAgICBzYXZlSW5mb3JtYXRpb246ICdHdWFyZGFyIGluZm9ybWFjacOzbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGxpc3RQcmljZTogJ0dyw6FmaWNhIC0gUHJlY2lvIGRlIGxpc3RhJyxcbiAgICAgICAgdW5pdGFyeVByaWNlOiAnR3LDoWZpY2EgLSBQcmVjaW8gdW5pdGFyaW8nLFxuICAgICAgICBwcmljZUhpc3Rvcnk6ICdIaXN0b3JpYWwgZGUgcHJlY2lvcycsXG4gICAgICAgIGRldGFpbDogJ0RldGFsbGUnLFxuICAgIH0sXG4gICAgc3RhcnREYXRlOiAnRmVjaGEgaW5pY2lhbCcsXG4gICAgZW5kRGF0ZTogJ0ZlY2hhIGZpbmFsJyxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBicmFuY2hPZmZpY2U6ICdTdWN1cnNhbCcsXG4gICAgICAgICAgICBtaW5QcmljZTogJ1ByZWNpbyBtw61uaW1vJyxcbiAgICAgICAgICAgIG1heFByaWNlOiAnUHJlY2lvIG3DoXhpbW8nLFxuICAgICAgICAgICAgY3VycmVudFByaWNlOiAnUHJlY2lvIGFjdHVhbCcsXG4gICAgICAgICAgICBhdmVyYWdlUHJpY2U6ICdQcmVjaW8gcHJvbWVkaW8nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzZWVIaXN0b3J5OiAnVmVyIGhpc3RvcmlhbCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZXRhaWw6e1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgcHJvZHVjdElkOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdJRCBQcm9kdWN0bycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ8OzZGlnbyBkZSBiYXJyYXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ05vbWJyZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01hcmNhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUaXBvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3J1cG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0zDrW5lYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcmFtYWplIC8gQ2FudGlkYWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1VuaWRhZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbkltYWdlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdGb3RvIHByaW5jaXBhbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VJbWFnZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRm90byBkZSBwcmVjaW8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2hhbmdlSW1hZ2U6ICdDYW1iaWFyIGltYWdlbicsXG4gICAgICAgICAgICBlZGl0SW5mb3JtYXRpb246ICdFZGl0YXIgaW5mb3JtYWNpw7NuJyxcbiAgICAgICAgICAgIHNhdmVJbmZvcm1hdGlvbjogJ0d1YXJkYXIgaW5mb3JtYWNpw7NuJyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1BST0RVQ1RPUycsXG4gICAgZmlsdGVyczoge1xuICAgICAgICBzZWFyY2hGaWVsZDogJ0J1c2NhciBwb3Igbm9tYnJlIG8gY8OzZGlnbyBkZWwgcHJvZHVjdG8nLFxuICAgICAgICBzdGFydERhdGU6ICdEZXNkZScsXG4gICAgICAgIGVuZERhdGU6ICdIYXN0YScsXG4gICAgICAgIHVwZGF0ZWRBdDogJ0ZlY2hhIGRlIG1vZGlmaWNhY2nDs24nLFxuICAgICAgICBjcmVhdGVkQXQ6ICdGZWNoYSBkZSBBbHRhJyxcbiAgICAgICAgcGFyYW06ICdQYXLDoW1ldHJvJyxcbiAgICAgICAgdmFsdWU6ICdWYWxvcicsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ0J1c2NhcicsXG4gICAgICAgIGNsZWFuRmlsdGVyOiAnTGltcGlhciBmaWx0cm9zJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXInLFxuICAgICAgICBjb21wYXJhdGl2ZUNoYXJ0OiAnR3JhZmljYXIgY29tcGFyYXRpdm9zJyxcbiAgICB9LFxuICAgIG9wdGlvbnNDYXRhbG9nOiB7XG4gICAgICAgIGJyYW5kc0NhdGFsb2c6ICdNYXJjYScsXG4gICAgICAgIGdyb3Vwc0NhdGFsb2c6ICdHcnVwbycsXG4gICAgICAgIGxpbmVzQ2F0YWxvZzogJ0zDrW5lYScsXG4gICAgICAgIHN0b3Jlc0NhdGFsb2c6ICdDYWRlbmEnLFxuICAgICAgICB1bml0c0NhdGFsb2c6ICdVbmlkYWQnLFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmFyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDogJ1NlbGVjY2lvbmFyJyxcbiAgICAgICAgICAgIHBob3RvOiAnRm90byBkZWwgcHJvZHVjdG8nLFxuICAgICAgICAgICAgcHJvZHVjdDogJ05vbWJyZScsXG4gICAgICAgICAgICBiYXJjb2RlOiAnQ8OzZGlnbycsXG4gICAgICAgICAgICBicmFuZDogJ01hcmNhJyxcbiAgICAgICAgICAgIHR5cGU6ICdUaXBvJyxcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6ICdGZWNoYSBkZSBjYXB0dXJhJyxcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQ6ICdGZWNoYSBkZSBtb2RpZmljYWNpw7NuJyxcbiAgICAgICAgICAgIGdyYW1tYWdlX3F1YW50aXR5OiAnQ2FudGlkYWQnLFxuICAgICAgICAgICAgdW5pdDogJ1VuaWRhZCcsXG4gICAgICAgICAgICBncm91cDogJ0dydXBvJyxcbiAgICAgICAgICAgIGxpbmU6ICdMw61uZWEnLFxuICAgICAgICAgICAgaGlnaGVzdF9wcmljZTogJ1ByZWNpbyBtw6FzIGFsdG8nLFxuICAgICAgICAgICAgbG93ZXJfcHJpY2U6ICdQcmVjaW8gbcOhcyBiYWpvJyxcbiAgICAgICAgICAgIHByb21vdGlvbl9sb3dlcl9wcmljZTogJ1ByZWNpbyBtw6FzIGJham8gY29uIHByb21vY2nDs24nLFxuICAgICAgICAgICAgbGFzdF9wcmljZTogJ8OabHRpbW8gcHJlY2lvIGNhcHR1cmFkbycsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5wdXQ6IHtcbiAgICAgICAgcm9sZToge1xuICAgICAgICAgICAgbGFiZWw6ICdSb2wgKicsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0X25hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTm9tYnJlIConLFxuICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICB9LFxuICAgICAgICBsYXN0X25hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQXBlbGxpZG8gcGF0ZXJubyAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW90aGVyX2xhc3RfbmFtZToge1xuICAgICAgICAgICAgbGFiZWw6ICdBcGVsbGlkbyBtYXRlcm5vJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnVXNhciB0ZW1hIG9zY3VybycsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2FsZToge1xuICAgICAgICAgICAgbGFiZWw6ICdDYW1iaWFyIGlkaW9tYScsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIGVtcGxveWVlX251bWJlcjoge1xuICAgICAgICAgICAgbGFiZWw6ICdOw7ptZXJvIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2VsbHBob25lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ07Dum1lcm8gZGUgY2VsdWxhcicsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lvbjoge1xuICAgICAgICAgICAgbGFiZWw6ICdSZWdpw7NuJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcm5hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnVXN1YXJpbyAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ29udHJhc2XDsWEgKicsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGNsb3NlOiAnQ2VycmFyJyxcbiAgICAgICAgc2F2ZTogJ0d1YXJkYXInLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSYW5raW5ncycsXG4gICAgdGFiczoge1xuICAgICAgICBjYXB0dXJpc3RzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ2NhcHR1cmlzdGFzJyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgICAgICAgICAgZW5kRGF0ZTogJ0ZlY2hhIGZpbmFsJyxcbiAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQnVzY2FyIHBvciBub21icmUgbyBuw7ptZXJvIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjbGVhckRhdGU6ICdMaW1waWFyIGZlY2hhcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdQb3NpY2nDs24nLFxuICAgICAgICAgICAgICAgICAgICBlbXBsb3llZU51bWJlcjogJ05vLiBkZSBlbXBsZWFkbycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAnUG9yY2VudGFqZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZENhcHR1cmVzOiAnQ2FwdHVyYXMgdmFsaWRhZGFzJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAnUHVudG9zJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1ZhbGlkYWRvcmVzJyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgICAgICAgICAgZW5kRGF0ZTogJ0ZlY2hhIGZpbmFsJyxcbiAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQnVzY2FyIHBvciBub21icmUgbyBuw7ptZXJvIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjbGVhckRhdGU6ICdMaW1waWFyIGZlY2hhcycsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVEYXRhOiAnR2VuZXJhciBkYXRvcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlczogJ1RvdGFsIGRlIGNhcHR1cmFzJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWQ6ICdUb3RhbCB2YWxpZGFkYXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlczogJ0hpc3RvcmlhbCBkZSBjYXB0dXJhcycsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkOiAnSGlzdG9yaWFsIGRlIHZhbGlkYWRhcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOdW1iZXI6ICdOby4gZGUgZW1wbGVhZG8nLFxuICAgICAgICAgICAgICAgICAgICBub21icmU6ICdOb21icmUnLFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAnUG9yY2VudGFqZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZENhcHR1cmVzOiAnQ2FwdHVyYXMgdmFsaWRhZGFzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1JlZ2lvbmVzJyxcbiAgICBzZWFyY2g6ICdCdXNjYXIgdW5hIHJlZ2nDs24nLFxuICAgIHNlYXJjaEJ5TmFtZTogJ0J1c2NhciBwb3Igbm9tYnJlICcsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdBw7FhZGlyIHJlZ2nDs24nLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhciBSZXBvcnRlJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgYWxpYXM6ICdBbGlhcycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgY3JlYWRvIGxhIHJlZ2nDs24gY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlbGltaW5hZG8gbGEgcmVnacOzbiBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGxhIHJlZ2nDs24gY29ycmVjdGFtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGRlc2NhcmdhZG8gZWwgcmVwb3J0ZSBleGl0b3NhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWFyIHJlZ2nDs24nLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdGFyIHJlZ2nDs24nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGFydERhdGU6ICdGZWNoYSBpbmljaWFsJyxcbiAgICBlbmREYXRlOiAnRmVjaGEgZmluYWwnLFxuICAgIGlucHV0OiB7XG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdCdXNjYXIgcG9yIG5vbWJyZSBvIG7Dum1lcm8gZGUgZW1wbGVhZG8nLFxuICAgICAgICB9LFxuICAgICAgICBtaXNzaW9uOiB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ01pc2nDs24nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBjbGVhckRhdGU6ICdMaW1waWFyIGZlY2hhcycsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHJhbmtpbmc6ICdQb3NpY2nDs24nLFxuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiAnTm8uIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgZWZmaWNpZW5jeTogJ1BvcmNlbnRhamUnLFxuICAgICAgICAgICAgdmFsaWRhdGVkX2NhcHR1cmVzOiAnQ2FwdHVyYXMgdmFsaWRhZGFzJyxcbiAgICAgICAgICAgIHBvaW50czogJ1B1bnRvcycsXG4gICAgICAgIH1cbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUmVwb3J0ZSBkZSBjYXB0dXJhcycsXG4gICAgZmlsdGVyczoge1xuICAgICAgICByZWdpb246ICdSZWdpw7NuJyxcbiAgICAgICAgc2Nhbm5lcjogJ0NhcHR1cmlzdGEnLFxuICAgICAgICBtaXNzaW9uOiAnTWlzacOzbicsXG4gICAgfSxcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUmVwb3J0ZSBDb21wYXJhdGl2byBkZSBQcmVjaW9zJyxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBicmFuY2hPZmZpY2U6ICdTdWN1cnNhbCcsXG4gICAgICAgICAgICBtaW5QcmljZTogJ1ByZWNpbyBtw61uaW1vJyxcbiAgICAgICAgICAgIG1heFByaWNlOiAnUHJlY2lvIG3DoXhpbW8nLFxuICAgICAgICAgICAgY3VycmVudFByaWNlOiAnUHJlY2lvIGFjdHVhbCcsXG4gICAgICAgICAgICBhdmVyYWdlUHJpY2U6ICdQcmVjaW8gcHJvbWVkaW8nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzZWVIaXN0b3J5OiAnVmVyIGhpc3RvcmlhbCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIHNjYW46ICdDYXB0dXJhJyxcbiAgICAgICAgICAgICAgICBjYXB0dXJlZEF0OiAnRmVjaGEgZGUgY2FwdHVyYScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICdQcmVjaW8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2xvc2U6ICdjZXJyYXInLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYWN0aW9uczogJ0FjY2lvbmVzJyxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1VuaWRhZGVzJyxcbiAgICBzZWFyY2g6ICdCdXNjYXIgdW5hIHVuaWRhZCcsXG4gICAgc2VhcmNoQnlOYW1lOiAnQnVzY2FyIHBvciBub21icmUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0HDsWFkaXIgdW5pZGFkJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXIgUmVwb3J0ZScsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBuYW1lOiAnTm9tYnJlJyxcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbjogJ0FicmV2aWFjacOzbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgY3JlYWRvIGxhIHVuaWRhZCBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVsaW1pbmFkbyBsYSB1bmlkYWQgY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWRpdGFkbyBsYSB1bmlkYWQgY29ycmVjdGFtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGRlc2NhcmdhZG8gZWwgcmVwb3J0ZSBleGl0b3NhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWFyIHVuaWRhZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgdW5pZGFkJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ0d1YXJkYXInLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXInLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdVc3VhcmlvcycsXG4gICAgc2VhcmNoOiAnQnVzY2FyIHVuIHVzdWFyaW8nLFxuICAgIHNlYXJjaEJ5TmFtZTogJ0J1c2NhciBwb3Igbm9tYnJlLCB1c3VhcmlvLCBlbWFpbCwgZXRpcXVldGFzLCBvIG7Dum1lcm8gZGUgZW1wbGVhZG8uJyxcbiAgICB0YWdzOiAnRXRpcXVldGFzJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0NyZWFyIG51ZXZvIHVzdWFyaW8nLFxuICAgICAgICBhZGRUYWdzOiAnQWdyZWdhciBldGlxdWV0YXMnLFxuICAgICAgICBjbG9zZTogJ0NlcnJhcicsXG4gICAgICAgIGRvd25sb2FkOiAnRGVzY2FyZ2FyIFJlcG9ydGUnLFxuICAgIH0sXG4gICAgZmlsdGVyczoge1xuICAgICAgICByb2xlOiAnRmlsdHJhciBwb3Igcm9sJyxcbiAgICAgICAgcmVnaW9uOiAnRmlsdHJhciBwb3IgcmVnacOzbicsXG4gICAgICAgIGFsbFJlZ2lvbnM6ICdUb2RhcyBsYXMgcmVnaW9uZXMnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogJ05vbWJyZScsXG4gICAgICAgICAgICBsYXN0X25hbWU6ICdBcGVsbGlkbyBwYXRlcm5vJyxcbiAgICAgICAgICAgIG1vdGhlcl9sYXN0X25hbWU6ICdBcGVsbGlkbyBtYXRlcm5vJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnVXN1YXJpbycsXG4gICAgICAgICAgICBlbWFpbDogJ0NvcnJlbyBlbGVjdHLDs25pY28nLFxuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiAnTm8uIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgIHJvbFNlbGVjdGVkOiAnUm9sJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBjcmVhZG8gZWwgdXN1YXJpbyBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVsaW1pbmFkbyBlbCB1c3VhcmlvIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVkaXRhZG8gZWwgdXN1YXJpbyBjb3JyZWN0YW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZGVzY2FyZ2FkbyBlbCByZXBvcnRlIGV4aXRvc2FtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXIgdXN1YXJpbycsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgdXN1YXJpbycsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdHdWFyZGFyJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWFyJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgIGVuZERhdGU6ICdGZWNoYSBmaW5hbCcsXG4gICAgaW5wdXQ6IHtcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0J1c2NhciBwb3Igbm9tYnJlIG8gbsO6bWVybyBkZSBlbXBsZWFkbycsXG4gICAgICAgIH0sXG4gICAgICAgIG1pc3Npb246IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTWlzacOzbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGNsZWFyRGF0ZTogJ0xpbXBpYXIgZmVjaGFzJyxcbiAgICAgICAgZ2VuZXJhdGVEYXRhOiAnR2VuZXJhciBkYXRvcycsXG4gICAgfSxcbiAgICB0b3RhbDoge1xuICAgICAgICBjYXB0dXJlczogJ1RvdGFsIGRlIGNhcHR1cmFzJyxcbiAgICAgICAgdmFsaWRhdGVkOiAnVG90YWwgdmFsaWRhZGFzJyxcbiAgICB9LFxuICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgY2FwdHVyZXM6ICdIaXN0b3JpYWwgZGUgY2FwdHVyYXMnLFxuICAgICAgICB2YWxpZGF0ZWQ6ICdIaXN0b3JpYWwgZGUgdmFsaWRhZGFzJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiAnTsO6bSBkZSBlbXBsZWFkbycsXG4gICAgICAgICAgICBmdWxsTmFtZTogJ05vbWJyZScsXG4gICAgICAgICAgICBlZmZpY2llbmN5OiAnUG9yY2VudGFqZScsXG4gICAgICAgICAgICB1c2VyVmFsaWRhdGVzOiAnQ2FwdHVyYXMgdmFsaWRhZGFzJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0J1xuXG4vLyBMT0NBTEVTXG5pbXBvcnQgZXMgZnJvbSAnLi9lcydcbmltcG9ydCBlbiBmcm9tICcuL2VuJ1xuXG5jb25zdCBsb2NhbGVzID0ge1xuICAgIGVzLFxuICAgIGVuLFxufVxuXG5leHBvcnQgY29uc3QgZ2V0STE4bkxhYmVsID0gKGxvY2FsZSwga2V5KSA9PiAoXG4gICAgZ2V0KGxvY2FsZXNbbG9jYWxlXSwga2V5KSB8fCAnJ1xuKVxuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlVGFibGVIZWFkZXIgPSAobG9jYWxlLCBoZWFkZXJzLCBwYXRoKSA9PiAoXG4gICAgaGVhZGVycy5tYXAoKGhlYWRlcikgPT4gKHtcbiAgICAgICAgLi4uaGVhZGVyLFxuICAgICAgICBsYWJlbDogZ2V0STE4bkxhYmVsKGxvY2FsZSwgYCR7cGF0aH0uJHtoZWFkZXIua2V5fWApLFxuICAgIH0pKVxuKVxuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlVGFibGVDb21wbGV4SGVhZGVyID0gKGxvY2FsZSwgaGVhZGVycywgcGF0aCkgPT4gKFxuICAgIGhlYWRlcnMubWFwKChoZWFkZXIpID0+ICh7XG4gICAgICAgIC4uLmhlYWRlcixcbiAgICAgICAgdGl0bGU6IGdldEkxOG5MYWJlbChsb2NhbGUsIGAke3BhdGh9LiR7aGVhZGVyLm5hbWV9YCksXG4gICAgfSkpXG4pXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzc2c0MDQgPSBlcnIubWVzc2FnZSA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SXG5cbiAgICAgIGlmIChzc2c0MDQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgbW9kOiBhbnlcbiAgICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cywgbW9kIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICAgJy80MDQnXG4gICAgICAgICAgKSlcblxuICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSB0b2xlcmF0ZSB0aGVzZSBwcm9wcyBtaXNzaW5nIGFuZCBzdGlsbCByZW5kZXIgdGhlXG4gICAgICAgICAgLy8gcGFnZSBpbnN0ZWFkIG9mIGZhbGxpbmcgYmFjayB0byBfZXJyb3I/XG4gICAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19OX1NTRykge1xuICAgICAgICAgICAgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoJy80MDQnLCAnLzQwNCcsIHRydWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIC8vIG5vbi1mYXRhbCBmYWxsYmFjayB0byBfZXJyb3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiwgU2Vjb25kYXJ5QnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9idXR0b25zJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdGF0aXN0aWMubW9kdWxlLnNjc3MnO1xuXG5jb25zdCBvbmx5TnVtYmVyc0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgY29kZSA9IGV2ZW50LndoaWNoID8gZXZlbnQud2hpY2ggOiBldmVudC5rZXlDb2RlXG5cbiAgICBpZiAoY29kZSA+IDMxICYmIChjb2RlIDwgNDggfHwgY29kZSA+IDU3KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IEZvcm1UYWJsZSA9IChwcm9wcykgPT4ge1xuICAgIGxldCB7Y2hhaW5zLCBwcm9kdWN0c30gPSBwcm9wcztcblxuICAgIGNoYWlucyA9IGNoYWlucyAmJiBjaGFpbnMubGVuZ3RoID8gY2hhaW5zIDogW107XG4gICAgcHJvZHVjdHMgPSBwcm9kdWN0cyAmJiBwcm9kdWN0cy5sZW5ndGggPyBwcm9kdWN0cyA6IFtdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17c3R5bGVzLnJlcG9ydFRhYmxlfT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDw7NkaWdvIGRlIGJhcnJhc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9kdWN0b1xuICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbnMubWFwKChjaGFpbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtjaGFpbi5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuYmFyY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW5zLm1hcCgoZmllbGQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdiYXJjb2RlLWlucHV0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uS2V5UHJlc3M9e29ubHlOdW1iZXJzSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17cHJvcHMuYmFyY29kZUZpZWxkSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWJhcmNvZGU9e3Byb2R1Y3QuYmFyY29kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmZpbHRlck9wdGlvbnN9PlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPFNlY29uZGFyeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9J2NhbmNlbGFyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuY2xlYXJCYXJjb2Rlc31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPSdndWFyZGFyIHkgY2VycmFyJ1xuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17cHJvcHMuZ2V0RXF1aXZhbGVuY2VzfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGb3JtVGFibGU7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXItZmx1aWRcIjogXCJzdGF0aXN0aWNfY29udGFpbmVyLWZsdWlkX18yOFZsRVwiLFxuXHRcImZpbGVVcGxvYWRcIjogXCJzdGF0aXN0aWNfZmlsZVVwbG9hZF9fMUdjSEZcIixcblx0XCJyZXBvcnRUYWJsZVwiOiBcInN0YXRpc3RpY19yZXBvcnRUYWJsZV9fM0xwVlJcIixcblx0XCJmaWx0ZXJPcHRpb25zXCI6IFwic3RhdGlzdGljX2ZpbHRlck9wdGlvbnNfX2p6RzFVXCIsXG5cdFwiZ2VvVG9nZ2xlXCI6IFwic3RhdGlzdGljX2dlb1RvZ2dsZV9fM05ZbW1cIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBMb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9sb2FkZXIvTG9hZGVyJztcblxuaW1wb3J0IHsgSXNDdXN0b21UaGVtZSwgZ2V0RGFya1RoZW1lLCBnZXRUaGVtZSwgZ2V0TG9jYWxlLCB2YWxpZGF0ZVNlc3Npb24sIGdldEhlYWRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Nlc3Npb24tbWFuYWdlbWVudCc7XG5pbXBvcnQgeyBidWlsZFRoZW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvdGhlbWUnO1xuaW1wb3J0IHsgZ2V0STE4bkxhYmVsIH0gZnJvbSAnLi4vLi4vLi4vaTE4bic7XG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCB7IFByaW1hcnlCdXR0b24sIFNlY29uZGFyeUJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucyc7XG5pbXBvcnQgRm9ybVRhYmxlIGZyb20gJy4vY29tcG9uZW50L3N0YXRpc3RpYy5mb3JtLXRhYmxlJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyJ1xuXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL3V0aWxzL2FwaSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9zdGF0aXN0aWMubW9kdWxlLnNjc3MnO1xuXG5jbGFzcyBTdGF0aXN0aWNSZXBvcnQgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNoYWluczogW10sXG4gICAgICAgIHByb2R1Y3RzOiBbXSxcbiAgICAgICAgZGlmZmVyZW5jZXM6IFtdLFxuICAgICAgICBlcXVpdmFsZW5jZXM6IHt9LFxuICAgICAgICBzaG93Rm9ybVRhYmxlOiBmYWxzZSxcbiAgICAgICAgZnJvbTogJycsXG4gICAgICAgIHRvOiAnJyxcbiAgICAgICAgY2hhaW5GaWx0ZXI6IFtdLFxuICAgICAgICBoYXNVcGxvYWRlZFJlcG9ydDogZmFsc2UsXG4gICAgICAgIGxhc3RVcGxvYWRlZFJlcG9ydERhdGU6IGZhbHNlLFxuICAgICAgICBvbkZpbGVDaGFuZ2VNZXNzYWdlOiAnJyxcbiAgICAgICAgb25GaWxlQ2hhbmdlRXJyb3I6IGZhbHNlLFxuICAgICAgICBzaG93TG9hZGVyOiBmYWxzZSxcbiAgICB9XG5cbiAgICB0aW1lb3V0ID0gbnVsbFxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IGhhc0RhcmtUaGVtZSA9IGdldERhcmtUaGVtZSgpID09PSAnMScgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGNvbnN0IGlzQ3VzdG9tID0gSXNDdXN0b21UaGVtZSgpO1xuXG4gICAgICAgIGlmIChoYXNEYXJrVGhlbWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20nKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlJylcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzQ3VzdG9tKSB7XG4gICAgICAgICAgICBjb25zdCB0aGVtZSA9IGdldFRoZW1lKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBidWlsZFRoZW1lKHRoZW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gY3VycmVudFRoZW1lO1xuXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuYWRkKCdjdXN0b20nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2V0UmVwb3J0U3RhdHVzKCk7XG4gICAgICAgIHZhbGlkYXRlU2Vzc2lvbigpXG4gICAgfVxuXG4gICAgZW1wdHlFcXVpdmFsZW5jZXMgPSAoY2hhaW5zLCBwcm9kdWN0cykgPT4ge1xuICAgICAgICBpZiAocHJvZHVjdHMubGVuZ3RoICYmIGNoYWlucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBlcXVpdmFsZW5jZXMgPSB7fTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9kdWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2R1Y3QgPSBwcm9kdWN0c1tpXTtcblxuICAgICAgICAgICAgICAgIGVxdWl2YWxlbmNlc1twcm9kdWN0LmJhcmNvZGVdID0gWy4uLm5ldyBBcnJheShjaGFpbnMubGVuZ3RoKV0uZmlsbCgtMSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVxdWl2YWxlbmNlcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJhcmNvZGVGaWVsZEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgeyBkYXRhc2V0LCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBjb25zdCB7IGluZGV4LCBiYXJjb2RlIH0gPSBkYXRhc2V0O1xuICAgICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSB0aGlzLnN0YXRlLmVxdWl2YWxlbmNlcztcblxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcblxuICAgICAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGVxdWl2YWxlbmNlc1tiYXJjb2RlXVtwYXJzZUludChpbmRleCldID0gcGFyc2VJbnQodmFsdWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZXF1aXZhbGVuY2VzfSk7XG4gICAgICAgIH0sIDEyMDApO1xuICAgIH1cblxuICAgIGNsZWFyQmFyY29kZXMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHtjaGFpbnMsIHByb2R1Y3RzfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGVxdWl2YWxlbmNlcyA9IHRoaXMuZW1wdHlFcXVpdmFsZW5jZXMoY2hhaW5zLCBwcm9kdWN0cyk7XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iYXJjb2RlLWlucHV0Jyk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0OiBhbnkgPSBpbnB1dHNbaV07XG5cbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHtlcXVpdmFsZW5jZXN9KTtcbiAgICB9XG5cbiAgICBvbkZpbGVDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IGZpbGVzLmxlbmd0aCAmJiBmaWxlc1swXTtcblxuICAgICAgICAgICAgY29uc3QgZW5kcG9pbnQgPSAnYXBpL21hc3Rlci1maWxlL2ltcG9ydCc7XG4gICAgICAgICAgICBjb25zdCByZXF1ZXN0ID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdtdWx0aXBhcnQvZm9ybS1kYXRhJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBnZXRIZWFkZXIoKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJlcXVlc3QuYXBwZW5kKCdjc3YnLCBzZWxlY3RlZEZpbGUpO1xuXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5wb3N0KGVuZHBvaW50LCByZXF1ZXN0LCBoZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YTogeyBjaGFpbnMsIHByb2R1Y3RzIH0gfSA9IHJlc3BvbnNlO1xuXG4gICAgICAgICAgICBjb25zdCBlcXVpdmFsZW5jZXMgPSB0aGlzLmVtcHR5RXF1aXZhbGVuY2VzKGNoYWlucywgcHJvZHVjdHMpO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjaGFpbnMsXG4gICAgICAgICAgICAgICAgcHJvZHVjdHM6IFtdLFxuICAgICAgICAgICAgICAgIGRpZmZlcmVuY2VzOiBbXSxcbiAgICAgICAgICAgICAgICBlcXVpdmFsZW5jZXM6IHt9LFxuICAgICAgICAgICAgICAgIGZyb206ICcnLFxuICAgICAgICAgICAgICAgIHRvOiAnJyxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGUsXG4gICAgICAgICAgICAgICAgc2hvd0Zvcm1UYWJsZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgb25GaWxlQ2hhbmdlTWVzc2FnZTogJ0FyY2hpdm8gQ1NWIGNvcnJlY3RvJyxcbiAgICAgICAgICAgIH0sICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjaGFpbkNoZWNrYm94OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hhaW4tY2hlY2tib3gnKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNoZWNrYm94IG9mIGNoYWluQ2hlY2tib3gpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWFhIC0gZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIG9uRmlsZUNoYW5nZU1lc3NhZ2U6ICdBcmNoaXZvIGluY29ycmVjdG8sIGFkanVudGEgdW4gQ1NWIHbDoWxpZG8nLFxuICAgICAgICAgICAgICAgIG9uRmlsZUNoYW5nZUVycm9yOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRSZXBvcnRTdGF0dXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBlbmRwb2ludCA9ICdhcGkvbWFzdGVyLWZpbGUvaW1wb3J0JztcblxuICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IGdldEhlYWRlcigpLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KGVuZHBvaW50LCBoZWFkZXJzKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gcmVzcG9uc2U7XG5cbiAgICAgICAgICAgIGxldCBsYXN0VXBsb2FkZWRSZXBvcnREYXRlID0gZGF0YSAmJiBkYXRhLmRhdGEgPyBuZXcgRGF0ZShkYXRhLmRhdGEuZGF0ZSkudG9EYXRlU3RyaW5nKCkgOiAnJztcbiAgICAgICAgICAgIGxhc3RVcGxvYWRlZFJlcG9ydERhdGUgPSB0aGlzLmZvcm1hdERhdGUobGFzdFVwbG9hZGVkUmVwb3J0RGF0ZSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGhhc1VwbG9hZGVkUmVwb3J0OiBkYXRhLnN0YXR1cyxcbiAgICAgICAgICAgICAgICBsYXN0VXBsb2FkZWRSZXBvcnREYXRlOiBkYXRhICYmIGRhdGEuZGF0YSA/IGZvcm1hdChuZXcgRGF0ZShkYXRhLmRhdGEuZGF0ZSksICdNTS9kZC95eXl5JykgOiAnJyxcbiAgICAgICAgICAgICAgICBjaGFpbnM6IGRhdGEgJiYgZGF0YS5kYXRhID8gZGF0YS5kYXRhLmNoYWlucyA6IFtdLFxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoYWluQ2hlY2tib3g6IGFueSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGFpbi1jaGVja2JveCcpO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgY2hlY2tib3ggb2YgY2hhaW5DaGVja2JveCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYWEgLSBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0RXF1aXZhbGVuY2VzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qge2NoYWlucywgY2hhaW5GaWx0ZXIsIGVxdWl2YWxlbmNlcywgZnJvbSwgdG99ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gJ2FwaS9tYXN0ZXItZmlsZS9jb21wYXJlJztcblxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgZnJvbURhdGU6IHRoaXMuZm9ybWF0RGF0ZShmcm9tKSxcbiAgICAgICAgICAgICAgICB0b0RhdGU6IHRoaXMuZm9ybWF0RGF0ZSh0byksXG4gICAgICAgICAgICAgICAgY2hhaW5zOiBjaGFpbkZpbHRlci5sZW5ndGggPyBjaGFpbkZpbHRlciA6IGNoYWlucy5tYXAoKGNoYWluKSA9PiBjaGFpbi5pZCksXG4gICAgICAgICAgICAgICAgZXF1aXZhbGVuY2VzLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yIChsZXQgYmFyY29kZSBpbiBlcXVpdmFsZW5jZXMpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmVxdWl2YWxlbmNlc1tiYXJjb2RlXSA9IGVxdWl2YWxlbmNlc1tiYXJjb2RlXS5maWx0ZXIoKGJhcmNvZGUpID0+IGJhcmNvZGUpXG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlcXVlc3QuZXF1aXZhbGVuY2VzW2JhcmNvZGVdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVxdWVzdC5lcXVpdmFsZW5jZXNbYmFyY29kZV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBnZXRIZWFkZXIoKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0LmVxdWl2YWxlbmNlcztcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoZW5kcG9pbnQsIHJlcXVlc3QsIGhlYWRlcnMpO1xuICAgICAgICAgICAgY29uc3Qge2RhdGE6IHsgY291bnQsIHByb2R1Y3RfZGlmZmVyZW5jZXMsIHJlc3VtZSB9fSA9IHJlc3BvbnNlO1xuXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICBkaWZmZXJlbmNlczogcHJvZHVjdF9kaWZmZXJlbmNlcyxcbiAgICAgICAgICAgICAgICByZXN1bWUsXG4gICAgICAgICAgICAgICAgY2hhaW5GaWx0ZXI6IHJlcXVlc3QuY2hhaW5zLFxuICAgICAgICAgICAgICAgIHNob3dGb3JtVGFibGU6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhYWEgLSBlcnJvcjogJywgZXJyb3IpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZG93bmxvYWQocmVzOiBhbnksIHR5cGUgPSAndGV4dC9jc3Y7Y2hhcnNldD11dGYtODsnLCBleHRlbnNpb24gPSAnY3N2Jykge1xuICAgICAgICBjb25zdCB1cmwgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChcbiAgICAgICAgICAgIG5ldyBCbG9iKFtcIlxcdWZlZmZcIiwgcmVzXSwge1xuICAgICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgZGF0ZSA9IGZvcm1hdChuZXcgRGF0ZSgpLCAnTU0tZGQteXl5eS1ISDptbScpO1xuICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgYHN0YXRpc3RpYy1yZXBvcnQtJHtkYXRlfS4ke2V4dGVuc2lvbn1gKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgbGluay5jbGljaygpO1xuICAgICAgICBsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG4gICAgfVxuXG4gICAgZG93bmxvYWRSZXBvcnQgPSBhc3luYyAoZGlzYWJsZURhdGVGaWx0ZXIgPSBmYWxzZSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgY29uc3Qge2NoYWlucywgY2hhaW5GaWx0ZXIsIGVxdWl2YWxlbmNlcywgZnJvbSwgdG99ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGVuZHBvaW50ID0gJ2FwaS9tYXN0ZXItZmlsZS9jb21wYXJlJztcblxuICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSB7XG4gICAgICAgICAgICAgICAgZnJvbURhdGU6IGRpc2FibGVEYXRlRmlsdGVyID8gJycgOiB0aGlzLmZvcm1hdERhdGUoZnJvbSksXG4gICAgICAgICAgICAgICAgdG9EYXRlOiBkaXNhYmxlRGF0ZUZpbHRlciA/ICcnIDogdGhpcy5mb3JtYXREYXRlKHRvKSxcbiAgICAgICAgICAgICAgICBjc3Y6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hhaW5zOiBjaGFpbkZpbHRlci5sZW5ndGggPyBjaGFpbkZpbHRlciA6IGNoYWlucy5tYXAoKGNoYWluKSA9PiBjaGFpbi5pZCksXG4gICAgICAgICAgICAgICAgZXF1aXZhbGVuY2VzLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZm9yIChsZXQgYmFyY29kZSBpbiBlcXVpdmFsZW5jZXMpIHtcbiAgICAgICAgICAgICAgICByZXF1ZXN0LmVxdWl2YWxlbmNlc1tiYXJjb2RlXSA9IGVxdWl2YWxlbmNlc1tiYXJjb2RlXS5maWx0ZXIoKGJhcmNvZGUpID0+IGJhcmNvZGUpXG5cbiAgICAgICAgICAgICAgICBpZiAoIXJlcXVlc3QuZXF1aXZhbGVuY2VzW2JhcmNvZGVdLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcmVxdWVzdC5lcXVpdmFsZW5jZXNbYmFyY29kZV07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGhlYWRlcnMgPSB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiBnZXRIZWFkZXIoKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGRlbGV0ZSByZXF1ZXN0LmVxdWl2YWxlbmNlcztcblxuXHRcdFx0XHRcdFx0dGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIHNob3dMb2FkZXI6IHRydWUsXG5cdFx0XHRcdFx0XHR9KTtcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChlbmRwb2ludCwgcmVxdWVzdCwgaGVhZGVycyk7XG5cblx0XHRcdFx0XHRcdHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBzaG93TG9hZGVyOiBmYWxzZSxcblx0XHRcdFx0XHRcdH0pO1xuXG4gICAgICAgICAgICB0aGlzLmRvd25sb2FkKHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWFhIC0gZXJyb3I6ICcsIGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgICAgICBpZiAoZGF0ZSkge1xuICAgICAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xuXG4gICAgICAgICAgICBsZXQgbW9udGggPSAnJyArIChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGxldCBkYXkgPSAnJyArIGRhdGUuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgbGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgICAgIGlmIChtb250aC5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgbW9udGggPSAnMCcgKyBtb250aDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRheS5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICAgICAgZGF5ID0gJzAnICsgZGF5O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJ1xuICAgIH1cblxuICAgIGZyb21EYXRlSGFuZGxlciA9IChkYXRlOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBmcm9tOiBkYXRlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICB0b0RhdGVIYW5kbGVyID0gKGRhdGU6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHRvOiBkYXRlLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFpbkNoZWNrYm94SGFuZGxlciA9IChldmVudDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUsIGNoZWNrZWQgfSA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgY29uc3QgeyBjaGFpbkZpbHRlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgY2hhaW5JbmRleCA9IGNoYWluRmlsdGVyLmZpbmRJbmRleCgoY2hhaW5JZCkgPT4gY2hhaW5JZCA9PSB2YWx1ZSk7XG5cbiAgICAgICAgaWYgKCFjaGVja2VkKSB7XG4gICAgICAgICAgICBjaGFpbkZpbHRlci5zcGxpY2UoY2hhaW5JbmRleCwgMSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2hlY2tlZCkge1xuICAgICAgICAgICAgY2hhaW5GaWx0ZXIucHVzaChwYXJzZUludCh2YWx1ZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuXHRcdFx0Y29uc3Qge1xuXHRcdFx0XHRvbkZpbGVDaGFuZ2VNZXNzYWdlLFxuXHRcdFx0XHRvbkZpbGVDaGFuZ2VFcnJvcixcblx0XHRcdFx0cHJvZHVjdHMsXG5cdFx0XHRcdGNoYWlucyxcblx0XHRcdFx0ZGlmZmVyZW5jZXMsXG5cdFx0XHRcdHNob3dGb3JtVGFibGUsXG5cdFx0XHRcdGZyb20sXG5cdFx0XHRcdHRvLFxuXHRcdFx0XHRoYXNVcGxvYWRlZFJlcG9ydCxcblx0XHRcdFx0bGFzdFVwbG9hZGVkUmVwb3J0RGF0ZSxcblx0XHRcdFx0c2hvd0xvYWRlcixcblx0XHRcdH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIGNvbnN0IGxvY2FsZSA9IGdldExvY2FsZSgpXG5cbiAgICAgICAgY29uc3QgZm9ybVRhYmxlUHJvcHMgPSB7XG4gICAgICAgICAgICBiYXJjb2RlRmllbGRIYW5kbGVyOiB0aGlzLmJhcmNvZGVGaWVsZEhhbmRsZXIsXG4gICAgICAgICAgICBjbGVhckJhcmNvZGVzOiB0aGlzLmNsZWFyQmFyY29kZXMsXG4gICAgICAgICAgICBnZXRFcXVpdmFsZW5jZXM6IHRoaXMuZ2V0RXF1aXZhbGVuY2VzLFxuICAgICAgICAgICAgY2hhaW5zLFxuICAgICAgICAgICAgcHJvZHVjdHMsXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIDxIZWFkZXIgbG9jYWxlPXtsb2NhbGV9Lz5cblxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dGl0bGU+XG4gICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ3N0YXRpc3RpY1JlcG9ydC50aXRsZScpfVxuICAgICAgICAgICAgICAgICAgICA8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXItZmx1aWQnPlxuICAgICAgICAgICAgICAgICAgICA8aDE+e2dldEkxOG5MYWJlbChsb2NhbGUsICdzdGF0aXN0aWNSZXBvcnQudGl0bGUnKX08L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIHtoYXNVcGxvYWRlZFJlcG9ydCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJlcG9ydFN0YXR1c30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4gMSkgU2VsZWNjacOzbiBkZSBsaXN0YSBkZSBwcm9kdWN0b3M8L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1cGRhdGUtaW5mbyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3VwZGF0ZS1pbmZvLXRpdGxlJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIMOabHRpbWEgYWN0dWFsaXphY2nDs24gZGVsIGxpc3RhZG86IHtsYXN0VXBsb2FkZWRSZXBvcnREYXRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2Vjb25kYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ2FkdmFuY2VkU2VhcmNoLmFjdGlvbnMuZ2V0Q3VycmVudFJlcG9ydCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5kb3dubG9hZFJlcG9ydCh0cnVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsgc3R5bGVzLmZpbGVVcGxvYWQgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND7Cv0Rlc2VhIHN1YmlyIHVuYSBsaXN0YSBudWV2YT88L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW5wdXQtZmlsZS1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2lucHV0LWZpbGUnIHR5cGU9J2ZpbGUnIG9uQ2hhbmdlPXsgdGhpcy5vbkZpbGVDaGFuZ2UgfS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge29uRmlsZUNoYW5nZU1lc3NhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9eyBvbkZpbGVDaGFuZ2VFcnJvciA/ICdpbnB1dC1maWxlLWVycm9yJyA6ICdpbnB1dC1maWxlLXN1Y2Nlc3MnIH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b25GaWxlQ2hhbmdlTWVzc2FnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAge2NoYWlucy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+MikgU2VsZWNjaW9uYSB1biBwZXJpb2RvIHBhcmEgY29tcGFyYXIgcHJlY2lvczwvaDQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZnJvbURhdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRJMThuTGFiZWwobG9jYWxlLCAnY2FwdHVyZXMuZmlsdGVycy5zdGFydERhdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ9e2Zyb219XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubGluZUxhYmVsPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5mcm9tRGF0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdkZC9tbS95eXl5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PSdkZC9NTS95eXl5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b0RhdGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRJMThuTGFiZWwobG9jYWxlLCAnY2FwdHVyZXMuZmlsdGVycy5lbmREYXRlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5saW5lTGFiZWw9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnRvRGF0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdkZC9tbS95eXl5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PSdkZC9NTS95eXl5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb2wtbWQtNyBzZWFyY2gtYnV0dG9uLWNvbnRhaW5lcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRJMThuTGFiZWwobG9jYWxlLCAnYWR2YW5jZWRTZWFyY2guYWN0aW9ucy5nZW5lcmF0ZVJlcG9ydCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuZ2V0RXF1aXZhbGVuY2VzKCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJpbWFyeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRJMThuTGFiZWwobG9jYWxlLCAnYWR2YW5jZWRTZWFyY2guYWN0aW9ucy5kb3dubG9hZCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuZG93bmxvYWRSZXBvcnQoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgKTogbnVsbH1cblxuICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdHMubGVuZ3RoICYmIHNob3dGb3JtVGFibGUgPyAoPEZvcm1UYWJsZSB7Li4uZm9ybVRhYmxlUHJvcHN9IC8+KTogZmFsc2V9XG5cbiAgICAgICAgICAgICAgICAgICAge2RpZmZlcmVuY2VzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZXBvcnQtdGFibGUtY29udGFpbmVyJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMucmVwb3J0VGFibGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGhlYWQgY2xhc3NOYW1lPSdyZXBvcnQtdGFibGUtc3RpY2t5LWhlYWRlcic+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nY2hhaW4tM2IgaXRlbS1jb2wnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdjaGFpbi0zYiBjb2RlLWNvbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsYXZlIGRlIHByb2R1Y3RvIDNCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdjaGFpbi0zYiBiYXJjb2RlLWNvbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEPDs2RpZ28gZGUgYmFycmFzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdjaGFpbi0zYiBkZXNjcmlwdGlvbi1jb2wnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZXNjcmlwY2nDs24gM0JcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2NoYWluLTNiIGNvbnRlbnQtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGVuaWRvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdjaGFpbi0zYiB1bml0LWNvbCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFVuaWRhZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nY2hhaW4tM2IgdHlwZS1jb2wnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaXBvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGggY2xhc3NOYW1lPSdjaGFpbi0zYiBzdGF0dXMtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXN0YXR1c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT0nY2hhaW4tM2IgcHJpY2UtY29sJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJlY2lvIGRlIHZlbnRhIDNCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hhaW5zLm1hcCgoY2hhaW4sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBjbGFzc05hbWU9J2NoYWluLWhlYWRlci1jb250YWluZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjaGFpbi1oZWFkZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+IHtjaGFpbi5uYW1lfSA8L2gxPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPSdjaGFpbi1oZWFkZXItdGFibGUnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiBQcmVjaW8gZGUgdmVudGEge2NoYWluLm5hbWV9IDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4gR3JhbWFqZSA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IFVuaWRhZCA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IERlc2NyaXBjacOzbiA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IEPDs2RpZ28gZGUgYmFycmFzIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aD4gUHJlY2lvIGNvbXBhcmFkbyA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGg+IERpZmVyZW5jaWEgZW4gcGVzb3MgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiBQb3JjZW50YWplIGRlIGRpZmVyZW5jaWEgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoPiBDYXB0dXJhcyA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpZmZlcmVuY2VzLm1hcCgoZGlmZmVyZW5jZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWZmZXJlbmNlLml0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWZmZXJlbmNlLmtleWNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWZmZXJlbmNlLmJhcmNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWZmZXJlbmNlLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlmZmVyZW5jZS51bml0X3F1YW50aXR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlmZmVyZW5jZS51bml0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlmZmVyZW5jZS50eXBlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlmZmVyZW5jZS5zdGF0dXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaWZmZXJlbmNlLnByaWNlID8gYCQke2RpZmZlcmVuY2UucHJpY2V9YCA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlmZmVyZW5jZS5jb21wYXJhdGlvbnMubWFwKChjb21wYXJhdGlvbiwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtzdHlsZXMucmVwb3J0VGFibGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nZmllbGQgZmllbGQtYmFyY29kZSc+IHtjb21wYXJhdGlvbi5jaGFpbl9wcmljZSA/IGAkJHtjb21wYXJhdGlvbi5jaGFpbl9wcmljZX1gIDogJyd9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nZmllbGQgZmllbGQtZ3JhbW1hZ2UnPiB7Y29tcGFyYXRpb24uZ3JhbW1hZ2V9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nZmllbGQgZmllbGQtdW5pdCc+IHtjb21wYXJhdGlvbi51bml0fSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J2ZpZWxkIGZpZWxkLXVuaXRfcHJpY2UnPiB7Y29tcGFyYXRpb24uZGVzY3JpcHRpb259IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nZmllbGQgZmllbGQtcHJpY2UnPiB7Y29tcGFyYXRpb24uYmFyY29kZX0gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdmaWVsZCBmaWVsZC1iYXJjb2RlJz4ge2NvbXBhcmF0aW9uLmNvbXBhcmVkX3ByaWNlID8gYCQke2NvbXBhcmF0aW9uLmNvbXBhcmVkX3ByaWNlfWAgOiAnJ30gPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPSdmaWVsZCBmaWVsZC1kaWZmZXJlbmNlJz4ge2NvbXBhcmF0aW9uLmRpZmZlcmVuY2UgPyBgJCR7Y29tcGFyYXRpb24uZGlmZmVyZW5jZX1gIDogJyd9IDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT0nZmllbGQgZmllbGQtcGVyY2VudGFnZSc+IHtjb21wYXJhdGlvbi5wZXJjZW50YWdlfSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9J2ZpZWxkIGZpZWxkLXRvdGFsX29mX3NjYW5zJz4ge2NvbXBhcmF0aW9uLnRvdGFsX29mX3NjYW5zfSA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IGZhbHNlfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPExvYWRlciBzaG93PXtzaG93TG9hZGVyfSAvPlxuICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuY29uc3Qgd2l0aFJvdXRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgcmV0dXJuIDxTdGF0aXN0aWNSZXBvcnQgey4uLnByb3BzfSByb3V0ZXI9e3JvdXRlcn0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcjtcbiIsIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuL2Jhc2VVcmwnO1xuXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMLHdpdGhDcmVkZW50aWFsczogZmFsc2VcbiAgLy90aW1lb3V0OiAxMDAwXG59KSIsImV4cG9ydCBjb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcbmV4cG9ydCBjb25zdCBiYXNlVVJMR2VvcmVmID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0VPUkVGX0FQSTtcbmV4cG9ydCBjb25zdCBnZW9yZWZBcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HRU9SRUZfQVBJX0tFWTtcbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IGNyZWF0ZVNlc3Npb24gPSAodG9rZW46IHN0cmluZywgbmFtZTogc3RyaW5nLCByb2w6IEFycmF5PHN0cmluZz4sIHByb2ZpbGVQaWN0cmU6IHN0cmluZywgaWQ6IHN0cmluZywgZGFya190aGVtZT86IG51bWJlciwgdGhlbWU/OiBhbnksIGxvZ28/OiBzdHJpbmcsICBsb2NhbGU/OiBzdHJpbmcpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIG5hbWUpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvbCcsIHJvbC5qb2luKCd8JykpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgaWQpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtfdGhlbWUnLCBkYXJrX3RoZW1lLnRvU3RyaW5nKCkpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsZScsIGxvY2FsZSlcblxuICAgIGlmICh0aGVtZSAhPT0gbnVsbCB8fCAhdGhlbWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkodGhlbWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBKU09OLnN0cmluZ2lmeSh7fSkpO1xuICAgIH1cbiAgICBpZiAocHJvZmlsZVBpY3RyZSAmJiBwcm9maWxlUGljdHJlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2ZpbGVQaWN0dXJlJywgYGh0dHBzOi8vY2RuLXByaWNlY2hlY2suc2ZvMi5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLyR7cHJvZmlsZVBpY3RyZX1gKVxuICAgIH1cbiAgICBpZihsb2dvICYmIGxvZ28ubGVuZ3RoID4gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nbycsIGBodHRwczovL2xhbXB0M2JkaWFnLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcmljZWNoZWNrdjIvJHtsb2dvfWApIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dvJywgYC9pbWcvbG9nby5wbmdgKSBcbiAgICB9XG59XG5cbmNvbnN0IGRlbGV0ZVNlc3Npb24gPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xvY2FsZScpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhcmtfdGhlbWUnKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ25hbWUnKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyb2wnKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dvJywgYC9pbWcvbG9nby5wbmdgKSBcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZVBpY3R1cmUnKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aGVtZScpXG59XG5cbmNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcblxuXG5jb25zdCBnZXROYW1lID0gKCk6IHN0cmluZyB8IG51bGwgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKVxuXG5jb25zdCBnZXRJZCA9ICgpOiBzdHJpbmcgfCBudWxsID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXG5cbmNvbnN0IGdldERhcmtUaGVtZSA9ICgpOiBhbnkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtfdGhlbWUnKVxuY29uc3QgZ2V0TG9jYWxlID0gKCk6IGFueSA9PiB7XG4gICAgY29uc3QgaXNCcm93c2VyID0gKCkgPT4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICBjb25zdCBoYXNMb2NhbGUgPSAoKSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxlJykgfHwgZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSAnZXMnO1xuXG4gICAgaWYgKGlzQnJvd3NlcigpICYmIGhhc0xvY2FsZSgpKSB7XG4gICAgICAgIGxvY2FsZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxlJykgfHwgbG9jYWxlXG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsZVxufVxuXG5jb25zdCBnZXRQcm9maWxlUGljdHVyZSA9ICgpOiBzdHJpbmcgfCBudWxsID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlUGljdHVyZScpXG5cbmNvbnN0IGdldFJvbGVzID0gKCk6IEFycmF5PHN0cmluZz4gfCBudWxsID0+IHtcbiAgICBjb25zdCByb2xlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2wnKVxuICAgIGlmIChyb2xlcylcbiAgICAgICAgcmV0dXJuIHJvbGVzLnNwbGl0KCd8JylcblxuICAgIHJldHVybiBudWxsXG59XG5cbmNvbnN0IHZhbGlkYXRlU2Vzc2lvbiA9IChuZXdSb3V0ZT86IHN0cmluZykgPT4ge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfSBlbHNlIGlmIChuZXdSb3V0ZSkge1xuICAgICAgICBSb3V0ZXIucHVzaChuZXdSb3V0ZSlcbiAgICB9XG59XG5cbmNvbnN0IGdldEhlYWRlciA9ICgpOiB7IEF1dGhvcml6YXRpb246IHN0cmluZyB9ID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgcmV0dXJuIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUlzQW5hbHlzdCA9ICgpID0+IHtcbiAgICBsZXQgcm9sZSA9ICcnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgcm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2wnKTtcblxuICAgIH1cbiAgICBjb25zdCB2YWxpZGF0aW9uID0gcm9sZSA9PT0gJ0FuYWxpc3RhJztcbiAgICByZXR1cm4gdmFsaWRhdGlvbjtcbn1cblxuY29uc3QgdmFsaWRhdGVJc0FkbWluID0gKCkgPT4ge1xuICAgIGxldCByb2xlID0gJyc7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICByb2xlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcm9sZSA9PT0gJ0FkbWluJztcbn1cblxuY29uc3QgZ2V0TG9nbyA9ICgpID0+IHtcbiAgICBsZXQgbG9nbyA9IFwiL2ltZy9sb2dvLnBuZ1wiO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgbG9nbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dvJyk7XG4gICAgICAgIHJldHVybiBsb2dvO1xuICAgIH1cbiAgICByZXR1cm4gbG9nbztcbn1cbmNvbnN0IElzQ3VzdG9tVGhlbWUgPSAoKSA9PiB7XG4gICAgbGV0IGlzQ3VzdG9tID0gZmFsc2U7XG4gICAgbGV0IHRoZW1lID0gXCJcIjtcbiAgICBsZXQgb2JqVGhlbWUgPSB7fVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IGhhc0RhcmtUaGVtZSA9IGdldERhcmtUaGVtZSgpID09PSAnMScgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgICAgIGlmICh0aGVtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgb2JqVGhlbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmpUaGVtZSkubGVuZ3RoICE9PSAwICYmICFoYXNEYXJrVGhlbWUpIHtcbiAgICAgICAgICAgIGlzQ3VzdG9tID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBpc0N1c3RvbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNDdXN0b207XG59XG5cbmNvbnN0IGdldFRoZW1lID0gKCkgPT4ge1xuICAgIGxldCB0aGVtZSA9IFwiXCI7XG4gICAgbGV0IG9ialRoZW1lID0ge31cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodGhlbWUgIT09IFwidW5kZWZpbmVkXCIgfHwgIXRoZW1lKSB7XG4gICAgICAgICAgICBvYmpUaGVtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ialRoZW1lO1xuICAgIH1cbiAgICByZXR1cm4gb2JqVGhlbWU7XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0TG9nbyxcbiAgICBJc0N1c3RvbVRoZW1lLFxuICAgIGNyZWF0ZVNlc3Npb24sXG4gICAgZGVsZXRlU2Vzc2lvbixcbiAgICBnZXRUb2tlbixcbiAgICBnZXROYW1lLFxuICAgIGdldFByb2ZpbGVQaWN0dXJlLFxuICAgIGdldFJvbGVzLFxuICAgIHZhbGlkYXRlU2Vzc2lvbixcbiAgICBnZXRIZWFkZXIsXG4gICAgZ2V0SWQsXG4gICAgZ2V0RGFya1RoZW1lLFxuICAgIGdldExvY2FsZSxcbiAgICB2YWxpZGF0ZUlzQW5hbHlzdCxcbiAgICBnZXRUaGVtZSxcbiAgICB2YWxpZGF0ZUlzQWRtaW4sXG59XG4iLCJjb25zdCBMaWdodGVuRGFya2VuQ29sb3IgPSAoY29sOiBzdHJpbmcsIGFtdDogbnVtYmVyKSA9PiB7XG4gICAgbGV0IHVzZVBvdW5kID0gZmFsc2U7XG5cbiAgICBpZiAoY29sWzBdID09IFwiI1wiKSB7XG4gICAgICAgIGNvbCA9IGNvbC5zbGljZSgxKTtcbiAgICAgICAgdXNlUG91bmQgPSB0cnVlO1xuICAgIH1cblxuICAgIGxldCBudW0gPSBwYXJzZUludChjb2wsIDE2KTtcblxuICAgIGxldCByID0gKG51bSA+PiAxNikgKyBhbXQ7XG5cbiAgICBpZiAociA+IDI1NSkgciA9IDI1NTtcbiAgICBlbHNlIGlmIChyIDwgMCkgciA9IDA7XG5cbiAgICBsZXQgYiA9ICgobnVtID4+IDgpICYgMHgwMEZGKSArIGFtdDtcblxuICAgIGlmIChiID4gMjU1KSBiID0gMjU1O1xuICAgIGVsc2UgaWYgKGIgPCAwKSBiID0gMDtcblxuICAgIGxldCBnID0gKG51bSAmIDB4MDAwMEZGKSArIGFtdDtcblxuICAgIGlmIChnID4gMjU1KSBnID0gMjU1O1xuICAgIGVsc2UgaWYgKGcgPCAwKSBnID0gMDtcblxuICAgIHJldHVybiAodXNlUG91bmQgPyBcIiNcIiA6IFwiXCIpICsgKGcgfCAoYiA8PCA4KSB8IChyIDw8IDE2KSkudG9TdHJpbmcoMTYpO1xuXG59XG5cbmV4cG9ydCBjb25zdCBidWlsZFRoZW1lID0gKHRoZW1lKSA9PiB7XG4gICAgaWYgKHRoZW1lICYmIE9iamVjdC5rZXlzKHRoZW1lKS5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgbGlnaHRlbiA9IHRoZW1lPy53YWxscGFwZXIgJiYgYCR7TGlnaHRlbkRhcmtlbkNvbG9yKHRoZW1lLndhbGxwYXBlciwgMjApfSAhaW1wb3J0YW50YDtcbiAgICAgICAgY29uc3QgZGFya2VuID0gdGhlbWU/LndhbGxwYXBlciAmJiBgJHtMaWdodGVuRGFya2VuQ29sb3IodGhlbWUud2FsbHBhcGVyLCAtMjApfSAhaW1wb3J0YW50YDtcbiAgICAgICAgY29uc3QgZm9udERhcmtlbiA9IHRoZW1lPy50ZXh0ICYmIGAke0xpZ2h0ZW5EYXJrZW5Db2xvcih0aGVtZS50ZXh0LCAtMjApfSAhaW1wb3J0YW50YDtcbiAgICAgICAgY29uc3QgZm9udExpZ2h0ZXIgPSB0aGVtZT8udGV4dCAmJiBgJHtMaWdodGVuRGFya2VuQ29sb3IodGhlbWUudGV4dCwgNjApfSAhaW1wb3J0YW50YDtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgLmN1c3RvbSB7XG4gICAgICAgICAgICAtLWJnQ29sb3I6ICR7dGhlbWUud2FsbHBhcGVyfTtcbiAgICAgICAgICAgIC0tZm9udDogJHt0aGVtZS5mb250fTtcbiAgICAgICAgICAgIC0tdGV4dENvbG9yOiAke3RoZW1lLnRleHR9O1xuICAgICAgICAgICAgLS1iZ0J0blByaW1hcnk6ICR7dGhlbWUucHJpbWFyeV9idXR0b259O1xuICAgICAgICAgICAgLS1iZ0J0blNlY29uZGFyeTogJHt0aGVtZS5zZWNvbmRhcnlfYnV0dG9ufTtcbiAgICAgICAgICAgIC0tYnRuUHJpbWFyeVRleHQ6ICR7dGhlbWUucHJpbWFyeV90ZXh0fTtcbiAgICAgICAgICAgIC0tYnRuU2Vjb25kYXJ5VGV4dDogJHt0aGVtZS5zZWNvbmRhcnlfdGV4dH07XG4gICAgXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZ0NvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbS1mb250LCAuY3VzdG9tLWJsb2NrLXdvb2RzbW9rZSwgLmN1c3RvbSBbY2xhc3NePSdob21lX21lc3NhZ2VOb0VsZW1lbnRzQ29udGFpbmVyJ10sIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2hlYWRlciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9vcHRpb25zTGlzdCddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9sZWZ0Q29udGFpbmVyJ10sIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2Ryb3Bkb3duJ10sIC5jdXN0b20gW2NsYXNzXj0nYWR2YW5jZWQtc2VhcmNoX2NvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149XCJpbnB1dF9pbnB1dFwiXSwgLmN1c3RvbSBbY2xhc3NePVwiYWR2YW5jZWQtc2VhcmNoX2lucHV0U2VhcmNoXCJdLCAuY3VzdG9tIFtjbGFzc149J21vZGFsX21vZGFsXyddLCAuY3VzdG9tIFtjbGFzc149XCJzZWxlY3Rfc2VsZWN0XCJdLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9kYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX2hpc3RvcnlDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfcHJvZHVjdERhdGFDb250YWluZXJDb21wbGV0ZWRcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfcHJvZHVjdERhdGFDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfc2Nhbm5lckRhdGFDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cIm1vZGFsX2RpYWxvZ01vZGFsXCJdLCAuY3VzdG9tIFtjbGFzc149XCJwcm9kdWN0RGV0YWlsc19wcmljZVwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdENvbXBhcmVEZXRhaWxzX2dyYXBoQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJwcm9kdWN0RGV0YWlsc19ncmFwaENvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwiZGV0YWlsc0NvbnRhaW5lcl9kZXRhaWxzXCJdLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAucmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAucmVhY3QtZGF0ZXBpY2tlciwgLmN1c3RvbS1mb250ICosIC5jdXN0b20tYmxvY2std29vZHNtb2tlICosIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddICosIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2hlYWRlciddICosIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX29wdGlvbnNMaXN0J10gKiwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddICosIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2Ryb3Bkb3duJ10gKiwgLmN1c3RvbSBbY2xhc3NePSdhZHZhbmNlZC1zZWFyY2hfY29udGFpbmVyJ10gKiwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwiYWR2YW5jZWQtc2VhcmNoX2lucHV0U2VhcmNoXCJdICosIC5jdXN0b20gW2NsYXNzXj0nbW9kYWxfbW9kYWxfJ10gKiwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJob21lX2RhdGFDb250YWluZXJcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9oaXN0b3J5Q29udGFpbmVyXCJdICosIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfcHJvZHVjdERhdGFDb250YWluZXJDb21wbGV0ZWRcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9wcm9kdWN0RGF0YUNvbnRhaW5lclwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3NjYW5uZXJEYXRhQ29udGFpbmVyXCJdICosIC5jdXN0b20gW2NsYXNzXj1cIm1vZGFsX2RpYWxvZ01vZGFsXCJdICosIC5jdXN0b20gW2NsYXNzXj1cInByb2R1Y3REZXRhaWxzX3ByaWNlXCJdICosIC5jdXN0b20gW2NsYXNzXj1cInByb2R1Y3RDb21wYXJlRGV0YWlsc19ncmFwaENvbnRhaW5lclwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJwcm9kdWN0RGV0YWlsc19ncmFwaENvbnRhaW5lclwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJkZXRhaWxzQ29udGFpbmVyX2RldGFpbHNcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlciAqLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAucmVhY3QtZGF0ZXBpY2tlciAqIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tLWJsb2NrLXdvb2RzbW9rZSwgLmN1c3RvbSBbY2xhc3NePSdob21lX21lc3NhZ2VOb0VsZW1lbnRzQ29udGFpbmVyJ10sIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2hlYWRlciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9vcHRpb25zTGlzdCddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9sZWZ0Q29udGFpbmVyJ10sIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2Ryb3Bkb3duJ10sIC5jdXN0b20gW2NsYXNzXj0nYWR2YW5jZWQtc2VhcmNoX2NvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149XCJpbnB1dF9pbnB1dFwiXSwgLmN1c3RvbSBbY2xhc3NePVwiYWR2YW5jZWQtc2VhcmNoX2lucHV0U2VhcmNoXCJdLCAuY3VzdG9tIFtjbGFzc149J21vZGFsX21vZGFsXyddLCAuY3VzdG9tIFtjbGFzc149XCJzZWxlY3Rfc2VsZWN0XCJdLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9kYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX2hpc3RvcnlDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfcHJvZHVjdERhdGFDb250YWluZXJDb21wbGV0ZWRcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfcHJvZHVjdERhdGFDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfc2Nhbm5lckRhdGFDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cIm1vZGFsX2RpYWxvZ01vZGFsXCJdLCAuY3VzdG9tIFtjbGFzc149XCJwcm9kdWN0RGV0YWlsc19wcmljZVwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdENvbXBhcmVEZXRhaWxzX2dyYXBoQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJwcm9kdWN0RGV0YWlsc19ncmFwaENvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwiZGV0YWlsc0NvbnRhaW5lcl9kZXRhaWxzXCJdLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAucmVhY3QtZGF0ZXBpY2tlcl9faGVhZGVyLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAucmVhY3QtZGF0ZXBpY2tlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0NvbG9yKSFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tLWxpbmssIC5jdXN0b20gYSwgLmN1c3RvbSBbY2xhc3NePSdob21lX21lc3NhZ2VOb0VsZW1lbnRzQ29udGFpbmVyJ10sIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2hlYWRlciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9vcHRpb25zTGlzdCddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9sZWZ0Q29udGFpbmVyJ10sIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2Ryb3Bkb3duJ10sIC5jdXN0b20gW2NsYXNzXj0nYWR2YW5jZWQtc2VhcmNoX2NvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149XCJpbnB1dF9pbnB1dFwiXSwgLmN1c3RvbSBbY2xhc3NePVwiYWR2YW5jZWQtc2VhcmNoX2lucHV0U2VhcmNoXCJdLCAuY3VzdG9tIFtjbGFzc149J21vZGFsX21vZGFsXyddLCAuY3VzdG9tIFtjbGFzc149XCJzZWxlY3Rfc2VsZWN0XCJdLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSwgLmN1c3RvbSBbY2xhc3NePSdob21lX21lc3NhZ2VOb0VsZW1lbnRzQ29udGFpbmVyJ10gYSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfaGVhZGVyJ10gYSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfb3B0aW9uc0xpc3QnXSBhLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9sZWZ0Q29udGFpbmVyJ10gYSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfZHJvcGRvd24nXSBhLCAuY3VzdG9tIFtjbGFzc149J2FkdmFuY2VkLXNlYXJjaF9jb250YWluZXInXSBhLCAuY3VzdG9tIFtjbGFzc149XCJpbnB1dF9pbnB1dFwiXSBhLCAuY3VzdG9tIFtjbGFzc149XCJhZHZhbmNlZC1zZWFyY2hfaW5wdXRTZWFyY2hcIl0gYSwgLmN1c3RvbSBbY2xhc3NePSdtb2RhbF9tb2RhbF8nXSBhLCAuY3VzdG9tIFtjbGFzc149XCJzZWxlY3Rfc2VsZWN0XCJdIGEsIC5jdXN0b20gW2NsYXNzXj1cInJlYWN0LWRhdGVwaWNrZXItcG9wcGVyXCJdIGEge1xuICAgICAgICAgICAgY29sb3I6ICR7Zm9udExpZ2h0ZXJ9O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbS1saW5rOmhvdmVyLCAuY3VzdG9tIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfb3B0aW9uc0xpc3QnXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2FkdmFuY2VkLXNlYXJjaF9jb250YWluZXInXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl06aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdtb2RhbF9tb2RhbF8nXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl06aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2hlYWRlciddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX29wdGlvbnNMaXN0J10gYTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2Ryb3Bkb3duJ10gYTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdhZHZhbmNlZC1zZWFyY2hfY29udGFpbmVyJ10gYTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0gYTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePVwiYWR2YW5jZWQtc2VhcmNoX2lucHV0U2VhcmNoXCJdIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0nbW9kYWxfbW9kYWxfJ10gYTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSBhOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2ZvbnRMaWdodGVyfTtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfaGlzdG9yeUNvbnRhaW5lclwiXTpub3QoLnByb2R1Y3RIaXN0b3J5Q29udGFpbmVyKSBbY2xhc3NePVwic3F1YXJlX3NxdWFyZVwiXSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj0nb3B0aW9uTGlzdF90YWJCYXInXSBbY2xhc3NePSdvcHRpb25MaXN0X3NlbGVjdGVkJ10ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj0nb3B0aW9uTGlzdF90YWJCYXInXSBsaSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0NvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSAudGFibGUsIC5jdXN0b20gW2NsYXNzXj0ndGFibGVfdGFibGVDb21wbGV4J10ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVufTtcbiAgICAgICAgICAgIGNvbG9yOiAke2ZvbnREYXJrZW59O1xuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMTBweCAtNnB4IGJsYWNrO1xuICAgICAgICAgICAgXG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIC50YWJsZSB0aCwgLmN1c3RvbSBbY2xhc3NePSd0YWJsZV90YWJsZUNvbXBsZXgnXSB0aCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2Rhcmtlbn07XG5cbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gLnRhYmxlIHRyOm50aC1jaGlsZChvZGQpLCAuY3VzdG9tIFtjbGFzc149J3RhYmxlX3RhYmxlQ29tcGxleCddIHRyOm50aC1jaGlsZChvZGQpIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbn07XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJtb2RhbF9kaWFsb2dNb2RhbENvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwibW9kYWxfbW9kYWxDb250YWluZXJcIl0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtsaWdodGVufTtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImlucHV0X2JsYWNrSW5wdXRcIl0ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ0blByaW1hcnlUZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdCdG5QcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSBbY2xhc3NePVwiYnV0dG9uX3ByaW1hcnlCdXR0b25fXzI3bWJZXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idG5QcmltYXJ5VGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuUHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1iZ0J0blByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgfVxuICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImJ1dHRvbl9zZWNvbmRhcnlCdXR0b25fXzFOMXZNXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idG5TZWNvbmRhcnlUZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdCdG5TZWNvbmRhcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfY2FwdHVyZXNMaXN0XCJdIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfY2FwdHVyZXNMaXN0XCJdIHBbY2xhc3NePVwiaG9tZV93aXRoUHJvZHVjdFwiXSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnRuU2Vjb25kYXJ5VGV4dCkgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cInJlYWN0LWRhdGVwaWNrZXItcG9wcGVyXCJdIC5yZWFjdC1kYXRlcGlja2VyX19kYXktLWtleWJvYXJkLXNlbGVjdGVkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNkZTNjMjYgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cInJlYWN0LWRhdGVwaWNrZXItcG9wcGVyXCJdIC5yZWFjdC1kYXRlcGlja2VyX19kYXk6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogIzFmMjIyMyAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAuY3VzdG9tIFtjbGFzc149XCJob21lX21lc3NhZ2VOb0VsZW1lbnRzQ29udGFpbmVyX18xcTlJV1wiXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0J0blByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnRuUHJpbWFyeVRleHQpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSBbY2xhc3NePVwiYnRuLXRoZW1lXCJdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuUHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idG5QcmltYXJ5VGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJidG5cIl0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdCdG5QcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ0blByaW1hcnlUZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImlucHV0X2Vycm9yTWVzc2FnZV9fMTZ5eEhcIl0ge1xuICAgICAgICAgICAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5jdXJyZW50LXByb2R1Y3Qge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdCdG5QcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmN1c3RvbSAucmVhY3QtYXV0b3N1Z2dlc3RfX2lucHV0OjpwbGFjZWhvbGRlciB7ICBcbiAgICAgICAgICAgIGNvbG9yOiAke2ZvbnRMaWdodGVyfTtcbiAgICAgICAgfVxuICAgICAgICAuY3VzdG9tIC5yZWFjdC1hdXRvc3VnZ2VzdF9faW5wdXQge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJDYXRhbWFyYW5cIiwgc2Fucy1zZXJpZjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgY29sb3I6ICR7Zm9udExpZ2h0ZXJ9O1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM1NjU2NTY7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXJlcG9ydF9kaXZDb250ZW50X18yVTFYSyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0J0blByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkX3RleHQtYm9yZGVyX19hSVFSWiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNhcmRfYm9yZGVyLXByb2R1Y3RfXzNwS0tTIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXJlcG9ydF90YWdzX19PRzJ2biB7XG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke2ZvbnRMaWdodGVyfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnByb2R1Y3QtcmVwb3J0X2J0blRvZ2dsZV9fMUlSN08ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcikgIWltcG9ydGFudDsgXG4gICAgICAgICAgfVxuICAgIGBcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG5cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibG9kYXNoLmdldFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtZGF0ZXBpY2tlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9