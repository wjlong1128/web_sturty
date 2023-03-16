<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item
      :index="menu.path"
      v-for="menu in props.menus"
      :key="menu.path"
    >
      <!-- <router-link :to="`${menu.path}`"> -->
      <el-icon><Setting></Setting></el-icon>
      <span>{{ menu.menu }}</span>
      <!-- </router-link> -->
    </el-menu-item>
  </el-menu>
</template>
<script lang="ts" setup>
import { Setting } from "@element-plus/icons-vue";
import { defineProps } from "vue";

const props = defineProps(["menus"]);

const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath);
};
</script>

<style lang="scss" scoped>
.el-menu {
  // 计算所占当前视窗的高度
  height: calc(100vh - 80px);
  a {
    text-decoration: none;
    color: #fff;
  }
}
</style>
