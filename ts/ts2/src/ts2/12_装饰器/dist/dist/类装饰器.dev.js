"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// function helloworld(target:any){ // 类装饰器 接收参数为构造器
//     // console.log('hello world',target);    
//     let t = new target()
//     console.log(Object.keys(t));
// }
var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}; // @helloworld// 类建立之后自动运行
// class HelloWorld{
//     constructor() {
//         console.log('我是构造函数')
//     }
//     name: string = 'hgjg'; 
// }
// // new HelloWorld()


var MyHello =
/** @class */
function () {
  function MyHello() {
    this.name = 'default';
    this.age = 0;
  }

  return MyHello;
}();

function helloworld(value) {
  return function (target) {
    // let t = new target()
    // t.helloworld = value
    // console.log(Object.keys(t));
    // 如果有返回值 那么此返回值返回的必须是构造函数
    // 构造函数是类静态的 这里直接替代
    console.log('我被调用了');
    return MyHello;
  }; // console.log('hello world',target);    
}

var HelloWorld =
/** @class */
function () {
  function HelloWorld() {
    this.name = 'hgjg';
    console.log('我是构造函数');
  }

  HelloWorld = __decorate([helloworld('hello') // 类建立之后自动运行
  ], HelloWorld);
  return HelloWorld;
}();

var t = new HelloWorld();
var t2 = new HelloWorld();
console.log(t);