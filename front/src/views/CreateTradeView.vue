<template>
  <div class="pt-8 mt-20">
    <h1 class="md:px-8 lg:px-24 mb-10 navy-blue font-bold text-center md:text-left text-xl md:text-5xl uppercase">Trade Creation</h1>

    <div class="flex gap-10 min-h-screen navy-blue-bg md:px-8 lg:px-24 py-8 relative">
      <main class="flex-1">
        <SearchBarComponent class="mb-5 px-2 md:px-0" @search="getSearchValue" white />
        <div class="flex flex-col md:flex-row">
          <FilterDropdownComponent class="ml-2 md:ml-0 mr-2 mt-2" filter-name="cardGame" :filter-by="GameLabelEnum" @filter="getGameValue"/>
          <FilterDropdownComponent v-for="filterCommon in filtersCommon" v-bind:key="filterCommon.filterName" class="ml-2 md:ml-0 mr-2 mt-2" :filter-name="filterCommon.filterName" :filter-by="filterCommon.filterBy" @filter="getFilterValue"  />
        </div>
        <div class="flex flex-wrap justify-between gap-4 mt-10">
          <div class="flip-card" v-for="card in cards" :key="card.id">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <CardLorcanaComponent class="w-56 customFlip" :card=card />
              </div>
              <div class="flip-card-back flex flex-col justify-center items-center gap-6">
                <div>
                  <h2 class="text-xl font-bold text-center mb-4">Offering</h2>
                  <div class="flex justify-center">
                    <button class="flip-buttons me-2 uppercase navy-blue-bg barbel-blue-bg-darker-hover text-white font-bold py-2 px-4 w-fit rounded" @click="incrementCardToLookingFor(card, false)">
                      Normal
                    </button>
                    <button class="flip-buttons uppercase navy-blue-bg barbel-blue-bg-darker-hover text-white font-bold py-2 px-4 w-fit rounded" @click="incrementCardToLookingFor(card, true)">
                      Foil
                    </button>
                  </div>
                </div>
                <div>
                  <h2 class="text-xl font-bold text-center mb-4">Looking for</h2>
                  <div class="flex justify-center">
                    <button class="me-2 flip-buttons uppercase navy-blue-bg barbel-blue-bg-darker-hover text-white font-bold py-2 px-4 w-fit rounded" @click="incrementCardToOffer(card, false)">
                      Normal
                    </button>
                    <button class="flip-buttons uppercase navy-blue-bg barbel-blue-bg-darker-hover text-white font-bold py-2 px-4 w-fit rounded" @click="incrementCardToOffer(card, true)">
                      Foil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <InfiniteScrollingComponent @intersect="intersected"/>
        </div>
      </main>
      <aside class="w-96 bg-white rounded-xl h-fit px-6 py-4 sticky top-8">
        <h2 class="uppercase text-2xl font-bold mt-4">Your cards</h2>
        <div class="flex flex-col gap-2 my-4 max-h-48 overflow-y-auto">
          <InlineCard v-for="item in lookingForCards" :key="item.card.id"
                      :item="item"
                      :increment-card="() => incrementCardToLookingFor(item.card, item.foil)"
                      :decrement-card="() => decrementCardFromLookingFor(item.card, item.foil)" />
        </div>
        <h2 class="uppercase text-2xl font-bold mt-4">Looking for</h2>
        <div class="flex flex-col gap-2 my-4 max-h-48 overflow-y-auto">
          <InlineCard v-for="item in offerCards" :key="item.card.id"
                      :item="item"
                      :increment-card="() => incrementCardToOffer(item.card, item.foil)"
                      :decrement-card="() => decrementCardFromOffer(item.card, item.foil)" />
        </div>
        <h2 class="uppercase text-2xl font-bold mt-4">method</h2>
        <div class="flex flex-col gap-2 my-4">
          <div class="relative inline-block text-left w-full">
            <button  class="w-full bg-white border border-gray-200 text-gray-700 py-2 px-4 rounded inline-flex justify-between items-center" @click="selectOpen = !selectOpen">
              <span>
                {{ selectedOption ? selectedOption.label : 'Select a delivery method' }}
              </span>
              <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div class="absolute z-50 mt-2 w-full rounded-md   shadow-lg bg-white border border-gray-200" v-show="selectOpen" @click="selectOpen = false">
              <div class="py-1 text-gray-700 dark:text-gray-400 text-sm" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <span class="block px-4 py-2  hover:bg-gray-100" role="menuitem"
                      v-for="option in deliveryMethods" :key="option.value"
                      @click="selectedOption = option; selectOpen = false">
                  {{ option.label }}
                </span>
              </div>
            </div>
          </div>

          <label class="flex radio cursor-pointer">
            <input class="my-auto transform scale-125 text-[#1A1E3E]" type="checkbox" name="sfg" checked v-model="financialGuarantee" />
            <span class="title px-2 my-auto">Financial guarantee</span>
          </label>
        </div>
        <button class="uppercase bg-[#1A1E3E] hover:bg-[#3B4487]  text-white font-bold py-2 px-4 w-full rounded-full" @click="handleSubmit()">
          look for trade
        </button>
      </aside>
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
import { cardMappingProperties } from '@/components/card/lorcana/CardLorcanaEnum';
import { CardCommonPropertyEnum, GameLabelEnum } from '@/components/card/CardEnum';
import type { Page } from '@/types/page';
import type { FilterOption } from '../components/utils/FilterDropdownComponent.vue';
import { useRouter } from 'vue-router'
import { useConfirmModalStore } from '@/stores/confirmModalStore'
import InlineCard from '@/components/card/InlineCard.vue'

const router = useRouter()

type cardQuantity = {
  card: Card,
  quantity: number,
  foil: boolean
}

export type DeliveryMethod = {
  label: string,
  value: "IN_HANDS" | "LOCAL_STORE" | "MONDIAL_RELAY" | "TRACKED_LETTER"
}

const modalStore = useConfirmModalStore()

const { open } = modalStore

// Consts
const pageSize = 20;

// Variables
let pageIndex = 0;
let totalPages = 0;

// Refs
const cards = ref<Card[]>([]);
const filters = ref<Filter[]>([]);

const lookingForCards: Ref<cardQuantity[]> = ref([]);
const offerCards: Ref<cardQuantity[]> = ref([]);

const selectedOption: Ref<DeliveryMethod | undefined> = ref();
const selectOpen: Ref<boolean> = ref(false);

const filtersCommon = ref<FilterOption[]>([
  {filterName: 'set_name', filterBy: {}},
  {filterName: 'type', filterBy: {}},
  {filterName: 'rarity', filterBy: {}},
]);

const deliveryMethods: Ref<DeliveryMethod[]> = ref([
  { label: 'In hands', value: 'IN_HANDS' },
  { label: 'Local store', value: 'LOCAL_STORE' },
  { label: 'Mondial Relay', value: 'MONDIAL_RELAY' },
  { label: 'Tracked letter', value: 'TRACKED_LETTER' },
]);

const financialGuarantee: Ref<boolean> = ref(false);

const gameValue: Ref<string> = ref('');
const searchValue: Ref<string | undefined> = ref();
const filterSet: Ref<string | undefined> = ref();
const filterType: Ref<string | undefined> = ref();
const filterRarity: Ref<string | undefined> = ref();

// Functions
function dynamicGradient(color: string) {
   return `bg-gradient-to-r from-${color.toLowerCase()} to-gray-400`
}

function incrementCardToLookingFor(card: Card, foil: boolean) {
  if (lookingForCards.value.some(cardQuantity => cardQuantity.card.id === card.id && cardQuantity.foil === foil)) {
    lookingForCards.value = lookingForCards.value.map(cardQuantity => {
      if (cardQuantity.card.id === card.id && cardQuantity.foil === foil) {
        cardQuantity.quantity++
      }
      return cardQuantity
    })
    return
  }
  lookingForCards.value.push({ card, quantity: 1, foil: foil })
}

function decrementCardFromLookingFor(card: Card, foil: boolean) {
  lookingForCards.value = lookingForCards.value.map(cardQuantity => {
    if (cardQuantity.card.id === card.id && cardQuantity.foil === foil) {
      cardQuantity.quantity--
    }
    return cardQuantity
  }).filter(cardQuantity => cardQuantity.quantity > 0)
}

function incrementCardToOffer(card: Card, foil: boolean) {
  console.log(offerCards.value.some(cardQuantity => cardQuantity.card.id === card.id))
  if (offerCards.value.some(cardQuantity => cardQuantity.card.id === card.id && cardQuantity.foil === foil)) {
    offerCards.value = offerCards.value.map(cardQuantity => {
      if (cardQuantity.card.id === card.id && cardQuantity.foil === foil) {
        cardQuantity.quantity++
      }
      return cardQuantity
    })
    return
  }
  offerCards.value.push({ card, quantity: 1, foil: foil })
}

function decrementCardFromOffer(card: Card, foil: boolean) {
  offerCards.value = offerCards.value.map(cardQuantity => {
    if (cardQuantity.card.id === card.id && cardQuantity.foil === foil) {
      cardQuantity.quantity--
    }
    return cardQuantity
  }).filter(cardQuantity => cardQuantity.quantity > 0)
}


async function handleSubmit() {
  if (!selectedOption.value) return alert('Please select a delivery method')
  if (lookingForCards.value.length === 0) return alert('Please select at least one card you are looking for')
  if (offerCards.value.length === 0) return alert('Please select at least one card you are offering')

  open(
    'Do you want to publish this trade ?',
    async () => {
      await axios.get(`${import.meta.env.VITE_BACKEND_PROXY}/card-games`)
        .then((res) => {
          const cardGame = res.data.find((game: any) => game.label === gameValue.value)
          const trade = {
            "financialGarantee": financialGuarantee.value,
            "cardGame": {
              "id": cardGame.id
            },
            "shipping": {
              "method": selectedOption.value?.value,
            },
            "acceptorCards": lookingForCards.value.map(cardQuantity => {
              return {
                "card": {
                  "id": cardQuantity.card.id
                },
                "quantity": cardQuantity.quantity
              }
            }),
            "proposerCards": offerCards.value.map(cardQuantity => {
              return {
                "card": {
                  "id": cardQuantity.card.id
                },
                "quantity": cardQuantity.quantity
              }
            })
          }
          axios.post(`${import.meta.env.VITE_BACKEND_PROXY}/trades`, trade)
            .then((res) => {
              lookingForCards.value = []
              offerCards.value = []
              router.push({ name: 'trade', params: { id: res.data.id } })
            })
            .catch(() => {
              alert('An error occured')
            })

        })
        .catch(() => {
          alert('An error occured')
        })
    }
  )
}

async function getCards(pageSize: number, game: string, filters?: Filter[], pageIndex?: number, search?: string): Promise<AxiosResponse<Page<Card>, any>> {
  let params = "";

  if(filters) {
    filters.forEach(filter => {
      params += `&${CardCommonPropertyEnum[filter.filterName.toUpperCase() as keyof typeof CardCommonPropertyEnum]}=${filter.value}`;
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

  if(gameValue.value) {
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
        for (const [key, value] of Object.entries(cardMappingProperties)) {
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

<style scoped>
.flip-card {
  background-color: transparent;
  width: 215px;
  aspect-ratio: 224/313;
  perspective: 100vw;
  font-family: sans-serif;
}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 1rem;
}

.flip-card-back {
  background-color: #555C93;
  transform: rotateY(180deg);
  color: white;
}

.flip-buttons {
  border-radius: 9999px;
}

</style>