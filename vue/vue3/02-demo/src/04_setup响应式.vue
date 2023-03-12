<template>
  <div>
    <h1>setup</h1>
    <button @click="count++">{{ count }}</button>
    <br />
    <p>{{ stu.name + " " + stu.age }}</p>
    <p>{{ sayHi() }}</p>
  </div>
</template>

<script>
// 给对象使用
import {
  reactive, // 给对象使用
  ref, // 给普通变量使用
} from "vue";

export default {
  setup() { // 以下都在一个函数作用域中
    // 在组合式api中声明的变量就是一个普通的变量 不是响应式变量
    // let count = 0;
    const count = ref(0);
    const stu = reactive({
      name: "wjl",
      age: 20,
    });
    const sayHi = function(){ // 这里形成一个闭包
      return 'hi~' + count.value
    }
    // 暴露出去给模板
    return { count, stu,sayHi };
  },
};
</script>

<style>
</style>