import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createPinia } from 'pinia'
import { setAccessTokenInterceptorRequest, handleExpiredTokenInterceptorResponse } from './interceptors/token'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

setAccessTokenInterceptorRequest();
handleExpiredTokenInterceptorResponse();

app.mount('#app')
