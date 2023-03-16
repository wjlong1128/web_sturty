<template>
    <div>
        cas1 <input type="text" v-model="message"> <br>
        cas2 <input type="text" v-model="person.foo.name">
        <hr>
        <div>
            cas1 <input type="text" v-model="message1"> <br>
            cas2 <input type="text" v-model="message2"><br>
            <button @click="stopWatch">停止监听</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref, watch, watchEffect } from 'vue';

const message = ref<string>('')
const person = reactive({ foo: { name: '' } })
const print = (newVal: any, oldVal: any) => {
    console.log(newVal, oldVal);
}

// watch(message, (newVal, oldVal) => {
//     console.log(newVal, oldVal);
// })
// 响应式对象(reactive)默认开启深度监视
// watch(person,print)
// 监视对象属性需要使用回调  默认为表达式无法监视

watch([() => person.foo.name, message], print, {
    // 立即执行
    // immediate: true
    flush: 'post' // pre 组件更新之前  sync 同步  post之后
})


const message1 = ref('飞机')
const message2 = ref('飞机')
// https://cn.vuejs.org/guide/essentials/watchers.html#watcheffect
// 返回值为函数 调用停止监听函数
const stop = watchEffect((before) => {
    // 此函数 直接写在里边的变量直接监听
    console.log('message1', message1.value);
    before(() => {
        console.log('消息更新'); // 监听时会首先调用此函数 再执行自定义任务
    })
}, {
    flush: 'post',
    onTrigger(e) {
        // debugger  可以debug 调试函数
    }
})
const stopWatch = (): void => stop()
</script>