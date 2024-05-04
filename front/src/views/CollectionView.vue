<template>
  <SearchBarComponent @search="getSearch" />
  <div class="max-w-96 px-4 md:max-w-full m-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
    <CardLorcanaComponent v-for="card in cardsDisplayed" :key="card.id" :card=card />
    <InfiniteScrollingComponent @intersect="intersected"/>
  </div>
</template>

<script setup lang="ts">
import type { CardLorcana } from '@/components/card/CardInterface';
import CardLorcanaComponent from '@/components/card/CardLorcanaComponent.vue';
import InfiniteScrollingComponent from '@/components/utils/InfiniteScrollingComponent.vue';
import SearchBarComponent from '@/components/utils/SearchBarComponent.vue'


import axios from 'axios';
import { onMounted, ref, type Ref } from 'vue';

// Consts
const quantityOfCardToAdd = 20;

// Variables
let cards: CardLorcana[] = [];
let cardsRemainingToDisplay: CardLorcana[] = [];

// Refs
const cardsDisplayed: Ref<CardLorcana[]> = ref([]);

// Hooks
onMounted(async() => {
  cards.push(...await getCards());
  cardsRemainingToDisplay = [...cards]

  getCardsByQuantity(quantityOfCardToAdd);
})

// Functions
async function getCards(): Promise<CardLorcana[]> {
  return (await axios.get('https://ycardsmarket.onrender.com/api/v1/lorcana/?format=json')).data;
}

function getCardsByQuantity(quantity: number): void { 
  cardsDisplayed.value.push(...cardsRemainingToDisplay.splice(0, quantity));
}

function resetCardsDisplayed() {
  cardsDisplayed.value = []
}

async function intersected() {
  getCardsByQuantity(quantityOfCardToAdd);
}

function getSearch(text: string) {
  filterCardsDisplayed(text)
  resetCardsDisplayed()
  getCardsByQuantity(quantityOfCardToAdd)
}

function filterCardsDisplayed(text: string) {
  const cardsCopy: CardLorcana[]  = [...cards]

  cardsRemainingToDisplay = cardsCopy.filter(card => card.name.toLowerCase().includes(text.toLowerCase()))
}
</script>
