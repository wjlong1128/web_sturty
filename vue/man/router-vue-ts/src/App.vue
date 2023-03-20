<template>
  <!-- 1. 基础配置及跳转 -->
  <!-- <Router1></Router1> -->
  
  <!-- 2. 参数传递 -->
  <!-- <Router2></Router2> -->
  
  <!-- 3. 组合路由 -->
  <Router3/>
</template>

<script lang="ts" setup>
import Router1 from './views/RouterBase.vue'
import Router2 from './views/RouterParams.vue'
import Router3 from './views/RouterComs.vue'
</script>

<style>
body,html,#app{
  width: 100%;
}
</style>