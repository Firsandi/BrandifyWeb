import { createApp } from 'vue'
import App from './App.vue'
import router from './router'   // pastikan ini benar
import './assets/main.css'


createApp(App)
  .use(router)
  .mount('#app')
