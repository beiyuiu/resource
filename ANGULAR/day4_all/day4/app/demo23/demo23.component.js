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
var Demo23Component = (function () {
    function Demo23Component() {
        this.price = 20;
        this.uSex = 0;
    }
    Demo23Component.prototype.ngOnInit = function () { };
    Demo23Component = __decorate([
        core_1.Component({
            selector: 'demo23',
            template: "\n     <h1> \u8FD9\u662F\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7BA1\u9053\u7C7B\u7684\u6848\u4F8B </h1>\n     <p>{{price | mycurrency}}</p>\n     <h3>{{uSex | sexchange:false}}</h3>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], Demo23Component);
    return Demo23Component;
}());
exports.Demo23Component = Demo23Component;
//# sourceMappingURL=demo23.component.js.map