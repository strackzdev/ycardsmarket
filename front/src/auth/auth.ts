import axios from 'axios'
import { 
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  setAccessToken,
  setRefreshToken
} from './token';

const isAuthenticated = (): boolean => {
  return getAccessToken() && getRefreshToken() ? true : false;
}

const login = async (username: string, password: string) => {
  const data = { 
    username: username,
    password: password,
    grant_type: 'password',
    client_id: import.meta.env.VITE_KEYCLOAK_CLIEND_ID,
  };

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data,
    url: `${import.meta.env.VITE_KEYCLOAK_URL}/token`
  }

  const res = await axios(options);

  setAccessToken(res.data.access_token);
  setRefreshToken(res.data.refresh_token);
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
    login,
    logout
}