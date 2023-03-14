/*
这里因为当一个类实现了一个接口时，只对其实例部分进行类型检查。 
constructor存在于类的静态部分，所以不在检查的范围内。
因此，我们应该直接操作类的静态部分
*/
interface WUser {
    // 构造方法符合该要求的类型 的静态Class 都可以赋值给改接口
    new(name: string, age: number): WJL
}

interface WJL {
    name: string,
    age: number
}

class WAdmin implements WJL {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}
// 
let wadmin: WUser = WAdmin

function create(u: WUser, name: string, age: number) {
    return new u(name, age)
}

console.log(wadmin);
console.log(create(wadmin, '张三', 19));