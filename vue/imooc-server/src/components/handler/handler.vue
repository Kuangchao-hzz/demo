<template>
  <Row>
    <Form ref="formInline">
      <Row :gutter="16">
        <Col span="8">
        <Form-item>
          <Input placeholder="请输入...">
          <Button type="primary" slot="append">搜索</Button>
          </Input>
        </Form-item>
        </Col>
        <Col span="4">
        <Form-item>
          <Button type="primary" @click="toUrlLink" long>添加</Button>
        </Form-item>
        </Col>
      </Row>
      <Row type="flex" justify="end">

      </Row>
    </Form>
  </Row>
</template>

<script>
  export default {
    data () {
      return {
        searchBtn: 'large'
      }
    },
    methods: {
      toUrlLink () {
        this.$router.push('/home/_Add_Form')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
  .ivu-form{
    padding-top: 20px;
    .ivu-form-item{
      margin-bottom: 20px;
      .ivu-input-group-append{
        .ivu-btn{
          margin: -5px -8px;
          padding: 6px 36px;
          border-top-left-radius: 0;
          border-bottom-left-radius: 0;
          &.ivu-btn-primary {
            color: #fff;
            background-color: #39f;
            border-color: #39f;
          }
        }
      }
    }
  }

</style>
