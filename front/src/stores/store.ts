import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMainStore = defineStore('main', () => {
  const count = ref(0)
  const name = ref('Pinia Store')

  const doubleCount = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  function setName(newName: string) {
    name.value = newName
  }

  return {
    count,
    name,
    doubleCount,
    increment,
    setName
  }
})
