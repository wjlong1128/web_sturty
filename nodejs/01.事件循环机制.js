// setTimeout(()=>{
//     console.log(2)
// })

// Promise.resolve(1).then(()=>{
//     console.log(0)
// })
// // 向微任务队列中添加代码
// queueMicrotask(()=>{
//     console.log(1)
// })

Promise.resolve(0).then(
    ()=>{
        // 将任务挂载在宏任务队列中
        setTimeout(()=>{
            console.log(2)
        })
    }
)

queueMicrotask(()=>{
    console.log(1)
})