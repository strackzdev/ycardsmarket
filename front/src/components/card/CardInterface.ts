import type { BaseEntity } from "@/types/baseEntity";

export interface CardGame extends BaseEntity {
  id: string;
  label: string;
  description: string;
}

export interface Card extends BaseEntity {
  id: string;
  attributes: string;
  name: string;
  imageUrl: string;
  setName: string;
  type: string;
  rarity: string;
  cardGame: CardGame;
}