<template>
  <router-link to="/">
    <img v-if="!isScrool" src="@/assets/logo-light.svg" alt="logo" class="max-h-[120px] ml-0 md:ml-5">
    <img v-if="isScrool" src="@/assets/logo.svg" alt="logo" class="max-h-[100px] ml-0 md:ml-10">
  </router-link>
</template>

<script setup>
import useScrollFixed from '@/composables/useScroll.js'

const { isScrool } = useScrollFixed()
</script>

<style scoped></style>