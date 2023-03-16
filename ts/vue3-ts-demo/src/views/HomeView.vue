<template>
  <el-container>
    <el-header>
      <HeaderView></HeaderView>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <MenuView :menus="menus"></MenuView>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import HeaderView from "./home/HeaderView.vue";
import MenuView from "./home/MenuView.vue";

const router = useRouter();
const menus = router
  .getRoutes()
  .filter((r) => r.meta.menu)
  .map((r) => {
    return {
      name: r.name,
      menu: r.meta.menu,
      path: r.path,
    };
  });

// console.log(menus);
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #41b883;
  height: 80px;
}
</style>
