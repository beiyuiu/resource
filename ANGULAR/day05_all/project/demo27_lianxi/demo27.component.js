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
var custom_service_1 = require('./custom.service');
var Demo27Component = (function () {
    function Demo27Component(myService) {
        this.myService = myService;
        this.isUserLogin = false;
    }
    Demo27Component.prototype.ngOnInit = function () {
        this.isUserLogin = this.myService
            .checkUserLogin();
    };
    Demo27Component = __decorate([
        core_1.Component({
            selector: 'demo27',
            template: "\n     <ul *ngIf=\"isUserLogin\">\n        <li>test01</li>\n        <li>test02</li>\n        <li>test03</li>\n     </ul>\n    "
        }), 
        __metadata('design:paramtypes', [custom_service_1.CustomService])
    ], Demo27Component);
    return Demo27Component;
}());
exports.Demo27Component = Demo27Component;
//# sourceMappingURL=demo27.component.js.map