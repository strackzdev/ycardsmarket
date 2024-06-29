<template>
    <ModalComponent>
        <template v-if="modalContent === 'info' && isOpen">
            <h1 class="font-bold text-xl">{{ shippingInformationLabel() }}</h1>
            <p class="text-[#555C93] text-lg">Method - Tracked Letter (With Financial Garantee)</p>
            <div class="flex gap-10 mt-5">
                <div class="w-1/2">
                    <div>
                        <h2 class="font-bold text-lg">Proposer tracked number</h2>
                        <p class="underline">{{ trade.shipping.proposerTrackingNumber ? trade.shipping.proposerTrackingNumber : 'Not assigned yet' }}</p>
                    </div>

                    <div class="flex mt-5">
                        <h2 class="font-bold text-lg mr-2">Received</h2>
                        <svg v-if="trade.shipping.proposerDelivered" width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.50142 0C2.91657 0 0 2.91657 0 6.50142C0 10.0863 2.91657 13.0028 6.50142 13.0028C10.0863 13.0028 13.0028 10.0863 13.0028 6.50142C13.0028 2.91657 10.0863 0 6.50142 0ZM9.88497 4.3225L5.68405 9.32359C5.63797 9.37848 5.58063 9.42282 5.51592 9.45362C5.4512 9.48441 5.38063 9.50093 5.30897 9.50207H5.30053C5.23043 9.50205 5.16112 9.48728 5.0971 9.45875C5.03307 9.43021 4.97576 9.38853 4.92889 9.33641L3.12849 7.33597C3.08277 7.28748 3.0472 7.23033 3.02388 7.16789C3.00056 7.10545 2.98995 7.03898 2.99269 6.97239C2.99542 6.90579 3.01144 6.84041 3.0398 6.7801C3.06816 6.71978 3.10829 6.66574 3.15784 6.62115C3.20738 6.57657 3.26534 6.54234 3.3283 6.52047C3.39126 6.4986 3.45796 6.48954 3.52448 6.49382C3.59099 6.4981 3.65598 6.51563 3.71562 6.54538C3.77526 6.57514 3.82836 6.61651 3.87178 6.66708L5.2874 8.23992L9.11917 3.67924C9.20512 3.57987 9.32673 3.51831 9.4577 3.50787C9.58867 3.49744 9.71849 3.53896 9.81909 3.62347C9.91969 3.70797 9.983 3.82867 9.99533 3.95948C10.0077 4.09029 9.96801 4.22069 9.88497 4.3225Z" fill="black"/>
                        </svg>
                        <svg v-else width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00025 0.499634C3.41618 0.499634 0.500244 3.41557 0.500244 6.99964C0.500244 10.5837 3.41618 13.4996 7.00025 13.4996C10.5843 13.4996 13.5002 10.5837 13.5002 6.99964C13.5002 3.41557 10.5843 0.499634 7.00025 0.499634ZM9.35368 8.6462C9.40207 8.69217 9.44076 8.74735 9.46748 8.80851C9.4942 8.86967 9.5084 8.93555 9.50926 9.00229C9.51011 9.06902 9.4976 9.13525 9.47245 9.19707C9.44731 9.25889 9.41004 9.31505 9.36285 9.36224C9.31566 9.40943 9.2595 9.4467 9.19768 9.47184C9.13586 9.49699 9.06963 9.5095 9.0029 9.50865C8.93616 9.50779 8.87028 9.49359 8.80912 9.46687C8.74796 9.44015 8.69278 9.40146 8.64681 9.35307L7.00025 7.70682L5.35368 9.35307C5.25915 9.44288 5.13328 9.49221 5.0029 9.49054C4.87252 9.48887 4.74794 9.43634 4.65574 9.34414C4.56354 9.25194 4.51101 9.12737 4.50934 8.99699C4.50767 8.8666 4.557 8.74073 4.64681 8.6462L6.29306 6.99964L4.64681 5.35307C4.557 5.25854 4.50767 5.13267 4.50934 5.00229C4.51101 4.8719 4.56354 4.74733 4.65574 4.65513C4.74794 4.56293 4.87252 4.5104 5.0029 4.50873C5.13328 4.50706 5.25915 4.55639 5.35368 4.6462L7.00025 6.29245L8.64681 4.6462C8.74134 4.55639 8.86722 4.50706 8.9976 4.50873C9.12798 4.5104 9.25255 4.56293 9.34475 4.65513C9.43695 4.74733 9.48948 4.8719 9.49115 5.00229C9.49282 5.13267 9.44349 5.25854 9.35368 5.35307L7.70743 6.99964L9.35368 8.6462Z" fill="black"/>
                        </svg>
                    </div>
                </div>

                <div class="w-1/2">
                    <div>
                        <h2 class="font-bold text-lg">Acceptor tracked number</h2>
                        <p class="underline">{{ trade.shipping.acceptorTrackingNumber ? trade.shipping.acceptorTrackingNumber : 'Not assigned yet' }}</p>
                    </div>

                    <div class="flex mt-5">
                        <h2 class="font-bold text-lg mr-2">Received</h2>
                        <svg v-if="trade.shipping.acceptorDelivered" width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.50142 0C2.91657 0 0 2.91657 0 6.50142C0 10.0863 2.91657 13.0028 6.50142 13.0028C10.0863 13.0028 13.0028 10.0863 13.0028 6.50142C13.0028 2.91657 10.0863 0 6.50142 0ZM9.88497 4.3225L5.68405 9.32359C5.63797 9.37848 5.58063 9.42282 5.51592 9.45362C5.4512 9.48441 5.38063 9.50093 5.30897 9.50207H5.30053C5.23043 9.50205 5.16112 9.48728 5.0971 9.45875C5.03307 9.43021 4.97576 9.38853 4.92889 9.33641L3.12849 7.33597C3.08277 7.28748 3.0472 7.23033 3.02388 7.16789C3.00056 7.10545 2.98995 7.03898 2.99269 6.97239C2.99542 6.90579 3.01144 6.84041 3.0398 6.7801C3.06816 6.71978 3.10829 6.66574 3.15784 6.62115C3.20738 6.57657 3.26534 6.54234 3.3283 6.52047C3.39126 6.4986 3.45796 6.48954 3.52448 6.49382C3.59099 6.4981 3.65598 6.51563 3.71562 6.54538C3.77526 6.57514 3.82836 6.61651 3.87178 6.66708L5.2874 8.23992L9.11917 3.67924C9.20512 3.57987 9.32673 3.51831 9.4577 3.50787C9.58867 3.49744 9.71849 3.53896 9.81909 3.62347C9.91969 3.70797 9.983 3.82867 9.99533 3.95948C10.0077 4.09029 9.96801 4.22069 9.88497 4.3225Z" fill="black"/>
                        </svg>

                        <svg v-else width="28" height="28" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.00025 0.499634C3.41618 0.499634 0.500244 3.41557 0.500244 6.99964C0.500244 10.5837 3.41618 13.4996 7.00025 13.4996C10.5843 13.4996 13.5002 10.5837 13.5002 6.99964C13.5002 3.41557 10.5843 0.499634 7.00025 0.499634ZM9.35368 8.6462C9.40207 8.69217 9.44076 8.74735 9.46748 8.80851C9.4942 8.86967 9.5084 8.93555 9.50926 9.00229C9.51011 9.06902 9.4976 9.13525 9.47245 9.19707C9.44731 9.25889 9.41004 9.31505 9.36285 9.36224C9.31566 9.40943 9.2595 9.4467 9.19768 9.47184C9.13586 9.49699 9.06963 9.5095 9.0029 9.50865C8.93616 9.50779 8.87028 9.49359 8.80912 9.46687C8.74796 9.44015 8.69278 9.40146 8.64681 9.35307L7.00025 7.70682L5.35368 9.35307C5.25915 9.44288 5.13328 9.49221 5.0029 9.49054C4.87252 9.48887 4.74794 9.43634 4.65574 9.34414C4.56354 9.25194 4.51101 9.12737 4.50934 8.99699C4.50767 8.8666 4.557 8.74073 4.64681 8.6462L6.29306 6.99964L4.64681 5.35307C4.557 5.25854 4.50767 5.13267 4.50934 5.00229C4.51101 4.8719 4.56354 4.74733 4.65574 4.65513C4.74794 4.56293 4.87252 4.5104 5.0029 4.50873C5.13328 4.50706 5.25915 4.55639 5.35368 4.6462L7.00025 6.29245L8.64681 4.6462C8.74134 4.55639 8.86722 4.50706 8.9976 4.50873C9.12798 4.5104 9.25255 4.56293 9.34475 4.65513C9.43695 4.74733 9.48948 4.8719 9.49115 5.00229C9.49282 5.13267 9.44349 5.25854 9.35368 5.35307L7.70743 6.99964L9.35368 8.6462Z" fill="black"/>
                        </svg>
                    </div>
                </div>

                </div>
                <div class="flex justify-center mt-10">
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
                <p v-if="isVisible" class="mt-1 text-red-500 text-xs">Field is empty</p>
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
import { ref } from 'vue';
import { decodeToken, getAccessToken } from '@/auth/token';

// Refs
const isVisible = ref<boolean>(false)

// Models
const trackedNumber = defineModel<string>('trackedNumber');
const proposerDelivered = defineModel<boolean>('proposerDelivered', { default : false });

// Stores
const modalStore  = useModalStore();
const { modalContent, isOpen } = storeToRefs(modalStore);
const { onToggle } = modalStore;
const tradeStore  = useTradeStore();
const { trade } = storeToRefs(tradeStore);

// Functions
async function updateShippingInfo(): Promise<void> {
    if (!trackedNumber.value) {
        isVisible.value = true;
        return;
    }

    const sub = decodeToken(getAccessToken()).sub;

    let payload: {
        proposerTrackingNumber?: string,
        proposerDelivered?: boolean,
        acceptorTrackingNumber?: string,
        acceptorDelivered?: boolean,
    } = {}

    if(trade.value.proposer.keycloakUUID === sub) {
        payload.proposerTrackingNumber = trackedNumber.value;
        payload.proposerDelivered = proposerDelivered.value;
    }

    if(trade.value.acceptor?.keycloakUUID === sub) {
        payload.acceptorTrackingNumber = trackedNumber.value;
        payload.acceptorDelivered = proposerDelivered.value;
    }

    const res = await axios.put(`${import.meta.env.VITE_BACKEND_PROXY}/trades/${trade.value.id}`, payload);
    trade.value = res.data;

    isVisible.value = false;
    onToggle();
};

function openShippingUpdateContent(): void {
    modalContent.value = 'update'
}

function shippingInformationLabel(): string {
  let tradeStatus = " (Waiting for Acceptance)";
  if(trade.value.acceptor?.keycloakUUID) {
    tradeStatus = " (Accepted)";
  }
  return "Trade Information's" + tradeStatus;
}

</script>