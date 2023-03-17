<template>
    <div>
        <h2>孙子</h2>
        <div class="box"></div>
        <button @click="change">change 子组件可修改</button>
    </div>
</template>

<script lang="ts" setup>
import { Ref, inject } from 'vue';

const colorVal = inject<Ref<string>>('color')
const change = ()=>{
    colorVal!.value = 'skyblue'
}
</script>
<style scoped>
.box {
    border: 1px black solid;
    width: 100px;
    height: 100px;
    background-color: v-bind(colorVal);
}
</style>