<template>
  <nav aria-label="breadcrumb" class="w-full p-4 ">
    <ol class="flex h-8 space-x-2">
      <li class="flex items-center">
        <router-link rel="noopener noreferrer" to="/" title="Back to homepage" class="hover:underline">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
            class="w-5 h-5 pr-1 dark:text-[##111827]">
            <path
              d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z">
            </path>
          </svg>
        </router-link>
      </li>
      <li class="flex items-center space-x-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"
          class="w-2 h-2 mt-1 transform rotate-90 fill-current text-[##111827]">
          <path d="M32 30.031h-32l16-28.061z"></path>
        </svg>
        <router-link rel="noopener noreferrer" to="/dashboard"
          class="flex items-center px-1 capitalize hover:underline text-[##111827] font-medium font-montserrat">Dashboard</router-link>
      </li>
    </ol>
  </nav>
</template>

<script setup>

</script>

<style scoped></style>