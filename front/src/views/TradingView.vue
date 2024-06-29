<template>
  <div class="pt-8 mt-20">
    <div class="md:px-8 lg:px-24 mb-10 flex justify-between gap-4">
      <h1 class="navy-blue font-bold text-center md:text-left text-xl md:text-5xl uppercase">Overall trades</h1>
      <router-link :to="{name: 'create-trade'}" class="bg-[#1A1E3E] create-trade w-fit h-fit text-white rounded-lg border border-black py-3 px-6 text-lg font-bold uppercase transition-all hover:opacity-75 focus:ring focus:accent-gray-500 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
        Create Trade
      </router-link>
    </div>
    <label class="md:px-8 lg:px-24 mb-10 flex gap-4 justify-center items-center w-fit">
      <input type="checkbox" v-model="financialGuarantee" @change="logFinancialGuarantee" class="appearance-none w-9 focus:outline-none checked:bg-blue-300 h-5 bg-gray-300 rounded-full before:inline-block before:rounded-full before:bg-blue-500 before:h-4 before:w-4 checked:before:translate-x-full shadow-inner transition-all duration-300 before:ml-0.5" />
      Financial Guarantee
    </label>
    <div class="min-h-screen navy-blue-bg md:px-8 lg:px-24 py-8 relative">
      <div class="flex flex-wrap gap-10">
        <TradeComponent v-for="trade in trades" :key="trade.id" :trade="trade" />
      </div>
      <div ref="infiniteScroll" />
    </div>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref, watch } from 'vue'
import TradeComponent from '@/components/trade/TradeComponent.vue'

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
  .create-trade {
    border-radius: 9999px;
  }
</style>