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
      
      <div class="mt-3 flex justify-between items-center">
        <div class="flex items-center">
          <svg v-if="trade.financialGarantee" width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.50142 0C2.91657 0 0 2.91657 0 6.50142C0 10.0863 2.91657 13.0028 6.50142 13.0028C10.0863 13.0028 13.0028 10.0863 13.0028 6.50142C13.0028 2.91657 10.0863 0 6.50142 0ZM9.88497 4.3225L5.68405 9.32359C5.63797 9.37848 5.58063 9.42282 5.51592 9.45362C5.4512 9.48441 5.38063 9.50093 5.30897 9.50207H5.30053C5.23043 9.50205 5.16112 9.48728 5.0971 9.45875C5.03307 9.43021 4.97576 9.38853 4.92889 9.33641L3.12849 7.33597C3.08277 7.28748 3.0472 7.23033 3.02388 7.16789C3.00056 7.10545 2.98995 7.03898 2.99269 6.97239C2.99542 6.90579 3.01144 6.84041 3.0398 6.7801C3.06816 6.71978 3.10829 6.66574 3.15784 6.62115C3.20738 6.57657 3.26534 6.54234 3.3283 6.52047C3.39126 6.4986 3.45796 6.48954 3.52448 6.49382C3.59099 6.4981 3.65598 6.51563 3.71562 6.54538C3.77526 6.57514 3.82836 6.61651 3.87178 6.66708L5.2874 8.23992L9.11917 3.67924C9.20512 3.57987 9.32673 3.51831 9.4577 3.50787C9.58867 3.49744 9.71849 3.53896 9.81909 3.62347C9.91969 3.70797 9.983 3.82867 9.99533 3.95948C10.0077 4.09029 9.96801 4.22069 9.88497 4.3225Z" fill="black"/>
          </svg>
          <svg v-else width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.00025 0.499634C3.41618 0.499634 0.500244 3.41557 0.500244 6.99964C0.500244 10.5837 3.41618 13.4996 7.00025 13.4996C10.5843 13.4996 13.5002 10.5837 13.5002 6.99964C13.5002 3.41557 10.5843 0.499634 7.00025 0.499634ZM9.35368 8.6462C9.40207 8.69217 9.44076 8.74735 9.46748 8.80851C9.4942 8.86967 9.5084 8.93555 9.50926 9.00229C9.51011 9.06902 9.4976 9.13525 9.47245 9.19707C9.44731 9.25889 9.41004 9.31505 9.36285 9.36224C9.31566 9.40943 9.2595 9.4467 9.19768 9.47184C9.13586 9.49699 9.06963 9.5095 9.0029 9.50865C8.93616 9.50779 8.87028 9.49359 8.80912 9.46687C8.74796 9.44015 8.69278 9.40146 8.64681 9.35307L7.00025 7.70682L5.35368 9.35307C5.25915 9.44288 5.13328 9.49221 5.0029 9.49054C4.87252 9.48887 4.74794 9.43634 4.65574 9.34414C4.56354 9.25194 4.51101 9.12737 4.50934 8.99699C4.50767 8.8666 4.557 8.74073 4.64681 8.6462L6.29306 6.99964L4.64681 5.35307C4.557 5.25854 4.50767 5.13267 4.50934 5.00229C4.51101 4.8719 4.56354 4.74733 4.65574 4.65513C4.74794 4.56293 4.87252 4.5104 5.0029 4.50873C5.13328 4.50706 5.25915 4.55639 5.35368 4.6462L7.00025 6.29245L8.64681 4.6462C8.74134 4.55639 8.86722 4.50706 8.9976 4.50873C9.12798 4.5104 9.25255 4.56293 9.34475 4.65513C9.43695 4.74733 9.48948 4.8719 9.49115 5.00229C9.49282 5.13267 9.44349 5.25854 9.35368 5.35307L7.70743 6.99964L9.35368 8.6462Z" fill="black"/>
          </svg>
          <div class="ml-2 md:text-left text-base md:text-2xl">Finantial guarantee</div>
        </div>
        <div v-if="isProposer">
          <button class="navy-blue-bg text-white py-2 px-4 rounded-full inline-flex justify-between items-center" @click="selectOpen = !selectOpen">
            <span>More Actions</span>
            <svg class="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          <div class="absolute z-50 mt-2 rounded-md shadow-lg bg-white border border-gray-200" v-show="selectOpen" @click="selectOpen = false">
            <div class="py-1 text-gray-700 dark:text-gray-400 text-sm" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <span disabled class="flex items-center cursor-not-allowed px-4 py-2 enabled:hover:bg-gray-100" role="menuitem" @click="executeAction('EDIT')">
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425t.762-.15t.775.15t.65.45L20.425 5q.3.275.438.65T21 6.4q0 .4-.137.763t-.438.662L7.25 21zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z"/></svg>
                Edit
              </span>
              <span disabled class="flex items-center cursor-not-allowed px-4 py-2 enabled:hover:bg-gray-100" role="menuitem" @click="executeAction('DUPLICATE')">
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 512 512"><path fill="currentColor" d="M408 112H184a72 72 0 0 0-72 72v224a72 72 0 0 0 72 72h224a72 72 0 0 0 72-72V184a72 72 0 0 0-72-72m-32.45 200H312v63.55c0 8.61-6.62 16-15.23 16.43A16 16 0 0 1 280 376v-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 0 1 216 280h64v-63.55c0-8.61 6.62-16 15.23-16.43A16 16 0 0 1 312 216v64h64a16 16 0 0 1 16 16.77c-.42 8.61-7.84 15.23-16.45 15.23"/><path fill="currentColor" d="M395.88 80A72.12 72.12 0 0 0 328 32H104a72 72 0 0 0-72 72v224a72.12 72.12 0 0 0 48 67.88V160a80 80 0 0 1 80-80Z"/></svg>
                Duplicate
              </span>
              <span class="flex items-center cursor-pointer px-4 py-2 hover:bg-gray-100" role="menuitem" @click="executeAction('DELETE')">
                <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.587 1.413T17 21zm2-4h2V8H9zm4 0h2V8h-2z"/></svg>
                Delete
              </span>

            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex justify-between min-h-screen navy-blue-bg md:px-8 lg:px-24 py-8 relative">
      <main class="mt-10 w-3/5">






        <h1>Pokemon Card Effect</h1>

        <div class="card">
        </div>
        <span class="operator">+</span>
        <div class="card">
          <span>+ color-dodge</span>
        </div>
        <!-- <span class="operator">+</span>
        <div class="card">
          <span>+ color-dodge</span>
        </div>
        <span class="operator">=</span>
        <div class="card"></div> -->



        <div class="flex justify-between items-center">
          <h2 class="text-3xl text-white font-bold">OFFER CREATOR HAS</h2>
          <h2 class="text-2xl text-white">{{ counterProposerCards }} ITEMS</h2>
        </div>
        <div class="flex flex-wrap gap-6 justify-items-start mt-5">
          <div class="flex gap-4" v-for="card in proposerCards" :key="card.id">
            <CardLorcanaComponent class="w-56" :card=card />
          </div>
        </div>

        <div class="mt-20">
          <div class="flex justify-between items-center">
            <h2 class="text-3xl text-white font-bold">LOOKING FOR</h2>
            <h2 class="text-2xl text-white">{{ counterAcceptorCards }} ITEMS</h2>
          </div>
          <div class="flex flex-wrap gap-6 justify-items-start mt-5">
            <div class="flex gap-4" v-for="card in acceptorCards" :key="card.id">
              <CardLorcanaComponent class="w-56" :card=card />
            </div>
          </div>
        </div>
      </main>

      <aside class="sticky top-8 right-0 h-screen mt-10">
        <div class="flex gap-4">
          <template v-if="!isProposer && !isAccepted">
            <button class="text-[#1A1E3E] bg-white hover:bg-[#c7cee6] font-bold py-2 px-4 w-full rounded-full" @click="acceptOffer()">
              ACCEPT
            </button>
            <button disabled class="cursor-not-allowed text-[#1A1E3E] bg-white enabled:hover:bg-[#c7cee6] disabled:hover:opacity-75 font-bold py-2 px-4 w-full rounded-full">
              COUNTER OFFER
            </button>
          </template>
          <template v-else>
            <button class="text-[#1A1E3E] bg-white hover:bg-[#c7cee6] font-bold py-2 px-4 w-full rounded-full" @click="openModal('info')">
              TRADE INFO
            </button>
            <button
                class="bg-white text-[#1A1E3E] font-bold py-2 px-4 w-full rounded-full"
                @click="openModal('update')"
                :disabled="!isTradeWaitingForAcceptance()"
                :class="[
                      !isTradeWaitingForAcceptance() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-[#c7cee6]'
                ]"
            >
              SHIPPING UPDATE
            </button>
          </template>
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

import { useRoute, useRouter } from 'vue-router'
import { computed, onMounted, ref, type Ref } from 'vue'
import axios, { type AxiosResponse } from 'axios'
import CardLorcanaComponent from '@/components/card/lorcana/CardLorcanaComponent.vue';
import type { Trade, TradeCard } from '@/types/trade';
import { useModalStore } from '@/stores/modal';
import ShippingModalComponent from '@/components/trading/ShippingModalComponent.vue';
import { storeToRefs } from 'pinia';
import { useTradeStore } from '@/stores/trade';
import type { Card } from '@/components/card/CardInterface';
import { getAccessToken, decodeToken } from '@/auth/token';
import {useConfirmModalStore} from "@/stores/confirmModalStore";

// Constants
const route = useRoute()

// Refs
const proposerCards = ref<Card[]>([]);
const acceptorCards = ref<Card[]>([]);
const counterProposerCards = ref<number>(0);
const counterAcceptorCards = ref<number>(0);
const isProposer = ref<boolean>(false);
const isAccepted = ref<boolean>(false);
const selectOpen = ref(false);

// Constants
const router = useRouter();

// Computeds
const id = computed(() => route.params.id);

// Stores
const modalStore = useModalStore();
const modalStoreConfirm = useConfirmModalStore()
const { open } = modalStoreConfirm;
const { onToggle } = modalStore;
const { modalContent } = storeToRefs(modalStore);
const tradeStore = useTradeStore();
const { trade } = storeToRefs(tradeStore);

// Hooks
onMounted(async () => {
  trade.value = (await getTradeInfo()).data;
  
  counterProposerCards.value = getCards(trade.value.proposerCards, proposerCards.value);
  counterAcceptorCards.value = getCards(trade.value.acceptorCards, acceptorCards.value);

  const sub = decodeToken(getAccessToken()).sub;

  isProposer.value = trade.value.proposer.keycloakUUID === sub ? true : false;
  isAccepted.value = trade.value.acceptor ? true : false;
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

async function acceptOffer(): Promise<void> {
  open(
    'Are you sure you want to accept this trade ?',
    async () => {
      await axios.post<Trade>(`${import.meta.env.VITE_BACKEND_PROXY}/trades/${trade.value.id}/accept`)
      .then((res) => {
          trade.value = res.data;
          isAccepted.value = trade.value.acceptor ? true : false;
      })
      .catch(() => {
        alert('An error occured')
      });
    }
  )
}

async function executeAction(option: string | undefined): Promise<void> {
  if(option === 'DELETE') {
      open(
    'Are you sure you want to delete this trade ?',
    async () => {
        await axios.delete(`${import.meta.env.VITE_BACKEND_PROXY}/trades/${trade.value.id}`)
        .then(() => {
            router.push({name: 'my-trades'});
        })
       .catch(() => {
          alert('An error occured')
        });
      }
    )
  }
  selectOpen.value = false;
}

function isTradeWaitingForAcceptance(): boolean {
  return !!(trade.value.acceptor?.keycloakUUID);
}

</script>

<style scoped>
.card {
  background-repeat: no-repeat;
  background-position: center;
  position: relative;
  overflow: hidden;
  display: inline-block;
  vertical-align: middle;
  margin: 20px 10px;
}

.card:before,
.card:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    rgb(0, 231, 255) 30%,
    rgb(255, 0, 231) 70%,
    transparent 100%
  );
  border-radius: 1rem;
  background-position: 0% 0%;
  background-repeat: no-repeat;
  background-size: 300% 300%;
  mix-blend-mode: color-dodge;
  opacity: 0.2;
  z-index: 1;
  /* animation: holoGradient 15s ease infinite; */
}
.card:after {
  background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/13471/sparkles.gif");
  background-position: center;
  background-size: 180%;
  mix-blend-mode: color-dodge;
  opacity: 1;
  z-index: 2;
  /* animation: holoSparkle 20s ease infinite; */
}

.card.active:before {
  opacity: 1;
  animation: none;
  transition: none;
  background-image: linear-gradient(
    115deg,
    transparent 0%,
    transparent 25%,
    rgba(0, 231, 255,0.7) 45%,
    rgba(255, 0, 231,0.7) 55%,
    transparent 70%,
    transparent 100%
  );
}


.operator {
  display: inline-block;
  vertical-align: middle;
  font-size: 45px;
}
@keyframes holoSparkle {
  0% {
    opacity: 0;
  }
  12% {
    opacity: 1;
  }
  70% {
    opacity: 0.5;
  }
  95% {
    opacity: 0.2;
  }
}

@keyframes holoGradient {
  3% {
    opacity: 0;
  }
  5% {
    background-position: 0% 0%;
  }
  7% {
    opacity: 0.5;
  }
  9% {
    background-position: 100% 100%;
  }
  11% {
    opacity: 0;
  }
  50% {
    opacity: 0;
    background-position: 100% 100%;
  }
  55% {
    opacity: 0.3;
  }
  70% {
    opacity: 0;
    background-position: 0% 0%;
  }
}
</style>