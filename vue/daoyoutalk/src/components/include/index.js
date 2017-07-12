
import includeHeader from './header.vue'
import includeFooter from './footer.vue'
import selectSort from './select-sort.vue'
import HzzSelect from './select/select.vue'

const install = function (Vue, config = {}) {
  Vue.component(includeHeader.name, includeHeader)
  Vue.component(includeFooter.name, includeFooter)
  Vue.component(HzzSelect.name, HzzSelect)
  Vue.component(selectSort.name, selectSort)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}
