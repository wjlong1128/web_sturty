import { createApp, toRaw } from "vue";
import "./style.css";
import App from "./App.vue";
import { PiniaPluginContext, createPinia } from "pinia";
import { json } from "stream/consumers";

type Options = {
  key?: string;
};
// vuex 和 pinia 的通病 页面刷新状态丢失
const piniaPlugin = (options?: Options) => {
  // 函数柯里化
  return (context: PiniaPluginContext) => {
    const key = `${options?.key ?? "wjl"} - ${context.store.id}`;
    let item = localStorage.getItem(key);
    if (item != null) {
        // 特性 state 可以直接赋值不影响响应式
      context.store.$state = JSON.parse(item);
    }
    context.store.$subscribe((args, state) => {
      localStorage.setItem(key, JSON.stringify(toRaw(state)));
    });
  };
};
const pinia = createPinia();
pinia.use(piniaPlugin());

createApp(App).use(pinia).mount("#app");
