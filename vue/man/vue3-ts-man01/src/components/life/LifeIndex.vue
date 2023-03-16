<template>
    <div>
        <A v-if="flag"></A>
        <button @click="flag = !flag">创建/销毁</button>
    </div>
</template>

<script lang="ts" setup>
import A from './A.vue';
import {ref} from 'vue'
const flag = ref<boolean>(true)
</script>