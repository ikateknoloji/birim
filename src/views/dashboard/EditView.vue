<template>
  <h1 class="py-10 mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl ">
    Kategoriler
  </h1>
  <h4 class="block mb-3">Kategori Oluştur</h4>
  <div class="mb-10 flex items-center justify-center space-x-4">
    <form class="w-full" @submit.prevent="addCategory">
      <!--  İnput-->
      <input type="text" id="category" name="category" v-model="category"
        class="mb-4 py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none ">
      <label for="file-input" class="sr-only"></label>
      <!-- File İnput-->
      <input ref="file" type="file" name="file-input" id="file-input"
        class="mb-4 block w-28 border-2 border-gray-400 shadow-sm rounded-md text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4 ">
      <button class="px-6 py-3 bg-blue-600 text-white rounded-md" type="submit">Ekle</button>

    </form>
  </div>

  <div>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kategori
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Resim
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Sil
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-700">

                <tr v-for="category in categories" :key="category.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                    {{ category.id }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    {{ category.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    <img class="w-12" :src="`http://localhost:8000/storage/${category.image}`" alt="">
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="text-blue-500 hover:text-blue-700" @click="deleteCategory(category.id)">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1 class="py-10 mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl ">
    Araç Tipleri
  </h1>

  <h4 class="block mb-3">Araç Tipi Ekle</h4>
  <div class="mb-10 flex items-center justify-center space-x-4">
    <form @submit.prevent="addvehicleType" class="w-full">
      <input type="text" id="addvehicleType" name="cataddvehicleTypeegory" v-model="vehicle"
        class=" py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none mb-4">

      <button class="px-6 py-3 bg-blue-600 text-white rounded-md" type="submit">
        Ekle
      </button>
    </form>
  </div>
  <div>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kategori
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Sil
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-700">

                <tr v-for="vehicleType in vehicleTypes" :key="vehicleType.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                    {{ vehicleType.id }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    {{ vehicleType.type }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="text-blue-500 hover:text-blue-700" @click="deleteVehicle(vehicleType.id)">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

  <h1 class="py-10 mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-3xl ">
    Markalarımız
  </h1>
  <h4 class="block mb-3">Marka Ekle</h4>
  <div class="mb-10 flex items-center justify-center space-x-4">
    <form @submit.prevent="addBrand" class="w-full">
      <input type="text" id="brand" name="brand" v-model="brand"
        class=" py-3 px-4 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none mb-5">

      <button class="px-6 py-3 bg-blue-600 text-white rounded-md" type="submit">Ekle</button>
    </form>
  </div>
  <div>
    <div class="flex flex-col">
      <div class="-m-1.5 overflow-x-auto">
        <div class="p-1.5 min-w-full inline-block align-middle">
          <div class="overflow-hidden">
            <table class="min-w-full divide-y divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    ID
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kategori
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Sil
                  </th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-700">

                <tr v-for="brand in brands" :key="brand.id">
                  <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
                    {{ brand.id }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">
                    {{ brand.name }}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button class="text-blue-500 hover:text-blue-700" @click="deleteBrand(brand.id)">Sil</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useProductStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'

const store = useProductStore()

const file = ref(null)
const category = ref('')
const vehicle = ref('')
const brand = ref('')

const { categories, vehicleTypes, brands } = storeToRefs(store)

const addCategory = () => {

  const formData = new FormData();
  formData.append('name', category.value);

  if (file.value.files.length > 0) {
    formData.append('image', file.value.files[0]);
  }

  store.addCategory(formData)

  category.value = ''
  file.value = null
}

const addvehicleType = () => {
  store.addVehicleType(vehicle.value)
  vehicle.value = ''
}
const addBrand = () => {
  store.addBrand(brand.value)
  brand.value = ''
}
const deleteBrand = (id) => {
  store.deleteBrand(id)
}
const deleteCategory = (id) => {
  store.deleteCategory(id)
}
const deleteVehicle = (id) => {
  store.deleteVehicle(id)
}

onMounted(() => {
  store.loadCategories()
})
</script>

<style  scoped></style>