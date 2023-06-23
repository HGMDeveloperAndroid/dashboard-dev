module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home/index.tsx");
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

/***/ "./components/autocomplete/Autocomplete.tsx":
/*!**************************************************!*\
  !*** ./components/autocomplete/Autocomplete.tsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Autocomplete; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-autosuggest */ "react-autosuggest");
/* harmony import */ var react_autosuggest__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_autosuggest__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\autocomplete\\Autocomplete.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


class Autocomplete extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      value: '',
      suggestions: [],
      defaultValueWasDefined: false
    });
    _defineProperty(this, "onChange", (event, {
      newValue
    }) => {
      const nextState = {
        value: newValue
      };
      this.setState(nextState);
    });
    _defineProperty(this, "onSuggestionsFetchRequested", context => {
      const {
        getSuggestions
      } = this.props;
      const value = context.reason == 'input-changed' ? context.value : '';
      this.setState({
        suggestions: getSuggestions(value)
      });
    });
    _defineProperty(this, "onSuggestionsClearRequested", () => {
      this.setState({
        suggestions: []
      });
    });
    _defineProperty(this, "shouldRenderSuggestions", (value, reason) => {
      return true;
    });
  }
  componentWillReceiveProps() {
    if (!this.props.resetLine && this.state.value) {
      this.setState({
        value: ''
      });
    }
  }
  render() {
    const {
      value,
      suggestions
    } = this.state;
    const {
      resetLine,
      defaultValue,
      tabindex,
      placeholder,
      onSuggestionSelected,
      getSuggestionValue,
      renderSuggestion,
      disabled,
      useWhiteText
    } = this.props;
    const textWhite = useWhiteText ? 'text-white' : '';
    const inputProps = {
      placeholder: !value && defaultValue ? defaultValue : placeholder,
      tabIndex: tabindex,
      disabled,
      value,
      onChange: this.onChange,
      className: `indexed-element react-autosuggest__input ${textWhite}`
    };
    return __jsx("div", {
      className: "autocomplete-wrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 13
      }
    }, __jsx("span", {
      className: textWhite,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 17
      }
    }, placeholder, ": "), __jsx(react_autosuggest__WEBPACK_IMPORTED_MODULE_1___default.a, {
      suggestions: suggestions,
      onSuggestionsFetchRequested: this.onSuggestionsFetchRequested,
      onSuggestionsClearRequested: this.onSuggestionsClearRequested,
      onSuggestionSelected: onSuggestionSelected,
      getSuggestionValue: getSuggestionValue,
      renderSuggestion: renderSuggestion,
      inputProps: inputProps,
      highlightFirstSuggestion: true,
      shouldRenderSuggestions: this.shouldRenderSuggestions,
      focusInputOnSuggestionClick: false,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 17
      }
    }));
  }
}
_defineProperty(Autocomplete, "defaultProps", {
  resetLine: false,
  defaultValue: ''
});

/***/ }),

/***/ "./components/autocomplete/index.tsx":
/*!*******************************************!*\
  !*** ./components/autocomplete/index.tsx ***!
  \*******************************************/
/*! exports provided: Autocomplete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Autocomplete */ "./components/autocomplete/Autocomplete.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Autocomplete", function() { return _Autocomplete__WEBPACK_IMPORTED_MODULE_0__["default"]; });




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

/***/ "./components/checkbox/index.js":
/*!**************************************!*\
  !*** ./components/checkbox/index.js ***!
  \**************************************/
/*! exports provided: Checkbox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Checkbox */ "./components/checkbox/Checkbox.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return _Checkbox__WEBPACK_IMPORTED_MODULE_0__["default"]; });




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

/***/ "./components/map/Map.tsx":
/*!********************************!*\
  !*** ./components/map/Map.tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-google-maps/api */ "@react-google-maps/api");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\map\\Map.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Map extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    const {
      lat,
      lng
    } = this.props;
    const center = {
      lat: lat,
      lng: lng
    };
    const containerStyle = {
      width: '100%',
      height: '100%'
    };
    return __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["LoadScript"], {
      googleMapsApiKey: "AIzaSyB53WxFkvRCwORxy27DWzEI8z6MEsrquyU",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }
    }, __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
      mapContainerStyle: containerStyle,
      center: center,
      zoom: 17,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, /* Child components, such as markers, info windows, etc. */
    __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      position: {
        lat: lat,
        lng: lng
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }
    }), __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null)));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Map);

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

/***/ "./components/select/Select.tsx":
/*!**************************************!*\
  !*** ./components/select/Select.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Select; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _select_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./select.module.scss */ "./components/select/select.module.scss");
/* harmony import */ var _select_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_select_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\select\\Select.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


Select.defaultProps = {
  defaultEmpty: true
};
function Select(props) {
  const {
    label,
    options,
    defaultOption,
    bgColor,
    onChange,
    noLabel,
    errorMessage,
    placeholderColor,
    color,
    isDisabled,
    tabindex,
    className,
    defaultEmpty
  } = props;
  const styleInput = bgColor && color ? {
    backgroundColor: bgColor,
    color: color
  } : color ? {
    color: color
  } : bgColor ? {
    backgroundColor: bgColor
  } : {};
  return __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, !noLabel && __jsx("label", {
    className: _select_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.label,
    style: placeholderColor ? {
      color: placeholderColor
    } : {},
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }, label), __jsx("select", {
    onChange: e => onChange(e),
    value: defaultOption,
    style: styleInput,
    className: `${_select_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.select} ${className}`,
    disabled: isDisabled,
    tabIndex: tabindex,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx("option", {
    disabled: true,
    value: defaultEmpty ? '0' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, label), options.map(opt => __jsx("option", {
    key: opt.value,
    value: opt.value,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, opt.label))), errorMessage && errorMessage.length > 0 && __jsx("p", {
    className: _select_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.errorMessage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, errorMessage));
}

/***/ }),

/***/ "./components/select/index.js":
/*!************************************!*\
  !*** ./components/select/index.js ***!
  \************************************/
/*! exports provided: Select */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Select__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Select */ "./components/select/Select.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return _Select__WEBPACK_IMPORTED_MODULE_0__["default"]; });




/***/ }),

/***/ "./components/select/select.module.scss":
/*!**********************************************!*\
  !*** ./components/select/select.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"select": "select_select__3XcqA",
	"errorMessage": "select_errorMessage__3rc4W",
	"label": "select_label__2xsYH"
};


/***/ }),

/***/ "./components/square/Square.tsx":
/*!**************************************!*\
  !*** ./components/square/Square.tsx ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _square_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./square.module.scss */ "./components/square/square.module.scss");
/* harmony import */ var _square_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_square_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\square\\Square.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Square = props => {
  const {
    title,
    value,
    date,
    bgColor,
    color
  } = props;
  const colorStyle = {
    color: color ? color : '#565656'
  };
  return __jsx("div", {
    style: {
      backgroundColor: bgColor ? bgColor : '#E6EAEE'
    },
    className: _square_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.square,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 9
    }
  }, __jsx("p", {
    className: _square_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.title,
    style: colorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, title), value && __jsx("p", {
    className: _square_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.value,
    style: colorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }
  }, "$ ", value), date && __jsx("p", {
    className: _square_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.date,
    style: colorStyle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 22
    }
  }, date));
};
/* harmony default export */ __webpack_exports__["default"] = (Square);

/***/ }),

/***/ "./components/square/square.module.scss":
/*!**********************************************!*\
  !*** ./components/square/square.module.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"square": "square_square__1uKlC",
	"title": "square_title__1TQzu",
	"value": "square_value__1Xv9Y",
	"date": "square_date__V2n1v"
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

/***/ "./pages/home/home.module.scss":
/*!*************************************!*\
  !*** ./pages/home/home.module.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "home_container__33K-2",
	"itemList": "home_itemList__39Wix",
	"title": "home_title__8-y3k",
	"formContainer": "home_formContainer__2NNev",
	"capturesList": "home_capturesList__Xy9WR",
	"withProduct": "home_withProduct__1IB9A",
	"currentProduct": "home_currentProduct__10sV5",
	"labelRadio": "home_labelRadio__1mJRD",
	"productScan": "home_productScan__g0kL0",
	"scannerDataContainer": "home_scannerDataContainer__32HJQ",
	"element": "home_element__2Z5HP",
	"dataContainer": "home_dataContainer__1bkqL",
	"left-images": "home_left-images__3AHbf",
	"imageRight": "home_imageRight__3RnAo",
	"imageLeft": "home_imageLeft__26FeR",
	"image": "home_image__2ac_C",
	"priceText": "home_priceText__2rQQJ",
	"productData": "home_productData__hs3vK",
	"productDataContainer": "home_productDataContainer__24b0Y",
	"productDataContainerCompleted": "home_productDataContainerCompleted__2ES0T",
	"historyContainer": "home_historyContainer__K0IBJ",
	"squareContainer": "home_squareContainer__2a05k",
	"messageNoElementsContainer": "home_messageNoElementsContainer__1q9IW",
	"separator": "home_separator__3CYiL",
	"border": "home_border__1Yxrj",
	"modalImage": "home_modalImage__1fHiR",
	"modalImageClose": "home_modalImageClose__3AVt8",
	"containerRadio": "home_containerRadio__1TVWV",
	"displayRadio": "home_displayRadio__3M_g3"
};


/***/ }),

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/header */ "./components/header/index.js");
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/session-management */ "./utils/session-management.ts");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.module.scss */ "./pages/home/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/select */ "./components/select/index.js");
/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/buttons */ "./components/buttons/index.js");
/* harmony import */ var _components_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/autocomplete */ "./components/autocomplete/index.tsx");
/* harmony import */ var _components_buttons_SecondaryButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/buttons/SecondaryButton */ "./components/buttons/SecondaryButton.tsx");
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/input */ "./components/input/index.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/checkbox */ "./components/checkbox/index.js");
/* harmony import */ var _components_square_Square__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/square/Square */ "./components/square/Square.tsx");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var _utils_catalogs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../utils/catalogs */ "./utils/catalogs.ts");
/* harmony import */ var _utils_photo_url__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/photo_url */ "./utils/photo_url.ts");
/* harmony import */ var _components_modal_Modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/modal/Modal */ "./components/modal/Modal.tsx");
/* harmony import */ var _utils_format_date__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../utils/format-date */ "./utils/format-date.ts");
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/loader/Loader */ "./components/loader/Loader.tsx");
/* harmony import */ var _components_map_Map__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/map/Map */ "./components/map/Map.tsx");
/* harmony import */ var _components_pageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/pageTitle/PageTitle */ "./components/pageTitle/PageTitle.tsx");
/* harmony import */ var react_nextjs_toast__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! react-nextjs-toast */ "react-nextjs-toast");
/* harmony import */ var react_nextjs_toast__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(react_nextjs_toast__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../i18n */ "./i18n/index.ts");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../utils/theme */ "./utils/theme.ts");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\pages\\home\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
























const emptyLocation = {
  type: '',
  coordinates: [90, -90]
};
const emptyStore = {
  id: 0,
  name: '',
  address: '',
  location: emptyLocation,
  chain: [],
  storeId: 0
};
const emptyMission = {
  id: 1,
  title: '',
  description: '',
  points: 0
};
const emptyCatalog = {
  id: 0,
  name: ''
};
const emptyGroup = {
  id: 0,
  name: ''
};
const emptyLine = {
  id: 0,
  name: '',
  id_group: 0
};
const emptyProduct = {
  id: 0,
  name: '',
  quantity: 1,
  barcode: '',
  unit: emptyCatalog,
  group: emptyCatalog,
  line: emptyLine,
  brand: emptyCatalog,
  type: '',
  is_enable: false,
  picture_path: ''
};
const emptyUser = {
  id: 1,
  first_name: '',
  last_name: '',
  mother_last_name: '',
  employee_number: 0
};
const emptyPicture = {
  product_picture: '',
  shelf_picture: '',
  promo_picture: ''
};
const emptyHistoryData = {
  price: 0,
  capture_date: ''
};
const emptyHistory = {
  recent_price: emptyHistoryData,
  max_price: emptyHistoryData,
  min_price: emptyHistoryData,
  min_price_with_promotion: emptyHistoryData
};
const emptyScan = {
  id: 0,
  barcode: '',
  price: '',
  special_price: false,
  comments: '',
  capture_date: '',
  reception_date: '',
  mission: emptyMission,
  product: emptyProduct,
  scanned_by: emptyUser,
  reviewed: false,
  store: emptyStore,
  pictures: [emptyPicture],
  history: emptyHistory
};
const tabOrder = {
  viewPicture: -1,
  productName: 0,
  productImage: 1,
  productBarcode: -1,
  productBrand: 2,
  productQuantity: 3,
  productUnit: 4,
  productGroup: 5,
  productLine: 6,
  productType: 7,
  barcode: 8,
  price: 9,
  special_price: 10,
  store: 11,
  reject: 12,
  validate: 13,
  address: -1,
  comments: -1
};
const tabOrderBlockedProduct = {
  viewPicture: -1,
  productName: -1,
  productImage: -1,
  productBarcode: -1,
  productBrand: -1,
  productQuantity: -1,
  productUnit: -1,
  productGroup: -1,
  productLine: -1,
  productType: -1,
  barcode: -1,
  price: 0,
  special_price: 1,
  store: 2,
  reject: 3,
  validate: 4,
  address: -1,
  comments: -1
};
const tabOrderSpecial = {
  viewPicture: 11,
  productName: 0,
  productImage: 1,
  productBarcode: -1,
  productBrand: 2,
  productQuantity: 3,
  productUnit: 4,
  productGroup: 5,
  productLine: 6,
  productType: 7,
  barcode: 8,
  price: 9,
  special_price: 10,
  store: 12,
  reject: 13,
  validate: 14,
  address: -1,
  comments: -1
};
const tabOrderBlockedProductSpecial = {
  viewPicture: 2,
  productName: -1,
  productImage: -1,
  productBarcode: -1,
  productBrand: -1,
  productQuantity: -1,
  productUnit: -1,
  productGroup: -1,
  productLine: -1,
  productType: -1,
  barcode: -1,
  price: 0,
  special_price: 1,
  store: 3,
  reject: 4,
  validate: 5,
  address: -1,
  comments: -1
};
class HomePage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(props) {
    super(props);
    _defineProperty(this, "productRef", void 0);
    _defineProperty(this, "typeFilter", [{
      value: 'MC',
      label: 'MC'
    }, {
      value: 'MP',
      label: 'MP'
    }]);
    _defineProperty(this, "state", {
      scans: [],
      loadedScan: emptyScan,
      nextScanId: null,
      productFilter: null,
      missionFilter: null,
      groupList: [],
      missionList: [],
      brandList: [],
      unitList: [],
      storeList: [],
      lineList: [],
      lineListFilter: [],
      loadedProduct: emptyProduct,
      loadedStore: emptyStore,
      loadedBrand: null,
      loadedGroup: emptyCatalog,
      loadedUnit: emptyCatalog,
      loadedLine: emptyLine,
      loadedRecentPrice: emptyHistoryData,
      loadedMaxPrice: emptyHistoryData,
      loadedMinPrice: emptyHistoryData,
      loadedMinPricePromotion: emptyHistoryData,
      isValid: false,
      showModal: false,
      showRejectModal: false,
      selectedRadio: null,
      isImageModal: false,
      showLoader: false,
      disabledFilterBtn: false,
      barcodeErrorMsg: '',
      priceErrorMsg: '',
      productNameErrorMsg: '',
      productTypeErrorMsg: '',
      productBrandErrorMsg: '',
      productLineErrorMsg: '',
      productUnitErrorMsg: '',
      productGroupErrorMsg: '',
      showMessageNoElements: true,
      selectedPicture: '',
      existProduct: false,
      imageVis: '',
      selectedScanId: 0,
      lat: '',
      lng: '',
      address: '',
      currentScanVerifiedId: 0,
      currentScanWasVerified: false,
      isBeingValidated: false,
      isBeingValidatedByCurrentUser: false,
      userId: 0,
      validatorId: 0,
      scansTotal: 0,
      scansTotalWithProduct: 0,
      scansTotalWithoutProduct: 0,
      scanFilter: [{
        value: '',
        label: 'Todos',
        key: 'all'
      }, {
        value: 'yes',
        label: 'Con producto',
        key: 'withProduct'
      }, {
        value: 'no',
        label: 'Sin producto',
        key: 'withoutProduct'
      }],
      resetLine: false
    });
    _defineProperty(this, "handleWindowClose", async event => {
      event.preventDefault();
      const {
        isBeingValidatedByCurrentUser,
        selectedScanId
      } = this.state;
      if (isBeingValidatedByCurrentUser) {
        await this.updateBeingValidatedStatus('disable', selectedScanId);
      }
      return null;
    });
    _defineProperty(this, "updateBeingValidatedStatus", async (status, scanId) => {
      try {
        const {
          selectedScanId
        } = this.state;
        if (status === 'enable') {
          status = '1';
        } else if (status === 'disable') {
          status = '0';
        }
        const endpoint = 'api/scan/being-validated';
        const request = {
          id_scan: scanId,
          status
        };
        const headers = {
          headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getHeader"])()
        };
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_13__["default"].post(endpoint, request, headers);
        const {
          isBeingValidated,
          validatorId
        } = response.data;
        let userId = await Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getId"])();
        userId = parseInt(userId);
        const isBeingValidatedByCurrentUser = validatorId === userId;
        this.setState({
          currentScanWasVerified: true,
          currentScanVerifiedId: selectedScanId,
          isBeingValidated,
          isBeingValidatedByCurrentUser,
          validatorId,
          userId
        });
      } catch (error) {
        console.error('HomePage.updateBeingValidatedStatus[error]: ', error);
      }
    });
    _defineProperty(this, "handleCommands", event => {
      const keyCode = event.which ? event.which : event.keyCode;
      const key = event.code ? event.code : event.key;
      const isControlKey = event.ctrlKey;
      const isShiftKey = event.shiftKey;
      const isPlusKey = keyCode === 187 || keyCode === 107 || key === '*';
      const isLessKey = keyCode === 189 || keyCode === 109;
      if (isControlKey && isShiftKey) {
        if (isLessKey) {
          event.preventDefault();
          this.openReject();
        }
        if (isPlusKey) {
          event.preventDefault();
          this.validateScanButtonHandler();
        }
      }
    });
    _defineProperty(this, "getScanList", async (isFirstRun = false) => {
      const params = {};
      const locale = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getLocale"])();
      if (this.state.productFilter) {
        params.withProduct = `${this.state.productFilter}`;
      }
      if (this.state.missionFilter) {
        params.textSearch = `${this.state.missionFilter}`;
      }
      try {
        const res = await _utils_api__WEBPACK_IMPORTED_MODULE_13__["default"].get('/api/scan/all', {
          headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getHeader"])(),
          params
        });
        if (res.data.scans.data.length > 0) {
          const {
            data,
            total_pending,
            with_product,
            without_product
          } = res.data.scans;
          const scans = data.map(scan => _objectSpread({}, scan));
          const scansCounts = {
            all: total_pending,
            withProduct: with_product,
            withoutProduct: without_product
          };
          const scanFilter = this.state.scanFilter.map(filter => {
            filter.label = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, `home.sidebar.scanFilter.${filter.key}`);
            filter.label = filter.label.replace(/ *\([^)]*\) */g, '');
            filter.label = `${filter.label} (${scansCounts[filter.key]})`;
            return filter;
          });
          this.setState({
            scans,
            showMessageNoElements: isFirstRun,
            scanFilter
          });
          const {
            nextScanId
          } = this.state;
          if (!isFirstRun) {
            if (nextScanId) {
              await this.scanSelectedHandler(nextScanId);
              await this.updateBeingValidatedStatus('enable', nextScanId);
            } else {
              await this.scanSelectedHandler(scans[0].id);
              await this.updateBeingValidatedStatus('enable', scans[0].id);
            }
          }
        }
        if (res.data.scans.data.length === 0 || isFirstRun) {
          this.setState({
            loadedScan: emptyScan,
            showMessageNoElements: true,
            disabledFilterBtn: false,
            showLoader: false
          });
        }
      } catch (err) {
        // TODO: enviar notificación cuando falla al obtener los scans
      }
    });
    _defineProperty(this, "scanSelectedHandler", async (scanId, barcode) => {
      try {
        var _scans;
        this.cleanScan();
        const {
          scans,
          isBeingValidatedByCurrentUser,
          resetLine
        } = this.state;
        let {
          selectedScanId
        } = this.state;
        if (selectedScanId) {
          if (isBeingValidatedByCurrentUser) {
            await this.updateBeingValidatedStatus('disable', selectedScanId);
          }
        }
        const nextIndex = scans.findIndex(s => s.id === scanId);
        const nextScanId = ((_scans = scans[nextIndex + 1]) === null || _scans === void 0 ? void 0 : _scans.id) || null;
        this.setState({
          showLoader: true,
          showMessageNoElements: false
        });
        let res;
        if (!barcode) {
          res = await _utils_api__WEBPACK_IMPORTED_MODULE_13__["default"].get(`api/scan/${scanId}`, {
            headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getHeader"])()
          });
        } else {
          res = await _utils_api__WEBPACK_IMPORTED_MODULE_13__["default"].get(`api/scan/${selectedScanId}/barcode/${barcode}`, {
            headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getHeader"])()
          });
        }
        await this.updateBeingValidatedStatus('enable', scanId);
        const loadedScan = _objectSpread(_objectSpread({}, res.data.scan), {}, {
          pictures: res.data.scan.pictures.map(p => {
            return _objectSpread(_objectSpread({}, p), {}, {
              product_picture: p.product_picture ? `${_utils_photo_url__WEBPACK_IMPORTED_MODULE_15__["photoUrl"]}/${p.product_picture}` : null,
              shelf_picture: p.shelf_picture ? `${_utils_photo_url__WEBPACK_IMPORTED_MODULE_15__["photoUrl"]}/${p.shelf_picture}` : null,
              promo_picture: p.promo_picture ? `${_utils_photo_url__WEBPACK_IMPORTED_MODULE_15__["photoUrl"]}/${p.promo_picture}` : null
            });
          })
        });
        const productExists = Boolean(res.data.scan.product);
        const productImage = productExists && `${_utils_photo_url__WEBPACK_IMPORTED_MODULE_15__["photoUrl"]}/${res.data.scan.product.picture_path}`;
        const loadedStore = res.data.scan.store ? res.data.scan.store : emptyStore;
        const selectedStore = this.state.storeList.find(store => {
          return store.label === loadedStore.name;
        });
        loadedStore.storeId = selectedStore.value;
        selectedScanId = res.data.scan.id;
        const nextState = {
          loadedScan,
          nextScanId,
          selectedScanId,
          loadedProduct: res.data.scan.product ? res.data.scan.product : emptyProduct,
          loadedStore,
          loadedBrand: res.data.scan.product ? res.data.scan.product.brand : '',
          loadedUnit: res.data.scan.product ? res.data.scan.product.unit : emptyCatalog,
          loadedGroup: res.data.scan.product ? res.data.scan.product.group : emptyGroup,
          loadedGroupName: '',
          loadedLine: res.data.scan.product ? res.data.scan.product.line : emptyLine,
          existProduct: productExists,
          imageVis: productImage || (loadedScan.pictures.length > 0 ? loadedScan.pictures[0].product_picture : ''),
          loadedRecentPrice: res.data.scan.product && Object.keys(res.data.scan.history.recent_price).length !== 0 ? res.data.scan.history.recent_price : emptyHistoryData,
          loadedMaxPrice: res.data.scan.product && Object.keys(res.data.scan.history.max_price).length !== 0 ? res.data.scan.history.max_price : emptyHistoryData,
          loadedMinPrice: res.data.scan.product && Object.keys(res.data.scan.history.min_price).length !== 0 ? res.data.scan.history.min_price : emptyHistoryData,
          loadedMinPricePromotion: res.data.scan.product && Object.keys(res.data.scan.history.min_price_with_promotion).length !== 0 ? res.data.scan.history.min_price_with_promotion : emptyHistoryData,
          showLoader: false,
          disabledFilterBtn: false,
          lat: res.data.scan.store !== null ? res.data.scan.store.location.coordinates[1] : '',
          lng: res.data.scan.store !== null ? res.data.scan.store.location.coordinates[0] : '',
          resetLine: !barcode ? true : false
        };
        this.setState(nextState, () => {
          if (selectedScanId) {
            const firstTabindex = document.querySelector('input[tabindex="0"]');
            if (firstTabindex) {
              firstTabindex.focus();
              firstTabindex.select();
            }
          }
        });
      } catch (err) {
        // TODO: enviar notificación cuando falla al obtener un scan
      }
    });
    _defineProperty(this, "cleanScan", () => {
      this.setState({
        loadedScan: emptyScan,
        loadedStore: emptyStore,
        loadedProduct: emptyProduct,
        loadedBrand: emptyCatalog,
        loadedGroup: emptyGroup,
        loadedUnit: emptyCatalog,
        loadedLine: emptyLine,
        loadedRecentPrice: emptyHistoryData,
        loadedMaxPrice: emptyHistoryData,
        loadedMinPrice: emptyHistoryData,
        loadedMinPricePromotion: emptyHistoryData,
        barcodeErrorMsg: '',
        priceErrorMsg: '',
        productNameErrorMsg: '',
        productTypeErrorMsg: '',
        productBrandErrorMsg: '',
        productLineErrorMsg: '',
        productUnitErrorMsg: '',
        productGroupErrorMsg: '',
        resetLine: false,
        lat: 0,
        lng: 0
      });
    });
    _defineProperty(this, "changeProductHandler", e => {
      const productFilter = e.target.value;
      this.setState({
        productFilter
      }, () => this.filterButtonHandler());
    });
    _defineProperty(this, "changeMissionFilterHandler", e => {
      const missionFilter = e.target.value;
      this.setState({
        missionFilter
      }, () => this.filterButtonHandler());
    });
    _defineProperty(this, "filterButtonHandler", () => {
      this.setState({
        disabledFilterBtn: true,
        nextScanId: null
      }, () => this.getScanList());
    });
    _defineProperty(this, "priceHandler", event => {
      const price = event.target.value;
      const loadedScan = _objectSpread(_objectSpread({}, this.state.loadedScan), {}, {
        price
      });
      this.setState({
        loadedScan
      });
    });
    _defineProperty(this, "addressHandler", e => {
      const address = e.target.value;
      const store = _objectSpread(_objectSpread({}, this.state.loadedStore), {}, {
        address
      });
      this.setState({
        loadedStore: store
      });
    });
    _defineProperty(this, "commentHandler", e => {
      const comments = e.target.value;
      const scan = _objectSpread(_objectSpread({}, this.state.loadedScan), {}, {
        comments
      });
      this.setState({
        loadedScan: scan
      });
    });
    _defineProperty(this, "changeStoreHandler", e => {
      const {
        storeList
      } = this.state;
      const storeId = e.target.value;
      const store = storeList.find(store => store.value === storeId);
      const loadedStore = _objectSpread(_objectSpread({}, this.state.loadedStore), {}, {
        id: parseInt(storeId),
        storeId: parseInt(storeId),
        name: store.label
      });
      this.setState({
        loadedStore
      });
    });
    _defineProperty(this, "productNameHandler", e => {
      const name = e.target.value;
      const product = _objectSpread(_objectSpread({}, this.state.loadedProduct), {}, {
        name
      });
      this.setState({
        loadedProduct: product
      });
    });
    _defineProperty(this, "changeBrandHandler", e => {
      const brandId = e.target.value;
      const brand = _objectSpread(_objectSpread({}, this.state.loadedBrand), {}, {
        id: parseInt(brandId)
      });
      this.setState({
        loadedBrand: brand
      });
    });
    _defineProperty(this, "changeUnitHandler", e => {
      const unitId = e.target.value;
      const unit = _objectSpread(_objectSpread({}, this.state.loadedUnit), {}, {
        id: parseInt(unitId)
      });
      this.setState({
        loadedUnit: unit
      });
    });
    _defineProperty(this, "quantityHandler", e => {
      const quantity = e.target.value;
      const product = _objectSpread(_objectSpread({}, this.state.loadedProduct), {}, {
        quantity
      });
      this.setState({
        loadedProduct: product
      });
    });
    _defineProperty(this, "changeTypeHandler", e => {
      const type = e.target.value;
      const product = _objectSpread(_objectSpread({}, this.state.loadedProduct), {}, {
        type
      });
      this.setState({
        loadedProduct: product
      });
    });
    _defineProperty(this, "specialPriceCheckHandler", () => {
      const scan = _objectSpread(_objectSpread({}, this.state.loadedScan), {}, {
        special_price: !this.state.loadedScan.special_price
      });
      this.setState({
        loadedScan: scan
      });
    });
    _defineProperty(this, "selectProductImageHandler", () => {
      this.setState({
        showModal: true
      });
    });
    _defineProperty(this, "validateScanButtonHandler", () => {
      const {
        loadedStore,
        loadedScan,
        existProduct
      } = this.state;
      const selectedStoreName = loadedStore.name.toLowerCase();
      const storeInput = document.querySelector('.store-input');
      const options = Array.from(storeInput.querySelectorAll('option'));
      const selectedOption = options.find(option => option.selected);
      if (selectedStoreName === 'no store') {
        if (!storeInput.classList.contains('input-error')) {
          storeInput.classList.add('input-error');
        }
      } else {
        storeInput.classList.remove('input-error');
        if (existProduct) {
          this.validateScan();
        } else {
          this.validateScanAndProduct();
        }
      }
    });
    _defineProperty(this, "validateScan", async () => {
      const scanData = this.checkAndDeleteUnusedFields(this.state.loadedScan, true);
      const storeData = this.checkAndDeleteUnusedFiledsForStore(this.state.loadedStore, this.state.loadedStore.location);
      if (this.validateRequiredFieldsForScan(scanData)) {
        try {
          const headers = _objectSpread(_objectSpread({}, Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getHeader"])()), {}, {
            'content-type': 'multipart/form-data'
          });
          let form_data = new FormData();
          for (let key in scanData) {
            form_data.append(`scan[${key}]`, scanData[key]);
          }
          for (let key in storeData) {
            form_data.append(`store[${key}]`, storeData[key]);
          }
          const response = await _utils_api__WEBPACK_IMPORTED_MODULE_13__["default"].post(`api/scan/${this.state.loadedScan.id}`, form_data, {
            headers
          });
          if (response.status === 200) {
            await this.cleanScan();
            await this.getScanList();
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
    _defineProperty(this, "validateScanAndProduct", async () => {
      const scanData = this.checkAndDeleteUnusedFields(this.state.loadedScan, true);
      const productData = this.checkAndDeleteUnusedFieldsForProduct(this.state.loadedProduct, this.state.loadedScan, this.state.loadedBrand, this.state.loadedGroup, this.state.loadedLine, this.state.loadedUnit);
      const storeData = this.checkAndDeleteUnusedFiledsForStore(this.state.loadedStore, this.state.loadedStore.location);
      if (this.validateRequiredFields(scanData, productData)) {
        try {
          const headers = _objectSpread(_objectSpread({}, Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getHeader"])()), {}, {
            'content-type': 'multipart/form-data'
          });
          let form_data = new FormData();
          for (let key in productData) {
            form_data.append(`product[${key}]`, productData[key]);
          }
          for (let key in scanData) {
            form_data.append(`scan[${key}]`, scanData[key]);
          }
          for (let key in storeData) {
            form_data.append(`store[${key}]`, storeData[key]);
          }
          const response = await _utils_api__WEBPACK_IMPORTED_MODULE_13__["default"].post(`api/scan/${this.state.loadedScan.id}`, form_data, {
            headers
          });
          if (response.status === 200) {
            this.cleanScan();
            this.getScanList();
            this.setState(_objectSpread(_objectSpread({}, this.setState), {}, {
              loadedGroup: {
                id: 0,
                name: ""
              }
            }));
          }
        } catch (error) {
          console.error(error);
        }
      }
    });
    _defineProperty(this, "checkAndDeleteUnusedFields", (object, isValid) => {
      const scan = {
        barcode: object.barcode,
        is_valid: isValid,
        price: object.price,
        special_price: object.special_price,
        comments: ''
      };
      if (!object.comments || object.comments.length === 0) {
        delete scan.comments;
      } else {
        scan.comments = object.comments;
      }
      return scan;
    });
    _defineProperty(this, "checkAndDeleteUnusedFieldsForProduct", (object, scan, brand, group, line, unit) => {
      const product = {
        id: object.id,
        name: object.name,
        quantity: object.quantity,
        unit: unit.id,
        group: group.id,
        line: line.id,
        brand: brand.id,
        type: object.type,
        picture_path: object.picture_path instanceof File ? object.picture_path : ''
      };
      return product;
    });
    _defineProperty(this, "checkAndDeleteUnusedFiledsForStore", (object, location) => {
      const store = {
        id: object.id,
        name: object.name,
        address: '',
        lat: location.coordinates[1],
        lng: location.coordinates[0]
      };
      if (!object.address || object.address.length === 0) {
        delete store.address;
      } else {
        store.address = object.address;
      }
      return store;
    });
    _defineProperty(this, "validateRequiredFields", (scan, product) => {
      const locale = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getLocale"])();
      let isValid = true;
      let barcodeErrorMsg = '';
      let priceErrorMsg = '';
      let productNameErrorMsg = '';
      let productTypeErrorMsg = '';
      let productBrandErrorMsg = '';
      let productGroupErrorMsg = '';
      let productUnitErrorMsg = '';
      let productLineErrorMsg = '';
      if (!scan.barcode.trim()) {
        barcodeErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.barcode.error');
        isValid = false;
      }
      const hasValidPrice = Math.ceil(parseFloat(scan.price)) > 0;
      if (!scan.price.trim() || !hasValidPrice) {
        priceErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.price.error');
        isValid = false;
      }
      if (!product.name.trim()) {
        productNameErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.name.error');
        isValid = false;
      }
      if (!product.type.trim() || product.type == '0') {
        productTypeErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.type.error');
        isValid = false;
      }
      if (!product.brand) {
        productBrandErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.brand.error');
        isValid = false;
      }
      if (!product.group) {
        productGroupErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.group.error');
        isValid = false;
      }
      if (!product.unit) {
        productUnitErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.unit.error');
        isValid = false;
      }
      if (!product.line) {
        productLineErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.line.error');
        isValid = false;
      }
      this.setState({
        barcodeErrorMsg,
        priceErrorMsg,
        productNameErrorMsg,
        productTypeErrorMsg,
        productBrandErrorMsg,
        productLineErrorMsg,
        productUnitErrorMsg,
        productGroupErrorMsg
      });
      return isValid;
    });
    _defineProperty(this, "validateRequiredFieldsForScan", scan => {
      const locale = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getLocale"])();
      let isValid = true;
      let barcodeErrorMsg = '';
      let priceErrorMsg = '';
      if (!scan.barcode.trim() || scan.barcode.length === 0) {
        barcodeErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.barcode.error');
        isValid = false;
      }
      const hasValidPrice = Math.ceil(parseFloat(scan.price)) > 0;
      if (!scan.price.trim() || !hasValidPrice) {
        priceErrorMsg = Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.price.error');
        isValid = false;
      }
      this.setState({
        barcodeErrorMsg,
        priceErrorMsg
      });
      return isValid;
    });
    _defineProperty(this, "rejectedButtonHandler", async () => {
      try {
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_13__["default"].get(`api/scan/${this.state.loadedScan.id}/rejected`, {
          headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getHeader"])()
        });
        if (response.status === 201) {
          this.cleanScan();
          this.getScanList();
        }
      } catch (error) {
        // TODO: Mandar mensaje de error.
      }
    });
    _defineProperty(this, "openReject", async () => {
      this.setState({
        showRejectModal: true
      });
    });
    _defineProperty(this, "closeReject", async () => {
      this.setState({
        showRejectModal: false
      });
      this.setState({
        selectedRadio: null
      });
    });
    _defineProperty(this, "onChangeRadio", async e => {
      await this.setState({
        selectedRadio: parseInt(e.currentTarget.value, 10)
      });
      await this.sendCriterion();
    });
    _defineProperty(this, "sendCriterion", async () => {
      const locale = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getLocale"])();
      const endpoint = `/api/criterion/scan/${this.state.loadedScan.id}`;
      const request = {
        id_criterion: this.state.selectedRadio + 1
      };
      const headers = {
        headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getHeader"])()
      };
      _utils_api__WEBPACK_IMPORTED_MODULE_13__["default"].post(endpoint, request, headers).then(async () => {
        await this.rejectedButtonHandler();
        await react_nextjs_toast__WEBPACK_IMPORTED_MODULE_21__["toast"].notify(Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.toast.sendCriterion.success.message'), {
          title: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.toast.sendCriterion.success.title'),
          duration: 6,
          type: "success"
        });
        this.closeReject();
      }).catch(() => {
        react_nextjs_toast__WEBPACK_IMPORTED_MODULE_21__["toast"].notify(Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.toast.sendCriterion.error.message'), {
          title: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.toast.sendCriterion.error.title'),
          duration: 6,
          type: "error"
        });
      });
    });
    _defineProperty(this, "selectImage", selectedPicture => {
      if (selectedPicture != null) {
        this.setState({
          selectedPicture,
          showModal: true,
          isImageModal: true
        });
      }
    });
    _defineProperty(this, "changeProductPicture", e => {
      if (e.target.files.length > 0) {
        const photo = e.target.files[0];
        const loadedProduct = _objectSpread(_objectSpread({}, this.state.loadedProduct), {}, {
          picture_path: photo
        });
        this.setState({
          imageVis: URL.createObjectURL(photo),
          loadedProduct
        });
      }
    });
    _defineProperty(this, "handleCloseModal", () => {
      this.setState({
        showModal: false
      });
    });
    _defineProperty(this, "getProductDetail", async productId => {
      try {
        this.setState({
          showLoader: true
        });
        const res = await _utils_api__WEBPACK_IMPORTED_MODULE_13__["default"].get(`api/product/${productId}`, {
          headers: Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getHeader"])()
        });
        const loadedProduct = _objectSpread(_objectSpread({}, res.data.product), {}, {
          picture_path: res.data.product.picture_path ? `${_utils_photo_url__WEBPACK_IMPORTED_MODULE_15__["photoUrl"]}/${res.data.product.picture_path}` : null
        });
        this.setState({
          loadedProduct,
          loadedScan: _objectSpread(_objectSpread({}, this.state.loadedScan), {}, {
            product: _objectSpread({}, loadedProduct)
          }),
          imageVis: res.data.product.picture_path ? `${_utils_photo_url__WEBPACK_IMPORTED_MODULE_15__["photoUrl"]}/${res.data.product.picture_path}` : null,
          showLoader: false,
          loadedUnit: res.data.product.unit,
          loadedGroup: res.data.product.group,
          loadedLine: res.data.product.line,
          loadedBrand: res.data.product.brand
        });
      } catch (err) {
        await this.scanSelectedHandler(this.state.selectedScanId);
      }
    });
    _defineProperty(this, "findScan", async barcode => {
      try {
        const {
          selectedScanId
        } = this.state;
        if (selectedScanId && barcode) {
          await this.scanSelectedHandler(selectedScanId, barcode);
        }
      } catch (error) {
        console.log(error);
      }
    });
    _defineProperty(this, "timeout", null);
    _defineProperty(this, "barcodeHandler", e => {
      const barcode = e.target.value;
      if (!isNaN(barcode)) {
        const loadedScan = _objectSpread(_objectSpread({}, this.state.loadedScan), {}, {
          barcode
        });
        this.setState({
          loadedScan
        });
        clearTimeout(this.timeout);
        this.timeout = setTimeout(async () => {
          try {
            await this.findScan(barcode);
          } catch (error) {
            console.log(error);
          }
        }, 2000);
      }
    });
    _defineProperty(this, "getSuggestions", (value, data) => {
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;
      return inputLength === 0 ? data.filter(item => {
        return true;
      }) : data.filter(item => {
        const query = inputValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regexp = new RegExp(query, 'ig');
        const itemExist = item.label.search(regexp) != -1;
        return itemExist;
      });
    });
    _defineProperty(this, "getSuggestionValue", suggestion => {
      return suggestion.label;
    });
    _defineProperty(this, "onSuggestionsClearRequested", () => {
      this.setState({
        groupList: []
      });
    });
    _defineProperty(this, "renderSuggestion", suggestion => {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1440,
          columnNumber: 17
        }
      }, " ", suggestion.label, " ");
    });
    _defineProperty(this, "onSelectGroup", (event, {
      suggestion
    }) => {
      const groupId = suggestion.value;
      let lineId = 0;
      let lineName = '';
      const updateFilterLineList = this.state.lineList.filter(line => Number(groupId) === line.group);
      if (updateFilterLineList.length > 0) {
        lineId = updateFilterLineList[0].value;
        lineName = updateFilterLineList[0].label;
      }
      const group = _objectSpread(_objectSpread({}, this.state.loadedGroup), {}, {
        id: parseInt(groupId)
      });
      const line = _objectSpread(_objectSpread({}, this.state.loadedLine), {}, {
        name: lineName,
        id: lineId,
        id_group: groupId
      });
      this.setState({
        loadedGroup: group,
        lineListFilter: updateFilterLineList,
        loadedLine: line
      });
    });
    _defineProperty(this, "onSelectType", (event, {
      suggestion
    }) => {
      const type = suggestion.value;
      const product = _objectSpread(_objectSpread({}, this.state.loadedProduct), {}, {
        type
      });
      this.setState({
        loadedProduct: product
      });
    });
    _defineProperty(this, "onSelectBrand", (event, {
      suggestion
    }) => {
      const brandId = suggestion.value;
      const brand = _objectSpread(_objectSpread({}, this.state.loadedBrand), {}, {
        id: parseInt(brandId)
      });
      this.setState({
        loadedBrand: brand
      });
    });
    _defineProperty(this, "onSelectUnit", (event, {
      suggestion
    }) => {
      const unitId = suggestion.value;
      const unit = _objectSpread(_objectSpread({}, this.state.loadedUnit), {}, {
        id: parseInt(unitId)
      });
      this.setState({
        loadedUnit: unit
      });
    });
    _defineProperty(this, "onSelectLIne", (event, {
      suggestion
    }) => {
      const lineId = suggestion.value;
      const line = _objectSpread(_objectSpread({}, this.state.loadedLine), {}, {
        id: parseInt(lineId),
        name: suggestion.label,
        id_group: suggestion.group
      });
      this.setState({
        loadedLine: line
      });
    });
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.events.on('beforeHistoryChange', async url => {
      try {
        const {
          isBeingValidatedByCurrentUser,
          selectedScanId
        } = this.state;
        if (selectedScanId) {
          const isNextUrlHome = url == '/home';
          if (isBeingValidatedByCurrentUser && !isNextUrlHome) {
            await this.updateBeingValidatedStatus('disable', selectedScanId);
          }
        }
      } catch (error) {
        console.error(error);
      }
    });
  }
  async componentDidMount() {
    const isCustom = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["IsCustomTheme"])();
    const hasDarkTheme = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getDarkTheme"])() === '1' ? true : false;
    if (hasDarkTheme) {
      document.querySelector('body').classList.remove('custom');
      document.querySelector('body').classList.add('darkmode');
    }
    if (isCustom) {
      const theme = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getTheme"])();
      const currentTheme = Object(_utils_theme__WEBPACK_IMPORTED_MODULE_23__["buildTheme"])(theme);
      const style = document.createElement('style');
      style.innerHTML = currentTheme;
      document.body.appendChild(style);
      document.querySelector('body').classList.add('custom');
    }
    Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["validateSession"])();
    const groupList = await Object(_utils_catalogs__WEBPACK_IMPORTED_MODULE_14__["getGroupsCatalog"])();
    const missionList = await Object(_utils_catalogs__WEBPACK_IMPORTED_MODULE_14__["getMissionsValidation"])();
    const brandList = await Object(_utils_catalogs__WEBPACK_IMPORTED_MODULE_14__["getBrandsCatalog"])();
    const unitList = await Object(_utils_catalogs__WEBPACK_IMPORTED_MODULE_14__["getUnitsCatalog"])();
    const storeList = await Object(_utils_catalogs__WEBPACK_IMPORTED_MODULE_14__["getStoresCatalog"])();
    const lineList = await Object(_utils_catalogs__WEBPACK_IMPORTED_MODULE_14__["getLinesCatalog"])();
    const lineListFilter = await Object(_utils_catalogs__WEBPACK_IMPORTED_MODULE_14__["getLinesCatalog"])();
    missionList.unshift({
      value: '',
      label: 'Todas'
    });
    this.setState({
      groupList,
      brandList,
      unitList,
      missionList,
      storeList,
      lineList,
      lineListFilter,
      showLoader: true
    });
    await this.getScanList(true);
    document.addEventListener('keydown', this.handleTab);
    document.addEventListener('click', this.handleInputClick);
    window.addEventListener("beforeunload", this.handleWindowClose);
  }
  handleInputClick(event) {
    const {
      target
    } = event;
    if (target.classList.contains('indexed-element')) {
      if (target.select) {
        target.select();
      }
    }
  }
  async componentDidUpdate() {
    const {
      selectedScanId,
      isBeingValidated,
      isBeingValidatedByCurrentUser,
      currentScanWasVerified
    } = this.state;
    if (this.state.selectedScanId) {
      document.addEventListener('keydown', this.handleCommands);
    } else {
      document.removeEventListener('keydown', this.handleCommands);
    }
  }
  handleTab(event) {
    const keyCode = event.which ? event.which : event.keyCode;
    const key = event.code ? event.code : event.key;
    const isTabKey = keyCode === 9 && key === 'Tab';
    if (document && isTabKey) {
      event.preventDefault();
      event.stopPropagation();
      let indexedElements = [];
      indexedElements = document.querySelectorAll('.indexed-element:not([tabindex="-1"])');
      indexedElements = [...indexedElements].sort((a, b) => a.tabIndex - b.tabIndex);
      if (indexedElements.length) {
        const currentElement = event.target;
        const nextElementIndex = currentElement.tabIndex + 1;
        const nextElement = indexedElements.find(element => element.tabIndex === nextElementIndex);
        if (nextElement) {
          nextElement.focus();
          if (nextElement.select) {
            nextElement.select();
          }
        } else {
          if (indexedElements.length && indexedElements[0] && indexedElements[0].select) {
            indexedElements[0].focus();
            indexedElements[0].select();
          }
        }
      }
    }
  }
  render() {
    const {
      scans,
      loadedScan,
      groupList,
      missionList,
      brandList,
      unitList,
      storeList,
      lineListFilter,
      loadedStore,
      loadedProduct,
      loadedMaxPrice,
      loadedMinPricePromotion,
      loadedMinPrice,
      loadedRecentPrice,
      lat,
      lng,
      loadedBrand,
      loadedLine,
      loadedGroup,
      loadedUnit,
      showModal,
      isImageModal,
      selectedScanId,
      showLoader,
      disabledFilterBtn,
      barcodeErrorMsg,
      priceErrorMsg,
      productNameErrorMsg,
      productTypeErrorMsg,
      productBrandErrorMsg,
      productLineErrorMsg,
      productUnitErrorMsg,
      productGroupErrorMsg,
      showRejectModal,
      selectedRadio,
      showMessageNoElements,
      selectedPicture,
      imageVis,
      isBeingValidated,
      isBeingValidatedByCurrentUser,
      resetLine
    } = this.state;
    const locale = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_3__["getLocale"])();
    brandList.sort((a, b) => a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1);
    unitList.sort((a, b) => a.label.toLowerCase() > b.label.toLowerCase() ? 1 : -1);
    const existProduct = loadedScan.product ? true : false;
    const captureDate = Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_17__["default"])(loadedScan.capture_date);
    const fullName = `${loadedScan.scanned_by.first_name} ${loadedScan.scanned_by.last_name}`;
    const recentPriceDate = existProduct && loadedRecentPrice.capture_date.length > 0 ? Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_17__["default"])(loadedRecentPrice.capture_date) : null;
    const maxPriceDate = existProduct && loadedMaxPrice.capture_date.length > 0 ? Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_17__["default"])(loadedMaxPrice.capture_date) : null;
    const minPriceDate = existProduct && loadedMinPrice.capture_date.length > 0 ? Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_17__["default"])(loadedMinPrice.capture_date) : null;
    const minPricePromoDate = existProduct && loadedMinPricePromotion.capture_date.length > 0 ? Object(_utils_format_date__WEBPACK_IMPORTED_MODULE_17__["default"])(loadedMinPricePromotion.capture_date) : null;
    const tabs = existProduct ? tabOrderBlockedProduct : tabOrder;
    const specialAndExist = existProduct && loadedScan.special_price;
    const tabsSpecial = existProduct ? tabOrderBlockedProductSpecial : tabOrderSpecial;
    const loadedGroupName = loadedGroup && loadedGroup.name ? loadedGroup.name : '';
    const loadedBrandName = loadedBrand && loadedBrand.name ? loadedBrand.name : '';
    const loadedProductType = loadedProduct && loadedProduct.type ? loadedProduct.type : '';
    const loadedUnitName = loadedUnit && loadedUnit.name ? loadedUnit.name : '';
    const loadedLineName = loadedLine && loadedLine.name ? loadedLine.name : '';
    const radioMapFirst = [{
      id: 'blurry',
      value: 0,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.radioMapFirst.blurry'),
      checked: selectedRadio === 0
    }, {
      id: 'farAway',
      value: 1,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.radioMapFirst.farAway'),
      checked: selectedRadio === 1
    }, {
      id: 'dark',
      value: 2,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.radioMapFirst.dark'),
      checked: selectedRadio === 2
    }, {
      id: 'incomplete',
      value: 3,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.radioMapFirst.incomplete'),
      checked: selectedRadio === 3
    }, {
      id: 'doesntMatch',
      value: 4,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.radioMapFirst.doesntMatch'),
      checked: selectedRadio === 4
    }];
    const radioSecond = [{
      id: 'outsideShop',
      value: 5,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.radioSecond.outsideShop'),
      checked: selectedRadio === 5
    }, {
      id: 'shopTicket',
      value: 6,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.radioSecond.shopTicket'),
      checked: selectedRadio === 6
    }, {
      id: 'anotherCell',
      value: 7,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.radioSecond.anotherCell'),
      checked: selectedRadio === 7
    }, {
      id: 'testScan',
      value: 8,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.radioSecond.testScan'),
      checked: selectedRadio === 8
    }];
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_2__["Header"], {
      locale: locale,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1667,
        columnNumber: 17
      }
    }), __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1669,
        columnNumber: 17
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1670,
        columnNumber: 21
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.title'))), __jsx(_components_modal_Modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
      noPadding: true,
      containerWidth: "40%",
      showModal: showModal,
      isImageModal: isImageModal,
      closeModal: this.handleCloseModal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1675,
        columnNumber: 17
      }
    }, __jsx("span", {
      onClick: () => this.handleCloseModal(),
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.modalImageClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1681,
        columnNumber: 21
      }
    }, __jsx("img", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.closeButton,
      src: "/img/close-button.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1685,
        columnNumber: 25
      }
    })), __jsx("img", {
      src: selectedPicture,
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.modalImage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1688,
        columnNumber: 21
      }
    })), __jsx(_components_modal_Modal__WEBPACK_IMPORTED_MODULE_16__["default"], {
      noPadding: false,
      containerWidth: "60%",
      showModal: showRejectModal,
      isImageModal: false,
      closeModal: this.closeReject,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1691,
        columnNumber: 17
      }
    }, __jsx("span", {
      onClick: () => this.closeReject(),
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.modalImageClose,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1697,
        columnNumber: 21
      }
    }, __jsx("img", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.closeButton,
      src: "/img/close-button.svg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1701,
        columnNumber: 25
      }
    })), __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1703,
        columnNumber: 21
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.modal.reject.subject')), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.containerRadio,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1706,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.displayRadio,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1707,
        columnNumber: 25
      }
    }, radioMapFirst.map(item => __jsx("div", {
      key: `id-${item.id}-${item.value}`,
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.formContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1710,
        columnNumber: 37
      }
    }, __jsx("input", {
      id: item.id,
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.labelRadio,
      value: item.value,
      checked: item.checked,
      style: {
        padding: '7px'
      },
      name: item.id,
      type: "radio",
      onChange: this.onChangeRadio,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1711,
        columnNumber: 41
      }
    }), __jsx("label", {
      style: {
        padding: '7px'
      },
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.labelRadio,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1720,
        columnNumber: 41
      }
    }, item.label)))), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.displayRadio,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1725,
        columnNumber: 25
      }
    }, radioSecond.map(item => __jsx("div", {
      key: `id-${item.id}-${item.value}`,
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.formContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1728,
        columnNumber: 37
      }
    }, __jsx("input", {
      id: item.id,
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.labelRadio,
      value: item.value,
      checked: item.checked,
      style: {
        padding: '7px'
      },
      name: item.id,
      type: "radio",
      onChange: this.onChangeRadio,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1729,
        columnNumber: 41
      }
    }), __jsx("label", {
      style: {
        padding: '7px'
      },
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.labelRadio,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1738,
        columnNumber: 41
      }
    }, item.label)))))), __jsx(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_18__["default"], {
      show: showLoader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1745,
        columnNumber: 17
      }
    }), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1747,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.itemList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1748,
        columnNumber: 21
      }
    }, __jsx(_components_pageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_20__["default"], {
      title: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.sidebar.title'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1749,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.formContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1751,
        columnNumber: 25
      }
    }, __jsx(_components_select__WEBPACK_IMPORTED_MODULE_6__["Select"], {
      bgColor: "transparent",
      options: missionList,
      onChange: this.changeMissionFilterHandler,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.sidebar.input.mission.label'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1752,
        columnNumber: 29
      }
    })), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.formContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1760,
        columnNumber: 25
      }
    }, __jsx(_components_select__WEBPACK_IMPORTED_MODULE_6__["Select"], {
      bgColor: "transparent",
      options: this.state.scanFilter,
      onChange: this.changeProductHandler,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.sidebar.input.product.label'),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1761,
        columnNumber: 29
      }
    })), __jsx("hr", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1769,
        columnNumber: 25
      }
    }), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.capturesList,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1771,
        columnNumber: 25
      }
    }, scans.map(scan => __jsx("p", {
      className: `${scan.product.length === 0 ? '' : _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.withProduct}${scan.id === selectedScanId ? ` current-product ${_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.currentProduct}` : ''}`,
      onClick: () => this.scanSelectedHandler(scan.id),
      key: scan.id,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1773,
        columnNumber: 33
      }
    }, scan.id)))), !showMessageNoElements && __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.productScan,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1785,
        columnNumber: 25
      }
    }, isBeingValidated && !isBeingValidatedByCurrentUser && __jsx("h5", {
      className: "text-danger",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1789,
        columnNumber: 37
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.topBar.beingValidated')), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.scannerDataContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1794,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.element,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1795,
        columnNumber: 33
      }
    }, loadedScan.scanned_by.employee_number ? loadedScan.scanned_by.employee_number : Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.topBar.withoutNumber')), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.elementBold,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1802,
        columnNumber: 33
      }
    }, fullName), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.element,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1806,
        columnNumber: 33
      }
    }, captureDate), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.element,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1810,
        columnNumber: 33
      }
    }, loadedScan.mission ? loadedScan.mission.title : Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.topBar.withoutMission'))), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.dataContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1815,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1816,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "width50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1817,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.imageLeft,
      style: {
        backgroundImage: `url("${loadedScan.pictures.length > 0 ? loadedScan.pictures[0].product_picture : ''}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        cursor: 'pointer'
      },
      onClick: () => this.selectImage(loadedScan.pictures[0].product_picture),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1818,
        columnNumber: 41
      }
    }), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1829,
        columnNumber: 41
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.productImage.label'))), __jsx("div", {
      className: "width50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1834,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.imageRight,
      style: {
        backgroundImage: `url("${loadedScan.pictures.length > 0 ? loadedScan.pictures[0].shelf_picture : ''}")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        cursor: 'pointer'
      },
      onClick: () => this.selectImage(loadedScan.pictures[0].shelf_picture),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1835,
        columnNumber: 41
      }
    }), __jsx("p", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.priceText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1846,
        columnNumber: 37
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.priceImage.label')))), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1852,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "width30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1853,
        columnNumber: 37
      }
    }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_10__["Input"], {
      defaultValue: loadedScan.barcode,
      placeholderColor: "#6d1515",
      type: "text",
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.barcode.label'),
      onChange: this.barcodeHandler,
      errorMessage: barcodeErrorMsg,
      tabindex: loadedScan.special_price ? tabsSpecial.barcode : tabs.barcode,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1854,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "width30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1866,
        columnNumber: 37
      }
    }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_10__["Input"], {
      defaultValue: loadedScan.price,
      type: "text",
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.price.label'),
      onChange: this.priceHandler,
      errorMessage: priceErrorMsg,
      tabindex: tabs.price,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1867,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "width30",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1878,
        columnNumber: 37
      }
    }, __jsx(_components_checkbox__WEBPACK_IMPORTED_MODULE_11__["Checkbox"], {
      onChange: this.specialPriceCheckHandler,
      checked: loadedScan.special_price,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.promotionPrice.label'),
      tabindex: loadedScan.special_price ? tabsSpecial.special_price : tabs.special_price,
      checkboxClassName: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1879,
        columnNumber: 41
      }
    }), loadedScan.special_price ? __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_7__["SecondaryButton"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.option.showPicture'),
      tabindex: loadedScan.special_price ? tabsSpecial.viewPicture : tabs.viewPicture,
      className: "indexed-element",
      onClick: () => this.selectImage(loadedScan.pictures[0].promo_picture),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1888,
        columnNumber: 45
      }
    }) : '')), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1899,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1901,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "width45",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1902,
        columnNumber: 37
      }
    }, __jsx(_components_select__WEBPACK_IMPORTED_MODULE_6__["Select"], {
      defaultOption: loadedStore.storeId,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.store.label'),
      options: storeList,
      onChange: this.changeStoreHandler,
      tabindex: loadedScan.special_price ? tabsSpecial.store : tabs.store,
      className: "store-input indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1903,
        columnNumber: 41
      }
    }))), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1914,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1916,
        columnNumber: 33
      }
    }, __jsx("div", {
      style: {
        marginBottom: '0.5rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1917,
        columnNumber: 37
      }
    }, __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_7__["SecondaryButton"], {
      variant: _components_buttons_SecondaryButton__WEBPACK_IMPORTED_MODULE_9__["SecondaryButtonVariant"].Error,
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.option.reject'),
      tabindex: loadedScan.special_price ? tabsSpecial.reject : tabs.reject,
      onClick: this.openReject,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1918,
        columnNumber: 41
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1926,
        columnNumber: 37
      }
    }, __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_7__["PrimaryButton"], {
      label: this.state.existProduct ? Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.option.validate') : Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.option.validateAndAdd'),
      tabindex: loadedScan.special_price ? tabsSpecial.validate : tabs.validate,
      onClick: this.validateScanButtonHandler,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1927,
        columnNumber: 41
      }
    }))), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1935,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1937,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1939,
        columnNumber: 33
      }
    }), loadedStore.address && __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1942,
        columnNumber: 37
      }
    }, __jsx("div", {
      className: "width100",
      style: {
        position: 'relative',
        height: '12rem'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1943,
        columnNumber: 41
      }
    }, __jsx(_components_map_Map__WEBPACK_IMPORTED_MODULE_19__["default"], {
      lat: lat,
      lng: lng,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1947,
        columnNumber: 45
      }
    }))), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1951,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1952,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "width100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1953,
        columnNumber: 37
      }
    }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_10__["Input"], {
      defaultValue: loadedStore.address,
      type: "text",
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.address.label'),
      onChange: this.addressHandler,
      tabindex: loadedScan.special_price ? tabsSpecial.address : tabs.address,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1954,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "width100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1964,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1967,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1969,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "width100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1970,
        columnNumber: 37
      }
    }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_10__["Input"], {
      defaultValue: loadedScan.comments,
      type: "text",
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.scan.input.aditionalComments.label'),
      tabindex: loadedScan.special_price ? tabsSpecial.comments : tabs.comments,
      onChange: this.commentHandler,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1971,
        columnNumber: 41
      }
    }))))), !showMessageNoElements && __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.productData,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1987,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: existProduct ? _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.productDataContainerCompleted : _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.productDataContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1988,
        columnNumber: 29
      }
    }, __jsx("p", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1990,
        columnNumber: 33
      }
    }, existProduct ? "" : Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.title')), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1994,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "width100",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1995,
        columnNumber: 37
      }
    }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_10__["Input"], {
      defaultValue: loadedProduct.name,
      type: "text",
      isBlack: true,
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.name.label'),
      bgColor: existProduct ? "Black" : "",
      placeholderColor: existProduct ? "#FFF" : "",
      color: existProduct ? "White" : "",
      onChange: this.productNameHandler,
      disabled: existProduct,
      errorMessage: productNameErrorMsg,
      tabindex: loadedScan.special_price ? tabsSpecial.productName : tabs.productName,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1996,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "width100",
      style: {
        marginTop: '5%'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2012,
        columnNumber: 37
      }
    }, imageVis && __jsx("img", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.image,
      src: imageVis,
      onClick: () => this.selectImage(imageVis),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2014,
        columnNumber: 57
      }
    }), !existProduct && __jsx("div", {
      style: {
        margin: '1em 0em 3em 0em'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2018,
        columnNumber: 45
      }
    }, __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_7__["SecondaryButton"], {
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.option.changeImage'),
      tabindex: loadedScan.special_price ? tabsSpecial.productImage : tabs.productImage,
      className: "indexed-element",
      onClick: () => {
        this.productRef.click();
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2019,
        columnNumber: 49
      }
    }), __jsx("input", {
      style: {
        display: 'none'
      },
      type: "file",
      onChange: this.changeProductPicture,
      ref: ref => this.productRef = ref,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2026,
        columnNumber: 49
      }
    })))), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2037,
        columnNumber: 33
      }
    }), __jsx("div", {
      className: "row",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2039,
        columnNumber: 33
      }
    }, __jsx("div", {
      className: "width45",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2040,
        columnNumber: 37
      }
    }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_10__["Input"], {
      defaultValue: existProduct ? loadedProduct.barcode : loadedScan.barcode,
      type: "text",
      isBlack: existProduct,
      placeholderColor: existProduct ? 'White' : '',
      bgColor: existProduct ? 'Black' : '',
      color: existProduct ? 'White' : '',
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.barcode.label'),
      disabled: true,
      onChange: this.barcodeHandler,
      tabindex: loadedScan.special_price ? tabsSpecial.productBarcode : tabs.productBarcode,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2041,
        columnNumber: 41
      }
    }), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2054,
        columnNumber: 41
      }
    }), __jsx(_components_input__WEBPACK_IMPORTED_MODULE_10__["Input"], {
      defaultValue: loadedProduct.quantity,
      isBlack: true,
      type: "text",
      placeholderColor: existProduct ? 'White' : '',
      bgColor: existProduct ? 'Black' : '',
      color: existProduct ? 'White' : '',
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.amount.label'),
      onChange: this.quantityHandler,
      disabled: existProduct,
      tabindex: loadedScan.special_price ? tabsSpecial.productQuantity : tabs.productQuantity,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2056,
        columnNumber: 41
      }
    }), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2070,
        columnNumber: 41
      }
    }), __jsx(_components_autocomplete__WEBPACK_IMPORTED_MODULE_8__["Autocomplete"], {
      getSuggestions: value => this.getSuggestions(value, groupList),
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion,
      onSuggestionSelected: this.onSelectGroup,
      tabindex: loadedScan.special_price ? tabsSpecial.productGroup : tabs.productGroup,
      disabled: existProduct,
      useWhiteText: existProduct,
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.group.label'),
      defaultValue: loadedGroupName,
      resetLine: resetLine,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2071,
        columnNumber: 41
      }
    }), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2083,
        columnNumber: 41
      }
    }), __jsx(_components_select__WEBPACK_IMPORTED_MODULE_6__["Select"], {
      defaultOption: loadedProduct.type || '0',
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.type.label'),
      bgColor: existProduct ? 'Black' : '',
      color: existProduct ? 'White' : '#565656',
      placeholderColor: existProduct ? 'White' : '',
      options: this.typeFilter,
      onChange: this.changeTypeHandler,
      isDisabled: existProduct,
      errorMessage: productTypeErrorMsg,
      tabindex: loadedScan.special_price ? tabsSpecial.productType : tabs.productType,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2084,
        columnNumber: 41
      }
    })), __jsx("div", {
      className: "width45",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2100,
        columnNumber: 37
      }
    }, __jsx(_components_select__WEBPACK_IMPORTED_MODULE_6__["Select"], {
      defaultOption: loadedBrand && loadedBrand.id || '0',
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.brand.label'),
      bgColor: existProduct ? 'Black' : '',
      color: existProduct ? 'White' : '#565656',
      placeholderColor: existProduct ? 'White' : '',
      options: brandList,
      onChange: this.changeBrandHandler,
      isDisabled: existProduct,
      errorMessage: productBrandErrorMsg,
      tabindex: loadedScan.special_price ? tabsSpecial.productBrand : tabs.productBrand,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2101,
        columnNumber: 41
      }
    }), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2114,
        columnNumber: 41
      }
    }), __jsx(_components_select__WEBPACK_IMPORTED_MODULE_6__["Select"], {
      defaultOption: loadedUnit.id || '0',
      label: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.unit.label'),
      bgColor: existProduct ? 'Black' : '',
      color: existProduct ? 'White' : '#565656',
      placeholderColor: existProduct ? 'White' : '',
      options: unitList,
      onChange: this.changeUnitHandler,
      isDisabled: existProduct,
      errorMessage: productUnitErrorMsg,
      tabindex: loadedScan.special_price ? tabsSpecial.productUnit : tabs.productUnit,
      className: "indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2115,
        columnNumber: 41
      }
    }), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.separator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2128,
        columnNumber: 41
      }
    }), __jsx(_components_autocomplete__WEBPACK_IMPORTED_MODULE_8__["Autocomplete"], {
      getSuggestions: value => this.getSuggestions(value, lineListFilter),
      getSuggestionValue: this.getSuggestionValue,
      renderSuggestion: this.renderSuggestion,
      onSuggestionSelected: this.onSelectLIne,
      tabindex: loadedScan.special_price ? tabsSpecial.productLine : tabs.productLine,
      disabled: existProduct,
      useWhiteText: existProduct,
      placeholder: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.product.input.line.label'),
      defaultValue: loadedLineName,
      resetLine: resetLine,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2130,
        columnNumber: 41
      }
    })))), __jsx("p", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2146,
        columnNumber: 29
      }
    }, "Historial"), __jsx("div", {
      className: `${_home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.historyContainer} ${existProduct ? 'productHistoryContainer' : ''}`,
      style: existProduct ? {
        backgroundColor: 'black'
      } : {
        backgroundColor: 'white'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2148,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.squareContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2152,
        columnNumber: 33
      }
    }, __jsx(_components_square_Square__WEBPACK_IMPORTED_MODULE_12__["default"], {
      date: recentPriceDate,
      title: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.history.recent'),
      value: existProduct && loadedRecentPrice.price !== 0 ? loadedRecentPrice.price : null,
      bgColor: existProduct && loadedRecentPrice.price !== 0 ? '#3f4d5e' : '',
      color: existProduct && loadedRecentPrice.price !== 0 ? 'white' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2153,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.squareContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2162,
        columnNumber: 33
      }
    }, __jsx(_components_square_Square__WEBPACK_IMPORTED_MODULE_12__["default"], {
      date: maxPriceDate,
      title: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.history.mostExpensive'),
      value: existProduct && loadedMaxPrice.price !== 0 ? loadedMaxPrice.price : null,
      bgColor: existProduct && loadedMaxPrice.price !== 0 ? '#f55d5d' : '',
      color: existProduct && loadedMaxPrice.price !== 0 ? 'white' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2163,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.squareContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2172,
        columnNumber: 33
      }
    }, __jsx(_components_square_Square__WEBPACK_IMPORTED_MODULE_12__["default"], {
      date: minPriceDate,
      title: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.history.cheapest'),
      value: existProduct && loadedMinPrice.price !== 0 ? loadedMinPrice.price : null,
      bgColor: existProduct && loadedMinPrice.price !== 0 ? '#71a4e4' : '',
      color: existProduct && loadedMinPrice.price !== 0 ? 'white' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2173,
        columnNumber: 37
      }
    })), __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.squareContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2182,
        columnNumber: 33
      }
    }, __jsx(_components_square_Square__WEBPACK_IMPORTED_MODULE_12__["default"], {
      date: minPricePromoDate,
      title: Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.history.cheapestWithPromotion'),
      value: existProduct && loadedMinPricePromotion.price !== 0 ? loadedMinPricePromotion.price : null,
      bgColor: existProduct && loadedMinPricePromotion.price !== 0 ? '#48a858' : '',
      color: existProduct && loadedMinPricePromotion.price !== 0 ? 'white' : '',
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2183,
        columnNumber: 37
      }
    })))), showMessageNoElements && __jsx("div", {
      className: _home_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.messageNoElementsContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2196,
        columnNumber: 25
      }
    }, __jsx("h2", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2197,
        columnNumber: 29
      }
    }, Object(_i18n__WEBPACK_IMPORTED_MODULE_22__["getI18nLabel"])(locale, 'home.welcome')))), __jsx(react_nextjs_toast__WEBPACK_IMPORTED_MODULE_21__["ToastContainer"], {
      align: "left",
      position: "bottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 2201,
        columnNumber: 17
      }
    }));
  }
}
const withRouter = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__["useRouter"])();
  return __jsx(HomePage, _extends({}, props, {
    router: router,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2209,
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

/***/ "@react-google-maps/api":
/*!*****************************************!*\
  !*** external "@react-google-maps/api" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@react-google-maps/api");

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

/***/ "react-autosuggest":
/*!************************************!*\
  !*** external "react-autosuggest" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-autosuggest");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-nextjs-toast":
/*!*************************************!*\
  !*** external "react-nextjs-toast" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-nextjs-toast");

/***/ })

/******/ });