import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createPinia } from 'pinia'
import axios, { type InternalAxiosRequestConfig, AxiosError } from 'axios'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)

axios.interceptors.request.use((config) => {
  const access_token = localStorage.getItem('access_token')
  if (localStorage.getItem('access_token')) {
    config.headers.Authorization = `Bearer ${access_token}`;
  }
  return config;
})

axios.interceptors.response.use(
  (res) => { return res },
  async (error: AxiosError) => {
    const currentRequest: InternalAxiosRequestConfig<any> | undefined = error.config

    if(error.response && error.response.status === 401 && currentRequest) {
      const data = { 
        grant_type: 'refresh_token',
        client_id: import.meta.env.VITE_KEYCLOAK_CLIEND_ID,
        refresh_token: localStorage.getItem('refresh_token')
      };
    
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data,
        url: `${import.meta.env.VITE_KEYCLOAK_URL}/token`
      }
    
      try {     
        const resp = await axios(options)

        localStorage.setItem('access_token', resp.data.access_token)
        localStorage.setItem('refresh_token', resp.data.refresh_token)

        currentRequest.headers['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`

        return await axios(currentRequest)
      } catch (err) {
        router.push({ name: 'login'})

        localStorage.removeItem('access_token');
        localStorage.removeItem('refresh_token');

        return Promise.reject('Unauthorized');
      }
    } 

    return Promise.reject(error);
  }
)

app.mount('#app')
