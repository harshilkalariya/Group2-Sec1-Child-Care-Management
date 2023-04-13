"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_payment_payment_module_ts"],{

/***/ 9529:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 7916:
/*!******************************************************!*\
  !*** ./src/app/payment/payment.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Payment</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-grid class=\"ion-no-padding\">\n    <ion-row class=\"ion-no-padding\">\n      <ion-col class=\"ion-margin-top ion-padding ion-text-center\">\n        Utilize this Pay button in your app's installment page with the connected rationale.\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-card class=\"welcome-card ion-margin\">\n    <ion-img src=\"./assets/paypal.jpg\"></ion-img>\n    <ion-card-header>\n      <ion-card-subtitle>Get Started</ion-card-subtitle>\n      <ion-card-title><b>PayPal Sample</b></ion-card-title>\n      <ion-row>\n        <ion-col style=\"padding-left: 0;\">Total Payment</ion-col>\n        <ion-col class=\"ion-text-end\">\n          {{currencyIcon}} {{paymentAmount}}\n        </ion-col>\n      </ion-row>\n    </ion-card-header>\n    <ion-card-content class=\"ion-no-padding\">\n      <ion-button expand=\"full\" color=\"success\" class=\"ion-no-margin\" (click)=\"payWithPaypal()\">Pay with PayPal</ion-button>\n    </ion-card-content>\n  </ion-card>\n\n  <div *ngIf=\"responseData\" class=\"ion-margin response ion-padding\">\n    <code>{{responseData}}\n    </code>\n  </div>\n\n  <ion-list lines=\"none\">\n    <ion-list-header>\n      <ion-label>Resources</ion-label>\n    </ion-list-header>\n    <ion-item href=\"https://ionicframework.com/docs/native/paypal\" detail=\"true\">\n      <ion-icon slot=\"start\" color=\"dark\" name=\"book-outline\"></ion-icon>\n      <ion-label>Paypal Plugin Documentation</ion-label>\n    </ion-item>\n    <ion-item href=\"https://github.com/paypal/PayPal-Cordova-Plugin\" detail=\"true\">\n      <ion-icon slot=\"start\" color=\"dark\" name=\"build-outline\"></ion-icon>\n      <ion-label>Paypal Plugin Repository</ion-label>\n    </ion-item>\n    <ion-item href=\"https://medium.com/enappd/ionic-4-paypal-payment-integration-for-apps-and-pwa-680b3f7ddb2f\" detail=\"true\">\n      <ion-icon slot=\"start\" color=\"dark\" name=\"flash-outline\"></ion-icon>\n      <ion-label>Ionic 4 PayPal Payment Integration</ion-label>\n    </ion-item>\n    <ion-item href=\"https://www.developerhelpline.com/\" detail=\"true\">\n      <ion-icon slot=\"start\" src=\"./assets/developer-helpline-256.svg\"></ion-icon>\n      <ion-label>More on Developer Helpline</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>\n";

/***/ }),

/***/ 3509:
/*!***************************************************!*\
  !*** ./src/app/payment/payment-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageRoutingModule": () => (/* binding */ PaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page */ 684);




const routes = [
    {
        path: '',
        component: _payment_page__WEBPACK_IMPORTED_MODULE_0__.PaymentPage
    }
];
let PaymentPageRoutingModule = class PaymentPageRoutingModule {
};
PaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PaymentPageRoutingModule);



/***/ }),

/***/ 4068:
/*!*******************************************!*\
  !*** ./src/app/payment/payment.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPageModule": () => (/* binding */ PaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 3509);
/* harmony import */ var _payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page */ 684);
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ 9908);








let PaymentPageModule = class PaymentPageModule {
};
PaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentPageRoutingModule
        ],
        declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_1__.PaymentPage],
        providers: [
            _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__.PayPal
        ]
    })
], PaymentPageModule);



/***/ }),

/***/ 684:
/*!*****************************************!*\
  !*** ./src/app/payment/payment.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentPage": () => (/* binding */ PaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment.page.html?ngResource */ 7916);
/* harmony import */ var _payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.page.scss?ngResource */ 9529);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/paypal/ngx */ 9908);





let PaymentPage = class PaymentPage {
    constructor(payPal) {
        this.payPal = payPal;
        this.paymentAmount = '99.99';
        this.currency = 'USD';
        this.currencyIcon = '$';
        this.responseData = '';
    }
    ngOnInit() {
    }
    payWithPaypal() {
        this.payPal.init({
            PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
            PayPalEnvironmentSandbox: 'ARSm_pDtCl5xX-XyFqKCTtHh52-XfgOPE9JEax2rffd_6AQzrlko-1Wqi8GeTGcaMcrOKhcLq31jV7T0'
        }).then(() => {
            // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
            this.payPal.prepareToRender('PayPalEnvironmentSandbox', new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__.PayPalConfiguration({
            // Only needed if you get an "Internal Service Error" after PayPal login!
            //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
            })).then(() => {
                let payment = new _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__.PayPalPayment(this.paymentAmount, this.currency, 'Description', 'sale');
                this.payPal.renderSinglePaymentUI(payment).then((res) => {
                    this.responseData = JSON.stringify(res, null, 1);
                    // Successfully paid
                    console.log('successfully paid');
                }, () => {
                    // Error or render dialog closed without being successful
                });
            }, () => {
                // Error in configuration
            });
        }, () => {
            // Error in initialization, maybe PayPal isn't supported or something else
        });
    }
};
PaymentPage.ctorParameters = () => [
    { type: _ionic_native_paypal_ngx__WEBPACK_IMPORTED_MODULE_2__.PayPal }
];
PaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-payment',
        template: _payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PaymentPage);



/***/ }),

/***/ 9908:
/*!*********************************************************************!*\
  !*** ./node_modules/@ionic-native/paypal/__ivy_ngcc__/ngx/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PayPal": () => (/* binding */ PayPal),
/* harmony export */   "PayPalConfiguration": () => (/* binding */ PayPalConfiguration),
/* harmony export */   "PayPalItem": () => (/* binding */ PayPalItem),
/* harmony export */   "PayPalPayment": () => (/* binding */ PayPalPayment),
/* harmony export */   "PayPalPaymentDetails": () => (/* binding */ PayPalPaymentDetails),
/* harmony export */   "PayPalShippingAddress": () => (/* binding */ PayPalShippingAddress)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic-native/core */ 8751);





var PayPal =
/** @class */
function (_super) {
  (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__extends)(PayPal, _super);

  function PayPal() {
    return _super !== null && _super.apply(this, arguments) || this;
  }

  PayPal.prototype.version = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "version", {}, arguments);
  };

  PayPal.prototype.init = function (clientIdsForEnvironments) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "init", {}, arguments);
  };

  PayPal.prototype.prepareToRender = function (environment, configuration) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "prepareToRender", {}, arguments);
  };

  PayPal.prototype.renderSinglePaymentUI = function (payment) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "renderSinglePaymentUI", {}, arguments);
  };

  PayPal.prototype.clientMetadataID = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "clientMetadataID", {}, arguments);
  };

  PayPal.prototype.renderFuturePaymentUI = function () {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "renderFuturePaymentUI", {}, arguments);
  };

  PayPal.prototype.renderProfileSharingUI = function (scopes) {
    return (0,_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.cordova)(this, "renderProfileSharingUI", {}, arguments);
  };

  PayPal.pluginName = "PayPal";
  PayPal.plugin = "com.paypal.cordova.mobilesdk";
  PayPal.pluginRef = "PayPalMobile";
  PayPal.repo = "https://github.com/paypal/PayPal-Cordova-Plugin";
  PayPal.platforms = ["Android", "iOS"];

  PayPal.ɵfac = /*@__PURE__*/function () {
    var ɵPayPal_BaseFactory;
    return function PayPal_Factory(t) {
      return (ɵPayPal_BaseFactory || (ɵPayPal_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](PayPal)))(t || PayPal);
    };
  }();

  PayPal.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: PayPal,
    factory: function (t) {
      return PayPal.ɵfac(t);
    }
  });

  (function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PayPal, [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable
    }], null, null);
  })();

  return PayPal;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_0__.IonicNativePlugin);



var PayPalPayment =
/** @class */
function () {
  function PayPalPayment(amount, currency, shortDescription, intent, details) {
    /**
     * Optional Build Notation code ("BN code"), obtained from partnerprogram@paypal.com,
     * for your tracking purposes.
     */
    this.bnCode = 'PhoneGap_SP';
    this.amount = amount;
    this.currency = currency;
    this.shortDescription = shortDescription;
    this.intent = intent;
    this.details = details;
  }

  return PayPalPayment;
}();



var PayPalItem =
/** @class */
function () {
  /**
   * The PayPalItem class defines an optional itemization for a payment.
   * @see https://developer.paypal.com/docs/api/#item-object for more details.
   * @param {String} name: Name of the item. 127 characters max
   * @param {Number} quantity: Number of units. 10 characters max.
   * @param {String} price: Unit price for this item 10 characters max.
   * May be negative for "coupon" etc
   * @param {String} currency: ISO standard currency code.
   * @param {String} sku: The stock keeping unit for this item. 50 characters max (optional)
   */
  function PayPalItem(name, quantity, price, currency, sku) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.currency = currency;
    this.sku = sku;
  }

  return PayPalItem;
}();



var PayPalPaymentDetails =
/** @class */
function () {
  /**
   * The PayPalPaymentDetails class defines optional amount details.
   * @param {String} subtotal: Sub-total (amount) of items being paid for. 10 characters max with support for 2 decimal places.
   * @param {String} shipping: Amount charged for shipping. 10 characters max with support for 2 decimal places.
   * @param {String} tax: Amount charged for tax. 10 characters max with support for 2 decimal places.
   */
  function PayPalPaymentDetails(subtotal, shipping, tax) {
    this.subtotal = subtotal;
    this.shipping = shipping;
    this.tax = tax;
  }

  return PayPalPaymentDetails;
}();



var PayPalConfiguration =
/** @class */
function () {
  /**
   * You use a PayPalConfiguration object to configure many aspects of how the SDK behaves.
   * see defaults for options available
   */
  function PayPalConfiguration(options) {
    var defaults = {
      defaultUserEmail: null,
      defaultUserPhoneCountryCode: null,
      defaultUserPhoneNumber: null,
      merchantName: null,
      merchantPrivacyPolicyURL: null,
      merchantUserAgreementURL: null,
      acceptCreditCards: true,
      payPalShippingAddressOption: 0,
      rememberUser: true,
      languageOrLocale: null,
      disableBlurWhenBackgrounding: false,
      presentingInPopover: false,
      forceDefaultsInSandbox: false,
      sandboxUserPassword: null,
      sandboxUserPin: null
    };

    if (options && typeof options === 'object') {
      for (var i in options) {
        if (defaults.hasOwnProperty(i)) {
          defaults[i] = options[i];
        }
      }
    }

    return defaults;
  }

  return PayPalConfiguration;
}();



var PayPalShippingAddress =
/** @class */
function () {
  /**
   * See the documentation of the individual properties for more detail.
   * @param {String} recipientName: Name of the recipient at this address. 50 characters max.
   * @param {String} line1: Line 1 of the address (e.g., Number, street, etc). 100 characters max.
   * @param {String} line2: Line 2 of the address (e.g., Suite, apt #, etc). 100 characters max. Optional.
   * @param {String} city: City name. 50 characters max.
   * @param {String} state: 2-letter code for US states, and the equivalent for other countries. 100 characters max. Required in certain countries.
   * @param {String} postalCode: ZIP code or equivalent is usually required for countries that have them. 20 characters max. Required in certain countries.
   * @param {String} countryCode: 2-letter country code. 2 characters max.
   */
  function PayPalShippingAddress(recipientName, line1, line2, city, state, postalCode, countryCode) {
    this.recipientName = recipientName;
    this.line1 = line1;
    this.line2 = line2;
    this.city = city;
    this.state = state;
    this.postalCode = postalCode;
    this.countryCode = countryCode;
  }

  return PayPalShippingAddress;
}();



/***/ })

}]);
//# sourceMappingURL=src_app_payment_payment_module_ts.js.map