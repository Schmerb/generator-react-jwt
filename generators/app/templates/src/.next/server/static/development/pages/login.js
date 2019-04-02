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

/***/ "../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!********************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

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

/***/ "../node_modules/next/link.js":
/*!************************************!*\
  !*** ../node_modules/next/link.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../node_modules/next/dist/client/link.js")


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
      }()).catch(function (error) {
        reject(error);
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

/***/ "./components/Home.js":
/*!****************************!*\
  !*** ./components/Home.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "../node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var components_atoms_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/atoms/Button */ "./components/atoms/Button.js");
/* harmony import */ var components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/modals/LoginModal */ "./components/modals/LoginModal.js");
/* harmony import */ var components_modals_SignupModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/modals/SignupModal */ "./components/modals/SignupModal.js");
/* harmony import */ var utils_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/hooks */ "./utils/hooks/index.js");


var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/Home.js";










var Home = function Home(_ref) {
  var tab = _ref.tab,
      router = _ref.router,
      user = _ref.user;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var modalProps = {
    isOpen: isOpen,
    onRequestClose: function onRequestClose() {
      return setIsOpen(false);
    }
  };
  Object(utils_hooks__WEBPACK_IMPORTED_MODULE_10__["useComponentDidMount"])(function () {
    if (user) {
      // eslint-disable-next-line
      console.log("routing from ".concat(router.pathname, " to /dashboard..."));
      router.push('/dashboard');
    }
  });
  var IS_LOGIN = tab === 'login';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, IS_LOGIN ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_modals_LoginModal__WEBPACK_IMPORTED_MODULE_8__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modalProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_modals_SignupModal__WEBPACK_IMPORTED_MODULE_9__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, modalProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, IS_LOGIN ? 'Login' : 'Signup'), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_atoms_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "button",
    onClick: function onClick(evt) {
      return setIsOpen(true);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Open Modal")));
};

Home.propTypes = {
  tab: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  user: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object
};

var mapStateToProps = function mapStateToProps(_ref2) {
  var user = _ref2.user;
  return {
    user: user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(Home)));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "Home__Container",
  componentId: "hcdfsq-0"
})(["position:relative;color:", ";width:600px;margin:0 auto;text-align:center;"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.colors.Primary;
});

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

/***/ "./components/atoms/Checkbox.js":
/*!**************************************!*\
  !*** ./components/atoms/Checkbox.js ***!
  \**************************************/
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
/* harmony import */ var components_icons_Checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! components/icons/Checkbox */ "./components/icons/Checkbox.js");
/* harmony import */ var components_icons_Checkmark__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! components/icons/Checkmark */ "./components/icons/Checkmark.js");







var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/atoms/Checkbox.js";







var Checkbox =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Checkbox, _PureComponent);

  function Checkbox(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Checkbox);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Checkbox).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleChange", function (e) {
      var checked = e.target.checked;

      _this.setState({
        checked: checked
      });

      var onChange = _this.props.onChange;
      onChange && onChange(checked);
    });

    _this.state = {
      checked: props.initialValue || false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Checkbox, [{
    key: "render",
    value: function render() {
      var checked = this.state.checked;
      var _this$props = this.props,
          outline = _this$props.outline,
          style = _this$props.style,
          width = _this$props.width,
          label = _this$props.label,
          visible = _this$props.visible,
          fill = _this$props.fill,
          emptyFill = _this$props.emptyFill,
          CustomLabel = _this$props.CustomLabel;
      var IconComponent = checked ? components_icons_Checkbox__WEBPACK_IMPORTED_MODULE_11__["CheckboxChecked"] : outline ? components_icons_Checkmark__WEBPACK_IMPORTED_MODULE_12__["default"] : components_icons_Checkbox__WEBPACK_IMPORTED_MODULE_11__["Checkbox"];
      var labelComponent;

      if (CustomLabel) {
        labelComponent = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(CustomLabel, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        });
      } else if (label) {
        labelComponent = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, label);
      }

      var getsOutline = outline && !checked;
      var _fill = fill;

      if (getsOutline) {
        _fill = 'transparent';
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Container, {
        visible: visible,
        style: style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Input, {
        id: "customCheckbox",
        type: "checkbox",
        onChange: this.handleChange,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Label, {
        htmlFor: "customCheckbox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(IconComponent, {
        style: {
          float: 'left',
          marginRight: '10px'
        },
        width: width || 20,
        fill: _fill,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      })), labelComponent));
    }
  }]);

  return Checkbox;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Checkbox.propTypes = {
  initialValue: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  visible: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  fill: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  emptyFill: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  // optional fill when checkbox is not checked
  label: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string,
  style: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  CustomLabel: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func,
  outline: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  width: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.number])
};
/* harmony default export */ __webpack_exports__["default"] = (Checkbox);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "Checkbox__Container",
  componentId: "ipb3pu-0"
})(["position:relative;display:flex;justify-content:center;align-items:center;transition:all 0.3s;opacity:1;", ""], function (_ref) {
  var visible = _ref.visible;
  return !visible && Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["css"])(["opacity:0;pointer-events:none;"]);
});
var Input = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.input.withConfig({
  displayName: "Checkbox__Input",
  componentId: "ipb3pu-1"
})(["position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:20px;margin:0;opacity:0;cursor:pointer;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.label.withConfig({
  displayName: "Checkbox__Label",
  componentId: "ipb3pu-2"
})(["display:flex;justify-content:center;align-items:center;color:", ";font-size:0.8rem;margin-left:5px;cursor:pointer;"], utils_theme__WEBPACK_IMPORTED_MODULE_10__["colors"].Gray);

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

/***/ "./components/formik/LoginFormik.js":
/*!******************************************!*\
  !*** ./components/formik/LoginFormik.js ***!
  \******************************************/
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
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var components_atoms_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/atoms/Button */ "./components/atoms/Button.js");
/* harmony import */ var components_atoms_Checkbox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! components/atoms/Checkbox */ "./components/atoms/Checkbox.js");
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/auth */ "./actions/auth.js");
/* harmony import */ var utils_cookies__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/cookies */ "./utils/cookies.js");


var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/formik/LoginFormik.js";









 // import { login } from 'utils/http/auth';

var errorStyles = {
  color: 'red',
  marginLeft: '7px',
  marginTop: '7px'
};

var renderField = function renderField(type, name, placeholder) {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FieldWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
    type: type,
    name: name,
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["ErrorMessage"], {
    name: name,
    component: "div",
    style: errorStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
};

var logUserIn = function logUserIn(_ref) {
  var setLoading = _ref.setLoading,
      setLoadingText = _ref.setLoadingText,
      values = _ref.values,
      setFieldError = _ref.setFieldError,
      dispatch = _ref.dispatch,
      router = _ref.router;
  setLoading(true);
  setLoadingText('Logging in...');
  var email = values.email,
      password = values.password,
      rememberMe = values.rememberMe;

  if (typeof rememberMe !== 'undefined') {
    Object(utils_cookies__WEBPACK_IMPORTED_MODULE_11__["setCookie"])('rememberMe', rememberMe);
  }

  dispatch(Object(actions_auth__WEBPACK_IMPORTED_MODULE_10__["login"])({
    username: email,
    password: password,
    router: router
  })).then(function (res) {
    setLoading(false);
    setLoadingText('');
  }).catch(function (error) {
    setLoading(false);
    setLoadingText(''); // dispatch(flashError());
  });
};

var LoginFormik = function LoginFormik(_ref2) {
  var dispatch = _ref2.dispatch,
      router = _ref2.router,
      setLoading = _ref2.setLoading,
      setLoadingText = _ref2.setLoadingText;
  var rememberMe = Object(utils_cookies__WEBPACK_IMPORTED_MODULE_11__["getCookie"])('rememberMe');
  var submitText = 'submitText';
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FormikContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Formik"], {
    initialValues: {
      email: '',
      password: '',
      rememberMe: rememberMe
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.email) {
        errors.email = 'Required';
      } else if (!values.password) {
        errors.password = 'Required';
      } // else if (
      //   !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      // ) {
      //   errors.email = 'Invalid email address';
      // }


      return errors;
    },
    onSubmit: function onSubmit(values, _ref3) {
      var setSubmitting = _ref3.setSubmitting,
          setFieldError = _ref3.setFieldError;
      setTimeout(
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logUserIn({
                  setLoading: setLoading,
                  setLoadingText: setLoadingText,
                  values: values,
                  setFieldError: setFieldError,
                  dispatch: dispatch,
                  router: router
                });
                setSubmitting(false);

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), 400);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, function (_ref5) {
    var isSubmitting = _ref5.isSubmitting,
        setFieldValue = _ref5.setFieldValue,
        errors = _ref5.errors,
        values = _ref5.values,
        touched = _ref5.touched,
        submitCount = _ref5.submitCount;
    var showError = submitCount > 0 || touched.checkbox;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(InputsWrapper, {
      hasError: errors.server,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, renderField('text', 'email', 'Username or Email'), renderField('password', 'password', 'Password')), errors.server && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ServerError, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, errors.server), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Controls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(FieldWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_7__["Field"], {
      visible: true,
      initialValue: values.rememberMe,
      value: values.rememberMe,
      style: {
        justifyContent: 'center'
      },
      name: "rememberMe",
      width: "25px" // discrepency with svg, flex, and too much text
      ,
      fill: "cornflowerblue",
      label: "Remember Me",
      component: components_atoms_Checkbox__WEBPACK_IMPORTED_MODULE_9__["default"] // CustomLabel={() => 'Remember Me'}
      ,
      onChange: function onChange(checked) {
        setFieldValue('rememberMe', checked);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }), showError && errors.checkbox && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ServerError, {
      style: {
        marginLeft: '7px',
        marginTop: '7px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, errors.checkbox)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(BottomBtnWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(components_atoms_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
      style: {
        width: '100%',
        borderRadius: '3px'
      } // keep in sync
      ,
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138
      },
      __self: this
    }, submitText || 'Submit')))));
  }));
};

LoginFormik.propTypes = {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object.isRequired,
  setLoading: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,
  setLoadingText: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps)(LoginFormik)));
var grow = Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["display:flex;flex-direction:column;flex-grow:1;"]);
var FormikContainer = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "LoginFormik__FormikContainer",
  componentId: "ecajyy-0"
})(["", " text-align:left;"], grow);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "LoginFormik__Container",
  componentId: "ecajyy-1"
})(["display:flex;flex-direction:column;justify-content:space-between;"]);
var Controls = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "LoginFormik__Controls",
  componentId: "ecajyy-2"
})(["display:flex;justify-content:space-between;align-items:center;flex-direction:column;margin-top:10px;@media screen and (min-width:600px){flex-direction:row;}> div{width:100%;}"]);
var InputsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "LoginFormik__InputsWrapper",
  componentId: "ecajyy-3"
})(["border-left:5px solid transparent;padding:2px;transition:border-color 0.3s;", ""], function (_ref6) {
  var hasError = _ref6.hasError;
  return hasError && Object(styled_components__WEBPACK_IMPORTED_MODULE_6__["css"])(["border-color:'red';"]);
});
var ServerError = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "LoginFormik__ServerError",
  componentId: "ecajyy-4"
})(["color:'red';"]);
var FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "LoginFormik__FieldWrapper",
  componentId: "ecajyy-5"
})(["display:flex;flex-direction:column;&:not(:first-of-type){margin-top:15px;}input{font-size:1rem;line-height:1.5rem;padding-left:0.4rem;&::placeholder{opacity:0.4;}}"]);
var BottomBtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6___default.a.div.withConfig({
  displayName: "LoginFormik__BottomBtnWrapper",
  componentId: "ecajyy-6"
})(["@media screen and (max-width:599px){margin-top:15px;}"]);

/***/ }),

/***/ "./components/formik/SignupFormik.js":
/*!*******************************************!*\
  !*** ./components/formik/SignupFormik.js ***!
  \*******************************************/
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
/* harmony import */ var components_atoms_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/atoms/Checkbox */ "./components/atoms/Checkbox.js");
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/auth */ "./actions/auth.js");
/* harmony import */ var utils_http_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! utils/http/user */ "./utils/http/user.js");
/* harmony import */ var utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! utils/hooks/useClearTimeout */ "./utils/hooks/useClearTimeout.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/formik/SignupFormik.js";











var errorStyles = {
  color: 'red',
  marginLeft: '7px',
  marginTop: '7px'
};

var renderField = function renderField(type, name, placeholder) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
    type: type,
    name: name,
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
    name: name,
    component: "div",
    style: errorStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }));
};

var signUserUp = function signUserUp(_ref) {
  var values = _ref.values,
      dispatch = _ref.dispatch,
      router = _ref.router,
      doneLoading = _ref.doneLoading;
  var user = {
    firstName: values.firstName,
    lastName: values.lastName,
    email: values.email,
    password: values.password,
    // falls back to email if no username supplied
    username: values.username || values.email
  };
  Object(utils_http_user__WEBPACK_IMPORTED_MODULE_9__["createUser"])(user).then(function (res) {
    doneLoading();

    if (res && 'id' in res) {
      // complete login
      var loginUserObject = {
        username: res.username,
        password: values.password,
        redirect: false
      };
      dispatch(Object(actions_auth__WEBPACK_IMPORTED_MODULE_8__["login"])(loginUserObject)).then(function (isSuccess) {
        doneLoading();

        if (isSuccess) {
          router.push('/dashboard');
        }
      }).catch(function (error) {
        doneLoading(); // dispatch(flashError());
      });
    }
  }).catch(function (err) {
    doneLoading(); // eslint-disable-next-line

    console.log({
      err: err
    });
  });
};

var SignupFormik = function SignupFormik(_ref2) {
  var dispatch = _ref2.dispatch,
      router = _ref2.router,
      setLoading = _ref2.setLoading,
      setLoadingText = _ref2.setLoadingText,
      doneLoading = _ref2.doneLoading;
  var submitText = 'submitText';
  var timeoutSubmit;
  Object(utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_10__["default"])(timeoutSubmit);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormikContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Formik"], {
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      rePassword: '',
      checkbox: false
    },
    validate: function validate(values) {
      var errors = {};

      if (!values.firstName) {
        errors.firstName = 'Required';
      } else if (!values.lastName) {
        errors.lastName = 'Required';
      } else if (!values.email) {
        errors.email = 'Required';
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      } else if (!values.password) {
        errors.password = 'Required';
      } else if (values.password.length < 8) {
        errors.password = 'Password must be a minimum of 9 characters.';
      } else if (!values.rePassword) {
        errors.rePassword = 'Required';
      } else if (values.password !== values.rePassword) {
        errors.rePassword = 'Passwords must match.';
      } else if (!values.checkbox) {
        errors.checkbox = 'Must agree to terms and conditions.';
      }

      return errors;
    },
    onSubmit: function onSubmit(values, _ref3) {
      var setSubmitting = _ref3.setSubmitting,
          setFieldError = _ref3.setFieldError;
      setLoading(true);
      setLoadingText('Signing up...');
      timeoutSubmit = setTimeout(function () {
        signUserUp({
          doneLoading: doneLoading,
          values: values,
          setFieldError: setFieldError,
          dispatch: dispatch,
          router: router
        });
        setSubmitting(false);
      }, 400);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, function (_ref4) {
    var isSubmitting = _ref4.isSubmitting,
        setFieldValue = _ref4.setFieldValue,
        errors = _ref4.errors,
        values = _ref4.values,
        touched = _ref4.touched,
        submitCount = _ref4.submitCount;
    var showError = submitCount > 0 || touched.checkbox;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputsWrapper, {
      hasError: errors.server,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145
      },
      __self: this
    }, renderField('text', 'firstName', 'First Name'), renderField('text', 'lastName', 'Last Name'), renderField('email', 'email', 'Email'), renderField('text', 'username', 'Username (optional - defaults to email)'), renderField('password', 'password', 'Password'), renderField('password', 'rePassword', 'Re-enter Password')), errors.server && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServerError, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157
      },
      __self: this
    }, errors.server), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Controls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FieldWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
      visible: true,
      initialValue: values.checkbox,
      value: values.checkbox,
      style: {
        justifyContent: 'center'
      },
      name: "checkbox",
      width: "25px" // discrepency with svg, flex, and too much text
      ,
      fill: "cornflowerblue",
      label: "Label",
      component: components_atoms_Checkbox__WEBPACK_IMPORTED_MODULE_7__["default"],
      CustomLabel: function CustomLabel() {
        return 'CheckboxCustomLabel';
      },
      onChange: function onChange(checked) {
        setFieldValue('checkbox', checked);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }), showError && errors.checkbox && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServerError, {
      style: {
        marginLeft: '7px',
        marginTop: '7px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, errors.checkbox)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomBtnWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_atoms_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      style: {
        width: '100%',
        borderRadius: '3px'
      } // keep in sync
      ,
      type: "submit",
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184
      },
      __self: this
    }, submitText || 'Submit')))));
  }));
};

SignupFormik.propTypes = {
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  doneLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  setLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  setLoadingText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(SignupFormik)));
var grow = Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["display:flex;flex-direction:column;flex-grow:1;"]);
var FormikContainer = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SignupFormik__FormikContainer",
  componentId: "sc-1kggeb7-0"
})(["", " text-align:left;"], grow);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SignupFormik__Container",
  componentId: "sc-1kggeb7-1"
})(["display:flex;flex-direction:column;"]);
var Controls = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SignupFormik__Controls",
  componentId: "sc-1kggeb7-2"
})(["display:flex;justify-content:space-between;align-items:center;flex-direction:column;margin-top:10px;@media screen and (min-width:600px){flex-direction:row;}> div{width:100%;}"]);
var InputsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SignupFormik__InputsWrapper",
  componentId: "sc-1kggeb7-3"
})(["border-left:5px solid transparent;padding:2px;transition:border-color 0.3s;", ""], function (_ref5) {
  var hasError = _ref5.hasError;
  return hasError && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["border-color:'red';"]);
});
var ServerError = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SignupFormik__ServerError",
  componentId: "sc-1kggeb7-4"
})(["color:'red';"]);
var FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SignupFormik__FieldWrapper",
  componentId: "sc-1kggeb7-5"
})(["display:flex;flex-direction:column;&:not(:first-of-type){margin-top:15px;}input{font-size:1rem;line-height:1.5rem;padding-left:0.4rem;&::placeholder{opacity:0.4;}}"]);
var BottomBtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SignupFormik__BottomBtnWrapper",
  componentId: "sc-1kggeb7-6"
})(["@media screen and (max-width:599px){margin-top:15px;}"]);

/***/ }),

/***/ "./components/icons/Checkbox.js":
/*!**************************************!*\
  !*** ./components/icons/Checkbox.js ***!
  \**************************************/
/*! exports provided: Checkbox, CheckboxChecked */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return Checkbox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckboxChecked", function() { return CheckboxChecked; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/propTypes */ "./utils/propTypes.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/icons/Checkbox.js";


var Checkbox = function Checkbox(_ref) {
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
    width: width,
    d: "M82 90H18c-4.4 0-8-3.6-8-8V18c0-4.4 3.6-8 8-8h64c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8zm-7.4-56.7c-1.9-1.7-4.9-1.7-6.7 0l-25.7 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }));
};
Checkbox.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
var CheckboxChecked = function CheckboxChecked(_ref2) {
  var fill = _ref2.fill,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? '100%' : _ref2$width,
      _ref2$style = _ref2.style,
      style = _ref2$style === void 0 ? {} : _ref2$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: style,
    width: width,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    width: width,
    d: "M82 90H18c-4.4 0-8-3.6-8-8V18c0-4.4 3.6-8 8-8h64c4.4 0 8 3.6 8 8v64c0 4.4-3.6 8-8 8zm-7.4-56.7c-1.9-1.7-4.9-1.7-6.7 0l-25.7 24-10.1-9.4c-1.9-1.7-4.9-1.7-6.7 0-1.9 1.7-1.9 4.5 0 6.3l13.4 12.5c1.9 1.7 4.9 1.7 6.7 0l29.1-27.2c1.9-1.7 1.9-4.5 0-6.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
};
CheckboxChecked.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];

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

/***/ "./components/icons/UserIcon.js":
/*!**************************************!*\
  !*** ./components/icons/UserIcon.js ***!
  \**************************************/
/*! exports provided: UserIconTie, UserIconTieLocked, UserIconTieSuccess, UserIconTieFail, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIconTie", function() { return UserIconTie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIconTieLocked", function() { return UserIconTieLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIconTieSuccess", function() { return UserIconTieSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIconTieFail", function() { return UserIconTieFail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var utils_propTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! utils/propTypes */ "./utils/propTypes.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/icons/UserIcon.js";



var UserIcon = function UserIcon(_ref) {
  var fill = _ref.fill,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? '100%' : _ref$width,
      _ref$style = _ref.style,
      style = _ref$style === void 0 ? {} : _ref$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 60 60",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M30 6C16.767 6 6 16.767 6 30s10.767 24 24 24 24-10.767 24-24S43.233 6 30 6zm0 46a21.91 21.91 0 0 1-14.671-5.624C15.54 38.46 22.033 32.08 30 32.08s14.46 6.379 14.672 14.296A21.91 21.91 0 0 1 30 52zm16.52-7.494C45.408 36.373 38.434 30.08 30 30.08c-8.433 0-15.408 6.293-16.52 14.426C10.074 40.631 8 35.554 8 30 8 17.87 17.87 8 30 8s22 9.87 22 22c0 5.554-2.073 10.63-5.48 14.506z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M30 12.69c-3.938 0-7.141 3.203-7.141 7.14 0 3.939 3.203 7.142 7.141 7.142a7.15 7.15 0 0 0 7.142-7.141c0-3.938-3.204-7.142-7.142-7.142zm0 12.282c-2.835 0-5.141-2.306-5.141-5.141s2.306-5.142 5.141-5.142 5.142 2.307 5.142 5.142-2.307 5.141-5.142 5.141z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }));
};

var UserIconTie = function UserIconTie(_ref2) {
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
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M14.906 72.148s.561-21.135 20.771-25c0 0 8.979 10.298 10.979 15.964v-8.143l-2.125.1.049-2.922h9.793l-.029 2.922-1.787-.064-.115 8.461s11.246-15.85 12.623-15.895c1.5.417 18.129 4.581 18.963 24.581 0 0-9.768 21.332-34.561 20.332-24.792-1-34.561-20.336-34.561-20.336z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M32.657 27.649c0 11.138 10.125 20.166 16.583 20.166 6.542 0 16.583-9.028 16.583-20.166v.156c0-11.225-7.426-20.323-16.583-20.323-9.158 0-16.583 9.098-16.583 20.323v-.156z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};
var UserIconTieLocked = function UserIconTieLocked(_ref3) {
  var fill = _ref3.fill,
      _ref3$width = _ref3.width,
      width = _ref3$width === void 0 ? '100%' : _ref3$width,
      _ref3$style = _ref3.style,
      style = _ref3$style === void 0 ? {} : _ref3$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-205 207 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M-176.9 228.6c.8-18 15.9-17.8 17.4-17.8 1.5-.1 16.5-.2 17.4 17.8 0 0 2.9 26.9-17.2 27.1h-.1-.1c-20.4-.1-17.4-27.1-17.4-27.1zm34.7 74.6H-196.4v-16-3.6-.1c.2-5.8 1.3-9.8 7.2-13.6 7.9-4.9 16.7-9.2 16.7-9.2l7 22.1 4.1-11.6c-7.2-10 .5-10.5 1.9-10.5s9.1.5 1.9 10.5l4.1 11.6 7-22.1s6.5 3.2 13.3 7.2c-4.1 2-6.9 6.3-6.9 11.2v3.8c-1.8 1.5-3 3.8-3 6.2v10.1c-.1 1.5.3 2.8.9 4zm-54.2-19.7c0-.2 0-.1 0 0zm61.3 19.7c-2.1 0-3.8-1.7-3.8-3.8v-10.1c0-1.8 1.3-3.4 3-3.8 0-.3-.1-.7-.1-1v-5.3c0-4.6 3.7-8.3 8.3-8.3h3.1c4.6 0 8.3 3.7 8.3 8.3v5.3c0 .3 0 .7-.1 1 1.7.4 3 1.9 3 3.7v10.1c0 2.1-1.7 3.8-3.8 3.8h-17.9zm11-10.3c0-1-.7-1.9-1.7-2.1h-.4c-.8 0-1.6.5-1.9 1.3-.4.9-.1 1.9.7 2.6.2.1.2.2.2.4v2.7c0 .6.5 1 1 1 .6 0 1-.5 1-1v-2.7c0-.2 0-.3.2-.5.6-.4.9-1 .9-1.7zm-7.7-8.4c0 .3 0 .6.1.9h11c.1-.3.1-.6.1-.9v-5.3c0-2.2-1.8-4.1-4.1-4.1h-3.1c-2.2 0-4.1 1.8-4.1 4.1v5.3z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }));
};
var UserIconTieSuccess = function UserIconTieSuccess(_ref4) {
  var fill = _ref4.fill,
      _ref4$width = _ref4.width,
      width = _ref4$width === void 0 ? '100%' : _ref4$width,
      _ref4$style = _ref4.style,
      style = _ref4$style === void 0 ? {} : _ref4$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-255 347 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M-229.1 372.6c.7-15.5 13.7-15.4 15-15.3 1.3-.1 14.2-.2 15 15.3 0 0 2.5 23.2-14.8 23.4h-.1-.1c-17.6-.2-15-23.4-15-23.4zm39.6 64.2H-246V423v-3.1-.1c.1-5 1.1-8.5 6.2-11.7 6.8-4.3 14.4-7.9 14.4-7.9l6 19.1 3.5-10c-6.2-8.6.4-9.1 1.6-9.1 1.2 0 7.8.4 1.6 9.1l3.5 10 6-19.1s7.6 3.7 14.4 7.9c4.4 2.7 5.7 5.7 6.1 9.6-.5.6-1.1 1.2-1.6 1.8-.2.2-.4.4-.6.7-.3-.2-.5-.4-.8-.6-1.7-1.3-3.5-2.7-5.3-4.1-1.2-.9-2.4-1.3-3.6-1.3-2 0-3.4 1.2-4.2 2-.3.3-.5.6-.7.8-1.5 1.8-1.6 4.1-.4 6l.1.2c.4.7.9 1.4 1.4 2.1 3 3.9 6 7.7 8.9 11.5zm-56.4-17c0-.1 0-.1 0 0zm63.2 16c6-8.7 12.1-17.3 18.1-26 .9-1.3.8-1.7-.4-2.7-.9-.7-1.4-1.1-2-1.1-.6 0-1.2.5-2 1.4-4.2 4.8-8.3 9.7-12.5 14.5-.9 1.1-1.9 2.1-2.8 3.3-.5-.4-.9-.7-1.4-1.1-2.5-1.9-4.9-3.8-7.4-5.7-.6-.4-1-.6-1.4-.6-.5 0-1 .3-1.7.9-.2.2-.3.4-.5.6-.4.5-.5 1.1-.1 1.7.4.7.9 1.4 1.4 2.1 3.3 4.3 6.6 8.5 9.9 12.8.4.5.9.8 1.3.8.5.1 1-.2 1.5-.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }));
};
var UserIconTieFail = function UserIconTieFail(_ref5) {
  var fill = _ref5.fill,
      _ref5$width = _ref5.width,
      width = _ref5$width === void 0 ? '100%' : _ref5$width,
      _ref5$style = _ref5.style,
      style = _ref5$style === void 0 ? {} : _ref5$style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    width: width,
    style: style,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "-255 347 100 100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: fill,
    d: "M-225 367.7c.7-15 13.3-14.9 14.5-14.9 1.2 0 13.8-.2 14.5 14.9 0 0 2.4 22.5-14.4 22.7h-.1-.1c-16.9-.1-14.4-22.7-14.4-22.7zm31 62.4h-47.3v-13.4-3-.1c.1-4.9 1.1-8.2 6-11.3 6.6-4.1 13.9-7.7 13.9-7.7l5.8 18.5 3.4-9.7c-6-8.4.4-8.8 1.6-8.8 1.1 0 7.6.4 1.6 8.8l3.4 9.7 5.8-18.5s7.3 3.6 13.9 7.7c5 3.1 5.9 6.5 6 11.3v2.2c-7.7-.1-14.1 6.3-14.1 14.3zm14.2-16.5c0-.1 0-.1 0 0zm-61.5 0c0-.1 0-.1 0 0zm72.7 16.5c0 6.1-5 11.1-11.1 11.1s-11.1-5-11.1-11.1 5-11.1 11.1-11.1 11.1 4.9 11.1 11.1zm-8.5 0l2.9-2.9c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-2.9 2.9-2.9-2.9c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l2.9 2.9-2.9 2.9c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l2.9-2.9 2.9 2.9c.7.7 1.8.7 2.5 0s.7-1.8 0-2.5l-2.9-2.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }));
};
UserIcon.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
UserIconTie.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
UserIconTieLocked.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
UserIconTieSuccess.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
UserIconTieFail.propTypes = utils_propTypes__WEBPACK_IMPORTED_MODULE_1__["SVGPropTypes"];
/* harmony default export */ __webpack_exports__["default"] = (UserIcon);

/***/ }),

/***/ "./components/modals/LoginModal.js":
/*!*****************************************!*\
  !*** ./components/modals/LoginModal.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/Spinner */ "./components/Spinner.js");
/* harmony import */ var components_modals___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/modals/ */ "./components/modals/index.js");
/* harmony import */ var components_formik_LoginFormik__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/formik/LoginFormik */ "./components/formik/LoginFormik.js");
/* harmony import */ var components_icons_UserIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/icons/UserIcon */ "./components/icons/UserIcon.js");

var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/modals/LoginModal.js";









var LoginModal = function LoginModal(_ref) {
  var isOpen = _ref.isOpen,
      onRequestClose = _ref.onRequestClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Loading...'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      loadingText = _useState4[0],
      setLoadingText = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_modals___WEBPACK_IMPORTED_MODULE_6__["default"], {
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Spinner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    cover: true,
    loading: loading,
    loadingText: loadingText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_icons_UserIcon__WEBPACK_IMPORTED_MODULE_8__["UserIconTieLocked"], {
    width: "55px",
    fill: "cornflowerblue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "LOGIN")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formik_LoginFormik__WEBPACK_IMPORTED_MODULE_7__["default"], {
    setLoading: setLoading,
    setLoadingText: setLoadingText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/signup",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Signup"))));
};

LoginModal.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (LoginModal);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "LoginModal__Container",
  componentId: "sc-133y5t9-0"
})(["color:", ";display:flex;flex-direction:column;flex-grow:1;a{text-decoration:none;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.Primary;
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "LoginModal__Header",
  componentId: "sc-133y5t9-1"
})(["display:flex;align-items:center;justify-content:center;margin-bottom:15px;h2{font-size:2rem;display:flex;align-items:center;justify-content:center;text-align:center;margin:0;margin-left:25px;padding:0;}"]);

/***/ }),

/***/ "./components/modals/SignupModal.js":
/*!******************************************!*\
  !*** ./components/modals/SignupModal.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "../node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var components_modals___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/modals/ */ "./components/modals/index.js");
/* harmony import */ var components_formik_SignupFormik__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/formik/SignupFormik */ "./components/formik/SignupFormik.js");
/* harmony import */ var components_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/Spinner */ "./components/Spinner.js");
/* harmony import */ var components_icons_UserIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! components/icons/UserIcon */ "./components/icons/UserIcon.js");

var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/components/modals/SignupModal.js";









var SignupModal = function SignupModal(_ref) {
  var isOpen = _ref.isOpen,
      onRequestClose = _ref.onRequestClose;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('Loading...'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      loadingText = _useState4[0],
      setLoadingText = _useState4[1];

  var doneLoading = function doneLoading() {
    setLoading(false);
    setLoadingText('');
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_modals___WEBPACK_IMPORTED_MODULE_5__["default"], {
    isOpen: isOpen,
    onRequestClose: onRequestClose,
    height: "auto",
    maxHeight: "1200px",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"], {
    loading: loading,
    loadingText: loadingText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_icons_UserIcon__WEBPACK_IMPORTED_MODULE_8__["UserIconTie"], {
    width: "65px",
    fill: "cornflowerblue",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "SIGNUP")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formik_SignupFormik__WEBPACK_IMPORTED_MODULE_6__["default"], {
    setLoading: setLoading,
    setLoadingText: setLoadingText,
    doneLoading: doneLoading,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Login"))));
};

SignupModal.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (SignupModal);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SignupModal__Container",
  componentId: "gky63j-0"
})(["color:", ";display:flex;flex-direction:column;flex-grow:1;a{text-decoration:none;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.Primary;
});
var Header = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "SignupModal__Header",
  componentId: "gky63j-1"
})(["display:flex;align-items:center;justify-content:center;margin-bottom:15px;h2{font-size:2rem;display:flex;align-items:center;justify-content:center;text-align:center;margin:0;margin-left:25px;padding:0;}"]);

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

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! components/Home */ "./components/Home.js");
var _jsxFileName = "/Users/michaelschmerbeck/yeoman/client/src/pages/login.js";



var Login = function Login() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
    tab: "login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

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
        var data;
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
                // return entire response if not OK
                resolve(res);

              case 6:
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

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/michaelschmerbeck/yeoman/client/src/pages/login.js */"./pages/login.js");


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

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

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

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

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

/***/ })

/******/ });
//# sourceMappingURL=login.js.map