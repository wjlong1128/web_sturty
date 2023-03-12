<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="count += 1">点击</button>
    <button @click="incr">点击(函数)</button>
    <ul v-for="p,index of persons" :key="p.id">
      <li>{{index}}-{{p}}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";
let count = ref(0);
let persons = ref([
  {id:1,name:'zhangsan'},
  {id:2,name:'zhangsan'},
  {id:3,name:'zhangsan'},
  {id:4,name:'zhangsan'},
])
const incr = () => {
  count.value += 1;
};
watch(count, (newValue, oldValue) => {
  console.log(`new ${newValue} old ${oldValue}`);
});
</script>


<style lang='less' scoped>
  div {
    width: 200px;
    height: 200px;
    background-color: skyblue;
    button {
      background-color: pink;
    }
  }
</style>
