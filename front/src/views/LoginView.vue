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
        <form class="space-y-4 md:space-y-6" @submit.prevent="loginOnSubmit()">
          <div>
            <label for="email" class="block mb-2 text-sm font-medium navy-blue">Email or username</label>
            <input v-model="loginForm.username" type="text" class="login-buttons bg-gray-50 border-gray-300 navy-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="player@ycardmarket.com or username" required>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium navy-blue">Password</label>
            <input v-model="loginForm.password" type="password" placeholder="••••••••" class="login-buttons bg-gray-50 border-gray-300 navy-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
          </div>
          <div class="flex items-center justify-between">
            <div class="flex items-start">
              <div class="flex items-center h-5">
                <input id="remember" aria-describedby="remember" type="checkbox" class="login-buttons w-4 h-4 border border-gray-300 bg-gray-50 focus:ring-3 focus:ring-primary-300">
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="barbel-blue">Remember me</label>
              </div>
            </div>
            <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
          </div>
          <button type="submit" class="login-buttons py-2 w-full navy-blue-bg text-white">Sign in</button>
 
          <p class="text-sm font-light barbel-blue">
            Don’t have an account yet? <router-link :to="{ name: 'signup'}" class="font-bold navy-blue hover:underline">Sign up</router-link>
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
import { setAccessToken, setRefreshToken } from '@/auth/token';
import { login } from '@/auth/auth';

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
async function loginOnSubmit() {
  try {
    await login(loginForm.username, loginForm.password);
    router.push({ name: 'home'});
  } catch(e) {
    toastIsVisible.value = true
    toastContent.value = 'Username or password incorrect'
  }
};
</script>

<style scoped>
  .login-buttons {
    border-radius: 9999px;
  }
</style>
