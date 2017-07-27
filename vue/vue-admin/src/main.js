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

Vue.config.productionTip = false

// webpack 有global关键字 定义全局变量
global.swal = Swal

router.beforeEach((to, from, next) => {
  if(store.state.include.tableWidth == '' && store.state.include.tableHeight == ''){
    store.dispatch('captureBrowserSize')
  }
  // 如果路由是跳转不是登录页的则判断是否有token值
  if(to.path !== '/login'){
    if(Cookies.get('TOKEN') &&　Cookies.get('SESSIONUID')){
      if (store.state.user.roles.length === 0) {
        store.dispatch('getInfoData').then((roles) => {
          store.dispatch('GenerateRoutes', { roles }).then((asyncRoutes) => { // 生成可访问的路由表
            router.addRoutes(store.getters.addRouters) // 动态添加可访问的路由表
            let currentPath = store.getters.addRouters[0].meta.currentPath ? store.getters.addRouters[0].meta.currentPath : '/'
            next({
              path: currentPath
            }); // hack方法 确保addRoutes已完成
          })
        })
      }
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
