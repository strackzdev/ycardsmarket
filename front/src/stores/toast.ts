import { defineStore } from 'pinia'
import { ref } from 'vue'

type Toast = {
  message: string
  type: 'success' | 'error' | 'warning' | 'info'

}
type ToastWithId = Toast & { id: string }

export const useToastStore = defineStore('toast', () => {

  const toastList = ref<ToastWithId[]>([])

  function closeToast(id: string) {
    toastList.value = toastList.value.filter(toast => toast.id !== id)
  }

  function addToast(toast: Toast) {
    const newToast = { ...toast, id: (Math.max(...toastList.value.map(t => parseInt(t.id))) + 1).toString() }
    toastList.value.push(newToast)
    setTimeout(() => {
      closeToast(newToast.id)
    }, 5000)
  }

  return {
    toastList,
    closeToast,
    addToast
  }
})
