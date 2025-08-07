<template>
  <div class="navi-bar">
    <div class="icon-container">
      <i class="el-icon-s-fold"></i>
    </div>
    <div class="arrow-container">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavbarView",
  data() {
    return {
      slider_fold: true
    }
  }
}
</script>

<style lang="scss" scoped>

.navi-bar {
  display: flex;
  align-items: center;
  height: 45px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, .08);

  .icon-container {
    font-size: 27px;
    margin-left: 10px;
  }

  .arrow-container {
    margin-left: 20px;
  }
}
</style>