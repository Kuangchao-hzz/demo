<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/5/15
 * Time: 10:09
 */

echo 'success!';
echo '<br/>';
echo $p= 'PII';
echo '<br/>';
define('PI', 3.14);
define($p, 3.14);
echo PII;
echo '<br/>';
echo PI;

$students = array(
    '2010'=>'令狐冲',
    '2011'=>'林平之',
    '2012'=>'曲洋',
    '2013'=>'任盈盈',
    '2014'=>'向问天',
    '2015'=>'任我行',
    '2016'=>'冲虚',
    '2017'=>'方正',
    '2018'=>'岳不群',
    '2019'=>'宁中则',
);

foreach ($students as $v){
    echo $v;
    echo '<br/>';
}

function say() {
    echo 'hello world';
}

say();

class book {
    function getName () {
        return 'bookname';
    }
}

$fun = 'getname';
$book = new book;
echo $book->$fun();

echo '<br />';
// 字符串处理

$str = 'i am jobs';
$str = str_replace('jobs', 'steven jobs', $str);
echo $str;
echo '<br />';
$fruit = array("苹果","香蕉","菠萝");
print_r($fruit);
echo '<br />';
echo $fruit[0];
count($fruit);
$fruit1 = array("apple"=>"苹果", "banana"=>"香蕉", "pineapple"=>"菠萝");
echo count($fruit1);
foreach ($fruit1 as $key=>$v){
    echo $key;
}

// 类

class Car {
    public $name = '奥迪';
    function __construct()
    {
        print "构造函数被调用\n";
    }

    function getCarName() {
        return $this->name;
    }
}

$car = new Car();
echo $car->getCarName();
