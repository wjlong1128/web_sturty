// Axios 是一个基于 promise 网络请求库，作用于node.js 和浏览器中。
// 它是 isomorphic 的(即同一套代码可以运行在浏览器和node.js中)。
// 在服务端它使用原生 node.js http 模块, 而在客户端 (浏览端) 则使用 XMLHttpRequests。

// 6https://www.axios-http.cn/docs/instance 
const axios = require("axios");

axios({
  // 指定请求根目录
  baseURL: "http://localhost:8080",
  url: "/",
  method: "get",
  // headers:{"Content-Type":"application/json"},
  // 请求体 post put
//    data:{}
pramas
})
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
