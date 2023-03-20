<template>
    <div>
        <h1>我是A</h1>
        <button @click="emitB">点击给B派发事件</button>
        <hr>
    </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance()
const emitB = () => {
    // 传递给B一个字符串
    instance?.proxy?.$mit.emit('on-wjl', 'mitt')
}
</script>