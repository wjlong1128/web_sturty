<template>
    <div>
        <input type="text" :value="name">
        <br>
        <button @click="change">change</button>
        <br>
        <div ref="div">{{ name }}</div>
    </div>
</template>

<script lang="ts" setup>
import { nextTick, ref } from 'vue';
const name = ref('wjl')
const div = ref<HTMLDivElement>()

// 问题 div内的innerText改变了 但是输出旧值
// const change = ()=>{
//     name.value = 'wjl NB'
//     console.log(div.value?.innerText);
// }

// 用nextTick：改值=>组件重新渲染diff变成真实节点=>微任务开始执行=>nextTick
const change = async () => {
    name.value = 'wjl NB'
    await nextTick()
    console.log(div.value?.innerText);
}
</script>

<style></style>