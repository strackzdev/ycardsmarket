<template>
  <div class="max-w-96 px-4 md:max-w-full m-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-4">
    <CardLorcanaComponent v-for="card in cardsDisplayed" :key="card.id" :card=card />
    <InfiniteScrollingComponent @intersect="intersected"/>
  </div>
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
