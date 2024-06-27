<template>
  <div :style="logoButtonsStyle" class="flex justify-between m-[2vw] relative">
    <div class="flex">
      <img :src="logoSrc" alt="Image Description" class="hidden lg:block h-28">
      <img :src="minLogoSrc" alt="Image Description" class="block lg:hidden h-28">
    </div>

    <div class="flex flex-col lg:flex-row gap-6">
      <template v-if="existsToken">
        <div class="w-full max-w-sm rounded-lg bg-white p-3 drop-shadow-xl divide-y divide-gray-200 absolute right-0 top-0 z-50">
          <div aria-label="header" class="flex space-x-4 items-center p-4 cursor-pointer hover:bg-gray-100" :class="isOpen? 'rounded-t-md' : 'rounded-md'" @click="isOpen = !isOpen">
            <div aria-label="avatar" class="flex mr-auto items-center space-x-4">
              <img :src="urlAvatar" alt="avatar Evan You" class="w-16 h-16 shrink-0 rounded-full" />
              <div class="space-y-2 flex flex-col flex-1 truncate">
                <div class="font-medium relative text-xl leading-tight text-gray-900">
              <span class="flex">
                <span class="truncate relative pr-8">
                  {{ pseudo }}
                </span>
              </span>
                </div>
                <p class="font-normal text-base leading-tight text-gray-500 truncate">{{ mail }}</p>
              </div>
            </div>
          </div>
          <div v-if="isOpen">
            <div aria-label="navigation" class="py-2">
              <nav class="grid gap-1">
                <div class="mb-2">
                  <a href="/" class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-7 h-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                    </svg>
                    <span>Account Settings</span>
                  </a>
                </div>
                <div class="mb-2">
                  <a href="/" class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="w-7 h-7" stroke-width="2" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.604 7.197l7.138-3.109a.96.96 0 0 1 1.27.527l4.924 11.902a1 1 0 0 1-.514 1.304L9.285 20.93a.96.96 0 0 1-1.271-.527L3.09 8.5a1 1 0 0 1 .514-1.304zM15 4h1a1 1 0 0 1 1 1v3.5M20 6q.396.168.768.315a1 1 0 0 1 .53 1.311L19 13"/></svg>
                    <span>Personal Trades</span>
                  </a>
                  <a href="/" class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="w-7 h-7" stroke-width="2" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m3.604 7.197l7.138-3.109a.96.96 0 0 1 1.27.527l4.924 11.902a1 1 0 0 1-.514 1.304L9.285 20.93a.96.96 0 0 1-1.271-.527L3.09 8.5a1 1 0 0 1 .514-1.304zM15 4h1a1 1 0 0 1 1 1v3.5M20 6q.396.168.768.315a1 1 0 0 1 .53 1.311L19 13"/></svg>
                    <span>Personal Decks</span>
                  </a>
                  <a href="/" class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="w-7 h-7" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m14 0V9a2 2 0 0 0-2-2M5 11V9a2 2 0 0 1 2-2m0 0V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2M7 7h10"/></svg>
                    <span>Personal Collections</span>
                  </a>
                </div>
                <div>
                  <a href="/" class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-7 h-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                      <path d="M9 17h6"></path>
                      <path d="M9 13h6"></path>
                    </svg>
                    <span>Guide</span>
                  </a>
                  <a href="/" class="flex items-center leading-6 space-x-3 py-3 px-4 w-full text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-7 h-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                      <path d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"></path>
                      <path d="M12 16v.01"></path>
                      <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"></path>
                    </svg>
                    <span>Helper Center</span>
                  </a>
                </div>
              </nav>
            </div>
            <div aria-label="footer" class="pt-2">
              <button @click="logoutOnClick" type="button" class="flex items-center space-x-3 py-3 px-4 w-full leading-6 text-lg text-gray-600 focus:outline-none hover:bg-gray-100 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-7 h-7" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M9 12h12l-3 -3"></path>
                  <path d="M18 15l3 -3"></path>
                </svg>
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </template>
      <template v-else>
        <Button @click="loginOnClick" :style="buttonStyle" fontSize="1.3rem">LOGIN</Button>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import Button from "@/components/homePage/Buttons.vue";
import logoWhite from '@/assets/images/logoWhite.png';
import logoBlack from '@/assets/images/logoBlack.png';
import minLogoWhite from '@/assets/images/minLogoWhite.png';
import minLogoBlack from '@/assets/images/minLogoBlack.png';
import { logout } from '@/auth/auth';
import { decodeToken, getAccessToken } from '@/auth/token'

// Constants
const route = useRoute();
const router = useRouter();

const isOpen = ref(false);

// Computeds
const existsToken = computed(() => {
  return !!getAccessToken();
});

const mail = computed(() => {
  return decodeToken(getAccessToken())?.email
});

const pseudo = computed(() => {
  return `${decodeToken(getAccessToken())?.given_name} ${decodeToken(getAccessToken())?.family_name}`
});

const urlAvatar = computed(() => {
  return `https://ui-avatars.com/api/?name=${decodeToken(getAccessToken())?.given_name}+${decodeToken(getAccessToken())?.family_name}`
});


// Computed property to determine which logo to display
const logoSrc = computed(() => {
  return route.name === 'home' ? logoWhite : logoBlack;
});

const minLogoSrc = computed(() => {
  return route.name === 'home' ? minLogoWhite : minLogoBlack;
});

// Computed property to determine button styles
const buttonStyle = computed(() => {
  return route.name === 'home'
      ? {
        padding: '1rem 2rem',
        width: '200px',
      }
      : {
        padding: '1rem 2rem',
        width: '200px',
        color: 'black',
        backgroundColor: 'white',
        border: '1px solid black',
      };
});

// Computed property to determine logo buttons style
const logoButtonsStyle = computed(() => {
  return route.name === 'home'
      ? {
        position: 'absolute',
        width: '-webkit-fill-available',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
      }
      : {};
});

// Functions
function loginOnClick() {
  router.push({name:'login'});
}

async function logoutOnClick() {
  await logout();

  router.push({name:'login'});
}
</script>
