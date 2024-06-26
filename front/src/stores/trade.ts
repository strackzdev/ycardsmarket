import type { Trade } from '@/types/trade'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTradeStore = defineStore('trade', () => {
  const trade = ref<Trade>({
      id: '',
      financialGarantee: false,
      cardGame: {
          id: '',
          label: '',
          description: '',
          createdAt: '',
          updatedAt: ''
      },
      proposerUID: '',
      acceptorUID: null,
      proposerCards: [],
      acceptorCards: [],
      shipping: {
          id: '',
          method: '',
          proposerTrackingNumber: null,
          acceptorTrackingNumber: null,
          proposerDelivered: false,
          acceptorDelivered: false,
          createdAt: '',
          updatedAt: ''
      },
      createdAt: '',
      updatedAt: ''
  })

  return {
    trade
  }
})
