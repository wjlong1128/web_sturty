let i = 0;
// 和C类一样 局部作用域的会隐藏全局作用域的
function func(){
    let i = 1;
    console.log(i);
}

func() // 1

console.log(i); // 0