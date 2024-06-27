import axios from 'axios'
import { jwtDecode } from 'jwt-decode'
import type { JwtPayload } from 'jwt-decode'

const getAccessToken = (): string | null => {
    return localStorage.getItem('access_token');
}

const setAccessToken = (access_token: string): void => {
    localStorage.setItem('access_token', access_token);
}

const removeAccessToken = (): void => {
    localStorage.removeItem('access_token');
}

const getRefreshToken = (): string | null => {
    return localStorage.getItem('refresh_token');
}

const setRefreshToken = (refresh_token: string): void => {
    localStorage.setItem('refresh_token', refresh_token);
}

const removeRefreshToken = (): void => {
    localStorage.removeItem('refresh_token');
}

const renewAccessToken = async (): Promise<string> => {
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
    
    const response = await axios(options)
    setAccessToken(response.data.access_token);
    setRefreshToken(response.data.refresh_token);

    return response.data.access_token;
}

const decodeToken = (token: string | null) : JwtPayload => {
    if(!token) return {} as JwtPayload;
    return jwtDecode(token);
}

export { 
    getAccessToken,
    getRefreshToken,
    setAccessToken,
    setRefreshToken,
    removeAccessToken,
    removeRefreshToken,
    renewAccessToken,
    decodeToken
}