
<template>
  <div class="header">
    <div class="logo">后台管理系统</div>
    <div class="user-info">
      <el-dropdown trigger="click" @command="handleCommand" class="el-btn-link">
        <span class="el-dropdown-link">
            <img class="user-logo" src="http://work.omwteam.com/static/img/img.2aab7b4.jpg">
            {{username}}
        </span>
        <span class="el-logout-link">
            注销
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="loginout"><router-link to="/login"></router-link>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        name: 'linxin'
      }
    },
    computed: {
      username () {
        let username = localStorage.getItem('ms_username')
        /* eslint-disable no-unneeded-ternary */
        return username ? username : this.name
      }
    },
    methods: {
      handleCommand (command) {
        if (command === 'loginout') {
          localStorage.removeItem('ms_username')
          this.$router.push('/login')
        }
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
  .header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    line-height: 70px;
    color: #fff;
    background: #00d1b2;
    .logo {
      float: left;
      width: 250px;
      text-align: center;
    }
    .user-info {
      float: right;
      padding-right: 50px;
      font-size: 16px;
      color: #fff;
      .el-btn-link {
        position: relative;
        display: inline-block;
        color: #fff;
        cursor: pointer;
        vertical-align: middle;
        .el-dropdown-link{
          padding-left: 50px;
          .user-logo {
            position: absolute;
            left: 0;
            top: 15px;
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
        .el-logout-link{
          padding-left: 20px;
        }
      }

    }
  }
  .el-dropdown-menu__item{
    text-align: center;
  }
</style>
