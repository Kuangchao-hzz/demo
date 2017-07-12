<template>
  <div>
    <span>{{ currentLabel }}</span>
  </div>
</template>

<script>
  export default {
    name: 'HzzOption',
    componentName: 'HzzOption',
    data () {
      return {

      }
    },
    props: {
      value: {
        required: false
      },
      label: [String, Number]

    },
    computed: {
      currentLabel () {
        return this.label || ((typeof this.value === 'string' || typeof this.value === 'number') ? this.value : '')
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>
