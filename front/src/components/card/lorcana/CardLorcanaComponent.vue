<template>
  <div class="flex flex-col justify-center">
    <img
      class="rounded-2xl w-fit"
      :class="[isRotated ? 'rotate-90 aspect-square scale-x-75' : '']"
      :src="props.card.imageUrl"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type Card } from '../CardInterface';
import { CardLorcanaTypeEnum } from './CardLorcanaEnum'

// Props
const props = defineProps<{ card: Card }>()

// Refs
const isRotated = ref(false)

// Hook
onMounted(() => {
  doRotation()
})

// Functions
function doRotation() {
  if (props.card.type === CardLorcanaTypeEnum.LOCATION) {
    isRotated.value = !isRotated.value
  }
}
</script>
