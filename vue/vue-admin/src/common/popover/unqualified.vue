<template>
  <div class="popover-unqualified">
    <el-dialog
      title="初审不及格"
      :before-close="handleClose"
      :show-close=false
      :close-on-click-modal=true
      :visible.sync="unqualifiedIsShowChild">
      <div class="popover-unqualified-box">
        <el-form :model="FormVisaData" ref="FormVisaData">
          <el-row>
            <el-col :span="24" style="margin-bottom: 18px;font-size: 20px;text-align: center;color: red;">
              编号: {{unqualifiedData.visaId}}, 申请人: {{unqualifiedData.name}}
            </el-col>
            <el-col :span="24">
              <el-form-item
                prop="reason"
                :rules="{ required: true, message: '原因不能为空', trigger: 'change'}">
                <el-input
                  v-model="FormVisaData.reason">
                  <template slot="prepend">不及格原因</template>
                </el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item
                label="用户来源"
                prop="backId"
                :rules="{type: 'enum', enum: ['0'], message: '用户来源不能为空', trigger: 'change'}"
                class="select-input">
                <select v-model="FormVisaData.backId"
                        v-html="backIdField"
                        placeholder="请选择活动区域"
                        name="backId"
                        class="default-select">
                </select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item>
                <el-radio class="radio" v-model="FormVisaData.smsType" label="1">快递短信</el-radio>
                <el-radio class="radio" v-model="FormVisaData.smsType" label="2">邮箱短信</el-radio>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center;">
          <el-button @click="unqualifiedIsShowChild = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit()">确 定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  import api_table from '@/api/table'
  export default {
    data () {
      return {
        unqualifiedIsShowChild: false,
        backIdField: '',
        FormVisaData: {
          reason: '',
          fullName: '',
          smsType: '1',
          backId: ''
        }
      }
    },
    computed: {
      unqualifiedData () {
        return this.$store.state.table.unqualified
      }
    },
    props: {
      unqualifiedIsShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onSubmit () {
        this.$refs['FormVisaData'].validate((valid) => {
          if (valid) {
            alert('success!');
          } else {
            alert('error');
            return false;
          }
        })
        console.log(this.FormVisaData)
      },
      handleClose () {
        this.$refs['FormVisaData'].resetFields()
        this.unqualifiedIsShowChild = false
      },
      get_data () {
        api_table.data_unqualifiedData({
          visaId: this.$store.state.table.unqualified.visaId
        }).then((response)=>{
          if (response.data.status === 1) {
            this.backIdField = response.data.select
          }
        })
      },
      // 验证所有表单字段
      validateForm () {
        this.$nextTick(function () {
          this.$refs['FormVisaData'].validate()
        })
      },
    },
    watch: {
      unqualifiedIsShow ($val) {
        this.$emit('updata:unqualifiedIsShow', $val)
        this.unqualifiedIsShowChild = $val
        this.validateForm()
      },
      unqualifiedIsShowChild () {
        if (!this.unqualifiedIsShowChild) {
          this.$emit('updata:unqualifiedIsShow', this.unqualifiedIsShowChild)
          this.$store.dispatch('handlerTable', false, '')
        } else {
          this.get_data()
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .popover-unqualified {
    .el-dialog {
      width: 600px;
      .el-dialog__header{
        text-align: center;
        padding-bottom: 20px;
        border: 1px #ddd solid;
        .el-dialog__title{
          font-size: 24px;
          color: #676a6c;
        }
      }
      .el-dialog__body{
        padding: 20px;
      }
      .el-form-item{
        margin-bottom: 18px;
      }
      .select-input{
        .el-form-item__label{
          text-align: center;
          width: 80px;
          border: 1px solid #bfcbd9;
          padding: 10px 0;
          border-radius: 4px;
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          position: relative;
          z-index: 111;
          background: #fff;
          color: #97a8be;
        }
        .el-form-item__content{
          padding-left: 80px;
          .default-select {
            width: 100%;
            height: 36px;
            display: inline-block;
            position: relative;
            color: #556991 !important;
            border-radius: 4px;
            border: 1px solid #bfcbd9;
            border-bottom-left-radius: 0;
            border-top-left-radius: 0;
            border-left: 1px transparent solid;
            outline: none;
            box-sizing: border-box;
            padding: 3px 35px 3px 10px;
            appearance: none;
            background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right 10px center transparent;
            option {
              text-align: center;
            }
            &:focus {
              border-color: #20a0ff;
            }
          }
        }
      }
    }
  }
</style>
