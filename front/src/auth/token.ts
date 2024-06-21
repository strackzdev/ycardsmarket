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

export { 
    getAccessToken,
    getRefreshToken,
    setAccessToken,
    setRefreshToken,
    removeAccessToken,
    removeRefreshToken
}