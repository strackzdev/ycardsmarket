export enum CardLorcanaTypeEnum {
    ACTION="Action",
    ACTION_SONG="Action - Song",
    LOCATION="Location",
    ITEM="Item",
    CHARACTER="Character"
}

export enum CardLorcanaRarityEnum {
    COMMON="Common",
    UNCOMMON="Uncommon",
    RARE="Rare",
    SUPER_RARE="Super Rare",
    LEGENDARY="Legendary"
}

export enum CardLorcanaSetEnum {
    INTO_THE_INKLANDS="Into the Inklands",
    THE_FIRST_CHAPTER="The First Chapter",
    RISE_OF_THE_FLOODBORN="Rise of the Floodborn",
    URSULAS_RETURN="Ursula's Return"
}

export const cardMappingProperties = {
    "set_name": CardLorcanaSetEnum,
    "type": CardLorcanaTypeEnum,
    "rarity": CardLorcanaRarityEnum
}