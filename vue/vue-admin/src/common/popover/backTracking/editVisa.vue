<template>
  <div class="views-editVisa">
    <el-dialog
      title="编辑护照"
      :visible.sync="dialogVisible"
      size="tiny"
      :before-close="handleClose">
      <el-tabs v-model="activeName" type="card">
        <el-tab-pane v-for="($item, $index) in visaData.list"
                     :key="$index"
                     :label="$item.name"
                     :name="$item.id">
          <el-row :gutter="20" type="flex">
            <el-col :span="6">
              <div class="avatar-pic" style="width: 175px; height: 222px;">
                <img :src="handlerAvatar($item.passportNo)" style="width: 100%; height: 100%;">
              </div>
            </el-col>
            <el-col :span="18">
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-input :value="$item.passportNo" disabled>
                    <template slot="prepend">护照号</template>
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input :value="$item.name">
                    <template slot="prepend">姓名</template>
                  </el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-input :value="$item.familyName">
                    <template slot="prepend">英文姓</template>
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input :value="$item.firstName">
                    <template slot="prepend">英文名</template>
                  </el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-input :value="$item.sex">
                    <template slot="prepend">性别</template>
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input :value="$item.birthDay">
                    <template slot="prepend">出生日期</template>
                  </el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-input :value="$item.issueDay">
                    <template slot="prepend">签发日期</template>
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input :value="$item.effectiveDate">
                    <template slot="prepend">有效期</template>
                  </el-input>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12">
                  <el-input :value="$item.homePlace">
                    <template slot="prepend">出生地</template>
                  </el-input>
                </el-col>
                <el-col :span="12">
                  <el-input :value="$item.issuePlace">
                    <template slot="prepend">签发地</template>
                  </el-input>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <div slot="footer" class="dialog-footer">
        <el-button @click="handleClose()">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  import api_table from '@/api/table'
  export default {
    data() {
      return {
        visaData: {},
        activeName: 'first',
        dialogVisible: false
      }
    },
    computed: {
      editVisaIsShow () {
        return this.$store.state.table.backTrackingEditVisa.type
      }
    },
    methods: {
      handleClose(done) {
        this.dialogVisible = false
        this.visaData = {}
        this.$store.dispatch('handlerBackTrackingEditVisa', {
          type: false,
          id: ''
        })
      },
      get_data () {
        api_table.data_materialGetPassportByVisaId({
          id: this.$store.state.table.backTrackingEditVisa.id
        }).then((response) => {
          if (response.data.status !== 1) {
            swal(response.data.msg)
          } else {
            this.visaData = response.data
          }
        })
      },
      handlerAvatar ($passportNo) {
        if ($passportNo) {
          return 'http://julong.daoyoutalk.com/public/avatar/' + $passportNo + '.jpg'
        }
      }
    },
    watch: {
      editVisaIsShow () {
        if (this.editVisaIsShow) {
          this.get_data()
          this.$nextTick(() =>{
            this.dialogVisible = this.editVisaIsShow
          })
        }
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .views-editVisa{
    .el-dialog{
      width: 800px;
      .el-tab-pane{
        .el-input-group{
          margin-bottom: 15px;
        }
      }
    }
  }
</style>
