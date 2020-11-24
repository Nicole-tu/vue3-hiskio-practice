import { createApp } from 'vue'
import router from './router'
import App2 from './App2.vue'
import '@/assets/css/reset.css'

createApp(App2).use(router).mount('#app')
