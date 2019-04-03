webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/modals/ChangePasswordModal.js":
/*!**************************************************!*\
  !*** ./components/modals/ChangePasswordModal.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
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

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_modals___WEBPACK_IMPORTED_MODULE_4__["default"], {
    clickOutsideClose: false,
    isOpen: isOpen,
    onRequestClose: function onRequestClose() {
      // clean up
      // resetForm && resetForm();
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
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, "Change Password"));
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(components_formik_ChangePasswordFormik__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onRequestClose: _onRequestClose,
    doneLoading: doneLoading,
    setLoading: setLoading,
    setLoadingText: setLoadingText,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
};

ChangePasswordModal.propTypes = {
  isOpen: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool.isRequired,
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ChangePasswordModal);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ChangePasswordModal__Container",
  componentId: "sc-13duaqb-0"
})(["color:", ";display:flex;flex-direction:column;flex-grow:1;a{text-decoration:none;}"], function (_ref2) {
  var theme = _ref2.theme;
  return theme.colors.Primary;
});
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "ChangePasswordModal__Flex",
  componentId: "sc-13duaqb-1"
})(["", ";", ";"], function (_ref3) {
  var theme = _ref3.theme;
  return theme.styles.grow;
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme.styles.middle;
});
var Title = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].h2.withConfig({
  displayName: "ChangePasswordModal__Title",
  componentId: "sc-13duaqb-2"
})(["color:", ";margin:0;padding:0;"], function (_ref5) {
  var theme = _ref5.theme;
  return theme.colors.Primary;
});

/***/ })

})
//# sourceMappingURL=_app.js.aa96dab1a9c440dd75b6.hot-update.js.map