<template>
  <select class="px-4 h-7 md:h-14 navy-blue italic border-2 barbel-blue-border barbel-blue-bg-lighter-hover bg-white" @change="updateSelect">
    <option value="">{{ defaultValue }}</option>
    <option disabled>──────────</option>
    <option v-for="[key, value] in cardLorcanaTypes" :key="key" :value="value">{{ value }}</option>
  </select>
</template>

<script setup lang="ts">
import {CardLorcanaSet, CardLorcanaType, CardLorcanaRarity, CardLorcanaProperty} from '@/components/card/CardLorcanaEnum'
import { computed } from 'vue';

// Type
export interface Filter {
  filterName: string,
  value: string
}

// Props
const props = defineProps<{
  filterName: string,
  filterBy: typeof CardLorcanaType | typeof CardLorcanaSet | typeof CardLorcanaRarity
}>()

// Computeds
const cardLorcanaTypes = computed(() => {
  return Object.entries(props.filterBy);
})
const defaultValue = computed(() => {
  return CardLorcanaProperty[(props.filterName.toUpperCase() as keyof typeof CardLorcanaProperty)]
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