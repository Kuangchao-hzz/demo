<template>
  <div class="view-shTemplate-count">
    <div class="disponse-box">
      <el-row>
        <el-col :span="6">
          <el-input v-model="searchFrom.content"
                    placeholder="请输入查询内容">
          </el-input>
        </el-col>
        <el-col :span="16">
          <el-button type="primary"
                     @click="searchResult"
                     class="color-green">查询</el-button>
          <el-button type="primary">新增航班</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="tabs-box">
      <el-tabs v-model="activeName"
               @tab-click="handleClick"
               type="border-card">
        <el-tab-pane label="启动中" name="open">
            <tableOpen v-if="activeName === 'open'" :reset="openTime"></tableOpen>
        </el-tab-pane>
        <el-tab-pane label="禁用中" name="close">
          <tableClose v-if="activeName === 'close'" :reset="closeTime"></tableClose>
        </el-tab-pane>
        <el-tab-pane label="搜索结果" name="search">
          <tableSearch v-if="activeName === 'search'"></tableSearch>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import api_table from '@/api/table'
  import tableOpen from './manage-fight/table-open'
  import tableClose from './manage-fight/table-close'
  import tableSearch from './manage-fight/table-search'
  export default {
    data () {
      return {
        activeName: 'open',
        tableData: [],
        loading: false,
        searchFrom: {
          content: ''
        },
        openTime: '',
        closeTime: ''
      }
    },
    computed: {
      tableHeight () {
        return this.$store.getters.tableHeight + 50
      }
    },
    methods: {
      handleClick(tab, event) {
        let self = this
        switch (tab.name) {
          case 'open':
            self.openTime = new Date(); break
          case 'close':
            self.closeTime = new Date(); break
        }
      },
      searchResult () {
        let self = this
        self.loading = true
        api_table.data_materialCountSearch({
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
    components: {
      tableOpen,
      tableClose,
      tableSearch
    },
    watch: {

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .view-shTemplate-fight{
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
