<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
             :collapse="isCollapse">
      <SliderBarItem v-for="item in array" :key="item.key" :item="item"/>
    </el-menu>
  </div>
</template>

<script>
import SliderBarItem from "@/layout/components/SliderBar/SliderBarItem.vue";

export default {
  name: "SidebarView",
  components: {SliderBarItem},
  data() {
    return {
      isCollapse: false,
      array: [{key: 1, value: 1}, {key: 2, value: 2}, {key: 3, value: 3}],
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