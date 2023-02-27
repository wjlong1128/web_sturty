let num = 1;
// 数字转换为字符串
let str = num.toString();
let str2 = String(num)
console.log(typeof str);
console.log(typeof str2);

// 字符串转换为数字
str = '1234.1'
console.log(parseInt(str) + '  ' + typeof parseFloat(str));

console.log(Number(str) + ' ' + typeof Number(str));
// 如果转换的字符串前面为数字值只保留数字值 如果不是  转换为NaN 非数字
// 转换数字重点为parseInt parsefloat 功能比 Number 强制转换强大
str = '120px' 
console.log(Number(str) + ' '+ typeof Number(str)); // NaN number
console.log(parseInt(str) + ' '+ typeof parseInt(str)); // 120 number


// 布尔值转换 代表空、否定的值都会被转换为false
console.log(Boolean(NaN)); // false
console.log(Boolean(''));// false
console.log(Boolean(undefined));// false
console.log(Boolean(null));// false
console.log(Boolean(0));// false
console.log(Boolean(1));// true 
console.log(Boolean('abc'));// true