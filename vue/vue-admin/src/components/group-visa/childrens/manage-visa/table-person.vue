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
        @click="showPassport(scope.row.id)"
        min-width="80">
        <template scope="scope">
          <p @click="serialNumberIsShow(scope.row.id)">{{scope.row.id}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="orderSource.source"
        label="订单来源"
        align="center"
        min-width="100">
      </el-table-column>
      <el-table-column
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
        align="center"
        min-width="180"
        label="签证类型">
        <template scope="scope">
          <el-input v-if="scope.row.sendTime !== ''" size="small" v-model="waitHandleRow.list[scope.$index].visaType.type"></el-input>
          <span v-if="scope.row.sendTime === ''">{{scope.row.visaType.type}}</span>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        min-width="280"
        label="操作信息">
          <template scope="scope">
            <el-row type="flex" justify="center">
              <el-button v-if="buttonIsShow(scope.row.button, 0)" class="color-dispose" type="info" size="mini">查看</el-button>
              <el-button v-if="buttonIsShow(scope.row.button, 1)" class="color-dispose" type="info" size="mini" @click="editRow(scope.row)">编辑</el-button>
              <el-button v-if="scope.row.sendTime === 1" class="color-dispose" type="info" size="mini" @click="matchRow(scope.row)">取消</el-button>
              <el-button v-if="buttonIsShow(scope.row.button, 2)" class="color-dispose" type="info" size="mini">复制</el-button>
              <el-button v-if="buttonIsShow(scope.row.button, 3)"
                         type="warning"
                         size="mini"
                         @click="unqualifiedIsShow(scope.row.id, scope.row.main.name)">不合格</el-button>
              <el-button v-if="buttonIsShow(scope.row.button, 4)" type="warning" size="mini" @click="qualifiedIsShow(scope.row)">合格</el-button>
              <el-button v-if="buttonIsShow(scope.row.button, 5)" type="danger" size="mini">退办</el-button>
            </el-row>
          </template>
      </el-table-column>
      <el-table-column
        prop="mobileInfo.mobile"
        align="center"
        min-width="180"
        label="联系方式">
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
  export default {
    data () {
      return {
        waitHandleRow: [],
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
    mounted () {
      this.getTableData()
    },
    props: {
      reset: [Object, String, Date]
    },
    methods: {
      editRow ($row) {
        this.tableData.list.forEach(($item, $index) => {
          $item.sendTime = ''
        })
        this.matchRow($row)
        $row.sendTime = 1
      },
      matchRow ($row) {
        $row.sendTime = ''
        let copyData = JSON.stringify(this.tableData)
        this.waitHandleRow = JSON.parse(copyData)
      },
      getTableData ($page) {
        var self = this
        self.loading = true
        api_table.data_visaTablePerson({
          page: $page || 1
        }).then((response) => {
          setTimeout(function () {
            self.loading = false
            if (response.data.status === 1) {
              self.$nextTick(function () {
                self.tableData = response.data
                let copyData = JSON.stringify(self.tableData)
                self.waitHandleRow = JSON.parse(copyData)
                self.tableDataNum = response.data.list.length
              })
            }else {
              self.swal(response.data.msg)
            }
          })

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
      },
      unqualifiedIsShow ($visaId, $name) {
        this.$store.dispatch('handlerUnqualified', {
          type: true,
          visaId: $visaId,
          name: $name
        })
      },
      qualifiedIsShow ($row) {
        this.$store.dispatch('handlerQualified', {
          type: true,
          id: $row.id,
          name: $row.main.name
        })
      },
    },
    watch: {
      reset () {
        this.getTableData()
      },
      waitHandleRow () {
        console.log(this.waitHandleRow)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
