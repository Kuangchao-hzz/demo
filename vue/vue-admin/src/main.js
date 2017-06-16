// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './api/index'
import common from './common'
import ElementUI from 'element-ui'
import Icon from './common/Icon'
import 'vue-awesome/icons'
import 'element-ui/lib/theme-default/index.css'
Vue.component('icon', Icon)
Vue.use(ElementUI)
Vue.use(common)

// router.addRoutes(store.state.router.async)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
