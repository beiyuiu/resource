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
var Demo22Component = (function () {
    function Demo22Component() {
        //初始化一些数据
        this.nowDate = new Date();
        this.stu = {
            name: 'lucy',
            age: 20
        };
        this.title = "It is Main Page";
        this.price = 20.35;
        //总价格
        this.totalPrice = 300.5;
        this.trendAge = 20.3;
        this.info = "hello world";
        this.tips = "It is a tip";
    }
    Demo22Component.prototype.ngOnInit = function () { };
    Demo22Component = __decorate([
        core_1.Component({
            selector: 'demo22',
            templateUrl: './demo22.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo22Component);
    return Demo22Component;
}());
exports.Demo22Component = Demo22Component;
//# sourceMappingURL=demo22.component.js.map