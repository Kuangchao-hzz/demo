import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/home'
import Path from '@/components/pages/home/children/Path'
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
      name: '慕课网',
      meta: {
        leftItem: 'search',
        rightItem: 'envelope'
      },
      component: Home,
      children: [
        {
          path: '_example',
          name: '实战',
          meta: {
            leftItem: 'back'
          },
          component: resolve => require(['@/components/pages/home/children/Example'], resolve)
        },
        {
          path: '_path',
          name: '路径',
          meta: {
            leftItem: 'back'
          },
          component: Path
        },
        {
          path: '_question',
          name: '猿问',
          meta: {
            leftItem: 'back'
          },
          component: resolve => require(['@/components/pages/home/children/Example'], resolve)
        },
        {
          path: '_note',
          name: '手记',
          meta: {
            leftItem: 'back'
          },
          component: resolve => require(['@/components/pages/home/children/Example'], resolve)
        },
        {
          path: '_more',
          name: '发现',
          meta: {
            leftItem: 'back'
          },
          component: resolve => require(['@/components/pages/home/children/Example'], resolve)
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
