// src/ts/index.ts
import greet from './greet'

// 单个问候语
const greeting = greet('Petter')
console.log(greeting)

// 多个问候语
const greetings = greet(['Petter', 'Tom', 'Jimmy'])
console.log(greetings)

// yarn tsc .\src\ts\test_module\index.ts 默认CommonJS
// yarn tsc .\src\ts\test_module\index.ts --target es6 指定js模块化
// 