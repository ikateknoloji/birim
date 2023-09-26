<template>
  <section class="relative pt-20 mb-20">
    <div class="absolute -z-20 inset-0 bg-gray-950"></div>
    <div class="mx-auto max-w-screen-xl lg:h-[500px] px-4 pt-32 pb-10 lg:flex  items-end justify-end">
      <div v-motion :initial="{ opacity: 0, x: -100 }" :enter="{ opacity: 1, x: 0, scale: 1 }" :delay="200">
        <div class="max-h-[350px] relative lg:translate-y-32 flex items-center justify-center">
          <img src="@/assets/car/2.png" alt="" class="absolute bottom-0 left-0 -z-10 ">
          <img src="@/assets/car/1.png" alt="" class="lg:translate-y-0 h-full   z-10">
          <img src="@/assets/car/3.png" alt="" class="absolute bottom-0 left-0 -z-10">
        </div>
      </div>
      <div v-motion :initial="{ opacity: 0, x: 100 }" :enter="{ opacity: 1, x: 0, scale: 1 }" :delay="200">
        <div class="mx-auto max-w-xl ">
          <h1 class="text-3xl font-extrabold lg:text-3xl text-white">
            Güvenilir Pompa Enjektör Revizyon ve Tamiri
            <strong class="font-extrabold text-red-700 sm:block antialiased">
              Kalite, Güven ve Uzmanlık
            </strong>
          </h1>
          <p class="mt-4 sm:text-base/relaxed text-white mb-5">
            Uzman ekibimiz ve son teknoloji ekipmanlarımızla, pompa enjektör revizyon ve tamiri hizmetlerinde sizlere en
            iyi
            hizmeti sunuyoruz. Kaliteli, hızlı ve güvenilir çözümler için bizimle iletişime geçin.
          </p>
          <HeaderContact />
        </div>
      </div>
    </div>
  </section>
  <div class="w-full p-1 m-10"></div>
</template>

<script setup>
import HeaderContact from './header/HeaderContact.vue';


</script>

<style  scoped></style>