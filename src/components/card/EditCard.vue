<template>
  <div v-motion :initial="{
    scale: .4,
    opacity: .3
  }" :enter="{
  scale: 1,
  opacity: 1,
  transition: {
    delay: 100,
  },
}" class="relative container mx-auto grid grid-cols-1 lg:grid-cols-1 gap-4  mb-20 font-montserrat">
    <div class="flex items-center justify-end">
      <div class=" relative inline-block text-left dropdown">
        <span class="rounded-md shadow-sm">
          <button
            class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-white border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
            type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
            <span>...</span>
            <svg class="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </span>
        <div
          class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
          <div
            class="absolute right-0 w-12 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
            aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">

            <div class="py-5 flex flex-col items-center justify-center">
              <button class="mb-5" @click="productDelete(product.id)">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              </button>
              <router-link :to="`/edit/${product.id}`">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>


    <article class="flex flex-wrap bg-white transition ">
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time :datetime="date" class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
          <span>{{ year }}</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>{{ dayMonth }}</span>
        </time>
      </div>

      <div class=" sm:block ">
        <img alt="product_image" :src="product.image_url" class=" aspect-square max-h-[300px] w-full object-cover" />
      </div>

      <div class="flex flex-1 flex-col ">
        <div class="border-s border-gray-900/10 mb-2 px-4 sm:border-l-transparent sm:p-6">
          <div>
            <h3 class="font-bold uppercase text-gray-900">
              {{ product.name }}
            </h3>
          </div>

          <p class="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
            {{ product.description }}
          </p>
        </div>

        <div class=" min-w-[380px] grid grid-cols-2 lg:grid-cols-2 gap-4  px-4  sm:pl-8 pb-5">
          <div class="flex flex-col">
            <span class="text-sm mb-2 text-gray-600">Motor modeli</span>
            <span class="text-gray-950 font-medium">{{ product.motor_model }} </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm mb-2 text-gray-600">Marka</span>
            <span class="text-gray-950 font-medium">{{ product.brand_name }} </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm mb-2 text-gray-600">Kategori</span>
            <span class="text-gray-950 font-medium">{{ product.category_name }} </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm mb-2 text-gray-600">Araç Tipi</span>
            <span class="text-gray-950 font-medium">{{ product.vehicle_type }} </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm mb-2 text-gray-600">Giriş Tarihi</span>
            <span class="text-gray-950 font-medium">{{ product.stock_entry_date }} </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm mb-2 text-gray-600">Ürün Kodu</span>
            <span class="text-gray-950 font-medium">{{ product.product_code }} </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm mb-2 text-gray-600">Oem Kodu</span>
            <span class="text-gray-950 font-medium">{{ product.oem_code }} </span>
          </div>
        </div>
      </div>
    </article>

  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue'
import { useProductStore } from '@/stores/index.js'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const store = useProductStore()


const productDelete = (id) => {
  store.deleteProduct(id)
}

const date = new Date(props.product.created_at)
const year = computed(() => date.getFullYear())
const dayMonth = computed(() => date.toLocaleString('tr-TR', { month: 'short', day: 'numeric' }))
</script>

<style>
.dropdown:focus-within .dropdown-menu {
  opacity: 1;
  transform: translate(0) scale(1);
  visibility: visible;
}
</style>