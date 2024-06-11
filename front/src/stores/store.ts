import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { Card } from '@/utils/types/card'
import { getAllCards } from '@/utils/requests/card'

export const useMainStore = defineStore('main', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)

  const storeCards = ref<Card[]>([]);

  async function fetchAllCards() {
    storeCards.value = await getAllCards();
  }

  return {
    storeCards,
    fetchAllCards
  }
})
