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
var PayComponent = (function () {
    function PayComponent(myAR) {
        this.myAR = myAR;
        this.myPrice = "";
    }
    PayComponent.prototype.ngOnInit = function () {
        var _this = this;
        //准备接收参数
        this.myAR.params
            .subscribe(function (data) {
            console.log(data);
            _this.myPrice = data.price;
        });
    };
    PayComponent = __decorate([
        core_1.Component({
            selector: 'pay',
            template: "\n     <h1>\u8FD9\u662F\u652F\u4ED8\u9875\u9762</h1>\n     <a routerLink=\"/send\">\u53BB\u53D1\u8D27</a>\n     <p>{{\"\u5546\u54C1\u4EF7\u683C\u4E3A:\"+myPrice}}</p>\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], PayComponent);
    return PayComponent;
}());
exports.PayComponent = PayComponent;
//# sourceMappingURL=pay.component.js.map