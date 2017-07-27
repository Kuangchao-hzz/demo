<template>
  <div class="view-shTemplate-daizhuangCount">
    <div class="disponse-box">
      <el-form ref="searchFrom" :model="searchFrom">
        <el-row :gutter="10">
          <el-col :span="4">
            <el-date-picker
              v-model="searchFrom.sendTime"
              type="date"
              placeholder="选择起始日期" style="width: 100%;">
            </el-date-picker>
          </el-col>
          <el-col :span="3">
            <el-form-item
              label="送签方"
              class="select-input">
              <el-select v-model="searchFrom.qualification" placeholder="请选择送签方">
                <el-option v-for="($item, $index) in qualificationData"
                           :key="$index"
                           :value="$item.value"
                           :label="$item.label">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="2">
            <el-form-item
              label="批次"
              class="select-input">
              <el-select v-model="searchFrom.pici" placeholder="请选择批次">
                <el-option v-for="($item, $index) in piciData"
                           :key="$index"
                           :value="$item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="3">
            <el-button type="primary"
                       @click="searchResult"
                       class="color-green">查询</el-button>
            <el-button type="primary">导出报表</el-button>
          </el-col>
        </el-row>
      </el-form>
    </div>
    <div class="tabs-box">
      <el-tabs v-model="activeName"
               type="border-card">
        <el-tab-pane label="装袋统计列表" name="count">
          <el-table
            v-loading.body="loading"
            :data="tableData.list"
            :height="tableHeight"
            :max-height="tableHeight"
            border
            style="width: 100%">
            <el-table-column
              prop="main"
              label="主申请人"
              align="center"
              fixed
              min-width="40">
            </el-table-column>
            <el-table-column
              prop="personNum"
              label="人数"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="visaType"
              label="签证类型"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="tripTime"
              label="出行时间"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="out"
              label="外领区"
              align="center"
              min-width="80">
            </el-table-column>
            <el-table-column
              prop="from"
              label="来源"
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
        piciData: [{
          value: 1
        }, {
          value: 2
        },{
          value: 3
        },{
          value: 4
        },],
        searchFrom: {
          sendTime: new Date(),
          qualification: '众信',
          pici: '1',
        },
      }
    },
    computed: {
      tableHeight () {
        return this.$store.getters.tableHeight + 50
      },
      qualificationData () {
        return this.$store.state.options.qualification
      }
    },
    methods: {
      searchResult () {
        let self = this
        self.loading = true
        api_table.data_daizhuangCountTableSearch({
          sendTime:self.searchFrom.sendTime.format('yyyy-MM-dd'),
          qualification: self.searchFrom.qualification,
          pici: self.searchFrom.pici
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
  .view-shTemplate-count{
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
