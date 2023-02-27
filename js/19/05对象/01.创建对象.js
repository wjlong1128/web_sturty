// 1 字面量

let p1 = {
    name: 'zhangsan',
    sayHi: function () {
        console.log('hi');
    }
}

// 2 new
let p2 = new Object({
    name: 'zhangsan',
    age: 18
});

p2.sayHi = function () {
    console.log('hi');
}

console.log(p2.name);
console.log(p2.age);
p2.sayHi()


//  3 构造函数创建对象
//  首字母大写
function Star(name,age) {
    this.name = name
    this.age = age
}

p3 = new Star('lihua',18)

console.log(p3.name);