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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_session_management__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/session-management */ "./utils/session-management.ts");
var _jsxFileName = "C:\\Users\\hgm\\Desktop\\Maquina3B\\ManDoc\\Proyectos\\Php\\DashBoard\\SVN\\Develop\\pricecheck-dashboard\\pages\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  componentDidMount() {
    Object(_utils_session_management__WEBPACK_IMPORTED_MODULE_1__["validateSession"])('/home');
  }
  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 7
      }
    });
  }
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4Iiwid2VicGFjazovLy8uL3V0aWxzL3Nlc3Npb24tbWFuYWdlbWVudC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiSG9tZSIsIkNvbXBvbmVudCIsImNvbXBvbmVudERpZE1vdW50IiwidmFsaWRhdGVTZXNzaW9uIiwicmVuZGVyIiwiX19qc3giLCJfX3NlbGYiLCJfX3NvdXJjZSIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsImNyZWF0ZVNlc3Npb24iLCJ0b2tlbiIsIm5hbWUiLCJyb2wiLCJwcm9maWxlUGljdHJlIiwiaWQiLCJkYXJrX3RoZW1lIiwidGhlbWUiLCJsb2dvIiwibG9jYWxlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImpvaW4iLCJ0b1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJsZW5ndGgiLCJkZWxldGVTZXNzaW9uIiwicmVtb3ZlSXRlbSIsImdldFRva2VuIiwiZ2V0SXRlbSIsImdldE5hbWUiLCJnZXRJZCIsImdldERhcmtUaGVtZSIsImdldExvY2FsZSIsImlzQnJvd3NlciIsImhhc0xvY2FsZSIsImdldFByb2ZpbGVQaWN0dXJlIiwiZ2V0Um9sZXMiLCJyb2xlcyIsInNwbGl0IiwibmV3Um91dGUiLCJSb3V0ZXIiLCJwdXNoIiwiZ2V0SGVhZGVyIiwiQXV0aG9yaXphdGlvbiIsInZhbGlkYXRlSXNBbmFseXN0Iiwicm9sZSIsInZhbGlkYXRpb24iLCJ2YWxpZGF0ZUlzQWRtaW4iLCJnZXRMb2dvIiwiSXNDdXN0b21UaGVtZSIsImlzQ3VzdG9tIiwib2JqVGhlbWUiLCJnZXRUaGVtZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGd0M7QUFFcUI7QUFFN0QsTUFBTUEsSUFBSSxTQUFTQywrQ0FBUyxDQUFDO0VBRTNCQyxpQkFBaUJBLENBQUEsRUFBRztJQUNsQkMsaUZBQWUsQ0FBQyxPQUFPLENBQUM7RUFDMUI7RUFFQUMsTUFBTUEsQ0FBQSxFQUFHO0lBQ1AsT0FDRUMsS0FBQTtNQUFBQyxNQUFBO01BQUFDLFFBQUE7UUFBQUMsUUFBQSxFQUFBQyxZQUFBO1FBQUFDLFVBQUE7UUFBQUMsWUFBQTtNQUFBO0lBQUEsRUFBVztFQUVmO0FBQ0Y7QUFFZVgsbUVBQUksRTs7Ozs7Ozs7Ozs7O0FDakJuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnQztBQUVoQyxNQUFNWSxhQUFhLEdBQUdBLENBQUNDLEtBQWEsRUFBRUMsSUFBWSxFQUFFQyxHQUFrQixFQUFFQyxhQUFxQixFQUFFQyxFQUFVLEVBQUVDLFVBQW1CLEVBQUVDLEtBQVcsRUFBRUMsSUFBYSxFQUFHQyxNQUFlLEtBQUs7RUFDN0tDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sRUFBRVYsS0FBSyxDQUFDO0VBQ3BDUyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEVBQUVULElBQUksQ0FBQztFQUNsQ1EsWUFBWSxDQUFDQyxPQUFPLENBQUMsS0FBSyxFQUFFUixHQUFHLENBQUNTLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztFQUMxQ0YsWUFBWSxDQUFDQyxPQUFPLENBQUMsSUFBSSxFQUFFTixFQUFFLENBQUM7RUFDOUJLLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLFlBQVksRUFBRUwsVUFBVSxDQUFDTyxRQUFRLEVBQUUsQ0FBQztFQUN6REgsWUFBWSxDQUFDQyxPQUFPLENBQUMsUUFBUSxFQUFFRixNQUFNLENBQUM7RUFFdEMsSUFBSUYsS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDQSxLQUFLLEVBQUU7SUFDMUJHLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sRUFBRUcsSUFBSSxDQUFDQyxTQUFTLENBQUNSLEtBQUssQ0FBQyxDQUFDO0VBQ3hELENBQUMsTUFBTTtJQUNIRyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUVHLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7RUFDckQ7RUFDQSxJQUFJWCxhQUFhLElBQUlBLGFBQWEsQ0FBQ1ksTUFBTSxHQUFHLENBQUMsRUFBRTtJQUMzQ04sWUFBWSxDQUFDQyxPQUFPLENBQUMsZ0JBQWdCLEVBQUcsc0RBQXFEUCxhQUFjLEVBQUMsQ0FBQztFQUNqSDtFQUNBLElBQUdJLElBQUksSUFBSUEsSUFBSSxDQUFDUSxNQUFNLEdBQUcsQ0FBQyxFQUFFO0lBQ3hCTixZQUFZLENBQUNDLE9BQU8sQ0FBQyxNQUFNLEVBQUcsMERBQXlESCxJQUFLLEVBQUMsQ0FBQztFQUNsRyxDQUFDLE1BQU07SUFDSEUsWUFBWSxDQUFDQyxPQUFPLENBQUMsTUFBTSxFQUFHLGVBQWMsQ0FBQztFQUNqRDtBQUNKLENBQUM7QUFFRCxNQUFNTSxhQUFhLEdBQUdBLENBQUEsS0FBTTtFQUN4QlAsWUFBWSxDQUFDUSxVQUFVLENBQUMsUUFBUSxDQUFDO0VBQ2pDUixZQUFZLENBQUNRLFVBQVUsQ0FBQyxZQUFZLENBQUM7RUFDckNSLFlBQVksQ0FBQ1EsVUFBVSxDQUFDLE9BQU8sQ0FBQztFQUNoQ1IsWUFBWSxDQUFDUSxVQUFVLENBQUMsTUFBTSxDQUFDO0VBQy9CUixZQUFZLENBQUNRLFVBQVUsQ0FBQyxLQUFLLENBQUM7RUFDOUJSLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE1BQU0sRUFBRyxlQUFjLENBQUM7RUFDN0NELFlBQVksQ0FBQ1EsVUFBVSxDQUFDLGdCQUFnQixDQUFDO0VBQ3pDUixZQUFZLENBQUNRLFVBQVUsQ0FBQyxPQUFPLENBQUM7QUFDcEMsQ0FBQztBQUVELE1BQU1DLFFBQVEsR0FBR0EsQ0FBQSxLQUFxQlQsWUFBWSxDQUFDVSxPQUFPLENBQUMsT0FBTyxDQUFDO0FBR25FLE1BQU1DLE9BQU8sR0FBR0EsQ0FBQSxLQUFxQlgsWUFBWSxDQUFDVSxPQUFPLENBQUMsTUFBTSxDQUFDO0FBRWpFLE1BQU1FLEtBQUssR0FBR0EsQ0FBQSxLQUFxQlosWUFBWSxDQUFDVSxPQUFPLENBQUMsSUFBSSxDQUFDO0FBRTdELE1BQU1HLFlBQVksR0FBR0EsQ0FBQSxLQUFXYixZQUFZLENBQUNVLE9BQU8sQ0FBQyxZQUFZLENBQUM7QUFDbEUsTUFBTUksU0FBUyxHQUFHQSxDQUFBLEtBQVc7RUFDekIsTUFBTUMsU0FBUyxHQUFHQSxDQUFBLFVBQW1DO0VBQ3JELE1BQU1DLFNBQVMsR0FBR0EsQ0FBQSxLQUFNaEIsWUFBWSxDQUFDVSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSztFQUUvRCxJQUFJWCxNQUFNLEdBQUcsSUFBSTtFQUVqQixJQUFJZ0IsU0FBUyxFQUFFLElBQUlDLFNBQVMsRUFBRSxFQUFFO0lBQzVCakIsTUFBTSxHQUFJQyxZQUFZLENBQUNVLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSVgsTUFBTTtFQUN0RDtFQUVBLE9BQU9BLE1BQU07QUFDakIsQ0FBQztBQUVELE1BQU1rQixpQkFBaUIsR0FBR0EsQ0FBQSxLQUFxQmpCLFlBQVksQ0FBQ1UsT0FBTyxDQUFDLGdCQUFnQixDQUFDO0FBRXJGLE1BQU1RLFFBQVEsR0FBR0EsQ0FBQSxLQUE0QjtFQUN6QyxNQUFNQyxLQUFLLEdBQUduQixZQUFZLENBQUNVLE9BQU8sQ0FBQyxLQUFLLENBQUM7RUFDekMsSUFBSVMsS0FBSyxFQUNMLE9BQU9BLEtBQUssQ0FBQ0MsS0FBSyxDQUFDLEdBQUcsQ0FBQztFQUUzQixPQUFPLElBQUk7QUFDZixDQUFDO0FBRUQsTUFBTXZDLGVBQWUsR0FBSXdDLFFBQWlCLElBQUs7RUFDM0MsSUFBSSxDQUFDckIsWUFBWSxDQUFDVSxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7SUFDaENZLGtEQUFNLENBQUNDLElBQUksQ0FBQyxRQUFRLENBQUM7RUFDekIsQ0FBQyxNQUFNLElBQUlGLFFBQVEsRUFBRTtJQUNqQkMsa0RBQU0sQ0FBQ0MsSUFBSSxDQUFDRixRQUFRLENBQUM7RUFDekI7QUFDSixDQUFDO0FBRUQsTUFBTUcsU0FBUyxHQUFHQSxDQUFBLEtBQWlDO0VBQy9DLE1BQU1qQyxLQUFLLEdBQUdTLFlBQVksQ0FBQ1UsT0FBTyxDQUFDLE9BQU8sQ0FBQztFQUMzQyxPQUFPO0lBQUVlLGFBQWEsRUFBRyxVQUFTbEMsS0FBTTtFQUFFLENBQUM7QUFDL0MsQ0FBQztBQUVELE1BQU1tQyxpQkFBaUIsR0FBR0EsQ0FBQSxLQUFNO0VBQzVCLElBQUlDLElBQUksR0FBRyxFQUFFO0VBQ2IsV0FBbUMsRUFJbEM7RUFDRCxNQUFNQyxVQUFVLEdBQUdELElBQUksS0FBSyxVQUFVO0VBQ3RDLE9BQU9DLFVBQVU7QUFDckIsQ0FBQztBQUVELE1BQU1DLGVBQWUsR0FBR0EsQ0FBQSxLQUFNO0VBQzFCLElBQUlGLElBQUksR0FBRyxFQUFFO0VBQ2IsV0FBbUMsRUFHbEM7RUFDRCxPQUFPQSxJQUFJLEtBQUssT0FBTztBQUMzQixDQUFDO0FBRUQsTUFBTUcsT0FBTyxHQUFHQSxDQUFBLEtBQU07RUFDbEIsSUFBSWhDLElBQUksR0FBRyxlQUFlO0VBQzFCLFdBQW1DLEVBSWxDO0VBQ0QsT0FBT0EsSUFBSTtBQUNmLENBQUM7QUFDRCxNQUFNaUMsYUFBYSxHQUFHQSxDQUFBLEtBQU07RUFDeEIsSUFBSUMsUUFBUSxHQUFHLEtBQUs7RUFDcEIsSUFBSW5DLEtBQUssR0FBRyxFQUFFO0VBQ2QsSUFBSW9DLFFBQVEsR0FBRyxDQUFDLENBQUM7RUFDakIsV0FBbUMsRUFXbEM7RUFDRCxPQUFPRCxRQUFRO0FBQ25CLENBQUM7QUFFRCxNQUFNRSxRQUFRLEdBQUdBLENBQUEsS0FBTTtFQUNuQixJQUFJckMsS0FBSyxHQUFHLEVBQUU7RUFDZCxJQUFJb0MsUUFBUSxHQUFHLENBQUMsQ0FBQztFQUNqQixXQUFtQyxFQU1sQztFQUNELE9BQU9BLFFBQVE7QUFDbkIsQ0FBQzs7Ozs7Ozs7Ozs7O0FDM0lELHdDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHsgdmFsaWRhdGVTZXNzaW9uIH0gZnJvbSAnLi4vdXRpbHMvc2Vzc2lvbi1tYW5hZ2VtZW50J1xuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB2YWxpZGF0ZVNlc3Npb24oJy9ob21lJylcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj48L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZSIsImltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG5cbmNvbnN0IGNyZWF0ZVNlc3Npb24gPSAodG9rZW46IHN0cmluZywgbmFtZTogc3RyaW5nLCByb2w6IEFycmF5PHN0cmluZz4sIHByb2ZpbGVQaWN0cmU6IHN0cmluZywgaWQ6IHN0cmluZywgZGFya190aGVtZT86IG51bWJlciwgdGhlbWU/OiBhbnksIGxvZ28/OiBzdHJpbmcsICBsb2NhbGU/OiBzdHJpbmcpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbmFtZScsIG5hbWUpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JvbCcsIHJvbC5qb2luKCd8JykpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkJywgaWQpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RhcmtfdGhlbWUnLCBkYXJrX3RoZW1lLnRvU3RyaW5nKCkpXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvY2FsZScsIGxvY2FsZSlcblxuICAgIGlmICh0aGVtZSAhPT0gbnVsbCB8fCAhdGhlbWUpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RoZW1lJywgSlNPTi5zdHJpbmdpZnkodGhlbWUpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGhlbWUnLCBKU09OLnN0cmluZ2lmeSh7fSkpO1xuICAgIH1cbiAgICBpZiAocHJvZmlsZVBpY3RyZSAmJiBwcm9maWxlUGljdHJlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2ZpbGVQaWN0dXJlJywgYGh0dHBzOi8vY2RuLXByaWNlY2hlY2suc2ZvMi5kaWdpdGFsb2NlYW5zcGFjZXMuY29tLyR7cHJvZmlsZVBpY3RyZX1gKVxuICAgIH1cbiAgICBpZihsb2dvICYmIGxvZ28ubGVuZ3RoID4gMCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9nbycsIGBodHRwczovL2xhbXB0M2JkaWFnLmJsb2IuY29yZS53aW5kb3dzLm5ldC9wcmljZWNoZWNrdjIvJHtsb2dvfWApIFxuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dvJywgYC9pbWcvbG9nby5wbmdgKSBcbiAgICB9XG59XG5cbmNvbnN0IGRlbGV0ZVNlc3Npb24gPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xvY2FsZScpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2RhcmtfdGhlbWUnKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0b2tlbicpXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ25hbWUnKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdyb2wnKVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dvJywgYC9pbWcvbG9nby5wbmdgKSBcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgncHJvZmlsZVBpY3R1cmUnKVxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd0aGVtZScpXG59XG5cbmNvbnN0IGdldFRva2VuID0gKCk6IHN0cmluZyB8IG51bGwgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJylcblxuXG5jb25zdCBnZXROYW1lID0gKCk6IHN0cmluZyB8IG51bGwgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hbWUnKVxuXG5jb25zdCBnZXRJZCA9ICgpOiBzdHJpbmcgfCBudWxsID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpZCcpXG5cbmNvbnN0IGdldERhcmtUaGVtZSA9ICgpOiBhbnkgPT4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RhcmtfdGhlbWUnKVxuY29uc3QgZ2V0TG9jYWxlID0gKCk6IGFueSA9PiB7XG4gICAgY29uc3QgaXNCcm93c2VyID0gKCkgPT4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICBjb25zdCBoYXNMb2NhbGUgPSAoKSA9PiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxlJykgfHwgZmFsc2VcblxuICAgIGxldCBsb2NhbGUgPSAnZXMnO1xuXG4gICAgaWYgKGlzQnJvd3NlcigpICYmIGhhc0xvY2FsZSgpKSB7XG4gICAgICAgIGxvY2FsZSA9ICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9jYWxlJykgfHwgbG9jYWxlXG4gICAgfVxuXG4gICAgcmV0dXJuIGxvY2FsZVxufVxuXG5jb25zdCBnZXRQcm9maWxlUGljdHVyZSA9ICgpOiBzdHJpbmcgfCBudWxsID0+IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9maWxlUGljdHVyZScpXG5cbmNvbnN0IGdldFJvbGVzID0gKCk6IEFycmF5PHN0cmluZz4gfCBudWxsID0+IHtcbiAgICBjb25zdCByb2xlcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2wnKVxuICAgIGlmIChyb2xlcylcbiAgICAgICAgcmV0dXJuIHJvbGVzLnNwbGl0KCd8JylcblxuICAgIHJldHVybiBudWxsXG59XG5cbmNvbnN0IHZhbGlkYXRlU2Vzc2lvbiA9IChuZXdSb3V0ZT86IHN0cmluZykgPT4ge1xuICAgIGlmICghbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJykpIHtcbiAgICAgICAgUm91dGVyLnB1c2goJy9sb2dpbicpXG4gICAgfSBlbHNlIGlmIChuZXdSb3V0ZSkge1xuICAgICAgICBSb3V0ZXIucHVzaChuZXdSb3V0ZSlcbiAgICB9XG59XG5cbmNvbnN0IGdldEhlYWRlciA9ICgpOiB7IEF1dGhvcml6YXRpb246IHN0cmluZyB9ID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpXG4gICAgcmV0dXJuIHsgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAgfVxufVxuXG5jb25zdCB2YWxpZGF0ZUlzQW5hbHlzdCA9ICgpID0+IHtcbiAgICBsZXQgcm9sZSA9ICcnO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgcm9sZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyb2wnKTtcblxuICAgIH1cbiAgICBjb25zdCB2YWxpZGF0aW9uID0gcm9sZSA9PT0gJ0FuYWxpc3RhJztcbiAgICByZXR1cm4gdmFsaWRhdGlvbjtcbn1cblxuY29uc3QgdmFsaWRhdGVJc0FkbWluID0gKCkgPT4ge1xuICAgIGxldCByb2xlID0gJyc7XG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblxuICAgICAgICByb2xlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JvbCcpO1xuICAgIH1cbiAgICByZXR1cm4gcm9sZSA9PT0gJ0FkbWluJztcbn1cblxuY29uc3QgZ2V0TG9nbyA9ICgpID0+IHtcbiAgICBsZXQgbG9nbyA9IFwiL2ltZy9sb2dvLnBuZ1wiO1xuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cbiAgICAgICAgbG9nbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dvJyk7XG4gICAgICAgIHJldHVybiBsb2dvO1xuICAgIH1cbiAgICByZXR1cm4gbG9nbztcbn1cbmNvbnN0IElzQ3VzdG9tVGhlbWUgPSAoKSA9PiB7XG4gICAgbGV0IGlzQ3VzdG9tID0gZmFsc2U7XG4gICAgbGV0IHRoZW1lID0gXCJcIjtcbiAgICBsZXQgb2JqVGhlbWUgPSB7fVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IGhhc0RhcmtUaGVtZSA9IGdldERhcmtUaGVtZSgpID09PSAnMScgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIHRoZW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJyk7XG4gICAgICAgIGlmICh0aGVtZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgb2JqVGhlbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0aGVtZScpKSB8fCB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhvYmpUaGVtZSkubGVuZ3RoICE9PSAwICYmICFoYXNEYXJrVGhlbWUpIHtcbiAgICAgICAgICAgIGlzQ3VzdG9tID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBpc0N1c3RvbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXNDdXN0b207XG59XG5cbmNvbnN0IGdldFRoZW1lID0gKCkgPT4ge1xuICAgIGxldCB0aGVtZSA9IFwiXCI7XG4gICAgbGV0IG9ialRoZW1lID0ge31cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodGhlbWUgIT09IFwidW5kZWZpbmVkXCIgfHwgIXRoZW1lKSB7XG4gICAgICAgICAgICBvYmpUaGVtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RoZW1lJykpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG9ialRoZW1lO1xuICAgIH1cbiAgICByZXR1cm4gb2JqVGhlbWU7XG59XG5cbmV4cG9ydCB7XG4gICAgZ2V0TG9nbyxcbiAgICBJc0N1c3RvbVRoZW1lLFxuICAgIGNyZWF0ZVNlc3Npb24sXG4gICAgZGVsZXRlU2Vzc2lvbixcbiAgICBnZXRUb2tlbixcbiAgICBnZXROYW1lLFxuICAgIGdldFByb2ZpbGVQaWN0dXJlLFxuICAgIGdldFJvbGVzLFxuICAgIHZhbGlkYXRlU2Vzc2lvbixcbiAgICBnZXRIZWFkZXIsXG4gICAgZ2V0SWQsXG4gICAgZ2V0RGFya1RoZW1lLFxuICAgIGdldExvY2FsZSxcbiAgICB2YWxpZGF0ZUlzQW5hbHlzdCxcbiAgICBnZXRUaGVtZSxcbiAgICB2YWxpZGF0ZUlzQWRtaW4sXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9