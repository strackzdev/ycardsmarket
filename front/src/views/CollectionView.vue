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
      <InfiniteScrollingComponent rootMargin="500px" @intersect="intersected"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Card } from '@/components/card/CardInterface'; 
import CardLorcanaComponent from '@/components/card/lorcana/CardLorcanaComponent.vue';
import InfiniteScrollingComponent from '@/components/utils/InfiniteScrollingComponent.vue';
import SearchBarComponent from '@/components/utils/SearchBarComponent.vue';
import FilterDropdownComponent, { type Filter } from '@/components/utils/FilterDropdownComponent.vue';
import axios, { type AxiosResponse } from 'axios';
import { onMounted, ref, type Ref } from 'vue';
import { CardLorcanaType, CardLorcanaSet, CardLorcanaRarity, CardLorcanaProperty } from '@/components/card/lorcana/CardLorcanaEnum';
import type { Page } from '@/types/page';

// Consts
const quantityOfCardToAdd = 20;

// Variables
let pageIndex = 0;
let totalPages = 0;

// Refs
const cards = ref<Card[]>([]);
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
async function getCards(pageSize: number, filters?: Filter[], pageIndex?: number, search?: string): Promise<AxiosResponse<Page<Card>, any>> {
  let params = "";

  if(filters) {
    filters.forEach(filter => {
      params += `&${CardLorcanaProperty[filter.filterName.toUpperCase() as keyof typeof CardLorcanaProperty]}=${filter.value}`;
    })
  }

  if(search) {
    params += `&name=${search}`
  }

  if(pageIndex) {
    params += `&pageIndex=${pageIndex}`;
  }

  const res = await axios.get<Page<Card>>(`${import.meta.env.VITE_BACKEND_PROXY}/cards?sortDirection=ASC&sortBy=name&pageSize=${pageSize}${params}`)
  totalPages = res.data.totalPages;

  return res;
}

async function intersected(): Promise<void> {
  if(pageIndex < totalPages) {
    pageIndex++;

    cards.value = [
      ...cards.value,
      ...(await getCards(quantityOfCardToAdd, filters.value, pageIndex, searchValue.value)).data.items
    ];
  }
}

async function getSearchValue(filter: Filter): Promise<void> {
  searchValue.value = filter.value;
  pageIndex = 0;
  cards.value = [...(await getCards(quantityOfCardToAdd, filters.value, pageIndex, searchValue.value)).data.items]
}

function findAndReplaceOrPush(arr: Filter[], target: Filter): Filter[] {
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

async function getFilterValue(filter: Filter): Promise<void> {
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
  cards.value = [...(await getCards(quantityOfCardToAdd, filters.value, pageIndex, searchValue.value)).data.items]
}
</script>
