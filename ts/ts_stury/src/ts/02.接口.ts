interface User {
    name: string
    age: number
    addr?: string // 不是必须定义的
    getFunc(): string;
}
// 声明变量时关联到类型上
const petter: User = {
    name: 'zhangsan',
    age: 19,
    getFunc(): string {
        return 'a'
    }
}

// console.log(petter.age);
// console.log(petter.name);

// 类的数组
const persons: User[] = [{
    name: 'lisi', age: 19, getFunc(): string {
        return 'a'
    },
}]
// console.log(persons[0].name);


// 继承接口
interface MyUser extends User {
    // 在User接口的基础上 增加一个属性
    unicon: symbol
}


const jack: MyUser = {
    name: 'wangwu', age: 20, addr: 'china', unicon: Symbol('on1'), getFunc() {
        return 'a'
    },
}
// console.log(jack.unicon);


// 如果想要在继承时只保留某些属性
// 所选的属性都被删除 只保留了 name unicon
interface Admin extends Omit<MyUser, 'age' | 'addr' | 'age' | 'getFunc'> {
    awson: number
}

const admin: Admin = {
    name: 'zhangsan',
    unicon: Symbol('12'),
    awson: 12
}

console.log(admin.awson);