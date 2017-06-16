<template>
  <div class="login-body">
    <div class="login-wrap">
      <div class="ms-title">巨龙后台管理系统</div>
      <div class="ms-login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.username" placeholder="username"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
  import api from '@/api/index'
  export default {
    data: function () {
      return {
        ruleForm: {
          username: 'hzzaiyourlive@qq.com',
          password: '123456'
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      submitForm (formName) {
        var self = this
        console.log(api)
        this.$refs[formName].validate(valid => {
          if (valid) {
            api.get_routerAuthority().then((response) => {
              this.$store.dispatch('LoginByUser', response)
            })
            this.$router.push('/visa')
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" type="text/scss">
  .login-body{
    width: 100%;
    height: 100%;
    background: #ddd;
    .login-wrap{
      width:300px;
      height:160px;
      position: absolute;
      left: 50%;
      top: 35%;
      transform: translate(-50%, -50%);
      .ms-title{
        text-align: center;
        font-size:30px;
        color: #666;
        margin-bottom: 20px;
      }
      .ms-login{
        width: 100%;
        height: 100%;
        border-radius: 5px;
        .login-btn{
          text-align: center;
        }
        .login-btn button{
          width:100%;
          height:36px;
        }
      }
    }
  }
</style>
