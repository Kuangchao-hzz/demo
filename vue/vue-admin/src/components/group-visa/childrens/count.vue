<template>
  <div class="view-shVisa-count">
    <div class="disponse-box">
      <el-row>
        <el-col :span="3">
          <el-date-picker
            v-model="searchFrom.startTime"
            type="date"
            placeholder="选择起始日期" style="width: 100%;">
          </el-date-picker>
        </el-col>
        <el-col :span="1" style="color: #fff;line-height: 36px;text-align: center;width: 2.26667%">
          至
        </el-col>
        <el-col :span="3">
          <el-date-picker
            v-model="searchFrom.endTime"
            type="date"
            placeholder="选择结束日期" style="width: 100%;">
          </el-date-picker>
        </el-col>
        <el-col :span="16">
          <el-button type="primary"
                     @click="searchResult"
                     class="color-green">查询</el-button>
          <el-button type="primary">导出报表</el-button>
          <el-button type="primary">导出快递列表</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="tabs-box">
      <el-tabs v-model="activeName"
               type="border-card">
        <el-tab-pane label="业绩统计列表" name="count">
          <el-table
            v-loading.body="loading"
            :data="tableData.list"
            :height="tableHeight"
            :max-height="tableHeight"
            border
            style="width: 100%">
            <el-table-column
              prop="info.id"
              label="员工编号"
              align="center"
              fixed
              min-width="40">
            </el-table-column>
            <el-table-column
              prop="info.name"
              label="员工姓名"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              align="center"
              min-width="180"
              label="日本">
              <template scope="scope">
                <el-row :gutter="20">
                  <el-col :span="10"><span>收件统计:</span></el-col>
                  <el-col :span="14"><span>共{{scope.row.japan.receive.total}}套  前台{{scope.row.japan.receive.qian}}份  快递{{scope.row.japan.receive.kuai}}份</span></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="10"><span>初审合格统计:</span></el-col>
                  <el-col :span="14"><span>共{{scope.row.japan.receive.total}}套  前台{{scope.row.japan.receive.qian}}份  快递{{scope.row.japan.receive.kuai}}份</span></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="10"><span>退办统计:</span></el-col>
                  <el-col :span="14"><span>共{{scope.row.japan.sendBackNum.total}}套  {{scope.row.japan.sendBackNum.personNum}}人</span></el-col>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              min-width="180"
              label="东南亚">
              <template scope="scope">
                <el-row :gutter="20">
                  <el-col :span="10"><span>收件统计:</span></el-col>
                  <el-col :span="14"><span>共{{scope.row.dongnanya.receive.total}}套  前台{{scope.row.dongnanya.receive.qian}}份  快递{{scope.row.dongnanya.receive.kuai}}份</span></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="10"><span>初审合格统计:</span></el-col>
                  <el-col :span="14"><span>共{{scope.row.dongnanya.receive.total}}套  前台{{scope.row.dongnanya.receive.qian}}份  快递{{scope.row.dongnanya.receive.kuai}}份</span></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="10"><span>退办统计:</span></el-col>
                  <el-col :span="14"><span>共{{scope.row.dongnanya.sendBackNum.total}}套  {{scope.row.dongnanya.sendBackNum.personNum}}人</span></el-col>
                </el-row>
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              min-width="180"
              label="欧美">
              <template scope="scope">
                <el-row :gutter="20">
                  <el-col :span="10"><span>收件统计:</span></el-col>
                  <el-col :span="14"><span>共{{scope.row.oumei.receive.total}}套  前台{{scope.row.oumei.receive.qian}}份  快递{{scope.row.oumei.receive.kuai}}份</span></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="10"><span>初审合格统计:</span></el-col>
                  <el-col :span="14"><span>共{{scope.row.oumei.receive.total}}套  前台{{scope.row.oumei.receive.qian}}份  快递{{scope.row.oumei.receive.kuai}}份</span></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="10"><span>退办统计:</span></el-col>
                  <el-col :span="14"><span>共{{scope.row.oumei.sendBackNum.total}}套  {{scope.row.oumei.sendBackNum.personNum}}人</span></el-col>
                </el-row>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  /*
  * ====================================================
  *
  * activeName:                 默认显示的表格
  * dialogPassportIsShow:       护照详情dialog显示状态
  * dialogDisposeIsShow:        护照操作详情dialog显示状态
  *
  *  ====================================================
  * */
  import api_table from '@/api/table'
  export default {
    data () {
      return {
        activeName: 'count',
        tableData: [],
        loading: false,
        searchFrom: {
          startTime: new Date(),
          endTime: new Date()
        },
      }
    },
    computed: {
      tableHeight () {
        return this.$store.getters.tableHeight + 50
      }
    },
    methods: {
      searchResult () {
        let self = this
        self.loading = true
        api_table.data_visaCountSearch({
          startTime:self.searchFrom.startTime.format('yyyy-MM-dd'),
          endTime: self.searchFrom.endTime.format('yyyy-MM-dd')
        }).then((response) => {
          self.loading = false
          if (response.data.status === 1) {
            this.tableData = response.data
          } else {
            self.swal(response.data.msg)
          }
        })
      }
    },
    watch: {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .view-shVisa-count{
    .disponse-box{
      margin-bottom: 20px;
      .el-button{
        margin-left: 0;
        &:nth-of-type(1){
          margin-left: 5px;
        }
      }
      .el-select .el-input {
        width: 105px;
      }
    }
    .el-table{
      .el-row{
        .el-col-10{
          text-align: right;
          color: #000;
        }
        .el-col-14{
          text-align: left;
          color: #999;
        }
      }
    }
    /* BUG
    *
    * description: 在ie和或火狐下 td.gutter 会多出1px 导致表格底部出现滚动条 引起表格错位
    * handler: 重置为0
    * */
    .el-table--fit td.gutter, .el-table--fit th.gutter {
      border-right-width: 0px;
    }
  }
</style>
