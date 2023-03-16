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