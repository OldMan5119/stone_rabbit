<template>
  <div class="navi-bar">
    <div class="icon-container">
      <HamburgerIcon :isActive="isActive" @click="toggleSideBar"/>
      <div class="arrow-container">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/dashboard' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>
    <div class="setting-container">
      <button :class="isLogin?'logout-btn':'login-btn'" @click="onLoginOut()">
        {{ isLogin ? "退出" : "登陆" }}
      </button>
    </div>
  </div>
</template>

<script>
// import {} from "@/store";
import HamburgerIcon from "@/layout/components/NavBar/HamburgerIcon.vue";

export default {
  name: "NavbarView",
  components: {HamburgerIcon},
  data() {
    return {}
  },
  methods: {
    onLoginOut() {
      if (this.isLogin) {
        //执行退出登陆
        this.$store.dispatch("user/logout")
      } else {
        //执行登陆
        this.$router.push("/login")
      }
    },
    toggleSideBar() {
      console.info("------------")
      this.$store.dispatch("app/toggleSideBar")
    }
  },
  computed: {
    isActive() {
      return this.$store.state.app.sidebar.isActive;
    },
    isLogin() {
      return this.$store.state.user.token !== ''
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
  justify-content: space-between;

  .icon-container {
    display: flex;
    align-items: center;
    font-size: 27px;
    margin-left: 10px;

    .arrow-container {
      margin-left: 20px;
    }
  }

  .setting-container {
    margin-right: 20px;
  }
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
}

.login-btn {
  background-color: #2ecc71;
  color: white;
}

.logout-btn {
  background-color: #e74c3c;
  color: white;
}
</style>