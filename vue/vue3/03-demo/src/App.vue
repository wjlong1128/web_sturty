<template>
    <div>
        <h1>父组件</h1>
        <div class="box"></div>
        <my-box />
    </div>
</template>
<script setup>
import MyBox from './components/MyBox.vue';
// https://cn.vuejs.org/api/sfc-css-features.html

</script>

<style scoped>
.box {
    width: 300px;
    height: 300px;
    background-color: pink;
}

/* 深度选择器 */
:deep(h1) {
    color: #afb;
}
</style>