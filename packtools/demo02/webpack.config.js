// const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "mian.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // 逆序执行
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HTMLPlugin({
      title: "首页",
      template: "./index.html",
    }),
  ],
  //   浏览器控制台可以看到源代码 调试
  devtools: "inline-source-map",
};
