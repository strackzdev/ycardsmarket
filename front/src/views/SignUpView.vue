<template>
<section class="h-screen navy-blue-bg">
  
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    <ToastComponent :is-visible="toastIsVisible" :content="toastContent"/>
    
    <a href="#" class="flex items-center mb-6 text-2xl font-semibold navy-blue">
      <img src="../../src/assets/images/logoWhite.png" alt="Image Description" class="w-23 h-28"> 
    </a>
    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
      <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 class="text-xl font-bold leading-tight tracking-tight navy-blue md:text-2xl">Sign up to YCardsMarket</h1>
        <form class="space-y-4 md:space-y-6" @submit.prevent="signUpOnSubmit()">
          <div>
            <label for="text" class="block mb-2 text-sm font-medium navy-blue after:content-['*'] after:text-red-500">First name</label>
            <input v-model="signUpForm.firstName" type="text" class="bg-gray-50 border-gray-300 navy-blue sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="First name" required>
          </div>
          <div>
            <label for="text" class="block mb-2 text-sm font-medium navy-blue after:content-['*'] after:text-red-500">Last name</label>
            <input v-model="signUpForm.lastName" type="text" class="bg-gray-50 border-gray-300 navy-blue sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="Last name" required>
          </div>
          <div>
            <label for="text" class="block mb-2 text-sm font-medium navy-blue ">Username</label>
            <input v-model="signUpForm.username" type="text" class="bg-gray-50 border-gray-300 navy-blue sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="User name" required>
          </div>
          <div>
            <label for="email" class="block mb-2 text-sm font-medium navy-blue after:content-['*'] after:text-red-500">Email</label>
            <input v-model="signUpForm.email" type="text" class="bg-gray-50 border-gray-300 navy-blue sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="player@ycardmarket.com" required>
          </div>
          <div>
            <label for="password" class="block mb-2 text-sm font-medium navy-blue after:content-['*'] after:text-red-500">Password</label>
            <input v-model="signUpForm.password" type="password" placeholder="••••••••" class="bg-gray-50 border-gray-300 navy-blue sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
          </div>
          <div>
            <label for="passwordConfirmation" class="block mb-2 text-sm font-medium navy-blue after:content-['*'] after:text-red-500">Password Confirmation</label>
            <input v-model="signUpForm.passwordConfirmation" type="password" placeholder="••••••••" class="bg-gray-50 border-gray-300 navy-blue sm:text-sm rounded-full focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required>
          </div>
          <button type="submit" class="py-2 w-full rounded-full navy-blue-bg text-white">Sign in</button>
 
          <p class="text-sm font-light barbel-blue">
            You already have an account? <router-link :to="{ name: 'login'}" class="font-bold navy-blue hover:underline">Log in</router-link>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

// Types
interface SignUpForm {
	firstName: string,
	lastName: string,
	email: string
  username?: string,
  password: string,
	passwordConfirmation: string
}

// Refs
const signUpForm = reactive<SignUpForm>({
	firstName: '',
	lastName: '',
	email: '',
  username: undefined,
  password: '',
	passwordConfirmation: ''
})
const toastIsVisible = ref<boolean>(false);
const toastContent = ref<string>('');

// Functions
function signUpOnSubmit() {
  
}
</script>