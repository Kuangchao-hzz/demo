<template>
  <div class="view-visa">
    <div class="disponse-box">
      <el-row>
        <el-col :span="6">
          <el-input placeholder="请输入内容" v-model="searchFrom.searchContent">
            <el-select v-model="searchFrom.searchText" @change="getValue" slot="append" placeholder="请选择">
              <el-option label="签证编号" value="1"></el-option>
              <el-option label="id" value="2"></el-option>
              <el-option label="订单号" value="3"></el-option>
              <el-option label="护照姓名" value="4"></el-option>
              <el-option label="护照号" value="5"></el-option>
              <el-option label="手机号" value="6"></el-option>
              <el-option label="快递单号" value="7"></el-option>
            </el-select>
          </el-input>
        </el-col>
        <el-col :span="16">
          <el-button type="primary">新增用户</el-button>
          <el-button type="primary">导出数据</el-button>
        </el-col>
      </el-row>
    </div>
    <el-table
      :data="tableData"
      height="730"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        align="center"
        class-name="color-details"
        width="80">
      </el-table-column>
      <el-table-column
        prop="orderSource.source"
        label="订单来源"
        align="center"
        width="100">
      </el-table-column>
      <el-table-column
        prop="main.name"
        align="center"
        label="申请人">
        <template scope="scope">
          <p>
            <span><strong>{{scope.row.main.name + ' '}}</strong></span>
            <span class="color-details">{{scope.row.main.passportNo}}</span></p>
          <p v-for="item in scope.row.follow">
            <span>
              <strong>{{ item.name }}</strong>
            </span>
            <span class="color-details"><small>{{ item.passportNo }}</small></span>
            <span class="color-danger"><small>{{ item.show ? item.show : ''}}</small></span>
          </p>
        </template>
      </el-table-column>
      <el-table-column
        prop="updateTime"
        align="center"
        label="送签日期">
      </el-table-column>
      <el-table-column
        prop="visaType.type"
        align="center"
        label="签证类型">
      </el-table-column>
      <el-table-column
        align="center"
        width="280"
        label="操作信息">
        <template scope="scope">
          <el-row type="flex" justify="center">
            <el-col :span="4" v-if="buttonIsShow(scope.row.button, 0)">
              <el-button class="color-dispose margin-center-5" type="info" size="mini">查看</el-button>
            </el-col>
            <el-col :span="4" v-if="buttonIsShow(scope.row.button, 1)">
              <el-button class="color-dispose margin-center-5" type="info" size="mini">编辑</el-button>
            </el-col>
            <el-col :span="4" v-if="buttonIsShow(scope.row.button, 2)">
              <el-button class="color-dispose margin-center-5" type="info" size="mini">复制</el-button>
            </el-col>
            <el-col :span="4" v-if="buttonIsShow(scope.row.button, 3)">
              <el-button type="warning" size="mini">不合格</el-button>
            </el-col>
            <el-col :span="4" v-if="buttonIsShow(scope.row.button, 4)">
              <el-button type="warning" size="mini">合格</el-button>
            </el-col>
            <el-col :span="4" v-if="buttonIsShow(scope.row.button, 5)">
              <el-button type="danger" size="mini">退办</el-button>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column
        prop="mobileInfo.mobile"
        align="center"
        label="联系方式">
      </el-table-column>
      <el-table-column
        prop="dataSource"
        align="center"
        label="材料来源">
      </el-table-column>
      <el-table-column
        prop="progressType"
        align="center"
        label="材料状态">
      </el-table-column>
      <el-table-column
        prop="userName"
        align="center"
        width="100"
        label="最后操作">
      </el-table-column>
    </el-table>
    <div class="pagination-block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import api from '@/api/index'
  export default {
    data () {
      return {
        tableData: [],
        searchFrom: {
          searchContent: '',
          searchText: '签证编号',
          searchType: [{
            value: '1',
            label: '签证编号'
          }, {
            value: '2',
            label: 'id'
          }, {
            value: '3',
            label: '护照号'
          }, {
            value: '4',
            label: '手机号'
          }, {
            value: '5',
            label: '姓名'
          }]
        },
        currentPage4: 4
      }
    },
    computed: {

    },
    mounted () {
      var self = this
      api.get_HomeListData().then(function (renponse) {
        self.tableData = renponse.data.list
      })
    },
    methods: {
      buttonIsShow ($button, $index) {
        let butArr = $button.split(',')
        return butArr[$index] == 1
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      getValue ($val) {
        console.log($val)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .view-visa{
    .pagination-block{
      margin-top: 20px;
      text-align: right;
      .el-pagination__total{
        color: #fff !important;
      }
      .el-pagination__jump{
        color: #fff;
      }
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
  }
</style>
