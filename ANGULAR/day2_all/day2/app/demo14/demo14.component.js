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
var router_1 = require('@angular/router');
var Demo14Component = (function () {
    function Demo14Component(myRoute) {
        this.myRoute = myRoute;
        //保存传参传来的数据
        this.rcvMsg = "";
    }
    Demo14Component.prototype.ngOnInit = function () {
        var _this = this;
        //接收参数
        console.log(this.myRoute.params);
        this.myRoute.params.subscribe(function (result) {
            console.log(result);
            _this.rcvMsg = result.uName;
        });
    };
    Demo14Component = __decorate([
        core_1.Component({
            selector: 'demo14',
            templateUrl: './demo14.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], Demo14Component);
    return Demo14Component;
}());
exports.Demo14Component = Demo14Component;
//# sourceMappingURL=demo14.component.js.map