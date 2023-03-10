"use strict";

var jwt = require("jsonwebtoken");

var obj = {
  id: 1,
  name: "张三",
  age: 21
};
var token = jwt.sign(obj, "salt", {
  expiresIn: "1h" // 过期时间

});
console.log(token);

try {
  // let verify = jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6IuW8oOS4iSIsImFnZSI6MjEsImlhdCI6MTY3ODAxNzYxOCwiZXhwIjoxNjc4MDIxMjE4fQ.tndMU_g7aVS4OcB24rI27QWpC6FrtudxIiAVkIiSIas',
  var verify = jwt.verify(token, "salt");
  console.log(verify);
  console.log(verify.name);
} catch (error) {
  console.log("token无效");
}