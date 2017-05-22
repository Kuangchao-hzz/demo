### Object.keys() 将对象的属性转成数组
  * 返回一个由给定对象的自身可枚举属性组成的数组
  * 数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致 （两者的主要区别是 一个 for-in 循环还会枚举其原型链上的属性）。
  ```bash
    // 将对象的属性、属性、属性 组成数组
    
    var arr = ["a", "b", "c"];
    var arr1 = new Array();
    arr1['apple'] = '苹果';
    arr1['banana'] = '香蕉';
    console.log(Object.keys(arr)) //  ['0','1','2']
    console.log(Object.keys(arr1)) //  ['apple','banana']
    
  ```
  
  ### Object.defineProperty(obj, prop, descriptor)
  * 是ES5新增的一个API，其作用是给对象的属性增加更多的控制
  * obj: 需要定义属性的对象（目标对象）
  * prop: 需被定义或修改的属性名（对象上的属性或者方法）
  * descriptor: 需被定义或修改的属性的描述符
  
  
  
  
  
  
  
  
  
  