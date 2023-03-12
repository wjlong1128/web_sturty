<template>
  <div>
    <h1>setup</h1>
    <button @click="count++">{{ count }}</button>
    <br />
    <p>{{ stu.name + " " + stu.age }}</p>
    <p>{{ sayHi() }}</p>
  </div>
</template>

<script setup>
// 给对象使用
import {
  reactive,
  /* 给对象使用 
  - 返回一个对象的响应式代理 
  - 深层响应式对象 
  - 缺点只能给对象使用 不能处理原始值
 */
  ref,
  /*
     - 接收一个任意值 并返回它的响应式代理
     - 将值包装为一个对象 {value:xxx}
     - 
   */
} from "vue";

// 在组合式api中声明的变量就是一个普通的变量 不是响应式变量
// let count = 0;
const count = ref(0);
const stu = reactive({
  name: "wjl",
  age: 20,
});

const sayHi = function () {
  // 这里形成一个闭包
  return "hi~" + count.value + "  stu.age = " + stu.age;
};

// 配置文件配置之后的语法糖
let countref = $ref(0);
console.log("countref ", countref);
</script>

<style>
</style>