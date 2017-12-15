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
var MyCurrencyPipe = (function () {
    function MyCurrencyPipe() {
    }
    //管道的本质就是一个有参数，有返回值的方法
    //value是通过竖杠传来的表达式的结果
    //args这个数组 记录是给管道所指定的各个参数
    MyCurrencyPipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        console.log(value);
        console.log(args);
        return '$' + value;
    };
    MyCurrencyPipe = __decorate([
        core_1.Pipe({
            name: 'mycurrency'
        }), 
        __metadata('design:paramtypes', [])
    ], MyCurrencyPipe);
    return MyCurrencyPipe;
}());
exports.MyCurrencyPipe = MyCurrencyPipe;
//# sourceMappingURL=mycurrency.pipe.js.map