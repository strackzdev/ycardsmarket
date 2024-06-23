<template>
  <div class="md:px-8 lg:px-24 py-8 mt-20">
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
      <CardLorcanaComponent v-for="card in cards" :key="card.id" :card=card />
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
import axios, { type AxiosResponse } from 'axios';
import { onMounted, ref, type Ref } from 'vue';
import { CardLorcanaType, CardLorcanaSet, CardLorcanaRarity, CardLorcanaProperty } from '@/components/card/CardLorcanaEnum';
import type { Page } from '@/types/page';

// Type
export interface Filter {
  filterName: string,
  value: string
}

// Consts
const quantityOfCardToAdd = 20;

// Variables
let pageIndex = 0;
let totalPages = 0;

// Refs
const cards = ref<CardLorcana[]>([]);
const filters = ref<Filter[]>([]);

const searchValue: Ref<string | undefined> = ref();
const filterSet: Ref<string | undefined> = ref();
const filterType: Ref<string | undefined> = ref();
const filterRarity: Ref<string | undefined> = ref();

// Hooks
onMounted(async () => {
  const cardRetrieved = await getCards(quantityOfCardToAdd)
  cards.value = [...cardRetrieved.data.items];
})

// Functions
async function getCards(pageSize: number, filters?: Filter[], pageIndex?: number): Promise<AxiosResponse<Page<CardLorcana>, any>> {
  let params = "";

  if(filters) {
    filters.forEach(filter => {
      params += `&${CardLorcanaProperty[filter.filterName.toUpperCase() as keyof typeof CardLorcanaProperty]}=${filter.value}`;
    })
  }

  if(pageIndex) {
    params += `&pageIndex=${pageIndex}`;
  }

  console.log("params :", params)

  const res = await axios.get<Page<CardLorcana>>(`${import.meta.env.VITE_BACKEND_PROXY}/cards?sortDirection=ASC&sortBy=name&pageSize=${pageSize}${params}`)
  totalPages = res.data.totalPages;

  return res;
}

async function intersected() {
  if(pageIndex < totalPages) {
    pageIndex++;
    const cardRetrieved = await getCards(quantityOfCardToAdd, filters.value, pageIndex);
    cards.value = [...cards.value, ...cardRetrieved.data.items];
  }
}

function getSearchValue(filter: Filter) {
  searchValue.value = filter.value;

  // refreshCards();
}

function findAndReplaceOrPush(arr: Filter[], target: Filter) {
  if (arr.some((element, index) => {
    if (element.filterName === target.filterName) {
      target.value ? arr[index] = target : arr.splice(index, 1)
      return true;
    }
    return false;
  })) {
      return arr;
  } else {
      arr.push(target);
      return arr;
  }
}

async function getFilterValue(filter: Filter) {
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

  findAndReplaceOrPush(filters.value, filter)

  pageIndex = 0;

  const cardRetrieved = await getCards(quantityOfCardToAdd, filters.value)
  cards.value = [... cardRetrieved.data.items];
}

function searchByName(cards: CardLorcana[], value: string): CardLorcana[] {
  return cards.filter(card => card.name.toLowerCase().includes(value.toLowerCase()))
}

</script>
