<template>
  <ul class="hidden lg:flex items-center justify-center mr-16">
    <li class="relative parent font-oswald " v-for="item in menuItems" :key="item.text">

      <router-link class="flex justify-between md:inline-flex p-4 items-center space-x-2
    hover:text-rose-700 transition-all duration-100 ease-in" :class="isScrool ? 'text-[#303439]' : 'text-white'"
        v-if="!item.dropdown" :to="item.link">
        {{ item.text }}
      </router-link>
      <div v-if="item.dropdown">
        <span class="flex justify-between md:inline-flex p-4 items-center space-x-2
      hover:text-rose-700 transition-all duration-100 ease-in" :class="isScrool ? 'text-[#303439]' : ' text-white'">
          {{ item.text }}
        </span>
        <ul v-if="item.dropdown"
          class="child transition duration-300 md:absolute top-full right-0 md:w-48 bg-white md:shadow-lg p-4 block">
          <li>
            <div class="mb-4 flex flex-wrap justify-start items-center space-y-5 md:space-y-0 md:space-x-4">
              <a href="tel:+905325994880" class="inline-flex items-center justify-start space-x-4 bg-[#110e0e] hover:bg-[#9d3537] transition-colors delay-75 duration-300 rounded-md
             px-6 py-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fbf652" viewBox="0 0 24 24" stroke-width="1"
                  stroke="currentColor" class="w-5 h-5">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <span class="text-[#c8ccd1] text-sm">
                  0532 599 48 80
                </span>
              </a>
              <a href="mailto:bilgi@birimenjektor.com"
                class="inline-flex items-center justify-start space-x-4 bg-[#110e0e] hover:bg-[#9d3537] transition-colors delay-75 duration-300 rounded-md px-6 py-4 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="#fbf652" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <span class="text-[#c8ccd1] text-sm">
                  bilgi@birimenjektor.com
                </span>
              </a>
            </div>
          </li>
          <li v-for="i in item.dropdown" :key="i">
            <router-link
              class="font-montserrat flex justify-between md:inline-flex px-4 py-3 items-center space-x-2 text-[#303439] font-medium hover:text-red-700 transition-all duration-300 ease-in"
              :to="i.link">
              {{ i.text }}
            </router-link>
          </li>
          <li class="p-4">
            <div class="flex items-center justify-start space-x-3 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6 stroke-amber-600">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm">
                ÇALIŞMA SAATLERİMİZ
              </span>
            </div>
            <div class=" flex items-center justify-start space-x-3">
              <span class="text-sm mr-4">HAFTA İÇİ</span>
              <span class="text-amber-600">09.00 : 18.00</span>
            </div>
            <div class="flex items-center justify-start space-x-3">
              <span class="text-sm">HAFTA SONU</span>
              <span class="text-amber-600">09.00 : 14.00</span>
            </div>
          </li>
        </ul>

      </div>

    </li>
  </ul>
</template>

<script setup>
import useScrollFixed from '@/composables/useScroll.js'

const { isScrool } = useScrollFixed()

const menuItems = [
  {
    text: 'Anasayfa',
    link: '/'
  },
  {
    text: 'Ürünler',
    link: '/urunler'
  },
  {
    text: 'Çözümler',
    link: '/cozumler'
  },
  {
    text: 'Destek',
    link: '/destek'
  },
  {
    text: 'Kurumsal',
    dropdown: [
      {
        text: 'Hakkımızda',
        link: '/hakkimizda'
      },
      {
        text: 'İletişim',
        link: '/iletisim'
      }
    ]
  }
]

/*
    <dropdown-menu mode="hover" v-if="item.dropdown" direction="right">
      <template #trigger>
        <button
        class="flex justify-between md:inline-flex p-4 items-center space-x-2 text-white">
         {{ item.text }}
        </button>
      </template>

      <template #body >
        <ul class="rounded-md">
          <li v-for="i in item.dropdown" :key="i">
            <router-link
            class="font-montserrat flex justify-between md:inline-flex p-4 items-center space-x-2 text-[#303439] font-medium"
            :to="i.link">
              {{ i.text }}
            </router-link>
          </li>
        </ul>
      </template>
    </dropdown-menu>
*/
</script>

<style scoped>
@media only screen and (min-width: 768px) {
  .parent:hover .child {
    opacity: 1;
    width: 500px;
    height: auto;
    overflow: none;
    transform: translateY(0);
    padding: 22px;
  }

  .child {
    opacity: 0;
    height: 0;
    overflow: hidden;
    transform: translateY(-10%);
    padding: 0;
  }
}
</style>