// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import axios from './api/index'
import common from './common'
import ElementUI from 'element-ui'
import Cookies from 'js-cookie';
import Icon from './common/Icon'
import Swal from 'sweetalert2'
import AMap from 'vue-amap'
import {asyncRouterMap} from './router'
import 'vue-awesome/icons'
import 'sweetalert2/dist/sweetalert2.min.css'
import 'element-ui/lib/theme-default/index.css'
Vue.component('icon', Icon)
Vue.use(ElementUI)
Vue.use(common)
Vue.use(AMap)

router.addRoutes(asyncRouterMap)
Vue.config.productionTip = false
AMap.initAMapApiLoader({
  key: '4f77fb55df2ea2d761581bf83ff57acc',
  plugin: ['Geocoder']
})


Vue.prototype.swal = Swal
router.beforeEach((to, from, next) => {
  if(store.state.include.tableWidth == '' && store.state.include.tableHeight == ''){
    store.dispatch('captureBrowserSize')
  }
  if(to.path !== '/login'){
    if(Cookies.get('TOKEN') &&　Cookies.get('SESSIONUID')){
      next()
    }else {
      next({
        path: '/login'
      })
    }
  }else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  template: '<App/>',
  components: { App }
})
