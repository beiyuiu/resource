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
var Demo05Component = (function () {
    function Demo05Component() {
        this.uName = "wentworth miller";
        this.stuList = [
            { score: 80, age: 25, sex: 1 },
            { score: 60, age: 24, sex: 0 },
            { score: 70, age: 23, sex: 1 },
            { score: 88, age: 22, sex: 1 },
            { score: 100, age: 21, sex: 1 }
        ];
    }
    Demo05Component.prototype.ngOnInit = function () { };
    Demo05Component = __decorate([
        core_1.Component({
            selector: 'demo05',
            templateUrl: './demo05.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Demo05Component);
    return Demo05Component;
}());
exports.Demo05Component = Demo05Component;
//# sourceMappingURL=demo05.component.js.map