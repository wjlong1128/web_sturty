// window 是浏览器的宿主对象
// global 是node中的全局对象 作用类似于window
// ES的标准下 全局对象的标准名应该是 globalThis
console.log(global === globalThis) // true

// 核心模块
/*
    process 
        - 表示当前的node进程 
 */
// console.log(process)    
// process.exit(1) 结束进程 不填默认0
process.nextTick(()=>{
    // 类似于queueMicrotask() 将函数插入tick队列中
    //  调用栈-> tick-> 微任务队列-> 宏任务队列
    // 会在下一次任务循环开始执行
    console.log(1)
})

console.log(0)

