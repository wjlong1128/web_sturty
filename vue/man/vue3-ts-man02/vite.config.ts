import { defineConfig,loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import pxToViewPort from "postcss-px-to-viewport";

// https://xiaoman.blog.csdn.net/article/details/125650172
import unoCsss from "unocss/vite";
import { presetIcons, presetAttributify, presetUno } from "unocss";
// 性能优化 https://blog.csdn.net/qq1195566313/article/details/126811832
import {visualizer} from 'rollup-plugin-visualizer'
// https://vitejs.dev/config/
export default ({mode}:any) => {
  console.log(mode);
  console.log(loadEnv(mode,process.cwd()));
  return defineConfig({
    server:{
      proxy:{
        '/api':{
          target:'http://localhost:8080',
          rewrite:(path)=> path.replace(/^\/api/,'')   
        }
      }
    },
    plugins: [
      vue({ reactivityTransform: true,
        template:{
          compilerOptions:{
            isCustomElement:(tag)=>{
              return tag.includes('wjl-')   
            }
          }
        }
      }),
      visualizer({open:true}),
      unoCsss({
        rules: [
          [/^m-(\d+)$/, ([, d]) => ({ margin: `${Number(d) * 10}px` })],
          ["flex", { display: "flex" }],
          ["pink", { color: "pink" }],
        ],
        shortcuts: {
          btn: "pink flex",
        },
        presets: [presetIcons(), presetAttributify(), presetUno()],
      }),
    ],
    css: {
      postcss: {
        plugins: [
          pxToViewPort({
            unitToConvert: "px",
            viewportWidth: 320,
          }),
        ],
      },
    },
  });
};
