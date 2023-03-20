<template>
    <div>
        <input type="text" v-model="text"><br>
        <button @click="flag = !flag">开关</button>
        <hr>
        <Diago v-model:textVal.isBT="text" v-model="flag" v-if="flag"></Diago>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Diago from './Diago.vue';

const flag = ref<boolean>(true)
const text = ref('张三')
</script>