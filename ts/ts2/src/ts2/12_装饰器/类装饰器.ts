// function helloworld(target:any){ // 类装饰器 接收参数为构造器
//     // console.log('hello world',target);    
//     let t = new target()
//     console.log(Object.keys(t));
// }

// @helloworld// 类建立之后自动运行
// class HelloWorld{
//     constructor() {
//         console.log('我是构造函数')
//     }
//     name: string = 'hgjg'; 
// }

// // new HelloWorld()

class MyHello {
    name: string = 'default'
    age: number = 0
}

function helloworld(value: string) { // 类装饰器 接收参数为构造器
    return function (target: any) {
        // let t = new target()
        // t.helloworld = value
        // console.log(Object.keys(t));
        // 如果有返回值 那么此返回值返回的必须是构造函数
        // 构造函数是类静态的 这里直接替代

        console.log('我被调用了');
        return MyHello
    }
    // console.log('hello world',target);    
}

@helloworld('hello') // 类建立之后自动运行
class HelloWorld {
    constructor() {
        console.log('我是构造函数')
    }
    name: string = 'hgjg';
}

let t = new HelloWorld()
let t2 = new HelloWorld()
console.log(t);
console.log(t2);



function seal(flag: boolean) {
    return function (cst: any) {
        if (flag) {
            console.log(cst);
        }
        return cst
    }
}

@seal(false)
class MySeal {
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const s = new MySeal('zhangsan',19)
s.name = 'zhangsanlisi'
console.log(s.name);