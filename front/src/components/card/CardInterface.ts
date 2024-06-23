export interface CardGame {
  id: string;
  label: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface Card {
  id: string;
  attributes: string;
  name: string;
  imageUrl: string;
  setName: string;
  type: string;
  rarity: string;
  cardGame: CardGame;
  createdAt: string;
  updatedAt: string;
}