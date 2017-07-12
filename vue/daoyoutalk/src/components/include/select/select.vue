<template>
<div class="hzz-select">
  <input type="text"
         v-model="selectedLabel"
         class="hzz-select__input" readonly>
  <selectDropdown>
    <slot></slot>
  </selectDropdown>
</div>
</template>

<script>
  import SelectDropdown from './select-dropdown'
  import OptionGroup from './option-group'
  import HzzOption from './option'
  export default {
    name: 'HzzSelect',
    data () {
      return {
        selectedLabel: 'select'
      }
    },
    components: {
      SelectDropdown,
      OptionGroup,
      HzzOption
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
.hzz-select{
  width: 100%;
  background: #ddd;
  position: absolute;
  left: 0;
  top: 40px;
  z-index: 1;
  .hzz-select__input{
    width: 100%;
    height:100%;
    min-height: 24px;
    border: none;
  }
}
</style>
