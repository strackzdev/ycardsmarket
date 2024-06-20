<template>
  <div :style="logoButtonsStyle">
    <div class="col-span-2 mt-10 ml-20 mr-4">
      <img :src="logoSrc" alt="Image Description" class="w-23 h-28 mr-5">
    </div>
    
    <div :style="buttonsStyle" class="pr-custom mt-10 flex justify-end py-2 px-5">
      <div v-if="existsToken">
        <Button @click="logout" :style="buttonStyle" fontSize="1.3rem">LOGOUT</Button>
      </div>
      <div v-else>
        <Button @click="login" :style="buttonStyle" fontSize="1.3rem">LOGIN</Button>
        <Button class="ml-4" :style="buttonStyle" fontSize="1.3rem">REGISTER</Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Button from "@/components/homePage/Buttons.vue";
import logoWhite from '@/assets/images/logoWhite.png';
import logoBlack from '@/assets/images/logoBlack.png';

// Constants
const route = useRoute();
const router = useRouter();

// Computeds
const existsToken = computed(() => {
  return localStorage.getItem('access_token') ? true : false;
});

// Computed property to determine which logo to display
const logoSrc = computed(() => {
  return route.name === 'home' ? logoWhite : logoBlack;
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
        width: '100%',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
      }
      : {};
});

const buttonsStyle = {
  position: 'absolute',
  top: '0',
  right: '0',
  //marginRight: '200px',
};

// Functions
function login() {
  router.push({name:'login'});
}

function logout() {
  localStorage.removeItem('token');
  router.push({name:'login'});
}
</script>
