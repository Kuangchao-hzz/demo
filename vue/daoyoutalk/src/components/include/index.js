
import commonHeader from '../components/include/header.vue'

/* eslint-disable no-undef */
const install = function (Vue, config = {}) {
  Vue.component(commonHeader.name, commonHeader)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  commonHeader
}
