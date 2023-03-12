<template>
    <div>
        <form action="" @submit.prevent="submitHandler">
            <!-- <input type="text" @input="event => {text = event.target.value}" ><br> -->
            <!-- 这样写太过麻烦 直接数据双向绑定 -->
            <!-- 这样写是单向绑定 v-bind: -->
            <!-- <input type="text" :value="text"> -->
            <!-- 双向绑定 -->
            <input type="text" v-model="text"> <br>
            <input :type="mode" name="" id=""> <button @click="unHide">显示/隐藏</button>
            <input type="submit" value="点击提交">

        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('')
const submitHandler = () => {
    console.log(text.value)
}

const mode = ref('password')
function unHide() {
    mode.value = mode.value === 'password' ? 'text' : 'password'
} 
</script>

<style></style>