export interface Card {
  id: number;
}

export interface CardLorcana extends Card{
    set_id?: string
    set_name?: string
    set_num?: number
    artist?: string
    color: string
    image_url?: string
    cost: number
    inkable: boolean
    name: string
    type: string
    rarity: string
    flavor_text?: string
    card_number: number
    body_text?: string
    lore?: number
    willpower?: number
    strength?: number
    move_cost?: number
    classifications?: string
    abilities?: string
    card_variants?: string
  }