<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse" :router="true">
      <SliderBarItem v-for="route in routes" :key="route.path" :item="route"/>
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
      isCollapse: false,
      routes: store.state.permission.routes
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
</style>