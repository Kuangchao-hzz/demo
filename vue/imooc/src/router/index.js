import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/home'
import Courses from '@/components/pages/courses/index'
import Download from '@/components/pages/download/index'
import My from '@/components/pages/my/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/courses',
      name: 'courses',
      component: Courses
    },
    {
      path: '/download',
      name: 'download',
      component: Download
    },
    {
      path: '/my',
      name: 'my',
      component: My
    }
  ]
})
