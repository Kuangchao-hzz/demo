import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Layout = resolve => require(['../components/Layout/layout.vue'], resolve)

export const includeRouterMap = [
  {
    path: '/',
    name: '布局页',
    component: Layout,
    redirect: '/visa/visa'
  }, {
    path: '/login',
    name: '登录页',
    component: resolve => require(['../components/Login/Login.vue'], resolve),
    children: [

    ]
  }]

export default new Router({
  routes: includeRouterMap
})

export const asyncRouterMap = [
  {
    path: '/visa',
    name: '前台组',
    icon: 'el-icon-message',
    component: Layout,
    children: [
      {
        path: 'visa',
        name: '签证管理',
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/childrens/visa.vue'], resolve)
      }, {
        path: 'express',
        name: '快递管理',
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/childrens/expressNo.vue'], resolve)
      }, {
        path: 'count',
        name: '业绩管理',
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      }
    ]
  },
  {
    path: '/material',
    name: '材料组',
    icon: 'el-icon-message',
    component: resolve => require(['../components/group-visa/index.vue'], resolve),
    children: [
      {
        path: '/material/japan',
        name: '日本组',
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'index',
            name: '签证管理',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }, {
            path: 'daizhuangCount',
            name: '装袋统计管理',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }, {
            path: 'count',
            name: '业绩统计',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }, {
            path: 'hotel',
            name: '酒店模板',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }, {
            path: 'trip',
            name: '行程模板',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }, {
            path: 'flight',
            name: '航班模板',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }
        ]
      }, {
        path: '/material/thailand',
        name: '泰国组',
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'index',
            name: '签证管理',
            icon: 'el-icon-message',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }, {
            path: 'count',
            name: '业绩管理',
            icon: 'el-icon-message',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }
        ]
      }
    ]
  },
  {
    path: '/send',
    name: '送签组',
    icon: 'el-icon-message',
    component: resolve => require(['../components/group-visa/index.vue'], resolve),
    children: [
      {
        path: '/send/japan',
        name: '日本组',
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'visa',
            name: '签证管理',
            component: resolve => require(['../components/group-visa/childrens/visa.vue'], resolve)
          }
        ]
      }, {
        path: 'thailand',
        name: '泰国组',
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'index',
            name: '签证管理',
            icon: 'el-icon-message',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }
        ]
      }, {
        path: 'thailand',
        name: '其他组',
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'index',
            name: '签证管理',
            icon: 'el-icon-message',
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }
        ]
      }
    ]
  },
  {
    path: '/after',
    name: '售后组',
    icon: 'el-icon-message',
    component: resolve => require(['../components/group-visa/index.vue'], resolve)
  },
  {
    path: '/service',
    name: '客服组',
    icon: 'el-icon-message',
    component: resolve => require(['../components/group-visa/index.vue'], resolve)
  },
  {
    path: '/system',
    name: '系统管理',
    icon: 'el-icon-message',
    component: resolve => require(['../components/group-visa/index.vue'], resolve)
  },
  {
    path: '/taobao',
    name: '淘宝管理',
    icon: 'el-icon-message',
    component: resolve => require(['../components/group-visa/index.vue'], resolve)
  },
  {
    path: '/internal',
    name: '内部操作',
    icon: 'el-icon-message',
    component: resolve => require(['../components/group-visa/index.vue'], resolve)
  },
  {
    path: '/money',
    name: '财务管理',
    icon: 'el-icon-message',
    component: resolve => require(['../components/group-visa/index.vue'], resolve)
  }
]