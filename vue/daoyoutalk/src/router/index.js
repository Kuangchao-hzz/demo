import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/home/index'
import FriendCircle from '@/components/pages/friend-circle/index'
import Plan from '@/components/pages/plan/index'
import More from '@/components/pages/more/index'
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
      name: '目的地',
      component: Home
    },
    {
      path: '/friendCircle',
      name: '旅游圈',
      component: FriendCircle
    },
    {
      path: '/plan',
      name: '锦囊',
      component: Plan
    },
    {
      path: '/more',
      name: '百宝箱',
      component: More
    },
    {
      path: '/my',
      name: '我的',
      component: My
    }
  ]
})
