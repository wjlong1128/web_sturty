let num = 123
let str = '123'

console.log(num == str); // true == 只要求 ‘值’ 相等  因为会隐式转换
console.log(num === str); // false === 还要数据类型也相等 

console.log(1 == true); // true
console.log(0 == false);// true
console.log(' 123 == true ? ' + (123 == true));


console.log(1 === true); // false 
console.log(0 === false);// false