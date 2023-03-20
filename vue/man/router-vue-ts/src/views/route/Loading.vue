<template>
    <div class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
let speed = ref<number>(1);
const bar = ref<HTMLElement>()

const timer = ref<number>(0)
const startLoading = () => {
    let dom = bar.value as HTMLElement
    speed.value = 1
    // 会将自身作为计时器收集 只运行一次
    timer.value = window.requestAnimationFrame(function fn() {
        if (speed.value < 90) {
            speed.value += 1
            dom.style.width = speed.value + '%'
            window.requestAnimationFrame(fn)
        } else {
            speed.value = 1;
            window.cancelAnimationFrame(timer.value)
        }
    })
}

const endLoading = () => {
    setTimeout(() => {
        window.requestAnimationFrame(function fn() {
            speed.value = 100;
            let dom = bar.value as HTMLElement
            dom.style.width = speed.value + '%'
        })
    }, 1000)
}

onMounted(() => {
    startLoading()
    endLoading()
})
defineExpose({
    startLoading,
    endLoading
})
</script>

<style scoped lang="less">
.wraps {
    position: fixed;
    top: 0;
    width: 100%;
    height: 2px;

    .bar {
        height: inherit;
        width: 0;
        background-color: #bfc;
    }
}
</style>