<template>
  <!-- https://xiaoman.blog.csdn.net/article/details/125650172 css 原子化 -->
  <!-- <div class="btn" >unoCss</div>
  <div  class="i-ic-baseline-backspace text-3xl bg-green-500" /> -->

  <!-- 1. 函数式编程 -->
  <!-- <FuncIndex></FuncIndex> -->

  <!-- 2. 响应式语法糖 测试阶段 
    在vite.config.ts 
    vue({
      reactivityTransform:true
    }),
  -->
  <!-- <ReactiveIndex></ReactiveIndex> -->

  <!-- 3. 环境变量 -->
  <!-- <EnvIndex></EnvIndex> -->

  <!-- 4. 自定义组件 -->
  <!-- vue({ reactivityTransform: true,
        template:{
          compilerOptions:{
            isCustomElement:(tag)=>{
              return tag.includes('wjl-')   
            }
          }
        }
      }), -->
  <CustomComIndex></CustomComIndex>
  <h1>{{ msg }}</h1>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import CustomComIndex from './components/customComp/CustomComIndex.vue';
import EnvIndex from './components/env/EnvIndex.vue';
import FuncIndex from './components/functional/FuncIndex.vue';
import ReactiveIndex from './components/reactivity/ReactiveIndex.vue';
interface Msg<T> { code?: number, data?: T }

const msg = reactive<Msg<{ name: string, age: number }>>({})
  ; (async () => {
    try {
      const result = await fetch('/api/getUser')
      const data = await result.json()
      const m = data as Msg<{ name: string, age: number }>
      msg.code = m.code
      msg.data = m.data
    } catch (error) {
      console.log(error);
    }
  })()
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.box {
  color: skyblue;
}
</style>