import { createApp } from 'vue'
import './style.css'
import App from './05_响应式修饰.vue'

const app = createApp(App)
const vm = app.mount('#app')
console.log(vm)

window.vm = vm