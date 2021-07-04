(self["webpackChunkautodoprava_choleva"] = self["webpackChunkautodoprava_choleva"] || []).push([["src_app_components_about_about_module_ts"],{

/***/ 6386:
/*!**********************************************************!*\
  !*** ./src/app/components/about/about-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutRoutingModule": () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);




const routes = [{ path: '', component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent }];
class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); };
AboutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2468:
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 7238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _common_components_common_card_common_card_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common-components/common-card/common-card.component */ 217);



class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 10, vars: 6, consts: [[1, "row"], [1, "col-md-4", "mb-5"], [3, "title"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-common-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Podnik\u00E1n\u00ED v autodoprav\u011B se v\u011Bnuji ji\u017E od roku 1995. Za ten \u010Das jsem z\u00EDskal spoustu zku\u0161enost\u00ED. Jde mi p\u0159edev\u0161\u00EDm o Va\u0161i maxim\u00E1ln\u00ED spokojenost. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-common-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " S n\u00E1kladem pracuji s maxim\u00E1ln\u00ED rychlost\u00ED a p\u0159esnost\u00ED s ohledem na bezpe\u010Dnost. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "app-common-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Rozv\u00E1\u017E\u00EDm n\u00E1klady po cel\u00E9m Moravskoslezsk\u00E9m kraji. Disponuji dv\u011Bmi vozidly r\u016Fzn\u00E9 velikosti, tak\u017Ee se dok\u00E1\u017Eu p\u0159izp\u016Fsobit va\u0161im pot\u0159eb\u00E1m ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@leftAnim", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Spolehlivost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@fadeAnim", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Rychlost");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@rightAnim", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Dostupnost");
    } }, directives: [_common_components_common_card_common_card_component__WEBPACK_IMPORTED_MODULE_0__.CommonCardComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyJ9 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('leftAnim', [
                //ENTRY ANIMATION
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', [
                    //Initial states
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                        opacity: 0,
                        'transform': 'translateX(-50px)',
                    }),
                    //we first want to animate the spacing which includes height and margin
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                        opacity: '*',
                        'transform': 'translateX(0px)',
                    })),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(400)
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('rightAnim', [
                //ENTRY ANIMATION
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', [
                    //Initial states
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                        opacity: 0,
                        'transform': 'translateX(50px)',
                    }),
                    //we first want to animate the spacing which includes height and margin
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                        opacity: '*',
                        'transform': 'translateX(0px)',
                    })),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(400)
                ])
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('fadeAnim', [
                //ENTRY ANIMATION
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('void => *', [
                    //Initial states
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                        opacity: 0,
                        'transform': 'scale(0.85)',
                    }),
                    //we first want to animate the spacing which includes height and margin
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)('400ms ease-out', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
                        opacity: '*',
                        'transform': 'scale(1)',
                    })),
                    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(400)
                ])
            ])
        ] } });


/***/ }),

/***/ 8352:
/*!**************************************************!*\
  !*** ./src/app/components/about/about.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 6386);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 2468);
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common-components/common-components.module */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);





class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule,
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule,
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_2__.CommonComponentsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_components_about_about_module_ts.js.map