<template>
  <!-- Contact Us -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-2xl lg:max-w-5xl mx-auto">
      <div class="text-center">
        <h1 class="text-3xl font-bold text-gray-800 sm:text-4xl ">
          Bizimle İletişime Geçin
        </h1>
        <p class="mt-1 text-gray-600 ">
          Size nasıl yardımcı olabileceğimiz hakkında konuşmak isteriz.
        </p>
      </div>

      <div class="mt-12 grid items-center lg:grid-cols-2 gap-6 lg:gap-16">
        <!-- Card -->
        <div class="flex   rounded-xl p-4 sm:p-6 lg:p-8  items-center justify-center">
          <img src="@/assets/product/1.png" alt="" class="max-w-[200px]">
        </div>
        <!-- End Card -->

        <div class="divide-y  divide-gray-800">


          <!-- Icon Block -->
          <div class="flex gap-x-7 py-6">
            <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path
                d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
            <div>
              <h3 class="font-semibold text-gray-800 ">Destek</h3>
              <p class="mt-1 text-sm text-gray-500">Soru ve cevaplarımıza destek bölümünden ulaşabilirsiniz.</p>
              <router-link
                class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800  "
                to="/destek">
                Destek Bölümünü Ziyaret Et
                <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16"
                  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor" />
                </svg>
              </router-link>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class=" flex gap-x-7 py-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 ">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>

            <div>
              <h3 class="font-semibold text-gray-800 ">Bize ulaşmak İçin</h3>
              <p class="mt-1 text-sm text-gray-500">Telefonumuzdan Bize Ulaşabilirsiniz.</p>
              <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800  "
                href="tel:+905325994880">
                Telefon Numaramız : 0532 599 48 80
                <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16"
                  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                    fill="currentColor" />
                </svg>
              </a>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class=" flex gap-x-7 py-6">
            <svg class="flex-shrink-0 w-6 h-6 mt-1.5 text-gray-800 " xmlns="http://www.w3.org/2000/svg" width="16"
              height="16" fill="currentColor" viewBox="0 0 16 16">
              <path
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <div>
              <h3 class="font-semibold text-gray-800 ">Bize Email Adresimizden Ulaşun</h3>
              <p class="mt-1 text-sm text-gray-500">
                Bunun yerine bize bir e-posta yazmak isterseniz lütfen şunu kullanın:
              </p>
              <a class="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800  "
                href="mailto:bilgi@birimenjektor.com">
                bilgi@birimenjektor.com
              </a>
            </div>
          </div>
          <!-- End Icon Block -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style  scoped></style>