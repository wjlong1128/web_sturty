import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import axios from 'axios'
const instance = axios.create({baseURL:'http://localhost:8080',timeout:2000})
const app = createApp(App)
// 改变函数所处实例时 会改变this指向 所以这里bind
app.config.globalProperties.hi = alert.bind(window)
app.config.globalProperties.$http = instance
app.mount('#app')
