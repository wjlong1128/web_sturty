const express = require('express')

express.static('./img')

const app = express()
app.use('/',(request,response,next)=>{
    console.log('当前路由通过')
    next()
})
app.get('/',(request,response)=>{
    response.setHeader('content-type','application/json;charset=utf-8')
    response.status(200)
    response.end('访问成功')
})

app.listen(3000)
