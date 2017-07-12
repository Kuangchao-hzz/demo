<template>
  <!-- 护照信息详情 -->
  <div class="serialNumber-details">
    <el-dialog
      title="签证预览&操作记录"
      size="large"
      :before-close="handleClose"
      :visible.sync="serialNumberDialogIsShowChild">
      <div class="serialNumber-details-box" v-if="serialNumberData">
        <div class="serialNumber-table">
          <el-row>
            <el-col :span="24">签证预览&操作记录</el-col>
          </el-row>
          <el-row v-if="serialNumberData.visaInfo"
                  type="type"
                  align="middle">
            <el-col :span="3">签证信息</el-col>
            <el-col :span="21">
              <span>编号: </span>
              <span>{{serialNumberData.visaInfo.id}}</span>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <span>签证类型: </span>
              <span>{{serialNumberData.visaInfo.visaType}}</span>
            </el-col>
          </el-row>
          <el-row v-if="serialNumberData.userSource"
                  type="type"
                  align="middle">
            <el-col :span="3">用户来源</el-col>
            <el-col :span="21">
              <span>来源: {{serialNumberData.userSource.source}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>昵称: {{serialNumberData.userSource.nickName}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>订单号: </span>
              <span v-html="serialNumberData.userSource.orderIds"></span>
            </el-col>
          </el-row>
          <el-row type="type"
                  align="middle">
            <el-col :span="3">联系信息</el-col>
            <el-col :span="21" v-if="serialNumberData.contact">
              <el-row>
                <span>手机: </span>
                <span v-for="$item in serialNumberData.contact.mobile">{{$item}}</span>
              </el-row>
              <el-row>
                <span>邮箱: </span>
                <span v-for="$item in serialNumberData.contact.email">{{$item}}</span>
              </el-row>
            </el-col>
          </el-row>
          <el-row type="type"
                  align="middle">
            <el-col :span="3">申请人</el-col>
            <el-col :span="21" v-if="serialNumberData.person">
              <el-row>
                <span>主申请人: {{serialNumberData.person.main.name}}&nbsp;{{serialNumberData.person.main.passportNo}}</span>
              </el-row>
              <el-row>
                <span>附属申请人: </span>
                <span v-for="$item in serialNumberData.person.follow">{{$item.name}}&nbsp;&nbsp;{{$item.passportNo}}</span>
              </el-row>
            </el-col>
          </el-row>
        </div>
        <el-table
          :data="serialNumberData.log"
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
            prop="content"
            align="center"
            label="操作内容"
            min-width="100">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            min-width="180"
            label="操作人">
          </el-table-column>
          <el-table-column
            prop="remark"
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
        <el-button class="color-green" @click="serialNumberDialogIsShowChild = false">关 闭</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  import api_table from '@/api/table'
  export default {
    data () {
      return {
        serialNumberDialogIsShowChild: false,
        serialNumberData: {}
      }
    },
    props: {
      serialNumberDialogIsShow: {
        type: Boolean,
        default: false
      }
    },
    mounted () {

    },
    methods: {
      handleClose () {
        this.serialNumberDialogIsShowChild = false
        this.serialNumberData = {}
      },
      get_data () {
        api_table.data_serialNumberDetails({
          id: this.$store.state.table.serialNumber.id
        }).then((response)=> {
          if (response.data.status !== 1) {
            swal(response.status)
          } else {
            this.serialNumberData = response.data.info
          }
        })
      }
    },
    watch: {
      serialNumberDialogIsShow ($val) {
        this.$emit('updata:serialNumberDialogIsShow', $val)
        this.serialNumberDialogIsShowChild = $val
      },
      serialNumberDialogIsShowChild () {
        if (!this.serialNumberDialogIsShowChild) {
          this.$emit('updata:serialNumberDialogIsShow', this.serialNumberDialogIsShowChild)
          this.$store.dispatch('handlerSerialNumber', false, '')
        } else {
          this.get_data()
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .serialNumber-details{
    .el-dialog{
      width: 900px;
      .el-dialog__header{
        display: none;
      }
      .serialNumber-details-box{
        .serialNumber-table{
          margin-bottom: 20px;
          border: 10px #999 solid;
          >.el-row{
            border-bottom: 1px #666 solid;
            .el-col-3{
              text-align: center;
              padding: 10px 0;
              font-weight: 600;
              font-size: 16px;
            }
            &:nth-child(1){
              padding: 20px 0;
              border-bottom: 2px #999 solid;
              .el-col{
                text-align: center;
                font-size: 24px;
                font-weight: 600;
                color: #676a6c;
              }
            }
            &:nth-child(4), &:nth-child(5){
              .el-col-3{
                padding: 28px 0;
              }
            }
            .el-col-21{
              padding: 11px;
              border-left: 1px #666 solid;
              word-wrap: break-word;
            }
            &:nth-child(4), &:nth-child(5){
              .el-col-21{
                padding: 0;
                >.el-row{
                  padding: 11px;
                  &:first-child{
                    border-bottom: 1px #666 solid;
                  }
                }
              }
            }
            &:last-child{
              border: none;
            }
          }
        }
        >.el-table{
          color: #767676 !important;
        }
      }
      .el-dialog__footer{
        text-align: center;
      }
    }

  }
</style>
