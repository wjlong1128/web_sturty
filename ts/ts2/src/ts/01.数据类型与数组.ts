// 1. 类型系统

let anys:any = 'zhangsan'
console.log(typeof anys);

// String
let str:string = 'Hello'

// Number
let num:number = 112

// Boolean
let bool:boolean = false

// BigInt bigint

// Symbol
let sy:symbol = Symbol('heheo')

// Null
let a = null

// Undefined
let c = undefined


// Array
let s:string[] = ["a","b","c"]
console.log(s[1]);
let as:Array<string> = ['d','a','f']
console.log(as[0]);

let bs:boolean[] = [true,false]
console.log(bs[1]);

let bas:Array<boolean> = [true,false]
console.log(bas[1]);

//  自动推断
let is = [1,2,3]
console.log(typeof is);

let nu = []
// nu.push(1) error 空数组必须一开始定义数据类型

let bigintarray:bigint[] = [100n,520n]
console.log(bigintarray[0]);

let sss:symbol[] = [Symbol('zenme'),Symbol('bb')]
console.log(sss[1]);
