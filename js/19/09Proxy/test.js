// let person = {name:'zhangsan',age:20} undefined
let person = function(name){this.name = name}
let desc = Object.getOwnPropertyDescriptor(person.prototype,'constructor')
console.log(desc);

let boy = new person('zhangsan')
Object.create(boy.prototype)