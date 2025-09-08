<template>
  <div>
    <!--    含子节点-->
    <el-submenu v-if="item.children && item.children.length>0" :index="item.path">

      <template #title>
        <i class="el-icon-location"></i>
        <span>{{ item.name }}</span>
      </template>

      <el-menu-item v-for="child in item.children" :key="child.name"
                    :index="child.name" :route="resolvePath(child.path,item.path)">
        <i class="el-icon-menu"></i>
        <span>{{ child.name }}</span>
      </el-menu-item>

    </el-submenu>

    <!--    无子节点-->
    <el-menu-item v-else index="2" :route="item.path">
      <i class="el-icon-menu"></i>
      <span>{{ item.name }}</span>
    </el-menu-item>

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
  },
  data() {
    return {
      isLogin: false,
    }
  },
  methods: {
    resolvePath(child_path, parent_path) {
      let routePath
      console.info("@@-->", parent_path)
      if (parent_path === "/") {
        routePath = parent_path + child_path
      } else {
        routePath = parent_path + "/" + child_path
      }
      console.info("-->", routePath)
      return routePath
    }
  }
}
</script>
<style scoped lang="scss">

</style>