var GenericNumber = /** @class */ (function () {
    function GenericNumber(z, add) {
        this.zeroValue = z;
        this.add = add;
    }
    return GenericNumber;
}());
// 泛型类指的是实例部分的类型，所以类的静态属性不能使用这个泛型类型。
var myGenericNumber = new GenericNumber(0, function (x, y) { return x + y; });
