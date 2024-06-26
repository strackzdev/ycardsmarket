import type { Card, CardGame } from "@/components/card/CardInterface"
import type { BaseEntity } from "./baseEntity"

interface TradeCard {
    "id": string,
    "card": Card,
    "quantity": number
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
    "proposerUID": string,
    "acceptorUID": string | null,
    "proposerCards": TradeCard[],
    "acceptorCards": TradeCard[],
    "shipping": TradeShipping
}