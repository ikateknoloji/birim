<template>
  <button type="button"
    class="hs-collapse-toggle py-3 px-4 inline-flex justify-start items-center gap-2 font-semibold focus:outline-none transition-all font-nunito tracking-widest"
    :id="'hs-basic-collapse' + index" :data-hs-collapse="'#hs-basic-collapse-heading' + index">
    <svg class="hs-collapse-open:rotate-180 w-2.5 h-2.5 mr-4 " width="16" height="16" viewBox="0 0 16 16" fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor"
        stroke-width="2" stroke-linecap="round" />
    </svg>
    <span class="text-left">
      {{ question }}
    </span>
  </button>
  <div :id="'hs-basic-collapse-heading' + index"
    class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
    :aria-labelledby="'hs-basic-collapse' + index">
    <div class="mt-5">
      <p class="px-4 pb-4 font-nunito text-left">
        {{ answer }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  question: String,
  answer: String,
  index: Number
});
</script>

<style scoped>
.faq {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}
</style>
