<template>
  <div ref="splide" class="splide">

    <div class="splide__track">
      <ul class="splide__list">
        <li class="min-h-[500px] splide__slide" v-for="(Component, index) in components" :key="index">
          <component :is="Component.component" />
        </li>
      </ul>
    </div>
    <!-- Slide Progress-->
    <div class="splide__progress">
      <div class="splide__progress__bar">
      </div>
    </div>
    <!-- Slide Arrow-->
    <div class="splide__arrows hidden md:block">
      <button class="splide__arrow splide__arrow--prev" @click="goPrev">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </button>
      <button class="splide__arrow splide__arrow--next" @click="goNext">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5" stroke="currentColor"
          class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
        </svg>
      </button>
    </div>

  </div>
</template>

<script setup>
import '@splidejs/splide/dist/css/splide.min.css';
import { ref, onMounted } from 'vue';
import Splide from '@splidejs/splide';
import HeaderOne from './header/HeaderOne.vue';
import HeaderTwo from './header/HeaderTwo.vue';
import HeaderThree from './header/HeaderThree.vue';

let splide = ref(null);
let navigation;
let components = [
  { id: 'HeaderOne', component: HeaderOne },
  { id: 'HeaderTwo', component: HeaderTwo },
  { id: 'HeaderThree', component: HeaderThree },
];

onMounted(() => {
  navigation = new Splide(splide.value, {
    type: 'loop', //  sürekli slayt değişir
    perPage: 1, //  tek slayt gösterilir
    autoplay: 5000, // 5 saniyede bir slayt değişir
    progress: true, // Progress Bar oluşturuldu.
  }).mount();

  navigation.on('moved', (newIndex) => {
    components.forEach((component, index) => {
      //component.component.isActive.value = index === newIndex;
    });
  });

  const goPrev = () => {
    navigation.go('-1');
  };

  const goNext = () => {
    navigation.go('+1');
  };

});


</script>

<style  scoped>
.splide__slide::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(to right, rgba(6, 4, 4, 0.663) 0%, rgba(41, 44, 49, 0.866) 50%, rgba(41, 44, 49, 0.263) 80%, rgba(41, 44, 49, 0.70) 100%);
}

.splide__progress {
  background: #ccc;
}

.splide__progress__bar {
  background: #D80032;
  height: 4px;
  width: 0;
  z-index: 1;
}

.splide__arrow {
  background: transparent;
  width: 3em;
  height: 3em;
}

.splide__arrow svg {
  position: relative;
  width: 3em;
  height: 3em;
  stroke: #fff;
  z-index: 1;
}
</style>
