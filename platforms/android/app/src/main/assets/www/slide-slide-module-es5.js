(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["slide-slide-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/slide/slide.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/slide/slide.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <ion-header>\n      <ion-toolbar  color=\"primary\">\n        <ion-title style=\"margin-left: 10%\">\n         Bienvenue sur  Mon ecolier\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n<ion-content fullscreen>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n        <ion-fab-button color=\"primary\">\n            <ion-icon name=\"arrow-forward\" (click)=\"gotoHome()\" ></ion-icon>\n        </ion-fab-button>\n      </ion-fab>\n      <ion-grid no-padding>\n    <ion-slides pager=\"true\" [options]=\"slideOpts\">\n\n        <ion-slide>\n            <ion-row>\n                <ion-col fullscreen no-padding>\n                  <img src=\"assets/imgs/p4.jpg\" />\n                </ion-col>\n              </ion-row>\n        </ion-slide>\n      \n        <ion-slide>\n            <ion-row>\n                <ion-col fullscreen no-padding>\n                  <img src=\"assets/imgs/p1.jpg\" />\n                </ion-col>\n              </ion-row>\n        </ion-slide>\n      \n        <ion-slide>\n            <ion-row>\n                <ion-col fullscreen no-padding>\n                  <img src=\"assets/imgs/p2.jpg\" />\n                </ion-col>\n              </ion-row>\n        </ion-slide>\n      \n        <ion-slide>\n          <ion-row>\n            <ion-col fullscreen no-padding>\n              <img src=\"assets/imgs/p3.jpg\" />\n            </ion-col>\n          </ion-row>\n        </ion-slide>\n      \n      </ion-slides>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/slide/slide.module.ts":
/*!***************************************!*\
  !*** ./src/app/slide/slide.module.ts ***!
  \***************************************/
/*! exports provided: SlidePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePageModule", function() { return SlidePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _slide_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./slide.page */ "./src/app/slide/slide.page.ts");







var routes = [
    {
        path: '',
        component: _slide_page__WEBPACK_IMPORTED_MODULE_6__["SlidePage"]
    }
];
var SlidePageModule = /** @class */ (function () {
    function SlidePageModule() {
    }
    SlidePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                // BrowserAnimationsModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_slide_page__WEBPACK_IMPORTED_MODULE_6__["SlidePage"]]
        })
    ], SlidePageModule);
    return SlidePageModule;
}());



/***/ }),

/***/ "./src/app/slide/slide.page.scss":
/*!***************************************!*\
  !*** ./src/app/slide/slide.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-slide img {\n  height: 92vh !important;\n  width: auto !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lZGVtL0RvY3VtZW50cy9tZXNwcm9qZXRzL2FuZ3VsYXJfaW9uaWMvbW9uZWNvbGllci9zcmMvYXBwL3NsaWRlL3NsaWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NsaWRlL3NsaWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zbGlkZSBpbWcge1xuICAgIGhlaWdodDogOTJ2aCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/slide/slide.page.ts":
/*!*************************************!*\
  !*** ./src/app/slide/slide.page.ts ***!
  \*************************************/
/*! exports provided: SlidePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlidePage", function() { return SlidePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SlidePage = /** @class */ (function () {
    function SlidePage(router) {
        this.router = router;
        this.slideOpts = {
            initialSlide: 1,
            speed: 500,
            autoplay: true
        };
    }
    SlidePage.prototype.gotoHome = function () {
        this.router.navigate(['home']);
    };
    SlidePage.prototype.ngOnInit = function () {
    };
    SlidePage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    SlidePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-slide',
            template: __webpack_require__(/*! raw-loader!./slide.page.html */ "./node_modules/raw-loader/index.js!./src/app/slide/slide.page.html"),
            styles: [__webpack_require__(/*! ./slide.page.scss */ "./src/app/slide/slide.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SlidePage);
    return SlidePage;
}());



/***/ })

}]);
//# sourceMappingURL=slide-slide-module-es5.js.map