// 如果函数形参未传递 值为undefined  
const fun1 = (n1,n2) => {
    console.log(n1);    
    console.log(n2);
}
fun1()

// 如果函数没有返回值 那么 接收函数返回值变量的值为undefine
let result = fun1()
console.log(result);