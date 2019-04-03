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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/array/is-array */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/get-iterator */ "core-js/library/fn/get-iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js":
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/freeze */ "core-js/library/fn/object/freeze");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!*****************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!*********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!*****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/core-js/symbol/to-primitive.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/symbol/to-primitive.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/to-primitive */ "core-js/library/fn/symbol/to-primitive");

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/createClass.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/array/is-array */ "../node_modules/@babel/runtime-corejs2/core-js/array/is-array.js");
/* harmony import */ var _core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0__);

function _arrayWithHoles(arr) {
  if (_core_js_array_is_array__WEBPACK_IMPORTED_MODULE_0___default()(arr)) return arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js":
/*!******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!*************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!*********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!**********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js":
/*!**********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/get-iterator */ "../node_modules/@babel/runtime-corejs2/core-js/get-iterator.js");
/* harmony import */ var _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0__);

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _core_js_get_iterator__WEBPACK_IMPORTED_MODULE_0___default()(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js":
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread; });
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-descriptor */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    var ownKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_2___default()(source);

    if (typeof _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default.a === 'function') {
      ownKeys = ownKeys.concat(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_1___default()(source).filter(function (sym) {
        return _core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_0___default()(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      Object(_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(target, key, source[key]);
    });
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!*************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!***************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!****************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js":
/*!***************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ "../node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit */ "../node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nonIterableRest */ "../node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableRest.js");



function _slicedToArray(arr, i) {
  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || Object(_iterableToArrayLimit__WEBPACK_IMPORTED_MODULE_1__["default"])(arr, i) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _taggedTemplateLiteral; });
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-properties */ "../node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/freeze */ "../node_modules/@babel/runtime-corejs2/core-js/object/freeze.js");
/* harmony import */ var _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1__);


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_0___default()(strings, {
    raw: {
      value: _core_js_object_freeze__WEBPACK_IMPORTED_MODULE_1___default()(raw)
    }
  }));
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(/*! ../core-js/object/get-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js":
/*!******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/inherits.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(/*! ../core-js/object/create */ "../node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!*******************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js":
/*!***********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js":
/*!************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/setPrototypeOf.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ "../node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "../node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/fn/array/is-array.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.array.is-array */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js").Array.isArray;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.5' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js":
/*!***************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js":
/*!**************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_core.js");
var ctx = __webpack_require__(/*! ./_ctx */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ctx.js");
var hide = __webpack_require__(/*! ./_hide */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js":
/*!*********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js":
/*!**********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js":
/*!*******************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js":
/*!********************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js":
/*!******************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js":
/*!************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_cof.js");
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js":
/*!*************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js":
/*!****************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js":
/*!*********************************************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/es6.array.is-array.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(/*! ./_export */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Array', { isArray: __webpack_require__(/*! ./_is-array */ "../node_modules/@babel/runtime-corejs2/node_modules/core-js/library/modules/_is-array.js") });


/***/ }),

/***/ "../node_modules/@babel/runtime-corejs2/regenerator/index.js":
/*!*******************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/regenerator/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "regenerator-runtime");


/***/ }),

/***/ "../node_modules/next/app.js":
/*!***********************************!*\
  !*** ../node_modules/next/app.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "../node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "../node_modules/next/dist/client/link.js":
/*!************************************************!*\
  !*** ../node_modules/next/dist/client/link.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _stringify = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__(/*! url */ "url");

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var router_1 = __importStar(__webpack_require__(/*! next/router */ "next/router"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (true) {
  var warn = utils_1.execOnce(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]).isRequired,
    as: prop_types_1.default.oneOfType([prop_types_1.default.string, prop_types_1.default.object]),
    prefetch: prop_types_1.default.bool,
    replace: prop_types_1.default.bool,
    shallow: prop_types_1.default.bool,
    passHref: prop_types_1.default.bool,
    scroll: prop_types_1.default.bool,
    children: prop_types_1.default.oneOfType([prop_types_1.default.element, function (props, propName) {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

exports.default = Link;

/***/ }),

/***/ "../node_modules/next/dist/pages/_app.js":
/*!***********************************************!*\
  !*** ../node_modules/next/dist/pages/_app.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "../node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/possibleConstructorReturn.js"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/getPrototypeOf.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/inherits.js"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importStar(__webpack_require__(/*! react */ "react"));

var prop_types_1 = __importDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var utils_1 = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");

var router_1 = __webpack_require__(/*! next/router */ "next/router");

var App =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(App, _react_1$Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        router: router_1.makePublicRouterInstance(this.props.router)
      };
    } // Kept here for backwards compatibility.
    // When someone ended App they could call `super.componentDidCatch`. This is now deprecated.

  }, {
    key: "componentDidCatch",
    value: function componentDidCatch(err) {
      throw err;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          router = _this$props.router,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps;
      var url = createUrl(router);
      return react_1.default.createElement(Container, null, react_1.default.createElement(Component, (0, _assign.default)({}, pageProps, {
        url: url
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee(_ref) {
        var Component, router, ctx, pageProps;
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, router = _ref.router, ctx = _ref.ctx;
                _context.next = 3;
                return utils_1.loadGetInitialProps(Component, ctx);

              case 3:
                pageProps = _context.sent;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);
  return App;
}(react_1.Component);

App.childContextTypes = {
  router: prop_types_1.default.object
};
exports.default = App;

var Container =
/*#__PURE__*/
function (_react_1$Component2) {
  (0, _inherits2.default)(Container, _react_1$Component2);

  function Container() {
    (0, _classCallCheck2.default)(this, Container);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).apply(this, arguments));
  }

  (0, _createClass2.default)(Container, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.scrollToHash();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.scrollToHash();
    }
  }, {
    key: "scrollToHash",
    value: function scrollToHash() {
      var hash = window.location.hash;
      hash = hash ? hash.substring(1) : false;
      if (!hash) return;
      var el = document.getElementById(hash);
      if (!el) return; // If we call scrollIntoView() in here without a setTimeout
      // it won't scroll properly.

      setTimeout(function () {
        return el.scrollIntoView();
      }, 0);
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return Container;
}(react_1.Component);

exports.Container = Container;
var warnUrl = utils_1.execOnce(function () {
  if (true) {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  }
});

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var pathname = router.pathname,
      asPath = router.asPath,
      query = router.query;
  return {
    get query() {
      warnUrl();
      return query;
    },

    get pathname() {
      warnUrl();
      return pathname;
    },

    get asPath() {
      warnUrl();
      return asPath;
    },

    back: function back() {
      warnUrl();
      router.back();
    },
    push: function push(url, as) {
      warnUrl();
      return router.push(url, as);
    },
    pushTo: function pushTo(href, as) {
      warnUrl();
      var pushRoute = as ? href : null;
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: function replace(url, as) {
      warnUrl();
      return router.replace(url, as);
    },
    replaceTo: function replaceTo(href, as) {
      warnUrl();
      var replaceRoute = as ? href : null;
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

exports.createUrl = createUrl;

/***/ }),

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../store.js":
/*!*******************!*\
  !*** ../store.js ***!
  \*******************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reducers_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reducers/auth */ "./reducers/auth.js");
/* harmony import */ var reducers_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reducers/display */ "./reducers/display.js");
/* harmony import */ var reducers_flashMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reducers/flashMessage */ "./reducers/flashMessage.js");
/* harmony import */ var reducers_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reducers/user */ "./reducers/user.js");
/* harmony import */ var reducers_status__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reducers/status */ "./reducers/status.js");
/* harmony import */ var actions_display__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/display */ "./actions/display.js");












const logger = Object(redux_logger__WEBPACK_IMPORTED_MODULE_2__["createLogger"])({
  predicate: (getState, action) => action.type !== actions_display__WEBPACK_IMPORTED_MODULE_8__["SET_DIMENSIONS"],
});

function initializeStore(initialState = {}) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(
    Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
      authentication: reducers_auth__WEBPACK_IMPORTED_MODULE_3__["default"],
      display: reducers_display__WEBPACK_IMPORTED_MODULE_4__["default"],
      flashMessages: reducers_flashMessage__WEBPACK_IMPORTED_MODULE_5__["default"],
      isLoggingOut: reducers_auth__WEBPACK_IMPORTED_MODULE_3__["loggingOutReducer"],
      user: reducers_user__WEBPACK_IMPORTED_MODULE_6__["default"],
      status: reducers_status__WEBPACK_IMPORTED_MODULE_7__["default"],
    }),
    initialState,
    Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, logger),
  );
}


/***/ }),

/***/ "./actions/auth.js":
/*!*************************!*\
  !*** ./actions/auth.js ***!
  \*************************/
/*! exports provided: SET_AUTH_TOKEN, setAuthToken, SET_LOGGING_OUT, setLoggingOut, storeAuthInfo, logout, login, checkForAuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_AUTH_TOKEN", function() { return SET_AUTH_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setAuthToken", function() { return setAuthToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOGGING_OUT", function() { return SET_LOGGING_OUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoggingOut", function() { return setLoggingOut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeAuthInfo", function() { return storeAuthInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkForAuthToken", function() { return checkForAuthToken; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/user */ "./actions/user.js");
/* harmony import */ var utils_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/storage */ "./utils/storage.js");
/* harmony import */ var utils_http_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/http/auth */ "./utils/http/auth.js");







var SET_AUTH_TOKEN = 'SET_AUTH_TOKEN';
var setAuthToken = function setAuthToken(authToken) {
  return {
    type: SET_AUTH_TOKEN,
    authToken: authToken
  };
};
var SET_LOGGING_OUT = 'SET_LOGGING_OUT';
var setLoggingOut = function setLoggingOut(loggingOut) {
  return {
    type: SET_LOGGING_OUT,
    loggingOut: loggingOut
  };
}; // Stores the auth token in state and localStorage, and decodes and stores
// the user data stored in the token

var storeAuthInfo = function storeAuthInfo(authToken) {
  return function (dispatch) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
      var decodedToken = jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(authToken);
      var user = decodedToken.user;
      dispatch(setAuthToken(authToken));
      dispatch(Object(actions_user__WEBPACK_IMPORTED_MODULE_4__["setCurrentUser"])(user));
      Object(utils_storage__WEBPACK_IMPORTED_MODULE_5__["setLocalItem"])('authToken', authToken);
      resolve();
    });
  };
};
var logout = function logout() {
  return function (dispatch) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve) {
      dispatch(Object(actions_user__WEBPACK_IMPORTED_MODULE_4__["clearUserState"])());
      resolve();
    });
  };
};
var login = function login(_ref) {
  var username = _ref.username,
      password = _ref.password,
      _ref$redirect = _ref.redirect,
      redirect = _ref$redirect === void 0 ? true : _ref$redirect,
      router = _ref.router;
  return function (dispatch) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
      Object(utils_http_auth__WEBPACK_IMPORTED_MODULE_6__["login"])({
        username: username,
        password: password
      }).then(
      /*#__PURE__*/
      function () {
        var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
        /*#__PURE__*/
        _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
          var authToken;
          return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  authToken = res.data.authToken;
                  _context.next = 3;
                  return dispatch(storeAuthInfo(authToken));

                case 3:
                  if (redirect) {
                    router.push('/dashboard');
                  }

                  resolve(true);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x) {
          return _ref2.apply(this, arguments);
        };
      }()).catch(function (err) {
        return reject(err);
      });
    });
  };
};
var checkForAuthToken = function checkForAuthToken() {
  return function (dispatch) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(
    /*#__PURE__*/
    function () {
      var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(resolve) {
        var authToken;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                authToken = Object(utils_storage__WEBPACK_IMPORTED_MODULE_5__["getLocalItem"])('authToken');

                if (authToken) {
                  Object(utils_http_auth__WEBPACK_IMPORTED_MODULE_6__["refreshAuthToken"])(authToken).then(function (newToken) {
                    dispatch(storeAuthInfo(newToken));
                    resolve(newToken);
                  }).catch(function (err) {
                    var code = err.code;

                    if (code === 401) {
                      // We couldn't get a refresh token because our current credentials
                      // are invalid or expired, so clear them and sign us out
                      dispatch(logout());
                    }

                    resolve(null);
                  });
                } else {
                  resolve(null);
                }

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  };
};

/***/ }),

/***/ "./actions/display.js":
/*!****************************!*\
  !*** ./actions/display.js ***!
  \****************************/
/*! exports provided: SHOW_MODAL, showModal, CLOSE_MODAL, closeModal, RESET_MODAL, resetModal, SHOW_CHANGE_PASSWORD_MODAL, showChangePasswordModal, TOGGLE_MENU, toggleMenu, CLOSE_MENU, closeMenu, SET_DIMENSIONS, setDimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_MODAL", function() { return SHOW_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showModal", function() { return showModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MODAL", function() { return CLOSE_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_MODAL", function() { return RESET_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetModal", function() { return resetModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_CHANGE_PASSWORD_MODAL", function() { return SHOW_CHANGE_PASSWORD_MODAL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showChangePasswordModal", function() { return showChangePasswordModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOGGLE_MENU", function() { return TOGGLE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toggleMenu", function() { return toggleMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLOSE_MENU", function() { return CLOSE_MENU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeMenu", function() { return closeMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_DIMENSIONS", function() { return SET_DIMENSIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDimensions", function() { return setDimensions; });
var SHOW_MODAL = 'SHOW_MODAL';
var showModal = function showModal(isOpen, metaData) {
  return {
    type: SHOW_MODAL,
    isOpen: isOpen,
    metaData: metaData
  };
};
var CLOSE_MODAL = 'CLOSE_MODAL';
var closeModal = function closeModal() {
  return {
    type: CLOSE_MODAL
  };
};
var RESET_MODAL = 'RESET_MODAL';
var resetModal = function resetModal() {
  return {
    type: RESET_MODAL
  };
};
var SHOW_CHANGE_PASSWORD_MODAL = 'SHOW_CHANGE_PASSWORD_MODAL';
var showChangePasswordModal = function showChangePasswordModal() {
  var isOpen = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  return {
    type: SHOW_CHANGE_PASSWORD_MODAL,
    isOpen: isOpen
  };
};
var TOGGLE_MENU = 'TOGGLE_MENU';
var toggleMenu = function toggleMenu() {
  return {
    type: TOGGLE_MENU
  };
};
var CLOSE_MENU = 'CLOSE_MENU';
var closeMenu = function closeMenu() {
  return {
    type: CLOSE_MENU
  };
};
var SET_DIMENSIONS = 'SET_DIMENSIONS';
var setDimensions = function setDimensions(width, height) {
  return {
    type: SET_DIMENSIONS,
    width: width,
    height: height
  };
};

/***/ }),

/***/ "./actions/flashMessage.js":
/*!*********************************!*\
  !*** ./actions/flashMessage.js ***!
  \*********************************/
/*! exports provided: ADD_FLASH_MESSAGE, flashMessage, flashSuccess, flashError, REMOVE_FLASH_MESSAGE, removeFlashMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FLASH_MESSAGE", function() { return ADD_FLASH_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashMessage", function() { return flashMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashSuccess", function() { return flashSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashError", function() { return flashError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_FLASH_MESSAGE", function() { return REMOVE_FLASH_MESSAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeFlashMessage", function() { return removeFlashMessage; });
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ "uuid");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_text__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/text */ "./utils/text.js");


var ADD_FLASH_MESSAGE = 'ADD_FLASH_MESSAGE';
var flashMessage = function flashMessage(message) {
  var messageType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'success';
  var options = arguments.length > 2 ? arguments[2] : undefined;
  return {
    type: ADD_FLASH_MESSAGE,
    messageType: messageType,
    message: message,
    options: options,
    // used to remove specific message from store
    // on animationEnd and onDismissal
    id: uuid__WEBPACK_IMPORTED_MODULE_0___default()()
  };
};
var flashSuccess = function flashSuccess() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Success';
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (dispatch) {
    dispatch(flashMessage(message, 'success', opts));
  };
}; // Can be called with message arg
// OR
// without and use generic error message

var flashError = function flashError() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils_text__WEBPACK_IMPORTED_MODULE_1__["GENERAL_ERROR"];
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (dispatch) {
    dispatch(flashMessage(message, 'error', opts));
  };
};
var REMOVE_FLASH_MESSAGE = 'REMOVE_FLASH_MESSAGE';
var removeFlashMessage = function removeFlashMessage(id) {
  return {
    type: REMOVE_FLASH_MESSAGE,
    id: id
  };
};

/***/ }),

/***/ "./actions/status.js":
/*!***************************!*\
  !*** ./actions/status.js ***!
  \***************************/
/*! exports provided: SET_LOADED, setLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_LOADED", function() { return SET_LOADED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLoaded", function() { return setLoaded; });
var SET_LOADED = 'SET_LOADED';
var setLoaded = function setLoaded() {
  return {
    type: SET_LOADED
  };
};

/***/ }),

/***/ "./actions/user.js":
/*!*************************!*\
  !*** ./actions/user.js ***!
  \*************************/
/*! exports provided: SET_CURRENT_USER, setCurrentUser, CLEAR_CURRENT_USER, clearCurrentUser, clearUserState, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLEAR_CURRENT_USER", function() { return CLEAR_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearCurrentUser", function() { return clearCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearUserState", function() { return clearUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/storage */ "./utils/storage.js");
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/cookies */ "./utils/cookies.js");
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! actions/auth */ "./actions/auth.js");
/* harmony import */ var utils_http_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/http/user */ "./utils/http/user.js");





var SET_CURRENT_USER = 'SET_CURRENT_USER';
var setCurrentUser = function setCurrentUser(currentUser) {
  return {
    type: SET_CURRENT_USER,
    currentUser: currentUser
  };
};
var CLEAR_CURRENT_USER = 'CLEAR_CURRENT_USER';
var clearCurrentUser = function clearCurrentUser() {
  return {
    type: CLEAR_CURRENT_USER
  };
};
var clearUserState = function clearUserState() {
  return function (dispatch) {
    dispatch(clearCurrentUser());
    dispatch(Object(actions_auth__WEBPACK_IMPORTED_MODULE_3__["setAuthToken"])(null));
    Object(utils_storage__WEBPACK_IMPORTED_MODULE_1__["setLocalItem"])('authToken', null);
    Object(utils_cookies__WEBPACK_IMPORTED_MODULE_2__["setCookie"])('rememberMe', false); // reset rememberMe cookie
  };
};
var updateUser = function updateUser(data) {
  return function (dispatch, getState) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var authToken = getState().authentication.authToken;
      Object(utils_http_user__WEBPACK_IMPORTED_MODULE_4__["updateUser"])(authToken, data).then(resolve).catch(reject);
    });
  };
};
var deleteUser = function deleteUser() {
  return function (dispatch, getState) {
    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var authToken = getState().authentication.authToken;
      Object(utils_http_user__WEBPACK_IMPORTED_MODULE_4__["deleteUser"])(authToken).then(resolve).catch(reject);
    });
  };
};

/***/ }),

/***/ "./components/Aside.js":
/*!*****************************!*\
  !*** ./components/Aside.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_AsideSlider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/AsideSlider */ "./components/AsideSlider.js");
/* harmony import */ var utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/hooks/useClearTimeout */ "./utils/hooks/useClearTimeout.js");
/* harmony import */ var actions_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/display */ "./actions/display.js");
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/user */ "./actions/user.js");
/* harmony import */ var actions_flashMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/flashMessage */ "./actions/flashMessage.js");

var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/Aside.js";









var Aside = function Aside(props) {
  var dispatch = props.dispatch;
  var timeout;
  Object(utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_5__["default"])(timeout);

  var handleChangePassword = function handleChangePassword(evt) {
    evt.preventDefault();
    dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_6__["showChangePasswordModal"])());
    dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_6__["closeMenu"])());
  };

  var openAccountSettings = function openAccountSettings(evt) {
    evt.preventDefault();
    dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_6__["closeMenu"])());
  };

  var openDeleteAccount = function openDeleteAccount(evt) {
    evt.preventDefault(); // open up challengeModal

    var modal = {
      onSuccess: function onSuccess() {
        // send action to delete account
        dispatch(Object(actions_user__WEBPACK_IMPORTED_MODULE_7__["deleteUser"])()).then(function (isSuccess) {
          if (isSuccess) {
            dispatch(Object(actions_user__WEBPACK_IMPORTED_MODULE_7__["clearUserState"])());
            timeout = setTimeout(function () {
              dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_6__["closeModal"])());
              dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_8__["flashSuccess"])('User successfully deleted!'));
            }, 500);
          }
        }).catch(function (err) {
          // eslint-disable-next-line
          console.log({
            err: err
          });
          dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_8__["flashError"])());
        });
      },
      onCancel: function onCancel() {
        // optional callback
        // modal will close itself eitherway
        // eslint-disable-next-line
        console.log('onCancel');
      },
      renderPrompt: function renderPrompt() {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          style: {
            textAlign: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63
          },
          __self: this
        }, "Are you sure you want to delete this account?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        }, "This action is ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          style: {
            color: 'red'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 65
          },
          __self: this
        }, "PERMANENT"), "."));
      }
    };
    dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_6__["closeMenu"])());
    dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_6__["showModal"])(true, modal));
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_AsideSlider__WEBPACK_IMPORTED_MODULE_4__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    renderMenu: function renderMenu() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: handleChangePassword,
        href: "/change-password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Change My Password")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: openAccountSettings,
        href: "/account-settings",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Account Settings"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
        style: {
          color: 'red'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, "Dangerous!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        onClick: openDeleteAccount,
        href: "#!",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Delete Account"))));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }));
};

Aside.propTypes = {
  menuIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool.isRequired,
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(_ref) {
  var display = _ref.display;
  var menuIsOpen = display.menuIsOpen;
  return {
    menuIsOpen: menuIsOpen
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps)(Aside));

/***/ }),

/***/ "./components/AsideSlider.js":
/*!***********************************!*\
  !*** ./components/AsideSlider.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/icons/CloseIcon */ "./components/icons/CloseIcon.js");
/* harmony import */ var components_atoms_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atoms/IconButton */ "./components/atoms/IconButton.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(utils_theme__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/AsideSlider.js";







var AsideSlider = function AsideSlider(_ref) {
  var menuIsOpen = _ref.menuIsOpen,
      onRequestClose = _ref.onRequestClose,
      renderMenu = _ref.renderMenu;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    menuIsOpen: menuIsOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_atoms_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      alignSelf: 'flex-end'
    },
    SvgComponent: components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
    svgWidth: "30px",
    svgFill: utils_theme__WEBPACK_IMPORTED_MODULE_5__["colors"].Primary,
    svgHoverFill: "grey",
    onClick: onRequestClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, renderMenu()));
};

AsideSlider.propTypes = {
  menuIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  renderMenu: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (AsideSlider);
var distance = '-320px';
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "AsideSlider__Container",
  componentId: "sc-1paqsir-0"
})(["position:fixed;top:80px;top:0;right:", ";background-color:", ";background-color:#fff;color:", ";display:flex;flex-direction:column;flex:1;width:300px;height:100vh;padding:15px;border-top-left-radius:5px;border-bottom-left-radius:5px;z-index:10;transition:transform 0.5s,box-shadow 0.5s;box-shadow:-2px 5px 20px rgba(0,0,0,0.3);", ""], distance, function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.Secondary;
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.Primary;
}, function (_ref4) {
  var menuIsOpen = _ref4.menuIsOpen;
  return menuIsOpen && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["transform:translateX(", ");"], distance);
});
var MenuContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "AsideSlider__MenuContent",
  componentId: "sc-1paqsir-1"
})([""]);

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _SocialMediaIcons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SocialMediaIcons */ "./components/SocialMediaIcons.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/Footer.js";


 // // TODO: Will these be fetched dynamically?

var links = [{
  Platform: 'Facebook',
  Url: 'www.facebook.com'
}, {
  Platform: 'Twitter',
  Url: 'www.twitter.com'
}, {
  Platform: 'Google',
  Url: 'www.google.com'
}, {
  Platform: 'LinkedIn',
  Url: 'www.linkedin.com'
}, {
  Platform: 'Instagram',
  Url: 'www.instagram.com'
}];
var Footer = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InnerWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      color: 'lightgrey'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Copyright \xA9 The Virtual Forge 2019"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_SocialMediaIcons__WEBPACK_IMPORTED_MODULE_2__["default"], {
    links: links,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })));
});
/* harmony default export */ __webpack_exports__["default"] = (Footer);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.footer.withConfig({
  displayName: "Footer__Container",
  componentId: "qhytvz-0"
})(["background-color:", ";background-color:#fff;color:#fff;height:80px;box-shadow:0 0 30px -5px rgba(0,0,0,0.2);box-shadow:0 0px 20px -8px rgba(0,0,0,0.5);"], function (_ref) {
  var theme = _ref.theme;
  return theme.colors.Primary;
});
var InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__InnerWrapper",
  componentId: "qhytvz-1"
})(["display:flex;justify-content:space-between;align-items:center;height:100%;max-width:1200px;margin:0 auto;padding-left:10px;padding-right:10px;@media screen and (min-width:700px){padding-left:30px;padding-right:30px;}"]);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var static_img_React_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! static/img/React.svg */ "./static/img/React.svg");
/* harmony import */ var static_img_React_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(static_img_React_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var components_icons_settings__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/icons/settings */ "./components/icons/settings.js");
/* harmony import */ var components_atoms_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/atoms/IconButton */ "./components/atoms/IconButton.js");
/* harmony import */ var actions_flashMessage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! actions/flashMessage */ "./actions/flashMessage.js");
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! actions/auth */ "./actions/auth.js");
/* harmony import */ var actions_display__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! actions/display */ "./actions/display.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(utils_theme__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/cookies */ "./utils/cookies.js");
/* harmony import */ var utils_hooks_useResize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! utils/hooks/useResize */ "./utils/hooks/useResize.js");


var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/Header.js";















var type = '';
var renderFlashButtons = null; // handles logout res action

var handleLogout =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var router, dispatch;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            router = _ref.router, dispatch = _ref.dispatch;
            _context.next = 3;
            return dispatch(Object(actions_auth__WEBPACK_IMPORTED_MODULE_12__["logout"])());

          case 3:
            _context.next = 5;
            return router.push('/login');

          case 5:
            dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_11__["flashMessage"])('Successfully logged out!'));

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function handleLogout(_x) {
    return _ref2.apply(this, arguments);
  };
}();

var HeaderPropTypes = {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  user: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object,
  router: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
};

var renderLoginSignup = function renderLoginSignup(_ref3) {
  var user = _ref3.user,
      router = _ref3.router,
      dispatch = _ref3.dispatch;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    color: "#000",
    type: "button",
    onClick: function onClick(evt) {
      return router.push('/login');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Log In"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    color: "#000",
    type: "button",
    onClick: function onClick(evt) {
      return router.push('/signup');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, "Sign Up"));
};

var renderDashboardHeader = function renderDashboardHeader(_ref4) {
  var user = _ref4.user,
      router = _ref4.router,
      dispatch = _ref4.dispatch;

  var _useResize = Object(utils_hooks_useResize__WEBPACK_IMPORTED_MODULE_16__["default"])(),
      width = _useResize.width;

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, width < 700 ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_atoms_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    SvgComponent: components_icons_settings__WEBPACK_IMPORTED_MODULE_9__["SettingsBurger"],
    svgWidth: "30px",
    svgFill: utils_theme__WEBPACK_IMPORTED_MODULE_14__["colors"].Primary,
    svgHoverFill: "grey",
    onClick: function onClick(evt) {
      return dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_13__["toggleMenu"])());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/dashboard",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Name, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Welcome, ", user.username))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Divider, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    type: "button",
    onClick: function onClick(evt) {
      return handleLogout({
        router: router,
        dispatch: dispatch
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Log Out")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Vertical, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_atoms_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
    SvgComponent: components_icons_settings__WEBPACK_IMPORTED_MODULE_9__["Cog"],
    svgWidth: "1.7rem",
    svgFill: utils_theme__WEBPACK_IMPORTED_MODULE_14__["colors"].Primary,
    svgHoverFill: "grey",
    onClick: function onClick(evt) {
      return dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_13__["toggleMenu"])());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })));
};

var Header = Object(react__WEBPACK_IMPORTED_MODULE_2__["memo"])(function (_ref5) {
  var user = _ref5.user,
      dispatch = _ref5.dispatch,
      router = _ref5.router;
  var _props = {
    user: user,
    router: router,
    dispatch: dispatch
  };
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InnerWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Image, {
    src: static_img_React_svg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, user ? renderDashboardHeader(_props) : renderLoginSignup(_props))));
});
renderLoginSignup.propTypes = HeaderPropTypes;
renderDashboardHeader.propTypes = HeaderPropTypes;
Header.propTypes = HeaderPropTypes;

var mapStateToProps = function mapStateToProps(_ref6) {
  var user = _ref6.user;
  return {
    user: user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Header)));
var LOGO_WIDTH = '80px';
var Container = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.header.withConfig({
  displayName: "Header__Container",
  componentId: "sc-1isb4n6-0"
})(["height:80px;box-shadow:0 0px 20px -8px rgba(0,0,0,0.5);a{text-decoration:none;color:inherit;}"]);
var Image = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.img.withConfig({
  displayName: "Header__Image",
  componentId: "sc-1isb4n6-1"
})(["height:45px;width:auto;"]);
var InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Header__InnerWrapper",
  componentId: "sc-1isb4n6-2"
})(["background-color:#fff;display:flex;justify-content:space-between;align-items:center;height:100%;padding-left:10px;padding-right:10px;display:flex;justify-content:space-between;align-items:center;max-width:1400px;margin:0 auto;@media screen and (min-width:700px){padding-left:30px;padding-right:30px;}"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Header__Wrapper",
  componentId: "sc-1isb4n6-3"
})(["display:flex;justify-content:flex-end;flex:1;color:", ";"], utils_theme__WEBPACK_IMPORTED_MODULE_14__["colors"].Blue);
var Vertical = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.div.withConfig({
  displayName: "Header__Vertical",
  componentId: "sc-1isb4n6-4"
})(["position:relative;width:20px;&::after{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);content:'';background-color:", ";height:100%;width:0.5px;}"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.colors.Primary;
}); // const LoginSignupWrapper = styled(Wrapper)``;
// const DashHeadWrapper = styled(Wrapper)``;

var Text = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.p.withConfig({
  displayName: "Header__Text",
  componentId: "sc-1isb4n6-5"
})(["color:", ";display:flex;justify-content:space-between;align-items:center;font-size:0.8rem;margin:0;"], function (_ref8) {
  var theme = _ref8.theme;
  return theme.colors.Primary;
});
var Name = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.span.withConfig({
  displayName: "Header__Name",
  componentId: "sc-1isb4n6-6"
})(["", ";max-width:calc(100vw - ", " - ", " - 20px);"], function (_ref9) {
  var theme = _ref9.theme;
  return theme.styles.ellipsisMask;
}, LOGO_WIDTH, LOGO_WIDTH);
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.span.withConfig({
  displayName: "Header__Divider",
  componentId: "sc-1isb4n6-7"
})(["margin-left:6px;margin-right:6px;&::before{content:'/';color:", ";}"], function (_ref10) {
  var theme = _ref10.theme;
  return theme.colors.Primary;
});
var Button = styled_components__WEBPACK_IMPORTED_MODULE_7___default.a.button.withConfig({
  displayName: "Header__Button",
  componentId: "sc-1isb4n6-8"
})(["background-color:transparent;color:", ";font-size:inherit;text-transform:uppercase;margin:0;padding:0;min-width:55px;border:none;outline:none;cursor:pointer;transition:all 0.2s;&:hover{color:grey;}"], function (_ref11) {
  var color = _ref11.color,
      theme = _ref11.theme;
  return color || theme.colors.Primary;
});

renderFlashButtons = function renderFlashButtons(dispatch) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
    onSubmit: function onSubmit(evt) {
      evt.preventDefault();
      var value = evt.target.elements[0].value;
      dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_11__["flashMessage"])(value, type, {
        defaultLabel: true,
        top: true
      }));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    name: "my-input",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), " test me!", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    onClick: function onClick(evt) {
      type = 'success';
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }, "Success!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    onClick: function onClick(evt) {
      type = 'error';
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, "Error!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    onClick: function onClick(evt) {
      type = 'warning';
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }, "Warning!"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    type: "submit",
    onClick: function onClick(evt) {
      type = 'general';
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }, "General!"))));
};

/***/ }),

/***/ "./components/LoadingScreen.js":
/*!*************************************!*\
  !*** ./components/LoadingScreen.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(utils_theme__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var better_react_spinkit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! better-react-spinkit */ "better-react-spinkit");
/* harmony import */ var better_react_spinkit__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(better_react_spinkit__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/LoadingScreen.js";






var LoadingScreen = function LoadingScreen(_ref) {
  var loaded = _ref.loaded,
      bgColor = _ref.bgColor;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(loaded ? 0 : 1),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      opacity = _useState2[0],
      setOpacity = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setOpacity(loaded ? 0 : 1);
  }, [loaded]);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    opacity: opacity,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SpinnerWrapper, {
    cover: true,
    bgColor: bgColor,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SpinnerText, {
    color: "cornflowerblue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Loading..."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(better_react_spinkit__WEBPACK_IMPORTED_MODULE_5__["FoldingCube"], {
    color: "cornflowerblue",
    size: 70,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  })));
};

LoadingScreen.propTypes = {
  loaded: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoadingScreen);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "LoadingScreen__Container",
  componentId: "sc-18f3wdq-0"
})(["background-color:#fff;color:#fff;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;z-index:110;visibility:", ";opacity:", ";transition:background-color 0.3s,opacity 0.3s,visibility 0s linear ", ";"], function (_ref2) {
  var opacity = _ref2.opacity;
  return opacity ? 'visible' : 'hidden';
}, function (_ref3) {
  var opacity = _ref3.opacity;
  return opacity;
}, function (_ref4) {
  var opacity = _ref4.opacity;
  return opacity ? '0s' : '0.5s';
});
var SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "LoadingScreen__SpinnerWrapper",
  componentId: "sc-18f3wdq-1"
})(["position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;z-index:5;", ""], function (_ref5) {
  var cover = _ref5.cover,
      bgColor = _ref5.bgColor;
  return cover ? Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["top:0;left:0;right:0;bottom:0;background-color:", ";"], bgColor) : Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["css"])(["top:50%;left:50%;transform:translate(-50%,-50%);"]);
});
var SpinnerText = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.p.withConfig({
  displayName: "LoadingScreen__SpinnerText",
  componentId: "sc-18f3wdq-2"
})(["color:", ";margin:0;padding:0;text-transform:uppercase;"], function (_ref6) {
  var color = _ref6.color;
  return color;
});

/***/ }),

/***/ "./components/SocialMediaIcons.js":
/*!****************************************!*\
  !*** ./components/SocialMediaIcons.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/SocialMediaIcons.js";




var SocialMediaIcons = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var links = _ref.links;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialMediaLinks, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, links && links.map(function (_ref2) {
    var Platform = _ref2.Platform,
        Url = _ref2.Url;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: Platform,
      href: Url,
      passHref: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SocialMediaIcon, {
      className: "fa fa-".concat(Platform.toLowerCase()),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })));
  }));
});
SocialMediaIcons.propTypes = {
  links: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SocialMediaIcons);
var SocialMediaLinks = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "SocialMediaIcons__SocialMediaLinks",
  componentId: "sc-1107xmb-0"
})(["display:flex;align-items:center;justify-content:space-between;a{line-height:0;}"]);
var SocialMediaIcon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.i.withConfig({
  displayName: "SocialMediaIcons__SocialMediaIcon",
  componentId: "sc-1107xmb-1"
})(["cursor:pointer;font-size:0.8rem;margin:auto 5px;transition:color 0.3s;color:white;&:hover{color:lightgrey;}"]);

/***/ }),

/***/ "./components/Spinner.js":
/*!*******************************!*\
  !*** ./components/Spinner.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(utils_theme__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var better_react_spinkit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! better-react-spinkit */ "better-react-spinkit");
/* harmony import */ var better_react_spinkit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(better_react_spinkit__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/Spinner.js";






var Spinner =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Spinner, _Component);

  function Spinner() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Spinner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Spinner)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      opacity: _this.props.noFadeIn ? 1 : 0
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "timeout", null);

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidMount", function () {
      var fadeIn = _this.props.fadeIn;

      if (fadeIn) {
        _this.timeout = setTimeout(function () {
          _this.setState({
            opacity: 1
          });
        }, 50);
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentDidUpdate", function (prevProps) {
      var loading = _this.props.loading;

      if (prevProps.loading !== loading) {
        _this.setState({
          opacity: loading ? 1 : 0
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "componentWillUnmount", function () {
      clearTimeout(_this.timeout);
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Spinner, [{
    key: "render",
    value: function render() {
      var opacity = this.state.opacity;
      var _this$props = this.props,
          loadingText = _this$props.loadingText,
          cover = _this$props.cover,
          _this$props$SpinnerIc = _this$props.SpinnerIcon,
          SpinnerIcon = _this$props$SpinnerIc === void 0 ? better_react_spinkit__WEBPACK_IMPORTED_MODULE_11__["FoldingCube"] : _this$props$SpinnerIc,
          bgOpacity = _this$props.bgOpacity,
          _this$props$iconSize = _this$props.iconSize,
          iconSize = _this$props$iconSize === void 0 ? 60 : _this$props$iconSize,
          _this$props$iconColor = _this$props.iconColor,
          iconColor = _this$props$iconColor === void 0 ? utils_theme__WEBPACK_IMPORTED_MODULE_10__["colors"].Blue : _this$props$iconColor,
          _this$props$textColor = _this$props.textColor,
          textColor = _this$props$textColor === void 0 ? utils_theme__WEBPACK_IMPORTED_MODULE_10__["colors"].Blue : _this$props$textColor;
      var bgColor = this.props.bgColor || "rgba(0,0,0,".concat(bgOpacity || 0.3, ")");
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SpinnerWrapper, {
        cover: cover,
        bgColor: bgColor,
        opacity: opacity,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SpinnerText, {
        color: textColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, loadingText, "..."), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(SpinnerIcon, {
        color: iconColor,
        size: iconSize,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }));
    }
  }]);

  return Spinner;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Spinner.propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool.isRequired,
  loadingText: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string.isRequired,
  noFadeIn: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  // starts with full opacity
  fadeIn: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  // fades in onDidMount
  cover: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  iconSize: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number,
  iconColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  textColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  bgColor: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  SpinnerIcon: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  bgOpacity: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (Spinner);
var SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "Spinner__SpinnerWrapper",
  componentId: "sc-1izyvkc-0"
})(["position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;visibility:", ";opacity:", ";transition:background-color 0.3s,opacity 0.3s,visibility 0s linear ", ";z-index:5;", ""], function (_ref) {
  var opacity = _ref.opacity;
  return opacity ? 'visible' : 'hidden';
}, function (_ref2) {
  var opacity = _ref2.opacity;
  return opacity;
}, function (_ref3) {
  var opacity = _ref3.opacity;
  return opacity ? '0s' : '0.5s';
}, function (_ref4) {
  var cover = _ref4.cover,
      bgColor = _ref4.bgColor;
  return cover ? Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(["top:0;left:0;right:0;bottom:0;background-color:", ";"], bgColor) : Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(["top:50%;left:50%;transform:translate(-50%,-50%);"]);
});
var SpinnerText = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.p.withConfig({
  displayName: "Spinner__SpinnerText",
  componentId: "sc-1izyvkc-1"
})(["color:", ";margin:0;padding:0;text-transform:uppercase;"], function (_ref5) {
  var color = _ref5.color;
  return color;
});

/***/ }),

/***/ "./components/atoms/Button.js":
/*!************************************!*\
  !*** ./components/atoms/Button.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(utils_theme__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! utils/propTypes */ "./utils/propTypes.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/atoms/Button.js";





var Button = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var className = _ref.className,
      children = _ref.children,
      onClick = _ref.onClick,
      onMouseEnter = _ref.onMouseEnter,
      width = _ref.width,
      style = _ref.style,
      type = _ref.type,
      label = _ref.label,
      buttonBgColor = _ref.buttonBgColor,
      disabled = _ref.disabled;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledButton, {
    disabled: disabled,
    className: className,
    type: type || 'button',
    style: style,
    onClick: onClick,
    onMouseEnter: onMouseEnter,
    buttonBgColor: buttonBgColor,
    width: width,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, children, label);
});
Button.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node]),
  type: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  width: utils_propTypes__WEBPACK_IMPORTED_MODULE_4__["SizeTypes"],
  buttonBgColor: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onMouseEnter: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  style: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  className: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Button);
var StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "Button__StyledButton",
  componentId: "sc-3xlb8a-0"
})(["background-color:", ";color:", ";font-size:0.7rem;text-transform:uppercase;border:none;width:", ";padding:0.55rem;border-radius:3px;cursor:pointer;transition:0.2s all;outline:none;", " &:hover{opacity:0.75;}&:active{color:", ";}"], function (_ref2) {
  var buttonBgColor = _ref2.buttonBgColor;
  return buttonBgColor || utils_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].Primary;
}, utils_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].Button.color, function (_ref3) {
  var width = _ref3.width;
  return width || '140px';
}, function (_ref4) {
  var disabled = _ref4.disabled;
  return disabled && Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["opacity:0.75;pointer-events:none;"]);
}, utils_theme__WEBPACK_IMPORTED_MODULE_3__["colors"].Button.active);

/***/ }),

/***/ "./components/atoms/IconButton.js":
/*!****************************************!*\
  !*** ./components/atoms/IconButton.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/atoms/IconButton.js";



var IconButton = Object(react__WEBPACK_IMPORTED_MODULE_0__["memo"])(function (_ref) {
  var SvgComponent = _ref.SvgComponent,
      svgWidth = _ref.svgWidth,
      svgFill = _ref.svgFill,
      svgHoverFill = _ref.svgHoverFill,
      style = _ref.style,
      styledCss = _ref.styledCss,
      svgStyle = _ref.svgStyle,
      label = _ref.label,
      _onClick = _ref.onClick,
      disabled = _ref.disabled;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
    type: "button",
    style: style,
    styledCss: styledCss,
    disabled: disabled,
    onClick: function onClick(evt) {
      return !disabled && _onClick(evt);
    },
    svgFill: svgFill,
    svgHoverFill: svgHoverFill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgComponent, {
    width: svgWidth,
    style: svgStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), label && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, label));
});
IconButton.propTypes = {
  SvgComponent: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  svgWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number]).isRequired,
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  svgFill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  svgHoverFill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool]),
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  svgStyle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  styledCss: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any
};
/* harmony default export */ __webpack_exports__["default"] = (IconButton);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "IconButton__Button",
  componentId: "y3dxwt-0"
})(["background-color:transparent;border:none;outline:none;cursor:", ";pointer-events:", ";svg{fill:", ";transition:fill 0.3s;&:hover{fill:", ";}}", ""], function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled ? 'default' : 'pointer';
}, function (_ref3) {
  var disabled = _ref3.disabled;
  return disabled ? 'none' : 'all';
}, function (_ref4) {
  var svgFill = _ref4.svgFill,
      disabled = _ref4.disabled;
  return disabled ? 'rgba(0,0,0,0.5)' : svgFill;
}, function (_ref5) {
  var svgHoverFill = _ref5.svgHoverFill;
  return svgHoverFill;
}, function (_ref6) {
  var styledCss = _ref6.styledCss;
  return styledCss;
});

/***/ }),

/***/ "./components/flashMessages/FlashMessage.js":
/*!**************************************************!*\
  !*** ./components/flashMessages/FlashMessage.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.capitalize */ "lodash.capitalize");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! color */ "color");
/* harmony import */ var color__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(color__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_icons_Checkmark__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/icons/Checkmark */ "./components/icons/Checkmark.js");
/* harmony import */ var components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/icons/CloseIcon */ "./components/icons/CloseIcon.js");
/* harmony import */ var components_icons_Exclamation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/icons/Exclamation */ "./components/icons/Exclamation.js");
/* harmony import */ var components_icons_Information__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/icons/Information */ "./components/icons/Information.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(utils_theme__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! utils/hooks */ "./utils/hooks/index.js");
/* harmony import */ var utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! utils/hooks/useClearTimeout */ "./utils/hooks/useClearTimeout.js");
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/propTypes */ "./utils/propTypes.js");


var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/flashMessages/FlashMessage.js";












 // const {
//   system: { ERROR, SUCCESS, SUCCESS_TEXT, WARNING, GENERAL },
// } = colors;

var ANIMATION = 600; // opacity/fade animation duration (ms)

var MESSAGE_DURATION = 5000; // duration (ms) message is fully visible

var renderIcon = function renderIcon(fill, messageType, options) {
  var IconComponent;
  var width = 19;

  switch (messageType) {
    case 'success':
      IconComponent = components_icons_Checkmark__WEBPACK_IMPORTED_MODULE_7__["default"];
      break;

    case 'error':
      IconComponent = components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_8__["CloseIconAlt"];
      width = 15;
      break;

    case 'warning':
      IconComponent = components_icons_Exclamation__WEBPACK_IMPORTED_MODULE_9__["ExclamationFilled"];
      width = 18;
      break;

    case 'general':
      IconComponent = components_icons_Information__WEBPACK_IMPORTED_MODULE_10__["default"];
      break;

    default:
  }

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IconWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(IconComponent, {
    width: width,
    fill: fill,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), options && options.defaultLabel && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, lodash_capitalize__WEBPACK_IMPORTED_MODULE_2___default()(messageType), ".."));
};

var FlashMessage = function FlashMessage(_ref) {
  var message = _ref.message,
      messageType = _ref.messageType,
      options = _ref.options,
      removeMessage = _ref.removeMessage;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      opacity = _useState2[0],
      setOpacity = _useState2[1];

  var faderTimeout;
  var timeout;

  var fadeOut = function fadeOut() {
    // fade message out
    setOpacity(0); // then remove it from state

    timeout = setTimeout(function () {
      removeMessage();
    }, ANIMATION);
  };

  Object(utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_13__["default"])(timeout);
  Object(utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_13__["default"])(faderTimeout);
  Object(utils_hooks__WEBPACK_IMPORTED_MODULE_12__["useComponentDidMount"])(function () {
    setOpacity(1);
    faderTimeout = setTimeout(fadeOut, MESSAGE_DURATION);
  });
  var TYPE = messageType.toUpperCase();
  var bgColor = utils_theme__WEBPACK_IMPORTED_MODULE_11__["colors"].system[TYPE];
  var color = color__WEBPACK_IMPORTED_MODULE_6___default()(bgColor).darken(0.3).string();
  var borderColor = color__WEBPACK_IMPORTED_MODULE_6___default()(bgColor).darken(0.15).string();
  var marginLeft = options && options.defaultLabel ? '25px' : '0';
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(WrapperBtn, {
    bgColor: bgColor,
    borderColor: borderColor,
    color: color,
    opacity: opacity,
    onClick: fadeOut,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, renderIcon(color, messageType, options), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Text, {
    style: {
      color: color,
      marginLeft: marginLeft
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, message));
};

FlashMessage.propTypes = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, utils_propTypes__WEBPACK_IMPORTED_MODULE_14__["flashMessageTypes"], {
  removeMessage: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.func.isRequired
});
/* harmony default export */ __webpack_exports__["default"] = (FlashMessage);
var WrapperBtn = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.li.withConfig({
  displayName: "FlashMessage__WrapperBtn",
  componentId: "k70gqj-0"
})(["", ";color:", ";background-color:", ";opacity:", ";border:1px solid ", ";display:flex;align-items:center;height:40px;width:80%;max-width:400px;margin-top:2px;margin-bottom:2px;border-radius:5px;border:none;outline:none;pointer-events:", ";transition:opacity ", "ms,background-color ", "ms;&:active{background-color:", ";}h2{margin:0;padding:0;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.styles.boxShadows[1];
}, function (_ref3) {
  var color = _ref3.color;
  return color;
}, function (_ref4) {
  var bgColor = _ref4.bgColor;
  return bgColor;
}, function (_ref5) {
  var opacity = _ref5.opacity;
  return opacity;
}, function (_ref6) {
  var borderColor = _ref6.borderColor;
  return borderColor;
}, function (_ref7) {
  var opacity = _ref7.opacity;
  return opacity ? 'all' : 'none';
}, ANIMATION, ANIMATION, function (_ref8) {
  var bgColor = _ref8.bgColor;
  return color__WEBPACK_IMPORTED_MODULE_6___default()(bgColor).lighten(0.1).string();
});
var IconWrapper = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "FlashMessage__IconWrapper",
  componentId: "k70gqj-1"
})(["display:flex;justify-content:center;align-items:center;width:50px;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.p.withConfig({
  displayName: "FlashMessage__Text",
  componentId: "k70gqj-2"
})(["margin:0;padding:0;"]);

/***/ }),

/***/ "./components/flashMessages/index.js":
/*!*******************************************!*\
  !*** ./components/flashMessages/index.js ***!
  \*******************************************/
/*! exports provided: FlashMessages, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlashMessages", function() { return FlashMessages; });
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash.map */ "lodash.map");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var actions_flashMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! actions/flashMessage */ "./actions/flashMessage.js");
/* harmony import */ var utils_helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/helpers */ "./utils/helpers.js");
/* harmony import */ var utils_hooks_useScrollTop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! utils/hooks/useScrollTop */ "./utils/hooks/useScrollTop.js");
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! utils/propTypes */ "./utils/propTypes.js");
/* harmony import */ var _FlashMessage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./FlashMessage */ "./components/flashMessages/FlashMessage.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/flashMessages/index.js";










var FlashMessages = function FlashMessages(_ref) {
  var dispatch = _ref.dispatch,
      messages = _ref.messages;
  var scrollTop = Object(utils_hooks_useScrollTop__WEBPACK_IMPORTED_MODULE_7__["default"])();

  var renderMessage = function renderMessage(_ref2, id) {
    var message = _ref2.message,
        messageType = _ref2.messageType,
        options = _ref2.options;

    var removeMessage = function removeMessage() {
      dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_5__["removeFlashMessage"])(id));
    };

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_FlashMessage__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: id,
      id: id,
      message: message,
      messageType: messageType,
      removeMessage: removeMessage,
      options: options,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: this
    });
  };

  renderMessage.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_8__["flashMessageTypes"];
  var from = [0, 150];
  var to = [80, 0];
  var target = scrollTop;
  var output = Object(utils_helpers__WEBPACK_IMPORTED_MODULE_6__["mapRange"])({
    from: from,
    to: to,
    target: target
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    output: output,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MessageList, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, messages && lodash_map__WEBPACK_IMPORTED_MODULE_0___default()(messages, function (message, key) {
    return renderMessage(message, key);
  })));
};
FlashMessages.propTypes = {
  messages: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

var mapstateToProps = function mapstateToProps(_ref3) {
  var flashMessages = _ref3.flashMessages;
  return {
    messages: flashMessages
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapstateToProps)(FlashMessages));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "flashMessages__Container",
  componentId: "sc-1evsgfc-0"
})(["background-color:transparent;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;transition:transform 0.5s;z-index:100;", ""], function (_ref4) {
  var output = _ref4.output;
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["transform:translateY(", "px);"], output);
});
var MessageList = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.ul.withConfig({
  displayName: "flashMessages__MessageList",
  componentId: "sc-1evsgfc-1"
})(["", " ", " padding:0;margin:0;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.styles.grow;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.styles.middle;
});

/***/ }),

/***/ "./components/formik/ChangePasswordFormik.js":
/*!***************************************************!*\
  !*** ./components/formik/ChangePasswordFormik.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var components_atoms_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/atoms/Button */ "./components/atoms/Button.js");
/* harmony import */ var actions_flashMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! actions/flashMessage */ "./actions/flashMessage.js");
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/user */ "./actions/user.js");
/* harmony import */ var utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/hooks/useClearTimeout */ "./utils/hooks/useClearTimeout.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/formik/ChangePasswordFormik.js";










var errorStyles = {
  color: 'red',
  marginLeft: '7px',
  marginTop: '7px'
};

var renderField = function renderField(type, name, placeholder) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
    type: type,
    name: name,
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
    name: name,
    component: "div",
    style: errorStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};

var ChangePasswordFormik = function ChangePasswordFormik(_ref) {
  var dispatch = _ref.dispatch,
      router = _ref.router,
      onRequestClose = _ref.onRequestClose,
      bindResetForm = _ref.bindResetForm,
      setLoading = _ref.setLoading,
      setLoadingText = _ref.setLoadingText,
      doneLoading = _ref.doneLoading;
  var submitText = 'submitText';
  var timeoutSubmit;
  Object(utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_9__["default"])(timeoutSubmit);
  var timeoutReset;
  Object(utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_9__["default"])(timeoutReset);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormikContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      password: '',
      newPassword: '',
      rePassword: '',
      checkbox: false
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.password) {
        errors.password = 'Required';
      } else if (!values.newPassword) {
        errors.newPassword = 'Required';
      } else if (values.newPassword.length < 10) {
        errors.newPassword = 'Password must be a minimum of 10 characters.';
      } else if (!values.rePassword) {
        errors.rePassword = 'Required';
      } else if (values.newPassword !== values.rePassword) {
        errors.rePassword = 'Passwords must match.';
      }

      return errors;
    },
    onSubmit: function onSubmit(values, _ref2) {
      var setSubmitting = _ref2.setSubmitting,
          setFieldValue = _ref2.setFieldValue,
          setFieldError = _ref2.setFieldError,
          resetForm = _ref2.resetForm;
      setLoading(true);
      setLoadingText('Updating password...');
      timeoutSubmit = setTimeout(function () {
        doneLoading();
        var userCreds = {
          password: values.password,
          newPassword: values.newPassword
        };
        dispatch(Object(actions_user__WEBPACK_IMPORTED_MODULE_8__["updateUser"])(userCreds)).then(function (res) {
          onRequestClose();
          dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_7__["flashSuccess"])('Successfully updated password!'));
          timeoutReset = setTimeout(resetForm, 400);
        }).catch(function (error) {
          if (error.code === 401) {
            setFieldError('password', 'Password Incorrect.');
          }

          if (error.message) {
            dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_7__["flashError"])(error.message));
          } else {
            dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_7__["flashError"])());
          }
        });
        setSubmitting(false);
      }, 400);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, function (_ref3) {
    var isSubmitting = _ref3.isSubmitting,
        errors = _ref3.errors,
        touched = _ref3.touched,
        submitCount = _ref3.submitCount,
        resetForm = _ref3.resetForm;
    bindResetForm(resetForm);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputsWrapper, {
      hasError: errors.server,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, renderField('password', 'password', 'Current Password'), renderField('password', 'newPassword', 'New Password'), renderField('password', 'rePassword', 'Re-enter New Password')), errors.server && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServerError, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, errors.server)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Controls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomBtnWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_atoms_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: "100%",
      style: {
        borderRadius: '3px'
      },
      onClick: onRequestClose,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomBtnWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_atoms_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      width: "100%",
      style: {
        borderRadius: '3px'
      },
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, submitText || 'Submit')))));
  }));
};

ChangePasswordFormik.propTypes = {
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  bindResetForm: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  doneLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  setLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  setLoadingText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ChangePasswordFormik)));
var FormikContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ChangePasswordFormik__FormikContainer",
  componentId: "sc-1fbq0j7-0"
})(["", ";text-align:left;form{", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.styles.grow;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.styles.grow;
});
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ChangePasswordFormik__Flex",
  componentId: "sc-1fbq0j7-1"
})(["", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.styles.grow;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ChangePasswordFormik__Container",
  componentId: "sc-1fbq0j7-2"
})(["", ";"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.styles.grow;
});
var InputsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ChangePasswordFormik__InputsWrapper",
  componentId: "sc-1fbq0j7-3"
})(["border-left:5px solid transparent;padding:2px;transition:border-color 0.3s;", ""], function (_ref8) {
  var hasError = _ref8.hasError;
  return hasError && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["border-color:'red';"]);
});
var ServerError = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ChangePasswordFormik__ServerError",
  componentId: "sc-1fbq0j7-4"
})(["color:'red';"]);
var FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ChangePasswordFormik__FieldWrapper",
  componentId: "sc-1fbq0j7-5"
})(["display:flex;flex-direction:column;&:not(:first-of-type){margin-top:15px;}input{font-size:1rem;line-height:1.5rem;padding-left:0.4rem;&::placeholder{opacity:0.4;}}"]);
var Controls = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ChangePasswordFormik__Controls",
  componentId: "sc-1fbq0j7-6"
})(["display:flex;justify-content:space-between;align-items:center;flex-direction:column;margin-top:10px;@media screen and (min-width:600px){flex-direction:row;}"]);
var BottomBtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "ChangePasswordFormik__BottomBtnWrapper",
  componentId: "sc-1fbq0j7-7"
})(["width:49%;@media screen and (max-width:599px){margin-top:15px;}"]);

/***/ }),

/***/ "./components/icons/Checkmark.js":
/*!***************************************!*\
  !*** ./components/icons/Checkmark.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/propTypes */ "./utils/propTypes.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/icons/Checkmark.js";



var Checkmark = function Checkmark(_ref) {
  var fill = _ref.fill,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: style,
    width: width,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 847 847",
    fillRule: "evenodd",
    clipRule: "evenodd",
    shapeRendering: "geometricPrecision",
    textRendering: "geometricPrecision",
    imageRendering: "optimizeQuality",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M294 566l448-448 81 81-529 530L23 459l82-82z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }));
};

Checkmark.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
/* harmony default export */ __webpack_exports__["default"] = (Checkmark);

/***/ }),

/***/ "./components/icons/CloseIcon.js":
/*!***************************************!*\
  !*** ./components/icons/CloseIcon.js ***!
  \***************************************/
/*! exports provided: CloseIconAlt, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseIconAlt", function() { return CloseIconAlt; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/propTypes */ "./utils/propTypes.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/icons/CloseIcon.js";



var CloseIcon = function CloseIcon(_ref) {
  var fill = _ref.fill,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: style,
    width: width,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M7.969 5.91a2 2 0 0 0-1.375 3.437l40.593 40.594L6.594 90.535a2 2 0 1 0 2.812 2.812L50 52.754l40.594 40.593a2 2 0 1 0 2.812-2.812L52.812 49.94 93.406 9.347A2 2 0 0 0 91.97 5.91a2 2 0 0 0-1.375.625L50 47.128 9.406 6.535A2 2 0 0 0 7.97 5.91z",
    fillRule: "evenodd",
    overflow: "visible",
    color: "#000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

var CloseIconAlt = function CloseIconAlt(_ref2) {
  var fill = _ref2.fill,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '100%' : _ref2$width,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: style,
    width: width,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 512 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M511.987 83.318L428.726.041l-172.71 172.712L83.29.009.013 83.288l172.742 172.743L.013 428.713 83.29 511.99l172.726-172.711 172.71 172.68 83.261-83.246-172.71-172.682z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }));
};
CloseIcon.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
CloseIconAlt.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
/* harmony default export */ __webpack_exports__["default"] = (CloseIcon);

/***/ }),

/***/ "./components/icons/Exclamation.js":
/*!*****************************************!*\
  !*** ./components/icons/Exclamation.js ***!
  \*****************************************/
/*! exports provided: ExclamationFilled, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExclamationFilled", function() { return ExclamationFilled; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/icons/Exclamation.js";



var Exclamation = function Exclamation(_ref) {
  var fill = _ref.fill,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: style,
    width: width,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 1024 1024",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M596.3 659.9H427.7l20 20-5.1-58.8c-4.1-47.2-8.2-94.4-12.2-141.7-4.9-57-9.8-113.9-14.8-170.9-4.3-49.3-8.5-98.7-12.8-148-2.1-23.8-3.2-47.8-6.2-71.5 0-.3-.1-.6-.1-1l-20 20h270.9l-20-20-5.1 58.8c-4.1 47.2-8.2 94.4-12.2 141.7-4.9 57-9.8 113.9-14.8 170.9-4.3 49.3-8.5 98.7-12.8 148-2.1 23.8-5 47.7-6.2 71.5 0 .3-.1.6-.1 1-.9 10.5 9.8 20.5 20 20 11.6-.5 19-8.8 20-20l5.1-58.8c4.1-47.2 8.2-94.4 12.2-141.7 4.9-57 9.8-113.9 14.8-170.9 4.3-49.3 8.5-98.7 12.8-148 2.1-23.8 5-47.7 6.2-71.5 0-.3.1-.6.1-1 .9-10.8-9.9-20-20-20H376.5c-10.1 0-20.9 9.2-20 20l5.1 58.8c4.1 47.2 8.2 94.4 12.2 141.7 4.9 57 9.8 113.9 14.8 170.9 4.3 49.3 8.5 98.7 12.8 148 2.1 23.8 3.9 47.7 6.2 71.5 0 .3.1.6.1 1 .9 10.8 8.4 20 20 20h168.6c10.5 0 20.5-9.2 20-20s-8.8-20-20-20zM596.3 916H427.7l20 20V788.5v-21.1l-20 20h168.6l-20-20V936c0 10.5 9.2 20.5 20 20s20-8.8 20-20V788.5v-21.1c0-10.8-9.2-20-20-20H427.7c-10.8 0-20 9.2-20 20V936c0 10.8 9.2 20 20 20h168.6c10.5 0 20.5-9.2 20-20-.5-10.9-8.8-20-20-20z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

var ExclamationFilled = function ExclamationFilled(_ref2) {
  var fill = _ref2.fill,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '100%' : _ref2$width,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: style,
    width: width,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 64 64",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M40.727 4.313A1 1 0 0 0 40 4H24a1 1 0 0 0-.999 1.056l2 36A1 1 0 0 0 26 42h12a1 1 0 0 0 .999-.944l2-36a1 1 0 0 0-.272-.743zM38 46H26a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V47a1 1 0 0 0-1-1z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }));
};
var SVGPropTypes = {
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
Exclamation.propTypes = SVGPropTypes;
ExclamationFilled.propTypes = SVGPropTypes;
/* harmony default export */ __webpack_exports__["default"] = (Exclamation);

/***/ }),

/***/ "./components/icons/Information.js":
/*!*****************************************!*\
  !*** ./components/icons/Information.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/icons/Information.js";



var Information = function Information(_ref) {
  var fill = _ref.fill,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: style,
    width: width,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 75 75",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M50.02 63.977l-.95 3.882c-2.847 1.125-5.125 1.98-6.82 2.57-1.695.59-3.668.883-5.914.883-3.45 0-6.133-.843-8.047-2.523-1.914-1.684-2.871-3.82-2.871-6.41 0-1.004.07-2.035.215-3.086.144-1.05.375-2.238.691-3.563l3.563-12.601c.316-1.207.586-2.352.8-3.434.22-1.074.325-2.062.325-2.953 0-1.61-.332-2.734-.996-3.367-.664-.633-1.93-.953-3.809-.953-.922 0-1.867.148-2.832.433-.969.286-1.797.563-2.492.82l.953-3.886a89.597 89.597 0 0 1 6.695-2.437c2.133-.676 4.149-1.016 6.055-1.016 3.426 0 6.07.828 7.926 2.484 1.855 1.657 2.785 3.805 2.785 6.453 0 .547-.063 1.512-.192 2.891-.128 1.383-.367 2.648-.714 3.8L40.844 54.52a33.56 33.56 0 0 0-.778 3.457c-.234 1.289-.347 2.273-.347 2.933 0 1.668.37 2.805 1.117 3.41.75.606 2.043.907 3.879.907.863 0 1.844-.153 2.933-.454 1.09-.3 1.883-.566 2.372-.796zm.902-52.704c0 2.188-.824 4.055-2.48 5.59-1.653 1.543-3.645 2.313-5.973 2.313-2.336 0-4.332-.77-6.004-2.313-1.668-1.535-2.504-3.402-2.504-5.59 0-2.183.836-4.054 2.504-5.609 1.668-1.555 3.668-2.328 6.004-2.328 2.328 0 4.32.777 5.972 2.328 1.657 1.555 2.48 3.426 2.48 5.61zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};

Information.propTypes = {
  fill: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  width: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number])
};
/* harmony default export */ __webpack_exports__["default"] = (Information);

/***/ }),

/***/ "./components/icons/settings.js":
/*!**************************************!*\
  !*** ./components/icons/settings.js ***!
  \**************************************/
/*! exports provided: SettingsBurger, Cog, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsBurger", function() { return SettingsBurger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cog", function() { return Cog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/propTypes */ "./utils/propTypes.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/icons/settings.js";


var SettingsBurger = function SettingsBurger(_ref) {
  var fill = _ref.fill,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 32 32",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M29 8v2H8v3H6v-3H3V8h3V5h2v3zm-3 4h-2v3H3v2h21v3h2v-3h3v-2h-3zm-9 7h-2v3H3v2h12v3h2v-3h12v-2H17z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};
var Cog = function Cog(_ref2) {
  var fill = _ref2.fill,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '100%' : _ref2$width,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M38.36 51.15a2.49 2.49 0 1 0 0-5 15.47 15.47 0 1 0 15.47 15.49 2.49 2.49 0 1 0-5 0 10.49 10.49 0 1 1-10.47-10.49z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M6.4 70.26l3.71.65a29.54 29.54 0 0 0 1.72 4.15l-2.16 3.08a6.49 6.49 0 0 0 .73 8.33l3.13 3.13a6.49 6.49 0 0 0 8.33.73l3.08-2.16a29.63 29.63 0 0 0 4.15 1.72l.65 3.71a6.49 6.49 0 0 0 6.41 5.4h4.43A6.49 6.49 0 0 0 47 93.6l.65-3.71a29.58 29.58 0 0 0 4.15-1.72l3.08 2.16a6.49 6.49 0 0 0 8.33-.73l3.13-3.13a6.49 6.49 0 0 0 .73-8.33l-2.16-3.08a29.6 29.6 0 0 0 1.72-4.15l3.71-.65a2.49 2.49 0 1 0-.86-4.9l-5.22.92a2.49 2.49 0 0 0-2 1.8A24.62 24.62 0 0 1 59.81 74a2.49 2.49 0 0 0 .12 2.67L63 81a1.53 1.53 0 0 1-.17 2l-3.13 3.13a1.53 1.53 0 0 1-2 .17l-4.34-3a2.49 2.49 0 0 0-2.67-.12 24.59 24.59 0 0 1-5.9 2.45 2.49 2.49 0 0 0-1.8 2l-.92 5.22a1.53 1.53 0 0 1-1.5 1.15h-4.42a1.53 1.53 0 0 1-1.51-1.26l-.92-5.22a2.49 2.49 0 0 0-1.8-2A24.64 24.64 0 0 1 26 83.09a2.49 2.49 0 0 0-2.67.12l-4.34 3a1.53 1.53 0 0 1-2-.17L13.91 83a1.53 1.53 0 0 1-.17-2l3-4.34a2.49 2.49 0 0 0 .17-2.66 24.56 24.56 0 0 1-2.45-5.9 2.49 2.49 0 0 0-2-1.8l-5.22-.92A1.53 1.53 0 0 1 6 63.85v-4.42a1.53 1.53 0 0 1 1.26-1.51l5.22-.92a2.49 2.49 0 0 0 2-1.8 24.57 24.57 0 0 1 2.45-5.91 2.49 2.49 0 0 0-.12-2.67l-3-4.34a1.53 1.53 0 0 1 .17-2L17 37.19a1.53 1.53 0 0 1 2-.19l4.34 3a2.49 2.49 0 0 0 2.67.12 24.6 24.6 0 0 1 5.91-2.45 2.49 2.49 0 0 0 1.8-2l.92-5.22a2.49 2.49 0 0 0-4.9-.86l-.65 3.71a29.59 29.59 0 0 0-4.15 1.72l-3.08-2.16a6.49 6.49 0 0 0-8.33.73l-3.13 3.13a6.49 6.49 0 0 0-.72 8.33l2.16 3.08a29.56 29.56 0 0 0-1.72 4.15L6.4 53A6.49 6.49 0 0 0 1 59.43v4.43a6.49 6.49 0 0 0 5.4 6.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M95.34 29.12l-2.8-1.3a23.2 23.2 0 0 0-1.66-6.22l1.77-2.53a6.28 6.28 0 0 0-.7-8.05l-3-3a6.28 6.28 0 0 0-8.05-.7l-2.5 1.81a23.2 23.2 0 0 0-6.22-1.66l-1.3-2.8a6.28 6.28 0 0 0-7.33-3.42l-4 1.08A6.28 6.28 0 0 0 54.88 9l.27 3a23.67 23.67 0 0 0-4.55 4.55l-3.07-.27a6.28 6.28 0 0 0-6.62 4.63l-1.08 4a6.28 6.28 0 0 0 3.42 7.33l2.8 1.3a23.21 23.21 0 0 0 1.66 6.22l-1.77 2.53a6.28 6.28 0 0 0 .7 8.05l3 3a6.28 6.28 0 0 0 8.05.7l2.53-1.77A23.21 23.21 0 0 0 66.38 54l1.3 2.8A6.28 6.28 0 0 0 75 60.19l4-1.08a6.28 6.28 0 0 0 4.64-6.62l-.27-3.07a23.71 23.71 0 0 0 2.43-2.12 23.66 23.66 0 0 0 2.2-2.45l3.07.27a6.28 6.28 0 0 0 6.62-4.63l1.08-4a6.28 6.28 0 0 0-3.43-7.37zm-1.39 6l-1.08 4a1.31 1.31 0 0 1-1.38 1L87 39.77a2.49 2.49 0 0 0-2.29 1.11 18.65 18.65 0 0 1-5.25 5.25 2.49 2.49 0 0 0-1.11 2.29l.4 4.49a1.31 1.31 0 0 1-1 1.38l-4 1.08a1.31 1.31 0 0 1-1.53-.71l-1.91-4.1a2.49 2.49 0 0 0-2.11-1.43 18.33 18.33 0 0 1-7.2-1.91 2.49 2.49 0 0 0-2.54.19L54.79 50a1.31 1.31 0 0 1-1.68-.15l-3-3a1.31 1.31 0 0 1-.11-1.64l2.59-3.7a2.49 2.49 0 0 0 .19-2.51 18.33 18.33 0 0 1-1.92-7.16 2.49 2.49 0 0 0-1.43-2.11l-4.1-1.91a1.31 1.31 0 0 1-.71-1.53l1.08-4a1.31 1.31 0 0 1 1.38-1l4.49.4a2.49 2.49 0 0 0 2.29-1.11 18.65 18.65 0 0 1 5.25-5.25A2.49 2.49 0 0 0 60.23 13l-.4-4.49a1.31 1.31 0 0 1 1-1.38l4-1.08a1.31 1.31 0 0 1 1.53.71l1.91 4.1a2.49 2.49 0 0 0 2.11 1.43 18.33 18.33 0 0 1 7.16 1.92 2.49 2.49 0 0 0 2.55-.21l3.7-2.59a1.31 1.31 0 0 1 1.68.15l3 3a1.31 1.31 0 0 1 .15 1.68L86 19.91a2.49 2.49 0 0 0-.19 2.54 18.33 18.33 0 0 1 1.92 7.16 2.49 2.49 0 0 0 1.43 2.11l4.1 1.91a1.31 1.31 0 0 1 .74 1.53z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M69.29 20A10.71 10.71 0 1 0 80 30.71 10.73 10.73 0 0 0 69.29 20zm0 16.45A5.74 5.74 0 1 1 75 30.71a5.75 5.75 0 0 1-5.71 5.74z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }));
};
SettingsBurger.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
/* harmony default export */ __webpack_exports__["default"] = (SettingsBurger);

/***/ }),

/***/ "./components/modals/ChallengeModal.js":
/*!*********************************************!*\
  !*** ./components/modals/ChallengeModal.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_modals___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/modals/ */ "./components/modals/index.js");
/* harmony import */ var components_atoms_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/atoms/Button */ "./components/atoms/Button.js");
/* harmony import */ var actions_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! actions/display */ "./actions/display.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/modals/ChallengeModal.js";








var ChallengeModal = function ChallengeModal(_ref) {
  var closeThis = _ref.closeThis,
      renderPrompt = _ref.renderPrompt,
      isOpen = _ref.isOpen,
      onSuccess = _ref.onSuccess,
      onCancel = _ref.onCancel,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$loadingText = _ref.loadingText,
      loadingText = _ref$loadingText === void 0 ? 'Loading..' : _ref$loadingText,
      onRequestClose = _ref.onRequestClose;

  var handleCancel = function handleCancel(evt) {
    onCancel();
    closeThis();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_modals___WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    loading: loading,
    loadingText: loadingText,
    maxWidth: "400px",
    maxHeight: "260px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, renderPrompt && renderPrompt()), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Controls, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_atoms_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "45%",
    onClick: handleCancel,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_atoms_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: "45%",
    onClick: onSuccess,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "OK"))));
};

ChallengeModal.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  renderPrompt: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  closeThis: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  onSuccess: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  onCancel: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,
  loadingText: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    closeThis: function closeThis() {
      return dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_6__["closeModal"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps)(ChallengeModal));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ChallengeModal__Container",
  componentId: "zla1io-0"
})(["color:", ";display:flex;flex-direction:column;flex-grow:1;a{text-decoration:none;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.Primary;
});
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ChallengeModal__Flex",
  componentId: "zla1io-1"
})(["", ";", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.styles.grow;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.styles.middle;
});
var Controls = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ChallengeModal__Controls",
  componentId: "zla1io-2"
})(["display:flex;justify-content:space-between;"]);

/***/ }),

/***/ "./components/modals/ChangePasswordModal.js":
/*!**************************************************!*\
  !*** ./components/modals/ChangePasswordModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_modals___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/modals/ */ "./components/modals/index.js");
/* harmony import */ var components_formik_ChangePasswordFormik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/formik/ChangePasswordFormik */ "./components/formik/ChangePasswordFormik.js");

var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/modals/ChangePasswordModal.js";






var ChangePasswordModal = function ChangePasswordModal(_ref) {
  var isOpen = _ref.isOpen,
      _onRequestClose = _ref.onRequestClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Loading ...'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      loadingText = _useState4[0],
      setLoadingText = _useState4[1];

  var doneLoading = function doneLoading() {
    setLoading(false);
    setLoadingText('');
  };

  var resetForm;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_modals___WEBPACK_IMPORTED_MODULE_4__["default"], {
    clickOutsideClose: false,
    isOpen: isOpen,
    onRequestClose: function onRequestClose() {
      resetForm();

      _onRequestClose();
    },
    loading: loading,
    loadingText: loadingText,
    maxWidth: "400px",
    maxHeight: "260px",
    renderLabel: function renderLabel() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "Change Password"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formik_ChangePasswordFormik__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onRequestClose: _onRequestClose,
    doneLoading: doneLoading,
    setLoading: setLoading,
    setLoadingText: setLoadingText,
    bindResetForm: function bindResetForm(_resetForm) {
      resetForm = _resetForm;
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })));
};

ChangePasswordModal.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ChangePasswordModal);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ChangePasswordModal__Container",
  componentId: "sc-13duaqb-0"
})(["color:", ";display:flex;flex-direction:column;flex-grow:1;a{text-decoration:none;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.Primary;
});
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "ChangePasswordModal__Flex",
  componentId: "sc-13duaqb-1"
})(["", ";", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.styles.grow;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.styles.middle;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2.withConfig({
  displayName: "ChangePasswordModal__Title",
  componentId: "sc-13duaqb-2"
})(["color:", ";margin:0;padding:0;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.Primary;
});

/***/ }),

/***/ "./components/modals/index.js":
/*!************************************!*\
  !*** ./components/modals/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/icons/CloseIcon */ "./components/icons/CloseIcon.js");
/* harmony import */ var components_atoms_IconButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/atoms/IconButton */ "./components/atoms/IconButton.js");
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Spinner */ "./components/Spinner.js");
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! utils/propTypes */ "./utils/propTypes.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/modals/index.js";








var Modal = function Modal(_ref) {
  var children = _ref.children,
      isOpen = _ref.isOpen,
      onRequestClose = _ref.onRequestClose,
      width = _ref.width,
      height = _ref.height,
      maxHeight = _ref.maxHeight,
      maxWidth = _ref.maxWidth,
      containerStyles = _ref.containerStyles,
      modalStyles = _ref.modalStyles,
      renderLabel = _ref.renderLabel,
      _ref$clickOutsideClos = _ref.clickOutsideClose,
      clickOutsideClose = _ref$clickOutsideClos === void 0 ? true : _ref$clickOutsideClos,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      _ref$loadingText = _ref.loadingText,
      loadingText = _ref$loadingText === void 0 ? '' : _ref$loadingText;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    isOpen: isOpen,
    onClick: function onClick(evt) {
      return clickOutsideClose && onRequestClose();
    },
    style: containerStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ModalWrapper, {
    style: modalStyles,
    width: width,
    height: height,
    maxWidth: maxWidth,
    maxHeight: maxHeight,
    onClick: function onClick(evt) {
      return evt.stopPropagation();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cover: true,
    loading: loading,
    loadingText: loadingText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, renderLabel && renderLabel(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_atoms_IconButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: {
      position: 'absolute',
      top: '16px',
      right: '10px'
    },
    onClick: onRequestClose,
    SvgComponent: components_icons_CloseIcon__WEBPACK_IMPORTED_MODULE_3__["default"],
    svgWidth: "30px",
    svgFill: "cornflowerblue",
    svgHoverFill: "grey",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, children)));
};

Modal.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  clickOutsideClose: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  renderLabel: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func,
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any,
  width: utils_propTypes__WEBPACK_IMPORTED_MODULE_6__["SizeTypes"],
  height: utils_propTypes__WEBPACK_IMPORTED_MODULE_6__["SizeTypes"],
  maxHeight: utils_propTypes__WEBPACK_IMPORTED_MODULE_6__["SizeTypes"],
  maxWidth: utils_propTypes__WEBPACK_IMPORTED_MODULE_6__["SizeTypes"],
  containerStyles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  modalStyles: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  loadingText: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Modal);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "modals__Container",
  componentId: "efqzlp-0"
})(["background-color:rgba(0,0,0,0.5);position:fixed;top:0;left:0;right:0;bottom:0;display:flex;justify-content:center;align-items:center;visibility:hidden;opacity:0;transition:opacity 0.3s,visibility 0.3s ease 0.3s;z-index:20;", ""], function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen && Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["visibility:visible;opacity:1;transition:opacity 0.3s ease 0.3s,visibility 0.3s;"]);
});
var grow = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["css"])(["display:flex;flex-grow:1;flex-direction:column;"]);
var ModalWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "modals__ModalWrapper",
  componentId: "efqzlp-1"
})(["", " position:relative;background-color:#fff;width:", ";height:", ";max-width:", ";max-height:", ";padding:15px;border-radius:3px;", ""], grow, function (_ref3) {
  var width = _ref3.width;
  return width || '75%';
}, function (_ref4) {
  var height = _ref4.height;
  return height || '55%';
}, function (_ref5) {
  var maxWidth = _ref5.maxWidth;
  return maxWidth || '500px';
}, function (_ref6) {
  var maxHeight = _ref6.maxHeight;
  return maxHeight || '500px';
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme.styles.boxShadows[1];
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "modals__Header",
  componentId: "efqzlp-2"
})(["height:40px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "modals__Content",
  componentId: "efqzlp-3"
})(["", ""], grow);

/***/ }),

/***/ "./layouts/index.js":
/*!**************************!*\
  !*** ./layouts/index.js ***!
  \**************************/
/*! exports provided: MyGlobalStyle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyGlobalStyle", function() { return MyGlobalStyle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "../node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_Header__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Header */ "./components/Header.js");
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/Footer */ "./components/Footer.js");
/* harmony import */ var components_Aside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/Aside */ "./components/Aside.js");
/* harmony import */ var components_modals_ChallengeModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! components/modals/ChallengeModal */ "./components/modals/ChallengeModal.js");
/* harmony import */ var components_modals_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/modals/ChangePasswordModal */ "./components/modals/ChangePasswordModal.js");
/* harmony import */ var components_flashMessages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/flashMessages */ "./components/flashMessages/index.js");
/* harmony import */ var actions_display__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! actions/display */ "./actions/display.js");
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! utils/hooks */ "./utils/hooks/index.js");
/* harmony import */ var utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! utils/hooks/useClearTimeout */ "./utils/hooks/useClearTimeout.js");
/* harmony import */ var utils_hooks_useResize__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! utils/hooks/useResize */ "./utils/hooks/useResize.js");


var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/layouts/index.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  *, body, html {\n    box-sizing: border-box;\n  }\n  body {\n    /* background-color: ", "; */\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}














 // import useScrollTop from 'utils/hooks/useScrollTop';

 // import 'utils/propTypes'; // adds custom prop types (component)

__webpack_require__(/*! es6-promise */ "es6-promise").polyfill();

__webpack_require__(/*! fetch-everywhere */ "fetch-everywhere"); // this will take place of any "main.css" base style files


var MyGlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_5__["createGlobalStyle"])(_templateObject(), function (props) {
  return props.theme.colors.Secondary;
});

var Layout = function Layout(_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'This is the default title' : _ref$title,
      modal = _ref.modal,
      passwordModal = _ref.passwordModal,
      menuIsOpen = _ref.menuIsOpen,
      dispatch = _ref.dispatch;

  var _useResize = Object(utils_hooks_useResize__WEBPACK_IMPORTED_MODULE_16__["default"])(),
      width = _useResize.width,
      height = _useResize.height; // const scrollTop = useScrollTop();


  Object(utils_hooks__WEBPACK_IMPORTED_MODULE_14__["useOnChangeWatcher"])(width, function () {
    // dispatch redux action
    dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_13__["setDimensions"])(width, height));
  }); // useOnChangeWatcher(scrollTop, () => {
  //   // dispatch redux action
  //   console.log({ scrollTop });
  // });

  var timeout = null;
  Object(utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_15__["default"])(timeout);

  var handleCloseModal = function handleCloseModal() {
    dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_13__["closeModal"])()); // closes modal and then resets its state

    timeout = setTimeout(function () {
      return dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_13__["resetModal"])());
    }, 500);
  };

  var handleClosePasswordModal = function handleClosePasswordModal() {
    dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_13__["showChangePasswordModal"])(false)); // closes modal and then resets its state
    // timeout = setTimeout(() => dispatch(resetModal()), 500);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Header__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MyGlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Main, {
    role: "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_modals_ChallengeModal__WEBPACK_IMPORTED_MODULE_10__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modal.metaData, {
    isOpen: modal.isOpen,
    onRequestClose: handleCloseModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_modals_ChangePasswordModal__WEBPACK_IMPORTED_MODULE_11__["default"], {
    isOpen: passwordModal.isOpen,
    onRequestClose: handleClosePasswordModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_flashMessages__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Aside__WEBPACK_IMPORTED_MODULE_9__["default"], {
    menuIsOpen: menuIsOpen,
    onRequestClose: function onRequestClose() {
      return dispatch(Object(actions_display__WEBPACK_IMPORTED_MODULE_13__["closeMenu"])());
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }));
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node), prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.node]).isRequired,
  title: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.string,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.func,
  modal: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.shape({
    isOpen: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool.isRequired,
    data: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.object
  }),
  menuIsOpen: prop_types__WEBPACK_IMPORTED_MODULE_6___default.a.bool
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var display = _ref2.display;
  return {
    modal: display.modal,
    passwordModal: display.passwordModal,
    menuIsOpen: display.menuIsOpen
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Layout));
var Main = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.main.withConfig({
  displayName: "layouts__Main",
  componentId: "sc-18s4oqf-0"
})(["color:#000;display:flex;flex-direction:column;min-height:calc(100vh - 160px);"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_5___default.a.div.withConfig({
  displayName: "layouts__Container",
  componentId: "sc-18s4oqf-1"
})(["position:relative;background-size:cover;background-repeat:no-repeat;background-attachment:fixed;display:flex;flex-direction:column;flex:1;z-index:1;"]);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "../node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "../node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var layouts__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! layouts */ "./layouts/index.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var components_LoadingScreen__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/LoadingScreen */ "./components/LoadingScreen.js");
/* harmony import */ var actions_status__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! actions/status */ "./actions/status.js");
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! actions/auth */ "./actions/auth.js");
/* harmony import */ var utils_withReduxStore__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! utils/withReduxStore */ "./utils/withReduxStore.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! utils/theme */ "./utils/theme.js");
/* harmony import */ var utils_theme__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(utils_theme__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! utils/cookies */ "./utils/cookies.js");










var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/pages/_app.js";





 // import { flashError } from 'actions/flashMessage';





 // import 'static/css/main.css';

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(MyApp, _App);

  function MyApp() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "state", {
      loaded: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__["default"])(_this), "componentDidMount",
    /*#__PURE__*/
    Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var _this$props, router, dispatch, rememberMe, hasToken;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // eslint-disable-next-line
              console.log('componentDidMount');
              _this$props = _this.props, router = _this$props.router, dispatch = _this$props.reduxStore.dispatch;
              rememberMe = Object(utils_cookies__WEBPACK_IMPORTED_MODULE_20__["getCookie"])('rememberMe');

              if (!rememberMe) {
                _context.next = 17;
                break;
              }

              _context.next = 6;
              return dispatch(Object(actions_auth__WEBPACK_IMPORTED_MODULE_17__["checkForAuthToken"])());

            case 6:
              hasToken = _context.sent;

              if (!hasToken) {
                _context.next = 13;
                break;
              }

              // eslint-disable-next-line
              console.log('HAS A TOKEN'); // redirect to dashboard

              _context.next = 11;
              return router.push('/dashboard');

            case 11:
              _context.next = 17;
              break;

            case 13:
              // eslint-disable-next-line
              console.log('NO TOKEN!!!'); // redirect to login if not on signup page

              if (!(router.pathname !== '/signup')) {
                _context.next = 17;
                break;
              }

              _context.next = 17;
              return router.push('/login');

            case 17:
              // let pages know data has loaded
              dispatch(Object(actions_status__WEBPACK_IMPORTED_MODULE_16__["setLoaded"])()); // load component after route change finishes

              _this.setState({
                loaded: true
              });

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          Component = _this$props2.Component,
          pageProps = _this$props2.pageProps,
          reduxStore = _this$props2.reduxStore,
          router = _this$props2.router;
      var loaded = this.state.loaded; // const rememberMe = getCookie('rememberMe');

      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: reduxStore,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_components__WEBPACK_IMPORTED_MODULE_14__["ThemeProvider"], {
        theme: utils_theme__WEBPACK_IMPORTED_MODULE_19___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(layouts__WEBPACK_IMPORTED_MODULE_13__["default"], {
        title: "V2GO | 2019",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(components_LoadingScreen__WEBPACK_IMPORTED_MODULE_15__["default"], {
        loaded: loaded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(FadeIn, {
        loaded: loaded,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, loaded && react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: router.route
      }, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })))))));
    }
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_12___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(utils_withReduxStore__WEBPACK_IMPORTED_MODULE_18__["default"])(MyApp));
var FadeIn = styled_components__WEBPACK_IMPORTED_MODULE_14___default.a.div.withConfig({
  displayName: "_app__FadeIn",
  componentId: "iffvb8-0"
})(["", " pointer-events:none;visibility:hidden;opacity:0;transition:opacity 0.3s,visibility 0.3s ease 0.3s;", ""], function (_ref2) {
  var theme = _ref2.theme;
  return theme.styles.grow;
}, function (_ref3) {
  var loaded = _ref3.loaded;
  return loaded && Object(styled_components__WEBPACK_IMPORTED_MODULE_14__["css"])(["pointer-events:all;visibility:visible;opacity:1;transition:opacity 0.3s ease 0.3s,visibility 0.3s;"]);
});

/***/ }),

/***/ "./reducers/auth.js":
/*!**************************!*\
  !*** ./reducers/auth.js ***!
  \**************************/
/*! exports provided: authReducer, loggingOutReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggingOutReducer", function() { return loggingOutReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions/auth */ "./actions/auth.js");


var initialState = {
  authToken: null
};
var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_auth__WEBPACK_IMPORTED_MODULE_1__["SET_AUTH_TOKEN"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        authToken: action.authToken
      });

    default:
      return state;
  }
};
var loggingOutReducer = function loggingOutReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_auth__WEBPACK_IMPORTED_MODULE_1__["SET_LOGGING_OUT"]:
      return action.loggingOut;

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (authReducer);

/***/ }),

/***/ "./reducers/display.js":
/*!*****************************!*\
  !*** ./reducers/display.js ***!
  \*****************************/
/*! exports provided: displayReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayReducer", function() { return displayReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var actions_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions/display */ "./actions/display.js");


var initialModalState = {
  isOpen: false,
  metaData: null
};
var initialState = {
  dimensions: {
    width: 0,
    height: 0
  },
  modal: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialModalState),
  passwordModal: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, initialModalState),
  menuIsOpen: false // Aside menu (slideout)

};
var displayReducer = function displayReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_display__WEBPACK_IMPORTED_MODULE_1__["SHOW_MODAL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        modal: {
          isOpen: action.isOpen,
          metaData: action.metaData
        }
      });

    case actions_display__WEBPACK_IMPORTED_MODULE_1__["CLOSE_MODAL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        modal: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.modal, {
          isOpen: false
        })
      });

    case actions_display__WEBPACK_IMPORTED_MODULE_1__["RESET_MODAL"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          modal: initialModalState
        });
      }

    case actions_display__WEBPACK_IMPORTED_MODULE_1__["SHOW_CHANGE_PASSWORD_MODAL"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        passwordModal: {
          isOpen: action.isOpen
        }
      });

    case actions_display__WEBPACK_IMPORTED_MODULE_1__["TOGGLE_MENU"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        menuIsOpen: !state.menuIsOpen
      });

    case actions_display__WEBPACK_IMPORTED_MODULE_1__["CLOSE_MENU"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        menuIsOpen: false
      });

    case actions_display__WEBPACK_IMPORTED_MODULE_1__["SET_DIMENSIONS"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        dimensions: {
          width: action.width,
          height: action.height
        }
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (displayReducer);

/***/ }),

/***/ "./reducers/flashMessage.js":
/*!**********************************!*\
  !*** ./reducers/flashMessage.js ***!
  \**********************************/
/*! exports provided: displayReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "displayReducer", function() { return displayReducer; });
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/symbol/to-primitive */ "../node_modules/@babel/runtime-corejs2/core-js/symbol/to-primitive.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "../node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var actions_flashMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! actions/flashMessage */ "./actions/flashMessage.js");





function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[_babel_runtime_corejs2_core_js_symbol_to_primitive__WEBPACK_IMPORTED_MODULE_0___default.a]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var initialState = {}; // {
//   message: '',
//   messageType: '',
// },
// stores messages keyed by an ID (uuid) used to keep track of message instances
// uuid keeps id's in sequence so creation order is preserved in object

var displayReducer = function displayReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_flashMessage__WEBPACK_IMPORTED_MODULE_4__["ADD_FLASH_MESSAGE"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, action.id, {
        messageType: action.messageType,
        message: action.message,
        options: action.options
      }));

    case actions_flashMessage__WEBPACK_IMPORTED_MODULE_4__["REMOVE_FLASH_MESSAGE"]:
      var removed = state[action.id],
          rest = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(state, [action.id].map(_toPropertyKey));

      return rest;

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (displayReducer);

/***/ }),

/***/ "./reducers/status.js":
/*!****************************!*\
  !*** ./reducers/status.js ***!
  \****************************/
/*! exports provided: statusReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statusReducer", function() { return statusReducer; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var actions_status__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! actions/status */ "./actions/status.js");


var initialState = {
  loaded: false
};
var statusReducer = function statusReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_status__WEBPACK_IMPORTED_MODULE_1__["SET_LOADED"]:
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
        loaded: true
      });

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (statusReducer);

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: userReducer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userReducer", function() { return userReducer; });
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! actions/user */ "./actions/user.js");

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case actions_user__WEBPACK_IMPORTED_MODULE_0__["SET_CURRENT_USER"]:
      return action.currentUser;

    case actions_user__WEBPACK_IMPORTED_MODULE_0__["CLEAR_CURRENT_USER"]:
      return null;

    default:
      return state;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ }),

/***/ "./static/img/React.svg":
/*!******************************!*\
  !*** ./static/img/React.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+PGcgZmlsbD0iIzYxREFGQiI+PHBhdGggZD0iTTY2Ni4zIDI5Ni41YzAtMzIuNS00MC43LTYzLjMtMTAzLjEtODIuNCAxNC40LTYzLjYgOC0xMTQuMi0yMC4yLTEzMC40LTYuNS0zLjgtMTQuMS01LjYtMjIuNC01LjZ2MjIuM2M0LjYgMCA4LjMuOSAxMS40IDIuNiAxMy42IDcuOCAxOS41IDM3LjUgMTQuOSA3NS43LTEuMSA5LjQtMi45IDE5LjMtNS4xIDI5LjQtMTkuNi00LjgtNDEtOC41LTYzLjUtMTAuOS0xMy41LTE4LjUtMjcuNS0zNS4zLTQxLjYtNTAgMzIuNi0zMC4zIDYzLjItNDYuOSA4NC00Ni45Vjc4Yy0yNy41IDAtNjMuNSAxOS42LTk5LjkgNTMuNi0zNi40LTMzLjgtNzIuNC01My4yLTk5LjktNTMuMnYyMi4zYzIwLjcgMCA1MS40IDE2LjUgODQgNDYuNi0xNCAxNC43LTI4IDMxLjQtNDEuMyA0OS45LTIyLjYgMi40LTQ0IDYuMS02My42IDExLTIuMy0xMC00LTE5LjctNS4yLTI5LTQuNy0zOC4yIDEuMS02Ny45IDE0LjYtNzUuOCAzLTEuOCA2LjktMi42IDExLjUtMi42Vjc4LjVjLTguNCAwLTE2IDEuOC0yMi42IDUuNi0yOC4xIDE2LjItMzQuNCA2Ni43LTE5LjkgMTMwLjEtNjIuMiAxOS4yLTEwMi43IDQ5LjktMTAyLjcgODIuMyAwIDMyLjUgNDAuNyA2My4zIDEwMy4xIDgyLjQtMTQuNCA2My42LTggMTE0LjIgMjAuMiAxMzAuNCA2LjUgMy44IDE0LjEgNS42IDIyLjUgNS42IDI3LjUgMCA2My41LTE5LjYgOTkuOS01My42IDM2LjQgMzMuOCA3Mi40IDUzLjIgOTkuOSA1My4yIDguNCAwIDE2LTEuOCAyMi42LTUuNiAyOC4xLTE2LjIgMzQuNC02Ni43IDE5LjktMTMwLjEgNjItMTkuMSAxMDIuNS00OS45IDEwMi41LTgyLjN6bS0xMzAuMi02Ni43Yy0zLjcgMTIuOS04LjMgMjYuMi0xMy41IDM5LjUtNC4xLTgtOC40LTE2LTEzLjEtMjQtNC42LTgtOS41LTE1LjgtMTQuNC0yMy40IDE0LjIgMi4xIDI3LjkgNC43IDQxIDcuOXptLTQ1LjggMTA2LjVjLTcuOCAxMy41LTE1LjggMjYuMy0yNC4xIDM4LjItMTQuOSAxLjMtMzAgMi00NS4yIDItMTUuMSAwLTMwLjItLjctNDUtMS45LTguMy0xMS45LTE2LjQtMjQuNi0yNC4yLTM4LTcuNi0xMy4xLTE0LjUtMjYuNC0yMC44LTM5LjggNi4yLTEzLjQgMTMuMi0yNi44IDIwLjctMzkuOSA3LjgtMTMuNSAxNS44LTI2LjMgMjQuMS0zOC4yIDE0LjktMS4zIDMwLTIgNDUuMi0yIDE1LjEgMCAzMC4yLjcgNDUgMS45IDguMyAxMS45IDE2LjQgMjQuNiAyNC4yIDM4IDcuNiAxMy4xIDE0LjUgMjYuNCAyMC44IDM5LjgtNi4zIDEzLjQtMTMuMiAyNi44LTIwLjcgMzkuOXptMzIuMy0xM2M1LjQgMTMuNCAxMCAyNi44IDEzLjggMzkuOC0xMy4xIDMuMi0yNi45IDUuOS00MS4yIDggNC45LTcuNyA5LjgtMTUuNiAxNC40LTIzLjcgNC42LTggOC45LTE2LjEgMTMtMjQuMXpNNDIxLjIgNDMwYy05LjMtOS42LTE4LjYtMjAuMy0yNy44LTMyIDkgLjQgMTguMi43IDI3LjUuNyA5LjQgMCAxOC43LS4yIDI3LjgtLjctOSAxMS43LTE4LjMgMjIuNC0yNy41IDMyem0tNzQuNC01OC45Yy0xNC4yLTIuMS0yNy45LTQuNy00MS03LjkgMy43LTEyLjkgOC4zLTI2LjIgMTMuNS0zOS41IDQuMSA4IDguNCAxNiAxMy4xIDI0IDQuNyA4IDkuNSAxNS44IDE0LjQgMjMuNHpNNDIwLjcgMTYzYzkuMyA5LjYgMTguNiAyMC4zIDI3LjggMzItOS0uNC0xOC4yLS43LTI3LjUtLjctOS40IDAtMTguNy4yLTI3LjguNyA5LTExLjcgMTguMy0yMi40IDI3LjUtMzJ6bS03NCA1OC45Yy00LjkgNy43LTkuOCAxNS42LTE0LjQgMjMuNy00LjYgOC04LjkgMTYtMTMgMjQtNS40LTEzLjQtMTAtMjYuOC0xMy44LTM5LjggMTMuMS0zLjEgMjYuOS01LjggNDEuMi03Ljl6bS05MC41IDEyNS4yYy0zNS40LTE1LjEtNTguMy0zNC45LTU4LjMtNTAuNiAwLTE1LjcgMjIuOS0zNS42IDU4LjMtNTAuNiA4LjYtMy43IDE4LTcgMjcuNy0xMC4xIDUuNyAxOS42IDEzLjIgNDAgMjIuNSA2MC45LTkuMiAyMC44LTE2LjYgNDEuMS0yMi4yIDYwLjYtOS45LTMuMS0xOS4zLTYuNS0yOC0xMC4yek0zMTAgNDkwYy0xMy42LTcuOC0xOS41LTM3LjUtMTQuOS03NS43IDEuMS05LjQgMi45LTE5LjMgNS4xLTI5LjQgMTkuNiA0LjggNDEgOC41IDYzLjUgMTAuOSAxMy41IDE4LjUgMjcuNSAzNS4zIDQxLjYgNTAtMzIuNiAzMC4zLTYzLjIgNDYuOS04NCA0Ni45LTQuNS0uMS04LjMtMS0xMS4zLTIuN3ptMjM3LjItNzYuMmM0LjcgMzguMi0xLjEgNjcuOS0xNC42IDc1LjgtMyAxLjgtNi45IDIuNi0xMS41IDIuNi0yMC43IDAtNTEuNC0xNi41LTg0LTQ2LjYgMTQtMTQuNyAyOC0zMS40IDQxLjMtNDkuOSAyMi42LTIuNCA0NC02LjEgNjMuNi0xMSAyLjMgMTAuMSA0LjEgMTkuOCA1LjIgMjkuMXptMzguNS02Ni43Yy04LjYgMy43LTE4IDctMjcuNyAxMC4xLTUuNy0xOS42LTEzLjItNDAtMjIuNS02MC45IDkuMi0yMC44IDE2LjYtNDEuMSAyMi4yLTYwLjYgOS45IDMuMSAxOS4zIDYuNSAyOC4xIDEwLjIgMzUuNCAxNS4xIDU4LjMgMzQuOSA1OC4zIDUwLjYtLjEgMTUuNy0yMyAzNS42LTU4LjQgNTAuNnpNMzIwLjggNzguNHoiLz48Y2lyY2xlIGN4PSI0MjAuOSIgY3k9IjI5Ni41IiByPSI0NS43Ii8+PHBhdGggZD0iTTUyMC41IDc4LjF6Ii8+PC9nPjwvc3ZnPg=="

/***/ }),

/***/ "./utils/cookies.js":
/*!**************************!*\
  !*** ./utils/cookies.js ***!
  \**************************/
/*! exports provided: getCookie, setCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! universal-cookie */ "universal-cookie");
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(universal_cookie__WEBPACK_IMPORTED_MODULE_1__);


var cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_1___default.a();
var defaultOpts = {
  path: '/',
  maxAge: 60 * 60 * 24 * 4 // === 4 days, relative lifespan in seconds from now until maxAge

};
var getCookie = function getCookie(name, opts) {
  var res = cookies.get(name, defaultOpts);

  if (res) {
    return JSON.parse(res);
  }

  return false;
};
var setCookie = function setCookie(name, value, opts) {
  return cookies.set(name, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value), defaultOpts);
};

/***/ }),

/***/ "./utils/helpers.js":
/*!**************************!*\
  !*** ./utils/helpers.js ***!
  \**************************/
/*! exports provided: mapRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapRange", function() { return mapRange; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");

var mapRange = function mapRange(_ref) {
  var from = _ref.from,
      to = _ref.to,
      target = _ref.target,
      _ref$isClamped = _ref.isClamped,
      isClamped = _ref$isClamped === void 0 ? true : _ref$isClamped;

  var _from = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(from, 2),
      inputStart = _from[0],
      inputEnd = _from[1];

  var _to = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(to, 2),
      outputStart = _to[0],
      outputEnd = _to[1];

  var clampedTarget = target;

  if (isClamped) {
    if (target < inputStart) {
      clampedTarget = inputStart;
    } else if (target > inputEnd) {
      clampedTarget = inputEnd;
    }
  }

  var output = outputStart + (outputEnd - outputStart) / (inputEnd - inputStart) * (clampedTarget - inputStart);
  return output;
};

/***/ }),

/***/ "./utils/hooks/index.js":
/*!******************************!*\
  !*** ./utils/hooks/index.js ***!
  \******************************/
/*! exports provided: useComponentDidMount, useComponentWillUnmount, useOnChangeWatcher, useResize, useScrollTop, useRedirect, useClearTimeout, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentDidMount", function() { return useComponentDidMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useComponentWillUnmount", function() { return useComponentWillUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useOnChangeWatcher", function() { return useOnChangeWatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useResize", function() { return useResize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useScrollTop", function() { return useScrollTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRedirect", function() { return useRedirect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useClearTimeout", function() { return useClearTimeout; });
/* harmony import */ var _useComponentDidMount__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useComponentDidMount */ "./utils/hooks/useComponentDidMount.js");
/* harmony import */ var _useComponentWillUnmount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useComponentWillUnmount */ "./utils/hooks/useComponentWillUnmount.js");
/* harmony import */ var _useOnChangeWatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useOnChangeWatcher */ "./utils/hooks/useOnChangeWatcher.js");
/* harmony import */ var _useResize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useResize */ "./utils/hooks/useResize.js");
/* harmony import */ var _useScrollTop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useScrollTop */ "./utils/hooks/useScrollTop.js");
/* harmony import */ var _useRedirect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useRedirect */ "./utils/hooks/useRedirect.js");
/* harmony import */ var _useClearTimeout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useClearTimeout */ "./utils/hooks/useClearTimeout.js");







var useComponentDidMount = _useComponentDidMount__WEBPACK_IMPORTED_MODULE_0__["default"];
var useComponentWillUnmount = _useComponentWillUnmount__WEBPACK_IMPORTED_MODULE_1__["default"];
var useOnChangeWatcher = _useOnChangeWatcher__WEBPACK_IMPORTED_MODULE_2__["default"];
var useResize = _useResize__WEBPACK_IMPORTED_MODULE_3__["default"];
var useScrollTop = _useScrollTop__WEBPACK_IMPORTED_MODULE_4__["default"];
var useRedirect = _useRedirect__WEBPACK_IMPORTED_MODULE_5__["default"];
var useClearTimeout = _useClearTimeout__WEBPACK_IMPORTED_MODULE_6__["default"];
/* harmony default export */ __webpack_exports__["default"] = ({
  useComponentDidMount: _useComponentDidMount__WEBPACK_IMPORTED_MODULE_0__["default"],
  useComponentWillUnmount: _useComponentWillUnmount__WEBPACK_IMPORTED_MODULE_1__["default"],
  useOnChangeWatcher: _useOnChangeWatcher__WEBPACK_IMPORTED_MODULE_2__["default"],
  useResize: _useResize__WEBPACK_IMPORTED_MODULE_3__["default"],
  useScrollTop: _useScrollTop__WEBPACK_IMPORTED_MODULE_4__["default"],
  useRedirect: _useRedirect__WEBPACK_IMPORTED_MODULE_5__["default"],
  useClearTimeout: _useClearTimeout__WEBPACK_IMPORTED_MODULE_6__["default"]
});

/***/ }),

/***/ "./utils/hooks/useClearTimeout.js":
/*!****************************************!*\
  !*** ./utils/hooks/useClearTimeout.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // useClearTimeout

/* harmony default export */ __webpack_exports__["default"] = (function (timeout) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      return clearTimeout(timeout);
    };
  });
});

/***/ }),

/***/ "./utils/hooks/useComponentDidMount.js":
/*!*********************************************!*\
  !*** ./utils/hooks/useComponentDidMount.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // useComponentDidMount

/* harmony default export */ __webpack_exports__["default"] = (function (fn) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    fn();
  }, []);
});

/***/ }),

/***/ "./utils/hooks/useComponentWillUnmount.js":
/*!************************************************!*\
  !*** ./utils/hooks/useComponentWillUnmount.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
 // useComponentWillUnmount

/* harmony default export */ __webpack_exports__["default"] = (function (fn) {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return fn; // fires on didMount
  }, []);
});

/***/ }),

/***/ "./utils/hooks/useOnChangeWatcher.js":
/*!*******************************************!*\
  !*** ./utils/hooks/useOnChangeWatcher.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

 // useOnChangeWatcher

/* harmony default export */ __webpack_exports__["default"] = (function (value, callback) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      prevValue = _useState2[0],
      setPrevValue = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (typeof value !== 'undefined' && typeof prevValue !== 'undefined' && value !== prevValue) {
      callback();
    }

    setPrevValue(value);
  }, [value]);
});

/***/ }),

/***/ "./utils/hooks/useRedirect.js":
/*!************************************!*\
  !*** ./utils/hooks/useRedirect.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (condition, to, router) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (condition) {
      // eslint-disable-next-line
      console.log("routing from ".concat(router.pathname, " to ").concat(to, "..."));
      router.push(to);
    }
  });
});

/***/ }),

/***/ "./utils/hooks/useResize.js":
/*!**********************************!*\
  !*** ./utils/hooks/useResize.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/hooks */ "./utils/hooks/index.js");


 // useResize

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      width = _useState2[0],
      setWidth = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var resizeTimeout;
  var resizeThrottler;

  var setDimensions = function setDimensions() {
    var _window = window,
        innerWidth = _window.innerWidth,
        innerHeight = _window.innerHeight;
    setWidth(innerWidth);
    setHeight(innerHeight);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    resizeThrottler = function resizeThrottler() {
      if (!resizeTimeout) {
        resizeTimeout = setTimeout(function () {
          resizeTimeout = null; // The setDimensions will execute at a rate of 15fps

          setDimensions();
        }, 66);
      }
    };
  }, []);
  Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__["useComponentDidMount"])(function () {
    window.addEventListener('resize', resizeThrottler);
    setDimensions();
  });
  Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__["useComponentWillUnmount"])(function () {
    window.removeEventListener('resize', resizeThrottler);
    clearInterval(resizeTimeout);
  });
  return {
    width: width,
    height: height
  };
});

/***/ }),

/***/ "./utils/hooks/useScrollTop.js":
/*!*************************************!*\
  !*** ./utils/hooks/useScrollTop.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! utils/hooks */ "./utils/hooks/index.js");


 // useScroll

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      scrollTop = _useState2[0],
      setScrollTop = _useState2[1];

  var scrollTimeout;
  var scrollThrottler;

  var setDimensions = function setDimensions() {
    var currentScrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
    setScrollTop(currentScrollTop);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    scrollThrottler = function scrollThrottler() {
      if (!scrollTimeout) {
        scrollTimeout = setTimeout(function () {
          scrollTimeout = null; // The setDimensions will execute at a rate of 15fps

          setDimensions();
        }, 66);
      }
    };
  }, []);
  Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__["useComponentDidMount"])(function () {
    window.addEventListener('scroll', scrollThrottler);
    setDimensions();
  });
  Object(utils_hooks__WEBPACK_IMPORTED_MODULE_2__["useComponentWillUnmount"])(function () {
    window.removeEventListener('scroll', scrollThrottler);
    clearInterval(scrollTimeout);
  });
  return scrollTop;
});

/***/ }),

/***/ "./utils/http/auth.js":
/*!****************************!*\
  !*** ./utils/http/auth.js ***!
  \****************************/
/*! exports provided: login, refreshAuthToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "refreshAuthToken", function() { return refreshAuthToken; });
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_http_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/http/urls */ "./utils/http/urls.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./utils/http/utils.js");





var login = function login(_ref) {
  var username = _ref.username,
      password = _ref.password;
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    var url = "".concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["API_URL"]).concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["LOGIN"]); // Base64 encode the string username:password, used in the basic
    // auth field

    var token = btoa("".concat(username, ":").concat(password));
    var config = {
      headers: {
        // Provide our username and password as login credentials
        Authorization: "Basic ".concat(token)
      },
      method: 'POST'
    };
    fetch(url, config).then(
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(res) {
        var data, err;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(res.status === 200)) {
                  _context.next = 5;
                  break;
                }

                _context.next = 3;
                return res.json();

              case 3:
                data = _context.sent;
                return _context.abrupt("return", resolve({
                  status: 200,
                  data: data
                }));

              case 5:
                if (res.status === 401) {
                  // reject if unauthorized
                  err = {
                    status: 401,
                    message: 'Unathorized'
                  };
                  reject(err);
                } // return entire response if not OK


                resolve(res);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }()).catch(function (err) {
      return reject(err);
    });
  });
};
var refreshAuthToken = function refreshAuthToken(authToken) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    return fetch("".concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["API_URL"]).concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["REFRESH"]), {
      method: 'POST',
      headers: {
        // Provide our existing token as credentials to get a new one
        Authorization: "Bearer ".concat(authToken)
      }
    }).then(function (res) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["normalizeResponseErrors"])(res);
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      console.log({
        res: res
      });
      resolve(res.authToken);
    }).catch(function (err) {
      return reject(err);
    });
  });
};

/***/ }),

/***/ "./utils/http/urls.js":
/*!****************************!*\
  !*** ./utils/http/urls.js ***!
  \****************************/
/*! exports provided: API_URL, LOGIN, REFRESH, USERS, ME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REFRESH", function() { return REFRESH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERS", function() { return USERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ME", function() { return ME; });
var API_URL = 'http://localhost:8080';
var LOGIN = '/api/auth/login';
var REFRESH = '/api/auth/refresh';
var USERS = '/api/users';
var ME = '/api/users/me';

/***/ }),

/***/ "./utils/http/user.js":
/*!****************************!*\
  !*** ./utils/http/user.js ***!
  \****************************/
/*! exports provided: createUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "../node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_http_urls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/http/urls */ "./utils/http/urls.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils */ "./utils/http/utils.js");





/**
 *  Creates a new user in database.
 *
 *  Fields:
 *  Required: ["email", "username", "password"]
 *  Accepted: ["email", "username", "password", "firstName", "lastName"
 *
 * @param {String} data.email - Email of user account
 * @param {String} data.username - Username of user account, used to log in
 * @param {String} data.password - Password of user account
 * @param {String} data.firstName - Password of user account
 * @param {String} data.lastName - Password of user account
 */

var createUser = function createUser(data) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    var url = "".concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["API_URL"]).concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["USERS"]);
    var options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(data)
    };
    fetch(url, options).then(function (res) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["normalizeResponseErrors"])(res);
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return resolve(res);
    }).catch(function (err) {
      return reject(err);
    });
  });
};
var updateUser = function updateUser(authToken, data) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    var url = "".concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["API_URL"]).concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["ME"]);
    var formData = new FormData();

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(data).forEach(function (key) {
      formData.append(key, data[key]);
    });

    var options = {
      method: 'PUT',
      headers: {
        Authorization: "Bearer ".concat(authToken)
      },
      body: formData
    };
    fetch(url, options).then(function (res) {
      return Object(_utils__WEBPACK_IMPORTED_MODULE_4__["normalizeResponseErrors"])(res);
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      return resolve(res);
    }).catch(function (err) {
      return reject(err);
    });
  });
};
var deleteUser = function deleteUser(authToken) {
  return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
    var url = "".concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["API_URL"]).concat(utils_http_urls__WEBPACK_IMPORTED_MODULE_3__["ME"]);
    var options = {
      method: 'DELETE',
      headers: {
        Authorization: "Bearer ".concat(authToken),
        'Content-Type': 'application/json'
      }
    };
    fetch(url, options).then(_utils__WEBPACK_IMPORTED_MODULE_4__["normalizeResponseErrors"]).then(function (res) {
      if (res.status === 204) {
        resolve(true);
      } else {
        resolve(false);
      }
    }).catch(function (err) {
      var reason = err.reason;

      if (reason === 'ValidationError') {
        // eslint-disable-next-line
        console.log(err);
        reject(err);
      }
    });
  });
};

/***/ }),

/***/ "./utils/http/utils.js":
/*!*****************************!*\
  !*** ./utils/http/utils.js ***!
  \*****************************/
/*! exports provided: normalizeResponseErrors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeResponseErrors", function() { return normalizeResponseErrors; });
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "../node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

var normalizeResponseErrors = function normalizeResponseErrors(res) {
  if (!res.ok) {
    if (res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json')) {
      // It's a nice JSON error returned by us, so decode it
      return res.json().then(function (err) {
        return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(err);
      });
    } // It's a less informative error returned by express


    var error = {
      code: res.status,
      message: res.statusText
    };
    return _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.reject(error);
  }

  return res;
};

/***/ }),

/***/ "./utils/propTypes.js":
/*!****************************!*\
  !*** ./utils/propTypes.js ***!
  \****************************/
/*! exports provided: SizeTypes, SVGPropTypes, flashMessageTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SizeTypes", function() { return SizeTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGPropTypes", function() { return SVGPropTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flashMessageTypes", function() { return flashMessageTypes; });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);

var SizeTypes = prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.number]);
var SVGPropTypes = {
  fill: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object,
  width: SizeTypes
};
var flashMessageTypes = {
  message: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  messageType: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string,
  options: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.object
};

/***/ }),

/***/ "./utils/storage.js":
/*!**************************!*\
  !*** ./utils/storage.js ***!
  \**************************/
/*! exports provided: setSessionItem, getSessionItem, setLocalItem, getLocalItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setSessionItem", function() { return setSessionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSessionItem", function() { return getSessionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalItem", function() { return setLocalItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLocalItem", function() { return getLocalItem; });
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "../node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0__);

//
// Session Storage
//
var setSessionItem = function setSessionItem(key, value) {
  return sessionStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value));
};
var getSessionItem = function getSessionItem(key) {
  return JSON.parse(sessionStorage.getItem(key));
}; //
// Local Storage
//

var setLocalItem = function setLocalItem(key, value) {
  return localStorage.setItem(key, _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_0___default()(value));
};
var getLocalItem = function getLocalItem(key) {
  return JSON.parse(localStorage.getItem(key));
};

/***/ }),

/***/ "./utils/text.js":
/*!***********************!*\
  !*** ./utils/text.js ***!
  \***********************/
/*! exports provided: GENERAL_ERROR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENERAL_ERROR", function() { return GENERAL_ERROR; });
var GENERAL_ERROR = 'Sorry, something went wrong.';

/***/ }),

/***/ "./utils/theme.js":
/*!************************!*\
  !*** ./utils/theme.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "../node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = exports.colors = void 0;

var _styledComponents = __webpack_require__(/*! styled-components */ "styled-components");

var _color = _interopRequireDefault(__webpack_require__(/*! color */ "color"));

var lighten = function lighten(color) {
  console.log({
    color: color
  });
  return (0, _color.default)(color).alpha(0.5).lighten(0.5);
};

var darken = function darken(color) {
  console.log({
    color: color
  });
  return (0, _color.default)(color).alpha(0.5).darken(0.5);
};

var colors = {
  Primary: '#6495ED',
  // cornflowerblue
  Secondary: '#5CE5F7',
  // analogue of cornflowblue
  Compliment: '#663399',
  // rebeccapurple
  Text: '#000',
  Button: {
    bgColor: '#6495ED',
    color: '#fff',
    hover: 'rgba(255,255,255,0.3)',
    active: ''
  },
  system: {
    ERROR: '#f7d7da',
    SUCCESS: '#d5edda',
    WARNING: '#fff3cd',
    GENERAL: '#cae6fe'
  },
  lighten: lighten,
  darken: darken
};
exports.colors = colors;
var styles = {
  grow: (0, _styledComponents.css)(["display:flex;flex-direction:column;flex-grow:1;"]),
  middle: (0, _styledComponents.css)(["display:flex;justify-content:center;align-items:center;"]),
  ellipsisMask: (0, _styledComponents.css)(["display:inline-block;font-size:inherit;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;"]),
  // Material Design box-shadows
  boxShadows: [(0, _styledComponents.css)(["box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);transition:all 0.25s ease-in-out;&:hover{box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);}"]), (0, _styledComponents.css)(["box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);"]), (0, _styledComponents.css)(["box-shadow:0 10px 20px rgba(0,0,0,0.19),0 6px 6px rgba(0,0,0,0.23);"]), (0, _styledComponents.css)(["box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);"]), (0, _styledComponents.css)(["box-shadow:0 19px 38px rgba(0,0,0,0.3),0 15px 12px rgba(0,0,0,0.22);"])]
};
exports.styles = styles;
module.exports = {
  colors: colors,
  styles: styles
};

/***/ }),

/***/ "./utils/withReduxStore.js":
/*!*********************************!*\
  !*** ./utils/withReduxStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "../node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "../node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "../node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "../node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "../node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "../node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "../node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "../node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../store */ "../store.js");









var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/utils/withReduxStore.js";


var isServer = typeof window === 'undefined';
var __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return Object(_store__WEBPACK_IMPORTED_MODULE_10__["initializeStore"])(initialState);
  } // Create store if unavailable on the client and set it on the window object


  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = Object(_store__WEBPACK_IMPORTED_MODULE_10__["initializeStore"])(initialState);
  }

  return window[__NEXT_REDUX_STORE__];
}

/* harmony default export */ __webpack_exports__["default"] = (function (App) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(AppWithRedux, _React$Component);

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(AppWithRedux, null, [{
        key: "getInitialProps",
        value: function () {
          var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])(
          /*#__PURE__*/
          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(appContext) {
            var reduxStore, appProps;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // Get or Create the store with `undefined` as initialState
                    // This allows you to set a custom default initialState
                    reduxStore = getOrCreateStore(); // Provide the store to getInitialProps of pages

                    appContext.ctx.reduxStore = reduxStore;
                    appProps = {};

                    if (!(typeof App.getInitialProps === 'function')) {
                      _context.next = 7;
                      break;
                    }

                    _context.next = 6;
                    return App.getInitialProps(appContext);

                  case 6:
                    appProps = _context.sent;

                  case 7:
                    return _context.abrupt("return", Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_2__["default"])({}, appProps, {
                      initialReduxState: reduxStore.getState()
                    }));

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function getInitialProps(_x) {
            return _getInitialProps.apply(this, arguments);
          }

          return getInitialProps;
        }()
      }]);

      function AppWithRedux(props) {
        var _this;

        Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, AppWithRedux);

        _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(AppWithRedux).call(this, props));
        _this.reduxStore = getOrCreateStore(props.initialReduxState);
        return _this;
      }

      Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__["default"])(AppWithRedux, [{
        key: "render",
        value: function render() {
          return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(App, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, {
            reduxStore: this.reduxStore,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }));
        }
      }]);

      return AppWithRedux;
    }(react__WEBPACK_IMPORTED_MODULE_9___default.a.Component)
  );
});

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "better-react-spinkit":
/*!***************************************!*\
  !*** external "better-react-spinkit" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("better-react-spinkit");

/***/ }),

/***/ "color":
/*!************************!*\
  !*** external "color" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),

/***/ "core-js/library/fn/get-iterator":
/*!**************************************************!*\
  !*** external "core-js/library/fn/get-iterator" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/get-iterator");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/freeze":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/freeze" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/get-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/get-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/object/set-prototype-of":
/*!*************************************************************!*\
  !*** external "core-js/library/fn/object/set-prototype-of" ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/symbol/to-primitive":
/*!*********************************************************!*\
  !*** external "core-js/library/fn/symbol/to-primitive" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/to-primitive");

/***/ }),

/***/ "es6-promise":
/*!******************************!*\
  !*** external "es6-promise" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("es6-promise");

/***/ }),

/***/ "fetch-everywhere":
/*!***********************************!*\
  !*** external "fetch-everywhere" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fetch-everywhere");

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("formik");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "lodash.capitalize":
/*!************************************!*\
  !*** external "lodash.capitalize" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.capitalize");

/***/ }),

/***/ "lodash.map":
/*!*****************************!*\
  !*** external "lodash.map" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.map");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

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

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "regenerator-runtime":
/*!**************************************!*\
  !*** external "regenerator-runtime" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "universal-cookie":
/*!***********************************!*\
  !*** external "universal-cookie" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("universal-cookie");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map