<template>
  <section class="bg-white pt-4 font-montserrat">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
      <p
        class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
        Hizmet Verdiğimiz Sektörler
      </p>
      <h2 class="text-2xl font-bold  tracking-tight text-gray-800 xl:text-3xl ">
        Güvenilir Dizel Yakıt Pompa ve Enjektör Revizyon Hizmetleri
      </h2>

      <p class="block max-w-5xl mt-4 text-gray-900 text-start sm:text-center ">
        Tır, jeneratör, marin ve ağır iş makinaları sektörlerinde lideriz. Dizel yakıt pompası ve enjektör tamir ve
        revizyon hizmetlerimizle, müşterilerimize kaliteli ve güvenilir çözümler sunuyoruz. Uzman ekibimiz ve gelişmiş
        teknolojimizle, her zaman en iyi hizmeti sunmayı hedefliyoruz. Bizimle çalışarak, araçlarınızın ve
        ekipmanlarınızın maksimum performans ve verimlilikle çalışmasını sağlayabilirsiniz.
      </p>


    </div>
  </section>

  <div class="container w-full mx-auto grid grid-cols-2 gap-4">
    <Card v-for="product in productMain" :key="product.id" :product="product" />
  </div>
  <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
    <div class="mt-6">
      <router-link to="/urunler"
        class="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
        <span class="mx-2">
          Ürünlerimizi İnceleyin
        </span>
      </router-link>

      <router-link to="/urunler"
        class="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-blue-600 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
        <span class="mx-2">
          Bizimle İletişime Geçin
        </span>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useProductStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'
import Card from '@/components/card/Card.vue';

const store = useProductStore()

const { productMain } = storeToRefs(store)

onMounted(() => {
  store.mainProduct()
})
</script>

<style  scoped></style>