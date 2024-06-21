import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
import { createPinia } from 'pinia'
import axios, { type InternalAxiosRequestConfig, AxiosError } from 'axios'
import { logout } from './auth/auth'
import { getAccessToken, getRefreshToken, setAccessToken, setRefreshToken } from './auth/token'

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
      const data = { 
        grant_type: 'refresh_token',
        client_id: import.meta.env.VITE_KEYCLOAK_CLIEND_ID,
        refresh_token: getRefreshToken()
      };
    
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data,
        url: `${import.meta.env.VITE_KEYCLOAK_URL}/token`
      };
    
      try {     
        const response = await axios(options)

        setAccessToken(response.data.access_token);
        setRefreshToken(response.data.refresh_token);

        currentRequest.headers['Authorization'] = `Bearer ${getAccessToken()}`;

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
