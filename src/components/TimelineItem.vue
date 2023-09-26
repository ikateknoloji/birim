<template>
  <div class="flex">
    <div class="flex flex-col items-center mr-4">
      <div>
        <div class="flex items-center justify-center w-10 h-10 border rounded-full">
          <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round" viewBox="0 0 24 24">
            <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
            <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
          </svg>
        </div>
      </div>
      <div class="w-px h-full bg-gray-300"></div>
    </div>
    <div class="pt-1 pb-8">
      <p class="mb-2 text-lg font-bold">{{ title }}</p>
      <p class="text-gray-700">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});

</script>

<style scoped></style>
