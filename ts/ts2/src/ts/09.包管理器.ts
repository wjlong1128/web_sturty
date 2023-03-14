/*
开源社区推出了一套 @types 类型包，专门处理这样的情况。
@types 类型包的命名格式为 @types/<package-name> ，
也就是在原有的包名前面拼接 @types ，
日常开发要用到的知名 npm 包都会有相应的类型包，
只需要将其安装到 package.json 的 devDependencies 里即可解决该问题。
*/
import md5 from "md5";
import express from 'express'

console.log(md5('zhangsan'));

const app = express()
app.get('/test',(request,response,next)=>{
    response.send('hello')
})

app.listen(8080,()=>{
    console.log('http listen 8080...');
})

