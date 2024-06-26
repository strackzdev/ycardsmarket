<template>
    <ModalComponent>
        <template v-if="modalContent === 'info' && isOpen">
            <h1 class="font-bold text-xl">Shipping Informations</h1>
            <p class="text-[#555C93] text-lg">Method - Tracked Letter (With Financial Garantee)</p>
            <div class="flex gap-10 mt-5">
            <div class="w-1/2">
                <div>
                <h2 class="font-bold text-lg">Proposer tracked number</h2>
                <p class="underline">{{ trade.shipping.proposerTrackingNumber ? trade.shipping.proposerTrackingNumber : 'Not assigned yet' }}</p>
                </div>
            </div>
            <div class="w-1/2">
                <div>
                <h2 class="font-bold text-lg">Acceptor tracked number</h2>
                <p class="underline">{{ trade.shipping.acceptorTrackingNumber ? trade.shipping.acceptorTrackingNumber : 'Not assigned yet' }}</p>
                </div>
            </div>
            </div>
            <div class="flex justify-center mt-5">
            <button class="bg-[#1A1E3E] hover:bg-[#3B4487] text-white font-bold py-2 px-4 w-72 rounded-full" @click="openShippingUpdateContent">
                Update shipping status
            </button>
            </div>
        </template>

        <template v-if="modalContent === 'update'">
            <h1 class="font-bold text-xl">Shipping Update</h1>
            <p class="mt-4 text-[#555C93] text-lg">Method - Tracked Letter (With Financial Garantee)</p>
            <div class="mt-4">

            <h2 class="font-bold text-lg">My Letter <span class="font-bold text-sm">(Letter that I sent)</span></h2>
        
            <div class="mt-4">
                <label for="email" class="block mb-2 text-sm font-medium navy-blue">Tracked number</label>
                <input type="text" v-model="trackedNumber" class="bg-gray-50 border border-gray-300 navy-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="#784d8gr8654" required>
            </div>
            </div>

            <div class="mt-4">
                <h2 class="font-bold text-lg">Received content <span class="font-bold text-sm">(Letter was send to me)</span></h2>
            </div>

            <div class="flex items-center mt-4">
                <input id="default-checkbox" type="checkbox" v-model="proposerDelivered" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                <label for="default-checkbox" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I received the letter</label>
            </div>

            <div class="flex justify-center mt-10">
                <button class="bg-[#1A1E3E] hover:bg-[#3B4487] text-white font-bold py-2 px-4 w-72 rounded-full" @click="updateShippingInfo()">
                    Update shipping status
                </button>
            </div>
        </template>
    </ModalComponent>
</template>

<script lang="ts" setup>
import axios from 'axios';
import { useModalStore } from '@/stores/modal';
import { storeToRefs } from 'pinia';
import ModalComponent from '../utils/ModalComponent.vue';
import { useTradeStore } from '@/stores/trade';

// Stores
const modalStore  = useModalStore();
const { modalContent, isOpen } = storeToRefs(modalStore);
const { onToggle } = modalStore;
const tradeStore  = useTradeStore();
const { trade } = storeToRefs(tradeStore);


const trackedNumber = defineModel<string>('trackedNumber');
const proposerDelivered = defineModel<string>('proposerDelivered');

function updateShippingInfo(): void {
    axios.put(`${import.meta.env.VITE_BACKEND_PROXY}/trades/${trade.value.id}`, 
        {
            "id": trade.value.id,
            "method": trade.value.shipping.method,
            "proposerTrackingNumber": trackedNumber.value,
            "acceptorTrackingNumber": trackedNumber.value,
            "proposerDelivered": proposerDelivered.value,
            "acceptorDelivered": proposerDelivered.value
        })
    onToggle();
};

function openShippingUpdateContent(): void {
    modalContent.value = 'update'
}

</script>