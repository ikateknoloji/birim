<template>
  <div class="overflow-x-hidden">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import DefaultLayout from './layouts/DefaultLayout.vue';

const defaultLayout = 'MainLayout'
const route = useRoute()

const layout = computed(() => {
  return route.meta.layout || defaultLayout
})
</script>

<style scoped></style>