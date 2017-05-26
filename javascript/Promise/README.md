# Promise 


  * 用于异步计算。一个 Promise 表示一个现在或将来可用，亦或永远不可用的值。
  * 一个代理对象（代理一个值），被代理的值在Promise对象创建时可能是未知的。它允许你为异步代码执行结果的成功和失败分别绑定相应的处理方法（handlers ）。
  ```bash
    /**
    * 应用场景：
    * */
    // 当遇到一个类似confirm弹窗框的时候
    
    function confirm (_this) {
      return new Promise(function(resolve=>'成功状态', reject=>'失败状态'){
        if(_this){
          resolve('返回成功状态')
        }eles{
          reject('返回错误状态')
        }
      })
    }
    
    confirm(true).then(function(a){// a => 返回成功状态}, function(a){ // a => 返回错误状态})
    confirm(true).catch(function(a){}) // 和then一样，不过只处理错误状态
    
    由于.then&.catch方法都返回Promise对象，所有可以链试调用
  
  ```
  
  ## Promise.all(iterable) 
  
  * 这个方法返回一个新的promise对象，
  * 该promise对象在iterable里所有的promise对象都成功的时候才会触发成功, 
  * 一旦有任何一个iterable里面的promise对象失败则立即触发该promise对象的失败
  
  ## Promise.race(iterable)
  
  * 在可迭代的 resolves 或 rejects 中 promises 有一个完成或失败，将显示其值或原因。
  * race 函数返回一个 Promise，它将与第一个传递的 promise 相同的完成方式被完成。它可以是完成（ resolves），也可以是失败（rejects），这要取决于第一个完成的方式是两个中的哪个。
  
  ```bash
    var p1 = new Promise(function(resolve, reject) { 
        setTimeout(reject, 500, "one"); 
    });
    var p2 = new Promise(function(resolve, reject) { 
        setTimeout(resolve, 100, "two"); 
    });
    
    Promise.race([p1, p2]).then(function(value) {
      console.log(value); // 未被调用， 因为p2最先完成 并且完成方式是resolve。race函数只允许与第一个传递的 promise 相同的完成方式完成
    }, function(){
    console.log(value); // "two" 
    });
  ```
  ## Promise.reject(reason)
  
  * 方法返回一个用reason拒绝的Promise。
  
  ```bash
    Promise.reject("Testing static reject").then(function(reason) {
      // 未被调用
    }, function(reason) {
      console.log(reason); // "测试静态拒绝"
    });
  ```
  
   ## Promise.reject(reason)
    
   * 方法返回一个用reason拒绝的Promise。
    
   ```bash
    Promise.resolve("Success").then(function(value) {
      console.log(value); // "Success"
    }, function(value) {
      // 不会被调用
    });
  ```
    
    https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise#note-1
