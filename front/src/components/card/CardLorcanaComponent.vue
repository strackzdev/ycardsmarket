<template>
  <div class="flex flex-col justify-center">
    <img
      class="rounded-xl w-fit"
      :class="[isRotated ? 'rotate-90 aspect-square scale-x-75' : '']"
      :src="props.card.image_url"
      alt=""
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type CardLorcana } from './CardInterface'
import { CardLorcanaType } from './CardLorcanaEnum'

// Props
const props = defineProps<{ card: CardLorcana }>()

// Refs
const isRotated = ref(false)

// Hook
onMounted(() => {
  doRotation()
})

// Functions
function doRotation() {
  if (props.card.type === CardLorcanaType.LOCATION) {
    isRotated.value = !isRotated.value
  }
}
</script>
