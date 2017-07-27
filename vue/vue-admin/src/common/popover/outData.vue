<template>
  <div class="popover-outData">
    <el-dialog
      title="导出数据"
      :before-close="handleClose"
      :close-on-click-modal=true
      :visible.sync="outDataIsShowChild">
      <div class="popover-unqualified-box">
        <el-form :model="FormData"
                 ref="FormData"
                 label-width="100px">
          <el-row>
            <el-col :span="20" :offset="4">
              <el-form-item
                prop="startTime"
                label="操作开始日期"
                :rules="{type: 'date', required: true, message: '操作开始日期不能为空', trigger: 'change'}">
                <el-date-picker
                  v-model="FormData.startTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="20" :offset="4">
              <el-form-item
                prop="endTime"
                label="操作开始日期"
                :rules="{type: 'date', required: true, message: '操作结束日期不能为空', trigger: 'change'}">
                <el-date-picker
                  v-model="FormData.endTime"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="20" :offset="4">
              <el-form-item
                prop="userId"
                label="初审操作人"
                :rules="{required: true, message: '请选择初审操作人', trigger: 'change'}">
                <el-select v-model="FormData.userId">
                  <el-option label="全部" value="0" v-if="staffData.length>0"></el-option>
                  <el-option v-for="($item, $index) in staffData"
                             :key="$index"
                             :label="$item.name"
                             :value="$item.userId"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer" style="text-align: center;">
          <el-button @click="handleClose">取 消</el-button>
          <el-button type="primary" @click="onSubmit()">确 定</el-button>
        </div>
      </div>
    </el-dialog>
  </div>

</template>

<script>
  import api_table from '@/api/table'
  import api_excel from '@/api/excel'
  import axios from 'axios'
  const qs = require('qs')
  export default {
    data () {
      return {
        outDataIsShowChild: false,
        staffData: [],
        FormData: {
          userId: '0',
          startTime: new Date(),
          endTime: new Date()
        }
      }
    },
    computed: {

    },
    props: {
      outDataIsShow: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      onSubmit () {
        this.$refs['FormData'].validate((valid) => {
          if (valid) {
            let timeDiff = this.FormData.endTime.getTime() - this.FormData.startTime.getTime()
            if (Math.floor(timeDiff/(24*3600*1000)) > 31) {
              swal('查询日期不能大于31天!')
            } else {
              this.submitForm()
            }
          } else {
            alert('error')
            return false
          }
        })
      },
      submitForm () {
        let params = {
          userId: this.FormData.userId,
          endTime: this.FormData.endTime.format('yyyy-MM-dd'),
          startTime: this.FormData.startTime.format('yyyy-MM-dd')
        }
        window.location.href = '/api/submit.php/shVisa/exportExcel?' + qs.stringify(params)
        this.handleClose()
      },
      handleClose () {
        this.$refs['FormData'].resetFields()
        this.outDataIsShowChild = false
      },
      get_data () {
        api_table.data_staffData().then((response)=>{
          if (response.data.status === 1) {
            this.staffData = response.data.list
          }
        })
      },
      // 验证所有表单字段
      validateForm () {
        this.$nextTick(function () {
          this.$refs['FormData'].validate()
        })
      },
    },
    watch: {
      outDataIsShow ($val) {
        this.$emit('update:outDataIsShow', $val)
        this.outDataIsShowChild = $val
        this.validateForm()
      },
      outDataIsShowChild () {
        if (!this.outDataIsShowChild) {
          this.$emit('update:outDataIsShow', this.outDataIsShowChild)
        } else {
          this.get_data()
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .popover-outData{
    .el-dialog{
      width: 500px;
      .el-form{
        .el-row{
          .el-col{
            .el-form-item{
              margin-bottom: 15px;
              .el-form-item__content{
                >div{
                  width: 200px;
                }
              }
              &.is-required{
                .el-form-item__label:before{
                  content: '' !important;
                  display: inline-block;
                  color: #ff4949;
                  margin-right: 4px;
                }
              }
              &.is-error{
                .el-input__inner, .el-textarea__inner{
                  border-color: #ff4949;
                  background: #ffeee5;
                }
              }
            }
          }
        }
      }
    }

  }
</style>
