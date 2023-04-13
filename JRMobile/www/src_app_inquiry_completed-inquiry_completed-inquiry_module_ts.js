"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inquiry_completed-inquiry_completed-inquiry_module_ts"],{

/***/ 1127:
/*!**********************************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".completedInquiryList {\n  padding-bottom: 62px;\n}\n.completedInquiryList .noMoreSvgBox {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n}\n.completedInquiryList .noMoreSvgBox .noMoreSvg {\n  width: 50%;\n}\n.completedInquiryList .noMoreSvgBox .noMoreSvg img {\n  width: 100%;\n  background-size: cover;\n}\n.completedInquiryList .noMoreSvgBox .noMsg {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-top: 20px;\n  opacity: 0.8;\n}\n.completedInquiryList .oneInquiry .inquiryName {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.completedInquiryList .oneInquiry .inquiryParentName {\n  font-size: 0.95rem;\n  opacity: 0.8;\n  display: flex;\n  align-items: center;\n}\n.completedInquiryList .oneInquiry .dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--card-backGround-dark);\n  margin-right: 10px;\n}\n.completedInquiryList .oneInquiry .status {\n  padding: 2px 10px;\n  font-size: 0.9rem;\n  border-radius: 100vmax;\n  background-color: rgba(var(--darkRGB), 0.1);\n  opacity: 0.7;\n}\n.completedInquiryList .oneInquiry .rejectedInquiry {\n  background-color: rgba(255, 0, 0, 0.2);\n}\n.completedInquiryList .oneInquiry .paddingStart {\n  padding-left: 20px;\n}\n.completedInquiryList .moreInquiryLoader {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBsZXRlZC1pbnF1aXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0FBQ0Y7QUFDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUNKO0FBQ0k7RUFDRSxVQUFBO0FBQ047QUFDTTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtBQUNSO0FBR0k7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBRE47QUFNSTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKTjtBQU9JO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTE47QUFRSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0FBTk47QUFTSTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0VBQ0EsWUFBQTtBQVBOO0FBVUk7RUFDRSxzQ0FBQTtBQVJOO0FBV0k7RUFDRSxrQkFBQTtBQVROO0FBYUU7RUFDRSxpQkFBQTtBQVhKIiwiZmlsZSI6ImNvbXBsZXRlZC1pbnF1aXJ5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wbGV0ZWRJbnF1aXJ5TGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiA2MnB4O1xuXG4gIC5ub01vcmVTdmdCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAubm9Nb3JlU3ZnIHtcbiAgICAgIHdpZHRoOiA1MCU7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ub01zZyB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgfVxuXG4gIC5vbmVJbnF1aXJ5IHtcbiAgICAuaW5xdWlyeU5hbWUge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5pbnF1aXJ5UGFyZW50TmFtZSB7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgfVxuXG4gICAgLmRvdCB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja0dyb3VuZC1kYXJrKTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuc3RhdHVzIHtcbiAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDB2bWF4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1kYXJrUkdCKSwgMC4xKTtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG5cbiAgICAucmVqZWN0ZWRJbnF1aXJ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAjZmYwMDAwLCAkYWxwaGE6IDAuMik7XG4gICAgfVxuXG4gICAgLnBhZGRpbmdTdGFydCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLm1vcmVJbnF1aXJ5TG9hZGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgfVxufVxuIl19 */";

/***/ }),

/***/ 1657:
/*!**********************************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header #header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/inquiry\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>COMPLETED APPLICATIONS</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHeaderOnScroll]=\"header\">\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrashCompletedInquiryList($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Searchbar -->\n  <ion-searchbar mode=\"ios\" [(ngModel)]=\"globalSearchInput\" debounce=\"1000\"\n    (ionChange)=\"searchCompletedInquiry($event)\">\n  </ion-searchbar>\n\n  <div class=\"completedInquiryList\">\n\n    <!-- Empty Image  -->\n    <div *ngIf=\"canShowList && allInquiryList && allInquiryList.length < 1\">\n      <div class=\"noMoreSvgBox\">\n        <div class=\"noMoreSvg\">\n          <img src=\"../../../../assets/waiting.svg\" alt=\"\">\n        </div>\n        <div class=\"noMsg\">\n          No Any Completed Applications\n        </div>\n      </div>\n    </div>\n\n    <!-- Inquiry List for Display  -->\n    <ion-list lines=\"full\" *ngIf=\"canShowList && allInquiryList && allInquiryList.length > 0\">\n      <ion-item class=\"oneInquiry ion-activatable ripple-parent ion-no-padding\" *ngFor=\"let inquiry of allInquiryList\"\n        (click)=\"goToInquiryDetail(inquiry)\">\n        <ion-label class=\"ion-text-wrap paddingStart\">\n          <ion-text class=\"inquiryName\">\n            <div class=\"inquiryName\">{{inquiry.firstName}} {{inquiry.lastName}}</div>\n          </ion-text>\n          <ion-text>\n            <div class=\"inquiryParentName\"><span class=\"dot\"></span> <span>{{inquiry.businessName}}</span> </div>\n          </ion-text>\n          <ion-text>\n            <span class=\"status\"\n              [ngClass]=\"{rejectedInquiry: inquiry.status == 'REJECTED_BY_JR' || inquiry.status == 'CANCEL_BY_CLIENT'}\">{{getInquiryStageName(inquiry.status)}}</span>\n          </ion-text>\n        </ion-label>\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        <ion-ripple-effect></ion-ripple-effect>\n      </ion-item>\n\n      <!-- Infinite-scroll -->\n      <ion-infinite-scroll class=\"moreInquiryLoader\" threshold=\"100px\" (ionInfinite)=\"loadMoreInquiry($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"lines-small\" loadingText=\"Loading more inquiry...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-list>\n\n    <!-- Skeleton -->\n    <ion-list lines=\"none\" *ngIf=\"!canShowList\">\n      <ion-item class=\"oneInquiry\" *ngFor=\"let number of [1,2,3,4,5,6,7]\">\n        <ion-label class=\"ion-text-wrap\">\n          <ion-text class=\"inquiryName\">\n            <div class=\"inquiryName\">\n              <ion-skeleton-text animated style=\"width: 55%;height: 1.25rem\"></ion-skeleton-text>\n            </div>\n          </ion-text>\n          <ion-text>\n            <div class=\"inquiryParentName\">\n              <ion-skeleton-text animated style=\"width: 75%;height: 1.1rem\"></ion-skeleton-text>\n            </div>\n          </ion-text>\n          <ion-text>\n            <ion-skeleton-text animated style=\"width: 40%;height: 1rem\"></ion-skeleton-text>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 2513:
/*!*******************************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedInquiryPageRoutingModule": () => (/* binding */ CompletedInquiryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _completed_inquiry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed-inquiry.page */ 4899);




const routes = [
    {
        path: '',
        component: _completed_inquiry_page__WEBPACK_IMPORTED_MODULE_0__.CompletedInquiryPage
    },
    {
        path: 'completed-inquiry-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_inquiry_completed-inquiry_completed-inquiry-detail_completed-inquiry-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./completed-inquiry-detail/completed-inquiry-detail.module */ 5785)).then(m => m.CompletedInquiryDetailPageModule)
    }
];
let CompletedInquiryPageRoutingModule = class CompletedInquiryPageRoutingModule {
};
CompletedInquiryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CompletedInquiryPageRoutingModule);



/***/ }),

/***/ 4669:
/*!***********************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedInquiryPageModule": () => (/* binding */ CompletedInquiryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../directives/header-on-scroll.module */ 6727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _completed_inquiry_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed-inquiry-routing.module */ 2513);
/* harmony import */ var _completed_inquiry_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completed-inquiry.page */ 4899);








let CompletedInquiryPageModule = class CompletedInquiryPageModule {
};
CompletedInquiryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _completed_inquiry_routing_module__WEBPACK_IMPORTED_MODULE_1__.CompletedInquiryPageRoutingModule,
            _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__.HeaderOnScroll
        ],
        declarations: [_completed_inquiry_page__WEBPACK_IMPORTED_MODULE_2__.CompletedInquiryPage]
    })
], CompletedInquiryPageModule);



/***/ }),

/***/ 4899:
/*!*********************************************************************!*\
  !*** ./src/app/inquiry/completed-inquiry/completed-inquiry.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CompletedInquiryPage": () => (/* binding */ CompletedInquiryPage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _completed_inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./completed-inquiry.page.html?ngResource */ 1657);
/* harmony import */ var _completed_inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./completed-inquiry.page.scss?ngResource */ 1127);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constant/inquiryConstant */ 2131);
/* harmony import */ var src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/inquiry/inquiry.service */ 1967);
/* harmony import */ var src_app_service_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/util/util.service */ 814);










let CompletedInquiryPage = class CompletedInquiryPage {
  constructor(inquiryService, utilService, router) {
    this.inquiryService = inquiryService;
    this.utilService = utilService;
    this.router = router;
    this.canShowList = false;
    this.globalSearchInput = '';
    this.pageNumber = 1;
    this.totalInquiry = 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getCompetedInquiryList();
      _this.allInquiryList = [..._this.inquiryList];
    })();
  }

  getCompetedInquiryList() {
    var _this2 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let list = yield _this2.inquiryService.getComplitedInquiryList(_this2.pageNumber, _this2.globalSearchInput);
      _this2.inquiryList = list.list;
      _this2.totalInquiry = list.totalCount;
      _this2.canShowList = true;
    })();
  }

  getInquiryStageName(stage) {
    return src_app_constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_3__.InquiryStages[stage].name;
  }

  searchCompletedInquiry(event) {
    var _this3 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.pageNumber = 1;
      _this3.globalSearchInput = event.target.value;
      yield _this3.getCompetedInquiryList();
      _this3.allInquiryList = [..._this3.inquiryList];

      if (_this3.totalInquiry > _this3.pageNumber * 10) {
        _this3.infiniteScroll.disabled = false;
      }
    })();
  }

  refrashCompletedInquiryList(event) {
    var _this4 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.pageNumber = 1;
      _this4.globalSearchInput = '';

      try {
        yield _this4.getCompetedInquiryList();
        _this4.allInquiryList = [..._this4.inquiryList];
        event.target.complete();

        if (_this4.totalInquiry > _this4.pageNumber * 10) {
          _this4.infiniteScroll.disabled = false;
        }
      } catch (error) {}
    })();
  }

  loadMoreInquiry(event) {
    var _this5 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.totalInquiry <= _this5.pageNumber * 10) {
        event.target.disabled = true;
      }

      _this5.pageNumber = _this5.pageNumber + 1;

      try {
        yield _this5.getCompetedInquiryList();
        _this5.allInquiryList = [..._this5.allInquiryList, ..._this5.inquiryList];

        if (_this5.totalInquiry < _this5.pageNumber * 10) {
          event.target.disabled = true;
        }

        event.target.complete();
      } catch (error) {}
    })();
  }

  goToInquiryDetail(inquiry) {
    this.utilService.sendInquiry(inquiry);
    this.router.navigate(['/tabs/inquiry/completed-inquiry/completed-inquiry-detail']);
  }

};

CompletedInquiryPage.ctorParameters = () => [{
  type: src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_4__.InquiryService
}, {
  type: src_app_service_util_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
}];

CompletedInquiryPage.propDecorators = {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll]
  }]
};
CompletedInquiryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-completed-inquiry',
  template: _completed_inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_completed_inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CompletedInquiryPage);


/***/ })

}]);
//# sourceMappingURL=src_app_inquiry_completed-inquiry_completed-inquiry_module_ts.js.map