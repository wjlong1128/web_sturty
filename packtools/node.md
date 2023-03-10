# WebPack
1. 新建一个webpack项目
    * yarn init -y / npm init
    * 安装依赖`webpack` `webpack-cli`
    * `yarn add -D webpack webpack-cli` 安装开发依赖 没有这两个也能运行
    * 创建`src`目录 编写`index.js`
    * 执行打包 `yarn webpack`
    * 运行代码 `dist/main.js`
2. `src` webpack运行的是前端项目 所以使用的是前端模块化规范
3. src目录以外的是运行给nodejs的 遵循nodejs规范
