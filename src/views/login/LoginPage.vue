<template>
  <div class="login-container">
    <el-card>
      <h2>登录</h2>
      <el-form v-model="loginForm">
        <el-form-item label="用户名">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
// import {setToken} from '@/utils/auth'
// import {login} from '@/api/userinfo.js'

export default {
  data() {
    return {
      loginForm: {}
    }
  },
  methods: {
    handleLogin() {
      // 实际项目中这里应该调用登录接口
      if (this.loginForm.name && this.loginForm.password) {
        this.$store.dispatch("user/login", this.loginForm).then(() => {
          this.$router.push('/dashboard')
          // 跳转到首页
        })
      } else {
        this.$message.warning('请输入用户名和密码')
      }
    }
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f7fa;
}

.el-card {
  width: 400px;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>