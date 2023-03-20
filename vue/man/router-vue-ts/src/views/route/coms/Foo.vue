<template>
    <div>
        <!-- <Loading></Loading> -->
        <img src="/code.png" style="width:800px" alt="">
        <h1>foo</h1>

        <p>
            <RouterLink to="/user/log1">log1</RouterLink>
        </p>
        <p>
            <RouterLink to="/user/log2">log1</RouterLink>
        </p>
        <hr>
        <button @click="change('default')">default路由视图</button>
        <button @click="change('bbb')">bbb路由视图</button>
        <hr>
        <RouterView :name="name" #default="{ Component }">
            <transition enter-active-class="animate__animated animate__heartBeat">
                <component :is="Component" />
            </transition>
        </RouterView>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Loading from '../Loading.vue'

const name = ref<string>('default')
const change = (namei: string) => {
    name.value = namei
}
</script>

<style></style>