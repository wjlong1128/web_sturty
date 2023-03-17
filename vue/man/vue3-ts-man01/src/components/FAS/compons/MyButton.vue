<template>
    <button class="my-button">
        <slot class="text">
        </slot>
    </button>
</template>

<script lang="ts" setup>
</script>

<style scoped lang="less">
.my-button {
    width: 70px;
    height: 40px;
    padding: 0;
    border: solid 0px;
    outline: none;
    background-color: #0fb0d4;
    font-size: 14px;
    text-align: center;
    line-height: 40px;
    vertical-align: middle;
}
</style>