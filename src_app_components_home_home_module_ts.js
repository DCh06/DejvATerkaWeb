(self["webpackChunkautodoprava_choleva"] = self["webpackChunkautodoprava_choleva"] || []).push([["src_app_components_home_home_module_ts"],{

/***/ 2322:
/*!********************************************************!*\
  !*** ./src/app/components/home/home-routing.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeRoutingModule": () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 8263);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{ path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent }];
class HomeRoutingModule {
}
HomeRoutingModule.ɵfac = function HomeRoutingModule_Factory(t) { return new (t || HomeRoutingModule)(); };
HomeRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HomeRoutingModule });
HomeRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HomeRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 8263:
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_components_image_card_combo_image_card_combo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-components/image-card-combo/image-card-combo.component */ 8882);
/* harmony import */ var _common_components_common_card_common_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common-components/common-card/common-card.component */ 217);




class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 6, vars: 4, consts: [[1, "row"], [1, "col-md-4", "mb-5"], [3, "title", "routerUrl"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-image-card-combo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "app-common-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Pot\u0159ebujete-li se na cokoliv zeptat, nev\u00E1hejte mi zavolat. R\u00E1d v\u00E1m porad\u00EDm a odpov\u00EDm na va\u0161e dotazy. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@leftAnim", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("@rightAnim", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("title", "Kontakt")("routerUrl", "/contact");
    } }, directives: [_common_components_image_card_combo_image_card_combo_component__WEBPACK_IMPORTED_MODULE_0__.ImageCardComboComponent, _common_components_common_card_common_card_component__WEBPACK_IMPORTED_MODULE_1__.CommonCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIn0= */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('leftAnim', [
                //ENTRY ANIMATION
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => *', [
                    //Initial states
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                        opacity: 0,
                        'transform': 'translateX(-50px)',
                    }),
                    //we first want to animate the spacing which includes height and margin
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                        opacity: '*',
                        'transform': 'translateX(0px)',
                    })),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(400)
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.trigger)('rightAnim', [
                //ENTRY ANIMATION
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.transition)('void => *', [
                    //Initial states
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                        opacity: 0,
                        'transform': 'translateX(50px)',
                    }),
                    //we first want to animate the spacing which includes height and margin
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.style)({
                        opacity: '*',
                        'transform': 'translateX(0px)',
                    })),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_3__.animate)(400)
                ])
            ])
        ] } });


/***/ }),

/***/ 3783:
/*!************************************************!*\
  !*** ./src/app/components/home/home.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 2322);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 8263);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-components/common-components.module */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_home_home_module_ts.js.map