import Vue from 'vue'
import Router from 'vue-router'
import Home from './home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home/_path'
    },
    Home
  ]
})
