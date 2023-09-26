<template>
  <li v-if="index !== 0 && index !== length - 1">
    <button class="font-mono text-base block h-8 w-8 rounded border  text-center leading-8 text-gray-900"
      :class="link.active ? 'border-blue-600 bg-blue-600  text-white ' : ' border-gray-100 bg-white'">
      {{ link.label }}
    </button>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  link: Object,
  index: {
    type: Number,
    required: true
  },
  length: {
    type: Number,
    required: true
  }
})

</script>

<style  scoped></style>
