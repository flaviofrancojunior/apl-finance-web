(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-configuracoes-configuracoes-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/views/configuracoes/configuracoes-dados.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/configuracoes/configuracoes-dados.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header\">\r\n      <i class=\"fa fa-picture-o\"></i> Meus Dados\r\n      <div class=\"card-header-actions\">\r\n        <a href=\"https://github.com/coreui/coreui-icons\" class=\"card-header-action\" target=\"_blank\">Github</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/views/configuracoes/configuracoes.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/views/configuracoes/configuracoes.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\r\n  <div class=\"card card-default\">\r\n    <div class=\"card-header\">\r\n      <i class=\"fa fa-picture-o\"></i> Configurações<span class=\"badge badge-info\">New</span>\r\n      <div class=\"card-header-actions\">\r\n        <a href=\"https://github.com/coreui/coreui-icons\" class=\"card-header-action\" target=\"_blank\">Github</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/views/configuracoes/configuracoes-dados.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/views/configuracoes/configuracoes-dados.component.ts ***!
  \**********************************************************************/
/*! exports provided: ConfiguracoesDadosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesDadosComponent", function() { return ConfiguracoesDadosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfiguracoesDadosComponent = /** @class */ (function () {
    function ConfiguracoesDadosComponent() {
    }
    ConfiguracoesDadosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./configuracoes-dados.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/configuracoes/configuracoes-dados.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfiguracoesDadosComponent);
    return ConfiguracoesDadosComponent;
}());



/***/ }),

/***/ "./src/app/views/configuracoes/configuracoes-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/configuracoes/configuracoes-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ConfiguracoesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesRoutingModule", function() { return ConfiguracoesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _configuracoes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuracoes.component */ "./src/app/views/configuracoes/configuracoes.component.ts");
/* harmony import */ var _configuracoes_dados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuracoes-dados.component */ "./src/app/views/configuracoes/configuracoes-dados.component.ts");





var routes = [
    {
        path: '',
        data: {
            title: 'Configurações'
        },
        children: [
            {
                path: '',
                component: _configuracoes_component__WEBPACK_IMPORTED_MODULE_3__["ConfiguracoesComponent"],
            },
            {
                path: 'meus-dados',
                component: _configuracoes_dados_component__WEBPACK_IMPORTED_MODULE_4__["ConfiguracoesDadosComponent"],
                data: {
                    title: 'Meus Dados'
                }
            }
        ]
    }
];
var ConfiguracoesRoutingModule = /** @class */ (function () {
    function ConfiguracoesRoutingModule() {
    }
    ConfiguracoesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ConfiguracoesRoutingModule);
    return ConfiguracoesRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/configuracoes/configuracoes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/views/configuracoes/configuracoes.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfiguracoesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesComponent", function() { return ConfiguracoesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ConfiguracoesComponent = /** @class */ (function () {
    function ConfiguracoesComponent() {
    }
    ConfiguracoesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            template: __webpack_require__(/*! raw-loader!./configuracoes.component.html */ "./node_modules/raw-loader/index.js!./src/app/views/configuracoes/configuracoes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ConfiguracoesComponent);
    return ConfiguracoesComponent;
}());



/***/ }),

/***/ "./src/app/views/configuracoes/configuracoes.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/configuracoes/configuracoes.module.ts ***!
  \*************************************************************/
/*! exports provided: ConfiguracoesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfiguracoesModule", function() { return ConfiguracoesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _configuracoes_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./configuracoes-routing.module */ "./src/app/views/configuracoes/configuracoes-routing.module.ts");
/* harmony import */ var _configuracoes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./configuracoes.component */ "./src/app/views/configuracoes/configuracoes.component.ts");
/* harmony import */ var _configuracoes_dados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./configuracoes-dados.component */ "./src/app/views/configuracoes/configuracoes-dados.component.ts");





var ConfiguracoesModule = /** @class */ (function () {
    function ConfiguracoesModule() {
    }
    ConfiguracoesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_configuracoes_routing_module__WEBPACK_IMPORTED_MODULE_2__["ConfiguracoesRoutingModule"]],
            declarations: [
                _configuracoes_component__WEBPACK_IMPORTED_MODULE_3__["ConfiguracoesComponent"],
                _configuracoes_dados_component__WEBPACK_IMPORTED_MODULE_4__["ConfiguracoesDadosComponent"]
            ]
        })
    ], ConfiguracoesModule);
    return ConfiguracoesModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-configuracoes-configuracoes-module.js.map