module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home/rankings/index.tsx");
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

/***/ "./components/checkbox/Checkbox.tsx":
/*!******************************************!*\
  !*** ./components/checkbox/Checkbox.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Checkbox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkbox.module.scss */ "./components/checkbox/checkbox.module.scss");
/* harmony import */ var _checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\checkbox\\Checkbox.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Checkbox(props) {
  const {
    onChange = () => {},
    label,
    checked = false,
    className = '',
    checkboxClassName = '',
    disabled = false,
    style = {},
    tabindex
  } = props;
  const random = Math.random();
  const customId = `checkbox-${random}`;
  const classNames = [className, disabled ? _checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.disabled : null].join(' ');
  return __jsx("p", {
    className: `${classNames} text-left`,
    style: style,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx("input", {
    id: customId,
    className: `${_checkbox_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.checkbox} ${checkboxClassName}`,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    tabIndex: tabindex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }), __jsx("label", {
    htmlFor: customId,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, label));
}

/***/ }),

/***/ "./components/checkbox/checkbox.module.scss":
/*!**************************************************!*\
  !*** ./components/checkbox/checkbox.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"checkbox": "checkbox_checkbox__3kuZs",
	"disabled": "checkbox_disabled__2DuYK"
};


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

/***/ "./components/input/File.tsx":
/*!***********************************!*\
  !*** ./components/input/File.tsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./input.module.scss */ "./components/input/input.module.scss");
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_input_module_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\input\\File.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




class File extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "inputRef", void 0);
  }
  render() {
    const {
      label,
      acceptedFormats,
      onChange
    } = this.props;
    return __jsx("div", {
      className: _input_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.fileContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, __jsx("input", {
      ref: ref => this.inputRef = ref,
      onChange: e => onChange(e),
      className: _input_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.file,
      accept: acceptedFormats,
      type: "file",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }
    }), __jsx("button", {
      onClick: () => this.inputRef.click(),
      className: _input_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.button,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, label, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faUpload"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 98
      }
    })));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (File);

/***/ }),

/***/ "./components/input/Input.tsx":
/*!************************************!*\
  !*** ./components/input/Input.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Input; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input.module.scss */ "./components/input/input.module.scss");
/* harmony import */ var _input_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_input_module_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\input\\Input.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



class Input extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  render() {
    const {
      type,
      maxLength,
      placeholder,
      icon,
      bgColor,
      color,
      onChange,
      onKeyPress,
      errorMessage,
      defaultValue,
      placeholderOverLabel,
      minLength,
      placeholderColor,
      disabled,
      inputPlaceholder,
      fontSize,
      tabindex,
      className,
      isBlack
    } = this.props;
    const styleInput = bgColor && color && fontSize ? {
      backgroundColor: bgColor,
      color: color
    } : color ? {
      color: color
    } : bgColor ? {
      backgroundColor: bgColor
    } : {} ? {
      fontSize: fontSize
    } : {};
    let placeholderInput = placeholderOverLabel ? placeholder : '';
    placeholderInput = inputPlaceholder ? inputPlaceholder : placeholderInput;
    return __jsx("div", {
      className: _input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inputContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    }, !placeholderOverLabel && __jsx("label", {
      style: placeholderColor ? {
        color: placeholderColor
      } : {},
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, placeholder, ":"), __jsx("div", {
      className: _input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.inputLineContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, icon && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      icon: icon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 30
      }
    }), __jsx("input", {
      minLength: minLength,
      value: defaultValue || '',
      style: styleInput,
      placeholder: placeholderInput,
      onChange: e => onChange(e),
      onKeyPress: e => onKeyPress(e),
      className: `${_input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.input} ${className}`,
      type: type,
      maxLength: maxLength,
      disabled: disabled,
      tabIndex: tabindex,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    })), errorMessage && errorMessage.length > 0 && __jsx("p", {
      className: _input_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, errorMessage));
  }
}
_defineProperty(Input, "defaultProps", {
  maxLength: 100,
  minLength: 0,
  placeholderOverLabel: false,
  onKeyPress: () => {},
  isBlack: false
});

/***/ }),

/***/ "./components/input/index.js":
/*!***********************************!*\
  !*** ./components/input/index.js ***!
  \***********************************/
/*! exports provided: Input, File */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Input */ "./components/input/Input.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Input", function() { return _Input__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _File__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./File */ "./components/input/File.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "File", function() { return _File__WEBPACK_IMPORTED_MODULE_1__["default"]; });





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

/***/ "./components/modal/Modal.tsx":
/*!************************************!*\
  !*** ./components/modal/Modal.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.module.scss */ "./components/modal/modal.module.scss");
/* harmony import */ var _modal_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\modal\\Modal.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


class Modal extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "handleEscapeKey", event => {
      if (this.props.isImageModal === true) {
        if ((event.keyCode === 27 || event.keyCode === 17 || event.keyCode === 88 || event.keyCode === 18) && this.props.closeModal) {
          this.props.closeModal();
        }
      } else {
        if (event.keyCode === 27 && this.props.closeModal) {
          this.props.closeModal();
        }
      }
    });
    _defineProperty(this, "handleCloseModal", event => {
      if (this.props.closeModal) {
        this.props.closeModal();
      }
    });
    _defineProperty(this, "handleKeyModal", e => {
      if (this.props.isImageModal === true) {
        if (e.keyCode === 17 || e.keyCode === 17) {
          // Escape key pressed
          this.props.closeModal();
        }
      } else {
        if (e.keyCode === 17) {
          // Escape key pressed
          this.props.closeModal();
        }
      }
    });
  }
  componentDidUpdate() {
    if (this.props.showModal) {
      document.addEventListener('keyup', this.handleEscapeKey);
    } else {
      document.removeEventListener('keyup', this.handleEscapeKey);
    }
  }
  render() {
    const {
      showModal,
      containerWidth,
      noPadding,
      onKeyDown,
      isImageModal
    } = this.props;
    let containerStyle = {};
    if (!showModal) {
      return null;
    }
    if (containerWidth) {
      containerStyle['width'] = containerWidth;
    }
    if (noPadding) {
      containerStyle['padding'] = '10px';
    }
    return __jsx("div", {
      className: _modal_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modalContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _modal_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.background,
      onKeyDown: e => this.handleKeyModal(e),
      onClick: this.handleCloseModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }), __jsx("div", {
      style: containerStyle,
      className: _modal_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.modal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, this.props.children));
  }
}
_defineProperty(Modal, "defaultProps", {
  isImageModal: false
});

/***/ }),

/***/ "./components/modal/modal.module.scss":
/*!********************************************!*\
  !*** ./components/modal/modal.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"modalContainer": "modal_modalContainer__adjHV",
	"background": "modal_background__2cxml",
	"modal": "modal_modal__2c4cG",
	"dialogModalContainer": "modal_dialogModalContainer__1_woW",
	"dialogModalBg": "modal_dialogModalBg__2c0v9",
	"dialogModal": "modal_dialogModal__1MBzM",
	"btnContainer": "modal_btnContainer__2_Ezt",
	"btnClose": "modal_btnClose__yw17G",
	"btnAccept": "modal_btnAccept__3qMi5"
};


/***/ }),

/***/ "./components/optionList/OptionList.tsx":
/*!**********************************************!*\
  !*** ./components/optionList/OptionList.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _optionList_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./optionList.module.scss */ "./components/optionList/optionList.module.scss");
/* harmony import */ var _optionList_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_optionList_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\optionList\\OptionList.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const OptionList = props => {
  const {
    options,
    optionSelected,
    onOptionSelected
  } = props;
  return __jsx("ul", {
    className: _optionList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.tabBar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, options.map(ele => {
    return __jsx("li", {
      key: `option-list-${ele.value}`,
      onClick: () => onOptionSelected(ele.value),
      className: optionSelected === ele.value ? _optionList_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.selected : '',
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }, ele.label);
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (OptionList);

/***/ }),

/***/ "./components/optionList/optionList.module.scss":
/*!******************************************************!*\
  !*** ./components/optionList/optionList.module.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tabBar": "optionList_tabBar__3qZHi",
	"selected": "optionList_selected__ixC2u"
};


/***/ }),

/***/ "./components/pageTitle/PageTitle.tsx":
/*!********************************************!*\
  !*** ./components/pageTitle/PageTitle.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pageTitle_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pageTitle.module.scss */ "./components/pageTitle/pageTitle.module.scss");
/* harmony import */ var _pageTitle_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_pageTitle_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\pageTitle\\PageTitle.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const PageTitle = ({
  title
}) => {
  return __jsx("h1", {
    className: _pageTitle_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, title);
};
/* harmony default export */ __webpack_exports__["default"] = (PageTitle);

/***/ }),

/***/ "./components/pageTitle/pageTitle.module.scss":
/*!****************************************************!*\
  !*** ./components/pageTitle/pageTitle.module.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "pageTitle_title__3w3iw"
};


/***/ }),

/***/ "./components/scannersTab/ScannersTab.tsx":
/*!************************************************!*\
  !*** ./components/scannersTab/ScannersTab.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScannersTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../buttons */ "./components/buttons/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../input */ "./components/input/index.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../table */ "./components/table/index.ts");
/* harmony import */ var _selectSearch_SelectSearch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../selectSearch/SelectSearch */ "./components/selectSearch/SelectSearch.tsx");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var _utils_catalogs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/catalogs */ "./utils/catalogs.ts");
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/session-management */ "./utils/session-management.ts");
/* harmony import */ var _scannersTab_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scannersTab.module.scss */ "./components/scannersTab/scannersTab.module.scss");
/* harmony import */ var _scannersTab_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_scannersTab_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _datepicker_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../datepicker/datepicker */ "./components/datepicker/datepicker.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\scannersTab\\ScannersTab.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }












const emptySearchScanner = {
  from: '',
  to: '',
  textSearch: '',
  perPage: ''
};
class ScannersTab extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      count: 0,
      currentPage: 0,
      total: 0,
      totalPage: 0,
      regionList: [],
      missionList: [],
      mission: null,
      searchScanner: emptySearchScanner,
      searchScanners: [],
      startDateErrorMsg: '',
      inputValueFilter: '',
      order: 'desc',
      header: [{
        label: 'Posición',
        key: 'ranking'
      }, {
        label: 'No. de empleado',
        key: 'employee_number'
      }, {
        label: 'Nombre',
        key: 'name'
      }, {
        label: 'Porcentaje',
        key: 'efficiency'
      }, {
        label: 'Capturas validadas',
        key: 'validated_captures'
      }, {
        label: 'Puntos',
        key: 'points'
      }]
    });
    _defineProperty(this, "searchTimeout", null);
    _defineProperty(this, "searchScannerHandler", e => {
      const searchScanner = _objectSpread(_objectSpread({}, this.state.searchScanner), {}, {
        textSearch: e.target.value
      });
      this.setState({
        searchScanner
      }, () => {
        clearTimeout(this.searchTimeout);
        this.searchTimeout = setTimeout(() => {
          this.search(1);
        }, 1000);
      });
    });
    _defineProperty(this, "validateEndDate", () => {
      if (this.validateDate(this.state.searchScanner)) {
        this.setState({
          startDateErrorMsg: ''
        }, () => this.search(1));
      }
    });
    _defineProperty(this, "missionHandler", e => {
      const missionId = e.value;
      this.setState({
        mission: missionId
      }, () => this.search(1));
    });
    _defineProperty(this, "handleInputChange", async inputValue => {
      return Object(_utils_catalogs__WEBPACK_IMPORTED_MODULE_7__["getMissionsCatalogByMission"])(inputValue);
    });
    _defineProperty(this, "search", async page => {
      const searchScanner = this.state.searchScanner;
      try {
        const headers = _objectSpread(_objectSpread({}, Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_8__["getHeader"])()), {}, {
          'content-type': 'multipart/form-data'
        });
        const form_data = new FormData();
        form_data.append('region', '');
        form_data.append('mission', this.state.mission !== null ? this.state.mission : '');
        form_data.append('to', this.formatDate(searchScanner.to));
        form_data.append('from', this.formatDate(searchScanner.from));
        form_data.append('textSearch', searchScanner.textSearch);
        form_data.append('perPage', searchScanner.perPage);
        form_data.append('sort', this.state.order);
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_6__["default"].post(`api/reports/ranking-efficiency?page=${page}`, form_data, {
          headers
        });
        if (response.data.data.length > 0) {
          const {
            order
          } = this.state;
          const pagination = response.data.pagination;
          const start = order === 'desc' ? (pagination.current_page - 1) * pagination.per_page + 1 : pagination.total - (pagination.current_page - 1) * pagination.per_page;
          const searchScanners = response.data.data.map((searchScanner, i) => _objectSpread(_objectSpread({}, searchScanner), {}, {
            ranking: order === 'desc' ? start + i : start - i,
            efficiency: `${Math.round(searchScanner.efficiency * 100) / 100}%`
          }));
          this.setState({
            searchScanners,
            total: pagination.total,
            currentPage: pagination.current_page,
            count: pagination.count,
            totalPage: pagination.total_pages
          });
        } else if (response.data.data.length === 0) {
          this.setState({
            searchScanners: []
          });
        }
      } catch (e) {
        throw new Error(e);
      }
    });
    _defineProperty(this, "validateDate", searchScanner => {
      let isValid = true;
      let startDateErrorMsg = '';
      const start = new Date(searchScanner.from).getTime();
      const end = new Date(searchScanner.to).getTime();
      if (start - end > 0) {
        startDateErrorMsg = 'La fecha de inicio no es válida';
      }
      if (startDateErrorMsg.length > 0) {
        isValid = false;
      }
      this.setState({
        startDateErrorMsg
      });
      return isValid;
    });
    _defineProperty(this, "setSortDirection", e => {
      const checked = e.target.checked;
      const next = checked ? 'asc' : 'desc';
      this.setState({
        order: next
      }, () => this.search(1));
    });
    _defineProperty(this, "clearDateSelection", () => {
      this.setState({
        searchScanner: _objectSpread(_objectSpread({}, emptySearchScanner), {}, {
          from: '',
          to: ''
        })
      }, () => this.search(1));
    });
    _defineProperty(this, "startDateHandler", date => {
      let {
        searchScanner
      } = this.state;
      searchScanner = _objectSpread(_objectSpread({}, searchScanner), {}, {
        from: date
      });
      if (this.validateDate(searchScanner)) {
        this.setState({
          searchScanner,
          startDateErrorMsg: ''
        }, () => {
          if (searchScanner.to) {
            this.search(1);
          }
        });
      }
    });
    _defineProperty(this, "endDateHandler", date => {
      let {
        searchScanner
      } = this.state;
      searchScanner = _objectSpread(_objectSpread({}, searchScanner), {}, {
        to: date
      });
      if (this.validateDate(searchScanner)) {
        this.setState({
          searchScanner,
          startDateErrorMsg: ''
        }, () => {
          if (searchScanner.from) {
            this.search(1);
          }
        });
      }
    });
  }
  async componentDidMount() {
    Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_8__["validateSession"])();
    this.handleInputChange('');
    this.search(1);
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
      count,
      currentPage,
      order,
      total,
      totalPage,
      searchScanner,
      searchScanners,
      startDateErrorMsg
    } = this.state;
    const {
      locale
    } = this.props;
    const header = Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["translateTableHeader"])(locale, this.state.header, 'scannersTab.table.header');
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "row width70",
      style: {
        flexDirection: 'column'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "width30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307,
        columnNumber: 29
      }
    }, __jsx(_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["getI18nLabel"])(locale, 'scannersTab.startDate'),
      selected: searchScanner.from,
      onSelect: this.startDateHandler,
      placeholder: "dd/mm/yyyy",
      dateFormat: "dd/MM/yyyy",
      errorMsg: startDateErrorMsg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "width30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 318,
        columnNumber: 29
      }
    }, __jsx(_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["getI18nLabel"])(locale, 'scannersTab.endDate'),
      selected: searchScanner.to,
      onSelect: this.endDateHandler,
      placeholder: "dd/mm/yyyy",
      dateFormat: "dd/MM/yyyy",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "width30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 29
      }
    }, __jsx(_buttons__WEBPACK_IMPORTED_MODULE_1__["SecondaryButton"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["getI18nLabel"])(locale, 'scannersTab.options.clearDate'),
      onClick: this.clearDateSelection,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 33
      }
    }))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "width45",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 29
      }
    }, __jsx(_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      defaultValue: searchScanner.textSearch,
      type: "Text",
      placeholderOverLabel: true,
      onChange: this.searchScannerHandler,
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["getI18nLabel"])(locale, 'scannersTab.input.search.placeholder'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "width20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 29
      }
    }, __jsx(_selectSearch_SelectSearch__WEBPACK_IMPORTED_MODULE_5__["default"], {
      noLabel: true,
      label: "Misi\xF3n",
      optionFunction: this.handleInputChange,
      onChange: this.missionHandler,
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_11__["getI18nLabel"])(locale, 'scannersTab.input.mission.placeholder'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 33
      }
    })), __jsx("div", {
      className: "width15",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 29
      }
    }))), __jsx("div", {
      className: "width20",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _scannersTab_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.medalLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 365,
        columnNumber: 25
      }
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/positions",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 366,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 367,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "/img/1place.svg",
      alt: "Posiciones",
      title: "Posiciones",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 37
      }
    })))))), __jsx("div", {
      className: _scannersTab_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.tableContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 17
      }
    }, __jsx(_table__WEBPACK_IMPORTED_MODULE_4__["Table"], {
      count: count,
      bodyData: searchScanners,
      header: header,
      onNextPage: () => this.search(currentPage + 1),
      onPrevPage: () => this.search(currentPage - 1),
      currentPage: currentPage,
      total: total,
      totalPage: totalPage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 21
      }
    })));
  }
}

/***/ }),

/***/ "./components/scannersTab/scannersTab.module.scss":
/*!********************************************************!*\
  !*** ./components/scannersTab/scannersTab.module.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tableContainer": "scannersTab_tableContainer__3BiEs",
	"medalLink": "scannersTab_medalLink__3ZQIu"
};


/***/ }),

/***/ "./components/selectSearch/SelectSearch.tsx":
/*!**************************************************!*\
  !*** ./components/selectSearch/SelectSearch.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SelectSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-select/async */ "react-select/async");
/* harmony import */ var react_select_async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_select_async__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _selectSearch_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectSearch.module.scss */ "./components/selectSearch/selectSearch.module.scss");
/* harmony import */ var _selectSearch_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_selectSearch_module_scss__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\selectSearch\\SelectSearch.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



function SelectSearch(props) {
  const {
    label,
    onChange,
    noLabel,
    placeholderColor = 'unset',
    placeholder,
    optionFunction
  } = props;
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, !noLabel && __jsx("label", {
    className: _selectSearch_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.label,
    style: {
      color: placeholderColor
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, label, ":"), __jsx(react_select_async__WEBPACK_IMPORTED_MODULE_1___default.a, {
    cacheOptions: true,
    defaultOptions: true,
    loadOptions: optionFunction,
    onChange: onChange,
    placeholder: placeholder,
    autoFocus: false,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/selectSearch/selectSearch.module.scss":
/*!**********************************************************!*\
  !*** ./components/selectSearch/selectSearch.module.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"select": "selectSearch_select__eP4La",
	"errorMessage": "selectSearch_errorMessage__2UEcn",
	"label": "selectSearch_label__3mv0c"
};


/***/ }),

/***/ "./components/table/Table.tsx":
/*!************************************!*\
  !*** ./components/table/Table.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Table; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/session-management */ "./utils/session-management.ts");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table.module.scss */ "./components/table/table.module.scss");
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_table_module_scss__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\table\\Table.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






function Table(props) {
  const {
    bodyData,
    header,
    currentPage,
    totalPage,
    actions,
    onNextPage,
    onPrevPage
  } = props;
  const locale = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_2__["getLocale"])();
  const totalLength = actions != null ? header.length + 1 : header.length;
  const width = `${100 / totalLength}%`;
  const tableStyle = {
    width: header.length > 8 ? `${header.length * 10}em` : `100%`
  };
  function createActionButtons(data) {
    return function (action, index) {
      let isBlocked = false;
      if (data.blocked_up && action.isBlocked === true) {
        isBlocked = true;
      }
      return __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
        onClick: isBlocked ? () => {} : () => action.action(data),
        key: index,
        icon: action.icon,
        style: {
          color: (() => {
            if (data.blocked_up && !action.enabled) {
              return '#d3d3d3';
            }
            return action.color;
          })(),
          cursor: (() => {
            if (data.blocked_up && !action.enabled) {
              return 'not-allowed';
            }
            return 'pointer';
          })(),
          margin: '5px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 17
        }
      });
    };
  }
  return __jsx("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.tableComplex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("table", {
    style: tableStyle,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 21
    }
  }, header.map((ele, index) => __jsx("th", {
    key: index,
    style: {
      width
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 29
    }
  }, __jsx("label", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 33
    }
  }, ele.label), ele.sort && __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    onClick: () => ele.onSort(ele.order === 'desc' ? 'asc' : 'desc'),
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.sortIcon,
    icon: ele.order === 'desc' ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSortUp"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSortDown"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 37
    }
  }))), actions && actions.length && __jsx("th", {
    style: {
      width
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 58
    }
  }, Object(_i18n__WEBPACK_IMPORTED_MODULE_3__["getI18nLabel"])(locale, 'table.actions')))), __jsx("tbody", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 17
    }
  }, bodyData.map((data, index) => __jsx("tr", {
    key: index,
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.row,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 25
    }
  }, header.map((ele, index) => __jsx("td", {
    key: index,
    style: {
      width
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 33
    }
  }, data[ele.key] != 'null' ? ele.key === 'description' ? data[ele.key].length > 20 ? data[ele.key].substring(0, 15) + "..." : data[ele.key] : data[ele.key] : '')), __jsx("td", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 29
    }
  }, typeof actions === 'function' ? actions(data).map(createActionButtons(data)) : Array.isArray(actions) && actions.length ? actions.map(createActionButtons(data)) : ''))))), __jsx("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 17
    }
  }, currentPage > 1 && __jsx("a", {
    onClick: () => onPrevPage(),
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretLeft"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 29
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretLeft"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 29
    }
  })), totalPage > currentPage && __jsx("a", {
    onClick: () => onNextPage(),
    href: "#",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretRight"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 29
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faCaretRight"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 29
    }
  })))));
}

/***/ }),

/***/ "./components/table/TableComplex.tsx":
/*!*******************************************!*\
  !*** ./components/table/TableComplex.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/session-management */ "./utils/session-management.ts");
/* harmony import */ var _utils_photo_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/photo_url */ "./utils/photo_url.ts");
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/format-date */ "./utils/format-date.ts");
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modal/Modal */ "./components/modal/Modal.tsx");
/* harmony import */ var _checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../checkbox/Checkbox */ "./components/checkbox/Checkbox.tsx");
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./table.module.scss */ "./components/table/table.module.scss");
/* harmony import */ var _table_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_table_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\table\\TableComplex.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









const TableComplex = props => {
  const {
    currentPage,
    totalPage,
    changePageNext,
    changePagePrev,
    header,
    content,
    actions,
    onClickDetails,
    onChecked = () => {},
    checkboxStyles,
    textNotData,
    reportDetails,
    customClassName
  } = props;
  const {
    0: headerList,
    1: setHeaderList
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(header);
  const {
    0: showModal,
    1: setShowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: selectedImage,
    1: setSelectedImage
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: isAnalyst,
    1: setIsAnalyst
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setIsAnalyst(Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["validateIsAnalyst"])());
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setHeaderList(headerList.map(h => {
      const hide = h.hide || false;
      return _objectSpread(_objectSpread({}, h), {}, {
        hide
      });
    }));
  }, [header]);
  const tableStyle = {
    width: header.length > 6 ? `${header.length * 10}em` : `100%`
  };
  const openModal = imgUrl => {
    setSelectedImage(imgUrl);
    setShowModal(true);
  };
  const getField = (fieldType, fieldName, row, isHidden) => {
    if (isHidden) {
      return ' ';
    }
    const value = row[fieldName];
    switch (fieldType) {
      case 'text':
        return value ? value : null;
      case 'img':
        return value ? __jsx("img", {
          style: {
            cursor: 'pointer'
          },
          onClick: () => openModal(`${_utils_photo_url__WEBPACK_IMPORTED_MODULE_4__["photoUrl"]}/${value}`),
          src: `${_utils_photo_url__WEBPACK_IMPORTED_MODULE_4__["photoUrl"]}/${value}`,
          width: "50",
          height: "50",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 25
          }
        }) : null;
      case 'money':
        return value && !isNaN(value) ? `\$ ${parseFloat(value).toFixed(2)}` : '-';
      case 'date':
        return Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_5__["default"])(value);
      case 'number':
        return value !== null && `${value}`.split('.').length > 1 ? `${parseFloat(value).toFixed(2)}` : value;
      case 'checkbox':
        return __jsx(_checkbox_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: checkboxStyles,
          checked: row.checked,
          onChange: () => onChecked(row),
          label: "",
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 21
          }
        });
      case 'actions':
        return __jsx("div", {
          style: {
            display: 'flex'
          },
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 21
          }
        }, actions.map((ac, index) => __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
          key: index,
          style: {
            color: isAnalyst ? '#d3d3d3' : ac.color,
            margin: '0.5em',
            cursor: 'pointer',
            pointerEvents: isAnalyst ? 'none' : 'auto'
          },
          icon: ac.icon,
          onClick: () => ac.action(row),
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 29
          }
        })));
      case 'id':
        return value ? __jsx("span", {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 21
          }
        }, __jsx("span", {
          onClick: () => onClickDetails(value),
          className: _table_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.idClass,
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 25
          }
        }, value), row['is_promotion'] ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
          className: _table_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.isPromo,
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faPercent"],
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147,
            columnNumber: 29
          }
        }) : '') : null;
      default:
        return value;
    }
  };
  const changeHideStatus = (fieldName, fieldTitle, hideField) => {
    const newHeader = headerList.map(e => {
      const hide = fieldName === e.name && fieldTitle === e.title ? hideField : e.hide;
      return _objectSpread(_objectSpread({}, e), {}, {
        hide
      });
    });
    setHeaderList(newHeader);
  };
  const handleCloseModal = () => setShowModal(false);
  const tableClassName = customClassName ? `${_table_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.tableComplex} ${customClassName}` : _table_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.tableComplex;
  return __jsx("div", {
    className: tableClassName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 9
    }
  }, __jsx("table", {
    style: tableStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }, __jsx("thead", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 17
    }
  }, __jsx("tr", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 21
    }
  }, headerList.map((op, index) => {
    let propertyExist = false;
    if (content.length) {
      const scan = content[0];
      propertyExist = scan[op.name] ? true : false;
    }
    if (op.type === 'actions' || op.type === 'checkbox') {
      propertyExist = true;
    }
    if (op.title === 'Seleccionar' && reportDetails) {
      return null;
    }
    ;
    return propertyExist ? __jsx("th", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 33
      }
    }, op.hide ? '' : op.title, op.isHidedable ? __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
      onClick: () => changeHideStatus(op.name, op.title, !op.hide),
      className: _table_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.hide,
      icon: op.hide ? _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEye"] : _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faEyeSlash"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 41
      }
    }) : '') : __jsx("th", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 32
      }
    }, op.title);
  }))), __jsx("tbody", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 17
    }
  }, content.map((c, index) => __jsx("tr", {
    key: index,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 25
    }
  }, headerList.map((ele, index) => {
    if (c.status == 'Pendiente') {
      c.reviewed = ' - ';
    }
    if (index === 0 && reportDetails) {
      return null;
    }
    ;
    const field = getField(ele.type, ele.name, c, ele.hide);
    return field ? __jsx("td", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 37
      }
    }, field) : __jsx("td", {
      key: index,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 37
      }
    }, '-');
  }))))), __jsx("h4", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 13
    }
  }, textNotData), __jsx("div", {
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.footer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 13
    }
  }, __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 17
    }
  }, currentPage > 1 && __jsx("a", {
    onClick: () => changePagePrev(),
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretLeft"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 29
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretLeft"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 29
    }
  })), totalPage > currentPage && __jsx("a", {
    onClick: () => changePageNext(),
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretRight"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 29
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCaretRight"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255,
      columnNumber: 29
    }
  })))), __jsx(_modal_Modal__WEBPACK_IMPORTED_MODULE_6__["default"], {
    noPadding: true,
    containerWidth: "40%",
    showModal: showModal,
    closeModal: handleCloseModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 13
    }
  }, __jsx("span", {
    onClick: () => setShowModal(false),
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.modalImageClose,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faTimesCircle"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 21
    }
  })), __jsx("img", {
    src: selectedImage,
    alt: "this is car image",
    className: _table_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.modalImage,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271,
      columnNumber: 17
    }
  })));
};
TableComplex.defaultProps = {
  checkboxStyles: '',
  textNotData: '',
  customClassName: ''
};
/* harmony default export */ __webpack_exports__["default"] = (TableComplex);

/***/ }),

/***/ "./components/table/index.ts":
/*!***********************************!*\
  !*** ./components/table/index.ts ***!
  \***********************************/
/*! exports provided: Table, TableComplex */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Table */ "./components/table/Table.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return _Table__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _TableComplex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableComplex */ "./components/table/TableComplex.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TableComplex", function() { return _TableComplex__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "./components/table/table.module.scss":
/*!********************************************!*\
  !*** ./components/table/table.module.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"table": "table_table__3RBCe",
	"footer": "table_footer__2n4pL",
	"actionIcon": "table_actionIcon__3BuCp",
	"tableComplex": "table_tableComplex__Yrxb0",
	"hide": "table_hide__3xyL-",
	"idClass": "table_idClass__1oNNE",
	"isPromo": "table_isPromo__25741",
	"modalImage": "table_modalImage__2eSUQ",
	"modalImageClose": "table_modalImageClose__1rJLv",
	"sortIcon": "table_sortIcon__tgIDp"
};


/***/ }),

/***/ "./components/validatorsTab/ValidatorsTab.tsx":
/*!****************************************************!*\
  !*** ./components/validatorsTab/ValidatorsTab.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ValidatorsTab; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../input */ "./components/input/index.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../buttons */ "./components/buttons/index.js");
/* harmony import */ var _table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../table */ "./components/table/index.ts");
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/session-management */ "./utils/session-management.ts");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var _utils_catalogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/catalogs */ "./utils/catalogs.ts");
/* harmony import */ var _selectSearch_SelectSearch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../selectSearch/SelectSearch */ "./components/selectSearch/SelectSearch.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var _validatorsTab_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./validatorsTab.module.scss */ "./components/validatorsTab/validatorsTab.module.scss");
/* harmony import */ var _validatorsTab_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_validatorsTab_module_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _datepicker_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../datepicker/datepicker */ "./components/datepicker/datepicker.tsx");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\validatorsTab\\ValidatorsTab.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











const emptyRankingValidator = {
  from: '',
  to: '',
  textSearch: '',
  perPage: ''
};
class ValidatorsTab extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "header", [{
      title: 'Núm de empleado',
      isHidedable: false,
      name: 'employee_number',
      type: 'number'
    }, {
      title: 'Nombre',
      isHidedable: false,
      name: 'fullName',
      type: 'text'
    }, {
      title: 'Porcentaje',
      isHidedable: false,
      name: 'efficiency',
      type: 'text'
    }, {
      title: 'Capturas validadas',
      isHidedable: false,
      name: 'userValidates',
      type: 'number'
    }]);
    _defineProperty(this, "state", {
      count: 0,
      currentPage: 0,
      total: 0,
      totalPage: 0,
      rankingValidator: emptyRankingValidator,
      rankingValidators: [],
      startDateErrorMsg: '',
      totalScanHist: '',
      validScanHist: '',
      totalScan: '',
      validScan: '',
      mission: null
    });
    _defineProperty(this, "loadData", async page => {
      const rankingValidator = this.state.rankingValidator;
      if (this.validateDate(rankingValidator)) {
        try {
          const headers = _objectSpread(_objectSpread({}, Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_4__["getHeader"])()), {}, {
            'content-type': 'multipart/form-data'
          });
          let form_data = new FormData();
          form_data.append('mission', `${this.state.mission !== null ? this.state.mission : ''}`);
          form_data.append('to', this.formatDate(rankingValidator.to));
          form_data.append('from', this.formatDate(rankingValidator.from));
          form_data.append('textSearch', rankingValidator.textSearch);
          form_data.append('perPage', rankingValidator.perPage);
          const response = await _utils_api__WEBPACK_IMPORTED_MODULE_5__["default"].post(`api/reports/ranking-validators?page=${page}`, form_data, {
            headers
          });
          if (response.data.data) {
            const {
              pagination,
              data
            } = response.data;
            const {
              users,
              scans
            } = data;
            const rankingValidators = users.map(rankingValidator => {
              const efficiency = Math.round(rankingValidator.efficiency * 100) / 100;
              return _objectSpread(_objectSpread({}, rankingValidator), {}, {
                efficiency: `${efficiency}%`,
                fullName: rankingValidator.fullname
              });
            });
            this.setState({
              rankingValidators,
              total: pagination.total,
              currentPage: pagination.current_page,
              count: pagination.count,
              totalPage: pagination.total_pages,
              totalScan: scans.filtered,
              totalScanHist: scans.total,
              validScan: scans.filtered_validated,
              validScanHist: scans.validated
            });
          } else if (response.data.data.length === 0) {
            this.setState({
              rankingValidators: []
            });
          }
        } catch (e) {}
      }
    });
    _defineProperty(this, "startDateHandler", date => {
      let {
        rankingValidator
      } = this.state;
      rankingValidator = _objectSpread(_objectSpread({}, rankingValidator), {}, {
        from: date
      });
      if (this.validateDate(rankingValidator)) {
        this.setState({
          rankingValidator,
          startDateErrorMsg: ''
        }, () => {
          if (rankingValidator.to) {
            this.loadData(1);
          }
        });
      }
    });
    _defineProperty(this, "endDateHandler", date => {
      let {
        rankingValidator
      } = this.state;
      rankingValidator = _objectSpread(_objectSpread({}, rankingValidator), {}, {
        to: date
      });
      if (this.validateDate(rankingValidator)) {
        this.setState({
          rankingValidator,
          startDateErrorMsg: ''
        }, () => {
          if (rankingValidator.from) {
            this.loadData(1);
          }
        });
      }
    });
    _defineProperty(this, "searchTimeout", null);
    _defineProperty(this, "searchValidatorHandler", e => {
      const rankingValidator = _objectSpread(_objectSpread({}, this.state.rankingValidator), {}, {
        textSearch: e.target.value
      });
      this.setState({
        rankingValidator
      }, () => {
        this.searchTimeout = setTimeout(() => {
          this.loadData(1);
        }, 1000);
      });
    });
    _defineProperty(this, "missionHandler", e => {
      const missionId = e.value;
      this.setState({
        mission: missionId
      }, () => {
        this.loadData(1);
      });
    });
    _defineProperty(this, "handleInputChange", async inputValue => {
      return Object(_utils_catalogs__WEBPACK_IMPORTED_MODULE_6__["getMissionsCatalogByMission"])(inputValue);
    });
    _defineProperty(this, "validateDate", rankingValidator => {
      let isValid = true;
      let startDateErrorMsg = '';
      const start = new Date(rankingValidator.from).getTime();
      const end = new Date(rankingValidator.to).getTime();
      if (start > end) {
        startDateErrorMsg = 'La fecha de inicio no es válida';
      }
      if (startDateErrorMsg.length > 0) {
        isValid = false;
      }
      this.setState({
        startDateErrorMsg
      });
      return isValid;
    });
    _defineProperty(this, "clearDateSelection", () => {
      this.setState({
        rankingValidator: _objectSpread(_objectSpread({}, emptyRankingValidator), {}, {
          from: '',
          to: ''
        })
      }, () => this.loadData(1));
    });
  }
  async componentDidMount() {
    Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_4__["validateSession"])();
    this.loadData(1);
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
      count,
      currentPage,
      total,
      totalPage,
      rankingValidator,
      rankingValidators,
      startDateErrorMsg,
      totalScan,
      totalScanHist,
      validScan,
      validScanHist
    } = this.state;
    const {
      locale
    } = this.props;
    this.header = Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["translateTableComplexHeader"])(locale, this.header, 'validatorsTab.table.header');
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "row width70",
      style: {
        alignItems: 'flex-end'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "width30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 21
      }
    }, __jsx(_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.startDate'),
      selected: rankingValidator.from,
      onSelect: this.startDateHandler,
      placeholder: "dd/mm/yyyy",
      dateFormat: "dd/MM/yyyy",
      errorMsg: startDateErrorMsg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "width30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 21
      }
    }, __jsx(_datepicker_datepicker__WEBPACK_IMPORTED_MODULE_10__["default"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.endDate'),
      selected: rankingValidator.to,
      onSelect: this.endDateHandler,
      placeholder: "dd/mm/yyyy",
      dateFormat: "dd/MM/yyyy",
      errorMsg: startDateErrorMsg,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "width30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 21
      }
    }, __jsx(_buttons__WEBPACK_IMPORTED_MODULE_2__["SecondaryButton"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.options.clearDate'),
      onClick: this.clearDateSelection,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 299,
        columnNumber: 25
      }
    }))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "row width70",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "width45",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 309,
        columnNumber: 21
      }
    }, __jsx(_input__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      defaultValue: rankingValidator.textSearch,
      type: "text",
      placeholderOverLabel: true,
      onChange: this.searchValidatorHandler,
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.input.search.placeholder'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 310,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "width45 row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 319,
        columnNumber: 21
      }
    }, __jsx(_buttons__WEBPACK_IMPORTED_MODULE_2__["PrimaryButton"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.options.generateData'),
      onClick: () => this.loadData(1),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 25
      }
    }))), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: "row width70",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "width45",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 21
      }
    }, __jsx(_selectSearch_SelectSearch__WEBPACK_IMPORTED_MODULE_7__["default"], {
      noLabel: true,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.input.mission.placeholder'),
      optionFunction: this.handleInputChange,
      onChange: this.missionHandler,
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.input.mission.placeholder'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 25
      }
    }))), __jsx("div", {
      className: _validatorsTab_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.statsContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 25
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.total.captures')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 25
      }
    }, totalScan)), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 25
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.total.validated')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 25
      }
    }, validScan)), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 352,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 25
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.history.captures')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 354,
        columnNumber: 25
      }
    }, totalScanHist)), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 357,
        columnNumber: 21
      }
    }, __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 25
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, 'validatorsTab.history.validated')), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 359,
        columnNumber: 25
      }
    }, validScanHist))), __jsx("div", {
      className: _validatorsTab_module_scss__WEBPACK_IMPORTED_MODULE_9___default.a.tableContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 17
      }
    }, __jsx(_table__WEBPACK_IMPORTED_MODULE_3__["TableComplex"], {
      count: count,
      content: rankingValidators,
      header: this.header,
      changePageNext: () => this.loadData(currentPage + 1),
      changePagePrev: () => this.loadData(currentPage - 1),
      currentPage: currentPage,
      onClickDetails: () => {},
      total: total,
      totalPage: totalPage,
      actions: [],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 364,
        columnNumber: 21
      }
    })));
  }
}

/***/ }),

/***/ "./components/validatorsTab/validatorsTab.module.scss":
/*!************************************************************!*\
  !*** ./components/validatorsTab/validatorsTab.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"tableContainer": "validatorsTab_tableContainer__27Hli",
	"statsContainer": "validatorsTab_statsContainer__dIoZu"
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

/***/ "./pages/home/rankings/index.tsx":
/*!***************************************!*\
  !*** ./pages/home/rankings/index.tsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/header */ "./components/header/index.js");
/* harmony import */ var _rankings_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rankings.module.scss */ "./pages/home/rankings/rankings.module.scss");
/* harmony import */ var _rankings_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_rankings_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_optionList_OptionList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/optionList/OptionList */ "./components/optionList/OptionList.tsx");
/* harmony import */ var _components_scannersTab_ScannersTab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/scannersTab/ScannersTab */ "./components/scannersTab/ScannersTab.tsx");
/* harmony import */ var _components_validatorsTab_ValidatorsTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/validatorsTab/ValidatorsTab */ "./components/validatorsTab/ValidatorsTab.tsx");
/* harmony import */ var _components_pageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/pageTitle/PageTitle */ "./components/pageTitle/PageTitle.tsx");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../i18n */ "./i18n/index.ts");
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../utils/session-management */ "./utils/session-management.ts");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../utils/theme */ "./utils/theme.ts");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\pages\\home\\rankings\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }











class RankingsPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      options: [{
        value: 1,
        label: 'Capturistas',
        key: 'capturists'
      }, {
        value: 2,
        label: 'Validadores',
        key: 'validators'
      }],
      optionSelected: 1
    });
  }
  componentDidMount() {
    const isCustom = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_9__["IsCustomTheme"])();
    const hasDarkTheme = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_9__["getDarkTheme"])() === '1' ? true : false;
    if (hasDarkTheme) {
      document.querySelector('body').classList.remove('custom');
      document.querySelector('body').classList.add('darkmode');
    }
    if (isCustom) {
      const theme = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_9__["getTheme"])();
      const currentTheme = Object(_utils_theme__WEBPACK_IMPORTED_MODULE_10__["buildTheme"])(theme);
      const style = document.createElement('style');
      style.innerHTML = currentTheme;
      document.body.appendChild(style);
      document.querySelector('body').classList.add('custom');
    }
  }
  render() {
    const {
      optionSelected
    } = this.state;
    const locale = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_9__["getLocale"])();
    const options = this.state.options.map(option => {
      option.label = Object(_i18n__WEBPACK_IMPORTED_MODULE_8__["getI18nLabel"])(locale, `rankings.tabs.${option.key}.title`);
      return option;
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 13
      }
    }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: _rankings_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 17
      }
    }, __jsx(_components_pageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_7__["default"], {
      title: "Rankings",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 21
      }
    }), __jsx(_components_optionList_OptionList__WEBPACK_IMPORTED_MODULE_4__["default"], {
      options: options,
      onOptionSelected: v => this.setState({
        optionSelected: v
      }),
      optionSelected: optionSelected,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }), optionSelected === 1 && __jsx(_components_scannersTab_ScannersTab__WEBPACK_IMPORTED_MODULE_5__["default"], {
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 46
      }
    }), optionSelected === 2 && __jsx(_components_validatorsTab_ValidatorsTab__WEBPACK_IMPORTED_MODULE_6__["default"], {
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 46
      }
    })));
  }
}
const withRouter = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(RankingsPage, _extends({}, props, {
    router: router,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 12
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (withRouter);

/***/ }),

/***/ "./pages/home/rankings/rankings.module.scss":
/*!**************************************************!*\
  !*** ./pages/home/rankings/rankings.module.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "rankings_container__1UYzz"
};


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

/***/ "./utils/catalogs.ts":
/*!***************************!*\
  !*** ./utils/catalogs.ts ***!
  \***************************/
/*! exports provided: getRolesCatalog, getRegionsCatalog, getLabelsCatalog, getGroupsCatalog, getMissionsCatalog, getMissionsValidation, getUnitsCatalog, getBrandsCatalog, getStoresCatalog, getLinesCatalog, getMissionsCatalogByMission, getGeolocationCatalog, getRegionsLabelCatalog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRolesCatalog", function() { return getRolesCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegionsCatalog", function() { return getRegionsCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLabelsCatalog", function() { return getLabelsCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupsCatalog", function() { return getGroupsCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMissionsCatalog", function() { return getMissionsCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMissionsValidation", function() { return getMissionsValidation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUnitsCatalog", function() { return getUnitsCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBrandsCatalog", function() { return getBrandsCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStoresCatalog", function() { return getStoresCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLinesCatalog", function() { return getLinesCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMissionsCatalogByMission", function() { return getMissionsCatalogByMission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGeolocationCatalog", function() { return getGeolocationCatalog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRegionsLabelCatalog", function() { return getRegionsLabelCatalog; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api */ "./utils/api.ts");
/* harmony import */ var _session_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session-management */ "./utils/session-management.ts");
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



const getRolesCatalog = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/roles', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return res.data.data.map(rol => {
    return {
      value: rol.name,
      label: rol.name
    };
  });
};
const getRegionsCatalog = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/regions', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return res.data.data.map(region => {
    return {
      value: region.id,
      label: region.name
    };
  });
};
const getRegionsLabelCatalog = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/regions', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return res.data.data.map(region => {
    return {
      value: region.name,
      label: region.name
    };
  });
};
const getLabelsCatalog = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/labels', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return res.data.data.map(label => {
    return {
      value: label.id,
      label: label.name
    };
  });
};
const getGroupsCatalog = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/groups/list', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return res.data.group.map(group => {
    return {
      value: group.id,
      label: group.name
    };
  });
};
const getMissionsCatalog = async () => {
  const data = {
    textSearch: ''
  };
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('api/missions/list', data, {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return Object.keys(res.data).map(missionKey => {
    return {
      value: missionKey,
      label: res.data[missionKey]
    };
  });
};
const getMissionsValidation = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/missions/list-validation', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return Object.keys(res.data).map(missionKey => {
    return {
      value: missionKey,
      label: res.data[missionKey]
    };
  });
};
const getMissionsCatalogByMission = async mission => {
  const data = {
    textSearch: mission
  };
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].post('api/missions/list', data, {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return Object.keys(res.data).map(missionKey => {
    return {
      value: missionKey,
      label: res.data[missionKey]
    };
  });
};
const getUnitsCatalog = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/units/list', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return Object.keys(res.data.data).map(unitKey => {
    return {
      value: unitKey,
      label: res.data.data[unitKey]
    };
  });
};
const getBrandsCatalog = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/brands/list', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return Object.keys(res.data.data).map(brandKey => {
    return {
      value: brandKey,
      label: res.data.data[brandKey]
    };
  });
};
const getStoresCatalog = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/store/list', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  const stores = Object.keys(res.data).map(storeKey => {
    return {
      value: storeKey,
      label: res.data[storeKey]
    };
  });
  stores.sort((a, b) => {
    if (a.label.toLowerCase() < b.label.toLowerCase()) {
      return -1;
    }
    if (a.label.toLowerCase() > b.label.toLowerCase()) {
      return 1;
    }
    return 0;
  });
  return stores;
};
const getLinesCatalog = async () => {
  const res = await _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('api/lines/list', {
    headers: Object(_session_management__WEBPACK_IMPORTED_MODULE_1__["getHeader"])()
  });
  return res.data.lines.map(line => {
    return {
      value: line.id,
      label: line.name,
      group: line.id_group
    };
  });
};
const getGeolocationCatalog = async () => {
  var _response$data;
  const response = await Object(_api__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "api/places",
    baseURL: _baseUrl__WEBPACK_IMPORTED_MODULE_2__["baseURLGeoref"],
    headers: {
      Authorization: `Api-Key ${_baseUrl__WEBPACK_IMPORTED_MODULE_2__["georefApiKey"]}`
    }
  });
  let transformGeolocation = response === null || response === void 0 ? void 0 : (_response$data = response.data) === null || _response$data === void 0 ? void 0 : _response$data.data;
  transformGeolocation = transformGeolocation.map(geolocation => {
    return _objectSpread(_objectSpread({}, geolocation), {}, {
      value: geolocation.id,
      label: geolocation.name
    });
  });
  return transformGeolocation;
};


/***/ }),

/***/ "./utils/format-date.ts":
/*!******************************!*\
  !*** ./utils/format-date.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatDate; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "date-fns");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns/locale */ "date-fns/locale");
/* harmony import */ var date_fns_locale__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(date_fns_locale__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _session_management__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session-management */ "./utils/session-management.ts");



function formatDate(dateStr) {
  if (!dateStr || dateStr.trim() === '-') {
    return null;
  }
  let locale = Object(_session_management__WEBPACK_IMPORTED_MODULE_2__["getLocale"])();
  locale = locale === 'en' ? 'enUS' : locale;
  const parsedShort = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["parse"])(dateStr, 'dd/MMM/yyyy', new Date());
  if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isDate"])(parsedShort) && Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isValid"])(parsedShort)) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(parsedShort, 'dd/MMMM/yyyy', {
      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_1__[locale]
    });
  }
  const parsedLong = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["parse"])(dateStr, 'yyyy-MM-dd HH:mm:ss', new Date());
  if (Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isDate"])(parsedLong) && Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isValid"])(parsedLong)) {
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["format"])(parsedLong, 'dd/MMMM/yyyy', {
      locale: date_fns_locale__WEBPACK_IMPORTED_MODULE_1__[locale]
    });
  }
  return null;
}

/***/ }),

/***/ "./utils/photo_url.ts":
/*!****************************!*\
  !*** ./utils/photo_url.ts ***!
  \****************************/
/*! exports provided: photoUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "photoUrl", function() { return photoUrl; });
const photoUrl = 'https://lampt3bdiag.blob.core.windows.net/pricecheckv2';

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

/***/ "date-fns/locale":
/*!**********************************!*\
  !*** external "date-fns/locale" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("date-fns/locale");

/***/ }),

/***/ "lodash.get":
/*!*****************************!*\
  !*** external "lodash.get" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.get");

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

/***/ }),

/***/ "react-select/async":
/*!*************************************!*\
  !*** external "react-select/async" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select/async");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9QcmltYXJ5QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvU2Vjb25kYXJ5QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrYm94L0NoZWNrYm94LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9kYXRlcGlja2VyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L0ZpbGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL21vZGFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvb3B0aW9uTGlzdC9PcHRpb25MaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL29wdGlvbkxpc3Qvb3B0aW9uTGlzdC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3BhZ2VUaXRsZS9QYWdlVGl0bGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZVRpdGxlL3BhZ2VUaXRsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NjYW5uZXJzVGFiL1NjYW5uZXJzVGFiLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3NjYW5uZXJzVGFiL3NjYW5uZXJzVGFiLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvc2VsZWN0U2VhcmNoL1NlbGVjdFNlYXJjaC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9zZWxlY3RTZWFyY2gvc2VsZWN0U2VhcmNoLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvVGFibGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvVGFibGVDb21wbGV4LnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3RhYmxlL2luZGV4LnRzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvdGFibGUubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy92YWxpZGF0b3JzVGFiL1ZhbGlkYXRvcnNUYWIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdmFsaWRhdG9yc1RhYi92YWxpZGF0b3JzVGFiLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2kxOG4vZW4vYWR2YW5jZWQtc2VhcmNoLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vYnJhbmRzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9jYXB0dXJlLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vY2FwdHVyZXMudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9jYXRhbG9ncy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2NoYWlucy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vZ3JhcGgtdGFiLWNvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9ncmFwaC10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9ncm91cHMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2xpbmVzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9taXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL25hdmJhci50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL3Byb2R1Y3QtcmVwb3J0LnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vcHJvZHVjdC10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vcmFua2luZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9yZWdpb25zLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9zY2FubmVycy10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9zY2Fucy1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi90YWJsZS10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi90YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL3VuaXRzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi91c2Vycy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vdmFsaWRhdG9ycy10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9hZHZhbmNlZC1zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9icmFuZHMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2NhcHR1cmUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9jYXB0dXJlcy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2NhdGFsb2dzLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvY2hhaW5zLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9ncmFwaC10YWItY29tcGFyZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2dyYXBoLXRhYi50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2dyb3Vwcy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvaG9tZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2luZGV4LnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvbGluZXMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL21pc3Npb25zLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvbmF2YmFyLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvcHJvZHVjdC1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9wcm9kdWN0LXRhYi50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3Byb2R1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9wcm9kdWN0cy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9yYW5raW5ncy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3JlZ2lvbnMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3NjYW5uZXJzLXRhYi50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3NjYW5zLXJlcG9ydC50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3N0YXRpc3RpYy1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy90YWJsZS10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy90YWJsZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3VuaXRzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy91c2Vycy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvdmFsaWRhdG9ycy10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvd2l0aC1yb3V0ZXIudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvcmFua2luZ3MvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvcmFua2luZ3MvcmFua2luZ3MubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2Jhc2VVcmwudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvY2F0YWxvZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvZm9ybWF0LWRhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcGhvdG9fdXJsLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Nlc3Npb24tbWFuYWdlbWVudC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy90aGVtZS50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnMvbG9jYWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibG9kYXNoLmdldFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1kYXRlcGlja2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zZWxlY3QvYXN5bmNcIiJdLCJuYW1lcyI6WyJQcmltYXJ5QnV0dG9uVmFyaWFudCIsIlByaW1hcnlCdXR0b24iLCJjbGFzc05hbWUiLCJ0YWJpbmRleCIsImxhYmVsIiwidHlwZSIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJidXR0b25DbGFzcyIsIkVycm9yIiwic3R5bGVzIiwicHJpbWFyeUJ1dHRvbkVycm9yIiwicHJpbWFyeUJ1dHRvbiIsIl9fanN4IiwidGFiSW5kZXgiLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImRlZmF1bHRQcm9wcyIsIlN1Y2Nlc3MiLCJTZWNvbmRhcnlCdXR0b25WYXJpYW50IiwiU2Vjb25kYXJ5QnV0dG9uIiwibm9Cb3JkZXIiLCJzZWNvbmRhcnlCdXR0b24iLCJzZWNvbmRhcnlCdXR0b25FcnJvciIsInN0eWxlIiwiYm9yZGVyIiwiQ2hlY2tib3giLCJwcm9wcyIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImNoZWNrYm94Q2xhc3NOYW1lIiwicmFuZG9tIiwiTWF0aCIsImN1c3RvbUlkIiwiY2xhc3NOYW1lcyIsImpvaW4iLCJpZCIsImNoZWNrYm94IiwiaHRtbEZvciIsIkRhdGVwaWNrZXIiLCJQdXJlQ29tcG9uZW50IiwicmVuZGVyIiwic2VsZWN0ZWQiLCJvblNlbGVjdCIsInBsYWNlaG9sZGVyIiwiZGF0ZUZvcm1hdCIsImVycm9yTXNnIiwiaXNMYWJlbCIsImlubGluZUxhYmVsIiwiaW5saW5lTGFiZWxDbGFzcyIsImlucHV0Q29udGFpbmVyIiwiaW5wdXRMaW5lQ29udGFpbmVyIiwiRGF0ZVBpY2tlciIsImlucHV0IiwicGxhY2Vob2xkZXJUZXh0IiwiZXJyb3JNZXNzYWdlIiwiX2RlZmluZVByb3BlcnR5IiwiSGVhZGVyIiwiY29uc3RydWN0b3IiLCJhcmdzIiwibmFtZSIsInByb2ZpbGVQaWN0dXJlIiwic2hvd01lbnUiLCJob3dTaG93TWVudSIsImlzQW5hbHlzdCIsImxvZ28iLCJlIiwia2V5Iiwid2hpY2giLCJrZXlDb2RlIiwiY3RybCIsImN0cmxLZXkiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVsZXRlU2Vzc2lvbiIsIlJvdXRlciIsInB1c2giLCJjb21wb25lbnREaWRNb3VudCIsInJvbEFuYWx5c3QiLCJ2YWxpZGF0ZUlzQW5hbHlzdCIsImdldExvZ28iLCJnZXROYW1lIiwiZ2V0UHJvZmlsZVBpY3R1cmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5ZG93biIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImxvY2FsZSIsImdldExvY2FsZSIsImhlYWRlciIsIkxpbmsiLCJocmVmIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJvcHRpb25zTGlzdCIsIm9wdGlvbkRpc2FibGVkIiwib3B0aW9uIiwiZ2V0STE4bkxhYmVsIiwiZHJvcGRvd24iLCJGb250QXdlc29tZUljb24iLCJ0cmlhbmdsZSIsImljb24iLCJmYUNhcmV0RG93biIsImxlZnRDb250YWluZXIiLCJjb25maWd1cmF0aW9uIiwiZmFDb2ciLCJwcm9maWxlIiwiZGVmYXVsdEltZyIsImZhVXNlciIsImNsb3NlU2Vzc2lvbiIsIndpdGhSb3V0ZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJfZXh0ZW5kcyIsIkZpbGUiLCJhY2NlcHRlZEZvcm1hdHMiLCJmaWxlQ29udGFpbmVyIiwicmVmIiwiaW5wdXRSZWYiLCJmaWxlIiwiYWNjZXB0IiwiY2xpY2siLCJidXR0b24iLCJmYVVwbG9hZCIsIklucHV0IiwibWF4TGVuZ3RoIiwiYmdDb2xvciIsImNvbG9yIiwib25LZXlQcmVzcyIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyT3ZlckxhYmVsIiwibWluTGVuZ3RoIiwicGxhY2Vob2xkZXJDb2xvciIsImlucHV0UGxhY2Vob2xkZXIiLCJmb250U2l6ZSIsImlzQmxhY2siLCJzdHlsZUlucHV0IiwiYmFja2dyb3VuZENvbG9yIiwicGxhY2Vob2xkZXJJbnB1dCIsInZhbHVlIiwibGVuZ3RoIiwiTW9kYWwiLCJldmVudCIsImlzSW1hZ2VNb2RhbCIsImNsb3NlTW9kYWwiLCJjb21wb25lbnREaWRVcGRhdGUiLCJzaG93TW9kYWwiLCJkb2N1bWVudCIsImhhbmRsZUVzY2FwZUtleSIsImNvbnRhaW5lcldpZHRoIiwibm9QYWRkaW5nIiwib25LZXlEb3duIiwiY29udGFpbmVyU3R5bGUiLCJtb2RhbENvbnRhaW5lciIsImJhY2tncm91bmQiLCJoYW5kbGVLZXlNb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJtb2RhbCIsImNoaWxkcmVuIiwiT3B0aW9uTGlzdCIsIm9wdGlvbnMiLCJvcHRpb25TZWxlY3RlZCIsIm9uT3B0aW9uU2VsZWN0ZWQiLCJzIiwidGFiQmFyIiwibWFwIiwiZWxlIiwiUGFnZVRpdGxlIiwidGl0bGUiLCJlbXB0eVNlYXJjaFNjYW5uZXIiLCJmcm9tIiwidG8iLCJ0ZXh0U2VhcmNoIiwicGVyUGFnZSIsIlNjYW5uZXJzVGFiIiwiQ29tcG9uZW50IiwiY291bnQiLCJjdXJyZW50UGFnZSIsInRvdGFsIiwidG90YWxQYWdlIiwicmVnaW9uTGlzdCIsIm1pc3Npb25MaXN0IiwibWlzc2lvbiIsInNlYXJjaFNjYW5uZXIiLCJzZWFyY2hTY2FubmVycyIsInN0YXJ0RGF0ZUVycm9yTXNnIiwiaW5wdXRWYWx1ZUZpbHRlciIsIm9yZGVyIiwiX29iamVjdFNwcmVhZCIsInRhcmdldCIsImNsZWFyVGltZW91dCIsInNlYXJjaFRpbWVvdXQiLCJzZXRUaW1lb3V0Iiwic2VhcmNoIiwidmFsaWRhdGVEYXRlIiwibWlzc2lvbklkIiwiaW5wdXRWYWx1ZSIsImdldE1pc3Npb25zQ2F0YWxvZ0J5TWlzc2lvbiIsInBhZ2UiLCJoZWFkZXJzIiwiZ2V0SGVhZGVyIiwiZm9ybV9kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJmb3JtYXREYXRlIiwicmVzcG9uc2UiLCJhcGkiLCJwb3N0IiwiZGF0YSIsInBhZ2luYXRpb24iLCJzdGFydCIsImN1cnJlbnRfcGFnZSIsInBlcl9wYWdlIiwiaSIsInJhbmtpbmciLCJlZmZpY2llbmN5Iiwicm91bmQiLCJ0b3RhbF9wYWdlcyIsImlzVmFsaWQiLCJEYXRlIiwiZ2V0VGltZSIsImVuZCIsIm5leHQiLCJkYXRlIiwidmFsaWRhdGVTZXNzaW9uIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJtb250aCIsImdldE1vbnRoIiwiZGF5IiwiZ2V0RGF0ZSIsInllYXIiLCJnZXRGdWxsWWVhciIsInRyYW5zbGF0ZVRhYmxlSGVhZGVyIiwiZmxleERpcmVjdGlvbiIsInN0YXJ0RGF0ZUhhbmRsZXIiLCJlbmREYXRlSGFuZGxlciIsImNsZWFyRGF0ZVNlbGVjdGlvbiIsInNlYXJjaFNjYW5uZXJIYW5kbGVyIiwiU2VsZWN0U2VhcmNoIiwibm9MYWJlbCIsIm9wdGlvbkZ1bmN0aW9uIiwibWlzc2lvbkhhbmRsZXIiLCJtZWRhbExpbmsiLCJ0YWJsZUNvbnRhaW5lciIsIlRhYmxlIiwiYm9keURhdGEiLCJvbk5leHRQYWdlIiwib25QcmV2UGFnZSIsIkFzeW5jU2VsZWN0IiwiY2FjaGVPcHRpb25zIiwiZGVmYXVsdE9wdGlvbnMiLCJsb2FkT3B0aW9ucyIsImF1dG9Gb2N1cyIsImFjdGlvbnMiLCJ0b3RhbExlbmd0aCIsInRhYmxlU3R5bGUiLCJjcmVhdGVBY3Rpb25CdXR0b25zIiwiYWN0aW9uIiwiaW5kZXgiLCJpc0Jsb2NrZWQiLCJibG9ja2VkX3VwIiwiZW5hYmxlZCIsImN1cnNvciIsIm1hcmdpbiIsInRhYmxlQ29tcGxleCIsInNvcnQiLCJvblNvcnQiLCJzb3J0SWNvbiIsImZhU29ydFVwIiwiZmFTb3J0RG93biIsInJvdyIsInN1YnN0cmluZyIsIkFycmF5IiwiaXNBcnJheSIsImZvb3RlciIsImZhQ2FyZXRMZWZ0IiwiZmFDYXJldFJpZ2h0IiwiVGFibGVDb21wbGV4IiwiY2hhbmdlUGFnZU5leHQiLCJjaGFuZ2VQYWdlUHJldiIsImNvbnRlbnQiLCJvbkNsaWNrRGV0YWlscyIsIm9uQ2hlY2tlZCIsImNoZWNrYm94U3R5bGVzIiwidGV4dE5vdERhdGEiLCJyZXBvcnREZXRhaWxzIiwiY3VzdG9tQ2xhc3NOYW1lIiwiaGVhZGVyTGlzdCIsInNldEhlYWRlckxpc3QiLCJ1c2VTdGF0ZSIsInNldFNob3dNb2RhbCIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwic2V0SXNBbmFseXN0IiwidXNlRWZmZWN0IiwiaCIsImhpZGUiLCJvcGVuTW9kYWwiLCJpbWdVcmwiLCJnZXRGaWVsZCIsImZpZWxkVHlwZSIsImZpZWxkTmFtZSIsImlzSGlkZGVuIiwicGhvdG9VcmwiLCJpc05hTiIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwic3BsaXQiLCJkaXNwbGF5IiwiYWMiLCJwb2ludGVyRXZlbnRzIiwiaWRDbGFzcyIsImlzUHJvbW8iLCJmYVBlcmNlbnQiLCJjaGFuZ2VIaWRlU3RhdHVzIiwiZmllbGRUaXRsZSIsImhpZGVGaWVsZCIsIm5ld0hlYWRlciIsInRhYmxlQ2xhc3NOYW1lIiwib3AiLCJwcm9wZXJ0eUV4aXN0Iiwic2NhbiIsImlzSGlkZWRhYmxlIiwiZmFFeWUiLCJmYUV5ZVNsYXNoIiwiYyIsInN0YXR1cyIsInJldmlld2VkIiwiZmllbGQiLCJtb2RhbEltYWdlQ2xvc2UiLCJmYVRpbWVzQ2lyY2xlIiwibW9kYWxJbWFnZSIsImVtcHR5UmFua2luZ1ZhbGlkYXRvciIsIlZhbGlkYXRvcnNUYWIiLCJyYW5raW5nVmFsaWRhdG9yIiwicmFua2luZ1ZhbGlkYXRvcnMiLCJ0b3RhbFNjYW5IaXN0IiwidmFsaWRTY2FuSGlzdCIsInRvdGFsU2NhbiIsInZhbGlkU2NhbiIsInVzZXJzIiwic2NhbnMiLCJmdWxsTmFtZSIsImZ1bGxuYW1lIiwiZmlsdGVyZWQiLCJmaWx0ZXJlZF92YWxpZGF0ZWQiLCJ2YWxpZGF0ZWQiLCJsb2FkRGF0YSIsInRyYW5zbGF0ZVRhYmxlQ29tcGxleEhlYWRlciIsImFsaWduSXRlbXMiLCJzZWFyY2hWYWxpZGF0b3JIYW5kbGVyIiwic3RhdHNDb250YWluZXIiLCJmaWx0ZXJzIiwic2VhcmNoRmllbGQiLCJjbGVhbkZpbHRlciIsImRvd25sb2FkIiwiY29tcGFyYXRpdmVDaGFydCIsImdlb3JlZmVyZW5jZSIsImdldEN1cnJlbnRSZXBvcnQiLCJ0YWJsZSIsInRvYXN0Iiwic3VjY2VzcyIsImVycm9yIiwibWVzc2FnZSIsImNyZWF0ZUJyYW5kIiwiZGVsZXRlQnJhbmQiLCJlZGl0QnJhbmQiLCJkb3dubG9hZERhdGEiLCJjcmVhdGVNb2RhbCIsInNlYXJjaEJ5TmFtZSIsImVkaXRNb2RhbCIsImFkZCIsInNhdmUiLCJjcmVhdGUiLCJjYXB0dXJlSWQiLCJwcmljZSIsInByaWNlV2l0aFByb21vdGlvbiIsImJhcmNvZGUiLCJicmFuZCIsInVuaXQiLCJzdG9yZSIsImdyb3VwIiwibGluZSIsImFtb3VudCIsImNhcHR1cmVEYXRlIiwic2Nhbm5lZEJ5IiwiYnJhbmNoT2ZmaWNlIiwibWFpbkltYWdlIiwicHJpY2VJbWFnZSIsImRldGFpbHNDb250YWluZXIiLCJjaGFuZ2VJbWFnZSIsImVkaXRJbmZvcm1hdGlvbiIsInNhdmVJbmZvcm1hdGlvbiIsImNhbmNlbEluZm9ybWF0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIndpdGhJbWFnZSIsIndpdGhvdXRJbWFnZSIsInN0YXR1c1JlamVjdGVkIiwibm9ybWFsUHJpY2UiLCJzdGF0dXNQZW5kaW5nIiwic3RhdHVzVmFsaWRhdGVkIiwicGFyYW0iLCJnZW9sb2NhbGl0YXRpb24iLCJleHBvcnRHZW9EYXRhIiwib3B0aW9uc0NhdGFsb2ciLCJicmFuZHNDYXRhbG9nIiwiZ3JvdXBzQ2F0YWxvZyIsImxpbmVzQ2F0YWxvZyIsInN0b3Jlc0NhdGFsb2ciLCJ1bml0c0NhdGFsb2ciLCJoZWFkIiwicGhvdG9fbWFpbiIsInBob3RvX3ByaWNlIiwicHJvZHVjdCIsImNoYWluIiwiYnJhbmNoIiwic2Nhbm5lZF9ieSIsImdyYW1tYWdlX3F1YW50aXR5IiwidW5pdF9wcmljZSIsInByb2R1Y3RfY3JlYXRlZF9kYXRlIiwibG93ZXJfcHJpY2UiLCJoaWdoZXN0X3ByaWNlIiwiY2FwdHVyZV9kYXRlIiwiY2FwdHVyZV9wcmljZSIsInBlbmRpbmciLCJ1bml0cyIsImNtIiwibSIsIm1sIiwibHQiLCJtZyIsImciLCJrZyIsInBpZXphIiwiZGVsZXRlIiwiYnV0dG9uQWNjZXB0TGFiZWwiLCJicmFuZHMiLCJ1bml0aWVzIiwiZ3JvdXBzIiwibGluZXMiLCJyZWdpb24iLCJhbGlhcyIsImVkaXQiLCJ0YWJzIiwicHJpY2VMaXN0IiwidW5pdGFyeVByaWNlIiwiaGlzdG9yeSIsImFiYnJldmlhdGlvbiIsIndlbGNvbWUiLCJzaWRlYmFyIiwic2NhbkZpbHRlciIsImFsbCIsIndpdGhQcm9kdWN0Iiwid2l0aG91dFByb2R1Y3QiLCJ0b3BCYXIiLCJiZWluZ1ZhbGlkYXRlZCIsIndpdGhvdXROdW1iZXIiLCJ3aXRob3V0TWlzc2lvbiIsInByb2R1Y3RJbWFnZSIsInByb21vdGlvblByaWNlIiwiYWRkcmVzcyIsImFkaXRpb25hbENvbW1lbnRzIiwic2hvd1BpY3R1cmUiLCJyZWplY3QiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlQW5kQWRkIiwic3ViamVjdCIsInNlbmRDcml0ZXJpb24iLCJyYWRpb01hcEZpcnN0IiwiYmx1cnJ5IiwiZmFyQXdheSIsImRhcmsiLCJpbmNvbXBsZXRlIiwiZG9lc250TWF0Y2giLCJyYWRpb1NlY29uZCIsIm91dHNpZGVTaG9wIiwic2hvcFRpY2tldCIsImFub3RoZXJDZWxsIiwidGVzdFNjYW4iLCJyZWNlbnQiLCJtb3N0RXhwZW5zaXZlIiwiY2hlYXBlc3QiLCJjaGVhcGVzdFdpdGhQcm9tb3Rpb24iLCJuYXZiYXIiLCJob21lIiwibWlzc2lvbnMiLCJjYXB0dXJlcyIsImNhcHR1cmUiLCJjYXRhbG9ncyIsInByb2R1Y3RzIiwicmFua2luZ3MiLCJncmFwaFRhYiIsImFkdmFuY2VkU2VhcmNoIiwidGFibGVUYWIiLCJwcm9kdWN0VGFiIiwic2Nhbm5lcnNUYWIiLCJ2YWxpZGF0b3JzVGFiIiwiY2hhaW5zQ2F0YWxvZyIsInJlZ2lvbnNDYXRhbG9nIiwidXNlcnNDYXRhbG9nIiwiZ3JhcGhUYWJDb21wYXJlIiwicHJvZHVjdFJlcG9ydCIsInNjYW5zUmVwb3J0IiwibmFtZV9saW5lIiwibmFtZV9ncm91cCIsImRlc2NyaXB0aW9uIiwiY2FwdHVyZV9wb2ludHMiLCJtaXNzaW9uX3BvaW50cyIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInJlZ2lvbnMiLCJjcmVhdGVNaXNzaW9uIiwiZHVwbGljYXRlZE1lc3NhZ2UiLCJkaWFsb2ciLCJhY2VwdCIsImNhbmNlbCIsInZhbGlkYXRpb25zIiwicmVxdWlyZWQiLCJncmVhdGVyVGhhbiIsIm1pc3Npb25Qb2ludHMiLCJ2YWxpZCIsImNhcHR1cmVQb2ludHMiLCJlZGl0UHJvZmlsZSIsInNpZ25PdXQiLCJyZXBvcnRzIiwiZ2VvbG9jYWxpemF0aW9uIiwic3RhdGlzdGljIiwibmV3U2VyYWNoIiwicGxhY2Vob2xkZXJTZWFyY2giLCJteUxpc3QiLCJnZW5lcmFsU2VhcmNoIiwic2F2ZUxpc3QiLCJncmFwaGljIiwiY2xlYXJHcmFwaGljIiwiZW1wdHlTdGF0ZSIsImVtcHRHcmFwaHlTdGF0ZSIsInNhdmVQcm9kdWN0cyIsInNhdmVQcm9kdWN0c0Vycm9yIiwicGFyYW1ldGVyIiwidmFsdWVzIiwiZGVsZXRlRmlsdGVycyIsIm5hbWVPckNvZGUiLCJzdWNjZXNzRG93bmxvYWQiLCJkZWxldGVGcm9tTGlzdCIsInN1Y2Nlc3NEZWxldGUiLCJlcnJvckRlbGV0ZSIsImVycm9yRG93bmxvYWQiLCJub1NlbGVjdGVkIiwiY2FyZCIsImdyYW1tYWdlIiwicmVjZW50bHkiLCJoaWdoZXIiLCJsb3dlciIsImxvd2VyUHJvbW90aW9uIiwiZGV0YWlsIiwicHJvZHVjdElkIiwibWluUHJpY2UiLCJtYXhQcmljZSIsImxpc3RQcmljZSIsInByaWNlSGlzdG9yeSIsInVwZGF0ZWRBdCIsImNyZWF0ZWRBdCIsInBob3RvIiwiY3JlYXRlZF9hdCIsInVwZGF0ZWRfYXQiLCJwcm9tb3Rpb25fbG93ZXJfcHJpY2UiLCJsYXN0X3ByaWNlIiwicm9sZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJtb3RoZXJfbGFzdF9uYW1lIiwidGhlbWUiLCJlbXBsb3llZV9udW1iZXIiLCJjZWxscGhvbmUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY2xvc2UiLCJjYXB0dXJpc3RzIiwiY2xlYXJEYXRlIiwicG9zaXRpb24iLCJlbXBsb3llZU51bWJlciIsInBlcmNlbnRhZ2UiLCJ2YWxpZGF0ZWRDYXB0dXJlcyIsInBvaW50cyIsInZhbGlkYXRvcnMiLCJnZW5lcmF0ZURhdGEiLCJub21icmUiLCJ2YWxpZGF0ZWRfY2FwdHVyZXMiLCJjdXJyZW50UHJpY2UiLCJhdmVyYWdlUHJpY2UiLCJzZWVIaXN0b3J5IiwiY2FwdHVyZWRBdCIsInRhZ3MiLCJhZGRUYWdzIiwiYWxsUmVnaW9ucyIsImVtYWlsIiwicm9sU2VsZWN0ZWQiLCJ1c2VyVmFsaWRhdGVzIiwiZ2VuZXJhdGVSZXBvcnQiLCJzdGF0aXN0aWNSZXBvcnQiLCJzY2FubmVyIiwibG9jYWxlcyIsImVzIiwiZW4iLCJnZXQiLCJwYXRoIiwiY2FjaGVkT2JzZXJ2ZXIiLCJsaXN0ZW5lcnMiLCJNYXAiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInByZWZldGNoZWQiLCJnZXRPYnNlcnZlciIsInVuZGVmaW5lZCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJoYXMiLCJjYiIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJ1bm9ic2VydmUiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZWwiLCJvYnNlcnZlciIsIm9ic2VydmUiLCJzZXQiLCJlcnIiLCJjb25zb2xlIiwicHJlZmV0Y2giLCJhcyIsImNhdGNoIiwiaXNNb2RpZmllZEV2ZW50IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50IiwibGlua0NsaWNrZWQiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwidGhlbiIsInNjcm9sbFRvIiwiYm9keSIsImZvY3VzIiwiY3JlYXRlUHJvcEVycm9yIiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0Iiwia2V5cyIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJwYXNzSHJlZiIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJ1c2VSZWYiLCJjdXJyZW50Iiwid2FybiIsInAiLCJjaGlsZEVsbSIsInNldENoaWxkRWxtIiwicGF0aG5hbWUiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInRhZ05hbWUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZCIsIkNoaWxkcmVuIiwib25seSIsImNoaWxkUHJvcHMiLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJlbmRzV2l0aCIsInNsaWNlIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImRlZmluZVByb3BlcnR5IiwiZXZlbnRzIiwiZ2V0Um91dGVyIiwib24iLCJldmVudEZpZWxkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsInByb3BlcnR5IiwiYXNzaWduIiwiQ29tcG9zZWRDb21wb25lbnQiLCJXaXRoUm91dGVyV3JhcHBlciIsImdldEluaXRpYWxQcm9wcyIsIm9yaWdHZXRJbml0aWFsUHJvcHMiLCJkaXNwbGF5TmFtZSIsIm5vcm1hbGl6ZUxvY2FsZVBhdGgiLCJkZXRlY3RlZExvY2FsZSIsInBhdGhuYW1lUGFydHMiLCJzb21lIiwidG9Mb3dlckNhc2UiLCJzcGxpY2UiLCJtaXR0IiwiaGFuZGxlciIsIm9mZiIsImVtaXQiLCJldnRzIiwiYmFzZVBhdGgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiY2FuY2VsbGVkIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJhZGRMb2NhbGUiLCJkZWxMb2NhbGUiLCJzdWJzdHIiLCJoYXNCYXNlUGF0aCIsImFkZEJhc2VQYXRoIiwiZGVsQmFzZVBhdGgiLCJpc0xvY2FsVVJMIiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImludGVycG9sYXRlQXMiLCJyb3V0ZSIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwicGFyYW1zIiwiZXZlcnkiLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlSHJlZiIsImN1cnJlbnRQYXRoIiwicmVzb2x2ZUFzIiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsInNlYXJjaFBhcmFtcyIsImhhc2giLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJtYXJrTG9hZGluZ0Vycm9yIiwicHJlcGFyZVVybEFzIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IiLCJmZXRjaFJldHJ5IiwiYXR0ZW1wdHMiLCJjcmVkZW50aWFscyIsInJlcyIsIm9rIiwianNvbiIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiaW5pdGlhbFByb3BzIiwicGFnZUxvYWRlciIsIkFwcCIsIndyYXBBcHAiLCJpbml0aWFsU3R5bGVTaGVldHMiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsIl9icHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsIm9uUG9wU3RhdGUiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImNoYW5nZSIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInJlbG9hZCIsImxvY2F0aW9uIiwiYmFjayIsIm1ldGhvZCIsInJlcXVpcmUiLCJsb2NhbGVQYXRoUmVzdWx0IiwiX2giLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsIm9ubHlBSGFzaENoYW5nZSIsInNjcm9sbFRvSGFzaCIsIm5vdGlmeSIsInBhZ2VzIiwiZ2V0UGFnZUxpc3QiLCJfX3Jld3JpdGVzIiwicmV3cml0ZXMiLCJwcm9taXNlZEJ1aWxkTWFuaWZlc3QiLCJwYXJzZWQiLCJfcmVzb2x2ZUhyZWYiLCJ1cmxJc05ldyIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwiZmlsdGVyIiwicm91dGVJbmZvIiwiZ2V0Um91dGVJbmZvIiwicGFnZVByb3BzIiwiX19OX1JFRElSRUNUIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiUHJvbWlzZSIsImFwcENvbXAiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwic3NnNDA0IiwibW9kIiwiZmV0Y2hDb21wb25lbnQiLCJfZ2V0U3RhdGljRGF0YSIsImdldERhdGFIcmVmIiwiX2VyciIsImdpcEVyciIsInJvdXRlSW5mb0VyciIsImNhY2hlZFJvdXRlSW5mbyIsImlzVmFsaWRFbGVtZW50VHlwZSIsIl9nZXREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwiaWRFbCIsImdldEVsZW1lbnRCeUlkIiwic2Nyb2xsSW50b1ZpZXciLCJuYW1lRWwiLCJnZXRFbGVtZW50c0J5TmFtZSIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwicmUiLCJ0ZXN0IiwicHJlZmV0Y2hEYXRhIiwiY29tcG9uZW50UmVzdWx0IiwibG9hZFBhZ2UiLCJmbiIsImNhY2hlS2V5IiwiY3R4IiwiQXBwVHJlZSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsImZvcm1hdFVybCIsInVybE9iaiIsImF1dGgiLCJob3N0bmFtZSIsInByb3RvY29sIiwiaG9zdCIsInBvcnQiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMiLCJzbGFzaGVzIiwiVEVTVF9ST1VURSIsImlzRHluYW1pY1JvdXRlIiwiRFVNTVlfQkFTRSIsInBhcnNlUmVsYXRpdmVVcmwiLCJyZXNvbHZlZEJhc2UiLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJyZWdleHBUb0Z1bmN0aW9uIiwicHJlcGFyZURlc3RpbmF0aW9uIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsImNvbXBpbGUiLCJuZXdVcmwiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsInNob3VsZEFkZEJhc2VQYXRoIiwibWF0Y2giLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5Iiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInVybFF1ZXJ5IiwiVVJMU2VhcmNoUGFyYW1zIiwiaXRlbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXNvbHZlUmV3cml0ZXMiLCJyZXdyaXRlIiwic291cmNlIiwiZGVzdFJlcyIsImdldFJvdXRlTWF0Y2hlciIsImV4ZWMiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJjb2RlIiwic2x1Z05hbWUiLCJwb3MiLCJlc2NhcGVSZWdleCIsInN0ciIsInBhcnNlUGFyYW1ldGVyIiwiZ2V0Um91dGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsInNlZ21lbnRzIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJSYW5raW5nc1BhZ2UiLCJpc0N1c3RvbSIsIklzQ3VzdG9tVGhlbWUiLCJoYXNEYXJrVGhlbWUiLCJnZXREYXJrVGhlbWUiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiZ2V0VGhlbWUiLCJjdXJyZW50VGhlbWUiLCJidWlsZFRoZW1lIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImFwcGVuZENoaWxkIiwiRnJhZ21lbnQiLCJjb250YWluZXIiLCJ2IiwiYXhpb3MiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwiYmFzZVVSTEdlb3JlZiIsImdlb3JlZkFwaUtleSIsImdldFJvbGVzQ2F0YWxvZyIsInJvbCIsImdldFJlZ2lvbnNDYXRhbG9nIiwiZ2V0UmVnaW9uc0xhYmVsQ2F0YWxvZyIsImdldExhYmVsc0NhdGFsb2ciLCJnZXRHcm91cHNDYXRhbG9nIiwiZ2V0TWlzc2lvbnNDYXRhbG9nIiwibWlzc2lvbktleSIsImdldE1pc3Npb25zVmFsaWRhdGlvbiIsImdldFVuaXRzQ2F0YWxvZyIsInVuaXRLZXkiLCJnZXRCcmFuZHNDYXRhbG9nIiwiYnJhbmRLZXkiLCJnZXRTdG9yZXNDYXRhbG9nIiwic3RvcmVzIiwic3RvcmVLZXkiLCJhIiwiYiIsImdldExpbmVzQ2F0YWxvZyIsImlkX2dyb3VwIiwiZ2V0R2VvbG9jYXRpb25DYXRhbG9nIiwiX3Jlc3BvbnNlJGRhdGEiLCJBdXRob3JpemF0aW9uIiwidHJhbnNmb3JtR2VvbG9jYXRpb24iLCJnZW9sb2NhdGlvbiIsImRhdGVTdHIiLCJ0cmltIiwicGFyc2VkU2hvcnQiLCJwYXJzZSIsImlzRGF0ZSIsImZvcm1hdCIsInBhcnNlZExvbmciLCJjcmVhdGVTZXNzaW9uIiwidG9rZW4iLCJwcm9maWxlUGljdHJlIiwiZGFya190aGVtZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZW1vdmVJdGVtIiwiZ2V0VG9rZW4iLCJnZXRJdGVtIiwiZ2V0SWQiLCJpc0Jyb3dzZXIiLCJoYXNMb2NhbGUiLCJnZXRSb2xlcyIsInJvbGVzIiwibmV3Um91dGUiLCJ2YWxpZGF0aW9uIiwidmFsaWRhdGVJc0FkbWluIiwib2JqVGhlbWUiLCJMaWdodGVuRGFya2VuQ29sb3IiLCJjb2wiLCJhbXQiLCJ1c2VQb3VuZCIsIm51bSIsInIiLCJsaWdodGVuIiwid2FsbHBhcGVyIiwiZGFya2VuIiwiZm9udERhcmtlbiIsInRleHQiLCJmb250TGlnaHRlciIsImZvbnQiLCJwcmltYXJ5X2J1dHRvbiIsInNlY29uZGFyeV9idXR0b24iLCJwcmltYXJ5X3RleHQiLCJzZWNvbmRhcnlfdGV4dCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBZ0U7QUFFdkI7QUFBQSxJQVlwQ0Esb0JBQW9CLDBCQUFwQkEsb0JBQW9CO0VBQXBCQSxvQkFBb0IsQ0FBcEJBLG9CQUFvQjtFQUFwQkEsb0JBQW9CLENBQXBCQSxvQkFBb0I7RUFBQSxPQUFwQkEsb0JB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Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsK0MiLCJmaWxlIjoicGFnZXMvaG9tZS9yYW5raW5ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaG9tZS9yYW5raW5ncy9pbmRleC50c3hcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgU3ludGhldGljRXZlbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuc2NzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIHR5cGU/OiAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JyxcbiAgICBvbkNsaWNrPzogKGV2ZW50OiBTeW50aGV0aWNFdmVudCkgPT4gdm9pZCxcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gICAgdmFyaWFudD86IFByaW1hcnlCdXR0b25WYXJpYW50LFxuICAgIHRhYmluZGV4PzogbnVtYmVyLFxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZW51bSBQcmltYXJ5QnV0dG9uVmFyaWFudCB7XG4gICAgU3VjY2VzcyxcbiAgICBFcnJvcixcbn1cblxuY29uc3QgUHJpbWFyeUJ1dHRvbjogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgY2xhc3NOYW1lLCB0YWJpbmRleCwgbGFiZWwsIHR5cGUsIG9uQ2xpY2ssIGRpc2FibGVkLCB2YXJpYW50IH0pID0+IHtcbiAgICBjb25zdCBidXR0b25DbGFzcyA9IHZhcmlhbnQgPT09IFByaW1hcnlCdXR0b25WYXJpYW50LkVycm9yID9cbiAgICAgICAgc3R5bGVzLnByaW1hcnlCdXR0b25FcnJvciA6XG4gICAgICAgIHN0eWxlcy5wcmltYXJ5QnV0dG9uXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2J1dHRvbkNsYXNzfSAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICB0YWJJbmRleD17dGFiaW5kZXh9XG4gICAgICAgID5cbiAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgPC9idXR0b24+XG4gICAgKVxufVxuXG5QcmltYXJ5QnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICBvbkNsaWNrOiAoKSA9PiB7fSxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgdmFyaWFudDogUHJpbWFyeUJ1dHRvblZhcmlhbnQuU3VjY2Vzcyxcbn1cblxuZXhwb3J0IHtcbiAgICBQcmltYXJ5QnV0dG9uLFxuICAgIFByaW1hcnlCdXR0b25WYXJpYW50LFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IEZ1bmN0aW9uQ29tcG9uZW50LCBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYnV0dG9uLm1vZHVsZS5zY3NzJ1xuXG50eXBlIFByb3BzID0ge1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICAgIHR5cGU/OiAnYnV0dG9uJyB8ICdzdWJtaXQnIHwgJ3Jlc2V0JyxcbiAgICBvbkNsaWNrPzogKGV2ZW50OiBTeW50aGV0aWNFdmVudCkgPT4gdm9pZCxcbiAgICB2YXJpYW50PzogU2Vjb25kYXJ5QnV0dG9uVmFyaWFudCxcbiAgICBub0JvcmRlcj86IGJvb2xlYW4sXG4gICAgdGFiaW5kZXg/OiBudW1iZXIsXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxufVxuXG5lbnVtIFNlY29uZGFyeUJ1dHRvblZhcmlhbnQge1xuICAgIFN1Y2Nlc3MsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IFNlY29uZGFyeUJ1dHRvbjogRnVuY3Rpb25Db21wb25lbnQ8UHJvcHM+ID0gKHsgY2xhc3NOYW1lLCB0YWJpbmRleCwgbGFiZWwsIHR5cGUsIG9uQ2xpY2ssIHZhcmlhbnQsIG5vQm9yZGVyLCBkaXNhYmxlZCB9KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB2YXJpYW50ID09PSBTZWNvbmRhcnlCdXR0b25WYXJpYW50LlN1Y2Nlc3MgP1xuICAgICAgICBzdHlsZXMuc2Vjb25kYXJ5QnV0dG9uIDpcbiAgICAgICAgc3R5bGVzLnNlY29uZGFyeUJ1dHRvbkVycm9yXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2J1dHRvbkNsYXNzfSAke2NsYXNzTmFtZX0gJHtkaXNhYmxlZCAmJiBzdHlsZXMuZGlzYWJsZWR9YH1cbiAgICAgICAgICAgIHN0eWxlPXtub0JvcmRlciA/IHsgYm9yZGVyOiAnbm9uZScgfSA6IHt9IH1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgdGFiSW5kZXg9e3RhYmluZGV4fVxuICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn1cblxuU2Vjb25kYXJ5QnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICBkaXNhYmxlZDogZmFsc2UsXG4gICAgb25DbGljazogKCkgPT4ge30sXG4gICAgdmFyaWFudDogU2Vjb25kYXJ5QnV0dG9uVmFyaWFudC5TdWNjZXNzLFxuICAgIG5vQm9yZGVyOiBmYWxzZSxcbn1cblxuZXhwb3J0IHtcbiAgICBTZWNvbmRhcnlCdXR0b24sXG4gICAgU2Vjb25kYXJ5QnV0dG9uVmFyaWFudCxcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInByaW1hcnlCdXR0b25cIjogXCJidXR0b25fcHJpbWFyeUJ1dHRvbl9fMjdtYllcIixcblx0XCJwcmltYXJ5QnV0dG9uRXJyb3JcIjogXCJidXR0b25fcHJpbWFyeUJ1dHRvbkVycm9yX18zcW15TVwiLFxuXHRcImRpc2FibGVkXCI6IFwiYnV0dG9uX2Rpc2FibGVkX19XNV92TlwiLFxuXHRcInNlY29uZGFyeUJ1dHRvblwiOiBcImJ1dHRvbl9zZWNvbmRhcnlCdXR0b25fXzFOMXZNXCIsXG5cdFwic2Vjb25kYXJ5QnV0dG9uRXJyb3JcIjogXCJidXR0b25fc2Vjb25kYXJ5QnV0dG9uRXJyb3JfXzJKZFhzXCJcbn07XG4iLCJpbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSAnLi9QcmltYXJ5QnV0dG9uJ1xuaW1wb3J0IHsgU2Vjb25kYXJ5QnV0dG9uIH0gZnJvbSAnLi9TZWNvbmRhcnlCdXR0b24nXG5cbmV4cG9ydCB7XG4gICAgUHJpbWFyeUJ1dHRvbixcbiAgICBTZWNvbmRhcnlCdXR0b24sXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgU3ludGhldGljRXZlbnQsIENTU1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9jaGVja2JveC5tb2R1bGUuc2NzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgICBvbkNoYW5nZTogKGU/OiBTeW50aGV0aWNFdmVudCkgPT4gYW55LFxuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgY2hlY2tlZD86IGJvb2xlYW4sXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICAgIGNoZWNrYm94Q2xhc3NOYW1lPzogc3RyaW5nLFxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcbiAgICBzdHlsZT86IENTU1Byb3BlcnRpZXMsXG4gICAgdGFiaW5kZXg/OiBudW1iZXIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrYm94KHByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgb25DaGFuZ2UgPSAoKSA9PiB7fSxcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIGNoZWNrZWQgPSBmYWxzZSxcbiAgICAgICAgY2xhc3NOYW1lID0gJycsXG4gICAgICAgIGNoZWNrYm94Q2xhc3NOYW1lID0gJycsXG4gICAgICAgIGRpc2FibGVkID0gZmFsc2UsXG4gICAgICAgIHN0eWxlID0ge30sXG4gICAgICAgIHRhYmluZGV4LFxuICAgIH0gPSBwcm9wcztcblxuICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCk7XG4gICAgY29uc3QgY3VzdG9tSWQgPSBgY2hlY2tib3gtJHtyYW5kb219YDtcblxuICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBbXG4gICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgZGlzYWJsZWQgPyBzdHlsZXMuZGlzYWJsZWQgOiBudWxsLFxuICAgIF0uam9pbignICcpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lc30gdGV4dC1sZWZ0YH1cbiAgICAgICAgICAgIHN0eWxlPXtzdHlsZX1cbiAgICAgICAgPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9e2N1c3RvbUlkfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNoZWNrYm94fSAke2NoZWNrYm94Q2xhc3NOYW1lfWB9XG4gICAgICAgICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICBjaGVja2VkPXtjaGVja2VkfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYmluZGV4fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPXtjdXN0b21JZH0+XG4gICAgICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9wPlxuICAgICk7XG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjaGVja2JveFwiOiBcImNoZWNrYm94X2NoZWNrYm94X18za3Vac1wiLFxuXHRcImRpc2FibGVkXCI6IFwiY2hlY2tib3hfZGlzYWJsZWRfXzJEdVlLXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9pbnB1dC9pbnB1dC5tb2R1bGUuc2Nzcyc7XG5pbXBvcnQgRGF0ZVBpY2tlciBmcm9tICdyZWFjdC1kYXRlcGlja2VyJztcblxudHlwZSBQcm9wcyA9IHtcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIHNlbGVjdGVkOiBzdHJpbmcsXG4gICAgb25TZWxlY3Q6IEZ1bmN0aW9uLFxuICAgIHBsYWNlaG9sZGVyOiBzdHJpbmcsXG4gICAgZGF0ZUZvcm1hdDogc3RyaW5nLFxuICAgIGVycm9yTXNnOiBzdHJpbmcsXG4gICAgaXNMYWJlbDogYm9vbGVhbixcbiAgICBpbmxpbmVMYWJlbDogYm9vbGVhbixcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGF0ZXBpY2tlciBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbGFiZWw6ICcnLFxuICAgICAgICBzZWxlY3RlZDogJycsXG4gICAgICAgIG9uU2VsZWN0OiAoKT0+IGZhbHNlLFxuICAgICAgICBkYXRlRm9ybWF0OiAnTU0vZGQveXl5JyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICBlcnJvck1zZzogJycsXG4gICAgICAgIGlzTGFiZWw6IHRydWUsXG4gICAgICAgIGlubGluZUxhYmVsOiBmYWxzZSxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGxhYmVsLFxuICAgICAgICAgICAgc2VsZWN0ZWQsXG4gICAgICAgICAgICBvblNlbGVjdCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgZGF0ZUZvcm1hdCxcbiAgICAgICAgICAgIGVycm9yTXNnLFxuICAgICAgICAgICAgaXNMYWJlbCxcbiAgICAgICAgICAgIGlubGluZUxhYmVsLFxuICAgICAgICB9ID0gdGhpcy5wcm9wc1xuXG4gICAgICAgIGNvbnN0IGlubGluZUxhYmVsQ2xhc3MgPSBpbmxpbmVMYWJlbCA/ICdpbmxpbmUtbGFiZWwnIDogJyc7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaXNMYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtpbmxpbmVMYWJlbENsYXNzfT57bGFiZWx9OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dExpbmVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICA8RGF0ZVBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17b25TZWxlY3R9XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PXtkYXRlRm9ybWF0fVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJUZXh0PXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtlcnJvck1zZyA/ICg8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yTXNnfTwvZGl2PikgOiBudWxsfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBmYUNvZywgZmFDYXJldERvd24sIGZhVXNlciB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hlYWRlci5tb2R1bGUuc2NzcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQge2dldEkxOG5MYWJlbH0gZnJvbSAnLi4vLi4vaTE4bidcbmltcG9ydCB7IGRlbGV0ZVNlc3Npb24sIGdldExvZ28sIGdldE5hbWUsIGdldFByb2ZpbGVQaWN0dXJlLCB2YWxpZGF0ZUlzQW5hbHlzdCwgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Vzc2lvbi1tYW5hZ2VtZW50J1xuXG5jbGFzcyBIZWFkZXIgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PGFueSwgYW55PiB7XG5cbiAgICBzdGF0ZSA9IHtcbiAgICAgICAgbmFtZTogJycsXG4gICAgICAgIHByb2ZpbGVQaWN0dXJlOiBudWxsLFxuICAgICAgICBzaG93TWVudTogZmFsc2UsXG4gICAgICAgIGhvd1Nob3dNZW51OiAna2V5JyxcbiAgICAgICAgaXNBbmFseXN0OiAnJyxcbiAgICAgICAgbG9nbzogJydcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgY29uc3Qgcm9sQW5hbHlzdCA9IHZhbGlkYXRlSXNBbmFseXN0KCk7XG4gICAgICAgIGNvbnN0IGxvZ28gPSBnZXRMb2dvKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgbmFtZTogZ2V0TmFtZSgpLFxuICAgICAgICAgICAgcHJvZmlsZVBpY3R1cmU6IGdldFByb2ZpbGVQaWN0dXJlKCksXG4gICAgICAgICAgICBpc0FuYWx5c3Q6IHJvbEFuYWx5c3QsXG4gICAgICAgICAgICBsb2dvLFxuICAgICAgICB9KVxuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHRoaXMuaGFuZGxlS2V5ZG93bihlKSlcbiAgICB9XG5cbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHRoaXMuaGFuZGxlS2V5ZG93bihlKSlcbiAgICB9XG5cbiAgICBoYW5kbGVLZXlkb3duID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBrZXkgPSBlLndoaWNoIHx8IGUua2V5Q29kZVxuICAgICAgICBjb25zdCBjdHJsID0gZS5jdHJsS2V5ID8gZS5jdHJsS2V5IDogKChrZXkgPT09IDE3KSA/IHRydWUgOiBmYWxzZSlcbiAgICAgICAgaWYgKGtleSA9PSA1NSAmJiBjdHJsKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RhdGUuc2hvd01lbnUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd01lbnU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGhvd1Nob3dNZW51OiAna2V5JyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmhvd1Nob3dNZW51ID09PSAna2V5JyAmJiB0aGlzLnN0YXRlLnNob3dNZW51KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZW51OiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbG9zZVNlc3Npb24gPSAoKSA9PiB7XG4gICAgICAgIGRlbGV0ZVNlc3Npb24oKVxuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9XG5cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBuYW1lLCBwcm9maWxlUGljdHVyZSwgc2hvd01lbnUsIGlzQW5hbHlzdCwgbG9nbyB9ID0gdGhpcy5zdGF0ZTtcbiAgICAgICAgY29uc3QgbG9jYWxlID0gZ2V0TG9jYWxlKClcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWVcIj48YT48aW1nIHNyYz17bG9nb30gc3R5bGU9e2xvZ28gIT0gXCJcIiA/IHsgd2lkdGg6ICc1NXB4JywgaGVpZ2h0OiAnNTBweCcgfSA6IHt9fSBhbHQ9XCJMb2dvIDNCXCIgLz48L2E+PC9MaW5rPlxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25zTGlzdH0+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e2lzQW5hbHlzdCA/IHN0eWxlcy5vcHRpb25EaXNhYmxlZCA6IHN0eWxlcy5vcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi52YWxpZGF0aW9ucycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtpc0FuYWx5c3QgPyBzdHlsZXMub3B0aW9uRGlzYWJsZWQgOiBzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9taXNzaW9uc1wiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24ubWlzc2lvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvc2NhbnNcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLmNhcHR1cmVzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL3Byb2R1Y3RzXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5wcm9kdWN0cycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9yYW5raW5nc1wiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24ucmFua2luZ3MnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPScjJz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZXBvcnRlc1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLnRyaWFuZ2xlfSBpY29uPXtmYUNhcmV0RG93bn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9yZXBvcnRzL3N0YXRpc3RpY1wiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5yZXBvcnRzLnN0YXRpc3RpYycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9yZXBvcnRzL3Byb2R1Y3RcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24ucmVwb3J0cy5wcm9kdWN0Jyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL3JlcG9ydHMvc2NhbnNcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24ucmVwb3J0cy5zY2FucycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9yZXBvcnRzL2dlb2xvY2FsaXphdGlvblwiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5yZXBvcnRzLmdlb2xvY2FsaXphdGlvbicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGVmdENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICFpc0FuYWx5c3QgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29uZmlndXJhdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDb2d9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLnRyaWFuZ2xlfSBpY29uPXtmYUNhcmV0RG93bn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvbmV3Q2F0YWxvZ3NcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5jYXRhbG9ncycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlUGljdHVyZSA9PT0gbnVsbCA/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlZmF1bHRJbWd9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlUGljdHVyZX0+PGltZyBzcmM9e2Ake3Byb2ZpbGVQaWN0dXJlfWB9IC8+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICB9ICovfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRlZmF1bHRJbWd9PjxGb250QXdlc29tZUljb24gaWNvbj17ZmFVc2VyfSAvPjwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bmFtZX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMudHJpYW5nbGV9IGljb249e2ZhQ2FyZXREb3dufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL3Byb2ZpbGVcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24uZWRpdFByb2ZpbGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIG9uQ2xpY2s9eygpID0+IHRoaXMuY2xvc2VTZXNzaW9uKCl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24uc2lnbk91dCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxuXG59XG5cbmNvbnN0IHdpdGhSb3V0ZXIgPSAocHJvcHMpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIHJldHVybiA8SGVhZGVyIHsuLi5wcm9wc30gcm91dGVyPXtyb3V0ZXJ9IC8+XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXI7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkZXJcIjogXCJoZWFkZXJfaGVhZGVyX18zaFJELVwiLFxuXHRcIm9wdGlvbnNMaXN0XCI6IFwiaGVhZGVyX29wdGlvbnNMaXN0X18zNWhIcVwiLFxuXHRcIm9wdGlvblwiOiBcImhlYWRlcl9vcHRpb25fXzF4N3l5XCIsXG5cdFwiZHJvcGRvd25cIjogXCJoZWFkZXJfZHJvcGRvd25fXzJua29LXCIsXG5cdFwib3B0aW9uRGlzYWJsZWRcIjogXCJoZWFkZXJfb3B0aW9uRGlzYWJsZWRfXzFabzNSXCIsXG5cdFwibGVmdENvbnRhaW5lclwiOiBcImhlYWRlcl9sZWZ0Q29udGFpbmVyX18ycmNmcFwiLFxuXHRcImNvbmZpZ3VyYXRpb25cIjogXCJoZWFkZXJfY29uZmlndXJhdGlvbl9fT3JNZmtcIixcblx0XCJwcm9maWxlXCI6IFwiaGVhZGVyX3Byb2ZpbGVfXzN0MF9JXCIsXG5cdFwiZGVmYXVsdEltZ1wiOiBcImhlYWRlcl9kZWZhdWx0SW1nX18xYWFmRFwiLFxuXHRcInByb2ZpbGVQaWN0dXJlXCI6IFwiaGVhZGVyX3Byb2ZpbGVQaWN0dXJlX18yRXhwclwiLFxuXHRcInRyaWFuZ2xlXCI6IFwiaGVhZGVyX3RyaWFuZ2xlX19PZlZaMVwiXG59O1xuIiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL0hlYWRlcidcblxuZXhwb3J0IHtcbiAgICBIZWFkZXIsXG59IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2lucHV0Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgZmFVcGxvYWQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICBhY2NlcHRlZEZvcm1hdHM/OiBzdHJpbmcsXG4gICAgb25DaGFuZ2U6IEZ1bmN0aW9uXG59XG5cbmNsYXNzIEZpbGUgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gICAgaW5wdXRSZWY6IGFueVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGxhYmVsLCBhY2NlcHRlZEZvcm1hdHMsIG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZpbGVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIDxpbnB1dCByZWY9e3JlZiA9PiB0aGlzLmlucHV0UmVmID0gcmVmfSBvbkNoYW5nZT17ZSA9PiBvbkNoYW5nZShlKX0gY2xhc3NOYW1lPXtzdHlsZXMuZmlsZX0gYWNjZXB0PXthY2NlcHRlZEZvcm1hdHN9IHR5cGU9XCJmaWxlXCIgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHRoaXMuaW5wdXRSZWYuY2xpY2soKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufSA+e2xhYmVsfSA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXBsb2FkfSAvPjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIClcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGUiLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2lucHV0Lm1vZHVsZS5zY3NzJ1xuaW1wb3J0IGJsYWNrIGZyb20gJy4vaW5wdXRCbGFjay5tb2R1bGUuc2NzcydcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IEljb25Qcm9wIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJ1xuXG50eXBlIFByb3BzID0ge1xuICAgIHR5cGU6IHN0cmluZyxcbiAgICBtYXhMZW5ndGg/OiBudW1iZXIsXG4gICAgbWluTGVuZ3RoPzogbnVtYmVyLFxuICAgIHBsYWNlaG9sZGVyPzogc3RyaW5nLFxuICAgIGljb24/OiBJY29uUHJvcCxcbiAgICBiZ0NvbG9yPzogc3RyaW5nLFxuICAgIGNvbG9yPzogc3RyaW5nLFxuICAgIGZvbnRTaXplPzogc3RyaW5nLFxuICAgIHBsYWNlaG9sZGVyQ29sb3I/OiBzdHJpbmcsXG4gICAgb25DaGFuZ2U6IEZ1bmN0aW9uLFxuICAgIG9uS2V5UHJlc3M/OiBGdW5jdGlvbixcbiAgICBlcnJvck1lc3NhZ2U/OiBzdHJpbmcsXG4gICAgZGVmYXVsdFZhbHVlPzogc3RyaW5nIHwgbnVtYmVyICxcbiAgICBwbGFjZWhvbGRlck92ZXJMYWJlbD86IGJvb2xlYW4sXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICAgIGlucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gICAgY2xhc3NOYW1lPzogc3RyaW5nLFxuICAgIHRhYmluZGV4PzogbnVtYmVyLFxuICAgIGlzQmxhY2s/OiBib29sZWFuLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgICBwdWJsaWMgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgbWF4TGVuZ3RoOiAxMDAsXG4gICAgICAgIG1pbkxlbmd0aDogMCxcbiAgICAgICAgcGxhY2Vob2xkZXJPdmVyTGFiZWw6IGZhbHNlLFxuICAgICAgICBvbktleVByZXNzOiAoKSA9PiB7fSxcbiAgICAgICAgaXNCbGFjazogZmFsc2UsXG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICB0eXBlLFxuICAgICAgICAgICAgbWF4TGVuZ3RoLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBpY29uLFxuICAgICAgICAgICAgYmdDb2xvcixcbiAgICAgICAgICAgIGNvbG9yLFxuICAgICAgICAgICAgb25DaGFuZ2UsXG4gICAgICAgICAgICBvbktleVByZXNzLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXJPdmVyTGFiZWwsXG4gICAgICAgICAgICBtaW5MZW5ndGgsXG4gICAgICAgICAgICBwbGFjZWhvbGRlckNvbG9yLFxuICAgICAgICAgICAgZGlzYWJsZWQsXG4gICAgICAgICAgICBpbnB1dFBsYWNlaG9sZGVyLFxuICAgICAgICAgICAgZm9udFNpemUsXG4gICAgICAgICAgICB0YWJpbmRleCxcbiAgICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgICAgIGlzQmxhY2ssXG4gICAgICAgIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgY29uc3Qgc3R5bGVJbnB1dCA9IChiZ0NvbG9yICYmIGNvbG9yICYmIGZvbnRTaXplICkgP1xuICAgICAgICAgICAgeyBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IsIGNvbG9yOiBjb2xvciB9IDogY29sb3IgP1xuICAgICAgICAgICAgeyBjb2xvciA6IGNvbG9yIH0gOiBiZ0NvbG9yID9cbiAgICAgICAgICAgIHsgYmFja2dyb3VuZENvbG9yOiBiZ0NvbG9yIH0gOiB7fSA/XG4gICAgICAgICAgICB7IGZvbnRTaXplOiAgZm9udFNpemUgfSA6IHt9XG5cblxuICAgICAgICBsZXQgcGxhY2Vob2xkZXJJbnB1dCA9IHBsYWNlaG9sZGVyT3ZlckxhYmVsID8gcGxhY2Vob2xkZXIgOiAnJ1xuICAgICAgICBwbGFjZWhvbGRlcklucHV0ID0gaW5wdXRQbGFjZWhvbGRlciA/IGlucHV0UGxhY2Vob2xkZXIgOiBwbGFjZWhvbGRlcklucHV0O1xuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0Q29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICB7IXBsYWNlaG9sZGVyT3ZlckxhYmVsICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXsgcGxhY2Vob2xkZXJDb2xvciA/IHsgY29sb3I6IHBsYWNlaG9sZGVyQ29sb3IgfSA6IHt9fT57cGxhY2Vob2xkZXJ9OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRMaW5lQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAge2ljb24gJiYgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufS8+IH1cblxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aD17bWluTGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2RlZmF1bHRWYWx1ZSB8fCAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXtzdHlsZUlucHV0fVxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVySW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlKGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25LZXlQcmVzcz17KGUpID0+IG9uS2V5UHJlc3MoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pbnB1dH0gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtkaXNhYmxlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgJiYgZXJyb3JNZXNzYWdlLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lcnJvck1lc3NhZ2V9PntlcnJvck1lc3NhZ2V9PC9wPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsImltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0J1xuaW1wb3J0IEZpbGUgZnJvbSAnLi9GaWxlJ1xuXG5leHBvcnQge1xuICAgIElucHV0LFxuICAgIEZpbGUsXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5wdXRDb250YWluZXJcIjogXCJpbnB1dF9pbnB1dENvbnRhaW5lcl9fM3QtWnZcIixcblx0XCJpbnB1dExpbmVDb250YWluZXJcIjogXCJpbnB1dF9pbnB1dExpbmVDb250YWluZXJfXzJ2UjJjXCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dF9pbnB1dF9fM1dObVBcIixcblx0XCJibGFja0lucHV0XCI6IFwiaW5wdXRfYmxhY2tJbnB1dF9fMXdmQlhcIixcblx0XCJlcnJvck1lc3NhZ2VcIjogXCJpbnB1dF9lcnJvck1lc3NhZ2VfXzE2eXhIXCIsXG5cdFwiZmlsZUNvbnRhaW5lclwiOiBcImlucHV0X2ZpbGVDb250YWluZXJfXzJuS0hXXCIsXG5cdFwiZmlsZVwiOiBcImlucHV0X2ZpbGVfXzIwM2FsXCIsXG5cdFwiYnV0dG9uXCI6IFwiaW5wdXRfYnV0dG9uX18xbTNfdFwiLFxuXHRcInRhZ0NvbnRhaW5lclwiOiBcImlucHV0X3RhZ0NvbnRhaW5lcl9fMUZsNnJcIixcblx0XCJ0YWdzXCI6IFwiaW5wdXRfdGFnc19fU2pIcUtcIixcblx0XCJ0YWdcIjogXCJpbnB1dF90YWdfXzFlckg3XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vbW9kYWwubW9kdWxlLnNjc3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgc2hvd01vZGFsOiBib29sZWFuLFxuICAgIGNsb3NlTW9kYWw/OiBGdW5jdGlvbixcbiAgICBjb250YWluZXJXaWR0aD86IHN0cmluZyxcbiAgICBub1BhZGRpbmc/OiBib29sZWFuLFxuICAgIGlzSW1hZ2VNb2RhbD86IGJvb2xlYW4sXG4gICAgb25LZXlEb3duPzogRnVuY3Rpb24sXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwgZXh0ZW5kcyBQdXJlQ29tcG9uZW50PFByb3BzPiB7XG4gICAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICAgICAgaXNJbWFnZU1vZGFsOiBmYWxzZSxcbiAgICB9XG4gICAgaGFuZGxlRXNjYXBlS2V5ID0gKGV2ZW50OiBLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzSW1hZ2VNb2RhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKChldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXlDb2RlID09PSAxNyB8fCBldmVudC5rZXlDb2RlID09PSA4OCB8fCBldmVudC5rZXlDb2RlID09PSAxOCkgJiYgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMjcgJiYgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaGFuZGxlQ2xvc2VNb2RhbCA9IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudD4pID0+IHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY2xvc2VNb2RhbCkge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgaGFuZGxlS2V5TW9kYWwgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmlzSW1hZ2VNb2RhbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKCBlLmtleUNvZGUgID09PSAxNyB8fCBlLmtleUNvZGUgPT09IDE3KSAge1xuICAgICAgICAgICAgICAgIC8vIEVzY2FwZSBrZXkgcHJlc3NlZFxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTcpIHtcbiAgICAgICAgICAgICAgICAvLyBFc2NhcGUga2V5IHByZXNzZWRcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuc2hvd01vZGFsKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlRXNjYXBlS2V5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5oYW5kbGVFc2NhcGVLZXkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IHNob3dNb2RhbCwgY29udGFpbmVyV2lkdGgsIG5vUGFkZGluZywgb25LZXlEb3duLCBpc0ltYWdlTW9kYWwgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgbGV0IGNvbnRhaW5lclN0eWxlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge31cblxuICAgICAgICBpZiAoIXNob3dNb2RhbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGFpbmVyV2lkdGgpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlWyd3aWR0aCddID0gY29udGFpbmVyV2lkdGhcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChub1BhZGRpbmcpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lclN0eWxlWydwYWRkaW5nJ10gPSAnMTBweCdcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJhY2tncm91bmR9IG9uS2V5RG93bj17KGUpID0+IHRoaXMuaGFuZGxlS2V5TW9kYWwoZSl9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xvc2VNb2RhbH0gLz5cbiAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtjb250YWluZXJTdHlsZX0gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibW9kYWxDb250YWluZXJcIjogXCJtb2RhbF9tb2RhbENvbnRhaW5lcl9fYWRqSFZcIixcblx0XCJiYWNrZ3JvdW5kXCI6IFwibW9kYWxfYmFja2dyb3VuZF9fMmN4bWxcIixcblx0XCJtb2RhbFwiOiBcIm1vZGFsX21vZGFsX18yYzRjR1wiLFxuXHRcImRpYWxvZ01vZGFsQ29udGFpbmVyXCI6IFwibW9kYWxfZGlhbG9nTW9kYWxDb250YWluZXJfXzFfd29XXCIsXG5cdFwiZGlhbG9nTW9kYWxCZ1wiOiBcIm1vZGFsX2RpYWxvZ01vZGFsQmdfXzJjMHY5XCIsXG5cdFwiZGlhbG9nTW9kYWxcIjogXCJtb2RhbF9kaWFsb2dNb2RhbF9fMU1Cek1cIixcblx0XCJidG5Db250YWluZXJcIjogXCJtb2RhbF9idG5Db250YWluZXJfXzJfRXp0XCIsXG5cdFwiYnRuQ2xvc2VcIjogXCJtb2RhbF9idG5DbG9zZV9feXcxN0dcIixcblx0XCJidG5BY2NlcHRcIjogXCJtb2RhbF9idG5BY2NlcHRfXzNxTWk1XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzIGZyb20gJy4vb3B0aW9uTGlzdC5tb2R1bGUuc2NzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgICBvcHRpb25zOiBBcnJheTx7IHZhbHVlOiBhbnksIGxhYmVsOiBzdHJpbmcgfT5cbiAgICBvcHRpb25TZWxlY3RlZDogYW55XG4gICAgb25PcHRpb25TZWxlY3RlZDogRnVuY3Rpb25cbn1cblxuY29uc3QgT3B0aW9uTGlzdCA9IChwcm9wczogUHJvcHMpID0+IHtcblxuICAgIGNvbnN0IHsgb3B0aW9ucywgb3B0aW9uU2VsZWN0ZWQsIG9uT3B0aW9uU2VsZWN0ZWQgfSA9IHByb3BzXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtzLnRhYkJhcn0+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5tYXAoKGVsZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YG9wdGlvbi1saXN0LSR7ZWxlLnZhbHVlfWB9IG9uQ2xpY2s9eygpID0+IG9uT3B0aW9uU2VsZWN0ZWQoZWxlLnZhbHVlKX0gY2xhc3NOYW1lPXtvcHRpb25TZWxlY3RlZCA9PT0gZWxlLnZhbHVlID8gcy5zZWxlY3RlZCA6ICcnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIDwvdWw+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBPcHRpb25MaXN0IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGFiQmFyXCI6IFwib3B0aW9uTGlzdF90YWJCYXJfXzNxWkhpXCIsXG5cdFwic2VsZWN0ZWRcIjogXCJvcHRpb25MaXN0X3NlbGVjdGVkX19peEMydVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgcyBmcm9tICcuL3BhZ2VUaXRsZS5tb2R1bGUuc2NzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgICB0aXRsZTogc3RyaW5nXG59XG5cbmNvbnN0IFBhZ2VUaXRsZSA9ICh7dGl0bGV9OiBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT17cy50aXRsZX0+e3RpdGxlfTwvaDE+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlVGl0bGUiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcInBhZ2VUaXRsZV90aXRsZV9fM3czaXdcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiwgU2Vjb25kYXJ5QnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9ucyc7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL2lucHV0JztcbmltcG9ydCB7IFRhYmxlIH0gZnJvbSAnLi4vdGFibGUnO1xuaW1wb3J0IFNlbGVjdFNlYXJjaCBmcm9tICcuLi9zZWxlY3RTZWFyY2gvU2VsZWN0U2VhcmNoJztcblxuaW1wb3J0IGFwaSBmcm9tICcuLi8uLi91dGlscy9hcGknXG5pbXBvcnQgeyBnZXRNaXNzaW9uc0NhdGFsb2dCeU1pc3Npb24gfSBmcm9tICcuLi8uLi91dGlscy9jYXRhbG9ncyc7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlc3Npb24sIGdldEhlYWRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24tbWFuYWdlbWVudCdcblxuaW1wb3J0IHMgZnJvbSAnLi9zY2FubmVyc1RhYi5tb2R1bGUuc2NzcydcbmltcG9ydCB7IENoZWNrYm94IH0gZnJvbSAnLi4vY2hlY2tib3gnO1xuXG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuLi9kYXRlcGlja2VyL2RhdGVwaWNrZXInXG5pbXBvcnQgeyBnZXRJMThuTGFiZWwsIHRyYW5zbGF0ZVRhYmxlSGVhZGVyIH0gZnJvbSAnLi4vLi4vaTE4bic7XG5cbnR5cGUgU2VhcmNoU2Nhbm5lciA9IHtcbiAgICBmcm9tOiBzdHJpbmcsXG4gICAgdG86IHN0cmluZyxcbiAgICB0ZXh0U2VhcmNoOiBzdHJpbmcsXG4gICAgcGVyUGFnZTogc3RyaW5nLFxuICAgIGxvY2FsZT86IHN0cmluZyxcbn1cblxudHlwZSBzZWFyY2hTY2FubmVyRGF0YSA9IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIGVtcGxveWVlX251bWJlcjogbnVtYmVyLFxuICAgIGZ1bGxuYW1lOiBzdHJpbmcsXG4gICAgdG90YWxTY2FubmVyczogbnVtYmVyLFxuICAgIG1pc3Npb25zOiBNaXNzaW9uLFxuICAgIHRvdGFsVmFsaWQ6IG51bWJlcixcbiAgICBlZmZpY2llbmN5OiBudW1iZXIsXG59XG5cbnR5cGUgTWlzc2lvbiA9IHtcbiAgICBpZDogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG59XG5cbmNvbnN0IGVtcHR5U2VhcmNoU2Nhbm5lciA9IHtcbiAgICBmcm9tOiAnJyxcbiAgICB0bzogJycsXG4gICAgdGV4dFNlYXJjaDogJycsXG4gICAgcGVyUGFnZTogJycsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjYW5uZXJzVGFiIGV4dGVuZHMgQ29tcG9uZW50PGFueSwgYW55PiB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIGNvdW50OiAwLFxuICAgICAgICBjdXJyZW50UGFnZTogMCxcbiAgICAgICAgdG90YWw6IDAsXG4gICAgICAgIHRvdGFsUGFnZTogMCxcbiAgICAgICAgcmVnaW9uTGlzdDogW10sXG4gICAgICAgIG1pc3Npb25MaXN0OiBbXSxcbiAgICAgICAgbWlzc2lvbjogbnVsbCxcbiAgICAgICAgc2VhcmNoU2Nhbm5lcjogZW1wdHlTZWFyY2hTY2FubmVyLFxuICAgICAgICBzZWFyY2hTY2FubmVyczogW10sXG4gICAgICAgIHN0YXJ0RGF0ZUVycm9yTXNnOiAnJyxcbiAgICAgICAgaW5wdXRWYWx1ZUZpbHRlcjogJycsXG4gICAgICAgIG9yZGVyOiAnZGVzYycsXG4gICAgICAgIGhlYWRlcjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUG9zaWNpw7NuJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdyYW5raW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdOby4gZGUgZW1wbGVhZG8nLFxuICAgICAgICAgICAgICAgIGtleTogJ2VtcGxveWVlX251bWJlcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTm9tYnJlJyxcbiAgICAgICAgICAgICAgICBrZXk6ICduYW1lJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQb3JjZW50YWplJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdlZmZpY2llbmN5JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDYXB0dXJhcyB2YWxpZGFkYXMnLFxuICAgICAgICAgICAgICAgIGtleTogJ3ZhbGlkYXRlZF9jYXB0dXJlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHVudG9zJyxcbiAgICAgICAgICAgICAgICBrZXk6ICdwb2ludHMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXVxuICAgIH1cblxuICAgIHNlYXJjaFRpbWVvdXQgPSBudWxsO1xuXG4gICAgYXN5bmMgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhbGlkYXRlU2Vzc2lvbigpXG4gICAgICAgIHRoaXMuaGFuZGxlSW5wdXRDaGFuZ2UoJycpXG4gICAgICAgIHRoaXMuc2VhcmNoKDEpXG4gICAgfVxuXG4gICAgc2VhcmNoU2Nhbm5lckhhbmRsZXIgPSAoZTogU3ludGhldGljRXZlbnQpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoU2Nhbm5lciA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUuc2VhcmNoU2Nhbm5lcixcbiAgICAgICAgICAgIHRleHRTZWFyY2g6IChlLnRhcmdldCBhcyBIVE1MSW5wdXRFbGVtZW50KS52YWx1ZSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hTY2FubmVyIH0sICgpID0+IHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnNlYXJjaFRpbWVvdXQpO1xuXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaCgxKVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICB2YWxpZGF0ZUVuZERhdGUgPSAoKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0ZSh0aGlzLnN0YXRlLnNlYXJjaFNjYW5uZXIpKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc3RhcnREYXRlRXJyb3JNc2c6ICcnIH0sICgpID0+IHRoaXMuc2VhcmNoKDEpKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbWlzc2lvbkhhbmRsZXIgPSAoZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IG1pc3Npb25JZCA9IGUudmFsdWVcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IG1pc3Npb246IG1pc3Npb25JZCB9LCAoKSA9PiB0aGlzLnNlYXJjaCgxKSlcbiAgICB9XG5cbiAgICBoYW5kbGVJbnB1dENoYW5nZSA9IGFzeW5jIChpbnB1dFZhbHVlOiBzdHJpbmcpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldE1pc3Npb25zQ2F0YWxvZ0J5TWlzc2lvbihpbnB1dFZhbHVlKVxuICAgIH1cblxuICAgIHNlYXJjaCA9IGFzeW5jIChwYWdlOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3Qgc2VhcmNoU2Nhbm5lciA9IHRoaXMuc3RhdGUuc2VhcmNoU2Nhbm5lclxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJzID0ge1xuICAgICAgICAgICAgICAgIC4uLmdldEhlYWRlcigpLFxuICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZvcm1fZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKCdyZWdpb24nLCAnJylcbiAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoJ21pc3Npb24nLCB0aGlzLnN0YXRlLm1pc3Npb24gIT09IG51bGwgPyB0aGlzLnN0YXRlLm1pc3Npb24gOiAnJylcbiAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoJ3RvJywgdGhpcy5mb3JtYXREYXRlKHNlYXJjaFNjYW5uZXIudG8pKVxuICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZCgnZnJvbScsIHRoaXMuZm9ybWF0RGF0ZShzZWFyY2hTY2FubmVyLmZyb20pKVxuICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZCgndGV4dFNlYXJjaCcsIHNlYXJjaFNjYW5uZXIudGV4dFNlYXJjaClcbiAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoJ3BlclBhZ2UnLCBzZWFyY2hTY2FubmVyLnBlclBhZ2UpXG4gICAgICAgICAgICBmb3JtX2RhdGEuYXBwZW5kKCdzb3J0JywgdGhpcy5zdGF0ZS5vcmRlcilcblxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChcbiAgICAgICAgICAgICAgICBgYXBpL3JlcG9ydHMvcmFua2luZy1lZmZpY2llbmN5P3BhZ2U9JHtwYWdlfWAsXG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLFxuICAgICAgICAgICAgICAgIHsgaGVhZGVycyB9LFxuICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5kYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IG9yZGVyIH0gPSB0aGlzLnN0YXRlXG4gICAgICAgICAgICAgICAgY29uc3QgcGFnaW5hdGlvbiA9IHJlc3BvbnNlLmRhdGEucGFnaW5hdGlvblxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhcnQgPSBvcmRlciA9PT0gJ2Rlc2MnID9cbiAgICAgICAgICAgICAgICAgICAgKChwYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSAtIDEpICogcGFnaW5hdGlvbi5wZXJfcGFnZSkgKyAxIDpcbiAgICAgICAgICAgICAgICAgICAgKHBhZ2luYXRpb24udG90YWwgLSAoKHBhZ2luYXRpb24uY3VycmVudF9wYWdlIC0gMSkgKiBwYWdpbmF0aW9uLnBlcl9wYWdlKSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IHNlYXJjaFNjYW5uZXJzID0gcmVzcG9uc2UuZGF0YS5kYXRhLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKHNlYXJjaFNjYW5uZXI6IHNlYXJjaFNjYW5uZXJEYXRhLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zZWFyY2hTY2FubmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhbmtpbmc6IG9yZGVyID09PSAnZGVzYycgPyBzdGFydCArIGkgOiBzdGFydCAtIGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWZmaWNpZW5jeTogYCR7KE1hdGgucm91bmQoc2VhcmNoU2Nhbm5lci5lZmZpY2llbmN5ICogMTAwKSkgLyAxMDB9JWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzZWFyY2hTY2FubmVycyxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHBhZ2luYXRpb24udG90YWwsXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IHBhZ2luYXRpb24uY291bnQsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUGFnZTogcGFnaW5hdGlvbi50b3RhbF9wYWdlcyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNwb25zZS5kYXRhLmRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlYXJjaFNjYW5uZXJzOiBbXSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhbGlkYXRlRGF0ZSA9IChzZWFyY2hTY2FubmVyOiBTZWFyY2hTY2FubmVyKTogYm9vbGVhbiA9PiB7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gdHJ1ZVxuICAgICAgICBsZXQgc3RhcnREYXRlRXJyb3JNc2cgPSAnJ1xuXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gbmV3IERhdGUoc2VhcmNoU2Nhbm5lci5mcm9tKS5nZXRUaW1lKCk7XG4gICAgICAgIGNvbnN0IGVuZCA9IG5ldyBEYXRlKHNlYXJjaFNjYW5uZXIudG8pLmdldFRpbWUoKTtcblxuICAgICAgICBpZiAoc3RhcnQgLSBlbmQgPiAwKSB7XG4gICAgICAgICAgICBzdGFydERhdGVFcnJvck1zZyA9ICdMYSBmZWNoYSBkZSBpbmljaW8gbm8gZXMgdsOhbGlkYSdcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzdGFydERhdGVFcnJvck1zZy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpc1ZhbGlkID0gZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydERhdGVFcnJvck1zZyB9KVxuXG4gICAgICAgIHJldHVybiBpc1ZhbGlkXG4gICAgfVxuXG4gICAgc2V0U29ydERpcmVjdGlvbiA9IChlOiBTeW50aGV0aWNFdmVudCkgPT4ge1xuICAgICAgICBjb25zdCBjaGVja2VkID0gKGUudGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWRcbiAgICAgICAgY29uc3QgbmV4dCA9IGNoZWNrZWQgPyAnYXNjJyA6ICdkZXNjJ1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcmRlcjogbmV4dCB9LCAoKSA9PiB0aGlzLnNlYXJjaCgxKSlcbiAgICB9XG5cbiAgICBjbGVhckRhdGVTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgc2VhcmNoU2Nhbm5lcjoge1xuICAgICAgICAgICAgICAgIC4uLmVtcHR5U2VhcmNoU2Nhbm5lcixcbiAgICAgICAgICAgICAgICBmcm9tOiAnJyxcbiAgICAgICAgICAgICAgICB0bzogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAoKSA9PiB0aGlzLnNlYXJjaCgxKSlcbiAgICB9XG5cbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICAgICAgaWYgKGRhdGUpIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZShkYXRlKTtcblxuICAgICAgICAgICAgbGV0IG1vbnRoID0gJycgKyAoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgICAgICBsZXQgZGF5ID0gJycgKyBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICBpZiAobW9udGgubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIG1vbnRoID0gJzAnICsgbW9udGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXkubGVuZ3RoIDwgMikge1xuICAgICAgICAgICAgICAgIGRheSA9ICcwJyArIGRheTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJydcbiAgICB9XG5cbiAgICBzdGFydERhdGVIYW5kbGVyID0gKGRhdGU6IGFueSkgPT4ge1xuICAgICAgICBsZXQge3NlYXJjaFNjYW5uZXJ9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICBzZWFyY2hTY2FubmVyID0ge1xuICAgICAgICAgICAgLi4uc2VhcmNoU2Nhbm5lcixcbiAgICAgICAgICAgIGZyb206IGRhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0ZShzZWFyY2hTY2FubmVyKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgc2VhcmNoU2Nhbm5lcixcbiAgICAgICAgICAgICAgICBzdGFydERhdGVFcnJvck1zZzogJycsXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHNlYXJjaFNjYW5uZXIudG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW5kRGF0ZUhhbmRsZXIgPSAoZGF0ZTogYW55KSA9PiB7XG4gICAgICAgIGxldCB7c2VhcmNoU2Nhbm5lcn0gPSB0aGlzLnN0YXRlO1xuXG4gICAgICAgIHNlYXJjaFNjYW5uZXIgPSB7XG4gICAgICAgICAgICAuLi5zZWFyY2hTY2FubmVyLFxuICAgICAgICAgICAgdG86IGRhdGUsXG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZURhdGUoc2VhcmNoU2Nhbm5lcikpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIHNlYXJjaFNjYW5uZXIsXG4gICAgICAgICAgICAgICAgc3RhcnREYXRlRXJyb3JNc2c6ICcnLFxuICAgICAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWFyY2hTY2FubmVyLmZyb20pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2goMSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgb3JkZXIsXG4gICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICAgIHRvdGFsUGFnZSxcbiAgICAgICAgICAgIHNlYXJjaFNjYW5uZXIsXG4gICAgICAgICAgICBzZWFyY2hTY2FubmVycyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZUVycm9yTXNnLFxuICAgICAgICB9ID0gdGhpcy5zdGF0ZVxuXG4gICAgICAgIGNvbnN0IHsgbG9jYWxlIH0gPSB0aGlzLnByb3BzXG5cbiAgICAgICAgY29uc3QgaGVhZGVyID0gdHJhbnNsYXRlVGFibGVIZWFkZXIobG9jYWxlLCB0aGlzLnN0YXRlLmhlYWRlciwgJ3NjYW5uZXJzVGFiLnRhYmxlLmhlYWRlcicpXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgd2lkdGg3MFwiIHN0eWxlPXt7IGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERhdGVwaWNrZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRJMThuTGFiZWwobG9jYWxlLCAnc2Nhbm5lcnNUYWIuc3RhcnREYXRlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VhcmNoU2Nhbm5lci5mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMuc3RhcnREYXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdkZC9tbS95eXl5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD0nZGQvTU0veXl5eSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTXNnPXtzdGFydERhdGVFcnJvck1zZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgzMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2dldEkxOG5MYWJlbChsb2NhbGUsICdzY2FubmVyc1RhYi5lbmREYXRlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VhcmNoU2Nhbm5lci50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLmVuZERhdGVIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2RkL21tL3l5eXknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PSdkZC9NTS95eXl5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aDMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWNvbmRhcnlCdXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRJMThuTGFiZWwobG9jYWxlLCAnc2Nhbm5lcnNUYWIub3B0aW9ucy5jbGVhckRhdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xlYXJEYXRlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxici8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aDQ1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtzZWFyY2hTY2FubmVyLnRleHRTZWFyY2h9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiVGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlck92ZXJMYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuc2VhcmNoU2Nhbm5lckhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ3NjYW5uZXJzVGFiLmlucHV0LnNlYXJjaC5wbGFjZWhvbGRlcicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aDIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RTZWFyY2hcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiTWlzacOzblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25GdW5jdGlvbj17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1pc3Npb25IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2dldEkxOG5MYWJlbChsb2NhbGUsICdzY2FubmVyc1RhYi5pbnB1dC5taXNzaW9uLnBsYWNlaG9sZGVyJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoMTVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoMjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLm1lZGFsTGlua30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3NpdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltZy8xcGxhY2Uuc3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJQb3NpY2lvbmVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlBvc2ljaW9uZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnRhYmxlQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudD17Y291bnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5RGF0YT17c2VhcmNoU2Nhbm5lcnN9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI9e2hlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTmV4dFBhZ2U9eygpID0+IHRoaXMuc2VhcmNoKGN1cnJlbnRQYWdlICsgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvblByZXZQYWdlPXsoKSA9PiB0aGlzLnNlYXJjaChjdXJyZW50UGFnZSAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw9e3RvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQYWdlPXt0b3RhbFBhZ2V9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0YWJsZUNvbnRhaW5lclwiOiBcInNjYW5uZXJzVGFiX3RhYmxlQ29udGFpbmVyX18zQmlFc1wiLFxuXHRcIm1lZGFsTGlua1wiOiBcInNjYW5uZXJzVGFiX21lZGFsTGlua19fM1pRSXVcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEFzeW5jU2VsZWN0IGZyb20gJ3JlYWN0LXNlbGVjdC9hc3luYyc7XG5pbXBvcnQgeyBPcHRpb25zVHlwZSwgT3B0aW9uVHlwZUJhc2UgfSBmcm9tICdyZWFjdC1zZWxlY3QnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vc2VsZWN0U2VhcmNoLm1vZHVsZS5zY3NzJ1xuXG50eXBlIExvYWRPcHRpb25zRnVuY3Rpb24gPSAoXG4gICAgaW5wdXRWYWx1ZTogc3RyaW5nLFxuICAgIGNhbGxiYWNrOiAob3B0aW9uczogT3B0aW9uc1R5cGU8T3B0aW9uVHlwZUJhc2U+KSA9PiB2b2lkLFxuKSA9PiB2b2lkIHwgUHJvbWlzZTxhbnk+O1xuXG50eXBlIFByb3BzID0ge1xuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgb3B0aW9uRnVuY3Rpb24/OiBMb2FkT3B0aW9uc0Z1bmN0aW9uLFxuICAgIGRlZmF1bHRPcHRpb24/OiBhbnksXG4gICAgYmdDb2xvcj86IHN0cmluZyxcbiAgICBwbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgICBjb2xvcj86IHN0cmluZyxcbiAgICBvbkNoYW5nZTogKGU6IFN5bnRoZXRpY0V2ZW50KSA9PiBhbnksXG4gICAgbm9MYWJlbD86IGJvb2xlYW4sXG4gICAgcGxhY2Vob2xkZXJDb2xvcj86IHN0cmluZ1xuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbiAgICBpc0Rpc2FibGVkPzogYm9vbGVhbixcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VsZWN0U2VhcmNoKHByb3BzOiBQcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIG9uQ2hhbmdlLFxuICAgICAgICBub0xhYmVsLFxuICAgICAgICBwbGFjZWhvbGRlckNvbG9yID0gJ3Vuc2V0JyxcbiAgICAgICAgcGxhY2Vob2xkZXIsXG4gICAgICAgIG9wdGlvbkZ1bmN0aW9uLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHshbm9MYWJlbCAmJiAoXG4gICAgICAgICAgICAgICAgPGxhYmVsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogcGxhY2Vob2xkZXJDb2xvcn19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9OlxuICAgICAgICAgICAgICAgIDwvbGFiZWw+KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPEFzeW5jU2VsZWN0XG4gICAgICAgICAgICAgICAgY2FjaGVPcHRpb25zXG4gICAgICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnNcbiAgICAgICAgICAgICAgICBsb2FkT3B0aW9ucz17b3B0aW9uRnVuY3Rpb259XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICBhdXRvRm9jdXM9e2ZhbHNlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic2VsZWN0XCI6IFwic2VsZWN0U2VhcmNoX3NlbGVjdF9fZVA0TGFcIixcblx0XCJlcnJvck1lc3NhZ2VcIjogXCJzZWxlY3RTZWFyY2hfZXJyb3JNZXNzYWdlX18yVUVjblwiLFxuXHRcImxhYmVsXCI6IFwic2VsZWN0U2VhcmNoX2xhYmVsX18zbXYwY1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQgeyBnZXRMb2NhbGUgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLW1hbmFnZW1lbnQnXG5pbXBvcnQgeyBnZXRJMThuTGFiZWwgfSBmcm9tICcuLi8uLi9pMThuJ1xuXG5pbXBvcnQge1xuICAgIGZhQ2FyZXRMZWZ0LFxuICAgIGZhQ2FyZXRSaWdodCxcbiAgICBmYVNvcnREb3duLFxuICAgIGZhU29ydFVwLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cbmltcG9ydCB7IEhlYWRlciwgQWN0aW9uLCBBY3Rpb25GdW5jdGlvbiwgQ29udGVudFJvdyB9IGZyb20gJy4uLy4uL0BUeXBlcy90YWJsZSc7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YWJsZS5tb2R1bGUuc2NzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgICBib2R5RGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfVtdLFxuICAgIGhlYWRlcjogSGVhZGVyW10sXG4gICAgYWN0aW9ucz86IGFueSxcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgIGNvdW50OiBudW1iZXIsXG4gICAgdG90YWw6IG51bWJlcixcbiAgICB0b3RhbFBhZ2U6IG51bWJlcixcbiAgICBvbk5leHRQYWdlOiBGdW5jdGlvbixcbiAgICBvblByZXZQYWdlOiBGdW5jdGlvbixcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGFibGUocHJvcHM6IFByb3BzKSB7XG4gICAgY29uc3Qge1xuICAgICAgICBib2R5RGF0YSxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjdXJyZW50UGFnZSxcbiAgICAgICAgdG90YWxQYWdlLFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBvbk5leHRQYWdlLFxuICAgICAgICBvblByZXZQYWdlLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgbG9jYWxlID0gZ2V0TG9jYWxlKClcblxuICAgIGNvbnN0IHRvdGFsTGVuZ3RoID0gYWN0aW9ucyAhPSBudWxsID8gaGVhZGVyLmxlbmd0aCArIDEgOiBoZWFkZXIubGVuZ3RoXG5cbiAgICBjb25zdCB3aWR0aCA9IGAkezEwMCAvIHRvdGFsTGVuZ3RofSVgXG5cbiAgICBjb25zdCB0YWJsZVN0eWxlID0ge1xuICAgICAgICB3aWR0aDogaGVhZGVyLmxlbmd0aCA+IDggPyBgJHtoZWFkZXIubGVuZ3RoICogMTB9ZW1gIDogYDEwMCVgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlQWN0aW9uQnV0dG9ucyhkYXRhKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihhY3Rpb24sIGluZGV4KSB7XG4gICAgICAgICAgICBsZXQgaXNCbG9ja2VkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmJsb2NrZWRfdXAgJiYgYWN0aW9uLmlzQmxvY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGlzQmxvY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtpc0Jsb2NrZWQgPyAoKSA9PiB7fSA6ICgpID0+IGFjdGlvbi5hY3Rpb24oZGF0YSl9XG4gICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgIGljb249e2FjdGlvbi5pY29ufVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmJsb2NrZWRfdXAgJiYgIWFjdGlvbi5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyNkM2QzZDMnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiAoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ibG9ja2VkX3VwICYmICFhY3Rpb24uZW5hYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdub3QtYWxsb3dlZCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3BvaW50ZXInO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAnNXB4J1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFibGVDb21wbGV4fT5cbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17dGFibGVTdHlsZX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyLm1hcCgoZWxlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0aCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPntlbGUubGFiZWx9PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2VsZS5zb3J0ICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZWxlLm9uU29ydChlbGUub3JkZXIgPT09ICdkZXNjJz8gJ2FzYycgOiAnZGVzYycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNvcnRJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2VsZS5vcmRlciA9PT0gJ2Rlc2MnID8gZmFTb3J0VXAgOiBmYVNvcnREb3duIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zICYmIGFjdGlvbnMubGVuZ3RoICYmIDx0aCBzdHlsZT17eyB3aWR0aCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICd0YWJsZS5hY3Rpb25zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7IGJvZHlEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ciBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubWFwKChlbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2luZGV4fSBzdHlsZT17eyB3aWR0aCB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkYXRhW2VsZS5rZXldICE9ICdudWxsJyA/IChlbGUua2V5ICA9PT0gJ2Rlc2NyaXB0aW9uJyA/ICggZGF0YVtlbGUua2V5XS5sZW5ndGggPiAyMCA/ICBkYXRhW2VsZS5rZXldLnN1YnN0cmluZygwLCAxNSkgKyBcIi4uLlwiIDogZGF0YVtlbGUua2V5XSkgOiBkYXRhW2VsZS5rZXldKSAgOiAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsodHlwZW9mIGFjdGlvbnMgPT09ICdmdW5jdGlvbicpID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMoZGF0YSBhcyBDb250ZW50Um93KS5tYXAoY3JlYXRlQWN0aW9uQnV0dG9ucyhkYXRhKSkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuaXNBcnJheShhY3Rpb25zKSAmJiBhY3Rpb25zLmxlbmd0aCA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zLm1hcChjcmVhdGVBY3Rpb25CdXR0b25zKGRhdGEpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpIH1cbiAgICAgICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgICAgPC90YWJsZT5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFBhZ2UgPiAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IG9uUHJldlBhZ2UoKX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FyZXRMZWZ0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhcmV0TGVmdH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHt0b3RhbFBhZ2UgPiBjdXJyZW50UGFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBvbk5leHRQYWdlKCl9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhcmV0UmlnaHR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FyZXRSaWdodH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnXG5pbXBvcnQge1xuICAgIGZhQ2FyZXRMZWZ0LFxuICAgIGZhQ2FyZXRSaWdodCxcbiAgICBmYUV5ZSxcbiAgICBmYUV5ZVNsYXNoLFxuICAgIGZhUGVyY2VudCxcbiAgICBmYVRpbWVzQ2lyY2xlLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgeyB2YWxpZGF0ZUlzQW5hbHlzdCB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24tbWFuYWdlbWVudCc7XG5pbXBvcnQgeyBwaG90b1VybCB9IGZyb20gJy4uLy4uL3V0aWxzL3Bob3RvX3VybCdcbmltcG9ydCBmb3JtYXREYXRlIGZyb20gJy4uLy4uL3V0aWxzL2Zvcm1hdC1kYXRlJ1xuaW1wb3J0IHsgSWNvblByb3AgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vbW9kYWwvTW9kYWwnXG5pbXBvcnQgQ2hlY2tib3ggZnJvbSBcIi4uL2NoZWNrYm94L0NoZWNrYm94XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi90YWJsZS5tb2R1bGUuc2NzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgICBjdXJyZW50UGFnZTogbnVtYmVyLFxuICAgIGNvdW50OiBudW1iZXIsXG4gICAgdG90YWw6IG51bWJlcixcbiAgICB0b3RhbFBhZ2U6IG51bWJlcixcbiAgICBjaGFuZ2VQYWdlTmV4dDogRnVuY3Rpb24sXG4gICAgY2hhbmdlUGFnZVByZXY6IEZ1bmN0aW9uLFxuICAgIGhlYWRlcjogeyB0aXRsZTogc3RyaW5nLCBpc0hpZGVkYWJsZTogYm9vbGVhbiwgbmFtZTogc3RyaW5nLCB0eXBlOiBzdHJpbmcsIGhpZGU/OiBib29sZWFuIH1bXSxcbiAgICBjb250ZW50OiB7IFtrZXk6IHN0cmluZ106IGFueSB9W10sXG4gICAgYWN0aW9uczogeyBhY3Rpb246IEZ1bmN0aW9uLCBjb2xvcjogc3RyaW5nLCBpY29uOiBJY29uUHJvcH1bXSxcbiAgICBvbkNsaWNrRGV0YWlsczogRnVuY3Rpb24sXG4gICAgb25DaGVja2VkPzogRnVuY3Rpb25cbiAgICBjaGVja2JveFN0eWxlcz86IHN0cmluZyxcbiAgICB0ZXh0Tm90RGF0YT86IHN0cmluZyxcbiAgICByZXBvcnREZXRhaWxzPzogYm9vbGVhbixcbiAgICBjdXN0b21DbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmNvbnN0IFRhYmxlQ29tcGxleCA9IChwcm9wczogUHJvcHMpID0+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgICB0b3RhbFBhZ2UsXG4gICAgICAgIGNoYW5nZVBhZ2VOZXh0LFxuICAgICAgICBjaGFuZ2VQYWdlUHJldixcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBjb250ZW50LFxuICAgICAgICBhY3Rpb25zLFxuICAgICAgICBvbkNsaWNrRGV0YWlscyxcbiAgICAgICAgb25DaGVja2VkID0gKCkgPT4ge30sXG4gICAgICAgIGNoZWNrYm94U3R5bGVzLFxuICAgICAgICB0ZXh0Tm90RGF0YSxcbiAgICAgICAgcmVwb3J0RGV0YWlscyxcbiAgICAgICAgY3VzdG9tQ2xhc3NOYW1lLFxuICAgIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgW2hlYWRlckxpc3QsIHNldEhlYWRlckxpc3RdID0gdXNlU3RhdGUoaGVhZGVyKVxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldFNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgICBjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZSgnJylcbiAgICBjb25zdCBbaXNBbmFseXN0LCBzZXRJc0FuYWx5c3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SXNBbmFseXN0KHZhbGlkYXRlSXNBbmFseXN0KCkpO1xuICAgIH0sIFtdKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgc2V0SGVhZGVyTGlzdChoZWFkZXJMaXN0Lm1hcChoID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGUgPSBoLmhpZGUgfHwgZmFsc2VcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uaCxcbiAgICAgICAgICAgICAgICBoaWRlLFxuICAgICAgICAgICAgfVxuICAgICAgICB9KSlcbiAgICB9LCBbaGVhZGVyXSlcblxuICAgIGNvbnN0IHRhYmxlU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBoZWFkZXIubGVuZ3RoID4gNiA/IGAke2hlYWRlci5sZW5ndGggKiAxMH1lbWAgOiBgMTAwJWBcbiAgICB9XG5cbiAgICBjb25zdCBvcGVuTW9kYWwgPSAoaW1nVXJsOiBzdHJpbmcpID0+IHtcbiAgICAgICAgc2V0U2VsZWN0ZWRJbWFnZShpbWdVcmwpXG4gICAgICAgIHNldFNob3dNb2RhbCh0cnVlKVxuICAgIH1cblxuICAgIGNvbnN0IGdldEZpZWxkID0gKGZpZWxkVHlwZTogc3RyaW5nLCBmaWVsZE5hbWU6IHN0cmluZywgcm93OiBhbnksIGlzSGlkZGVuOiBib29sZWFuIHwgdW5kZWZpbmVkKSA9PiB7XG5cbiAgICAgICAgaWYgKGlzSGlkZGVuKSB7XG4gICAgICAgICAgICByZXR1cm4gJyAnXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB2YWx1ZSA9IHJvd1tmaWVsZE5hbWVdXG5cbiAgICAgICAgc3dpdGNoIChmaWVsZFR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3RleHQnOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/IHZhbHVlIDogbnVsbFxuXG4gICAgICAgICAgICBjYXNlICdpbWcnOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA/XG4gICAgICAgICAgICAgICAgICAgIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9wZW5Nb2RhbChgJHtwaG90b1VybH0vJHt2YWx1ZX1gKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake3Bob3RvVXJsfS8ke3ZhbHVlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGxcbiAgICAgICAgICAgIGNhc2UgJ21vbmV5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgJiYgIWlzTmFOKHZhbHVlKSA/IGBcXCQgJHtwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpfWAgOiAnLSdcbiAgICAgICAgICAgIGNhc2UgJ2RhdGUnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXREYXRlKHZhbHVlKTtcbiAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIGAke3ZhbHVlfWAuc3BsaXQoJy4nKS5sZW5ndGggPiAxID9cbiAgICAgICAgICAgICAgICAgICAgYCR7cGFyc2VGbG9hdCh2YWx1ZSkudG9GaXhlZCgyKX1gIDpcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2hlY2tib3hTdHlsZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtyb3cuY2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkNoZWNrZWQocm93KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBjYXNlICdhY3Rpb25zJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHthY3Rpb25zLm1hcCgoYWMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogIGlzQW5hbHlzdCA/ICcjZDNkM2QzJyA6IGFjLmNvbG9yLCBtYXJnaW46ICcwLjVlbScsIGN1cnNvcjogJ3BvaW50ZXInLCBwb2ludGVyRXZlbnRzOiBpc0FuYWx5c3QgPyAnbm9uZScgOiAnYXV0bycgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17YWMuaWNvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gYWMuYWN0aW9uKHJvdyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICBjYXNlICdpZCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gKFxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbGlja0RldGFpbHModmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlkQ2xhc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3ZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Jvd1snaXNfcHJvbW90aW9uJ10gP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gY2xhc3NOYW1lPXtzdHlsZXMuaXNQcm9tb30gaWNvbj17ZmFQZXJjZW50fSAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyd9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApOiBudWxsXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgY2hhbmdlSGlkZVN0YXR1cyA9IChmaWVsZE5hbWU6IHN0cmluZywgZmllbGRUaXRsZTogc3RyaW5nLCBoaWRlRmllbGQ6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgY29uc3QgbmV3SGVhZGVyID0gaGVhZGVyTGlzdC5tYXAoZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBoaWRlID0gZmllbGROYW1lID09PSBlLm5hbWUgJiYgZmllbGRUaXRsZSA9PT0gZS50aXRsZSA/XG4gICAgICAgICAgICAgICAgaGlkZUZpZWxkIDpcbiAgICAgICAgICAgICAgICBlLmhpZGVcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5lLFxuICAgICAgICAgICAgICAgIGhpZGUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgc2V0SGVhZGVyTGlzdChuZXdIZWFkZXIpXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2VNb2RhbCA9ICgpID0+IHNldFNob3dNb2RhbChmYWxzZSlcblxuICAgIGNvbnN0IHRhYmxlQ2xhc3NOYW1lID0gY3VzdG9tQ2xhc3NOYW1lID8gYCR7c3R5bGVzLnRhYmxlQ29tcGxleH0gJHtjdXN0b21DbGFzc05hbWV9YCA6IHN0eWxlcy50YWJsZUNvbXBsZXhcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXt0YWJsZUNsYXNzTmFtZX0+XG4gICAgICAgICAgICA8dGFibGUgc3R5bGU9e3RhYmxlU3R5bGV9PlxuICAgICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckxpc3QubWFwKChvcCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlFeGlzdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzY2FuID0gY29udGVudFswXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlFeGlzdCA9IHNjYW5bb3AubmFtZV0gPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wLnR5cGUgPT09ICdhY3Rpb25zJyB8fCBvcC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5RXhpc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcC50aXRsZSA9PT0gJ1NlbGVjY2lvbmFyJyAmJiByZXBvcnREZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcGVydHlFeGlzdCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wLmhpZGUgPyAnJyA6IG9wLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29wLmlzSGlkZWRhYmxlID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZUhpZGVTdGF0dXMob3AubmFtZSwgb3AudGl0bGUsICFvcC5oaWRlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaGlkZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17b3AuaGlkZSA/IGZhRXllIDogZmFFeWVTbGFzaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTogPHRoIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3AudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgPC90aGVhZD5cblxuICAgICAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAgICAgICAge2NvbnRlbnQubWFwKChjLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXJMaXN0Lm1hcCgoZWxlLGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGMuc3RhdHVzID09ICdQZW5kaWVudGUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLnJldmlld2VkID0gJyAtICdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gMCAmJiByZXBvcnREZXRhaWxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZ2V0RmllbGQoZWxlLnR5cGUsIGVsZS5uYW1lLCBjLCBlbGUuaGlkZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZmllbGR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApOiAgPHRkIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsnLSd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICB7IHRleHROb3REYXRhIH1cbiAgICAgICAgICAgIDwvaDQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAge2N1cnJlbnRQYWdlID4gMSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VQYWdlUHJldigpfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJldExlZnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FyZXRMZWZ0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge3RvdGFsUGFnZSA+IGN1cnJlbnRQYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2VOZXh0KCl9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhcmV0UmlnaHR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FyZXRSaWdodH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8TW9kYWxcbiAgICAgICAgICAgICAgICBub1BhZGRpbmc9e3RydWV9XG4gICAgICAgICAgICAgICAgY29udGFpbmVyV2lkdGg9XCI0MCVcIlxuICAgICAgICAgICAgICAgIHNob3dNb2RhbD17c2hvd01vZGFsfVxuICAgICAgICAgICAgICAgIGNsb3NlTW9kYWw9e2hhbmRsZUNsb3NlTW9kYWx9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gb25DbGljaz17KCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKX0gY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbWFnZUNsb3NlfT5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYVRpbWVzQ2lyY2xlfS8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e3NlbGVjdGVkSW1hZ2V9IGFsdD1cInRoaXMgaXMgY2FyIGltYWdlXCIgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWxJbWFnZX0vPlxuICAgICAgICAgICAgPC9Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5UYWJsZUNvbXBsZXguZGVmYXVsdFByb3BzID0ge1xuICAgIGNoZWNrYm94U3R5bGVzOiAnJyxcbiAgICB0ZXh0Tm90RGF0YTogJycsXG4gICAgY3VzdG9tQ2xhc3NOYW1lOiAnJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFibGVDb21wbGV4XG4iLCJpbXBvcnQgVGFibGUgZnJvbSAnLi9UYWJsZSdcbmltcG9ydCBUYWJsZUNvbXBsZXggZnJvbSAnLi9UYWJsZUNvbXBsZXgnXG5cbmV4cG9ydCB7XG4gICAgVGFibGUsXG4gICAgVGFibGVDb21wbGV4LFxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhYmxlXCI6IFwidGFibGVfdGFibGVfXzNSQkNlXCIsXG5cdFwiZm9vdGVyXCI6IFwidGFibGVfZm9vdGVyX18ybjRwTFwiLFxuXHRcImFjdGlvbkljb25cIjogXCJ0YWJsZV9hY3Rpb25JY29uX18zQnVDcFwiLFxuXHRcInRhYmxlQ29tcGxleFwiOiBcInRhYmxlX3RhYmxlQ29tcGxleF9fWXJ4YjBcIixcblx0XCJoaWRlXCI6IFwidGFibGVfaGlkZV9fM3h5TC1cIixcblx0XCJpZENsYXNzXCI6IFwidGFibGVfaWRDbGFzc19fMW9OTkVcIixcblx0XCJpc1Byb21vXCI6IFwidGFibGVfaXNQcm9tb19fMjU3NDFcIixcblx0XCJtb2RhbEltYWdlXCI6IFwidGFibGVfbW9kYWxJbWFnZV9fMmVTVVFcIixcblx0XCJtb2RhbEltYWdlQ2xvc2VcIjogXCJ0YWJsZV9tb2RhbEltYWdlQ2xvc2VfXzFySkx2XCIsXG5cdFwic29ydEljb25cIjogXCJ0YWJsZV9zb3J0SWNvbl9fdGdJRHBcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vaW5wdXQnO1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiwgU2Vjb25kYXJ5QnV0dG9uIH0gZnJvbSAnLi4vYnV0dG9ucyc7XG5pbXBvcnQgeyBUYWJsZUNvbXBsZXggfSBmcm9tICcuLi90YWJsZSc7XG5pbXBvcnQgeyB2YWxpZGF0ZVNlc3Npb24sIGdldEhlYWRlciB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24tbWFuYWdlbWVudCc7XG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3V0aWxzL2FwaSc7XG5pbXBvcnQgeyBnZXRNaXNzaW9uc0NhdGFsb2dCeU1pc3Npb24gfSBmcm9tICcuLi8uLi91dGlscy9jYXRhbG9ncyc7XG5pbXBvcnQgU2VsZWN0U2VhcmNoIGZyb20gJy4uL3NlbGVjdFNlYXJjaC9TZWxlY3RTZWFyY2gnO1xuaW1wb3J0IHsgZ2V0STE4bkxhYmVsLCB0cmFuc2xhdGVUYWJsZUNvbXBsZXhIZWFkZXIgfSBmcm9tICcuLi8uLi9pMThuJztcblxuaW1wb3J0IHMgZnJvbSAnLi92YWxpZGF0b3JzVGFiLm1vZHVsZS5zY3NzJ1xuXG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuLi9kYXRlcGlja2VyL2RhdGVwaWNrZXInXG5cbnR5cGUgUmFua2luZ1ZhbGlkYXRvciA9IHtcbiAgICBmcm9tOiBzdHJpbmcsXG4gICAgdG86IHN0cmluZyxcbiAgICB0ZXh0U2VhcmNoOiBzdHJpbmcsXG4gICAgcGVyUGFnZTogc3RyaW5nLFxuICAgIGxvY2FsZT86IHN0cmluZyxcbn1cblxudHlwZSBSYW5raW5nVmFsaWRhdG9yRGF0YSA9IHtcbiAgICBpZDogbnVtYmVyLFxuICAgIGVtcGxveWVlX251bWJlcjogbnVtYmVyLFxuICAgIGZ1bGxuYW1lOiBzdHJpbmcsXG4gICAgdXNlclZhbGlkYXRlczogbnVtYmVyLFxuICAgIGVmZmljaWVuY3k6IG51bWJlcixcbn1cblxuY29uc3QgZW1wdHlSYW5raW5nVmFsaWRhdG9yID0ge1xuICAgIGZyb206ICcnLFxuICAgIHRvOiAnJyxcbiAgICB0ZXh0U2VhcmNoOiAnJyxcbiAgICBwZXJQYWdlOiAnJyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdG9yc1RhYiBleHRlbmRzIENvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIGhlYWRlciA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgdGl0bGU6ICdOw7ptIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgIGlzSGlkZWRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIG5hbWU6ICdlbXBsb3llZV9udW1iZXInLFxuICAgICAgICAgICAgdHlwZTogJ251bWJlcicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnTm9tYnJlJyxcbiAgICAgICAgICAgIGlzSGlkZWRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIG5hbWU6ICdmdWxsTmFtZScsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnUG9yY2VudGFqZScsXG4gICAgICAgICAgICBpc0hpZGVkYWJsZTogZmFsc2UsXG4gICAgICAgICAgICBuYW1lOiAnZWZmaWNpZW5jeScsXG4gICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ2FwdHVyYXMgdmFsaWRhZGFzJyxcbiAgICAgICAgICAgIGlzSGlkZWRhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIG5hbWU6ICd1c2VyVmFsaWRhdGVzJyxcbiAgICAgICAgICAgIHR5cGU6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgIF1cblxuICAgIHN0YXRlID0ge1xuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgY3VycmVudFBhZ2U6IDAsXG4gICAgICAgIHRvdGFsOiAwLFxuICAgICAgICB0b3RhbFBhZ2U6IDAsXG4gICAgICAgIHJhbmtpbmdWYWxpZGF0b3I6IGVtcHR5UmFua2luZ1ZhbGlkYXRvcixcbiAgICAgICAgcmFua2luZ1ZhbGlkYXRvcnM6IFtdLFxuICAgICAgICBzdGFydERhdGVFcnJvck1zZzogJycsXG4gICAgICAgIHRvdGFsU2Nhbkhpc3Q6ICcnLFxuICAgICAgICB2YWxpZFNjYW5IaXN0OiAnJyxcbiAgICAgICAgdG90YWxTY2FuOiAnJyxcbiAgICAgICAgdmFsaWRTY2FuOiAnJyxcbiAgICAgICAgbWlzc2lvbjogbnVsbCxcbiAgICB9XG5cbiAgICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpe1xuICAgICAgICB2YWxpZGF0ZVNlc3Npb24oKVxuICAgICAgICB0aGlzLmxvYWREYXRhKDEpXG4gICAgfVxuXG4gICAgZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgICAgIGlmIChkYXRlKSB7XG4gICAgICAgICAgICBkYXRlID0gbmV3IERhdGUoZGF0ZSk7XG5cbiAgICAgICAgICAgIGxldCBtb250aCA9ICcnICsgKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgICAgICAgbGV0IGRheSA9ICcnICsgZGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcblxuICAgICAgICAgICAgaWYgKG1vbnRoLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICBtb250aCA9ICcwJyArIG1vbnRoO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZGF5Lmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgICBkYXkgPSAnMCcgKyBkYXk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICcnXG4gICAgfVxuXG4gICAgbG9hZERhdGEgPSBhc3luYyAocGFnZTogbnVtYmVyKSA9PntcbiAgICAgICAgY29uc3QgcmFua2luZ1ZhbGlkYXRvciA9IHRoaXMuc3RhdGUucmFua2luZ1ZhbGlkYXRvclxuICAgICAgICBpZih0aGlzLnZhbGlkYXRlRGF0ZShyYW5raW5nVmFsaWRhdG9yKSl7XG4gICAgICAgICAgICB0cnl7XG4gICAgICAgICAgICAgICAgY29uc3QgaGVhZGVycyA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4uZ2V0SGVhZGVyKCksXG4gICAgICAgICAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgZm9ybV9kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZCgnbWlzc2lvbicsIGAke3RoaXMuc3RhdGUubWlzc2lvbiAhPT0gbnVsbCA/IHRoaXMuc3RhdGUubWlzc2lvbiA6ICcnfWApXG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZCgndG8nLCB0aGlzLmZvcm1hdERhdGUocmFua2luZ1ZhbGlkYXRvci50bykpXG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZCgnZnJvbScsIHRoaXMuZm9ybWF0RGF0ZShyYW5raW5nVmFsaWRhdG9yLmZyb20pKVxuICAgICAgICAgICAgICAgIGZvcm1fZGF0YS5hcHBlbmQoJ3RleHRTZWFyY2gnLCByYW5raW5nVmFsaWRhdG9yLnRleHRTZWFyY2gpXG4gICAgICAgICAgICAgICAgZm9ybV9kYXRhLmFwcGVuZCgncGVyUGFnZScsIHJhbmtpbmdWYWxpZGF0b3IucGVyUGFnZSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBpLnBvc3QoYGFwaS9yZXBvcnRzL3JhbmtpbmctdmFsaWRhdG9ycz9wYWdlPSR7cGFnZX1gLCBmb3JtX2RhdGEsIHsgaGVhZGVycyB9KVxuICAgICAgICAgICAgICAgIGlmKHJlc3BvbnNlLmRhdGEuZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7cGFnaW5hdGlvbiwgZGF0YX0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB7dXNlcnMsIHNjYW5zfSA9IGRhdGE7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmFua2luZ1ZhbGlkYXRvcnMgPSB1c2Vycy5tYXAoKHJhbmtpbmdWYWxpZGF0b3I6IFJhbmtpbmdWYWxpZGF0b3JEYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlZmZpY2llbmN5ID0gKE1hdGgucm91bmQocmFua2luZ1ZhbGlkYXRvci5lZmZpY2llbmN5ICogMTAwKSkgLyAxMDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmFua2luZ1ZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZmZpY2llbmN5OiBgJHtlZmZpY2llbmN5fSVgLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bGxOYW1lOiByYW5raW5nVmFsaWRhdG9yLmZ1bGxuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmFua2luZ1ZhbGlkYXRvcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogcGFnaW5hdGlvbi50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlOiBwYWdpbmF0aW9uLmN1cnJlbnRfcGFnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBwYWdpbmF0aW9uLmNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQYWdlOiBwYWdpbmF0aW9uLnRvdGFsX3BhZ2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxTY2FuOiBzY2Fucy5maWx0ZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsU2Nhbkhpc3Q6IHNjYW5zLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRTY2FuOiBzY2Fucy5maWx0ZXJlZF92YWxpZGF0ZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZFNjYW5IaXN0OiBzY2Fucy52YWxpZGF0ZWQsXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2UuZGF0YS5kYXRhLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyByYW5raW5nVmFsaWRhdG9yczogW10gfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9Y2F0Y2goZSl7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGFydERhdGVIYW5kbGVyID0gKGRhdGU6IGFueSkgPT4ge1xuICAgICAgICBsZXQge3JhbmtpbmdWYWxpZGF0b3J9ID0gdGhpcy5zdGF0ZTtcblxuICAgICAgICByYW5raW5nVmFsaWRhdG9yID0ge1xuICAgICAgICAgICAgLi4ucmFua2luZ1ZhbGlkYXRvcixcbiAgICAgICAgICAgIGZyb206IGRhdGVcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0ZShyYW5raW5nVmFsaWRhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmFua2luZ1ZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBzdGFydERhdGVFcnJvck1zZzogJycsXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmtpbmdWYWxpZGF0b3IudG8pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgxKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBlbmREYXRlSGFuZGxlciA9IChkYXRlOiBhbnkpID0+IHtcbiAgICAgICAgbGV0IHtyYW5raW5nVmFsaWRhdG9yfSA9IHRoaXMuc3RhdGU7XG5cbiAgICAgICAgcmFua2luZ1ZhbGlkYXRvciA9IHtcbiAgICAgICAgICAgIC4uLnJhbmtpbmdWYWxpZGF0b3IsXG4gICAgICAgICAgICB0bzogZGF0ZSxcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0ZShyYW5raW5nVmFsaWRhdG9yKSkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgcmFua2luZ1ZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBzdGFydERhdGVFcnJvck1zZzogJycsXG4gICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHJhbmtpbmdWYWxpZGF0b3IuZnJvbSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKDEpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlYXJjaFRpbWVvdXQgPSBudWxsO1xuXG4gICAgc2VhcmNoVmFsaWRhdG9ySGFuZGxlciA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3QgcmFua2luZ1ZhbGlkYXRvciA9IHtcbiAgICAgICAgICAgIC4uLnRoaXMuc3RhdGUucmFua2luZ1ZhbGlkYXRvcixcbiAgICAgICAgICAgIHRleHRTZWFyY2g6IGUudGFyZ2V0LnZhbHVlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgcmFua2luZ1ZhbGlkYXRvciB9LCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWREYXRhKDEpXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG1pc3Npb25IYW5kbGVyID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBtaXNzaW9uSWQgPSBlLnZhbHVlXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBtaXNzaW9uOiBtaXNzaW9uSWQgfSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2FkRGF0YSgxKVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGhhbmRsZUlucHV0Q2hhbmdlID0gYXN5bmMgKGlucHV0VmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0TWlzc2lvbnNDYXRhbG9nQnlNaXNzaW9uKGlucHV0VmFsdWUpXG4gICAgfVxuXG4gICAgdmFsaWRhdGVEYXRlID0gKHJhbmtpbmdWYWxpZGF0b3I6IFJhbmtpbmdWYWxpZGF0b3IpOiBib29sZWFuID0+IHtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlXG4gICAgICAgIGxldCBzdGFydERhdGVFcnJvck1zZyA9ICcnXG5cbiAgICAgICAgY29uc3Qgc3RhcnQgPSBuZXcgRGF0ZShyYW5raW5nVmFsaWRhdG9yLmZyb20pLmdldFRpbWUoKVxuICAgICAgICBjb25zdCBlbmQgPSBuZXcgRGF0ZShyYW5raW5nVmFsaWRhdG9yLnRvKS5nZXRUaW1lKClcblxuICAgICAgICBpZiAoc3RhcnQgPiBlbmQpIHtcbiAgICAgICAgICAgIHN0YXJ0RGF0ZUVycm9yTXNnID0gJ0xhIGZlY2hhIGRlIGluaWNpbyBubyBlcyB2w6FsaWRhJ1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXJ0RGF0ZUVycm9yTXNnLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHN0YXJ0RGF0ZUVycm9yTXNnIH0pXG5cbiAgICAgICAgcmV0dXJuIGlzVmFsaWRcbiAgICB9XG5cbiAgICBjbGVhckRhdGVTZWxlY3Rpb24gPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgcmFua2luZ1ZhbGlkYXRvcjoge1xuICAgICAgICAgICAgICAgIC4uLmVtcHR5UmFua2luZ1ZhbGlkYXRvcixcbiAgICAgICAgICAgICAgICBmcm9tOiAnJyxcbiAgICAgICAgICAgICAgICB0bzogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCAoKSA9PiB0aGlzLmxvYWREYXRhKDEpKVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgY291bnQsXG4gICAgICAgICAgICBjdXJyZW50UGFnZSxcbiAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgdG90YWxQYWdlLFxuICAgICAgICAgICAgcmFua2luZ1ZhbGlkYXRvcixcbiAgICAgICAgICAgIHJhbmtpbmdWYWxpZGF0b3JzLFxuICAgICAgICAgICAgc3RhcnREYXRlRXJyb3JNc2csXG4gICAgICAgICAgICB0b3RhbFNjYW4sXG4gICAgICAgICAgICB0b3RhbFNjYW5IaXN0LFxuICAgICAgICAgICAgdmFsaWRTY2FuLFxuICAgICAgICAgICAgdmFsaWRTY2FuSGlzdCxcbiAgICAgICAgfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgY29uc3QgeyBsb2NhbGUgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICB0aGlzLmhlYWRlciA9IHRyYW5zbGF0ZVRhYmxlQ29tcGxleEhlYWRlcihsb2NhbGUsIHRoaXMuaGVhZGVyLCAndmFsaWRhdG9yc1RhYi50YWJsZS5oZWFkZXInKVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdpZHRoNzBcIiBzdHlsZT17e2FsaWduSXRlbXM6ICdmbGV4LWVuZCd9fT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aDMwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RGF0ZXBpY2tlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRJMThuTGFiZWwobG9jYWxlLCAndmFsaWRhdG9yc1RhYi5zdGFydERhdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmFua2luZ1ZhbGlkYXRvci5mcm9tfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLnN0YXJ0RGF0ZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J2RkL21tL3l5eXknXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZUZvcm1hdD0nZGQvTU0veXl5eSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvck1zZz17c3RhcnREYXRlRXJyb3JNc2d9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZHRoMzBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEYXRlcGlja2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2dldEkxOG5MYWJlbChsb2NhbGUsICd2YWxpZGF0b3JzVGFiLmVuZERhdGUnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17cmFua2luZ1ZhbGlkYXRvci50b31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblNlbGVjdD17dGhpcy5lbmREYXRlSGFuZGxlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nZGQvbW0veXl5eSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlRm9ybWF0PSdkZC9NTS95eXl5J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTXNnPXtzdGFydERhdGVFcnJvck1zZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGgzMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlY29uZGFyeUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtnZXRJMThuTGFiZWwobG9jYWxlLCAndmFsaWRhdG9yc1RhYi5vcHRpb25zLmNsZWFyRGF0ZScpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2xlYXJEYXRlU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8YnIgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHdpZHRoNzBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWR0aDQ1XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JhbmtpbmdWYWxpZGF0b3IudGV4dFNlYXJjaH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXJPdmVyTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5zZWFyY2hWYWxpZGF0b3JIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXRJMThuTGFiZWwobG9jYWxlLCAndmFsaWRhdG9yc1RhYi5pbnB1dC5zZWFyY2gucGxhY2Vob2xkZXInKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGg0NSByb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e2dldEkxOG5MYWJlbChsb2NhbGUsICd2YWxpZGF0b3JzVGFiLm9wdGlvbnMuZ2VuZXJhdGVEYXRhJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5sb2FkRGF0YSgxKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGJyIC8+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyB3aWR0aDcwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkdGg0NVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFNlYXJjaFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vTGFiZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ3ZhbGlkYXRvcnNUYWIuaW5wdXQubWlzc2lvbi5wbGFjZWhvbGRlcicpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbkZ1bmN0aW9uPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm1pc3Npb25IYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtnZXRJMThuTGFiZWwobG9jYWxlLCAndmFsaWRhdG9yc1RhYi5pbnB1dC5taXNzaW9uLnBsYWNlaG9sZGVyJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnN0YXRzQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntnZXRJMThuTGFiZWwobG9jYWxlLCAndmFsaWRhdG9yc1RhYi50b3RhbC5jYXB0dXJlcycpfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnsgdG90YWxTY2FuIH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ3ZhbGlkYXRvcnNUYWIudG90YWwudmFsaWRhdGVkJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+eyB2YWxpZFNjYW4gfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntnZXRJMThuTGFiZWwobG9jYWxlLCAndmFsaWRhdG9yc1RhYi5oaXN0b3J5LmNhcHR1cmVzJyl9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+eyB0b3RhbFNjYW5IaXN0IH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ3ZhbGlkYXRvcnNUYWIuaGlzdG9yeS52YWxpZGF0ZWQnKX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57IHZhbGlkU2Nhbkhpc3QgfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy50YWJsZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxUYWJsZUNvbXBsZXhcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50PXtjb3VudH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ9e3JhbmtpbmdWYWxpZGF0b3JzfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyPXt0aGlzLmhlYWRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZVBhZ2VOZXh0PXsoKSA9PiB0aGlzLmxvYWREYXRhKGN1cnJlbnRQYWdlICsgMSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYWdlUHJldj17KCkgPT4gdGhpcy5sb2FkRGF0YShjdXJyZW50UGFnZSAtIDEpfVxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9e2N1cnJlbnRQYWdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGlja0RldGFpbHM9eygpID0+IHt9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw9e3RvdGFsfVxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWxQYWdlPXt0b3RhbFBhZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgIH1cbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcInRhYmxlQ29udGFpbmVyXCI6IFwidmFsaWRhdG9yc1RhYl90YWJsZUNvbnRhaW5lcl9fMjdIbGlcIixcblx0XCJzdGF0c0NvbnRhaW5lclwiOiBcInZhbGlkYXRvcnNUYWJfc3RhdHNDb250YWluZXJfX2RJb1p1XCJcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZmlsdGVyczoge1xuICAgICAgICBzZWFyY2hGaWVsZDogJ1NlYXJjaCBieSBuYW1lIG9yIHByb2R1Y3QgY29kZScsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgICAgIGNsZWFuRmlsdGVyOiAnQ2xlYW4gIEZpbHRlcnMnLFxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkJyxcbiAgICAgICAgY29tcGFyYXRpdmVDaGFydDogJ0dyYXBoIENvbXBhcmF0aXZlcycsXG4gICAgICAgIGdlb3JlZmVyZW5jZTogJ0dlb2xvY2F0aW9uJyxcbiAgICAgICAgZ2V0Q3VycmVudFJlcG9ydDogJ0dFVCBDVVJSRU5UIExJU1QnLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdCcmFuZHMnLFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdCBicmFuZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIGluICB0aGUgUmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGluIHRoZSBSZXF1ZXN0LicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZUJyYW5kOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgQnJhbmQgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlQnJhbmQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBicmFuZCBoYXMgYmVlbiByZW1vdmVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0QnJhbmQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSBicmFuZCBoYXMgYmVlbiBlZGl0ZWQgY29ycmVjdGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIHJlcG9ydCBoYXMgYmVlbiBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseSAgLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUgQnJhbmQnLFxuICAgICAgICAgICAgc2VhcmNoOiAnU2VhcmNoIEJyYW5kJyxcbiAgICAgICAgICAgIHNlYXJjaEJ5TmFtZTogJ1NlYXJjaCBieSBicmFuZCAnLFxuXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IGJyYW5kJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgYWRkOiAnQWRkIEJyYW5kJyxcbiAgICAgICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQgUmVwb3J0JyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXRlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ2FwdHVyZSBkZXRhaWxzJyxcbiAgICBpbnB1dDoge1xuICAgICAgICBjYXB0dXJlSWQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2FwdHVyZScsXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1ByaWNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VXaXRoUHJvbW90aW9uOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1Byb21vIFByaWNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgbGFiZWw6ICdCYXIgQ29kZScsXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTmFtZScsXG4gICAgICAgIH0sXG4gICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0JyYW5kJyxcbiAgICAgICAgfSxcbiAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgbGFiZWw6ICdVbml0JyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RvcmU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnU3RvcmUnLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1R5cGUnLFxuICAgICAgICB9LFxuICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgbGFiZWw6ICdHcm91cCcsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTGluZScsXG4gICAgICAgIH0sXG4gICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgbGFiZWw6ICdHcmFtbWFnZSAvIFF1YW50aXR5JyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FwdHVyZURhdGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnRGF0ZSBvZiBDYXB0dXJlJyxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1N0YXR1cycsXG4gICAgICAgIH0sXG4gICAgICAgIHNjYW5uZWRCeToge1xuICAgICAgICAgICAgbGFiZWw6ICdTY2FubmVkIGJ5JyxcbiAgICAgICAgfSxcbiAgICAgICAgcmV2aWV3ZWQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUmV2aWV3JyxcbiAgICAgICAgfSxcbiAgICAgICAgYnJhbmNoT2ZmaWNlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0JyYW5jaCcsXG4gICAgICAgIH0sXG4gICAgICAgIG1haW5JbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdNYWluIFBob3RvJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VJbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdQcmljZSBQaG90bycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZXRhaWxzQ29udGFpbmVyOiB7XG4gICAgICAgIHRpdGxlOiAnUHJvbW8gUGhvdG8nLFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBjaGFuZ2VJbWFnZTogJ0NoYW5nZSBJbWFnZScsXG4gICAgICAgIGVkaXRJbmZvcm1hdGlvbjogJ0VkaXQgSW5mb3JtYXRpb24nLFxuICAgICAgICBzYXZlSW5mb3JtYXRpb246ICdTYXZlIEluZm9ybWF0aW9uJyxcbiAgICAgICAgY2FuY2VsSW5mb3JtYXRpb246ICdDYW5jZWwnLFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ0FQVFVSRVMnLFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgc2VhcmNoRmllbGQ6ICdTZWFyY2ggYnkgIG5hbWUgb3IgcHJvZHVjdCBjb2RlJyxcbiAgICAgICAgc3RhcnREYXRlOiAnRnJvbScsXG4gICAgICAgIGVuZERhdGU6ICdUbycsXG4gICAgICAgIHdpdGhJbWFnZTogJ1dpdGggUGhvdG8nLFxuICAgICAgICB3aXRob3V0SW1hZ2U6ICdXaXRob3V0IFBob3RvJyxcbiAgICAgICAgc3RhdHVzUmVqZWN0ZWQ6ICdSZWplY3RlZCcsXG4gICAgICAgIG5vcm1hbFByaWNlOiAnTm9ybWFsIFByaWNlJyxcbiAgICAgICAgc3RhdHVzUGVuZGluZzogJ1BlbmRpbmcnLFxuICAgICAgICBzdGF0dXNWYWxpZGF0ZWQ6ICdWYWxpZGF0ZWQnLFxuICAgICAgICBwcmljZVdpdGhQcm9tb3Rpb246ICdQcm9tbyBQcmljZScsXG4gICAgICAgIHBhcmFtOiAnUGFyYW1ldGVyJyxcbiAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgICAgIGdlb2xvY2FsaXRhdGlvbjogJ0dlb2xvY2F0aW9uJyxcbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICAgICAgY2xlYW5GaWx0ZXI6ICdDbGVhbiBGaWx0ZXJzJyxcbiAgICAgICAgZXhwb3J0R2VvRGF0YTogJ0V4cG9ydCBHZW9sb2NhdGlvbiBEYXRhJyxcbiAgICB9LFxuICAgIG9wdGlvbnNDYXRhbG9nOiB7XG4gICAgICAgIGJyYW5kc0NhdGFsb2c6ICdCcmFuZCcsXG4gICAgICAgIGdyb3Vwc0NhdGFsb2c6ICdHcm91cCcsXG4gICAgICAgIGxpbmVzQ2F0YWxvZzogJ0xpbmUnLFxuICAgICAgICBzdG9yZXNDYXRhbG9nOiAnQnJhbmNoJyxcbiAgICAgICAgdW5pdHNDYXRhbG9nOiAnVW5pdCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDogJ1NlbGVjdCcsXG4gICAgICAgICAgICBpZDogJ0NhcHR1cmUnLFxuICAgICAgICAgICAgcGhvdG9fbWFpbjogJ01haW4gUGhvdG8nLFxuICAgICAgICAgICAgcGhvdG9fcHJpY2U6ICdQcmljZSBQaG90bycsXG4gICAgICAgICAgICBiYXJjb2RlOiAnQmFyY29kZScsXG4gICAgICAgICAgICBwcm9kdWN0OiAnUHJvZHVjdCcsXG4gICAgICAgICAgICBicmFuZDogJ0JyYW5kJyxcbiAgICAgICAgICAgIHR5cGU6ICdUeXBlJyxcbiAgICAgICAgICAgIGNoYWluOiAnQ29tbWVyY2lhbCBDaGFpbicsXG4gICAgICAgICAgICBicmFuY2g6ICdCcmFuY2gnLFxuICAgICAgICAgICAgc2Nhbm5lZF9ieTogJ0NhcHR1cmlzdCcsXG4gICAgICAgICAgICByZXZpZXdlZDogJ1ZhbGlkYXRvcicsXG4gICAgICAgICAgICBzdGF0dXM6ICdTdGF0dXMnLFxuICAgICAgICAgICAgZ3JhbW1hZ2VfcXVhbnRpdHk6ICdRdWFudGl0eScsXG4gICAgICAgICAgICB1bml0OiAnVW5pdCcsXG4gICAgICAgICAgICB1bml0X3ByaWNlOiAnVW5pdCBQcmljZScsXG4gICAgICAgICAgICBncm91cDogJ0dyb3VwJyxcbiAgICAgICAgICAgIGxpbmU6ICdMaW5lJyxcbiAgICAgICAgICAgIHByb2R1Y3RfY3JlYXRlZF9kYXRlOiAnRGF0ZSBvZiBQcm9kdWN0IFJlZ2lzdHJhdGlvbicsXG4gICAgICAgICAgICBsb3dlcl9wcmljZTogJ0xvd2VzdCBQcmljZScsXG4gICAgICAgICAgICBoaWdoZXN0X3ByaWNlOiAnSGlnaGVzdCBQcmljZScsXG4gICAgICAgICAgICBjYXB0dXJlX2RhdGU6ICdDYXB0dXJlIERhdGUnLFxuICAgICAgICAgICAgY2FwdHVyZV9wcmljZTogJ0NhcHR1cmUgUHJpY2UnLFxuICAgICAgICAgICAgYWN0aW9uczogJ0FjdGlvbnMnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBzdGF0dXM6IHtcbiAgICAgICAgdmFsaWRhdGVkOiAnVmFsaWRhdGVkJyxcbiAgICAgICAgcGVuZGluZzogJ1BlbmRpbmcnLFxuICAgIH0sXG5cbiAgICB1bml0czoge1xuICAgICAgICBjbTogJ0NlbnRpbWV0ZXInLFxuICAgICAgICBtOiAnTWV0ZXInLFxuICAgICAgICBtbDogJ01pbGlsaXRlcnMnLFxuICAgICAgICBsdDogJ0xpdGVyJyxcbiAgICAgICAgbWc6ICdNaWxpZ3JhbScsXG4gICAgICAgIGc6ICdHcmFtJyxcbiAgICAgICAga2c6ICdLaWxvZ3JhbScsXG4gICAgICAgIHBpZXphOiAnUGllY2UnLFxuICAgIH0sXG5cbiAgICBtb2RhbDoge1xuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIGJ1dHRvbkFjY2VwdExhYmVsOiAnRWxpbWluYXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGlzIG9wZXJhdGlvbiBpcyBwZXJtYW5lbnQsIERvIHlvdSAgd2FudCB0byAgZWxpbWluYXRlIHRoaXMgZWxlbWVudD8nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ2F0YWxvZ3MnLFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYnJhbmRzOiAnQnJhbmRzJyxcbiAgICAgICAgdW5pdGllczogJ1VuaXRzJyxcbiAgICAgICAgZ3JvdXBzOiAnR3JvdXBzJyxcbiAgICAgICAgbGluZXM6ICdMaW5lcycsXG4gICAgICAgIGNoYWluOiAnQ2hhaW5zJyxcbiAgICAgICAgcmVnaW9uOiAnUmVnaW9ucycsXG4gICAgICAgIHVzZXJzOiAnVXNlcnMnLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdDaGFpbnMnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCAgQ2hhaW4nLFxuICAgIHNlYXJjaEJ5TmFtZTogJ1NlYXJjaCBieSBuYW1lICcsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdBZGQgQ2hhaW4nLFxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkIFJlcG9ydCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBpZDogJ0lkJyxcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGFsaWFzOiAnQWxpYXMnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciB3aXRoIHRoZSByZXF1ZXN0LicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3Igd2l0aCB0aGUgcmVxdWVzdC4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NoYWluIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NoYWluIGhhcyBiZWVuIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgY2hhaW4gaGFzIGJlZW4gZWRpdGVkIHN1Y2Nlc2R1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVwb3J0IGhhcyBiZWVuIGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUgQ2hhaW4nLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdCBDaGFpbicsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0YWJzOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIHByaWNlTGlzdDogJ0NoYXJ0cyAtIExpc3QgUHJpY2UnLFxuICAgICAgICAgICAgdW5pdGFyeVByaWNlOiAnQ2hhcnRzIC0gVW5pdCBQcmljZScsXG4gICAgICAgICAgICBoaXN0b3J5OiAnUHJpY2UgSGlzdG9yeScsXG4gICAgICAgIH0sXG4gICAgICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnRGF0ZScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICdQcmljZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgc3RhcnREYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgZW5kRGF0ZTogJ0VuZCBEYXRlJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggY2FwdHVyZSBieSBJRCcsXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmF0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBvcGVyYXRpb24gaXMgcGVybWFuZW50IERvIHlvdSB3YW50IHRvIGRlbGV0ZSB0aGlzIGVsZW1lbnQ/JyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGFydERhdGU6ICdTdGFydCBEYXRlJyxcbiAgICBlbmREYXRlOiAnRW5kIERhdGUnLFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgYnV0dG9uQWNjZXB0TGFiZWw6ICdFbGltaW5hdGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoaXMgb3BlcmF0aW9uIGlzIHBlcm1hbmVudCwgZG8geW91IHdhbnQgdG8gZWxpbWluYXRlIHRoaXMgZWxlbWVudD8nLFxuICAgICAgICB9XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnR3JvdXBzJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggYSBncm91cCcsXG4gICAgc2VhcmNoQnlOYW1lOiAnU2VhcmNoIGJ5IE5hbWUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0FkZCBncm91cCcsXG4gICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQgUmVwb3J0JyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbjogJ0FiYnJldmlhdGlvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIHdpdGggdGhlIHJlcXVlc3QuJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciB3aXRoIHRoZSByZXF1ZXN0LicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnR3JvdXAgaGFzIGJlZW4gY3JlYXRlZCBzdWNjZXNzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnR3JvdXAgZGVsZXRlZCBzdWNjZXNzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0dyb3VwIGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZXBvcnQgZG93bmxvYWRlZCBzdWNjZXNmdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXRlICBncm91cCcsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IEdyb3VwJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXRlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnVmFsaWRhdGlvbicsXG4gICAgd2VsY29tZTogJ1NlbGVjdCBhIGNhcHR1cmUgdG8gc3RhcnQuJyxcbiAgICBzaWRlYmFyOiB7XG4gICAgICAgIHRpdGxlOiAnQ2FwdHVyZXMnLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgbWlzc2lvbjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTWlzc2lvbicsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3QnLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjYW5GaWx0ZXI6IHtcbiAgICAgICAgICAgIGFsbDogJ0FsbCcsXG4gICAgICAgICAgICB3aXRoUHJvZHVjdDogJ1dpdGggcHJvZHVjdCcsXG4gICAgICAgICAgICB3aXRob3V0UHJvZHVjdDogJ1dpdGhvdXQgcHJvZHVjdCcsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHNjYW46IHtcbiAgICAgICAgdG9wQmFyOiB7XG4gICAgICAgICAgICBiZWluZ1ZhbGlkYXRlZDogJ1RoaXMgcmVnaXN0ZXIgaXMgYmVpbmcgdmFsaWRhdGVkLCBzZWxlY3QgYW5vdGhlciBvbmUnLFxuICAgICAgICAgICAgd2l0aG91dE51bWJlcjogJ1dpdGhvdXQgTnVtYmVyJyxcbiAgICAgICAgICAgIHdpdGhvdXRNaXNzaW9uOiAnV2l0aG91dCBNaXNzaW9uJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdEltYWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3QnLFxuICAgICAgICB9LFxuICAgICAgICBwcmljZUltYWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1ByaWNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0JhcmNvZGUnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIEZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJpY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9tb3Rpb25QcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvbW8gUHJpY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIEZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQnJhbmNoJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQWRkcmVzcycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkaXRpb25hbENvbW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdBZGRpdGlvbmFsIGNvbW1lbnRzJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgIHNob3dQaWN0dXJlOiAnU2hvdyBQaG90bycsXG4gICAgICAgICAgICByZWplY3Q6ICdSZWplY3QnLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdWYWxpZGF0ZSBjYXB0dXJlJyxcbiAgICAgICAgICAgIHZhbGlkYXRlQW5kQWRkOiAnVmFsaWRhdGUgYW5kIEFkZCcsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgdGl0bGU6ICdDcmVhdGUgbmV3IHByb2R1Y3QnLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvZHVjdCBOYW1lJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQmFyY29kZScsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdCcmFuZCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUXVhbnRpdHknLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdVbml0JyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0dyb3VwJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTGluZScsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1R5cGUnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgY2hhbmdlSW1hZ2U6ICdDaGFuZ2UgaW1hZ2UnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb2RhbDoge1xuICAgICAgICByZWplY3Q6IHtcbiAgICAgICAgICAgIHN1YmplY3Q6ICdTZWxlY3QgYSByZWFzb24gb2YgcmVqZWN0aW9uJyxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0b2FzdDoge1xuICAgICAgICBzZW5kQ3JpdGVyaW9uOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4gJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQ2FwdHVyZSB3YXMgcmVqZWN0ZWQgc3VjY2VzZnVsbHkuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgTm90aWZpY2F0aW9uLiAnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciB3aXRoICB0aGUgIHJlcXVlc3QuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmFkaW9NYXBGaXJzdDoge1xuICAgICAgICBibHVycnk6ICdCbHVycnkgIENhcHRpb24nLFxuICAgICAgICBmYXJBd2F5OiAnRGlzdGFudCBDYXB0dXJlJyxcbiAgICAgICAgZGFyazogJ0RhcmsgQ2FwdHVyZScsXG4gICAgICAgIGluY29tcGxldGU6ICdQcm9kdWN0IGRlc2NyaXB0aW9uIGluY29tcGxldGUnLFxuICAgICAgICBkb2VzbnRNYXRjaDogJ01pc21hdGNoZWQgUHJvZHVjdHMnLFxuICAgIH0sXG5cbiAgICByYWRpb1NlY29uZDoge1xuICAgICAgICBvdXRzaWRlU2hvcDogJ0NhcHR1cmUgb3V0IG9mIHN0b3JlJyxcbiAgICAgICAgc2hvcFRpY2tldDogJ1RpY2tldCBDYXB0dXJlJyxcbiAgICAgICAgYW5vdGhlckNlbGw6ICdDYXB0dXJlIHRha2VuIHdpdGggYW5vdGhlciBjZWxscGhvbmUnLFxuICAgICAgICB0ZXN0U2NhbjogJ1Rlc3RzJyxcbiAgICB9LFxuXG4gICAgaGlzdG9yeToge1xuICAgICAgICByZWNlbnQ6ICdNb3N0IFJlY2VudCcsXG4gICAgICAgIG1vc3RFeHBlbnNpdmU6ICdNb3N0IEV4cGVuc2l2ZScsXG4gICAgICAgIGNoZWFwZXN0OiAnQ2hlYXBlc3QnLFxuICAgICAgICBjaGVhcGVzdFdpdGhQcm9tb3Rpb246ICdDaGVhcGVzdCB3aXRoICBQcm9tbycsXG4gICAgfSxcbn1cbiIsIi8vIEVOXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IG1pc3Npb25zIGZyb20gJy4vbWlzc2lvbnMnO1xuaW1wb3J0IGNhcHR1cmVzIGZyb20gJy4vY2FwdHVyZXMnO1xuaW1wb3J0IGNhcHR1cmUgZnJvbSAnLi9jYXB0dXJlJztcbmltcG9ydCBjYXRhbG9ncyBmcm9tICcuL2NhdGFsb2dzJztcbmltcG9ydCBwcm9maWxlIGZyb20gJy4vcHJvZmlsZSc7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9wcm9kdWN0cyc7XG5pbXBvcnQgcHJvZHVjdCBmcm9tICcuL3Byb2R1Y3QnO1xuaW1wb3J0IHJhbmtpbmdzIGZyb20gJy4vcmFua2luZ3MnO1xuaW1wb3J0IGdyYXBoVGFiIGZyb20gJy4vZ3JhcGgtdGFiJztcbmltcG9ydCBhZHZhbmNlZFNlYXJjaCBmcm9tICcuL2FkdmFuY2VkLXNlYXJjaCc7XG5pbXBvcnQgdGFibGVUYWIgZnJvbSAnLi90YWJsZS10YWInO1xuaW1wb3J0IHByb2R1Y3RUYWIgZnJvbSAnLi9wcm9kdWN0LXRhYic7XG5pbXBvcnQgc2Nhbm5lcnNUYWIgZnJvbSAnLi9zY2FubmVycy10YWInO1xuaW1wb3J0IHZhbGlkYXRvcnNUYWIgZnJvbSAnLi92YWxpZGF0b3JzLXRhYic7XG5pbXBvcnQgYnJhbmRzQ2F0YWxvZyBmcm9tICcuL2JyYW5kcy1jYXRhbG9nJztcbmltcG9ydCB1bml0c0NhdGFsb2cgZnJvbSAnLi91bml0cy1jYXRhbG9nJztcbmltcG9ydCBncm91cHNDYXRhbG9nIGZyb20gJy4vZ3JvdXBzLWNhdGFsb2cnO1xuaW1wb3J0IGxpbmVzQ2F0YWxvZyBmcm9tICcuL2xpbmVzLWNhdGFsb2cnO1xuaW1wb3J0IGNoYWluc0NhdGFsb2cgZnJvbSAnLi9jaGFpbnMtY2F0YWxvZyc7XG5pbXBvcnQgcmVnaW9uc0NhdGFsb2cgZnJvbSAnLi9yZWdpb25zLWNhdGFsb2cnO1xuaW1wb3J0IHVzZXJzQ2F0YWxvZyBmcm9tICcuL3VzZXJzLWNhdGFsb2cnO1xuaW1wb3J0IHRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IGdyYXBoVGFiQ29tcGFyZSBmcm9tICcuL2dyYXBoLXRhYi1jb21wYXJlJ1xuaW1wb3J0IHN0YXRpc3RpY1JlcG9ydCBmcm9tICcuL3N0YXRpc3RpYy1yZXBvcnQnXG5pbXBvcnQgcHJvZHVjdFJlcG9ydCBmcm9tICcuL3Byb2R1Y3QtcmVwb3J0J1xuaW1wb3J0IHNjYW5zUmVwb3J0IGZyb20gJy4vc2NhbnMtcmVwb3J0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmF2YmFyLFxuICAgIGhvbWUsXG4gICAgdGFibGUsXG4gICAgbWlzc2lvbnMsXG4gICAgY2FwdHVyZXMsXG4gICAgY2FwdHVyZSxcbiAgICBjYXRhbG9ncyxcbiAgICBwcm9maWxlLFxuICAgIHByb2R1Y3RzLFxuICAgIHByb2R1Y3QsXG4gICAgcmFua2luZ3MsXG4gICAgZ3JhcGhUYWIsXG4gICAgYWR2YW5jZWRTZWFyY2gsXG4gICAgdGFibGVUYWIsXG4gICAgcHJvZHVjdFRhYixcbiAgICBzY2FubmVyc1RhYixcbiAgICB2YWxpZGF0b3JzVGFiLFxuICAgIGJyYW5kc0NhdGFsb2csXG4gICAgdW5pdHNDYXRhbG9nLFxuICAgIGdyb3Vwc0NhdGFsb2csXG4gICAgbGluZXNDYXRhbG9nLFxuICAgIGNoYWluc0NhdGFsb2csXG4gICAgcmVnaW9uc0NhdGFsb2csXG4gICAgdXNlcnNDYXRhbG9nLFxuICAgIGdyYXBoVGFiQ29tcGFyZSxcbiAgICBwcm9kdWN0UmVwb3J0LFxuICAgIHNjYW5zUmVwb3J0LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnTGluZXMnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCBhIGxpbmUnLFxuICAgIHNlYXJjaEJ5TmFtZTogJ1NlYXJjaCBieSBuYW1lICcsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdBZGQgbGluZScsXG4gICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQgUmVwb3J0JyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWVfbGluZTogJ0xpbmUnLFxuICAgICAgICAgICAgbmFtZV9ncm91cDogJ0dyb3VwJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3Igd2l0aCB0aGUgUmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMaW5lIGNyZWF0ZWQgc3VjY2VzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTGluZSBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdMaW5lIGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNmdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlcG9ydCBkb3dubG9hZGVkIHN1Y2Nlc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUgbGluZScsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IGxpbmUnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhdGUnLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdNSVNTSU9OUycsXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgdGl0bGU6ICdUaXRsZScsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXB0aW9uJyxcbiAgICAgICAgICAgIGNhcHR1cmVfcG9pbnRzOiAnQ2FwdHVyZSBQb2ludHMnLFxuICAgICAgICAgICAgbWlzc2lvbl9wb2ludHM6ICdNaXNzaW9uIFBvaW50cycsXG4gICAgICAgICAgICBzdGFydF9kYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgICAgICBlbmRfZGF0ZTogJ0VuZCBEYXRlJyxcbiAgICAgICAgICAgIHJlZ2lvbnM6ICdSZWdpb24nLFxuICAgICAgICAgICAgYWN0aW9uczogJ0FjdGlvbnMnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBhZGQ6ICdOZXcgTWlzc2lvbicsXG4gICAgfSxcblxuICAgIHRvYXN0OiB7XG4gICAgICAgIGNyZWF0ZU1pc3Npb246IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLiAnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgbWlzc2lvbiBoYXMgYmVlbiBjcmVhdGVkIGNvcnJlY3RseS4gJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgTm90aWZpY2F0aW9uLiAnLFxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZWRNZXNzYWdlOiAnRHVwbGljYXRlZCAgVGl0bGUuJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU29tZXRoaW5nIHdlbnQgd3JvbmcuICcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb2RhbDoge1xuICAgICAgICBkaWFsb2c6IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGlzIG9wZXJhdGlvbiBjYW5ub3QgYmUgcGVyZm9ybWVkIGJlY2F1c2UgdGhlIG1pc3Npb24gaGFzIGFzc29jaWF0ZWQgY2FwdHVyZXMnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGFjZXB0OiAnQWNlcHQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgYWRkOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05ldyBNaXNzaW9uJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXQgTWlzc2lvbicsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBlZGl0OiAnZWRpdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RpdGxlIChyZXF1aXJlZCknLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEZXNjcmlwdGlvbiAocmVxdWlyZWQgLyBtYXggMjU1IGNoYXJhY3RlcnMpJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ1RoZSBkZXNjcmlwdGlvbiBtb3N0IGhhdmUgYXQgbGVhc3QgNSBjaGFyYWN0ZXJzLicsXG4gICAgICAgICAgICAgICAgICAgIG1heExlbmd0aDogJ1RoZSBkZXNjcmlwdGlvbiBtb3N0IGhhdmUgbWF4IDI1NSBjaGFyYWN0ZXJzLicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1N0YXJ0IERhdGUnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnU3RhcnQgZGF0ZSBpcyBub3QgdmFsaWQnLFxuICAgICAgICAgICAgICAgICAgICBncmVhdGVyVGhhbjogJ1N0YXJ0IGRhdGUgbXVzdCBiZSBncmVhdGVyIHRoYW4geWVzdGVyZGF5LicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlbmREYXRlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdFbmQgRGF0ZScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdFbmQgZGF0ZSBpcyBub3QgdmFsaWQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVnaW9uOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTZWxlY3QgYSByZWdpb24nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0IG9uZSByZWdpb24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWlzc2lvblBvaW50czoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUG9pbnRzIGJ5IE1pc3Npb24nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiAnVGhlIHNjb3JlIG11c3QgYmUgYSB2YWxpZCBudW1iZXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2FwdHVyZVBvaW50czoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUG9pbnRzIGJ5IGNhcHR1cmUnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiAnVGhlIHNjb3JlIG11c3QgYmUgYSB2YWxpZCBudW1iZXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG9wdGlvbjoge1xuICAgICAgICB2YWxpZGF0aW9uczogJ1ZhbGlkYXRpb24nLFxuICAgICAgICBtaXNzaW9uczogJ01pc3Npb25zJyxcbiAgICAgICAgY2FwdHVyZXM6ICdDYXB0dXJlcycsXG4gICAgICAgIHByb2R1Y3RzOiAnUHJvZHVjdHMnLFxuICAgICAgICByYW5raW5nczogJ1JhbmtpbmdzJyxcbiAgICAgICAgY2F0YWxvZ3M6ICdDYXRhbG9ncycsXG4gICAgICAgIGVkaXRQcm9maWxlOiAnRWRpdCBwcm9maWxlJyxcbiAgICAgICAgc2lnbk91dDogJ1NpZ24gT3V0JyxcbiAgICAgICAgcmVwb3J0czoge1xuICAgICAgICAgICAgZ2VvbG9jYWxpemF0aW9uOiAnUmVwb3J0ZSBkZSBnZW9sb2NhbGl6YWNpb24nLFxuICAgICAgICAgICAgc3RhdGlzdGljOiAnUmVwb3J0ZSBkZSBlc3RhZMOtc3RpY29zJyxcbiAgICAgICAgICAgIHByb2R1Y3Q6ICdSZXBvcnRlIGRlIHByb2R1Y3RvJyxcbiAgICAgICAgICAgIHNjYW5zOiAnUmVwb3J0ZSBkZSBjYXB0dXJhcycsXG4gICAgICAgIH0sXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUHJvZHVjdCBSZXBvcnQnLFxuICAgIG5ld1NlcmFjaDogJ05ldyBzZWFyY2gnLFxuICAgIHBsYWNlaG9sZGVyU2VhcmNoOiAnTmFtZSAvIENvZGUnLFxuICAgIHNlbGVjdGVkOiAnU2VsZWN0ZWQnLFxuICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgbXlMaXN0OiAnVmlldyBteSBsaXN0JyxcbiAgICBnZW5lcmFsU2VhcmNoOiAnR2VuZXJhbCBTZWFyY2gnLFxuICAgIHNhdmVMaXN0OiAnU2F2ZSB0byBteSBsaXN0JyxcbiAgICBncmFwaGljOiAnR3JhcGgnLFxuICAgIGNsZWFyR3JhcGhpYzogJ0NsZWFuIG15IGxpc3QnLFxuICAgIGVtcHR5U3RhdGU6ICdEbyBhIHNlYXJjaCB0byBzZWUgcmVzdWx0cycsXG4gICAgZW1wdEdyYXBoeVN0YXRlOiAnR3JhcGggdG8gc2VlIHRoZSByZXN1bHRzJyxcbiAgICBzYXZlUHJvZHVjdHM6ICdQcm9kdWN0cyBoYXZlIGJlZW4gYWRkZWQgdG8gdGhlIGxpc3QnLFxuICAgIHNhdmVQcm9kdWN0c0Vycm9yOiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgc2F2aW5nIHRoZSBsaXN0JyxcbiAgICBwYXJhbWV0ZXI6ICdQYXJhbWV0ZXInLFxuICAgIHZhbHVlczogJ1ZhbHVlJyxcbiAgICBzdGFydERhdGU6ICdTdGFydCBkYXRlJyxcbiAgICBlbmREYXRlOiAnRW5kIGRhdGUnLFxuICAgIGRlbGV0ZUZpbHRlcnM6IFwiQ2xlYW4gZmlsdGVyc1wiLFxuICAgIGRvd25sb2FkOiBcIkRvd25sb2FkXCIsXG4gICAgbmFtZU9yQ29kZTogXCJOYW1lIC8gY29kZVwiLFxuICAgIHN1Y2Nlc3NEb3dubG9hZDogXCJSZXBvcnQgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHlcIixcbiAgICBkZWxldGVGcm9tTGlzdDogXCJEZWxldGUgZnJvbSBteSBsaXN0XCIsXG4gICAgc3VjY2Vzc0RlbGV0ZTogXCJQcm9kdWN0cyBoYXZlIGJlZW4gcmVtb3ZlZCBmcm9tIHRoZSBsaXN0XCIsXG4gICAgZXJyb3JEZWxldGU6IFwiQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgcmVtb3ZpbmcgcHJvZHVjdHMgZnJvbSB0aGUgbGlzdFwiLFxuICAgIGVycm9yRG93bmxvYWQ6IFwiRXJyb3Igb2NjdXJyZWQgd2hpbGUgZG93bmxvYWRpbmcgdGhlIHJlcG9ydFwiLFxuICAgIG5vU2VsZWN0ZWQ6IFwiTm8gcHJvZHVjdHMgc2VsZWN0ZWQuLi5cIixcbiAgICBjYXJkOiB7XG4gICAgICAgIGlkOiBcIklEOlwiLFxuICAgICAgICBiYXJjb2RlOiBcIkJBUkNPREU6XCIsXG4gICAgICAgIGJyYW5kOiBcIkJSQU5EOlwiLFxuICAgICAgICBsaW5lOiBcIkxJTkU6XCIsXG4gICAgICAgIGdyb3VwOiBcIkdST1VQOlwiLFxuICAgICAgICB1bml0OiBcIlVOSVQ6XCIsXG4gICAgICAgIHR5cGU6IFwiVFlQRTpcIixcbiAgICAgICAgbmFtZTogXCJOQU1FOlwiLFxuICAgICAgICBsb3dlcl9wcmljZTogXCJMT1dFU1QgUFJJQ0U6XCIsXG4gICAgICAgIGhpZ2hlc3RfcHJpY2U6IFwiSElHSEVTVCBQUklDRTpcIixcbiAgICAgICAgZ3JhbW1hZ2U6IFwiR1JBTU1BR0UgLyBVTklUOlwiLFxuICAgICAgICByZWNlbnRseTogXCJSZWNlbnRseVwiLFxuICAgICAgICBoaWdoZXI6IFwiSGlnaGVzdFwiLFxuICAgICAgICBsb3dlcjogXCJMb3dlclwiLFxuICAgICAgICBsb3dlclByb21vdGlvbjogXCJMb3dlc3Qgd2l0aCBwcm9tb3Rpb25cIixcbiAgICB9XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBkZXRhaWw6e1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgcHJvZHVjdElkOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9kdWN0IElEJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXJjb2RlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdCYXJjb2RlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdUaGUgZmllbGQgbXVzdCBoYXZlIGF0ICBsZWFzdCB0d28gY2hhcmFjdGVycycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQnJhbmQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1R5cGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcm91cCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGluZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTGluZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcmFtbWFnZSAvIFF1YW50aXR5JyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ1RoZSBncmFtbWFnZSBvciBxdWFudGl0eSBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyOiBUd28gZGVjaW1hbHMgbWF4LicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdVbml0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWluSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01haW4gUGhvdG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1ByaWNlIFBob3RvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaW5QcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTG93ZXN0IFByaWNlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXhQcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnSGlnaGVzdCBQcmljZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBkZXRhaWxzQ29udGFpbmVyOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1Byb2R1Y3QgUHJpY2UnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgY2hhbmdlSW1hZ2U6ICdDaGFuZ2UgUGhvdG8nLFxuICAgICAgICAgICAgZWRpdEluZm9ybWF0aW9uOiAnRWRpdCBJbmZvcm1hdGlvbicsXG4gICAgICAgICAgICBzYXZlSW5mb3JtYXRpb246ICdTYXZlIEluZm9ybWF0aW9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgbGlzdFByaWNlOiAnR3JhcGggLSBMaXN0IFByaWNlJyxcbiAgICAgICAgdW5pdGFyeVByaWNlOiAnR3JhcGggLSBVbml0IFByaWNlJyxcbiAgICAgICAgcHJpY2VIaXN0b3J5OiAnUHJpY2UgSGlzdG9yeScsXG4gICAgICAgIGRldGFpbDogJ0RldGFpbCcsXG4gICAgfSxcbn07XG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1BST0RVQ1RTJyxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHNlYXJjaEZpZWxkOiAnU2VhcmNoIGJ5ICBuYW1lIG9yIHByb2R1Y3QgY29kZScsXG4gICAgICAgIHN0YXJ0RGF0ZTogJ0Zyb20nLFxuICAgICAgICBlbmREYXRlOiAnVG8nLFxuICAgICAgICB1cGRhdGVkQXQ6ICdNb2RpZmljYXRpb24gRGF0ZScsXG4gICAgICAgIGNyZWF0ZWRBdDogJ0NyZWF0ZSBEYXRlJyxcbiAgICAgICAgcGFyYW06ICdQYXJhbWV0ZXInLFxuICAgICAgICB2YWx1ZTogJ1ZhbHVlJyxcbiAgICB9LFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgc2VhcmNoOiAnU2VhcmNoJyxcbiAgICAgICAgY2xlYW5GaWx0ZXI6ICdDbGVhbiBGaWx0ZXJzJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCcsXG4gICAgICAgIGNvbXBhcmF0aXZlQ2hhcnQ6ICdHcmFwaCBjb21wYXJhdGl2ZXMnLFxuICAgIH0sXG4gICAgb3B0aW9uc0NhdGFsb2c6IHtcbiAgICAgICAgYnJhbmRzQ2F0YWxvZzogJ0JyYW5kJyxcbiAgICAgICAgZ3JvdXBzQ2F0YWxvZzogJ0dyb3VwJyxcbiAgICAgICAgbGluZXNDYXRhbG9nOiAnTGluZScsXG4gICAgICAgIHN0b3Jlc0NhdGFsb2c6ICdDaGFpbicsXG4gICAgICAgIHVuaXRzQ2F0YWxvZzogJ1VuaXQnLFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmF0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdTZWxlY3QnLFxuICAgICAgICAgICAgcGhvdG86ICdQcm9kdWN0IFBob3RvJyxcbiAgICAgICAgICAgIHByb2R1Y3Q6ICdOYW1lJyxcbiAgICAgICAgICAgIGJhcmNvZGU6ICdDb2RlJyxcbiAgICAgICAgICAgIGJyYW5kOiAnQnJhbmQnLFxuICAgICAgICAgICAgdHlwZTogJ1R5cGUnLFxuICAgICAgICAgICAgY3JlYXRlZF9hdDogJ0NhcHR1cmUgRGF0ZScsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiAnTW9kaWZpY2F0aW9uIERhdGUnLFxuICAgICAgICAgICAgZ3JhbW1hZ2VfcXVhbnRpdHk6ICdRdWFudGl0eScsXG4gICAgICAgICAgICB1bml0OiAnVW5pdCcsXG4gICAgICAgICAgICBncm91cDogJ0dyb3VwJyxcbiAgICAgICAgICAgIGxpbmU6ICdMaW5lJyxcbiAgICAgICAgICAgIGhpZ2hlc3RfcHJpY2U6ICdIaWdoZXN0IFByaWNlJyxcbiAgICAgICAgICAgIGxvd2VyX3ByaWNlOiAnTG93ZXN0IFByaWNlJyxcbiAgICAgICAgICAgIHByb21vdGlvbl9sb3dlcl9wcmljZTogJ0xvd2VzdCAgUHJpY2Ugd2l0aCBwcm9tbycsXG4gICAgICAgICAgICBsYXN0X3ByaWNlOiAnTGFzdCBwcmljZSBjYXB0dXJlZCcsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5wdXQ6IHtcbiAgICAgICAgcm9sZToge1xuICAgICAgICAgICAgbGFiZWw6ICdSb2wgKicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0X25hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTmFtZSAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdF9uYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0xhc3QgbmFtZSAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW90aGVyX2xhc3RfbmFtZToge1xuICAgICAgICAgICAgbGFiZWw6ICdNb3RoZXJzIGxhc3QgbmFtZScsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ3VzZSBkYXJrIG1vZGUnLFxuICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhbGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2VsZWN0IExhbmd1YWdlJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0VtcGxveWVlIG51bWJlcicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNlbGxwaG9uZToge1xuICAgICAgICAgICAgbGFiZWw6ICdDZWxscGhvbmUgTnVtYmVyJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgcmVnaW9uOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1JlZ2lvbicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1VzZXIgKicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1Bhc3N3b3JkIConLFxuICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSYW5raW5ncycsXG4gICAgdGFiczoge1xuICAgICAgICBjYXB0dXJpc3RzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NhcHR1cmlzdHMnLFxuICAgICAgICAgICAgc3RhcnREYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgICAgICBlbmREYXRlOiAnRW5kIERhdGUnLFxuICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggYnkgbmFtZSBvciBlbXBsb3llZSBudW1iZXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNsZWFyRGF0ZTogJ0NsZWFuIERhdGVzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ1Bvc2l0aW9uJyxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOdW1iZXI6ICdFbXBsb3llZSBudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6ICdQZXJjZW50YWplJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQ2FwdHVyZXM6ICdWYWxpZGF0ZWQgQ2FwdHVyZXMnLFxuICAgICAgICAgICAgICAgICAgICBwb2ludHM6ICdQb2ludHMnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHZhbGlkYXRvcnM6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnVmFsaWRhdG9ycycsXG4gICAgICAgICAgICBzdGFydERhdGU6ICdTdGFydCBEYXRlJyxcbiAgICAgICAgICAgIGVuZERhdGU6ICdFbmQgRGF0ZScsXG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBieSBuYW1lIG9yIGVtcGxveWVlIG51bWJlcicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2xlYXJEYXRlOiAnQ2xlYW4gRGF0ZXMnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlRGF0YTogJ0dlbmVyYXRlIERhdGEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZXM6ICdDYXB0dXJlcyAgRGF0ZScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkOiAnVmFsaWRhdGVkIFRvdGFsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaXN0b3J5OiB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZXM6ICdDYXB0dXJlcyBIaXN0b3J5JyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWQ6ICdWYWxpZGF0ZWQgSGlzdG9yeScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOdW1iZXI6ICdFbXBsb3llZSBOdW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBub21icmU6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogJ1BlcmNlbnRhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRDYXB0dXJlczogJ1ZhbGlkYXRlZCBDYXB0dXJlcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSZWdpb25zJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggYnkgUmVnaW9uJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdTZWFyY2ggYnkgTmFtZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQWRkIFJlZ2lvbicsXG4gICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQgUmVwb3J0JyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGFsaWFzOiAnQWxpYXMnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciB3aXRoIHRoZSBSZXF1ZXN0LicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3Igd2l0aCB0aGUgUmVxdWVzdC4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlZ2lvbiBjcmVhdGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlZ2lvbiBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZWdpb24gaGFzIGJlZW4gZWRpdGVkIHN1Y2Nlc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVwb3J0ICBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXRlIFJlZ2lvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IFJlZ2lvbicsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGFydERhdGU6ICdTdGFydCBEYXRlJyxcbiAgICBlbmREYXRlOiAnRW5kIERhdGUnLFxuICAgIGlucHV0OiB7XG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggYnkgIG5hbWUgb3IgZW1wbG95ZWUgbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWlzc2lvbjoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdNaXNzaW9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2xlYXJEYXRlOiAnQ2xlYW4gRGF0ZXMnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICByYW5raW5nOiAnUG9zaXRpb24nLFxuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiAnRW1wbG95ZWUgTnVtYmVyJyxcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGVmZmljaWVuY3k6ICdQZXJjZW50YWdlJyxcbiAgICAgICAgICAgIHZhbGlkYXRlZF9jYXB0dXJlczogJ1ZhbGlkYXRlZCBDYXB0dXJlcycsXG4gICAgICAgICAgICBwb2ludHM6ICdQb2ludHMnLFxuICAgICAgICB9XG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1JlcG9ydGUgZGUgY2FwdHVyYXMnLFxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYnJhbmNoT2ZmaWNlOiAnQnJhbmNoJyxcbiAgICAgICAgICAgIG1pblByaWNlOiAnTG93ZXN0IFByaWNlJyxcbiAgICAgICAgICAgIG1heFByaWNlOiAnSGlnaGVzdCBQcmljZScsXG4gICAgICAgICAgICBjdXJyZW50UHJpY2U6ICdDdXJyZW50IFByaWNlJyxcbiAgICAgICAgICAgIGF2ZXJhZ2VQcmljZTogJ0F2ZXJhZ2UgUHJpY2UnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzZWVIaXN0b3J5OiAnU2VlIEhpc3RvcnknLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBzY2FuOiAnQ2FwdHVyZScsXG4gICAgICAgICAgICAgICAgY2FwdHVyZWRBdDogJ0NhcHR1cmUgRGF0ZScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICdQcmljZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjbG9zZTogJ2Nsb3NlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFjdGlvbnM6ICdBY3Rpb25zJyxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1VuaXRzJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggYnkgVW5pdCcsXG4gICAgc2VhcmNoQnlOYW1lOiAnU2VhcmNoIGJ5IE5hbWUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0FkZCBVbml0JyxcbiAgICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCBSZXBvcnQnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnQWJicmV2aWF0aW9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3Igd2l0aCB0aGUgUmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbml0IGNyZWF0ZWQgc3V1Y2Nlc3NmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbml0IGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVbml0IGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZXBvcnQgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZSBVbml0JyxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdE1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXQgVW5pdCcsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1VzZXJzJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggVXNlcicsXG4gICAgc2VhcmNoQnlOYW1lOiAnU2VhcmNoIGJ5IG5hbWUsIHVzZXIsIGVtYWlsLCB0YWdzIG9yIGVtcGxveWVlIG51bWJlci4nLFxuICAgIHRhZ3M6ICdUYWdzJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0NyZWF0ZSBuZXcgdXNlcicsXG4gICAgICAgIGFkZFRhZ3M6ICdBZGQgVGFncycsXG4gICAgICAgIGNsb3NlOiAnQ2xvc2UnLFxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkIFJlcG9ydCcsXG4gICAgfSxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHJvbGU6ICdGaWx0ZXIgYnkgcm9sZScsXG4gICAgICAgIHJlZ2lvbjogJ0ZpbHRlciBieSByZWdpb24nLFxuICAgICAgICBhbGxSZWdpb25zOiAnQWxsIFJlZ2lvbnMnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogJ05hbWUnLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiAnTGFzdCBOYW1lJyxcbiAgICAgICAgICAgIG1vdGhlcl9sYXN0X25hbWU6ICdNb3RoZXJzIExhc3QgTmFtZScsXG4gICAgICAgICAgICB1c2VybmFtZTogJ1VzZXInLFxuICAgICAgICAgICAgZW1haWw6ICdFTWFpbCcsXG4gICAgICAgICAgICBlbXBsb3llZV9udW1iZXI6ICdFbXBsb3llZSBOdW1iZXInLFxuICAgICAgICAgICAgcm9sU2VsZWN0ZWQ6ICdSb2xlJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3Igd2l0aCB0aGUgUmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2VzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdVc2VyIGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZXBvcnQgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZSB1c2VyJyxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdE1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXRhIFVzZXInLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhdGUnLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhcnREYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgZW5kRGF0ZTogJ0VuZCBEYXRlJyxcbiAgICBpbnB1dDoge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGJ5IG5hbWUgb3IgZW1wbG95ZWUgbnVtYmVyJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWlzc2lvbjoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdNaXNzaW9uJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2xlYXJEYXRlOiAnQ2xlYW4gRGF0ZXMnLFxuICAgICAgICBnZW5lcmF0ZURhdGE6ICdHZW5lcmF0ZSBEYXRhJyxcbiAgICB9LFxuICAgIHRvdGFsOiB7XG4gICAgICAgIGNhcHR1cmVzOiAnQ2FwdHVyZXMgVG90YWwnLFxuICAgICAgICB2YWxpZGF0ZWQ6ICdWYWxpZGF0ZWQgVG90YWwnLFxuICAgIH0sXG4gICAgaGlzdG9yeToge1xuICAgICAgICBjYXB0dXJlczogJ0NhcHR1cmVzIEhpc3RvcnknLFxuICAgICAgICB2YWxpZGF0ZWQ6ICdWYWxpZGF0ZWQgSGlzdG9yeScsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGVtcGxveWVlX251bWJlcjogJ0VtcGxveWVlIE51bWJlcicsXG4gICAgICAgICAgICBmdWxsTmFtZTogJ05hbWUnLFxuICAgICAgICAgICAgZWZmaWNpZW5jeTogJ1BlcmNlbnRhZ2UnLFxuICAgICAgICAgICAgdXNlclZhbGlkYXRlczogJ1ZhbGlkYXRlZCBDYXB0dXJlcycsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHNlYXJjaEZpZWxkOiAnQnVzY2FyIHBvciBub21icmUgbyBjw7NkaWdvIGRlbCBwcm9kdWN0bycsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ0J1c2NhcicsXG4gICAgICAgIGdlbmVyYXRlUmVwb3J0OiAnR0VORVJBUiBSRVBPUlRFJyxcbiAgICAgICAgY2xlYW5GaWx0ZXI6ICdMaW1waWFyIGZpbHRyb3MnLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhcicsXG4gICAgICAgIGNvbXBhcmF0aXZlQ2hhcnQ6ICdHcmFmaWNhciBjb21wYXJhdGl2b3MnLFxuICAgICAgICBnZW9yZWZlcmVuY2U6ICdHZW9yZWZlcmVuY2lhJyxcbiAgICAgICAgZ2V0Q3VycmVudFJlcG9ydDogJ1ZFUiBMSVNUQSBBQ1RVQUwnLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdNYXJjYXMnLFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBsYSBtYXJjYSBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVsaW1pbmFkbyBsYSBtYXJjYSBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGxhIG1hcmNhIGNvcnJlY3RhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBkZXNjYXJnYWRvIGVsIHJlcG9ydGUgZXhpdG9zYW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhciBtYXJjYScsXG4gICAgICAgICAgICBzZWFyY2g6ICdCdXNjYXIgdW5hIG1hcmNhJyxcbiAgICAgICAgICAgIHNlYXJjaEJ5TmFtZTogJ0J1c2NhciBwb3Igbm9tYnJlICcsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgbWFyY2EnLFxuICAgICAgICB9LFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICBhZGQ6ICdBw7FhZGlyIG1hcmNhJyxcbiAgICAgICAgICAgIGRvd25sb2FkOiAnRGVzY2FyZ2FyIFJlcG9ydGUnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0RldGFsbGVzIGRlIGNhcHR1cmEnLFxuICAgIGlucHV0OiB7XG4gICAgICAgIGNhcHR1cmVJZDoge1xuICAgICAgICAgICAgbGFiZWw6ICdDYXB0dXJhJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lvJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VXaXRoUHJvbW90aW9uOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1ByZWNpbyBkZSBwcm9tb2Npw7NuJyxcbiAgICAgICAgfSxcbiAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgbGFiZWw6ICdDw7NkaWdvIGRlIGJhcnJhcycsXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTm9tYnJlJyxcbiAgICAgICAgfSxcbiAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTWFyY2EnLFxuICAgICAgICB9LFxuICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICBsYWJlbDogJ1VuaWRhZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0NhZGVuYScsXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnVGlwbycsXG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0dydXBvJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGluZToge1xuICAgICAgICAgICAgbGFiZWw6ICdMw61uZWEnLFxuICAgICAgICB9LFxuICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnR3JhbWFqZSAvIENhbnRpZGFkJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2FwdHVyZURhdGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnRmVjaGEgZGUgQ2FwdHVyYScsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgbGFiZWw6ICdFc3RhdHVzJyxcbiAgICAgICAgfSxcbiAgICAgICAgc2Nhbm5lZEJ5OiB7XG4gICAgICAgICAgICBsYWJlbDogJ0VzY2FuZWFkbycsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmlld2VkOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1JldmlzYWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgYnJhbmNoT2ZmaWNlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ3N1Y3Vyc2FsJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWFpbkltYWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0ZvdG8gcHJpbmNpcGFsJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VJbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdGb3RvIGRlIHByZWNpbycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZXRhaWxzQ29udGFpbmVyOiB7XG4gICAgICAgIHRpdGxlOiAnRm90byBkZSBwcm9tb2Npw7NuJyxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2hhbmdlSW1hZ2U6ICdDYW1iaWFyIGltYWdlbicsXG4gICAgICAgIGVkaXRJbmZvcm1hdGlvbjogJ0VkaXRhciBpbmZvcm1hY2nDs24nLFxuICAgICAgICBzYXZlSW5mb3JtYXRpb246ICdHdWFyZGFyIGluZm9ybWFjacOzbicsXG4gICAgICAgIGNhbmNlbEluZm9ybWF0aW9uOiAnQ2FuY2VsYXInLFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ0FQVFVSQVMnLFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgc2VhcmNoRmllbGQ6ICdCdXNjYXIgcG9yIG5vbWJyZSBvIGPDs2RpZ28gZGVsIHByb2R1Y3RvJyxcbiAgICAgICAgc3RhcnREYXRlOiAnRGVzZGUnLFxuICAgICAgICBlbmREYXRlOiAnSGFzdGEnLFxuICAgICAgICB3aXRoSW1hZ2U6ICdDb24gZm90bycsXG4gICAgICAgIHdpdGhvdXRJbWFnZTogJ1NpbiBmb3RvJyxcbiAgICAgICAgc3RhdHVzUmVqZWN0ZWQ6ICdSZWNoYXphZG8nLFxuICAgICAgICBub3JtYWxQcmljZTogJ1ByZWNpbyBub3JtYWwnLFxuICAgICAgICBzdGF0dXNQZW5kaW5nOiAnUGVuZGllbnRlJyxcbiAgICAgICAgc3RhdHVzVmFsaWRhdGVkOiAnVmFsaWRhZG8nLFxuICAgICAgICBwcmljZVdpdGhQcm9tb3Rpb246ICdQcmVjaW8gZGUgcHJvbW9jacOzbicsXG4gICAgICAgIHBhcmFtOiAnUGFyw6FtZXRybycsXG4gICAgICAgIHZhbHVlOiAnVmFsb3InLFxuICAgICAgICBnZW9sb2NhbGl0YXRpb246ICdHZW9sb2NhbGl6YWNpb25lcycsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ0J1c2NhcicsXG4gICAgICAgIGNsZWFuRmlsdGVyOiAnTGltcGlhciBmaWx0cm9zJyxcbiAgICAgICAgZXhwb3J0R2VvRGF0YTogJ0V4cG9ydGFyIERhdG9zIEdlb3JlZmVyZW5jaWEnLFxuICAgIH0sXG4gICAgb3B0aW9uc0NhdGFsb2c6IHtcbiAgICAgICAgYnJhbmRzQ2F0YWxvZzogJ01hcmNhJyxcbiAgICAgICAgZ3JvdXBzQ2F0YWxvZzogJ0dydXBvJyxcbiAgICAgICAgbGluZXNDYXRhbG9nOiAnTMOtbmVhJyxcbiAgICAgICAgc3RvcmVzQ2F0YWxvZzogJ0NhZGVuYScsXG4gICAgICAgIHVuaXRzQ2F0YWxvZzogJ1VuaWRhZCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDogJ1NlbGVjY2lvbmFyJyxcbiAgICAgICAgICAgIGlkOiAnQ2FwdHVyYScsXG4gICAgICAgICAgICBwaG90b19tYWluOiAnRm90byBwcmluY2lwYWwnLFxuICAgICAgICAgICAgcGhvdG9fcHJpY2U6ICdGb3RvIHByZWNpbycsXG4gICAgICAgICAgICBiYXJjb2RlOiAnQ8OzZGlnbyBkZSBiYXJyYXMnLFxuICAgICAgICAgICAgcHJvZHVjdDogJ1Byb2R1Y3RvJyxcbiAgICAgICAgICAgIGJyYW5kOiAnTWFyY2EnLFxuICAgICAgICAgICAgdHlwZTogJ1RpcG8nLFxuICAgICAgICAgICAgY2hhaW46ICdDYWRlbmEgY29tZXJjaWFsJyxcbiAgICAgICAgICAgIGJyYW5jaDogJ1N1Y3Vyc2FsJyxcbiAgICAgICAgICAgIHNjYW5uZWRfYnk6ICdDYXB0dXJpc3RhJyxcbiAgICAgICAgICAgIHJldmlld2VkOiAnVmFsaWRhZG9yJyxcbiAgICAgICAgICAgIHN0YXR1czogJ0VzdGFkbycsXG4gICAgICAgICAgICBncmFtbWFnZV9xdWFudGl0eTogJ0NhbnRpZGFkJyxcbiAgICAgICAgICAgIHVuaXQ6ICdVbmlkYWQnLFxuICAgICAgICAgICAgdW5pdF9wcmljZTogJ1ByZWNpbyB1bml0YXJpbycsXG4gICAgICAgICAgICBncm91cDogJ0dydXBvJyxcbiAgICAgICAgICAgIGxpbmU6ICdMw61uZWEnLFxuICAgICAgICAgICAgcHJvZHVjdF9jcmVhdGVkX2RhdGU6ICdGZWNoYSBkZSBhbHRhIGRlIHByb2R1Y3RvJyxcbiAgICAgICAgICAgIGxvd2VyX3ByaWNlOiAnUHJlY2lvIG3DrW5pbW8nLFxuICAgICAgICAgICAgaGlnaGVzdF9wcmljZTogJ1ByZWNpbyBtw6F4aW1vJyxcbiAgICAgICAgICAgIGNhcHR1cmVfZGF0ZTogJ0ZlY2hhIGRlIGNhcHR1cmEnLFxuICAgICAgICAgICAgY2FwdHVyZV9wcmljZTogJ1ByZWNpbyBkZSBjYXB0dXJhJyxcbiAgICAgICAgICAgIGFjdGlvbnM6ICdBY2Npb25lcycsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHN0YXR1czoge1xuICAgICAgICB2YWxpZGF0ZWQ6ICdWYWxpZGFkbycsXG4gICAgICAgIHBlbmRpbmc6ICdQZW5kaWVudGUnLFxuICAgIH0sXG5cbiAgICB1bml0czoge1xuICAgICAgICBjbTogJ0NlbnRpbWV0cm8nLFxuICAgICAgICBtOiAnTWV0cm8nLFxuICAgICAgICBtbDogJ01pbGlsaXRybycsXG4gICAgICAgIGx0OiAnTGl0cm8nLFxuICAgICAgICBtZzogJ01pbGlncmFtbycsXG4gICAgICAgIGc6ICdHcmFtbycsXG4gICAgICAgIGtnOiAnS2lsb2dyYW1vJyxcbiAgICAgICAgcGllemE6ICdQaWV6YScsXG4gICAgfSxcblxuICAgIG1vZGFsOiB7XG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgYnV0dG9uQWNjZXB0TGFiZWw6ICdFbGltaW5hcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXN0YSBvcGVyYWNpw7NuIGVzIHBlcm1hbmVudGUgwr9kZXNlYSBlbGltaW5hciBlc3RlIGVsZW1lbnRvPycsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdDYXTDoWxvZ29zJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGJyYW5kczogJ01hcmNhcycsXG4gICAgICAgIHVuaXRpZXM6ICdVbmlkYWRlcycsXG4gICAgICAgIGdyb3VwczogJ0dydXBvcycsXG4gICAgICAgIGxpbmVzOiAnTMOtbmVhcycsXG4gICAgICAgIGNoYWluOiAnQ2FkZW5hcycsXG4gICAgICAgIHJlZ2lvbjogJ1JlZ2lvbmVzJyxcbiAgICAgICAgdXNlcnM6ICdVc3VhcmlvcycsXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0NhZGVuYXMnLFxuICAgIHNlYXJjaDogJ0J1c2NhciB1bmEgY2FkZW5hJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdCdXNjYXIgcG9yIG5vbWJyZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQcOxYWRpciBjYWRlbmEnLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhciBSZXBvcnRlJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGlkOiAnSWQnLFxuICAgICAgICAgICAgbmFtZTogJ05vbWJyZScsXG4gICAgICAgICAgICBhbGlhczogJ0FsaWFzJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBjcmVhZG8gbGEgY2FkZW5hIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWxpbWluYWRvIGxhIGNhZGVuYSBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGxhIGNhZGVuYSBjb3JyZWN0YW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZGVzY2FyZ2FkbyBlbCByZXBvcnRlIGV4aXRvc2FtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXIgY2FkZW5hJyxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdE1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXRhciBjYWRlbmEnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0YWJzOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIHByaWNlTGlzdDogJ0dyw6FmaWNhcyAtIFByZWNpbyBkZSBsaXN0YScsXG4gICAgICAgICAgICB1bml0YXJ5UHJpY2U6ICdHcsOhZmljYXMgLSBQcmVjaW8gdW5pdGFyaW8nLFxuICAgICAgICAgICAgaGlzdG9yeTogJ0hpc3RvcmlhbCBkZSBwcmVjaW9zJyxcbiAgICAgICAgfSxcbiAgICAgICAgaGlzdG9yeToge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIGRhdGU6ICdGZWNoYScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICdQcmVjaW8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgIGVuZERhdGU6ICdGZWNoYSBmaW5hbCcsXG4gICAgc2VhcmNoOiAnQnVzY2FyIGNhcHR1cmEgcG9yIGlkJyxcbiAgICBtb2RhbDoge1xuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIGJ1dHRvbkFjY2VwdExhYmVsOiAnRWxpbWluYXInLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0VzdGEgb3BlcmFjacOzbiBlcyBwZXJtYW5lbnRlIMK/ZGVzZWEgZWxpbWluYXIgZXN0ZSBlbGVtZW50bz8nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgIGVuZERhdGU6ICdGZWNoYSBmaW5hbCcsXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmFyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFc3RhIG9wZXJhY2nDs24gZXMgcGVybWFuZW50ZSDCv2Rlc2VhIGVsaW1pbmFyIGVzdGUgZWxlbWVudG8/JyxcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0dydXBvcycsXG4gICAgc2VhcmNoOiAnQnVzY2FyIHVuIGdydXBvJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdCdXNjYXIgcG9yIG5vbWJyZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQcOxYWRpciBncnVwbycsXG4gICAgICAgIGRvd25sb2FkOiAnRGVzY2FyZ2FyIFJlcG9ydGUnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgbmFtZTogJ05vbWJyZScsXG4gICAgICAgICAgICBhYmJyZXZpYXRpb246ICdBYnJldmlhY2nDs24nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBlbCBncnVwbyBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVsaW1pbmFkbyBlbCBncnVwbyBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGVsIGdydXBvIGNvcnJlY3RhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBkZXNjYXJnYWRvIGVsIHJlcG9ydGUgZXhpdG9zYW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhciBncnVwbycsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgZ3J1cG8nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1ZhbGlkYWNpw7NuJyxcbiAgICB3ZWxjb21lOiAnU2VsZWNjaW9uZSB1bmEgY2FwdHVyYSBwYXJhIGluaWNpYXIuJyxcbiAgICBzaWRlYmFyOiB7XG4gICAgICAgIHRpdGxlOiAnQ2FwdHVyYXMnLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgbWlzc2lvbjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTWlzacOzbicsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb2R1Y3Q6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3RvJyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY2FuRmlsdGVyOiB7XG4gICAgICAgICAgICBhbGw6ICdUb2RvcycsXG4gICAgICAgICAgICB3aXRoUHJvZHVjdDogJ0NvbiBwcm9kdWN0bycsXG4gICAgICAgICAgICB3aXRob3V0UHJvZHVjdDogJ1NpbiBwcm9kdWN0bycsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHNjYW46IHtcbiAgICAgICAgdG9wQmFyOiB7XG4gICAgICAgICAgICBiZWluZ1ZhbGlkYXRlZDogJ0VzdGUgcmVnaXN0cm8gZXN0w6Egc2llbmRvIHZhbGlkYWRvLCBzZWxlY2Npb25hIHVubyBkaWZlcmVudGUnLFxuICAgICAgICAgICAgd2l0aG91dE51bWJlcjogJ1NpbiBOw7ptZXJvJyxcbiAgICAgICAgICAgIHdpdGhvdXRNaXNzaW9uOiAnU2luIE1pc2nDs24nLFxuICAgICAgICB9LFxuICAgICAgICBwcm9kdWN0SW1hZ2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUHJvZHVjdG8nLFxuICAgICAgICB9LFxuICAgICAgICBwcmljZUltYWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1ByZWNpbycsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICBiYXJjb2RlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDw7NkaWdvIGRlIGJhcnJhcycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQcmVjaW8nLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9tb3Rpb25QcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lvIGRlIHByb21vY2nDs24nLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2FkZW5hJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkcmVzczoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRGlyZWNjacOzbicsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkaXRpb25hbENvbW1lbnRzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDb21lbnRhcmlvcyBhZGljaW9uYWxlcycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICBzaG93UGljdHVyZTogJ1ZlciBmb3RvJyxcbiAgICAgICAgICAgIHJlamVjdDogJ1JlY2hhemFyJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnVmFsaWRhciBjYXB0dXJhJyxcbiAgICAgICAgICAgIHZhbGlkYXRlQW5kQWRkOiAnVmFsaWRhciB5IGFncmVnYXInLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBwcm9kdWN0OiB7XG4gICAgICAgIHRpdGxlOiAnQ3JlYXIgbnVldm8gcHJvZHVjdG8nLFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTm9tYnJlIGRlbCBwcm9kdWN0bycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0PDs2RpZ28gZGUgYmFycmFzJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01hcmNhJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDYW50aWRhZCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1VuaWRhZCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcnVwbycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0zDrW5lYScsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1RpcG8nLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgY2hhbmdlSW1hZ2U6ICdDYW1iaWFyIGltYWdlbicsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vZGFsOiB7XG4gICAgICAgIHJlamVjdDoge1xuICAgICAgICAgICAgc3ViamVjdDogJ1NlbGVjY2lvbmEgdW4gbW90aXZvIGRlIHJlY2hhem8nLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHRvYXN0OiB7XG4gICAgICAgIHNlbmRDcml0ZXJpb246IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLiAnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSByZWNoYXphZG8gbGEgY2FwdHVyYSBjb3JyZWN0YW1lbnRlLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgZXJyb3IuICcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgcmFkaW9NYXBGaXJzdDoge1xuICAgICAgICBibHVycnk6ICdDYXB0dXJhIGJvcnJvc2EnLFxuICAgICAgICBmYXJBd2F5OiAnQ2FwdHVyYSBsZWphbmEnLFxuICAgICAgICBkYXJrOiAnQ2FwdHVyYSBvc2N1cmEnLFxuICAgICAgICBpbmNvbXBsZXRlOiAnRGVzY3JpcGNpw7NuIGRlIHByb2R1Y3RvIGluY29tcGxldGEnLFxuICAgICAgICBkb2VzbnRNYXRjaDogJ1Byb2R1Y3RvcyBxdWUgbm8gY29pbmNpZGVuJyxcbiAgICB9LFxuXG4gICAgcmFkaW9TZWNvbmQ6IHtcbiAgICAgICAgb3V0c2lkZVNob3A6ICdDYXB0dXJhIGZ1ZXJhIGRlIHRpZW5kYScsXG4gICAgICAgIHNob3BUaWNrZXQ6ICdDYXB0dXJhIGRlIHRpY2tldHMgZGUgY29tcHJhJyxcbiAgICAgICAgYW5vdGhlckNlbGw6ICdDYXB0dXJhIHRvbWFkYSBhIG90cm8gY2VsdWxhcicsXG4gICAgICAgIHRlc3RTY2FuOiAnUHJ1ZWJhcycsXG4gICAgfSxcblxuICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgcmVjZW50OiAnTcOhcyByZWNpZW50ZScsXG4gICAgICAgIG1vc3RFeHBlbnNpdmU6ICdNw6FzIGFsdG8nLFxuICAgICAgICBjaGVhcGVzdDogJ03DoXMgYmFqbycsXG4gICAgICAgIGNoZWFwZXN0V2l0aFByb21vdGlvbjogJ03DoXMgYmFqbyBjb24gcHJvbW9jacOzbicsXG4gICAgfSxcbn1cbiIsIi8vIEVTXG5pbXBvcnQgbmF2YmFyIGZyb20gJy4vbmF2YmFyJ1xuaW1wb3J0IGhvbWUgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IG1pc3Npb25zIGZyb20gJy4vbWlzc2lvbnMnO1xuaW1wb3J0IGNhcHR1cmVzIGZyb20gJy4vY2FwdHVyZXMnO1xuaW1wb3J0IGNhcHR1cmUgZnJvbSAnLi9jYXB0dXJlJztcbmltcG9ydCBjYXRhbG9ncyBmcm9tICcuL2NhdGFsb2dzJztcbmltcG9ydCBwcm9maWxlIGZyb20gJy4vcHJvZmlsZSc7XG5pbXBvcnQgcHJvZHVjdHMgZnJvbSAnLi9wcm9kdWN0cyc7XG5pbXBvcnQgcHJvZHVjdCBmcm9tICcuL3Byb2R1Y3QnO1xuaW1wb3J0IHJhbmtpbmdzIGZyb20gJy4vcmFua2luZ3MnO1xuaW1wb3J0IGdyYXBoVGFiIGZyb20gJy4vZ3JhcGgtdGFiJztcbmltcG9ydCBhZHZhbmNlZFNlYXJjaCBmcm9tICcuL2FkdmFuY2VkLXNlYXJjaCc7XG5pbXBvcnQgdGFibGVUYWIgZnJvbSAnLi90YWJsZS10YWInO1xuaW1wb3J0IHByb2R1Y3RUYWIgZnJvbSAnLi9wcm9kdWN0LXRhYic7XG5pbXBvcnQgc2Nhbm5lcnNUYWIgZnJvbSAnLi9zY2FubmVycy10YWInO1xuaW1wb3J0IHZhbGlkYXRvcnNUYWIgZnJvbSAnLi92YWxpZGF0b3JzLXRhYic7XG5pbXBvcnQgYnJhbmRzQ2F0YWxvZyBmcm9tICcuL2JyYW5kcy1jYXRhbG9nJztcbmltcG9ydCB1bml0c0NhdGFsb2cgZnJvbSAnLi91bml0cy1jYXRhbG9nJztcbmltcG9ydCBncm91cHNDYXRhbG9nIGZyb20gJy4vZ3JvdXBzLWNhdGFsb2cnO1xuaW1wb3J0IGxpbmVzQ2F0YWxvZyBmcm9tICcuL2xpbmVzLWNhdGFsb2cnO1xuaW1wb3J0IGNoYWluc0NhdGFsb2cgZnJvbSAnLi9jaGFpbnMtY2F0YWxvZyc7XG5pbXBvcnQgcmVnaW9uc0NhdGFsb2cgZnJvbSAnLi9yZWdpb25zLWNhdGFsb2cnO1xuaW1wb3J0IHVzZXJzQ2F0YWxvZyBmcm9tICcuL3VzZXJzLWNhdGFsb2cnO1xuaW1wb3J0IHRhYmxlIGZyb20gJy4vdGFibGUnO1xuaW1wb3J0IGdyYXBoVGFiQ29tcGFyZSBmcm9tICcuL2dyYXBoLXRhYi1jb21wYXJlJ1xuaW1wb3J0IHN0YXRpc3RpY1JlcG9ydCBmcm9tICcuL3N0YXRpc3RpYy1yZXBvcnQnXG5pbXBvcnQgcHJvZHVjdFJlcG9ydCBmcm9tICcuL3Byb2R1Y3QtcmVwb3J0J1xuaW1wb3J0IHNjYW5zUmVwb3J0IGZyb20gJy4vc2NhbnMtcmVwb3J0J1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmF2YmFyLFxuICAgIGhvbWUsXG4gICAgdGFibGUsXG4gICAgbWlzc2lvbnMsXG4gICAgY2FwdHVyZXMsXG4gICAgY2FwdHVyZSxcbiAgICBjYXRhbG9ncyxcbiAgICBwcm9maWxlLFxuICAgIHByb2R1Y3RzLFxuICAgIHByb2R1Y3QsXG4gICAgcmFua2luZ3MsXG4gICAgZ3JhcGhUYWIsXG4gICAgYWR2YW5jZWRTZWFyY2gsXG4gICAgdGFibGVUYWIsXG4gICAgcHJvZHVjdFRhYixcbiAgICBzY2FubmVyc1RhYixcbiAgICB2YWxpZGF0b3JzVGFiLFxuICAgIGJyYW5kc0NhdGFsb2csXG4gICAgdW5pdHNDYXRhbG9nLFxuICAgIGdyb3Vwc0NhdGFsb2csXG4gICAgbGluZXNDYXRhbG9nLFxuICAgIGNoYWluc0NhdGFsb2csXG4gICAgcmVnaW9uc0NhdGFsb2csXG4gICAgdXNlcnNDYXRhbG9nLFxuICAgIGdyYXBoVGFiQ29tcGFyZSxcbiAgICBzdGF0aXN0aWNSZXBvcnQsXG4gICAgcHJvZHVjdFJlcG9ydCxcbiAgICBzY2Fuc1JlcG9ydCxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0zDrW5lYXMnLFxuICAgIHNlYXJjaDogJ0J1c2NhciB1bmEgbMOtbmVhJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdCdXNjYXIgcG9yIG5vbWJyZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQcOxYWRpciBsw61uZWEnLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhciBSZXBvcnRlJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWVfbGluZTogJ0zDrW5lYScsXG4gICAgICAgICAgICBuYW1lX2dyb3VwOiAnR3J1cG8nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBsYSBsw61uZWEgY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlbGltaW5hZG8gbGEgbMOtbmVhIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVkaXRhZG8gbGEgbMOtbmVhIGNvcnJlY3RhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBkZXNjYXJnYWRvIGVsIHJlcG9ydGUgZXhpdG9zYW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhciBsw61uZWEnLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdGFyIGzDrW5lYScsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdHdWFyZGFyJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWFyJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnTUlTSU9ORVMnLFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnVMOtdHVsbycsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rlc2NyaXBjacOzbicsXG4gICAgICAgICAgICBjYXB0dXJlX3BvaW50czogJ1B1bnRvcyBwb3IgY2FwdHVyYXMnLFxuICAgICAgICAgICAgbWlzc2lvbl9wb2ludHM6ICdQdW50b3MgcG9yIG1pc2nDs24nLFxuICAgICAgICAgICAgc3RhcnRfZGF0ZTogJ0ZlY2hhIGRlIGluaWNpbycsXG4gICAgICAgICAgICBlbmRfZGF0ZTogJ0ZlY2hhIGRlIGZpbicsXG4gICAgICAgICAgICByZWdpb25zOiAnUmVnacOzbicsXG4gICAgICAgICAgICBhY3Rpb25zOiAnQWNjaW9uZXMnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBhZGQ6ICdOdWV2YSBtaXNpw7NuJyxcbiAgICB9LFxuXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgY3JlYXRlTWlzc2lvbjoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uICcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBsYSBtaXNpw7NuIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgZXJyb3IuICcsXG4gICAgICAgICAgICAgICAgZHVwbGljYXRlZE1lc3NhZ2U6ICdFbCBUaXR1bG8gc2UgZHVwbGljw7MuJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnQWxnbyBzYWxpw7MgbWFsLiAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGlhbG9nOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnRXN0YSBvcGVyYWNpw7NuIG5vIHNlIHB1ZWRlIHJlYWxpemFyIGRlYmlkbyBhIHF1ZSBsYSBtaXNpw7NuIHRpZW5lIGNhcHR1cmFzIGFzb2NpYWRhcycsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgYWNlcHQ6ICdBY2VwdGFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZDoge1xuICAgICAgICAgICAgdGl0bGU6ICdOdWV2YSBtaXNpw7NuJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWxhcicsXG4gICAgICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgbWlzacOzbicsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsYXInLFxuICAgICAgICAgICAgICAgIGVkaXQ6ICdlZGl0YXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUw610dWxvIChvYmxpZ2F0b3JpbyknLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEZXNjcmlwY2nDs24gKG9ibGlnYXRvcmlvIC8gbcOheGltbyAyNTUgY2FyYWN0ZXJlcyknLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnTGEgZGVzY3JpcGNpw7NuIGRlYmUgdGVuZXIgcG9yIGxvIG1lbm9zIDUgY2FyYWN0ZXJlcy4nLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdMYSBkZXNjcmlwY2nDs24gZGViZSB0ZW5lciBtw6F4aW1vIDI1NSBjYXJhY3RlcmVzLicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzdGFydERhdGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0ZlY2hhIGRlIGluaWNpbycsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdMYSBmZWNoYSBkZSBpbmljaW8gbm8gZXMgdsOhbGlkYScsXG4gICAgICAgICAgICAgICAgICAgIGdyZWF0ZXJUaGFuOiAnTGEgZmVjaGEgZGUgaW5pY2lvIGRlYmUgc2VyIG1heW9yIGFsIGTDrWEgZGUgYXllci4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kRGF0ZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRmVjaGEgZGUgZmluJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0xhIGZlY2hhIGRlIGZpbiBubyBlcyB2w6FsaWRhJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lvbjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2VsZWNjaW9uYSB1bmEgcmVnacOzbicsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdEZWJlcyBzZWxlY2Npb25hciBwb3IgbG8gbWVub3MgdW5hIHJlZ2nDs24nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWlzc2lvblBvaW50czoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHVudGFqZSBkZSBsYSBtaXNpw7NuJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ0VsIHB1bnRhamUgZGViZSBzZXIgdW4gbsO6bWVybyB2w6FsaWRvJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhcHR1cmVQb2ludHM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1B1bnRhamUgZGUgY2FwdHVyYScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdFbCBwdW50YWplIGRlYmUgc2VyIHVuIG7Dum1lcm8gdsOhbGlkbycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgb3B0aW9uOiB7XG4gICAgICAgIHZhbGlkYXRpb25zOiAnVmFsaWRhY2nDs24nLFxuICAgICAgICBtaXNzaW9uczogJ01pc2lvbmVzJyxcbiAgICAgICAgY2FwdHVyZXM6ICdDYXB0dXJhcycsXG4gICAgICAgIHByb2R1Y3RzOiAnUHJvZHVjdG9zJyxcbiAgICAgICAgcmFua2luZ3M6ICdSYW5raW5ncycsXG4gICAgICAgIGNhdGFsb2dzOiAnQ2F0w6Fsb2dvcycsXG4gICAgICAgIGVkaXRQcm9maWxlOiAnRWRpdGFyIHBlcmZpbCcsXG4gICAgICAgIHNpZ25PdXQ6ICdDZXJyYXIgc2VzacOzbicsXG4gICAgICAgIHJlcG9ydHM6IHtcbiAgICAgICAgICAgIGdlb2xvY2FsaXphdGlvbjogJ1JlcG9ydGUgZGUgZ2VvbG9jYWxpemFjacOzbicsXG4gICAgICAgICAgICBzdGF0aXN0aWM6ICdSZXBvcnRlIGNvbXBhcmF0aXZvIGRlIHByZWNpb3MnLFxuICAgICAgICAgICAgcHJvZHVjdDogJ1JlcG9ydGUgZGUgcHJvZHVjdG8nLFxuICAgICAgICAgICAgc2NhbnM6ICdSZXBvcnRlIGRlIGNhcHR1cmFzJyxcbiAgICAgICAgfSxcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSZXBvcnRlIGRlIFByb2R1Y3RvJyxcbiAgICBuZXdTZXJhY2g6ICdOdWV2YSBCw7pzcXVlZGEnLFxuICAgIHBsYWNlaG9sZGVyU2VhcmNoOiAnTm9tYnJlIC8gQ8OzZGlnbycsXG4gICAgc2VsZWN0ZWQ6ICdTZWxlY2Npb25hZG8nLFxuICAgIHNlYXJjaDogJ0J1c2NhcicsXG4gICAgbXlMaXN0OiAnVmVyIG1pIGxpc3RhJyxcbiAgICBnZW5lcmFsU2VhcmNoOiAnQsO6c3F1ZWRhIEdlbmVyYWwnLFxuICAgIHNhdmVMaXN0OiAnR3VhcmRhciBhIG1pIGxpc3RhJyxcbiAgICBncmFwaGljOiAnR3LDoWZpY2EnLFxuICAgIGNsZWFyR3JhcGhpYzogJ0xpbXBpYXIgR3LDoWZpY2EnLFxuICAgIGVtcHR5U3RhdGU6ICdIYWNlciBiw7pzcXVlZGEgcGFyYSB2ZXIgcmVzdWx0YWRvcycsXG4gICAgZW1wdEdyYXBoeVN0YXRlOiAnR3JhZmljYXIgcGFyYSB2ZXIgcmVzdWx0YWRvcycsXG4gICAgc2F2ZVByb2R1Y3RzOiAnUHJvZHVjdG9zIGhhbiBzaWRvIGFncmVnYWRvcyBhIGxhIGxpc3RhJyxcbiAgICBzYXZlUHJvZHVjdHNFcnJvcjogJ1VuIGVycm9yIG9jdXJyaW8gbWllbnRyYXMgc2UgZ3VhcmRhYmEgbGEgbGlzdGEnLFxuICAgIHBhcmFtZXRlcjogJ1BhcmFtZXRyb3MnLFxuICAgIHZhbHVlczogJ1ZhbG9yJyxcbiAgICBzdGFydERhdGU6ICdGZWNoYSBJbmljaW8nLFxuICAgIGVuZERhdGU6ICdGZWNoYSBUZXJtaW5hY2nDs24nLFxuICAgIGRlbGV0ZUZpbHRlcnM6IFwiTGltcGlhciBGaWx0cm9zXCIsXG4gICAgZG93bmxvYWQ6IFwiRGVzY2FyZ2FyXCIsXG4gICAgbmFtZU9yQ29kZTogXCJOb21icmUgLyBDw7NkaWdvIGRlbCBwcm9kdWN0b1wiLFxuICAgIHN1Y2Nlc3NEb3dubG9hZDogXCJSZXBvcnRlIGRlc2NhcmdhZG8gZXhpdG9zYW1lbnRlXCIsXG4gICAgZGVsZXRlRnJvbUxpc3Q6IFwiQm9ycmFyIGRlIG1pIGxpc3RhXCIsXG4gICAgc3VjY2Vzc0RlbGV0ZTogXCJMb3MgcHJvZHVjdG9zIGhhbiBzaWRvIGJvcnJhZG9zIGRlIGxhIGxpc3RhXCIsXG4gICAgZXJyb3JEZWxldGU6IFwiVW4gZXJyb3Igb2N1cnJpbyBtaWVudHJhcyBzZSByZW1vdmlhbiBwcm9kdWN0b3MgZGUgbGEgbGlzdGFcIixcbiAgICBlcnJvckRvd25sb2FkOiBcIlVuICBlcnJvciBvY3VycmlvIG1pZW50cmFzIHNlIGRlc2NhcmdhYmEgZWwgcmVwb3J0ZVwiLFxuICAgIG5vU2VsZWN0ZWQ6IFwiTm8gaGF5IHByb2R1Y3RvcyBzZWxlY2Npb25hZG9zLi4uLi5cIixcbiAgICBjYXJkOiB7XG4gICAgICAgIGlkOiBcIklEOlwiLFxuICAgICAgICBiYXJjb2RlOiBcIkPDk0RJR08gREUgQkFSUkFTOlwiLFxuICAgICAgICBicmFuZDogXCJNQVJDQTpcIixcbiAgICAgICAgbGluZTogXCJMSU5FQTpcIixcbiAgICAgICAgZ3JvdXA6IFwiR1JVUE86XCIsXG4gICAgICAgIHVuaXQ6IFwiVU5JREFEOlwiLFxuICAgICAgICB0eXBlOiBcIlRJUE86XCIsXG4gICAgICAgIG5hbWU6IFwiTk9NQlJFOlwiLFxuICAgICAgICBsb3dlcl9wcmljZTogXCJNRU5PUiBQUkVDSU86XCIsXG4gICAgICAgIGhpZ2hlc3RfcHJpY2U6IFwiTUFZT1IgUFJFQ0lPOlwiLFxuICAgICAgICBncmFtbWFnZTogXCJHUkFNQUpFIC8gVU5JREFEOlwiLFxuICAgICAgICByZWNlbnRseTogXCJSZWNpZW50ZVwiLFxuICAgICAgICBoaWdoZXI6IFwiTcOhcyBhbHRvXCIsXG4gICAgICAgIGxvd2VyOiBcIk3DoXMgYmFqb1wiLFxuICAgICAgICBsb3dlclByb21vdGlvbjogXCJNw6FzIGJham8gY29uIGRlc2N1ZW50b1wiLFxuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGV0YWlsOntcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIHByb2R1Y3RJZDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnSUQgUHJvZHVjdG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0PDs2RpZ28gZGUgYmFycmFzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdOb21icmUnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ0VsIGNhbXBvIGRlYmUgY29udGVuZXIgYWwgbWVub3MgZG9zIGNhcmFjdGVyZXMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01hcmNhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUaXBvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3J1cG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0zDrW5lYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcmFtYWplIC8gQ2FudGlkYWQnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiAnRWwgZ3JhbWFqZSBvIGNhbnRpZGFkIGRlYmUgc2VyIHVuIG7Dum1lcm8gdsOhbGlkbzogQ29uIGRvcyBkZWNpbWFsZXMgbcOheGltby4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVW5pZGFkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYWluSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0ZvdG8gcHJpbmNpcGFsJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdGb3RvIGRlIHByZWNpbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWluUHJpY2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1ByZWNpbyBtw61uaW1vJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtYXhQcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lvIG3DoXhpbW8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZGV0YWlsc0NvbnRhaW5lcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdGb3RvIGRlbCBwcm9kdWN0bycsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbGFyJyxcbiAgICAgICAgICAgIGNoYW5nZUltYWdlOiAnQ2FtYmlhciBpbWFnZW4nLFxuICAgICAgICAgICAgZWRpdEluZm9ybWF0aW9uOiAnRWRpdGFyIGluZm9ybWFjacOzbicsXG4gICAgICAgICAgICBzYXZlSW5mb3JtYXRpb246ICdHdWFyZGFyIGluZm9ybWFjacOzbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGxpc3RQcmljZTogJ0dyw6FmaWNhIC0gUHJlY2lvIGRlIGxpc3RhJyxcbiAgICAgICAgdW5pdGFyeVByaWNlOiAnR3LDoWZpY2EgLSBQcmVjaW8gdW5pdGFyaW8nLFxuICAgICAgICBwcmljZUhpc3Rvcnk6ICdIaXN0b3JpYWwgZGUgcHJlY2lvcycsXG4gICAgICAgIGRldGFpbDogJ0RldGFsbGUnLFxuICAgIH0sXG4gICAgc3RhcnREYXRlOiAnRmVjaGEgaW5pY2lhbCcsXG4gICAgZW5kRGF0ZTogJ0ZlY2hhIGZpbmFsJyxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBicmFuY2hPZmZpY2U6ICdTdWN1cnNhbCcsXG4gICAgICAgICAgICBtaW5QcmljZTogJ1ByZWNpbyBtw61uaW1vJyxcbiAgICAgICAgICAgIG1heFByaWNlOiAnUHJlY2lvIG3DoXhpbW8nLFxuICAgICAgICAgICAgY3VycmVudFByaWNlOiAnUHJlY2lvIGFjdHVhbCcsXG4gICAgICAgICAgICBhdmVyYWdlUHJpY2U6ICdQcmVjaW8gcHJvbWVkaW8nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzZWVIaXN0b3J5OiAnVmVyIGhpc3RvcmlhbCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZXRhaWw6e1xuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgcHJvZHVjdElkOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdJRCBQcm9kdWN0bycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ8OzZGlnbyBkZSBiYXJyYXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ05vbWJyZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01hcmNhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUaXBvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3J1cG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0zDrW5lYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcmFtYWplIC8gQ2FudGlkYWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1VuaWRhZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbkltYWdlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdGb3RvIHByaW5jaXBhbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VJbWFnZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRm90byBkZSBwcmVjaW8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2hhbmdlSW1hZ2U6ICdDYW1iaWFyIGltYWdlbicsXG4gICAgICAgICAgICBlZGl0SW5mb3JtYXRpb246ICdFZGl0YXIgaW5mb3JtYWNpw7NuJyxcbiAgICAgICAgICAgIHNhdmVJbmZvcm1hdGlvbjogJ0d1YXJkYXIgaW5mb3JtYWNpw7NuJyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1BST0RVQ1RPUycsXG4gICAgZmlsdGVyczoge1xuICAgICAgICBzZWFyY2hGaWVsZDogJ0J1c2NhciBwb3Igbm9tYnJlIG8gY8OzZGlnbyBkZWwgcHJvZHVjdG8nLFxuICAgICAgICBzdGFydERhdGU6ICdEZXNkZScsXG4gICAgICAgIGVuZERhdGU6ICdIYXN0YScsXG4gICAgICAgIHVwZGF0ZWRBdDogJ0ZlY2hhIGRlIG1vZGlmaWNhY2nDs24nLFxuICAgICAgICBjcmVhdGVkQXQ6ICdGZWNoYSBkZSBBbHRhJyxcbiAgICAgICAgcGFyYW06ICdQYXLDoW1ldHJvJyxcbiAgICAgICAgdmFsdWU6ICdWYWxvcicsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ0J1c2NhcicsXG4gICAgICAgIGNsZWFuRmlsdGVyOiAnTGltcGlhciBmaWx0cm9zJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXInLFxuICAgICAgICBjb21wYXJhdGl2ZUNoYXJ0OiAnR3JhZmljYXIgY29tcGFyYXRpdm9zJyxcbiAgICB9LFxuICAgIG9wdGlvbnNDYXRhbG9nOiB7XG4gICAgICAgIGJyYW5kc0NhdGFsb2c6ICdNYXJjYScsXG4gICAgICAgIGdyb3Vwc0NhdGFsb2c6ICdHcnVwbycsXG4gICAgICAgIGxpbmVzQ2F0YWxvZzogJ0zDrW5lYScsXG4gICAgICAgIHN0b3Jlc0NhdGFsb2c6ICdDYWRlbmEnLFxuICAgICAgICB1bml0c0NhdGFsb2c6ICdVbmlkYWQnLFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmFyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICcnLFxuICAgICAgICB9XG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICBzZWxlY3RlZDogJ1NlbGVjY2lvbmFyJyxcbiAgICAgICAgICAgIHBob3RvOiAnRm90byBkZWwgcHJvZHVjdG8nLFxuICAgICAgICAgICAgcHJvZHVjdDogJ05vbWJyZScsXG4gICAgICAgICAgICBiYXJjb2RlOiAnQ8OzZGlnbycsXG4gICAgICAgICAgICBicmFuZDogJ01hcmNhJyxcbiAgICAgICAgICAgIHR5cGU6ICdUaXBvJyxcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6ICdGZWNoYSBkZSBjYXB0dXJhJyxcbiAgICAgICAgICAgIHVwZGF0ZWRfYXQ6ICdGZWNoYSBkZSBtb2RpZmljYWNpw7NuJyxcbiAgICAgICAgICAgIGdyYW1tYWdlX3F1YW50aXR5OiAnQ2FudGlkYWQnLFxuICAgICAgICAgICAgdW5pdDogJ1VuaWRhZCcsXG4gICAgICAgICAgICBncm91cDogJ0dydXBvJyxcbiAgICAgICAgICAgIGxpbmU6ICdMw61uZWEnLFxuICAgICAgICAgICAgaGlnaGVzdF9wcmljZTogJ1ByZWNpbyBtw6FzIGFsdG8nLFxuICAgICAgICAgICAgbG93ZXJfcHJpY2U6ICdQcmVjaW8gbcOhcyBiYWpvJyxcbiAgICAgICAgICAgIHByb21vdGlvbl9sb3dlcl9wcmljZTogJ1ByZWNpbyBtw6FzIGJham8gY29uIHByb21vY2nDs24nLFxuICAgICAgICAgICAgbGFzdF9wcmljZTogJ8OabHRpbW8gcHJlY2lvIGNhcHR1cmFkbycsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5wdXQ6IHtcbiAgICAgICAgcm9sZToge1xuICAgICAgICAgICAgbGFiZWw6ICdSb2wgKicsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIGZpcnN0X25hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTm9tYnJlIConLFxuICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICB9LFxuICAgICAgICBsYXN0X25hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQXBlbGxpZG8gcGF0ZXJubyAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgbW90aGVyX2xhc3RfbmFtZToge1xuICAgICAgICAgICAgbGFiZWw6ICdBcGVsbGlkbyBtYXRlcm5vJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgdGhlbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnVXNhciB0ZW1hIG9zY3VybycsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIGxvY2FsZToge1xuICAgICAgICAgICAgbGFiZWw6ICdDYW1iaWFyIGlkaW9tYScsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIGVtcGxveWVlX251bWJlcjoge1xuICAgICAgICAgICAgbGFiZWw6ICdOw7ptZXJvIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgY2VsbHBob25lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ07Dum1lcm8gZGUgY2VsdWxhcicsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lvbjoge1xuICAgICAgICAgICAgbGFiZWw6ICdSZWdpw7NuJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcm5hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnVXN1YXJpbyAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ29udHJhc2XDsWEgKicsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGNsb3NlOiAnQ2VycmFyJyxcbiAgICAgICAgc2F2ZTogJ0d1YXJkYXInLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSYW5raW5ncycsXG4gICAgdGFiczoge1xuICAgICAgICBjYXB0dXJpc3RzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ2NhcHR1cmlzdGFzJyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgICAgICAgICAgZW5kRGF0ZTogJ0ZlY2hhIGZpbmFsJyxcbiAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQnVzY2FyIHBvciBub21icmUgbyBuw7ptZXJvIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjbGVhckRhdGU6ICdMaW1waWFyIGZlY2hhcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdQb3NpY2nDs24nLFxuICAgICAgICAgICAgICAgICAgICBlbXBsb3llZU51bWJlcjogJ05vLiBkZSBlbXBsZWFkbycsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAnUG9yY2VudGFqZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZENhcHR1cmVzOiAnQ2FwdHVyYXMgdmFsaWRhZGFzJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAnUHVudG9zJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1ZhbGlkYWRvcmVzJyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgICAgICAgICAgZW5kRGF0ZTogJ0ZlY2hhIGZpbmFsJyxcbiAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQnVzY2FyIHBvciBub21icmUgbyBuw7ptZXJvIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjbGVhckRhdGU6ICdMaW1waWFyIGZlY2hhcycsXG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVEYXRhOiAnR2VuZXJhciBkYXRvcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG90YWw6IHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlczogJ1RvdGFsIGRlIGNhcHR1cmFzJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZWQ6ICdUb3RhbCB2YWxpZGFkYXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgICAgICAgICBjYXB0dXJlczogJ0hpc3RvcmlhbCBkZSBjYXB0dXJhcycsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkOiAnSGlzdG9yaWFsIGRlIHZhbGlkYWRhcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOdW1iZXI6ICdOby4gZGUgZW1wbGVhZG8nLFxuICAgICAgICAgICAgICAgICAgICBub21icmU6ICdOb21icmUnLFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAnUG9yY2VudGFqZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZENhcHR1cmVzOiAnQ2FwdHVyYXMgdmFsaWRhZGFzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1JlZ2lvbmVzJyxcbiAgICBzZWFyY2g6ICdCdXNjYXIgdW5hIHJlZ2nDs24nLFxuICAgIHNlYXJjaEJ5TmFtZTogJ0J1c2NhciBwb3Igbm9tYnJlICcsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdBw7FhZGlyIHJlZ2nDs24nLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhciBSZXBvcnRlJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgYWxpYXM6ICdBbGlhcycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgY3JlYWRvIGxhIHJlZ2nDs24gY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlbGltaW5hZG8gbGEgcmVnacOzbiBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGxhIHJlZ2nDs24gY29ycmVjdGFtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGRlc2NhcmdhZG8gZWwgcmVwb3J0ZSBleGl0b3NhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWFyIHJlZ2nDs24nLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdGFyIHJlZ2nDs24nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGFydERhdGU6ICdGZWNoYSBpbmljaWFsJyxcbiAgICBlbmREYXRlOiAnRmVjaGEgZmluYWwnLFxuICAgIGlucHV0OiB7XG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdCdXNjYXIgcG9yIG5vbWJyZSBvIG7Dum1lcm8gZGUgZW1wbGVhZG8nLFxuICAgICAgICB9LFxuICAgICAgICBtaXNzaW9uOiB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ01pc2nDs24nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBjbGVhckRhdGU6ICdMaW1waWFyIGZlY2hhcycsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHJhbmtpbmc6ICdQb3NpY2nDs24nLFxuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiAnTm8uIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgZWZmaWNpZW5jeTogJ1BvcmNlbnRhamUnLFxuICAgICAgICAgICAgdmFsaWRhdGVkX2NhcHR1cmVzOiAnQ2FwdHVyYXMgdmFsaWRhZGFzJyxcbiAgICAgICAgICAgIHBvaW50czogJ1B1bnRvcycsXG4gICAgICAgIH1cbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUmVwb3J0ZSBkZSBjYXB0dXJhcycsXG4gICAgZmlsdGVyczoge1xuICAgICAgICByZWdpb246ICdSZWdpw7NuJyxcbiAgICAgICAgc2Nhbm5lcjogJ0NhcHR1cmlzdGEnLFxuICAgICAgICBtaXNzaW9uOiAnTWlzacOzbicsXG4gICAgfSxcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUmVwb3J0ZSBDb21wYXJhdGl2byBkZSBQcmVjaW9zJyxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBicmFuY2hPZmZpY2U6ICdTdWN1cnNhbCcsXG4gICAgICAgICAgICBtaW5QcmljZTogJ1ByZWNpbyBtw61uaW1vJyxcbiAgICAgICAgICAgIG1heFByaWNlOiAnUHJlY2lvIG3DoXhpbW8nLFxuICAgICAgICAgICAgY3VycmVudFByaWNlOiAnUHJlY2lvIGFjdHVhbCcsXG4gICAgICAgICAgICBhdmVyYWdlUHJpY2U6ICdQcmVjaW8gcHJvbWVkaW8nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzZWVIaXN0b3J5OiAnVmVyIGhpc3RvcmlhbCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICB0YWJsZToge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIHNjYW46ICdDYXB0dXJhJyxcbiAgICAgICAgICAgICAgICBjYXB0dXJlZEF0OiAnRmVjaGEgZGUgY2FwdHVyYScsXG4gICAgICAgICAgICAgICAgcHJpY2U6ICdQcmVjaW8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2xvc2U6ICdjZXJyYXInLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgYWN0aW9uczogJ0FjY2lvbmVzJyxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1VuaWRhZGVzJyxcbiAgICBzZWFyY2g6ICdCdXNjYXIgdW5hIHVuaWRhZCcsXG4gICAgc2VhcmNoQnlOYW1lOiAnQnVzY2FyIHBvciBub21icmUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0HDsWFkaXIgdW5pZGFkJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXIgUmVwb3J0ZScsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBuYW1lOiAnTm9tYnJlJyxcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbjogJ0FicmV2aWFjacOzbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgY3JlYWRvIGxhIHVuaWRhZCBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVsaW1pbmFkbyBsYSB1bmlkYWQgY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWRpdGFkbyBsYSB1bmlkYWQgY29ycmVjdGFtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGRlc2NhcmdhZG8gZWwgcmVwb3J0ZSBleGl0b3NhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWFyIHVuaWRhZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgdW5pZGFkJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ0d1YXJkYXInLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXInLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdVc3VhcmlvcycsXG4gICAgc2VhcmNoOiAnQnVzY2FyIHVuIHVzdWFyaW8nLFxuICAgIHNlYXJjaEJ5TmFtZTogJ0J1c2NhciBwb3Igbm9tYnJlLCB1c3VhcmlvLCBlbWFpbCwgZXRpcXVldGFzLCBvIG7Dum1lcm8gZGUgZW1wbGVhZG8uJyxcbiAgICB0YWdzOiAnRXRpcXVldGFzJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0NyZWFyIG51ZXZvIHVzdWFyaW8nLFxuICAgICAgICBhZGRUYWdzOiAnQWdyZWdhciBldGlxdWV0YXMnLFxuICAgICAgICBjbG9zZTogJ0NlcnJhcicsXG4gICAgICAgIGRvd25sb2FkOiAnRGVzY2FyZ2FyIFJlcG9ydGUnLFxuICAgIH0sXG4gICAgZmlsdGVyczoge1xuICAgICAgICByb2xlOiAnRmlsdHJhciBwb3Igcm9sJyxcbiAgICAgICAgcmVnaW9uOiAnRmlsdHJhciBwb3IgcmVnacOzbicsXG4gICAgICAgIGFsbFJlZ2lvbnM6ICdUb2RhcyBsYXMgcmVnaW9uZXMnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgZmlyc3RfbmFtZTogJ05vbWJyZScsXG4gICAgICAgICAgICBsYXN0X25hbWU6ICdBcGVsbGlkbyBwYXRlcm5vJyxcbiAgICAgICAgICAgIG1vdGhlcl9sYXN0X25hbWU6ICdBcGVsbGlkbyBtYXRlcm5vJyxcbiAgICAgICAgICAgIHVzZXJuYW1lOiAnVXN1YXJpbycsXG4gICAgICAgICAgICBlbWFpbDogJ0NvcnJlbyBlbGVjdHLDs25pY28nLFxuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiAnTm8uIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgIHJvbFNlbGVjdGVkOiAnUm9sJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBjcmVhZG8gZWwgdXN1YXJpbyBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVsaW1pbmFkbyBlbCB1c3VhcmlvIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVkaXRhZG8gZWwgdXN1YXJpbyBjb3JyZWN0YW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZGVzY2FyZ2FkbyBlbCByZXBvcnRlIGV4aXRvc2FtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXIgdXN1YXJpbycsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgdXN1YXJpbycsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdHdWFyZGFyJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWFyJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgIGVuZERhdGU6ICdGZWNoYSBmaW5hbCcsXG4gICAgaW5wdXQ6IHtcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0J1c2NhciBwb3Igbm9tYnJlIG8gbsO6bWVybyBkZSBlbXBsZWFkbycsXG4gICAgICAgIH0sXG4gICAgICAgIG1pc3Npb246IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTWlzacOzbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGNsZWFyRGF0ZTogJ0xpbXBpYXIgZmVjaGFzJyxcbiAgICAgICAgZ2VuZXJhdGVEYXRhOiAnR2VuZXJhciBkYXRvcycsXG4gICAgfSxcbiAgICB0b3RhbDoge1xuICAgICAgICBjYXB0dXJlczogJ1RvdGFsIGRlIGNhcHR1cmFzJyxcbiAgICAgICAgdmFsaWRhdGVkOiAnVG90YWwgdmFsaWRhZGFzJyxcbiAgICB9LFxuICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgY2FwdHVyZXM6ICdIaXN0b3JpYWwgZGUgY2FwdHVyYXMnLFxuICAgICAgICB2YWxpZGF0ZWQ6ICdIaXN0b3JpYWwgZGUgdmFsaWRhZGFzJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiAnTsO6bSBkZSBlbXBsZWFkbycsXG4gICAgICAgICAgICBmdWxsTmFtZTogJ05vbWJyZScsXG4gICAgICAgICAgICBlZmZpY2llbmN5OiAnUG9yY2VudGFqZScsXG4gICAgICAgICAgICB1c2VyVmFsaWRhdGVzOiAnQ2FwdHVyYXMgdmFsaWRhZGFzJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiaW1wb3J0IGdldCBmcm9tICdsb2Rhc2guZ2V0J1xuXG4vLyBMT0NBTEVTXG5pbXBvcnQgZXMgZnJvbSAnLi9lcydcbmltcG9ydCBlbiBmcm9tICcuL2VuJ1xuXG5jb25zdCBsb2NhbGVzID0ge1xuICAgIGVzLFxuICAgIGVuLFxufVxuXG5leHBvcnQgY29uc3QgZ2V0STE4bkxhYmVsID0gKGxvY2FsZSwga2V5KSA9PiAoXG4gICAgZ2V0KGxvY2FsZXNbbG9jYWxlXSwga2V5KSB8fCAnJ1xuKVxuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlVGFibGVIZWFkZXIgPSAobG9jYWxlLCBoZWFkZXJzLCBwYXRoKSA9PiAoXG4gICAgaGVhZGVycy5tYXAoKGhlYWRlcikgPT4gKHtcbiAgICAgICAgLi4uaGVhZGVyLFxuICAgICAgICBsYWJlbDogZ2V0STE4bkxhYmVsKGxvY2FsZSwgYCR7cGF0aH0uJHtoZWFkZXIua2V5fWApLFxuICAgIH0pKVxuKVxuXG5leHBvcnQgY29uc3QgdHJhbnNsYXRlVGFibGVDb21wbGV4SGVhZGVyID0gKGxvY2FsZSwgaGVhZGVycywgcGF0aCkgPT4gKFxuICAgIGhlYWRlcnMubWFwKChoZWFkZXIpID0+ICh7XG4gICAgICAgIC4uLmhlYWRlcixcbiAgICAgICAgdGl0bGU6IGdldEkxOG5MYWJlbChsb2NhbGUsIGAke3BhdGh9LiR7aGVhZGVyLm5hbWV9YCksXG4gICAgfSkpXG4pXG4iLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzc2c0MDQgPSBlcnIubWVzc2FnZSA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SXG5cbiAgICAgIGlmIChzc2c0MDQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgbW9kOiBhbnlcbiAgICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cywgbW9kIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICAgJy80MDQnXG4gICAgICAgICAgKSlcblxuICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSB0b2xlcmF0ZSB0aGVzZSBwcm9wcyBtaXNzaW5nIGFuZCBzdGlsbCByZW5kZXIgdGhlXG4gICAgICAgICAgLy8gcGFnZSBpbnN0ZWFkIG9mIGZhbGxpbmcgYmFjayB0byBfZXJyb3I/XG4gICAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19OX1NTRykge1xuICAgICAgICAgICAgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoJy80MDQnLCAnLzQwNCcsIHRydWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIC8vIG5vbi1mYXRhbCBmYWxsYmFjayB0byBfZXJyb3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmltcG9ydCB7IEhlYWRlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcblxuaW1wb3J0IHMgZnJvbSAnLi9yYW5raW5ncy5tb2R1bGUuc2NzcydcbmltcG9ydCBPcHRpb25MaXN0IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvb3B0aW9uTGlzdC9PcHRpb25MaXN0JztcbmltcG9ydCBTY2FubmVyc1RhYiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3NjYW5uZXJzVGFiL1NjYW5uZXJzVGFiJztcbmltcG9ydCBWYWxpZGF0b3JzVGFiIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvdmFsaWRhdG9yc1RhYi9WYWxpZGF0b3JzVGFiJztcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9wYWdlVGl0bGUvUGFnZVRpdGxlJztcbmltcG9ydCB7Z2V0STE4bkxhYmVsfSBmcm9tICcuLi8uLi8uLi9pMThuJ1xuaW1wb3J0IHsgZ2V0RGFya1RoZW1lLCBnZXRUaGVtZSwgSXNDdXN0b21UaGVtZSwgZ2V0TG9jYWxlIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvc2Vzc2lvbi1tYW5hZ2VtZW50J1xuaW1wb3J0IHsgYnVpbGRUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RoZW1lJztcblxuY2xhc3MgUmFua2luZ3NQYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxhbnksIGFueT4ge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBvcHRpb25zOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IDEsXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDYXB0dXJpc3RhcycsXG4gICAgICAgICAgICAgICAga2V5OiAnY2FwdHVyaXN0cycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhbHVlOiAyLFxuICAgICAgICAgICAgICAgIGxhYmVsOiAnVmFsaWRhZG9yZXMnLFxuICAgICAgICAgICAgICAgIGtleTogJ3ZhbGlkYXRvcnMnLFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBvcHRpb25TZWxlY3RlZDogMSxcbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcblxuICAgICAgICBjb25zdCBpc0N1c3RvbSA9IElzQ3VzdG9tVGhlbWUoKTtcbiAgICAgICAgY29uc3QgaGFzRGFya1RoZW1lID0gZ2V0RGFya1RoZW1lKCkgPT09ICcxJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgaWYgKGhhc0RhcmtUaGVtZSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbScpXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnZGFya21vZGUnKVxuICAgICAgICB9IFxuICAgICAgICBcbiAgICAgICAgaWYoaXNDdXN0b20pIHtcbiAgICAgICAgICAgIGNvbnN0IHRoZW1lID0gZ2V0VGhlbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaGVtZSA9IGJ1aWxkVGhlbWUodGhlbWUpO1xuICAgICAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gY3VycmVudFRoZW1lO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LmFkZCgnY3VzdG9tJyk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBvcHRpb25TZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZVxuICAgICAgICBjb25zdCBsb2NhbGUgPSBnZXRMb2NhbGUoKVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnN0YXRlLm9wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5sYWJlbCA9IGdldEkxOG5MYWJlbChsb2NhbGUsIGByYW5raW5ncy50YWJzLiR7b3B0aW9uLmtleX0udGl0bGVgKVxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvblxuICAgICAgICB9KVxuXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgPEhlYWRlciBsb2NhbGU9e2xvY2FsZX0vPlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuY29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPFBhZ2VUaXRsZSB0aXRsZT1cIlJhbmtpbmdzXCIgLz5cblxuICAgICAgICAgICAgICAgICAgICA8T3B0aW9uTGlzdFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uT3B0aW9uU2VsZWN0ZWQ9eyh2KSA9PiB0aGlzLnNldFN0YXRlKHsgb3B0aW9uU2VsZWN0ZWQ6IHYgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25TZWxlY3RlZD17b3B0aW9uU2VsZWN0ZWR9XG4gICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAge29wdGlvblNlbGVjdGVkID09PSAxICYmIDxTY2FubmVyc1RhYiBsb2NhbGU9e2xvY2FsZX0vPn1cblxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uU2VsZWN0ZWQgPT09IDIgJiYgPFZhbGlkYXRvcnNUYWIgbG9jYWxlPXtsb2NhbGV9Lz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY29uc3Qgd2l0aFJvdXRlciA9IChwcm9wcykgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgcmV0dXJuIDxSYW5raW5nc1BhZ2Ugey4uLnByb3BzfSByb3V0ZXI9e3JvdXRlcn0gLz5cbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcjtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcInJhbmtpbmdzX2NvbnRhaW5lcl9fMVVZenpcIlxufTtcbiIsIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IGJhc2VVUkwgfSBmcm9tICcuL2Jhc2VVcmwnO1xuXG5leHBvcnQgZGVmYXVsdCBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMLHdpdGhDcmVkZW50aWFsczogZmFsc2VcbiAgLy90aW1lb3V0OiAxMDAwXG59KSIsImV4cG9ydCBjb25zdCBiYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTDtcbmV4cG9ydCBjb25zdCBiYXNlVVJMR2VvcmVmID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR0VPUkVGX0FQSTtcbmV4cG9ydCBjb25zdCBnZW9yZWZBcGlLZXkgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HRU9SRUZfQVBJX0tFWTtcbiIsImltcG9ydCBhcGkgZnJvbSAnLi9hcGknXG5pbXBvcnQgeyBnZXRIZWFkZXIgfSBmcm9tICcuL3Nlc3Npb24tbWFuYWdlbWVudCdcbmltcG9ydCB7YmFzZVVSTEdlb3JlZiwgZ2VvcmVmQXBpS2V5fSBmcm9tICcuL2Jhc2VVcmwnO1xuXG50eXBlIE9wdGlvbnMgPVxue3ZhbHVlOiBzdHJpbmcsIGxhYmVsOiBzdHJpbmd9XG5cbnR5cGUgTGluZSA9IHt2YWx1ZTogc3RyaW5nLCBsYWJlbDogc3RyaW5nLCBncm91cDogc3RyaW5nIH1cblxuY29uc3QgZ2V0Um9sZXNDYXRhbG9nID0gYXN5bmMgKCk6IFByb21pc2U8QXJyYXk8T3B0aW9ucz4+ID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCdhcGkvcm9sZXMnLCB7IGhlYWRlcnM6IGdldEhlYWRlcigpIH0pXG4gICAgcmV0dXJuIHJlcy5kYXRhLmRhdGEubWFwKChyb2w6IHtuYW1lOiBzdHJpbmd9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcm9sLm5hbWUsXG4gICAgICAgICAgICBsYWJlbDogcm9sLm5hbWUsXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBnZXRSZWdpb25zQ2F0YWxvZyA9IGFzeW5jICgpOiBQcm9taXNlPEFycmF5PE9wdGlvbnM+PiA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnYXBpL3JlZ2lvbnMnLCB7IGhlYWRlcnM6IGdldEhlYWRlcigpIH0pXG4gICAgcmV0dXJuICByZXMuZGF0YS5kYXRhLm1hcCgocmVnaW9uOiB7bmFtZTogc3RyaW5nLCBpZDogbnVtYmVyfSkgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHJlZ2lvbi5pZCxcbiAgICAgICAgICAgIGxhYmVsOiByZWdpb24ubmFtZSxcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGdldFJlZ2lvbnNMYWJlbENhdGFsb2cgPSBhc3luYyAoKTogUHJvbWlzZTxBcnJheTxPcHRpb25zPj4gPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJ2FwaS9yZWdpb25zJywgeyBoZWFkZXJzOiBnZXRIZWFkZXIoKSB9KVxuICAgIHJldHVybiAgcmVzLmRhdGEuZGF0YS5tYXAoKHJlZ2lvbjoge25hbWU6IHN0cmluZywgaWQ6IG51bWJlcn0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWdpb24ubmFtZSxcbiAgICAgICAgICAgIGxhYmVsOiByZWdpb24ubmFtZSxcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGdldExhYmVsc0NhdGFsb2cgPSBhc3luYyAoKTogUHJvbWlzZTxBcnJheTxPcHRpb25zPj4gPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJ2FwaS9sYWJlbHMnLCB7IGhlYWRlcnM6IGdldEhlYWRlcigpIH0pXG4gICAgcmV0dXJuIHJlcy5kYXRhLmRhdGEubWFwKChsYWJlbDoge2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiBsYWJlbC5pZCxcbiAgICAgICAgICAgIGxhYmVsOiBsYWJlbC5uYW1lXG4gICAgICAgIH1cbiAgICB9KVxuXG59XG5cbmNvbnN0IGdldEdyb3Vwc0NhdGFsb2cgPSBhc3luYyAoKTogUHJvbWlzZTxBcnJheTxPcHRpb25zPj4gPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJ2FwaS9ncm91cHMvbGlzdCcsIHsgaGVhZGVyczogZ2V0SGVhZGVyKCkgfSlcbiAgICByZXR1cm4gcmVzLmRhdGEuZ3JvdXAubWFwKChncm91cDoge2lkOiBudW1iZXIsIG5hbWU6IHN0cmluZ30pID0+e1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGdyb3VwLmlkLFxuICAgICAgICAgICAgbGFiZWw6IGdyb3VwLm5hbWVcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGdldE1pc3Npb25zQ2F0YWxvZyA9IGFzeW5jICgpOiBQcm9taXNlPEFycmF5PE9wdGlvbnM+PiA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGV4dFNlYXJjaDogJycsXG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5wb3N0KCdhcGkvbWlzc2lvbnMvbGlzdCcsIGRhdGEsIHsgaGVhZGVyczogZ2V0SGVhZGVyKCkgfSlcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzLmRhdGEpLm1hcChtaXNzaW9uS2V5ID0+e1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IG1pc3Npb25LZXksXG4gICAgICAgICAgICBsYWJlbDogcmVzLmRhdGFbbWlzc2lvbktleV1cbiAgICAgICAgfVxuICAgIH0gKVxufVxuY29uc3QgZ2V0TWlzc2lvbnNWYWxpZGF0aW9uID0gYXN5bmMgKCk6IFByb21pc2U8QXJyYXk8T3B0aW9ucz4+ID0+IHtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkuZ2V0KCdhcGkvbWlzc2lvbnMvbGlzdC12YWxpZGF0aW9uJywgeyBoZWFkZXJzOiBnZXRIZWFkZXIoKSB9KVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXMuZGF0YSkubWFwKG1pc3Npb25LZXkgPT57XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogbWlzc2lvbktleSxcbiAgICAgICAgICAgIGxhYmVsOiByZXMuZGF0YVttaXNzaW9uS2V5XVxuICAgICAgICB9XG4gICAgfSApXG59XG5cbmNvbnN0IGdldE1pc3Npb25zQ2F0YWxvZ0J5TWlzc2lvbiA9IGFzeW5jIChtaXNzaW9uOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5PE9wdGlvbnM+PiA9PiB7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGV4dFNlYXJjaDogbWlzc2lvbixcbiAgICB9XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBhcGkucG9zdCgnYXBpL21pc3Npb25zL2xpc3QnLCBkYXRhLCB7IGhlYWRlcnM6IGdldEhlYWRlcigpIH0sKVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhyZXMuZGF0YSkubWFwKG1pc3Npb25LZXkgPT57XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogbWlzc2lvbktleSxcbiAgICAgICAgICAgIGxhYmVsOiByZXMuZGF0YVttaXNzaW9uS2V5XVxuICAgICAgICB9XG4gICAgfSApXG59XG5cbmNvbnN0IGdldFVuaXRzQ2F0YWxvZyA9IGFzeW5jICgpOiBQcm9taXNlPEFycmF5PE9wdGlvbnM+PiA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnYXBpL3VuaXRzL2xpc3QnLCB7IGhlYWRlcnM6IGdldEhlYWRlcigpIH0pXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHJlcy5kYXRhLmRhdGEpLm1hcCh1bml0S2V5ID0+e1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IHVuaXRLZXksXG4gICAgICAgICAgICBsYWJlbDogcmVzLmRhdGEuZGF0YVt1bml0S2V5XVxuICAgICAgICB9XG4gICAgfSApXG59XG5cbmNvbnN0IGdldEJyYW5kc0NhdGFsb2cgPSBhc3luYyAoKTogUHJvbWlzZTxBcnJheTxPcHRpb25zPj4gPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJ2FwaS9icmFuZHMvbGlzdCcsIHsgaGVhZGVyczogZ2V0SGVhZGVyKCkgfSlcbiAgICByZXR1cm4gT2JqZWN0LmtleXMocmVzLmRhdGEuZGF0YSkubWFwKGJyYW5kS2V5ID0+e1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmFsdWU6IGJyYW5kS2V5LFxuICAgICAgICAgICAgbGFiZWw6IHJlcy5kYXRhLmRhdGFbYnJhbmRLZXldXG4gICAgICAgIH1cbiAgICB9IClcbn1cblxuY29uc3QgZ2V0U3RvcmVzQ2F0YWxvZyA9IGFzeW5jICgpOiBQcm9taXNlPEFycmF5PE9wdGlvbnM+PiA9PiB7XG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXBpLmdldCgnYXBpL3N0b3JlL2xpc3QnLCB7IGhlYWRlcnM6IGdldEhlYWRlcigpIH0pXG4gICAgY29uc3Qgc3RvcmVzID0gT2JqZWN0LmtleXMocmVzLmRhdGEpLm1hcChzdG9yZUtleSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogc3RvcmVLZXksXG4gICAgICAgICAgICBsYWJlbDogcmVzLmRhdGFbc3RvcmVLZXldXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgc3RvcmVzLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgaWYgKGEubGFiZWwudG9Mb3dlckNhc2UoKSA8IGIubGFiZWwudG9Mb3dlckNhc2UoKSkge1xuICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYS5sYWJlbC50b0xvd2VyQ2FzZSgpID4gYi5sYWJlbC50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIDBcbiAgICB9KVxuXG4gICAgcmV0dXJuIHN0b3Jlc1xufVxuXG5jb25zdCBnZXRMaW5lc0NhdGFsb2cgPSBhc3luYyAoKTogUHJvbWlzZTxBcnJheTxMaW5lPj4gPT4ge1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGFwaS5nZXQoJ2FwaS9saW5lcy9saXN0JywgeyBoZWFkZXJzOiBnZXRIZWFkZXIoKSB9KVxuICAgIHJldHVybiByZXMuZGF0YS5saW5lcy5tYXAoKGxpbmU6IHtpZDogbnVtYmVyLCBuYW1lOiBzdHJpbmcsIGlkX2dyb3VwOiBudW1iZXJ9KSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogbGluZS5pZCxcbiAgICAgICAgICAgIGxhYmVsOiBsaW5lLm5hbWUsXG4gICAgICAgICAgICBncm91cDogbGluZS5pZF9ncm91cCxcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IGdldEdlb2xvY2F0aW9uQ2F0YWxvZyA9IGFzeW5jICgpOiBQcm9taXNlPEFycmF5PExpbmU+PiA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkoe1xuICAgICAgICB1cmw6IFwiYXBpL3BsYWNlc1wiLFxuICAgICAgICBiYXNlVVJMOiBiYXNlVVJMR2VvcmVmLFxuICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBBcGktS2V5ICR7Z2VvcmVmQXBpS2V5fWAgfSxcbiAgICB9KVxuICAgIGxldCB0cmFuc2Zvcm1HZW9sb2NhdGlvbiA9IHJlc3BvbnNlPy5kYXRhPy5kYXRhXG4gICAgdHJhbnNmb3JtR2VvbG9jYXRpb24gPSB0cmFuc2Zvcm1HZW9sb2NhdGlvbi5tYXAoZ2VvbG9jYXRpb24gPT4ge1xuICAgICAgICByZXR1cm4gey4uLmdlb2xvY2F0aW9uLCB2YWx1ZTogZ2VvbG9jYXRpb24uaWQsIGxhYmVsOiBnZW9sb2NhdGlvbi5uYW1lfVxuICAgIH0pXG5cbiAgICByZXR1cm4gdHJhbnNmb3JtR2VvbG9jYXRpb25cbn1cblxuZXhwb3J0IHtcbiAgICBnZXRSb2xlc0NhdGFsb2csXG4gICAgZ2V0UmVnaW9uc0NhdGFsb2csXG4gICAgZ2V0TGFiZWxzQ2F0YWxvZyxcbiAgICBnZXRHcm91cHNDYXRhbG9nLFxuICAgIGdldE1pc3Npb25zQ2F0YWxvZyxcbiAgICBnZXRNaXNzaW9uc1ZhbGlkYXRpb24sXG4gICAgZ2V0VW5pdHNDYXRhbG9nLFxuICAgIGdldEJyYW5kc0NhdGFsb2csXG4gICAgZ2V0U3RvcmVzQ2F0YWxvZyxcbiAgICBnZXRMaW5lc0NhdGFsb2csXG4gICAgZ2V0TWlzc2lvbnNDYXRhbG9nQnlNaXNzaW9uLFxuICAgIGdldEdlb2xvY2F0aW9uQ2F0YWxvZyxcbiAgICBnZXRSZWdpb25zTGFiZWxDYXRhbG9nLFxufVxuIiwiaW1wb3J0IHsgaXNEYXRlLCBpc1ZhbGlkLCBmb3JtYXQsIHBhcnNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0ICogYXMgbG9jYWxlcyBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi9zZXNzaW9uLW1hbmFnZW1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZVN0cjogc3RyaW5nKSB7XG4gICAgaWYgKCFkYXRlU3RyIHx8IGRhdGVTdHIudHJpbSgpID09PSAnLScpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxvY2FsZSA9IGdldExvY2FsZSgpO1xuICAgIGxvY2FsZSA9IGxvY2FsZSAgPT09ICdlbicgPyAnZW5VUycgOiBsb2NhbGU7XG5cbiAgICBjb25zdCBwYXJzZWRTaG9ydCA9IHBhcnNlKGRhdGVTdHIsICdkZC9NTU0veXl5eScsIG5ldyBEYXRlKCkpO1xuXG4gICAgaWYgKGlzRGF0ZShwYXJzZWRTaG9ydCkgJiYgaXNWYWxpZChwYXJzZWRTaG9ydCkpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdChwYXJzZWRTaG9ydCwgJ2RkL01NTU0veXl5eScsIHsgbG9jYWxlOiBsb2NhbGVzW2xvY2FsZV0gfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkTG9uZyA9IHBhcnNlKGRhdGVTdHIsICd5eXl5LU1NLWRkIEhIOm1tOnNzJywgbmV3IERhdGUoKSk7XG5cbiAgICBpZiAoaXNEYXRlKHBhcnNlZExvbmcpICYmIGlzVmFsaWQocGFyc2VkTG9uZykpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdChwYXJzZWRMb25nLCAnZGQvTU1NTS95eXl5JywgeyBsb2NhbGU6IGxvY2FsZXNbbG9jYWxlXSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsImV4cG9ydCBjb25zdCBwaG90b1VybCA9ICdodHRwczovL2xhbXB0M2JkaWFnLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcmljZWNoZWNrdjInXG4iLCJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBjcmVhdGVTZXNzaW9uID0gKHRva2VuOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcm9sOiBBcnJheTxzdHJpbmc+LCBwcm9maWxlUGljdHJlOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGRhcmtfdGhlbWU/OiBudW1iZXIsIHRoZW1lPzogYW55LCBsb2dvPzogc3RyaW5nLCAgbG9jYWxlPzogc3RyaW5nKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCBuYW1lKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyb2wnLCByb2wuam9pbignfCcpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIGlkKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrX3RoZW1lJywgZGFya190aGVtZS50b1N0cmluZygpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbGUnLCBsb2NhbGUpXG5cbiAgICBpZiAodGhlbWUgIT09IG51bGwgfHwgIXRoZW1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KHRoZW1lKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICB9XG4gICAgaWYgKHByb2ZpbGVQaWN0cmUgJiYgcHJvZmlsZVBpY3RyZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlUGljdHVyZScsIGBodHRwczovL2Nkbi1wcmljZWNoZWNrLnNmbzIuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS8ke3Byb2ZpbGVQaWN0cmV9YClcbiAgICB9XG4gICAgaWYobG9nbyAmJiBsb2dvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ28nLCBgaHR0cHM6Ly9sYW1wdDNiZGlhZy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJpY2VjaGVja3YyLyR7bG9nb31gKSBcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nbycsIGAvaW1nL2xvZ28ucG5nYCkgXG4gICAgfVxufVxuXG5jb25zdCBkZWxldGVTZXNzaW9uID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2NhbGUnKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYXJrX3RoZW1lJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCduYW1lJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncm9sJylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nbycsIGAvaW1nL2xvZ28ucG5nYCkgXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGVQaWN0dXJlJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGhlbWUnKVxufVxuXG5jb25zdCBnZXRUb2tlbiA9ICgpOiBzdHJpbmcgfCBudWxsID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG5cblxuY29uc3QgZ2V0TmFtZSA9ICgpOiBzdHJpbmcgfCBudWxsID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJylcblxuY29uc3QgZ2V0SWQgPSAoKTogc3RyaW5nIHwgbnVsbCA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxuXG5jb25zdCBnZXREYXJrVGhlbWUgPSAoKTogYW55ID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrX3RoZW1lJylcbmNvbnN0IGdldExvY2FsZSA9ICgpOiBhbnkgPT4ge1xuICAgIGNvbnN0IGlzQnJvd3NlciA9ICgpID0+IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgY29uc3QgaGFzTG9jYWxlID0gKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsZScpIHx8IGZhbHNlXG5cbiAgICBsZXQgbG9jYWxlID0gJ2VzJztcblxuICAgIGlmIChpc0Jyb3dzZXIoKSAmJiBoYXNMb2NhbGUoKSkge1xuICAgICAgICBsb2NhbGUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsZScpIHx8IGxvY2FsZVxuICAgIH1cblxuICAgIHJldHVybiBsb2NhbGVcbn1cblxuY29uc3QgZ2V0UHJvZmlsZVBpY3R1cmUgPSAoKTogc3RyaW5nIHwgbnVsbCA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZVBpY3R1cmUnKVxuXG5jb25zdCBnZXRSb2xlcyA9ICgpOiBBcnJheTxzdHJpbmc+IHwgbnVsbCA9PiB7XG4gICAgY29uc3Qgcm9sZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sJylcbiAgICBpZiAocm9sZXMpXG4gICAgICAgIHJldHVybiByb2xlcy5zcGxpdCgnfCcpXG5cbiAgICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCB2YWxpZGF0ZVNlc3Npb24gPSAobmV3Um91dGU/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH0gZWxzZSBpZiAobmV3Um91dGUpIHtcbiAgICAgICAgUm91dGVyLnB1c2gobmV3Um91dGUpXG4gICAgfVxufVxuXG5jb25zdCBnZXRIZWFkZXIgPSAoKTogeyBBdXRob3JpemF0aW9uOiBzdHJpbmcgfSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIHJldHVybiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVJc0FuYWx5c3QgPSAoKSA9PiB7XG4gICAgbGV0IHJvbGUgPSAnJztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgIHJvbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sJyk7XG5cbiAgICB9XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHJvbGUgPT09ICdBbmFsaXN0YSc7XG4gICAgcmV0dXJuIHZhbGlkYXRpb247XG59XG5cbmNvbnN0IHZhbGlkYXRlSXNBZG1pbiA9ICgpID0+IHtcbiAgICBsZXQgcm9sZSA9ICcnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgcm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2wnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvbGUgPT09ICdBZG1pbic7XG59XG5cbmNvbnN0IGdldExvZ28gPSAoKSA9PiB7XG4gICAgbGV0IGxvZ28gPSBcIi9pbWcvbG9nby5wbmdcIjtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgIGxvZ28gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nbycpO1xuICAgICAgICByZXR1cm4gbG9nbztcbiAgICB9XG4gICAgcmV0dXJuIGxvZ287XG59XG5jb25zdCBJc0N1c3RvbVRoZW1lID0gKCkgPT4ge1xuICAgIGxldCBpc0N1c3RvbSA9IGZhbHNlO1xuICAgIGxldCB0aGVtZSA9IFwiXCI7XG4gICAgbGV0IG9ialRoZW1lID0ge31cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjb25zdCBoYXNEYXJrVGhlbWUgPSBnZXREYXJrVGhlbWUoKSA9PT0gJzEnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICAgICAgICBpZiAodGhlbWUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIG9ialRoZW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqVGhlbWUpLmxlbmd0aCAhPT0gMCAmJiAhaGFzRGFya1RoZW1lKSB7XG4gICAgICAgICAgICBpc0N1c3RvbSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gaXNDdXN0b207XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzQ3VzdG9tO1xufVxuXG5jb25zdCBnZXRUaGVtZSA9ICgpID0+IHtcbiAgICBsZXQgdGhlbWUgPSBcIlwiO1xuICAgIGxldCBvYmpUaGVtZSA9IHt9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHRoZW1lICE9PSBcInVuZGVmaW5lZFwiIHx8ICF0aGVtZSkge1xuICAgICAgICAgICAgb2JqVGhlbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmpUaGVtZTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialRoZW1lO1xufVxuXG5leHBvcnQge1xuICAgIGdldExvZ28sXG4gICAgSXNDdXN0b21UaGVtZSxcbiAgICBjcmVhdGVTZXNzaW9uLFxuICAgIGRlbGV0ZVNlc3Npb24sXG4gICAgZ2V0VG9rZW4sXG4gICAgZ2V0TmFtZSxcbiAgICBnZXRQcm9maWxlUGljdHVyZSxcbiAgICBnZXRSb2xlcyxcbiAgICB2YWxpZGF0ZVNlc3Npb24sXG4gICAgZ2V0SGVhZGVyLFxuICAgIGdldElkLFxuICAgIGdldERhcmtUaGVtZSxcbiAgICBnZXRMb2NhbGUsXG4gICAgdmFsaWRhdGVJc0FuYWx5c3QsXG4gICAgZ2V0VGhlbWUsXG4gICAgdmFsaWRhdGVJc0FkbWluLFxufVxuIiwiY29uc3QgTGlnaHRlbkRhcmtlbkNvbG9yID0gKGNvbDogc3RyaW5nLCBhbXQ6IG51bWJlcikgPT4ge1xuICAgIGxldCB1c2VQb3VuZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNvbFswXSA9PSBcIiNcIikge1xuICAgICAgICBjb2wgPSBjb2wuc2xpY2UoMSk7XG4gICAgICAgIHVzZVBvdW5kID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgbnVtID0gcGFyc2VJbnQoY29sLCAxNik7XG5cbiAgICBsZXQgciA9IChudW0gPj4gMTYpICsgYW10O1xuXG4gICAgaWYgKHIgPiAyNTUpIHIgPSAyNTU7XG4gICAgZWxzZSBpZiAociA8IDApIHIgPSAwO1xuXG4gICAgbGV0IGIgPSAoKG51bSA+PiA4KSAmIDB4MDBGRikgKyBhbXQ7XG5cbiAgICBpZiAoYiA+IDI1NSkgYiA9IDI1NTtcbiAgICBlbHNlIGlmIChiIDwgMCkgYiA9IDA7XG5cbiAgICBsZXQgZyA9IChudW0gJiAweDAwMDBGRikgKyBhbXQ7XG5cbiAgICBpZiAoZyA+IDI1NSkgZyA9IDI1NTtcbiAgICBlbHNlIGlmIChnIDwgMCkgZyA9IDA7XG5cbiAgICByZXR1cm4gKHVzZVBvdW5kID8gXCIjXCIgOiBcIlwiKSArIChnIHwgKGIgPDwgOCkgfCAociA8PCAxNikpLnRvU3RyaW5nKDE2KTtcblxufVxuXG5leHBvcnQgY29uc3QgYnVpbGRUaGVtZSA9ICh0aGVtZSkgPT4ge1xuICAgIGlmICh0aGVtZSAmJiBPYmplY3Qua2V5cyh0aGVtZSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpZ2h0ZW4gPSB0aGVtZT8ud2FsbHBhcGVyICYmIGAke0xpZ2h0ZW5EYXJrZW5Db2xvcih0aGVtZS53YWxscGFwZXIsIDIwKX0gIWltcG9ydGFudGA7XG4gICAgICAgIGNvbnN0IGRhcmtlbiA9IHRoZW1lPy53YWxscGFwZXIgJiYgYCR7TGlnaHRlbkRhcmtlbkNvbG9yKHRoZW1lLndhbGxwYXBlciwgLTIwKX0gIWltcG9ydGFudGA7XG4gICAgICAgIGNvbnN0IGZvbnREYXJrZW4gPSB0aGVtZT8udGV4dCAmJiBgJHtMaWdodGVuRGFya2VuQ29sb3IodGhlbWUudGV4dCwgLTIwKX0gIWltcG9ydGFudGA7XG4gICAgICAgIGNvbnN0IGZvbnRMaWdodGVyID0gdGhlbWU/LnRleHQgJiYgYCR7TGlnaHRlbkRhcmtlbkNvbG9yKHRoZW1lLnRleHQsIDYwKX0gIWltcG9ydGFudGA7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIC5jdXN0b20ge1xuICAgICAgICAgICAgLS1iZ0NvbG9yOiAke3RoZW1lLndhbGxwYXBlcn07XG4gICAgICAgICAgICAtLWZvbnQ6ICR7dGhlbWUuZm9udH07XG4gICAgICAgICAgICAtLXRleHRDb2xvcjogJHt0aGVtZS50ZXh0fTtcbiAgICAgICAgICAgIC0tYmdCdG5QcmltYXJ5OiAke3RoZW1lLnByaW1hcnlfYnV0dG9ufTtcbiAgICAgICAgICAgIC0tYmdCdG5TZWNvbmRhcnk6ICR7dGhlbWUuc2Vjb25kYXJ5X2J1dHRvbn07XG4gICAgICAgICAgICAtLWJ0blByaW1hcnlUZXh0OiAke3RoZW1lLnByaW1hcnlfdGV4dH07XG4gICAgICAgICAgICAtLWJ0blNlY29uZGFyeVRleHQ6ICR7dGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xuICAgIFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20tZm9udCwgLmN1c3RvbS1ibG9jay13b29kc21va2UsIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfb3B0aW9uc0xpc3QnXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddLCAuY3VzdG9tIFtjbGFzc149J2FkdmFuY2VkLXNlYXJjaF9jb250YWluZXInXSwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0sIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSwgLmN1c3RvbSBbY2xhc3NePSdtb2RhbF9tb2RhbF8nXSwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfZGF0YUNvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9oaXN0b3J5Q29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyQ29tcGxldGVkXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3NjYW5uZXJEYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJtb2RhbF9kaWFsb2dNb2RhbFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfcHJpY2VcIl0sIC5jdXN0b20gW2NsYXNzXj1cInByb2R1Y3RDb21wYXJlRGV0YWlsc19ncmFwaENvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfZ3JhcGhDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImRldGFpbHNDb250YWluZXJfZGV0YWlsc1wiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlciwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXIsIC5jdXN0b20tZm9udCAqLCAuY3VzdG9tLWJsb2NrLXdvb2RzbW9rZSAqLCAuY3VzdG9tIFtjbGFzc149J2hvbWVfbWVzc2FnZU5vRWxlbWVudHNDb250YWluZXInXSAqLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSAqLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9vcHRpb25zTGlzdCddICosIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2xlZnRDb250YWluZXInXSAqLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddICosIC5jdXN0b20gW2NsYXNzXj0nYWR2YW5jZWQtc2VhcmNoX2NvbnRhaW5lciddICosIC5jdXN0b20gW2NsYXNzXj1cImlucHV0X2lucHV0XCJdICosIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSAqLCAuY3VzdG9tIFtjbGFzc149J21vZGFsX21vZGFsXyddICosIC5jdXN0b20gW2NsYXNzXj1cInNlbGVjdF9zZWxlY3RcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9kYXRhQ29udGFpbmVyXCJdICosIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfaGlzdG9yeUNvbnRhaW5lclwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyQ29tcGxldGVkXCJdICosIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfcHJvZHVjdERhdGFDb250YWluZXJcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9zY2FubmVyRGF0YUNvbnRhaW5lclwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJtb2RhbF9kaWFsb2dNb2RhbFwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJwcm9kdWN0RGV0YWlsc19wcmljZVwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJwcm9kdWN0Q29tcGFyZURldGFpbHNfZ3JhcGhDb250YWluZXJcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfZ3JhcGhDb250YWluZXJcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwiZGV0YWlsc0NvbnRhaW5lcl9kZXRhaWxzXCJdICosIC5jdXN0b20gW2NsYXNzXj1cInJlYWN0LWRhdGVwaWNrZXItcG9wcGVyXCJdIC5yZWFjdC1kYXRlcGlja2VyX19oZWFkZXIgKiwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXIgKiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbS1ibG9jay13b29kc21va2UsIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfb3B0aW9uc0xpc3QnXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddLCAuY3VzdG9tIFtjbGFzc149J2FkdmFuY2VkLXNlYXJjaF9jb250YWluZXInXSwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0sIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSwgLmN1c3RvbSBbY2xhc3NePSdtb2RhbF9tb2RhbF8nXSwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfZGF0YUNvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9oaXN0b3J5Q29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyQ29tcGxldGVkXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3NjYW5uZXJEYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJtb2RhbF9kaWFsb2dNb2RhbFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfcHJpY2VcIl0sIC5jdXN0b20gW2NsYXNzXj1cInByb2R1Y3RDb21wYXJlRGV0YWlsc19ncmFwaENvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfZ3JhcGhDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImRldGFpbHNDb250YWluZXJfZGV0YWlsc1wiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlciwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdDb2xvcikhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbS1saW5rLCAuY3VzdG9tIGEsIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfb3B0aW9uc0xpc3QnXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddLCAuY3VzdG9tIFtjbGFzc149J2FkdmFuY2VkLXNlYXJjaF9jb250YWluZXInXSwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0sIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSwgLmN1c3RvbSBbY2xhc3NePSdtb2RhbF9tb2RhbF8nXSwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0sIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddIGEsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2hlYWRlciddIGEsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX29wdGlvbnNMaXN0J10gYSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddIGEsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2Ryb3Bkb3duJ10gYSwgLmN1c3RvbSBbY2xhc3NePSdhZHZhbmNlZC1zZWFyY2hfY29udGFpbmVyJ10gYSwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0gYSwgLmN1c3RvbSBbY2xhc3NePVwiYWR2YW5jZWQtc2VhcmNoX2lucHV0U2VhcmNoXCJdIGEsIC5jdXN0b20gW2NsYXNzXj0nbW9kYWxfbW9kYWxfJ10gYSwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSBhLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2ZvbnRMaWdodGVyfTtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20tbGluazpob3ZlciwgLmN1c3RvbSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hvbWVfbWVzc2FnZU5vRWxlbWVudHNDb250YWluZXInXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfaGVhZGVyJ106aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX29wdGlvbnNMaXN0J106aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2xlZnRDb250YWluZXInXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfZHJvcGRvd24nXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdhZHZhbmNlZC1zZWFyY2hfY29udGFpbmVyJ106aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cImlucHV0X2lucHV0XCJdOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149XCJhZHZhbmNlZC1zZWFyY2hfaW5wdXRTZWFyY2hcIl06aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0nbW9kYWxfbW9kYWxfJ106aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cInNlbGVjdF9zZWxlY3RcIl06aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cInJlYWN0LWRhdGVwaWNrZXItcG9wcGVyXCJdOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hvbWVfbWVzc2FnZU5vRWxlbWVudHNDb250YWluZXInXSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9vcHRpb25zTGlzdCddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2xlZnRDb250YWluZXInXSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0nYWR2YW5jZWQtc2VhcmNoX2NvbnRhaW5lciddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cImlucHV0X2lucHV0XCJdIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J21vZGFsX21vZGFsXyddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cInNlbGVjdF9zZWxlY3RcIl0gYTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtmb250TGlnaHRlcn07XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJob21lX2hpc3RvcnlDb250YWluZXJcIl06bm90KC5wcm9kdWN0SGlzdG9yeUNvbnRhaW5lcikgW2NsYXNzXj1cInNxdWFyZV9zcXVhcmVcIl0ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQ29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149J29wdGlvbkxpc3RfdGFiQmFyJ10gW2NsYXNzXj0nb3B0aW9uTGlzdF9zZWxlY3RlZCddIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQ29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149J29wdGlvbkxpc3RfdGFiQmFyJ10gbGkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gLnRhYmxlLCAuY3VzdG9tIFtjbGFzc149J3RhYmxlX3RhYmxlQ29tcGxleCddIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbn07XG4gICAgICAgICAgICBjb2xvcjogJHtmb250RGFya2VufTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCBibGFjaztcbiAgICAgICAgICAgIFxuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSAudGFibGUgdGgsIC5jdXN0b20gW2NsYXNzXj0ndGFibGVfdGFibGVDb21wbGV4J10gdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtkYXJrZW59O1xuXG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIC50YWJsZSB0cjpudGgtY2hpbGQob2RkKSwgLmN1c3RvbSBbY2xhc3NePSd0YWJsZV90YWJsZUNvbXBsZXgnXSB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW59O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSBbY2xhc3NePVwibW9kYWxfZGlhbG9nTW9kYWxDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cIm1vZGFsX21vZGFsQ29udGFpbmVyXCJdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbn07XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJpbnB1dF9ibGFja0lucHV0XCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idG5QcmltYXJ5VGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuUHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImJ1dHRvbl9wcmltYXJ5QnV0dG9uX18yN21iWVwiXSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnRuUHJpbWFyeVRleHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0J0blByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmdCdG5QcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgIH1cbiAgICAgICAuY3VzdG9tIFtjbGFzc149XCJidXR0b25fc2Vjb25kYXJ5QnV0dG9uX18xTjF2TVwiXSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnRuU2Vjb25kYXJ5VGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuU2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJob21lX2NhcHR1cmVzTGlzdFwiXSBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJob21lX2NhcHR1cmVzTGlzdFwiXSBwW2NsYXNzXj1cImhvbWVfd2l0aFByb2R1Y3RcIl0ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ0blNlY29uZGFyeVRleHQpICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1rZXlib2FyZC1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGUzYzI2ICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZjIyMjMgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lcl9fMXE5SVdcIl0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdCdG5QcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ0blByaW1hcnlUZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImJ0bi10aGVtZVwiXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0J0blByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnRuUHJpbWFyeVRleHQpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSBbY2xhc3NePVwiYnRuXCJdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuUHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idG5QcmltYXJ5VGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJpbnB1dF9lcnJvck1lc3NhZ2VfXzE2eXhIXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuY3VycmVudC1wcm9kdWN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuUHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXN0b20gLnJlYWN0LWF1dG9zdWdnZXN0X19pbnB1dDo6cGxhY2Vob2xkZXIgeyAgXG4gICAgICAgICAgICBjb2xvcjogJHtmb250TGlnaHRlcn07XG4gICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSAucmVhY3QtYXV0b3N1Z2dlc3RfX2lucHV0IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2F0YW1hcmFuXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAke2ZvbnRMaWdodGVyfTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTY1NjU2O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1yZXBvcnRfZGl2Q29udGVudF9fMlUxWEsge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdCdG5QcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZF90ZXh0LWJvcmRlcl9fYUlRUloge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkX2JvcmRlci1wcm9kdWN0X18zcEtLUyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1yZXBvcnRfdGFnc19fT0cydm4ge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtmb250TGlnaHRlcn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXJlcG9ydF9idG5Ub2dnbGVfXzFJUjdPIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIH1cbiAgICBgXG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zL2xvY2FsZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2guZ2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWRhdGVwaWNrZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2VsZWN0L2FzeW5jXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=