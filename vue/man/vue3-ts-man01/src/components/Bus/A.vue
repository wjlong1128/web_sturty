<template>
    <div>
        <hr>
        <h1>A {{ flag }}</h1>
        <button @click="emitB">派发一个事件给B</button>
        <hr>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import bus from '../../type/Bus'
const flag = ref(true)
const emitB = () => {
    flag.value = !flag.value
    bus.emit('on-click',flag)
}
</script>