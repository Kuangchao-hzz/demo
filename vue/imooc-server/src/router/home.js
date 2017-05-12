export default {
  path: '/home',
  name: '首页',
  component: resolve => require(['@/components/layout/index'], resolve),
  children: [
    {
      path: '_example',
      name: '实战',
      component: resolve => require(['@/components/views/home/_example'], resolve)
    },
    {
      path: '_path',
      name: '路径',
      component: resolve => require(['@/components/views/home/_path'], resolve)
    },
    {
      path: '_Add_Form',
      name: '添加表单',
      component: resolve => require(['@/components/common/Add_user'], resolve)
    },
    {
      path: '*',
      name: '404',
      component: resolve => require(['@/components/views/404'], resolve)
    }
  ]
}
