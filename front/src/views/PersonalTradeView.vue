<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import axios from 'axios';
import TradeComponent from '@/components/trade/TradeComponent.vue'
import { decodeToken, getAccessToken } from '@/auth/token'

const trades = ref<any[]>([]);
const pageIndex = ref(0);
const totalPages = ref(0);
const infiniteScroll = ref(null);
const pending = ref(false);

const acceptedTrades = computed(() => {
  return trades.value.filter(trade => {
    if(trade.acceptor === null) return false
    return trade.acceptor.keycloakUUID === decodeToken(getAccessToken()).sub
  });
})

const nonAcceptedTrades = computed(() => {
  return trades.value.filter(trade => {
    if(trade.acceptor === null) return true
    return trade.acceptor.keycloakUUID !== decodeToken(getAccessToken()).sub
  });
})


onMounted(async () => {
  const baseURL = `${import.meta.env.VITE_BACKEND_PROXY}/trades/user`;
  const params = {
    pageIndex: pageIndex.value,
    pageSize: 1000,
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

  if (infiniteScroll.value) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) loadMore();
      });
    });

    observer.observe(infiniteScroll.value);
  }
})

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
    financialGarantee: null
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

<template>
  <div class="pt-8 mt-20">
    <div class="flex justify-between">
      <h1 class="md:px-8 lg:px-24 mb-10 navy-blue font-bold text-center md:text-left text-xl md:text-5xl uppercase">My Trades</h1>
      <div class="md:px-8 lg:px-24 mb-10 flex justify-between gap-4">
        <router-link :to="{name: 'create-trade'}" class="bg-[#1A1E3E] create-trade w-fit h-fit text-white border-black py-3 px-6 text-lg font-bold uppercase transition-all hover:opacity-75 focus:ring focus:accent-gray-500 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          Create Trade
        </router-link>
      </div>
    </div>

    <div class="min-h-screen navy-blue-bg md:px-8 lg:px-24 py-8 relative mt-20">
      <div class="flex flex-wrap gap-10">
        <div class="flex-1 flex flex-col gap-10">
          <h2 class="font-bold text-2xl text-white uppercase">My Trades</h2>
          <TradeComponent v-for="trade in nonAcceptedTrades" :key="trade.id" :trade="trade" style="width: 100%" />
          <div ref="infiniteScroll" />
        </div>
        <div class="flex-1 flex flex-col gap-10">
          <h2 class="font-bold text-2xl text-white uppercase">accepted trades</h2>
          <TradeComponent v-for="trade in acceptedTrades" :key="trade.id" :trade="trade" style="width: 100%" />
          <div ref="infiniteScroll" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.create-trade {
  border-radius: 999px;
}
</style>