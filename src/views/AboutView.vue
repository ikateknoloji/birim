<template>
  <ServicesHeader />
  <About />
  <Sector />
  <SectorImg />
  <div class="w-full mb-10">
    <iframe class="w-full h-[300px]"
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12031.08479684984!2d28.8087519!3d41.0739937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5aef369b145%3A0x154f62e325ac7609!2zQsSwUsSwTSBQT01QQSBTRUxBSEFUVMSwTiBEQcSe!5e0!3m2!1str!2str!4v1695066252898!5m2!1str!2str"
      style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script setup>
import ServicesHeader from '@/components/ServicesHeader.vue';
import About from '../components/About.vue';
import Sector from '../components/Sector.vue';
import SectorImg from '../components/SectorImg.vue';
</script>

<style  scoped></style>