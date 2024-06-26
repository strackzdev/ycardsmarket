<template>
  <div class="pt-8 mt-20">
    <div class="md:px-8 lg:px-24 mb-10 ">
      <div class="flex items-center justify-between">
        <div class="flex items-center ">
          <h1 class="navy-blue font-bold text-center md:text-left text-xl md:text-5xl uppercase">Trade</h1>
          <h2 class="ml-3 font-bold text-center md:text-left text-base md:text-2xl">#{{id}}</h2>
        </div>
        <div>
          <h2 class="text-base md:text-2xl font-bold">NEED ASSISTANCE ?</h2>
        </div>
      </div>
      
      <div class="mt-3 flex items-center">
        <svg v-if="isFinancialGaranteed" width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.50142 0C2.91657 0 0 2.91657 0 6.50142C0 10.0863 2.91657 13.0028 6.50142 13.0028C10.0863 13.0028 13.0028 10.0863 13.0028 6.50142C13.0028 2.91657 10.0863 0 6.50142 0ZM9.88497 4.3225L5.68405 9.32359C5.63797 9.37848 5.58063 9.42282 5.51592 9.45362C5.4512 9.48441 5.38063 9.50093 5.30897 9.50207H5.30053C5.23043 9.50205 5.16112 9.48728 5.0971 9.45875C5.03307 9.43021 4.97576 9.38853 4.92889 9.33641L3.12849 7.33597C3.08277 7.28748 3.0472 7.23033 3.02388 7.16789C3.00056 7.10545 2.98995 7.03898 2.99269 6.97239C2.99542 6.90579 3.01144 6.84041 3.0398 6.7801C3.06816 6.71978 3.10829 6.66574 3.15784 6.62115C3.20738 6.57657 3.26534 6.54234 3.3283 6.52047C3.39126 6.4986 3.45796 6.48954 3.52448 6.49382C3.59099 6.4981 3.65598 6.51563 3.71562 6.54538C3.77526 6.57514 3.82836 6.61651 3.87178 6.66708L5.2874 8.23992L9.11917 3.67924C9.20512 3.57987 9.32673 3.51831 9.4577 3.50787C9.58867 3.49744 9.71849 3.53896 9.81909 3.62347C9.91969 3.70797 9.983 3.82867 9.99533 3.95948C10.0077 4.09029 9.96801 4.22069 9.88497 4.3225Z" fill="black"/>
        </svg>

        <svg v-else width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.00025 0.499634C3.41618 0.499634 0.500244 3.41557 0.500244 6.99964C0.500244 10.5837 3.41618 13.4996 7.00025 13.4996C10.5843 13.4996 13.5002 10.5837 13.5002 6.99964C13.5002 3.41557 10.5843 0.499634 7.00025 0.499634ZM9.35368 8.6462C9.40207 8.69217 9.44076 8.74735 9.46748 8.80851C9.4942 8.86967 9.5084 8.93555 9.50926 9.00229C9.51011 9.06902 9.4976 9.13525 9.47245 9.19707C9.44731 9.25889 9.41004 9.31505 9.36285 9.36224C9.31566 9.40943 9.2595 9.4467 9.19768 9.47184C9.13586 9.49699 9.06963 9.5095 9.0029 9.50865C8.93616 9.50779 8.87028 9.49359 8.80912 9.46687C8.74796 9.44015 8.69278 9.40146 8.64681 9.35307L7.00025 7.70682L5.35368 9.35307C5.25915 9.44288 5.13328 9.49221 5.0029 9.49054C4.87252 9.48887 4.74794 9.43634 4.65574 9.34414C4.56354 9.25194 4.51101 9.12737 4.50934 8.99699C4.50767 8.8666 4.557 8.74073 4.64681 8.6462L6.29306 6.99964L4.64681 5.35307C4.557 5.25854 4.50767 5.13267 4.50934 5.00229C4.51101 4.8719 4.56354 4.74733 4.65574 4.65513C4.74794 4.56293 4.87252 4.5104 5.0029 4.50873C5.13328 4.50706 5.25915 4.55639 5.35368 4.6462L7.00025 6.29245L8.64681 4.6462C8.74134 4.55639 8.86722 4.50706 8.9976 4.50873C9.12798 4.5104 9.25255 4.56293 9.34475 4.65513C9.43695 4.74733 9.48948 4.8719 9.49115 5.00229C9.49282 5.13267 9.44349 5.25854 9.35368 5.35307L7.70743 6.99964L9.35368 8.6462Z" fill="black"/>
        </svg>
        <div class="ml-1 md:text-left text-base md:text-2xl">Finantial guarantee</div>
      </div>
    </div>

    <div class="flex justify-between min-h-screen navy-blue-bg md:px-8 lg:px-24 py-8 relative">
      <main class="mt-10 w-3/5">
        <div class="flex justify-between items-center">
          <h2 class="text-3xl text-white font-bold">OFFER CREATOR HAS</h2>
          <h2 class="text-2xl text-white">{{ counterProposerCards }} ITEMS</h2>
        </div>
        <div class="flex flex-wrap gap-6 justify-between mt-5">
          <div class="flex gap-4" v-for="card in proposerCards" :key="card.id">
            <CardLorcanaComponent class="w-56" :card=card />
          </div>
        </div>

        <div class="mt-20">
          <div class="flex justify-between items-center">
            <h2 class="text-3xl text-white font-bold">LOOKING FOR</h2>
            <h2 class="text-2xl text-white">{{ counterAcceptorCards }} ITEMS</h2>
          </div>
          <div class="flex flex-wrap gap-6 justify-between mt-5">
            <div class="flex gap-4" v-for="card in acceptorCards" :key="card.id">
              <CardLorcanaComponent class="w-56" :card=card />
            </div>
          </div>
        </div>
      </main>

      <aside class="sticky top-8 right-0 h-screen mt-10">
        <div class="flex gap-4">
          <button class="text-[#1A1E3E] bg-white hover:bg-[#c7cee6] font-bold py-2 px-4 w-full rounded-full" @click="openModal('info')">
            SHIPPING INFO
          </button>
          <button class="text-[#1A1E3E] bg-white hover:bg-[#c7cee6] font-bold py-2 px-4 w-full rounded-full" @click="openModal('update')">
            SHIPPING UPDATE
          </button>
        </div>
        <div class="flex items-center justify-center h-5/6 mt-4 p-10 bg-white">
          <h2 class="text-base mt-4">Once the offer is accepted, the chat will become available !</h2>
        </div>
      </aside>
    </div>
  </div>

  <ShippingModalComponent/>
</template>

<script setup lang="ts">

import { useRoute } from 'vue-router'
import { computed, onMounted, ref } from 'vue'
import axios, { type AxiosResponse } from 'axios'
import CardLorcanaComponent from '@/components/card/lorcana/CardLorcanaComponent.vue';
import type { Trade, TradeCard } from '@/types/trade';
import { useModalStore } from '@/stores/modal';
import ShippingModalComponent from '@/components/trading/ShippingModalComponent.vue';
import { storeToRefs } from 'pinia';
import { useTradeStore } from '@/stores/trade';
import type { Card } from '@/components/card/CardInterface';

// Constants
const route = useRoute()

// Refs
const isFinancialGaranteed = ref<boolean>(true);
const proposerCards = ref<Card[]>([]);
const acceptorCards = ref<Card[]>([]);
const counterProposerCards = ref<number>(0);
const counterAcceptorCards = ref<number>(0);

// Computeds
const id = computed(() => route.params.id)

// Stores
const modalStore = useModalStore();
const { onToggle } = modalStore
const { modalContent } = storeToRefs(modalStore);
const tradeStore = useTradeStore();
const { trade } = storeToRefs(tradeStore)

// Hooks
onMounted(async () => {
  trade.value = (await getTradeInfo()).data;
  
  counterProposerCards.value = getCards(trade.value.proposerCards, proposerCards.value);
  counterAcceptorCards.value = getCards(trade.value.acceptorCards, acceptorCards.value);
})

// Functions
async function getTradeInfo(): Promise<AxiosResponse<Trade, any>> {
  return await axios.get<Trade>(`${import.meta.env.VITE_BACKEND_PROXY}/trades/${id.value}`);
}

function getCards(tradeCards: TradeCard[], cards: Card[]): number {
  let counter = 0;

  tradeCards.forEach((tradeCard: TradeCard) => {
    for (let i=0; i<tradeCard.quantity; i++) {
      cards.push(tradeCard.card);
      counter++;
    }
  })

  return counter;
}

function openModal(content: string): void {
  modalContent.value = content;
  onToggle();
}

</script>

<style scoped>

</style>