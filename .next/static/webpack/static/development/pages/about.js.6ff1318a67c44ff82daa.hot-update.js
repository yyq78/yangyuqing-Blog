webpackHotUpdate("static\\development\\pages\\about.js",{

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
  var name = router.pathname;

  for (var i = 0; i < links.length; i++) {
    if (links[i].path === name) {
      console.log(links[i]);
      links[i]['isActive'] = true;
    } else {
      links[i]['isActive'] = false;
    }
  }

  console.log(links);

  var LinkItem = function LinkItem(_ref) {
    var path = _ref.path,
        icon = _ref.icon,
        text = _ref.text,
        isActive = _ref.isActive;
    return __jsx("li", {
      className: "jsx-13871919" + " " + "links-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("a", {
      className: "jsx-13871919" + " " + ((isActive ? "active" : "") || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-13871919" + " " + "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      type: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    })), " ", text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "13871919",
      __self: this
    }, "li.jsx-13871919{float:left;list-style:none;margin:0 5px;}a.jsx-13871919{-webkit-text-decoration:none;text-decoration:none;line-height:14px;font-size:14px;vertical-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;box-shadow:none;border:none;color:#fff;opacity:0.6;-webkit-transition:color .1s ease;transition:color .1s ease;border-radius:.28571429rem;padding:11px 13px;margin:0 5px;}.active.jsx-13871919{background:rgba(255,255,255,.15);}a.jsx-13871919:hover{opacity:1;}.icon.jsx-13871919{font-size:14px;vertical-align:text-bottom;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx5YW5neXVxaW5nLUJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRHdCLEFBRzJCLEFBTVcsQUFlWSxBQUd2QixBQUdJLFVBRmxCLENBeEJvQixJQTJCVyxZQTFCZCxNQW9CakIsT0FuQkEsRUEwQkEsUUF0Qm9CLGlCQUNGLGVBQ08sc0JBQ0gsdUVBQ0YsZ0JBQ0osWUFDRCxXQUNDLFlBQ2MsNERBQ0MsMkJBQ1Ysa0JBQ0wsYUFDaEIiLCJmaWxlIjoiRDpcXHlhbmd5dXFpbmctQmxvZ1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQge0ljb259IGZyb20gJ2FudGQnO1xyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpPT57XHJcbiAgICBjb25zdCBsaW5rcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6XCIvXCIsXHJcbiAgICAgICAgICAgIGljb246XCJob21lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCLpppbpobVcIixcclxuICAgICAgICAgICAgaXNBY3RpdmU6dHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDpcIi90eXBlc1wiLFxyXG4gICAgICAgICAgICBpY29uOlwiYnVsYlwiLFxyXG4gICAgICAgICAgICB0ZXh0Olwi5YiG57G7XCIsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOlwiL3RhZ3NcIixcclxuICAgICAgICAgICAgaWNvbjpcInRhZ3NcIixcclxuICAgICAgICAgICAgdGV4dDpcIuagh+etvlwiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDpcIi9hcmNoaXZlc1wiLFxyXG4gICAgICAgICAgICBpY29uOlwiZmlsZVwiLFxyXG4gICAgICAgICAgICB0ZXh0Olwi5b2S5qGjXCIsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOlwiL2Fib3V0XCIsXHJcbiAgICAgICAgICAgIGljb246XCJzaGFyZS1hbHRcIixcclxuICAgICAgICAgICAgdGV4dDpcIuWFs+S6juaIkVwiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgbGV0IG5hbWU9cm91dGVyLnBhdGhuYW1lO1xyXG4gICAgZm9yKHZhciBpPTA7aTxsaW5rcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICBpZihsaW5rc1tpXS5wYXRoID09PSBuYW1lKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cobGlua3NbaV0pO1xyXG4gICAgICAgICAgICBsaW5rc1tpXVsnaXNBY3RpdmUnXSA9IHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGxpbmtzW2ldWydpc0FjdGl2ZSddID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2cobGlua3MpO1xyXG4gICAgY29uc3QgTGlua0l0ZW0gPSAoe3BhdGgsaWNvbix0ZXh0LGlzQWN0aXZlfSk9PihcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwYXRofT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNBY3RpdmU/XCJhY3RpdmVcIjpcIlwifT48c3BhbiBjbGFzc05hbWU9e2BpY29uYH0+PEljb24gdHlwZT17aWNvbn0gLz48L3NwYW4+IHt0ZXh0fTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTFweCAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICAgICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkJsb2c8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpbmtJdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e2l0ZW0ucGF0aH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17aXRlbS5pc0FjdGl2ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICp7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCdIZWx2ZXRpY2EgTmV1ZScsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEsYSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6NDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzIzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxQjFDMUQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBCNUFEO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTlweCAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5rc3tcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG5cclxuIl19 */\n/*@ sourceURL=D:\\\\yangyuqing-Blog\\\\components\\\\Layout.js */"));
  };

  return __jsx("div", {
    className: "jsx-597417063" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-597417063" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-597417063" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-597417063" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, "Blog"), __jsx("ul", {
    className: "jsx-597417063" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, links.map(function (item, index) {
    return __jsx(LinkItem, {
      path: item.path,
      icon: item.icon,
      text: item.text,
      key: index,
      isActive: item.isActive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    });
  })))), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "597417063",
    __self: this
  }, "*.jsx-597417063{margin:0;padding:0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;}h1.jsx-597417063,a.jsx-597417063{font-family:'Arial';}ul.jsx-597417063{padding:0;overflow:hidden;line-height:48px;}.menu.jsx-597417063{width:723px;margin:0 auto;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header.jsx-597417063{background:#1B1C1D;color:rgba(255,255,255,.9);}.title.jsx-597417063{float:left;color:#00B5AD;font-size:24px;padding:19px 22px;}.links.jsx-597417063{float:left;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx5YW5neXVxaW5nLUJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0R29CLEFBR3lCLEFBS1ksQUFHVixBQU1FLEFBUU8sQUFJVCxBQU9BLFNBaENELENBUU0sQ0FrQkQsQUFPQyxDQW5CRCxPQWIrQyxBQXFCbEMsQ0FqQi9CLEtBc0JrQixDQWxCRSxBQU1ELENBbUJuQixhQUxxQixFQWJMLENBTmhCLEdBYUEsWUFPQSxzQkE1QkEsb0NBZTBCLG1HQUNKLDZGQUN0QiIsImZpbGUiOiJEOlxceWFuZ3l1cWluZy1CbG9nXFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7SWNvbn0gZnJvbSAnYW50ZCc7XHJcbmNvbnN0IExheW91dCA9IChwcm9wcyk9PntcclxuICAgIGNvbnN0IGxpbmtzID0gW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDpcIi9cIixcclxuICAgICAgICAgICAgaWNvbjpcImhvbWVcIixcclxuICAgICAgICAgICAgdGV4dDpcIummlumhtVwiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTp0cnVlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOlwiL3R5cGVzXCIsXHJcbiAgICAgICAgICAgIGljb246XCJidWxiXCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCLliIbnsbtcIixcclxuICAgICAgICAgICAgaXNBY3RpdmU6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6XCIvdGFnc1wiLFxyXG4gICAgICAgICAgICBpY29uOlwidGFnc1wiLFxyXG4gICAgICAgICAgICB0ZXh0Olwi5qCH562+XCIsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOlwiL2FyY2hpdmVzXCIsXHJcbiAgICAgICAgICAgIGljb246XCJmaWxlXCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCLlvZLmoaNcIixcclxuICAgICAgICAgICAgaXNBY3RpdmU6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6XCIvYWJvdXRcIixcclxuICAgICAgICAgICAgaWNvbjpcInNoYXJlLWFsdFwiLFxyXG4gICAgICAgICAgICB0ZXh0Olwi5YWz5LqO5oiRXCIsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICBdO1xyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBsZXQgbmFtZT1yb3V0ZXIucGF0aG5hbWU7XHJcbiAgICBmb3IodmFyIGk9MDtpPGxpbmtzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgIGlmKGxpbmtzW2ldLnBhdGggPT09IG5hbWUpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhsaW5rc1tpXSk7XHJcbiAgICAgICAgICAgIGxpbmtzW2ldWydpc0FjdGl2ZSddID0gdHJ1ZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbGlua3NbaV1bJ2lzQWN0aXZlJ10gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhsaW5rcyk7XHJcbiAgICBjb25zdCBMaW5rSXRlbSA9ICh7cGF0aCxpY29uLHRleHQsaXNBY3RpdmV9KT0+KFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcy1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCJ9PjxzcGFuIGNsYXNzTmFtZT17YGljb25gfT48SWNvbiB0eXBlPXtpY29ufSAvPjwvc3Bhbj4ge3RleHR9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIC4xcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogLjI4NTcxNDI5cmVtO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxMXB4IDEzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MCA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmFjdGl2ZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LDI1NSwyNTUsLjE1KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvbGk+XHJcbiAgICApO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRpdGxlXCI+QmxvZzwvaDE+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlua3NcIj5cclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtzLm1hcChmdW5jdGlvbihpdGVtLGluZGV4KXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8TGlua0l0ZW0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0aD17aXRlbS5wYXRofSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPXtpdGVtLmljb259IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ9e2l0ZW0udGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtpdGVtLmlzQWN0aXZlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgKntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IExhdG8sJ0hlbHZldGljYSBOZXVlJyxBcmlhbCxIZWx2ZXRpY2Esc2Fucy1zZXJpZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMSxhIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVsIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDo0OHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAubWVudXtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA3MjNweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzFCMUMxRDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC45KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGV7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMEI1QUQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MjRweDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzoxOXB4IDIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmxpbmtze1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcblxyXG4iXX0= */\n/*@ sourceURL=D:\\\\yangyuqing-Blog\\\\components\\\\Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=about.js.6ff1318a67c44ff82daa.hot-update.js.map