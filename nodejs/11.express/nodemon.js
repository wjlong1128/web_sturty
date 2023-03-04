const express = require("express");
const app = express();

app.get("/hello", (req, resp) => {
  resp.send("hello");
});
// 安装修改自动重启node的模块
// 1. npm i -g nodemon
// 2. yarn global add nodemon   注意 yarn 需要设置环境变量路径
// 在项目中安装 yarn add nodemon -D / npm i nodemon -D  运行npx nodemon
app.listen(3000, () => {
  console.log("服务器启动");
});
