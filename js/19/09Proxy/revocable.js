let person = { name: "zhangsan" };

let revocable = Proxy.revocable(person, {
  get(target, field) {
    if (field in target) return target[field];
    return "No field";
  },
});

let proxy = revocable.proxy;
revocable.revoke();
console.log(proxy.name);
console.log(proxy.age);
