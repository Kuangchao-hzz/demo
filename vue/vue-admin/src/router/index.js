import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const includeRouterMap = [
  {
    path: '/login',
    component: resolve => require(['../components/Login/Login.vue'], resolve)
  }]

export const asyncRouterMap = [
  {
    path: '/',
    name: '主页',
    component: resolve => require(['../components/Layout/layout.vue'], resolve),
    children: [
      {
        path: '/visa',
        name: '前台组',
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        redirect: '/visa/index',
        children: [{
          path: 'index',
          name: '签证管理',
          component: resolve => require(['../components/group-visa/childrens/visa.vue'], resolve)
        }]
      }
    ]
  }
]

export default new Router({
  routes: includeRouterMap
})

/*export const asyncRouterMap = [
  {
    path: '/',
    name: '主页',
    component: resolve => require(['../components/Layout/layout.vue'], resolve),
    redirect: '/visa/express',
    children: [
      {
        path: 'visa',
        name: 'visa',
        meta: {
          name: '前台组',
          index: 'visa'
        },
        icon: 'el-icon-message',
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'index',
            name: 'index',
            icon: 'el-icon-message',
            meta: {
              name: '前台组',
              index: '/visa/index'
            },
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          }, {
            path: 'express',
            name: 'express',
            icon: 'el-icon-message',
            meta: {
              name: '快递管理',
              index: '/visa/express'
            },
            component: resolve => require(['../components/group-visa/visa.vue'], resolve)
          }, {
            path: 'count',
            name: 'count',
            icon: 'el-icon-message',
            meta: {
              name: '业绩管理',
              index: '/visa/count'
            },
            component: resolve => require(['../components/Login/Login.vue'], resolve)
          }
        ]
      },
      {
        path: 'material',
        icon: 'el-icon-message',
        meta: {
          name: '材料组',
          index: '/material'
        },
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'japan',
            icon: 'el-icon-message',
            meta: {
              name: '日本组',
              index: '/material/japan'
            },
            component: resolve => require(['../components/group-visa/index.vue'], resolve),
            children: [
              {
                path: 'index',
                meta: {
                  name: '签证管理',
                  index: '/material/japan/index'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }, {
                path: 'daizhuangCount',
                meta: {
                  name: '装袋统计管理',
                  index: '/material/japan/daizhuangCount'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }, {
                path: 'count',
                meta: {
                  name: '业绩统计',
                  index: '/material/japan/count'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }, {
                path: 'hotel',
                meta: {
                  name: '酒店模板',
                  index: '/material/japan/hotel'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }, {
                path: 'trip',
                meta: {
                  name: '行程模板',
                  index: '/material/japan/trip'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }, {
                path: 'flight',
                meta: {
                  name: '航班模板',
                  index: '/material/japan/flight'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }
            ]
          }, {
            path: 'thailand',
            icon: 'el-icon-message',
            meta: {
              name: '泰国组',
              index: '/material/thailand'
            },
            component: resolve => require(['../components/group-visa/visa.vue'], resolve),
            children: [
              {
                path: 'index',
                icon: 'el-icon-message',
                meta: {
                  name: '签证管理',
                  index: '/material/thailand/index'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }, {
                path: 'count',
                icon: 'el-icon-message',
                meta: {
                  name: '业绩管理',
                  index: '/material/thailand/count'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }
            ]
          }
        ]
      },
      {
        path: 'send',
        icon: 'el-icon-message',
        meta: {
          name: '送签组',
          index: '/send'
        },
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'japan',
            icon: 'el-icon-message',
            meta: {
              name: '日本组',
              index: '/send/japan'
            },
            component: resolve => require(['../components/group-visa/index.vue'], resolve),
            children: [
              {
                path: 'index',
                meta: {
                  name: '签证管理',
                  index: 'send/japan/index'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }
            ]
          }, {
            path: 'thailand',
            icon: 'el-icon-message',
            meta: {
              name: '泰国组',
              index: '/send/thailand'
            },
            component: resolve => require(['../components/group-visa/index.vue'], resolve),
            children: [
              {
                path: 'index',
                meta: {
                  name: '签证管理',
                  index: '/send/thailand/index'
                },
                icon: 'el-icon-message',
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }
            ]
          }, {
            path: 'other',
            meta: {
              name: '其他组',
              index: '/send/other'
            },
            icon: 'el-icon-message',
            component: resolve => require(['../components/group-visa/index.vue'], resolve),
            children: [
              {
                path: 'index',
                icon: 'el-icon-message',
                meta: {
                  name: '签证管理',
                  index: '/send/other/index'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }
            ]
          }
        ]
      },
      {
        path: 'after',
        icon: 'el-icon-message',
        meta: {
          name: '售后组',
          index: '/after'
        },
        component: resolve => require(['../components/group-visa/index.vue'], resolve),
        children: [
          {
            path: 'invoice',
            icon: 'el-icon-message',
            meta: {
              name: '发票管理',
              index: '/after/invoice'
            },
            component: resolve => require(['../components/group-visa/index.vue'], resolve)
          },
          {
            path: 'japan',
            name: '日本组',
            icon: 'el-icon-message',
            meta: {
              name: '发票管理',
              index: '/after/japan'
            },
            component: resolve => require(['../components/group-visa/index.vue'], resolve),
            children: [
              {
                path: 'index',
                icon: 'el-icon-message',
                meta: {
                  name: '签证管理',
                  index: '/after/japan/index'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              },
              {
                path: 'index',
                icon: 'el-icon-message',
                meta: {
                  name: '业绩统计',
                  index: '/after/japan/count'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }
            ]
          },
          {
            path: 'thailand',
            icon: 'el-icon-message',
            meta: {
              name: '泰国组',
              index: '/after/thailand'
            },
            component: resolve => require(['../components/group-visa/index.vue'], resolve),
            children: [
              {
                path: 'index',
                icon: 'el-icon-message',
                meta: {
                  name: '签证管理',
                  index: '/after/thailand/index'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              },
              {
                path: 'index',
                icon: 'el-icon-message',
                meta: {
                  name: '业绩统计',
                  index: '/after/thailand/count'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }
            ]
          },
          {
            path: 'other',
            icon: 'el-icon-message',
            meta: {
              name: '其他组',
              index: '/after/other'
            },
            component: resolve => require(['../components/group-visa/index.vue'], resolve),
            children: [
              {
                path: 'index',
                icon: 'el-icon-message',
                meta: {
                  name: '签证管理',
                  index: '/after/other/index'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              },
              {
                path: 'index',
                icon: 'el-icon-message',
                meta: {
                  name: '业绩统计',
                  index: '/after/other/index'
                },
                component: resolve => require(['../components/group-visa/index.vue'], resolve)
              }
            ]
          }
        ]
      }
    ]
  }
]*/

