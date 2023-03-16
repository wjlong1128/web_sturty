// 一个类型 每个属性都是可选的 
// interface PersonPartial {
//     name?:string
//     age?:number
// }
var flags = {
    option1: true,
    option2: false
};
var p1 = {
    name: 'zhangsan',
    age: 29
};
var pick = {
    age: 10
};
var pp = { name: 'zhangsan', age: 129 };
var tree = {
    prop1: pp,
    prop2: pp
};
function f1(s) {
    return { a: 1, b: s };
}
var C = /** @class */ (function () {
    function C() {
        this.x = 0;
        this.y = 0;
    }
    return C;
}());
