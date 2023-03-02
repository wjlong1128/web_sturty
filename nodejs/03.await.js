// async function fn1(){
//     console.log(1)
//     console.log(2)
//     console.log(3)
//     return 10
// }
// 等价于 下面
// function fn1() {
//   return new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     resolve(10);
//   });
// }

async function fn1() {
  console.log(1);
  // await调用函数后 当前函数后面的代码 会在当前函数执行完毕之后
  // 被放入微任务队列
  await console.log(2);
  console.log(3);
}
fn1();
console.log(4);
// 1 2 4 3
