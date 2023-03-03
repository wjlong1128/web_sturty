// CommonJS规范
// 可以省略扩展名 必须写路径 但是自定义模块不能省略变量 如果没有js 会寻找json文件
const {go,cpp} = require ('./module1')
console.log(go)
console.log(cpp)

// 引入核心模块
// const path = require('path')
// 或者
const path = require('node:path')
console.log(path)  

// cjs 扩展名不能省略
const cjs = require ('./comm.cjs')
console.log(cjs)

// 将文件夹做为模块 改文件夹下默认存在index.js
const index = require('./hello')
console.log(index)

/*
// nodejs会将模块包装到一个函数中
(function(exports,require,module,__filename,__dirname){
    
});
*/ 
    
console.log(arguments)