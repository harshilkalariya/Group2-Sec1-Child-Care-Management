"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inquiry_current-inquiry_current-inquiry_module_ts"],{

/***/ 1063:
/*!******************************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/current-inquiry.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".currentInquiryList {\n  padding-bottom: 62px;\n}\n.currentInquiryList .noMoreSvgBox {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 50px;\n}\n.currentInquiryList .noMoreSvgBox .noMoreSvg {\n  width: 50%;\n}\n.currentInquiryList .noMoreSvgBox .noMoreSvg img {\n  width: 100%;\n  background-size: cover;\n}\n.currentInquiryList .noMoreSvgBox .noMsg {\n  font-size: 1.1rem;\n  font-weight: 600;\n  margin-top: 20px;\n  opacity: 0.8;\n}\n.currentInquiryList .oneInquiry .inquiryName {\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.currentInquiryList .oneInquiry .inquiryParentName {\n  font-size: 0.95rem;\n  opacity: 0.8;\n  display: flex;\n  align-items: center;\n}\n.currentInquiryList .oneInquiry .dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: var(--card-backGround-dark);\n  margin-right: 10px;\n}\n.currentInquiryList .oneInquiry .status {\n  padding: 2px 10px;\n  font-size: 0.9rem;\n  border-radius: 100vmax;\n  background-color: rgba(var(--darkRGB), 0.1);\n  opacity: 0.7;\n}\n.currentInquiryList .oneInquiry .holdInquiry {\n  background-color: rgba(255, 238, 0, 0.3);\n}\n.currentInquiryList .oneInquiry .workOnInquiry {\n  background-color: rgba(0, 8, 255, 0.3);\n}\n.currentInquiryList .oneInquiry .paddingStart {\n  padding-left: 20px;\n}\n.currentInquiryList .moreInquiryLoader {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1cnJlbnQtaW5xdWlyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUNJO0VBQ0UsVUFBQTtBQUNOO0FBQ007RUFDRSxXQUFBO0VBQ0Esc0JBQUE7QUFDUjtBQUdJO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUROO0FBTUk7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBSk47QUFPSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUxOO0FBUUk7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkNBQUE7RUFDQSxrQkFBQTtBQU5OO0FBU0k7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtFQUNBLFlBQUE7QUFQTjtBQVVJO0VBQ0Usd0NBQUE7QUFSTjtBQVdJO0VBQ0Usc0NBQUE7QUFUTjtBQVlJO0VBQ0Usa0JBQUE7QUFWTjtBQWNFO0VBQ0UsaUJBQUE7QUFaSiIsImZpbGUiOiJjdXJyZW50LWlucXVpcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1cnJlbnRJbnF1aXJ5TGlzdCB7XG4gIHBhZGRpbmctYm90dG9tOiA2MnB4O1xuXG4gIC5ub01vcmVTdmdCb3gge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAubm9Nb3JlU3ZnIHtcbiAgICAgIHdpZHRoOiA1MCU7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5ub01zZyB7XG4gICAgICBmb250LXNpemU6IDEuMXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgb3BhY2l0eTogMC44O1xuICAgIH1cbiAgfVxuXG4gIC5vbmVJbnF1aXJ5IHtcbiAgICAuaW5xdWlyeU5hbWUge1xuICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5pbnF1aXJ5UGFyZW50TmFtZSB7XG4gICAgICBmb250LXNpemU6IDAuOTVyZW07XG4gICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXG4gICAgfVxuXG4gICAgLmRvdCB7XG4gICAgICB3aWR0aDogMTBweDtcbiAgICAgIGhlaWdodDogMTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNhcmQtYmFja0dyb3VuZC1kYXJrKTtcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB9XG5cbiAgICAuc3RhdHVzIHtcbiAgICAgIHBhZGRpbmc6IDJweCAxMHB4O1xuICAgICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxMDB2bWF4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSh2YXIoLS1kYXJrUkdCKSwgMC4xKTtcbiAgICAgIG9wYWNpdHk6IDAuNztcbiAgICB9XG5cbiAgICAuaG9sZElucXVpcnkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6ICNmZmVlMDAsICRhbHBoYTogMC4zKTtcbiAgICB9XG5cbiAgICAud29ya09uSW5xdWlyeSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDhmZiwgJGFscGhhOiAwLjMpO1xuICAgIH1cblxuICAgIC5wYWRkaW5nU3RhcnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5tb3JlSW5xdWlyeUxvYWRlciB7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 3812:
/*!******************************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/current-inquiry.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header #header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/inquiry\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>CURRENT INQUIRIES</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHeaderOnScroll]=\"header\">\n\n  <!-- Refresher -->\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"refrashCurrentInquiryList($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- Searchbar -->\n  <ion-searchbar mode=\"ios\" [(ngModel)]=\"globalSearchInput\" debounce=\"1000\" (ionChange)=\"searchCurrentInquiry($event)\">\n  </ion-searchbar>\n\n  <div class=\"currentInquiryList\">\n\n    <!-- Empty Image  -->\n    <div *ngIf=\"canShowList && allInquiryList && allInquiryList.length < 1\">\n      <div class=\"noMoreSvgBox\">\n        <div class=\"noMoreSvg\">\n          <img src=\"../../../../assets/waiting.svg\" alt=\"\">\n        </div>\n        <div class=\"noMsg\">\n          No Any In Process Inquiries\n        </div>\n      </div>\n    </div>\n\n    <!-- Inquiry List for Display  -->\n    <ion-list lines=\"full\" *ngIf=\"canShowList && allInquiryList && allInquiryList.length > 0\">\n      <ion-item class=\"oneInquiry ion-activatable ripple-parent  ion-no-padding\" *ngFor=\"let inquiry of allInquiryList\"\n        (click)=\"goToInquiryDetail(inquiry)\">\n        <ion-label class=\"ion-text-wrap paddingStart\">\n          <ion-text class=\"inquiryName\">\n            <div class=\"inquiryName\">{{inquiry.firstName}} {{inquiry.lastName}}</div>\n          </ion-text>\n          <ion-text>\n            <div class=\"inquiryParentName\"><span class=\"dot\"></span> <span>{{inquiry.businessName}}</span> </div>\n          </ion-text>\n          <ion-text *ngIf=\"inquiry.owner == ownerId && role !=='ROLE_RETAILER'\">\n            <span class=\"status\" [ngClass]=\"{'holdInquiry': inquiry.status == 'HOLD_BY_CLIENT',\n              'workOnInquiry': (inquiry.status == 'APPROVED_BY_JR' ||\n              inquiry.status == 'CONFIRMED_BY_CLIENT' ||\n               inquiry.status == 'PROVISIONING' ||\n               inquiry.status == 'REQUIREMENT'||\n               inquiry.status == 'INSTALLATION')}\">{{getInquiryStageName(inquiry.status)}}</span>\n          </ion-text>\n          <ion-text *ngIf=\"inquiry.owner !== ownerId || role =='ROLE_RETAILER'\">\n            <span class=\"status\"\n              [ngClass]=\"{'holdInquiry': inquiry.status == 'HOLD_BY_CLIENT'}\">{{getInquiryStageName(inquiry.status)}}</span>\n          </ion-text>\n        </ion-label>\n        <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n        <ion-ripple-effect></ion-ripple-effect>\n      </ion-item>\n\n      <!-- Infinite-scroll -->\n      <ion-infinite-scroll class=\"moreInquiryLoader\" threshold=\"100px\" (ionInfinite)=\"loadMoreCurrentInquiry($event)\">\n        <ion-infinite-scroll-content loadingSpinner=\"lines-small\" loadingText=\"Loading more inquiry...\">\n        </ion-infinite-scroll-content>\n      </ion-infinite-scroll>\n    </ion-list>\n\n    <!-- Skeleton -->\n    <ion-list lines=\"none\" *ngIf=\"!canShowList\">\n      <ion-item class=\"oneInquiry\" *ngFor=\"let number of [1,2,3,4,5,6,7]\">\n        <ion-label class=\"ion-text-wrap\">\n          <ion-text class=\"inquiryName\">\n            <div class=\"inquiryName\">\n              <ion-skeleton-text animated style=\"width: 55%;height: 1.25rem\"></ion-skeleton-text>\n            </div>\n          </ion-text>\n          <ion-text>\n            <div class=\"inquiryParentName\">\n              <ion-skeleton-text animated style=\"width: 75%;height: 1.1rem\"></ion-skeleton-text>\n            </div>\n          </ion-text>\n          <ion-text>\n            <ion-skeleton-text animated style=\"width: 40%;height: 1rem\"></ion-skeleton-text>\n          </ion-text>\n        </ion-label>\n      </ion-item>\n    </ion-list>\n\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 8092:
/*!***************************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/current-inquiry-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentInquiryPageRoutingModule": () => (/* binding */ CurrentInquiryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _current_inquiry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-inquiry.page */ 3239);




const routes = [
    {
        path: '',
        component: _current_inquiry_page__WEBPACK_IMPORTED_MODULE_0__.CurrentInquiryPage
    },
    {
        path: 'inquiry-detail',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_inquiry_current-inquiry_inquiry-detail_inquiry-detail_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./inquiry-detail/inquiry-detail.module */ 459)).then(m => m.InquiryDetailPageModule)
    }
];
let CurrentInquiryPageRoutingModule = class CurrentInquiryPageRoutingModule {
};
CurrentInquiryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CurrentInquiryPageRoutingModule);



/***/ }),

/***/ 2867:
/*!*******************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/current-inquiry.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentInquiryPageModule": () => (/* binding */ CurrentInquiryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../directives/header-on-scroll.module */ 6727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _current_inquiry_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-inquiry-routing.module */ 8092);
/* harmony import */ var _current_inquiry_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-inquiry.page */ 3239);








let CurrentInquiryPageModule = class CurrentInquiryPageModule {
};
CurrentInquiryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _current_inquiry_routing_module__WEBPACK_IMPORTED_MODULE_1__.CurrentInquiryPageRoutingModule,
            _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__.HeaderOnScroll
        ],
        declarations: [_current_inquiry_page__WEBPACK_IMPORTED_MODULE_2__.CurrentInquiryPage]
    })
], CurrentInquiryPageModule);



/***/ }),

/***/ 3239:
/*!*****************************************************************!*\
  !*** ./src/app/inquiry/current-inquiry/current-inquiry.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrentInquiryPage": () => (/* binding */ CurrentInquiryPage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _current_inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-inquiry.page.html?ngResource */ 3812);
/* harmony import */ var _current_inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./current-inquiry.page.scss?ngResource */ 1063);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/constant/inquiryConstant */ 2131);
/* harmony import */ var src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/inquiry/inquiry.service */ 1967);
/* harmony import */ var src_app_service_util_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/util/util.service */ 814);
/* harmony import */ var src_app_service_local_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/service/local-storage/localstorage.service */ 3546);











let CurrentInquiryPage = class CurrentInquiryPage {
  constructor(inquiryService, utilService, router, navCtrl, platform, localStorage) {
    this.inquiryService = inquiryService;
    this.utilService = utilService;
    this.router = router;
    this.navCtrl = navCtrl;
    this.platform = platform;
    this.localStorage = localStorage;
    this.canShowList = false;
    this.globalSearchInput = '';
    this.pageNumber = 1;
    this.totalInquiry = 0;
  }

  ngOnInit() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let currentUser = yield _this.localStorage.getValue('currentUser');
      _this.ownerId = currentUser.ownerId;
      _this.role = currentUser.role;
    })();
  }

  ionViewWillEnter() {
    var _this2 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.content.scrollToTop();

      _this2.pageNumber = 1;
      _this2.globalSearchInput = '';
      yield _this2.getCurrentInquiryList();
      _this2.allInquiryList = [..._this2.inquiryList];

      if (_this2.infiniteScroll) {
        _this2.infiniteScroll.disabled = false;
      }

      _this2.btnHandler = _this2.platform.backButton.subscribeWithPriority(1, () => {
        _this2.navCtrl.navigateBack("tabs/inquiry");
      });
    })();
  }

  getCurrentInquiryList() {
    var _this3 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      console.log('ongoing inquiry');
      let list = yield _this3.inquiryService.getAllInquiryList(_this3.pageNumber, _this3.globalSearchInput);
      _this3.inquiryList = list.list;
      _this3.totalInquiry = list.totalCount;
      _this3.canShowList = true;
    })();
  }

  getInquiryStageName(stage) {
    return src_app_constant_inquiryConstant__WEBPACK_IMPORTED_MODULE_3__.InquiryStages[stage].name;
  }

  searchCurrentInquiry(event) {
    var _this4 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.pageNumber = 1;
      _this4.globalSearchInput = event.target.value;
      yield _this4.getCurrentInquiryList();
      _this4.allInquiryList = [..._this4.inquiryList];

      if (_this4.totalInquiry > _this4.pageNumber * 10) {
        _this4.infiniteScroll.disabled = false;
      }
    })();
  }

  refrashCurrentInquiryList(event) {
    var _this5 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.pageNumber = 1;
      _this5.globalSearchInput = '';

      try {
        yield _this5.getCurrentInquiryList();
        _this5.allInquiryList = [..._this5.inquiryList];
        event.target.complete();

        if (_this5.totalInquiry > _this5.pageNumber * 10) {
          _this5.infiniteScroll.disabled = false;
        }
      } catch (error) {}
    })();
  }

  loadMoreCurrentInquiry(event) {
    var _this6 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.totalInquiry <= _this6.pageNumber * 10) {
        event.target.disabled = true;
      }

      _this6.pageNumber = _this6.pageNumber + 1;

      try {
        yield _this6.getCurrentInquiryList();
        _this6.allInquiryList = [..._this6.allInquiryList, ..._this6.inquiryList];

        if (_this6.totalInquiry <= _this6.pageNumber * 10) {
          event.target.disabled = true;
        }

        event.target.complete();
      } catch (error) {}
    })();
  }

  goToInquiryDetail(inquiry) {
    this.utilService.sendInquiry(inquiry);
    this.router.navigate(['/tabs/inquiry/current-inquiry/inquiry-detail']);
  }

  ionViewDidLeave() {
    var _this7 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.btnHandler) {
        _this7.btnHandler.unsubscribe();
      }
    })();
  }

};

CurrentInquiryPage.ctorParameters = () => [{
  type: src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_4__.InquiryService
}, {
  type: src_app_service_util_util_service__WEBPACK_IMPORTED_MODULE_5__.UtilService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: src_app_service_local_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_6__.LocalStorageService
}];

CurrentInquiryPage.propDecorators = {
  infiniteScroll: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonInfiniteScroll]
  }],
  content: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonContent, {
      static: false
    }]
  }]
};
CurrentInquiryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-current-inquiry',
  template: _current_inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_current_inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CurrentInquiryPage);


/***/ })

}]);
//# sourceMappingURL=src_app_inquiry_current-inquiry_current-inquiry_module_ts.js.map