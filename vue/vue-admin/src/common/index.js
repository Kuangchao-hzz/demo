import hzCalendar from './calendar/calendar.vue'

const install = function (Vue, config = {}) {
  Vue.component(hzCalendar.name, hzCalendar)
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install
}