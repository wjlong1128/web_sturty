import { createApp } from "vue";
// import './style.css'
import App from "./App.vue";
import MyButton from "./components/FAS/compons/MyButton.vue";
// 定义全局组件

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import 'animate.css';
createApp(App).component("m-b", MyButton).use(ElementPlus).mount("#app");
