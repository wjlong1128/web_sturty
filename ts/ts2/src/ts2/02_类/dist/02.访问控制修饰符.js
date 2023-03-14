var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var A = /** @class */ (function () {
    function A(name) {
        this.myname = this.name = name;
    }
    A.prototype.getPName = function () {
        return this.name;
    };
    return A;
}());
var B = /** @class */ (function (_super) {
    __extends(B, _super);
    function B(name) {
        var _this = _super.call(this, name) || this;
        _this.thisName = name;
        return _this;
    }
    B.prototype.getName = function () {
        return this.myname + this.getPName();
    };
    return B;
}(A));
var b = new B('zhangsan');
console.log(b.getName());
