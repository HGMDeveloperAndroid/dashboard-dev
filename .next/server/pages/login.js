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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/externalContainer/ExternalContainer.tsx":
/*!************************************************************!*\
  !*** ./components/externalContainer/ExternalContainer.tsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _externalContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./externalContainer.module.scss */ "./components/externalContainer/externalContainer.module.scss");
/* harmony import */ var _externalContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_externalContainer_module_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\externalContainer\\ExternalContainer.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


class LoginPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      logo: ""
    });
  }
  componentDidMount() {
    // const logo = getLogo();
    this.setState({
      logo: "https://app.pricecheck3b.com/img/logo.png"
    });
  }
  render() {
    const {
      logo
    } = this.state;
    return __jsx("div", {
      className: _externalContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.pageContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _externalContainer_module_scss__WEBPACK_IMPORTED_MODULE_1___default.a.loginContainer,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
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
        lineNumber: 19,
        columnNumber: 21
      }
    }), this.props.children));
  }
}
/* harmony default export */ __webpack_exports__["default"] = (LoginPage);

/***/ }),

/***/ "./components/externalContainer/externalContainer.module.scss":
/*!********************************************************************!*\
  !*** ./components/externalContainer/externalContainer.module.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"pageContainer": "externalContainer_pageContainer__3gn_U",
	"loginContainer": "externalContainer_loginContainer__2zPKQ",
	"logo": "externalContainer_logo__1T460"
};


/***/ }),

/***/ "./components/externalContainer/index.js":
/*!***********************************************!*\
  !*** ./components/externalContainer/index.js ***!
  \***********************************************/
/*! exports provided: ExternalContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ExternalContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ExternalContainer */ "./components/externalContainer/ExternalContainer.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExternalContainer", function() { return _ExternalContainer__WEBPACK_IMPORTED_MODULE_0__["default"]; });




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

/***/ "./pages/login/index.tsx":
/*!*******************************!*\
  !*** ./pages/login/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/input */ "./components/input/index.js");
/* harmony import */ var _components_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/buttons */ "./components/buttons/index.js");
/* harmony import */ var _components_externalContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/externalContainer */ "./components/externalContainer/index.js");
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/api */ "./utils/api.ts");
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/session-management */ "./utils/session-management.ts");
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.module.scss */ "./pages/login/login.module.scss");
/* harmony import */ var _login_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_login_module_scss__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\pages\\login\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









class LoginPage extends react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"] {
  constructor(...args) {
    super(...args);
    _defineProperty(this, "state", {
      username: '',
      password: '',
      token: '',
      showErrorMessage: false,
      errorMessage: ''
    });
    _defineProperty(this, "usernameChangeHandler", e => {
      const {
        value
      } = e.target;
      this.setState({
        username: value
      });
    });
    _defineProperty(this, "passwordChangeHandler", e => {
      const {
        value
      } = e.target;
      this.setState({
        password: value
      });
    });
    _defineProperty(this, "login", async e => {
      e.preventDefault();
      try {
        const response = await _utils_api__WEBPACK_IMPORTED_MODULE_6__["default"].post('/api/login', {
          username: this.state.username,
          password: this.state.password
        });
        if ((response === null || response === void 0 ? void 0 : response.status) === 200) {
          const user = response.data.user;
          const token = response.data.token;
          const {
            settings: {
              language
            }
          } = user;
          if (user.roles.includes('Scanner')) {
            this.setState({
              showErrorMessage: true,
              errorMessage: 'No tienes acceso a este sistema. Solo tienes permisos para la aplicación móvil.'
            });
          } else {
            Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_7__["createSession"])(token, `${user.first_name} ${user.last_name}`, user.roles, user.picture_path, user.id, user && user.theme && user.theme.dark_theme ? user.theme.dark_theme : 0, user.theme, user && user.theme && user.theme.logo_path ? user.theme.logo_path : "", language.abbreviation);
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/home');
          }
        }
      } catch (error) {
        var _error$response;
        if (error && error.response && error.response.status && error.response.status === 307) {
          const user = error.response.data.user;
          const token = error.response.data.token;
          Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_7__["createSession"])(token, `${user.first_name} ${user.last_name}`, user.roles, user.picture_path, user.id, user && user.theme && user.theme.dark_theme ? user.theme.dark_theme : 0, user.theme, user && user.theme && user.theme.logo_path ? user.theme.logo_path : "");
          next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push({
            pathname: '/change-password',
            query: {
              password: this.state.password
            }
          });
        }
        if ((error === null || error === void 0 ? void 0 : (_error$response = error.response) === null || _error$response === void 0 ? void 0 : _error$response.status) === 401) {
          this.setState({
            showErrorMessage: true,
            errorMessage: 'Usuario o contraseña incorrectos'
          });
        }
      }
    });
  }
  componentDidMount() {
    document.querySelector('body').classList.remove('darkmode');
    document.querySelector('body').classList.remove('custom');
    const userInput = document.querySelector('.login-user-input');
    userInput.focus();
    document.addEventListener('keydown', this.handleTab);
  }
  handleTab(event) {
    const keyCode = event.which ? event.which : event.keyCode;
    const key = event.code ? event.code : event.key;
    const isTabKey = keyCode === 9 && key === 'Tab';
    if (document && isTabKey) {
      event.preventDefault();
      event.stopPropagation();
      let indexedElements = [];
      indexedElements = document.querySelectorAll('.indexed-element[tabindex]');
      indexedElements = [...indexedElements].sort((a, b) => a.tabIndex - b.tabIndex);
      if (indexedElements.length) {
        const currentElement = event.target;
        const nextElementIndex = currentElement.tabIndex + 1;
        const nextElement = indexedElements.find(element => element.tabIndex === nextElementIndex);
        if (nextElement) {
          nextElement.focus();
        } else {
          indexedElements[0].focus();
        }
      }
    }
  }
  render() {
    const {
      showErrorMessage,
      errorMessage
    } = this.state;
    return __jsx(_components_externalContainer__WEBPACK_IMPORTED_MODULE_5__["ExternalContainer"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 13
      }
    }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 17
      }
    }, __jsx("title", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 21
      }
    }, "Iniciar sesi\xF3n")), __jsx("p", {
      className: _login_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.title,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 17
      }
    }, "http://192.200.2.169:8000", "\xA1Bienvenido! Ingresa tu contrase\xF1a"), __jsx("form", {
      onSubmit: this.login,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _login_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.input,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 21
      }
    }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      defaultValue: this.state.username,
      onChange: this.usernameChangeHandler,
      type: "text",
      placeholder: "Usuario",
      tabindex: 1,
      className: "login-user-input indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: _login_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.input,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 21
      }
    }, __jsx(_components_input__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      defaultValue: this.state.password,
      onChange: this.passwordChangeHandler,
      type: "password",
      placeholder: "Contrase\xF1a",
      tabindex: 2,
      className: "login-user-pass indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 25
      }
    })), __jsx("p", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }
    }, __jsx(_components_buttons__WEBPACK_IMPORTED_MODULE_4__["PrimaryButton"], {
      type: "submit",
      label: "Ingresar",
      tabindex: 3,
      className: "login-user-pass indexed-element",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 25
      }
    })), showErrorMessage && __jsx("p", {
      className: _login_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.errorMessage,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 42
      }
    }, errorMessage)));
  }
}

/***/ }),

/***/ "./pages/login/login.module.scss":
/*!***************************************!*\
  !*** ./pages/login/login.module.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"title": "login_title__2D0Qy",
	"input": "login_input__3dH5V",
	"errorMessage": "login_errorMessage__27Wg4"
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL1ByaW1hcnlCdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9TZWNvbmRhcnlCdXR0b24udHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9idXR0b24ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9idXR0b25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXh0ZXJuYWxDb250YWluZXIvRXh0ZXJuYWxDb250YWluZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvZXh0ZXJuYWxDb250YWluZXIvZXh0ZXJuYWxDb250YWluZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9leHRlcm5hbENvbnRhaW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2lucHV0L0ZpbGUudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvSW5wdXQudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvaW5wdXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4vbG9naW4ubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYXBpLnRzIiwid2VicGFjazovLy8uL3V0aWxzL2Jhc2VVcmwudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvc2Vzc2lvbi1tYW5hZ2VtZW50LnRzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIl0sIm5hbWVzIjpbIlByaW1hcnlCdXR0b25WYXJpYW50IiwiUHJpbWFyeUJ1dHRvbiIsImNsYXNzTmFtZSIsInRhYmluZGV4IiwibGFiZWwiLCJ0eXBlIiwib25DbGljayIsImRpc2FibGVkIiwidmFyaWFudCIsImJ1dHRvbkNsYXNzIiwiRXJyb3IiLCJzdHlsZXMiLCJwcmltYXJ5QnV0dG9uRXJyb3IiLCJwcmltYXJ5QnV0dG9uIiwiX19qc3giLCJ0YWJJbmRleCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiZGVmYXVsdFByb3BzIiwiU3VjY2VzcyIsIlNlY29uZGFyeUJ1dHRvblZhcmlhbnQiLCJTZWNvbmRhcnlCdXR0b24iLCJub0JvcmRlciIsInNlY29uZGFyeUJ1dHRvbiIsInNlY29uZGFyeUJ1dHRvbkVycm9yIiwic3R5bGUiLCJib3JkZXIiLCJMb2dpblBhZ2UiLCJQdXJlQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJhcmdzIiwiX2RlZmluZVByb3BlcnR5IiwibG9nbyIsImNvbXBvbmVudERpZE1vdW50Iiwic2V0U3RhdGUiLCJyZW5kZXIiLCJzdGF0ZSIsInBhZ2VDb250YWluZXIiLCJsb2dpbkNvbnRhaW5lciIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwicHJvcHMiLCJjaGlsZHJlbiIsIkZpbGUiLCJhY2NlcHRlZEZvcm1hdHMiLCJvbkNoYW5nZSIsImZpbGVDb250YWluZXIiLCJyZWYiLCJpbnB1dFJlZiIsImUiLCJmaWxlIiwiYWNjZXB0IiwiY2xpY2siLCJidXR0b24iLCJGb250QXdlc29tZUljb24iLCJpY29uIiwiZmFVcGxvYWQiLCJJbnB1dCIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwiYmdDb2xvciIsImNvbG9yIiwib25LZXlQcmVzcyIsImVycm9yTWVzc2FnZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyT3ZlckxhYmVsIiwibWluTGVuZ3RoIiwicGxhY2Vob2xkZXJDb2xvciIsImlucHV0UGxhY2Vob2xkZXIiLCJmb250U2l6ZSIsImlzQmxhY2siLCJzdHlsZUlucHV0IiwiYmFja2dyb3VuZENvbG9yIiwicGxhY2Vob2xkZXJJbnB1dCIsImlucHV0Q29udGFpbmVyIiwiaW5wdXRMaW5lQ29udGFpbmVyIiwidmFsdWUiLCJpbnB1dCIsImxlbmd0aCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJ0b2tlbiIsInNob3dFcnJvck1lc3NhZ2UiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsInJlc3BvbnNlIiwiQVBJIiwicG9zdCIsInN0YXR1cyIsInVzZXIiLCJkYXRhIiwic2V0dGluZ3MiLCJsYW5ndWFnZSIsInJvbGVzIiwiaW5jbHVkZXMiLCJjcmVhdGVTZXNzaW9uIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInBpY3R1cmVfcGF0aCIsImlkIiwidGhlbWUiLCJkYXJrX3RoZW1lIiwibG9nb19wYXRoIiwiYWJicmV2aWF0aW9uIiwiUm91dGVyIiwicHVzaCIsImVycm9yIiwiX2Vycm9yJHJlc3BvbnNlIiwicGF0aG5hbWUiLCJxdWVyeSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsInVzZXJJbnB1dCIsImZvY3VzIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhhbmRsZVRhYiIsImV2ZW50Iiwia2V5Q29kZSIsIndoaWNoIiwia2V5IiwiY29kZSIsImlzVGFiS2V5Iiwic3RvcFByb3BhZ2F0aW9uIiwiaW5kZXhlZEVsZW1lbnRzIiwicXVlcnlTZWxlY3RvckFsbCIsInNvcnQiLCJhIiwiYiIsImN1cnJlbnRFbGVtZW50IiwibmV4dEVsZW1lbnRJbmRleCIsIm5leHRFbGVtZW50IiwiZmluZCIsImVsZW1lbnQiLCJFeHRlcm5hbENvbnRhaW5lciIsIkhlYWQiLCJ0aXRsZSIsInByb2Nlc3MiLCJvblN1Ym1pdCIsImxvZ2luIiwidXNlcm5hbWVDaGFuZ2VIYW5kbGVyIiwicGFzc3dvcmRDaGFuZ2VIYW5kbGVyIiwiYXhpb3MiLCJjcmVhdGUiLCJiYXNlVVJMIiwid2l0aENyZWRlbnRpYWxzIiwiYmFzZVVSTEdlb3JlZiIsImdlb3JlZkFwaUtleSIsIm5hbWUiLCJyb2wiLCJwcm9maWxlUGljdHJlIiwibG9jYWxlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImpvaW4iLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJkZWxldGVTZXNzaW9uIiwicmVtb3ZlSXRlbSIsImdldFRva2VuIiwiZ2V0SXRlbSIsImdldE5hbWUiLCJnZXRJZCIsImdldERhcmtUaGVtZSIsImdldExvY2FsZSIsImlzQnJvd3NlciIsImhhc0xvY2FsZSIsImdldFByb2ZpbGVQaWN0dXJlIiwiZ2V0Um9sZXMiLCJzcGxpdCIsInZhbGlkYXRlU2Vzc2lvbiIsIm5ld1JvdXRlIiwiZ2V0SGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsInZhbGlkYXRlSXNBbmFseXN0Iiwicm9sZSIsInZhbGlkYXRpb24iLCJ2YWxpZGF0ZUlzQWRtaW4iLCJnZXRMb2dvIiwiSXNDdXN0b21UaGVtZSIsImlzQ3VzdG9tIiwib2JqVGhlbWUiLCJnZXRUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVB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QUFNO0VBQzVCLElBQUlDLElBQUksR0FBRyxFQUFFO0VBQ2IsV0FBbUMsRUFJbEM7RUFDRCxNQUFNQyxVQUFVLEdBQUdELElBQUksS0FBSyxVQUFVO0VBQ3RDLE9BQU9DLFVBQVU7QUFDckIsQ0FBQztBQUVELE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0VBQzFCLElBQUlGLElBQUksR0FBRyxFQUFFO0VBQ2IsV0FBbUMsRUFHbEM7RUFDRCxPQUFPQSxJQUFJLEtBQUssT0FBTztBQUMzQixDQUFDO0FBRUQsTUFBTUcsT0FBTyxHQUFHQSxDQUFBLEtBQU07RUFDbEIsSUFBSXRKLElBQUksR0FBRyxlQUFlO0VBQzFCLFdBQW1DLEVBSWxDO0VBQ0QsT0FBT0EsSUFBSTtBQUNmLENBQUM7QUFDRCxNQUFNdUosYUFBYSxHQUFHQSxDQUFBLEtBQU07RUFDeEIsSUFBSUMsUUFBUSxHQUFHLEtBQUs7RUFDcEIsSUFBSWxGLEtBQUssR0FBRyxFQUFFO0VBQ2QsSUFBSW1GLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDakIsV0FBbUMsRUFXbEM7RUFDRCxPQUFPRCxRQUFRO0FBQ25CLENBQUM7QUFFRCxNQUFNRSxRQUFRLEdBQUdBLENBQUEsS0FBTTtFQUNuQixJQUFJcEYsS0FBSyxHQUFHLEVBQUU7RUFDZCxJQUFJbUYsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixXQUFtQyxFQU1sQztFQUNELE9BQU9BLFFBQVE7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0lELDhEOzs7Ozs7Ozs7OztBQ0FBLDJEOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2xvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9sb2dpbi9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLnNjc3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICB0eXBlPzogJ2J1dHRvbicgfCAnc3VibWl0JyB8ICdyZXNldCcsXG4gICAgb25DbGljaz86IChldmVudDogU3ludGhldGljRXZlbnQpID0+IHZvaWQsXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICAgIHZhcmlhbnQ/OiBQcmltYXJ5QnV0dG9uVmFyaWFudCxcbiAgICB0YWJpbmRleD86IG51bWJlcixcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmVudW0gUHJpbWFyeUJ1dHRvblZhcmlhbnQge1xuICAgIFN1Y2Nlc3MsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IFByaW1hcnlCdXR0b246IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgdGFiaW5kZXgsIGxhYmVsLCB0eXBlLCBvbkNsaWNrLCBkaXNhYmxlZCwgdmFyaWFudCB9KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB2YXJpYW50ID09PSBQcmltYXJ5QnV0dG9uVmFyaWFudC5FcnJvciA/XG4gICAgICAgIHN0eWxlcy5wcmltYXJ5QnV0dG9uRXJyb3IgOlxuICAgICAgICBzdHlsZXMucHJpbWFyeUJ1dHRvblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtidXR0b25DbGFzc30gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdGFiSW5kZXg9e3RhYmluZGV4fVxuICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn1cblxuUHJpbWFyeUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgb25DbGljazogKCkgPT4ge30sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHZhcmlhbnQ6IFByaW1hcnlCdXR0b25WYXJpYW50LlN1Y2Nlc3MsXG59XG5cbmV4cG9ydCB7XG4gICAgUHJpbWFyeUJ1dHRvbixcbiAgICBQcmltYXJ5QnV0dG9uVmFyaWFudCxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgU3ludGhldGljRXZlbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuc2NzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcbiAgICB0eXBlPzogJ2J1dHRvbicgfCAnc3VibWl0JyB8ICdyZXNldCcsXG4gICAgb25DbGljaz86IChldmVudDogU3ludGhldGljRXZlbnQpID0+IHZvaWQsXG4gICAgdmFyaWFudD86IFNlY29uZGFyeUJ1dHRvblZhcmlhbnQsXG4gICAgbm9Cb3JkZXI/OiBib29sZWFuLFxuICAgIHRhYmluZGV4PzogbnVtYmVyLFxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZW51bSBTZWNvbmRhcnlCdXR0b25WYXJpYW50IHtcbiAgICBTdWNjZXNzLFxuICAgIEVycm9yLFxufVxuXG5jb25zdCBTZWNvbmRhcnlCdXR0b246IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgdGFiaW5kZXgsIGxhYmVsLCB0eXBlLCBvbkNsaWNrLCB2YXJpYW50LCBub0JvcmRlciwgZGlzYWJsZWQgfSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gdmFyaWFudCA9PT0gU2Vjb25kYXJ5QnV0dG9uVmFyaWFudC5TdWNjZXNzID9cbiAgICAgICAgc3R5bGVzLnNlY29uZGFyeUJ1dHRvbiA6XG4gICAgICAgIHN0eWxlcy5zZWNvbmRhcnlCdXR0b25FcnJvclxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtidXR0b25DbGFzc30gJHtjbGFzc05hbWV9ICR7ZGlzYWJsZWQgJiYgc3R5bGVzLmRpc2FibGVkfWB9XG4gICAgICAgICAgICBzdHlsZT17bm9Cb3JkZXIgPyB7IGJvcmRlcjogJ25vbmUnIH0gOiB7fSB9XG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgIHRhYkluZGV4PXt0YWJpbmRleH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApXG59XG5cblNlY29uZGFyeUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgIHZhcmlhbnQ6IFNlY29uZGFyeUJ1dHRvblZhcmlhbnQuU3VjY2VzcyxcbiAgICBub0JvcmRlcjogZmFsc2UsXG59XG5cbmV4cG9ydCB7XG4gICAgU2Vjb25kYXJ5QnV0dG9uLFxuICAgIFNlY29uZGFyeUJ1dHRvblZhcmlhbnQsXG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcmltYXJ5QnV0dG9uXCI6IFwiYnV0dG9uX3ByaW1hcnlCdXR0b25fXzI3bWJZXCIsXG5cdFwicHJpbWFyeUJ1dHRvbkVycm9yXCI6IFwiYnV0dG9uX3ByaW1hcnlCdXR0b25FcnJvcl9fM3FteU1cIixcblx0XCJkaXNhYmxlZFwiOiBcImJ1dHRvbl9kaXNhYmxlZF9fVzVfdk5cIixcblx0XCJzZWNvbmRhcnlCdXR0b25cIjogXCJidXR0b25fc2Vjb25kYXJ5QnV0dG9uX18xTjF2TVwiLFxuXHRcInNlY29uZGFyeUJ1dHRvbkVycm9yXCI6IFwiYnV0dG9uX3NlY29uZGFyeUJ1dHRvbkVycm9yX18ySmRYc1wiXG59O1xuIiwiaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gJy4vUHJpbWFyeUJ1dHRvbidcbmltcG9ydCB7IFNlY29uZGFyeUJ1dHRvbiB9IGZyb20gJy4vU2Vjb25kYXJ5QnV0dG9uJ1xuXG5leHBvcnQge1xuICAgIFByaW1hcnlCdXR0b24sXG4gICAgU2Vjb25kYXJ5QnV0dG9uLFxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGdldExvZ28gfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLW1hbmFnZW1lbnQnO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZXh0ZXJuYWxDb250YWluZXIubW9kdWxlLnNjc3MnXG5cbmNsYXNzIExvZ2luUGFnZSBleHRlbmRzIFB1cmVDb21wb25lbnQge1xuICAgIHN0YXRlID0ge1xuICAgICAgICBsb2dvOiBcIlwiLFxuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgLy8gY29uc3QgbG9nbyA9IGdldExvZ28oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9nbzogXCJodHRwczovL2FwcC5wcmljZWNoZWNrM2IuY29tL2ltZy9sb2dvLnBuZ1wifSlcbiAgICB9XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7IGxvZ28gfSA9IHRoaXMuc3RhdGVcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGFnZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sb2dpbkNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtsb2dvfSBzdHlsZT17bG9nbyAhPSBcIlwiID8geyB3aWR0aDogJzU1cHgnLCBoZWlnaHQ6ICc1MHB4JyB9IDoge319IGFsdD1cIkxvZ28gM0JcIiAvPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpblBhZ2UiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwYWdlQ29udGFpbmVyXCI6IFwiZXh0ZXJuYWxDb250YWluZXJfcGFnZUNvbnRhaW5lcl9fM2duX1VcIixcblx0XCJsb2dpbkNvbnRhaW5lclwiOiBcImV4dGVybmFsQ29udGFpbmVyX2xvZ2luQ29udGFpbmVyX18yelBLUVwiLFxuXHRcImxvZ29cIjogXCJleHRlcm5hbENvbnRhaW5lcl9sb2dvX18xVDQ2MFwiXG59O1xuIiwiaW1wb3J0IEV4dGVybmFsQ29udGFpbmVyIGZyb20gJy4vRXh0ZXJuYWxDb250YWluZXInXG5cbmV4cG9ydCB7XG4gICAgRXh0ZXJuYWxDb250YWluZXJcbn0iLCJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5wdXQubW9kdWxlLnNjc3MnXG5pbXBvcnQgeyBmYVVwbG9hZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcblxudHlwZSBQcm9wcyA9IHtcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGFjY2VwdGVkRm9ybWF0cz86IHN0cmluZyxcbiAgICBvbkNoYW5nZTogRnVuY3Rpb25cbn1cblxuY2xhc3MgRmlsZSBleHRlbmRzIFB1cmVDb21wb25lbnQ8UHJvcHM+IHtcbiAgICBpbnB1dFJlZjogYW55XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbGFiZWwsIGFjY2VwdGVkRm9ybWF0cywgb25DaGFuZ2UgfSA9IHRoaXMucHJvcHNcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZmlsZUNvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGlucHV0IHJlZj17cmVmID0+IHRoaXMuaW5wdXRSZWYgPSByZWZ9IG9uQ2hhbmdlPXtlID0+IG9uQ2hhbmdlKGUpfSBjbGFzc05hbWU9e3N0eWxlcy5maWxlfSBhY2NlcHQ9e2FjY2VwdGVkRm9ybWF0c30gdHlwZT1cImZpbGVcIiAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gdGhpcy5pbnB1dFJlZi5jbGljaygpfSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259ID57bGFiZWx9IDxGb250QXdlc29tZUljb24gaWNvbj17ZmFVcGxvYWR9IC8+PC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5wdXQubW9kdWxlLnNjc3MnXG5pbXBvcnQgYmxhY2sgZnJvbSAnLi9pbnB1dEJsYWNrLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgSWNvblByb3AgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIG1heExlbmd0aD86IG51bWJlcixcbiAgICBtaW5MZW5ndGg/OiBudW1iZXIsXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gICAgaWNvbj86IEljb25Qcm9wLFxuICAgIGJnQ29sb3I/OiBzdHJpbmcsXG4gICAgY29sb3I/OiBzdHJpbmcsXG4gICAgZm9udFNpemU/OiBzdHJpbmcsXG4gICAgcGxhY2Vob2xkZXJDb2xvcj86IHN0cmluZyxcbiAgICBvbkNoYW5nZTogRnVuY3Rpb24sXG4gICAgb25LZXlQcmVzcz86IEZ1bmN0aW9uLFxuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgLFxuICAgIHBsYWNlaG9sZGVyT3ZlckxhYmVsPzogYm9vbGVhbixcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gICAgaW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gICAgdGFiaW5kZXg/OiBudW1iZXIsXG4gICAgaXNCbGFjaz86IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBtYXhMZW5ndGg6IDEwMCxcbiAgICAgICAgbWluTGVuZ3RoOiAwLFxuICAgICAgICBwbGFjZWhvbGRlck92ZXJMYWJlbDogZmFsc2UsXG4gICAgICAgIG9uS2V5UHJlc3M6ICgpID0+IHt9LFxuICAgICAgICBpc0JsYWNrOiBmYWxzZSxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBtYXhMZW5ndGgsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBiZ0NvbG9yLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgICAgIG9uS2V5UHJlc3MsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICBwbGFjZWhvbGRlck92ZXJMYWJlbCxcbiAgICAgICAgICAgIG1pbkxlbmd0aCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyQ29sb3IsXG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIGlucHV0UGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBmb250U2l6ZSxcbiAgICAgICAgICAgIHRhYmluZGV4LFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgaXNCbGFjayxcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zdCBzdHlsZUlucHV0ID0gKGJnQ29sb3IgJiYgY29sb3IgJiYgZm9udFNpemUgKSA/XG4gICAgICAgICAgICB7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciwgY29sb3I6IGNvbG9yIH0gOiBjb2xvciA/XG4gICAgICAgICAgICB7IGNvbG9yIDogY29sb3IgfSA6IGJnQ29sb3IgP1xuICAgICAgICAgICAgeyBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IgfSA6IHt9ID9cbiAgICAgICAgICAgIHsgZm9udFNpemU6ICBmb250U2l6ZSB9IDoge31cblxuXG4gICAgICAgIGxldCBwbGFjZWhvbGRlcklucHV0ID0gcGxhY2Vob2xkZXJPdmVyTGFiZWwgPyBwbGFjZWhvbGRlciA6ICcnXG4gICAgICAgIHBsYWNlaG9sZGVySW5wdXQgPSBpbnB1dFBsYWNlaG9sZGVyID8gaW5wdXRQbGFjZWhvbGRlciA6IHBsYWNlaG9sZGVySW5wdXQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHshcGxhY2Vob2xkZXJPdmVyTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9eyBwbGFjZWhvbGRlckNvbG9yID8geyBjb2xvcjogcGxhY2Vob2xkZXJDb2xvciB9IDoge319PntwbGFjZWhvbGRlcn06PC9sYWJlbD5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dExpbmVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7aWNvbiAmJiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259Lz4gfVxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXttaW5MZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVmYXVsdFZhbHVlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gb25LZXlQcmVzcyhlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlucHV0fSAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiBlcnJvck1lc3NhZ2UubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yTWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnXG5pbXBvcnQgRmlsZSBmcm9tICcuL0ZpbGUnXG5cbmV4cG9ydCB7XG4gICAgSW5wdXQsXG4gICAgRmlsZSxcbn0iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJpbnB1dENvbnRhaW5lclwiOiBcImlucHV0X2lucHV0Q29udGFpbmVyX18zdC1adlwiLFxuXHRcImlucHV0TGluZUNvbnRhaW5lclwiOiBcImlucHV0X2lucHV0TGluZUNvbnRhaW5lcl9fMnZSMmNcIixcblx0XCJpbnB1dFwiOiBcImlucHV0X2lucHV0X18zV05tUFwiLFxuXHRcImJsYWNrSW5wdXRcIjogXCJpbnB1dF9ibGFja0lucHV0X18xd2ZCWFwiLFxuXHRcImVycm9yTWVzc2FnZVwiOiBcImlucHV0X2Vycm9yTWVzc2FnZV9fMTZ5eEhcIixcblx0XCJmaWxlQ29udGFpbmVyXCI6IFwiaW5wdXRfZmlsZUNvbnRhaW5lcl9fMm5LSFdcIixcblx0XCJmaWxlXCI6IFwiaW5wdXRfZmlsZV9fMjAzYWxcIixcblx0XCJidXR0b25cIjogXCJpbnB1dF9idXR0b25fXzFtM190XCIsXG5cdFwidGFnQ29udGFpbmVyXCI6IFwiaW5wdXRfdGFnQ29udGFpbmVyX18xRmw2clwiLFxuXHRcInRhZ3NcIjogXCJpbnB1dF90YWdzX19TakhxS1wiLFxuXHRcInRhZ1wiOiBcImlucHV0X3RhZ19fMWVySDdcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50LCBTeW50aGV0aWNFdmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2lucHV0J1xuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvYnV0dG9ucydcbmltcG9ydCB7IEV4dGVybmFsQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9leHRlcm5hbENvbnRhaW5lcidcbmltcG9ydCBBUEkgZnJvbSAnLi4vLi4vdXRpbHMvYXBpJztcbmltcG9ydCB7IGNyZWF0ZVNlc3Npb24gfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLW1hbmFnZW1lbnQnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2dpbi5tb2R1bGUuc2NzcydcblxudHlwZSBVc2VyUmVzcG9uc2UgPSB7XG4gICAgZmlyc3RfbmFtZTogc3RyaW5nLFxuICAgIGxhc3RfbmFtZTogc3RyaW5nLFxuICAgIHBpY3R1cmVfcGF0aDogc3RyaW5nLFxuICAgIHJvbGVzOiBzdHJpbmdbXSxcbiAgICBpZDogc3RyaW5nLFxuICAgIGRhcmtfdGhlbWU6IGFueSxcbiAgICBzZXR0aW5nczogYW55LFxuICAgIHRoZW1lOiBhbnksXG4gICAgbGFuZ3VhZ2U6IGFueSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5QYWdlIGV4dGVuZHMgUHVyZUNvbXBvbmVudCB7XG4gICAgc3RhdGUgPSB7XG4gICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICB0b2tlbjogJycsXG4gICAgICAgIHNob3dFcnJvck1lc3NhZ2U6IGZhbHNlLFxuICAgICAgICBlcnJvck1lc3NhZ2U6ICcnLFxuICAgIH1cblxuICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnZGFya21vZGUnKVxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tJylcbiAgICAgICAgY29uc3QgdXNlcklucHV0OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4tdXNlci1pbnB1dCcpO1xuICAgICAgICB1c2VySW5wdXQuZm9jdXMoKVxuXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZVRhYik7XG4gICAgfVxuXG4gICAgdXNlcm5hbWVDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VybmFtZTogdmFsdWUgfSk7XG4gICAgfVxuXG4gICAgcGFzc3dvcmRDaGFuZ2VIYW5kbGVyID0gKGUpID0+IHtcbiAgICAgICAgY29uc3Qge3ZhbHVlfSA9IGUudGFyZ2V0XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogdmFsdWUgfSk7XG4gICAgfVxuXG4gICAgbG9naW4gPSBhc3luYyAoZTogU3ludGhldGljRXZlbnQpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQVBJLnBvc3QoXG4gICAgICAgICAgICAgICAgJy9hcGkvbG9naW4nLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2U/LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IChyZXNwb25zZS5kYXRhLnVzZXIgYXMgVXNlclJlc3BvbnNlKVxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gcmVzcG9uc2UuZGF0YS50b2tlblxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2V0dGluZ3M6IHsgbGFuZ3VhZ2UgfSB9ID0gdXNlclxuICAgICAgICAgICAgICAgIGlmICh1c2VyLnJvbGVzLmluY2x1ZGVzKCdTY2FubmVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3JNZXNzYWdlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTm8gdGllbmVzIGFjY2VzbyBhIGVzdGUgc2lzdGVtYS4gU29sbyB0aWVuZXMgcGVybWlzb3MgcGFyYSBsYSBhcGxpY2FjacOzbiBtw7N2aWwuJyxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTZXNzaW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICBgJHt1c2VyLmZpcnN0X25hbWV9ICR7dXNlci5sYXN0X25hbWV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIucm9sZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLnBpY3R1cmVfcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIuaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyICYmIHVzZXIudGhlbWUgJiYgdXNlci50aGVtZS5kYXJrX3RoZW1lID8gdXNlci50aGVtZS5kYXJrX3RoZW1lIDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXIudGhlbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyICYmIHVzZXIudGhlbWUgJiYgdXNlci50aGVtZS5sb2dvX3BhdGggPyB1c2VyLnRoZW1lLmxvZ29fcGF0aCA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5ndWFnZS5hYmJyZXZpYXRpb24sXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgUm91dGVyLnB1c2goJy9ob21lJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBpZiAoZXJyb3IgJiYgZXJyb3IucmVzcG9uc2UgJiYgZXJyb3IucmVzcG9uc2Uuc3RhdHVzICYmIGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gMzA3KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IChlcnJvci5yZXNwb25zZS5kYXRhLnVzZXIgYXMgVXNlclJlc3BvbnNlKVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9rZW4gPSBlcnJvci5yZXNwb25zZS5kYXRhLnRva2VuXG4gICAgICAgICAgICAgICAgY3JlYXRlU2Vzc2lvbihcbiAgICAgICAgICAgICAgICAgICAgdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgIGAke3VzZXIuZmlyc3RfbmFtZX0gJHt1c2VyLmxhc3RfbmFtZX1gLFxuICAgICAgICAgICAgICAgICAgICB1c2VyLnJvbGVzLFxuICAgICAgICAgICAgICAgICAgICB1c2VyLnBpY3R1cmVfcGF0aCxcbiAgICAgICAgICAgICAgICAgICAgdXNlci5pZCxcbiAgICAgICAgICAgICAgICAgICAgdXNlciAmJiB1c2VyLnRoZW1lICYmIHVzZXIudGhlbWUuZGFya190aGVtZSA/IHVzZXIudGhlbWUuZGFya190aGVtZSA6IDAsXG4gICAgICAgICAgICAgICAgICAgIHVzZXIudGhlbWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXIgJiYgdXNlci50aGVtZSAmJiB1c2VyLnRoZW1lLmxvZ29fcGF0aCA/IHVzZXIudGhlbWUubG9nb19wYXRoIDogXCJcIixcbiAgICAgICAgICAgICAgICApXG5cbiAgICAgICAgICAgICAgICBSb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2NoYW5nZS1wYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiB7IHBhc3N3b3JkOiB0aGlzLnN0YXRlLnBhc3N3b3JkIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGVycm9yPy5yZXNwb25zZT8uc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVXN1YXJpbyBvIGNvbnRyYXNlw7FhIGluY29ycmVjdG9zJyxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVGFiKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IGtleUNvZGUgPSBldmVudC53aGljaCA/IGV2ZW50LndoaWNoIDogZXZlbnQua2V5Q29kZTtcbiAgICAgICAgY29uc3Qga2V5ID0gZXZlbnQuY29kZSA/IGV2ZW50LmNvZGUgOiBldmVudC5rZXk7XG4gICAgICAgIGNvbnN0IGlzVGFiS2V5ID0ga2V5Q29kZSA9PT0gOSAmJiBrZXkgPT09ICdUYWInO1xuXG4gICAgICAgIGlmIChkb2N1bWVudCAmJiBpc1RhYktleSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICAgICAgICBsZXQgaW5kZXhlZEVsZW1lbnRzOiBhbnkgPSBbXTtcbiAgICAgICAgICAgIGluZGV4ZWRFbGVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmRleGVkLWVsZW1lbnRbdGFiaW5kZXhdJyk7XG4gICAgICAgICAgICBpbmRleGVkRWxlbWVudHMgPSBbLi4uaW5kZXhlZEVsZW1lbnRzXS5zb3J0KChhLCBiKSA9PiBhLnRhYkluZGV4IC0gYi50YWJJbmRleCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRleGVkRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEVsZW1lbnQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dEVsZW1lbnRJbmRleCA9IGN1cnJlbnRFbGVtZW50LnRhYkluZGV4ICsgMTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0RWxlbWVudCA9IGluZGV4ZWRFbGVtZW50cy5maW5kKChlbGVtZW50KSA9PiBlbGVtZW50LnRhYkluZGV4ID09PSBuZXh0RWxlbWVudEluZGV4KTtcblxuICAgICAgICAgICAgICAgIGlmIChuZXh0RWxlbWVudCkgIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbmRleGVkRWxlbWVudHNbMF0uZm9jdXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgc2hvd0Vycm9yTWVzc2FnZSwgZXJyb3JNZXNzYWdlIH0gPSB0aGlzLnN0YXRlXG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxFeHRlcm5hbENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICAgICAgPHRpdGxlPkluaWNpYXIgc2VzacOzbjwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9Pntwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfcKhQmllbnZlbmlkbyEgSW5ncmVzYSB0dSBjb250cmFzZcOxYTwvcD5cblxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmxvZ2lufT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3RoaXMuc3RhdGUudXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudXNlcm5hbWVDaGFuZ2VIYW5kbGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzdWFyaW9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhYmluZGV4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nbG9naW4tdXNlci1pbnB1dCBpbmRleGVkLWVsZW1lbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5wYXNzd29yZENoYW5nZUhhbmRsZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbnRyYXNlw7FhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWJpbmRleD17Mn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2xvZ2luLXVzZXItcGFzcyBpbmRleGVkLWVsZW1lbnQnXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJJbmdyZXNhclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiaW5kZXg9ezN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdsb2dpbi11c2VyLXBhc3MgaW5kZXhlZC1lbGVtZW50J1xuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICAgICAgICAgIHtzaG93RXJyb3JNZXNzYWdlICYmIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yTWVzc2FnZX08L3A+fVxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvRXh0ZXJuYWxDb250YWluZXI+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcImxvZ2luX3RpdGxlX18yRDBReVwiLFxuXHRcImlucHV0XCI6IFwibG9naW5faW5wdXRfXzNkSDVWXCIsXG5cdFwiZXJyb3JNZXNzYWdlXCI6IFwibG9naW5fZXJyb3JNZXNzYWdlX18yN1dnNFwiXG59O1xuIiwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4vYmFzZVVybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkwsd2l0aENyZWRlbnRpYWxzOiBmYWxzZVxuICAvL3RpbWVvdXQ6IDEwMDBcbn0pIiwiZXhwb3J0IGNvbnN0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xuZXhwb3J0IGNvbnN0IGJhc2VVUkxHZW9yZWYgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HRU9SRUZfQVBJO1xuZXhwb3J0IGNvbnN0IGdlb3JlZkFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dFT1JFRl9BUElfS0VZO1xuIiwiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcblxuY29uc3QgY3JlYXRlU2Vzc2lvbiA9ICh0b2tlbjogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHJvbDogQXJyYXk8c3RyaW5nPiwgcHJvZmlsZVBpY3RyZTogc3RyaW5nLCBpZDogc3RyaW5nLCBkYXJrX3RoZW1lPzogbnVtYmVyLCB0aGVtZT86IGFueSwgbG9nbz86IHN0cmluZywgIGxvY2FsZT86IHN0cmluZykgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHRva2VuKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lJywgbmFtZSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncm9sJywgcm9sLmpvaW4oJ3wnKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWQnLCBpZClcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya190aGVtZScsIGRhcmtfdGhlbWUudG9TdHJpbmcoKSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9jYWxlJywgbG9jYWxlKVxuXG4gICAgaWYgKHRoZW1lICE9PSBudWxsIHx8ICF0aGVtZSkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBKU09OLnN0cmluZ2lmeSh0aGVtZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KHt9KSk7XG4gICAgfVxuICAgIGlmIChwcm9maWxlUGljdHJlICYmIHByb2ZpbGVQaWN0cmUubGVuZ3RoID4gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvZmlsZVBpY3R1cmUnLCBgaHR0cHM6Ly9jZG4tcHJpY2VjaGVjay5zZm8yLmRpZ2l0YWxvY2VhbnNwYWNlcy5jb20vJHtwcm9maWxlUGljdHJlfWApXG4gICAgfVxuICAgIGlmKGxvZ28gJiYgbG9nby5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dvJywgYGh0dHBzOi8vbGFtcHQzYmRpYWcuYmxvYi5jb3JlLndpbmRvd3MubmV0L3ByaWNlY2hlY2t2Mi8ke2xvZ299YCkgXG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ28nLCBgL2ltZy9sb2dvLnBuZ2ApIFxuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlU2Vzc2lvbiA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbG9jYWxlJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnZGFya190aGVtZScpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Rva2VuJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbmFtZScpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3JvbCcpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ28nLCBgL2ltZy9sb2dvLnBuZ2ApIFxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdwcm9maWxlUGljdHVyZScpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3RoZW1lJylcbn1cblxuY29uc3QgZ2V0VG9rZW4gPSAoKTogc3RyaW5nIHwgbnVsbCA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuXG5cbmNvbnN0IGdldE5hbWUgPSAoKTogc3RyaW5nIHwgbnVsbCA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpXG5cbmNvbnN0IGdldElkID0gKCk6IHN0cmluZyB8IG51bGwgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkJylcblxuY29uc3QgZ2V0RGFya1RoZW1lID0gKCk6IGFueSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya190aGVtZScpXG5jb25zdCBnZXRMb2NhbGUgPSAoKTogYW55ID0+IHtcbiAgICBjb25zdCBpc0Jyb3dzZXIgPSAoKSA9PiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgIGNvbnN0IGhhc0xvY2FsZSA9ICgpID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbGUnKSB8fCBmYWxzZVxuXG4gICAgbGV0IGxvY2FsZSA9ICdlcyc7XG5cbiAgICBpZiAoaXNCcm93c2VyKCkgJiYgaGFzTG9jYWxlKCkpIHtcbiAgICAgICAgbG9jYWxlID0gIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2NhbGUnKSB8fCBsb2NhbGVcbiAgICB9XG5cbiAgICByZXR1cm4gbG9jYWxlXG59XG5cbmNvbnN0IGdldFByb2ZpbGVQaWN0dXJlID0gKCk6IHN0cmluZyB8IG51bGwgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2ZpbGVQaWN0dXJlJylcblxuY29uc3QgZ2V0Um9sZXMgPSAoKTogQXJyYXk8c3RyaW5nPiB8IG51bGwgPT4ge1xuICAgIGNvbnN0IHJvbGVzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbCcpXG4gICAgaWYgKHJvbGVzKVxuICAgICAgICByZXR1cm4gcm9sZXMuc3BsaXQoJ3wnKVxuXG4gICAgcmV0dXJuIG51bGxcbn1cblxuY29uc3QgdmFsaWRhdGVTZXNzaW9uID0gKG5ld1JvdXRlPzogc3RyaW5nKSA9PiB7XG4gICAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKSkge1xuICAgICAgICBSb3V0ZXIucHVzaCgnL2xvZ2luJylcbiAgICB9IGVsc2UgaWYgKG5ld1JvdXRlKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKG5ld1JvdXRlKVxuICAgIH1cbn1cblxuY29uc3QgZ2V0SGVhZGVyID0gKCk6IHsgQXV0aG9yaXphdGlvbjogc3RyaW5nIH0gPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcbiAgICByZXR1cm4geyBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCB9XG59XG5cbmNvbnN0IHZhbGlkYXRlSXNBbmFseXN0ID0gKCkgPT4ge1xuICAgIGxldCByb2xlID0gJyc7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICByb2xlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbCcpO1xuXG4gICAgfVxuICAgIGNvbnN0IHZhbGlkYXRpb24gPSByb2xlID09PSAnQW5hbGlzdGEnO1xuICAgIHJldHVybiB2YWxpZGF0aW9uO1xufVxuXG5jb25zdCB2YWxpZGF0ZUlzQWRtaW4gPSAoKSA9PiB7XG4gICAgbGV0IHJvbGUgPSAnJztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgIHJvbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sJyk7XG4gICAgfVxuICAgIHJldHVybiByb2xlID09PSAnQWRtaW4nO1xufVxuXG5jb25zdCBnZXRMb2dvID0gKCkgPT4ge1xuICAgIGxldCBsb2dvID0gXCIvaW1nL2xvZ28ucG5nXCI7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICBsb2dvID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ28nKTtcbiAgICAgICAgcmV0dXJuIGxvZ287XG4gICAgfVxuICAgIHJldHVybiBsb2dvO1xufVxuY29uc3QgSXNDdXN0b21UaGVtZSA9ICgpID0+IHtcbiAgICBsZXQgaXNDdXN0b20gPSBmYWxzZTtcbiAgICBsZXQgdGhlbWUgPSBcIlwiO1xuICAgIGxldCBvYmpUaGVtZSA9IHt9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgY29uc3QgaGFzRGFya1RoZW1lID0gZ2V0RGFya1RoZW1lKCkgPT09ICcxJyA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgdGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKTtcbiAgICAgICAgaWYgKHRoZW1lICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBvYmpUaGVtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpIHx8IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKG9ialRoZW1lKS5sZW5ndGggIT09IDAgJiYgIWhhc0RhcmtUaGVtZSkge1xuICAgICAgICAgICAgaXNDdXN0b20gPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGlzQ3VzdG9tO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0N1c3RvbTtcbn1cblxuY29uc3QgZ2V0VGhlbWUgPSAoKSA9PiB7XG4gICAgbGV0IHRoZW1lID0gXCJcIjtcbiAgICBsZXQgb2JqVGhlbWUgPSB7fVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0aGVtZSAhPT0gXCJ1bmRlZmluZWRcIiB8fCAhdGhlbWUpIHtcbiAgICAgICAgICAgIG9ialRoZW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gb2JqVGhlbWU7XG4gICAgfVxuICAgIHJldHVybiBvYmpUaGVtZTtcbn1cblxuZXhwb3J0IHtcbiAgICBnZXRMb2dvLFxuICAgIElzQ3VzdG9tVGhlbWUsXG4gICAgY3JlYXRlU2Vzc2lvbixcbiAgICBkZWxldGVTZXNzaW9uLFxuICAgIGdldFRva2VuLFxuICAgIGdldE5hbWUsXG4gICAgZ2V0UHJvZmlsZVBpY3R1cmUsXG4gICAgZ2V0Um9sZXMsXG4gICAgdmFsaWRhdGVTZXNzaW9uLFxuICAgIGdldEhlYWRlcixcbiAgICBnZXRJZCxcbiAgICBnZXREYXJrVGhlbWUsXG4gICAgZ2V0TG9jYWxlLFxuICAgIHZhbGlkYXRlSXNBbmFseXN0LFxuICAgIGdldFRoZW1lLFxuICAgIHZhbGlkYXRlSXNBZG1pbixcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=