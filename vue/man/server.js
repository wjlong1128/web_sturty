const http = require('node:http')
const app = http.createServer((req, res) => {
    console.log(req.url.toString())
    res.setHeader('Content-type', 'application/json;charset=utf-8')
    res.end(JSON.stringify({
        code: 200, data: {
            name: 'zhangsan',
            age: 18
        }
    }))
})

app.listen(8080, () => {
    console.log('listen port 8080...')
})