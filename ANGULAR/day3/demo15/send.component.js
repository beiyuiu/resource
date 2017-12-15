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
var SendComponent = (function () {
    function SendComponent(myRouter) {
        this.myRouter = myRouter;
    }
    SendComponent.prototype.ngOnInit = function () { };
    SendComponent.prototype.jumpToCheck = function () {
        this.myRouter.navigate(['/check', { id: 10 }]);
    };
    SendComponent = __decorate([
        core_1.Component({
            selector: 'send',
            template: "\n     <h1> \u8FD9\u662F\u5546\u54C1\u7684\u53D1\u8D27\u9875\u9762 </h1>\n     <button (click)=\"jumpToCheck()\">\u67E5\u770B\u5546\u54C1</button>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], SendComponent);
    return SendComponent;
}());
exports.SendComponent = SendComponent;
//# sourceMappingURL=send.component.js.map