<template>
  <HeaderSection >
    <div class="max-w-[600px] p-4 font-montserrat">
      <h1 class="text-white text-4xl mx-auto mb-5">
        Birim Enjektör, Bizimle  İletişime Geçin
      </h1>
      <p class="text-[#fbf652] mb-5">
        Birim Enjektör olarak siz değerli müşterilerimizle iletişimde olmaktan mutluluk duyarız. Bize ulaşmak için aşağıdaki iletişim bilgilerini kullanabilirsiniz. Sormak istediğiniz sorular, vermek istediğiniz öneriler veya yapmak istediğiniz randevular için bizi arayın veya e-posta gönderin.
      </p>
      <HeaderContact />
      <div class="">
        <a href="mailto:bilgi@birimenjektor.com"
        class="inline-flex items-center justify-start space-x-4 bg-[#110e0e] hover:bg-[#9d3537] transition-colors delay-75 duration-300 rounded-md px-6 py-4 ">

        <svg xmlns="http://www.w3.org/2000/svg" fill="#fbf652" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="min-w-[24px] h-6  stroke-gray-900">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>


          <span class="text-[#c8ccd1] text-sm">
            İkitelli O.S.B Dolapdere Sanayi Sitesi 20.Ada No:7, İkitelli Cd, 34490 Başakşehir
          </span>
        </a>
      </div>
    </div>
    <img src="@/assets/header/3.png" alt="" class="absolute inset-0 object-cover w-full h-full -z-10">
  </HeaderSection>
</template>

<script setup>
import { ref, watch } from 'vue';
import HeaderSection from './HeaderSection.vue'
import HeaderContact from './HeaderContact.vue';

let isActive = ref(false);

watch(isActive, (newValue, oldValue) => {
  if (newValue) {

  }
});
</script>
