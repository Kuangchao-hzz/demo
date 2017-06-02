// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MintUI from 'mint-ui'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueScroller from 'vue-scroller'
import App from './App'
import router from './router'
import axios from 'axios'

/*
 * =========================================
 * normalize.css 初始化CSS样式。更好的选择Normalize.css。相比于传统的CSS reset，Normalize.css是一种现代的、为HTML5准备的优质替代方案
 * =========================================
 */
import 'mint-ui/lib/style.css'
import 'normalize.css/normalize.css'
import 'animate.css/animate.min.css'

Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper)
Vue.use(VueScroller)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
