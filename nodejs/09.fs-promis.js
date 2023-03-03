const fs = require("node:fs/promises");
const path = require("node:path");

let p = path.resolve(__dirname, "./data.txt");

(async () => {
  try {
    await fs.appendFile(p, "this is  a data");
    console.log("添加成功");
  } catch (error) {
    console.log(error);
  }
})();

console.log(0);

fs.mkdir(path.resolve(__dirname, "./tmp"))
  .then(() => {
    console.log("文件夹创建成功");
  })
  .catch((e) => {
    console.log("文件夹创建失败");
  });
