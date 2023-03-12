<template>
  <div>
    <button @click="incr">点我</button>
    {{ hi }}
  </div>
</template>

<script>
import { nextTick } from "vue";
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    incr() {
      this.count++;
      nextTick(() => {
        console.log(this.count);
      });
    },
  },
  // 计算属性
  computed: {
    hi() {
      return this.count + 1;
    },
  },
};
</script>

<style>
</style>