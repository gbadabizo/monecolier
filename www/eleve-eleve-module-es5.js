(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eleve-eleve-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/eleve/eleve.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/eleve/eleve.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-header>\n      <ion-toolbar  color=\"primary\">\n        <ion-title style=\"margin-left: 20%\">\n         Suivre un élève\n        </ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n<ion-content fullscreen>\n    <ion-grid no-padding  *ngIf=\"isadd\" >\n    <ion-row>\n      <ion-col fullscreen no-padding>\n         <ion-img  class=\"image\" src=\"assets/imgs/p3.jpg\"></ion-img></ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-grid *ngIf=\"!isadd\" fullscreen no-padding>\n    <ion-list style=\"background-color:#f2bcbc;\">\n      <ion-item-divider color=\"secondary\">\n        <ion-thumbnail slot=\"start\">\n            <img src=\"assets/imgs/user-green-100.png\">\n          </ion-thumbnail>\n          <ion-label>\n            <h2>{{eleve.nom}} {{eleve.prenoms}}</h2>\n           </ion-label>\n      </ion-item-divider>\n      <ion-item-divider color=\"secondary\">\n        <ion-button size=\"small\" color=\"primary\"><ion-icon name=\"school\"></ion-icon> {{ecole.nom}}</ion-button>\n        <ion-button size=\"small\" color=\"primary\"><ion-icon name=\"reorder\"></ion-icon>{{classe.code}}</ion-button>\n        <ion-button size=\"small\" color=\"primary\"><ion-icon name=\"time\"></ion-icon> {{annee.libelle}}</ion-button>\n      </ion-item-divider>\n          \n      </ion-list>\n  </ion-grid>\n\n    <ion-card *ngIf=\"isadd\">\n       \n     <ion-card-content>\n            <form [formGroup]=\"addEleveForm\" (ngSubmit)=\"saveAddEleve()\">\n                <ion-grid>\n                    <ion-row>\n                      <ion-col>\n                  <ion-item>\n                    <ion-label position=\"floating\">Matricule de l'élève</ion-label>\n                    <ion-input type=text  name=\"matricule\" formControlName=\"matricule\"></ion-input>\n                  </ion-item>\n                </ion-col>\n                  </ion-row>\n                  <ion-row>\n                    <ion-col>\n                 <ion-item>\n                    <ion-label>Année scolaire</ion-label>\n                    <ion-select ok-text=\"Ok\" cancel-text=\"Annuler\"   name=\"annee\" formControlName=\"annee\">\n                      <ion-select-option *ngFor=\"let annee of annees\" value=\"{{annee.id_annee}}\">{{annee.libelle}}</ion-select-option>\n    \n                    </ion-select>\n                  </ion-item>\n              </ion-col>\n                </ion-row>\n                      <ion-row>\n                        <ion-col>\n                      <ion-item>\n                          <ion-label position=\"floating\">Ecole de l'élève</ion-label>\n                          <ionic-selectable\n                         formControlName=\"ecole\"\n                            [(ngModel)]=\"ecole\"\n                            [items]=\"ecoles\"\n                            itemValueField=\"id_ecole\"\n                            itemTextField=\"nom\"\n                            [canSearch]=\"true\"\n                            (onChange)=\"portChange($event)\">\n                            <ng-template ionicSelectableCloseButtonTemplate>\n                              <ion-icon name=\"close-circle\" style=\"font-size: 24px;\"></ion-icon>\n                            </ng-template>  \n                            \n                      </ionic-selectable>\n                      </ion-item>\n                      </ion-col>\n                      </ion-row>\n                   <br/>\n                  <ion-row>\n                      <ion-col align-self-center>\n                        \n                    <ion-button color=\"primary\" style=\"margin-left: 15%\" type=\"submit\" [disabled]=\"!addEleveForm.valid\" ><ion-icon name=\"checkmark-circle-outline\"></ion-icon>&nbsp;Suivre</ion-button>\n                    </ion-col>\n                    <ion-col align-self-center>\n                    <ion-button color=\"medium\"  style=\"margin-left: 10%\"  (click)=\"exitApp()\"> <ion-icon name=\"close-circle-outline\"></ion-icon>&nbsp;Annuler</ion-button>\n                  </ion-col>\n                  </ion-row>\n            </ion-grid>\n            </form>\n        </ion-card-content>\n      </ion-card>\n      <ion-card *ngIf=\"!isadd\">\n        <ion-list>\n          <ion-list-header><h6>Suivre l'élève dans les matières suivantes</h6></ion-list-header>\n          <ion-label style=\"margin-left:2%\" color=\"danger\">*sélectionner les matières</ion-label>\n            <ion-item *ngFor=\"let m of matieres\">\n              <ion-label>{{m.code}} - {{m.libelle}}</ion-label>\n              <ion-checkbox color=\"primary\" checked slot=\"start\" (ionChange)=\"datachanged(m)\"></ion-checkbox>\n            </ion-item>\n            \n          </ion-list>\n      </ion-card>\n      <ion-row>\n        <ion-col align-self-center>   \n        <ion-button color=\"primary\" style=\"margin-left: 15%\" (click)=\"souscrire()\"  ><ion-icon name=\"checkmark-circle-outline\"></ion-icon>&nbsp; Confirmer</ion-button>\n      </ion-col>\n      <ion-col align-self-center>\n      <ion-button color=\"medium\"  style=\"margin-left: 10%\"  (click)=\"exitApp()\"> <ion-icon name=\"close-circle-outline\"></ion-icon>&nbsp;Annuler</ion-button>\n    </ion-col>\n    </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/eleve/eleve.module.ts":
/*!***************************************!*\
  !*** ./src/app/eleve/eleve.module.ts ***!
  \***************************************/
/*! exports provided: ElevePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevePageModule", function() { return ElevePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ionic-selectable */ "./node_modules/ionic-selectable/esm5/ionic-selectable.min.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _eleve_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./eleve.page */ "./src/app/eleve/eleve.page.ts");








var routes = [
    {
        path: '',
        component: _eleve_page__WEBPACK_IMPORTED_MODULE_7__["ElevePage"]
    }
];
var ElevePageModule = /** @class */ (function () {
    function ElevePageModule() {
    }
    ElevePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                ionic_selectable__WEBPACK_IMPORTED_MODULE_5__["IonicSelectableModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_eleve_page__WEBPACK_IMPORTED_MODULE_7__["ElevePage"]]
        })
    ], ElevePageModule);
    return ElevePageModule;
}());



/***/ }),

/***/ "./src/app/eleve/eleve.page.scss":
/*!***************************************!*\
  !*** ./src/app/eleve/eleve.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VsZXZlL2VsZXZlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/eleve/eleve.page.ts":
/*!*************************************!*\
  !*** ./src/app/eleve/eleve.page.ts ***!
  \*************************************/
/*! exports provided: ElevePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElevePage", function() { return ElevePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _eleve_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../eleve.service */ "./src/app/eleve.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var ElevePage = /** @class */ (function () {
    function ElevePage(alertCtrl, router, eleveService, storage) {
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.eleveService = eleveService;
        this.storage = storage;
        this.addEleveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            matricule: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            ecole: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            annee: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        this.matieres = [];
        this.isadd = true;
        this.parameters = {
            id_ecole: '',
            id_user: '',
            id_annee: '',
            matricule: ''
        };
        this.souscrireData = {
            id_eleve: '',
            id_annee: '',
            id_classe: '',
            matiere: []
        };
        this.annees = [];
    }
    ElevePage.prototype.portChange = function () {
    };
    ElevePage.prototype.ngOnInit = function () {
        var _this = this;
        this.eleveService.getEcole().subscribe(function (data) {
            console.log(data);
            if (data.code == 800) {
                _this.ecoles = data.datas;
            }
        });
        this.eleveService.getAnnees().subscribe(function (data) {
            if (data.code == 800) {
                _this.annees = data.datas;
            }
        });
        this.storage.get('userid').then(function (val) {
            _this.userid = val;
            console.log(_this.userid);
        });
    };
    ElevePage.prototype.saveAddEleve = function () {
        var _this = this;
        console.log(this.addEleveForm.value);
        var eleveform = this.addEleveForm.value;
        this.parameters.id_annee = eleveform.annee;
        this.parameters.id_ecole = eleveform.ecole.id_ecole;
        this.parameters.id_user = this.userid;
        this.parameters.matricule = eleveform.matricule;
        console.log(this.parameters);
        this.eleveService.saveParent(this.parameters).subscribe(function (data) {
            console.log(data);
            if (data.code == 800) {
                _this.isadd = false;
                _this.eleve = data.datas[0];
                _this.classe = data.datas[1];
                _this.matieres = data.datas[2];
                _this.savedMatiere = _this.matieres;
                _this.annee = data.datas[3];
            }
        });
    };
    ElevePage.prototype.souscrire = function () {
        this.souscrireData.id_annee = this.annee.id_annee;
        this.souscrireData.id_eleve = this.eleve.id_eleve;
        this.souscrireData.id_classe = this.classe.id_classe;
        this.souscrireData.matiere = this.matieres;
        console.log(this.souscrireData);
    };
    ElevePage.prototype.datachanged = function (m) {
        console.log(m);
        var mat = this.savedMatiere.find(function (ob) { return ob.id_matiere === m.id_matiere; });
        if (mat === null) {
            this.savedMatiere.push(m);
        }
        else {
            this.savedMatiere.splice(this.savedMatiere.indexOf(m), 1);
        }
        console.log(this.savedMatiere);
    };
    ElevePage.prototype.exitApp = function () {
        var _this = this;
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
                        _this.router.navigate(['home']);
                    }
                }
            ]
        }).then(function (alert) {
            alert.present();
        });
    };
    ElevePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _eleve_service__WEBPACK_IMPORTED_MODULE_2__["EleveService"] },
        { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"] }
    ]; };
    ElevePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-eleve',
            template: __webpack_require__(/*! raw-loader!./eleve.page.html */ "./node_modules/raw-loader/index.js!./src/app/eleve/eleve.page.html"),
            styles: [__webpack_require__(/*! ./eleve.page.scss */ "./src/app/eleve/eleve.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _eleve_service__WEBPACK_IMPORTED_MODULE_2__["EleveService"], _ionic_storage__WEBPACK_IMPORTED_MODULE_1__["Storage"]])
    ], ElevePage);
    return ElevePage;
}());



/***/ })

}]);
//# sourceMappingURL=eleve-eleve-module-es5.js.map