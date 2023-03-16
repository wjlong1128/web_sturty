/*
.d.ts 文件中的顶级声明必须以 "declare" 或 "export" 修饰符开头。
通过declare声明的类型或者变量或者模块，在include包含的文件范围内，都可以直接引用而不用去import或者import type相应的变量或者类型。
*/

declare interface Wjl {
    name: string,
    age: number
}

declare namespace Api {
    type Bss = {a:string}
}