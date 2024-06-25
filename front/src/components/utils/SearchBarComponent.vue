<template>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="ml-1 w-4 h-4 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input v-model="searchInput" type="search" id="default-search" class="cursor-text h-14 navy-blue-bg block w-full placeholder-white text-white p-4 ps-10 text-sm rounded-full" placeholder="Search your card" />
        <button @click="updateSearch($event)" type="submit" class="text-white absolute end-2.5 bottom-2.5 barbel-blue-border barbel-blue-bg barbel-blue-bg-darker-hover font-medium rounded-full text-sm mr-5 px-4 py-2">Search</button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Refs
const searchInput = ref<string>('');

// Emits
const emit = defineEmits<{
    search: [{ filterName: string, value: string }]
}>()

// Functions
function updateSearch(e: Event) {
    emit('search', { filterName : 'search', value : searchInput.value })
}
</script>