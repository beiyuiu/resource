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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_route_1 = require('./app.route');
var app_component_1 = require('./app.component');
var demo01_component_1 = require('./demo01/demo01.component');
var demo02_component_1 = require('./demo02/demo02.component');
var demo03_component_1 = require('./demo03/demo03.component');
var demo04_component_1 = require('./demo04/demo04.component');
var demo05_component_1 = require('./demo05/demo05.component');
var demo06_component_1 = require('./demo06/demo06.component');
var demo07_component_1 = require('./demo07/demo07.component');
var myinput_component_1 = require('./demo07/myinput.component');
var demo08_component_1 = require('./demo08/demo08.component');
var demo09_component_1 = require('./demo09/demo09.component');
var demo10_component_1 = require('./demo10/demo10.component');
var demo11_component_1 = require('./demo11/demo11.component');
var test_directive_1 = require('./demo11/test.directive');
var demo12_component_1 = require('./demo12/demo12.component');
var demo13_component_1 = require('./demo13/demo13.component');
var not_found_component_1 = require('./notFound/not-found.component');
var demo14_component_1 = require('./demo14/demo14.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                app_route_1.AppRoutingModule,
                forms_1.FormsModule,
                platform_browser_1.BrowserModule
            ],
            declarations: [
                demo14_component_1.Demo14Component,
                not_found_component_1.NotFoundComponent,
                demo13_component_1.Demo13Component,
                demo12_component_1.Demo12Component,
                test_directive_1.TestDirective,
                demo11_component_1.Demo11Component,
                demo10_component_1.Demo10Component,
                demo09_component_1.Demo09Component,
                demo08_component_1.Demo08Component,
                myinput_component_1.MyInputComponent,
                demo07_component_1.Demo07Component,
                demo06_component_1.Demo06Component,
                demo05_component_1.Demo05Component,
                demo04_component_1.Demo04Component,
                demo03_component_1.Demo03Component,
                demo02_component_1.Demo02Component,
                demo01_component_1.Demo01Component,
                app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map