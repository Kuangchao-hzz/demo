/**
 * Created by Administrator on 2017/5/25.
 */

require.config({
  baseUrl: 'js/lib',
  paths: {
    app: '../app',
    jquery: 'jquery-2.1.1.min'
  },
  shim: {
    'notDep': {

    }
  }
});

require(['jquery', 'a'], function ($, a) {
  console.log($)
  console.log(a)
})