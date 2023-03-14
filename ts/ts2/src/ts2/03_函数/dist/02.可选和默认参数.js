// ts中每一个参数都是必须传递的 除非 用?修饰和默认参数
var f1 = function (x, y) {
    if (y) {
        return x + y;
    }
    return x;
};
var f2 = function (x, y) {
    if (y === void 0) { y = 5; }
    return x + y;
};
console.log(f1(1));
console.log(f2(1));
