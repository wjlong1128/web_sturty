function UserException(message) {
  this.message = message;
}

UserException.prototype.toString = function () {
  return `UserException :Error is ${this.message}`;
};

let error = new UserException("我的异常类");

try {
  throw error;
} catch (e) {
  console.log("异常是", e.toString());
}

// 可以抛出任意类型表达式
try {
  throw {
    name: "Customor Error",
    toString() {
      return this.name;
    },
  };
} catch (error) {
  console.log("自定义异常", error.toString());
}

// 抛出异常类
try {
   throw new Error("我是异常") 
} catch (error) {
    console.log(error.message); 
    console.log(error.name); 
}