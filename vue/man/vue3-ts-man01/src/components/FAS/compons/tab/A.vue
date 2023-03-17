<template>
    <div>
        <h1>{{ msg }}</h1>
        <button @click="change">change</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const msg = ref<string>('A')
const change = () => {
    msg.value = 'AAA'
}
</script>