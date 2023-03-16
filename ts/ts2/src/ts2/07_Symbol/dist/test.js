var _a;
var sym1 = Symbol(1);
var sym2 = Symbol('2');
// 是唯一的
var obj = (_a = {},
    _a[sym1] = 'value',
    _a[sym2] = function () {
        console.log('sym2...');
        return 'c';
    },
    _a);
console.log(obj[sym1]);
var getClassNameSymbol = Symbol();
var C1 = /** @class */ (function () {
    function C1() {
    }
    C1.prototype[getClassNameSymbol] = function () {
        return "C";
    };
    return C1;
}());
var c1 = new C1();
var className = c1[getClassNameSymbol](); // "C"
