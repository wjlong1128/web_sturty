<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <img src="@/assets/logo.png" alt="logo" class="logo" />
    </el-col>
    <el-col :span="16"><h2>后台管理</h2> </el-col>
    <el-col class="right" :span="4"
      ><span class="logout">退出登录</span></el-col
    >
  </el-row>
</template>

<style lang="scss" scoped>
.el-row {
  .logo {
    height: 80px;
    border:#0bd1cb solid 1px;
    vertical-align: middle;
  }

  h2,
  .logout {
    height: 100%;
    line-height: 80px;
    text-align: center;
    color: #fff;
  }

  .right {
    display: flex;
    .logout {
      margin-left: auto;
    }
  }
}
</style>
