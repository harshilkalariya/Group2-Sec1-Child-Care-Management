"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_inquiry_new-inquiry_new-inquiry_module_ts"],{

/***/ 8293:
/*!**********************************************************************!*\
  !*** ./src/app/inquiry/new-inquiry/new-inquiry.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".newInquiryInputs {\n  padding: 5px 15px 55px 15px;\n}\n.newInquiryInputs ion-item {\n  --border-color: rgba(var(--darkRGB), 0.3);\n  --background: var(--card-backGround);\n}\n.newInquiryInputs .inquiryInput {\n  padding-bottom: 15px;\n}\n.newInquiryInputs .inquiryInput .radioLable {\n  padding-bottom: 10px !important;\n}\n.newInquiryInputs .inquiryInput .radioGroup {\n  display: flex;\n  flex-wrap: wrap;\n}\n.newInquiryInputs .inquiryInput .radioGroup ion-item {\n  flex-grow: 1;\n}\n.newInquiryInputs .itemBottomBorder {\n  border-bottom: 1px solid rgba(var(--darkRGB), 0.3) !important;\n}\n.newInquiryInputs .invalid-tooltip {\n  position: absolute !important;\n  top: 90% !important;\n  z-index: 5 !important;\n  display: block !important;\n  width: 100% !important;\n  padding: 0.15rem 0rem !important;\n  margin-top: 0rem !important;\n  font-size: 0.675rem !important;\n  color: #B00020 !important;\n  background-color: rgba(220, 53, 69, 0) !important;\n  border-radius: 0.25rem !important;\n}\n.newInquiryInputs .item-has-focus {\n  --highlight-background: rgba(var(--darkRGB), 0.3);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1pbnF1aXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FBQ0Y7QUFDRTtFQUNFLHlDQUFBO0VBQ0Esb0NBQUE7QUFDSjtBQUVFO0VBQ0Usb0JBQUE7QUFBSjtBQUVJO0VBQ0UsK0JBQUE7QUFBTjtBQUdJO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUFETjtBQUdNO0VBQ0UsWUFBQTtBQURSO0FBTUU7RUFDRSw2REFBQTtBQUpKO0FBT0U7RUFDRSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwyQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7RUFDQSxpREFBQTtFQUNBLGlDQUFBO0FBTEo7QUFRRTtFQUFnQixpREFBQTtBQUxsQiIsImZpbGUiOiJuZXctaW5xdWlyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3SW5xdWlyeUlucHV0cyB7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDU1cHggMTVweDtcblxuICBpb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHJnYmEodmFyKC0tZGFya1JHQiksIDAuMyk7XG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWJhY2tHcm91bmQpO1xuICB9XG5cbiAgLmlucXVpcnlJbnB1dCB7XG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XG5cbiAgICAucmFkaW9MYWJsZSB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIC5yYWRpb0dyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgIGlvbi1pdGVtIHtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pdGVtQm90dG9tQm9yZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSh2YXIoLS1kYXJrUkdCKSwgMC4zKSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLmludmFsaWQtdG9vbHRpcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gICAgdG9wOiA5MCUgIWltcG9ydGFudDtcbiAgICB6LWluZGV4OiA1ICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogYmxvY2sgIWltcG9ydGFudDtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmc6IDAuMTVyZW0gMHJlbSAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi10b3A6IDByZW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IC42NzVyZW0gIWltcG9ydGFudDtcbiAgICBjb2xvcjogI0IwMDAyMCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCA1MywgNjksIDApICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAhaW1wb3J0YW50O1xuICB9XG5cbiAgLml0ZW0taGFzLWZvY3Vzey0taGlnaGxpZ2h0LWJhY2tncm91bmQ6IHJnYmEodmFyKC0tZGFya1JHQiksIDAuMyk7fSBcbn1cbiJdfQ== */";

/***/ }),

/***/ 6258:
/*!**********************************************************************!*\
  !*** ./src/app/inquiry/new-inquiry/new-inquiry.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header #header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"tabs/inquiry\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>NEW INQUIRY</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" scrollEvents=\"true\" [appHeaderOnScroll]=\"header\">\n  <ion-grid class=\"newInquiryInputs\">\n    <form [formGroup]=\"newInquiryInput\" #inquiryForm=\"ngForm\" (ngSubmit)=\"addNewInquiry()\">\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">First Name *</ion-label>\n            <ion-input type=\"text\" formControlName=\"firstName\"></ion-input>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.firstName.invalid && inq.firstName.dirty) || (inq.firstName.invalid && isInvalid)\">\n            <div *ngIf=\"inq.firstName.errors?.['required']\">First Name is required.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Last Name *</ion-label>\n            <ion-input type=\"text\" formControlName=\"lastName\"></ion-input>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.lastName.invalid && inq.lastName.dirty) || (inq.lastName.invalid && isInvalid)\">\n            <div *ngIf=\"inq.lastName.errors?.['required']\">Last Name is required.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Mobile No. (10 Digit) *</ion-label>\n            <ion-input type=\"text\" formControlName=\"mobileNumber\"></ion-input>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.mobileNumber.invalid && inq.mobileNumber.dirty) || (inq.mobileNumber.invalid && isInvalid)\">\n            <div *ngIf=\"inq.mobileNumber.errors?.['required']\">Mobile number is required.</div>\n            <div *ngIf=\"inq.mobileNumber.errors?.['pattern']\">Mobile number must be 10 number.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Mobile No. (Optional)</ion-label>\n            <ion-input type=\"text\" formControlName=\"secondNumber\"></ion-input>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.secondNumber.invalid && inq.secondNumber.dirty) || (inq.secondNumber.invalid && isInvalid)\">\n            <div *ngIf=\"inq.secondNumber.errors?.['pattern']\">Mobile number must be 10 number.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Flat / Unit Number *</ion-label>\n            <ion-input type=\"text\" formControlName=\"houseDetail\"></ion-input>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.houseDetail.invalid && inq.houseDetail.dirty) || (inq.houseDetail.invalid && isInvalid)\">\n            <div *ngIf=\"inq.houseDetail.errors?.['required']\">Flat / Unit Number is required.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Street / Area Details *</ion-label>\n            <ion-input type=\"text\" formControlName=\"areaDetail\"></ion-input>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.areaDetail.invalid && inq.areaDetail.dirty) || (inq.areaDetail.invalid && isInvalid)\">\n            <div *ngIf=\"inq.areaDetail.errors?.['required']\">Street / Area details is required.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">State *</ion-label>\n            <ion-select (ngModelChange)=\"getDistrictByState($event)\" formControlName=\"stateId\" interface=\"action-sheet\">\n              <ion-select-option [value]=\"state.stateId\" *ngFor=\"let state of stateList\">{{state.stateTitle}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.stateId.invalid && inq.stateId.dirty) || (inq.stateId.invalid && isInvalid)\">\n            <div *ngIf=\"inq.stateId.errors?.['required']\">State is required.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">District *</ion-label>\n            <ion-select (ngModelChange)=\"getCityByDistrict($event)\" formControlName=\"districtId\"\n              interface=\"action-sheet\">\n              <ion-select-option [value]=\"district.districtId\" *ngFor=\"let district of districtList\">\n                {{district.districtTitle}}</ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.districtId.invalid && inq.districtId.dirty) || (inq.districtId.invalid && isInvalid)\">\n            <div *ngIf=\"inq.districtId.errors?.['required']\">District is required.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">City *</ion-label>\n            <ion-select formControlName=\"locationId\" interface=\"action-sheet\">\n              <ion-select-option [value]=\"city.cityId\" *ngFor=\"let city of cityList\">{{city.cityTitle}}\n              </ion-select-option>\n            </ion-select>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.locationId.invalid && inq.locationId.dirty) || (inq.locationId.invalid && isInvalid)\">\n            <div *ngIf=\"inq.locationId.errors?.['required']\">City is required.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item>\n            <ion-label position=\"stacked\">Pin Code *</ion-label>\n            <ion-input type=\"text\" formControlName=\"pincode\"></ion-input>\n          </ion-item>\n          <div class=\"invalid-tooltip\"\n            *ngIf=\"(inq.pincode.invalid && inq.pincode.dirty) || (inq.pincode.invalid && isInvalid)\">\n            <div *ngIf=\"inq.pincode.errors?.['required']\">Pin Code is required.</div>\n            <div *ngIf=\"inq.pincode.errors?.['pattern']\">Pin Code must be 6 number.</div>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-item id=\"open-modal2\">\n            <ion-label>Date of Birth *</ion-label>\n            <ion-note slot=\"end\">{{dateOfBirth | date}}</ion-note>\n            <ion-modal trigger=\"open-modal2\" [cssClass]=\"'bottom-end'\">\n              <ng-template>\n                <ion-datetime max=\"{{dateOfBirth}}\" presentation=\"date\" [(ngModel)]=\"dateOfBirth\"\n                  [ngModelOptions]=\"{standalone: true}\" size=\"cover\" [showDefaultButtons]=\"true\"></ion-datetime>\n              </ng-template> </ion-modal>\n          </ion-item>\n        </ion-col>\n      </ion-row>\n      <ion-row class=\"inquiryInput\">\n        <ion-col>\n          <ion-button color=\"dark\" expand=\"block\" type=\"submit\">Create New Inquiry</ion-button>\n        </ion-col>\n      </ion-row>\n    </form>\n  </ion-grid>\n</ion-content>";

/***/ }),

/***/ 2925:
/*!*******************************************************************!*\
  !*** ./src/app/inquiry/new-inquiry/new-inquiry-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInquiryPageRoutingModule": () => (/* binding */ NewInquiryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _new_inquiry_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-inquiry.page */ 500);




const routes = [
    {
        path: '',
        component: _new_inquiry_page__WEBPACK_IMPORTED_MODULE_0__.NewInquiryPage
    }
];
let NewInquiryPageRoutingModule = class NewInquiryPageRoutingModule {
};
NewInquiryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewInquiryPageRoutingModule);



/***/ }),

/***/ 1588:
/*!***********************************************************!*\
  !*** ./src/app/inquiry/new-inquiry/new-inquiry.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInquiryPageModule": () => (/* binding */ NewInquiryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../directives/header-on-scroll.module */ 6727);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _new_inquiry_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-inquiry-routing.module */ 2925);
/* harmony import */ var _new_inquiry_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-inquiry.page */ 500);








let NewInquiryPageModule = class NewInquiryPageModule {
};
NewInquiryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _new_inquiry_routing_module__WEBPACK_IMPORTED_MODULE_1__.NewInquiryPageRoutingModule,
            _directives_header_on_scroll_module__WEBPACK_IMPORTED_MODULE_0__.HeaderOnScroll
        ],
        declarations: [_new_inquiry_page__WEBPACK_IMPORTED_MODULE_2__.NewInquiryPage]
    })
], NewInquiryPageModule);



/***/ }),

/***/ 500:
/*!*********************************************************!*\
  !*** ./src/app/inquiry/new-inquiry/new-inquiry.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewInquiryPage": () => (/* binding */ NewInquiryPage)
/* harmony export */ });
/* harmony import */ var e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _new_inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-inquiry.page.html?ngResource */ 6258);
/* harmony import */ var _new_inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-inquiry.page.scss?ngResource */ 8293);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/inquiry/inquiry.service */ 1967);
/* harmony import */ var src_app_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/toast/toast.service */ 4747);











let NewInquiryPage = class NewInquiryPage {
  constructor(fb, inquiryService, titlecasePipe, toastService, router, navCtrl, platform) {
    this.fb = fb;
    this.inquiryService = inquiryService;
    this.titlecasePipe = titlecasePipe;
    this.toastService = toastService;
    this.router = router;
    this.navCtrl = navCtrl;
    this.platform = platform;
    this.isInvalid = false;
    this.isNew = true;
    this.dateOfBirth = new Date().toISOString();
    this.newInquiryInput = this.fb.group({
      firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^((\\+1-?)|0)?[0-9]{10}$')]],
      secondNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern('^((\\+1-?)|0)?[0-9]{10}$')]],
      houseDetail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      areaDetail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      stateId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      districtId: [{
        value: null,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      locationId: [{
        value: null,
        disabled: true
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      pincode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
      dateOfBirth: [''] // interiorDetail: [''],
      // inquiryType: ['', [Validators.required]],
      // description: [''],

    });
  }

  get inq() {
    return this.newInquiryInput.controls;
  }

  ngOnInit() {
    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }

  ionViewWillEnter() {
    var _this = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.getAllStateData();
      _this.btnHandler = _this.platform.backButton.subscribeWithPriority(1, () => {
        _this.navCtrl.navigateBack("tabs/inquiry");
      });
    })();
  }

  getAllStateData() {
    var _this2 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.stateList = yield _this2.inquiryService.getAllState();
    })();
  }

  getDistrictByState(event) {
    var _this3 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.isNew) {
        _this3.districtList = yield _this3.inquiryService.getDistrictListForState(event);

        _this3.newInquiryInput.controls['districtId'].enable();
      }
    })();
  }

  getCityByDistrict(event) {
    var _this4 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.isNew) {
        _this4.cityList = yield _this4.inquiryService.getCityListForDistrict(event);

        _this4.newInquiryInput.controls['locationId'].enable();
      }
    })();
  }

  addNewInquiry() {
    var _this5 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      debugger;
      console.log('calling');
      console.log(_this5.newInquiryInput);

      if (_this5.newInquiryInput.invalid) {
        _this5.isInvalid = true;
      }

      if (_this5.newInquiryInput.valid) {
        _this5.newInquiryData = {
          firstName: _this5.titlecasePipe.transform(_this5.newInquiryInput.value['firstName'].trim()),
          lastName: _this5.titlecasePipe.transform(_this5.newInquiryInput.value['lastName'].trim()),
          mobileNumber: _this5.newInquiryInput.value['mobileNumber'],
          secondNumber: _this5.newInquiryInput.value['secondNumber'],
          houseDetail: _this5.titlecasePipe.transform(_this5.newInquiryInput.value['houseDetail'].trim()),
          areaDetail: _this5.titlecasePipe.transform(_this5.newInquiryInput.value['areaDetail'].trim()),
          stateId: +_this5.newInquiryInput.value['stateId'],
          districtId: +_this5.newInquiryInput.value['districtId'],
          cityId: +_this5.newInquiryInput.value['locationId'],
          pincode: _this5.newInquiryInput.value['pincode'],
          dateOfBirth: new Date(_this5.dateOfBirth) // interiorName: this.titlecasePipe.transform(this.newInquiryInput.value['interiorDetail'].trim()),
          // inquiryType: this.newInquiryInput.value['inquiryType'],
          // description: this.newInquiryInput.value['description'].trim(),

        };

        try {
          yield _this5.inquiryService.generateInquiry(_this5.newInquiryData);
          _this5.isInvalid = false;
          _this5.isNew = false;

          _this5.inquiryForm.resetForm();

          _this5.newInquiryInput.reset();

          _this5.isNew = true;

          _this5.toastService.success('Inquiry created succesfully');

          _this5.router.navigate(['/tabs/inquiry']);
        } catch (error) {
          _this5.toastService.error(error.error.message);
        }
      }
    })();
  }

  ionViewDidLeave() {
    var _this6 = this;

    return (0,e_Capstone_JRMobile_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this6.btnHandler) {
        _this6.btnHandler.unsubscribe();
      }
    })();
  }

};

NewInquiryPage.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
}, {
  type: src_app_service_inquiry_inquiry_service__WEBPACK_IMPORTED_MODULE_3__.InquiryService
}, {
  type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.TitleCasePipe
}, {
  type: src_app_service_toast_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService
}, {
  type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform
}];

NewInquiryPage.propDecorators = {
  inquiryForm: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
    args: ['inquiryForm']
  }]
};
NewInquiryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-new-inquiry',
  template: _new_inquiry_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_new_inquiry_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], NewInquiryPage);


/***/ })

}]);
//# sourceMappingURL=src_app_inquiry_new-inquiry_new-inquiry_module_ts.js.map