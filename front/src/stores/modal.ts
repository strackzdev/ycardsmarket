import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const isOpen = ref(false);
  const modalContent = ref<string>();

  function onToggle() {
    isOpen.value = !isOpen.value;
  }

  return {
    isOpen,
    modalContent,
    onToggle
  }
})
