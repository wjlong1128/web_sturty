//在方法中，this 指的是所有者对象。
//单独的情况下，this 指的是全局对象。
//在函数中，this 指的是全局对象。
//在函数中，严格模式下，this 是 undefined。
//在事件中，this 指的是接收事件的元素。

function getThis(){
    return this
}

// node.js 环境下
console.log(getThis() === globalThis);

// html 环境
// console.log(getThis() === window );

let person = {
    getThis(){
        return this;
    }
}

console.log(person.getThis() === person);


"use strict";
function myFunction() {
  return this;
}

console.log(myFunction());

//  call 函数改变对象this

let p1 = {
    getName(){
        return this.name
    }
}

let p2 = {
    name:'zhangsan'
}

let result = p1.getName.call(p2) // zhangsan
console.log(result);