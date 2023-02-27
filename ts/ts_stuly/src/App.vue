<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-page-header :icon="ArrowLeft" @click="goBack()">
          <template #content>
            <span class="text-large font-600 mr-3"> Title </span>
          </template>
        </el-page-header>
      </el-header>
      <el-container>
        <el-aside width="200px">2</el-aside>
        <el-main>3</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts" setup>
import { ArrowLeft } from '@element-plus/icons-vue'
import { ref } from 'vue';
const goBack = ()=>{
  console.log('????');
  
}
ref({
  goBack,
})
</script>

<style  scoped>
.common-layout {
  background-color: pink;
}
</style>