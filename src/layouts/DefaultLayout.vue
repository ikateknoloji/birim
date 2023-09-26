<template>
  <VuePreloader background-color="#fff" color="#ffffff" :transition-speed="3000">
    <img src="@/assets/loader.gif" alt="">
  </VuePreloader>
  <Navbar />
  <SideContact />
  <MobileNav />
  <router-view></router-view>
  <Footer />
</template>

<script setup>
import { ref } from 'vue';
import { VuePreloader } from 'vue-preloader';
import Navbar from '../components/navbar/Navbar.vue';
import MobileNav from "@/components/navbar/mobile/MobilNav.vue";
import SideContact from '@/components/SideContact.vue';
import Footer from '@/components/footer/Footer.vue';



/*
  <VuePreloader  background-color="#222831" color="#ffffff" :loading-speed="50" :transition-speed="1400">
  </VuePreloader>
*/
</script>

<style  scoped></style>