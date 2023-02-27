function Star(name) {
    this.name = name;
    this.getName = function () {
        return this.name;
    }
}

let p = new Star('zhangsan')
console.log(p.getName());

// 可以将当前对象 添加独属于当前对象的属性和方法定义
/*
p.age = 18
p.getAge = function(){
    return this.age;
}

console.log(p.getAge());
*/

// 可以通过原型对对象构造器添加属性和方法  prototype 
// 所有 JavaScript 对象都从原型继承属性和方法。
// 日期对象继承自 Date.prototype。数组对象继承自 Array.prototype。
// Person 对象继承自 Person.prototype。
// Object.prototype 位于原型继承链的顶端：
// 日期对象、数组对象和 Person 对象都继承自 Object.prototype。
Star.prototype.age = 18
Star.prototype.getAge = function () {
    return this.age
}
Star.prototype.toString = function () {
    return `{name:'${this.name}',age:'${this.age}'}`
}

let lisi = new Star('lisi')
let wangwu = new Star('wangwu')

console.log(lisi.toString());
console.log(wangwu.toString());