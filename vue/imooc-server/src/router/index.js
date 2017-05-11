import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/views/home/index'
import _home from '@/components/views/home/index1'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: '_home',
          name: '_home',
          component: _home
        }
      ]
    }
  ]
})
