<template>
<section class="h-screen navy-blue-bg">
  
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <ToastComponent :is-visible="toastIsVisible" :content="toastContent"/>
    
    <a href="#" class="flex items-center mb-6 text-2xl font-semibold navy-blue">
      <img src="../../src/assets/images/logoWhite.png" alt="Image Description" class="w-23 h-28"> 
    </a>
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight navy-blue md:text-2xl">Log in to YCardsMarket</h1>
        <form class="space-y-4 md:space-y-6" @submit.prevent="login">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium navy-blue">Email or username</label>
            <input v-model="loginForm.username" type="text" class="bg-gray-50 border border-gray-300 navy-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="player@ycardmarket.com or username" required>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium navy-blue">Password</label>
            <input v-model="loginForm.password" type="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 navy-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300">
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="barbel-blue">Remember me</label>
              </div>
            </div>
            <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" class="py-2 w-full navy-blue-bg text-white rounded-lg">Sign in</button>
          <p class="text-sm font-light barbel-blue">
            Don’t have an account yet? <a href="#" class="font-bold navy-blue text-primary-600 hover:underline">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

</template>

<script setup lang="ts">
import axios from 'axios'
import { reactive, ref } from 'vue';
import ToastComponent from '@/components/utils/ToastComponent.vue'
import { useRouter } from 'vue-router';

// Constants
const router = useRouter();

// Types
interface LoginForm {
  username: string,
  password: string,
}

// Refs
const loginForm = reactive<LoginForm>({
  username: '',
  password: ''
})

const toastIsVisible = ref<boolean>(false);
const toastContent = ref<string>('');

// Functions
function login() {
  const data = { 
    username: loginForm.username,
    password: loginForm.password,
    grant_type: 'password',
    client_id: 'trady-go-login',
  };

  const options = {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data,
    url: 'https://vps.strackzdev.com/realms/tradygo-realm/protocol/openid-connect/token'
  }

  axios(options)
  .then(res => {
    localStorage.setItem('token', res.data.access_token)
    router.push({ name: 'home'})
  })
  .catch(() => {
    toastIsVisible.value = true
    toastContent.value = 'Username or password incorrect'
  })
};
</script>
