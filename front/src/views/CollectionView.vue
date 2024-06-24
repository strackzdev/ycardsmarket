<template>
  <div class="md:px-8 lg:px-24 py-8 mt-20">
    <h1 class="mb-10 navy-blue font-bold text-center md:text-left text-xl md:text-5xl">OVERALL CARDS - GAME NAME</h1>

    <SearchBarComponent class="mb-5 px-2 md:px-0" @search="getSearchValue" />
    <div class="flex flex-col md:flex-row">
      <FilterDropdownComponent class="ml-2 md:ml-0 mr-2 mt-2" filter-name="cardGame" :filter-by="Game" @filter="getGameValue"/>
      <FilterDropdownComponent v-for="filterCommon in filtersCommon" class="ml-2 md:ml-0 mr-2 mt-2" :filter-name="filterCommon.filterName" :filter-by="filterCommon.filterBy" @filter="getFilterValue"/>
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
import { ref, type Ref } from 'vue';
import { cardLorcanaMappingProperties } from '@/components/card/lorcana/CardLorcanaEnum';
import { CardProperty, Game } from '@/components/card/CardEnum';
import type { Page } from '@/types/page';
import type { FilterOption } from '../components/utils/FilterDropdownComponent.vue';

// Consts
const pageSize = 20;

// Variables
let pageIndex = 0;
let totalPages = 0;

// Refs
const cards = ref<Card[]>([]);
const filters = ref<Filter[]>([]);

const filtersCommon = ref<FilterOption[]>([
  {filterName: 'set_name', filterBy: {}},
  {filterName: 'type', filterBy: {}},
  {filterName: 'rarity', filterBy: {}},
]);

const gameValue: Ref<string> = ref('');
const searchValue: Ref<string | undefined> = ref();
const filterSet: Ref<string | undefined> = ref();
const filterType: Ref<string | undefined> = ref();
const filterRarity: Ref<string | undefined> = ref();

// Functions
async function getCards(pageSize: number, game: string, filters?: Filter[], pageIndex?: number, search?: string): Promise<AxiosResponse<Page<Card>, any>> {
  let params = "";

  if(filters) {
    filters.forEach(filter => {
      params += `&${CardProperty[filter.filterName.toUpperCase() as keyof typeof CardProperty]}=${filter.value}`;
    })
  }

  if(search) {
    params += `&name=${search}`
  }

  if(pageIndex) {
    params += `&pageIndex=${pageIndex}`;
  }

  const res = await axios.get<Page<Card>>(`${import.meta.env.VITE_BACKEND_PROXY}/cards?sortDirection=ASC&sortBy=name&pageSize=${pageSize}&cardGame=${game}${params}`)
  totalPages = res.data.totalPages;

  return res;
}

async function intersected(): Promise<void> {
  if(pageIndex < totalPages && cards.value.length != 0) {
    pageIndex++;

    cards.value = [
      ...cards.value,
      ...(await getCards(pageSize, gameValue.value, filters.value, pageIndex, searchValue.value)).data.items
    ];
  }
}

async function getSearchValue(filter: Filter): Promise<void> {
  searchValue.value = filter.value;

  if(filter.value && gameValue.value) {
    pageIndex = 0;
    cards.value = [...(await getCards(pageSize, gameValue.value, filters.value, pageIndex, searchValue.value)).data.items]
  }
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
  cards.value = [...(await getCards(pageSize, gameValue.value, filters.value, pageIndex, searchValue.value)).data.items]
}

async function getGameValue(filter: Filter): Promise<void> {
  gameValue.value = filter.value;
  pageIndex = 0;
  filters.value = [];
  searchValue.value = '';

  if(filter.value) {
    filtersCommon.value.length = 0;

    switch(filter.value) {
      case 'LORCANA':
      for (const [key, value] of Object.entries(cardLorcanaMappingProperties)) {
        filtersCommon.value.push({ filterName: key, filterBy: value }) 
      }
        break;
    }

    cards.value = [...(await getCards(pageSize, gameValue.value, filters.value, pageIndex, searchValue.value)).data.items]
  } else {
    filtersCommon.value.map((element) => {
      return element.filterBy = {};
    })
    cards.value.length = 0;
  }
}
</script>
