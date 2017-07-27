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
              prop="id"
              label="序号"
              align="center"
              fixed
              min-width="40">
            </el-table-column>
            <el-table-column
              prop="name"
              label="姓名"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="role"
              label="角色"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="count.kuaidi"
              label="出签快递"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="count.ziqv"
              label="出签自取"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="count.juqian"
              label="拒签"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="count.zhongzhi"
              label="终止/取下"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="count.count"
              label="合计"
              align="center"
              min-width="80">
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
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
        api_table.data_afterTableCountSearch({
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
