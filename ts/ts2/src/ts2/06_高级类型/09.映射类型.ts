// 一个类型 每个属性都是可选的 
// interface PersonPartial {
//     name?:string
//     age?:number
// }

// 或者一个只读的
interface PersonPartial {
    name: string
    age: number
}
//  在映射类型里，新类型以相同的形式去转换旧类型里每个属性。 例如，你可以令每个属性成为 readonly类型或可选的。 

type ReadOnly<T> = {
    readonly [K in keyof T]: T[K]
}

type MyPartial<T> = {
    [K in keyof T]?: T[K]
}

