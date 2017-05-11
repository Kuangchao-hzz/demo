<template>
  <div>
    <handler></handler>
    <Tabs value="name1">
      <Tab-pane label="(index1)" name="name1">
        <Table :columns="columns1" :data="data1"></Table>
      </Tab-pane>
      <Tab-pane label="(index1)" name="name2">
        <Table :row-class-name="rowClassName" :columns="columns1" :data="data1"></Table>
      </Tab-pane>
      <Tab-pane label="(index1)" name="name3">

      </Tab-pane>
    </Tabs>
  </div>
</template>
<script>
  import Handler from '@/components/handler/handler'
  export default {
    data () {
      return {
        columns1: [
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '年龄',
            key: 'age'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '操作',
            key: 'action',
            width: 150,
            align: 'center',
            render (row, column, index) {
              return `<i-button type="primary" size="small" @click="show(${index})">查看</i-button> <i-button type="error" size="small" @click="remove(${index})">删除</i-button>`
            }
          }
        ],
        data1: [
          {
            name: '王小明',
            age: 18,
            address: '北京市朝阳区芍药居'
          },
          {
            name: '张小刚',
            age: 25,
            address: '北京市海淀区西二旗'
          },
          {
            name: '李小红',
            age: 30,
            address: '上海市浦东新区世纪大道'
          },
          {
            name: '周小伟',
            age: 26,
            address: '深圳市南山区深南大道'
          }
        ]
      }
    },
    components: {
      Handler
    },
    methods: {
      rowClassName (row, index) {
        if (index % 2 !== 0) {
          return 'demo-table-info-row'
        } else {
          return 'demo-table-error-row'
        }
      },
      show (index) {
        this.$Modal.info({
          title: '用户信息',
          content: `姓名：${this.data6[index].name}<br>年龄：${this.data6[index].age}<br>地址：${this.data6[index].address}`
        })
      },
      remove (index) {
        this.data6.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
.ivu-table-wrapper{
  box-shadow: 5px 5px 5px rgba(0,0,0,.2);
  .ivu-table .demo-table-info-row td{
    background-color: #2db7f5;
    color: #fff;
  }
  .ivu-table .demo-table-error-row td{
    background-color: #ff6600;
    color: #fff;
  }
  .ivu-table td.demo-table-info-column{
    background-color: #2db7f5;
    color: #fff;
  }
  .ivu-table .demo-table-info-cell-name {
    background-color: #2db7f5;
    color: #fff;
  }
  .ivu-table .demo-table-info-cell-age {
    background-color: #ff6600;
    color: #fff;
  }
  .ivu-table .demo-table-info-cell-address {
    background-color: #187;
    color: #fff;
  }
}
</style>
