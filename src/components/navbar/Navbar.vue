<template>
  <nav
  class="z-20  fixed transition-all duration-300 delay-75 ease-in
  flex items-center justify-center md:justify-between px-16 w-full"
  :class="isScrool ? ' top-0 bg-[#FEFEFA]' : ' top-0'">
   <TheLogo />
   <NavbarLink />
  </nav>
</template>

<script setup>
import NavbarLink from './NavbarLink.vue';
import TheLogo from './TheLogo.vue';
import useScrollFixed from '@/composables/useScroll.js'

const { isScrool } = useScrollFixed()

</script>

<style scoped></style>