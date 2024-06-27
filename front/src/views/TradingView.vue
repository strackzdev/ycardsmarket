<template>
  <div class="pt-8 mt-20">
    <div class="md:px-8 lg:px-24 mb-10 flex justify-between gap-4">
      <h1 class="navy-blue font-bold text-center md:text-left text-xl md:text-5xl uppercase">Trade Creation</h1>
      <router-link :to="{name: 'create-trade'}" class="bg-[#1A1E3E] w-fit h-fit text-white rounded-lg border border-black py-3 px-6 text-lg font-bold uppercase transition-all hover:opacity-75 focus:ring focus:accent-gray-500 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Create Trade
      </router-link>
    </div>
    <label class="md:px-8 lg:px-24 mb-10 flex gap-4 justify-center items-center w-fit">
      <input type="checkbox" v-model="financialGuarantee" @change="logFinancialGuarantee" class="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5" />
      Financial Guarantee
    </label>
    <div class="min-h-screen navy-blue-bg md:px-8 lg:px-24 py-8 relative">
      <div class="flex flex-wrap gap-10">
        <div v-for="trade in trades" :key="trade.id" class="flex flex-col gap-4 bg-white w-full lg:w-1/2-5 h-fit p-6">
          <div class="flex justify-between items-end gap-4">
            <h3 class="uppercase italic font-bold text-2xl">Username</h3>
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
        </div>
      </div>
      <div ref="infiniteScroll" />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref, watch } from 'vue'

const trades = ref<any[]>([]);
const financialGuarantee = ref(false);
const pageIndex = ref(0);
const totalPages = ref(0);
const infiniteScroll = ref(null);
const pending = ref(false);

onMounted(async () => {
  pageIndex.value = 0;
  const baseURL = `${import.meta.env.VITE_BACKEND_PROXY}/trades`;
  const params = {
    pageIndex: 0,
    pageSize: 10,
    sortBy: 'createdAt',
    sortDirection: 'DESC',
    financialGarantee: false
  };
  try {
    const response = await axios.get(baseURL, { params });
    trades.value = response.data.items;
    totalPages.value = response.data.totalPages;
  }
  catch (error) {
    console.error(error);
  }

  // Observer l'élément avec la classe 'test'
  if (infiniteScroll.value) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) loadMore();
      });
    });

    observer.observe(infiniteScroll.value);
  }
})

watch(financialGuarantee, async (newValue) => {
  pageIndex.value = 0;
  const baseURL = `${import.meta.env.VITE_BACKEND_PROXY}/trades`;
  const params = {
    pageIndex: 0,
    pageSize: 10,
    sortBy: 'createdAt',
    sortDirection: 'DESC',
    financialGarantee: newValue
  };
  try {
    const response = await axios.get(baseURL, { params });
    trades.value = response.data.items;
    totalPages.value = response.data.totalPages;
  }
  catch (error) {
    console.error(error);
  }
});

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

async function loadMore() {
  if (pending.value) return;
  if (pageIndex.value >= totalPages.value) return;
  pending.value = true;
  pageIndex.value += 1;
  const baseURL = `${import.meta.env.VITE_BACKEND_PROXY}/trades`;
  const params = {
    pageIndex: pageIndex.value,
    pageSize: 10,
    sortBy: 'createdAt',
    sortDirection: 'DESC',
    financialGarantee: financialGuarantee.value
  };

  try {
    const response = await axios.get(baseURL, { params });
    trades.value = [...trades.value, ...response.data.items];
    totalPages.value = response.data.totalPages;
  }
  catch (error) {
    console.error(error);
  }
  finally {
    pending.value = false;
  }
}

</script>

<style scoped>

</style>