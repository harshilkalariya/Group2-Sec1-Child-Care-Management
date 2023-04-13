"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = ".loginBg {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -1;\n  width: clamp(700px, 100%, 100%);\n  height: clamp(var(--vh), 100%, 100%);\n  overflow: hidden;\n}\n.loginBg img {\n  min-width: 100%;\n  min-height: 100%;\n  object-fit: cover;\n  filter: invert(1);\n  opacity: 0.8;\n}\n.mainContainer {\n  padding-top: 56px;\n  height: 100%;\n  --ion-grid-column-padding: 0px !important;\n}\n.mainContainer ion-input {\n  --padding-top: 0;\n  --padding-bottom: 0;\n}\n.top {\n  display: flex;\n  justify-content: center;\n}\n.logo {\n  padding: 20px;\n  background-color: var(--body);\n  box-shadow: 0 0 5px rgba(var(--darkRGB), 0.2);\n  border-radius: 10px;\n}\n.logo img {\n  height: 70px;\n}\n.inputForLoginPage {\n  margin-top: 46px;\n  width: 100%;\n}\n.inputForLoginPage .loginBtn {\n  margin-top: 30px;\n}\n.inputForLoginPage .forgotPass {\n  margin-top: 20px;\n  text-align: right;\n  color: #5f5ffc;\n  font-size: 0.75rem;\n}\n.inputForLoginPage .backToLogin {\n  margin-top: 20px;\n  text-align: left;\n  color: #5f5ffc;\n  font-size: 0.75rem;\n}\n.inputForLoginPage .hidden {\n  visibility: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDSjtBQUdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7QUFBRjtBQUVFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUFKO0FBSUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFERjtBQUlBO0VBQ0UsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsNkNBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxZQUFBO0FBREo7QUFLQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtBQUZGO0FBSUU7RUFDRSxnQkFBQTtBQUZKO0FBS0U7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFKSjtBQU9FO0VBQ0Usa0JBQUE7QUFMSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5CZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAtMTtcbiAgd2lkdGg6IGNsYW1wKDcwMHB4LCAxMDAlLCAxMDAlKTtcbiAgaGVpZ2h0OiBjbGFtcCh2YXIoLS12aCksIDEwMCUsIDEwMCUpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gIGltZyB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XG4gICAgb3BhY2l0eTogMC44O1xuICB9XG59XG5cbi5tYWluQ29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDU2cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgLS1pb24tZ3JpZC1jb2x1bW4tcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG5cbiAgaW9uLWlucHV0IHtcbiAgICAtLXBhZGRpbmctdG9wOiAwO1xuICAgIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIH1cbn1cblxuLnRvcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubG9nbyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvZHkpO1xuICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEodmFyKC0tZGFya1JHQiksIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG5cbiAgaW1nIHtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gIH1cbn1cblxuLmlucHV0Rm9yTG9naW5QYWdlIHtcbiAgbWFyZ2luLXRvcDogNDZweDtcbiAgd2lkdGg6IDEwMCU7XG5cbiAgLmxvZ2luQnRuIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICB9XG5cbiAgLmZvcmdvdFBhc3Mge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgY29sb3I6ICM1ZjVmZmM7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG5cbiAgLmJhY2tUb0xvZ2luIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgY29sb3I6ICM1ZjVmZmM7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICB9XG5cbiAgLmhpZGRlbiB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB9XG59XG4iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"loginBg\">\n    <img src=\"../../assets/smart1.jpg\" alt=\"JR Daycare\">\n  </div>\n  <div class=\"mainContainer ion-padding\">\n    <div class=\"top\">\n      <div class=\"logo\">\n        <img class=\"blackLogo\" src=\"../../assets/logo_black.png\" alt=\"JR\">\n      </div>\n    </div>\n\n    <ion-grid *ngIf=\"loginPage\" class=\"inputForLoginPage\">\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-md=\"6\">\n          <ion-card class=\"ion-padding-horizontal\">\n            <ion-card-content class=\"ion-padding\">\n              <form [formGroup]=\"loginInput\" (ngSubmit)=\"login()\">\n                <ion-item class=\"ion-no-padding inputUnderline\">\n                  <ion-label color=\"dark\" position=\"floating\">Email ID / Mobile No.</ion-label>\n                  <ion-input type=\"text\" mode=\"ios\" formControlName=\"username\"></ion-input>\n                </ion-item>\n                <ion-item class=\"ion-no-padding\">\n                  <ion-label color=\"dark\" position=\"floating\">Password</ion-label>\n                  <ion-input type=\"password\" mode=\"ios\" formControlName=\"password\"></ion-input>\n                </ion-item>\n                <ion-button class=\"loginBtn\" color=\"dark\" expand=\"block\" type=\"submit\">Login</ion-button>\n                <div class=\"forgotPass\"> <span (click)=\"forgotPassPageShow()\">Forgot Password?</span></div>\n              </form>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <ion-grid *ngIf=\"forgotPasswordPage\" class=\"inputForLoginPage\">\n      <ion-row class=\"ion-justify-content-center\">\n        <ion-col size-md=\"6\">\n          <ion-card class=\"ion-padding-horizontal\">\n            <ion-card-content class=\"ion-padding\">\n              <form>\n                <ion-item class=\"ion-no-padding\">\n                  <ion-label color=\"dark\" position=\"floating\">Email ID / Mobile No.</ion-label>\n                  <ion-input type=\"text\" [formControl]=\"resetUserName\"></ion-input>\n                </ion-item>\n\n                <ion-item class=\"hidden ion-no-padding\" [ngClass]=\"{'ion-hide': isOTPReceived}\">\n                  <ion-label color=\"dark\" position=\"floating\">Dummy</ion-label>\n                  <ion-input type=\"text\"></ion-input>\n                </ion-item>\n\n\n                <ion-grid *ngIf=\"isOTPReceived && !isOTPValidated\" class=\"ion-no-padding\">\n                  <ion-row class=\"ion-align-items-center\">\n                    <ion-col size=\"8\">\n                      <ion-item class=\"ion-no-padding\">\n                        <ion-label color=\"dark\" position=\"floating\">OTP</ion-label>\n                        <ion-input type=\"password\" [formControl]=\"resetOTP\"></ion-input>\n                      </ion-item>\n                    </ion-col>\n                    <ion-col size=\"4\">\n                      <ion-button color=\"dark\" expand=\"block\" (click)=\"generateOTP()\" [disabled]=\"!resendOTP\">\n                        <span *ngIf=\"otpTimeLeft > 0\">{{otpTimeLeft}} S</span>\n                        <span *ngIf=\"otpTimeLeft == 0\">Resend</span>\n                      </ion-button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n\n                <ion-item *ngIf=\"isOTPValidated\" class=\"ion-no-padding\">\n                  <ion-label color=\"dark\" position=\"floating\">New Password</ion-label>\n                  <ion-input type=\"password\" [formControl]=\"newPassword\"></ion-input>\n                </ion-item>\n                <ion-button class=\"loginBtn\" color=\"dark\" expand=\"block\" (click)=\"generateOTP()\" *ngIf=\"!isOTPReceived\">\n                  Get OTP</ion-button>\n                <ion-button class=\"loginBtn\" color=\"dark\" expand=\"block\" (click)=\"submitOTP()\"\n                  *ngIf=\"isOTPReceived && !isOTPValidated\">Submit</ion-button>\n                <ion-button class=\"loginBtn\" color=\"dark\" expand=\"block\" (click)=\"resetPassword()\"\n                  *ngIf=\"isOTPValidated\">Change Password\n                </ion-button>\n                <div class=\"backToLogin\"> <span (click)=\"loginPageShow()\"> Back to Login </span></div>\n              </form>\n            </ion-card-content>\n          </ion-card>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n</ion-content>\n";

/***/ }),

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 937);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 937);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 937:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _service_local_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/local-storage/localstorage.service */ 3546);
/* harmony import */ var _service_login_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/login/login.service */ 3971);
/* harmony import */ var _service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/toast/toast.service */ 4747);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! onesignal-cordova-plugin */ 182);
/* harmony import */ var onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6__);












let LoginPage = class LoginPage {
  constructor(loginService, localStorage, navCtrl, platform, fb, toastService, router) {
    this.loginService = loginService;
    this.localStorage = localStorage;
    this.navCtrl = navCtrl;
    this.platform = platform;
    this.fb = fb;
    this.toastService = toastService;
    this.router = router;
    this.loginPage = true;
    this.forgotPasswordPage = false;
    this.isOTPReceived = false;
    this.isOTPValidated = false;
    this.resendOTP = false;
    this.resetUserName = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.resetOTP = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
    this.newPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(6)]);
    this.deviceUUID = "";
    let vh = window.innerHeight;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    this.loginInput = this.fb.group({
      username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]]
    });
  }

  get log() {
    return this.loginInput.controls;
  }

  ngOnInit() {}

  ionViewWillEnter() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loginSubscription = _this.platform.backButton.subscribe( /*#__PURE__*/function () {
        var _ref = (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          if (_this.router.url === '/login') {
            _this.localStorage.removeValue('access-token');

            navigator["app"].exitApp();
          }
        });

        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }

  forgotPassPageShow() {
    this.loginPage = false;
    this.forgotPasswordPage = true;
  }

  loginPageShow() {
    this.loginPage = true;
    this.forgotPasswordPage = false;
  }

  login() {
    var _this2 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this2.loginInput.valid) {
        let loginInputData = {
          password: _this2.loginInput.value.password,
          username: _this2.loginInput.value.username.trim()
        };

        try {
          const loginData = yield _this2.loginService.login(loginInputData);

          if (loginData) {
            console.log(loginData);

            _this2.localStorage.setValue('access-token', loginData.accessToken);

            let currentUser = yield _this2.loginService.getCurrentUser();

            _this2.localStorage.setValue('currentUser', currentUser);

            _this2.localStorage.setValue('loginInput', loginInputData); // const info = await Device.getId();
            // this.deviceUUID = info.uuid
            // await this.OneSignalInit();
            // await this.getDeviceId();


            _this2.navCtrl.navigateRoot('');
          }
        } catch (error) {
          _this2.localStorage.clearStore();

          _this2.toastService.error(error.error.message);
        }
      }
    })();
  }

  getDeviceId() {
    var _this3 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.deviceUUID != '') {
        yield _this3.loginService.getDeviceDetail(_this3.deviceUUID);
      }
    })();
  }

  OneSignalInit() {
    var _this4 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().setLogLevel(6, 0);
      onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().setAppId("140a0ae8-ba47-4d9a-8462-c7e5517aa347");
      onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().setNotificationOpenedHandler(jsonData => {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
      });
      onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().promptForPushNotificationsWithUserResponse(accepted => {
        console.log("User accepted notifications: " + accepted);
      });
      onesignal_cordova_plugin__WEBPACK_IMPORTED_MODULE_6___default().setExternalUserId(_this4.deviceUUID);
    })();
  }

  generateOTP() {
    var _this5 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.resetUserName.valid) {
        _this5.resendOTP = false;
        clearInterval(_this5.otpInterval);

        try {
          let rsp = yield _this5.loginService.generateOTP(_this5.resetUserName.value.trim());
          console.log('One Time Password is - ', rsp.otp);

          _this5.toastService.success('OTP sent to your Email address');

          _this5.isOTPReceived = true;
          setTimeout(() => {
            _this5.resendOTP = true;
          }, 600000);

          _this5.otpExpireTimer();
        } catch (error) {
          _this5.toastService.error(error.error.message);
        }
      }
    })();
  }

  submitOTP() {
    var _this6 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.resetUserName.valid && _this6.resetOTP.valid) {
        _this6.dataForVerifyOTP = {
          username: _this6.resetUserName.value,
          otp: _this6.resetOTP.value
        };

        try {
          yield _this6.loginService.verifyOTP(_this6.dataForVerifyOTP);
          _this6.isOTPValidated = true;
        } catch (error) {
          _this6.toastService.error(error.error.message);
        }
      }
    })();
  }

  resetPassword() {
    var _this7 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this7.resetUserName.valid && _this7.resetOTP.valid && _this7.newPassword.valid) {
        _this7.dataForNewPassword = {
          username: _this7.resetUserName.value,
          otp: _this7.resetOTP.value,
          password: _this7.newPassword.value
        };

        try {
          yield _this7.loginService.resetPassword(_this7.dataForNewPassword);
          _this7.isOTPReceived = false;
          _this7.isOTPValidated = false;
          _this7.forgotPasswordPage = false;
          _this7.resendOTP = false;
          _this7.loginPage = true;

          _this7.resetUserName.reset();

          _this7.resetOTP.reset();

          _this7.newPassword.reset();

          _this7.toastService.success('Password changed successfully');
        } catch (error) {
          _this7.toastService.error(error.error.message);
        }
      }
    })();
  }

  otpExpireTimer() {
    this.otpTimeLeft = 600;
    this.otpInterval = setInterval(() => {
      if (this.otpTimeLeft > 0) {
        this.otpTimeLeft--;
      } else {
        clearInterval;
      }
    }, 1000);
  }

};

LoginPage.ctorParameters = () => [{
  type: _service_login_login_service__WEBPACK_IMPORTED_MODULE_4__.LoginService
}, {
  type: _service_local_storage_localstorage_service__WEBPACK_IMPORTED_MODULE_3__.LocalStorageService
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}, {
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.UntypedFormBuilder
}, {
  type: _service_toast_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map