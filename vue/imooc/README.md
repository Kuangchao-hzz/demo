# imooc

> A Vue.js project

## selfIssues

1、 进行到父子组件通信时, 由于在data返回的数据命名与props命名重复，导致props验证发出了错误警告(the data property os already declared as a prop 数据属性已经声明)
1、 进行到props验证的时候, typeof null | [] // 返回object。 判断数据类型的方法 console.log([] instanceof of Array) // true。 ([].constructor == Array) // true  constructor属性返回对创建此对象的数组函数的引用

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
