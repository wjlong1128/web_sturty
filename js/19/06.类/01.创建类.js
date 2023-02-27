// class MyClass {
// const MyClass = class {
const MyClass = class My { // My内部可见
    static {
        console.log('Myclass init');
    }
    static staticName = 'MyClass'
    name = 'lisi'
    #go = 'go' // private
    constructor(name) {
        if (name !== undefined)
            this.name = name
    }

    getName() {
        return this.name
    }

    getGo() {
        return this.#go;
    }
}

let c = new MyClass('zhangsan')
let c1 = new MyClass()
console.log(c.name);
console.log(c.getName());
console.log(c1.name);
console.log(MyClass.staticName);
console.log(c.getGo());