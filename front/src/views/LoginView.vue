<template>
<section class="h-screen navy-blue-bg">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a href="#" class="flex items-center mb-6 text-2xl font-semibold navy-blue">
        <img src="../../src/assets/images/logoWhite.png" alt="Image Description" class="w-23 h-28"> 
      </a>
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight navy-blue md:text-2xl">
                  Log in to YCardsMarket
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium navy-blue">Email or username</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 navy-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="player@ycardmarket.com or username" required="">
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium navy-blue">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 navy-blue sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required="">
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" required="">
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="barbel-blue">Remember me</label>
                          </div>
                      </div>
                      <a href="#" class="text-sm font-medium text-primary-600 hover:underline">Forgot password?</a>
                  </div>
                  <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>
                  <p class="text-sm font-light barbel-blue">
                      Don’t have an account yet? <a href="#" class="font-bold navy-blue text-primary-600 hover:underline">Sign up</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
</template>

<script setup lang="ts"></script>
