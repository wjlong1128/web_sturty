import type { App, VNode } from "vue";
import { createVNode, render } from "vue";
import LoadingVue from "./Loading.vue";
export default {
  install(app: App) {
    // 组件无法直接挂载为插件
    // 1. 转换为VNode
    const node: VNode = createVNode(LoadingVue);
    // 2. 挂载 参数2 挂载点
    render(node, document.body);
    // 3. 通过组件暴露的属性定义全局变量
    app.config.globalProperties.$myloading = {
      show: node.component?.exposed?.show,
      hide: node.component?.exposed?.hide,
    };
    
    //  app.config.globalProperties.$myloading.show();
  },
};

declare module "vue" {
  export interface ComponentCustomProperties {
    $myloading: {
      show: () => void;
      hide: () => void;
    };
  }
}
