import axios, { type InternalAxiosRequestConfig, AxiosError } from 'axios'
import { getAccessToken } from '../auth/token';
import { logout } from '@/auth/auth'; 
import { renewAccessToken } from '../auth/token';
import router from '@/router';

const setAccessTokenInterceptorRequest = () => {
  axios.interceptors.request.use((config) => {
    const access_token = getAccessToken();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  });
}

const handleExpiredTokenInterceptorResponse = () => {
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
}

export {
  setAccessTokenInterceptorRequest,
  handleExpiredTokenInterceptorResponse
}