// const fs = require("node:fs");
const path = require("node:path");

// node 中用相对路径不安全 尽量使用绝对路径 这里执行时找到了工作目录的根目录
// const buf = fs.readFileSync('./.gitignore')
// const buf = fs.readFileSync(path.resolve(__dirname,'./.gitignore'))
// console.log(buf.toString())
// 推荐异步
// fs.readFile(path.resolve(__dirname, "./.gitignore1"), (err, buf) => {
//   if (err) {
//     console.log("出错了",err);
//   }
//   console.log(buf.toString());
// });
//
// console.log(0)

// 更推荐Promise 方式

const fs = require("node:fs/promises");
// fs.readFile(path.resolve(__dirname, "./note.md"))
//   .then((buf) => {
//     console.log(buf.toString());
//   })
//   .catch((e) => {
//     console.log(e);
//   });

//   console.log(0)
(async () => {
  try {
    // 注意 await 修饰的语句后面的代码才会被放入微任务队列
    let buff = await fs.readFile(path.resolve(__dirname, "./note.md"));
    console.log(buff.toString());
  } catch (error) {
    console.log(error);
  }
})();

console.log(1);
console.log(2);
