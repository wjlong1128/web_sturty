const log =  console.log
// 循环数组
let array = [1,2,3]
for (i in array)
    log(array[i]);
let result = array.find(item => item > 2)
log(`result = ${result}`);

log('=====================');
// 循环对象
let person  =  {
    name:'zhangsan',
    age:18
}

for (k in person) {
    log(`person key: ${k}  value:${person[k]}`)
}

log('====================')
array = [1,2,3]
log(typeof array)
array.foo = 'hello'
for (k in array)
    log(array[k])
// log(array.foo)

log(typeof array)
let hello = array.find(item=>item === 'hello')
log(hello)