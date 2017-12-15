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
var CartComponent = (function () {
    function CartComponent() {
        this.isUserLogin = false;
    }
    CartComponent.prototype.ngOnInit = function () {
        //调用子组件中的方法
        this.isUserLogin =
            this.headerInstance.checkUserLogin();
    };
    __decorate([
        core_1.ViewChild('myHeader'), 
        __metadata('design:type', Object)
    ], CartComponent.prototype, "headerInstance", void 0);
    CartComponent = __decorate([
        core_1.Component({
            selector: 'mycart',
            template: "\n    <h1>\u8FD9\u662F\u8D2D\u7269\u8F66\u7EC4\u4EF6</h1>\n    <storeHeader #myHeader></storeHeader>\n    <ul *ngIf=\"isUserLogin\">\n        <li>\u5546\u54C11</li>\n        <li>\u5546\u54C12</li>\n        <li>\u5546\u54C13</li>\n    </ul>\n    <a routerLink=\"/orderConfirm\">\u53BB\u7ED3\u7B97</a>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map