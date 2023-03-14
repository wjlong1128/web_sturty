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
var C = /** @class */ (function () {
    function C(name) {
        this.name = name;
    }
    C.prototype.move = function () {
        console.log('roaming the earch...' + this.name);
    };
    C.orgin = { x: 0, y: 0 };
    return C;
}());
var Ce = /** @class */ (function (_super) {
    __extends(Ce, _super);
    function Ce() {
        return _super.call(this, 'default' + C.orgin.x) || this;
    }
    Ce.prototype.makeSound = function () {
        _super.prototype.move.call(this);
    };
    return Ce;
}(C));
var cc = new Ce();
console.log(cc.makeSound());
// r类的类型，而不是实例的类型
// 也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数
var ccc = Ce;
ccc.orgin.x = 100;
console.log(C.orgin);
var ccccc = new ccc();
console.log(ccccc);
// 类定义会创建两个东西：类的实例类型和一个构造函数。
// 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
// let cp :Ce = {}
