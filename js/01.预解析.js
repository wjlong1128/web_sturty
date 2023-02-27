/*
js 解释器/引擎分为两步 预解析 代码执行
    预解析： 将所有的var和function 提升到当前作用域的最前面
        变量预解析\变量提升： 将所有的变量提升到当前作用域的最前面 不进行赋值操作
        函数预解析\函数提升： 把所有函数声明提升至当前作用域的最前面 不调用函数
    代码执行按照书写的顺序从上至下执行
*/


fun1()

console.log(c);
console.log(b);
console.log(a);

function fun1() {
    var a = b = c = 9;
    // = var a = 9;  b = 9; c = 9   // 这里 b c 未用var  为全局变量
    console.log(a);
    console.log(b);
    console.log(c);
}