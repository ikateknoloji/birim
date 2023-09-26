<template>
  <HeaderSection >
    <div class="max-w-[600px]  p-4">
      <h1 class="text-white text-4xl font-montserrat mx-auto mb-5 ">
        Birim Enjektör, Revizyon Görmüş Parçaların Adresi
      </h1>
      <p class="text-[#fbf652] mb-5">
        Pompa ve enjektör parçaları arıyorsanız doğru yerdesiniz. Birim Enjektör, pompa ve enjektör parçalarını uygun fiyatlarla sizlere sunar. Revizyon görmüş parçaların kalitesi ve garantisi için bizi tercih edin.
      </p>
      <router-link to="/urunler" class="w-72 inline-block mb-5 hover:bg-rose-950 hover:text-white bg-amber-400 px-4 py-4  text-gray-900 rounded-sm transition-all duration-300 delay-75 ease-in-out font-oswald tracking-wide">
        Ürünlerimizi İnceleyin
     </router-link>
      <HeaderContact />
    </div>

    <img src="@/assets/header/2.png" alt="" class="absolute inset-0 object-cover w-full h-full -z-10">
  </HeaderSection>
</template>

<script setup>
import { ref, watch } from 'vue';
import HeaderSection from './HeaderSection.vue'
import HeaderContact from './HeaderContact.vue';

let isActive = ref(false);

watch(isActive, (newValue, oldValue) => {
  if (newValue) {

  }
});
</script>
