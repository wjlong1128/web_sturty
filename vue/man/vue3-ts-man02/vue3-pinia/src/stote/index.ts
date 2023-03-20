import { defineStore } from "pinia";

type User = {
  name: string;
  age: number;
};

const Login = (): Promise<User> => {
  return new Promise<User>((resolve) => {
    setTimeout(() => {
      resolve({ name: "zslisi", age: 19 });
    }, 2000);
  });
};


export const useStore = defineStore("myId", {
  state() {
    return {
      user: <User>{},
      current: 1,
      name: "wjl",
    };
  },
  // 等同于computed 有缓存
  getters: {
    newName():string{
        return this.user.name + '123'
    }
  },
  // 存放一些方法 同步/异步 用于提交state
  actions: {
    setCurrent(num: number) {
      // 这里的this可以直接使用
      this.current = num;
    },
    async setUser() {
      const result = await Login();
      this.user = result;
      this.setCurrent(this.user.age)
    },
  },
});
