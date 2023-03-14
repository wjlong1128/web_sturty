// type IString = string
// let s0:IString = 'abc'
// console.log(s0);
function myget(fn, str) {
    return fn(str);
}
var strstr = myget(function (str) { return str + str; }, 'str');
console.log(strstr);
function set(eas) {
    console.log(eas);
}
set('ease-in-out');
// 数字型字面量
function rollDie() {
    return 1;
}
console.log(rollDie());
