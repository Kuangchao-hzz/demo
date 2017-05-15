### 变量

  * 变量用于存储数据，一般情况下变量只能存放一个值，之前的值会被之后的值替换。除非是复合变量。
    
### 类
  
  #### 类的属性
  * 在类中定义的变量称之为属性，通常属性跟数据库中的字段有一定的关联，因此也可以称作“字段”。
  * 属性声明是由关键字 public，protected 或者 private 开头
  
  ```bash
        class Car {
            // 定义公共属性默认都为public，外部可以访问。
            // 注意属性必须定义访问控制 public，protected 或者 private 开头
            public $name = '汽车';
        
            // 受保护的属性与私有属性不允许外部调用，在类的成员方法内部是可以调用的。
            // 定义受保护的属性
            protected $corlor = '白色';
        
            //定义私有属性 只有该类能使用。
            private $price = '100000';
        }
        
        $car = new Car();
        echo $car->name; // 汽车
        echo $car->color; //错误 受保护的属性不允许外部调用
        echo $car->price; //错误 私有属性不允许外部调用
  ```
  
  #### 类的的方法
  * 在类中定义的function称之为方法( 面向过程的程序设计中function叫做函数 )
  * 同属性一样，类的方法也具有**`public`**，**_protected_** 以及 **_private_** 的访问控制。
  * 使用**`关键字static`**修饰的，称之为**`静态方法`**。可以通过类名直接调用，操作符为双冒号::。
  * 静态方法中，$this伪变量不允许使用。可以使用**`self`**，**`parent`**，**`static`**在内部调用静态方法与属性。
  
  ```bash
  class Car {
  
      private static $speed = 10;
      
      public function getName() {
              return '汽车';
          }
          
      // 使用`关键字static`修饰的，称之为静态方法。可以通过类名直接调用，操作符为双冒号::
      public static function getName() {
          return '汽车';
      }
          
      public static function getSpeed() {
          return self::$speed;
      }
      
      class BigCar extends Car {
          public static function start() {
              parent::speedUp();
          }
      }
  }
  $car = new Car();
  echo $car->getName();
  // 静态属性与方法可以在不实例化类的情况下调用，直接使用类名::方法名的方式进行调用。
  echo Car::getName(); // 结果为“汽车”
  ```
  #### 构造函数 __construct()
  
  * PHP5可以在类中使用**`__construct()`**定义一个构造函数，具有构造函数的类，会在每次对象创建的时候调用该函数，因此常用来在对象创建的时候进行一些初始化工作。
  * 在子类中如果定义了**`__construct则不会调用父类的__construct`**，如果需要同时调用父类的构造函数，需要使用**`parent::__construct()`**显式的调用。
  * PHP5支持析构函数，使用**`__destruct()`**进行定义，析构函数指的是当某个对象的所有引用被删除，或者对象被显式的销毁时会执行的函数。

  ```bash
  class Car {
     function __construct() {
         print "构造函数被调用\n";
     }
     
     class Truck extends Car {
        function __construct() {
            print "子类构造函数被调用\n";
            parent::__construct();
        }
     }
     //销毁时会调用析构函数
     function __destruct() {
        print "析构函数被调用 \n";
     }
  }
  $car = new Car(); //实例化的时候 会自动调用构造函数__construct，这里会输出一个字符串
  unset($car); //销毁时会调用析构函数
  ```
  #### 访问控制
  * 定义为**``****`公有的类成员`**可以在任何地方被访问。
  * 定义为**`受保护的类成员`**则可以被其自身以及其子类和父类访问。
  * 定义为**`私有的类成员`**则只能被其定义所在的类访问。
  * **`类属性必须定义为公有、受保护、私有之一`**。为兼容PHP5以前的版本，如果采用 var 定义，则被视为公有。
  * 类中的方法可以被定义为**`公有、私有或受保护`**。如果没有设置这些关键字，则该方法默认为公有。
  * 如果构造函数定义成了私有方法，则不允许直接实例化对象了，这时候一般通过静态方法进行实例化，在设计模式中会经常使用这样的方法来控制对象的创建，比如单例模式只允许有一个全局唯一的对象。
  ```bash
  class Car {
      private function __construct() {
          echo 'object create';
      }
  
      private static $_object = null;
      public static function getInstance() {
          if (empty(self::$_object)) {
              self::$_object = new Car(); // 内部方法可以调用私有方法，因此这里可以创建对象
          }
          return self::$_object;
      }
  }
  //$car = new Car(); //这里不允许直接实例化对象
  $car = Car::getInstance(); //通过静态方法来获得
  ```
  #### 重载
  * 属性的重载通过**`__set`**，**`__get`**，**`__isset`**，**`__unset`**来分别实现对不存在属性的**`赋值`**、**`读取`**、**`判断属性是否设置`**、**`销毁属性`**,当以上这些行为发生时。就会触发响应的方法。
  * 方法的重载通过__call来实现，当调用不存在的方法的时候，将会转为参数调用__call方法，当调用不存在的静态方法时会使用__callStatic重载。
  * 以上的方法是魔术方法，是指某些情况下,会自动调用的方法。它们的特点 都是以双下划线__开头的。比如: **`__construct()`**,**``** **`__destruct()`**, **`__call()`**, **`__callStatic()`**, **`__get()`**, **`__set()`**, **`__isset()`**, **`__unset()`**,` **__sleep()`**, **`__wakeup()`**, **`__toString()`**, **`__invoke()`**, **`__set_state()`** 和 **`__clone()`**.
  
  ```bash
  class Car {
      private $arr = array();
      private static $static_arr = array();
  
      public function __set($name, $value)
      {
          // TODO: Implement __set() method.
          echo '你想通过__set设置属性'.$name.'<br/>';
          $this->arr[$name] = $value;
      }
      public function __get($name)
      {
          // TODO: Implement __get() method.
          echo '你想通过__get得到属性'.$name.'<br/>';
          return $this->arr[$name];
      }
  
      public function __isset($name)
      {
          // TODO: Implement __isset() method.
          echo '你想判断我的',$name,'属性存不存在<br />';
          if(isset($this->arr[$name])){
              return true;
          }
  
          return true;
      }
      public function __unset($name)
      {
          // TODO: Implement __unset() method.
          echo '你想删除我的',$name,'属性<br />';
          unset($this->arr[$name]);
      }
      public function __call($name, $arguments)
          {
              // TODO: Implement __call() method.
              // 将方法名当做$name传入, 将参数以数组的形式当做$arguments传入。
              echo '你想添加方法'.$name.'<br />';
              if($name === 'changeName') {
                 foreach ($arguments as $key=>$value) {
                     $this->arr[$key] = $value;
                 }
                  print_r($this->arr);
              }
          }
      public static function __callStatic($name, $arguments)
          {
              // TODO: Implement __callStatic() method.
              echo '<br/>你想通过__callStatic()添加方法'.$name.'<br />';
              if($name === 'Static_change') {
                  foreach ($arguments as $key=>$value) {
                      self::$static_arr[$key] = $value;
                  }
                  print_r(self::$static_arr);
                  echo '<br />';
              }
          }   
     
  }
  
  $car = new Car4();
  
  $car->name = '飞机'; // 你想通过__set设置属性name
  
  echo $car->name; // 你想删除我的name属性
  
  if(isset($car->name)){ // 你想判断我的name属性存不存在
  
  }
  $car4->changeName('大炮', '火箭'); // Array ( [name] => 飞机 [0] => 大炮 [1] => 火箭 ) 
  $car4::Static_change('Static_大炮', 'Static_火箭'); // Array ( [0] => Static_大炮 [1] => Static_火箭 ) 
  unset($car->name); // 你想删除我的name属性
  ```
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    