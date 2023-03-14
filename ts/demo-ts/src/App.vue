<script setup lang="ts">
import MyButton from './views/MyButton.vue'
</script>

<template>
  <div>
    <h1>hello</h1>
    <MyButton #default="solts">
    {{ solts.stu }}
    </MyButton>
  </div>
</template>

<style scoped></style>
