<template>
  <CardLorcanaComponent v-for="card in cardsDisplayed" :key="card.id" :card=card />
  <InfiniteScrollingComponent @intersect="intersected"/>
</template>

<script setup lang="ts">
import type { CardLorcana } from '@/components/card/CardInterface';
import CardLorcanaComponent from '@/components/card/CardLorcanaComponent.vue';
import InfiniteScrollingComponent from '@/components/utils/InfiniteScrollingComponent.vue';


import axios from 'axios';
import { onMounted, ref, type Ref } from 'vue';

// Consts
const quantityOfCardToAdd = 10;

// Refs
let cards: CardLorcana[] = [];
const cardsDisplayed: Ref<CardLorcana[]> = ref([]);

// Hooks
onMounted(async() => {
  cards.push(...await getCards());
  getCardsByQuantity(quantityOfCardToAdd);
})

// Functions
async function getCards(): Promise<CardLorcana[]> {
  return (await axios.get('https://ycardsmarket.onrender.com/api/v1/lorcana/?format=json')).data;
}

function getCardsByQuantity(quantity: number): void { 
  cardsDisplayed.value.push(...cards.splice(0, quantity));
}

async function intersected() {
  getCardsByQuantity(quantityOfCardToAdd);
}
</script>
