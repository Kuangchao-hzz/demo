import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/home'
import Example from '@/components/pages/home/Example'
import Path from '@/components/pages/home/Path'
import Courses from '@/components/pages/courses/index'
import Download from '@/components/pages/download/index'
import My from '@/components/pages/my/index'

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
      component: Home,
      children: [
        {
          path: '_example',
          name: '_example',
          component: Example
        },
        {
          path: '_path',
          name: '_path',
          component: Path
        },
        {
          path: '_question',
          name: '_question',
          component: Example
        },
        {
          path: '_note',
          name: '_note',
          component: Example
        },
        {
          path: '_more',
          name: '_more',
          component: Example
        }
      ]
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
