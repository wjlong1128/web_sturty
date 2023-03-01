const http = require('node:http')
const server = http.createServer((request, response) => {
    response.writeHead(200, {
        'Access-Control-Allow-Credentials': 'true',     // 后端允许发送Cookie
        'Access-Control-Allow-Origin': '*',    // 允许访问的域（协议+域名+端口）
        /* 
         * 此处设置的cookie还是domain2的而非domain1，因为后端也不能跨域写cookie(nginx反向代{过}{滤}理可以实现)，
         * 但只要domain2中写入一次cookie认证，后面的跨域接口都能从domain2中获取cookie，从而实现所有的接口都能跨域访问
         */
    });
    response.end('hello world')
})

server.listen(8080, () => {
    console.log('启动成功')
})