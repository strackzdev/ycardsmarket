import axios from 'axios'
import { getAccessToken, getRefreshToken, removeAccessToken, removeRefreshToken } from './token';

const isAuthenticated = (): boolean => {
    return getAccessToken() && getRefreshToken() ? true : false;
}

const logout = async (): Promise<void> => {
    const data = { 
        client_id: import.meta.env.VITE_KEYCLOAK_CLIEND_ID,
        refresh_token: getRefreshToken()
      };
      
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data,
        url: `${import.meta.env.VITE_KEYCLOAK_URL}/logout`
      }
      
      await axios(options);
      
      removeAccessToken();
      removeRefreshToken();
}

export { 
    isAuthenticated,
    logout
}