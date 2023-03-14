class AA {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

interface BB {
    age: number
}

let aabb = <AA & BB>{
    name:'zhangsan',
    age:12
}





