<template>
  <!-- v-on:click="fn" 调用方法事件处理器 -->
  <!-- v-on:click="fn()" 调用内联事件处理器-->
  <!-- 
      vue 检查事件的值是否为合法的js标识符 或者属性访问路径
       是 表示为方法事件处理器
         - 回调函数的参数由vue帮我们传递
         - 参数就是事件对象
       否 表示为内联事件处理器
         - 回调函数的参数由编写代码的人员传递 函数也是我们自己调用的
     -->

  <div>
    <button v-on:click.once.stop="eventHandler">方法事件处理器</button>
    <br>
    <!-- 内联事件处理器可以使用 内置对象$event传递事件对象 -->
    <button @click="eventHandler($event)">内联事件处理器</button>
  </div>
</template>

<script setup>
const eventHandler = (event) => {
  console.log(event)
}
</script>

<style></style>