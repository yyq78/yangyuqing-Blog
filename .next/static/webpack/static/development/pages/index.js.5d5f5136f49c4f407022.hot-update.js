webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
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

  var addActive = function addActive(index) {
    console.log(11);
    links.forEach(function (item, key) {
      if (key === index) {
        item.isActive = true;
      }

      item.isActive = false;
    });
    console.log();
  };

  var LinkItem = function LinkItem(_ref) {
    var path = _ref.path,
        icon = _ref.icon,
        text = _ref.text,
        isActive = _ref.isActive,
        index = _ref.index,
        onClick = _ref.onClick;
    return __jsx("li", {
      className: "jsx-13871919" + " " + "links-item",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: path,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("a", {
      onClick: onClick(index),
      className: "jsx-13871919" + " " + ((isActive ? "active" : "") || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("span", {
      className: "jsx-13871919" + " " + "icon",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Icon"], {
      type: icon,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    })), " ", text)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "13871919",
      __self: this
    }, "li.jsx-13871919{float:left;list-style:none;margin:0 5px;}a.jsx-13871919{-webkit-text-decoration:none;text-decoration:none;line-height:14px;font-size:14px;vertical-align:center;-webkit-align-self:center;-ms-flex-item-align:center;align-self:center;box-shadow:none;border:none;color:#fff;opacity:0.6;-webkit-transition:color .1s ease;transition:color .1s ease;border-radius:.28571429rem;padding:11px 13px;margin:0 5px;}.active.jsx-13871919{background:rgba(255,255,255,.15);}a.jsx-13871919:hover{opacity:1;}.icon.jsx-13871919{font-size:14px;vertical-align:text-bottom;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx5YW5neXVxaW5nLUJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRHdCLEFBRzJCLEFBTVcsQUFlWSxBQUd2QixBQUdJLFVBRmxCLENBeEJvQixJQTJCVyxZQTFCZCxNQW9CakIsT0FuQkEsRUEwQkEsUUF0Qm9CLGlCQUNGLGVBQ08sc0JBQ0gsdUVBQ0YsZ0JBQ0osWUFDRCxXQUNDLFlBQ2MsNERBQ0MsMkJBQ1Ysa0JBQ0wsYUFDaEIiLCJmaWxlIjoiRDpcXHlhbmd5dXFpbmctQmxvZ1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHtJY29ufSBmcm9tICdhbnRkJztcclxuY29uc3QgTGF5b3V0ID0gKHByb3BzKT0+e1xyXG4gICAgY29uc3QgbGlua3MgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOlwiL1wiLFxyXG4gICAgICAgICAgICBpY29uOlwiaG9tZVwiLFxyXG4gICAgICAgICAgICB0ZXh0Olwi6aaW6aG1XCIsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOnRydWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6XCIvdHlwZXNcIixcclxuICAgICAgICAgICAgaWNvbjpcImJ1bGJcIixcclxuICAgICAgICAgICAgdGV4dDpcIuWIhuexu1wiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDpcIi90YWdzXCIsXHJcbiAgICAgICAgICAgIGljb246XCJ0YWdzXCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCLmoIfnrb5cIixcclxuICAgICAgICAgICAgaXNBY3RpdmU6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6XCIvYXJjaGl2ZXNcIixcclxuICAgICAgICAgICAgaWNvbjpcImZpbGVcIixcclxuICAgICAgICAgICAgdGV4dDpcIuW9kuaho1wiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDpcIi9hYm91dFwiLFxyXG4gICAgICAgICAgICBpY29uOlwic2hhcmUtYWx0XCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCLlhbPkuo7miJFcIixcclxuICAgICAgICAgICAgaXNBY3RpdmU6ZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgIF07XHJcbiAgICBjb25zdCBhZGRBY3RpdmUgPSAoaW5kZXgpPT57XHJcbiAgICAgICAgY29uc29sZS5sb2coMTEpO1xyXG4gICAgICAgIGxpbmtzLmZvckVhY2goKGl0ZW0sa2V5KT0+e1xyXG4gICAgICAgICAgICBpZihrZXk9PT1pbmRleCl7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpdGVtLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coKTtcclxuICAgIH1cclxuICAgIGNvbnN0IExpbmtJdGVtID0gKHtwYXRoLGljb24sdGV4dCxpc0FjdGl2ZSxpbmRleCxvbkNsaWNrfSk9PihcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlua3MtaXRlbVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtwYXRofT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17aXNBY3RpdmU/XCJhY3RpdmVcIjpcIlwifSBvbkNsaWNrPXtvbkNsaWNrKGluZGV4KX0+PHNwYW4gY2xhc3NOYW1lPXtgaWNvbmB9PjxJY29uIHR5cGU9e2ljb259IC8+PC9zcGFuPiB7dGV4dH08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgLjFzIGVhc2U7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAuMjg1NzE0MjlyZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjExcHggMTNweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYWN0aXZle1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsMjU1LDI1NSwuMTUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGE6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGl0bGVcIj5CbG9nPC9oMT5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaW5rc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlua3MubWFwKGZ1bmN0aW9uKGl0ZW0saW5kZXgpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxMaW5rSXRlbSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXRoPXtpdGVtLnBhdGh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249e2l0ZW0uaWNvbn0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dD17aXRlbS50ZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc0FjdGl2ZT17aXRlbS5pc0FjdGl2ZX0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17YWRkQWN0aXZlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAqe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjA7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogTGF0bywnSGVsdmV0aWNhIE5ldWUnLEFyaWFsLEhlbHZldGljYSxzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgxLGEge1xyXG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdWwge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OjQ4cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5tZW51e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcyM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUIxQzFEO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsLjkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwQjVBRDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToyNHB4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOjE5cHggMjJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubGlua3N7XHJcbiAgICAgICAgICAgICAgICBmbG9hdDpsZWZ0O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuXHJcbiJdfQ== */\n/*@ sourceURL=D:\\\\yangyuqing-Blog\\\\components\\\\Layout.js */"));
  };

  return __jsx("div", {
    className: "jsx-597417063" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-597417063" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-597417063" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-597417063" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, "Blog"), __jsx("ul", {
    className: "jsx-597417063" + " " + "links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, links.map(function (item, index) {
    return __jsx(LinkItem, {
      path: item.path,
      icon: item.icon,
      text: item.text,
      index: index,
      isActive: item.isActive,
      onClick: addActive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    });
  })))), props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "597417063",
    __self: this
  }, "*.jsx-597417063{margin:0;padding:0;font-family:Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;}h1.jsx-597417063,a.jsx-597417063{font-family:'Arial';}ul.jsx-597417063{padding:0;overflow:hidden;line-height:48px;}.menu.jsx-597417063{width:723px;margin:0 auto;overflow:hidden;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header.jsx-597417063{background:#1B1C1D;color:rgba(255,255,255,.9);}.title.jsx-597417063{float:left;color:#00B5AD;font-size:24px;padding:19px 22px;}.links.jsx-597417063{float:left;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFx5YW5neXVxaW5nLUJsb2dcXGNvbXBvbmVudHNcXExheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyR29CLEFBR3lCLEFBS1ksQUFHVixBQU1FLEFBUU8sQUFJVCxBQU9BLFNBaENELENBUU0sQ0FrQkQsQUFPQyxDQW5CRCxPQWIrQyxBQXFCbEMsQ0FqQi9CLEtBc0JrQixDQWxCRSxBQU1ELENBbUJuQixhQUxxQixFQWJMLENBTmhCLEdBYUEsWUFPQSxzQkE1QkEsb0NBZTBCLG1HQUNKLDZGQUN0QiIsImZpbGUiOiJEOlxceWFuZ3l1cWluZy1CbG9nXFxjb21wb25lbnRzXFxMYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0ljb259IGZyb20gJ2FudGQnO1xyXG5jb25zdCBMYXlvdXQgPSAocHJvcHMpPT57XHJcbiAgICBjb25zdCBsaW5rcyA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6XCIvXCIsXHJcbiAgICAgICAgICAgIGljb246XCJob21lXCIsXHJcbiAgICAgICAgICAgIHRleHQ6XCLpppbpobVcIixcclxuICAgICAgICAgICAgaXNBY3RpdmU6dHJ1ZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDpcIi90eXBlc1wiLFxyXG4gICAgICAgICAgICBpY29uOlwiYnVsYlwiLFxyXG4gICAgICAgICAgICB0ZXh0Olwi5YiG57G7XCIsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOlwiL3RhZ3NcIixcclxuICAgICAgICAgICAgaWNvbjpcInRhZ3NcIixcclxuICAgICAgICAgICAgdGV4dDpcIuagh+etvlwiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDpcIi9hcmNoaXZlc1wiLFxyXG4gICAgICAgICAgICBpY29uOlwiZmlsZVwiLFxyXG4gICAgICAgICAgICB0ZXh0Olwi5b2S5qGjXCIsXHJcbiAgICAgICAgICAgIGlzQWN0aXZlOmZhbHNlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOlwiL2Fib3V0XCIsXHJcbiAgICAgICAgICAgIGljb246XCJzaGFyZS1hbHRcIixcclxuICAgICAgICAgICAgdGV4dDpcIuWFs+S6juaIkVwiLFxyXG4gICAgICAgICAgICBpc0FjdGl2ZTpmYWxzZSxcclxuICAgICAgICB9LFxyXG4gICAgXTtcclxuICAgIGNvbnN0IGFkZEFjdGl2ZSA9IChpbmRleCk9PntcclxuICAgICAgICBjb25zb2xlLmxvZygxMSk7XHJcbiAgICAgICAgbGlua3MuZm9yRWFjaCgoaXRlbSxrZXkpPT57XHJcbiAgICAgICAgICAgIGlmKGtleT09PWluZGV4KXtcclxuICAgICAgICAgICAgICAgIGl0ZW0uaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGl0ZW0uaXNBY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zb2xlLmxvZygpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgTGlua0l0ZW0gPSAoe3BhdGgsaWNvbix0ZXh0LGlzQWN0aXZlLGluZGV4LG9uQ2xpY2t9KT0+KFxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rcy1pdGVtXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtpc0FjdGl2ZT9cImFjdGl2ZVwiOlwiXCJ9IG9uQ2xpY2s9e29uQ2xpY2soaW5kZXgpfT48c3BhbiBjbGFzc05hbWU9e2BpY29uYH0+PEljb24gdHlwZT17aWNvbn0gLz48L3NwYW4+IHt0ZXh0fTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDoxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAuMXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IC4yODU3MTQyOXJlbTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTFweCAxM3B4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOjAgNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwyNTUsMjU1LC4xNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pY29ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XHJcbiAgICAgICAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPkJsb2c8L2gxPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpbmtzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rcy5tYXAoZnVuY3Rpb24oaXRlbSxpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPExpbmtJdGVtIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg9e2l0ZW0ucGF0aH0gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17aXRlbS5pY29ufSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0PXtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWN0aXZlPXtpdGVtLmlzQWN0aXZlfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXthZGRBY3RpdmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICp7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46MDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBMYXRvLCdIZWx2ZXRpY2EgTmV1ZScsQXJpYWwsSGVsdmV0aWNhLHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaDEsYSB7XHJcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0FyaWFsJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1bCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6NDhweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLm1lbnV7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNzIzcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmhlYWRlcntcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICMxQjFDMUQ7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwuOSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICAgICAgZmxvYXQ6bGVmdDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDBCNUFEO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjI0cHg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6MTlweCAyMnB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5saW5rc3tcclxuICAgICAgICAgICAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xyXG5cclxuIl19 */\n/*@ sourceURL=D:\\\\yangyuqing-Blog\\\\components\\\\Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ })

})
//# sourceMappingURL=index.js.5d5f5136f49c4f407022.hot-update.js.map