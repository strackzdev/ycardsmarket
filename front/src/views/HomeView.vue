<template>
  <div class="relative h-screen overflow-hidden">
    <!-- Background with blur -->
    <div class="absolute inset-0 background-image"></div>
    <!-- Content -->
    <div class="pl-custom relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 mt-60">
      <div class="text-center textMargin responsive-width">
        <h1 class="font-bold tracking-tight text-white text-left responsive-text">
          Empower Your Deck,<span class="block">Trade with YCardsMarket!</span>
        </h1>
        <div class="mt-20 flex items-center justify-center md:justify-start">
          <Button @click="exchangeClicked" fontSize="1.5rem" minWidth="50px">TRADE NOW !</Button>
        </div>
      </div>
    </div>
  </div>
  <div class="text-center my-10 px-4 md:px-20">
    <div class="text-4xl font-semibold text-black">OVERALL CARDS</div>
    <p class="mt-8 text-black text-lg">
      Do you want to browse through available cards in the following TGC? Just click on the appropriate game!
    </p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-20">
    <div class="card-container mt-4 mb-4" v-for="card in cards" :key="card.title">
      <overall-cards
          :title="card.title"
          :redirectUrl="card.redirectUrl"
          class="card-content"
      />
    </div>
  </div>
  <div class="min-h-screen navy-blue-bg md:px-8 lg:px-24 py-8 relative mt-20">
    <div class="flex flex-wrap gap-10">
      <router-link v-for="trade in trades" :key="trade.id" :to="{ name: 'trade', params: { id: trade.id }}" class="flex flex-col gap-4 bg-white w-full lg:w-1/2-5 h-fit p-6 cursor-pointer">
        <div class="flex justify-between items-end gap-4">
          <h3 class="uppercase italic font-bold text-2xl">{{trade.proposer.name? trade.proposer.name : trade.proposer.email }}</h3>
          <span class="uppercase italic font-bold">{{ getTimeElapsed(trade.createdAt) }}</span>
        </div>
        <div class="flex justify-between items-center">
          <div class="flex-1 overflow-clip">
            <h3 class="uppercase font-bold italic">Giving</h3>
            <div class="grid grid-cols-4 gap-4">
              <div v-for="card in trade.proposerCards.slice(0, 3)" :key="card.id" class="w-full h-auto flex">
                <img :src="card.card.imageUrl" :alt="card.card.name" class="w-full h-auto" />
              </div>
              <div class="w-full h-auto flex bg-[#1A1E3E]" v-if="trade.proposerCards.length > 3">
                <div class="flex gap-1 items-end justify-center w-full mb-3">
                  <div class="size-2 bg-white rounded-full"/>
                  <div class="size-2 bg-white rounded-full"/>
                  <div class="size-2 bg-white rounded-full"/>
                </div>
              </div>
            </div>
          </div>
          <svg class="mx-4 scale-150 mt-4" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8749 7.80286L22.7833 10.7113L19.8749 13.6196" stroke="#1A1E3E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M21.8116 10.7102H4.37415V16.5227" stroke="#1A1E3E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M12.128 24.2769L9.2196 21.3685L12.128 18.4601" stroke="#1A1E3E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
            <path d="M10.1874 21.3653H27.6249V15.5528" stroke="#1A1E3E" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
          </svg>
          <div class="flex-1 overflow-clip">
            <h3 class="uppercase font-bold italic">Looking for</h3>
            <div class="grid grid-cols-4 gap-4">
              <div v-for="card in trade.acceptorCards.slice(0, 3)" :key="card.id" class="w-full h-auto flex">
                <img :src="card.card.imageUrl" :alt="card.card.name" class="w-full h-auto" />
              </div>
              <div class="w-full h-auto flex bg-[#1A1E3E]" v-if="trade.acceptorCards.length > 3">
                <div class="flex gap-1 items-end justify-center w-full mb-3">
                  <div class="size-2 bg-white rounded-full"/>
                  <div class="size-2 bg-white rounded-full"/>
                  <div class="size-2 bg-white rounded-full"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Button from '@/components/homePage/Buttons.vue';
import axios from 'axios';
import overallCards from '@/components/homePage/OverallCategoCards.vue';

const cards = reactive([
  {title: 'LORCANA', redirectUrl: 'https://example.com/1'},
  {title: 'MAGIC THE GATHERING', redirectUrl: 'https://example.com/2'},
  {title: 'POKEMON', redirectUrl: 'https://example.com/3'},
  {title: 'YU-GI-OH', redirectUrl: 'https://example.com/4'},
]);

const exchangeClicked = () => {
  // Your logic here
};

const trades = ref<any[]>([]);
const pageIndex = ref(0);
const totalPages = ref(0);

onMounted(async () => {
  pageIndex.value = 0;
  const baseURL = `${import.meta.env.VITE_BACKEND_PROXY}/trades`;
  const params = {
    pageIndex: 0,
    pageSize: 10,
    sortBy: 'createdAt',
    sortDirection: 'DESC',
    financialGarantee: null
  };
  try {
    const response = await axios.get(baseURL, { params });
    trades.value = response.data.items;
    totalPages.value = response.data.totalPages;
  }
  catch (error) {
    console.error(error);
  }
})

const getTimeElapsed = (dateString: string) => {
  const updatedAt = new Date(dateString);
  const now = new Date();

  // Calculer la différence en millisecondes
  const diffMs = now.getTime() - updatedAt.getTime();

  // Convertir en secondes
  const diffSec = Math.floor(diffMs / 1000);

  // Gérer les différents cas de temps écoulé
  if (diffSec < 60) return `${diffSec} secondes ago`;
  if (diffSec < 3600) return `${Math.floor(diffSec / 60)} minutes ago`;
  if (diffSec < 86400) return `${Math.floor(diffSec / 3600)} hours ago`;
  return `${Math.floor(diffSec / 86400)} days ago`;
};
</script>

<style scoped>
.textMargin {
  margin-top: 200px;
}

.background-image {
  background-image: url('../../src/assets/images/homeBackground.jpeg');
  background-size: cover;
  background-position: center;
  filter: blur(4px);
}

.responsive-width {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}

.responsive-text {
  font-size: 5rem;
}

.block {
  display: block;
}

@media (max-width: 1068px) {
  .textMargin {
    margin-top: 100px;
  }

  .responsive-width {
    padding: 0 10px;
  }

  .responsive-text {
    font-size: 2rem;
  }
}

.card-container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  text-align: center;
  height: 100%; /* Ensure the container takes the full height */
}

.card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 150px; /* Adjust as necessary */
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none;
}

.card-content:hover {
  filter: brightness(150%);
}

.card-content h3, .card-content p {
  margin-bottom: 1rem; /* Ensure there is always some margin at the bottom */
}

@media (max-width: 768px) {
  .textMargin {
    margin-top: 100px;
  }
}
</style>
