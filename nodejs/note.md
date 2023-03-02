## Node.js
- 运行在服务端的js
- 用来编写服务器
- 特点
  - 单线程 异步 非阻塞
## 安装
- [官网安装](https://nodejs.org/)
- [nvm安装](https://github.com/nvm-sh/nvm)

## 执行流程 事件循环机制(event loop)
1. 首先执行调用栈中的代码 也就是同步代码
2. 执行微任务队列中的代码 （Proimse的then,catch,finally）
3. 执行宏任务队列中的代码 （setTimeout...）