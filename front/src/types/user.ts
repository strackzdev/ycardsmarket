import type { JwtPayload } from 'jwt-decode';


export interface User extends JwtPayload {
    "typ": string,
    "azp": string,
    "session_state": string,
    "acr": string,
    "allowed-origins": string[],
    "realm_access": {
        "roles": string[]
    },
    "resource_access": {
        "trady-go-login": {
        "roles": string[]
        },
        "account": {
        "roles": string[]
        }
    },
    "scope": string,
    "sid": string,
    "given_name": string,
    "family_name": string,
    "email_verified": boolean,
    "preferred_username": string,
    "email": string
}