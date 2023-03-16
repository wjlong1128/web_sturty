var Animals;
(function (Animals) {
    var Zebra = /** @class */ (function () {
        function Zebra() {
        }
        return Zebra;
    }());
    Animals.Zebra = Zebra;
})(Animals || (Animals = {}));
(function (Animals) {
    var Dog = /** @class */ (function () {
        function Dog() {
        }
        return Dog;
    }());
    Animals.Dog = Dog;
})(Animals || (Animals = {}));
// 合并后
/*
namespace Animals {
    export interface Legged { numberOfLegs: number; }

    export class Zebra { }
    export class Dog { }
}

非导出成员仅在其原有的（合并前的）命名空间内可见。
这就是说合并之后，从其它命名空间合并进来的成员无法访问非导出成员
 */ 
