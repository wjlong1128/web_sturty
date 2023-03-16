<template>
  <div>
    <div @click="f">
      <button @[event].stop="xxx">点击我</button>
    </div>
    <!-- v-once 该dom只会渲染一次 -->
    <!-- <h1 :style="style" v-once>演示bind</h1> -->
    <div v-for="item in arr" v-memo="[item]">
      <!-- 配合 for 使用  条件成立 只会渲染一次 不成立不跳过更新 -->
      <!-- 当搭配 v-for 使用 v-memo，确保两者都绑定在同一个元素上。v-memo 不能用在 v-for 内部。 -->
      <h1 v-on:click="ctrl" :style="style">演示bind</h1>
      <button @click="ctrl">点击改变颜色</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

const event: string = "click";
const xxx = () => {
  console.log("收到点击了");
};

const f = () => {
  console.log("我是父级");
};

const arr = ["true", "true", "false"];
const style = reactive({
  color: "red",
  fontSize: "30px",
});

const ctrl = () => {
  style.color = style.color == "red" ? "blue" : "red";
};
</script>
<style scoped></style>
