let sym1 = Symbol(1)
let sym2 = Symbol('2')

// 是唯一的
let obj = {
    [sym1]:'value',
    [sym2]():string{
        console.log('sym2...');
        return 'c'
    }
}
console.log(obj[sym1]);

const getClassNameSymbol = Symbol();

class C1 {
    [getClassNameSymbol](){
       return "C";
    }
}

let c1 = new C1();
let className = c1[getClassNameSymbol](); // "C"