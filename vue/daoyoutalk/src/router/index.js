import Vue from 'vue'
import store from '../store/index'
import Router from 'vue-router'
import Home from '@/components/pages/home/index'
import ActionsList from '@/components/pages/home/attractionsList'
import FriendCircle from '@/components/pages/friend-circle/index'
import Plan from '@/components/pages/plan/index'
import More from '@/components/pages/more/index'
import My from '@/components/pages/my/index'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      redirect: 'home'
    },
    {
      path: '/home',
      name: '目的地',
      component: Home,
      children: [
        {
          path: 'attractions',
          name: '景点列表',
          component: ActionsList
        }
      ]
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

/*
*  路由全局钩子
*  进入之前可设置进行的操作
*
*  方法: HeadToggle() 根据path判断是否加载header组件
*
* */
router.beforeEach((to, form, next) => {
  HeadToggle(to.path)
  FootToggle(to.path)
  next()
})

const HeadToggle = function (path) {
  let defaultPath = ['/attractions']
  let cutPath = path.slice(path.lastIndexOf('/'), path.length)
  store.state.headToggle = defaultPath.some((a) => (a === cutPath))
  return defaultPath.some((a) => (a === cutPath))
}

const FootToggle = function (path) {
  let defaultPath = ['/home', '/plan', '/plan', '/more']
  let cutPath = path.slice(path.lastIndexOf('/'), path.length)
  store.state.footToggle = defaultPath.some((a) => (a === cutPath))
}

export default router
