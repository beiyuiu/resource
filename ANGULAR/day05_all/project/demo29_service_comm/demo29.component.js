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
var Demo29Component = (function () {
    function Demo29Component(myservice) {
        this.myservice = myservice;
    }
    Demo29Component.prototype.ngOnInit = function () { };
    Demo29Component.prototype.handleClick = function () {
        //向服务中写数据
        this.myservice.list.push(100);
        console.log("写操作完成之后:", this.myservice.list);
    };
    Demo29Component = __decorate([
        core_1.Component({
            selector: 'demo29',
            providers: [myservice_service_1.MyService],
            template: "\n     <h1>demo29</h1>\n     <button (click)=\"handleClick()\">\u5411\u670D\u52A1\u7684\u6570\u7EC4\u4E2D\u63D2\u5165\u6570\u636E</button>\n     <hr/>\n     <demo30></demo30>\n    "
        }), 
        __metadata('design:paramtypes', [myservice_service_1.MyService])
    ], Demo29Component);
    return Demo29Component;
}());
exports.Demo29Component = Demo29Component;
//# sourceMappingURL=demo29.component.js.map