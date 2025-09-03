<template>
  <div>
    <el-submenu :index="item.key">
      <template #title>
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>

      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-submenu>
  </div>
</template>
<script>
export default {
  name: "SliderBarItem",
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isLogin: false,
    }
  }
}
</script>
<style scoped lang="scss">

</style>