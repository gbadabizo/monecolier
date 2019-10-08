(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["confirm-confirm-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/confirm/confirm.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/confirm/confirm.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-header>\n      <ion-toolbar  color=\"primary\">\n        <ion-title style=\"margin-left: 10%\">\n         Bienvenue sur  Mon ecolier\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n  \n    <ion-content fullscreen>\n      \n      <ion-grid no-padding>\n          <ion-row>\n            <ion-col fullscreen no-padding> <ion-img  class=\"image\" src=\"assets/imgs/p1.jpg\" ></ion-img></ion-col>\n          </ion-row>\n      </ion-grid>\n     \n      <hr/>\n      <form [formGroup]=\"confirmForm\" (ngSubmit)=\"confirm()\">\n      <ion-grid>\n          <ion-row>\n            <ion-col>\n        <ion-item>\n          <ion-label position=\"floating\">Code de confirmation</ion-label>\n          <ion-input type=number  name=\"code\" formControlName=\"code\"></ion-input>\n        </ion-item>\n      </ion-col>\n        </ion-row>\n      \n           \n         <br/>\n        <ion-row>\n            <ion-col align-self-center>\n              \n          <ion-button color=\"primary\" style=\"margin-left: 15%\" type=\"submit\"><ion-icon name=\"checkmark-circle-outline\"></ion-icon>&nbsp;Confirmer</ion-button>\n          </ion-col>\n          <ion-col align-self-center>\n          <ion-button color=\"medium\"  style=\"margin-left: 10%\"  (click)=\"exitApp()\"> <ion-icon name=\"close-circle-outline\"></ion-icon>&nbsp;Annuler</ion-button>\n        </ion-col>\n        </ion-row>\n  </ion-grid>\n  </form>\n  </ion-content>\n  \n  "

/***/ }),

/***/ "./src/app/confirm/confirm.module.ts":
/*!*******************************************!*\
  !*** ./src/app/confirm/confirm.module.ts ***!
  \*******************************************/
/*! exports provided: ConfirmPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPageModule", function() { return ConfirmPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _confirm_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./confirm.page */ "./src/app/confirm/confirm.page.ts");







var routes = [
    {
        path: '',
        component: _confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]
    }
];
var ConfirmPageModule = /** @class */ (function () {
    function ConfirmPageModule() {
    }
    ConfirmPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_confirm_page__WEBPACK_IMPORTED_MODULE_6__["ConfirmPage"]]
        })
    ], ConfirmPageModule);
    return ConfirmPageModule;
}());



/***/ }),

/***/ "./src/app/confirm/confirm.page.scss":
/*!*******************************************!*\
  !*** ./src/app/confirm/confirm.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0vY29uZmlybS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/confirm/confirm.page.ts":
/*!*****************************************!*\
  !*** ./src/app/confirm/confirm.page.ts ***!
  \*****************************************/
/*! exports provided: ConfirmPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmPage", function() { return ConfirmPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _eleve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../eleve.service */ "./src/app/eleve.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ConfirmPage = /** @class */ (function () {
    function ConfirmPage(alertCtrl, router, eleveService, storage) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.eleveService = eleveService;
        this.storage = storage;
        this.confirmForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
        this.userid = 0;
        this.username = '';
        this.password = '';
    }
    ConfirmPage.prototype.ngOnInit = function () {
        this.userid = this.eleveService.iduser;
        this.username = this.eleveService.username;
        this.password = this.eleveService.password;
    };
    ConfirmPage.prototype.confirm = function () {
        var _this = this;
        console.log(this.confirmForm.value);
        console.log(this.confirmForm.value.code);
        this.code = "" + this.confirmForm.value.code;
        console.log(this.code);
        this.eleveService.confirm(this.userid, this.code).subscribe(function (data) {
            if (data.code == 800) {
                _this.storage.set('monecolier', 1);
                _this.storage.set('username', _this.username);
                _this.storage.set('password', _this.password);
                _this.storage.set('userid', _this.userid);
                _this.router.navigate(['slide']);
            }
        });
    };
    ConfirmPage.prototype.exitApp = function () {
        this.alertCtrl.create({
            header: 'Attention!!',
            message: 'Etes-vous sûr de quitter l\'application',
            buttons: [
                {
                    text: 'Annuler',
                    role: 'cancel',
                },
                {
                    text: 'Quitter',
                    handler: function () {
                        // tslint:disable-next-line: no-string-literal
                        navigator['app'].exitApp();
                    }
                }
            ]
        }).then(function (alert) {
            alert.present();
        });
    };
    ConfirmPage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _eleve_service__WEBPACK_IMPORTED_MODULE_2__["EleveService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] }
    ]; };
    ConfirmPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! raw-loader!./confirm.page.html */ "./node_modules/raw-loader/index.js!./src/app/confirm/confirm.page.html"),
            styles: [__webpack_require__(/*! ./confirm.page.scss */ "./src/app/confirm/confirm.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _eleve_service__WEBPACK_IMPORTED_MODULE_2__["EleveService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
    ], ConfirmPage);
    return ConfirmPage;
}());



/***/ })

}]);
//# sourceMappingURL=confirm-confirm-module-es5.js.map