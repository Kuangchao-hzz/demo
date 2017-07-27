import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Layout = resolve => require(['../components/Layout/layout.vue'], resolve)

export const includeRouterMap = [
  {
    path: '/',
    name: '布局页',
    component: Layout,
    redirect: '/shVisa/visa'
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
    path: '/shVisa',
    name: '前台组',
    icon: 'el-icon-menu',
    meta: {
      role: ['reception']
    },
    component: Layout,
    children: [
      {
        path: 'visa',
        name: '签证管理',
        icon: 'icon icon-newspaper',
        meta: {
          role: ['reception']
        },
        component: resolve => require(['../components/group-visa/childrens/visa.vue'], resolve)
      }, {
        path: 'express',
        name: '快递管理',
        icon: 'icon icon-truck',
        component: resolve => require(['../components/group-visa/childrens/express.vue'], resolve)
      }, {
        path: 'count',
        name: '业绩管理',
        icon: 'icon icon-stats-bars',
        component: resolve => require(['../components/group-visa/childrens/count.vue'], resolve)
      }
    ]
  },
  {
    path: '/material',
    name: '材料组',
    icon: 'el-icon-menu',
    meta: {
      currentPath: '/material/japan/visa',
      role: ['materials']
    },
    component: Layout,
    children: [
      {
        path: '/material/japan',
        name: '日本组',
        icon: 'icon icon-japan',
        meta: {
          role: ['materials']
        },
        component: resolve => require(['../components/group-material/index.vue'], resolve),
        children: [
          {
            path: 'visa',
            name: '签证管理',
            icon: 'icon icon-newspaper',
            meta: {
              role: ['materials']
            },
            component: resolve => require(['../components/group-material/childrens/japan/visa.vue'], resolve)
          }, {
            path: 'daizhuangCount',
            name: '装袋统计管理',
            icon: 'icon icon-stack',
            component: resolve => require(['../components/group-material/childrens/japan/daizhuangCount.vue'], resolve)
          }, {
            path: 'count',
            name: '业绩统计',
            icon: 'icon icon-stats-bars',
            component: resolve => require(['../components/group-material/childrens/japan/count.vue'], resolve)
          }, {
            path: 'hotel',
            name: '酒店模板',
            icon: 'icon icon-hotel',
            component: resolve => require(['../components/group-material/childrens/japan/hotel.vue'], resolve)
          }, {
            path: 'trip',
            name: '行程模板',
            icon: 'icon icon-journey',
            component: resolve => require(['../components/group-material/childrens/japan/trip.vue'], resolve)
          }, {
            path: 'flight',
            name: '航班模板',
            icon: 'icon icon-airplane',
            component: resolve => require(['../components/group-material/childrens/japan/fight.vue'], resolve)
          }
        ]
      }, {
        path: '/material/thailand',
        name: '泰国组',
        icon: 'icon icon-thailand',
        meta: {
          role: ['materials']
        },
        component: resolve => require(['../components/group-material/index.vue'], resolve),
        children: [
          {
            path: 'visa',
            name: '签证管理',
            icon: 'icon icon-newspaper',
            meta: {
              role: ['materials']
            },
            component: resolve => require(['../components/group-material/childrens/thailand/visa.vue'], resolve)
          }
        ]
      }, {
        path: '/material/philippines',
        name: '菲律宾组',
        icon: 'icon icon-philippines',
        meta: {
              role: ['materials']
            },
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'index',
            name: '签证管理',
            icon: 'icon icon-newspaper',
            meta: {
              role: ['materials']
            },
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }
        ]
      }
    ]
  },
  {
    path: '/send',
    name: '送签组',
    icon: 'el-icon-menu',
    component: Layout,
    children: [
      {
        path: '/send/japan',
        name: '日本组',
        icon: 'icon icon-japan',
        component: resolve => require(['../components/group-send/index.vue'], resolve),
        children: [
          {
            path: 'visa',
            name: '签证管理',
            icon: 'icon icon-newspaper',
            component: resolve => require(['../components/group-send/childrens/japan/visa.vue'], resolve)
          }
        ]
      }, {
        path: '/send/thailand',
        name: '泰国组',
        icon: 'icon icon-thailand',
        component: resolve => require(['../components/group-send/index.vue'], resolve),
        children: [
          {
            path: 'visa',
            name: '签证管理',
            icon: 'icon icon-newspaper',
            component: resolve => require(['../components/group-send/childrens/thailand/visa.vue'], resolve)
          }
        ]
      }, {
        path: '/send/other',
        name: '其他组',
        icon: 'icon icon-earth-other',
        component: resolve => require(['../components/group-send/index.vue'], resolve),
        children: [
          {
            path: 'visa',
            name: '签证管理',
            icon: 'icon icon-newspaper',
            component: resolve => require(['../components/group-send/childrens/other/visa.vue'], resolve)
          }
        ]
      }
    ]
  },
  {
    path: '/after',
    name: '售后组',
    icon: 'el-icon-menu',
    component: Layout,
    children: [
      {
        path: 'invoice',
        name: '发票管理',
        icon: 'icon icon-japan',
        component: resolve => require(['../components/group-after/index.vue'], resolve),
      },
      {
        path: '/after/japan',
        name: '日本组',
        icon: 'icon icon-japan',
        component: resolve => require(['../components/group-after/index.vue'], resolve),
        children: [
          {
            path: 'visa',
            name: '签证管理',
            icon: 'icon icon-newspaper',
            component: resolve => require(['../components/group-after/childrens/japan/visa.vue'], resolve)
          }, {
            path: 'count',
            name: '业绩管理',
            icon: 'icon icon-stats-bars',
            component: resolve => require(['../components/group-after/childrens/japan/count.vue'], resolve)
          }
        ]
      }, {
        path: '/after/thailand',
        name: '泰国组',
        icon: 'icon icon-thailand',
        component: resolve => require(['../components/group-after/index.vue'], resolve),
        children: [
          {
            path: 'visa',
            name: '签证管理',
            icon: 'icon icon-newspaper',
            component: resolve => require(['../components/group-after/childrens/thailand/visa.vue'], resolve)
          }, {
            path: 'count',
            name: '业绩管理',
            icon: 'icon icon-stats-bars',
            component: resolve => require(['../components/group-after/childrens/thailand/count.vue'], resolve)
          }
        ]
      }, {
        path: '/after/other',
        name: '其他组',
        icon: 'icon icon-earth-other',
        component: resolve => require(['../components/group-after/index.vue'], resolve),
        children: [
          {
            path: 'visa',
            name: '签证管理',
            icon: 'icon icon-newspaper',
            component: resolve => require(['../components/group-after/childrens/other/visa.vue'], resolve)
          }
        ]
      }
    ]
  },
  /*
  {
    path: '/service',
    name: '客服组',
    icon: 'el-icon-menu',
    component: resolve => require(['../components/group-visa/index.vue'], resolve),
    children: [
      {
        path: 'index',
        name: '签证管理',
        icon: 'icon icon-newspaper',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      }
    ]
  },
  {
    path: '/system',
    name: '系统管理',
    icon: 'el-icon-menu',
    component: resolve => require(['../components/group-visa/index.vue'], resolve),
    children: [
      {
        path: 'index',
        name: '账户管理',
        icon: 'icon icon-accounts',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      },
      {
        path: 'index',
        name: '短信管理',
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      }
    ]
  },
  {
    path: '/taobao',
    name: '淘宝管理',
    icon: 'el-icon-menu',
    component: resolve => require(['../components/group-visa/index.vue'], resolve),
    children: [
      {
        path: 'index',
        name: '淘宝日志',
        icon: 'icon icon-log',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      },
      {
        path: 'index',
        name: '更新日志',
        icon: 'icon icon-renewal',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      },
      {
        path: 'index',
        name: '淘宝预警',
        icon: 'icon icon--early-warning',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      }
    ]
  },
  {
    path: '/internal',
    name: '内部操作',
    icon: 'el-icon-menu',
    component: resolve => require(['../components/group-visa/index.vue'], resolve),
    children: [
      {
        path: 'index',
        name: '绑定招保',
        icon: 'icon icon-associated',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      },
      {
        path: 'index',
        name: '下载淘宝订单',
        icon: 'icon icon-download-taobao',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      },
      {
        path: 'index',
        name: '刷新缓存',
        icon: 'icon icon-cache',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      }
    ]
  },
  {
    path: '/money',
    name: '财务管理',
    icon: 'el-icon-menu',
    component: resolve => require(['../components/group-visa/index.vue'], resolve),
    children: [
      {
        path: 'index',
        name: '账目管理',
        icon: 'icon icon-accounts',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      },
      {
        path: 'index',
        name: '支付宝管理',
        icon: 'icon icon-zhifubao',
        component: resolve => require(['../components/group-visa/index.vue'], resolve)
      }
    ]
  }*/
]