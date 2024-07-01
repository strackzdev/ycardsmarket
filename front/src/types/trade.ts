import type { Card, CardGame } from "@/components/card/CardInterface"
import type { BaseEntity } from "./baseEntity"

interface TradeUserInfo extends BaseEntity{
    "keycloakUUID": string,
    "preferred_username": string,
    "email": string,
    "name": string | null,
    "family_name": string | null,
    "given_name": string | null,
    "email_verified": boolean,
}

export interface TradeCard {
    "id": string,
    "card": Card,
    "quantity": number,
    "foil": boolean
}

interface TradeShipping extends BaseEntity {
    "id": string,
    "method": string,
    "proposerTrackingNumber": string | null,
    "acceptorTrackingNumber": string | null,
    "proposerDelivered": boolean,
    "acceptorDelivered": boolean,
}

export interface Trade extends BaseEntity {
    "id": string,
    "financialGarantee": boolean,
    "cardGame": CardGame
    "proposer": TradeUserInfo,
    "acceptor": TradeUserInfo | null,
    "proposerCards": TradeCard[],
    "acceptorCards": TradeCard[],
    "shipping": TradeShipping
}