// 配置路由词典
// a-module-routing
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
// 修改1：正确的去引入对应的组件类
var demo12_component_1 = require('./demo12/demo12.component');
var demo13_component_1 = require('./demo13/demo13.component');
var not_found_component_1 = require('./notFound/not-found.component');
var demo14_component_1 = require('./demo14/demo14.component');
// 修改2：配置路由词典
var routes = [
    { path: '', component: demo12_component_1.Demo12Component },
    { path: 'demo12', component: demo12_component_1.Demo12Component },
    { path: 'demo13', component: demo13_component_1.Demo13Component },
    { path: 'demo14/:uName', component: demo14_component_1.Demo14Component },
    { path: '**', component: not_found_component_1.NotFoundComponent },
];
// 修改3：将forChild-->forRoot
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule],
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
// export const routedComponents = [NameComponent]; 
//# sourceMappingURL=app.route.js.map