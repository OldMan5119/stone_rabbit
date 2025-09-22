<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse" :router="true">
      <SliderBarItem v-for="route in filterHideRoute(routes)" :key="route.path" :item="route" :collapse="isCollapse"/>
    </el-menu>
  </div>
</template>

<script>
import SliderBarItem from "@/layout/components/SliderBar/SliderBarItem.vue";
import store from "@/store";

export default {
  name: "SidebarView",
  components: {SliderBarItem},
  data() {
    return {
      routes: store.state.permission.routes
    };
  },
  methods: {
    filterHideRoute(routes) {
      return routes.filter((route) => {
        return !route.hidden
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.app.sidebar.opened
    }
  }
}
</script>

<style scoped>
</style>