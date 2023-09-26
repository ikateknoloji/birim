<template>
  <div>
    <div class="container mx-auto px-20 mb-10">
      <input placeholder="Search..."
        class="px-4 py-2 border block w-full mb-5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        v-model="searchQuery" @keyup.enter="searchQueryFunction" />


      <div class="mb-5 grid  grid-cols-1 md:grid-cols-2 gap-3">
        <div class="text-sm text-gray-900 font-montserrat font-medium border">
          <label for="hs-hidden-select" class="sr-only">Label</label>
          <select v-model="selectedCategory" id="hs-hidden-select" class="focus:outline-none py-3 px-4 pr-9 block w-full">
            <option v-for="category in categories" :key="category.id" :value="category.id">
              {{ category.name }}
            </option>
          </select>
        </div>

        <div class=" p-1 text-sm text-gray-900 font-montserrat font-medium border">
          <label for="hs-hidden-select" class="sr-only">Label</label>
          <select v-model="selectedVehicleType" id="hs-hidden-select"
            class="focus:outline-none py-3 px-4 pr-9 block w-full">
            <option v-for="vehicleType in vehicleTypes" :key="vehicleType.id" :value="vehicleType.id">
              {{ vehicleType.type }}
            </option>
          </select>
        </div>
      </div>

      <button @click="resetValues"
        class="px-8 py-2 bg-rose-700 text-white hover:bg-rose-600 duration-300 delay-0 ease-linear rounded">Sıfırla</button>

    </div>
    <EditCard v-for="product in products" :key="product.id" :product="product" />


    <!--Pagiante Start-->
    <ol v-if="links.length > 0" class="flex justify-center gap-1 text-xs font-medium mb-5">
      <li>
        <button v-if="links[0].url" @click="changeUrl(links[0].url)" v-motion :initial="{ opacity: 0, y: 100, }"
          :visible="{ opacity: 1, y: 0, }"
          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
          <span class="sr-only"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd" />
          </svg>
        </button>
      </li>
      <li v-for="(link, index) in links" :key="index">
        <template v-if="index !== 0 && index !== links.length - 1">
          <button class="font-mono text-base block h-8 w-8 rounded border  text-center leading-8 text-gray-900"
            :class="link.active ? 'border-blue-600 bg-blue-600  text-white ' : ' border-gray-100 bg-white'"
            @click="changeUrl(link.url)">
            {{ link.label }}
          </button>
        </template>
      </li>
      <li>

        <button v-if="links[links.length - 1].url" v-motion :initial="{ opacity: 0, y: 100, }"
          :visible="{ opacity: 1, y: 0, }" @click="changeUrl(links[links.length - 1].url)"
          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180">
          <span class="sr-only"></span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd" />
          </svg>
        </button>

      </li>
    </ol>
    <!--Pagiante End-->
  </div>
</template>

<script setup>
import { onMounted, watch, ref, onUnmounted } from 'vue';
import { useProductStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'

import EditCard from '@/components/card/EditCard.vue';

const store = useProductStore()

let selectedCategory = ref(null);
let selectedVehicleType = ref(null);

const {
  products, links, url, categories, vehicleTypes, categoryId, vehicleTypeId, searchQuery
} = storeToRefs(store)

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
const changeUrl = (newUrl) => {
  url.value = newUrl
  scrollToTop()
}
const searchQueryFunction = () => {
  store.search()
}

const resetValues = () => {
  selectedCategory.value = null
  selectedVehicleType.value = null
  store.reset()
}

watch(url, () => {
  store.load();
  store.loadCategories()
});

watch([selectedCategory, selectedVehicleType], () => {

  categoryId.value = selectedCategory.value
  vehicleTypeId.value = selectedVehicleType.value
  store.load();
});

onUnmounted(() => {
  store.reset()
})

onMounted(() => {
  store.load()
  store.loadCategories()

});

</script>

<style  scoped>
option {
  padding: 10px 0;
}
</style>