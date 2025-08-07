<template>
  <div class="app-wrapper">
    <sidebar class="sidebar-container"/>

    <div class="main-container">
      <div class="fixed-header">
        <navbar/>
        <tags-view class="tags-view"/>
      </div>
      <app-main class="app-main"/>
    </div>

  </div>
</template>

<script>
import {AppMain, Navbar, Sidebar, TagsView} from '@/layout'

export default {
  name: "HomePage",
  components: {
    AppMain,
    Navbar,
    Sidebar,
    TagsView
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.app-wrapper {
  display: flex;
  height: 100%;
  width: 100%;
  //background: #C03639;
}

.sidebar-container {
  width: #{$sideBarWidth};
  height: 100%;
  //background: #13ce66;
}

.main-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100%;
  transition: margin-left .28s;
  position: relative;
  //background: #FEC171;
}

.fixed-header {
  height: auto;
  transition: width 0.28s;
}

.app-main {
  width: 100%;
  height: 100%;
  flex: 1;
  background-color: #30B08F;
}

</style>