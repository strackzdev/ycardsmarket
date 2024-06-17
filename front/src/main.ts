import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createPinia } from 'pinia'
import axios from 'axios'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (localStorage.getItem('token')) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

app.mount('#app')
