// es6官方标准 不能省略扩展名
import sum, { a as wjl, b } from "./m1.js";
// 导出的默认都是常量
console.log(wjl);
console.log(b);
console.log(sum(1,2))