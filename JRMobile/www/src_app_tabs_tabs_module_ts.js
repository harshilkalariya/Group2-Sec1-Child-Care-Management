"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 4710:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.scss?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  color: var(--font);\n}\n\nion-tabs ion-fab {\n  margin-bottom: env(safe-area-inset-bottom);\n  /* fix notch ios*/\n}\n\nion-tabs ion-fab ion-fab-button {\n  --box-shadow: none;\n}\n\nion-tabs ion-tab-bar {\n  --border: 0;\n  --background: transparent;\n  background-color: rgba(var(--bodyRGB), 0.6);\n  -webkit-backdrop-filter: blur(7px);\n          backdrop-filter: blur(7px);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  width: 100%;\n  box-shadow: 0 -1px 3px rgba(var(--darkRGB), 0.1);\n}\n\nion-tabs ion-tab-bar:after {\n  content: \"\";\n  width: 100%;\n  bottom: 0;\n  --background: transparent;\n  background-color: rgba(var(--bodyRGB), 0.6);\n  height: env(safe-area-inset-bottom);\n  position: absolute;\n}\n\nion-tabs ion-tab-bar ion-tab-button {\n  --background: transparent;\n  background-color: transparent;\n}\n\nion-ripple-effect {\n  --color-selected: rgb(110, 113, 118) !important;\n  color: var(--color-selected) !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFHRTtFQUNFLDBDQUFBO0VBRUEsaUJBQUE7QUFESjs7QUFFSTtFQUNFLGtCQUFBO0FBQU47O0FBSUU7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLGtDQUFBO1VBQUEsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxnREFBQTtBQUZKOztBQUlJO0VBQ0UsV0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSwyQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7QUFGTjs7QUFLSTtFQUNFLHlCQUFBO0VBQ0EsNkJBQUE7QUFITjs7QUFTQTtFQUNFLCtDQUFBO0VBQ0EsdUNBQUE7QUFORiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWZvbnQpO1xufVxuXG5pb24tdGFicyB7XG4gIGlvbi1mYWIge1xuICAgIG1hcmdpbi1ib3R0b206IGVudihzYWZlLWFyZWEtaW5zZXQtYm90dG9tKTtcblxuICAgIC8qIGZpeCBub3RjaCBpb3MqL1xuICAgIGlvbi1mYWItYnV0dG9uIHtcbiAgICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gIH1cblxuICBpb24tdGFiLWJhciB7XG4gICAgLS1ib3JkZXI6IDA7XG4gICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWJvZHlSR0IpLCAwLjYpO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig3cHgpO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3gtc2hhZG93OiAwIC0xcHggM3B4IHJnYmEodmFyKC0tZGFya1JHQiksIDAuMSk7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKHZhcigtLWJvZHlSR0IpLCAwLjYpO1xuICAgICAgaGVpZ2h0OiBlbnYoc2FmZS1hcmVhLWluc2V0LWJvdHRvbSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgaW9uLXRhYi1idXR0b24ge1xuICAgICAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgfVxuICB9XG59XG5cbmlvbi1yaXBwbGUtZWZmZWN0IHtcbiAgLS1jb2xvci1zZWxlY3RlZDogcmdiKDExMCwgMTEzLCAxMTgpICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB2YXIoLS1jb2xvci1zZWxlY3RlZCkgIWltcG9ydGFudDtcbn1cbiJdfQ== */";

/***/ }),

/***/ 5230:
/*!************************************************!*\
  !*** ./src/app/tabs/tabs.page.html?ngResource ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<ion-tabs #tabs (ionTabsDidChange)=\"setSelectedTab()\">\n  <ion-tab-bar slot=\"bottom\" class=\"ion-no-border\">\n    <ion-tab-button tab=\"home\">\n      <ion-icon [name]=\"selected=='home'? 'home': 'home-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"product\">\n      <ion-icon [name]=\"selected=='product'? 'tablet-landscape': 'tablet-landscape-outline'\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"inquiry\">\n      <ion-icon [name]=\"selected=='inquiry'? 'mail': 'mail-outline'\"></ion-icon>\n      <!-- <ion-icon name=\"\"></ion-icon> -->\n      <!-- <ion-icon name=\"\"></ion-icon> -->\n      <!-- <ion-badge *ngIf=\"new_activities\">{{new_activities}}</ion-badge> -->\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"profile\">\n      <ion-icon [name]=\"selected=='profile'? 'person':'person-outline'\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n";

/***/ }),

/***/ 530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": () => (/* binding */ TabsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
    },
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: '',
                redirectTo: '/tabs/home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../home/home.module */ 3467)).then(m => m.HomePageModule)
            },
            {
                path: 'inquiry',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_inquiry_inquiry_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../inquiry/inquiry.module */ 544)).then(m => m.InquiryPageModule)
            },
            {
                path: 'profile',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_profile_profile_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../profile/profile.module */ 4523)).then(m => m.ProfilePageModule)
            }
        ]
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 5564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": () => (/* binding */ TabsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": () => (/* binding */ TabsPage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.html?ngResource */ 5230);
/* harmony import */ var _tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page.scss?ngResource */ 4710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);







let TabsPage = class TabsPage {
  constructor(router, platform, zone) {
    this.router = router;
    this.platform = platform;
    this.zone = zone;
    this.selected = '';
  }

  setSelectedTab() {
    this.selected = this.tabs.getSelected();
  }

  ionViewWillEnter() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.tabSubscription = _this.platform.backButton.subscribe( /*#__PURE__*/function () {
        var _ref = (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          let url = _this.router.url;

          if (url === '/tabs/home') {
            navigator["app"].exitApp();
          }

          if (url === '/tabs/product' || url === '/tabs/inquiry' || url === '/tabs/profile') {
            _this.zone.run(() => {
              _this.router.navigate(['/tabs/home']);
            });
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

};

TabsPage.ctorParameters = () => [{
  type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform
}, {
  type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.NgZone
}];

TabsPage.propDecorators = {
  tabs: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonTabs]
  }]
};
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-tabs',
  template: _tabs_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_tabs_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], TabsPage);


/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map