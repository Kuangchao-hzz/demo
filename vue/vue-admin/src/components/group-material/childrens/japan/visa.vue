<template>
  <div class="view-visa">
    <div class="disponse-box">
      <el-row>
        <el-col :span="6">
          <el-input placeholder="请输入内容" v-model="searchFrom.searchContent">
            <el-select v-model="searchFrom.searchText" @change="getValue" slot="append" placeholder="请选择">
              <el-option label="签证编号" value="7"></el-option>
              <el-option label="id" value="1"></el-option>
              <el-option label="订单号" value="2"></el-option>
              <el-option label="护照姓名" value="3"></el-option>
              <el-option label="护照号" value="4"></el-option>
              <el-option label="手机号" value="5"></el-option>
              <el-option label="快递单号" value="6"></el-option>
            </el-select>
          </el-input>
        </el-col>
        <el-col :span="16">
          <el-button type="primary"
                     class="color-green"
                     @click="searchResult">查询</el-button>
          <el-button type="primary">下载招保</el-button>
          <el-button type="primary">日审提交</el-button>
          <el-button type="primary">生成受理单</el-button>
        </el-col>
      </el-row>
    </div>
    <div class="tabs-box">
      <el-tabs v-model="activeName"
               @tab-click="handleClick"
               type="border-card">
        <el-tab-pane label="个人操作列表" name="person">
          <tablePerson v-if="activeName === 'person'" :reset="personTime"></tablePerson>
        </el-tab-pane>
        <el-tab-pane label="待补录签证" name="backTracking">
          <tableBackTracking v-if="activeName === 'backTracking'" :reset="backTrackingTime"></tableBackTracking>
        </el-tab-pane>
        <el-tab-pane label="待日审签证" name="audit">
          <tableAudit v-if="activeName === 'audit'" :reset="auditTime"></tableAudit>
        </el-tab-pane>
        <el-tab-pane label="搜索结果" name="search">
          <tableSearch v-if="activeName === 'search'"
                       :searchRequestStatus="searchRequestStatus"
                       :content="searchFrom.searchContent"
                       :type="searchFrom.searchText"></tableSearch>
        </el-tab-pane>
      </el-tabs>
    </div>
    <passportInfo :passportDialogIsShow.sync="passportInfo"></passportInfo>
    <serialNumber :serialNumberDialogIsShow.sync="serialNumber"></serialNumber>
    <unqualified :unqualifiedIsShow.sync="unqualified"></unqualified>
    <backTracking :backTrackingIsShow="backTrackingIsShow"></backTracking>
  </div>
</template>

<script>
  import tablePerson from './manage-visa/table-person.vue'
  import tableBackTracking from './manage-visa/table-backTracking.vue'
  import tableAudit from './manage-visa/table-audit.vue'
  import tableSearch from './manage-visa/table-search.vue'
  import passportInfo from '@/common/popover/passportInfo'
  import serialNumber from '@/common/popover/serialNumber'
  import unqualified from '@/common/popover/unqualified'
  import backTracking from '@/common/popover/backTracking/backTracking'
  export default {
    data () {
      return {
        activeName: 'person',
        dialogPassportIsShow: false,
        backTrackingIsShow: false,
        searchRequestStatus: new Date(),
        searchFrom: {
          searchContent: '',
          searchText: '7'
        },
        personTime: '',
        backTrackingTime: '',
        auditTime: ''
      }
    },
    computed: {
      passportInfo () {
        return this.$store.state.table.passportInfo.type
      },
      serialNumber () {
        return this.$store.state.table.serialNumber.type
      },
      unqualified () {
        return this.$store.state.table.unqualified.type
      }
    },
    methods: {
      handleClick(tab, event) {
        let self = this
        switch (tab.name) {
          case 'personTime':
            self.personTime = new Date(); break
          case 'backTrackingTime':
            self.backTrackingTime = new Date(); break
          case 'auditTime':
            self.auditTime = new Date(); break
        }
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      searchResult () {
        this.activeName = 'search'
        this.$nextTick(function () {
          this.searchRequestStatus = new Date()
        })
      },
      getValue ($val) {
        console.log($val)
      }
    },
    components: {
      serialNumber,
      passportInfo,
      unqualified,
      tablePerson,
      backTracking,
      tableBackTracking,
      tableAudit,
      tableSearch
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .view-visa{
    .pagination-block{
      margin-top: 20px;
      text-align: right;
    }
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
