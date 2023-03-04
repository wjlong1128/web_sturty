const express = require("express");
const path = require("path");
const app = express();
// 路由 将静态页面的处理放置于中间件
app.use(express.static(path.resolve(__dirname, "./public")));
// 中间件 请求体解析
// 过时 app.use(express.urlencoded())
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// 设置模板
app.set("view engine","ejs")
// 默认工作目录下的 views 
app.set('views',path.resolve(__dirname,'./views'))

app.get('/hello',(req,resp) =>  {
    // 渲染模板引擎 直接写模板引擎
    // resp.render('index')
    resp.render('index',{name:'zhangsan'})
})

app.listen(8080,()=>{
    console.log('服务器启动成功')
})