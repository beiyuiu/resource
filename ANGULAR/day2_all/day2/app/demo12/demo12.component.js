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
var Demo12Component = (function () {
    function Demo12Component(myRouter) {
        this.myRouter = myRouter;
        this.userInput = "";
    }
    Demo12Component.prototype.ngOnInit = function () { };
    //跳转到Demo13
    Demo12Component.prototype.jump = function () {
        this.myRouter.navigateByUrl('demo13');
    };
    //跳转到Demo14
    Demo12Component.prototype.jumpToDemo14 = function () {
        this.myRouter
            .navigateByUrl('demo14/' + this.userInput);
    };
    Demo12Component = __decorate([
        core_1.Component({
            selector: 'demo12',
            templateUrl: './demo12.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], Demo12Component);
    return Demo12Component;
}());
exports.Demo12Component = Demo12Component;
//# sourceMappingURL=demo12.component.js.map