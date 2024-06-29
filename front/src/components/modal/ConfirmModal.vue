<script setup>

import { useConfirmModalStore } from '@/stores/confirmModalStore.ts'
import { storeToRefs } from 'pinia'

const store = useConfirmModalStore()

const { isOpen, message} = storeToRefs(store)

const { cancel, confirm } = store

</script>

<template>
  <div class="bg-slate-800 bg-opacity-50 flex justify-center items-center fixed top-0 right-0 bottom-0 left-0" v-if="isOpen">
    <div class="bg-white px-16 py-14 rounded-md text-center">
      <h1 class="text-xl mb-4 font-bold text-slate-500">{{message}}</h1>
      <button class="bg-red-500 hover:bg-red-400 px-4 py-2 rounded-md text-md text-white" @click="cancel">Cancel</button>
      <button class="bg-[#1A1E3E] hover:bg-[#3B4487] px-7 py-2 ml-2 rounded-md text-md text-white font-semibold" @click="confirm">Accept</button>
    </div>
  </div>
</template>