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

    <article class="flex flex-wrap bg-white transition ">
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
        <time :datetime="date" class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
          <span>{{ year }}</span>
          <span class="w-px flex-1 bg-gray-900/10"></span>
          <span>{{ dayMonth }}</span>
        </time>
      </div>

      <slot></slot>

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
            <span class="text-gray-950 font-medium">{{ product.brand_id?.name }} </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm mb-2 text-gray-600">Kategori</span>
            <span class="text-gray-950 font-medium">{{ product.category_id?.name }} </span>
          </div>
          <div class="flex flex-col">
            <span class="text-sm mb-2 text-gray-600">Araç Tipi</span>
            <span class="text-gray-950 font-medium">{{ product.vehicle_type_id?.type }} </span>
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
import { defineProps, computed, onMounted, defineExpose } from 'vue'

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})


const date = new Date()
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