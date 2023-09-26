<template>
  <div
    class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-32 mb-12 font-nunito">

    <div v-motion-pop-visible>
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p
            class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            TAMİR VE REVİZYON SÜREÇLERİ
          </p>
        </div>
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span class="relative inline-block">
            <svg viewBox="0 0 52 24" fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
              <defs>
                <pattern id="27df4f81-c854-45de-942a-fe90f7a300f9" x="0" y="0" width=".135" height=".30">
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#27df4f81-c854-45de-942a-fe90f7a300f9)" width="52" height="24"></rect>
            </svg>
            <span class="relative">Çözüm Odaklı Çalışıyor En İyi Hizmeti Sunuyoruz</span>
          </span>

          <br>
        </h2>
        <p class="text-base text-gray-700 lg:text-lg font-nunito">
          İster büyük bir kurumsal firma
          olun, ister küçük bir işletme, her müşterimize aynı özen ve dikkati gösteriyoruz. İşletmenizin başarısı bizim
          başarımızdır ve bu nedenle her projeye %100'ümüzle yaklaşıyoruz.
        </p>
      </div>
    </div>
    <div v-motion-pop-visible>

      <div class="grid gap-6 row-gap-10 lg:grid-cols-2">
        <div class="lg:py-6 lg:pr-16">
          <TimelineItem v-for="(item, index) in workflow" :key="index" :title="item.title"
            :description="item.description" />
          <div class="flex">
            <div class="flex flex-col items-center mr-4">
              <div>
                <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                  <svg class="w-6 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
                    <polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                      stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
                  </svg>
                </div>
              </div>
            </div>
            <div class="pt-1">
              <p class="mb-2 text-lg font-bold">Ödeme</p>
              <p class="text-gray-700">
                Bu aşama, müşterinin hizmet için ödeme yapma sürecini içerir. Müşteriye çeşitli ödeme seçenekleri sunulur.
                Havale/EFT, kredi kartı gibi seçeneklerle ödeme yapabilirler. Ödeme işlemi tamamlandığında, hizmetin son
                aşamasına geçilir ve müşteriye hizmetin tamamlandığına dair bir bildirim gönderilir.
              </p>
            </div>
          </div>
        </div>
        <div class="relative">
          <img class="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
            src="@/assets/timeline.webp" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TimelineItem from "./TimelineItem.vue";

let workflow = [
  {
    title: 'Değerlendirme',
    description: 'Bu aşama, ürünlerin durumunu ve tamir gereksinimlerini değerlendirmeyi içerir. Ürünlerin mevcut durumunu belirlemek için detaylı bir inceleme yapılır. Bu inceleme, hangi parçaların değiştirilmesi veya onarılması gerektiğini belirlemenize yardımcı olur. Ayrıca, bu aşama, tamir sürecinin maliyetini ve süresini tahmin etmek için de önemlidir.'
  },
  {
    title: 'Parça Siparişi',
    description: 'Değerlendirme aşamasında belirlenen parçalar sipariş edilir. Bu parçaların temini, tedarikçinin konumuna, parçaların bulunabilirliğine ve teslimat sürelerine bağlıdır. Bu süre zarfında, tamir işlemlerinin ne zaman başlayacağını ve ne kadar süreceğini müşteriye bildirebilirsiniz'
  },
  {
    title: 'Tamir ve Revizyon',
    description: 'Parçalar geldiğinde, tamir ve revizyon işlemlerine başlanır. Bu süreç, ürünlerin karmaşıklığına ve tamir gerektiren parçaların sayısına bağlı olarak değişebilir. Tamir süreci boyunca, her adımın düzgün bir şekilde gerçekleştirildiğinden emin olmak için kalite kontrol uygulanır.'
  },
  {
    title: 'Kalite Kontrolü',
    description: 'Tamir edilen ürünler detaylı bir şekilde test edilir ve kalite kontrol sürecinden geçer. Bu aşama, ürünlerin doğru bir şekilde çalıştığından ve tamir işlemlerinin başarılı olduğundan emin olmanızı sağlar.'
  },
  {
    title: 'Müşteriye Teslim',
    description: ' Tamir işlemi tamamlandıktan sonra ürünler müşteriye teslim edilir. Teslimat sırasında, müşterinin herhangi bir sorusu varsa yanıtlanır ve olası sorunları çözmek için destek sağlanır.'
  }
];
</script>