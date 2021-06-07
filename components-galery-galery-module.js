(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-galery-galery-module"],{

/***/ "20kw":
/*!****************************************************!*\
  !*** ./src/app/components/galery/galery.module.ts ***!
  \****************************************************/
/*! exports provided: GaleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleryModule", function() { return GaleryModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _galery_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery-routing.module */ "MIi8");
/* harmony import */ var _galery_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./galery.component */ "fqrh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class GaleryModule {
}
GaleryModule.ɵfac = function GaleryModule_Factory(t) { return new (t || GaleryModule)(); };
GaleryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: GaleryModule });
GaleryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _galery_routing_module__WEBPACK_IMPORTED_MODULE_1__["GaleryRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](GaleryModule, { declarations: [_galery_component__WEBPACK_IMPORTED_MODULE_2__["GaleryComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _galery_routing_module__WEBPACK_IMPORTED_MODULE_1__["GaleryRoutingModule"]] }); })();


/***/ }),

/***/ "MIi8":
/*!************************************************************!*\
  !*** ./src/app/components/galery/galery-routing.module.ts ***!
  \************************************************************/
/*! exports provided: GaleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleryRoutingModule", function() { return GaleryRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _galery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./galery.component */ "fqrh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _galery_component__WEBPACK_IMPORTED_MODULE_1__["GaleryComponent"] }];
class GaleryRoutingModule {
}
GaleryRoutingModule.ɵfac = function GaleryRoutingModule_Factory(t) { return new (t || GaleryRoutingModule)(); };
GaleryRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: GaleryRoutingModule });
GaleryRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](GaleryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "fqrh":
/*!*******************************************************!*\
  !*** ./src/app/components/galery/galery.component.ts ***!
  \*******************************************************/
/*! exports provided: GaleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaleryComponent", function() { return GaleryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class GaleryComponent {
    constructor() { }
    ngOnInit() {
    }
}
GaleryComponent.ɵfac = function GaleryComponent_Factory(t) { return new (t || GaleryComponent)(); };
GaleryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GaleryComponent, selectors: [["app-galery"]], decls: 2, vars: 0, template: function GaleryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "galery works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnYWxlcnkuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ })

}]);
//# sourceMappingURL=components-galery-galery-module.js.map