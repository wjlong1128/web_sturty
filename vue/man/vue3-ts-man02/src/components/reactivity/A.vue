<template>
    <div>
        <button @click="incr">{{ msg }}--{{ name }}</button>
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from 'vue';
import { $ref, $$, $ } from 'vue/macros'
let msg = $ref(0) // 在编译期间解释为 ref
const incr = () => {
    msg++
    name = '张三'
}

watch($$(msg), () => { // 还原为ref
    console.log(msg);
})

const person = reactive({name:'wjl',age:18})

let {name,age} = $(person)
console.log(name,age);
</script>

<style></style>