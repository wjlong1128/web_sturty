abstract class C {
    static orgin = { x: 0, y: 0 }
    private name: string
    constructor(name: string) {
        this.name = name
    }
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...' + this.name);
    }
}

class Ce extends C {
    constructor() {
        super('default' + C.orgin.x)
    }
    makeSound(): void {
        super.move()
    }
}


let cc: C = new Ce()
console.log(cc.makeSound());

// r类的类型，而不是实例的类型
// 也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数
let ccc: typeof Ce = Ce
ccc.orgin.x = 100

console.log(C.orgin);

let ccccc: Ce = new ccc()
console.log(ccccc);

// 类定义会创建两个东西：类的实例类型和一个构造函数。
// 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。
// let cp :Ce = {}