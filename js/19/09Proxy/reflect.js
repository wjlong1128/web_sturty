let person = {
    get(){
        return this.name 
    }
}
// https://juejin.cn/post/6844904176804184071
console.log(Reflect.has(person,'get'));



const CPerosn = function(name){
    this.name = name
}

CPerosn.prototype.get = function(){
    return this.name;
}

let p2 = new CPerosn('张三')
let p3 = new CPerosn('lisi')

let getName = Reflect.get(p2,'get',p3);
console.log(getName);

