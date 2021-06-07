(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-company-services-company-services-module"],{

/***/ "J5eX":
/*!***************************************************!*\
  !*** ./src/app/types/truck-property-name.enum.ts ***!
  \***************************************************/
/*! exports provided: TruckPropertyName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TruckPropertyName", function() { return TruckPropertyName; });
var TruckPropertyName;
(function (TruckPropertyName) {
    TruckPropertyName["weightCapacity"] = "Nosnost";
    TruckPropertyName["lengthCapacity"] = "D\u00E9lka lo\u017En\u00E9 plochy";
    TruckPropertyName["widthCapacity"] = "\u0160\u00ED\u0159ka lo\u017En\u00E9 plochy";
    TruckPropertyName["handRange"] = "Dosah ruky";
})(TruckPropertyName || (TruckPropertyName = {}));


/***/ }),

/***/ "b8AD":
/*!************************************************************************!*\
  !*** ./src/app/components/company-services/company-services.module.ts ***!
  \************************************************************************/
/*! exports provided: CompanyServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyServicesModule", function() { return CompanyServicesModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _company_services_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-services-routing.module */ "db/y");
/* harmony import */ var _company_services_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-services.component */ "srb4");
/* harmony import */ var _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-components/common-components.module */ "2Yic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");





class CompanyServicesModule {
}
CompanyServicesModule.ɵfac = function CompanyServicesModule_Factory(t) { return new (t || CompanyServicesModule)(); };
CompanyServicesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: CompanyServicesModule });
CompanyServicesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _company_services_routing_module__WEBPACK_IMPORTED_MODULE_1__["CompanyServicesRoutingModule"],
            _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_3__["CommonComponentsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](CompanyServicesModule, { declarations: [_company_services_component__WEBPACK_IMPORTED_MODULE_2__["CompanyServicesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _company_services_routing_module__WEBPACK_IMPORTED_MODULE_1__["CompanyServicesRoutingModule"],
        _common_components_common_components_module__WEBPACK_IMPORTED_MODULE_3__["CommonComponentsModule"]] }); })();


/***/ }),

/***/ "db/y":
/*!********************************************************************************!*\
  !*** ./src/app/components/company-services/company-services-routing.module.ts ***!
  \********************************************************************************/
/*! exports provided: CompanyServicesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyServicesRoutingModule", function() { return CompanyServicesRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _company_services_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company-services.component */ "srb4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [{ path: '', component: _company_services_component__WEBPACK_IMPORTED_MODULE_1__["CompanyServicesComponent"] }];
class CompanyServicesRoutingModule {
}
CompanyServicesRoutingModule.ɵfac = function CompanyServicesRoutingModule_Factory(t) { return new (t || CompanyServicesRoutingModule)(); };
CompanyServicesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CompanyServicesRoutingModule });
CompanyServicesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CompanyServicesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "srb4":
/*!***************************************************************************!*\
  !*** ./src/app/components/company-services/company-services.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompanyServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyServicesComponent", function() { return CompanyServicesComponent; });
/* harmony import */ var src_app_types_truck_property_name_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/types/truck-property-name.enum */ "J5eX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _company_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company-services.service */ "wM1z");
/* harmony import */ var _common_components_common_card_common_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common-components/common-card/common-card.component */ "nuNG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");





function CompanyServicesComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const posibility_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](posibility_r2);
} }
function CompanyServicesComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-common-card", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const truck_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "Specifikace vozidla s lo\u017Enou plochou " + truck_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.truckProperties.weightCapacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](truck_r3.weightCapacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.truckProperties.lengthCapacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](truck_r3.lengthCapacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.truckProperties.widthCapacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](truck_r3.widthCapacity);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.truckProperties.handRange);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](truck_r3.handRange);
} }
class CompanyServicesComponent {
    constructor(companyServicesComponent) {
        this.companyServicesComponent = companyServicesComponent;
        this.truckProperties = src_app_types_truck_property_name_enum__WEBPACK_IMPORTED_MODULE_0__["TruckPropertyName"];
    }
    ngOnInit() {
        this.trucks = this.companyServicesComponent.getTruckData();
        this.posibilities = this.companyServicesComponent.getPosibilitiesData();
    }
}
CompanyServicesComponent.ɵfac = function CompanyServicesComponent_Factory(t) { return new (t || CompanyServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_company_services_service__WEBPACK_IMPORTED_MODULE_2__["CompanyServicesService"])); };
CompanyServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CompanyServicesComponent, selectors: [["app-company-services"]], decls: 7, vars: 3, consts: [[1, "row"], [1, "col-md-12a", "mb-5"], [3, "title"], [4, "ngFor", "ngForOf"], ["class", "col-md-6 mb-5", 4, "ngFor", "ngForOf"], [1, "col-md-6", "mb-5"], [1, "card-text"]], template: function CompanyServicesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "app-common-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CompanyServicesComponent_li_4_Template, 2, 1, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CompanyServicesComponent_div_6_Template, 23, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("title", "P\u0159evoz n\u00E1kladu za pomoc\u00ED hydraulick\u00E9 ruky");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.posibilities);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.trucks);
    } }, directives: [_common_components_common_card_common_card_component__WEBPACK_IMPORTED_MODULE_3__["CommonCardComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb21wYW55LXNlcnZpY2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ "wM1z":
/*!*************************************************************************!*\
  !*** ./src/app/components/company-services/company-services.service.ts ***!
  \*************************************************************************/
/*! exports provided: CompanyServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyServicesService", function() { return CompanyServicesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class CompanyServicesService {
    constructor() { }
    getTruckData() {
        return [{
                name: 'Man',
                weightCapacity: '7.5 metrů',
                lengthCapacity: '7.4 metrů',
                widthCapacity: '2.4 metrů',
                handRange: '9.4 metrů/850kg, 3 metry/2 tuny'
            }, {
                name: 'Iveco',
                weightCapacity: '7.5 metrů',
                lengthCapacity: '7.4 metrů',
                widthCapacity: '2.4 metrů',
                handRange: '9.4 metrů/850kg, 3 metry/2 tuny'
            }];
    }
    getPosibilitiesData() {
        return [
            'Stavební materiály',
            'Stavební řezivo',
            'Hutnické výrobky',
            'Izolační materiály',
            'Pokládka studničních a drenážích skruží',
            'Práce na stavbách s hydraulickou rukou',
            'Přemistění sauny',
            'Položeni stavebního materiálu do patra',
            'a mnoho dalšího'
        ];
    }
}
CompanyServicesService.ɵfac = function CompanyServicesService_Factory(t) { return new (t || CompanyServicesService)(); };
CompanyServicesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CompanyServicesService, factory: CompanyServicesService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=components-company-services-company-services-module.js.map