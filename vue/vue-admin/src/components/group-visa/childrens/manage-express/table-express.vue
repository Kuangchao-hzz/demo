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
        prop="userName"
        label="操作人"
        align="center"
        fixed
        min-width="80">
      </el-table-column>
      <el-table-column
        prop="company"
        label="快递公司"
        align="center"
        min-width="100">
      </el-table-column>
      <el-table-column
        prop="expressNo"
        align="center"
        min-width="180"
        label="快递单号">
      </el-table-column>
      <el-table-column
        prop="submitTime"
        align="center"
        min-width="180"
        label="操作时间">
      </el-table-column>
      <el-table-column
        align="center"
        min-width="180"
        label="绑定签证编号">
        <template scope="scope">
          <p v-html="scope.row.visaId"></p>
        </template>
      </el-table-column>
      <el-table-column
        prop="remark"
        align="center"
        min-width="180"
        label="备注">
      </el-table-column>
      <el-table-column
        align="center"
        min-width="180"
        label="状态">
        <template scope="scope">
          <p v-html="scope.row.state"></p>
        </template>
      </el-table-column>
      <el-table-column
        align="center"
        min-width="280"
        label="操作">
        <template scope="scope">
          <el-row type="flex" justify="center">
            <el-col :span="4">
              <el-button class="color-dispose" type="info" size="mini" :disabled="!buttonIsShow(scope.row.button, 0)">删除</el-button>
            </el-col>
          </el-row>
        </template>
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
      getTableData ($page) {
        var self = this
        self.loading = true
        api_table.data_expressTableAll({
          page: $page || 1
        }).then((response) => {
          self.loading = false
          if (response.data.status === 1) {
            self.$nextTick(function () {
              self.tableData = response.data
              self.tableDataNum = response.data.list.length
            })
          }else {
            self.swal(response.data.msg)
          }
        })
      },
      buttonIsShow ($button, $index) {
        let butArr = $button.split(',')
        return butArr[$index] == 1
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
