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
          <el-button type="primary" @click="searchResult" class="color-green">查询</el-button>
          <el-button type="primary" class="color-green" @click="dialogIsShow = true">新增用户</el-button>
          <el-button type="primary" class="color-green" @click="outData = true">导出数据</el-button>
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
        <el-tab-pane label="待初审签证" name="wait">
          <tableWait v-if="activeName === 'wait'" :reset="waitTime"></tableWait>
        </el-tab-pane>
        <el-tab-pane label="进行中的签证" name="doing">
          <tableDoing v-if="activeName === 'doing'" :reset="doingTime"></tableDoing>
        </el-tab-pane>
        <el-tab-pane label="历史签证" name="finish">
          <tableFinish v-if="activeName === 'finish'" :reset="finishTime"></tableFinish>
        </el-tab-pane>
        <el-tab-pane label="搜索结果" name="search">
          <tableSearch v-if="activeName === 'search'"
                       :searchRequestStatus="searchRequestStatus"
                       :content="searchFrom.searchContent"
                       :type="searchFrom.searchText"></tableSearch>
        </el-tab-pane>
      </el-tabs>
    </div>
    <form-add-user :dialogIsShow.sync="dialogIsShow"></form-add-user>
    <passportInfo :passportDialogIsShow.sync="passportInfo"></passportInfo>
    <serialNumber :serialNumberDialogIsShow.sync="serialNumber"></serialNumber>
    <unqualified :unqualifiedIsShow.sync="unqualified"></unqualified>
    <el-dialog title="导出数据"
               :visible.sync="outData">
    </el-dialog>
  </div>
</template>

<script>
  import tableDoing from './manage-visa/table-doing.vue'
  import tableFinish from './manage-visa/table-finish.vue'
  import tablePerson from './manage-visa/table-person.vue'
  import tableWait from './manage-visa/table-wait.vue'
  import tableSearch from './manage-visa/table-search.vue'
  import formAddUser from '@/common/popover/adduser'
  import passportInfo from '@/common/popover/passportInfo'
  import serialNumber from '@/common/popover/serialNumber'
  import unqualified from '@/common/popover/unqualified'
  /*
  * ====================================================
  *
  * activeName:                 默认显示的表格
  * dialogIsShow:               新增用户dialog显示状态
  * dialogPassportIsShow:       护照详情dialog显示状态
  * dialogDisposeIsShow:        护照操作详情dialog显示状态
  *
  *  ====================================================
  * */
  export default {
    data () {
      return {
        activeName: 'person',
        dialogIsShow: false,
        dialogPassportIsShow: false,
        outData: false,
        searchRequestStatus: new Date(),
        searchFrom: {
          searchContent: '',
          searchText: '7'
        },
        personTime: '',
        doingTime: '',
        finishTime: '',
        waitTime: ''
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
          case 'doing':
            self.doingTime = new Date(); break
          case 'wait':
            self.waitTime = new Date(); break
          case 'finish':
            self.finishTime = new Date(); break
          case 'person':
            self.personTime = new Date(); break
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
      formAddUser,
      serialNumber,
      passportInfo,
      unqualified,
      tableFinish,
      tablePerson,
      tableWait,
      tableSearch,
      tableDoing
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
    .el-dialog{
      width: 1000px;
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
