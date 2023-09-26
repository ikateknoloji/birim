<template>
  <li>
    <router-link to="/dashboard"
      class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
      <span class="inline-flex items-center justify-center h-12 w-12 text-lg">
        <svg class="fill-slate-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
          <path
            d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
        </svg>
      </span>
      <span class="text-sm font-medium">Dashboard</span>
    </router-link>
  </li>
</template>

<script setup>

</script>

<style scoped></style>