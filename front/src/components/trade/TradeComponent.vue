<script setup lang="ts">
const { trade } = defineProps<{ trade: any }>();

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

<template>
  <router-link :to="{ name: 'trade', params: { id: trade.id }}" class="flex flex-col gap-4 bg-white w-full lg:w-1/2-5 h-fit p-6 cursor-pointer">
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
</template>

<style scoped>



</style>