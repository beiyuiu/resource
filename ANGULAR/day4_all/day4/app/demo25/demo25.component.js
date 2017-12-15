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
var heartbeat_service_1 = require('./heartbeat.service');
var Demo25Component = (function () {
    function Demo25Component(myService) {
        this.myService = myService;
    }
    Demo25Component.prototype.ngOnInit = function () { };
    Demo25Component.prototype.startBeat = function () {
        this.myService.start();
    };
    Demo25Component.prototype.stopBeat = function () {
        this.myService.stop();
    };
    Demo25Component = __decorate([
        core_1.Component({
            providers: [heartbeat_service_1.HeartBeatService],
            selector: 'demo25',
            template: "\n    <button (click)=\"startBeat()\">\u5F00\u59CB</button>\n    <button (click)=\"stopBeat()\">\u7ED3\u675F</button>\n    "
        }), 
        __metadata('design:paramtypes', [heartbeat_service_1.HeartBeatService])
    ], Demo25Component);
    return Demo25Component;
}());
exports.Demo25Component = Demo25Component;
//# sourceMappingURL=demo25.component.js.map