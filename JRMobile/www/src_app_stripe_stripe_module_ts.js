"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_stripe_stripe_module_ts"],{

/***/ 9033:
/*!****************************************************!*\
  !*** ./src/app/stripe/stripe.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdHJpcGUucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 6210:
/*!****************************************************!*\
  !*** ./src/app/stripe/stripe.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>stripe</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <ion-button expand=\"block\" class=\"ion-margin-top\" (click)=\"paymentSheet()\">Payment Sheet</ion-button>\n</ion-content>";

/***/ }),

/***/ 5156:
/*!*************************************************!*\
  !*** ./src/app/stripe/stripe-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripePageRoutingModule": () => (/* binding */ StripePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _stripe_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stripe.page */ 1033);




const routes = [
    {
        path: '',
        component: _stripe_page__WEBPACK_IMPORTED_MODULE_0__.StripePage
    }
];
let StripePageRoutingModule = class StripePageRoutingModule {
};
StripePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StripePageRoutingModule);



/***/ }),

/***/ 6276:
/*!*****************************************!*\
  !*** ./src/app/stripe/stripe.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripePageModule": () => (/* binding */ StripePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _stripe_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stripe-routing.module */ 5156);
/* harmony import */ var _stripe_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stripe.page */ 1033);







let StripePageModule = class StripePageModule {
};
StripePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _stripe_routing_module__WEBPACK_IMPORTED_MODULE_0__.StripePageRoutingModule
        ],
        declarations: [_stripe_page__WEBPACK_IMPORTED_MODULE_1__.StripePage]
    })
], StripePageModule);



/***/ }),

/***/ 1033:
/*!***************************************!*\
  !*** ./src/app/stripe/stripe.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripePage": () => (/* binding */ StripePage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _stripe_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stripe.page.html?ngResource */ 6210);
/* harmony import */ var _stripe_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stripe.page.scss?ngResource */ 9033);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _capacitor_community_stripe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor-community/stripe */ 9377);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 155);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 8611);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);









let StripePage = class StripePage {
  constructor(http) {
    this.http = http;
    this.data = {
      name: 'Group 2',
      email: 'test@gmail.com',
      amount: 100,
      currency: 'CAD'
    };
    _capacitor_community_stripe__WEBPACK_IMPORTED_MODULE_3__.Stripe.initialize({
      publishableKey: 'pk_test_51MfV7mHVw3NF151dqHPNjFCUnrSMpdQHkztbwn7SK6fiTmso1ZbKHKyfhfajadXHJ5zGXeEmYJv3k5eC6GEMYcKc00DfPSqDrX'
    });
  }

  ngOnInit() {}

  httpPost(body) {
    return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.api + 'payment-sheet', body).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.first)());
  }

  paymentSheet() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _capacitor_community_stripe__WEBPACK_IMPORTED_MODULE_3__.Stripe.addListener(_capacitor_community_stripe__WEBPACK_IMPORTED_MODULE_3__.PaymentSheetEventsEnum.Completed, () => {
          console.log('PaymentSheetEventsEnum.Completed');
        });

        const data$ = _this.httpPost(_this.data);

        const {
          paymentIntent,
          ephemeralKey,
          customer
        } = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.lastValueFrom)(data$);
        yield _capacitor_community_stripe__WEBPACK_IMPORTED_MODULE_3__.Stripe.createPaymentSheet({
          paymentIntentClientSecret: paymentIntent,
          customerId: customer,
          customerEphemeralKeySecret: ephemeralKey,
          merchantDisplayName: 'JR Daycare'
        });
        const result = yield _capacitor_community_stripe__WEBPACK_IMPORTED_MODULE_3__.Stripe.presentPaymentSheet();
        console.log('result: ', result);

        if (result && result.paymentResult === _capacitor_community_stripe__WEBPACK_IMPORTED_MODULE_3__.PaymentSheetEventsEnum.Completed) {// Redirect to new
        }

        ;
      } catch (e) {
        console.log(e);
      }
    })();
  }

};

StripePage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient
}];

StripePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-stripe',
  template: _stripe_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_stripe_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], StripePage);


/***/ }),

/***/ 1859:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/applepay/apple-pay-difinitions.interface.js ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 1744:
/*!*********************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/applepay/apple-pay-events.enum.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplePayEventsEnum": () => (/* binding */ ApplePayEventsEnum)
/* harmony export */ });
var ApplePayEventsEnum;

(function (ApplePayEventsEnum) {
  ApplePayEventsEnum["Loaded"] = "applePayLoaded";
  ApplePayEventsEnum["FailedToLoad"] = "applePayFailedToLoad";
  ApplePayEventsEnum["Completed"] = "applePayCompleted";
  ApplePayEventsEnum["Canceled"] = "applePayCanceled";
  ApplePayEventsEnum["Failed"] = "applePayFailed";
})(ApplePayEventsEnum || (ApplePayEventsEnum = {}));

/***/ }),

/***/ 7084:
/*!*****************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/applepay/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplePayEventsEnum": () => (/* reexport safe */ _apple_pay_events_enum__WEBPACK_IMPORTED_MODULE_0__.ApplePayEventsEnum)
/* harmony export */ });
/* harmony import */ var _apple_pay_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apple-pay-events.enum */ 1744);
/* harmony import */ var _apple_pay_difinitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple-pay-difinitions.interface */ 1859);



/***/ }),

/***/ 3073:
/*!**************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/definitions.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplePayEventsEnum": () => (/* reexport safe */ _applepay_index__WEBPACK_IMPORTED_MODULE_0__.ApplePayEventsEnum),
/* harmony export */   "GooglePayEventsEnum": () => (/* reexport safe */ _googlepay_index__WEBPACK_IMPORTED_MODULE_1__.GooglePayEventsEnum),
/* harmony export */   "PaymentFlowEventsEnum": () => (/* reexport safe */ _paymentflow_index__WEBPACK_IMPORTED_MODULE_2__.PaymentFlowEventsEnum),
/* harmony export */   "PaymentSheetEventsEnum": () => (/* reexport safe */ _paymentsheet_index__WEBPACK_IMPORTED_MODULE_3__.PaymentSheetEventsEnum)
/* harmony export */ });
/* harmony import */ var _applepay_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./applepay/index */ 7084);
/* harmony import */ var _googlepay_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./googlepay/index */ 8367);
/* harmony import */ var _paymentflow_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paymentflow/index */ 5119);
/* harmony import */ var _paymentsheet_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paymentsheet/index */ 1793);
/* harmony import */ var _shared_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/index */ 934);






/***/ }),

/***/ 3771:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/googlepay/google-pay-difinitions.interface.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8523:
/*!***********************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/googlepay/google-pay-events.enum.js ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglePayEventsEnum": () => (/* binding */ GooglePayEventsEnum)
/* harmony export */ });
var GooglePayEventsEnum;

(function (GooglePayEventsEnum) {
  GooglePayEventsEnum["Loaded"] = "googlePayLoaded";
  GooglePayEventsEnum["FailedToLoad"] = "googlePayFailedToLoad";
  GooglePayEventsEnum["Completed"] = "googlePayCompleted";
  GooglePayEventsEnum["Canceled"] = "googlePayCanceled";
  GooglePayEventsEnum["Failed"] = "googlePayFailed";
})(GooglePayEventsEnum || (GooglePayEventsEnum = {}));

/***/ }),

/***/ 8367:
/*!******************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/googlepay/index.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GooglePayEventsEnum": () => (/* reexport safe */ _google_pay_events_enum__WEBPACK_IMPORTED_MODULE_0__.GooglePayEventsEnum)
/* harmony export */ });
/* harmony import */ var _google_pay_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./google-pay-events.enum */ 8523);
/* harmony import */ var _google_pay_difinitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google-pay-difinitions.interface */ 3771);



/***/ }),

/***/ 9377:
/*!********************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApplePayEventsEnum": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.ApplePayEventsEnum),
/* harmony export */   "GooglePayEventsEnum": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.GooglePayEventsEnum),
/* harmony export */   "PaymentFlowEventsEnum": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.PaymentFlowEventsEnum),
/* harmony export */   "PaymentSheetEventsEnum": () => (/* reexport safe */ _definitions__WEBPACK_IMPORTED_MODULE_1__.PaymentSheetEventsEnum),
/* harmony export */   "Stripe": () => (/* binding */ Stripe)
/* harmony export */ });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ 6549);
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ 3073);

const Stripe = (0,_capacitor_core__WEBPACK_IMPORTED_MODULE_0__.registerPlugin)('Stripe', {
  web: () => __webpack_require__.e(/*! import() */ "node_modules_capacitor-community_stripe_dist_esm_web_js").then(__webpack_require__.bind(__webpack_require__, /*! ./web */ 8802)).then(m => new m.StripeWeb())
});



/***/ }),

/***/ 5119:
/*!********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentflow/index.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentFlowEventsEnum": () => (/* reexport safe */ _payment_flow_events_enum__WEBPACK_IMPORTED_MODULE_0__.PaymentFlowEventsEnum)
/* harmony export */ });
/* harmony import */ var _payment_flow_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-flow-events.enum */ 8485);
/* harmony import */ var _payment_flow_definitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-flow-definitions.interface */ 1880);



/***/ }),

/***/ 1880:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentflow/payment-flow-definitions.interface.js ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8485:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentflow/payment-flow-events.enum.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentFlowEventsEnum": () => (/* binding */ PaymentFlowEventsEnum)
/* harmony export */ });
var PaymentFlowEventsEnum;

(function (PaymentFlowEventsEnum) {
  PaymentFlowEventsEnum["Loaded"] = "paymentFlowLoaded";
  PaymentFlowEventsEnum["FailedToLoad"] = "paymentFlowFailedToLoad";
  PaymentFlowEventsEnum["Opened"] = "paymentFlowOpened";
  PaymentFlowEventsEnum["Created"] = "paymentFlowCreated";
  PaymentFlowEventsEnum["Completed"] = "paymentFlowCompleted";
  PaymentFlowEventsEnum["Canceled"] = "paymentFlowCanceled";
  PaymentFlowEventsEnum["Failed"] = "paymentFlowFailed";
})(PaymentFlowEventsEnum || (PaymentFlowEventsEnum = {}));

/***/ }),

/***/ 1793:
/*!*********************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentsheet/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSheetEventsEnum": () => (/* reexport safe */ _payment_sheet_events_enum__WEBPACK_IMPORTED_MODULE_0__.PaymentSheetEventsEnum)
/* harmony export */ });
/* harmony import */ var _payment_sheet_events_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-sheet-events.enum */ 7707);
/* harmony import */ var _payment_sheet_definitions_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment-sheet-definitions.interface */ 2482);



/***/ }),

/***/ 2482:
/*!***************************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentsheet/payment-sheet-definitions.interface.js ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 7707:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/paymentsheet/payment-sheet-events.enum.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentSheetEventsEnum": () => (/* binding */ PaymentSheetEventsEnum)
/* harmony export */ });
var PaymentSheetEventsEnum;

(function (PaymentSheetEventsEnum) {
  PaymentSheetEventsEnum["Loaded"] = "paymentSheetLoaded";
  PaymentSheetEventsEnum["FailedToLoad"] = "paymentSheetFailedToLoad";
  PaymentSheetEventsEnum["Completed"] = "paymentSheetCompleted";
  PaymentSheetEventsEnum["Canceled"] = "paymentSheetCanceled";
  PaymentSheetEventsEnum["Failed"] = "paymentSheetFailed";
})(PaymentSheetEventsEnum || (PaymentSheetEventsEnum = {}));

/***/ }),

/***/ 934:
/*!***************************************************************************!*\
  !*** ./node_modules/@capacitor-community/stripe/dist/esm/shared/index.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);


/***/ }),

/***/ 8611:
/*!**************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/lastValueFrom.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lastValueFrom": () => (/* binding */ lastValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/EmptyError */ 4423);

function lastValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    let _hasValue = false;

    let _value;

    source.subscribe({
      next: value => {
        _value = value;
        _hasValue = true;
      },
      error: reject,
      complete: () => {
        if (_hasValue) {
          resolve(_value);
        } else if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.EmptyError());
        }
      }
    });
  });
}

/***/ })

}]);
//# sourceMappingURL=src_app_stripe_stripe_module_ts.js.map