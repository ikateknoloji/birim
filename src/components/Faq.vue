<template>
  <section class="my-20">
    <div class="w-full flex flex-col justify-center px-4 mx-auto md:px-8">
      <h2 class="mb-12 text-4xl font-bold leadi text-center sm:text-5xl">Sıkça Sorulan Sorular</h2>
      <div class="flex flex-col lg:flex-row">
        <div class="w-full lg:w-2/3 flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32">
          <FaqItem v-for="(item, index) in faqItems" :index="index" :key="index" :question="item.question"
            :answer="item.answer" />
        </div>
        <div class="hidden lg:block  lg:w-1/3">
          <img src="@/assets/idea.webp" alt="Sıkça Sorulan Sorular" class="max-h-[500px]">
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import FaqItem from './FaqItem.vue';

const faqItems = ref([
  {
    question: 'Pompa ve enjektör tamiri ne kadar sürer?',
    answer: 'Tamir süresi, arızanın ciddiyetine ve gereken parçaların temin süresine bağlıdır. Genellikle birkaç gün ile birkaç hafta arasında değişir. Ancak, bu süre zarfında, tamir işlemlerinin ne zaman başlayacağını ve ne kadar süreceğini müşteriye bildirebilirsiniz.'
  },
  {
    question: 'Tamir ne kadar maliyetli olur? ',
    answer: 'Tamir maliyeti, arızanın ciddiyetine, gereken parçaların maliyetine ve işçilik ücretlerine bağlıdır. Değerlendirme aşamasında belirlenen parçalar sipariş edilir ve bu parçaların temini, tedarikçinin konumuna, parçaların bulunabilirliğine ve teslimat sürelerine bağlıdır.'
  },
  {
    question: 'Tamir edilen parçaların garantisi var mıdır?',
    answer: ' Evet, çoğu servis tamir edilen parçalar için belirli bir garanti süresi sunar. Bu garanti süresi boyunca, herhangi bir arıza durumunda ücretsiz tamir veya değişim hizmeti alabilirsiniz.'
  },
  {
    question: 'Aracımın çekişi düştü, bu bir pompa veya enjektör arızasına işaret eder mi?',
    answer: ' Evet, aracın çekişinin düşmesi genellikle yakıt sistemi ile ilgili bir sorunun belirtisi olabilir ve bu da pompa veya enjektörlerin arızalanmış olabileceğini gösterir. Bu durumda, aracınızı bir servise götürerek detaylı bir inceleme yaptırmanız önerilir.'
  },
  {
    question: 'Aracım siyah duman çıkarıyor, bu bir pompa veya enjektör arızasına işaret eder mi?',
    answer: 'Evet, aracın egzozundan siyah duman çıkması genellikle yakıt sistemi ile ilgili bir sorunun belirtisi olabilir ve bu da pompa veya enjektörlerin arızalanmış olabileceğini gösterir. Bu durumda, aracınızı bir servise götürerek detaylı bir inceleme yaptırmanız önerilir.'
  },
  {
    question: 'Pompa ve enjektör tamiri için randevu almak zorunda mıyım?',
    answer: 'Evet, çoğu servis önceden randevu almayı tercih eder. Bu, servisin iş yükünü yönetmesine ve müşterilere daha hızlı hizmet vermesine yardımcı olur.'
  },
  {
    question: 'Pompa ve enjektör tamiri ne tür araçlarda yapılır?',
    answer: 'Pompa ve enjektör tamiri, genellikle dizel motorlu araçlarda yapılır. Bu, otomobiller, kamyonlar, traktörler ve bazı deniz araçları gibi çeşitli araç türlerini içerir.'
  },
  {
    question: 'Pompa ve enjektör tamiri ne sıklıkla yapılmalıdır?',
    answer: ' Pompa ve enjektör tamiri genellikle belirli bir kilometre veya kullanım süresi sonunda yapılır. Ancak, aracın performansında herhangi bir düşüş fark ederseniz, bir servise başvurmanız önerilir.'
  },
  {
    question: "Pompa ve enjektör tamiri sırasında başka hangi hizmetler sunulur?",
    answer: "Pompa ve enjektör tamiri sırasında genellikle yakıt sistemi kontrolü, filtre değişimi ve genel motor bakımı gibi hizmetler de sunulur."
  },
  {
    question: 'Pompa ve enjektör tamiri, aracın yakıt verimliliğini artırır mı?',
    answer: 'Evet, pompa ve enjektörlerin düzgün çalışması, motorun daha verimli çalışmasına yardımcı olur. Bu da yakıt verimliliğini artırabilir.'
  }
]);

</script>

<style scoped></style>