class A {
    protected myname: string;
    // 默认public
    private name: string
    constructor(name: string) {
        this.myname = this.name = name
    }

    protected getPName():string {
        return this.name
    }
}

class B extends A {
    // 只读
    readonly thisName:string
    constructor(name: string) {
        super(name)
        this.thisName = name
    }

    getName(): string {
        return this.myname + this.getPName()
    }
}

let b = new B('zhangsan')

console.log(b.getName());