<template>
  <div class="flex flex-wrap items-center justify-center ">
    <Tilt>
      <div v-motion-pop-visible-once>
        <div class="">
          <img src="@/assets/sector/1.png" alt="" class="w-[600px]">
        </div>
      </div>
    </Tilt>

    <Tilt>
      <div v-motion-pop-visible-once>
        <div class="">
          <img src="@/assets/sector/2.png" alt="" class="w-[600px]">
        </div>
      </div>

    </Tilt>
    <Tilt>
      <div v-motion-pop-visible-once>
        <div class="">
          <img src="@/assets/sector/3.png" alt="" class="w-[600px]">
        </div>
      </div>

    </Tilt>
    <Tilt>
      <div v-motion-pop-visible-once>
        <div class="">
          <img src="@/assets/sector/4.png" alt="" class="w-[600px]">
        </div>
      </div>
    </Tilt>

  </div>
</template>

<script setup>
import Tilt from './Tilt.vue';


</script>

<style scoped></style>