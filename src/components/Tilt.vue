<template>
  <div ref="tiltRef">
    <slot></slot>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import VanillaTilt from 'vanilla-tilt';

const tiltRef = ref(null);

onMounted(() => {
  VanillaTilt.init(tiltRef.value, { max: 25, speed: 400 });
});
</script>
