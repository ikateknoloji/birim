<template>
  <HeaderSection >
    <!-- Bileşen içeriği buraya gelecek -->
    <div class="max-w-[600px] p-4 h-full">
      <h1 class="text-white text-4xl font-montserrat mx-auto mb-5">
        Birim Enjektör
        <br>
        <span class="relative">
         Aracınızın Kalbini Korur.
        </span>
      </h1>
      <p class="text-[#fbf652] font-montserrat mb-5">
        Birim Enjektör, tır, ağır iş makineleri, tekne, generatör gibi araçların pompa ve enjektör tamir ve revizyon işlemlerini uzman kadrosu ve son teknoloji ekipmanları ile yapar. Aracınızın kalbini korumak için bize güvenin.
      </p>
      <HeaderContact />
      <router-link to="/cozumler" class="w-72 inline-block mb-5 hover:bg-rose-950 hover:text-white bg-amber-400 px-4 py-4  text-gray-900 rounded-sm transition-all duration-300 delay-75 ease-in-out font-oswald tracking-wide">
        Çözümlerimiz Hakkında Bilgi Alın
     </router-link>
    </div>
    <img src="@/assets/header/1.png" alt="" class="absolute inset-0 object-cover w-full h-full -z-10">
  </HeaderSection>
</template>

<script setup>
import { ref, watch } from 'vue';
import HeaderSection from './HeaderSection.vue';
import HeaderContact from './HeaderContact.vue';

let isActive = ref(false);

watch(isActive, (newValue, oldValue) => {
  if (newValue) {

  }
});
</script>
