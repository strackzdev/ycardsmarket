import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useConfirmModalStore = defineStore('confirmModal', () => {
  const isOpen = ref(false)
  const message = ref('')
  const functIsConfirmed = ref(() => {})

  function open(text: string, funct: () => void) {
    isOpen.value = true
    message.value = text
    functIsConfirmed.value = funct
  }

  function confirm() {
    functIsConfirmed.value()
    isOpen.value = false
    resetValues()
  }

  function cancel() {
    isOpen.value = false
    resetValues()
  }

  function resetValues() {
    functIsConfirmed.value = () => {}
    message.value = ''
  }
  return {
    isOpen,
    message,
    open,
    confirm,
    cancel
  }
})
