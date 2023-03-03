const path = require("node:path");
// 生成绝对路径 不一定准确 根据执行方式可能发生改变
let resolve = path.resolve();
console.log(resolve);

resolve = path.resolve("./hello.js");
console.log(resolve);

// 3 设定绝对目录 基于此设定绝对目录
console.log(path.resolve("D:/code/web/nodejs", "../../node.js")); // D:\code\web\nodejs\node.js

// 4 根据node模块对象 // D:\code\web\nodejs\node.js
console.log(path.resolve(__dirname, "./test.js"));
