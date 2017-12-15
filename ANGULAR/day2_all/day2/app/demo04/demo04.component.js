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
var Demo04Component = (function () {
    //构造函数是在一个类被实例化成对象的时候，
    //会自动执行的一个方法
    function Demo04Component() {
        this.isMember = false;
        this.rightAnswer = 'f';
        this.mylist = [];
        //使用typeScript定义符合某种类型的变量
        this.isMember = true;
        var list = [];
        var data;
        var count = 1;
    }
    Demo04Component.prototype.ngOnInit = function () {
    };
    Demo04Component = __decorate([
        core_1.Component({
            selector: 'demo04',
            templateUrl: './demo04.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo04Component);
    return Demo04Component;
}());
exports.Demo04Component = Demo04Component;
//# sourceMappingURL=demo04.component.js.map