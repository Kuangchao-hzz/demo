// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScroller from 'vue-scroller'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueScroller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    h: 1
  },
  router,
  template: '<App/>',
  components: { App }
})
