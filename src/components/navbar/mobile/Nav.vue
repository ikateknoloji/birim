<template>
  <div class="   bg-white space-y-5 font-montserrat font-semibold ">
    <router-link
      class="block text-center  w-full px-4 py-2.5 overflow-hidden text-sm transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80 text-amber-400"
      v-for="route in routes" :key="route.name" :to="{ name: route.name }">
      {{ route.text }}
    </router-link>
  </div>
</template>

<script setup>
const routes = [
  { name: "HomeView", text: "Anasayfa" },
  { name: "ProductsView", text: "Ürünler" },
  { name: "SolutionsView", text: "Çözümler" },
  { name: "SupportView", text: "Destek" },
  { name: "AboutView", text: "Hakkımızda" },
  { name: "ContactView", text: "İletişim" }
];
</script>

<style scoped></style>
