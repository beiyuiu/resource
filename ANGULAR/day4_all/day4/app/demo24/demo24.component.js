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
var log_service_1 = require('./log.service');
var Demo24Component = (function () {
    function Demo24Component(myLogService) {
        this.myLogService = myLogService;
    }
    Demo24Component.prototype.ngOnInit = function () { };
    Demo24Component.prototype.handleClick = function () {
        //console.log('user money:1000000000');
        this.myLogService
            .mylog('user money:1000000000');
    };
    Demo24Component = __decorate([
        core_1.Component({
            selector: 'demo24',
            template: "\n        <h1> \u8FD9\u662F\u548C\u670D\u52A1\u76F8\u5173\u7684\u6848\u4F8B </h1>\n        <button (click)=\"handleClick()\">clickMe</button>\n    "
        }), 
        __metadata('design:paramtypes', [log_service_1.LogService])
    ], Demo24Component);
    return Demo24Component;
}());
exports.Demo24Component = Demo24Component;
//# sourceMappingURL=demo24.component.js.map