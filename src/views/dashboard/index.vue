<template>
  <div class="errPage-container">
    <el-row>
      <el-col :span="12">
        <h1 class="text-jumbo text-ginormous">
          欢迎!
        </h1>
        <h2 class="text-size">欢迎来到LBS管理后台</h2>
        <!-- <h6>如有需要请联系管理员</h6> -->
      </el-col>
      <el-col :span="12">
        <img :src="errGif" width="428" height="428" alt="map.">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import errGif from '@/assets/logo.png'

export default {
  name: 'HomePage',
  data() {
    return {
      errGif: errGif + '?' + +new Date(),
      ewizardClap: 'https://wpimg.wallstcn.com/007ef517-bafd-4066-aae4-6883632d9646',
      dialogVisible: false
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .errPage-container {
    width: 800px;
    max-width: 100%;
    margin: 100px auto;
    .pan-back-btn {
      background: #008489;
      color: #fff;
      border: none!important;
    }
    .pan-gif {
      margin: 0 auto;
      display: block;
    }
    .pan-img {
      display: block;
      margin: 0 auto;
      width: 100%;
    }
    .text-jumbo {
      font-size: 60px;
      font-weight: 700;
      margin-top: 15vh;
      color: #484848;
    }
    .text-size{
      font-size: 30px;
      font-weight: 600;
    }
    .list-unstyled {
      font-size: 14px;
      li {
        padding-bottom: 5px;
      }
      a {
        color: #008489;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
