<template>
  <div>
    <el-table
      v-loading.body="loading"
      :data="tableData.list"
      :height="tableHeight"
      :max-height="tableHeight"
      border
      style="width: 100%"
      :data-time="reset">
      <el-table-column
        label="编号"
        align="center"
        fixed
        class-name="color-details"
        width="80">
        <template scope="scope">
          <p @click="serialNumberIsShow(scope.row.id)">{{scope.row.id}}</p>
        </template>
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
        min-width="180"
        label="申请人">
        <template scope="scope">
          <p>
            <span>{{scope.row.main.name + ' '}}</span>
            <span class="color-details" @click="showPassport(scope.row.main.passportNo)">{{scope.row.main.passportNo}}</span></p>
          <p v-for="item in scope.row.follow">
            <span><small>{{ item.name }}</small></span>
            <span class="color-details" @click="showPassport(item.passportNo)"><small>{{ item.passportNo }}</small></span>
            <span class="color-danger"><small>{{ item.show ? item.show : ''}}</small></span>
          </p>
        </template>
      </el-table-column>
      <el-table-column
        prop="updateTime"
        align="center"
        min-width="180"
        label="送签日期">
      </el-table-column>
      <el-table-column
        prop="visaType.type"
        align="center"
        min-width="180"
        label="签证类型">
      </el-table-column>
      <el-table-column
        align="center"
        min-width="250"
        label="操作信息">
        <template scope="scope">
          <el-row type="flex" justify="center">
            <el-button :disabled="!buttonIsShow(scope.row.button, 0)" class="color-dispose" type="info" size="mini">查看签证信息</el-button>
            <el-button v-if="buttonIsShow(scope.row.button, 1)" class="color-dispose" type="info" size="mini">补录</el-button>
            <el-button v-if="buttonIsShow(scope.row.button, 2)" class="color-dispose" type="info" size="mini">查看</el-button>
            <el-button :disabled="!buttonIsShow(scope.row.button, 3)" class="color-dispose" type="info" size="mini">生成</el-button>
            <el-button :disabled="!buttonIsShow(scope.row.button, 4)" class="color-dispose" type="info" size="mini">日审</el-button>
            <el-button :disabled="!buttonIsShow(scope.row.button, 5)" class="color-dispose" type="info" size="mini">取消日审</el-button>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        width="180"
        label="联系方式">
        <template scope="scope">
          <p>{{scope.row.mobileInfo.mobile}}</p>
          <p>{{scope.row.mobileInfo.exMobile}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="dataSource"
        align="center"
        min-width="180"
        label="材料来源">
      </el-table-column>
      <el-table-column
        prop="progressType"
        align="center"
        min-width="180"
        label="材料状态">
      </el-table-column>
      <el-table-column
        prop="userName"
        align="center"
        width="100"
        fixed="right"
        label="最后操作">
      </el-table-column>
    </el-table>
    <div class="pagination-block">
      <el-pagination
        @current-change="getTableData"
        :current-page="1"
        :page-sizes="[20]"
        :page-size="20"
        layout="total, sizes, prev, pager, next, jumper"
        :total="Number(tableData.num)">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import api_table from '@/api/table'
  /*
  * ====================================================
  *
  * searchRequestStatus:   搜索状态字段, 组件监听该字段触发搜索请求
  *
  * ====================================================
  * */
  export default {
    data () {
      return {
        tableData: [],
        tableDataNum: null,
        loading: false
      }
    },
    computed: {
      tableHeight () {
        return this.$store.getters.tableHeight
      }
    },
    props: {
      reset: [Object, String, Date],
      searchRequestStatus: {
        type: [Object, Date],
        default: new Date()
      },
      content: [String, Number],
      type: [String, Number]
    },
    mounted () {

    },
    methods: {
      getTableData ($page) {
        let $params = {
          page: $page || 1,
          type: this.type || '',
          content: this.content || '',
        }
        self.loading = true
        api_table.data_visaTableSearch($params).then((response) => {
          self.loading = false
          if (response.data.status === 1) {
            this.tableData = response.data
            this.tableDataNum = response.data.list.length
          } else {
            self.swal(response.data.msg)
          }
        })
      },
      buttonIsShow ($button, $index) {
        let butArr = $button.split(',')
        return butArr[$index] == 1
      },
      showPassport ($passportNo) {
        this.$store.dispatch('handlerPassportInfo', {
          type: true,
          passportNo: $passportNo
        })
      },
      serialNumberIsShow ($id) {
        this.$store.dispatch('handlerSerialNumber', {
          type: true,
          id: $id
        })
      }
    },
    watch: {
      reset () {
        this.getTableData()
      },
      searchRequestStatus () {
        this.getTableData()
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
