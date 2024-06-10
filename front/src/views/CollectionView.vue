<template>
  <div class="md:px-8 lg:px-24 py-8">
    <h1 class="mb-10 navy-blue font-bold text-center md:text-left text-xl md:text-5xl">OVERALL CARDS - GAME NAME</h1>

    <SearchBarComponent class="mb-5 px-2 md:px-0" @search="getSearchValue" />
    <div class="flex flex-col md:flex-row">
      <FilterDropdownComponent class="ml-2 md:ml-0 mr-2 mt-2" filter-name="set_name" :filter-by="CardLorcanaSet" @filter="getFilterValue"/>
      <FilterDropdownComponent class="ml-2 md:ml-0 mr-2 mt-2" filter-name="type" :filter-by="CardLorcanaType" @filter="getFilterValue"/>
      <FilterDropdownComponent class="ml-2 md:ml-0 mr-2 mt-2" filter-name="rarity" :filter-by="CardLorcanaRarity" @filter="getFilterValue"/>
    </div>
  </div>
  <div class="min-h-screen navy-blue-bg md:px-8 lg:px-24 py-8">
    <div class="px-4 md:max-w-full m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16">
      <CardLorcanaComponent v-for="card in cardsDisplayed" :key="card.id" :card=card />
      <InfiniteScrollingComponent @intersect="intersected"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CardLorcana } from '@/components/card/CardInterface';
import CardLorcanaComponent from '@/components/card/CardLorcanaComponent.vue';
import InfiniteScrollingComponent from '@/components/utils/InfiniteScrollingComponent.vue';
import SearchBarComponent from '@/components/utils/SearchBarComponent.vue';
import FilterDropdownComponent from '@/components/utils/FilterDropdownComponent.vue';
import axios from 'axios';
import { onMounted, ref, type Ref } from 'vue';
import { CardLorcanaType, CardLorcanaSet, CardLorcanaRarity } from '@/components/card/CardLorcanaEnum';

// Type
export interface Filter {
  filterName: string,
  value: string
}

// Consts
const quantityOfCardToAdd = 20;

// Variables
let cards: CardLorcana[] = [];

// Refs
const cardsDisplayed: Ref<CardLorcana[]> = ref([]);
const cardsRemainingToDisplay: Ref<CardLorcana[]> = ref([]);

const searchValue: Ref<string | undefined> = ref();
const filterSet: Ref<string | undefined> = ref();
const filterType: Ref<string | undefined> = ref();
const filterRarity: Ref<string | undefined> = ref();

// Hooks
onMounted(async() => {
  cards.push(...await getCards());
  cardsRemainingToDisplay.value = [...cards]

  getCardsByQuantity(quantityOfCardToAdd);
})

// Functions
async function getCards(): Promise<CardLorcana[]> {
  return (await axios.get('https://ycardsmarket.onrender.com/api/v1/lorcana/?format=json')).data;
}

function getCardsByQuantity(quantity: number): void { 
  cardsDisplayed.value.push(...cardsRemainingToDisplay.value.splice(0, quantity));
}

function resetCardsDisplayed() {
  cardsDisplayed.value = []
}

async function intersected() {
  getCardsByQuantity(quantityOfCardToAdd);
}

function getSearchValue(filter: Filter) {
  searchValue.value = filter.value;

  refreshCards();
}

function getFilterValue(filter: Filter) { 
  switch(filter.filterName) {
    case 'set_name':
    filterSet.value = filter.value;
      break;
    case 'type':
    filterType.value = filter.value;
      break;
    case 'rarity':
    filterRarity.value = filter.value;
      break;
  }

  refreshCards();
}

function refreshCards(): void {
  let cardsCopy: CardLorcana[]  = [...cards]

  if (searchValue.value) {
    cardsCopy = searchByName(cardsCopy, searchValue.value)
  }

  if (filterSet.value) {
    cardsCopy = filterBy(cardsCopy, 'set_name', filterSet.value)
  }
  if (filterType.value) {
    cardsCopy = filterBy(cardsCopy, 'type', filterType.value)
  }
  if (filterRarity.value) {
    cardsCopy = filterBy(cardsCopy, 'rarity', filterRarity.value)
  }
  
  cardsRemainingToDisplay.value = cardsCopy;

  resetCardsDisplayed()
  getCardsByQuantity(quantityOfCardToAdd)

}

function searchByName(cards: CardLorcana[], value: string): CardLorcana[] {
  return cards.filter(card => card.name.toLowerCase().includes(value.toLowerCase()))
}

function filterBy(cards: CardLorcana[], filterName: string, value: string) {
  return cards.filter(card => callback(card, filterName, value))
}

function callback(card: CardLorcana, filterName: string, value: string) {
  return (card[filterName as keyof CardLorcana] as string).toLowerCase() === value.toLowerCase()
}
</script>