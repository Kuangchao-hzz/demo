<template>
  <div class="count-box-box">
    <el-table
      v-loading.body="loading"
      :data="tableData.list"
      :height="tableHeight"
      :max-height="tableHeight"
      border
      style="width: 100%">
      <el-table-column
        prop="id"
        label="编号"
        align="center"
        fixed
        min-width="40">
      </el-table-column>
      <el-table-column
        prop="cityName"
        label="城市"
        align="center"
        min-width="80">
      </el-table-column>
      <el-table-column
        prop="content"
        label="内容"
        align="center"
        min-width="180">
      </el-table-column>
      <el-table-column
        label="操作"
        align="center"
        min-width="80">
        <template scope="scope">
          <el-row type="flex" justify="center">
            <el-button v-if="buttonIsShow(scope.row.button, 0)" type="primary" size="mini">编辑</el-button>
            <el-button v-if="buttonIsShow(scope.row.button, 1)" class="color-green" type="primary" size="mini">启动</el-button>
            <el-button v-if="buttonIsShow(scope.row.button, 2)" type="danger" size="mini">禁用</el-button>
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
        let $params = {
          page: $page || 1,
          type: this.type || '',
          content: this.content || '',
        }
        self.loading = true
        api_table.data_materialHotelSearch($params).then((response) => {
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
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
