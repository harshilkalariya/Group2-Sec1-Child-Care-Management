"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_invoice_invoice_module_ts"],{

/***/ 7198:
/*!******************************************************!*\
  !*** ./src/app/invoice/invoice.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 6539:
/*!******************************************************!*\
  !*** ./src/app/invoice/invoice.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-item>\n    <ion-label>From</ion-label>\n    <ion-input [(ngModel)]=\"letterObj.from\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>To</ion-label>\n    <ion-input [(ngModel)]=\"letterObj.to\"></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-label>Text</ion-label>\n    <ion-input [(ngModel)]=\"letterObj.text\"></ion-input>\n  </ion-item>\n  <ion-button class=\"loginBtn\" color=\"dark\" expand=\"block\" (click)=\"createPdf()\">Create PDF</ion-button>\n  <ion-button class=\"loginBtn\" color=\"dark\" expand=\"block\" (click)=\"downloadPdf()\" [disabled]=\"!pdfObj\">Download\n    PDF</ion-button>\n</ion-content>";

/***/ }),

/***/ 7546:
/*!***************************************************!*\
  !*** ./src/app/invoice/invoice-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePageRoutingModule": () => (/* binding */ InvoicePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.page */ 6313);




const routes = [
    {
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_0__.InvoicePage
    }
];
let InvoicePageRoutingModule = class InvoicePageRoutingModule {
};
InvoicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoicePageRoutingModule);



/***/ }),

/***/ 3277:
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePageModule": () => (/* binding */ InvoicePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-routing.module */ 7546);
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.page */ 6313);
/* harmony import */ var _ionic_native_file_ngx_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx/index */ 7096);
/* harmony import */ var _ionic_native_file_opener_ngx_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx/index */ 6301);









let InvoicePageModule = class InvoicePageModule {
};
InvoicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoicePageRoutingModule
        ],
        declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_1__.InvoicePage],
        providers: [
            _ionic_native_file_ngx_index__WEBPACK_IMPORTED_MODULE_2__.File,
            _ionic_native_file_opener_ngx_index__WEBPACK_IMPORTED_MODULE_3__.FileOpener
        ]
    })
], InvoicePageModule);



/***/ }),

/***/ 6313:
/*!*****************************************!*\
  !*** ./src/app/invoice/invoice.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePage": () => (/* binding */ InvoicePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _invoice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.page.html?ngResource */ 6539);
/* harmony import */ var _invoice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.page.scss?ngResource */ 7198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _ionic_native_file_ngx_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/file/ngx/index */ 7096);
/* harmony import */ var _ionic_native_file_opener_ngx_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/file-opener/ngx/index */ 6301);
/* harmony import */ var pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfMake */ 2165);
/* harmony import */ var pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ 786);









(pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_4___default().vfs) = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__.pdfMake.vfs;
let InvoicePage = class InvoicePage {
    constructor(navController, platform, file, fileOpener) {
        this.navController = navController;
        this.platform = platform;
        this.file = file;
        this.fileOpener = fileOpener;
        this.letterObj = {
            from: 'This is testing of pdf generation',
            to: 'learn to import image',
            text: 'for JR logo.'
        };
        this.pdfObj = null;
    }
    ngOnInit() {
    }
    createPdf() {
        var docDefinition = {
            content: [
                { text: 'REMINDER', style: 'header' },
                { text: new Date().toTimeString(), alignment: 'right' },
                { text: 'From', style: 'subheader' },
                { text: this.letterObj.from },
                { text: 'To', style: 'subheader' },
                { text: this.letterObj.to },
                { text: 'Text', style: 'subheader' },
                { text: this.letterObj.text },
            ]
        };
        this.pdfObj = pdfmake_build_pdfMake__WEBPACK_IMPORTED_MODULE_4___default().createPdf(docDefinition);
    }
    downloadPdf() {
        if (this.platform.is('cordova')) {
            this.pdfObj.getBuffer((buffer) => {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                // Save the PDF to the data Directory of our App
                this.file.writeFile(this.file.dataDirectory, 'file.pdf', blob, { replace: true }).then(fileEntry => {
                    // Open the PDf with the correct OS tools
                    this.fileOpener.open(this.file.dataDirectory + 'file.pdf', 'application/pdf');
                });
            });
        }
        else {
            this.pdfObj.download();
        }
    }
};
InvoicePage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_native_file_ngx_index__WEBPACK_IMPORTED_MODULE_2__.File },
    { type: _ionic_native_file_opener_ngx_index__WEBPACK_IMPORTED_MODULE_3__.FileOpener }
];
InvoicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-invoice',
        template: _invoice_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_invoice_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], InvoicePage);



/***/ })

}]);
//# sourceMappingURL=src_app_invoice_invoice_module_ts.js.map