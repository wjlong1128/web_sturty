<template>
    <div>
        <h1>Index （爷爷级别）</h1>
        <label>红<input v-model="colorVal" type="radio" name="color" value="red" id=""></label>
        <label>蓝<input v-model="colorVal" type="radio" name="color" value="blue" id=""></label>
        <label>绿<input v-model="colorVal" type="radio" name="color" value="green" id=""></label>
        <div class="box"></div>
    </div>
    <hr>
    <ProvideA></ProvideA>
    <hr>
</template>

<script lang="ts" setup>
import { provide, readonly, ref } from 'vue';
import ProvideA from './ProvideA.vue';
const colorVal = ref('red')

// 为了防止子组件修改其值 可以设置只读
// provide('color', colorVal)
provide('color', readonly(colorVal))

</script>

<style scoped>
.box {
    border: 1px black solid;
    width: 100px;
    height: 100px;
    /* 绑定属性 */
    background-color: v-bind(colorVal);
}
</style>