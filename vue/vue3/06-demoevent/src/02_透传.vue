<template>
  <div>
    <!-- https://cn.vuejs.org/guide/components/attrs.html -->
    <!-- vue提供了一个内置对象来访问被透传的属性 $attrs -->
    <!-- 组件的透传
      如果在属性上声明定义属性 那么改属性会发生透传现象
      自动的透传只适用于单根组件

      如果有一下行为透传现象不会发生
        在子组件中将定义的属性视为props的属性 
        
     -->
    <A class="box"></A>
    <!-- 被解析为<h1 class="box">Hello</h1> -->
  </div>
</template>

<script setup>
import A from './views/A.vue';

</script>

<style>
.box {
  font-size: 20px;
  color: #bfa
}
</style>