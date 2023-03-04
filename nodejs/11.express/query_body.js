const express = require("express");
const path = require("path");
const app = express();
// 路由 将静态页面的处理放置于中间件
app.use(express.static(path.resolve(__dirname, "./public")));
// 中间件 请求体解析
// 过时 app.use(express.urlencoded())
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/hello", (req, resp) => {
  resp.send("hello");
});
// query 对应于?username=xxx&password=xxx
// params 对应于/get/:id
// body 对应于 request post body
app.get("/get/:id", (req, resp) => {
  console.log(req.params.id);
  resp.send("get");
});

app.post("/login", (req, resp) => {
  resp.send("username=" + req.body.username);
});

app.listen(3001, () => {
  console.log("服务器启动");
});
