# WebPack

1. 新建一个 webpack 项目
   - yarn init -y / npm init
   - 安装依赖`webpack` `webpack-cli`
   - `yarn add -D webpack webpack-cli` 安装开发依赖 没有这两个也能运行
   - 创建`src`目录 编写`index.js`
   - 执行打包 `yarn webpack`
   - 运行代码 `dist/main.js`
2. `src` webpack 运行的是前端项目 所以使用的是前端模块化规范
3. src 目录以外的是运行给 nodejs 的 遵循 nodejs 规范

# Vite

- 由于 webpack 的机制是先打包 再运行 比较慢
- Vite
  1. 开发时，并不对代码进行打包 而是直接采用 ESM 的方式来运行项目
  2. 在项目部署时，才对项目进行打包
  3. 开箱即用 不用配置过多的loader
  4. `yarn init -y && yarn add -D vite`
  5. 默认源码目录就是根目录
  6. 创建index.html文件 `<script type="module" src="./index.js"></script>`
  7. `yarn vite` 打包 `yarn build`

