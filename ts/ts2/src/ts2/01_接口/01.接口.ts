interface U {
    readonly x: number // 只读
}

let u: U = { x: 100 }
// u.x = 100 error

// 只读数组
let onreadArray: ReadonlyArray<string> = ['12', '13']
// onreadArray[1]  = '100'

// 类型断言重新定义
//  类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。
//  它没有运行时的影响，只是在编译阶段起作用。
// let ss:string[] = onreadArray as string[]
let ss: string[] = <string[]>onreadArray
ss[1] = '1000'

console.log(onreadArray[1]); // 1000