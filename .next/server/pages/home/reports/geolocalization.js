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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home/reports/geolocalization.tsx");
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

/***/ "./components/MapsGoogle/MapsGoogle.jsx":
/*!**********************************************!*\
  !*** ./components/MapsGoogle/MapsGoogle.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MapsGoogle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-google-maps/api */ "@react-google-maps/api");
/* harmony import */ var _react_google_maps_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\MapsGoogle\\MapsGoogle.jsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const mapContainerStyle = {
  height: "30vw",
  width: "100%"
};
const options = {
  disableDefaultUI: true,
  zoomControl: true
};
const center = {
  lat: 19.4978,
  lng: -99.1269
};
const libraries = ["drawing"];
function MapsGoogle(props) {
  const {
    setCoordsMap,
    report
  } = props;
  const {
    isLoaded,
    loadError
  } = Object(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["useLoadScript"])({
    googleMapsApiKey: "AIzaSyB53WxFkvRCwORxy27DWzEI8z6MEsrquyU",
    libraries
  });
  const onRectangleComplete = rectangle => {
    var bounds = rectangle.getBounds();
    const NE = bounds.getNorthEast();
    const SW = bounds.getSouthWest();
    // North West
    const NW = new google.maps.LatLng(NE.lat(), SW.lng());
    // South East
    const SE = new google.maps.LatLng(SW.lat(), NE.lng());
    const newCoords = {
      id: 0,
      name: '',
      position1: {
        latitude: NW.lat(),
        longitude: NW.lng()
      },
      position2: {
        latitude: NE.lat(),
        longitude: NE.lng()
      },
      position3: {
        latitude: SW.lat(),
        longitude: SW.lng()
      },
      position4: {
        latitude: SE.lat(),
        longitude: SE.lng()
      }
    };
    setCoordsMap(newCoords);
    // console.log('newCoords',newCoords)
    // console.log('report',report)
    // drawingManager.setMap(null);
    google.maps.event.addListener(rectangle, 'bounds_changed', () => boundsChanged(rectangle));
  };
  const boundsChanged = rectangle => {
    var bounds = rectangle.getBounds();
    // console.log('bounds',bounds);
    const NE = bounds.getNorthEast();
    const SW = bounds.getSouthWest();
    // North West
    const NW = new google.maps.LatLng(NE.lat(), SW.lng());
    // South East
    const SE = new google.maps.LatLng(SW.lat(), NE.lng());
    const newCoords = {
      id: 0,
      name: '',
      position1: {
        latitude: NW.lat(),
        longitude: NW.lng()
      },
      position2: {
        latitude: NE.lat(),
        longitude: NE.lng()
      },
      position3: {
        latitude: SW.lat(),
        longitude: SW.lng()
      },
      position4: {
        latitude: SE.lat(),
        longitude: SE.lng()
      }
    };
    setCoordsMap(newCoords);
  };
  const mapRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.useRef();
  const onMapLoad = react__WEBPACK_IMPORTED_MODULE_0___default.a.useCallback(map => {
    const drawingManager = new google.maps.drawing.DrawingManager({
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: []
      },
      rectangleOptions: {
        editable: true,
        zIndex: 1,
        draggable: true
      }
    });
    if (report.position1.latitude && report.position1.latitude[0] == NaN) {
      var bounds = {
        north: parseFloat(report.position1.latitude[0]),
        south: parseFloat(report.position3.latitude[0]),
        east: parseFloat(report.position2.longitude),
        west: parseFloat(report.position1.longitude)
      };
    } else {
      var bounds = {
        north: parseFloat(report.position1.latitude),
        south: parseFloat(report.position3.latitude),
        east: parseFloat(report.position2.longitude),
        west: parseFloat(report.position1.longitude)
      };
    }
    console.log('report nan', report.position1 == []);
    console.log('report nan', report.position1.length);
    if (report.position1.length == 0 && report.position2.length == 0 && report.position3.length == 0 && report.position4.length == 0) {
      bounds = {
        north: 19.46154886259391,
        south: 19.272394000451268,
        east: -99.01978330453124,
        west: -99.3136675775
      };
    }
    console.log("Onloadmap report", report);
    console.log("OnloadMap bounds", bounds);
    var rectangle = new google.maps.Rectangle({
      bounds: bounds,
      editable: true,
      draggable: true
    });
    rectangle.setEditable(true);
    rectangle.setMap(map);
    google.maps.event.addListener(rectangle, 'bounds_changed', () => boundsChanged(rectangle));
    google.maps.event.addListener(drawingManager, 'rectanglecomplete', onRectangleComplete);
    // bounds_changed
    drawingManager.setMap(map);
    mapRef.current = map;
  }, []);

  // if (loadError) return "Error";
  // if (!isLoaded) return "Loading...";
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, !isLoaded ? 'Cargando mapa...' : __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 17
    }
  }, __jsx(_react_google_maps_api__WEBPACK_IMPORTED_MODULE_1__["GoogleMap"], {
    id: "map",
    mapContainerStyle: mapContainerStyle,
    zoom: 8,
    center: center,
    options: options,
    onClick: () => {},
    onLoad: onMapLoad,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 19
    }
  })), loadError ? 'Error' : '');
}

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

/***/ "./components/list-report-types/ListReportTypes.tsx":
/*!**********************************************************!*\
  !*** ./components/list-report-types/ListReportTypes.tsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _list_report_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./list-report.module.scss */ "./components/list-report-types/list-report.module.scss");
/* harmony import */ var _list_report_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_list_report_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pageTitle/PageTitle */ "./components/pageTitle/PageTitle.tsx");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\list-report-types\\ListReportTypes.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const ListReportTypes = props => {
  const {
    reportTypes
  } = props;
  return __jsx("div", {
    className: _list_report_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx(_pageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    title: "Reportes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }), reportTypes.map(report => {
    const {
      onClick,
      id,
      title
    } = report;
    return __jsx("div", {
      className: _list_report_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.reportTypeItem,
      onClick: () => onClick(id),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
      className: _list_report_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.icon,
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarkerAlt"],
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }), __jsx("p", {
      className: _list_report_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.label,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, title));
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (ListReportTypes);

/***/ }),

/***/ "./components/list-report-types/list-report.module.scss":
/*!**************************************************************!*\
  !*** ./components/list-report-types/list-report.module.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container": "list-report_container__1hzKF",
	"reportTypeItem": "list-report_reportTypeItem__2aXPw",
	"label": "list-report_label__1QNsI",
	"icon": "list-report_icon__1QaJw"
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

/***/ "./components/reportDetails/index.tsx":
/*!********************************************!*\
  !*** ./components/reportDetails/index.tsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/Modal */ "./components/modal/Modal.tsx");
/* harmony import */ var _input_Input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../input/Input */ "./components/input/Input.tsx");
/* harmony import */ var _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reportDetails.module.scss */ "./components/reportDetails/reportDetails.module.scss");
/* harmony import */ var _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _buttons_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../buttons/PrimaryButton */ "./components/buttons/PrimaryButton.tsx");
/* harmony import */ var _buttons_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../buttons/SecondaryButton */ "./components/buttons/SecondaryButton.tsx");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _MapsGoogle_MapsGoogle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../MapsGoogle/MapsGoogle */ "./components/MapsGoogle/MapsGoogle.jsx");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\components\\reportDetails\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }









const ReportDetails = props => {
  const {
    showModal,
    toggleModal,
    readOnly,
    position1,
    position2,
    position3,
    position4,
    saveInfo,
    cancel,
    location,
    id
  } = props;
  const reportData = {
    id: id,
    name: location,
    position1: position1,
    position2: position2,
    position3: position3,
    position4: position4
  };
  const coordenadas = {
    id: id,
    name: location,
    position1: position1,
    position2: position2,
    position3: position3,
    position4: position4
  };
  const [report, setReportData] = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(reportData);
  const {
    0: error,
    1: setError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const validateInfo = () => {
    if (report.name !== '') {
      setError(false);
      let newReport = {
        point1: `${report.position1.latitude}, ${report.position1.longitude}`,
        point2: `${report.position2.latitude}, ${report.position2.longitude}`,
        point3: `${report.position3.latitude}, ${report.position3.longitude}`,
        point4: `${report.position4.latitude}, ${report.position4.longitude}`,
        name: report.name
      };
      saveInfo(newReport, report.id);
    } else {
      setError(true);
    }
  };
  const setChangeValue = (event, isLatitude, positionNumber) => {
    const {
      target: {
        value
      }
    } = event;
    const positionType = isLatitude ? "latitude" : "longitude";
    const positionName = `position${positionNumber}`;
    setReportData(prevState => {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        [positionName]: _objectSpread(_objectSpread({}, prevState[positionName]), {}, {
          [positionType]: value
        })
      });
    });
  };
  const setChangeName = event => {
    const {
      target: {
        value
      }
    } = event;
    setReportData(prevState => {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        name: value
      });
    });
  };
  const {
    0: showMapModal,
    1: setShowMapModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  // Cierra o abre el map y reinicia los valores
  const toggleMapModal = () => {
    setShowMapModal(!showMapModal);
    console.log('reportData', reportData);
  };
  //Solo cierra el modal y deja los valores del mapa
  const saveRectangleMap = () => {
    setShowMapModal(!showMapModal);
  };
  const setCoordsMap = val => {
    setReportData(prevState => {
      return _objectSpread(_objectSpread({}, prevState), {}, {
        position1: _objectSpread(_objectSpread({}, prevState['position1']), {}, {
          latitude: val.position1.latitude,
          longitude: val.position1.longitude
        }),
        position2: _objectSpread(_objectSpread({}, prevState['position2']), {}, {
          latitude: val.position2.latitude,
          longitude: val.position2.longitude
        }),
        position3: _objectSpread(_objectSpread({}, prevState['position3']), {}, {
          latitude: val.position3.latitude,
          longitude: val.position3.longitude
        }),
        position4: _objectSpread(_objectSpread({}, prevState['position4']), {}, {
          latitude: val.position4.latitude,
          longitude: val.position4.longitude
        })
      });
    });
  };
  return __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.geolocalizationContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }, __jsx(_modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showModal: showModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }, __jsx("p", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, "Nuevo reporte georeferenciado ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faQuestionCircle"],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 62
    }
  })), __jsx("p", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 9
    }
  }, "Crear un nuevo reporte ingresando las coordenadas en el formulario, o bien, seleccionando un \xE1rea sobre el mapa "), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pointContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 11
    }
  }, __jsx(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: event => setChangeName(event),
    placeholder: "Nombre del Poligono",
    type: "text",
    disabled: readOnly,
    defaultValue: report.name,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 11
    }
  }, __jsx(_buttons_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["PrimaryButton"], {
    label: "mostrar mapa",
    onClick: toggleMapModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 13
    }
  }))), __jsx("p", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Posici\xF3n 1"), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pointContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: event => setChangeValue(event, true, 1),
    placeholder: "Latitud",
    inputPlaceholder: "16.42000000",
    type: "text",
    disabled: readOnly,
    defaultValue: report.position1.latitude,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: event => setChangeValue(event, false, 1),
    placeholder: "Longitud",
    inputPlaceholder: "-94.96000000",
    type: "text",
    disabled: readOnly,
    defaultValue: report.position1.longitude,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  }))), __jsx("p", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, "Posici\xF3n 2"), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pointContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, __jsx(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: event => setChangeValue(event, true, 2),
    placeholder: "Latitud",
    inputPlaceholder: "16.42000000",
    type: "text",
    disabled: readOnly,
    defaultValue: report.position2.latitude,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 11
    }
  }, __jsx(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: event => setChangeValue(event, false, 2),
    placeholder: "Longitud",
    inputPlaceholder: "-94.96000000",
    type: "text",
    disabled: readOnly,
    defaultValue: report.position2.longitude,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 13
    }
  }))), __jsx("p", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, "Posici\xF3n 3"), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pointContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 11
    }
  }, __jsx(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: event => setChangeValue(event, true, 3),
    placeholder: "Latitud",
    inputPlaceholder: "16.42000000",
    type: "text",
    disabled: readOnly,
    defaultValue: report.position3.latitude,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }, __jsx(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: event => setChangeValue(event, false, 3),
    placeholder: "Longitud",
    inputPlaceholder: "-94.96000000",
    type: "text",
    disabled: readOnly,
    defaultValue: report.position3.longitude,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 13
    }
  }))), __jsx("p", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, "Posici\xF3n 4"), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.pointContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 11
    }
  }, __jsx(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: event => setChangeValue(event, true, 4),
    placeholder: "Latitud",
    inputPlaceholder: "16.42000000",
    type: "text",
    disabled: readOnly,
    defaultValue: report.position4.latitude,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.input,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 11
    }
  }, __jsx(_input_Input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onChange: event => setChangeValue(event, false, 4),
    placeholder: "Longitud",
    inputPlaceholder: "-94.96000000",
    type: "text",
    disabled: readOnly,
    defaultValue: report.position4.longitude,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 13
    }
  }))), error && __jsx("span", {
    className: `d-flex w-100 my-2 ${_reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.errorMsg} input_errorMessage__16yxH`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 20
    }
  }, "\xA1El nombre es requerido!"), __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.actions,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 9
    }
  }, !readOnly && __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 13
    }
  }, __jsx(_buttons_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["PrimaryButton"], {
    label: "Guardar informaci\xF3n",
    onClick: () => validateInfo(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 15
    }
  })), !readOnly && __jsx("div", {
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnContainer,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 13
    }
  }, __jsx(_buttons_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["SecondaryButton"], {
    label: "Cancelar",
    onClick: () => cancel(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 15
    }
  })))), __jsx(_modal_Modal__WEBPACK_IMPORTED_MODULE_1__["default"], {
    showModal: showMapModal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "row justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "col-12 justify-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 11
    }
  }, __jsx(_MapsGoogle_MapsGoogle__WEBPACK_IMPORTED_MODULE_8__["default"], {
    setCoordsMap: setCoordsMap,
    report: report,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: `col-12 ${_reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.modalButtonsContainer}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258,
      columnNumber: 11
    }
  }, __jsx(_buttons_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["SecondaryButton"], {
    label: "Cerrar",
    onClick: toggleMapModal,
    className: `${_reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnSm} ${_reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.bgWhite}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259,
      columnNumber: 13
    }
  }), __jsx(_buttons_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["PrimaryButton"], {
    label: "Guardar",
    onClick: saveRectangleMap,
    className: _reportDetails_module_scss__WEBPACK_IMPORTED_MODULE_3___default.a.btnSm,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 13
    }
  })))));
};
ReportDetails.defaultProps = {
  id: 0,
  location: "",
  position1: [],
  position2: [],
  position3: [],
  position4: [],
  showModal: true,
  readOnly: true,
  saveInfo: () => {},
  cancel: () => {}
};
/* harmony default export */ __webpack_exports__["default"] = (ReportDetails);

/***/ }),

/***/ "./components/reportDetails/reportDetails.module.scss":
/*!************************************************************!*\
  !*** ./components/reportDetails/reportDetails.module.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"geolocalizationContainer": "reportDetails_geolocalizationContainer__1Oa8K",
	"reference": "reportDetails_reference__3AFCj",
	"errorMsg": "reportDetails_errorMsg__QU2UD",
	"title": "reportDetails_title__1HwcY",
	"subtitle": "reportDetails_subtitle__25Nc6",
	"pointContainer": "reportDetails_pointContainer__aM3PC",
	"input": "reportDetails_input__2j6W5",
	"actions": "reportDetails_actions__194yr",
	"btnContainer": "reportDetails_btnContainer__2YvEN",
	"btnSm": "reportDetails_btnSm__23WMu",
	"bgWhite": "reportDetails_bgWhite__3Njvj",
	"modalButtonsContainer": "reportDetails_modalButtonsContainer__1OFNq"
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

/***/ "./pages/home/reports/geolocalization.tsx":
/*!************************************************!*\
  !*** ./pages/home/reports/geolocalization.tsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/header */ "./components/header/index.js");
/* harmony import */ var _geolocation_reports__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./geolocation-reports */ "./pages/home/reports/geolocation-reports.tsx");
/* harmony import */ var _components_list_report_types_ListReportTypes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/list-report-types/ListReportTypes */ "./components/list-report-types/ListReportTypes.tsx");
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/session-management */ "./utils/session-management.ts");
/* harmony import */ var _utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/theme */ "./utils/theme.ts");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\pages\\home\\reports\\geolocalization.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Reports = () => {
  const {
    0: reportShow,
    1: setReportShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: hasDarkTheme,
    1: setHasDarkTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const reportTypes = [{
    id: 1,
    icon: '',
    title: 'Geolocalización',
    onClick: id => setReportShow(id)
  }];
  const getReports = () => {
    switch (reportShow) {
      case 1:
        return __jsx(_geolocation_reports__WEBPACK_IMPORTED_MODULE_2__["default"], {
          __self: undefined,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 24
          }
        });
      default:
        return '';
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const isCustom = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_4__["IsCustomTheme"])();
    const hasDarkTheme = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_4__["getDarkTheme"])() === '1' ? true : false;
    if (hasDarkTheme) {
      document.querySelector('body').classList.remove('custom');
      document.querySelector('body').classList.add('darkmode');
    }
    if (isCustom) {
      const theme = Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_4__["getTheme"])();
      const currentTheme = Object(_utils_theme__WEBPACK_IMPORTED_MODULE_5__["buildTheme"])(theme);
      const style = document.createElement('style');
      style.innerHTML = currentTheme;
      document.body.appendChild(style);
      document.querySelector('body').classList.add('custom');
    }
  });
  return __jsx("div", {
    className: "reports",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_1__["Header"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), reportShow !== 0 ? getReports() : __jsx(_components_list_report_types_ListReportTypes__WEBPACK_IMPORTED_MODULE_3__["default"], {
    reportTypes: reportTypes,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }));
};
/* harmony default export */ __webpack_exports__["default"] = (Reports);

/***/ }),

/***/ "./pages/home/reports/geolocation-report.module.scss":
/*!***********************************************************!*\
  !*** ./pages/home/reports/geolocation-report.module.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"reportsContainer": "geolocation-report_reportsContainer__b9lo3",
	"reportHeader": "geolocation-report_reportHeader__3RY8Q",
	"containerIcon": "geolocation-report_containerIcon__2orYP",
	"icon": "geolocation-report_icon__1HQ5H",
	"label": "geolocation-report_label__1cbss",
	"actions": "geolocation-report_actions__3vGDA",
	"button": "geolocation-report_button__17-G0",
	"detailsContainer": "geolocation-report_detailsContainer__3njKF"
};


/***/ }),

/***/ "./pages/home/reports/geolocation-reports.tsx":
/*!****************************************************!*\
  !*** ./pages/home/reports/geolocation-reports.tsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeolocationReports; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! localStorage */ "localStorage");
/* harmony import */ var localStorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(localStorage__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/table */ "./components/table/index.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/api */ "./utils/api.ts");
/* harmony import */ var _utils_headers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../utils/headers */ "./utils/headers.ts");
/* harmony import */ var _components_reportDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/reportDetails */ "./components/reportDetails/index.tsx");
/* harmony import */ var _components_buttons_PrimaryButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/buttons/PrimaryButton */ "./components/buttons/PrimaryButton.tsx");
/* harmony import */ var _geolocation_report_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./geolocation-report.module.scss */ "./pages/home/reports/geolocation-report.module.scss");
/* harmony import */ var _geolocation_report_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_geolocation_report_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_pageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/pageTitle/PageTitle */ "./components/pageTitle/PageTitle.tsx");
/* harmony import */ var _components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/loader/Loader */ "./components/loader/Loader.tsx");
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../utils/baseUrl */ "./utils/baseUrl.ts");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\pages\\home\\reports\\geolocation-reports.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













function GeolocationReports() {
  const {
    0: reports,
    1: setReports
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: showReportDetails,
    1: setShowReportDetails
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: selectedReportInfo,
    1: setSelectedReportInfo
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: detailReadOnly,
    1: setDetailReadOnly
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: showLoader,
    1: setShowLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const getReports = async () => {
    setShowLoader(true);
    try {
      const response = await Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["default"])({
        url: 'api/places',
        baseURL: _utils_baseUrl__WEBPACK_IMPORTED_MODULE_12__["baseURLGeoref"],
        headers: {
          Authorization: `Api-Key ${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_12__["georefApiKey"]}`
        }
      });
      transformReportsData(response.data.data);
    } catch (e) {
      throw new Error(e);
    } finally {
      setShowLoader(false);
    }
  };
  const deleteReport = async row => {
    try {
      await Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["default"])({
        method: 'delete',
        url: `api/places/${row.id}`,
        baseURL: _utils_baseUrl__WEBPACK_IMPORTED_MODULE_12__["baseURLGeoref"],
        headers: {
          Authorization: `Api-Key ${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_12__["georefApiKey"]}`
        }
      });
      getReports();
    } catch (e) {
      throw new Error(e);
    }
  };
  const updateReport = async (data, id) => {
    try {
      await Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["default"])({
        method: 'patch',
        url: `api/places/${id}`,
        baseURL: _utils_baseUrl__WEBPACK_IMPORTED_MODULE_12__["baseURLGeoref"],
        headers: {
          Authorization: `Api-Key ${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_12__["georefApiKey"]}`
        },
        data
      });
    } catch (e) {
      throw new Error(e);
    } finally {
      setShowReportDetails(false);
      getReports();
    }
  };
  const createNewReport = async data => {
    try {
      await Object(_utils_api__WEBPACK_IMPORTED_MODULE_4__["default"])({
        method: 'post',
        url: 'api/places',
        baseURL: _utils_baseUrl__WEBPACK_IMPORTED_MODULE_12__["baseURLGeoref"],
        headers: {
          Authorization: `Api-Key ${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_12__["georefApiKey"]}`
        },
        data
      });
    } catch (e) {
      throw new Error(e);
    } finally {
      setShowReportDetails(false);
      getReports();
    }
  };
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getReports();
  }, []);
  const actions = [{
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faExternalLinkAlt"],
    color: '#71A4E4',
    action: row => {
      localStorage__WEBPACK_IMPORTED_MODULE_1___default.a.setItem('nameLocation', row.location);
      next_router__WEBPACK_IMPORTED_MODULE_9___default.a.push(`/home/reports/${row.id}`);
    }
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPencilAlt"],
    color: '#71A4E4',
    action: row => {
      showDetailReport(row);
    }
  }, {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTrashAlt"],
    color: '#DE4747',
    action: row => {
      deleteReport(row);
    }
  }];
  const showDetailReport = row => {
    const selectedReport = reports.filter(report => report.id === row.id);
    setSelectedReportInfo(selectedReport[0]);
    setShowReportDetails(true);
    setDetailReadOnly(false);
  };
  const openCreateModal = () => {
    setDetailReadOnly(false);
    setShowReportDetails(true);
    setSelectedReportInfo([]);
  };
  const transformReportsData = reports => {
    const newReportsArray = reports.map(report => ({
      id: report.id,
      location: report.name,
      position1: {
        coordinates: report.point1,
        latitude: report.point1.split(',', 1),
        longitude: report.point1.split(',', 2)[1]
      },
      position2: {
        coordinates: report.point2,
        latitude: report.point2.split(',', 1),
        longitude: report.point2.split(',', 2)[1]
      },
      position3: {
        coordinates: report.point3,
        latitude: report.point3.split(',', 1),
        longitude: report.point3.split(',', 2)[1]
      },
      position4: {
        coordinates: report.point4,
        latitude: report.point4.split(',', 1),
        longitude: report.point4.split(',', 2)[1]
      }
    }));
    setReports(newReportsArray);
  };
  const getReportRows = () => {
    const rows = reports.map(report => ({
      id: report.id,
      location: report.location,
      position1: report.position1.coordinates,
      position2: report.position2.coordinates,
      position3: report.position3.coordinates,
      position4: report.position4.coordinates
    }));
    return rows;
  };
  return __jsx("div", {
    className: _geolocation_report_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.reportsContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178,
      columnNumber: 9
    }
  }, __jsx(_components_loader_Loader__WEBPACK_IMPORTED_MODULE_11__["default"], {
    show: showLoader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _geolocation_report_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.reportHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181,
      columnNumber: 13
    }
  }, __jsx(_components_pageTitle_PageTitle__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: "Reportes",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: _geolocation_report_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.actions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: _geolocation_report_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.button,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186,
      columnNumber: 17
    }
  }, __jsx(_components_buttons_PrimaryButton__WEBPACK_IMPORTED_MODULE_7__["PrimaryButton"], {
    label: "Nueva ubicaci\xF3n georeferenciada",
    onClick: openCreateModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 21
    }
  }))), __jsx("div", {
    className: _geolocation_report_module_scss__WEBPACK_IMPORTED_MODULE_8___default.a.tableComplexContainer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 13
    }
  }, __jsx(_components_table__WEBPACK_IMPORTED_MODULE_2__["TableComplex"], {
    actions: actions,
    content: getReportRows(),
    header: _utils_headers__WEBPACK_IMPORTED_MODULE_5__["header"],
    changePageNext: () => {},
    changePagePrev: () => {},
    total: 0,
    count: 0,
    totalPage: 0,
    currentPage: 0,
    onClickDetails: () => {},
    textNotData: "",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 17
    }
  })), showReportDetails && __jsx(_components_reportDetails__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    toggleModal: () => setShowReportDetails(false),
    showModal: showReportDetails
  }, selectedReportInfo, {
    readOnly: detailReadOnly,
    saveInfo: (newReport, id) => id === 0 ? createNewReport(newReport) : updateReport(newReport, id),
    cancel: () => setShowReportDetails(false),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 17
    }
  })));
}
;

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

/***/ "./utils/headers.ts":
/*!**************************!*\
  !*** ./utils/headers.ts ***!
  \**************************/
/*! exports provided: header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "header", function() { return header; });
const header = [{
  title: "Lugar",
  name: "location",
  type: "text",
  isHidedable: false
}, {
  title: "Posición 1",
  name: "position1",
  type: "text",
  isHidedable: false
}, {
  title: "Posición 2",
  name: "position2",
  type: "text",
  isHidedable: false
}, {
  title: "Posición 3",
  name: "position3",
  type: "text",
  isHidedable: false
}, {
  title: "Posición 4",
  name: "position4",
  type: "text",
  isHidedable: false
}, {
  title: "Acciones",
  name: "check",
  type: "actions",
  isHidedable: false
}];

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

/***/ "localStorage":
/*!*******************************!*\
  !*** external "localStorage" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("localStorage");

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

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTWFwc0dvb2dsZS9NYXBzR29vZ2xlLmpzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2tkcm9wL0JhY2tkcm9wLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2JhY2tkcm9wL2JhY2tkcm9wLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYnV0dG9ucy9QcmltYXJ5QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvU2Vjb25kYXJ5QnV0dG9uLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2J1dHRvbnMvYnV0dG9uLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gvQ2hlY2tib3gudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY2hlY2tib3gvY2hlY2tib3gubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9oZWFkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9JbnB1dC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9pbnB1dC9pbnB1dC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xpc3QtcmVwb3J0LXR5cGVzL0xpc3RSZXBvcnRUeXBlcy50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9saXN0LXJlcG9ydC10eXBlcy9saXN0LXJlcG9ydC5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXIudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvbG9hZGVyL2xvYWRlci5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL01vZGFsLnRzeCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21vZGFsL21vZGFsLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcGFnZVRpdGxlL1BhZ2VUaXRsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9wYWdlVGl0bGUvcGFnZVRpdGxlLm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvcmVwb3J0RGV0YWlscy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9yZXBvcnREZXRhaWxzL3JlcG9ydERldGFpbHMubW9kdWxlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9UYWJsZS50c3giLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS9UYWJsZUNvbXBsZXgudHN4Iiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvdGFibGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy90YWJsZS90YWJsZS5tb2R1bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2FkdmFuY2VkLXNlYXJjaC50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2JyYW5kcy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vY2FwdHVyZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2NhcHR1cmVzLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vY2F0YWxvZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9jaGFpbnMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL2dyYXBoLXRhYi1jb21wYXJlLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vZ3JhcGgtdGFiLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vZ3JvdXBzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9ob21lLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9saW5lcy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vbWlzc2lvbnMudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9uYXZiYXIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi9wcm9kdWN0LXJlcG9ydC50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL3Byb2R1Y3QtdGFiLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vcHJvZHVjdC50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL3Byb2R1Y3RzLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vcHJvZmlsZS50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL3JhbmtpbmdzLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vcmVnaW9ucy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vc2Nhbm5lcnMtdGFiLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vc2NhbnMtcmVwb3J0LnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vdGFibGUtdGFiLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vdGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lbi91bml0cy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZW4vdXNlcnMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VuL3ZhbGlkYXRvcnMtdGFiLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvYWR2YW5jZWQtc2VhcmNoLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvYnJhbmRzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9jYXB0dXJlLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvY2FwdHVyZXMudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9jYXRhbG9ncy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2NoYWlucy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvZ3JhcGgtdGFiLWNvbXBhcmUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9ncmFwaC10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9ncm91cHMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2hvbWUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL2xpbmVzLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9taXNzaW9ucy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL25hdmJhci50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3Byb2R1Y3QtcmVwb3J0LnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvcHJvZHVjdC10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9wcm9kdWN0LnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvcHJvZHVjdHMudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9wcm9maWxlLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvcmFua2luZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9yZWdpb25zLWNhdGFsb2cudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9zY2FubmVycy10YWIudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9zY2Fucy1yZXBvcnQudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy9zdGF0aXN0aWMtcmVwb3J0LnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvdGFibGUtdGFiLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vLy4vaTE4bi9lcy91bml0cy1jYXRhbG9nLnRzIiwid2VicGFjazovLy8uL2kxOG4vZXMvdXNlcnMtY2F0YWxvZy50cyIsIndlYnBhY2s6Ly8vLi9pMThuL2VzL3ZhbGlkYXRvcnMtdGFiLnRzIiwid2VicGFjazovLy8uL2kxOG4vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGF0aC1tYXRjaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wcmVwYXJlLWRlc3RpbmF0aW9uLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL3JlcG9ydHMvZ2VvbG9jYWxpemF0aW9uLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lL3JlcG9ydHMvZ2VvbG9jYXRpb24tcmVwb3J0Lm1vZHVsZS5zY3NzIiwid2VicGFjazovLy8uL3BhZ2VzL2hvbWUvcmVwb3J0cy9nZW9sb2NhdGlvbi1yZXBvcnRzLnRzeCIsIndlYnBhY2s6Ly8vLi91dGlscy9hcGkudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvYmFzZVVybC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9mb3JtYXQtZGF0ZS50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9oZWFkZXJzLnRzIiwid2VicGFjazovLy8uL3V0aWxzL3Bob3RvX3VybC50cyIsIndlYnBhY2s6Ly8vLi91dGlscy9zZXNzaW9uLW1hbmFnZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdGhlbWUudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkYXRlLWZucy9sb2NhbGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2NhbFN0b3JhZ2VcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJsb2Rhc2guZ2V0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiXSwibmFtZXMiOlsibWFwQ29udGFpbmVyU3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsIm9wdGlvbnMiLCJkaXNhYmxlRGVmYXVsdFVJIiwiem9vbUNvbnRyb2wiLCJjZW50ZXIiLCJsYXQiLCJsbmciLCJsaWJyYXJpZXMiLCJNYXBzR29vZ2xlIiwicHJvcHMiLCJzZXRDb29yZHNNYXAiLCJyZXBvcnQiLCJpc0xvYWRlZCIsImxvYWRFcnJvciIsInVzZUxvYWRTY3JpcHQiLCJnb29nbGVNYXBzQXBpS2V5Iiwib25SZWN0YW5nbGVDb21wbGV0ZSIsInJlY3RhbmdsZSIsImJvdW5kcyIsImdldEJvdW5kcyIsIk5FIiwiZ2V0Tm9ydGhFYXN0IiwiU1ciLCJnZXRTb3V0aFdlc3QiLCJOVyIsImdvb2dsZSIsIm1hcHMiLCJMYXRMbmciLCJTRSIsIm5ld0Nvb3JkcyIsImlkIiwibmFtZSIsInBvc2l0aW9uMSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwicG9zaXRpb24yIiwicG9zaXRpb24zIiwicG9zaXRpb240IiwiZXZlbnQiLCJhZGRMaXN0ZW5lciIsImJvdW5kc0NoYW5nZWQiLCJtYXBSZWYiLCJSZWFjdCIsInVzZVJlZiIsIm9uTWFwTG9hZCIsInVzZUNhbGxiYWNrIiwibWFwIiwiZHJhd2luZ01hbmFnZXIiLCJkcmF3aW5nIiwiRHJhd2luZ01hbmFnZXIiLCJkcmF3aW5nQ29udHJvbCIsImRyYXdpbmdDb250cm9sT3B0aW9ucyIsInBvc2l0aW9uIiwiQ29udHJvbFBvc2l0aW9uIiwiVE9QX0NFTlRFUiIsImRyYXdpbmdNb2RlcyIsInJlY3RhbmdsZU9wdGlvbnMiLCJlZGl0YWJsZSIsInpJbmRleCIsImRyYWdnYWJsZSIsIk5hTiIsIm5vcnRoIiwicGFyc2VGbG9hdCIsInNvdXRoIiwiZWFzdCIsIndlc3QiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiUmVjdGFuZ2xlIiwic2V0RWRpdGFibGUiLCJzZXRNYXAiLCJjdXJyZW50IiwiX19qc3giLCJGcmFnbWVudCIsIl9fc2VsZiIsIl9fc291cmNlIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiR29vZ2xlTWFwIiwiem9vbSIsIm9uQ2xpY2siLCJvbkxvYWQiLCJCYWNrZHJvcCIsImRpc3BsYXkiLCJjaGlsZHJlbiIsInN0eWxlIiwiY2xhc3NOYW1lIiwic3R5bGVzIiwiUHJpbWFyeUJ1dHRvblZhcmlhbnQiLCJQcmltYXJ5QnV0dG9uIiwidGFiaW5kZXgiLCJsYWJlbCIsInR5cGUiLCJkaXNhYmxlZCIsInZhcmlhbnQiLCJidXR0b25DbGFzcyIsIkVycm9yIiwicHJpbWFyeUJ1dHRvbkVycm9yIiwicHJpbWFyeUJ1dHRvbiIsInRhYkluZGV4IiwiZGVmYXVsdFByb3BzIiwiU3VjY2VzcyIsIlNlY29uZGFyeUJ1dHRvblZhcmlhbnQiLCJTZWNvbmRhcnlCdXR0b24iLCJub0JvcmRlciIsInNlY29uZGFyeUJ1dHRvbiIsInNlY29uZGFyeUJ1dHRvbkVycm9yIiwiYm9yZGVyIiwiQ2hlY2tib3giLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJjaGVja2JveENsYXNzTmFtZSIsInJhbmRvbSIsIk1hdGgiLCJjdXN0b21JZCIsImNsYXNzTmFtZXMiLCJqb2luIiwiY2hlY2tib3giLCJodG1sRm9yIiwiSGVhZGVyIiwiUHVyZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiYXJncyIsIl9kZWZpbmVQcm9wZXJ0eSIsInByb2ZpbGVQaWN0dXJlIiwic2hvd01lbnUiLCJob3dTaG93TWVudSIsImlzQW5hbHlzdCIsImxvZ28iLCJlIiwia2V5Iiwid2hpY2giLCJrZXlDb2RlIiwiY3RybCIsImN0cmxLZXkiLCJzdGF0ZSIsInNldFN0YXRlIiwiZGVsZXRlU2Vzc2lvbiIsIlJvdXRlciIsInB1c2giLCJjb21wb25lbnREaWRNb3VudCIsInJvbEFuYWx5c3QiLCJ2YWxpZGF0ZUlzQW5hbHlzdCIsImdldExvZ28iLCJnZXROYW1lIiwiZ2V0UHJvZmlsZVBpY3R1cmUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5ZG93biIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbmRlciIsImxvY2FsZSIsImdldExvY2FsZSIsImhlYWRlciIsIkxpbmsiLCJocmVmIiwic3JjIiwiYWx0Iiwib3B0aW9uc0xpc3QiLCJvcHRpb25EaXNhYmxlZCIsIm9wdGlvbiIsImdldEkxOG5MYWJlbCIsImRyb3Bkb3duIiwiRm9udEF3ZXNvbWVJY29uIiwidHJpYW5nbGUiLCJpY29uIiwiZmFDYXJldERvd24iLCJsZWZ0Q29udGFpbmVyIiwiY29uZmlndXJhdGlvbiIsImZhQ29nIiwicHJvZmlsZSIsImRlZmF1bHRJbWciLCJmYVVzZXIiLCJjbG9zZVNlc3Npb24iLCJ3aXRoUm91dGVyIiwicm91dGVyIiwidXNlUm91dGVyIiwiX2V4dGVuZHMiLCJJbnB1dCIsIm1heExlbmd0aCIsInBsYWNlaG9sZGVyIiwiYmdDb2xvciIsImNvbG9yIiwib25LZXlQcmVzcyIsImVycm9yTWVzc2FnZSIsImRlZmF1bHRWYWx1ZSIsInBsYWNlaG9sZGVyT3ZlckxhYmVsIiwibWluTGVuZ3RoIiwicGxhY2Vob2xkZXJDb2xvciIsImlucHV0UGxhY2Vob2xkZXIiLCJmb250U2l6ZSIsImlzQmxhY2siLCJzdHlsZUlucHV0IiwiYmFja2dyb3VuZENvbG9yIiwicGxhY2Vob2xkZXJJbnB1dCIsImlucHV0Q29udGFpbmVyIiwiaW5wdXRMaW5lQ29udGFpbmVyIiwidmFsdWUiLCJpbnB1dCIsIkxpc3RSZXBvcnRUeXBlcyIsInJlcG9ydFR5cGVzIiwicyIsImNvbnRhaW5lciIsIlBhZ2VUaXRsZSIsInRpdGxlIiwicmVwb3J0VHlwZUl0ZW0iLCJmYU1hcE1hcmtlckFsdCIsIkxvYWRlciIsInNob3ciLCJsb2FkZXJDb250YWluZXIiLCJNb2RhbCIsImlzSW1hZ2VNb2RhbCIsImNsb3NlTW9kYWwiLCJjb21wb25lbnREaWRVcGRhdGUiLCJzaG93TW9kYWwiLCJkb2N1bWVudCIsImhhbmRsZUVzY2FwZUtleSIsImNvbnRhaW5lcldpZHRoIiwibm9QYWRkaW5nIiwib25LZXlEb3duIiwiY29udGFpbmVyU3R5bGUiLCJtb2RhbENvbnRhaW5lciIsImJhY2tncm91bmQiLCJoYW5kbGVLZXlNb2RhbCIsImhhbmRsZUNsb3NlTW9kYWwiLCJtb2RhbCIsIlJlcG9ydERldGFpbHMiLCJ0b2dnbGVNb2RhbCIsInJlYWRPbmx5Iiwic2F2ZUluZm8iLCJjYW5jZWwiLCJsb2NhdGlvbiIsInJlcG9ydERhdGEiLCJjb29yZGVuYWRhcyIsInNldFJlcG9ydERhdGEiLCJ1c2VTdGF0ZSIsImVycm9yIiwic2V0RXJyb3IiLCJ2YWxpZGF0ZUluZm8iLCJuZXdSZXBvcnQiLCJwb2ludDEiLCJwb2ludDIiLCJwb2ludDMiLCJwb2ludDQiLCJzZXRDaGFuZ2VWYWx1ZSIsImlzTGF0aXR1ZGUiLCJwb3NpdGlvbk51bWJlciIsInRhcmdldCIsInBvc2l0aW9uVHlwZSIsInBvc2l0aW9uTmFtZSIsInByZXZTdGF0ZSIsIl9vYmplY3RTcHJlYWQiLCJzZXRDaGFuZ2VOYW1lIiwic2hvd01hcE1vZGFsIiwic2V0U2hvd01hcE1vZGFsIiwidG9nZ2xlTWFwTW9kYWwiLCJzYXZlUmVjdGFuZ2xlTWFwIiwidmFsIiwiZ2VvbG9jYWxpemF0aW9uQ29udGFpbmVyIiwiZmFRdWVzdGlvbkNpcmNsZSIsInBvaW50Q29udGFpbmVyIiwic3VidGl0bGUiLCJlcnJvck1zZyIsImFjdGlvbnMiLCJidG5Db250YWluZXIiLCJtb2RhbEJ1dHRvbnNDb250YWluZXIiLCJidG5TbSIsImJnV2hpdGUiLCJUYWJsZSIsImJvZHlEYXRhIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2UiLCJvbk5leHRQYWdlIiwib25QcmV2UGFnZSIsInRvdGFsTGVuZ3RoIiwidGFibGVTdHlsZSIsImNyZWF0ZUFjdGlvbkJ1dHRvbnMiLCJkYXRhIiwiYWN0aW9uIiwiaW5kZXgiLCJpc0Jsb2NrZWQiLCJibG9ja2VkX3VwIiwiZW5hYmxlZCIsImN1cnNvciIsIm1hcmdpbiIsInRhYmxlQ29tcGxleCIsImVsZSIsInNvcnQiLCJvblNvcnQiLCJvcmRlciIsInNvcnRJY29uIiwiZmFTb3J0VXAiLCJmYVNvcnREb3duIiwicm93Iiwic3Vic3RyaW5nIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9vdGVyIiwiZmFDYXJldExlZnQiLCJmYUNhcmV0UmlnaHQiLCJUYWJsZUNvbXBsZXgiLCJjaGFuZ2VQYWdlTmV4dCIsImNoYW5nZVBhZ2VQcmV2IiwiY29udGVudCIsIm9uQ2xpY2tEZXRhaWxzIiwib25DaGVja2VkIiwiY2hlY2tib3hTdHlsZXMiLCJ0ZXh0Tm90RGF0YSIsInJlcG9ydERldGFpbHMiLCJjdXN0b21DbGFzc05hbWUiLCJoZWFkZXJMaXN0Iiwic2V0SGVhZGVyTGlzdCIsInNldFNob3dNb2RhbCIsInNlbGVjdGVkSW1hZ2UiLCJzZXRTZWxlY3RlZEltYWdlIiwic2V0SXNBbmFseXN0IiwidXNlRWZmZWN0IiwiaCIsImhpZGUiLCJvcGVuTW9kYWwiLCJpbWdVcmwiLCJnZXRGaWVsZCIsImZpZWxkVHlwZSIsImZpZWxkTmFtZSIsImlzSGlkZGVuIiwicGhvdG9VcmwiLCJpc05hTiIsInRvRml4ZWQiLCJmb3JtYXREYXRlIiwic3BsaXQiLCJhYyIsInBvaW50ZXJFdmVudHMiLCJpZENsYXNzIiwiaXNQcm9tbyIsImZhUGVyY2VudCIsImNoYW5nZUhpZGVTdGF0dXMiLCJmaWVsZFRpdGxlIiwiaGlkZUZpZWxkIiwibmV3SGVhZGVyIiwidGFibGVDbGFzc05hbWUiLCJvcCIsInByb3BlcnR5RXhpc3QiLCJzY2FuIiwiaXNIaWRlZGFibGUiLCJmYUV5ZSIsImZhRXllU2xhc2giLCJjIiwic3RhdHVzIiwicmV2aWV3ZWQiLCJmaWVsZCIsIm1vZGFsSW1hZ2VDbG9zZSIsImZhVGltZXNDaXJjbGUiLCJtb2RhbEltYWdlIiwiZmlsdGVycyIsInNlYXJjaEZpZWxkIiwic2VhcmNoIiwiY2xlYW5GaWx0ZXIiLCJkb3dubG9hZCIsImNvbXBhcmF0aXZlQ2hhcnQiLCJnZW9yZWZlcmVuY2UiLCJnZXRDdXJyZW50UmVwb3J0IiwidGFibGUiLCJoZWFkZXJzIiwidG9hc3QiLCJzdWNjZXNzIiwibWVzc2FnZSIsImNyZWF0ZUJyYW5kIiwiZGVsZXRlQnJhbmQiLCJlZGl0QnJhbmQiLCJkb3dubG9hZERhdGEiLCJjcmVhdGVNb2RhbCIsInNlYXJjaEJ5TmFtZSIsImVkaXRNb2RhbCIsImFkZCIsInNhdmUiLCJjcmVhdGUiLCJjYXB0dXJlSWQiLCJwcmljZSIsInByaWNlV2l0aFByb21vdGlvbiIsImJhcmNvZGUiLCJicmFuZCIsInVuaXQiLCJzdG9yZSIsImdyb3VwIiwibGluZSIsImFtb3VudCIsImNhcHR1cmVEYXRlIiwic2Nhbm5lZEJ5IiwiYnJhbmNoT2ZmaWNlIiwibWFpbkltYWdlIiwicHJpY2VJbWFnZSIsImRldGFpbHNDb250YWluZXIiLCJjaGFuZ2VJbWFnZSIsImVkaXRJbmZvcm1hdGlvbiIsInNhdmVJbmZvcm1hdGlvbiIsImNhbmNlbEluZm9ybWF0aW9uIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsIndpdGhJbWFnZSIsIndpdGhvdXRJbWFnZSIsInN0YXR1c1JlamVjdGVkIiwibm9ybWFsUHJpY2UiLCJzdGF0dXNQZW5kaW5nIiwic3RhdHVzVmFsaWRhdGVkIiwicGFyYW0iLCJnZW9sb2NhbGl0YXRpb24iLCJleHBvcnRHZW9EYXRhIiwib3B0aW9uc0NhdGFsb2ciLCJicmFuZHNDYXRhbG9nIiwiZ3JvdXBzQ2F0YWxvZyIsImxpbmVzQ2F0YWxvZyIsInN0b3Jlc0NhdGFsb2ciLCJ1bml0c0NhdGFsb2ciLCJoZWFkIiwic2VsZWN0ZWQiLCJwaG90b19tYWluIiwicGhvdG9fcHJpY2UiLCJwcm9kdWN0IiwiY2hhaW4iLCJicmFuY2giLCJzY2FubmVkX2J5IiwiZ3JhbW1hZ2VfcXVhbnRpdHkiLCJ1bml0X3ByaWNlIiwicHJvZHVjdF9jcmVhdGVkX2RhdGUiLCJsb3dlcl9wcmljZSIsImhpZ2hlc3RfcHJpY2UiLCJjYXB0dXJlX2RhdGUiLCJjYXB0dXJlX3ByaWNlIiwidmFsaWRhdGVkIiwicGVuZGluZyIsInVuaXRzIiwiY20iLCJtIiwibWwiLCJsdCIsIm1nIiwiZyIsImtnIiwicGllemEiLCJkZWxldGUiLCJidXR0b25BY2NlcHRMYWJlbCIsImJyYW5kcyIsInVuaXRpZXMiLCJncm91cHMiLCJsaW5lcyIsInJlZ2lvbiIsInVzZXJzIiwiYWxpYXMiLCJlZGl0IiwidGFicyIsInByaWNlTGlzdCIsInVuaXRhcnlQcmljZSIsImhpc3RvcnkiLCJkYXRlIiwiYWJicmV2aWF0aW9uIiwid2VsY29tZSIsInNpZGViYXIiLCJtaXNzaW9uIiwic2NhbkZpbHRlciIsImFsbCIsIndpdGhQcm9kdWN0Iiwid2l0aG91dFByb2R1Y3QiLCJ0b3BCYXIiLCJiZWluZ1ZhbGlkYXRlZCIsIndpdGhvdXROdW1iZXIiLCJ3aXRob3V0TWlzc2lvbiIsInByb2R1Y3RJbWFnZSIsInByb21vdGlvblByaWNlIiwiYWRkcmVzcyIsImFkaXRpb25hbENvbW1lbnRzIiwic2hvd1BpY3R1cmUiLCJyZWplY3QiLCJ2YWxpZGF0ZSIsInZhbGlkYXRlQW5kQWRkIiwic3ViamVjdCIsInNlbmRDcml0ZXJpb24iLCJyYWRpb01hcEZpcnN0IiwiYmx1cnJ5IiwiZmFyQXdheSIsImRhcmsiLCJpbmNvbXBsZXRlIiwiZG9lc250TWF0Y2giLCJyYWRpb1NlY29uZCIsIm91dHNpZGVTaG9wIiwic2hvcFRpY2tldCIsImFub3RoZXJDZWxsIiwidGVzdFNjYW4iLCJyZWNlbnQiLCJtb3N0RXhwZW5zaXZlIiwiY2hlYXBlc3QiLCJjaGVhcGVzdFdpdGhQcm9tb3Rpb24iLCJuYXZiYXIiLCJob21lIiwibWlzc2lvbnMiLCJjYXB0dXJlcyIsImNhcHR1cmUiLCJjYXRhbG9ncyIsInByb2R1Y3RzIiwicmFua2luZ3MiLCJncmFwaFRhYiIsImFkdmFuY2VkU2VhcmNoIiwidGFibGVUYWIiLCJwcm9kdWN0VGFiIiwic2Nhbm5lcnNUYWIiLCJ2YWxpZGF0b3JzVGFiIiwiY2hhaW5zQ2F0YWxvZyIsInJlZ2lvbnNDYXRhbG9nIiwidXNlcnNDYXRhbG9nIiwiZ3JhcGhUYWJDb21wYXJlIiwicHJvZHVjdFJlcG9ydCIsInNjYW5zUmVwb3J0IiwibmFtZV9saW5lIiwibmFtZV9ncm91cCIsImRlc2NyaXB0aW9uIiwiY2FwdHVyZV9wb2ludHMiLCJtaXNzaW9uX3BvaW50cyIsInN0YXJ0X2RhdGUiLCJlbmRfZGF0ZSIsInJlZ2lvbnMiLCJjcmVhdGVNaXNzaW9uIiwiZHVwbGljYXRlZE1lc3NhZ2UiLCJkaWFsb2ciLCJhY2VwdCIsInZhbGlkYXRpb25zIiwicmVxdWlyZWQiLCJncmVhdGVyVGhhbiIsIm1pc3Npb25Qb2ludHMiLCJ2YWxpZCIsImNhcHR1cmVQb2ludHMiLCJlZGl0UHJvZmlsZSIsInNpZ25PdXQiLCJyZXBvcnRzIiwiZ2VvbG9jYWxpemF0aW9uIiwic3RhdGlzdGljIiwic2NhbnMiLCJuZXdTZXJhY2giLCJwbGFjZWhvbGRlclNlYXJjaCIsIm15TGlzdCIsImdlbmVyYWxTZWFyY2giLCJzYXZlTGlzdCIsImdyYXBoaWMiLCJjbGVhckdyYXBoaWMiLCJlbXB0eVN0YXRlIiwiZW1wdEdyYXBoeVN0YXRlIiwic2F2ZVByb2R1Y3RzIiwic2F2ZVByb2R1Y3RzRXJyb3IiLCJwYXJhbWV0ZXIiLCJ2YWx1ZXMiLCJkZWxldGVGaWx0ZXJzIiwibmFtZU9yQ29kZSIsInN1Y2Nlc3NEb3dubG9hZCIsImRlbGV0ZUZyb21MaXN0Iiwic3VjY2Vzc0RlbGV0ZSIsImVycm9yRGVsZXRlIiwiZXJyb3JEb3dubG9hZCIsIm5vU2VsZWN0ZWQiLCJjYXJkIiwiZ3JhbW1hZ2UiLCJyZWNlbnRseSIsImhpZ2hlciIsImxvd2VyIiwibG93ZXJQcm9tb3Rpb24iLCJkZXRhaWwiLCJwcm9kdWN0SWQiLCJtaW5QcmljZSIsIm1heFByaWNlIiwibGlzdFByaWNlIiwicHJpY2VIaXN0b3J5IiwidXBkYXRlZEF0IiwiY3JlYXRlZEF0IiwicGhvdG8iLCJjcmVhdGVkX2F0IiwidXBkYXRlZF9hdCIsInByb21vdGlvbl9sb3dlcl9wcmljZSIsImxhc3RfcHJpY2UiLCJyb2xlIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsIm1vdGhlcl9sYXN0X25hbWUiLCJ0aGVtZSIsImVtcGxveWVlX251bWJlciIsImNlbGxwaG9uZSIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJjbG9zZSIsImNhcHR1cmlzdHMiLCJjbGVhckRhdGUiLCJlbXBsb3llZU51bWJlciIsInBlcmNlbnRhZ2UiLCJ2YWxpZGF0ZWRDYXB0dXJlcyIsInBvaW50cyIsInZhbGlkYXRvcnMiLCJnZW5lcmF0ZURhdGEiLCJ0b3RhbCIsIm5vbWJyZSIsInJhbmtpbmciLCJlZmZpY2llbmN5IiwidmFsaWRhdGVkX2NhcHR1cmVzIiwiY3VycmVudFByaWNlIiwiYXZlcmFnZVByaWNlIiwic2VlSGlzdG9yeSIsImNhcHR1cmVkQXQiLCJ0YWdzIiwiYWRkVGFncyIsImFsbFJlZ2lvbnMiLCJlbWFpbCIsInJvbFNlbGVjdGVkIiwiZnVsbE5hbWUiLCJ1c2VyVmFsaWRhdGVzIiwiZ2VuZXJhdGVSZXBvcnQiLCJzdGF0aXN0aWNSZXBvcnQiLCJzY2FubmVyIiwibG9jYWxlcyIsImVzIiwiZW4iLCJnZXQiLCJ0cmFuc2xhdGVUYWJsZUhlYWRlciIsInBhdGgiLCJ0cmFuc2xhdGVUYWJsZUNvbXBsZXhIZWFkZXIiLCJjYWNoZWRPYnNlcnZlciIsImxpc3RlbmVycyIsIk1hcCIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicHJlZmV0Y2hlZCIsImdldE9ic2VydmVyIiwidW5kZWZpbmVkIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsImhhcyIsImNiIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsInVub2JzZXJ2ZSIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJlbCIsIm9ic2VydmVyIiwib2JzZXJ2ZSIsInNldCIsImVyciIsInByZWZldGNoIiwiYXMiLCJjYXRjaCIsImlzTW9kaWZpZWRFdmVudCIsImN1cnJlbnRUYXJnZXQiLCJtZXRhS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsImxpbmtDbGlja2VkIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsInRoZW4iLCJzY3JvbGxUbyIsImJvZHkiLCJmb2N1cyIsImNyZWF0ZVByb3BFcnJvciIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImtleXMiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIndhcm4iLCJwIiwiY2hpbGRFbG0iLCJzZXRDaGlsZEVsbSIsInBhdGhuYW1lIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJ0YWdOYW1lIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFByb3BzIiwicmVmIiwiZGVmYXVsdFByZXZlbnRlZCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5IiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsInJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIiwiZW5kc1dpdGgiLCJzbGljZSIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJkZWZpbmVQcm9wZXJ0eSIsImV2ZW50cyIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwiX3NpbmdsZXRvblJvdXRlciIsInN0YWNrIiwidXNlQ29udGV4dCIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsImFzc2lnbiIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJwYXRobmFtZVBhcnRzIiwic29tZSIsInRvTG93ZXJDYXNlIiwic3BsaWNlIiwibWl0dCIsImhhbmRsZXIiLCJvZmYiLCJlbWl0IiwiZXZ0cyIsImJhc2VQYXRoIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImNhbmNlbGxlZCIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwiYWRkTG9jYWxlIiwiZGVsTG9jYWxlIiwic3Vic3RyIiwiaGFzQmFzZVBhdGgiLCJhZGRCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaXNMb2NhbFVSTCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJVUkwiLCJvcmlnaW4iLCJpbnRlcnBvbGF0ZUFzIiwicm91dGUiLCJhc1BhdGhuYW1lIiwicXVlcnkiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsInBhcmFtcyIsImV2ZXJ5IiwicmVwZWF0Iiwib3B0aW9uYWwiLCJyZXBsYWNlZCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0Iiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwiZmlsdGVyZWRRdWVyeSIsImluY2x1ZGVzIiwicmVzb2x2ZUhyZWYiLCJjdXJyZW50UGF0aCIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJzZWFyY2hQYXJhbXMiLCJoYXNoIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwibWFya0xvYWRpbmdFcnJvciIsInByZXBhcmVVcmxBcyIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJvayIsImpzb24iLCJmZXRjaE5leHREYXRhIiwiZGF0YUhyZWYiLCJpc1NlcnZlclJlbmRlciIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiaW5pdGlhbFN0eWxlU2hlZXRzIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJfYnBzIiwiX3dyYXBBcHAiLCJpc1NzciIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJvblBvcFN0YXRlIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJjaGFuZ2UiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJfX05fU1NQIiwiX19ORVhUX0RBVEFfXyIsImF1dG9FeHBvcnQiLCJyZWxvYWQiLCJiYWNrIiwibWV0aG9kIiwicmVxdWlyZSIsImxvY2FsZVBhdGhSZXN1bHQiLCJfaCIsIlNUIiwicGVyZm9ybWFuY2UiLCJtYXJrIiwiYWJvcnRDb21wb25lbnRMb2FkIiwiY2xlYW5lZEFzIiwib25seUFIYXNoQ2hhbmdlIiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFnZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJyZXdyaXRlcyIsInByb21pc2VkQnVpbGRNYW5pZmVzdCIsInBhcnNlZCIsIl9yZXNvbHZlSHJlZiIsInVybElzTmV3IiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJmaWx0ZXIiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJQcm9taXNlIiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwic3NnNDA0IiwibW9kIiwicGFnZSIsImZldGNoQ29tcG9uZW50IiwiX2dldFN0YXRpY0RhdGEiLCJnZXREYXRhSHJlZiIsIl9lcnIiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJjYWNoZWRSb3V0ZUluZm8iLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJfZ2V0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiYmVmb3JlUG9wU3RhdGUiLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwibmV3VXJsTm9IYXNoIiwibmV3SGFzaCIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsInJlIiwidGVzdCIsInByZWZldGNoRGF0YSIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiZm4iLCJjYWNoZUtleSIsImN0eCIsIkFwcFRyZWUiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJmb3JtYXRVcmwiLCJ1cmxPYmoiLCJhdXRoIiwiaG9zdG5hbWUiLCJwcm90b2NvbCIsImhvc3QiLCJwb3J0IiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJ1cmxRdWVyeVRvU2VhcmNoUGFyYW1zIiwic2xhc2hlcyIsIlRFU1RfUk9VVEUiLCJpc0R5bmFtaWNSb3V0ZSIsIkRVTU1ZX0JBU0UiLCJwYXJzZVJlbGF0aXZlVXJsIiwicmVzb2x2ZWRCYXNlIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicmVnZXhwVG9GdW5jdGlvbiIsInByZXBhcmVEZXN0aW5hdGlvbiIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJjb21waWxlIiwibmV3VXJsIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm1hdGNoIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJ1cmxRdWVyeSIsIlVSTFNlYXJjaFBhcmFtcyIsIml0ZW0iLCJhcHBlbmQiLCJzZWFyY2hQYXJhbXNMaXN0IiwiZnJvbSIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJlc29sdmVSZXdyaXRlcyIsInJld3JpdGUiLCJzb3VyY2UiLCJkZXN0UmVzIiwiZ2V0Um91dGVNYXRjaGVyIiwiZXhlYyIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsImNvZGUiLCJzbHVnTmFtZSIsInBvcyIsImVzY2FwZVJlZ2V4Iiwic3RyIiwicGFyc2VQYXJhbWV0ZXIiLCJnZXRSb3V0ZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwic2VnbWVudHMiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsImZyb21DaGFyQ29kZSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIlJlZ0V4cCIsIm5hbWVkUmVnZXgiLCJleGVjT25jZSIsInVzZWQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsImdldFVSTCIsImdldERpc3BsYXlOYW1lIiwiaXNSZXNTZW50IiwiZmluaXNoZWQiLCJoZWFkZXJzU2VudCIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJwcm90b3R5cGUiLCJ1cmxPYmplY3RLZXlzIiwiZm9ybWF0V2l0aFZhbGlkYXRpb24iLCJTUCIsIm1lYXN1cmUiLCJSZXBvcnRzIiwicmVwb3J0U2hvdyIsInNldFJlcG9ydFNob3ciLCJoYXNEYXJrVGhlbWUiLCJzZXRIYXNEYXJrVGhlbWUiLCJnZXRSZXBvcnRzIiwiR2VvbG9jYXRpb25SZXBvcnRzIiwiaXNDdXN0b20iLCJJc0N1c3RvbVRoZW1lIiwiZ2V0RGFya1RoZW1lIiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImdldFRoZW1lIiwiY3VycmVudFRoZW1lIiwiYnVpbGRUaGVtZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCIsInNldFJlcG9ydHMiLCJzaG93UmVwb3J0RGV0YWlscyIsInNldFNob3dSZXBvcnREZXRhaWxzIiwic2VsZWN0ZWRSZXBvcnRJbmZvIiwic2V0U2VsZWN0ZWRSZXBvcnRJbmZvIiwiZGV0YWlsUmVhZE9ubHkiLCJzZXREZXRhaWxSZWFkT25seSIsInNob3dMb2FkZXIiLCJzZXRTaG93TG9hZGVyIiwicmVzcG9uc2UiLCJhcGkiLCJiYXNlVVJMIiwiYmFzZVVSTEdlb3JlZiIsIkF1dGhvcml6YXRpb24iLCJnZW9yZWZBcGlLZXkiLCJ0cmFuc2Zvcm1SZXBvcnRzRGF0YSIsImRlbGV0ZVJlcG9ydCIsInVwZGF0ZVJlcG9ydCIsImNyZWF0ZU5ld1JlcG9ydCIsImZhRXh0ZXJuYWxMaW5rQWx0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImZhUGVuY2lsQWx0Iiwic2hvd0RldGFpbFJlcG9ydCIsImZhVHJhc2hBbHQiLCJzZWxlY3RlZFJlcG9ydCIsIm9wZW5DcmVhdGVNb2RhbCIsIm5ld1JlcG9ydHNBcnJheSIsImNvb3JkaW5hdGVzIiwiZ2V0UmVwb3J0Um93cyIsInJvd3MiLCJyZXBvcnRzQ29udGFpbmVyIiwicmVwb3J0SGVhZGVyIiwiYnV0dG9uIiwidGFibGVDb21wbGV4Q29udGFpbmVyIiwiY291bnQiLCJheGlvcyIsIndpdGhDcmVkZW50aWFscyIsImRhdGVTdHIiLCJ0cmltIiwicGFyc2VkU2hvcnQiLCJwYXJzZSIsIkRhdGUiLCJpc0RhdGUiLCJpc1ZhbGlkIiwiZm9ybWF0IiwicGFyc2VkTG9uZyIsImNyZWF0ZVNlc3Npb24iLCJ0b2tlbiIsInJvbCIsInByb2ZpbGVQaWN0cmUiLCJkYXJrX3RoZW1lIiwidG9TdHJpbmciLCJKU09OIiwic3RyaW5naWZ5IiwicmVtb3ZlSXRlbSIsImdldFRva2VuIiwiZ2V0SXRlbSIsImdldElkIiwiaXNCcm93c2VyIiwiaGFzTG9jYWxlIiwiZ2V0Um9sZXMiLCJyb2xlcyIsInZhbGlkYXRlU2Vzc2lvbiIsIm5ld1JvdXRlIiwiZ2V0SGVhZGVyIiwidmFsaWRhdGlvbiIsInZhbGlkYXRlSXNBZG1pbiIsIm9ialRoZW1lIiwiTGlnaHRlbkRhcmtlbkNvbG9yIiwiY29sIiwiYW10IiwidXNlUG91bmQiLCJudW0iLCJyIiwiYiIsImxpZ2h0ZW4iLCJ3YWxscGFwZXIiLCJkYXJrZW4iLCJmb250RGFya2VuIiwidGV4dCIsImZvbnRMaWdodGVyIiwiZm9udCIsInByaW1hcnlfYnV0dG9uIiwic2Vjb25kYXJ5X2J1dHRvbiIsInByaW1hcnlfdGV4dCIsInNlY29uZGFyeV90ZXh0Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUJLLFdBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCQSxXQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDQSxXQUFZO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztFQUNEO0VBQ0EsT0FBTyxFQUFFO0FBRWIsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3JMRCw4RDs7Ozs7Ozs7Ozs7QUNBQSwyRDs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSw0Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJwYWdlcy9ob21lL3JlcG9ydHMvZ2VvbG9jYWxpemF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ob21lL3JlcG9ydHMvZ2VvbG9jYWxpemF0aW9uLnRzeFwiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHtcbiAgR29vZ2xlTWFwLFxuICB1c2VMb2FkU2NyaXB0LFxufSBmcm9tIFwiQHJlYWN0LWdvb2dsZS1tYXBzL2FwaVwiO1xuXG5cbmNvbnN0IG1hcENvbnRhaW5lclN0eWxlID0ge1xuICBoZWlnaHQ6IFwiMzB2d1wiLFxuICB3aWR0aDogXCIxMDAlXCIsXG59O1xuY29uc3Qgb3B0aW9ucyA9IHtcbiAgZGlzYWJsZURlZmF1bHRVSTogdHJ1ZSxcbiAgem9vbUNvbnRyb2w6IHRydWUsXG59O1xuY29uc3QgY2VudGVyICA9IHtcbiAgbGF0OiAxOS40OTc4LFxuICBsbmc6IC05OS4xMjY5LFxufTtcbmNvbnN0IGxpYnJhcmllcyA9IFtcImRyYXdpbmdcIl07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hcHNHb29nbGUocHJvcHMpIHtcbiAgY29uc3QgeyBzZXRDb29yZHNNYXAsIHJlcG9ydH0gPSBwcm9wcztcbiAgY29uc3QgeyBpc0xvYWRlZCwgbG9hZEVycm9yIH0gPSB1c2VMb2FkU2NyaXB0KHtcbiAgICBnb29nbGVNYXBzQXBpS2V5OiBcIkFJemFTeUI1M1d4Rmt2UkN3T1J4eTI3RFd6RUk4ejZNRXNycXV5VVwiLFxuICAgIGxpYnJhcmllcyxcblxuICB9KTtcbiAgY29uc3Qgb25SZWN0YW5nbGVDb21wbGV0ZSA9IHJlY3RhbmdsZSA9PiB7XG4gICAgdmFyIGJvdW5kcyA9IHJlY3RhbmdsZS5nZXRCb3VuZHMoKTtcbiAgICBjb25zdCBORSA9IGJvdW5kcy5nZXROb3J0aEVhc3QoKTtcbiAgICBjb25zdCBTVyA9IGJvdW5kcy5nZXRTb3V0aFdlc3QoKTtcbiAgICAvLyBOb3J0aCBXZXN0XG4gICAgY29uc3QgTlcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKE5FLmxhdCgpLFNXLmxuZygpKTtcbiAgICAvLyBTb3V0aCBFYXN0XG4gICAgY29uc3QgU0UgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFNXLmxhdCgpLE5FLmxuZygpKTtcbiAgICBjb25zdCBuZXdDb29yZHMgPSB7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgcG9zaXRpb24xOntcbiAgICAgICAgICBsYXRpdHVkZTpOVy5sYXQoKSxcbiAgICAgICAgICBsb25naXR1ZGU6TlcubG5nKCl9LFxuICAgICAgICBwb3NpdGlvbjI6e1xuICAgICAgICAgIGxhdGl0dWRlOk5FLmxhdCgpLFxuICAgICAgICAgIGxvbmdpdHVkZTpORS5sbmcoKX0sXG4gICAgICAgIHBvc2l0aW9uMzp7XG4gICAgICAgICAgbGF0aXR1ZGU6U1cubGF0KCksXG4gICAgICAgICAgbG9uZ2l0dWRlOlNXLmxuZygpfSxcbiAgICAgICAgcG9zaXRpb240OntcbiAgICAgICAgICBsYXRpdHVkZTpTRS5sYXQoKSxcbiAgICAgICAgICBsb25naXR1ZGU6U0UubG5nKCl9XG4gICAgICB9O1xuICAgIHNldENvb3Jkc01hcChuZXdDb29yZHMpO1xuICAgIC8vIGNvbnNvbGUubG9nKCduZXdDb29yZHMnLG5ld0Nvb3JkcylcbiAgICAvLyBjb25zb2xlLmxvZygncmVwb3J0JyxyZXBvcnQpXG4gICAgLy8gZHJhd2luZ01hbmFnZXIuc2V0TWFwKG51bGwpO1xuICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKHJlY3RhbmdsZSwgJ2JvdW5kc19jaGFuZ2VkJywgKCkgPT4gYm91bmRzQ2hhbmdlZChyZWN0YW5nbGUpKTtcbiAgfVxuICBjb25zdCBib3VuZHNDaGFuZ2VkID0gKHJlY3RhbmdsZSkgPT4ge1xuICAgIHZhciBib3VuZHMgPSByZWN0YW5nbGUuZ2V0Qm91bmRzKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2JvdW5kcycsYm91bmRzKTtcbiAgICBjb25zdCBORSA9IGJvdW5kcy5nZXROb3J0aEVhc3QoKTtcbiAgICBjb25zdCBTVyA9IGJvdW5kcy5nZXRTb3V0aFdlc3QoKTtcbiAgICAvLyBOb3J0aCBXZXN0XG4gICAgY29uc3QgTlcgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKE5FLmxhdCgpLFNXLmxuZygpKTtcbiAgICAvLyBTb3V0aCBFYXN0XG4gICAgY29uc3QgU0UgPSBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKFNXLmxhdCgpLE5FLmxuZygpKTtcbiAgICBjb25zdCBuZXdDb29yZHMgPSB7XG4gICAgICBpZDogMCxcbiAgICAgIG5hbWU6ICcnLFxuICAgICAgcG9zaXRpb24xOntcbiAgICAgICAgbGF0aXR1ZGU6TlcubGF0KCksXG4gICAgICAgIGxvbmdpdHVkZTpOVy5sbmcoKX0sXG4gICAgICBwb3NpdGlvbjI6e1xuICAgICAgICBsYXRpdHVkZTpORS5sYXQoKSxcbiAgICAgICAgbG9uZ2l0dWRlOk5FLmxuZygpfSxcbiAgICAgIHBvc2l0aW9uMzp7XG4gICAgICAgIGxhdGl0dWRlOlNXLmxhdCgpLFxuICAgICAgICBsb25naXR1ZGU6U1cubG5nKCl9LFxuICAgICAgcG9zaXRpb240OntcbiAgICAgICAgbGF0aXR1ZGU6U0UubGF0KCksXG4gICAgICAgIGxvbmdpdHVkZTpTRS5sbmcoKX1cbiAgICB9O1xuICAgIHNldENvb3Jkc01hcChuZXdDb29yZHMpO1xuICB9XG5cbiAgY29uc3QgbWFwUmVmID0gUmVhY3QudXNlUmVmKCk7XG4gIGNvbnN0IG9uTWFwTG9hZCA9IFJlYWN0LnVzZUNhbGxiYWNrKChtYXApID0+IHtcblxuICAgIFxuICAgIGNvbnN0IGRyYXdpbmdNYW5hZ2VyID0gbmV3IGdvb2dsZS5tYXBzLmRyYXdpbmcuRHJhd2luZ01hbmFnZXIoe1xuICAgICAgZHJhd2luZ0NvbnRyb2w6IHRydWUsXG4gICAgICBkcmF3aW5nQ29udHJvbE9wdGlvbnM6IHtcbiAgICAgICAgcG9zaXRpb246IGdvb2dsZS5tYXBzLkNvbnRyb2xQb3NpdGlvbi5UT1BfQ0VOVEVSLFxuICAgICAgICBkcmF3aW5nTW9kZXM6IFtcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICByZWN0YW5nbGVPcHRpb25zOiB7XG4gICAgICAgIGVkaXRhYmxlOiB0cnVlLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmIChyZXBvcnQucG9zaXRpb24xLmxhdGl0dWRlICYmIHJlcG9ydC5wb3NpdGlvbjEubGF0aXR1ZGVbMF0gPT0gTmFOICl7XG4gICAgICB2YXIgYm91bmRzID0ge1xuICAgICAgICBub3J0aDogcGFyc2VGbG9hdCAocmVwb3J0LnBvc2l0aW9uMS5sYXRpdHVkZVswXSksXG4gICAgICAgIHNvdXRoOiBwYXJzZUZsb2F0KHJlcG9ydC5wb3NpdGlvbjMubGF0aXR1ZGVbMF0pLFxuICAgICAgICBlYXN0OiBwYXJzZUZsb2F0KHJlcG9ydC5wb3NpdGlvbjIubG9uZ2l0dWRlKSxcbiAgICAgICAgd2VzdDogcGFyc2VGbG9hdChyZXBvcnQucG9zaXRpb24xLmxvbmdpdHVkZSksXG4gICAgICB9O1xuICAgIH1lbHNle1xuICAgICAgdmFyIGJvdW5kcyA9IHtcbiAgICAgICAgbm9ydGg6IHBhcnNlRmxvYXQgKHJlcG9ydC5wb3NpdGlvbjEubGF0aXR1ZGUpLFxuICAgICAgICBzb3V0aDogcGFyc2VGbG9hdChyZXBvcnQucG9zaXRpb24zLmxhdGl0dWRlKSxcbiAgICAgICAgZWFzdDogcGFyc2VGbG9hdChyZXBvcnQucG9zaXRpb24yLmxvbmdpdHVkZSksXG4gICAgICAgIHdlc3Q6IHBhcnNlRmxvYXQocmVwb3J0LnBvc2l0aW9uMS5sb25naXR1ZGUpLFxuICAgICAgfTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3JlcG9ydCBuYW4nLHJlcG9ydC5wb3NpdGlvbjEgPT0gW10pXG4gICAgY29uc29sZS5sb2coJ3JlcG9ydCBuYW4nLHJlcG9ydC5wb3NpdGlvbjEubGVuZ3RoKVxuICAgIGlmKHJlcG9ydC5wb3NpdGlvbjEubGVuZ3RoID09IDAgJiYgcmVwb3J0LnBvc2l0aW9uMi5sZW5ndGggPT0gMCAmJiByZXBvcnQucG9zaXRpb24zLmxlbmd0aCA9PSAwICYmIHJlcG9ydC5wb3NpdGlvbjQubGVuZ3RoID09IDApe1xuICAgICAgYm91bmRzID0gIHtcbiAgICAgICAgICBub3J0aDoxOS40NjE1NDg4NjI1OTM5MSxcbiAgICAgICAgICBzb3V0aDogMTkuMjcyMzk0MDAwNDUxMjY4LFxuICAgICAgICAgIGVhc3Q6IC05OS4wMTk3ODMzMDQ1MzEyNCxcbiAgICAgICAgICB3ZXN0Oi05OS4zMTM2Njc1Nzc1XG4gICAgICAgIH1cbiAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcIk9ubG9hZG1hcCByZXBvcnRcIiwgcmVwb3J0KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiT25sb2FkTWFwIGJvdW5kc1wiLCBib3VuZHMpO1xuICAgICAgXG4gICAgICB2YXIgcmVjdGFuZ2xlID0gbmV3IGdvb2dsZS5tYXBzLlJlY3RhbmdsZSh7XG4gICAgICAgIGJvdW5kczogYm91bmRzLFxuICAgICAgICBlZGl0YWJsZTogdHJ1ZSxcbiAgICAgICAgZHJhZ2dhYmxlOiB0cnVlLFxuICAgICAgfSk7XG4gICAgICByZWN0YW5nbGUuc2V0RWRpdGFibGUodHJ1ZSk7XG4gICAgICByZWN0YW5nbGUuc2V0TWFwKG1hcCk7XG4gICAgICBnb29nbGUubWFwcy5ldmVudC5hZGRMaXN0ZW5lcihyZWN0YW5nbGUsICdib3VuZHNfY2hhbmdlZCcsICgpID0+IGJvdW5kc0NoYW5nZWQocmVjdGFuZ2xlKSk7XG4gICAgXG4gICAgZ29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIoZHJhd2luZ01hbmFnZXIsICdyZWN0YW5nbGVjb21wbGV0ZScsIG9uUmVjdGFuZ2xlQ29tcGxldGUpO1xuICAgIC8vIGJvdW5kc19jaGFuZ2VkXG4gICAgZHJhd2luZ01hbmFnZXIuc2V0TWFwKG1hcCk7XG4gICAgXG4gICAgbWFwUmVmLmN1cnJlbnQgPSBtYXA7XG4gIH0sIFtdKTtcblxuXG5cbiAgLy8gaWYgKGxvYWRFcnJvcikgcmV0dXJuIFwiRXJyb3JcIjtcbiAgLy8gaWYgKCFpc0xvYWRlZCkgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xuICByZXR1cm4gPD5cbiAgICAgICAgICAgICAgeyFpc0xvYWRlZCA/XG4gICAgICAgICAgICAgICAnQ2FyZ2FuZG8gbWFwYS4uLicgOlxuICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICA8R29vZ2xlTWFwXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibWFwXCJcbiAgICAgICAgICAgICAgICAgICAgbWFwQ29udGFpbmVyU3R5bGU9e21hcENvbnRhaW5lclN0eWxlfVxuICAgICAgICAgICAgICAgICAgICB6b29tPXs4fVxuICAgICAgICAgICAgICAgICAgICBjZW50ZXI9e2NlbnRlcn1cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgICAgIG9uTG9hZD17b25NYXBMb2FkfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPC9Hb29nbGVNYXA+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAge2xvYWRFcnJvciA/ICdFcnJvcicgOiAnJ31cbiAgICAgICAgICA8Lz47XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3RDaGlsZCB9IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vYmFja2Ryb3AubW9kdWxlLnNjc3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgZGlzcGxheTogc3RyaW5nLFxuICAgIGNoaWxkcmVuOiBSZWFjdENoaWxkLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrZHJvcCh7IGRpc3BsYXksIGNoaWxkcmVuIH06IFByb3BzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXl9fSBjbGFzc05hbWU9e3N0eWxlcy5CYWNrZHJvcH0+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIkJhY2tkcm9wXCI6IFwiYmFja2Ryb3BfQmFja2Ryb3BfXy1DV25aXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnVuY3Rpb25Db21wb25lbnQsIFN5bnRoZXRpY0V2ZW50IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9idXR0b24ubW9kdWxlLnNjc3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICB0eXBlPzogJ2J1dHRvbicgfCAnc3VibWl0JyB8ICdyZXNldCcsXG4gICAgb25DbGljaz86IChldmVudDogU3ludGhldGljRXZlbnQpID0+IHZvaWQsXG4gICAgZGlzYWJsZWQ/OiBib29sZWFuLFxuICAgIHZhcmlhbnQ/OiBQcmltYXJ5QnV0dG9uVmFyaWFudCxcbiAgICB0YWJpbmRleD86IG51bWJlcixcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG59XG5cbmVudW0gUHJpbWFyeUJ1dHRvblZhcmlhbnQge1xuICAgIFN1Y2Nlc3MsXG4gICAgRXJyb3IsXG59XG5cbmNvbnN0IFByaW1hcnlCdXR0b246IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgdGFiaW5kZXgsIGxhYmVsLCB0eXBlLCBvbkNsaWNrLCBkaXNhYmxlZCwgdmFyaWFudCB9KSA9PiB7XG4gICAgY29uc3QgYnV0dG9uQ2xhc3MgPSB2YXJpYW50ID09PSBQcmltYXJ5QnV0dG9uVmFyaWFudC5FcnJvciA/XG4gICAgICAgIHN0eWxlcy5wcmltYXJ5QnV0dG9uRXJyb3IgOlxuICAgICAgICBzdHlsZXMucHJpbWFyeUJ1dHRvblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtidXR0b25DbGFzc30gJHtjbGFzc05hbWV9YH1cbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgdGFiSW5kZXg9e3RhYmluZGV4fVxuICAgICAgICA+XG4gICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIClcbn1cblxuUHJpbWFyeUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgb25DbGljazogKCkgPT4ge30sXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIHZhcmlhbnQ6IFByaW1hcnlCdXR0b25WYXJpYW50LlN1Y2Nlc3MsXG59XG5cbmV4cG9ydCB7XG4gICAgUHJpbWFyeUJ1dHRvbixcbiAgICBQcmltYXJ5QnV0dG9uVmFyaWFudCxcbn1cbiIsImltcG9ydCBSZWFjdCwgeyBGdW5jdGlvbkNvbXBvbmVudCwgU3ludGhldGljRXZlbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2J1dHRvbi5tb2R1bGUuc2NzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGRpc2FibGVkPzogYm9vbGVhbixcbiAgICB0eXBlPzogJ2J1dHRvbicgfCAnc3VibWl0JyB8ICdyZXNldCcsXG4gICAgb25DbGljaz86IChldmVudDogU3ludGhldGljRXZlbnQpID0+IHZvaWQsXG4gICAgdmFyaWFudD86IFNlY29uZGFyeUJ1dHRvblZhcmlhbnQsXG4gICAgbm9Cb3JkZXI/OiBib29sZWFuLFxuICAgIHRhYmluZGV4PzogbnVtYmVyLFxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuZW51bSBTZWNvbmRhcnlCdXR0b25WYXJpYW50IHtcbiAgICBTdWNjZXNzLFxuICAgIEVycm9yLFxufVxuXG5jb25zdCBTZWNvbmRhcnlCdXR0b246IEZ1bmN0aW9uQ29tcG9uZW50PFByb3BzPiA9ICh7IGNsYXNzTmFtZSwgdGFiaW5kZXgsIGxhYmVsLCB0eXBlLCBvbkNsaWNrLCB2YXJpYW50LCBub0JvcmRlciwgZGlzYWJsZWQgfSkgPT4ge1xuICAgIGNvbnN0IGJ1dHRvbkNsYXNzID0gdmFyaWFudCA9PT0gU2Vjb25kYXJ5QnV0dG9uVmFyaWFudC5TdWNjZXNzID9cbiAgICAgICAgc3R5bGVzLnNlY29uZGFyeUJ1dHRvbiA6XG4gICAgICAgIHN0eWxlcy5zZWNvbmRhcnlCdXR0b25FcnJvclxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtidXR0b25DbGFzc30gJHtjbGFzc05hbWV9ICR7ZGlzYWJsZWQgJiYgc3R5bGVzLmRpc2FibGVkfWB9XG4gICAgICAgICAgICBzdHlsZT17bm9Cb3JkZXIgPyB7IGJvcmRlcjogJ25vbmUnIH0gOiB7fSB9XG4gICAgICAgICAgICB0eXBlPXt0eXBlfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgIHRhYkluZGV4PXt0YWJpbmRleH1cbiAgICAgICAgPlxuICAgICAgICAgICAge2xhYmVsfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICApXG59XG5cblNlY29uZGFyeUJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdHlwZTogJ2J1dHRvbicsXG4gICAgZGlzYWJsZWQ6IGZhbHNlLFxuICAgIG9uQ2xpY2s6ICgpID0+IHt9LFxuICAgIHZhcmlhbnQ6IFNlY29uZGFyeUJ1dHRvblZhcmlhbnQuU3VjY2VzcyxcbiAgICBub0JvcmRlcjogZmFsc2UsXG59XG5cbmV4cG9ydCB7XG4gICAgU2Vjb25kYXJ5QnV0dG9uLFxuICAgIFNlY29uZGFyeUJ1dHRvblZhcmlhbnQsXG59XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJwcmltYXJ5QnV0dG9uXCI6IFwiYnV0dG9uX3ByaW1hcnlCdXR0b25fXzI3bWJZXCIsXG5cdFwicHJpbWFyeUJ1dHRvbkVycm9yXCI6IFwiYnV0dG9uX3ByaW1hcnlCdXR0b25FcnJvcl9fM3FteU1cIixcblx0XCJkaXNhYmxlZFwiOiBcImJ1dHRvbl9kaXNhYmxlZF9fVzVfdk5cIixcblx0XCJzZWNvbmRhcnlCdXR0b25cIjogXCJidXR0b25fc2Vjb25kYXJ5QnV0dG9uX18xTjF2TVwiLFxuXHRcInNlY29uZGFyeUJ1dHRvbkVycm9yXCI6IFwiYnV0dG9uX3NlY29uZGFyeUJ1dHRvbkVycm9yX18ySmRYc1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFN5bnRoZXRpY0V2ZW50LCBDU1NQcm9wZXJ0aWVzIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vY2hlY2tib3gubW9kdWxlLnNjc3MnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgb25DaGFuZ2U6IChlPzogU3ludGhldGljRXZlbnQpID0+IGFueSxcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIGNoZWNrZWQ/OiBib29sZWFuLFxuICAgIGNsYXNzTmFtZT86IHN0cmluZyxcbiAgICBjaGVja2JveENsYXNzTmFtZT86IHN0cmluZyxcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gICAgc3R5bGU/OiBDU1NQcm9wZXJ0aWVzLFxuICAgIHRhYmluZGV4PzogbnVtYmVyLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDaGVja2JveChwcm9wczogUHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIG9uQ2hhbmdlID0gKCkgPT4ge30sXG4gICAgICAgIGxhYmVsLFxuICAgICAgICBjaGVja2VkID0gZmFsc2UsXG4gICAgICAgIGNsYXNzTmFtZSA9ICcnLFxuICAgICAgICBjaGVja2JveENsYXNzTmFtZSA9ICcnLFxuICAgICAgICBkaXNhYmxlZCA9IGZhbHNlLFxuICAgICAgICBzdHlsZSA9IHt9LFxuICAgICAgICB0YWJpbmRleCxcbiAgICB9ID0gcHJvcHM7XG5cbiAgICBjb25zdCByYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xuICAgIGNvbnN0IGN1c3RvbUlkID0gYGNoZWNrYm94LSR7cmFuZG9tfWA7XG5cbiAgICBjb25zdCBjbGFzc05hbWVzID0gW1xuICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgIGRpc2FibGVkID8gc3R5bGVzLmRpc2FibGVkIDogbnVsbCxcbiAgICBdLmpvaW4oJyAnKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake2NsYXNzTmFtZXN9IHRleHQtbGVmdGB9XG4gICAgICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPXtjdXN0b21JZH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jaGVja2JveH0gJHtjaGVja2JveENsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2V9XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgIHRhYkluZGV4PXt0YWJpbmRleH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj17Y3VzdG9tSWR9PlxuICAgICAgICAgICAgICAgIHtsYWJlbH1cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvcD5cbiAgICApO1xufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2hlY2tib3hcIjogXCJjaGVja2JveF9jaGVja2JveF9fM2t1WnNcIixcblx0XCJkaXNhYmxlZFwiOiBcImNoZWNrYm94X2Rpc2FibGVkX18yRHVZS1wiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFDb2csIGZhQ2FyZXREb3duLCBmYVVzZXIgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9oZWFkZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHtnZXRJMThuTGFiZWx9IGZyb20gJy4uLy4uL2kxOG4nXG5pbXBvcnQgeyBkZWxldGVTZXNzaW9uLCBnZXRMb2dvLCBnZXROYW1lLCBnZXRQcm9maWxlUGljdHVyZSwgdmFsaWRhdGVJc0FuYWx5c3QsIGdldExvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24tbWFuYWdlbWVudCdcblxuY2xhc3MgSGVhZGVyIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxhbnksIGFueT4ge1xuXG4gICAgc3RhdGUgPSB7XG4gICAgICAgIG5hbWU6ICcnLFxuICAgICAgICBwcm9maWxlUGljdHVyZTogbnVsbCxcbiAgICAgICAgc2hvd01lbnU6IGZhbHNlLFxuICAgICAgICBob3dTaG93TWVudTogJ2tleScsXG4gICAgICAgIGlzQW5hbHlzdDogJycsXG4gICAgICAgIGxvZ286ICcnXG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHJvbEFuYWx5c3QgPSB2YWxpZGF0ZUlzQW5hbHlzdCgpO1xuICAgICAgICBjb25zdCBsb2dvID0gZ2V0TG9nbygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIG5hbWU6IGdldE5hbWUoKSxcbiAgICAgICAgICAgIHByb2ZpbGVQaWN0dXJlOiBnZXRQcm9maWxlUGljdHVyZSgpLFxuICAgICAgICAgICAgaXNBbmFseXN0OiByb2xBbmFseXN0LFxuICAgICAgICAgICAgbG9nbyxcbiAgICAgICAgfSlcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZSA9PiB0aGlzLmhhbmRsZUtleWRvd24oZSkpXG4gICAgfVxuXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB0aGlzLmhhbmRsZUtleWRvd24oZSkpXG4gICAgfVxuXG4gICAgaGFuZGxlS2V5ZG93biA9IChlOiBhbnkpID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gZS53aGljaCB8fCBlLmtleUNvZGVcbiAgICAgICAgY29uc3QgY3RybCA9IGUuY3RybEtleSA/IGUuY3RybEtleSA6ICgoa2V5ID09PSAxNykgPyB0cnVlIDogZmFsc2UpXG4gICAgICAgIGlmIChrZXkgPT0gNTUgJiYgY3RybCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnN0YXRlLnNob3dNZW51KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNob3dNZW51OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBob3dTaG93TWVudTogJ2tleScsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5ob3dTaG93TWVudSA9PT0gJ2tleScgJiYgdGhpcy5zdGF0ZS5zaG93TWVudSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBzaG93TWVudTogZmFsc2UsXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xvc2VTZXNzaW9uID0gKCkgPT4ge1xuICAgICAgICBkZWxldGVTZXNzaW9uKClcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfVxuXG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgcHJvZmlsZVBpY3R1cmUsIHNob3dNZW51LCBpc0FuYWx5c3QsIGxvZ28gfSA9IHRoaXMuc3RhdGU7XG4gICAgICAgIGNvbnN0IGxvY2FsZSA9IGdldExvY2FsZSgpXG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCI+PGE+PGltZyBzcmM9e2xvZ299IHN0eWxlPXtsb2dvICE9IFwiXCIgPyB7IHdpZHRoOiAnNTVweCcsIGhlaWdodDogJzUwcHgnIH0gOiB7fX0gYWx0PVwiTG9nbyAzQlwiIC8+PC9hPjwvTGluaz5cbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uc0xpc3R9PlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtpc0FuYWx5c3QgPyBzdHlsZXMub3B0aW9uRGlzYWJsZWQgOiBzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZVwiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24udmFsaWRhdGlvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17aXNBbmFseXN0ID8gc3R5bGVzLm9wdGlvbkRpc2FibGVkIDogc3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvbWlzc2lvbnNcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLm1pc3Npb25zJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL3NjYW5zXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtnZXRJMThuTGFiZWwobG9jYWxlLCAnbmF2YmFyLm9wdGlvbi5jYXB0dXJlcycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9ufT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9wcm9kdWN0c1wiIGxvY2FsZT17bG9jYWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24ucHJvZHVjdHMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvcmFua2luZ3NcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLnJhbmtpbmdzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0nIyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVwb3J0ZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5kcm9wZG93bn0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy50cmlhbmdsZX0gaWNvbj17ZmFDYXJldERvd259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvcmVwb3J0cy9zdGF0aXN0aWNcIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24ucmVwb3J0cy5zdGF0aXN0aWMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvcmVwb3J0cy9wcm9kdWN0XCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLnJlcG9ydHMucHJvZHVjdCcpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9yZXBvcnRzL3NjYW5zXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLnJlcG9ydHMuc2NhbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWUvcmVwb3J0cy9nZW9sb2NhbGl6YXRpb25cIiBsb2NhbGU9e2xvY2FsZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24ucmVwb3J0cy5nZW9sb2NhbGl6YXRpb24nKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAhaXNBbmFseXN0ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbmZpZ3VyYXRpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ29nfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZHJvcGRvd259PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy50cmlhbmdsZX0gaWNvbj17ZmFDYXJldERvd259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lL25ld0NhdGFsb2dzXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ25hdmJhci5vcHRpb24uY2F0YWxvZ3MnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvZmlsZVBpY3R1cmUgPT09IG51bGwgPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWZhdWx0SW1nfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gLz48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZVBpY3R1cmV9PjxpbWcgc3JjPXtgJHtwcm9maWxlUGljdHVyZX1gfSAvPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgfSAqL31cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZWZhdWx0SW1nfT48Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVXNlcn0gLz48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e25hbWV9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmRyb3Bkb3dufT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGNsYXNzTmFtZT17c3R5bGVzLnRyaWFuZ2xlfSBpY29uPXtmYUNhcmV0RG93bn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZS9wcm9maWxlXCIgbG9jYWxlPXtsb2NhbGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLmVkaXRQcm9maWxlJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB0aGlzLmNsb3NlU2Vzc2lvbigpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2dldEkxOG5MYWJlbChsb2NhbGUsICduYXZiYXIub3B0aW9uLnNpZ25PdXQnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cblxufVxuXG5jb25zdCB3aXRoUm91dGVyID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICByZXR1cm4gPEhlYWRlciB7Li4ucHJvcHN9IHJvdXRlcj17cm91dGVyfSAvPlxufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyO1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaGVhZGVyXCI6IFwiaGVhZGVyX2hlYWRlcl9fM2hSRC1cIixcblx0XCJvcHRpb25zTGlzdFwiOiBcImhlYWRlcl9vcHRpb25zTGlzdF9fMzVoSHFcIixcblx0XCJvcHRpb25cIjogXCJoZWFkZXJfb3B0aW9uX18xeDd5eVwiLFxuXHRcImRyb3Bkb3duXCI6IFwiaGVhZGVyX2Ryb3Bkb3duX18ybmtvS1wiLFxuXHRcIm9wdGlvbkRpc2FibGVkXCI6IFwiaGVhZGVyX29wdGlvbkRpc2FibGVkX18xWm8zUlwiLFxuXHRcImxlZnRDb250YWluZXJcIjogXCJoZWFkZXJfbGVmdENvbnRhaW5lcl9fMnJjZnBcIixcblx0XCJjb25maWd1cmF0aW9uXCI6IFwiaGVhZGVyX2NvbmZpZ3VyYXRpb25fX09yTWZrXCIsXG5cdFwicHJvZmlsZVwiOiBcImhlYWRlcl9wcm9maWxlX18zdDBfSVwiLFxuXHRcImRlZmF1bHRJbWdcIjogXCJoZWFkZXJfZGVmYXVsdEltZ19fMWFhZkRcIixcblx0XCJwcm9maWxlUGljdHVyZVwiOiBcImhlYWRlcl9wcm9maWxlUGljdHVyZV9fMkV4cHJcIixcblx0XCJ0cmlhbmdsZVwiOiBcImhlYWRlcl90cmlhbmdsZV9fT2ZWWjFcIlxufTtcbiIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cbmV4cG9ydCB7XG4gICAgSGVhZGVyLFxufSIsImltcG9ydCBSZWFjdCwgeyBQdXJlQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vaW5wdXQubW9kdWxlLnNjc3MnXG5pbXBvcnQgYmxhY2sgZnJvbSAnLi9pbnB1dEJsYWNrLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgSWNvblByb3AgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIG1heExlbmd0aD86IG51bWJlcixcbiAgICBtaW5MZW5ndGg/OiBudW1iZXIsXG4gICAgcGxhY2Vob2xkZXI/OiBzdHJpbmcsXG4gICAgaWNvbj86IEljb25Qcm9wLFxuICAgIGJnQ29sb3I/OiBzdHJpbmcsXG4gICAgY29sb3I/OiBzdHJpbmcsXG4gICAgZm9udFNpemU/OiBzdHJpbmcsXG4gICAgcGxhY2Vob2xkZXJDb2xvcj86IHN0cmluZyxcbiAgICBvbkNoYW5nZTogRnVuY3Rpb24sXG4gICAgb25LZXlQcmVzcz86IEZ1bmN0aW9uLFxuICAgIGVycm9yTWVzc2FnZT86IHN0cmluZyxcbiAgICBkZWZhdWx0VmFsdWU/OiBzdHJpbmcgfCBudW1iZXIgLFxuICAgIHBsYWNlaG9sZGVyT3ZlckxhYmVsPzogYm9vbGVhbixcbiAgICBkaXNhYmxlZD86IGJvb2xlYW4sXG4gICAgaW5wdXRQbGFjZWhvbGRlcj86IHN0cmluZyxcbiAgICBjbGFzc05hbWU/OiBzdHJpbmcsXG4gICAgdGFiaW5kZXg/OiBudW1iZXIsXG4gICAgaXNCbGFjaz86IGJvb2xlYW4sXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElucHV0IGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICAgIHB1YmxpYyBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgICAgICBtYXhMZW5ndGg6IDEwMCxcbiAgICAgICAgbWluTGVuZ3RoOiAwLFxuICAgICAgICBwbGFjZWhvbGRlck92ZXJMYWJlbDogZmFsc2UsXG4gICAgICAgIG9uS2V5UHJlc3M6ICgpID0+IHt9LFxuICAgICAgICBpc0JsYWNrOiBmYWxzZSxcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIHR5cGUsXG4gICAgICAgICAgICBtYXhMZW5ndGgsXG4gICAgICAgICAgICBwbGFjZWhvbGRlcixcbiAgICAgICAgICAgIGljb24sXG4gICAgICAgICAgICBiZ0NvbG9yLFxuICAgICAgICAgICAgY29sb3IsXG4gICAgICAgICAgICBvbkNoYW5nZSxcbiAgICAgICAgICAgIG9uS2V5UHJlc3MsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICBkZWZhdWx0VmFsdWUsXG4gICAgICAgICAgICBwbGFjZWhvbGRlck92ZXJMYWJlbCxcbiAgICAgICAgICAgIG1pbkxlbmd0aCxcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyQ29sb3IsXG4gICAgICAgICAgICBkaXNhYmxlZCxcbiAgICAgICAgICAgIGlucHV0UGxhY2Vob2xkZXIsXG4gICAgICAgICAgICBmb250U2l6ZSxcbiAgICAgICAgICAgIHRhYmluZGV4LFxuICAgICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICAgICAgaXNCbGFjayxcbiAgICAgICAgfSA9IHRoaXMucHJvcHNcblxuICAgICAgICBjb25zdCBzdHlsZUlucHV0ID0gKGJnQ29sb3IgJiYgY29sb3IgJiYgZm9udFNpemUgKSA/XG4gICAgICAgICAgICB7IGJhY2tncm91bmRDb2xvcjogYmdDb2xvciwgY29sb3I6IGNvbG9yIH0gOiBjb2xvciA/XG4gICAgICAgICAgICB7IGNvbG9yIDogY29sb3IgfSA6IGJnQ29sb3IgP1xuICAgICAgICAgICAgeyBiYWNrZ3JvdW5kQ29sb3I6IGJnQ29sb3IgfSA6IHt9ID9cbiAgICAgICAgICAgIHsgZm9udFNpemU6ICBmb250U2l6ZSB9IDoge31cblxuXG4gICAgICAgIGxldCBwbGFjZWhvbGRlcklucHV0ID0gcGxhY2Vob2xkZXJPdmVyTGFiZWwgPyBwbGFjZWhvbGRlciA6ICcnXG4gICAgICAgIHBsYWNlaG9sZGVySW5wdXQgPSBpbnB1dFBsYWNlaG9sZGVyID8gaW5wdXRQbGFjZWhvbGRlciA6IHBsYWNlaG9sZGVySW5wdXQ7XG5cbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgIHshcGxhY2Vob2xkZXJPdmVyTGFiZWwgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9eyBwbGFjZWhvbGRlckNvbG9yID8geyBjb2xvcjogcGxhY2Vob2xkZXJDb2xvciB9IDoge319PntwbGFjZWhvbGRlcn06PC9sYWJlbD5cbiAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dExpbmVDb250YWluZXJ9PlxuICAgICAgICAgICAgICAgICAgICB7aWNvbiAmJiA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259Lz4gfVxuXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPXttaW5MZW5ndGh9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZGVmYXVsdFZhbHVlIHx8ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3N0eWxlSW5wdXR9XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJJbnB1dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2UoZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbktleVByZXNzPXsoZSkgPT4gb25LZXlQcmVzcyhlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmlucHV0fSAke2NsYXNzTmFtZX1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT17dHlwZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heExlbmd0aD17bWF4TGVuZ3RofVxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2Rpc2FibGVkfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9e3RhYmluZGV4fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiBlcnJvck1lc3NhZ2UubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmVycm9yTWVzc2FnZX0+e2Vycm9yTWVzc2FnZX08L3A+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICApXG4gICAgfVxufVxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiaW5wdXRDb250YWluZXJcIjogXCJpbnB1dF9pbnB1dENvbnRhaW5lcl9fM3QtWnZcIixcblx0XCJpbnB1dExpbmVDb250YWluZXJcIjogXCJpbnB1dF9pbnB1dExpbmVDb250YWluZXJfXzJ2UjJjXCIsXG5cdFwiaW5wdXRcIjogXCJpbnB1dF9pbnB1dF9fM1dObVBcIixcblx0XCJibGFja0lucHV0XCI6IFwiaW5wdXRfYmxhY2tJbnB1dF9fMXdmQlhcIixcblx0XCJlcnJvck1lc3NhZ2VcIjogXCJpbnB1dF9lcnJvck1lc3NhZ2VfXzE2eXhIXCIsXG5cdFwiZmlsZUNvbnRhaW5lclwiOiBcImlucHV0X2ZpbGVDb250YWluZXJfXzJuS0hXXCIsXG5cdFwiZmlsZVwiOiBcImlucHV0X2ZpbGVfXzIwM2FsXCIsXG5cdFwiYnV0dG9uXCI6IFwiaW5wdXRfYnV0dG9uX18xbTNfdFwiLFxuXHRcInRhZ0NvbnRhaW5lclwiOiBcImlucHV0X3RhZ0NvbnRhaW5lcl9fMUZsNnJcIixcblx0XCJ0YWdzXCI6IFwiaW5wdXRfdGFnc19fU2pIcUtcIixcblx0XCJ0YWdcIjogXCJpbnB1dF90YWdfXzFlckg3XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBmYU1hcE1hcmtlckFsdCB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCBzIGZyb20gXCIuL2xpc3QtcmVwb3J0Lm1vZHVsZS5zY3NzXCJcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSBcIi4uL3BhZ2VUaXRsZS9QYWdlVGl0bGVcIjtcblxuY29uc3QgTGlzdFJlcG9ydFR5cGVzID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICBjb25zdCB7IHJlcG9ydFR5cGVzIH0gPSBwcm9wcztcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17cy5jb250YWluZXJ9PlxuICAgICAgPFBhZ2VUaXRsZSB0aXRsZT1cIlJlcG9ydGVzXCIgLz5cbiAgICAgIHtyZXBvcnRUeXBlcy5tYXAocmVwb3J0ID0+IHtcbiAgICAgICAgY29uc3QgeyBvbkNsaWNrLCBpZCwgdGl0bGUgfSA9IHJlcG9ydDtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5yZXBvcnRUeXBlSXRlbX0gb25DbGljaz17KCkgPT4gb25DbGljayhpZCl9PlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3MuaWNvbn0gaWNvbj17ZmFNYXBNYXJrZXJBbHR9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtzLmxhYmVsfT57dGl0bGV9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG50eXBlIFByb3BzID0ge1xuICByZXBvcnRUeXBlczogQXJyYXk8UmVwb3J0Pjtcbn07XG5cbnR5cGUgUmVwb3J0ID0ge1xuICBpZDogbnVtYmVyO1xuICBpY29uOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIG9uQ2xpY2s6IEZ1bmN0aW9uO1xufTtcbmV4cG9ydCBkZWZhdWx0IExpc3RSZXBvcnRUeXBlcztcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImxpc3QtcmVwb3J0X2NvbnRhaW5lcl9fMWh6S0ZcIixcblx0XCJyZXBvcnRUeXBlSXRlbVwiOiBcImxpc3QtcmVwb3J0X3JlcG9ydFR5cGVJdGVtX18yYVhQd1wiLFxuXHRcImxhYmVsXCI6IFwibGlzdC1yZXBvcnRfbGFiZWxfXzFRTnNJXCIsXG5cdFwiaWNvblwiOiBcImxpc3QtcmVwb3J0X2ljb25fXzFRYUp3XCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9sb2FkZXIubW9kdWxlLnNjc3MnXG5pbXBvcnQgQmFja2Ryb3AgZnJvbSAnLi4vYmFja2Ryb3AvQmFja2Ryb3AnXG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgc2hvdzogYm9vbGVhbixcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGVyKHsgc2hvdyB9OiBQcm9wcykge1xuICAgIGNvbnN0IGRpc3BsYXkgPSBzaG93ID8gJ2Jsb2NrJyA6ICdub25lJ1xuICAgIGNvbnN0IHN0eWxlID0geyBkaXNwbGF5IH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlfT5cbiAgICAgICAgICAgIDxCYWNrZHJvcCBkaXNwbGF5PVwic2hvd1wiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9hZGVyQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5Mb2FkZXJ9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvQmFja2Ryb3A+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImxvYWRlckNvbnRhaW5lclwiOiBcImxvYWRlcl9sb2FkZXJDb250YWluZXJfXzJtN2xZXCIsXG5cdFwiTG9hZGVyXCI6IFwibG9hZGVyX0xvYWRlcl9fM0lxRXlcIixcblx0XCJib3VuY2VcIjogXCJsb2FkZXJfYm91bmNlX18zZTV6WlwiXG59O1xuIiwiaW1wb3J0IFJlYWN0LCB7IFB1cmVDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL21vZGFsLm1vZHVsZS5zY3NzJ1xuXG50eXBlIFByb3BzID0ge1xuICAgIHNob3dNb2RhbDogYm9vbGVhbixcbiAgICBjbG9zZU1vZGFsPzogRnVuY3Rpb24sXG4gICAgY29udGFpbmVyV2lkdGg/OiBzdHJpbmcsXG4gICAgbm9QYWRkaW5nPzogYm9vbGVhbixcbiAgICBpc0ltYWdlTW9kYWw/OiBib29sZWFuLFxuICAgIG9uS2V5RG93bj86IEZ1bmN0aW9uLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIGV4dGVuZHMgUHVyZUNvbXBvbmVudDxQcm9wcz4ge1xuICAgIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgIGlzSW1hZ2VNb2RhbDogZmFsc2UsXG4gICAgfVxuICAgIGhhbmRsZUVzY2FwZUtleSA9IChldmVudDogS2V5Ym9hcmRFdmVudCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0ltYWdlTW9kYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICgoZXZlbnQua2V5Q29kZSA9PT0gMjcgfHwgZXZlbnQua2V5Q29kZSA9PT0gMTcgfHwgZXZlbnQua2V5Q29kZSA9PT0gODggfHwgZXZlbnQua2V5Q29kZSA9PT0gMTgpICYmIHRoaXMucHJvcHMuY2xvc2VNb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDI3ICYmIHRoaXMucHJvcHMuY2xvc2VNb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGhhbmRsZUNsb3NlTW9kYWwgPSAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQ+KSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNsb3NlTW9kYWwpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY2xvc2VNb2RhbCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGhhbmRsZUtleU1vZGFsID0gKGU6IGFueSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcm9wcy5pc0ltYWdlTW9kYWwgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICggZS5rZXlDb2RlICA9PT0gMTcgfHwgZS5rZXlDb2RlID09PSAxNykgIHtcbiAgICAgICAgICAgICAgICAvLyBFc2NhcGUga2V5IHByZXNzZWRcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNsb3NlTW9kYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChlLmtleUNvZGUgPT09IDE3KSB7XG4gICAgICAgICAgICAgICAgLy8gRXNjYXBlIGtleSBwcmVzc2VkXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jbG9zZU1vZGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb3BzLnNob3dNb2RhbCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLmhhbmRsZUVzY2FwZUtleSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuaGFuZGxlRXNjYXBlS2V5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgeyBzaG93TW9kYWwsIGNvbnRhaW5lcldpZHRoLCBub1BhZGRpbmcsIG9uS2V5RG93biwgaXNJbWFnZU1vZGFsIH0gPSB0aGlzLnByb3BzXG4gICAgICAgIGxldCBjb250YWluZXJTdHlsZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSA9IHt9XG5cbiAgICAgICAgaWYgKCFzaG93TW9kYWwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRhaW5lcldpZHRoKSB7XG4gICAgICAgICAgICBjb250YWluZXJTdHlsZVsnd2lkdGgnXSA9IGNvbnRhaW5lcldpZHRoXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobm9QYWRkaW5nKSB7XG4gICAgICAgICAgICBjb250YWluZXJTdHlsZVsncGFkZGluZyddID0gJzEwcHgnXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrZ3JvdW5kfSBvbktleURvd249eyhlKSA9PiB0aGlzLmhhbmRsZUtleU1vZGFsKGUpfSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsb3NlTW9kYWx9IC8+XG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17Y29udGFpbmVyU3R5bGV9IGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfT5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn1cbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcIm1vZGFsQ29udGFpbmVyXCI6IFwibW9kYWxfbW9kYWxDb250YWluZXJfX2FkakhWXCIsXG5cdFwiYmFja2dyb3VuZFwiOiBcIm1vZGFsX2JhY2tncm91bmRfXzJjeG1sXCIsXG5cdFwibW9kYWxcIjogXCJtb2RhbF9tb2RhbF9fMmM0Y0dcIixcblx0XCJkaWFsb2dNb2RhbENvbnRhaW5lclwiOiBcIm1vZGFsX2RpYWxvZ01vZGFsQ29udGFpbmVyX18xX3dvV1wiLFxuXHRcImRpYWxvZ01vZGFsQmdcIjogXCJtb2RhbF9kaWFsb2dNb2RhbEJnX18yYzB2OVwiLFxuXHRcImRpYWxvZ01vZGFsXCI6IFwibW9kYWxfZGlhbG9nTW9kYWxfXzFNQnpNXCIsXG5cdFwiYnRuQ29udGFpbmVyXCI6IFwibW9kYWxfYnRuQ29udGFpbmVyX18yX0V6dFwiLFxuXHRcImJ0bkNsb3NlXCI6IFwibW9kYWxfYnRuQ2xvc2VfX3l3MTdHXCIsXG5cdFwiYnRuQWNjZXB0XCI6IFwibW9kYWxfYnRuQWNjZXB0X18zcU1pNVwiXG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgcyBmcm9tICcuL3BhZ2VUaXRsZS5tb2R1bGUuc2NzcydcblxudHlwZSBQcm9wcyA9IHtcbiAgICB0aXRsZTogc3RyaW5nXG59XG5cbmNvbnN0IFBhZ2VUaXRsZSA9ICh7dGl0bGV9OiBQcm9wcykgPT4ge1xuICAgIHJldHVybiAoXG4gICAgPGgxIGNsYXNzTmFtZT17cy50aXRsZX0+e3RpdGxlfTwvaDE+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlVGl0bGUiLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJ0aXRsZVwiOiBcInBhZ2VUaXRsZV90aXRsZV9fM3czaXdcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi4vbW9kYWwvTW9kYWxcIjtcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi4vaW5wdXQvSW5wdXRcIjtcbmltcG9ydCBzIGZyb20gXCIuL3JlcG9ydERldGFpbHMubW9kdWxlLnNjc3NcIjtcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vYnV0dG9ucy9QcmltYXJ5QnV0dG9uXCI7XG5pbXBvcnQgeyBTZWNvbmRhcnlCdXR0b24gfSBmcm9tIFwiLi4vYnV0dG9ucy9TZWNvbmRhcnlCdXR0b25cIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVF1ZXN0aW9uQ2lyY2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBNYXBzR29vZ2xlIGZyb20gJy4uL01hcHNHb29nbGUvTWFwc0dvb2dsZSc7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGlkPzogbnVtYmVyO1xuICBsb2NhdGlvbj86IHN0cmluZztcbiAgcG9zaXRpb24xPzogeyBsYXRpdHVkZT86IHN0cmluZzsgbG9uZ2l0dWRlPzogc3RyaW5nIH07XG4gIHBvc2l0aW9uMj86IHsgbGF0aXR1ZGU/OiBzdHJpbmc7IGxvbmdpdHVkZT86IHN0cmluZyB9O1xuICBwb3NpdGlvbjM/OiB7IGxhdGl0dWRlPzogc3RyaW5nOyBsb25naXR1ZGU/OiBzdHJpbmcgfTtcbiAgcG9zaXRpb240PzogeyBsYXRpdHVkZT86IHN0cmluZzsgbG9uZ2l0dWRlPzogc3RyaW5nIH07XG4gIHNob3dNb2RhbD86IGJvb2xlYW47XG4gIHRvZ2dsZU1vZGFsOiBGdW5jdGlvbjtcbiAgcmVhZE9ubHk/OiBib29sZWFuO1xuICBzYXZlSW5mbzogRnVuY3Rpb247XG4gIGNhbmNlbDogRnVuY3Rpb247XG59O1xuXG5jb25zdCBSZXBvcnREZXRhaWxzID0gKHByb3BzOiBQcm9wcykgPT4ge1xuXG4gIGNvbnN0IHtcbiAgICBzaG93TW9kYWwsXG4gICAgdG9nZ2xlTW9kYWwsXG4gICAgcmVhZE9ubHksXG4gICAgcG9zaXRpb24xLFxuICAgIHBvc2l0aW9uMixcbiAgICBwb3NpdGlvbjMsXG4gICAgcG9zaXRpb240LFxuICAgIHNhdmVJbmZvLFxuICAgIGNhbmNlbCxcbiAgICBsb2NhdGlvbixcbiAgICBpZFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgcmVwb3J0RGF0YSA9IHtcbiAgICBpZDogaWQsXG4gICAgbmFtZTogbG9jYXRpb24sXG4gICAgcG9zaXRpb24xOiBwb3NpdGlvbjEsXG4gICAgcG9zaXRpb24yOiBwb3NpdGlvbjIsXG4gICAgcG9zaXRpb24zOiBwb3NpdGlvbjMsXG4gICAgcG9zaXRpb240OiBwb3NpdGlvbjRcbiAgfTtcbiAgY29uc3QgY29vcmRlbmFkYXMgPSB7XG4gICAgaWQ6IGlkLFxuICAgIG5hbWU6IGxvY2F0aW9uLFxuICAgIHBvc2l0aW9uMTogcG9zaXRpb24xLFxuICAgIHBvc2l0aW9uMjogcG9zaXRpb24yLFxuICAgIHBvc2l0aW9uMzogcG9zaXRpb24zLFxuICAgIHBvc2l0aW9uNDogcG9zaXRpb240XG4gIH07XG5cbiAgY29uc3QgW3JlcG9ydCwgc2V0UmVwb3J0RGF0YV0gPSBSZWFjdC51c2VTdGF0ZShyZXBvcnREYXRhKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHZhbGlkYXRlSW5mbyA9ICgpID0+IHtcbiAgICBpZiAocmVwb3J0Lm5hbWUgIT09ICcnKSB7XG4gICAgICBzZXRFcnJvcihmYWxzZSk7XG4gICAgICBsZXQgbmV3UmVwb3J0ID0ge1xuICAgICAgICBwb2ludDE6IGAke3JlcG9ydC5wb3NpdGlvbjEubGF0aXR1ZGV9LCAke3JlcG9ydC5wb3NpdGlvbjEubG9uZ2l0dWRlfWAsXG4gICAgICAgIHBvaW50MjogYCR7cmVwb3J0LnBvc2l0aW9uMi5sYXRpdHVkZX0sICR7cmVwb3J0LnBvc2l0aW9uMi5sb25naXR1ZGV9YCxcbiAgICAgICAgcG9pbnQzOiBgJHtyZXBvcnQucG9zaXRpb24zLmxhdGl0dWRlfSwgJHtyZXBvcnQucG9zaXRpb24zLmxvbmdpdHVkZX1gLFxuICAgICAgICBwb2ludDQ6IGAke3JlcG9ydC5wb3NpdGlvbjQubGF0aXR1ZGV9LCAke3JlcG9ydC5wb3NpdGlvbjQubG9uZ2l0dWRlfWAsXG4gICAgICAgIG5hbWU6IHJlcG9ydC5uYW1lLFxuICAgICAgfTtcbiAgICAgIHNhdmVJbmZvKG5ld1JlcG9ydCwgcmVwb3J0LmlkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0RXJyb3IodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHNldENoYW5nZVZhbHVlID0gKGV2ZW50LCBpc0xhdGl0dWRlLCBwb3NpdGlvbk51bWJlcikgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZSB9XG4gICAgfSA9IGV2ZW50O1xuICAgIGNvbnN0IHBvc2l0aW9uVHlwZSA9IGlzTGF0aXR1ZGUgPyBcImxhdGl0dWRlXCIgOiBcImxvbmdpdHVkZVwiO1xuICAgIGNvbnN0IHBvc2l0aW9uTmFtZSA9IGBwb3NpdGlvbiR7cG9zaXRpb25OdW1iZXJ9YDtcbiAgICBzZXRSZXBvcnREYXRhKHByZXZTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIFtwb3NpdGlvbk5hbWVdOiB7IC4uLnByZXZTdGF0ZVtwb3NpdGlvbk5hbWVdLCBbcG9zaXRpb25UeXBlXTogdmFsdWUgfVxuICAgICAgfTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBzZXRDaGFuZ2VOYW1lID0gZXZlbnQgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIHRhcmdldDogeyB2YWx1ZSB9XG4gICAgfSA9IGV2ZW50O1xuICAgIHNldFJlcG9ydERhdGEocHJldlN0YXRlID0+IHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLnByZXZTdGF0ZSxcbiAgICAgICAgbmFtZTogdmFsdWVcbiAgICAgIH07XG4gICAgfSk7XG4gIH07XG4gIGNvbnN0IFtzaG93TWFwTW9kYWwsIHNldFNob3dNYXBNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIC8vIENpZXJyYSBvIGFicmUgZWwgbWFwIHkgcmVpbmljaWEgbG9zIHZhbG9yZXNcbiAgY29uc3QgdG9nZ2xlTWFwTW9kYWwgPSAoKSA9PiB7XG4gICAgc2V0U2hvd01hcE1vZGFsKCFzaG93TWFwTW9kYWwpO1xuICAgIGNvbnNvbGUubG9nKCdyZXBvcnREYXRhJywgcmVwb3J0RGF0YSk7XG4gIH1cbiAgLy9Tb2xvIGNpZXJyYSBlbCBtb2RhbCB5IGRlamEgbG9zIHZhbG9yZXMgZGVsIG1hcGFcbiAgY29uc3Qgc2F2ZVJlY3RhbmdsZU1hcCA9ICgpID0+IHtcbiAgICBzZXRTaG93TWFwTW9kYWwoIXNob3dNYXBNb2RhbCk7XG4gIH1cbiAgY29uc3Qgc2V0Q29vcmRzTWFwID0gKHZhbDp0eXBlb2YgY29vcmRlbmFkYXMpID0+IHtcbiAgICBzZXRSZXBvcnREYXRhKHByZXZTdGF0ZSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5wcmV2U3RhdGUsXG4gICAgICAgIHBvc2l0aW9uMTogeyAuLi5wcmV2U3RhdGVbJ3Bvc2l0aW9uMSddLCBsYXRpdHVkZTogdmFsLnBvc2l0aW9uMS5sYXRpdHVkZSwgbG9uZ2l0dWRlOiB2YWwucG9zaXRpb24xLmxvbmdpdHVkZSB9LFxuICAgICAgICBwb3NpdGlvbjI6IHsgLi4ucHJldlN0YXRlWydwb3NpdGlvbjInXSwgbGF0aXR1ZGU6IHZhbC5wb3NpdGlvbjIubGF0aXR1ZGUsIGxvbmdpdHVkZTogdmFsLnBvc2l0aW9uMi5sb25naXR1ZGUgfSxcbiAgICAgICAgcG9zaXRpb24zOiB7IC4uLnByZXZTdGF0ZVsncG9zaXRpb24zJ10sIGxhdGl0dWRlOiB2YWwucG9zaXRpb24zLmxhdGl0dWRlLCBsb25naXR1ZGU6IHZhbC5wb3NpdGlvbjMubG9uZ2l0dWRlIH0sXG4gICAgICAgIHBvc2l0aW9uNDogeyAuLi5wcmV2U3RhdGVbJ3Bvc2l0aW9uNCddLCBsYXRpdHVkZTogdmFsLnBvc2l0aW9uNC5sYXRpdHVkZSwgbG9uZ2l0dWRlOiB2YWwucG9zaXRpb240LmxvbmdpdHVkZSB9LFxuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzLmdlb2xvY2FsaXphdGlvbkNvbnRhaW5lcn0+XG4gICAgICA8TW9kYWwgc2hvd01vZGFsPXtzaG93TW9kYWx9PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3MudGl0bGV9Pk51ZXZvIHJlcG9ydGUgZ2VvcmVmZXJlbmNpYWRvIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFRdWVzdGlvbkNpcmNsZX0gLz48L3A+XG4gICAgICAgIDxwPkNyZWFyIHVuIG51ZXZvIHJlcG9ydGUgaW5ncmVzYW5kbyBsYXMgY29vcmRlbmFkYXMgZW4gZWwgZm9ybXVsYXJpbywgbyBiaWVuLCBzZWxlY2Npb25hbmRvIHVuIMOhcmVhIHNvYnJlIGVsIG1hcGEgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wb2ludENvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaW5wdXR9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRDaGFuZ2VOYW1lKGV2ZW50KX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJOb21icmUgZGVsIFBvbGlnb25vXCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVwb3J0Lm5hbWV9XG4gICAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbnB1dH0+XG4gICAgICAgICAgICA8UHJpbWFyeUJ1dHRvbiBsYWJlbD1cIm1vc3RyYXIgbWFwYVwiIG9uQ2xpY2s9e3RvZ2dsZU1hcE1vZGFsfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnN1YnRpdGxlfT5Qb3NpY2nDs24gMTwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MucG9pbnRDb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0Q2hhbmdlVmFsdWUoZXZlbnQsIHRydWUsIDEpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhdGl0dWRcIlxuICAgICAgICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPScxNi40MjAwMDAwMCdcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVwb3J0LnBvc2l0aW9uMS5sYXRpdHVkZX1cbiAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0Q2hhbmdlVmFsdWUoZXZlbnQsIGZhbHNlLCAxKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMb25naXR1ZFwiXG4gICAgICAgICAgICAgIGlucHV0UGxhY2Vob2xkZXI9Jy05NC45NjAwMDAwMCdcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVwb3J0LnBvc2l0aW9uMS5sb25naXR1ZGV9XG4gICAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIGNsYXNzTmFtZT17cy5zdWJ0aXRsZX0+UG9zaWNpw7NuIDI8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLnBvaW50Q29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbnB1dH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldENoYW5nZVZhbHVlKGV2ZW50LCB0cnVlLCAyKX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXRpdHVkXCJcbiAgICAgICAgICAgICAgaW5wdXRQbGFjZWhvbGRlcj0nMTYuNDIwMDAwMDAnXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JlcG9ydC5wb3NpdGlvbjIubGF0aXR1ZGV9XG4gICAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5pbnB1dH0+XG4gICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHNldENoYW5nZVZhbHVlKGV2ZW50LCBmYWxzZSwgMil9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTG9uZ2l0dWRcIlxuICAgICAgICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPSctOTQuOTYwMDAwMDAnXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9e3JlYWRPbmx5fVxuICAgICAgICAgICAgICBkZWZhdWx0VmFsdWU9e3JlcG9ydC5wb3NpdGlvbjIubG9uZ2l0dWRlfVxuICAgICAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9e3Muc3VidGl0bGV9PlBvc2ljacOzbiAzPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5wb2ludENvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaW5wdXR9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRDaGFuZ2VWYWx1ZShldmVudCwgdHJ1ZSwgMyl9XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGF0aXR1ZFwiXG4gICAgICAgICAgICAgIGlucHV0UGxhY2Vob2xkZXI9JzE2LjQyMDAwMDAwJ1xuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXBvcnQucG9zaXRpb24zLmxhdGl0dWRlfVxuICAgICAgICAgICAgPjwvSW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuaW5wdXR9PlxuICAgICAgICAgICAgPElucHV0XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiBzZXRDaGFuZ2VWYWx1ZShldmVudCwgZmFsc2UsIDMpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxvbmdpdHVkXCJcbiAgICAgICAgICAgICAgaW5wdXRQbGFjZWhvbGRlcj0nLTk0Ljk2MDAwMDAwJ1xuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPXtyZWFkT25seX1cbiAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtyZXBvcnQucG9zaXRpb24zLmxvbmdpdHVkZX1cbiAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPXtzLnN1YnRpdGxlfT5Qb3NpY2nDs24gNDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MucG9pbnRDb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0Q2hhbmdlVmFsdWUoZXZlbnQsIHRydWUsIDQpfVxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhdGl0dWRcIlxuICAgICAgICAgICAgICBpbnB1dFBsYWNlaG9sZGVyPScxNi40MjAwMDAwMCdcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVwb3J0LnBvc2l0aW9uNC5sYXRpdHVkZX1cbiAgICAgICAgICAgID48L0lucHV0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmlucHV0fT5cbiAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gc2V0Q2hhbmdlVmFsdWUoZXZlbnQsIGZhbHNlLCA0KX1cbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMb25naXR1ZFwiXG4gICAgICAgICAgICAgIGlucHV0UGxhY2Vob2xkZXI9Jy05NC45NjAwMDAwMCdcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17cmVhZE9ubHl9XG4gICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17cmVwb3J0LnBvc2l0aW9uNC5sb25naXR1ZGV9XG4gICAgICAgICAgICA+PC9JbnB1dD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtcbiAgICAgICAgICBlcnJvciAmJiA8c3BhbiBjbGFzc05hbWU9e2BkLWZsZXggdy0xMDAgbXktMiAke3MuZXJyb3JNc2d9IGlucHV0X2Vycm9yTWVzc2FnZV9fMTZ5eEhgfT7CoUVsIG5vbWJyZSBlcyByZXF1ZXJpZG8hPC9zcGFuPlxuICAgICAgICB9XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzLmFjdGlvbnN9PlxuICAgICAgICAgIHshcmVhZE9ubHkgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3MuYnRuQ29udGFpbmVyfT5cbiAgICAgICAgICAgICAgPFByaW1hcnlCdXR0b25cbiAgICAgICAgICAgICAgICBsYWJlbD1cIkd1YXJkYXIgaW5mb3JtYWNpw7NuXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB2YWxpZGF0ZUluZm8oKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFyZWFkT25seSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17cy5idG5Db250YWluZXJ9PlxuICAgICAgICAgICAgICA8U2Vjb25kYXJ5QnV0dG9uIGxhYmVsPVwiQ2FuY2VsYXJcIiBvbkNsaWNrPXsoKSA9PiBjYW5jZWwoKX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Nb2RhbD5cbiAgICAgIDxNb2RhbCBzaG93TW9kYWw9e3Nob3dNYXBNb2RhbH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyb3cganVzdGlmeS1jb250ZW50LWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC0xMiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJz5cbiAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0nL2ltZy9jb29yZGVuYWRhcy5qcGcnIGNsYXNzTmFtZT17cy5yZWZlcmVuY2V9Lz4gKi99XG4gICAgICAgICAgICA8TWFwc0dvb2dsZSBzZXRDb29yZHNNYXA9e3NldENvb3Jkc01hcH0gcmVwb3J0PXtyZXBvcnR9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtMTIgJHtzLm1vZGFsQnV0dG9uc0NvbnRhaW5lcn1gfSA+XG4gICAgICAgICAgICA8U2Vjb25kYXJ5QnV0dG9uIGxhYmVsPVwiQ2VycmFyXCIgb25DbGljaz17dG9nZ2xlTWFwTW9kYWx9IGNsYXNzTmFtZT17YCR7cy5idG5TbX0gJHtzLmJnV2hpdGV9YH0gLz5cbiAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uIGxhYmVsPVwiR3VhcmRhclwiIG9uQ2xpY2s9e3NhdmVSZWN0YW5nbGVNYXB9IGNsYXNzTmFtZT17cy5idG5TbX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L01vZGFsPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUmVwb3J0RGV0YWlscy5kZWZhdWx0UHJvcHMgPSB7XG4gIGlkOiAwLFxuICBsb2NhdGlvbjogXCJcIixcbiAgcG9zaXRpb24xOiBbXSxcbiAgcG9zaXRpb24yOiBbXSxcbiAgcG9zaXRpb24zOiBbXSxcbiAgcG9zaXRpb240OiBbXSxcbiAgc2hvd01vZGFsOiB0cnVlLFxuICByZWFkT25seTogdHJ1ZSxcbiAgc2F2ZUluZm86ICgpID0+IHsgfSxcbiAgY2FuY2VsOiAoKSA9PiB7IH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydERldGFpbHM7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJnZW9sb2NhbGl6YXRpb25Db250YWluZXJcIjogXCJyZXBvcnREZXRhaWxzX2dlb2xvY2FsaXphdGlvbkNvbnRhaW5lcl9fMU9hOEtcIixcblx0XCJyZWZlcmVuY2VcIjogXCJyZXBvcnREZXRhaWxzX3JlZmVyZW5jZV9fM0FGQ2pcIixcblx0XCJlcnJvck1zZ1wiOiBcInJlcG9ydERldGFpbHNfZXJyb3JNc2dfX1FVMlVEXCIsXG5cdFwidGl0bGVcIjogXCJyZXBvcnREZXRhaWxzX3RpdGxlX18xSHdjWVwiLFxuXHRcInN1YnRpdGxlXCI6IFwicmVwb3J0RGV0YWlsc19zdWJ0aXRsZV9fMjVOYzZcIixcblx0XCJwb2ludENvbnRhaW5lclwiOiBcInJlcG9ydERldGFpbHNfcG9pbnRDb250YWluZXJfX2FNM1BDXCIsXG5cdFwiaW5wdXRcIjogXCJyZXBvcnREZXRhaWxzX2lucHV0X18yajZXNVwiLFxuXHRcImFjdGlvbnNcIjogXCJyZXBvcnREZXRhaWxzX2FjdGlvbnNfXzE5NHlyXCIsXG5cdFwiYnRuQ29udGFpbmVyXCI6IFwicmVwb3J0RGV0YWlsc19idG5Db250YWluZXJfXzJZdkVOXCIsXG5cdFwiYnRuU21cIjogXCJyZXBvcnREZXRhaWxzX2J0blNtX18yM1dNdVwiLFxuXHRcImJnV2hpdGVcIjogXCJyZXBvcnREZXRhaWxzX2JnV2hpdGVfXzNOanZqXCIsXG5cdFwibW9kYWxCdXR0b25zQ29udGFpbmVyXCI6IFwicmVwb3J0RGV0YWlsc19tb2RhbEJ1dHRvbnNDb250YWluZXJfXzFPRk5xXCJcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7IGdldExvY2FsZSB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24tbWFuYWdlbWVudCdcbmltcG9ydCB7IGdldEkxOG5MYWJlbCB9IGZyb20gJy4uLy4uL2kxOG4nXG5cbmltcG9ydCB7XG4gICAgZmFDYXJldExlZnQsXG4gICAgZmFDYXJldFJpZ2h0LFxuICAgIGZhU29ydERvd24sXG4gICAgZmFTb3J0VXAsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcblxuaW1wb3J0IHsgSGVhZGVyLCBBY3Rpb24sIEFjdGlvbkZ1bmN0aW9uLCBDb250ZW50Um93IH0gZnJvbSAnLi4vLi4vQFR5cGVzL3RhYmxlJztcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLm1vZHVsZS5zY3NzJ1xuXG50eXBlIFByb3BzID0ge1xuICAgIGJvZHlEYXRhOiB7IFtrZXk6IHN0cmluZ106IGFueSB9W10sXG4gICAgaGVhZGVyOiBIZWFkZXJbXSxcbiAgICBhY3Rpb25zPzogYW55LFxuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgY291bnQ6IG51bWJlcixcbiAgICB0b3RhbDogbnVtYmVyLFxuICAgIHRvdGFsUGFnZTogbnVtYmVyLFxuICAgIG9uTmV4dFBhZ2U6IEZ1bmN0aW9uLFxuICAgIG9uUHJldlBhZ2U6IEZ1bmN0aW9uLFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYWJsZShwcm9wczogUHJvcHMpIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGJvZHlEYXRhLFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgICB0b3RhbFBhZ2UsXG4gICAgICAgIGFjdGlvbnMsXG4gICAgICAgIG9uTmV4dFBhZ2UsXG4gICAgICAgIG9uUHJldlBhZ2UsXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBsb2NhbGUgPSBnZXRMb2NhbGUoKVxuXG4gICAgY29uc3QgdG90YWxMZW5ndGggPSBhY3Rpb25zICE9IG51bGwgPyBoZWFkZXIubGVuZ3RoICsgMSA6IGhlYWRlci5sZW5ndGhcblxuICAgIGNvbnN0IHdpZHRoID0gYCR7MTAwIC8gdG90YWxMZW5ndGh9JWBcblxuICAgIGNvbnN0IHRhYmxlU3R5bGUgPSB7XG4gICAgICAgIHdpZHRoOiBoZWFkZXIubGVuZ3RoID4gOCA/IGAke2hlYWRlci5sZW5ndGggKiAxMH1lbWAgOiBgMTAwJWBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVBY3Rpb25CdXR0b25zKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGFjdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgIGxldCBpc0Jsb2NrZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgaWYgKGRhdGEuYmxvY2tlZF91cCAmJiBhY3Rpb24uaXNCbG9ja2VkID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgaXNCbG9ja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2lzQmxvY2tlZCA/ICgpID0+IHt9IDogKCkgPT4gYWN0aW9uLmFjdGlvbihkYXRhKX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgaWNvbj17YWN0aW9uLmljb259XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYmxvY2tlZF91cCAmJiAhYWN0aW9uLmVuYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAnI2QzZDNkMydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24uY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6ICgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmJsb2NrZWRfdXAgJiYgIWFjdGlvbi5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ25vdC1hbGxvd2VkJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAncG9pbnRlcic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46ICc1cHgnXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YWJsZUNvbXBsZXh9PlxuICAgICAgICAgICAgPHRhYmxlIHN0eWxlPXt0YWJsZVN0eWxlfT5cbiAgICAgICAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoZWFkZXIubWFwKChlbGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRoIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e2VsZS5sYWJlbH08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZWxlLnNvcnQgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBlbGUub25Tb3J0KGVsZS5vcmRlciA9PT0gJ2Rlc2MnPyAnYXNjJyA6ICdkZXNjJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc29ydEljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17ZWxlLm9yZGVyID09PSAnZGVzYycgPyBmYVNvcnRVcCA6IGZhU29ydERvd24gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz59XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMgJiYgYWN0aW9ucy5sZW5ndGggJiYgPHRoIHN0eWxlPXt7IHdpZHRoIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Z2V0STE4bkxhYmVsKGxvY2FsZSwgJ3RhYmxlLmFjdGlvbnMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICAgIDwvdGhlYWQ+XG5cbiAgICAgICAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICAgICAgICAgIHsgYm9keURhdGEubWFwKChkYXRhLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHRyIGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlci5tYXAoKGVsZSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17aW5kZXh9IHN0eWxlPXt7IHdpZHRoIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2RhdGFbZWxlLmtleV0gIT0gJ251bGwnID8gKGVsZS5rZXkgID09PSAnZGVzY3JpcHRpb24nID8gKCBkYXRhW2VsZS5rZXldLmxlbmd0aCA+IDIwID8gIGRhdGFbZWxlLmtleV0uc3Vic3RyaW5nKDAsIDE1KSArIFwiLi4uXCIgOiBkYXRhW2VsZS5rZXldKSA6IGRhdGFbZWxlLmtleV0pICA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyh0eXBlb2YgYWN0aW9ucyA9PT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9ucyhkYXRhIGFzIENvbnRlbnRSb3cpLm1hcChjcmVhdGVBY3Rpb25CdXR0b25zKGRhdGEpKSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheS5pc0FycmF5KGFjdGlvbnMpICYmIGFjdGlvbnMubGVuZ3RoID9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbnMubWFwKGNyZWF0ZUFjdGlvbkJ1dHRvbnMoZGF0YSkpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSkgfVxuICAgICAgICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgICAgICA8L3RhYmxlPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgIHtjdXJyZW50UGFnZSA+IDEgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gb25QcmV2UGFnZSgpfSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJldExlZnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FyZXRMZWZ0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge3RvdGFsUGFnZSA+IGN1cnJlbnRQYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IG9uTmV4dFBhZ2UoKX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FyZXRSaWdodH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJldFJpZ2h0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5cbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSdcbmltcG9ydCB7XG4gICAgZmFDYXJldExlZnQsXG4gICAgZmFDYXJldFJpZ2h0LFxuICAgIGZhRXllLFxuICAgIGZhRXllU2xhc2gsXG4gICAgZmFQZXJjZW50LFxuICAgIGZhVGltZXNDaXJjbGUsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucydcbmltcG9ydCB7IHZhbGlkYXRlSXNBbmFseXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Vzc2lvbi1tYW5hZ2VtZW50JztcbmltcG9ydCB7IHBob3RvVXJsIH0gZnJvbSAnLi4vLi4vdXRpbHMvcGhvdG9fdXJsJ1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSAnLi4vLi4vdXRpbHMvZm9ybWF0LWRhdGUnXG5pbXBvcnQgeyBJY29uUHJvcCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSdcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbC9Nb2RhbCdcbmltcG9ydCBDaGVja2JveCBmcm9tIFwiLi4vY2hlY2tib3gvQ2hlY2tib3hcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLm1vZHVsZS5zY3NzJ1xuXG50eXBlIFByb3BzID0ge1xuICAgIGN1cnJlbnRQYWdlOiBudW1iZXIsXG4gICAgY291bnQ6IG51bWJlcixcbiAgICB0b3RhbDogbnVtYmVyLFxuICAgIHRvdGFsUGFnZTogbnVtYmVyLFxuICAgIGNoYW5nZVBhZ2VOZXh0OiBGdW5jdGlvbixcbiAgICBjaGFuZ2VQYWdlUHJldjogRnVuY3Rpb24sXG4gICAgaGVhZGVyOiB7IHRpdGxlOiBzdHJpbmcsIGlzSGlkZWRhYmxlOiBib29sZWFuLCBuYW1lOiBzdHJpbmcsIHR5cGU6IHN0cmluZywgaGlkZT86IGJvb2xlYW4gfVtdLFxuICAgIGNvbnRlbnQ6IHsgW2tleTogc3RyaW5nXTogYW55IH1bXSxcbiAgICBhY3Rpb25zOiB7IGFjdGlvbjogRnVuY3Rpb24sIGNvbG9yOiBzdHJpbmcsIGljb246IEljb25Qcm9wfVtdLFxuICAgIG9uQ2xpY2tEZXRhaWxzOiBGdW5jdGlvbixcbiAgICBvbkNoZWNrZWQ/OiBGdW5jdGlvblxuICAgIGNoZWNrYm94U3R5bGVzPzogc3RyaW5nLFxuICAgIHRleHROb3REYXRhPzogc3RyaW5nLFxuICAgIHJlcG9ydERldGFpbHM/OiBib29sZWFuLFxuICAgIGN1c3RvbUNsYXNzTmFtZT86IHN0cmluZyxcbn1cblxuY29uc3QgVGFibGVDb21wbGV4ID0gKHByb3BzOiBQcm9wcykgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgY3VycmVudFBhZ2UsXG4gICAgICAgIHRvdGFsUGFnZSxcbiAgICAgICAgY2hhbmdlUGFnZU5leHQsXG4gICAgICAgIGNoYW5nZVBhZ2VQcmV2LFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGNvbnRlbnQsXG4gICAgICAgIGFjdGlvbnMsXG4gICAgICAgIG9uQ2xpY2tEZXRhaWxzLFxuICAgICAgICBvbkNoZWNrZWQgPSAoKSA9PiB7fSxcbiAgICAgICAgY2hlY2tib3hTdHlsZXMsXG4gICAgICAgIHRleHROb3REYXRhLFxuICAgICAgICByZXBvcnREZXRhaWxzLFxuICAgICAgICBjdXN0b21DbGFzc05hbWUsXG4gICAgfSA9IHByb3BzXG5cbiAgICBjb25zdCBbaGVhZGVyTGlzdCwgc2V0SGVhZGVyTGlzdF0gPSB1c2VTdGF0ZShoZWFkZXIpXG4gICAgY29uc3QgW3Nob3dNb2RhbCwgc2V0U2hvd01vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICAgIGNvbnN0IFtzZWxlY3RlZEltYWdlLCBzZXRTZWxlY3RlZEltYWdlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtpc0FuYWx5c3QsIHNldElzQW5hbHlzdF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJc0FuYWx5c3QodmFsaWRhdGVJc0FuYWx5c3QoKSk7XG4gICAgfSwgW10pXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRIZWFkZXJMaXN0KGhlYWRlckxpc3QubWFwKGggPT4ge1xuICAgICAgICAgICAgY29uc3QgaGlkZSA9IGguaGlkZSB8fCBmYWxzZVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi5oLFxuICAgICAgICAgICAgICAgIGhpZGUsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuICAgIH0sIFtoZWFkZXJdKVxuXG4gICAgY29uc3QgdGFibGVTdHlsZSA9IHtcbiAgICAgICAgd2lkdGg6IGhlYWRlci5sZW5ndGggPiA2ID8gYCR7aGVhZGVyLmxlbmd0aCAqIDEwfWVtYCA6IGAxMDAlYFxuICAgIH1cblxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9IChpbWdVcmw6IHN0cmluZykgPT4ge1xuICAgICAgICBzZXRTZWxlY3RlZEltYWdlKGltZ1VybClcbiAgICAgICAgc2V0U2hvd01vZGFsKHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgZ2V0RmllbGQgPSAoZmllbGRUeXBlOiBzdHJpbmcsIGZpZWxkTmFtZTogc3RyaW5nLCByb3c6IGFueSwgaXNIaWRkZW46IGJvb2xlYW4gfCB1bmRlZmluZWQpID0+IHtcblxuICAgICAgICBpZiAoaXNIaWRkZW4pIHtcbiAgICAgICAgICAgIHJldHVybiAnICdcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlID0gcm93W2ZpZWxkTmFtZV1cblxuICAgICAgICBzd2l0Y2ggKGZpZWxkVHlwZSkge1xuICAgICAgICAgICAgY2FzZSAndGV4dCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID8gdmFsdWUgOiBudWxsXG5cbiAgICAgICAgICAgIGNhc2UgJ2ltZyc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID9cbiAgICAgICAgICAgICAgICAgICAgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbk1vZGFsKGAke3Bob3RvVXJsfS8ke3ZhbHVlfWApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7cGhvdG9Vcmx9LyR7dmFsdWV9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCI1MFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbFxuICAgICAgICAgICAgY2FzZSAnbW9uZXknOlxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSAmJiAhaXNOYU4odmFsdWUpID8gYFxcJCAke3BhcnNlRmxvYXQodmFsdWUpLnRvRml4ZWQoMil9YCA6ICctJ1xuICAgICAgICAgICAgY2FzZSAnZGF0ZSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdERhdGUodmFsdWUpO1xuICAgICAgICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgIT09IG51bGwgJiYgYCR7dmFsdWV9YC5zcGxpdCgnLicpLmxlbmd0aCA+IDEgP1xuICAgICAgICAgICAgICAgICAgICBgJHtwYXJzZUZsb2F0KHZhbHVlKS50b0ZpeGVkKDIpfWAgOlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjaGVja2JveFN0eWxlc31cbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Jvdy5jaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eygpID0+IG9uQ2hlY2tlZChyb3cpfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhc2UgJ2FjdGlvbnMnOlxuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAge2FjdGlvbnMubWFwKChhYywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiAgaXNBbmFseXN0ID8gJyNkM2QzZDMnIDogYWMuY29sb3IsIG1hcmdpbjogJzAuNWVtJywgY3Vyc29yOiAncG9pbnRlcicsIHBvaW50ZXJFdmVudHM6IGlzQW5hbHlzdCA/ICdub25lJyA6ICdhdXRvJyB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXthYy5pY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBhYy5hY3Rpb24ocm93KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIGNhc2UgJ2lkJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkNsaWNrRGV0YWlscyh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaWRDbGFzc31cbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cm93Wydpc19wcm9tb3Rpb24nXSA/XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBjbGFzc05hbWU9e3N0eWxlcy5pc1Byb21vfSBpY29uPXtmYVBlcmNlbnR9IC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ31cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk6IG51bGxcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBjaGFuZ2VIaWRlU3RhdHVzID0gKGZpZWxkTmFtZTogc3RyaW5nLCBmaWVsZFRpdGxlOiBzdHJpbmcsIGhpZGVGaWVsZDogYm9vbGVhbikgPT4ge1xuICAgICAgICBjb25zdCBuZXdIZWFkZXIgPSBoZWFkZXJMaXN0Lm1hcChlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGhpZGUgPSBmaWVsZE5hbWUgPT09IGUubmFtZSAmJiBmaWVsZFRpdGxlID09PSBlLnRpdGxlID9cbiAgICAgICAgICAgICAgICBoaWRlRmllbGQgOlxuICAgICAgICAgICAgICAgIGUuaGlkZVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmUsXG4gICAgICAgICAgICAgICAgaGlkZSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBzZXRIZWFkZXJMaXN0KG5ld0hlYWRlcilcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZU1vZGFsID0gKCkgPT4gc2V0U2hvd01vZGFsKGZhbHNlKVxuXG4gICAgY29uc3QgdGFibGVDbGFzc05hbWUgPSBjdXN0b21DbGFzc05hbWUgPyBgJHtzdHlsZXMudGFibGVDb21wbGV4fSAke2N1c3RvbUNsYXNzTmFtZX1gIDogc3R5bGVzLnRhYmxlQ29tcGxleFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RhYmxlQ2xhc3NOYW1lfT5cbiAgICAgICAgICAgIDx0YWJsZSBzdHlsZT17dGFibGVTdHlsZX0+XG4gICAgICAgICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGVhZGVyTGlzdC5tYXAoKG9wLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUV4aXN0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNjYW4gPSBjb250ZW50WzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eUV4aXN0ID0gc2NhbltvcC5uYW1lXSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3AudHlwZSA9PT0gJ2FjdGlvbnMnIHx8IG9wLnR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcGVydHlFeGlzdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wLnRpdGxlID09PSAnU2VsZWNjaW9uYXInICYmIHJlcG9ydERldGFpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wZXJ0eUV4aXN0ID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGgga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3AuaGlkZSA/ICcnIDogb3AudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7b3AuaXNIaWRlZGFibGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlSGlkZVN0YXR1cyhvcC5uYW1lLCBvcC50aXRsZSwgIW9wLmhpZGUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oaWRlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtvcC5oaWRlID8gZmFFeWUgOiBmYUV5ZVNsYXNofVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApOiA8dGgga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtvcC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICA8L3RoZWFkPlxuXG4gICAgICAgICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAgICAgICAgICB7Y29udGVudC5tYXAoKGMsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8dHIga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2hlYWRlckxpc3QubWFwKChlbGUsaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoYy5zdGF0dXMgPT0gJ1BlbmRpZW50ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMucmV2aWV3ZWQgPSAnIC0gJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwICYmIHJlcG9ydERldGFpbHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBnZXRGaWVsZChlbGUudHlwZSwgZWxlLm5hbWUsIGMsIGVsZS5oaWRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZpZWxkID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRkIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmaWVsZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk6ICA8dGQga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyctJ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGQ+O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIHsgdGV4dE5vdERhdGEgfVxuICAgICAgICAgICAgPC9oND5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7Y3VycmVudFBhZ2UgPiAxICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIG9uQ2xpY2s9eygpID0+IGNoYW5nZVBhZ2VQcmV2KCl9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtmYUNhcmV0TGVmdH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJldExlZnR9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7dG90YWxQYWdlID4gY3VycmVudFBhZ2UgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgb25DbGljaz17KCkgPT4gY2hhbmdlUGFnZU5leHQoKX0gaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhQ2FyZXRSaWdodH0vPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17ZmFDYXJldFJpZ2h0fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxNb2RhbFxuICAgICAgICAgICAgICAgIG5vUGFkZGluZz17dHJ1ZX1cbiAgICAgICAgICAgICAgICBjb250YWluZXJXaWR0aD1cIjQwJVwiXG4gICAgICAgICAgICAgICAgc2hvd01vZGFsPXtzaG93TW9kYWx9XG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbD17aGFuZGxlQ2xvc2VNb2RhbH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3BhbiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93TW9kYWwoZmFsc2UpfSBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEltYWdlQ2xvc2V9PlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhVGltZXNDaXJjbGV9Lz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17c2VsZWN0ZWRJbWFnZX0gYWx0PVwidGhpcyBpcyBjYXIgaW1hZ2VcIiBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbEltYWdlfS8+XG4gICAgICAgICAgICA8L01vZGFsPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cblRhYmxlQ29tcGxleC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgY2hlY2tib3hTdHlsZXM6ICcnLFxuICAgIHRleHROb3REYXRhOiAnJyxcbiAgICBjdXN0b21DbGFzc05hbWU6ICcnLFxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNvbXBsZXhcbiIsImltcG9ydCBUYWJsZSBmcm9tICcuL1RhYmxlJ1xuaW1wb3J0IFRhYmxlQ29tcGxleCBmcm9tICcuL1RhYmxlQ29tcGxleCdcblxuZXhwb3J0IHtcbiAgICBUYWJsZSxcbiAgICBUYWJsZUNvbXBsZXgsXG59IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwidGFibGVcIjogXCJ0YWJsZV90YWJsZV9fM1JCQ2VcIixcblx0XCJmb290ZXJcIjogXCJ0YWJsZV9mb290ZXJfXzJuNHBMXCIsXG5cdFwiYWN0aW9uSWNvblwiOiBcInRhYmxlX2FjdGlvbkljb25fXzNCdUNwXCIsXG5cdFwidGFibGVDb21wbGV4XCI6IFwidGFibGVfdGFibGVDb21wbGV4X19ZcnhiMFwiLFxuXHRcImhpZGVcIjogXCJ0YWJsZV9oaWRlX18zeHlMLVwiLFxuXHRcImlkQ2xhc3NcIjogXCJ0YWJsZV9pZENsYXNzX18xb05ORVwiLFxuXHRcImlzUHJvbW9cIjogXCJ0YWJsZV9pc1Byb21vX18yNTc0MVwiLFxuXHRcIm1vZGFsSW1hZ2VcIjogXCJ0YWJsZV9tb2RhbEltYWdlX18yZVNVUVwiLFxuXHRcIm1vZGFsSW1hZ2VDbG9zZVwiOiBcInRhYmxlX21vZGFsSW1hZ2VDbG9zZV9fMXJKTHZcIixcblx0XCJzb3J0SWNvblwiOiBcInRhYmxlX3NvcnRJY29uX190Z0lEcFwiXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgc2VhcmNoRmllbGQ6ICdTZWFyY2ggYnkgbmFtZSBvciBwcm9kdWN0IGNvZGUnLFxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgICAgICBjbGVhbkZpbHRlcjogJ0NsZWFuICBGaWx0ZXJzJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCcsXG4gICAgICAgIGNvbXBhcmF0aXZlQ2hhcnQ6ICdHcmFwaCBDb21wYXJhdGl2ZXMnLFxuICAgICAgICBnZW9yZWZlcmVuY2U6ICdHZW9sb2NhdGlvbicsXG4gICAgICAgIGdldEN1cnJlbnRSZXBvcnQ6ICdHRVQgQ1VSUkVOVCBMSVNUJyxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQnJhbmRzJyxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXQgYnJhbmQnLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciBpbiAgdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBpbiB0aGUgUmVxdWVzdC4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVCcmFuZDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIEJyYW5kIGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2VzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZUJyYW5kOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgYnJhbmQgaGFzIGJlZW4gcmVtb3ZlZCBzdWNjZXNmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdEJyYW5kOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGUgYnJhbmQgaGFzIGJlZW4gZWRpdGVkIGNvcnJlY3RseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1RoZSByZXBvcnQgaGFzIGJlZW4gZG93bmxvYWRlZCBzdWNjZXNzZnVsbHkgIC4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXRlIEJyYW5kJyxcbiAgICAgICAgICAgIHNlYXJjaDogJ1NlYXJjaCBCcmFuZCcsXG4gICAgICAgICAgICBzZWFyY2hCeU5hbWU6ICdTZWFyY2ggYnkgYnJhbmQgJyxcblxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdCBicmFuZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgIGFkZDogJ0FkZCBCcmFuZCcsXG4gICAgICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkIFJlcG9ydCcsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0NhcHR1cmUgZGV0YWlscycsXG4gICAgaW5wdXQ6IHtcbiAgICAgICAgY2FwdHVyZUlkOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0NhcHR1cmUnLFxuICAgICAgICB9LFxuICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgbGFiZWw6ICdQcmljZScsXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlV2l0aFByb21vdGlvbjoge1xuICAgICAgICAgICAgbGFiZWw6ICdQcm9tbyBQcmljZScsXG4gICAgICAgIH0sXG4gICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQmFyIENvZGUnLFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ05hbWUnLFxuICAgICAgICB9LFxuICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgbGFiZWw6ICdCcmFuZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnVW5pdCcsXG4gICAgICAgIH0sXG4gICAgICAgIHN0b3JlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1N0b3JlJyxcbiAgICAgICAgfSxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgbGFiZWw6ICdUeXBlJyxcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnR3JvdXAnLFxuICAgICAgICB9LFxuICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0xpbmUnLFxuICAgICAgICB9LFxuICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnR3JhbW1hZ2UgLyBRdWFudGl0eScsXG4gICAgICAgIH0sXG4gICAgICAgIGNhcHR1cmVEYXRlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0RhdGUgb2YgQ2FwdHVyZScsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgbGFiZWw6ICdTdGF0dXMnLFxuICAgICAgICB9LFxuICAgICAgICBzY2FubmVkQnk6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnU2Nhbm5lZCBieScsXG4gICAgICAgIH0sXG4gICAgICAgIHJldmlld2VkOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1JldmlldycsXG4gICAgICAgIH0sXG4gICAgICAgIGJyYW5jaE9mZmljZToge1xuICAgICAgICAgICAgbGFiZWw6ICdCcmFuY2gnLFxuICAgICAgICB9LFxuICAgICAgICBtYWluSW1hZ2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTWFpbiBQaG90bycsXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlSW1hZ2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUHJpY2UgUGhvdG8nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGV0YWlsc0NvbnRhaW5lcjoge1xuICAgICAgICB0aXRsZTogJ1Byb21vIFBob3RvJyxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2hhbmdlSW1hZ2U6ICdDaGFuZ2UgSW1hZ2UnLFxuICAgICAgICBlZGl0SW5mb3JtYXRpb246ICdFZGl0IEluZm9ybWF0aW9uJyxcbiAgICAgICAgc2F2ZUluZm9ybWF0aW9uOiAnU2F2ZSBJbmZvcm1hdGlvbicsXG4gICAgICAgIGNhbmNlbEluZm9ybWF0aW9uOiAnQ2FuY2VsJyxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0NBUFRVUkVTJyxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHNlYXJjaEZpZWxkOiAnU2VhcmNoIGJ5ICBuYW1lIG9yIHByb2R1Y3QgY29kZScsXG4gICAgICAgIHN0YXJ0RGF0ZTogJ0Zyb20nLFxuICAgICAgICBlbmREYXRlOiAnVG8nLFxuICAgICAgICB3aXRoSW1hZ2U6ICdXaXRoIFBob3RvJyxcbiAgICAgICAgd2l0aG91dEltYWdlOiAnV2l0aG91dCBQaG90bycsXG4gICAgICAgIHN0YXR1c1JlamVjdGVkOiAnUmVqZWN0ZWQnLFxuICAgICAgICBub3JtYWxQcmljZTogJ05vcm1hbCBQcmljZScsXG4gICAgICAgIHN0YXR1c1BlbmRpbmc6ICdQZW5kaW5nJyxcbiAgICAgICAgc3RhdHVzVmFsaWRhdGVkOiAnVmFsaWRhdGVkJyxcbiAgICAgICAgcHJpY2VXaXRoUHJvbW90aW9uOiAnUHJvbW8gUHJpY2UnLFxuICAgICAgICBwYXJhbTogJ1BhcmFtZXRlcicsXG4gICAgICAgIHZhbHVlOiAnVmFsdWUnLFxuICAgICAgICBnZW9sb2NhbGl0YXRpb246ICdHZW9sb2NhdGlvbicsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgICAgIGNsZWFuRmlsdGVyOiAnQ2xlYW4gRmlsdGVycycsXG4gICAgICAgIGV4cG9ydEdlb0RhdGE6ICdFeHBvcnQgR2VvbG9jYXRpb24gRGF0YScsXG4gICAgfSxcbiAgICBvcHRpb25zQ2F0YWxvZzoge1xuICAgICAgICBicmFuZHNDYXRhbG9nOiAnQnJhbmQnLFxuICAgICAgICBncm91cHNDYXRhbG9nOiAnR3JvdXAnLFxuICAgICAgICBsaW5lc0NhdGFsb2c6ICdMaW5lJyxcbiAgICAgICAgc3RvcmVzQ2F0YWxvZzogJ0JyYW5jaCcsXG4gICAgICAgIHVuaXRzQ2F0YWxvZzogJ1VuaXQnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdTZWxlY3QnLFxuICAgICAgICAgICAgaWQ6ICdDYXB0dXJlJyxcbiAgICAgICAgICAgIHBob3RvX21haW46ICdNYWluIFBob3RvJyxcbiAgICAgICAgICAgIHBob3RvX3ByaWNlOiAnUHJpY2UgUGhvdG8nLFxuICAgICAgICAgICAgYmFyY29kZTogJ0JhcmNvZGUnLFxuICAgICAgICAgICAgcHJvZHVjdDogJ1Byb2R1Y3QnLFxuICAgICAgICAgICAgYnJhbmQ6ICdCcmFuZCcsXG4gICAgICAgICAgICB0eXBlOiAnVHlwZScsXG4gICAgICAgICAgICBjaGFpbjogJ0NvbW1lcmNpYWwgQ2hhaW4nLFxuICAgICAgICAgICAgYnJhbmNoOiAnQnJhbmNoJyxcbiAgICAgICAgICAgIHNjYW5uZWRfYnk6ICdDYXB0dXJpc3QnLFxuICAgICAgICAgICAgcmV2aWV3ZWQ6ICdWYWxpZGF0b3InLFxuICAgICAgICAgICAgc3RhdHVzOiAnU3RhdHVzJyxcbiAgICAgICAgICAgIGdyYW1tYWdlX3F1YW50aXR5OiAnUXVhbnRpdHknLFxuICAgICAgICAgICAgdW5pdDogJ1VuaXQnLFxuICAgICAgICAgICAgdW5pdF9wcmljZTogJ1VuaXQgUHJpY2UnLFxuICAgICAgICAgICAgZ3JvdXA6ICdHcm91cCcsXG4gICAgICAgICAgICBsaW5lOiAnTGluZScsXG4gICAgICAgICAgICBwcm9kdWN0X2NyZWF0ZWRfZGF0ZTogJ0RhdGUgb2YgUHJvZHVjdCBSZWdpc3RyYXRpb24nLFxuICAgICAgICAgICAgbG93ZXJfcHJpY2U6ICdMb3dlc3QgUHJpY2UnLFxuICAgICAgICAgICAgaGlnaGVzdF9wcmljZTogJ0hpZ2hlc3QgUHJpY2UnLFxuICAgICAgICAgICAgY2FwdHVyZV9kYXRlOiAnQ2FwdHVyZSBEYXRlJyxcbiAgICAgICAgICAgIGNhcHR1cmVfcHJpY2U6ICdDYXB0dXJlIFByaWNlJyxcbiAgICAgICAgICAgIGFjdGlvbnM6ICdBY3Rpb25zJyxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgc3RhdHVzOiB7XG4gICAgICAgIHZhbGlkYXRlZDogJ1ZhbGlkYXRlZCcsXG4gICAgICAgIHBlbmRpbmc6ICdQZW5kaW5nJyxcbiAgICB9LFxuXG4gICAgdW5pdHM6IHtcbiAgICAgICAgY206ICdDZW50aW1ldGVyJyxcbiAgICAgICAgbTogJ01ldGVyJyxcbiAgICAgICAgbWw6ICdNaWxpbGl0ZXJzJyxcbiAgICAgICAgbHQ6ICdMaXRlcicsXG4gICAgICAgIG1nOiAnTWlsaWdyYW0nLFxuICAgICAgICBnOiAnR3JhbScsXG4gICAgICAgIGtnOiAnS2lsb2dyYW0nLFxuICAgICAgICBwaWV6YTogJ1BpZWNlJyxcbiAgICB9LFxuXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmF0ZScsXG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBvcGVyYXRpb24gaXMgcGVybWFuZW50LCBEbyB5b3UgIHdhbnQgdG8gIGVsaW1pbmF0ZSB0aGlzIGVsZW1lbnQ/JyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0NhdGFsb2dzJyxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGJyYW5kczogJ0JyYW5kcycsXG4gICAgICAgIHVuaXRpZXM6ICdVbml0cycsXG4gICAgICAgIGdyb3VwczogJ0dyb3VwcycsXG4gICAgICAgIGxpbmVzOiAnTGluZXMnLFxuICAgICAgICBjaGFpbjogJ0NoYWlucycsXG4gICAgICAgIHJlZ2lvbjogJ1JlZ2lvbnMnLFxuICAgICAgICB1c2VyczogJ1VzZXJzJyxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ2hhaW5zJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggIENoYWluJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdTZWFyY2ggYnkgbmFtZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQWRkIENoYWluJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCBSZXBvcnQnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgaWQ6ICdJZCcsXG4gICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICBhbGlhczogJ0FsaWFzJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3Igd2l0aCB0aGUgcmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHdpdGggdGhlIHJlcXVlc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDaGFpbiBjcmVhdGVkIHN1Y2Nlc3NmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdDaGFpbiBoYXMgYmVlbiBkZWxldGVkIHN1Y2Nlc3NmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIGNoYWluIGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNkdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlcG9ydCBoYXMgYmVlbiBkb3dubG9hZGVkIHN1Y2Nlc3NmdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXRlIENoYWluJyxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdE1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXQgQ2hhaW4nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhdGUnLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGFiczoge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBwcmljZUxpc3Q6ICdDaGFydHMgLSBMaXN0IFByaWNlJyxcbiAgICAgICAgICAgIHVuaXRhcnlQcmljZTogJ0NoYXJ0cyAtIFVuaXQgUHJpY2UnLFxuICAgICAgICAgICAgaGlzdG9yeTogJ1ByaWNlIEhpc3RvcnknLFxuICAgICAgICB9LFxuICAgICAgICBoaXN0b3J5OiB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgZGF0ZTogJ0RhdGUnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnUHJpY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHN0YXJ0RGF0ZTogJ1N0YXJ0IERhdGUnLFxuICAgIGVuZERhdGU6ICdFbmQgRGF0ZScsXG4gICAgc2VhcmNoOiAnU2VhcmNoIGNhcHR1cmUgYnkgSUQnLFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgYnV0dG9uQWNjZXB0TGFiZWw6ICdFbGltaW5hdGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJ1RoaXMgb3BlcmF0aW9uIGlzIHBlcm1hbmVudCBEbyB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyBlbGVtZW50PycsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhcnREYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgZW5kRGF0ZTogJ0VuZCBEYXRlJyxcbiAgICBtb2RhbDoge1xuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIGJ1dHRvbkFjY2VwdExhYmVsOiAnRWxpbWluYXRlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdUaGlzIG9wZXJhdGlvbiBpcyBwZXJtYW5lbnQsIGRvIHlvdSB3YW50IHRvIGVsaW1pbmF0ZSB0aGlzIGVsZW1lbnQ/JyxcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0dyb3VwcycsXG4gICAgc2VhcmNoOiAnU2VhcmNoIGEgZ3JvdXAnLFxuICAgIHNlYXJjaEJ5TmFtZTogJ1NlYXJjaCBieSBOYW1lICcsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdBZGQgZ3JvdXAnLFxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkIFJlcG9ydCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICBhYmJyZXZpYXRpb246ICdBYmJyZXZpYXRpb24nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciB3aXRoIHRoZSByZXF1ZXN0LicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3Igd2l0aCB0aGUgcmVxdWVzdC4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0dyb3VwIGhhcyBiZWVuIGNyZWF0ZWQgc3VjY2Vzc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0dyb3VwIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdHcm91cCBoYXMgYmVlbiBlZGl0ZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVwb3J0IGRvd25sb2FkZWQgc3VjY2VzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZSAgZ3JvdXAnLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdCBHcm91cCcsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWF0ZScsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1ZhbGlkYXRpb24nLFxuICAgIHdlbGNvbWU6ICdTZWxlY3QgYSBjYXB0dXJlIHRvIHN0YXJ0LicsXG4gICAgc2lkZWJhcjoge1xuICAgICAgICB0aXRsZTogJ0NhcHR1cmVzJyxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIG1pc3Npb246IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01pc3Npb24nLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9kdWN0JyxcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY2FuRmlsdGVyOiB7XG4gICAgICAgICAgICBhbGw6ICdBbGwnLFxuICAgICAgICAgICAgd2l0aFByb2R1Y3Q6ICdXaXRoIHByb2R1Y3QnLFxuICAgICAgICAgICAgd2l0aG91dFByb2R1Y3Q6ICdXaXRob3V0IHByb2R1Y3QnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBzY2FuOiB7XG4gICAgICAgIHRvcEJhcjoge1xuICAgICAgICAgICAgYmVpbmdWYWxpZGF0ZWQ6ICdUaGlzIHJlZ2lzdGVyIGlzIGJlaW5nIHZhbGlkYXRlZCwgc2VsZWN0IGFub3RoZXIgb25lJyxcbiAgICAgICAgICAgIHdpdGhvdXROdW1iZXI6ICdXaXRob3V0IE51bWJlcicsXG4gICAgICAgICAgICB3aXRob3V0TWlzc2lvbjogJ1dpdGhvdXQgTWlzc2lvbicsXG4gICAgICAgIH0sXG4gICAgICAgIHByb2R1Y3RJbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdQcm9kdWN0JyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VJbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdQcmljZScsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICBiYXJjb2RlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdCYXJjb2RlJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBGaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1ByaWNlJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvbW90aW9uUHJpY2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb21vIFByaWNlJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBGaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0JyYW5jaCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0FkZHJlc3MnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGl0aW9uYWxDb21tZW50czoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQWRkaXRpb25hbCBjb21tZW50cycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uOiB7XG4gICAgICAgICAgICBzaG93UGljdHVyZTogJ1Nob3cgUGhvdG8nLFxuICAgICAgICAgICAgcmVqZWN0OiAnUmVqZWN0JyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAnVmFsaWRhdGUgY2FwdHVyZScsXG4gICAgICAgICAgICB2YWxpZGF0ZUFuZEFkZDogJ1ZhbGlkYXRlIGFuZCBBZGQnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBwcm9kdWN0OiB7XG4gICAgICAgIHRpdGxlOiAnQ3JlYXRlIG5ldyBwcm9kdWN0JyxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3QgTmFtZScsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0JhcmNvZGUnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQnJhbmQnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhbW91bnQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1F1YW50aXR5JyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVW5pdCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdyb3VwOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdHcm91cCcsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0xpbmUnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUeXBlJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgIGNoYW5nZUltYWdlOiAnQ2hhbmdlIGltYWdlJyxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW9kYWw6IHtcbiAgICAgICAgcmVqZWN0OiB7XG4gICAgICAgICAgICBzdWJqZWN0OiAnU2VsZWN0IGEgcmVhc29uIG9mIHJlamVjdGlvbicsXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc2VuZENyaXRlcmlvbjoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uICcsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0NhcHR1cmUgd2FzIHJlamVjdGVkIHN1Y2Nlc2Z1bGx5LicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yIE5vdGlmaWNhdGlvbi4gJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3Igd2l0aCAgdGhlICByZXF1ZXN0LicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJhZGlvTWFwRmlyc3Q6IHtcbiAgICAgICAgYmx1cnJ5OiAnQmx1cnJ5ICBDYXB0aW9uJyxcbiAgICAgICAgZmFyQXdheTogJ0Rpc3RhbnQgQ2FwdHVyZScsXG4gICAgICAgIGRhcms6ICdEYXJrIENhcHR1cmUnLFxuICAgICAgICBpbmNvbXBsZXRlOiAnUHJvZHVjdCBkZXNjcmlwdGlvbiBpbmNvbXBsZXRlJyxcbiAgICAgICAgZG9lc250TWF0Y2g6ICdNaXNtYXRjaGVkIFByb2R1Y3RzJyxcbiAgICB9LFxuXG4gICAgcmFkaW9TZWNvbmQ6IHtcbiAgICAgICAgb3V0c2lkZVNob3A6ICdDYXB0dXJlIG91dCBvZiBzdG9yZScsXG4gICAgICAgIHNob3BUaWNrZXQ6ICdUaWNrZXQgQ2FwdHVyZScsXG4gICAgICAgIGFub3RoZXJDZWxsOiAnQ2FwdHVyZSB0YWtlbiB3aXRoIGFub3RoZXIgY2VsbHBob25lJyxcbiAgICAgICAgdGVzdFNjYW46ICdUZXN0cycsXG4gICAgfSxcblxuICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgcmVjZW50OiAnTW9zdCBSZWNlbnQnLFxuICAgICAgICBtb3N0RXhwZW5zaXZlOiAnTW9zdCBFeHBlbnNpdmUnLFxuICAgICAgICBjaGVhcGVzdDogJ0NoZWFwZXN0JyxcbiAgICAgICAgY2hlYXBlc3RXaXRoUHJvbW90aW9uOiAnQ2hlYXBlc3Qgd2l0aCAgUHJvbW8nLFxuICAgIH0sXG59XG4iLCIvLyBFTlxuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcidcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCBtaXNzaW9ucyBmcm9tICcuL21pc3Npb25zJztcbmltcG9ydCBjYXB0dXJlcyBmcm9tICcuL2NhcHR1cmVzJztcbmltcG9ydCBjYXB0dXJlIGZyb20gJy4vY2FwdHVyZSc7XG5pbXBvcnQgY2F0YWxvZ3MgZnJvbSAnLi9jYXRhbG9ncyc7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuL3Byb2ZpbGUnO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vcHJvZHVjdHMnO1xuaW1wb3J0IHByb2R1Y3QgZnJvbSAnLi9wcm9kdWN0JztcbmltcG9ydCByYW5raW5ncyBmcm9tICcuL3JhbmtpbmdzJztcbmltcG9ydCBncmFwaFRhYiBmcm9tICcuL2dyYXBoLXRhYic7XG5pbXBvcnQgYWR2YW5jZWRTZWFyY2ggZnJvbSAnLi9hZHZhbmNlZC1zZWFyY2gnO1xuaW1wb3J0IHRhYmxlVGFiIGZyb20gJy4vdGFibGUtdGFiJztcbmltcG9ydCBwcm9kdWN0VGFiIGZyb20gJy4vcHJvZHVjdC10YWInO1xuaW1wb3J0IHNjYW5uZXJzVGFiIGZyb20gJy4vc2Nhbm5lcnMtdGFiJztcbmltcG9ydCB2YWxpZGF0b3JzVGFiIGZyb20gJy4vdmFsaWRhdG9ycy10YWInO1xuaW1wb3J0IGJyYW5kc0NhdGFsb2cgZnJvbSAnLi9icmFuZHMtY2F0YWxvZyc7XG5pbXBvcnQgdW5pdHNDYXRhbG9nIGZyb20gJy4vdW5pdHMtY2F0YWxvZyc7XG5pbXBvcnQgZ3JvdXBzQ2F0YWxvZyBmcm9tICcuL2dyb3Vwcy1jYXRhbG9nJztcbmltcG9ydCBsaW5lc0NhdGFsb2cgZnJvbSAnLi9saW5lcy1jYXRhbG9nJztcbmltcG9ydCBjaGFpbnNDYXRhbG9nIGZyb20gJy4vY2hhaW5zLWNhdGFsb2cnO1xuaW1wb3J0IHJlZ2lvbnNDYXRhbG9nIGZyb20gJy4vcmVnaW9ucy1jYXRhbG9nJztcbmltcG9ydCB1c2Vyc0NhdGFsb2cgZnJvbSAnLi91c2Vycy1jYXRhbG9nJztcbmltcG9ydCB0YWJsZSBmcm9tICcuL3RhYmxlJztcbmltcG9ydCBncmFwaFRhYkNvbXBhcmUgZnJvbSAnLi9ncmFwaC10YWItY29tcGFyZSdcbmltcG9ydCBzdGF0aXN0aWNSZXBvcnQgZnJvbSAnLi9zdGF0aXN0aWMtcmVwb3J0J1xuaW1wb3J0IHByb2R1Y3RSZXBvcnQgZnJvbSAnLi9wcm9kdWN0LXJlcG9ydCdcbmltcG9ydCBzY2Fuc1JlcG9ydCBmcm9tICcuL3NjYW5zLXJlcG9ydCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hdmJhcixcbiAgICBob21lLFxuICAgIHRhYmxlLFxuICAgIG1pc3Npb25zLFxuICAgIGNhcHR1cmVzLFxuICAgIGNhcHR1cmUsXG4gICAgY2F0YWxvZ3MsXG4gICAgcHJvZmlsZSxcbiAgICBwcm9kdWN0cyxcbiAgICBwcm9kdWN0LFxuICAgIHJhbmtpbmdzLFxuICAgIGdyYXBoVGFiLFxuICAgIGFkdmFuY2VkU2VhcmNoLFxuICAgIHRhYmxlVGFiLFxuICAgIHByb2R1Y3RUYWIsXG4gICAgc2Nhbm5lcnNUYWIsXG4gICAgdmFsaWRhdG9yc1RhYixcbiAgICBicmFuZHNDYXRhbG9nLFxuICAgIHVuaXRzQ2F0YWxvZyxcbiAgICBncm91cHNDYXRhbG9nLFxuICAgIGxpbmVzQ2F0YWxvZyxcbiAgICBjaGFpbnNDYXRhbG9nLFxuICAgIHJlZ2lvbnNDYXRhbG9nLFxuICAgIHVzZXJzQ2F0YWxvZyxcbiAgICBncmFwaFRhYkNvbXBhcmUsXG4gICAgcHJvZHVjdFJlcG9ydCxcbiAgICBzY2Fuc1JlcG9ydCxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0xpbmVzJyxcbiAgICBzZWFyY2g6ICdTZWFyY2ggYSBsaW5lJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdTZWFyY2ggYnkgbmFtZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQWRkIGxpbmUnLFxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkIFJlcG9ydCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBuYW1lX2xpbmU6ICdMaW5lJyxcbiAgICAgICAgICAgIG5hbWVfZ3JvdXA6ICdHcm91cCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciB3aXRoIHRoZSBSZXF1ZXN0LicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTGluZSBjcmVhdGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0xpbmUgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnTGluZSBoYXMgYmVlbiBlZGl0ZWQgc3VjY2VzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZXBvcnQgZG93bmxvYWRlZCBzdWNjZXNmdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXRlIGxpbmUnLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdCBsaW5lJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXRlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnTUlTU0lPTlMnLFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnVGl0bGUnLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEZXNjcmlwdGlvbicsXG4gICAgICAgICAgICBjYXB0dXJlX3BvaW50czogJ0NhcHR1cmUgUG9pbnRzJyxcbiAgICAgICAgICAgIG1pc3Npb25fcG9pbnRzOiAnTWlzc2lvbiBQb2ludHMnLFxuICAgICAgICAgICAgc3RhcnRfZGF0ZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgICAgICAgZW5kX2RhdGU6ICdFbmQgRGF0ZScsXG4gICAgICAgICAgICByZWdpb25zOiAnUmVnaW9uJyxcbiAgICAgICAgICAgIGFjdGlvbnM6ICdBY3Rpb25zJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnTmV3IE1pc3Npb24nLFxuICAgIH0sXG5cbiAgICB0b2FzdDoge1xuICAgICAgICBjcmVhdGVNaXNzaW9uOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4gJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVGhlIG1pc3Npb24gaGFzIGJlZW4gY3JlYXRlZCBjb3JyZWN0bHkuICcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ0Vycm9yIE5vdGlmaWNhdGlvbi4gJyxcbiAgICAgICAgICAgICAgICBkdXBsaWNhdGVkTWVzc2FnZTogJ0R1cGxpY2F0ZWQgIFRpdGxlLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NvbWV0aGluZyB3ZW50IHdyb25nLiAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGlhbG9nOiB7XG4gICAgICAgICAgICBtZXNzYWdlOiAnVGhpcyBvcGVyYXRpb24gY2Fubm90IGJlIHBlcmZvcm1lZCBiZWNhdXNlIHRoZSBtaXNzaW9uIGhhcyBhc3NvY2lhdGVkIGNhcHR1cmVzJyxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBhY2VwdDogJ0FjZXB0JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGFkZDoge1xuICAgICAgICAgICAgdGl0bGU6ICdOZXcgTWlzc2lvbicsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgICAgICBjcmVhdGU6ICdDcmVhdGUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IE1pc3Npb24nLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICAgICAgZWRpdDogJ2VkaXQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUaXRsZSAocmVxdWlyZWQpJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRGVzY3JpcHRpb24gKHJlcXVpcmVkIC8gbWF4IDI1NSBjaGFyYWN0ZXJzKScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdUaGUgZGVzY3JpcHRpb24gbW9zdCBoYXZlIGF0IGxlYXN0IDUgY2hhcmFjdGVycy4nLFxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg6ICdUaGUgZGVzY3JpcHRpb24gbW9zdCBoYXZlIG1heCAyNTUgY2hhcmFjdGVycy4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnREYXRlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdTdGFydCBEYXRlJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1N0YXJ0IGRhdGUgaXMgbm90IHZhbGlkJyxcbiAgICAgICAgICAgICAgICAgICAgZ3JlYXRlclRoYW46ICdTdGFydCBkYXRlIG11c3QgYmUgZ3JlYXRlciB0aGFuIHllc3RlcmRheS4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZW5kRGF0ZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRW5kIERhdGUnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRW5kIGRhdGUgaXMgbm90IHZhbGlkJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJlZ2lvbjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnU2VsZWN0IGEgcmVnaW9uJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCBvbmUgcmVnaW9uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1pc3Npb25Qb2ludHM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1BvaW50cyBieSBNaXNzaW9uJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ1RoZSBzY29yZSBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNhcHR1cmVQb2ludHM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1BvaW50cyBieSBjYXB0dXJlJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ1RoZSBzY29yZSBtdXN0IGJlIGEgdmFsaWQgbnVtYmVyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBvcHRpb246IHtcbiAgICAgICAgdmFsaWRhdGlvbnM6ICdWYWxpZGF0aW9uJyxcbiAgICAgICAgbWlzc2lvbnM6ICdNaXNzaW9ucycsXG4gICAgICAgIGNhcHR1cmVzOiAnQ2FwdHVyZXMnLFxuICAgICAgICBwcm9kdWN0czogJ1Byb2R1Y3RzJyxcbiAgICAgICAgcmFua2luZ3M6ICdSYW5raW5ncycsXG4gICAgICAgIGNhdGFsb2dzOiAnQ2F0YWxvZ3MnLFxuICAgICAgICBlZGl0UHJvZmlsZTogJ0VkaXQgcHJvZmlsZScsXG4gICAgICAgIHNpZ25PdXQ6ICdTaWduIE91dCcsXG4gICAgICAgIHJlcG9ydHM6IHtcbiAgICAgICAgICAgIGdlb2xvY2FsaXphdGlvbjogJ1JlcG9ydGUgZGUgZ2VvbG9jYWxpemFjaW9uJyxcbiAgICAgICAgICAgIHN0YXRpc3RpYzogJ1JlcG9ydGUgZGUgZXN0YWTDrXN0aWNvcycsXG4gICAgICAgICAgICBwcm9kdWN0OiAnUmVwb3J0ZSBkZSBwcm9kdWN0bycsXG4gICAgICAgICAgICBzY2FuczogJ1JlcG9ydGUgZGUgY2FwdHVyYXMnLFxuICAgICAgICB9LFxuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1Byb2R1Y3QgUmVwb3J0JyxcbiAgICBuZXdTZXJhY2g6ICdOZXcgc2VhcmNoJyxcbiAgICBwbGFjZWhvbGRlclNlYXJjaDogJ05hbWUgLyBDb2RlJyxcbiAgICBzZWxlY3RlZDogJ1NlbGVjdGVkJyxcbiAgICBzZWFyY2g6ICdTZWFyY2gnLFxuICAgIG15TGlzdDogJ1ZpZXcgbXkgbGlzdCcsXG4gICAgZ2VuZXJhbFNlYXJjaDogJ0dlbmVyYWwgU2VhcmNoJyxcbiAgICBzYXZlTGlzdDogJ1NhdmUgdG8gbXkgbGlzdCcsXG4gICAgZ3JhcGhpYzogJ0dyYXBoJyxcbiAgICBjbGVhckdyYXBoaWM6ICdDbGVhbiBteSBsaXN0JyxcbiAgICBlbXB0eVN0YXRlOiAnRG8gYSBzZWFyY2ggdG8gc2VlIHJlc3VsdHMnLFxuICAgIGVtcHRHcmFwaHlTdGF0ZTogJ0dyYXBoIHRvIHNlZSB0aGUgcmVzdWx0cycsXG4gICAgc2F2ZVByb2R1Y3RzOiAnUHJvZHVjdHMgaGF2ZSBiZWVuIGFkZGVkIHRvIHRoZSBsaXN0JyxcbiAgICBzYXZlUHJvZHVjdHNFcnJvcjogJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIHNhdmluZyB0aGUgbGlzdCcsXG4gICAgcGFyYW1ldGVyOiAnUGFyYW1ldGVyJyxcbiAgICB2YWx1ZXM6ICdWYWx1ZScsXG4gICAgc3RhcnREYXRlOiAnU3RhcnQgZGF0ZScsXG4gICAgZW5kRGF0ZTogJ0VuZCBkYXRlJyxcbiAgICBkZWxldGVGaWx0ZXJzOiBcIkNsZWFuIGZpbHRlcnNcIixcbiAgICBkb3dubG9hZDogXCJEb3dubG9hZFwiLFxuICAgIG5hbWVPckNvZGU6IFwiTmFtZSAvIGNvZGVcIixcbiAgICBzdWNjZXNzRG93bmxvYWQ6IFwiUmVwb3J0IGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5XCIsXG4gICAgZGVsZXRlRnJvbUxpc3Q6IFwiRGVsZXRlIGZyb20gbXkgbGlzdFwiLFxuICAgIHN1Y2Nlc3NEZWxldGU6IFwiUHJvZHVjdHMgaGF2ZSBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgbGlzdFwiLFxuICAgIGVycm9yRGVsZXRlOiBcIkFuIGVycm9yIG9jY3VycmVkIHdoaWxlIHJlbW92aW5nIHByb2R1Y3RzIGZyb20gdGhlIGxpc3RcIixcbiAgICBlcnJvckRvd25sb2FkOiBcIkVycm9yIG9jY3VycmVkIHdoaWxlIGRvd25sb2FkaW5nIHRoZSByZXBvcnRcIixcbiAgICBub1NlbGVjdGVkOiBcIk5vIHByb2R1Y3RzIHNlbGVjdGVkLi4uXCIsXG4gICAgY2FyZDoge1xuICAgICAgICBpZDogXCJJRDpcIixcbiAgICAgICAgYmFyY29kZTogXCJCQVJDT0RFOlwiLFxuICAgICAgICBicmFuZDogXCJCUkFORDpcIixcbiAgICAgICAgbGluZTogXCJMSU5FOlwiLFxuICAgICAgICBncm91cDogXCJHUk9VUDpcIixcbiAgICAgICAgdW5pdDogXCJVTklUOlwiLFxuICAgICAgICB0eXBlOiBcIlRZUEU6XCIsXG4gICAgICAgIG5hbWU6IFwiTkFNRTpcIixcbiAgICAgICAgbG93ZXJfcHJpY2U6IFwiTE9XRVNUIFBSSUNFOlwiLFxuICAgICAgICBoaWdoZXN0X3ByaWNlOiBcIkhJR0hFU1QgUFJJQ0U6XCIsXG4gICAgICAgIGdyYW1tYWdlOiBcIkdSQU1NQUdFIC8gVU5JVDpcIixcbiAgICAgICAgcmVjZW50bHk6IFwiUmVjZW50bHlcIixcbiAgICAgICAgaGlnaGVyOiBcIkhpZ2hlc3RcIixcbiAgICAgICAgbG93ZXI6IFwiTG93ZXJcIixcbiAgICAgICAgbG93ZXJQcm9tb3Rpb246IFwiTG93ZXN0IHdpdGggcHJvbW90aW9uXCIsXG4gICAgfVxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZGV0YWlsOntcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIHByb2R1Y3RJZDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvZHVjdCBJRCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQmFyY29kZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoOiAnVGhlIGZpZWxkIG11c3QgaGF2ZSBhdCAgbGVhc3QgdHdvIGNoYXJhY3RlcnMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0JyYW5kJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUeXBlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3JvdXAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0xpbmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3JhbW1hZ2UgLyBRdWFudGl0eScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdUaGUgZ3JhbW1hZ2Ugb3IgcXVhbnRpdHkgbXVzdCBiZSBhIHZhbGlkIG51bWJlcjogVHdvIGRlY2ltYWxzIG1heC4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVW5pdCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbkltYWdlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNYWluIFBob3RvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZUltYWdlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQcmljZSBQaG90bycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWluUHJpY2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0xvd2VzdCBQcmljZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF4UHJpY2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0hpZ2hlc3QgUHJpY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZGV0YWlsc0NvbnRhaW5lcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdQcm9kdWN0IFByaWNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsJyxcbiAgICAgICAgICAgIGNoYW5nZUltYWdlOiAnQ2hhbmdlIFBob3RvJyxcbiAgICAgICAgICAgIGVkaXRJbmZvcm1hdGlvbjogJ0VkaXQgSW5mb3JtYXRpb24nLFxuICAgICAgICAgICAgc2F2ZUluZm9ybWF0aW9uOiAnU2F2ZSBJbmZvcm1hdGlvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGxpc3RQcmljZTogJ0dyYXBoIC0gTGlzdCBQcmljZScsXG4gICAgICAgIHVuaXRhcnlQcmljZTogJ0dyYXBoIC0gVW5pdCBQcmljZScsXG4gICAgICAgIHByaWNlSGlzdG9yeTogJ1ByaWNlIEhpc3RvcnknLFxuICAgICAgICBkZXRhaWw6ICdEZXRhaWwnLFxuICAgIH0sXG59O1xuXG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdQUk9EVUNUUycsXG4gICAgZmlsdGVyczoge1xuICAgICAgICBzZWFyY2hGaWVsZDogJ1NlYXJjaCBieSAgbmFtZSBvciBwcm9kdWN0IGNvZGUnLFxuICAgICAgICBzdGFydERhdGU6ICdGcm9tJyxcbiAgICAgICAgZW5kRGF0ZTogJ1RvJyxcbiAgICAgICAgdXBkYXRlZEF0OiAnTW9kaWZpY2F0aW9uIERhdGUnLFxuICAgICAgICBjcmVhdGVkQXQ6ICdDcmVhdGUgRGF0ZScsXG4gICAgICAgIHBhcmFtOiAnUGFyYW1ldGVyJyxcbiAgICAgICAgdmFsdWU6ICdWYWx1ZScsXG4gICAgfSxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIHNlYXJjaDogJ1NlYXJjaCcsXG4gICAgICAgIGNsZWFuRmlsdGVyOiAnQ2xlYW4gRmlsdGVycycsXG4gICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQnLFxuICAgICAgICBjb21wYXJhdGl2ZUNoYXJ0OiAnR3JhcGggY29tcGFyYXRpdmVzJyxcbiAgICB9LFxuICAgIG9wdGlvbnNDYXRhbG9nOiB7XG4gICAgICAgIGJyYW5kc0NhdGFsb2c6ICdCcmFuZCcsXG4gICAgICAgIGdyb3Vwc0NhdGFsb2c6ICdHcm91cCcsXG4gICAgICAgIGxpbmVzQ2F0YWxvZzogJ0xpbmUnLFxuICAgICAgICBzdG9yZXNDYXRhbG9nOiAnQ2hhaW4nLFxuICAgICAgICB1bml0c0NhdGFsb2c6ICdVbml0JyxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgYnV0dG9uQWNjZXB0TGFiZWw6ICdFbGltaW5hdGUnLFxuICAgICAgICAgICAgbWVzc2FnZTogJycsXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWQ6IHtcbiAgICAgICAgICAgIHNlbGVjdGVkOiAnU2VsZWN0JyxcbiAgICAgICAgICAgIHBob3RvOiAnUHJvZHVjdCBQaG90bycsXG4gICAgICAgICAgICBwcm9kdWN0OiAnTmFtZScsXG4gICAgICAgICAgICBiYXJjb2RlOiAnQ29kZScsXG4gICAgICAgICAgICBicmFuZDogJ0JyYW5kJyxcbiAgICAgICAgICAgIHR5cGU6ICdUeXBlJyxcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6ICdDYXB0dXJlIERhdGUnLFxuICAgICAgICAgICAgdXBkYXRlZF9hdDogJ01vZGlmaWNhdGlvbiBEYXRlJyxcbiAgICAgICAgICAgIGdyYW1tYWdlX3F1YW50aXR5OiAnUXVhbnRpdHknLFxuICAgICAgICAgICAgdW5pdDogJ1VuaXQnLFxuICAgICAgICAgICAgZ3JvdXA6ICdHcm91cCcsXG4gICAgICAgICAgICBsaW5lOiAnTGluZScsXG4gICAgICAgICAgICBoaWdoZXN0X3ByaWNlOiAnSGlnaGVzdCBQcmljZScsXG4gICAgICAgICAgICBsb3dlcl9wcmljZTogJ0xvd2VzdCBQcmljZScsXG4gICAgICAgICAgICBwcm9tb3Rpb25fbG93ZXJfcHJpY2U6ICdMb3dlc3QgIFByaWNlIHdpdGggcHJvbW8nLFxuICAgICAgICAgICAgbGFzdF9wcmljZTogJ0xhc3QgcHJpY2UgY2FwdHVyZWQnLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGlucHV0OiB7XG4gICAgICAgIHJvbGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUm9sIConLFxuICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICB9LFxuICAgICAgICBmaXJzdF9uYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ05hbWUgKicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGxhc3RfbmFtZToge1xuICAgICAgICAgICAgbGFiZWw6ICdMYXN0IG5hbWUgKicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIG1vdGhlcl9sYXN0X25hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTW90aGVycyBsYXN0IG5hbWUnLFxuICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICB9LFxuICAgICAgICB0aGVtZToge1xuICAgICAgICAgICAgbGFiZWw6ICd1c2UgZGFyayBtb2RlJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICAgICAgbG9jYWxlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1NlbGVjdCBMYW5ndWFnZScsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGVtcGxveWVlX251bWJlcjoge1xuICAgICAgICAgICAgbGFiZWw6ICdFbXBsb3llZSBudW1iZXInLFxuICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICB9LFxuICAgICAgICBjZWxscGhvbmU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2VsbHBob25lIE51bWJlcicsXG4gICAgICAgICAgICBlcnJvcjogJ1RoZSBmaWVsZCBpcyByZXF1aXJlZCcsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2lvbjoge1xuICAgICAgICAgICAgbGFiZWw6ICdSZWdpb24nLFxuICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICB9LFxuICAgICAgICB1c2VybmFtZToge1xuICAgICAgICAgICAgbGFiZWw6ICdVc2VyIConLFxuICAgICAgICAgICAgZXJyb3I6ICdUaGUgZmllbGQgaXMgcmVxdWlyZWQnLFxuICAgICAgICB9LFxuICAgICAgICBwYXNzd29yZDoge1xuICAgICAgICAgICAgbGFiZWw6ICdQYXNzd29yZCAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnVGhlIGZpZWxkIGlzIHJlcXVpcmVkJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2xvc2U6ICdDbG9zZScsXG4gICAgICAgIHNhdmU6ICdTYXZlJyxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUmFua2luZ3MnLFxuICAgIHRhYnM6IHtcbiAgICAgICAgY2FwdHVyaXN0czoge1xuICAgICAgICAgICAgdGl0bGU6ICdDYXB0dXJpc3RzJyxcbiAgICAgICAgICAgIHN0YXJ0RGF0ZTogJ1N0YXJ0IERhdGUnLFxuICAgICAgICAgICAgZW5kRGF0ZTogJ0VuZCBEYXRlJyxcbiAgICAgICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGJ5IG5hbWUgb3IgZW1wbG95ZWUgbnVtYmVyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBjbGVhckRhdGU6ICdDbGVhbiBEYXRlcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246ICdQb3NpdGlvbicsXG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTnVtYmVyOiAnRW1wbG95ZWUgbnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICBwZXJjZW50YWdlOiAnUGVyY2VudGFqZScsXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRlZENhcHR1cmVzOiAnVmFsaWRhdGVkIENhcHR1cmVzJyxcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRzOiAnUG9pbnRzJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB2YWxpZGF0b3JzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1ZhbGlkYXRvcnMnLFxuICAgICAgICAgICAgc3RhcnREYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgICAgICAgICBlbmREYXRlOiAnRW5kIERhdGUnLFxuICAgICAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdTZWFyY2ggYnkgbmFtZSBvciBlbXBsb3llZSBudW1iZXInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNsZWFyRGF0ZTogJ0NsZWFuIERhdGVzJyxcbiAgICAgICAgICAgICAgICBnZW5lcmF0ZURhdGE6ICdHZW5lcmF0ZSBEYXRhJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b3RhbDoge1xuICAgICAgICAgICAgICAgIGNhcHR1cmVzOiAnQ2FwdHVyZXMgIERhdGUnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlZDogJ1ZhbGlkYXRlZCBUb3RhbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaGlzdG9yeToge1xuICAgICAgICAgICAgICAgIGNhcHR1cmVzOiAnQ2FwdHVyZXMgSGlzdG9yeScsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkOiAnVmFsaWRhdGVkIEhpc3RvcnknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTnVtYmVyOiAnRW1wbG95ZWUgTnVtYmVyJyxcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgIHBlcmNlbnRhZ2U6ICdQZXJjZW50YWdlJyxcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGVkQ2FwdHVyZXM6ICdWYWxpZGF0ZWQgQ2FwdHVyZXMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUmVnaW9ucycsXG4gICAgc2VhcmNoOiAnU2VhcmNoIGJ5IFJlZ2lvbicsXG4gICAgc2VhcmNoQnlOYW1lOiAnU2VhcmNoIGJ5IE5hbWUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0FkZCBSZWdpb24nLFxuICAgICAgICBkb3dubG9hZDogJ0Rvd25sb2FkIFJlcG9ydCcsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICBhbGlhczogJ0FsaWFzJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3Igd2l0aCB0aGUgUmVxdWVzdC4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZWdpb24gY3JlYXRlZCBzdWNjZXNmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdTdWNjZXNzIE5vdGlmaWNhdGlvbi4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdSZWdpb24gaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVnaW9uIGhhcyBiZWVuIGVkaXRlZCBzdWNjZXNmdWxseS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1JlcG9ydCAgZG93bmxvYWRlZCBzdWNjZXNzZnVsbHkuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZSBSZWdpb24nLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdCBSZWdpb24nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhdGUnLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhcnREYXRlOiAnU3RhcnQgRGF0ZScsXG4gICAgZW5kRGF0ZTogJ0VuZCBEYXRlJyxcbiAgICBpbnB1dDoge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnU2VhcmNoIGJ5ICBuYW1lIG9yIGVtcGxveWVlIG51bWJlcicsXG4gICAgICAgIH0sXG4gICAgICAgIG1pc3Npb246IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTWlzc2lvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGNsZWFyRGF0ZTogJ0NsZWFuIERhdGVzJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgcmFua2luZzogJ1Bvc2l0aW9uJyxcbiAgICAgICAgICAgIGVtcGxveWVlX251bWJlcjogJ0VtcGxveWVlIE51bWJlcicsXG4gICAgICAgICAgICBuYW1lOiAnTmFtZScsXG4gICAgICAgICAgICBlZmZpY2llbmN5OiAnUGVyY2VudGFnZScsXG4gICAgICAgICAgICB2YWxpZGF0ZWRfY2FwdHVyZXM6ICdWYWxpZGF0ZWQgQ2FwdHVyZXMnLFxuICAgICAgICAgICAgcG9pbnRzOiAnUG9pbnRzJyxcbiAgICAgICAgfVxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSZXBvcnRlIGRlIGNhcHR1cmFzJyxcbn1cblxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGJyYW5jaE9mZmljZTogJ0JyYW5jaCcsXG4gICAgICAgICAgICBtaW5QcmljZTogJ0xvd2VzdCBQcmljZScsXG4gICAgICAgICAgICBtYXhQcmljZTogJ0hpZ2hlc3QgUHJpY2UnLFxuICAgICAgICAgICAgY3VycmVudFByaWNlOiAnQ3VycmVudCBQcmljZScsXG4gICAgICAgICAgICBhdmVyYWdlUHJpY2U6ICdBdmVyYWdlIFByaWNlJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2VlSGlzdG9yeTogJ1NlZSBIaXN0b3J5JyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgc2NhbjogJ0NhcHR1cmUnLFxuICAgICAgICAgICAgICAgIGNhcHR1cmVkQXQ6ICdDYXB0dXJlIERhdGUnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnUHJpY2UnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgY2xvc2U6ICdjbG9zZScsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBhY3Rpb25zOiAnQWN0aW9ucycsXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdVbml0cycsXG4gICAgc2VhcmNoOiAnU2VhcmNoIGJ5IFVuaXQnLFxuICAgIHNlYXJjaEJ5TmFtZTogJ1NlYXJjaCBieSBOYW1lICcsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdBZGQgVW5pdCcsXG4gICAgICAgIGRvd25sb2FkOiAnRG93bmxvYWQgUmVwb3J0JyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGFiYnJldmlhdGlvbjogJ0FiYnJldmlhdGlvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciB3aXRoIHRoZSBSZXF1ZXN0LicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVW5pdCBjcmVhdGVkIHN1dWNjZXNzZnVsbHkuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVW5pdCBkZWxldGVkIHN1Y2Nlc3NmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVW5pdCBoYXMgYmVlbiBlZGl0ZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVwb3J0IGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUgVW5pdCcsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0IFVuaXQnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnU2F2ZScsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhdGUnLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdVc2VycycsXG4gICAgc2VhcmNoOiAnU2VhcmNoIFVzZXInLFxuICAgIHNlYXJjaEJ5TmFtZTogJ1NlYXJjaCBieSBuYW1lLCB1c2VyLCBlbWFpbCwgdGFncyBvciBlbXBsb3llZSBudW1iZXIuJyxcbiAgICB0YWdzOiAnVGFncycsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdDcmVhdGUgbmV3IHVzZXInLFxuICAgICAgICBhZGRUYWdzOiAnQWRkIFRhZ3MnLFxuICAgICAgICBjbG9zZTogJ0Nsb3NlJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEb3dubG9hZCBSZXBvcnQnLFxuICAgIH0sXG4gICAgZmlsdGVyczoge1xuICAgICAgICByb2xlOiAnRmlsdGVyIGJ5IHJvbGUnLFxuICAgICAgICByZWdpb246ICdGaWx0ZXIgYnkgcmVnaW9uJyxcbiAgICAgICAgYWxsUmVnaW9uczogJ0FsbCBSZWdpb25zJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGxhc3RfbmFtZTogJ0xhc3QgTmFtZScsXG4gICAgICAgICAgICBtb3RoZXJfbGFzdF9uYW1lOiAnTW90aGVycyBMYXN0IE5hbWUnLFxuICAgICAgICAgICAgdXNlcm5hbWU6ICdVc2VyJyxcbiAgICAgICAgICAgIGVtYWlsOiAnRU1haWwnLFxuICAgICAgICAgICAgZW1wbG95ZWVfbnVtYmVyOiAnRW1wbG95ZWUgTnVtYmVyJyxcbiAgICAgICAgICAgIHJvbFNlbGVjdGVkOiAnUm9sZScsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIHdpdGggdGhlIFJlcXVlc3QuJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciB3aXRoIHRoZSBSZXF1ZXN0LicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBoYXMgYmVlbiBjcmVhdGVkIHN1Y2Nlc2Z1bGx5LiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1N1Y2Nlc3MgTm90aWZpY2F0aW9uLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1VzZXIgaGFzIGJlZW4gZGVsZXRlZCBzdWNjZXNmdWxseS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnVXNlciBoYXMgYmVlbiBlZGl0ZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnU3VjY2VzcyBOb3RpZmljYXRpb24uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnUmVwb3J0IGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5LicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhdGUgdXNlcicsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YSBVc2VyJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ1NhdmUnLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXRlJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHN0YXJ0RGF0ZTogJ1N0YXJ0IERhdGUnLFxuICAgIGVuZERhdGU6ICdFbmQgRGF0ZScsXG4gICAgaW5wdXQ6IHtcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ1NlYXJjaCBieSBuYW1lIG9yIGVtcGxveWVlIG51bWJlcicsXG4gICAgICAgIH0sXG4gICAgICAgIG1pc3Npb246IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnTWlzc2lvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGNsZWFyRGF0ZTogJ0NsZWFuIERhdGVzJyxcbiAgICAgICAgZ2VuZXJhdGVEYXRhOiAnR2VuZXJhdGUgRGF0YScsXG4gICAgfSxcbiAgICB0b3RhbDoge1xuICAgICAgICBjYXB0dXJlczogJ0NhcHR1cmVzIFRvdGFsJyxcbiAgICAgICAgdmFsaWRhdGVkOiAnVmFsaWRhdGVkIFRvdGFsJyxcbiAgICB9LFxuICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgY2FwdHVyZXM6ICdDYXB0dXJlcyBIaXN0b3J5JyxcbiAgICAgICAgdmFsaWRhdGVkOiAnVmFsaWRhdGVkIEhpc3RvcnknLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICBlbXBsb3llZV9udW1iZXI6ICdFbXBsb3llZSBOdW1iZXInLFxuICAgICAgICAgICAgZnVsbE5hbWU6ICdOYW1lJyxcbiAgICAgICAgICAgIGVmZmljaWVuY3k6ICdQZXJjZW50YWdlJyxcbiAgICAgICAgICAgIHVzZXJWYWxpZGF0ZXM6ICdWYWxpZGF0ZWQgQ2FwdHVyZXMnLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgZmlsdGVyczoge1xuICAgICAgICBzZWFyY2hGaWVsZDogJ0J1c2NhciBwb3Igbm9tYnJlIG8gY8OzZGlnbyBkZWwgcHJvZHVjdG8nLFxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzZWFyY2g6ICdCdXNjYXInLFxuICAgICAgICBnZW5lcmF0ZVJlcG9ydDogJ0dFTkVSQVIgUkVQT1JURScsXG4gICAgICAgIGNsZWFuRmlsdGVyOiAnTGltcGlhciBmaWx0cm9zJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXInLFxuICAgICAgICBjb21wYXJhdGl2ZUNoYXJ0OiAnR3JhZmljYXIgY29tcGFyYXRpdm9zJyxcbiAgICAgICAgZ2VvcmVmZXJlbmNlOiAnR2VvcmVmZXJlbmNpYScsXG4gICAgICAgIGdldEN1cnJlbnRSZXBvcnQ6ICdWRVIgTElTVEEgQUNUVUFMJyxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnTWFyY2FzJyxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBuYW1lOiAnTm9tYnJlJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBjcmVhZG8gbGEgbWFyY2EgY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlbGltaW5hZG8gbGEgbWFyY2EgY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWRpdGFkbyBsYSBtYXJjYSBjb3JyZWN0YW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZGVzY2FyZ2FkbyBlbCByZXBvcnRlIGV4aXRvc2FtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXIgbWFyY2EnLFxuICAgICAgICAgICAgc2VhcmNoOiAnQnVzY2FyIHVuYSBtYXJjYScsXG4gICAgICAgICAgICBzZWFyY2hCeU5hbWU6ICdCdXNjYXIgcG9yIG5vbWJyZSAnLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdGFyIG1hcmNhJyxcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgYWRkOiAnQcOxYWRpciBtYXJjYScsXG4gICAgICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhciBSZXBvcnRlJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ0d1YXJkYXInLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXInLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdEZXRhbGxlcyBkZSBjYXB0dXJhJyxcbiAgICBpbnB1dDoge1xuICAgICAgICBjYXB0dXJlSWQ6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2FwdHVyYScsXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1ByZWNpbycsXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlV2l0aFByb21vdGlvbjoge1xuICAgICAgICAgICAgbGFiZWw6ICdQcmVjaW8gZGUgcHJvbW9jacOzbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ8OzZGlnbyBkZSBiYXJyYXMnLFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ05vbWJyZScsXG4gICAgICAgIH0sXG4gICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICBsYWJlbDogJ01hcmNhJyxcbiAgICAgICAgfSxcbiAgICAgICAgdW5pdDoge1xuICAgICAgICAgICAgbGFiZWw6ICdVbmlkYWQnLFxuICAgICAgICB9LFxuICAgICAgICBzdG9yZToge1xuICAgICAgICAgICAgbGFiZWw6ICdDYWRlbmEnLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1RpcG8nLFxuICAgICAgICB9LFxuICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgbGFiZWw6ICdHcnVwbycsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTMOtbmVhJyxcbiAgICAgICAgfSxcbiAgICAgICAgYW1vdW50OiB7XG4gICAgICAgICAgICBsYWJlbDogJ0dyYW1hamUgLyBDYW50aWRhZCcsXG4gICAgICAgIH0sXG4gICAgICAgIGNhcHR1cmVEYXRlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0ZlY2hhIGRlIENhcHR1cmEnLFxuICAgICAgICB9LFxuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnRXN0YXR1cycsXG4gICAgICAgIH0sXG4gICAgICAgIHNjYW5uZWRCeToge1xuICAgICAgICAgICAgbGFiZWw6ICdFc2NhbmVhZG8nLFxuICAgICAgICB9LFxuICAgICAgICByZXZpZXdlZDoge1xuICAgICAgICAgICAgbGFiZWw6ICdSZXZpc2FkbycsXG4gICAgICAgIH0sXG4gICAgICAgIGJyYW5jaE9mZmljZToge1xuICAgICAgICAgICAgbGFiZWw6ICdzdWN1cnNhbCcsXG4gICAgICAgIH0sXG4gICAgICAgIG1haW5JbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdGb3RvIHByaW5jaXBhbCcsXG4gICAgICAgIH0sXG4gICAgICAgIHByaWNlSW1hZ2U6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnRm90byBkZSBwcmVjaW8nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGV0YWlsc0NvbnRhaW5lcjoge1xuICAgICAgICB0aXRsZTogJ0ZvdG8gZGUgcHJvbW9jacOzbicsXG4gICAgfSxcbiAgICBvcHRpb25zOiB7XG4gICAgICAgIGNoYW5nZUltYWdlOiAnQ2FtYmlhciBpbWFnZW4nLFxuICAgICAgICBlZGl0SW5mb3JtYXRpb246ICdFZGl0YXIgaW5mb3JtYWNpw7NuJyxcbiAgICAgICAgc2F2ZUluZm9ybWF0aW9uOiAnR3VhcmRhciBpbmZvcm1hY2nDs24nLFxuICAgICAgICBjYW5jZWxJbmZvcm1hdGlvbjogJ0NhbmNlbGFyJyxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ0NBUFRVUkFTJyxcbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIHNlYXJjaEZpZWxkOiAnQnVzY2FyIHBvciBub21icmUgbyBjw7NkaWdvIGRlbCBwcm9kdWN0bycsXG4gICAgICAgIHN0YXJ0RGF0ZTogJ0Rlc2RlJyxcbiAgICAgICAgZW5kRGF0ZTogJ0hhc3RhJyxcbiAgICAgICAgd2l0aEltYWdlOiAnQ29uIGZvdG8nLFxuICAgICAgICB3aXRob3V0SW1hZ2U6ICdTaW4gZm90bycsXG4gICAgICAgIHN0YXR1c1JlamVjdGVkOiAnUmVjaGF6YWRvJyxcbiAgICAgICAgbm9ybWFsUHJpY2U6ICdQcmVjaW8gbm9ybWFsJyxcbiAgICAgICAgc3RhdHVzUGVuZGluZzogJ1BlbmRpZW50ZScsXG4gICAgICAgIHN0YXR1c1ZhbGlkYXRlZDogJ1ZhbGlkYWRvJyxcbiAgICAgICAgcHJpY2VXaXRoUHJvbW90aW9uOiAnUHJlY2lvIGRlIHByb21vY2nDs24nLFxuICAgICAgICBwYXJhbTogJ1BhcsOhbWV0cm8nLFxuICAgICAgICB2YWx1ZTogJ1ZhbG9yJyxcbiAgICAgICAgZ2VvbG9jYWxpdGF0aW9uOiAnR2VvbG9jYWxpemFjaW9uZXMnLFxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzZWFyY2g6ICdCdXNjYXInLFxuICAgICAgICBjbGVhbkZpbHRlcjogJ0xpbXBpYXIgZmlsdHJvcycsXG4gICAgICAgIGV4cG9ydEdlb0RhdGE6ICdFeHBvcnRhciBEYXRvcyBHZW9yZWZlcmVuY2lhJyxcbiAgICB9LFxuICAgIG9wdGlvbnNDYXRhbG9nOiB7XG4gICAgICAgIGJyYW5kc0NhdGFsb2c6ICdNYXJjYScsXG4gICAgICAgIGdyb3Vwc0NhdGFsb2c6ICdHcnVwbycsXG4gICAgICAgIGxpbmVzQ2F0YWxvZzogJ0zDrW5lYScsXG4gICAgICAgIHN0b3Jlc0NhdGFsb2c6ICdDYWRlbmEnLFxuICAgICAgICB1bml0c0NhdGFsb2c6ICdVbmlkYWQnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdTZWxlY2Npb25hcicsXG4gICAgICAgICAgICBpZDogJ0NhcHR1cmEnLFxuICAgICAgICAgICAgcGhvdG9fbWFpbjogJ0ZvdG8gcHJpbmNpcGFsJyxcbiAgICAgICAgICAgIHBob3RvX3ByaWNlOiAnRm90byBwcmVjaW8nLFxuICAgICAgICAgICAgYmFyY29kZTogJ0PDs2RpZ28gZGUgYmFycmFzJyxcbiAgICAgICAgICAgIHByb2R1Y3Q6ICdQcm9kdWN0bycsXG4gICAgICAgICAgICBicmFuZDogJ01hcmNhJyxcbiAgICAgICAgICAgIHR5cGU6ICdUaXBvJyxcbiAgICAgICAgICAgIGNoYWluOiAnQ2FkZW5hIGNvbWVyY2lhbCcsXG4gICAgICAgICAgICBicmFuY2g6ICdTdWN1cnNhbCcsXG4gICAgICAgICAgICBzY2FubmVkX2J5OiAnQ2FwdHVyaXN0YScsXG4gICAgICAgICAgICByZXZpZXdlZDogJ1ZhbGlkYWRvcicsXG4gICAgICAgICAgICBzdGF0dXM6ICdFc3RhZG8nLFxuICAgICAgICAgICAgZ3JhbW1hZ2VfcXVhbnRpdHk6ICdDYW50aWRhZCcsXG4gICAgICAgICAgICB1bml0OiAnVW5pZGFkJyxcbiAgICAgICAgICAgIHVuaXRfcHJpY2U6ICdQcmVjaW8gdW5pdGFyaW8nLFxuICAgICAgICAgICAgZ3JvdXA6ICdHcnVwbycsXG4gICAgICAgICAgICBsaW5lOiAnTMOtbmVhJyxcbiAgICAgICAgICAgIHByb2R1Y3RfY3JlYXRlZF9kYXRlOiAnRmVjaGEgZGUgYWx0YSBkZSBwcm9kdWN0bycsXG4gICAgICAgICAgICBsb3dlcl9wcmljZTogJ1ByZWNpbyBtw61uaW1vJyxcbiAgICAgICAgICAgIGhpZ2hlc3RfcHJpY2U6ICdQcmVjaW8gbcOheGltbycsXG4gICAgICAgICAgICBjYXB0dXJlX2RhdGU6ICdGZWNoYSBkZSBjYXB0dXJhJyxcbiAgICAgICAgICAgIGNhcHR1cmVfcHJpY2U6ICdQcmVjaW8gZGUgY2FwdHVyYScsXG4gICAgICAgICAgICBhY3Rpb25zOiAnQWNjaW9uZXMnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBzdGF0dXM6IHtcbiAgICAgICAgdmFsaWRhdGVkOiAnVmFsaWRhZG8nLFxuICAgICAgICBwZW5kaW5nOiAnUGVuZGllbnRlJyxcbiAgICB9LFxuXG4gICAgdW5pdHM6IHtcbiAgICAgICAgY206ICdDZW50aW1ldHJvJyxcbiAgICAgICAgbTogJ01ldHJvJyxcbiAgICAgICAgbWw6ICdNaWxpbGl0cm8nLFxuICAgICAgICBsdDogJ0xpdHJvJyxcbiAgICAgICAgbWc6ICdNaWxpZ3JhbW8nLFxuICAgICAgICBnOiAnR3JhbW8nLFxuICAgICAgICBrZzogJ0tpbG9ncmFtbycsXG4gICAgICAgIHBpZXphOiAnUGllemEnLFxuICAgIH0sXG5cbiAgICBtb2RhbDoge1xuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIGJ1dHRvbkFjY2VwdExhYmVsOiAnRWxpbWluYXInLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0VzdGEgb3BlcmFjacOzbiBlcyBwZXJtYW5lbnRlIMK/ZGVzZWEgZWxpbWluYXIgZXN0ZSBlbGVtZW50bz8nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnQ2F0w6Fsb2dvcycsXG4gICAgb3B0aW9uczoge1xuICAgICAgICBicmFuZHM6ICdNYXJjYXMnLFxuICAgICAgICB1bml0aWVzOiAnVW5pZGFkZXMnLFxuICAgICAgICBncm91cHM6ICdHcnVwb3MnLFxuICAgICAgICBsaW5lczogJ0zDrW5lYXMnLFxuICAgICAgICBjaGFpbjogJ0NhZGVuYXMnLFxuICAgICAgICByZWdpb246ICdSZWdpb25lcycsXG4gICAgICAgIHVzZXJzOiAnVXN1YXJpb3MnLFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdDYWRlbmFzJyxcbiAgICBzZWFyY2g6ICdCdXNjYXIgdW5hIGNhZGVuYScsXG4gICAgc2VhcmNoQnlOYW1lOiAnQnVzY2FyIHBvciBub21icmUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0HDsWFkaXIgY2FkZW5hJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXIgUmVwb3J0ZScsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBpZDogJ0lkJyxcbiAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgYWxpYXM6ICdBbGlhcycsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgY3JlYWRvIGxhIGNhZGVuYSBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkZWxldGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVsaW1pbmFkbyBsYSBjYWRlbmEgY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWRpdGFkbyBsYSBjYWRlbmEgY29ycmVjdGFtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGRlc2NhcmdhZG8gZWwgcmVwb3J0ZSBleGl0b3NhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWFyIGNhZGVuYScsXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXRNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdFZGl0YXIgY2FkZW5hJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ0d1YXJkYXInLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXInLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGFiczoge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBwcmljZUxpc3Q6ICdHcsOhZmljYXMgLSBQcmVjaW8gZGUgbGlzdGEnLFxuICAgICAgICAgICAgdW5pdGFyeVByaWNlOiAnR3LDoWZpY2FzIC0gUHJlY2lvIHVuaXRhcmlvJyxcbiAgICAgICAgICAgIGhpc3Rvcnk6ICdIaXN0b3JpYWwgZGUgcHJlY2lvcycsXG4gICAgICAgIH0sXG4gICAgICAgIGhpc3Rvcnk6IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBkYXRlOiAnRmVjaGEnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnUHJlY2lvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBzdGFydERhdGU6ICdGZWNoYSBpbmljaWFsJyxcbiAgICBlbmREYXRlOiAnRmVjaGEgZmluYWwnLFxuICAgIHNlYXJjaDogJ0J1c2NhciBjYXB0dXJhIHBvciBpZCcsXG4gICAgbW9kYWw6IHtcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBidXR0b25BY2NlcHRMYWJlbDogJ0VsaW1pbmFyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFc3RhIG9wZXJhY2nDs24gZXMgcGVybWFuZW50ZSDCv2Rlc2VhIGVsaW1pbmFyIGVzdGUgZWxlbWVudG8/JyxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGFydERhdGU6ICdGZWNoYSBpbmljaWFsJyxcbiAgICBlbmREYXRlOiAnRmVjaGEgZmluYWwnLFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgYnV0dG9uQWNjZXB0TGFiZWw6ICdFbGltaW5hcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXN0YSBvcGVyYWNpw7NuIGVzIHBlcm1hbmVudGUgwr9kZXNlYSBlbGltaW5hciBlc3RlIGVsZW1lbnRvPycsXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdHcnVwb3MnLFxuICAgIHNlYXJjaDogJ0J1c2NhciB1biBncnVwbycsXG4gICAgc2VhcmNoQnlOYW1lOiAnQnVzY2FyIHBvciBub21icmUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0HDsWFkaXIgZ3J1cG8nLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhciBSZXBvcnRlJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIG5hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgYWJicmV2aWF0aW9uOiAnQWJyZXZpYWNpw7NuJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBjcmVhZG8gZWwgZ3J1cG8gY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlbGltaW5hZG8gZWwgZ3J1cG8gY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWRpdGFkbyBlbCBncnVwbyBjb3JyZWN0YW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZGVzY2FyZ2FkbyBlbCByZXBvcnRlIGV4aXRvc2FtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXIgZ3J1cG8nLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdGFyIGdydXBvJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ0d1YXJkYXInLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXInLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdWYWxpZGFjacOzbicsXG4gICAgd2VsY29tZTogJ1NlbGVjY2lvbmUgdW5hIGNhcHR1cmEgcGFyYSBpbmljaWFyLicsXG4gICAgc2lkZWJhcjoge1xuICAgICAgICB0aXRsZTogJ0NhcHR1cmFzJyxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIG1pc3Npb246IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ01pc2nDs24nLFxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm9kdWN0OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9kdWN0bycsXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NhbkZpbHRlcjoge1xuICAgICAgICAgICAgYWxsOiAnVG9kb3MnLFxuICAgICAgICAgICAgd2l0aFByb2R1Y3Q6ICdDb24gcHJvZHVjdG8nLFxuICAgICAgICAgICAgd2l0aG91dFByb2R1Y3Q6ICdTaW4gcHJvZHVjdG8nLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBzY2FuOiB7XG4gICAgICAgIHRvcEJhcjoge1xuICAgICAgICAgICAgYmVpbmdWYWxpZGF0ZWQ6ICdFc3RlIHJlZ2lzdHJvIGVzdMOhIHNpZW5kbyB2YWxpZGFkbywgc2VsZWNjaW9uYSB1bm8gZGlmZXJlbnRlJyxcbiAgICAgICAgICAgIHdpdGhvdXROdW1iZXI6ICdTaW4gTsO6bWVybycsXG4gICAgICAgICAgICB3aXRob3V0TWlzc2lvbjogJ1NpbiBNaXNpw7NuJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJvZHVjdEltYWdlOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1Byb2R1Y3RvJyxcbiAgICAgICAgfSxcbiAgICAgICAgcHJpY2VJbWFnZToge1xuICAgICAgICAgICAgbGFiZWw6ICdQcmVjaW8nLFxuICAgICAgICB9LFxuICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgYmFyY29kZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ8OzZGlnbyBkZSBiYXJyYXMnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJlY2lvJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJvbW90aW9uUHJpY2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1ByZWNpbyBkZSBwcm9tb2Npw7NuJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RvcmU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0NhZGVuYScsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZHJlc3M6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0RpcmVjY2nDs24nLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhZGl0aW9uYWxDb21tZW50czoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ29tZW50YXJpb3MgYWRpY2lvbmFsZXMnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbjoge1xuICAgICAgICAgICAgc2hvd1BpY3R1cmU6ICdWZXIgZm90bycsXG4gICAgICAgICAgICByZWplY3Q6ICdSZWNoYXphcicsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ1ZhbGlkYXIgY2FwdHVyYScsXG4gICAgICAgICAgICB2YWxpZGF0ZUFuZEFkZDogJ1ZhbGlkYXIgeSBhZ3JlZ2FyJyxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgcHJvZHVjdDoge1xuICAgICAgICB0aXRsZTogJ0NyZWFyIG51ZXZvIHByb2R1Y3RvJyxcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ05vbWJyZSBkZWwgcHJvZHVjdG8nLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXJjb2RlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDw7NkaWdvIGRlIGJhcnJhcycsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNYXJjYScsXG4gICAgICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnQ2FudGlkYWQnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdVbmlkYWQnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBncm91cDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3J1cG8nLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdMw61uZWEnLFxuICAgICAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdUaXBvJyxcbiAgICAgICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb246IHtcbiAgICAgICAgICAgIGNoYW5nZUltYWdlOiAnQ2FtYmlhciBpbWFnZW4nLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb2RhbDoge1xuICAgICAgICByZWplY3Q6IHtcbiAgICAgICAgICAgIHN1YmplY3Q6ICdTZWxlY2Npb25hIHVuIG1vdGl2byBkZSByZWNoYXpvJyxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICB0b2FzdDoge1xuICAgICAgICBzZW5kQ3JpdGVyaW9uOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4gJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgcmVjaGF6YWRvIGxhIGNhcHR1cmEgY29ycmVjdGFtZW50ZS4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIGVycm9yLiAnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIHJhZGlvTWFwRmlyc3Q6IHtcbiAgICAgICAgYmx1cnJ5OiAnQ2FwdHVyYSBib3Jyb3NhJyxcbiAgICAgICAgZmFyQXdheTogJ0NhcHR1cmEgbGVqYW5hJyxcbiAgICAgICAgZGFyazogJ0NhcHR1cmEgb3NjdXJhJyxcbiAgICAgICAgaW5jb21wbGV0ZTogJ0Rlc2NyaXBjacOzbiBkZSBwcm9kdWN0byBpbmNvbXBsZXRhJyxcbiAgICAgICAgZG9lc250TWF0Y2g6ICdQcm9kdWN0b3MgcXVlIG5vIGNvaW5jaWRlbicsXG4gICAgfSxcblxuICAgIHJhZGlvU2Vjb25kOiB7XG4gICAgICAgIG91dHNpZGVTaG9wOiAnQ2FwdHVyYSBmdWVyYSBkZSB0aWVuZGEnLFxuICAgICAgICBzaG9wVGlja2V0OiAnQ2FwdHVyYSBkZSB0aWNrZXRzIGRlIGNvbXByYScsXG4gICAgICAgIGFub3RoZXJDZWxsOiAnQ2FwdHVyYSB0b21hZGEgYSBvdHJvIGNlbHVsYXInLFxuICAgICAgICB0ZXN0U2NhbjogJ1BydWViYXMnLFxuICAgIH0sXG5cbiAgICBoaXN0b3J5OiB7XG4gICAgICAgIHJlY2VudDogJ03DoXMgcmVjaWVudGUnLFxuICAgICAgICBtb3N0RXhwZW5zaXZlOiAnTcOhcyBhbHRvJyxcbiAgICAgICAgY2hlYXBlc3Q6ICdNw6FzIGJham8nLFxuICAgICAgICBjaGVhcGVzdFdpdGhQcm9tb3Rpb246ICdNw6FzIGJham8gY29uIHByb21vY2nDs24nLFxuICAgIH0sXG59XG4iLCIvLyBFU1xuaW1wb3J0IG5hdmJhciBmcm9tICcuL25hdmJhcidcbmltcG9ydCBob21lIGZyb20gJy4vaG9tZSdcbmltcG9ydCBtaXNzaW9ucyBmcm9tICcuL21pc3Npb25zJztcbmltcG9ydCBjYXB0dXJlcyBmcm9tICcuL2NhcHR1cmVzJztcbmltcG9ydCBjYXB0dXJlIGZyb20gJy4vY2FwdHVyZSc7XG5pbXBvcnQgY2F0YWxvZ3MgZnJvbSAnLi9jYXRhbG9ncyc7XG5pbXBvcnQgcHJvZmlsZSBmcm9tICcuL3Byb2ZpbGUnO1xuaW1wb3J0IHByb2R1Y3RzIGZyb20gJy4vcHJvZHVjdHMnO1xuaW1wb3J0IHByb2R1Y3QgZnJvbSAnLi9wcm9kdWN0JztcbmltcG9ydCByYW5raW5ncyBmcm9tICcuL3JhbmtpbmdzJztcbmltcG9ydCBncmFwaFRhYiBmcm9tICcuL2dyYXBoLXRhYic7XG5pbXBvcnQgYWR2YW5jZWRTZWFyY2ggZnJvbSAnLi9hZHZhbmNlZC1zZWFyY2gnO1xuaW1wb3J0IHRhYmxlVGFiIGZyb20gJy4vdGFibGUtdGFiJztcbmltcG9ydCBwcm9kdWN0VGFiIGZyb20gJy4vcHJvZHVjdC10YWInO1xuaW1wb3J0IHNjYW5uZXJzVGFiIGZyb20gJy4vc2Nhbm5lcnMtdGFiJztcbmltcG9ydCB2YWxpZGF0b3JzVGFiIGZyb20gJy4vdmFsaWRhdG9ycy10YWInO1xuaW1wb3J0IGJyYW5kc0NhdGFsb2cgZnJvbSAnLi9icmFuZHMtY2F0YWxvZyc7XG5pbXBvcnQgdW5pdHNDYXRhbG9nIGZyb20gJy4vdW5pdHMtY2F0YWxvZyc7XG5pbXBvcnQgZ3JvdXBzQ2F0YWxvZyBmcm9tICcuL2dyb3Vwcy1jYXRhbG9nJztcbmltcG9ydCBsaW5lc0NhdGFsb2cgZnJvbSAnLi9saW5lcy1jYXRhbG9nJztcbmltcG9ydCBjaGFpbnNDYXRhbG9nIGZyb20gJy4vY2hhaW5zLWNhdGFsb2cnO1xuaW1wb3J0IHJlZ2lvbnNDYXRhbG9nIGZyb20gJy4vcmVnaW9ucy1jYXRhbG9nJztcbmltcG9ydCB1c2Vyc0NhdGFsb2cgZnJvbSAnLi91c2Vycy1jYXRhbG9nJztcbmltcG9ydCB0YWJsZSBmcm9tICcuL3RhYmxlJztcbmltcG9ydCBncmFwaFRhYkNvbXBhcmUgZnJvbSAnLi9ncmFwaC10YWItY29tcGFyZSdcbmltcG9ydCBzdGF0aXN0aWNSZXBvcnQgZnJvbSAnLi9zdGF0aXN0aWMtcmVwb3J0J1xuaW1wb3J0IHByb2R1Y3RSZXBvcnQgZnJvbSAnLi9wcm9kdWN0LXJlcG9ydCdcbmltcG9ydCBzY2Fuc1JlcG9ydCBmcm9tICcuL3NjYW5zLXJlcG9ydCdcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hdmJhcixcbiAgICBob21lLFxuICAgIHRhYmxlLFxuICAgIG1pc3Npb25zLFxuICAgIGNhcHR1cmVzLFxuICAgIGNhcHR1cmUsXG4gICAgY2F0YWxvZ3MsXG4gICAgcHJvZmlsZSxcbiAgICBwcm9kdWN0cyxcbiAgICBwcm9kdWN0LFxuICAgIHJhbmtpbmdzLFxuICAgIGdyYXBoVGFiLFxuICAgIGFkdmFuY2VkU2VhcmNoLFxuICAgIHRhYmxlVGFiLFxuICAgIHByb2R1Y3RUYWIsXG4gICAgc2Nhbm5lcnNUYWIsXG4gICAgdmFsaWRhdG9yc1RhYixcbiAgICBicmFuZHNDYXRhbG9nLFxuICAgIHVuaXRzQ2F0YWxvZyxcbiAgICBncm91cHNDYXRhbG9nLFxuICAgIGxpbmVzQ2F0YWxvZyxcbiAgICBjaGFpbnNDYXRhbG9nLFxuICAgIHJlZ2lvbnNDYXRhbG9nLFxuICAgIHVzZXJzQ2F0YWxvZyxcbiAgICBncmFwaFRhYkNvbXBhcmUsXG4gICAgc3RhdGlzdGljUmVwb3J0LFxuICAgIHByb2R1Y3RSZXBvcnQsXG4gICAgc2NhbnNSZXBvcnQsXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdMw61uZWFzJyxcbiAgICBzZWFyY2g6ICdCdXNjYXIgdW5hIGzDrW5lYScsXG4gICAgc2VhcmNoQnlOYW1lOiAnQnVzY2FyIHBvciBub21icmUgJyxcbiAgICBhY3Rpb25zOiB7XG4gICAgICAgIGFkZDogJ0HDsWFkaXIgbMOtbmVhJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXIgUmVwb3J0ZScsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBuYW1lX2xpbmU6ICdMw61uZWEnLFxuICAgICAgICAgICAgbmFtZV9ncm91cDogJ0dydXBvJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHRvYXN0OiB7XG4gICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3I6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICAgICAgbWVzc2FnZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBjcmVhZG8gbGEgbMOtbmVhIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWxpbWluYWRvIGxhIGzDrW5lYSBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGxhIGzDrW5lYSBjb3JyZWN0YW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRvd25sb2FkRGF0YToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZGVzY2FyZ2FkbyBlbCByZXBvcnRlIGV4aXRvc2FtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgY3JlYXRlTW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnQ3JlYXIgbMOtbmVhJyxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdE1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXRhciBsw61uZWEnLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ01JU0lPTkVTJyxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkOiB7XG4gICAgICAgICAgICB0aXRsZTogJ1TDrXR1bG8nLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdEZXNjcmlwY2nDs24nLFxuICAgICAgICAgICAgY2FwdHVyZV9wb2ludHM6ICdQdW50b3MgcG9yIGNhcHR1cmFzJyxcbiAgICAgICAgICAgIG1pc3Npb25fcG9pbnRzOiAnUHVudG9zIHBvciBtaXNpw7NuJyxcbiAgICAgICAgICAgIHN0YXJ0X2RhdGU6ICdGZWNoYSBkZSBpbmljaW8nLFxuICAgICAgICAgICAgZW5kX2RhdGU6ICdGZWNoYSBkZSBmaW4nLFxuICAgICAgICAgICAgcmVnaW9uczogJ1JlZ2nDs24nLFxuICAgICAgICAgICAgYWN0aW9uczogJ0FjY2lvbmVzJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnTnVldmEgbWlzacOzbicsXG4gICAgfSxcblxuICAgIHRvYXN0OiB7XG4gICAgICAgIGNyZWF0ZU1pc3Npb246IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLiAnLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBjcmVhZG8gbGEgbWlzacOzbiBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIGVycm9yLiAnLFxuICAgICAgICAgICAgICAgIGR1cGxpY2F0ZWRNZXNzYWdlOiAnRWwgVGl0dWxvIHNlIGR1cGxpY8OzLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ0FsZ28gc2FsacOzIG1hbC4gJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vZGFsOiB7XG4gICAgICAgIGRpYWxvZzoge1xuICAgICAgICAgICAgbWVzc2FnZTogJ0VzdGEgb3BlcmFjacOzbiBubyBzZSBwdWVkZSByZWFsaXphciBkZWJpZG8gYSBxdWUgbGEgbWlzacOzbiB0aWVuZSBjYXB0dXJhcyBhc29jaWFkYXMnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGFjZXB0OiAnQWNlcHRhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBhZGQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnTnVldmEgbWlzacOzbicsXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2FuY2VsOiAnQ2FuY2VsYXInLFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdGFyIG1pc2nDs24nLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbGFyJyxcbiAgICAgICAgICAgICAgICBlZGl0OiAnZWRpdGFyJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVMOtdHVsbyAob2JsaWdhdG9yaW8pJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRGVzY3JpcGNpw7NuIChvYmxpZ2F0b3JpbyAvIG3DoXhpbW8gMjU1IGNhcmFjdGVyZXMpJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgICAgICAgICAgICAgIG1pbkxlbmd0aDogJ0xhIGRlc2NyaXBjacOzbiBkZWJlIHRlbmVyIHBvciBsbyBtZW5vcyA1IGNhcmFjdGVyZXMuJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiAnTGEgZGVzY3JpcGNpw7NuIGRlYmUgdGVuZXIgbcOheGltbyAyNTUgY2FyYWN0ZXJlcy4nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc3RhcnREYXRlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdGZWNoYSBkZSBpbmljaW8nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnTGEgZmVjaGEgZGUgaW5pY2lvIG5vIGVzIHbDoWxpZGEnLFxuICAgICAgICAgICAgICAgICAgICBncmVhdGVyVGhhbjogJ0xhIGZlY2hhIGRlIGluaWNpbyBkZWJlIHNlciBtYXlvciBhbCBkw61hIGRlIGF5ZXIuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVuZERhdGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0ZlY2hhIGRlIGZpbicsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdMYSBmZWNoYSBkZSBmaW4gbm8gZXMgdsOhbGlkYScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByZWdpb246IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1NlbGVjY2lvbmEgdW5hIHJlZ2nDs24nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAnRGViZXMgc2VsZWNjaW9uYXIgcG9yIGxvIG1lbm9zIHVuYSByZWdpw7NuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1pc3Npb25Qb2ludHM6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1B1bnRhamUgZGUgbGEgbWlzacOzbicsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQ6ICdFbCBwdW50YWplIGRlYmUgc2VyIHVuIG7Dum1lcm8gdsOhbGlkbycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjYXB0dXJlUG9pbnRzOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQdW50YWplIGRlIGNhcHR1cmEnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkOiAnRWwgcHVudGFqZSBkZWJlIHNlciB1biBuw7ptZXJvIHbDoWxpZG8nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIG9wdGlvbjoge1xuICAgICAgICB2YWxpZGF0aW9uczogJ1ZhbGlkYWNpw7NuJyxcbiAgICAgICAgbWlzc2lvbnM6ICdNaXNpb25lcycsXG4gICAgICAgIGNhcHR1cmVzOiAnQ2FwdHVyYXMnLFxuICAgICAgICBwcm9kdWN0czogJ1Byb2R1Y3RvcycsXG4gICAgICAgIHJhbmtpbmdzOiAnUmFua2luZ3MnLFxuICAgICAgICBjYXRhbG9nczogJ0NhdMOhbG9nb3MnLFxuICAgICAgICBlZGl0UHJvZmlsZTogJ0VkaXRhciBwZXJmaWwnLFxuICAgICAgICBzaWduT3V0OiAnQ2VycmFyIHNlc2nDs24nLFxuICAgICAgICByZXBvcnRzOiB7XG4gICAgICAgICAgICBnZW9sb2NhbGl6YXRpb246ICdSZXBvcnRlIGRlIGdlb2xvY2FsaXphY2nDs24nLFxuICAgICAgICAgICAgc3RhdGlzdGljOiAnUmVwb3J0ZSBjb21wYXJhdGl2byBkZSBwcmVjaW9zJyxcbiAgICAgICAgICAgIHByb2R1Y3Q6ICdSZXBvcnRlIGRlIHByb2R1Y3RvJyxcbiAgICAgICAgICAgIHNjYW5zOiAnUmVwb3J0ZSBkZSBjYXB0dXJhcycsXG4gICAgICAgIH0sXG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUmVwb3J0ZSBkZSBQcm9kdWN0bycsXG4gICAgbmV3U2VyYWNoOiAnTnVldmEgQsO6c3F1ZWRhJyxcbiAgICBwbGFjZWhvbGRlclNlYXJjaDogJ05vbWJyZSAvIEPDs2RpZ28nLFxuICAgIHNlbGVjdGVkOiAnU2VsZWNjaW9uYWRvJyxcbiAgICBzZWFyY2g6ICdCdXNjYXInLFxuICAgIG15TGlzdDogJ1ZlciBtaSBsaXN0YScsXG4gICAgZ2VuZXJhbFNlYXJjaDogJ0LDunNxdWVkYSBHZW5lcmFsJyxcbiAgICBzYXZlTGlzdDogJ0d1YXJkYXIgYSBtaSBsaXN0YScsXG4gICAgZ3JhcGhpYzogJ0dyw6FmaWNhJyxcbiAgICBjbGVhckdyYXBoaWM6ICdMaW1waWFyIEdyw6FmaWNhJyxcbiAgICBlbXB0eVN0YXRlOiAnSGFjZXIgYsO6c3F1ZWRhIHBhcmEgdmVyIHJlc3VsdGFkb3MnLFxuICAgIGVtcHRHcmFwaHlTdGF0ZTogJ0dyYWZpY2FyIHBhcmEgdmVyIHJlc3VsdGFkb3MnLFxuICAgIHNhdmVQcm9kdWN0czogJ1Byb2R1Y3RvcyBoYW4gc2lkbyBhZ3JlZ2Fkb3MgYSBsYSBsaXN0YScsXG4gICAgc2F2ZVByb2R1Y3RzRXJyb3I6ICdVbiBlcnJvciBvY3VycmlvIG1pZW50cmFzIHNlIGd1YXJkYWJhIGxhIGxpc3RhJyxcbiAgICBwYXJhbWV0ZXI6ICdQYXJhbWV0cm9zJyxcbiAgICB2YWx1ZXM6ICdWYWxvcicsXG4gICAgc3RhcnREYXRlOiAnRmVjaGEgSW5pY2lvJyxcbiAgICBlbmREYXRlOiAnRmVjaGEgVGVybWluYWNpw7NuJyxcbiAgICBkZWxldGVGaWx0ZXJzOiBcIkxpbXBpYXIgRmlsdHJvc1wiLFxuICAgIGRvd25sb2FkOiBcIkRlc2NhcmdhclwiLFxuICAgIG5hbWVPckNvZGU6IFwiTm9tYnJlIC8gQ8OzZGlnbyBkZWwgcHJvZHVjdG9cIixcbiAgICBzdWNjZXNzRG93bmxvYWQ6IFwiUmVwb3J0ZSBkZXNjYXJnYWRvIGV4aXRvc2FtZW50ZVwiLFxuICAgIGRlbGV0ZUZyb21MaXN0OiBcIkJvcnJhciBkZSBtaSBsaXN0YVwiLFxuICAgIHN1Y2Nlc3NEZWxldGU6IFwiTG9zIHByb2R1Y3RvcyBoYW4gc2lkbyBib3JyYWRvcyBkZSBsYSBsaXN0YVwiLFxuICAgIGVycm9yRGVsZXRlOiBcIlVuIGVycm9yIG9jdXJyaW8gbWllbnRyYXMgc2UgcmVtb3ZpYW4gcHJvZHVjdG9zIGRlIGxhIGxpc3RhXCIsXG4gICAgZXJyb3JEb3dubG9hZDogXCJVbiAgZXJyb3Igb2N1cnJpbyBtaWVudHJhcyBzZSBkZXNjYXJnYWJhIGVsIHJlcG9ydGVcIixcbiAgICBub1NlbGVjdGVkOiBcIk5vIGhheSBwcm9kdWN0b3Mgc2VsZWNjaW9uYWRvcy4uLi4uXCIsXG4gICAgY2FyZDoge1xuICAgICAgICBpZDogXCJJRDpcIixcbiAgICAgICAgYmFyY29kZTogXCJDw5NESUdPIERFIEJBUlJBUzpcIixcbiAgICAgICAgYnJhbmQ6IFwiTUFSQ0E6XCIsXG4gICAgICAgIGxpbmU6IFwiTElORUE6XCIsXG4gICAgICAgIGdyb3VwOiBcIkdSVVBPOlwiLFxuICAgICAgICB1bml0OiBcIlVOSURBRDpcIixcbiAgICAgICAgdHlwZTogXCJUSVBPOlwiLFxuICAgICAgICBuYW1lOiBcIk5PTUJSRTpcIixcbiAgICAgICAgbG93ZXJfcHJpY2U6IFwiTUVOT1IgUFJFQ0lPOlwiLFxuICAgICAgICBoaWdoZXN0X3ByaWNlOiBcIk1BWU9SIFBSRUNJTzpcIixcbiAgICAgICAgZ3JhbW1hZ2U6IFwiR1JBTUFKRSAvIFVOSURBRDpcIixcbiAgICAgICAgcmVjZW50bHk6IFwiUmVjaWVudGVcIixcbiAgICAgICAgaGlnaGVyOiBcIk3DoXMgYWx0b1wiLFxuICAgICAgICBsb3dlcjogXCJNw6FzIGJham9cIixcbiAgICAgICAgbG93ZXJQcm9tb3Rpb246IFwiTcOhcyBiYWpvIGNvbiBkZXNjdWVudG9cIixcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGRldGFpbDp7XG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgICBwcm9kdWN0SWQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0lEIFByb2R1Y3RvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBiYXJjb2RlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdDw7NkaWdvIGRlIGJhcnJhcycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnTm9tYnJlJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg6ICdFbCBjYW1wbyBkZWJlIGNvbnRlbmVyIGFsIG1lbm9zIGRvcyBjYXJhY3RlcmVzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNYXJjYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVGlwbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0dydXBvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdMw61uZWEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3JhbWFqZSAvIENhbnRpZGFkJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uczoge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZDogJ0VsIGdyYW1hamUgbyBjYW50aWRhZCBkZWJlIHNlciB1biBuw7ptZXJvIHbDoWxpZG86IENvbiBkb3MgZGVjaW1hbGVzIG3DoXhpbW8uJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVuaXQ6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1VuaWRhZCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWFpbkltYWdlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdGb3RvIHByaW5jaXBhbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJpY2VJbWFnZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRm90byBkZSBwcmVjaW8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1pblByaWNlOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdQcmVjaW8gbcOtbmltbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF4UHJpY2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ1ByZWNpbyBtw6F4aW1vJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGRldGFpbHNDb250YWluZXI6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRm90byBkZWwgcHJvZHVjdG8nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWxhcicsXG4gICAgICAgICAgICBjaGFuZ2VJbWFnZTogJ0NhbWJpYXIgaW1hZ2VuJyxcbiAgICAgICAgICAgIGVkaXRJbmZvcm1hdGlvbjogJ0VkaXRhciBpbmZvcm1hY2nDs24nLFxuICAgICAgICAgICAgc2F2ZUluZm9ybWF0aW9uOiAnR3VhcmRhciBpbmZvcm1hY2nDs24nLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgb3B0aW9uczoge1xuICAgICAgICBsaXN0UHJpY2U6ICdHcsOhZmljYSAtIFByZWNpbyBkZSBsaXN0YScsXG4gICAgICAgIHVuaXRhcnlQcmljZTogJ0dyw6FmaWNhIC0gUHJlY2lvIHVuaXRhcmlvJyxcbiAgICAgICAgcHJpY2VIaXN0b3J5OiAnSGlzdG9yaWFsIGRlIHByZWNpb3MnLFxuICAgICAgICBkZXRhaWw6ICdEZXRhbGxlJyxcbiAgICB9LFxuICAgIHN0YXJ0RGF0ZTogJ0ZlY2hhIGluaWNpYWwnLFxuICAgIGVuZERhdGU6ICdGZWNoYSBmaW5hbCcsXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYnJhbmNoT2ZmaWNlOiAnU3VjdXJzYWwnLFxuICAgICAgICAgICAgbWluUHJpY2U6ICdQcmVjaW8gbcOtbmltbycsXG4gICAgICAgICAgICBtYXhQcmljZTogJ1ByZWNpbyBtw6F4aW1vJyxcbiAgICAgICAgICAgIGN1cnJlbnRQcmljZTogJ1ByZWNpbyBhY3R1YWwnLFxuICAgICAgICAgICAgYXZlcmFnZVByaWNlOiAnUHJlY2lvIHByb21lZGlvJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2VlSGlzdG9yeTogJ1ZlciBoaXN0b3JpYWwnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZGV0YWlsOntcbiAgICAgICAgaW5wdXQ6IHtcbiAgICAgICAgICAgIHByb2R1Y3RJZDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnSUQgUHJvZHVjdG8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJhcmNvZGU6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0PDs2RpZ28gZGUgYmFycmFzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdOb21icmUnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJyYW5kOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdNYXJjYScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnVGlwbycsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ3JvdXA6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0dydXBvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5lOiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdMw61uZWEnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFtb3VudDoge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnR3JhbWFqZSAvIENhbnRpZGFkJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1bml0OiB7XG4gICAgICAgICAgICAgICAgbGFiZWw6ICdVbmlkYWQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1haW5JbWFnZToge1xuICAgICAgICAgICAgICAgIGxhYmVsOiAnRm90byBwcmluY2lwYWwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByaWNlSW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0ZvdG8gZGUgcHJlY2lvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNoYW5nZUltYWdlOiAnQ2FtYmlhciBpbWFnZW4nLFxuICAgICAgICAgICAgZWRpdEluZm9ybWF0aW9uOiAnRWRpdGFyIGluZm9ybWFjacOzbicsXG4gICAgICAgICAgICBzYXZlSW5mb3JtYXRpb246ICdHdWFyZGFyIGluZm9ybWFjacOzbicsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdQUk9EVUNUT1MnLFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgc2VhcmNoRmllbGQ6ICdCdXNjYXIgcG9yIG5vbWJyZSBvIGPDs2RpZ28gZGVsIHByb2R1Y3RvJyxcbiAgICAgICAgc3RhcnREYXRlOiAnRGVzZGUnLFxuICAgICAgICBlbmREYXRlOiAnSGFzdGEnLFxuICAgICAgICB1cGRhdGVkQXQ6ICdGZWNoYSBkZSBtb2RpZmljYWNpw7NuJyxcbiAgICAgICAgY3JlYXRlZEF0OiAnRmVjaGEgZGUgQWx0YScsXG4gICAgICAgIHBhcmFtOiAnUGFyw6FtZXRybycsXG4gICAgICAgIHZhbHVlOiAnVmFsb3InLFxuICAgIH0sXG4gICAgYWN0aW9uczoge1xuICAgICAgICBzZWFyY2g6ICdCdXNjYXInLFxuICAgICAgICBjbGVhbkZpbHRlcjogJ0xpbXBpYXIgZmlsdHJvcycsXG4gICAgICAgIGRvd25sb2FkOiAnRGVzY2FyZ2FyJyxcbiAgICAgICAgY29tcGFyYXRpdmVDaGFydDogJ0dyYWZpY2FyIGNvbXBhcmF0aXZvcycsXG4gICAgfSxcbiAgICBvcHRpb25zQ2F0YWxvZzoge1xuICAgICAgICBicmFuZHNDYXRhbG9nOiAnTWFyY2EnLFxuICAgICAgICBncm91cHNDYXRhbG9nOiAnR3J1cG8nLFxuICAgICAgICBsaW5lc0NhdGFsb2c6ICdMw61uZWEnLFxuICAgICAgICBzdG9yZXNDYXRhbG9nOiAnQ2FkZW5hJyxcbiAgICAgICAgdW5pdHNDYXRhbG9nOiAnVW5pZGFkJyxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgYnV0dG9uQWNjZXB0TGFiZWw6ICdFbGltaW5hcicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnJyxcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgc2VsZWN0ZWQ6ICdTZWxlY2Npb25hcicsXG4gICAgICAgICAgICBwaG90bzogJ0ZvdG8gZGVsIHByb2R1Y3RvJyxcbiAgICAgICAgICAgIHByb2R1Y3Q6ICdOb21icmUnLFxuICAgICAgICAgICAgYmFyY29kZTogJ0PDs2RpZ28nLFxuICAgICAgICAgICAgYnJhbmQ6ICdNYXJjYScsXG4gICAgICAgICAgICB0eXBlOiAnVGlwbycsXG4gICAgICAgICAgICBjcmVhdGVkX2F0OiAnRmVjaGEgZGUgY2FwdHVyYScsXG4gICAgICAgICAgICB1cGRhdGVkX2F0OiAnRmVjaGEgZGUgbW9kaWZpY2FjacOzbicsXG4gICAgICAgICAgICBncmFtbWFnZV9xdWFudGl0eTogJ0NhbnRpZGFkJyxcbiAgICAgICAgICAgIHVuaXQ6ICdVbmlkYWQnLFxuICAgICAgICAgICAgZ3JvdXA6ICdHcnVwbycsXG4gICAgICAgICAgICBsaW5lOiAnTMOtbmVhJyxcbiAgICAgICAgICAgIGhpZ2hlc3RfcHJpY2U6ICdQcmVjaW8gbcOhcyBhbHRvJyxcbiAgICAgICAgICAgIGxvd2VyX3ByaWNlOiAnUHJlY2lvIG3DoXMgYmFqbycsXG4gICAgICAgICAgICBwcm9tb3Rpb25fbG93ZXJfcHJpY2U6ICdQcmVjaW8gbcOhcyBiYWpvIGNvbiBwcm9tb2Npw7NuJyxcbiAgICAgICAgICAgIGxhc3RfcHJpY2U6ICfDmmx0aW1vIHByZWNpbyBjYXB0dXJhZG8nLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGlucHV0OiB7XG4gICAgICAgIHJvbGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUm9sIConLFxuICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICB9LFxuICAgICAgICBmaXJzdF9uYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ05vbWJyZSAqJyxcbiAgICAgICAgICAgIGVycm9yOiAnRWwgY2FtcG8gZXMgcmVxdWVyaWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGFzdF9uYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0FwZWxsaWRvIHBhdGVybm8gKicsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIG1vdGhlcl9sYXN0X25hbWU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQXBlbGxpZG8gbWF0ZXJubycsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIHRoZW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1VzYXIgdGVtYSBvc2N1cm8nLFxuICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICB9LFxuICAgICAgICBsb2NhbGU6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnQ2FtYmlhciBpZGlvbWEnLFxuICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICB9LFxuICAgICAgICBlbXBsb3llZV9udW1iZXI6IHtcbiAgICAgICAgICAgIGxhYmVsOiAnTsO6bWVybyBkZSBlbXBsZWFkbycsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIGNlbGxwaG9uZToge1xuICAgICAgICAgICAgbGFiZWw6ICdOw7ptZXJvIGRlIGNlbHVsYXInLFxuICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICB9LFxuICAgICAgICByZWdpb246IHtcbiAgICAgICAgICAgIGxhYmVsOiAnUmVnacOzbicsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIHVzZXJuYW1lOiB7XG4gICAgICAgICAgICBsYWJlbDogJ1VzdWFyaW8gKicsXG4gICAgICAgICAgICBlcnJvcjogJ0VsIGNhbXBvIGVzIHJlcXVlcmlkbycsXG4gICAgICAgIH0sXG4gICAgICAgIHBhc3N3b3JkOiB7XG4gICAgICAgICAgICBsYWJlbDogJ0NvbnRyYXNlw7FhIConLFxuICAgICAgICAgICAgZXJyb3I6ICdFbCBjYW1wbyBlcyByZXF1ZXJpZG8nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBjbG9zZTogJ0NlcnJhcicsXG4gICAgICAgIHNhdmU6ICdHdWFyZGFyJyxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnUmFua2luZ3MnLFxuICAgIHRhYnM6IHtcbiAgICAgICAgY2FwdHVyaXN0czoge1xuICAgICAgICAgICAgdGl0bGU6ICdjYXB0dXJpc3RhcycsXG4gICAgICAgICAgICBzdGFydERhdGU6ICdGZWNoYSBpbmljaWFsJyxcbiAgICAgICAgICAgIGVuZERhdGU6ICdGZWNoYSBmaW5hbCcsXG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0J1c2NhciBwb3Igbm9tYnJlIG8gbsO6bWVybyBkZSBlbXBsZWFkbycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2xlYXJEYXRlOiAnTGltcGlhciBmZWNoYXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnUG9zaWNpw7NuJyxcbiAgICAgICAgICAgICAgICAgICAgZW1wbG95ZWVOdW1iZXI6ICdOby4gZGUgZW1wbGVhZG8nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnTm9tYnJlJyxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogJ1BvcmNlbnRhamUnLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRDYXB0dXJlczogJ0NhcHR1cmFzIHZhbGlkYWRhcycsXG4gICAgICAgICAgICAgICAgICAgIHBvaW50czogJ1B1bnRvcycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdG9yczoge1xuICAgICAgICAgICAgdGl0bGU6ICdWYWxpZGFkb3JlcycsXG4gICAgICAgICAgICBzdGFydERhdGU6ICdGZWNoYSBpbmljaWFsJyxcbiAgICAgICAgICAgIGVuZERhdGU6ICdGZWNoYSBmaW5hbCcsXG4gICAgICAgICAgICBpbnB1dDoge1xuICAgICAgICAgICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJ0J1c2NhciBwb3Igbm9tYnJlIG8gbsO6bWVybyBkZSBlbXBsZWFkbycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgY2xlYXJEYXRlOiAnTGltcGlhciBmZWNoYXMnLFxuICAgICAgICAgICAgICAgIGdlbmVyYXRlRGF0YTogJ0dlbmVyYXIgZGF0b3MnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvdGFsOiB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZXM6ICdUb3RhbCBkZSBjYXB0dXJhcycsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGVkOiAnVG90YWwgdmFsaWRhZGFzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoaXN0b3J5OiB7XG4gICAgICAgICAgICAgICAgY2FwdHVyZXM6ICdIaXN0b3JpYWwgZGUgY2FwdHVyYXMnLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlZDogJ0hpc3RvcmlhbCBkZSB2YWxpZGFkYXMnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhYmxlOiB7XG4gICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGVtcGxveWVlTnVtYmVyOiAnTm8uIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgICAgICAgICAgICAgbm9tYnJlOiAnTm9tYnJlJyxcbiAgICAgICAgICAgICAgICAgICAgcGVyY2VudGFnZTogJ1BvcmNlbnRhamUnLFxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWRDYXB0dXJlczogJ0NhcHR1cmFzIHZhbGlkYWRhcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdSZWdpb25lcycsXG4gICAgc2VhcmNoOiAnQnVzY2FyIHVuYSByZWdpw7NuJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdCdXNjYXIgcG9yIG5vbWJyZSAnLFxuICAgIGFjdGlvbnM6IHtcbiAgICAgICAgYWRkOiAnQcOxYWRpciByZWdpw7NuJyxcbiAgICAgICAgZG93bmxvYWQ6ICdEZXNjYXJnYXIgUmVwb3J0ZScsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICBuYW1lOiAnTm9tYnJlJyxcbiAgICAgICAgICAgIGFsaWFzOiAnQWxpYXMnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBsYSByZWdpw7NuIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGRlbGV0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWxpbWluYWRvIGxhIHJlZ2nDs24gY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZWRpdDoge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgZWRpdGFkbyBsYSByZWdpw7NuIGNvcnJlY3RhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBkZXNjYXJnYWRvIGVsIHJlcG9ydGUgZXhpdG9zYW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhciByZWdpw7NuJyxcbiAgICAgICAgfSxcbiAgICAgICAgZWRpdE1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0VkaXRhciByZWdpw7NuJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2F2ZTogJ0d1YXJkYXInLFxuICAgICAgICAgICAgY3JlYXRlOiAnQ3JlYXInLFxuICAgICAgICB9LFxuICAgIH0sXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgc3RhcnREYXRlOiAnRmVjaGEgaW5pY2lhbCcsXG4gICAgZW5kRGF0ZTogJ0ZlY2hhIGZpbmFsJyxcbiAgICBpbnB1dDoge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyOiAnQnVzY2FyIHBvciBub21icmUgbyBuw7ptZXJvIGRlIGVtcGxlYWRvJyxcbiAgICAgICAgfSxcbiAgICAgICAgbWlzc2lvbjoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdNaXNpw7NuJyxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG9wdGlvbnM6IHtcbiAgICAgICAgY2xlYXJEYXRlOiAnTGltcGlhciBmZWNoYXMnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICByYW5raW5nOiAnUG9zaWNpw7NuJyxcbiAgICAgICAgICAgIGVtcGxveWVlX251bWJlcjogJ05vLiBkZSBlbXBsZWFkbycsXG4gICAgICAgICAgICBuYW1lOiAnTm9tYnJlJyxcbiAgICAgICAgICAgIGVmZmljaWVuY3k6ICdQb3JjZW50YWplJyxcbiAgICAgICAgICAgIHZhbGlkYXRlZF9jYXB0dXJlczogJ0NhcHR1cmFzIHZhbGlkYWRhcycsXG4gICAgICAgICAgICBwb2ludHM6ICdQdW50b3MnLFxuICAgICAgICB9XG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1JlcG9ydGUgZGUgY2FwdHVyYXMnLFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgcmVnaW9uOiAnUmVnacOzbicsXG4gICAgICAgIHNjYW5uZXI6ICdDYXB0dXJpc3RhJyxcbiAgICAgICAgbWlzc2lvbjogJ01pc2nDs24nLFxuICAgIH0sXG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICB0aXRsZTogJ1JlcG9ydGUgQ29tcGFyYXRpdm8gZGUgUHJlY2lvcycsXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgYnJhbmNoT2ZmaWNlOiAnU3VjdXJzYWwnLFxuICAgICAgICAgICAgbWluUHJpY2U6ICdQcmVjaW8gbcOtbmltbycsXG4gICAgICAgICAgICBtYXhQcmljZTogJ1ByZWNpbyBtw6F4aW1vJyxcbiAgICAgICAgICAgIGN1cnJlbnRQcmljZTogJ1ByZWNpbyBhY3R1YWwnLFxuICAgICAgICAgICAgYXZlcmFnZVByaWNlOiAnUHJlY2lvIHByb21lZGlvJyxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgc2VlSGlzdG9yeTogJ1ZlciBoaXN0b3JpYWwnLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgbW9kYWw6IHtcbiAgICAgICAgdGFibGU6IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICBzY2FuOiAnQ2FwdHVyYScsXG4gICAgICAgICAgICAgICAgY2FwdHVyZWRBdDogJ0ZlY2hhIGRlIGNhcHR1cmEnLFxuICAgICAgICAgICAgICAgIHByaWNlOiAnUHJlY2lvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGNsb3NlOiAnY2VycmFyJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIGFjdGlvbnM6ICdBY2Npb25lcycsXG59XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgdGl0bGU6ICdVbmlkYWRlcycsXG4gICAgc2VhcmNoOiAnQnVzY2FyIHVuYSB1bmlkYWQnLFxuICAgIHNlYXJjaEJ5TmFtZTogJ0J1c2NhciBwb3Igbm9tYnJlICcsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdBw7FhZGlyIHVuaWRhZCcsXG4gICAgICAgIGRvd25sb2FkOiAnRGVzY2FyZ2FyIFJlcG9ydGUnLFxuICAgIH0sXG4gICAgdGFibGU6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgbmFtZTogJ05vbWJyZScsXG4gICAgICAgICAgICBhYmJyZXZpYXRpb246ICdBYnJldmlhY2nDs24nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgdG9hc3Q6IHtcbiAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcjoge1xuICAgICAgICAgICAgdGl0bGU6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgICAgICBtZXNzYWdlOiAnRXJyb3IgY29uIGxhIHBldGljacOzbi4nLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGNyZWFkbyBsYSB1bmlkYWQgY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlbGltaW5hZG8gbGEgdW5pZGFkIGNvcnJlY3RhbWVudGUuICcsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGVkaXQ6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGVkaXRhZG8gbGEgdW5pZGFkIGNvcnJlY3RhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZG93bmxvYWREYXRhOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBkZXNjYXJnYWRvIGVsIHJlcG9ydGUgZXhpdG9zYW1lbnRlLicsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBtb2RhbDoge1xuICAgICAgICBjcmVhdGVNb2RhbDoge1xuICAgICAgICAgICAgdGl0bGU6ICdDcmVhciB1bmlkYWQnLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdGFyIHVuaWRhZCcsXG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIHNhdmU6ICdHdWFyZGFyJyxcbiAgICAgICAgICAgIGNyZWF0ZTogJ0NyZWFyJyxcbiAgICAgICAgfSxcbiAgICB9LFxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICAgIHRpdGxlOiAnVXN1YXJpb3MnLFxuICAgIHNlYXJjaDogJ0J1c2NhciB1biB1c3VhcmlvJyxcbiAgICBzZWFyY2hCeU5hbWU6ICdCdXNjYXIgcG9yIG5vbWJyZSwgdXN1YXJpbywgZW1haWwsIGV0aXF1ZXRhcywgbyBuw7ptZXJvIGRlIGVtcGxlYWRvLicsXG4gICAgdGFnczogJ0V0aXF1ZXRhcycsXG4gICAgYWN0aW9uczoge1xuICAgICAgICBhZGQ6ICdDcmVhciBudWV2byB1c3VhcmlvJyxcbiAgICAgICAgYWRkVGFnczogJ0FncmVnYXIgZXRpcXVldGFzJyxcbiAgICAgICAgY2xvc2U6ICdDZXJyYXInLFxuICAgICAgICBkb3dubG9hZDogJ0Rlc2NhcmdhciBSZXBvcnRlJyxcbiAgICB9LFxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgcm9sZTogJ0ZpbHRyYXIgcG9yIHJvbCcsXG4gICAgICAgIHJlZ2lvbjogJ0ZpbHRyYXIgcG9yIHJlZ2nDs24nLFxuICAgICAgICBhbGxSZWdpb25zOiAnVG9kYXMgbGFzIHJlZ2lvbmVzJyxcbiAgICB9LFxuICAgIHRhYmxlOiB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIGZpcnN0X25hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgbGFzdF9uYW1lOiAnQXBlbGxpZG8gcGF0ZXJubycsXG4gICAgICAgICAgICBtb3RoZXJfbGFzdF9uYW1lOiAnQXBlbGxpZG8gbWF0ZXJubycsXG4gICAgICAgICAgICB1c2VybmFtZTogJ1VzdWFyaW8nLFxuICAgICAgICAgICAgZW1haWw6ICdDb3JyZW8gZWxlY3Ryw7NuaWNvJyxcbiAgICAgICAgICAgIGVtcGxveWVlX251bWJlcjogJ05vLiBkZSBlbXBsZWFkbycsXG4gICAgICAgICAgICByb2xTZWxlY3RlZDogJ1JvbCcsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB0b2FzdDoge1xuICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0Vycm9yIGNvbiBsYSBwZXRpY2nDs24uJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdFcnJvciBjb24gbGEgcGV0aWNpw7NuLicsXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZToge1xuICAgICAgICAgICAgc3VjY2Vzczoge1xuICAgICAgICAgICAgICAgIHRpdGxlOiAnTm90aWZpY2FjacOzbiBkZSDDqXhpdG8uJyxcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiAnU2UgaGEgY3JlYWRvIGVsIHVzdWFyaW8gY29ycmVjdGFtZW50ZS4gJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRlOiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlbGltaW5hZG8gZWwgdXN1YXJpbyBjb3JyZWN0YW1lbnRlLiAnLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBlZGl0OiB7XG4gICAgICAgICAgICBzdWNjZXNzOiB7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICdOb3RpZmljYWNpw7NuIGRlIMOpeGl0by4nLFxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6ICdTZSBoYSBlZGl0YWRvIGVsIHVzdWFyaW8gY29ycmVjdGFtZW50ZS4nLFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkb3dubG9hZERhdGE6IHtcbiAgICAgICAgICAgIHN1Y2Nlc3M6IHtcbiAgICAgICAgICAgICAgICB0aXRsZTogJ05vdGlmaWNhY2nDs24gZGUgw6l4aXRvLicsXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogJ1NlIGhhIGRlc2NhcmdhZG8gZWwgcmVwb3J0ZSBleGl0b3NhbWVudGUuJyxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuICAgIG1vZGFsOiB7XG4gICAgICAgIGNyZWF0ZU1vZGFsOiB7XG4gICAgICAgICAgICB0aXRsZTogJ0NyZWFyIHVzdWFyaW8nLFxuICAgICAgICB9LFxuICAgICAgICBlZGl0TW9kYWw6IHtcbiAgICAgICAgICAgIHRpdGxlOiAnRWRpdGFyIHVzdWFyaW8nLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBzYXZlOiAnR3VhcmRhcicsXG4gICAgICAgICAgICBjcmVhdGU6ICdDcmVhcicsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgICBzdGFydERhdGU6ICdGZWNoYSBpbmljaWFsJyxcbiAgICBlbmREYXRlOiAnRmVjaGEgZmluYWwnLFxuICAgIGlucHV0OiB7XG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICdCdXNjYXIgcG9yIG5vbWJyZSBvIG7Dum1lcm8gZGUgZW1wbGVhZG8nLFxuICAgICAgICB9LFxuICAgICAgICBtaXNzaW9uOiB7XG4gICAgICAgICAgICBwbGFjZWhvbGRlcjogJ01pc2nDs24nLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgb3B0aW9uczoge1xuICAgICAgICBjbGVhckRhdGU6ICdMaW1waWFyIGZlY2hhcycsXG4gICAgICAgIGdlbmVyYXRlRGF0YTogJ0dlbmVyYXIgZGF0b3MnLFxuICAgIH0sXG4gICAgdG90YWw6IHtcbiAgICAgICAgY2FwdHVyZXM6ICdUb3RhbCBkZSBjYXB0dXJhcycsXG4gICAgICAgIHZhbGlkYXRlZDogJ1RvdGFsIHZhbGlkYWRhcycsXG4gICAgfSxcbiAgICBoaXN0b3J5OiB7XG4gICAgICAgIGNhcHR1cmVzOiAnSGlzdG9yaWFsIGRlIGNhcHR1cmFzJyxcbiAgICAgICAgdmFsaWRhdGVkOiAnSGlzdG9yaWFsIGRlIHZhbGlkYWRhcycsXG4gICAgfSxcbiAgICB0YWJsZToge1xuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIGVtcGxveWVlX251bWJlcjogJ07Dum0gZGUgZW1wbGVhZG8nLFxuICAgICAgICAgICAgZnVsbE5hbWU6ICdOb21icmUnLFxuICAgICAgICAgICAgZWZmaWNpZW5jeTogJ1BvcmNlbnRhamUnLFxuICAgICAgICAgICAgdXNlclZhbGlkYXRlczogJ0NhcHR1cmFzIHZhbGlkYWRhcycsXG4gICAgICAgIH0sXG4gICAgfSxcbn1cbiIsImltcG9ydCBnZXQgZnJvbSAnbG9kYXNoLmdldCdcblxuLy8gTE9DQUxFU1xuaW1wb3J0IGVzIGZyb20gJy4vZXMnXG5pbXBvcnQgZW4gZnJvbSAnLi9lbidcblxuY29uc3QgbG9jYWxlcyA9IHtcbiAgICBlcyxcbiAgICBlbixcbn1cblxuZXhwb3J0IGNvbnN0IGdldEkxOG5MYWJlbCA9IChsb2NhbGUsIGtleSkgPT4gKFxuICAgIGdldChsb2NhbGVzW2xvY2FsZV0sIGtleSkgfHwgJydcbilcblxuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZVRhYmxlSGVhZGVyID0gKGxvY2FsZSwgaGVhZGVycywgcGF0aCkgPT4gKFxuICAgIGhlYWRlcnMubWFwKChoZWFkZXIpID0+ICh7XG4gICAgICAgIC4uLmhlYWRlcixcbiAgICAgICAgbGFiZWw6IGdldEkxOG5MYWJlbChsb2NhbGUsIGAke3BhdGh9LiR7aGVhZGVyLmtleX1gKSxcbiAgICB9KSlcbilcblxuZXhwb3J0IGNvbnN0IHRyYW5zbGF0ZVRhYmxlQ29tcGxleEhlYWRlciA9IChsb2NhbGUsIGhlYWRlcnMsIHBhdGgpID0+IChcbiAgICBoZWFkZXJzLm1hcCgoaGVhZGVyKSA9PiAoe1xuICAgICAgICAuLi5oZWFkZXIsXG4gICAgICAgIHRpdGxlOiBnZXRJMThuTGFiZWwobG9jYWxlLCBgJHtwYXRofS4ke2hlYWRlci5uYW1lfWApLFxuICAgIH0pKVxuKVxuIiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBhZGRCYXNlUGF0aCxcbiAgYWRkTG9jYWxlLFxuICBpc0xvY2FsVVJMLFxuICBOZXh0Um91dGVyLFxuICBQcmVmZXRjaE9wdGlvbnMsXG4gIHJlc29sdmVIcmVmLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG50eXBlIFVybCA9IHN0cmluZyB8IFVybE9iamVjdFxudHlwZSBSZXF1aXJlZEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IG5ldmVyIDogS1xufVtrZXlvZiBUXVxudHlwZSBPcHRpb25hbEtleXM8VD4gPSB7XG4gIFtLIGluIGtleW9mIFRdLT86IHt9IGV4dGVuZHMgUGljazxULCBLPiA/IEsgOiBuZXZlclxufVtrZXlvZiBUXVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cbnR5cGUgTGlua1Byb3BzUmVxdWlyZWQgPSBSZXF1aXJlZEtleXM8TGlua1Byb3BzPlxudHlwZSBMaW5rUHJvcHNPcHRpb25hbCA9IE9wdGlvbmFsS2V5czxMaW5rUHJvcHM+XG5cbmxldCBjYWNoZWRPYnNlcnZlcjogSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcbmNvbnN0IGxpc3RlbmVycyA9IG5ldyBNYXA8RWxlbWVudCwgKCkgPT4gdm9pZD4oKVxuY29uc3QgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPVxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdy5JbnRlcnNlY3Rpb25PYnNlcnZlciA6IG51bGxcbmNvbnN0IHByZWZldGNoZWQ6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fVxuXG5mdW5jdGlvbiBnZXRPYnNlcnZlcigpOiBJbnRlcnNlY3Rpb25PYnNlcnZlciB8IHVuZGVmaW5lZCB7XG4gIC8vIFJldHVybiBzaGFyZWQgaW5zdGFuY2Ugb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgYWxyZWFkeSBjcmVhdGVkXG4gIGlmIChjYWNoZWRPYnNlcnZlcikge1xuICAgIHJldHVybiBjYWNoZWRPYnNlcnZlclxuICB9XG5cbiAgLy8gT25seSBjcmVhdGUgc2hhcmVkIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIHN1cHBvcnRlZCBpbiBicm93c2VyXG4gIGlmICghSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkXG4gIH1cblxuICByZXR1cm4gKGNhY2hlZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKFxuICAgIChlbnRyaWVzKSA9PiB7XG4gICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgIGlmICghbGlzdGVuZXJzLmhhcyhlbnRyeS50YXJnZXQpKSB7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjYiA9IGxpc3RlbmVycy5nZXQoZW50cnkudGFyZ2V0KSFcbiAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMCkge1xuICAgICAgICAgIGNhY2hlZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgbGlzdGVuZXJzLmRlbGV0ZShlbnRyeS50YXJnZXQpXG4gICAgICAgICAgY2IoKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH0sXG4gICAgeyByb290TWFyZ2luOiAnMjAwcHgnIH1cbiAgKSlcbn1cblxuY29uc3QgbGlzdGVuVG9JbnRlcnNlY3Rpb25zID0gKGVsOiBFbGVtZW50LCBjYjogKCkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBvYnNlcnZlciA9IGdldE9ic2VydmVyKClcbiAgaWYgKCFvYnNlcnZlcikge1xuICAgIHJldHVybiAoKSA9PiB7fVxuICB9XG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbClcbiAgbGlzdGVuZXJzLnNldChlbCwgY2IpXG4gIHJldHVybiAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbClcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgIH1cbiAgICBsaXN0ZW5lcnMuZGVsZXRlKGVsKVxuICB9XG59XG5cbmZ1bmN0aW9uIHByZWZldGNoKFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgb3B0aW9ucz86IFByZWZldGNoT3B0aW9uc1xuKTogdm9pZCB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykgcmV0dXJuXG4gIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxuICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycikgPT4ge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXSA9IHRydWVcbn1cblxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50KSB7XG4gIGNvbnN0IHsgdGFyZ2V0IH0gPSBldmVudC5jdXJyZW50VGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50XG4gIHJldHVybiAoXG4gICAgKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgZXZlbnQubWV0YUtleSB8fFxuICAgIGV2ZW50LmN0cmxLZXkgfHxcbiAgICBldmVudC5zaGlmdEtleSB8fFxuICAgIGV2ZW50LmFsdEtleSB8fCAvLyB0cmlnZ2VycyByZXNvdXJjZSBkb3dubG9hZFxuICAgIChldmVudC5uYXRpdmVFdmVudCAmJiBldmVudC5uYXRpdmVFdmVudC53aGljaCA9PT0gMilcbiAgKVxufVxuXG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChcbiAgZTogUmVhY3QuTW91c2VFdmVudCxcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIHJlcGxhY2U/OiBib29sZWFuLFxuICBzaGFsbG93PzogYm9vbGVhbixcbiAgc2Nyb2xsPzogYm9vbGVhbixcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbik6IHZvaWQge1xuICBjb25zdCB7IG5vZGVOYW1lIH0gPSBlLmN1cnJlbnRUYXJnZXRcblxuICBpZiAobm9kZU5hbWUgPT09ICdBJyAmJiAoaXNNb2RpZmllZEV2ZW50KGUpIHx8ICFpc0xvY2FsVVJMKGhyZWYpKSkge1xuICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgIHJldHVyblxuICB9XG5cbiAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXG4gIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgfVxuXG4gIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICByb3V0ZXJbcmVwbGFjZSA/ICdyZXBsYWNlJyA6ICdwdXNoJ10oaHJlZiwgYXMsIHsgc2hhbGxvdywgbG9jYWxlIH0pLnRoZW4oXG4gICAgKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3QgW2NoaWxkRWxtLCBzZXRDaGlsZEVsbV0gPSBSZWFjdC51c2VTdGF0ZTxFbGVtZW50PigpXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoXG4gICAgICBwICYmXG4gICAgICBJbnRlcnNlY3Rpb25PYnNlcnZlciAmJlxuICAgICAgY2hpbGRFbG0gJiZcbiAgICAgIGNoaWxkRWxtLnRhZ05hbWUgJiZcbiAgICAgIGlzTG9jYWxVUkwoaHJlZilcbiAgICApIHtcbiAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHJldHVybiBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoY2hpbGRFbG0sICgpID0+IHtcbiAgICAgICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3AsIGNoaWxkRWxtLCBocmVmLCBhcywgcm91dGVyXSlcblxuICBsZXQgeyBjaGlsZHJlbiwgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUgfSA9IHByb3BzXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRQcm9wczoge1xuICAgIG9uTW91c2VFbnRlcj86IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgb25DbGljazogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBocmVmPzogc3RyaW5nXG4gICAgcmVmPzogYW55XG4gIH0gPSB7XG4gICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgaWYgKGVsKSBzZXRDaGlsZEVsbShlbClcblxuICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZC5yZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJleHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplTG9jYWxlUGF0aChcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4pOiB7XG4gIGRldGVjdGVkTG9jYWxlPzogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbn0ge1xuICBsZXQgZGV0ZWN0ZWRMb2NhbGU6IHN0cmluZyB8IHVuZGVmaW5lZFxuICAvLyBmaXJzdCBpdGVtIHdpbGwgYmUgZW1wdHkgc3RyaW5nIGZyb20gc3BsaXR0aW5nIGF0IGZpcnN0IGNoYXJcbiAgY29uc3QgcGF0aG5hbWVQYXJ0cyA9IHBhdGhuYW1lLnNwbGl0KCcvJylcblxuICA7KGxvY2FsZXMgfHwgW10pLnNvbWUoKGxvY2FsZSkgPT4ge1xuICAgIGlmIChwYXRobmFtZVBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgPT09IGxvY2FsZS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICBkZXRlY3RlZExvY2FsZSA9IGxvY2FsZVxuICAgICAgcGF0aG5hbWVQYXJ0cy5zcGxpY2UoMSwgMSlcbiAgICAgIHBhdGhuYW1lID0gcGF0aG5hbWVQYXJ0cy5qb2luKCcvJykgfHwgJy8nXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2VcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIGRldGVjdGVkTG9jYWxlLFxuICB9XG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIGxvY2FsZSAhPT0gZGVmYXVsdExvY2FsZSAmJiAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsTG9jYWxlKHBhdGg6IHN0cmluZywgbG9jYWxlPzogc3RyaW5nKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICAvLyB3ZSBvbmx5IGFkZCB0aGUgYmFzZXBhdGggb24gcmVsYXRpdmUgdXJsc1xuICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLnNsaWNlKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG59XG5cbi8qKlxuICogRGV0ZWN0cyB3aGV0aGVyIGEgZ2l2ZW4gdXJsIGlzIHJvdXRhYmxlIGJ5IHRoZSBOZXh0LmpzIHJvdXRlciAoYnJvd3NlciBvbmx5KS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykpIHJldHVybiB0cnVlXG4gIHRyeSB7XG4gICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgY29uc3QgbG9jYXRpb25PcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pXG4gICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG50eXBlIFVybCA9IFVybE9iamVjdCB8IHN0cmluZ1xuXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhcbiAgcm91dGU6IHN0cmluZyxcbiAgYXNQYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbikge1xuICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJ1xuXG4gIGNvbnN0IGR5bmFtaWNSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzXG4gIGNvbnN0IGR5bmFtaWNNYXRjaGVzID1cbiAgICAvLyBUcnkgdG8gbWF0Y2ggdGhlIGR5bmFtaWMgcm91dGUgYWdhaW5zdCB0aGUgYXNQYXRoXG4gICAgKGFzUGF0aG5hbWUgIT09IHJvdXRlID8gZ2V0Um91dGVNYXRjaGVyKGR5bmFtaWNSZWdleCkoYXNQYXRobmFtZSkgOiAnJykgfHxcbiAgICAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnlcblxuICBpbnRlcnBvbGF0ZWRSb3V0ZSA9IHJvdXRlXG4gIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpXG5cbiAgaWYgKFxuICAgICFwYXJhbXMuZXZlcnkoKHBhcmFtKSA9PiB7XG4gICAgICBsZXQgdmFsdWUgPSBkeW5hbWljTWF0Y2hlc1twYXJhbV0gfHwgJydcbiAgICAgIGNvbnN0IHsgcmVwZWF0LCBvcHRpb25hbCB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV1cblxuICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXG4gICAgICAvLyBUT0RPOiBtb3JlIHJvYnVzdCBoYW5kbGluZyBmb3IgdXNlci1lcnJvciAocGFzc2luZyBgL2ApXG4gICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gXG4gICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgcmVwbGFjZWQgPSBgJHshdmFsdWUgPyAnLycgOiAnJ31bJHtyZXBsYWNlZH1dYFxuICAgICAgfVxuICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW3ZhbHVlXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmXG4gICAgICAgIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxuICAgICAgICAoaW50ZXJwb2xhdGVkUm91dGUgPVxuICAgICAgICAgIGludGVycG9sYXRlZFJvdXRlIS5yZXBsYWNlKFxuICAgICAgICAgICAgcmVwbGFjZWQsXG4gICAgICAgICAgICByZXBlYXRcbiAgICAgICAgICAgICAgPyAodmFsdWUgYXMgc3RyaW5nW10pLm1hcChlc2NhcGVQYXRoRGVsaW1pdGVycykuam9pbignLycpXG4gICAgICAgICAgICAgIDogZXNjYXBlUGF0aERlbGltaXRlcnModmFsdWUgYXMgc3RyaW5nKVxuICAgICAgICAgICkgfHwgJy8nKVxuICAgICAgKVxuICAgIH0pXG4gICkge1xuICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcblxuICAgIC8vIG4uYi4gV2UgaWdub3JlIHRoaXMgZXJyb3IgYmVjYXVzZSB3ZSBoYW5kbGUgd2FybmluZyBmb3IgdGhpcyBjYXNlIGluXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cbiAgfVxuICByZXR1cm4ge1xuICAgIHBhcmFtcyxcbiAgICByZXN1bHQ6IGludGVycG9sYXRlZFJvdXRlLFxuICB9XG59XG5cbmZ1bmN0aW9uIG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTogUGFyc2VkVXJsUXVlcnksIHBhcmFtczogc3RyaW5nW10pIHtcbiAgY29uc3QgZmlsdGVyZWRRdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldXG4gICAgfVxuICB9KVxuICByZXR1cm4gZmlsdGVyZWRRdWVyeVxufVxuXG4vKipcbiAqIFJlc29sdmVzIGEgZ2l2ZW4gaHlwZXJsaW5rIHdpdGggYSBjZXJ0YWluIHJvdXRlciBzdGF0ZSAoYmFzZVBhdGggbm90IGluY2x1ZGVkKS5cbiAqIFByZXNlcnZlcyBhYnNvbHV0ZSB1cmxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUhyZWYoXG4gIGN1cnJlbnRQYXRoOiBzdHJpbmcsXG4gIGhyZWY6IFVybCxcbiAgcmVzb2x2ZUFzPzogYm9vbGVhblxuKTogc3RyaW5nIHtcbiAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcbiAgY29uc3QgYmFzZSA9IG5ldyBVUkwoY3VycmVudFBhdGgsICdodHRwOi8vbicpXG4gIGNvbnN0IHVybEFzU3RyaW5nID1cbiAgICB0eXBlb2YgaHJlZiA9PT0gJ3N0cmluZycgPyBocmVmIDogZm9ybWF0V2l0aFZhbGlkYXRpb24oaHJlZilcbiAgdHJ5IHtcbiAgICBjb25zdCBmaW5hbFVybCA9IG5ldyBVUkwodXJsQXNTdHJpbmcsIGJhc2UpXG4gICAgZmluYWxVcmwucGF0aG5hbWUgPSBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChmaW5hbFVybC5wYXRobmFtZSlcbiAgICBsZXQgaW50ZXJwb2xhdGVkQXMgPSAnJ1xuXG4gICAgaWYgKFxuICAgICAgaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmXG4gICAgICBmaW5hbFVybC5zZWFyY2hQYXJhbXMgJiZcbiAgICAgIHJlc29sdmVBc1xuICAgICkge1xuICAgICAgY29uc3QgcXVlcnkgPSBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcylcblxuICAgICAgY29uc3QgeyByZXN1bHQsIHBhcmFtcyB9ID0gaW50ZXJwb2xhdGVBcyhcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBxdWVyeVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIGludGVycG9sYXRlZEFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgIHBhdGhuYW1lOiByZXN1bHQsXG4gICAgICAgICAgaGFzaDogZmluYWxVcmwuaGFzaCxcbiAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXG4gICAgY29uc3QgcmVzb2x2ZWRIcmVmID1cbiAgICAgIGZpbmFsVXJsLm9yaWdpbiA9PT0gYmFzZS5vcmlnaW5cbiAgICAgICAgPyBmaW5hbFVybC5ocmVmLnNsaWNlKGZpbmFsVXJsLm9yaWdpbi5sZW5ndGgpXG4gICAgICAgIDogZmluYWxVcmwuaHJlZlxuXG4gICAgcmV0dXJuIChyZXNvbHZlQXNcbiAgICAgID8gW3Jlc29sdmVkSHJlZiwgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXVxuICAgICAgOiByZXNvbHZlZEhyZWYpIGFzIHN0cmluZ1xuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG59XG5cbmNvbnN0IFBBR0VfTE9BRF9FUlJPUiA9IFN5bWJvbCgnUEFHRV9MT0FEX0VSUk9SJylcbmV4cG9ydCBmdW5jdGlvbiBtYXJrTG9hZGluZ0Vycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBQQUdFX0xPQURfRVJST1IsIHt9KVxufVxuXG5mdW5jdGlvbiBwcmVwYXJlVXJsQXMocm91dGVyOiBOZXh0Um91dGVyLCB1cmw6IFVybCwgYXM6IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgdXJsKSksXG4gICAgYXM6IGFzID8gYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCBhcykpIDogYXMsXG4gIH1cbn1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8UHJpdmF0ZVJvdXRlSW5mbywgJ0NvbXBvbmVudCcgfCAnZXJyJz4gJiB7XG4gIHJvdXRlcjogUm91dGVyXG59ICYgUmVjb3JkPHN0cmluZywgYW55PlxuZXhwb3J0IHR5cGUgQXBwQ29tcG9uZW50ID0gQ29tcG9uZW50VHlwZTxBcHBQcm9wcz5cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbywgQXBwOiBBcHBDb21wb25lbnQpID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IgPSAnU1NHIERhdGEgTk9UX0ZPVU5EJ1xuXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybDogc3RyaW5nLCBhdHRlbXB0czogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGZldGNoKHVybCwge1xuICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgIC8vXG4gICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgIC8vID4gb3B0aW9uLlxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAvL1xuICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgaWYgKCFyZXMub2spIHtcbiAgICAgIGlmIChhdHRlbXB0cyA+IDEgJiYgcmVzLnN0YXR1cyA+PSA1MDApIHtcbiAgICAgICAgcmV0dXJuIGZldGNoUmV0cnkodXJsLCBhdHRlbXB0cyAtIDEpXG4gICAgICB9XG4gICAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIC8vIFRPRE86IGhhbmRsZSByZWxvYWRpbmcgaW4gZGV2ZWxvcG1lbnQgZnJvbSBmYWxsYmFjayByZXR1cm5pbmcgMjAwXG4gICAgICAgIC8vIHRvIG9uLWRlbWFuZC1lbnRyeS1oYW5kbGVyIGNhdXNpbmcgaXQgdG8gcmVsb2FkIHBlcmlvZGljYWxseVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SKVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtMb2FkaW5nRXJyb3IoZXJyKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIGltcGxlbWVudHMgQmFzZVJvdXRlciB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuXG4gIC8qKlxuICAgKiBNYXAgb2YgYWxsIGNvbXBvbmVudHMgbG9hZGVkIGluIGBSb3V0ZXJgXG4gICAqL1xuICBjb21wb25lbnRzOiB7IFtwYXRobmFtZTogc3RyaW5nXTogUHJpdmF0ZVJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICBpc1NzcjogYm9vbGVhblxuICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gIF9pbkZsaWdodFJvdXRlPzogc3RyaW5nXG4gIF9zaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgICAgbG9jYWxlLFxuICAgICAgbG9jYWxlcyxcbiAgICAgIGRlZmF1bHRMb2NhbGUsXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgQXBwOiBBcHBDb21wb25lbnRcbiAgICAgIHdyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgICAgbG9jYWxlPzogc3RyaW5nXG4gICAgICBsb2NhbGVzPzogc3RyaW5nW11cbiAgICAgIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHM6IGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICAgIGdldFVSTCgpXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuXG4gICAgICAvLyBlbmFibGUgY3VzdG9tIHNjcm9sbCByZXN0b3JhdGlvbiBoYW5kbGluZyB3aGVuIGF2YWlsYWJsZVxuICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnXG5cbiAgICAgICAgICBsZXQgc2Nyb2xsRGVib3VuY2VUaW1lb3V0OiB1bmRlZmluZWQgfCBOb2RlSlMuVGltZW91dFxuXG4gICAgICAgICAgY29uc3QgZGVib3VuY2VkU2Nyb2xsU2F2ZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpIGNsZWFyVGltZW91dChzY3JvbGxEZWJvdW5jZVRpbWVvdXQpXG5cbiAgICAgICAgICAgIHNjcm9sbERlYm91bmNlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHVybCwgYXM6IGN1ckFzLCBvcHRpb25zIH0gPSBoaXN0b3J5LnN0YXRlXG4gICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGN1ckFzLFxuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICAgIF9OX1g6IHdpbmRvdy5zY3JvbGxYLFxuICAgICAgICAgICAgICAgICAgX05fWTogd2luZG93LnNjcm9sbFksXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSwgMTApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGRlYm91bmNlZFNjcm9sbFNhdmUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblBvcFN0YXRlID0gKGU6IFBvcFN0YXRlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGUgYXMgSGlzdG9yeVN0YXRlXG5cbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZSksIHF1ZXJ5IH0pLFxuICAgICAgICBnZXRVUkwoKVxuICAgICAgKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKCFzdGF0ZS5fX04pIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gc3RhdGVcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgLy8gTWFrZSBzdXJlIHdlIGRvbid0IHJlLXJlbmRlciBvbiBpbml0aWFsIGxvYWQsXG4gICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgaWYgKHRoaXMuaXNTc3IgJiYgYXMgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICB0aGlzLmNoYW5nZShcbiAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgdXJsLFxuICAgICAgYXMsXG4gICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgIHNoYWxsb3c6IG9wdGlvbnMuc2hhbGxvdyAmJiB0aGlzLl9zaGFsbG93LFxuICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZSxcbiAgICAgIH0pXG4gICAgKVxuICB9XG5cbiAgcmVsb2FkKCk6IHZvaWQge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxuICB9XG5cbiAgLyoqXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxuICAgKi9cbiAgYmFjaygpIHtcbiAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKClcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGBwdXNoU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcHVzaCh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsXG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmxvY2FsZVxuXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMubG9jYWxlID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHtcbiAgICAgICAgbm9ybWFsaXplTG9jYWxlUGF0aCxcbiAgICAgIH0gPSByZXF1aXJlKCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpIGFzIHR5cGVvZiBpbXBvcnQoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcblxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoYXMsIHRoaXMubG9jYWxlcylcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHVybCA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2luRmxpZ2h0Um91dGUpIHtcbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKHRoaXMuX2luRmxpZ2h0Um91dGUpXG4gICAgfVxuXG4gICAgYXMgPSBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpXG4gICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKFxuICAgICAgaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsXG4gICAgICB0aGlzLmxvY2FsZVxuICAgIClcbiAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXNcblxuICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgLy8gV0FSTklORzogYF9oYCBpcyBhbiBpbnRlcm5hbCBvcHRpb24gZm9yIGhhbmRpbmcgTmV4dC5qcyBjbGllbnQtc2lkZVxuICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2ggJiYgdGhpcy5vbmx5QUhhc2hDaGFuZ2UoY2xlYW5lZEFzKSkge1xuICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXNcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAvLyBUT0RPOiBkbyB3ZSBuZWVkIHRoZSByZXNvbHZlZCBocmVmIHdoZW4gb25seSBhIGhhc2ggY2hhbmdlP1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG4gICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpXG4gICAgICB0aGlzLm5vdGlmeSh0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0pXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgY29uc3QgeyBfX3Jld3JpdGVzOiByZXdyaXRlcyB9ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLnByb21pc2VkQnVpbGRNYW5pZmVzdFxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSBwYXJzZWRcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIHVybCBhbmQgYXMgc2hvdWxkIGFsd2F5cyBiZSBwcmVmaXhlZCB3aXRoIGJhc2VQYXRoIGJ5IHRoaXNcbiAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgLy8gYmFzZVBhdGggZnJvbSB0aGUgcGF0aG5hbWUgdG8gbWF0Y2ggdGhlIHBhZ2VzIGRpciAxLXRvLTFcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICA/IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGRlbEJhc2VQYXRoKHBhdGhuYW1lKSlcbiAgICAgIDogcGF0aG5hbWVcblxuICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAvLyB3ZSBuZWVkIHRvIHJlc29sdmUgdGhlIGFzIHZhbHVlIHVzaW5nIHJld3JpdGVzIGZvciBkeW5hbWljIFNTR1xuICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUykge1xuICAgICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgcGFyc2VSZWxhdGl2ZVVybChhcykucGF0aG5hbWUsXG4gICAgICAgIHBhZ2VzLFxuICAgICAgICBiYXNlUGF0aCxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICAocDogc3RyaW5nKSA9PiB0aGlzLl9yZXNvbHZlSHJlZih7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSFcbiAgICAgIClcblxuICAgICAgaWYgKHJlc29sdmVkQXMgIT09IGFzKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbEhyZWYgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZCwgeyBwYXRobmFtZTogcmVzb2x2ZWRBcyB9KSxcbiAgICAgICAgICAgIHBhZ2VzLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICApLnBhdGhuYW1lIVxuICAgICAgICApXG5cbiAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocG90ZW50aWFsSHJlZikpIHtcbiAgICAgICAgICByb3V0ZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXRobmFtZSA9IHBvdGVudGlhbEhyZWZcbiAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSlcblxuICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgIGNvbnN0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChyZXNvbHZlZEFzKVxuICAgICAgY29uc3QgYXNQYXRobmFtZSA9IHBhcnNlZEFzLnBhdGhuYW1lXG5cbiAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZVxuICAgICAgY29uc3QgaW50ZXJwb2xhdGVkQXMgPSBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICA/IGludGVycG9sYXRlQXMocm91dGUsIGFzUGF0aG5hbWUsIHF1ZXJ5KVxuICAgICAgICA6ICh7fSBhcyB7IHJlc3VsdDogdW5kZWZpbmVkOyBwYXJhbXM6IHVuZGVmaW5lZCB9KVxuXG4gICAgICBpZiAoIXJvdXRlTWF0Y2ggfHwgKHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpKSB7XG4gICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICApXG5cbiAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgIGAke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgXG4gICAgICAgICAgICAgICAgICA6IGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYGBcbiAgICAgICAgICAgICAgfSBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAoc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9KSB0byBiZSBpbnRlcnBvbGF0ZWQgcHJvcGVybHkuIGBcbiAgICAgICAgICAgICAgOiBgVGhlIHByb3ZpZGVkIFxcYGFzXFxgIHZhbHVlICgke2FzUGF0aG5hbWV9KSBpcyBpbmNvbXBhdGlibGUgd2l0aCB0aGUgXFxgaHJlZlxcYCB2YWx1ZSAoJHtyb3V0ZX0pLiBgKSArXG4gICAgICAgICAgICAgIGBSZWFkIG1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzLyR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnXG4gICAgICAgICAgICAgICAgICA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcydcbiAgICAgICAgICAgICAgfWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcbiAgICAgICAgYXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgcGF0aG5hbWU6IGludGVycG9sYXRlZEFzLnJlc3VsdCxcbiAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIGludGVycG9sYXRlZEFzLnBhcmFtcyEpLFxuICAgICAgICAgIH0pXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIHJvdXRlTWF0Y2gpXG4gICAgICB9XG4gICAgfVxuXG4gICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMpXG5cbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8oXG4gICAgICAgIHJvdXRlLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICBzaGFsbG93XG4gICAgICApXG4gICAgICBsZXQgeyBlcnJvciwgcHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cbiAgICAgIGlmIChcbiAgICAgICAgKF9fTl9TU0cgfHwgX19OX1NTUCkgJiZcbiAgICAgICAgcHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcbiAgICAgICkge1xuICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1RcblxuICAgICAgICAvLyBjaGVjayBpZiBkZXN0aW5hdGlvbiBpcyBpbnRlcm5hbCAocmVzb2x2ZXMgdG8gYSBwYWdlKSBhbmQgYXR0ZW1wdFxuICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgIC8vIGl0J3Mgbm90XG4gICAgICAgIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWRIcmVmLCBwYWdlcylcblxuICAgICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwYXJzZWRIcmVmLnBhdGhuYW1lKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uLCBvcHRpb25zKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb25cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpID0+IHt9KVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcylcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgIG1ldGhvZCxcbiAgICAgICAgdXJsLFxuICAgICAgICBhZGRMb2NhbGUoYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpLFxuICAgICAgICBvcHRpb25zXG4gICAgICApXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgIGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiZcbiAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lISwgcXVlcnksIGNsZWFuZWRBcywgcm91dGVJbmZvKS5jYXRjaChcbiAgICAgICAgKGUpID0+IHtcbiAgICAgICAgICBpZiAoZS5jYW5jZWxsZWQpIGVycm9yID0gZXJyb3IgfHwgZVxuICAgICAgICAgIGVsc2UgdGhyb3cgZVxuICAgICAgICB9XG4gICAgICApXG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzKVxuICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gJiYgJ19OX1gnIGluIG9wdGlvbnMpIHtcbiAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oKG9wdGlvbnMgYXMgYW55KS5fTl9YLCAob3B0aW9ucyBhcyBhbnkpLl9OX1kpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyBQcmVmZXRjaCBpcyBub3Qgc3VwcG9ydGVkIGluIGRldmVsb3BtZW50IG1vZGUgYmVjYXVzZSBpdCB3b3VsZCB0cmlnZ2VyIG9uLWRlbWFuZC1lbnRyaWVzXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YShcbiAgICAgICAgdXJsLFxuICAgICAgICBhc1BhdGgsXG4gICAgICAgIHRoaXMubG9jYWxlLFxuICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICksXG4gICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgXSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPEdvb2RQYWdlQ2FjaGU+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcblxuICAgIGNvbnN0IGNvbXBvbmVudFJlc3VsdCA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5sb2FkUGFnZShyb3V0ZSlcblxuICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgIGNvbnN0IGVycm9yOiBhbnkgPSBuZXcgRXJyb3IoXG4gICAgICAgIGBBYm9ydCBmZXRjaGluZyBjb21wb25lbnQgZm9yIHJvdXRlOiBcIiR7cm91dGV9XCJgXG4gICAgICApXG4gICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICB0aHJvdyBlcnJvclxuICAgIH1cblxuICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG5cbiAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0XG4gIH1cblxuICBfZ2V0RGF0YTxUPihmbjogKCkgPT4gUHJvbWlzZTxUPik6IFByb21pc2U8VD4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9XG4gICAgdGhpcy5jbGMgPSBjYW5jZWxcbiAgICByZXR1cm4gZm4oKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICAgIH1cblxuICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICBjb25zdCBlcnI6IGFueSA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpXG4gICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U3RhdGljRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICBjb25zdCB7IGhyZWY6IGNhY2hlS2V5IH0gPSBuZXcgVVJMKGRhdGFIcmVmLCB3aW5kb3cubG9jYXRpb24uaHJlZilcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiB0aGlzLnNkY1tjYWNoZUtleV0pIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKVxuICAgIH1cbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSkgPT4ge1xuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YVxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwIGFzIEFwcENvbXBvbmVudClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBidWlsZENhbmNlbGxhdGlvbkVycm9yKCksIGFzKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KGRhdGE6IFByaXZhdGVSb3V0ZUluZm8pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCBhcyBBcHBDb21wb25lbnQpXG4gIH1cbn1cbiIsIi8vIGVzY2FwZSBkZWxpbWl0ZXJzIHVzZWQgYnkgcGF0aC10by1yZWdleHBcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHNlZ21lbnQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBzZWdtZW50LnJlcGxhY2UoL1svIz9dL2csIChjaGFyOiBzdHJpbmcpID0+IGVuY29kZVVSSUNvbXBvbmVudChjaGFyKSlcbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBEVU1NWV9CQVNFID0gbmV3IFVSTChcbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyAnaHR0cDovL24nIDogZ2V0TG9jYXRpb25PcmlnaW4oKVxuKVxuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IHJlc29sdmVkQmFzZSA9IGJhc2UgPyBuZXcgVVJMKGJhc2UsIERVTU1ZX0JBU0UpIDogRFVNTVlfQkFTRVxuICBjb25zdCB7XG4gICAgcGF0aG5hbWUsXG4gICAgc2VhcmNoUGFyYW1zLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWYsXG4gICAgb3JpZ2luLFxuICAgIHByb3RvY29sLFxuICB9ID0gbmV3IFVSTCh1cmwsIHJlc29sdmVkQmFzZSlcbiAgaWYgKFxuICAgIG9yaWdpbiAhPT0gRFVNTVlfQkFTRS5vcmlnaW4gfHxcbiAgICAocHJvdG9jb2wgIT09ICdodHRwOicgJiYgcHJvdG9jb2wgIT09ICdodHRwczonKVxuICApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2ludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwnKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKERVTU1ZX0JBU0Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbmV4cG9ydCB7IHBhdGhUb1JlZ2V4cCB9XG5cbmV4cG9ydCBjb25zdCBtYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIHNlbnNpdGl2ZTogZmFsc2UsXG4gIGRlbGltaXRlcjogJy8nLFxufVxuXG5leHBvcnQgY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9uczogcGF0aFRvUmVnZXhwLlRva2Vuc1RvUmVnZXhwT3B0aW9ucyAmXG4gIHBhdGhUb1JlZ2V4cC5QYXJzZU9wdGlvbnMgPSB7XG4gIC4uLm1hdGNoZXJPcHRpb25zLFxuICBzdHJpY3Q6IHRydWUsXG59XG5cbmV4cG9ydCBkZWZhdWx0IChjdXN0b21Sb3V0ZSA9IGZhbHNlKSA9PiB7XG4gIHJldHVybiAocGF0aDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3Qga2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgICBjb25zdCBtYXRjaGVyUmVnZXggPSBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKFxuICAgICAgcGF0aCxcbiAgICAgIGtleXMsXG4gICAgICBjdXN0b21Sb3V0ZSA/IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMgOiBtYXRjaGVyT3B0aW9uc1xuICAgIClcbiAgICBjb25zdCBtYXRjaGVyID0gcGF0aFRvUmVnZXhwLnJlZ2V4cFRvRnVuY3Rpb24obWF0Y2hlclJlZ2V4LCBrZXlzKVxuXG4gICAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCwgcGFyYW1zPzogYW55KSA9PiB7XG4gICAgICBjb25zdCByZXMgPSBwYXRobmFtZSA9PSBudWxsID8gZmFsc2UgOiBtYXRjaGVyKHBhdGhuYW1lKVxuICAgICAgaWYgKCFyZXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG5cbiAgICAgIGlmIChjdXN0b21Sb3V0ZSkge1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XG4gICAgICAgICAgLy8gdW5uYW1lZCBwYXJhbXMgc2hvdWxkIGJlIHJlbW92ZWQgYXMgdGhleVxuICAgICAgICAgIC8vIGFyZSBub3QgYWxsb3dlZCB0byBiZSB1c2VkIGluIHRoZSBkZXN0aW5hdGlvblxuICAgICAgICAgIGlmICh0eXBlb2Yga2V5Lm5hbWUgPT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICBkZWxldGUgKHJlcy5wYXJhbXMgYXMgYW55KVtrZXkubmFtZV1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHsgLi4ucGFyYW1zLCAuLi5yZXMucGFyYW1zIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCAqIGFzIHBhdGhUb1JlZ2V4cCBmcm9tICduZXh0L2Rpc3QvY29tcGlsZWQvcGF0aC10by1yZWdleHAnXG5cbnR5cGUgUGFyYW1zID0geyBbcGFyYW06IHN0cmluZ106IGFueSB9XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByZXBhcmVEZXN0aW5hdGlvbihcbiAgZGVzdGluYXRpb246IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJhbXMsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgYXBwZW5kUGFyYW1zVG9RdWVyeTogYm9vbGVhbixcbiAgYmFzZVBhdGg6IHN0cmluZ1xuKSB7XG4gIGxldCBwYXJzZWREZXN0aW5hdGlvbjoge1xuICAgIHF1ZXJ5PzogUGFyc2VkVXJsUXVlcnlcbiAgICBwcm90b2NvbD86IHN0cmluZ1xuICAgIGhvc3RuYW1lPzogc3RyaW5nXG4gICAgcG9ydD86IHN0cmluZ1xuICB9ICYgUmV0dXJuVHlwZTx0eXBlb2YgcGFyc2VSZWxhdGl2ZVVybD4gPSB7fSBhcyBhbnlcblxuICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICB9IGVsc2Uge1xuICAgIGNvbnN0IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgaGFzaCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9ID0gbmV3IFVSTChkZXN0aW5hdGlvbilcblxuICAgIHBhcnNlZERlc3RpbmF0aW9uID0ge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgICAgaGFzaCxcbiAgICAgIHByb3RvY29sLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgc2VhcmNoLFxuICAgICAgaHJlZixcbiAgICB9XG4gIH1cblxuICBjb25zdCBkZXN0UXVlcnkgPSBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeVxuICBjb25zdCBkZXN0UGF0aCA9IGAke3BhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIX0ke1xuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggfHwgJydcbiAgfWBcbiAgY29uc3QgZGVzdFBhdGhQYXJhbUtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gIHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoZGVzdFBhdGgsIGRlc3RQYXRoUGFyYW1LZXlzKVxuXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1zID0gZGVzdFBhdGhQYXJhbUtleXMubWFwKChrZXkpID0+IGtleS5uYW1lKVxuXG4gIGxldCBkZXN0aW5hdGlvbkNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUoXG4gICAgZGVzdFBhdGgsXG4gICAgLy8gd2UgZG9uJ3QgdmFsaWRhdGUgd2hpbGUgY29tcGlsaW5nIHRoZSBkZXN0aW5hdGlvbiBzaW5jZSB3ZSBzaG91bGRcbiAgICAvLyBoYXZlIGFscmVhZHkgdmFsaWRhdGVkIGJlZm9yZSB3ZSBnb3QgdG8gdGhpcyBwb2ludCBhbmQgdmFsaWRhdGluZ1xuICAgIC8vIGJyZWFrcyBjb21waWxpbmcgZGVzdGluYXRpb25zIHdpdGggbmFtZWQgcGF0dGVybiBwYXJhbXMgZnJvbSB0aGUgc291cmNlXG4gICAgLy8gZS5nLiAvc29tZXRoaW5nOmhlbGxvKC4qKSAtPiAvYW5vdGhlci86aGVsbG8gaXMgYnJva2VuIHdpdGggdmFsaWRhdGlvblxuICAgIC8vIHNpbmNlIGNvbXBpbGUgdmFsaWRhdGlvbiBpcyBtZWFudCBmb3IgcmV2ZXJzaW5nIGFuZCBub3QgZm9yIGluc2VydGluZ1xuICAgIC8vIHBhcmFtcyBmcm9tIGEgc2VwYXJhdGUgcGF0aC1yZWdleCBpbnRvIGFub3RoZXJcbiAgICB7IHZhbGlkYXRlOiBmYWxzZSB9XG4gIClcbiAgbGV0IG5ld1VybFxuXG4gIC8vIHVwZGF0ZSBhbnkgcGFyYW1zIGluIHF1ZXJ5IHZhbHVlc1xuICBmb3IgKGNvbnN0IFtrZXksIHN0ck9yQXJyYXldIG9mIE9iamVjdC5lbnRyaWVzKGRlc3RRdWVyeSkpIHtcbiAgICBsZXQgdmFsdWUgPSBBcnJheS5pc0FycmF5KHN0ck9yQXJyYXkpID8gc3RyT3JBcnJheVswXSA6IHN0ck9yQXJyYXlcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIC8vIHRoZSB2YWx1ZSBuZWVkcyB0byBzdGFydCB3aXRoIGEgZm9yd2FyZC1zbGFzaCB0byBiZSBjb21waWxlZFxuICAgICAgLy8gY29ycmVjdGx5XG4gICAgICB2YWx1ZSA9IGAvJHt2YWx1ZX1gXG4gICAgICBjb25zdCBxdWVyeUNvbXBpbGVyID0gcGF0aFRvUmVnZXhwLmNvbXBpbGUodmFsdWUsIHsgdmFsaWRhdGU6IGZhbHNlIH0pXG4gICAgICB2YWx1ZSA9IHF1ZXJ5Q29tcGlsZXIocGFyYW1zKS5zdWJzdHIoMSlcbiAgICB9XG4gICAgZGVzdFF1ZXJ5W2tleV0gPSB2YWx1ZVxuICB9XG5cbiAgLy8gYWRkIHBhdGggcGFyYW1zIHRvIHF1ZXJ5IGlmIGl0J3Mgbm90IGEgcmVkaXJlY3QgYW5kIG5vdFxuICAvLyBhbHJlYWR5IGRlZmluZWQgaW4gZGVzdGluYXRpb24gcXVlcnkgb3IgcGF0aFxuICBjb25zdCBwYXJhbUtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG5cbiAgaWYgKFxuICAgIGFwcGVuZFBhcmFtc1RvUXVlcnkgJiZcbiAgICAhcGFyYW1LZXlzLnNvbWUoKGtleSkgPT4gZGVzdFBhdGhQYXJhbXMuaW5jbHVkZXMoa2V5KSlcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgcGFyYW1LZXlzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gZGVzdFF1ZXJ5KSkge1xuICAgICAgICBkZXN0UXVlcnlba2V5XSA9IHBhcmFtc1trZXldXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hvdWxkQWRkQmFzZVBhdGggPSBkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykgJiYgYmFzZVBhdGhcblxuICB0cnkge1xuICAgIG5ld1VybCA9IGAke3Nob3VsZEFkZEJhc2VQYXRoID8gYmFzZVBhdGggOiAnJ30ke2Rlc3RpbmF0aW9uQ29tcGlsZXIoXG4gICAgICBwYXJhbXNcbiAgICApfWBcblxuICAgIGNvbnN0IFtwYXRobmFtZSwgaGFzaF0gPSBuZXdVcmwuc3BsaXQoJyMnKVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoID0gYCR7aGFzaCA/ICcjJyA6ICcnfSR7aGFzaCB8fCAnJ31gXG4gICAgZGVsZXRlIHBhcnNlZERlc3RpbmF0aW9uLnNlYXJjaFxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBpZiAoZXJyLm1lc3NhZ2UubWF0Y2goL0V4cGVjdGVkIC4qPyB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5LykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFRvIHVzZSBhIG11bHRpLW1hdGNoIGluIHRoZSBkZXN0aW5hdGlvbiB5b3UgbXVzdCBhZGQgXFxgKlxcYCBhdCB0aGUgZW5kIG9mIHRoZSBwYXJhbSBuYW1lIHRvIHNpZ25pZnkgaXQgc2hvdWxkIHJlcGVhdC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvaW52YWxpZC1tdWx0aS1tYXRjaGBcbiAgICAgIClcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH1cblxuICAvLyBRdWVyeSBtZXJnZSBvcmRlciBsb3dlc3QgcHJpb3JpdHkgdG8gaGlnaGVzdFxuICAvLyAxLiBpbml0aWFsIFVSTCBxdWVyeSB2YWx1ZXNcbiAgLy8gMi4gcGF0aCBzZWdtZW50IHZhbHVlc1xuICAvLyAzLiBkZXN0aW5hdGlvbiBzcGVjaWZpZWQgcXVlcnkgdmFsdWVzXG4gIHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5ID0ge1xuICAgIC4uLnF1ZXJ5LFxuICAgIC4uLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5LFxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuZXdVcmwsXG4gICAgcGFyc2VkRGVzdGluYXRpb24sXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHBhdGhNYXRjaCBmcm9tICcuL3BhdGgtbWF0Y2gnXG5pbXBvcnQgcHJlcGFyZURlc3RpbmF0aW9uIGZyb20gJy4vcHJlcGFyZS1kZXN0aW5hdGlvbidcbmltcG9ydCB7IFJld3JpdGUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvbG9hZC1jdXN0b20tcm91dGVzJ1xuaW1wb3J0IHsgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuXG5jb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXIgPSBwYXRoTWF0Y2godHJ1ZSlcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVzb2x2ZVJld3JpdGVzKFxuICBhc1BhdGg6IHN0cmluZyxcbiAgcGFnZXM6IHN0cmluZ1tdLFxuICBiYXNlUGF0aDogc3RyaW5nLFxuICByZXdyaXRlczogUmV3cml0ZVtdLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIHJlc29sdmVIcmVmOiAocGF0aDogc3RyaW5nKSA9PiBzdHJpbmdcbikge1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGFzUGF0aCkpIHtcbiAgICBmb3IgKGNvbnN0IHJld3JpdGUgb2YgcmV3cml0ZXMpIHtcbiAgICAgIGNvbnN0IG1hdGNoZXIgPSBjdXN0b21Sb3V0ZU1hdGNoZXIocmV3cml0ZS5zb3VyY2UpXG4gICAgICBjb25zdCBwYXJhbXMgPSBtYXRjaGVyKGFzUGF0aClcblxuICAgICAgaWYgKHBhcmFtcykge1xuICAgICAgICBpZiAoIXJld3JpdGUuZGVzdGluYXRpb24pIHtcbiAgICAgICAgICAvLyB0aGlzIGlzIGEgcHJveGllZCByZXdyaXRlIHdoaWNoIGlzbid0IGhhbmRsZWQgb24gdGhlIGNsaWVudFxuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGVzdFJlcyA9IHByZXBhcmVEZXN0aW5hdGlvbihcbiAgICAgICAgICByZXdyaXRlLmRlc3RpbmF0aW9uLFxuICAgICAgICAgIHBhcmFtcyxcbiAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIHJld3JpdGUuYmFzZVBhdGggPT09IGZhbHNlID8gJycgOiBiYXNlUGF0aFxuICAgICAgICApXG4gICAgICAgIGFzUGF0aCA9IGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhXG4gICAgICAgIE9iamVjdC5hc3NpZ24ocXVlcnksIGRlc3RSZXMucGFyc2VkRGVzdGluYXRpb24ucXVlcnkpXG5cbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKGFzUGF0aCkpKSB7XG4gICAgICAgICAgLy8gY2hlY2sgaWYgd2Ugbm93IG1hdGNoIGEgcGFnZSBhcyB0aGlzIG1lYW5zIHdlIGFyZSBkb25lXG4gICAgICAgICAgLy8gcmVzb2x2aW5nIHRoZSByZXdyaXRlc1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpZiB3ZSBtYXRjaCBhIGR5bmFtaWMtcm91dGUsIGlmIHNvIHdlIGJyZWFrIHRoZSByZXdyaXRlcyBjaGFpblxuICAgICAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlSHJlZihhc1BhdGgpXG5cbiAgICAgICAgaWYgKHJlc29sdmVkSHJlZiAhPT0gYXNQYXRoICYmIHBhZ2VzLmluY2x1ZGVzKHJlc29sdmVkSHJlZikpIHtcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBhc1BhdGhcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5cbi8qKlxuICogVHlwZXMgdXNlZCBieSBib3RoIG5leHQgYW5kIG5leHQtc2VydmVyXG4gKi9cblxuZXhwb3J0IHR5cGUgTmV4dENvbXBvbmVudFR5cGU8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCA9IE5leHRQYWdlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+ID0gQ29tcG9uZW50VHlwZTxQPiAmIHtcbiAgLyoqXG4gICAqIFVzZWQgZm9yIGluaXRpYWwgcGFnZSBsb2FkIGRhdGEgcG9wdWxhdGlvbi4gRGF0YSByZXR1cm5lZCBmcm9tIGBnZXRJbml0aWFsUHJvcHNgIGlzIHNlcmlhbGl6ZWQgd2hlbiBzZXJ2ZXIgcmVuZGVyZWQuXG4gICAqIE1ha2Ugc3VyZSB0byByZXR1cm4gcGxhaW4gYE9iamVjdGAgd2l0aG91dCB1c2luZyBgRGF0ZWAsIGBNYXBgLCBgU2V0YC5cbiAgICogQHBhcmFtIGN0eCBDb250ZXh0IG9mIGBwYWdlYFxuICAgKi9cbiAgZ2V0SW5pdGlhbFByb3BzPyhjb250ZXh0OiBDKTogSVAgfCBQcm9taXNlPElQPlxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgRG9jdW1lbnRDb250ZXh0LFxuICBEb2N1bWVudEluaXRpYWxQcm9wcyxcbiAgRG9jdW1lbnRQcm9wc1xuPiAmIHtcbiAgcmVuZGVyRG9jdW1lbnQoXG4gICAgRG9jdW1lbnQ6IERvY3VtZW50VHlwZSxcbiAgICBwcm9wczogRG9jdW1lbnRQcm9wc1xuICApOiBSZWFjdC5SZWFjdEVsZW1lbnRcbn1cblxuZXhwb3J0IHR5cGUgQXBwVHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBBcHBDb250ZXh0VHlwZSxcbiAgQXBwSW5pdGlhbFByb3BzLFxuICBBcHBQcm9wc1R5cGVcbj5cblxuZXhwb3J0IHR5cGUgQXBwVHJlZVR5cGUgPSBDb21wb25lbnRUeXBlPFxuICBBcHBJbml0aWFsUHJvcHMgJiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfVxuPlxuXG4vKipcbiAqIFdlYiB2aXRhbHMgcHJvdmlkZWQgdG8gX2FwcC5yZXBvcnRXZWJWaXRhbHMgYnkgQ29yZSBXZWIgVml0YWxzIHBsdWdpbiBkZXZlbG9wZWQgYnkgR29vZ2xlIENocm9tZSB0ZWFtLlxuICogaHR0cHM6Ly9uZXh0anMub3JnL2Jsb2cvbmV4dC05LTQjaW50ZWdyYXRlZC13ZWItdml0YWxzLXJlcG9ydGluZ1xuICovXG5leHBvcnQgdHlwZSBOZXh0V2ViVml0YWxzTWV0cmljID0ge1xuICBpZDogc3RyaW5nXG4gIGxhYmVsOiBzdHJpbmdcbiAgbmFtZTogc3RyaW5nXG4gIHN0YXJ0VGltZTogbnVtYmVyXG4gIHZhbHVlOiBudW1iZXJcbn1cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBIZWFkRW50cnkgPSBbc3RyaW5nLCB7IFtrZXk6IHN0cmluZ106IGFueSB9XVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbiAgaGVhZDogSGVhZEVudHJ5W11cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogYE5leHRgIGNvbnRleHRcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBkb2NDb21wb25lbnRzUmVuZGVyZWQ6IHtcbiAgICBIdG1sPzogYm9vbGVhblxuICAgIE1haW4/OiBib29sZWFuXG4gICAgSGVhZD86IGJvb2xlYW5cbiAgICBOZXh0U2NyaXB0PzogYm9vbGVhblxuICB9XG4gIGJ1aWxkTWFuaWZlc3Q6IEJ1aWxkTWFuaWZlc3RcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxuICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZzogc3RyaW5nXG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuXG5pbXBvcnQgR2VvbG9jYXRpb25SZXBvcnRzIGZyb20gJy4vZ2VvbG9jYXRpb24tcmVwb3J0cyc7XG5pbXBvcnQgTGlzdFJlcG9ydFR5cGVzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbGlzdC1yZXBvcnQtdHlwZXMvTGlzdFJlcG9ydFR5cGVzJztcbmltcG9ydCB7IGdldERhcmtUaGVtZSwgZ2V0VGhlbWUsIElzQ3VzdG9tVGhlbWUgfSBmcm9tICcuLi8uLi8uLi91dGlscy9zZXNzaW9uLW1hbmFnZW1lbnQnO1xuaW1wb3J0IHsgYnVpbGRUaGVtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3RoZW1lJztcblxuY29uc3QgUmVwb3J0cyA9ICgpID0+IHtcbiAgICBjb25zdCBbcmVwb3J0U2hvdywgc2V0UmVwb3J0U2hvd10gPSB1c2VTdGF0ZSgwKVxuICAgIGNvbnN0IFtoYXNEYXJrVGhlbWUsIHNldEhhc0RhcmtUaGVtZV0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IHJlcG9ydFR5cGVzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIGljb246ICcnLFxuICAgICAgICAgICAgdGl0bGU6ICdHZW9sb2NhbGl6YWNpw7NuJyxcbiAgICAgICAgICAgIG9uQ2xpY2s6IChpZDogYW55KSA9PiBzZXRSZXBvcnRTaG93KGlkKVxuICAgICAgICB9XG4gICAgXTtcblxuICAgIGNvbnN0IGdldFJlcG9ydHMgPSAoKSA9PiB7XG4gICAgICAgIHN3aXRjaCAocmVwb3J0U2hvdykge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHJldHVybiA8R2VvbG9jYXRpb25SZXBvcnRzIC8+O1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgY29uc3QgaXNDdXN0b20gPSBJc0N1c3RvbVRoZW1lKCk7XG4gICAgICAgIGNvbnN0IGhhc0RhcmtUaGVtZSA9IGdldERhcmtUaGVtZSgpID09PSAnMScgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGlmIChoYXNEYXJrVGhlbWUpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b20nKVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2Rhcmttb2RlJylcbiAgICAgICAgfSBcbiAgICAgICAgXG4gICAgICAgIGlmKGlzQ3VzdG9tKSB7XG4gICAgICAgICAgICBjb25zdCB0aGVtZSA9IGdldFRoZW1lKCk7XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBidWlsZFRoZW1lKHRoZW1lKTtcbiAgICAgICAgICAgIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICAgICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGN1cnJlbnRUaGVtZTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbScpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVwb3J0c1wiPlxuICAgICAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICAgICAge3JlcG9ydFNob3cgIT09IDAgPyAoXG4gICAgICAgICAgICAgICAgZ2V0UmVwb3J0cygpXG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxMaXN0UmVwb3J0VHlwZXMgcmVwb3J0VHlwZXM9e3JlcG9ydFR5cGVzfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlcG9ydHM7XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJyZXBvcnRzQ29udGFpbmVyXCI6IFwiZ2VvbG9jYXRpb24tcmVwb3J0X3JlcG9ydHNDb250YWluZXJfX2I5bG8zXCIsXG5cdFwicmVwb3J0SGVhZGVyXCI6IFwiZ2VvbG9jYXRpb24tcmVwb3J0X3JlcG9ydEhlYWRlcl9fM1JZOFFcIixcblx0XCJjb250YWluZXJJY29uXCI6IFwiZ2VvbG9jYXRpb24tcmVwb3J0X2NvbnRhaW5lckljb25fXzJvcllQXCIsXG5cdFwiaWNvblwiOiBcImdlb2xvY2F0aW9uLXJlcG9ydF9pY29uX18xSFE1SFwiLFxuXHRcImxhYmVsXCI6IFwiZ2VvbG9jYXRpb24tcmVwb3J0X2xhYmVsX18xY2Jzc1wiLFxuXHRcImFjdGlvbnNcIjogXCJnZW9sb2NhdGlvbi1yZXBvcnRfYWN0aW9uc19fM3ZHREFcIixcblx0XCJidXR0b25cIjogXCJnZW9sb2NhdGlvbi1yZXBvcnRfYnV0dG9uX18xNy1HMFwiLFxuXHRcImRldGFpbHNDb250YWluZXJcIjogXCJnZW9sb2NhdGlvbi1yZXBvcnRfZGV0YWlsc0NvbnRhaW5lcl9fM25qS0ZcIlxufTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGxvY2FsU3RvcmFnZSBmcm9tICdsb2NhbFN0b3JhZ2UnO1xuaW1wb3J0IHsgVGFibGVDb21wbGV4IH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy90YWJsZSc7XG5pbXBvcnQge1xuICAgIGZhRXh0ZXJuYWxMaW5rQWx0LFxuICAgIGZhVHJhc2hBbHQsXG4gICAgZmFQZW5jaWxBbHRcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vLi4vdXRpbHMvYXBpJztcbmltcG9ydCB7IGhlYWRlciB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2hlYWRlcnMnO1xuaW1wb3J0IFJlcG9ydERldGFpbHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9yZXBvcnREZXRhaWxzJztcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2J1dHRvbnMvUHJpbWFyeUJ1dHRvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vZ2VvbG9jYXRpb24tcmVwb3J0Lm1vZHVsZS5zY3NzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IFBhZ2VUaXRsZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3BhZ2VUaXRsZS9QYWdlVGl0bGUnO1xuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2xvYWRlci9Mb2FkZXInO1xuaW1wb3J0IHtiYXNlVVJMR2VvcmVmLCBnZW9yZWZBcGlLZXl9IGZyb20gJy4uLy4uLy4uL3V0aWxzL2Jhc2VVcmwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHZW9sb2NhdGlvblJlcG9ydHMoKSB7XG4gICAgY29uc3QgW3JlcG9ydHMsIHNldFJlcG9ydHNdID0gdXNlU3RhdGUoW10pO1xuICAgIGNvbnN0IFtzaG93UmVwb3J0RGV0YWlscywgc2V0U2hvd1JlcG9ydERldGFpbHNdID0gdXNlU3RhdGUoZmFsc2UpXG4gICAgY29uc3QgW3NlbGVjdGVkUmVwb3J0SW5mbywgc2V0U2VsZWN0ZWRSZXBvcnRJbmZvXSA9IHVzZVN0YXRlKFtdKVxuICAgIGNvbnN0IFtkZXRhaWxSZWFkT25seSwgc2V0RGV0YWlsUmVhZE9ubHldID0gdXNlU3RhdGUodHJ1ZSlcbiAgICBjb25zdCBbc2hvd0xvYWRlciwgc2V0U2hvd0xvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGdldFJlcG9ydHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIHNldFNob3dMb2FkZXIodHJ1ZSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkoe1xuICAgICAgICAgICAgICAgIHVybDogJ2FwaS9wbGFjZXMnLFxuICAgICAgICAgICAgICAgIGJhc2VVUkw6IGJhc2VVUkxHZW9yZWYsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiBgQXBpLUtleSAke2dlb3JlZkFwaUtleX1gIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIHRyYW5zZm9ybVJlcG9ydHNEYXRhKHJlc3BvbnNlLmRhdGEuZGF0YSlcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpXG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRTaG93TG9hZGVyKGZhbHNlKVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVJlcG9ydCA9IGFzeW5jIChyb3c6IGFueSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXBpKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgICAgICAgICAgIHVybDogYGFwaS9wbGFjZXMvJHtyb3cuaWR9YCxcbiAgICAgICAgICAgICAgICBiYXNlVVJMOiBiYXNlVVJMR2VvcmVmLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEFwaS1LZXkgJHtnZW9yZWZBcGlLZXl9YCB9XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBnZXRSZXBvcnRzKClcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgdXBkYXRlUmVwb3J0ID0gYXN5bmMgKGRhdGE6IGFueSwgaWQ6IGFueSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXBpKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwYXRjaCcsXG4gICAgICAgICAgICAgICAgdXJsOiBgYXBpL3BsYWNlcy8ke2lkfWAsXG4gICAgICAgICAgICAgICAgYmFzZVVSTDogYmFzZVVSTEdlb3JlZixcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7IEF1dGhvcml6YXRpb246IGBBcGktS2V5ICR7Z2VvcmVmQXBpS2V5fWAgfSxcbiAgICAgICAgICAgICAgICBkYXRhXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZSlcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldFNob3dSZXBvcnREZXRhaWxzKGZhbHNlKVxuICAgICAgICAgICAgZ2V0UmVwb3J0cygpXG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgY3JlYXRlTmV3UmVwb3J0ID0gYXN5bmMgKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgYXBpKHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgICAgICB1cmw6ICdhcGkvcGxhY2VzJyxcbiAgICAgICAgICAgICAgICBiYXNlVVJMOiBiYXNlVVJMR2VvcmVmLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgQXV0aG9yaXphdGlvbjogYEFwaS1LZXkgJHtnZW9yZWZBcGlLZXl9YCB9LFxuICAgICAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlKVxuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0U2hvd1JlcG9ydERldGFpbHMoZmFsc2UpXG4gICAgICAgICAgICBnZXRSZXBvcnRzKClcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBnZXRSZXBvcnRzKClcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBhY3Rpb25zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpY29uOiBmYUV4dGVybmFsTGlua0FsdCxcbiAgICAgICAgICAgIGNvbG9yOiAnIzcxQTRFNCcsXG4gICAgICAgICAgICBhY3Rpb246IChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCduYW1lTG9jYXRpb24nLCByb3cubG9jYXRpb24pXG4gICAgICAgICAgICAgICAgUm91dGVyLnB1c2goYC9ob21lL3JlcG9ydHMvJHtyb3cuaWR9YClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogZmFQZW5jaWxBbHQsXG4gICAgICAgICAgICBjb2xvcjogJyM3MUE0RTQnLFxuICAgICAgICAgICAgYWN0aW9uOiAocm93OiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93RGV0YWlsUmVwb3J0KHJvdylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWNvbjogZmFUcmFzaEFsdCxcbiAgICAgICAgICAgIGNvbG9yOiAnI0RFNDc0NycsXG4gICAgICAgICAgICBhY3Rpb246IChyb3c6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgIGRlbGV0ZVJlcG9ydChyb3cpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBdO1xuXG4gICAgY29uc3Qgc2hvd0RldGFpbFJlcG9ydCA9IChyb3c6IGFueSkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RlZFJlcG9ydCA9IHJlcG9ydHMuZmlsdGVyKHJlcG9ydCA9PiByZXBvcnQuaWQgPT09IHJvdy5pZClcbiAgICAgICAgc2V0U2VsZWN0ZWRSZXBvcnRJbmZvKHNlbGVjdGVkUmVwb3J0WzBdKVxuICAgICAgICBzZXRTaG93UmVwb3J0RGV0YWlscyh0cnVlKVxuICAgICAgICBzZXREZXRhaWxSZWFkT25seShmYWxzZSlcbiAgICB9O1xuXG4gICAgY29uc3Qgb3BlbkNyZWF0ZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXREZXRhaWxSZWFkT25seShmYWxzZSlcbiAgICAgICAgc2V0U2hvd1JlcG9ydERldGFpbHModHJ1ZSlcbiAgICAgICAgc2V0U2VsZWN0ZWRSZXBvcnRJbmZvKFtdKVxuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zZm9ybVJlcG9ydHNEYXRhID0gKHJlcG9ydHM6IGFueVtdKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1JlcG9ydHNBcnJheSA9IHJlcG9ydHMubWFwKHJlcG9ydCA9PiAoe1xuICAgICAgICAgICAgaWQ6IHJlcG9ydC5pZCxcbiAgICAgICAgICAgIGxvY2F0aW9uOiByZXBvcnQubmFtZSxcbiAgICAgICAgICAgIHBvc2l0aW9uMToge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiByZXBvcnQucG9pbnQxLFxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiByZXBvcnQucG9pbnQxLnNwbGl0KCcsJywgMSksXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXBvcnQucG9pbnQxLnNwbGl0KCcsJywgMilbMV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwb3NpdGlvbjI6IHtcbiAgICAgICAgICAgICAgICBjb29yZGluYXRlczogcmVwb3J0LnBvaW50MixcbiAgICAgICAgICAgICAgICBsYXRpdHVkZTogcmVwb3J0LnBvaW50Mi5zcGxpdCgnLCcsIDEpLFxuICAgICAgICAgICAgICAgIGxvbmdpdHVkZTogcmVwb3J0LnBvaW50Mi5zcGxpdCgnLCcsIDIpWzFdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcG9zaXRpb24zOiB7XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IHJlcG9ydC5wb2ludDMsXG4gICAgICAgICAgICAgICAgbGF0aXR1ZGU6IHJlcG9ydC5wb2ludDMuc3BsaXQoJywnLCAxKSxcbiAgICAgICAgICAgICAgICBsb25naXR1ZGU6IHJlcG9ydC5wb2ludDMuc3BsaXQoJywnLCAyKVsxXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBvc2l0aW9uNDoge1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzOiByZXBvcnQucG9pbnQ0LFxuICAgICAgICAgICAgICAgIGxhdGl0dWRlOiByZXBvcnQucG9pbnQ0LnNwbGl0KCcsJywgMSksXG4gICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiByZXBvcnQucG9pbnQ0LnNwbGl0KCcsJywgMilbMV1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pKVxuXG4gICAgICAgIHNldFJlcG9ydHMobmV3UmVwb3J0c0FycmF5KVxuICAgIH1cblxuICAgIGNvbnN0IGdldFJlcG9ydFJvd3MgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvd3MgPSByZXBvcnRzLm1hcChyZXBvcnQgPT4gKHtcbiAgICAgICAgICAgIGlkOiByZXBvcnQuaWQsXG4gICAgICAgICAgICBsb2NhdGlvbjogcmVwb3J0LmxvY2F0aW9uLFxuICAgICAgICAgICAgcG9zaXRpb24xOiByZXBvcnQucG9zaXRpb24xLmNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgcG9zaXRpb24yOiByZXBvcnQucG9zaXRpb24yLmNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgcG9zaXRpb24zOiByZXBvcnQucG9zaXRpb24zLmNvb3JkaW5hdGVzLFxuICAgICAgICAgICAgcG9zaXRpb240OiByZXBvcnQucG9zaXRpb240LmNvb3JkaW5hdGVzXG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiByb3dzXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXBvcnRzQ29udGFpbmVyfT5cbiAgICAgICAgICAgIDxMb2FkZXIgc2hvdz17c2hvd0xvYWRlcn0gLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yZXBvcnRIZWFkZXJ9PlxuICAgICAgICAgICAgICAgIDxQYWdlVGl0bGUgdGl0bGU9XCJSZXBvcnRlc1wiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICAgICAgICAgIDxQcmltYXJ5QnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk51ZXZhIHViaWNhY2nDs24gZ2VvcmVmZXJlbmNpYWRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29wZW5DcmVhdGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29tcGxleENvbnRhaW5lcn0+XG4gICAgICAgICAgICAgICAgPFRhYmxlQ29tcGxleFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zPXthY3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBjb250ZW50PXtnZXRSZXBvcnRSb3dzKCl9XG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcj17aGVhZGVyfVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYWdlTmV4dD17KCkgPT4geyB9fVxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VQYWdlUHJldj17KCkgPT4geyB9fVxuICAgICAgICAgICAgICAgICAgICB0b3RhbD17MH1cbiAgICAgICAgICAgICAgICAgICAgY291bnQ9ezB9XG4gICAgICAgICAgICAgICAgICAgIHRvdGFsUGFnZT17MH1cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFBhZ2U9ezB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2tEZXRhaWxzPXsoKSA9PiB7IH19XG4gICAgICAgICAgICAgICAgICAgIHRleHROb3REYXRhPScnXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICB7c2hvd1JlcG9ydERldGFpbHMgJiYgKFxuICAgICAgICAgICAgICAgIDxSZXBvcnREZXRhaWxzXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1vZGFsPXsoKSA9PiBzZXRTaG93UmVwb3J0RGV0YWlscyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgICAgIHNob3dNb2RhbD17c2hvd1JlcG9ydERldGFpbHN9XG4gICAgICAgICAgICAgICAgICAgIHsuLi5zZWxlY3RlZFJlcG9ydEluZm99XG4gICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5PXtkZXRhaWxSZWFkT25seX1cbiAgICAgICAgICAgICAgICAgICAgc2F2ZUluZm89eyhuZXdSZXBvcnQ6IGFueSwgaWQ6IG51bWJlcikgPT4gaWQgPT09IDAgP1xuICAgICAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UmVwb3J0KG5ld1JlcG9ydCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUmVwb3J0KG5ld1JlcG9ydCwgaWQpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FuY2VsPXsoKSA9PiBzZXRTaG93UmVwb3J0RGV0YWlscyhmYWxzZSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgYmFzZVVSTCB9IGZyb20gJy4vYmFzZVVybCc7XG5cbmV4cG9ydCBkZWZhdWx0IGF4aW9zLmNyZWF0ZSh7XG4gIGJhc2VVUkwsd2l0aENyZWRlbnRpYWxzOiBmYWxzZVxuICAvL3RpbWVvdXQ6IDEwMDBcbn0pIiwiZXhwb3J0IGNvbnN0IGJhc2VVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMO1xuZXhwb3J0IGNvbnN0IGJhc2VVUkxHZW9yZWYgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HRU9SRUZfQVBJO1xuZXhwb3J0IGNvbnN0IGdlb3JlZkFwaUtleSA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0dFT1JFRl9BUElfS0VZO1xuIiwiaW1wb3J0IHsgaXNEYXRlLCBpc1ZhbGlkLCBmb3JtYXQsIHBhcnNlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0ICogYXMgbG9jYWxlcyBmcm9tICdkYXRlLWZucy9sb2NhbGUnO1xuaW1wb3J0IHsgZ2V0TG9jYWxlIH0gZnJvbSAnLi9zZXNzaW9uLW1hbmFnZW1lbnQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZVN0cjogc3RyaW5nKSB7XG4gICAgaWYgKCFkYXRlU3RyIHx8IGRhdGVTdHIudHJpbSgpID09PSAnLScpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgbGV0IGxvY2FsZSA9IGdldExvY2FsZSgpO1xuICAgIGxvY2FsZSA9IGxvY2FsZSAgPT09ICdlbicgPyAnZW5VUycgOiBsb2NhbGU7XG5cbiAgICBjb25zdCBwYXJzZWRTaG9ydCA9IHBhcnNlKGRhdGVTdHIsICdkZC9NTU0veXl5eScsIG5ldyBEYXRlKCkpO1xuXG4gICAgaWYgKGlzRGF0ZShwYXJzZWRTaG9ydCkgJiYgaXNWYWxpZChwYXJzZWRTaG9ydCkpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdChwYXJzZWRTaG9ydCwgJ2RkL01NTU0veXl5eScsIHsgbG9jYWxlOiBsb2NhbGVzW2xvY2FsZV0gfSk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkTG9uZyA9IHBhcnNlKGRhdGVTdHIsICd5eXl5LU1NLWRkIEhIOm1tOnNzJywgbmV3IERhdGUoKSk7XG5cbiAgICBpZiAoaXNEYXRlKHBhcnNlZExvbmcpICYmIGlzVmFsaWQocGFyc2VkTG9uZykpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdChwYXJzZWRMb25nLCAnZGQvTU1NTS95eXl5JywgeyBsb2NhbGU6IGxvY2FsZXNbbG9jYWxlXSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsImV4cG9ydCBjb25zdCBoZWFkZXIgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogXCJMdWdhclwiLFxuICAgICAgICBuYW1lOiBcImxvY2F0aW9uXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpc0hpZGVkYWJsZTogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUG9zaWNpw7NuIDFcIixcbiAgICAgICAgbmFtZTogXCJwb3NpdGlvbjFcIixcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGlzSGlkZWRhYmxlOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJQb3NpY2nDs24gMlwiLFxuICAgICAgICBuYW1lOiBcInBvc2l0aW9uMlwiLFxuICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgaXNIaWRlZGFibGU6IGZhbHNlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiBcIlBvc2ljacOzbiAzXCIsXG4gICAgICAgIG5hbWU6IFwicG9zaXRpb24zXCIsXG4gICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICBpc0hpZGVkYWJsZTogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6IFwiUG9zaWNpw7NuIDRcIixcbiAgICAgICAgbmFtZTogXCJwb3NpdGlvbjRcIixcbiAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgIGlzSGlkZWRhYmxlOiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogXCJBY2Npb25lc1wiLFxuICAgICAgICBuYW1lOiBcImNoZWNrXCIsXG4gICAgICAgIHR5cGU6IFwiYWN0aW9uc1wiLFxuICAgICAgICBpc0hpZGVkYWJsZTogZmFsc2VcbiAgICB9XG5dOyIsImV4cG9ydCBjb25zdCBwaG90b1VybCA9ICdodHRwczovL2xhbXB0M2JkaWFnLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcmljZWNoZWNrdjInXG4iLCJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuXG5jb25zdCBjcmVhdGVTZXNzaW9uID0gKHRva2VuOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgcm9sOiBBcnJheTxzdHJpbmc+LCBwcm9maWxlUGljdHJlOiBzdHJpbmcsIGlkOiBzdHJpbmcsIGRhcmtfdGhlbWU/OiBudW1iZXIsIHRoZW1lPzogYW55LCBsb2dvPzogc3RyaW5nLCAgbG9jYWxlPzogc3RyaW5nKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdG9rZW4pXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCBuYW1lKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyb2wnLCByb2wuam9pbignfCcpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpZCcsIGlkKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrX3RoZW1lJywgZGFya190aGVtZS50b1N0cmluZygpKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2NhbGUnLCBsb2NhbGUpXG5cbiAgICBpZiAodGhlbWUgIT09IG51bGwgfHwgIXRoZW1lKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0aGVtZScsIEpTT04uc3RyaW5naWZ5KHRoZW1lKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkoe30pKTtcbiAgICB9XG4gICAgaWYgKHByb2ZpbGVQaWN0cmUgJiYgcHJvZmlsZVBpY3RyZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9maWxlUGljdHVyZScsIGBodHRwczovL2Nkbi1wcmljZWNoZWNrLnNmbzIuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbS8ke3Byb2ZpbGVQaWN0cmV9YClcbiAgICB9XG4gICAgaWYobG9nbyAmJiBsb2dvLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ28nLCBgaHR0cHM6Ly9sYW1wdDNiZGlhZy5ibG9iLmNvcmUud2luZG93cy5uZXQvcHJpY2VjaGVja3YyLyR7bG9nb31gKSBcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nbycsIGAvaW1nL2xvZ28ucG5nYCkgXG4gICAgfVxufVxuXG5jb25zdCBkZWxldGVTZXNzaW9uID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdsb2NhbGUnKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdkYXJrX3RoZW1lJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndG9rZW4nKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCduYW1lJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncm9sJylcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nbycsIGAvaW1nL2xvZ28ucG5nYCkgXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Byb2ZpbGVQaWN0dXJlJylcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgndGhlbWUnKVxufVxuXG5jb25zdCBnZXRUb2tlbiA9ICgpOiBzdHJpbmcgfCBudWxsID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG5cblxuY29uc3QgZ2V0TmFtZSA9ICgpOiBzdHJpbmcgfCBudWxsID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJylcblxuY29uc3QgZ2V0SWQgPSAoKTogc3RyaW5nIHwgbnVsbCA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWQnKVxuXG5jb25zdCBnZXREYXJrVGhlbWUgPSAoKTogYW55ID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkYXJrX3RoZW1lJylcbmNvbnN0IGdldExvY2FsZSA9ICgpOiBhbnkgPT4ge1xuICAgIGNvbnN0IGlzQnJvd3NlciA9ICgpID0+IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgY29uc3QgaGFzTG9jYWxlID0gKCkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsZScpIHx8IGZhbHNlXG5cbiAgICBsZXQgbG9jYWxlID0gJ2VzJztcblxuICAgIGlmIChpc0Jyb3dzZXIoKSAmJiBoYXNMb2NhbGUoKSkge1xuICAgICAgICBsb2NhbGUgPSAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvY2FsZScpIHx8IGxvY2FsZVxuICAgIH1cblxuICAgIHJldHVybiBsb2NhbGVcbn1cblxuY29uc3QgZ2V0UHJvZmlsZVBpY3R1cmUgPSAoKTogc3RyaW5nIHwgbnVsbCA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvZmlsZVBpY3R1cmUnKVxuXG5jb25zdCBnZXRSb2xlcyA9ICgpOiBBcnJheTxzdHJpbmc+IHwgbnVsbCA9PiB7XG4gICAgY29uc3Qgcm9sZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sJylcbiAgICBpZiAocm9sZXMpXG4gICAgICAgIHJldHVybiByb2xlcy5zcGxpdCgnfCcpXG5cbiAgICByZXR1cm4gbnVsbFxufVxuXG5jb25zdCB2YWxpZGF0ZVNlc3Npb24gPSAobmV3Um91dGU/OiBzdHJpbmcpID0+IHtcbiAgICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB7XG4gICAgICAgIFJvdXRlci5wdXNoKCcvbG9naW4nKVxuICAgIH0gZWxzZSBpZiAobmV3Um91dGUpIHtcbiAgICAgICAgUm91dGVyLnB1c2gobmV3Um91dGUpXG4gICAgfVxufVxuXG5jb25zdCBnZXRIZWFkZXIgPSAoKTogeyBBdXRob3JpemF0aW9uOiBzdHJpbmcgfSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKVxuICAgIHJldHVybiB7IEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gIH1cbn1cblxuY29uc3QgdmFsaWRhdGVJc0FuYWx5c3QgPSAoKSA9PiB7XG4gICAgbGV0IHJvbGUgPSAnJztcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgIHJvbGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncm9sJyk7XG5cbiAgICB9XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9IHJvbGUgPT09ICdBbmFsaXN0YSc7XG4gICAgcmV0dXJuIHZhbGlkYXRpb247XG59XG5cbmNvbnN0IHZhbGlkYXRlSXNBZG1pbiA9ICgpID0+IHtcbiAgICBsZXQgcm9sZSA9ICcnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgcm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2wnKTtcbiAgICB9XG4gICAgcmV0dXJuIHJvbGUgPT09ICdBZG1pbic7XG59XG5cbmNvbnN0IGdldExvZ28gPSAoKSA9PiB7XG4gICAgbGV0IGxvZ28gPSBcIi9pbWcvbG9nby5wbmdcIjtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXG4gICAgICAgIGxvZ28gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9nbycpO1xuICAgICAgICByZXR1cm4gbG9nbztcbiAgICB9XG4gICAgcmV0dXJuIGxvZ287XG59XG5jb25zdCBJc0N1c3RvbVRoZW1lID0gKCkgPT4ge1xuICAgIGxldCBpc0N1c3RvbSA9IGZhbHNlO1xuICAgIGxldCB0aGVtZSA9IFwiXCI7XG4gICAgbGV0IG9ialRoZW1lID0ge31cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBjb25zdCBoYXNEYXJrVGhlbWUgPSBnZXREYXJrVGhlbWUoKSA9PT0gJzEnID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGVtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpO1xuICAgICAgICBpZiAodGhlbWUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIG9ialRoZW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGhlbWUnKSkgfHwge307XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoT2JqZWN0LmtleXMob2JqVGhlbWUpLmxlbmd0aCAhPT0gMCAmJiAhaGFzRGFya1RoZW1lKSB7XG4gICAgICAgICAgICBpc0N1c3RvbSA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gaXNDdXN0b207XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlzQ3VzdG9tO1xufVxuXG5jb25zdCBnZXRUaGVtZSA9ICgpID0+IHtcbiAgICBsZXQgdGhlbWUgPSBcIlwiO1xuICAgIGxldCBvYmpUaGVtZSA9IHt9XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHRoZW1lICE9PSBcInVuZGVmaW5lZFwiIHx8ICF0aGVtZSkge1xuICAgICAgICAgICAgb2JqVGhlbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmpUaGVtZTtcbiAgICB9XG4gICAgcmV0dXJuIG9ialRoZW1lO1xufVxuXG5leHBvcnQge1xuICAgIGdldExvZ28sXG4gICAgSXNDdXN0b21UaGVtZSxcbiAgICBjcmVhdGVTZXNzaW9uLFxuICAgIGRlbGV0ZVNlc3Npb24sXG4gICAgZ2V0VG9rZW4sXG4gICAgZ2V0TmFtZSxcbiAgICBnZXRQcm9maWxlUGljdHVyZSxcbiAgICBnZXRSb2xlcyxcbiAgICB2YWxpZGF0ZVNlc3Npb24sXG4gICAgZ2V0SGVhZGVyLFxuICAgIGdldElkLFxuICAgIGdldERhcmtUaGVtZSxcbiAgICBnZXRMb2NhbGUsXG4gICAgdmFsaWRhdGVJc0FuYWx5c3QsXG4gICAgZ2V0VGhlbWUsXG4gICAgdmFsaWRhdGVJc0FkbWluLFxufVxuIiwiY29uc3QgTGlnaHRlbkRhcmtlbkNvbG9yID0gKGNvbDogc3RyaW5nLCBhbXQ6IG51bWJlcikgPT4ge1xuICAgIGxldCB1c2VQb3VuZCA9IGZhbHNlO1xuXG4gICAgaWYgKGNvbFswXSA9PSBcIiNcIikge1xuICAgICAgICBjb2wgPSBjb2wuc2xpY2UoMSk7XG4gICAgICAgIHVzZVBvdW5kID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBsZXQgbnVtID0gcGFyc2VJbnQoY29sLCAxNik7XG5cbiAgICBsZXQgciA9IChudW0gPj4gMTYpICsgYW10O1xuXG4gICAgaWYgKHIgPiAyNTUpIHIgPSAyNTU7XG4gICAgZWxzZSBpZiAociA8IDApIHIgPSAwO1xuXG4gICAgbGV0IGIgPSAoKG51bSA+PiA4KSAmIDB4MDBGRikgKyBhbXQ7XG5cbiAgICBpZiAoYiA+IDI1NSkgYiA9IDI1NTtcbiAgICBlbHNlIGlmIChiIDwgMCkgYiA9IDA7XG5cbiAgICBsZXQgZyA9IChudW0gJiAweDAwMDBGRikgKyBhbXQ7XG5cbiAgICBpZiAoZyA+IDI1NSkgZyA9IDI1NTtcbiAgICBlbHNlIGlmIChnIDwgMCkgZyA9IDA7XG5cbiAgICByZXR1cm4gKHVzZVBvdW5kID8gXCIjXCIgOiBcIlwiKSArIChnIHwgKGIgPDwgOCkgfCAociA8PCAxNikpLnRvU3RyaW5nKDE2KTtcblxufVxuXG5leHBvcnQgY29uc3QgYnVpbGRUaGVtZSA9ICh0aGVtZSkgPT4ge1xuICAgIGlmICh0aGVtZSAmJiBPYmplY3Qua2V5cyh0aGVtZSkubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGNvbnN0IGxpZ2h0ZW4gPSB0aGVtZT8ud2FsbHBhcGVyICYmIGAke0xpZ2h0ZW5EYXJrZW5Db2xvcih0aGVtZS53YWxscGFwZXIsIDIwKX0gIWltcG9ydGFudGA7XG4gICAgICAgIGNvbnN0IGRhcmtlbiA9IHRoZW1lPy53YWxscGFwZXIgJiYgYCR7TGlnaHRlbkRhcmtlbkNvbG9yKHRoZW1lLndhbGxwYXBlciwgLTIwKX0gIWltcG9ydGFudGA7XG4gICAgICAgIGNvbnN0IGZvbnREYXJrZW4gPSB0aGVtZT8udGV4dCAmJiBgJHtMaWdodGVuRGFya2VuQ29sb3IodGhlbWUudGV4dCwgLTIwKX0gIWltcG9ydGFudGA7XG4gICAgICAgIGNvbnN0IGZvbnRMaWdodGVyID0gdGhlbWU/LnRleHQgJiYgYCR7TGlnaHRlbkRhcmtlbkNvbG9yKHRoZW1lLnRleHQsIDYwKX0gIWltcG9ydGFudGA7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIC5jdXN0b20ge1xuICAgICAgICAgICAgLS1iZ0NvbG9yOiAke3RoZW1lLndhbGxwYXBlcn07XG4gICAgICAgICAgICAtLWZvbnQ6ICR7dGhlbWUuZm9udH07XG4gICAgICAgICAgICAtLXRleHRDb2xvcjogJHt0aGVtZS50ZXh0fTtcbiAgICAgICAgICAgIC0tYmdCdG5QcmltYXJ5OiAke3RoZW1lLnByaW1hcnlfYnV0dG9ufTtcbiAgICAgICAgICAgIC0tYmdCdG5TZWNvbmRhcnk6ICR7dGhlbWUuc2Vjb25kYXJ5X2J1dHRvbn07XG4gICAgICAgICAgICAtLWJ0blByaW1hcnlUZXh0OiAke3RoZW1lLnByaW1hcnlfdGV4dH07XG4gICAgICAgICAgICAtLWJ0blNlY29uZGFyeVRleHQ6ICR7dGhlbWUuc2Vjb25kYXJ5X3RleHR9O1xuICAgIFxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmdDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20tZm9udCwgLmN1c3RvbS1ibG9jay13b29kc21va2UsIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfb3B0aW9uc0xpc3QnXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddLCAuY3VzdG9tIFtjbGFzc149J2FkdmFuY2VkLXNlYXJjaF9jb250YWluZXInXSwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0sIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSwgLmN1c3RvbSBbY2xhc3NePSdtb2RhbF9tb2RhbF8nXSwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfZGF0YUNvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9oaXN0b3J5Q29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyQ29tcGxldGVkXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3NjYW5uZXJEYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJtb2RhbF9kaWFsb2dNb2RhbFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfcHJpY2VcIl0sIC5jdXN0b20gW2NsYXNzXj1cInByb2R1Y3RDb21wYXJlRGV0YWlsc19ncmFwaENvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfZ3JhcGhDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImRldGFpbHNDb250YWluZXJfZGV0YWlsc1wiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlciwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXIsIC5jdXN0b20tZm9udCAqLCAuY3VzdG9tLWJsb2NrLXdvb2RzbW9rZSAqLCAuY3VzdG9tIFtjbGFzc149J2hvbWVfbWVzc2FnZU5vRWxlbWVudHNDb250YWluZXInXSAqLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSAqLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9vcHRpb25zTGlzdCddICosIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2xlZnRDb250YWluZXInXSAqLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddICosIC5jdXN0b20gW2NsYXNzXj0nYWR2YW5jZWQtc2VhcmNoX2NvbnRhaW5lciddICosIC5jdXN0b20gW2NsYXNzXj1cImlucHV0X2lucHV0XCJdICosIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSAqLCAuY3VzdG9tIFtjbGFzc149J21vZGFsX21vZGFsXyddICosIC5jdXN0b20gW2NsYXNzXj1cInNlbGVjdF9zZWxlY3RcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9kYXRhQ29udGFpbmVyXCJdICosIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfaGlzdG9yeUNvbnRhaW5lclwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyQ29tcGxldGVkXCJdICosIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfcHJvZHVjdERhdGFDb250YWluZXJcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9zY2FubmVyRGF0YUNvbnRhaW5lclwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJtb2RhbF9kaWFsb2dNb2RhbFwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJwcm9kdWN0RGV0YWlsc19wcmljZVwiXSAqLCAuY3VzdG9tIFtjbGFzc149XCJwcm9kdWN0Q29tcGFyZURldGFpbHNfZ3JhcGhDb250YWluZXJcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfZ3JhcGhDb250YWluZXJcIl0gKiwgLmN1c3RvbSBbY2xhc3NePVwiZGV0YWlsc0NvbnRhaW5lcl9kZXRhaWxzXCJdICosIC5jdXN0b20gW2NsYXNzXj1cInJlYWN0LWRhdGVwaWNrZXItcG9wcGVyXCJdIC5yZWFjdC1kYXRlcGlja2VyX19oZWFkZXIgKiwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXIgKiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbS1ibG9jay13b29kc21va2UsIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfb3B0aW9uc0xpc3QnXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddLCAuY3VzdG9tIFtjbGFzc149J2FkdmFuY2VkLXNlYXJjaF9jb250YWluZXInXSwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0sIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSwgLmN1c3RvbSBbY2xhc3NePSdtb2RhbF9tb2RhbF8nXSwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImhvbWVfZGF0YUNvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9oaXN0b3J5Q29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyQ29tcGxldGVkXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3Byb2R1Y3REYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJob21lX3NjYW5uZXJEYXRhQ29udGFpbmVyXCJdLCAuY3VzdG9tIFtjbGFzc149XCJtb2RhbF9kaWFsb2dNb2RhbFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfcHJpY2VcIl0sIC5jdXN0b20gW2NsYXNzXj1cInByb2R1Y3RDb21wYXJlRGV0YWlsc19ncmFwaENvbnRhaW5lclwiXSwgLmN1c3RvbSBbY2xhc3NePVwicHJvZHVjdERldGFpbHNfZ3JhcGhDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cImRldGFpbHNDb250YWluZXJfZGV0YWlsc1wiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXJfX2hlYWRlciwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gLnJlYWN0LWRhdGVwaWNrZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdDb2xvcikhaW1wb3J0YW50O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbS1saW5rLCAuY3VzdG9tIGEsIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfb3B0aW9uc0xpc3QnXSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddLCAuY3VzdG9tIFtjbGFzc149J2FkdmFuY2VkLXNlYXJjaF9jb250YWluZXInXSwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0sIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSwgLmN1c3RvbSBbY2xhc3NePSdtb2RhbF9tb2RhbF8nXSwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0sIC5jdXN0b20gW2NsYXNzXj0naG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lciddIGEsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2hlYWRlciddIGEsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX29wdGlvbnNMaXN0J10gYSwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfbGVmdENvbnRhaW5lciddIGEsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2Ryb3Bkb3duJ10gYSwgLmN1c3RvbSBbY2xhc3NePSdhZHZhbmNlZC1zZWFyY2hfY29udGFpbmVyJ10gYSwgLmN1c3RvbSBbY2xhc3NePVwiaW5wdXRfaW5wdXRcIl0gYSwgLmN1c3RvbSBbY2xhc3NePVwiYWR2YW5jZWQtc2VhcmNoX2lucHV0U2VhcmNoXCJdIGEsIC5jdXN0b20gW2NsYXNzXj0nbW9kYWxfbW9kYWxfJ10gYSwgLmN1c3RvbSBbY2xhc3NePVwic2VsZWN0X3NlbGVjdFwiXSBhLCAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke2ZvbnRMaWdodGVyfTtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20tbGluazpob3ZlciwgLmN1c3RvbSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hvbWVfbWVzc2FnZU5vRWxlbWVudHNDb250YWluZXInXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfaGVhZGVyJ106aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX29wdGlvbnNMaXN0J106aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2xlZnRDb250YWluZXInXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdoZWFkZXJfZHJvcGRvd24nXTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePSdhZHZhbmNlZC1zZWFyY2hfY29udGFpbmVyJ106aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cImlucHV0X2lucHV0XCJdOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149XCJhZHZhbmNlZC1zZWFyY2hfaW5wdXRTZWFyY2hcIl06aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0nbW9kYWxfbW9kYWxfJ106aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cInNlbGVjdF9zZWxlY3RcIl06aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cInJlYWN0LWRhdGVwaWNrZXItcG9wcGVyXCJdOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hvbWVfbWVzc2FnZU5vRWxlbWVudHNDb250YWluZXInXSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9oZWFkZXInXSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9vcHRpb25zTGlzdCddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0naGVhZGVyX2xlZnRDb250YWluZXInXSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J2hlYWRlcl9kcm9wZG93biddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj0nYWR2YW5jZWQtc2VhcmNoX2NvbnRhaW5lciddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cImlucHV0X2lucHV0XCJdIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cImFkdmFuY2VkLXNlYXJjaF9pbnB1dFNlYXJjaFwiXSBhOmhvdmVyLCAuY3VzdG9tIFtjbGFzc149J21vZGFsX21vZGFsXyddIGE6aG92ZXIsIC5jdXN0b20gW2NsYXNzXj1cInNlbGVjdF9zZWxlY3RcIl0gYTpob3ZlciwgLmN1c3RvbSBbY2xhc3NePVwicmVhY3QtZGF0ZXBpY2tlci1wb3BwZXJcIl0gYTpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJHtmb250TGlnaHRlcn07XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJob21lX2hpc3RvcnlDb250YWluZXJcIl06bm90KC5wcm9kdWN0SGlzdG9yeUNvbnRhaW5lcikgW2NsYXNzXj1cInNxdWFyZV9zcXVhcmVcIl0ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQ29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149J29wdGlvbkxpc3RfdGFiQmFyJ10gW2NsYXNzXj0nb3B0aW9uTGlzdF9zZWxlY3RlZCddIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQ29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149J29wdGlvbkxpc3RfdGFiQmFyJ10gbGkge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gLnRhYmxlLCAuY3VzdG9tIFtjbGFzc149J3RhYmxlX3RhYmxlQ29tcGxleCddIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbn07XG4gICAgICAgICAgICBjb2xvcjogJHtmb250RGFya2VufTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDEwcHggLTZweCBibGFjaztcbiAgICAgICAgICAgIFxuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSAudGFibGUgdGgsIC5jdXN0b20gW2NsYXNzXj0ndGFibGVfdGFibGVDb21wbGV4J10gdGgge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHtkYXJrZW59O1xuXG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIC50YWJsZSB0cjpudGgtY2hpbGQob2RkKSwgLmN1c3RvbSBbY2xhc3NePSd0YWJsZV90YWJsZUNvbXBsZXgnXSB0cjpudGgtY2hpbGQob2RkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke2xpZ2h0ZW59O1xuICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSBbY2xhc3NePVwibW9kYWxfZGlhbG9nTW9kYWxDb250YWluZXJcIl0sIC5jdXN0b20gW2NsYXNzXj1cIm1vZGFsX21vZGFsQ29udGFpbmVyXCJdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7bGlnaHRlbn07XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJpbnB1dF9ibGFja0lucHV0XCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idG5QcmltYXJ5VGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuUHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImJ1dHRvbl9wcmltYXJ5QnV0dG9uX18yN21iWVwiXSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnRuUHJpbWFyeVRleHQpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0J0blByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYmdCdG5QcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgIH1cbiAgICAgICAuY3VzdG9tIFtjbGFzc149XCJidXR0b25fc2Vjb25kYXJ5QnV0dG9uX18xTjF2TVwiXSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnRuU2Vjb25kYXJ5VGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuU2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJob21lX2NhcHR1cmVzTGlzdFwiXSBwIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJob21lX2NhcHR1cmVzTGlzdFwiXSBwW2NsYXNzXj1cImhvbWVfd2l0aFByb2R1Y3RcIl0ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ0blNlY29uZGFyeVRleHQpICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5LS1rZXlib2FyZC1zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGUzYzI2ICFpbXBvcnRhbnQ7XG4gICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJyZWFjdC1kYXRlcGlja2VyLXBvcHBlclwiXSAucmVhY3QtZGF0ZXBpY2tlcl9fZGF5OmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxZjIyMjMgIWltcG9ydGFudDtcbiAgICAgICB9XG4gICAgICAgLmN1c3RvbSBbY2xhc3NePVwiaG9tZV9tZXNzYWdlTm9FbGVtZW50c0NvbnRhaW5lcl9fMXE5SVdcIl0ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdCdG5QcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWJ0blByaW1hcnlUZXh0KSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICAgIC5jdXN0b20gW2NsYXNzXj1cImJ0bi10aGVtZVwiXSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZ0J0blByaW1hcnkpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYnRuUHJpbWFyeVRleHQpICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSBbY2xhc3NePVwiYnRuXCJdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuUHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1idG5QcmltYXJ5VGV4dCkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuY3VzdG9tIFtjbGFzc149XCJpbnB1dF9lcnJvck1lc3NhZ2VfXzE2eXhIXCJdIHtcbiAgICAgICAgICAgIGNvbG9yOiByZWQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICAuY3VycmVudC1wcm9kdWN0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJnQnRuUHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jdXN0b20gLnJlYWN0LWF1dG9zdWdnZXN0X19pbnB1dDo6cGxhY2Vob2xkZXIgeyAgXG4gICAgICAgICAgICBjb2xvcjogJHtmb250TGlnaHRlcn07XG4gICAgICAgIH1cbiAgICAgICAgLmN1c3RvbSAucmVhY3QtYXV0b3N1Z2dlc3RfX2lucHV0IHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiQ2F0YW1hcmFuXCIsIHNhbnMtc2VyaWY7XG4gICAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjllbTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGNvbG9yOiAke2ZvbnRMaWdodGVyfTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNTY1NjU2O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1yZXBvcnRfZGl2Q29udGVudF9fMlUxWEsge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmdCdG5QcmltYXJ5KSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2FyZF90ZXh0LWJvcmRlcl9fYUlRUloge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHRDb2xvcikgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jYXJkX2JvcmRlci1wcm9kdWN0X18zcEtLUyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dENvbG9yKSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucHJvZHVjdC1yZXBvcnRfdGFnc19fT0cydm4ge1xuICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtmb250TGlnaHRlcn07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wcm9kdWN0LXJlcG9ydF9idG5Ub2dnbGVfXzFJUjdPIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpICFpbXBvcnRhbnQ7IFxuICAgICAgICAgIH1cbiAgICBgXG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByZWFjdC1nb29nbGUtbWFwcy9hcGlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnMvbG9jYWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImxvY2FsU3RvcmFnZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2guZ2V0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=