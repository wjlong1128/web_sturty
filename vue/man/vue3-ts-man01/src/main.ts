import { createApp } from "vue";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "animate.css";
// JSX
// 在vite.config.ts
// import './style.css'
import App from "./App.vue";
// 定义全局组件
import MyButton from "./components/FAS/compons/MyButton.vue";
// 插件
import Loading from './components/plugin/loading'

import mitt from "mitt";
// 初始化
const Mitt = mitt();
const app = createApp(App);
// 挂载全局变量
app.config.globalProperties.$mit = Mitt;
app.config.globalProperties.$filter = (str: string) => {
  return str.trim();
};
// ts声明
declare module "vue" {
  export interface ComponentCustomProperties {
    $mit: typeof Mitt;
    $filter: (str: string) => string;
  }
}
// 全局组件
app.component("m-b", MyButton);
app.use(ElementPlus);
// 注册插件
app.use(Loading)
app.mount("#app");
