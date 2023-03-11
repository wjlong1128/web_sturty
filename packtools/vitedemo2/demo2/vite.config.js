import { defineConfig } from "vite";

import legacy from '@vitejs/plugin-legacy'
// 写这个有自动提示
export default defineConfig({
    plugins: [legacy({
        targets: ["ie 11"]
    })]
})