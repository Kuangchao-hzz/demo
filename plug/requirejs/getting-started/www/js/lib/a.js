/**
 * Created by Administrator on 2017/5/25.
 */

define(function (require) {
  var a = 'i am a.js';
  var b = require('./b');
  var c = require.toUrl('./style.css');
  return a;
});
