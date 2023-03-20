<template>
  <div>
    <!-- 1. 介绍基础 <Index></Index> -->
    <!-- 2. 生命周期函数 <LifeIndex></LifeIndex> -->
    <!-- 3. 父子组件(参数传递，动态组件，插槽) <FASIndex></FASIndex> -->
    <!-- 4. 异步组件 -->
    <!-- <Suspense>
      <template #default>
        <Async></Async>
      </template>
      <template #fallback>
        加载中
      </template>
    </Suspense> -->

    <!-- 5. 传送组件 -->
    <!-- <TeleportIndex></TeleportIndex> -->

    <!-- 6. 组件缓存 -->
    <!-- <KeepIndex></KeepIndex> -->

    <!-- 7. 过渡 -->
    <!-- 单组件过渡动画 -->
    <!-- <TransitionIndex></TransitionIndex> -->
    <!-- v-for 组件过渡动画 -->
    <!-- <TransitionsTwo></TransitionsTwo> -->
    <!-- 状态过渡 -->
    <!-- <TransitionThree></TransitionThree> -->

    <!-- 8. 依赖注入 父组件传递 所有子组件接收-->
    <!-- <ProvideIndex></ProvideIndex> -->

    <!-- 9.兄弟组件传递消息 -->
    <!-- <BusIndex></BusIndex> -->
    <!-- <MittIndex></MittIndex> -->

    <!-- 10 TSX  -->
    <!-- <WjlApp name="wangjianlong" @on-click="getItem"></WjlApp> -->

    <!-- 11. v-model 组件双向数据流 -->
    <!-- <VModelIndex></VModelIndex> -->

    <!-- 12. directive 自定义指令 v-... -->
    <!-- <DirectiveIndex></DirectiveIndex>     -->

    <!-- 13. 自定义Hook -->
    <!-- <HookIndex></HookIndex>  -->

    <!-- 14.vue插件 将组件作为全局变量插件 -->
    <!-- <PlugInIndex></PlugInIndex> -->

    <!-- 15. 样式scoped穿透 -->
    <!-- <CSSIndex></CSSIndex> -->
    
    <!-- 16. EventLoop -->
    <NextTick></NextTick> 
  </div>
</template>
<script lang="ts" setup>
// import LifeIndex from './components/life/LifeIndex.vue'
// import FASIndex from './components/FAS/FASIndex.vue'
// 添加异步组件
// import { defineAsyncComponent } from 'vue';
// const Async = defineAsyncComponent(() => import('./components/async/Async.vue'))

// import TeleportIndex from './components/teleport/TeleportIndex.vue'
// import KeepIndex from './components/keepalive/KeepIndex.vue';
// import TransitionIndex from './components/transitions/TransitionIndex.vue';
// import TransitionsTwo from './components/transitions/TransitionsTwo.vue';
// import TransitionThree from './components/transitions/TransitionThree.vue';
// import ProvideIndex from './components/provide_inject/ProvideIndex.vue';
// import BusIndex from './components/Bus/BusIndex.vue';
// import MittIndex from './components/mitt/MittIndex.vue';
// import WjlApp from './App'
// import VModelIndex from './components/vmodel/VModelIndex.vue';
// import DirectiveIndex from './components/directive/DirectiveIndex.vue';
// import HookIndex from './components/hookcust/HookCustIndex.vue';
// import PlugInIndex from './components/plugin/PlugInIndex.vue';
// import CSSIndex from './components/csss/CSSIndex.vue';
import NextTick from './components/eventloop/NextTick.vue';
const getItem = (value: any) => {
  console.log('父组件收到', value);
}
</script>

<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: '';
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
</style>
