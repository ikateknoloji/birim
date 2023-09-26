<template>
  <div @click="show = !show"
    class="lg:hidden fixed top-0 left-0 bottom-0 right-0 bg-[rgba(106,106,106,0.64)] transition-all duration-500 delay-75 z-40"
    :class="show === false ? '-translate-x-full' : ''"></div>
  <div
    class="z-50 fixed lg:hidden bg-white top-0 left-0 bottom-0 w-full md:w-1/2 h-screen transition duration-500 delay-150 ease-out px-4 py-8"
    :class="show === false
      ? '-translate-x-full '
      : 'shadow-[2px_0_1px_0px_rgba(187,187,187,26)]'
      ">
    <div @click="show = !show" class="z-50">
      <CloseBtn />
    </div>
    <div class="flex items-center justify-center my-6">
      <LightLogo />
    </div>
    <div @click="show = !show" class="z-50">
      <Nav />
    </div>
  </div>

  <div @click="show = !show" class="z-50">
    <ToggleBtn />
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import Nav from "./Nav.vue";
import LightLogo from "./LightLogo.vue";
import ToggleBtn from "./ToggleBtn.vue";
import CloseBtn from "./CloseBtn.vue";

const show = ref(false);

const handleResize = () => {
  show.value = window.innerWidth > 1024 ? false : show.value; // Change 1024 to your desired breakpoint value
};

onMounted(() => {
  handleResize();
  window.addEventListener("resize", handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", handleResize);
});
</script>

<style scoped></style>
