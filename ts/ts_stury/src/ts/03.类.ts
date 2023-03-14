class Co {
    name: string
    constructor(name: string) {
        this.name = name
    }
}

const zhangsan = new Co('zhangsan')
// console.log(zhangsan);
// 类之间的继承
class Users extends Co {
    getName():string {
        return this.name
    }
}

const lisi = new Users('lisi')
// console.log(lisi.getName());
// 接口继承类
interface MyUsers extends Users {
    // 注意 接口无法new    
}

interface NoNameUsers extends Omit<Users, 'name'> {
    
}

