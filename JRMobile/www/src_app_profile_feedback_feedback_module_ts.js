"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_feedback_feedback_module_ts"],{

/***/ 1609:
/*!****************************************************************!*\
  !*** ./src/app/profile/feedback/feedback.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".feedBackPage {\n  padding: 20px 15px 70px 15px;\n}\n.feedBackPage ion-item {\n  --border-color: rgba(var(--darkRGB), 0.3);\n  --background: var(--card-backGround);\n}\n.feedBackPage .item-has-focus {\n  --highlight-background: rgba(var(--darkRGB), 0.3);\n}\n.feedBackPage .headerLine {\n  background-color: var(--card-backGround-dark);\n  margin: 10px 0px 35px 0px;\n  padding: 10px 15px;\n  border-radius: 25px;\n  text-align: center;\n  font-size: 1.1rem;\n  color: var(--font-dark);\n}\n.feedBackPage .type {\n  margin: 0px 0px 25px 0px;\n}\n.feedBackPage .feedbackText {\n  margin-bottom: 31px;\n}\n.feedBackPage .feedbackText .maxWords {\n  font-size: 0.8rem;\n  text-align: end;\n  margin-top: 5px;\n}\n.feedBackPage .feedbackText .redFont {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlDQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUVFO0VBQ0UsaURBQUE7QUFBSjtBQUdFO0VBQ0UsNkNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFESjtBQUlFO0VBQ0Usd0JBQUE7QUFGSjtBQUtFO0VBQ0UsbUJBQUE7QUFISjtBQUtJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQUhOO0FBTUk7RUFDRSxVQUFBO0FBSk4iLCJmaWxlIjoiZmVlZGJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlZWRCYWNrUGFnZSB7XG4gIHBhZGRpbmc6IDIwcHggMTVweCA3MHB4IDE1cHg7XG5cbiAgaW9uLWl0ZW0ge1xuICAgIC0tYm9yZGVyLWNvbG9yOiByZ2JhKHZhcigtLWRhcmtSR0IpLCAwLjMpO1xuICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY2FyZC1iYWNrR3JvdW5kKTtcbiAgfVxuXG4gIC5pdGVtLWhhcy1mb2N1cyB7XG4gICAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogcmdiYSh2YXIoLS1kYXJrUkdCKSwgMC4zKTtcbiAgfVxuXG4gIC5oZWFkZXJMaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jYXJkLWJhY2tHcm91bmQtZGFyayk7XG4gICAgbWFyZ2luOiAxMHB4IDBweCAzNXB4IDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6IHZhcigtLWZvbnQtZGFyayk7XG4gIH1cblxuICAudHlwZSB7XG4gICAgbWFyZ2luOiAwcHggMHB4IDI1cHggMHB4O1xuICB9XG5cbiAgLmZlZWRiYWNrVGV4dCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMzFweDtcblxuICAgIC5tYXhXb3Jkc3tcbiAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgICAgdGV4dC1hbGlnbjogZW5kO1xuICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIH1cblxuICAgIC5yZWRGb250e1xuICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";

/***/ }),

/***/ 3451:
/*!****************************************************************!*\
  !*** ./src/app/profile/feedback/feedback.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/profile\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Feedback</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"feedBackPage\">\n    <div class=\"headerLine\">\n      We would love to hear your thoughts.\n    </div>\n    <div class=\"type\">\n      <ion-item>\n        <ion-label position=\"stacked\">Type *</ion-label>\n        <ion-select [(ngModel)]=\"feedbackType\" interface=\"alert\">\n          <ion-select-option [value]=feedBack *ngFor=\"let feedBack of feedbackOption\">{{feedBack}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </div>\n    <div class=\"feedbackText\">\n      <ion-item>\n        <ion-label position=\"stacked\">Description</ion-label>\n        <ion-textarea rows=\"5\" maxlength=\"150\" type=\"text\" [(ngModel)]=\"feedbackDesc\"\n          (ngModelChange)=\"calculateLength()\"></ion-textarea>\n      </ion-item>\n      <div class=\"maxWords\" [ngClass]=\"{redFont:descLength==150}\">* {{descLength}} / 150 letter</div>\n    </div>\n\n    <div class=\"feedbackbtn\">\n      <ion-button class=\"loginBtn\" color=\"dark\" expand=\"block\" (click)=\"submitFeedback()\">Submit</ion-button>\n    </div>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 149:
/*!*************************************************************!*\
  !*** ./src/app/profile/feedback/feedback-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPageRoutingModule": () => (/* binding */ FeedbackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.page */ 5455);




const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_0__.FeedbackPage
    }
];
let FeedbackPageRoutingModule = class FeedbackPageRoutingModule {
};
FeedbackPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FeedbackPageRoutingModule);



/***/ }),

/***/ 6625:
/*!*****************************************************!*\
  !*** ./src/app/profile/feedback/feedback.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPageModule": () => (/* binding */ FeedbackPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-routing.module */ 149);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.page */ 5455);







let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeedbackPageRoutingModule
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_1__.FeedbackPage]
    })
], FeedbackPageModule);



/***/ }),

/***/ 5455:
/*!***************************************************!*\
  !*** ./src/app/profile/feedback/feedback.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPage": () => (/* binding */ FeedbackPage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _feedback_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.page.html?ngResource */ 3451);
/* harmony import */ var _feedback_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback.page.scss?ngResource */ 1609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_service_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/feedback/feedback.service */ 1347);
/* harmony import */ var src_app_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/toast/toast.service */ 4747);









let FeedbackPage = class FeedbackPage {
  constructor(toastService, feedBackService, router, alertController) {
    this.toastService = toastService;
    this.feedBackService = feedBackService;
    this.router = router;
    this.alertController = alertController;
    this.feedbackOption = ['About child', 'About instructor', 'Other'];
    this.feedbackType = '';
    this.feedbackDesc = '';
    this.descLength = 0;
  }

  ngOnInit() {}

  calculateLength() {
    this.descLength = this.feedbackDesc.length;
  }

  submitFeedback() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.feedbackType && _this.feedbackDesc) {
        let feedBack = {
          type: _this.feedbackType,
          desc: _this.feedbackDesc
        };
        const alert = yield _this.alertController.create({
          header: 'Are you sure to send feedback?',
          buttons: [{
            text: 'Close',
            role: 'cancel',
            handler: () => {}
          }, {
            text: 'Confirm',
            role: 'confirm',
            cssClass: 'alert-button-confirm',
            handler: function () {
              var _ref = (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
                yield _this.feedBackService.addFeedback(feedBack);

                _this.toastService.success('Feedback sent.');

                _this.router.navigate(['/tabs/profile']);
              });

              return function handler() {
                return _ref.apply(this, arguments);
              };
            }()
          }]
        });
        yield alert.present();
      } else {
        _this.toastService.error('Fill all details for Feedback!');
      }
    })();
  }

};

FeedbackPage.ctorParameters = () => [{
  type: src_app_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}, {
  type: src_app_service_feedback_feedback_service__WEBPACK_IMPORTED_MODULE_3__.FeedbackService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.AlertController
}];

FeedbackPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-feedback',
  template: _feedback_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_feedback_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], FeedbackPage);


/***/ }),

/***/ 1347:
/*!******************************************************!*\
  !*** ./src/app/service/feedback/feedback.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackService": () => (/* binding */ FeedbackService)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 2340);





let FeedbackService = class FeedbackService {
  constructor(http) {
    this.http = http;
    this.url = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.server_url;
  }

  addFeedback(feedback) {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this.http.post(`${_this.url}feedback/add`, feedback).toPromise();
    })();
  }

};

FeedbackService.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
}];

FeedbackService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], FeedbackService);


/***/ })

}]);
//# sourceMappingURL=src_app_profile_feedback_feedback_module_ts.js.map