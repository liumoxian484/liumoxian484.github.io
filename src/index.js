//1.使用ES6导入语法，导入jQuery

import $ from 'jquery'

//导入样式(在webpack中一切皆模块，都可以通过es6导入语法进行导入和使用)
import './css/index.css'

//导入图片
import logo from '../img/logo.jpg'

console.log(logo)

//给img标签的src动态赋值
$('.box').attr('src', logo)


//2.定义jQuery的入口函数
$(function(){
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'pink')


})
//定义装饰器函数
function info (target){
    target.info = 'Person info.'
}

//定义一个普通的类

@info

class Person{

}

console.log(Person.info)
