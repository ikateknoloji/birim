<template>
  <div class="fixed hidden md:block left-1 bottom-6 z-20">
    <div>
      <div class="hs-tooltip inline-block [--trigger:click] [--placement:right]">
        <div class="hs-tooltip-toggle block text-center">
          <span class="inline-block ml-1  rounded">
            <img src="@/assets/phone.svg" alt="phone-icon" class="w-20">
          </span>
          <div
            class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-3 px-4 bg-white border-2 text-sm text-gray-600 rounded-md shadow-md  border-gray-700 "
            role="tooltip">
            <div class="flex items-center justify-between space-x-4">
              <a href="tel:+905325994880">
                <span>0532 599 48 80</span>
              </a>
              <svg @click="copyNumber" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-if="isVisible" @click="scrollToTop" class="cursor-pointer fixed hidden md:block right-1  z-20
  transition-all duration-300 delay-0 ease-in " :class="{ 'bottom-6': !isScrolled, ' bottom-full': isScrolled }">
    <div class="relative img-element">
      <Tilt>
        <img src="@/assets/scroll-to-top.png" alt="car" class="w-12 relative  ">
      </Tilt>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useMotions } from '@vueuse/motion';
import Tilt from './Tilt.vue';

let isScrolled = ref(false);
let isVisible = ref(false);

function copyNumber() {
  navigator.clipboard.writeText('05325994880')
}
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  isScrolled.value = true;
  setTimeout(() => {
    isScrolled.value = false;
  }, 250);
}


const checkVisibility = () => {
  const scrollPosition = window.pageYOffset;
  const windowHeight = window.innerHeight;
  setTimeout(() => {
    isVisible.value = scrollPosition > windowHeight;
  }, 100);
};

onMounted(() => {
  window.addEventListener('scroll', checkVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility);
});
</script>

<style  scoped>
.img-element {
  position: relative;
}

.img-element::before {
  content: "";
  position: absolute;
  top: -1px;
  left: 0px;
  width: 48px;
  height: 48px;
  background-image: url('@/assets/car-focus.png');
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity .5s ease-in-out;
  z-index: 5;
}

.img-element:hover::before {
  opacity: 1;
}
</style>