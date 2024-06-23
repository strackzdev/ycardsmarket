<template>
  <select class="px-4 h-7 md:h-14 navy-blue italic border-2 barbel-blue-border barbel-blue-bg-lighter-hover bg-white" @change="updateSelect">
    <option value="">{{ props.filterName }}</option>
    <option disabled>──────────</option>
    <option v-for="[key, value] in options" :key="key" :value="value">{{ value }}</option>
  </select>
</template>

<script setup lang="ts">
import { computed } from 'vue';

// Type
export interface Filter {
  filterName: string,
  value: string
}

interface Options {
  filterName: string,
  /**
   * Enum type
   */
  filterBy: {[key: string]: string}
}

// Props
const props = defineProps<Options>()

// Computeds
const options = computed(() => {
  return Object.entries(props.filterBy);
})

// Emits
const emit = defineEmits<{ filter : Filter[] }>();

// Functions
function updateSelect(e: Event) {
    e.preventDefault()
    const target = e.currentTarget as HTMLInputElement;

    emit('filter', { filterName: props.filterName, value: target.value })
}
</script>