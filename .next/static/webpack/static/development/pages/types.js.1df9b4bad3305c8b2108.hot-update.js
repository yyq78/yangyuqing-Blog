webpackHotUpdate("static\\development\\pages\\types.js",{

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _LinkItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LinkItem */ "./components/LinkItem.js");
var _jsxFileName = "D:\\yangyuqing-Blog\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





var Layout = function Layout(props) {
  var links = [{
    path: "/",
    icon: "home",
    text: "首页",
    isActive: true
  }, {
    path: "/types",
    icon: "bulb",
    text: "分类",
    isActive: false
  }, {
    path: "/tags",
    icon: "tags",
    text: "标签",
    isActive: false
  }, {
    path: "/archives",
    icon: "file",
    text: "归档",
    isActive: false
  }, {
    path: "/about",
    icon: "share-alt",
    text: "关于我",
    isActive: false
  }];
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  for (var i = 0; i < links.length; i++) {
    if (links[i].path === router.pathname) {
      links[i]['isActive'] = true;
    } else {
      links[i]['isActive'] = false;
    }
  }

  return __jsx("div", {
    className: "jsx-597417063" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-597417063" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-597417063" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-597417063" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Blog"), __jsx("ul", {
    className: "jsx-597417063" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, links.map(function (item, index) {
    return __jsx(_LinkItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
      path: item.path,
      icon: item.icon,
      text: item.text,
      key: index,
      isActive: item.isActive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    });
  })))), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "597417063",
    __self: this
  }, "*.jsx-597417063{margin:0;padding:0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;}h1.jsx-597417063,a.jsx-597417063{font-family:'Arial';}ul.jsx-597417063{padding:0;overflow:hidden;line-height:48px;}.menu.jsx-597417063{width:723px;margin:0 auto;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header.jsx-597417063{background:#1B1C1D;color:rgba(255,255,255,.9);}.title.jsx-597417063{float:left;color:#00B5AD;font-size:24px;padding:19px 22px;}.links.jsx-597417063{float:left;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx5YW5neXVxaW5nLUJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRW9CLEFBR3lCLEFBS1ksQUFHVixBQU1FLEFBUU8sQUFJVCxBQU9BLFNBaENELENBUU0sQ0FrQkQsQUFPQyxDQW5CRCxPQWIrQyxBQXFCbEMsQ0FqQi9CLEtBc0JrQixDQWxCRSxBQU1ELENBbUJuQixhQUxxQixFQWJMLENBTmhCLEdBYUEsWUFPQSxzQkE1QkEsb0NBZTBCLG1HQUNKLDZGQUN0QiIsImZpbGUiOiJEOlxceWFuZ3l1cWluZy1CbG9nXFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBMaW5rSXRlbSBmcm9tICcuL0xpbmtJdGVtJztcclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKT0+e1xyXG4gICAgY29uc3QgbGlua3MgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOlwiL1wiLFxyXG4gICAgICAgICAgICBpY29uOlwiaG9tZVwiLFxyXG4gICAgICAgICAgICB0ZXh0Olwi6aaW6aG1XCIsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOnRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6XCIvdHlwZXNcIixcclxuICAgICAgICAgICAgaWNvbjpcImJ1bGJcIixcclxuICAgICAgICAgICAgdGV4dDpcIuWIhuexu1wiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDpcIi90YWdzXCIsXHJcbiAgICAgICAgICAgIGljb246XCJ0YWdzXCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCLmoIfnrb5cIixcclxuICAgICAgICAgICAgaXNBY3RpdmU6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6XCIvYXJjaGl2ZXNcIixcclxuICAgICAgICAgICAgaWNvbjpcImZpbGVcIixcclxuICAgICAgICAgICAgdGV4dDpcIuW9kuaho1wiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDpcIi9hYm91dFwiLFxyXG4gICAgICAgICAgICBpY29uOlwic2hhcmUtYWx0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCLlhbPkuo7miJFcIixcclxuICAgICAgICAgICAgaXNBY3RpdmU6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGZvcih2YXIgaT0wO2k8bGlua3MubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgaWYobGlua3NbaV0ucGF0aCA9PT0gcm91dGVyLnBhdGhuYW1lKXtcclxuICAgICAgICAgICAgbGlua3NbaV1bJ2lzQWN0aXZlJ10gPSB0cnVlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBsaW5rc1tpXVsnaXNBY3RpdmUnXSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QmxvZzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlua0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17aXRlbS5wYXRofSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpdGVtLmljb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtpdGVtLmlzQWN0aXZlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgKntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sJ0hlbHZldGljYSBOZXVlJyxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMSxhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDo0OHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubWVudXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MjNweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFCMUMxRDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMEI1QUQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxOXB4IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtze1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcblxyXG4iXX0= */\n/*@ sourceURL=D:\\\\yangyuqing-Blog\\\\components\\\\Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/LinkItem.js":
/*!********************************!*\
  !*** ./components/LinkItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\yangyuqing-Blog\\components\\LinkItem.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

var LinkItem = function LinkItem(_ref) {
  var path = _ref.path,
      icon = _ref.icon,
      text = _ref.text,
      isActive = _ref.isActive;
  return __jsx("li", {
    className: "jsx-170144276" + " " + "links-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2
    },
    __self: this
  }, __jsx(Link, {
    href: path,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("a", {
    className: "jsx-170144276" + " " + ((isActive ? "active" : "") || ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("span", {
    className: "jsx-170144276" + " " + "icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx(Icon, {
    type: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  })), " ", text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "170144276",
    __self: this
  }, "li.jsx-170144276{float:left;list-style:none;margin:0 5px;}a.jsx-170144276{-webkit-text-decoration:none;text-decoration:none;line-height:14px;font-size:14px;vertical-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;box-shadow:none;border:none;color:#fff;opacity:0.6;-webkit-transition:color .1s ease;transition:color .1s ease;border-radius:.28571429rem;padding:11px 13px;margin:0 5px;}.active.jsx-170144276{background:rgba(255,255,255,.15);opacity:1;}a.jsx-170144276:hover{opacity:1;}.icon.jsx-170144276{font-size:14px;vertical-align:text-bottom;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx5YW5neXVxaW5nLUJsb2dcXGNvbXBvbmVudHNcXExpbmtJdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtvQixBQUd1QixBQU1XLEFBZVksQUFJdkIsQUFHSSxVQUZsQixDQXpCb0IsSUE0QlcsWUEzQmQsTUFvQkgsT0FuQmQsRUEyQkEsQ0FQQSxPQWhCb0IsaUJBQ0YsZUFDTyxzQkFDSCx1RUFDRixnQkFDSixZQUNELFdBQ0MsWUFDYyw0REFDQywyQkFDVixrQkFDTCxhQUNoQiIsImZpbGUiOiJEOlxceWFuZ3l1cWluZy1CbG9nXFxjb21wb25lbnRzXFxMaW5rSXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IExpbmtJdGVtID0gKHtwYXRoLGljb24sdGV4dCxpc0FjdGl2ZX0pPT4oXHJcbiAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MtaXRlbVwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9e2lzQWN0aXZlP1wiYWN0aXZlXCI6XCJcIn0+PHNwYW4gY2xhc3NOYW1lPXtgaWNvbmB9PjxJY29uIHR5cGU9e2ljb259IC8+PC9zcGFuPiB7dGV4dH08L2E+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhIHtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxNHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2U7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbTtcclxuICAgICAgICAgICAgcGFkZGluZzoxMXB4IDEzcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICAgICAgfVxyXG5gfTwvc3R5bGU+XHJcbiAgICA8L2xpPlxyXG4pO1xyXG5leHBvcnQgZGVmYXVsdCBMaW5rSXRlbTsiXX0= */\n/*@ sourceURL=D:\\\\yangyuqing-Blog\\\\components\\\\LinkItem.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (LinkItem);

/***/ })

})
//# sourceMappingURL=types.js.1df9b4bad3305c8b2108.hot-update.js.map