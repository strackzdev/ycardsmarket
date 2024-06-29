
<template>
  <transition name="fade">
      <div v-if="isOpen" @click="onToggle()" class="bg-[#70707075] fixed top-0 left-0 w-screen h-screen">
        <div @click.stop class="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 p-10 bg-white rounded-3xl lg:w-[40vw] w-[90vw] min-w-[200px] max-w-[2000px]">
          <div>
            <svg @click="onToggle()" class="absolute top-5 right-5 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.709 4.70714C17.0995 4.31663 17.0995 3.68346 16.709 3.29292C16.3185 2.90238 15.6854 2.90236 15.2948 3.29286L10.0009 8.58627L4.70708 3.29286C4.31654 2.90236 3.68338 2.90238 3.29287 3.29292C2.90236 3.68346 2.90239 4.31663 3.29293 4.70714L8.58667 10.0004L3.29292 15.2937C2.90238 15.6842 2.90236 16.3174 3.29286 16.7079C3.68337 17.0985 4.31654 17.0985 4.70708 16.708L10.0009 11.4146L15.2948 16.708C15.6854 17.0985 16.3185 17.0985 16.709 16.7079C17.0995 16.3174 17.0995 15.6842 16.709 15.2937L11.4152 10.0004L16.709 4.70714Z" fill="#888891"/>
            </svg>
          </div>

          <slot></slot>

        </div>
      </div>
  </transition>
</template>
  
<script lang="ts" setup> 

import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';

// Stores
const store  = useModalStore()

// Function
const { onToggle } = store;
const { isOpen } = storeToRefs(store);

</script>
  
<style>
.classsss {
  background: #70707075;
}

.fade-enter,
.fade-leave-to {
opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
transition: opacity 500ms ease-out;
}
</style>
  