import { createApp, createVNode, render } from "vue";
import "./style.css";
import 'element-plus/dist/index.css'
import App from "./App.vue";
import router from "./router";
import 'animate.css';
import Loading from "./views/route/Loading.vue";
const loading = createVNode(Loading);
render(loading, document.body);
// 前置守卫
router.beforeEach((to, from, next) => {
  console.log(to, from, next);
  loading.component?.exposed?.startLoading();
  if (to.meta.title){
    document.title  = to.meta.title
  }
  next();
});

// 后置守卫
router.afterEach((to, from) => {
  loading.component?.exposed?.endLoading();
});

createApp(App).use(router).mount("#app");
