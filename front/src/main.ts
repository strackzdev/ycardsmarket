import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createPinia } from 'pinia'
import axios, { type InternalAxiosRequestConfig, AxiosError } from 'axios'
import { logout } from './auth/auth'
import { getAccessToken, renewAccessToken } from './auth/token'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

axios.interceptors.request.use((config) => {
  const access_token = getAccessToken();
  if (access_token) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
})

axios.interceptors.response.use(
  (res) => { return res },
  async (error: AxiosError) => {
    const currentRequest: InternalAxiosRequestConfig<any> | undefined = error.config

    if(error.response && error.response.status === 401 && currentRequest) {
      try {
        const access_token = await renewAccessToken();
        currentRequest.headers['Authorization'] = `Bearer ${access_token}`;

        return await axios(currentRequest);
      } catch (e) {
        await logout();

        router.push({name:'login'});

        return Promise.reject('Unauthorized');
      }
    } 

    return Promise.reject(error);
  }
)

app.mount('#app')
