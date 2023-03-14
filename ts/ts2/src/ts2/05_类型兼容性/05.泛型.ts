interface Empty<T> {
    // 增加一个属性就会报错
    // data:T
}
let x3: Empty<number> = {};
let y3: Empty<string> = {};

x3 = y3;  // OK, because y matches structure of x
console.log(typeof(x3));

