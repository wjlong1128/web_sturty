<script setup lang="ts">
import { ref, watch, watchEffect } from 'vue';
  const value = ref('')
  watchEffect(()=>{
    console.log(value.value);
  })
</script>

<template>
  <mavon-editor :ishljs = "true" v-model="value"/>
</template>

<style scoped>
</style>
