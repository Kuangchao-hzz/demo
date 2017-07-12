<template>
  <!-- 护照信息详情 -->
  <div class="passportInfo-details">
    <el-dialog
      title="护照信息详情"
      size="large"
      :before-close="handleClose"
      :visible.sync="passportDialogIsShowChild">
      <div class="passportInfo-details-box" v-if="passportData">
        <el-row :gutter="20" type="flex">
          <el-col :span="6">
            <div class="avatar-pic">
              <img :src="handlerAvatar">
            </div>
          </el-col>
          <el-col :span="18">
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input :value="passportData.passportNo" disabled>
                  <template slot="prepend">护照号</template>
                </el-input>
              </el-col>
              <el-col :span="12">
                <el-input :value="passportData.name" disabled>
                  <template slot="prepend">姓名</template>
                </el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input :value="passportData.familyName" disabled>
                  <template slot="prepend">英文姓</template>
                </el-input>
              </el-col>
              <el-col :span="12">
                <el-input :value="passportData.firstName" disabled>
                  <template slot="prepend">英文名</template>
                </el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input :value="passportData.sex" disabled>
                  <template slot="prepend">性别</template>
                </el-input>
              </el-col>
              <el-col :span="12">
                <el-input :value="passportData.birthDay" disabled>
                  <template slot="prepend">出生日期</template>
                </el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input :value="passportData.issueDay" disabled>
                  <template slot="prepend">签发日期</template>
                </el-input>
              </el-col>
              <el-col :span="12">
                <el-input :value="passportData.effectiveDate" disabled>
                  <template slot="prepend">有效期</template>
                </el-input>
              </el-col>
            </el-row>
            <el-row :gutter="20">
              <el-col :span="12">
                <el-input :value="passportData.homePlace" disabled>
                  <template slot="prepend">出生地</template>
                </el-input>
              </el-col>
              <el-col :span="12">
                <el-input :value="passportData.issuePlace" disabled>
                  <template slot="prepend">签发地</template>
                </el-input>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
        <el-table
          :data="passportData.log"
          :height="300"
          border
          style="width: 100%">
          <el-table-column
            prop="id"
            align="center"
            label="序号"
            min-width="80">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="操作人"
            min-width="100">
          </el-table-column>
          <el-table-column
            prop="description"
            align="center"
            min-width="180"
            label="操作备注">
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            min-width="180"
            label="操作时间">
          </el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button class="color-green" @click="passportDialogIsShowChild = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import api_table from '@/api/table'
  export default {
    data () {
      return {
        passportDialogIsShowChild: false,
        passportData: {}
      }
    },
    props: {
      passportDialogIsShow: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      handlerAvatar () {
        if (this.passportData.passportNo) {
          return 'http://julong.daoyoutalk.com/public/avatar/'+this.passportData.passportNo+'.jpg'
        }
      }
    },
    mounted () {

    },
    methods: {
      handleClose () {
        this.passportDialogIsShowChild = false
        this.passportData = {}
      },
      get_data () {
        api_table.data_passportInfoDetails({
          passportNo: this.$store.state.table.passportInfo.passportNo
        }).then((response)=> {
          if (response.data.status !== 1) {
            swal(response.status)
          } else {
            this.passportData = response.data.passport
          }
        })
      }
    },
    watch: {
      passportDialogIsShow ($val) {
        this.$emit('updata:passportDialogIsShow', $val)
        this.passportDialogIsShowChild = $val
      },
      passportDialogIsShowChild () {
        if (!this.passportDialogIsShowChild) {
          this.$emit('updata:passportDialogIsShow', this.passportDialogIsShowChild)
          this.$store.dispatch('handlerPassportInfo', false, '')
        } else {
          this.get_data()
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .passportInfo-details {
    .el-dialog__wrapper {
      .el-dialog {
        width: 800px;
        .el-dialog__header {
          span {
            font-size: 16px;
            color: #676a6c;
          }
        }
        .passportInfo-details-box {
          >.el-row {
            .avatar-pic {
              width: 100%;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .el-col-18 {
              > .el-row {
                padding-bottom: 10px;
              }
            }
          }
          >.el-table, thead div{
            color: #707070 !important;
          }
        }
        .el-dialog__footer{
          text-align: center;
        }
      }
    }
  }
</style>
