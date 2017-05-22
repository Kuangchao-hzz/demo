<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/15
 * Time: 14:33
 */
class Car {
    public static $name = '汽车';

    public static function getName () {
        echo self::$name;
    }
}

class BigCar extends Car {
    public static function start() {
        parent::getName();
    }
}

$car = new Car();
BigCar::start();
echo BigCar::getName();
echo '<br/>';

class Car1 {
    private function __construct(){
        echo '<br/>';
        echo 'this is private method';
    }
    private static $_object = null;
    public static function getInstance () {
        echo '创建实例中...';
        if(empty(self::$_object)){
            echo 'create construct';
            self::$_object = new Car1();
        }
        return self::$_object;
    }
}
$car1 = Car1::getInstance();

echo '<br/>';

// 继承

class Car3 {
    public $speed = 0; //汽车的起始速度是0

    public function speedUp() {
        $this->speed += 10;
        return $this->speed;
    }
}

class Truck extends Car3 {
    public function speedUp1() {
        $this->speed += 50;
        return $this->speed;
    }
}
$car3 = new Truck();
$car3->speedUp();
echo $car3->speed;

// 重载__set __get __isset __unset
echo '<br/>';

class Car4 {
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
        echo '你想通过__call()添加方法'.$name.'<br />';
        if($name === 'changeName') {
            echo $this->arr['name'];
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

$car4 = new Car4();
$car4->name = '飞机';
echo $car4->name;
if(isset($car4->name)){

}
$car4->changeName('大炮', '火箭');
$car4::Static_change('Static_大炮', 'Static_火箭');
unset($car4->name);

