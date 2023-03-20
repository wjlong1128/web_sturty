<template>
    <div>
        <!-- <A></A> -->
        <button @click="loading">loading</button>
    </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance } from 'vue';
const loading = () => {
    getCurrentInstance()?.proxy?.$myloading.show()
    setTimeout(() => {
        getCurrentInstance()?.proxy?.$myloading.hide()
    }, 3000)
}
</script>

