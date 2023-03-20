import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
// https://vitejs.dev/config/
// import MyTsx  from './plugin/index'
import AutoImport from 'unplugin-auto-import/vite'
export default defineConfig({
  plugins: [
    vue(),
    // MyTsx(),
    vueJsx(),
    AutoImport({
      imports:['vue']
    })
  ],
});
