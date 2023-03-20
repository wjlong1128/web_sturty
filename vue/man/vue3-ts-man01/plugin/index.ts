import type { Plugin } from "vite";
import * as babel from "@babel/core"; // 核心代码 支持将源代码转换为目标代码
import jsx from "@vue/babel-plugin-jsx"; // vite的插件 支持tsx v-model等

export default function (): Plugin {
  return {
    name: "vite-plugin-vue-tsx",
    config() {
      return {
        esbuild: {
          include: /.ts$/,
        },
      };
    },
    async transform(code, id) {
      //    console.log(code,id);
      if (/.tsx$/.test(id)) {
        console.log(code, id);
        //@ts-ignore
        const ts = await import("@babel/plugin-transform-typescript").then(
          (r) => r.default
        );
        const res = babel.transformAsync(code, {
          ast: true,
          configFile: false,
          babelrc: false,
          plugins: [jsx],
        });
      }
      return res?.code;
    },
  };
}
