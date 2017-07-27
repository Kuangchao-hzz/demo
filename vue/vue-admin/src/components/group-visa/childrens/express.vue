<template>
  <div class="view-shVisa-express">
    <div class="disponse-box">
      <el-row>
        <el-col :span="6">
          <el-input placeholder="请输入内容" v-model="searchFrom.searchContent">
            <el-select v-model="searchFrom.searchText" slot="append" placeholder="请选择">
              <el-option label="签证编号" value="1"></el-option>
              <el-option label="快递单号" value="2"></el-option>
              <el-option label="操作人" value="3"></el-option>
            </el-select>
          </el-input>
        </el-col>
        <el-col :span="16">
          <el-button type="primary"
                     @click="searchResult"
                     class="color-green">查询</el-button>
          <el-button type="primary"
                     class="color-green"
                     @click="selectCityIsShow = true">新增快递</el-button>
          <el-button type="primary"
                     @click="outDataIsShow = true">导出数据</el-button>
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
        <el-tab-pane label="全部快递列表" name="express">
          <tableExpress v-if="activeName === 'express'" :reset="expressTime"></tableExpress>
        </el-tab-pane>
        <el-tab-pane label="搜索结果" name="search">
          <tableSearch v-if="activeName === 'search'"
                       :searchRequestStatus="searchRequestStatus"
                       :content="searchFrom.searchContent"
                       :type="searchFrom.searchText"></tableSearch>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import tablePerson from './manage-express/table-person.vue'
  import tableExpress from './manage-express/table-express.vue'
  import tableSearch from './manage-express/table-search.vue'
  export default {
    data () {
      return {
        activeName: 'person',
        personTime: '',
        expressTime: '',
        searchRequestStatus: new Date(),
        searchFrom: {
          searchContent: '',
          searchText: '1'
        },
      }
    },
    methods: {
      handleClick(tab, event) {
        let self = this
        switch (tab.name) {
          case 'person':
            self.personTime = new Date(); break
          case 'express':
            self.expressTime = new Date(); break
        }
      },
      searchResult () {
        this.activeName = 'search'
        this.$nextTick(function () {
          this.searchRequestStatus = new Date()
        })
      },
    },
    components: {
      tablePerson,
      tableSearch,
      tableExpress
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .view-shVisa-express{
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
  }

</style>
