// 一个类型 每个属性都是可选的 
// interface PersonPartial {
//     name?:string
//     age?:number
// }

// 或者一个只读的
// interface PersonPartial {
//     name: string
//     age: number
// }
interface Person1 {
    name: string,
    age: number
}

// keyof T的结果为 T上已知的公共属性名的联合。
/*
K in Keys
    1. 内部使用了 for .. in
    2. 字符串字面量联合的 Keys，它包含了要迭代的属性名的集合
    3. 属性的结果类型
*/

// 什么是 K in T ?   in == for..in
type Keys = 'option1' | 'option2'
type Flags = { [K in Keys]: boolean }
let flags: Flags = {
    option1: true,
    option2: false
}

//  在映射类型里，新类型以相同的形式去转换旧类型里每个属性。 例如，你可以令每个属性成为 readonly类型或可选的。 
type ReadOnly<T> = {
    // 这里in的语义是遍历 keyof T 
    readonly [K in keyof T]: T[K]
}

type MyPartial<T> = {
    [K in keyof T]?: T[K]
}


interface Person1 {
    name: string,
    age: number
}

type ReadOnlyPerson = ReadOnly<Person1>

let p1: ReadOnlyPerson = {
    name: 'zhangsan',
    age: 29
}

// p1.name = '' error


// 标准库
type MyPick<T, K extends keyof T> = {
    [P in K]: T[P];
}

type NoPick = MyPick<Person1, 'age'>
let pick: NoPick = {
    age: 10
}

type MyRecord<K extends string, T> = {
    [P in K]: T;
}

let pp: Person1 = { name: 'zhangsan', age: 129 }
//  Readonly， Partial和 Pick是同态的，但 Record不是。 因为 Record并不需要输入类型来拷贝属性，所以它不属于同态：
type Tree = MyRecord<'prop1' | 'prop2', Person1>
let tree: Tree = {
    prop1: pp,
    prop2: pp
}

// 非同态类型本质上会创建新的属性，因此它们不会从它处拷贝属性修饰符。




/*
TypeScript 2.8在lib.d.ts里增加了一些预定义的有条件类型：

Exclude<T, U> -- 从T中剔除可以赋值给U的类型。
Extract<T, U> -- 提取T中可以赋值给U的类型。
NonNullable<T> -- 从T中剔除null和undefined。
ReturnType<T> -- 获取函数返回值类型。
InstanceType<T> -- 获取构造函数类型的实例类型。
*/

type T00 = Exclude<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "b" | "d"
type T01 = Extract<"a" | "b" | "c" | "d", "a" | "c" | "f">;  // "a" | "c"

type T02 = Exclude<string | number | (() => void), Function>;  // string | number
type T03 = Extract<string | number | (() => void), Function>;  // () => void

type T04 = NonNullable<string | number | undefined>;  // string | number
type T05 = NonNullable<(() => string) | string[] | null | undefined>;  // (() => string) | string[]

function f1(s: string) {
    return { a: 1, b: s };
}

class C {
    x = 0;
    y = 0;
}

type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T12 = ReturnType<(<T>() => T)>;  // {}
type T13 = ReturnType<(<T extends U, U extends number[]>() => T)>;  // number[]
type T14 = ReturnType<typeof f1>;  // { a: number, b: string }
type T15 = ReturnType<any>;  // any
type T16 = ReturnType<never>;  // any
type T17 = ReturnType<string>;  // Error
type T18 = ReturnType<Function>;  // Error

type T20 = InstanceType<typeof C>;  // C
type T21 = InstanceType<any>;  // any
type T22 = InstanceType<never>;  // any
type T23 = InstanceType<string>;  // Error
type T24 = InstanceType<Function>;  // Error