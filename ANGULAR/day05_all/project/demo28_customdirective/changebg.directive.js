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
var ChangeBgDirective = (function () {
    function ChangeBgDirective(myElRef) {
        this.myElRef = myElRef;
        console.log('在自定义指令的构造函数');
    }
    //指令类初始化完成之后，修改调用指令的元素的
    //背景色为传递来的值
    ChangeBgDirective.prototype.ngOnInit = function () {
        //找到调用指令的元素
        var element = this.myElRef.nativeElement;
        //设置背景色
        element.style.backgroundColor = this.changbg;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], ChangeBgDirective.prototype, "changbg", void 0);
    ChangeBgDirective = __decorate([
        core_1.Directive({ selector: '[changbg]' }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], ChangeBgDirective);
    return ChangeBgDirective;
}());
exports.ChangeBgDirective = ChangeBgDirective;
//# sourceMappingURL=changebg.directive.js.map