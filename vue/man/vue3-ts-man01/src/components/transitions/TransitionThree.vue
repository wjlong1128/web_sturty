<template>
    <div>
        <h2 style="font-size:30px">状态过渡</h2>
        <input type="number" v-model="num.current" name="" id="" step="20">
        <div>
            {{ num.tweenedNumber }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { reactive, watch } from 'vue';

const num = reactive({
    current: 0,
    tweenedNumber: 0
})

watch(() => num.current, (newVal, oldVal) => {
    // 过渡更新对象属性 设置时间
    gsap.to(num, {
        duration: 1,
        tweenedNumber: newVal
    })
})
</script>