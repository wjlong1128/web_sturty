<template>
    <div v-if="isShow" class="loading">
        Loading...
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const isShow = ref(false)
const show = () => {
    isShow.value = true
}
const hide = () => {
    isShow.value = false
}

defineExpose({
    show,
    hide
})
</script>

<style lang="less">
.loading {
    position: fixed;
    left: 0;
    top: 0;
    // z-index: 9999;
    background-color: #000;
    opacity: .8;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    // width: 100wh;
    color: #fff;
}
</style>