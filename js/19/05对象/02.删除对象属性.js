let person = {name:'zhangsan',age:18}
console.log(person.name);
 // 该关键字可以删除对象的属性 delete 关键词不会删除被继承的属性，但是如果您删除了某个原型属性，则将影响到所有从原型继承的对象。
// delete person.name
console.log('=================');
for(k in person){
    console.log(k);
}