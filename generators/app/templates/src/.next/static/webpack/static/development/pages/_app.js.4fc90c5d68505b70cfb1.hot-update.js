webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/formik/ChangePasswordFormik.js":
/*!***************************************************!*\
  !*** ./components/formik/ChangePasswordFormik.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "../node_modules/react-redux/es/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "../node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "../node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "../node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! formik */ "../node_modules/formik/dist/formik.esm.js");
/* harmony import */ var components_atoms_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/atoms/Button */ "./components/atoms/Button.js");
/* harmony import */ var components_atoms_Checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/atoms/Checkbox */ "./components/atoms/Checkbox.js");
/* harmony import */ var actions_flashMessage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! actions/flashMessage */ "./actions/flashMessage.js");
/* harmony import */ var actions_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! actions/auth */ "./actions/auth.js");
/* harmony import */ var actions_user__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! actions/user */ "./actions/user.js");
/* harmony import */ var utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! utils/hooks/useClearTimeout */ "./utils/hooks/useClearTimeout.js");
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
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Field"], {
    type: type,
    name: name,
    placeholder: placeholder,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["ErrorMessage"], {
    name: name,
    component: "div",
    style: errorStyles,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }));
};

var ChangePasswordFormik = function ChangePasswordFormik(_ref) {
  var dispatch = _ref.dispatch,
      router = _ref.router,
      onRequestClose = _ref.onRequestClose,
      setLoading = _ref.setLoading,
      setLoadingText = _ref.setLoadingText,
      doneLoading = _ref.doneLoading;
  var submitText = 'submitText';
  var timeoutSubmit;
  Object(utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_11__["default"])(timeoutSubmit);
  var timeoutReset;
  Object(utils_hooks_useClearTimeout__WEBPACK_IMPORTED_MODULE_11__["default"])(timeoutReset);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FormikContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
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
        dispatch(Object(actions_user__WEBPACK_IMPORTED_MODULE_10__["updateUser"])(userCreds)).then(function (res) {
          onRequestClose();
          dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_8__["flashSuccess"])('Successfully updated password!'));
          timeoutReset = setTimeout(resetForm, 400);
        }).catch(function (error) {
          setFieldValue('newPassword', '');
          setFieldValue('rePassword', '');

          if (error.code === 401) {
            setFieldError('password', 'Password Incorrect.');
          }

          if (error.message) {
            dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_8__["flashError"])(error.message));
          } else {
            dispatch(Object(actions_flashMessage__WEBPACK_IMPORTED_MODULE_8__["flashError"])());
          }
        });
        setSubmitting(false);
      }, 400);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, function (_ref3) {
    var isSubmitting = _ref3.isSubmitting,
        errors = _ref3.errors,
        touched = _ref3.touched,
        submitCount = _ref3.submitCount;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_5__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Flex, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InputsWrapper, {
      hasError: errors.server,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: this
    }, renderField('password', 'password', 'Current Password'), renderField('password', 'newPassword', 'New Password'), renderField('password', 'rePassword', 'Re-enter New Password')), errors.server && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ServerError, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, errors.server)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Controls, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomBtnWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
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
        lineNumber: 124
      },
      __self: this
    }, "Cancel")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomBtnWrapper, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
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
        lineNumber: 133
      },
      __self: this
    }, submitText || 'Submit')))));
  }));
};

ChangePasswordFormik.propTypes = {
  onRequestClose: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  dispatch: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  router: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  doneLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  setLoading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func,
  setLoadingText: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func
};

var mapStateToProps = function mapStateToProps(state) {
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps)(ChangePasswordFormik)));
var FormikContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ChangePasswordFormik__FormikContainer",
  componentId: "sc-1fbq0j7-0"
})(["", ";text-align:left;form{", ";}"], function (_ref4) {
  var theme = _ref4.theme;
  return theme.styles.grow;
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.styles.grow;
});
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ChangePasswordFormik__Flex",
  componentId: "sc-1fbq0j7-1"
})(["", ";"], function (_ref6) {
  var theme = _ref6.theme;
  return theme.styles.grow;
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ChangePasswordFormik__Container",
  componentId: "sc-1fbq0j7-2"
})(["", ";"], function (_ref7) {
  var theme = _ref7.theme;
  return theme.styles.grow;
});
var InputsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ChangePasswordFormik__InputsWrapper",
  componentId: "sc-1fbq0j7-3"
})(["border-left:5px solid transparent;padding:2px;transition:border-color 0.3s;", ""], function (_ref8) {
  var hasError = _ref8.hasError;
  return hasError && Object(styled_components__WEBPACK_IMPORTED_MODULE_4__["css"])(["border-color:'red';"]);
});
var ServerError = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ChangePasswordFormik__ServerError",
  componentId: "sc-1fbq0j7-4"
})(["color:'red';"]);
var FieldWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ChangePasswordFormik__FieldWrapper",
  componentId: "sc-1fbq0j7-5"
})(["display:flex;flex-direction:column;&:not(:first-of-type){margin-top:15px;}input{font-size:1rem;line-height:1.5rem;padding-left:0.4rem;&::placeholder{opacity:0.4;}}"]);
var Controls = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ChangePasswordFormik__Controls",
  componentId: "sc-1fbq0j7-6"
})(["display:flex;justify-content:space-between;align-items:center;flex-direction:column;margin-top:10px;@media screen and (min-width:600px){flex-direction:row;}"]);
var BottomBtnWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__["default"].div.withConfig({
  displayName: "ChangePasswordFormik__BottomBtnWrapper",
  componentId: "sc-1fbq0j7-7"
})(["width:49%;@media screen and (max-width:599px){margin-top:15px;}"]);

/***/ })

})
//# sourceMappingURL=_app.js.4fc90c5d68505b70cfb1.hot-update.js.map