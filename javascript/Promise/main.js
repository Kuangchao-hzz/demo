/**
 * Created by Administrator on 2017/5/26.
 */
require.config({
  baseUrl: './',

  paths: {
    jquery: './libs/jquery-3.2.0',
    dialog: './components/Dialog'
  }
});
/**
 *  requirejs为异步加载模式，遵循AMD规范，依赖模块的执行顺序是不固定也无法规定的
 *  若某module依赖某library， 则必须在该module中事先声明依赖关系。e.g：
 *
 *  define(['jquery'], function(){
 *    // 当'jquery'加载完成后才执行该回调函数。
 *    console.log($)
 *  })
 *
 *
 * */
define(function (require) {
  require('jquery');
  require('./components/button')
})