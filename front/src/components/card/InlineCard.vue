<script setup lang="ts">

const { item } = defineProps<{
  item: any
  incrementCard: (card: any, foil: boolean) => void
  decrementCard: (card: any, foil: boolean) => void
}>();

function dynamicGradient(color: string) {
  return `bg-gradient-to-r from-${color.toLowerCase()} to-gray-400`
}

</script>

<template>
  <div class="flex justify-between items-center relative rounded-t-lg overflow-clip">
    <div class="absolute w-full h-full opacity-80" :class="item.foil? dynamicGradient(JSON.parse(item.card.attributes).Color) + ' customCss' : dynamicGradient(JSON.parse(item.card.attributes).Color)" />
    <div class="flex gap-2 items-center">
      <img class="min-w-20 h-12 object-top object-cover" :src="item.card.imageUrl" alt="" />
      <span class="-ml-12 text-white relative">{{ item.card.name }}</span>
    </div>
    <div class="flex gap-2 relative text-white mr-2">
              <span class="cursor-pointer rounded-full border-2 font-bold uppercase border-white flex justify-center items-center w-6 h-6" @click="() => incrementCard">
                +
              </span>
      {{ item.quantity}}
      <span class="cursor-pointer rounded-full border-2 font-bold uppercase border-white flex justify-center items-center w-6 h-6" @click="() => decrementCard">
                -
              </span>
    </div>
  </div>
</template>

<style scoped>
.customCss {
  overflow: hidden;
}

.customCss::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0) 70%);
  transform: rotate(45deg);
  animation: shine 3s infinite;
}

@keyframes shine {
  0%, 100% {
    top: -50%;
    left: -100%;
  }
  50% {
    top: 50%;
    left: 50%;
  }
}
</style>