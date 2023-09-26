<template>
  <ServicesHeader />
  <Sector />
  <ul class="flex flex-wrap justify-center items-center transition duration-300  right-0  bg-white p-4 font-oswald ">
    <li class="p-4">
      <div class="flex items-center justify-start space-x-3 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-9 h-9 stroke-amber-600">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-3xl">
          ÇALIŞMA SAATLERİMİZ
        </span>
      </div>
      <div class=" flex items-center justify-start space-x-3">
        <span class="text-lg mr-4">HAFTA İÇİ</span>
        <span class="text-amber-600">09.00 : 18.00</span>
      </div>
      <div class="flex items-center justify-start space-x-3">
        <span class="text-lg">HAFTA SONU</span>
        <span class="text-amber-600">09.00 : 14.00</span>
      </div>
    </li>
    <li class="p-4 font-oswald">
      <div class="flex items-center justify-start space-x-3 mb-2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-9 h-9 stroke-amber-600">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>

        <span class="text-3xl">
          İletişim Bilgilerimiz
        </span>
      </div>
      <div class=" flex items-center justify-start space-x-3">
        <span class="text-lg">Telefon Numaramız</span>
        <span class="text-amber-600"> 0532 599 48 80 </span>
      </div>
      <div class="flex items-center justify-start space-x-3">
        <span class="text-lg mr-5">Email Adresimiz</span>
        <span class="text-amber-600">bilgi@birimenjektor.com </span>
      </div>
    </li>
  </ul>
  <SectorImg />
  <Faq />
</template>

<script setup>
import Faq from '../components/Faq.vue';
import ServicesHeader from '@/components/ServicesHeader.vue';
import Sector from '../components/Sector.vue';
import SectorImg from '../components/SectorImg.vue';

/*
  <section class="bg-white dark:bg-gray-900">
    <div class="container flex flex-col items-center px-4 py-12 mx-auto text-center">
      <h2 class="text-2xl font-bold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
        “Müşteri Memnuniyeti, Bizim İçin Birinci Önceliktir!”
      </h2>

      <p class="block max-w-4xl mt-4 text-gray-500 dark:text-gray-300">
        “Müşteri memnuniyeti, işimizin kalbinde yer alır. Her bir hizmetimiz, sizin ihtiyaçlarınızı karşılamak ve
        beklentilerinizi aşmak için özenle tasarlanmıştır. Çünkü biz, en iyi hizmeti sunmanın, sizin memnuniyetinizden
        geçtiğini biliyoruz.”
      </p>

      <div class="mt-6">
        <a href="tel:+905325994880"
          class="inline-flex items-center justify-center w-full px-4 py-2.5 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-900 rounded-lg shadow sm:w-auto sm:mx-2 hover:bg-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" fill="#fbf652" viewBox="0 0 24 24" stroke-width="1"
            stroke="currentColor" class="w-5 h-5 mx-2 fill-current">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>

          <span class="mx-2">
            0532 599 48 80
          </span>
        </a>

        <a href="mailto:bilgi@birimenjektor.com"
          class="inline-flex items-center justify-center w-full px-4 py-2.5 mt-4 overflow-hidden text-sm text-white transition-colors duration-300 bg-gray-700 rounded-lg shadow sm:w-auto sm:mx-2 sm:mt-0 hover:bg-gray-600 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-5 h-5 mx-2">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
          <span class="text-[#c8ccd1] text-sm">
            bilgi@birimenjektor.com
          </span>
        </a>
      </div>
    </div>
  </section>
*/
</script>

<style  scoped>
.header::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(45deg, rgba(6, 4, 4, 0.663) 0%, rgba(41, 44, 49, 0.866) 50%, rgba(52, 55, 62, 0.504) 80%, rgba(41, 44, 49, 0.70) 100%);
}
</style>