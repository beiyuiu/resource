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
var myhttp_service_1 = require('./myhttp.service');
var Demo26Component = (function () {
    //myList:any[] = [];
    function Demo26Component(myService) {
        this.myService = myService;
        this.myList = [];
    }
    Demo26Component.prototype.ngOnInit = function () { };
    Demo26Component.prototype.handleClick = function () {
        var _this = this;
        //向服务器端发起请求
        this.myService
            .sendRequest("http://jsonplaceholder.typicode.com/users")
            .subscribe(function (result) {
            console.log(result);
            _this.myList = result;
        });
    };
    Demo26Component = __decorate([
        core_1.Component({
            selector: 'demo26',
            template: "\n        <ul>\n            <li *ngFor=\"let tmp of myList\">\n                {{tmp.name}}\n            </li>\n        </ul>\n        <button (click)=\" handleClick()\">\u52A0\u8F7D\u66F4\u591A</button>\n    "
        }), 
        __metadata('design:paramtypes', [myhttp_service_1.MyHttpService])
    ], Demo26Component);
    return Demo26Component;
}());
exports.Demo26Component = Demo26Component;
//# sourceMappingURL=demo26.component.js.map