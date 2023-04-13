"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inquiry_inquiry_module_ts"],{

/***/ 7579:
/*!******************************************************!*\
  !*** ./src/app/inquiry/inquiry.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".inquiryCards {\n  padding: 10px 20px 70px 20px;\n  display: grid;\n  grid-template-rows: 1fr 1fr 1fr;\n  align-items: center;\n  justify-content: center;\n  gap: 30px;\n}\n.inquiryCards .inquiryCard {\n  background-color: var(--card-backGround);\n  display: flex;\n  min-height: 180px;\n  border: 1px solid var(--card-border);\n  border-radius: 25px;\n}\n.inquiryCards .inquiryCard .illustrater {\n  width: 35%;\n  padding: 15px 10px 15px 20px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.inquiryCards .inquiryCard .illustrater img {\n  height: 100%;\n}\n.inquiryCards .inquiryCard .inquiryName {\n  width: 65%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 10px;\n}\n.inquiryCards .inquiryCard .inquiryName .inquiryClickHeader {\n  display: flex;\n  flex-direction: column;\n}\n.inquiryCards .inquiryCard .inquiryName .inquiryClickHeader .inquiryClickHeaderName {\n  text-align: center;\n  font-size: 1.15rem;\n  font-weight: 600;\n}\n.inquiryCards .inquiryCard .inquiryName .inquiryClickHeader .inquiryPoints {\n  margin-block-start: 12px;\n  margin-block-end: 0;\n  padding-inline-start: 30px;\n  font-size: 0.9rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImlucXVpcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsbUJBQUE7QUFDSjtBQUNJO0VBQ0UsVUFBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDTjtBQUNNO0VBQ0UsWUFBQTtBQUNSO0FBR0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0FBRE47QUFHTTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQURSO0FBSVE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFGVjtBQUtRO0VBQ0Usd0JBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsaUJBQUE7QUFIViIsImZpbGUiOiJpbnF1aXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnF1aXJ5Q2FyZHMge1xuICBwYWRkaW5nOiAxMHB4IDIwcHggNzBweCAyMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAzMHB4O1xuXG4gIC5pbnF1aXJ5Q2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2FyZC1iYWNrR3JvdW5kKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDE4MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNhcmQtYm9yZGVyKTtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuXG4gICAgLmlsbHVzdHJhdGVyIHtcbiAgICAgIHdpZHRoOiAzNSU7XG4gICAgICBwYWRkaW5nOiAxNXB4IDEwcHggMTVweCAyMHB4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5pbnF1aXJ5TmFtZSB7XG4gICAgICB3aWR0aDogNjUlO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIC5pbnF1aXJ5Q2xpY2tIZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG5cbiAgICAgICAgLmlucXVpcnlDbGlja0hlYWRlck5hbWUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDEuMTVyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnF1aXJ5UG9pbnRzIHtcbiAgICAgICAgICBtYXJnaW4tYmxvY2stc3RhcnQ6IDEycHg7XG4gICAgICAgICAgbWFyZ2luLWJsb2NrLWVuZDogMDtcbiAgICAgICAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMzBweDtcbiAgICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 7695:
/*!******************************************************!*\
  !*** ./src/app/inquiry/inquiry.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>INQUIRY</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n  <div class=\"inquiryCards\">\n    <div class=\"inquiryCard ion-activatable ripple-parent\" (click)=\"goToNewInquiry()\">\n      <div class=\"illustrater\">\n        <img src=\"../../assets/new_inquiry.jpg\" alt=\"\">\n      </div>\n      <div class=\"inquiryName\">\n        <div class=\"inquiryClickHeader\">\n          <div class=\"inquiryClickHeaderName\">Register Your Child</div>\n          <ul class=\"inquiryPoints\">\n            <li>First come first serve</li>\n            <li>Project by JR</li>\n            <li>More accurate information protect you more</li>\n          </ul>\n        </div>\n      </div>\n      <ion-ripple-effect></ion-ripple-effect>\n    </div>\n\n    <div class=\"inquiryCard ion-activatable ripple-parent\" (click)=\"goToCurrentInquiry()\">\n      <div class=\"illustrater\">\n        <img src=\"../../assets/waiting.jpg\" alt=\"\">\n      </div>\n      <div class=\"inquiryName\">\n        <div class=\"inquiryClickHeader\">\n          <div class=\"inquiryClickHeaderName\">Track & Complete Your Application</div>\n          <ul class=\"inquiryPoints\">\n            <li>Step by step information</li>\n            <li>Check status of your application</li>\n          </ul>\n        </div>\n      </div>\n      <ion-ripple-effect></ion-ripple-effect>\n    </div>\n\n\n    <div class=\"inquiryCard ion-activatable ripple-parent\" (click)=\"goToCompletedInquiry()\">\n      <div class=\"illustrater\">\n        <img src=\"../../assets/completed_inquiry.jpg\" alt=\"\">\n      </div>\n      <div class=\"inquiryName\">\n        <div class=\"inquiryClickHeader\">\n          <div class=\"inquiryClickHeaderName\">Completed Applications</div>\n          <ul class=\"inquiryPoints\">\n            <li>Happy customers</li>\n            <li>Canceled from client</li>\n          </ul>\n        </div>\n      </div>\n      <ion-ripple-effect></ion-ripple-effect>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 1461:
/*!***************************************************!*\
  !*** ./src/app/inquiry/inquiry-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryPageRoutingModule": () => (/* binding */ InquiryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _inquiry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry.page */ 7623);




const routes = [
    {
        path: '',
        component: _inquiry_page__WEBPACK_IMPORTED_MODULE_0__.InquiryPage
    },
    {
        path: 'new-inquiry',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_inquiry_new-inquiry_new-inquiry_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./new-inquiry/new-inquiry.module */ 1588)).then(m => m.NewInquiryPageModule)
    },
    {
        path: 'current-inquiry',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_inquiry_current-inquiry_current-inquiry_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./current-inquiry/current-inquiry.module */ 2867)).then(m => m.CurrentInquiryPageModule)
    },
    {
        path: 'completed-inquiry',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_inquiry_completed-inquiry_completed-inquiry_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./completed-inquiry/completed-inquiry.module */ 4669)).then(m => m.CompletedInquiryPageModule)
    }
];
let InquiryPageRoutingModule = class InquiryPageRoutingModule {
};
InquiryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InquiryPageRoutingModule);



/***/ }),

/***/ 544:
/*!*******************************************!*\
  !*** ./src/app/inquiry/inquiry.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryPageModule": () => (/* binding */ InquiryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry-routing.module */ 1461);
/* harmony import */ var _inquiry_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry.page */ 7623);







let InquiryPageModule = class InquiryPageModule {
};
InquiryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _inquiry_routing_module__WEBPACK_IMPORTED_MODULE_0__.InquiryPageRoutingModule
        ],
        declarations: [_inquiry_page__WEBPACK_IMPORTED_MODULE_1__.InquiryPage]
    })
], InquiryPageModule);



/***/ }),

/***/ 7623:
/*!*****************************************!*\
  !*** ./src/app/inquiry/inquiry.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InquiryPage": () => (/* binding */ InquiryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inquiry.page.html?ngResource */ 7695);
/* harmony import */ var _inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./inquiry.page.scss?ngResource */ 7579);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);





let InquiryPage = class InquiryPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToNewInquiry() {
        this.router.navigate(['/tabs/inquiry/new-inquiry']);
    }
    goToCurrentInquiry() {
        this.router.navigate(['/tabs/inquiry/current-inquiry']);
    }
    goToCompletedInquiry() {
        this.router.navigate(['/tabs/inquiry/completed-inquiry']);
    }
};
InquiryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
InquiryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-inquiry',
        template: _inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InquiryPage);



/***/ })

}]);
//# sourceMappingURL=src_app_inquiry_inquiry_module_ts.js.map