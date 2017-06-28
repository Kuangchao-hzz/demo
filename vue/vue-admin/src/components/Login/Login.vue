<template>
  <div class="login-body">
    <div class="login-wrap">
      <div class="ms-title">巨龙后台管理系统</div>
      <div class="ms-login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm">
          <el-form-item prop="username">
            <el-input v-model="ruleForm.account" placeholder="username"></el-input>
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
  import api from '../../api/login.js'
  export default {
    data: function () {
      return {
        ruleForm: {
          account: 'he',
          password: '123456'
        },
        rules: {
          account: [
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
        this.$refs[formName].validate(valid => {
          if (valid) {
            api.api_login(self.ruleForm).then(function (response) {
                if(response.data.status == 1){
                  self.$store.dispatch('LoginByUser', self.ruleForm).then(()   => {
                    self.$router.push('/')
                  })

                }else {
                  alert(response.data.msg)
                }
            }).catch((err) => {
              alert(err)
            })
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
