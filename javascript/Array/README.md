### 方法

  #### Array.from((arrayLike[, mapFn[, thisArg]]) 
  * 从类似数组或者迭代对象（iterable object）中创建一个新的数组实例。
  * arrayLike | 必选: 类似数组或者迭代对象。
  * mapFn  | 可选: 如果指定了该参数，则最后生成的数组会经过该函数的加工处理后再返回。
  * thisArg   | 可选: 执行 mapFn 函数时 this 的值。
  ```bash
    // 类似数组
    var arr = ['a', 'b', 'b']
    console.log(Array.from(arr)) // ['a', 'b', 'b']
    
    // 迭代对象
    var iteration = 'foo';
    console.log(Array.from(iteration)) // ['f', 'o', 'o']
  ```