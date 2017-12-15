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
var myservice_service_1 = require('./myservice.service');
var Demo30Component = (function () {
    function Demo30Component(myservice) {
        this.myservice = myservice;
    }
    Demo30Component.prototype.ngOnInit = function () { };
    Demo30Component.prototype.handleClick = function () {
        console.log(this.myservice.list);
    };
    Demo30Component = __decorate([
        core_1.Component({
            selector: 'demo30',
            template: "\n     <h1>demo30</h1>\n     <button (click)=\"handleClick()\">\u8BFB\u53D6\u670D\u52A1\u4E2D\u6570\u636E</button>\n    "
        }), 
        __metadata('design:paramtypes', [myservice_service_1.MyService])
    ], Demo30Component);
    return Demo30Component;
}());
exports.Demo30Component = Demo30Component;
//# sourceMappingURL=demo30.component.js.map