const express = require("express");
const app = express();

// route也是中间件
const userRouter = require("./routes/user");
// app.use(userRouter)
// /可以增加前缀
app.use("/user", userRouter);

app.use((req, resp) => {
  resp.status(404);
  resp.send("<h1>您访问的页面不存在</h1>");
});

app.listen(8080, () => {
  console.log("server srart...");
});
