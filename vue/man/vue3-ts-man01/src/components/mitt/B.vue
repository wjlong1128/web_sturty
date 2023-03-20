<template>
    <div>
        <hr>
        <h1>我是B组件</h1>
        {{ msg }}
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { getCurrentInstance } from 'vue';

const $mit = getCurrentInstance()?.proxy?.$mit
const msg = ref('')
$mit?.on('on-wjl', (mit) => {
    msg.value = mit as string
})

// * 监听所有事件
$mit?.on('*', (eventName, str) => {
    console.log(`${eventName.toString()} ==== ${str}`);
})
// 删除指定事件 * 代表所有
// $mit?.off('')

// $mit?.all.clear()
</script>