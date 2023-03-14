// let msg:string = 'a'
// msg = undefined error
// msg = null error
var msgs = null;
// 使用了 --strictNullChecks，可选参数会被自动地加上 | undefined
function get(msg) { }
get(undefined);
var Ca = /** @class */ (function () {
    function Ca() {
        this.a = 10;
    }
    return Ca;
}());
var ca = new Ca();
ca.a = 12;
// ca.a = undefined; // error, 'undefined' is not assignable to 'number'
ca.b = 13;
ca.b = undefined; // ok
// ca.b = null; // error, 'null' is not assignable to 'number | undefined'
