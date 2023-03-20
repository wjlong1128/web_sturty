<template>
    <div>
        <h2>我是B组件</h2>
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>

</script>

<style scoped>
/* .a {
    color: red;
} */

/* 插槽选择器 */
:slotted(.a){
    color:red;
}
</style>