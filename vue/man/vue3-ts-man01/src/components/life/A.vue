<template>
    <div>
        <div ref="div" @click="change">{{ str }}</div>
    </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance,ref, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from 'vue';

// 再setup中 beforeCreate created 是没有这两个生命周期函数的 用setup代替
console.log('setup...');
const div = ref<HTMLDivElement>()
const str = ref<string>('abc')
const change = ()=>{
    str.value = '我被修改了'
}
// 创建之前
onBeforeMount(() => {
    console.log('创建之前 onBeforeMount', div.value);
})

// 组件完成初始渲染并创建 DOM 节点后
onMounted(() => {
    console.log('创建完成', div.value);
    console.log(getCurrentInstance());
})

onBeforeUpdate(() => {
    console.log('更新组件之前',div.value?.innerText);
})

onUpdated(() => {
    console.log('更新组件完成',div.value?.innerText);
})

onBeforeUnmount(() => {
    console.log('销毁组件之前',div.value?.innerText);
})

onUnmounted(() => {
    console.log('销毁组件之后',div.value?.innerText);
})




</script>