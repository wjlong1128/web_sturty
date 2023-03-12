const person = {
  name: "张三",
  age: 18,
};
const handler = {
  get() {},
  set() {
    // vue中 会在设置值之后 调用trigger() 来渲染被修改的dom
  },
};

const proxy = new Proxy(person, handler);

console.log(proxy.name);
