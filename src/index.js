//1.ʹ��ES6�����﷨������jQuery

import $ from 'jquery'

//������ʽ(��webpack��һ�н�ģ�飬������ͨ��es6�����﷨���е����ʹ��)
import './css/index.css'

//����ͼƬ
import logo from '../img/logo.jpg'

console.log(logo)

//��img��ǩ��src��̬��ֵ
$('.box').attr('src', logo)


//2.����jQuery����ں���
$(function(){
    $('li:odd').css('background-color', 'red')
    $('li:even').css('background-color', 'pink')


})
//����װ��������
function info (target){
    target.info = 'Person info.'
}

//����һ����ͨ����

@info

class Person{

}

console.log(Person.info)
