## npm run dev
1. package.json `"dev": "vite",`
2. node_modules/vite/package.json 执行该软链接
```json
"bin": {
    "vite": "bin/vite.js"
  },
```
windows下执行该脚本
```shell
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\vite\bin\vite.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\vite\bin\vite.js" %*
)
```

## JSX  
`yarn add @vitejs/plugin-vue-jsx -D`

## babel
源代码--parse(编译)--> 抽象语法树AST --转换过程(transform)--> 修改后的AST --生成器(genertor)--> 转换后的代码

http://t.csdn.cn/Xef2J

## 移动端
`npm install postcss-px-to-viewport -D`

## node进程管理
`npm i pm2 -g`
`pm2 start <fileName>  [--watch]`
`pm2 log`
`pm2 list`
`pm2 stop <id>`
`pm2 restart <id>`
`pm2 monit`