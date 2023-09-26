<template>
  <form @submit.prevent="submitForm" class="w-full mx-auto mt-10 font-montserrat font-medium p-12
  " enctype="multipart/form-data">
    <div class="mb-5 grid  grid-cols-1 md:grid-cols-2 gap-3">
      <div class="">
        <h4 class="mb-3 text-gray-950">Kategori</h4>
        <div class="text-sm text-gray-900 font-montserrat font-medium border border-gray-300">
          <label for="hs-hidden-select" class="sr-only">Label</label>
          <select v-model="form.category_id" id="hs-hidden-select" class="focus:outline-none py-3 px-4 pr-9 block w-full">
            <option v-for="category in categories" :key="category.id" :value="category">
              {{ category.name }}
            </option>
          </select>
        </div>
        <p class="text-red-500" v-if="errors.category_id">{{ errors.category_id[0] }}</p>
      </div>

      <div>
        <h4 class="mb-3 text-gray-950">Araç Tipi</h4>
        <div class=" text-sm text-gray-900 font-montserrat font-medium border border-gray-300">
          <label for="hs-hidden-select" class="sr-only">Label</label>
          <select v-model="form.vehicle_type_id" id="hs-hidden-select"
            class="focus:outline-none py-3 px-4 pr-9 block w-full">
            <option v-for="vehicleType in vehicleTypes" :key="vehicleType.id" :value="vehicleType">
              {{ vehicleType.type }}
            </option>
          </select>
        </div>
        <p class="text-red-500" v-if="errors.vehicle_type_id">{{ errors.vehicle_type_id[0] }}</p>
      </div>
    </div>

    <div class="mb-5 grid  grid-cols-1 md:grid-cols-2 gap-3">
      <div class="flex flex-col space-y-4 mb-5">
        <label for="name">Ürün Adı</label>
        <input type="text" v-model="form.name" id="name"
          class="py-3 px-4 block w-full border border-gray-300  text-sm focus:border-gray-300 focus:ring-blue-500 "
          required>
        <p class="text-red-500" v-if="errors.name">{{ errors.name[0] }}</p>
      </div>

      <div class="">
        <h4 class="mb-3 text-gray-950">Ürünün Markası</h4>
        <div class="flex items-center justify-center">
          <div class="w-full text-sm text-gray-900 font-montserrat font-medium border border-gray-300">
            <label for="hs-hidden-select" class="sr-only">Label</label>
            <select v-model="form.brand_id" id="hs-hidden-select" class="focus:outline-none py-3 px-4 pr-9 block w-full">
              <option v-for="brand in brands" :key="brand.id" :value="brand">
                {{ brand.name }}
              </option>
            </select>
          </div>
          <button type="button" class=" ml-4 py-2 px-2 bg-blue-700 rounded"
            data-hs-overlay="#hs-slide-down-animation-modal">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="stroke-orange-50 w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
        <p class="text-red-500" v-if="errors.brand_id">{{ errors.brand_id[0] }}</p>
      </div>
    </div>

    <div class="mb-5 grid  grid-cols-1 md:grid-cols-2 gap-3">

      <div class="flex flex-col space-y-4 mb-5">
        <label for="motor_model">Motor Model</label>
        <input type="text" id="motor_model" v-model="form.motor_model" required
          class="py-3 px-4 block w-full  border-gray-300  text-sm focus:border-gray-300 focus:ring-blue-500 border">
        <p class="text-red-500" v-if="errors.motor_model">{{ errors.motor_model[0] }}</p>
      </div>

      <div class="flex flex-col space-y-4 mb-5">
        <label for="oem_code">OEM Kodu</label>
        <input type="text" id="oem_code" v-model="form.oem_code" required
          class="py-3 px-4 block w-full border border-gray-300  text-sm focus:border-gray-300 focus:ring-blue-500 ">
        <p class="text-red-500" v-if="errors.oem_code">{{ errors.oem_code[0] }}</p>
      </div>
    </div>

    <div class="w-full mx-auto file:flex flex-col space-y-4 mb-5">
      <label for="description">Ürün Açıklaması</label>
      <textarea id="description" v-model="form.description" required
        class="py-3 px-4 block w-full  border-gray-300  text-sm focus:border-gray-300 focus:ring-blue-500 border"
        rows="5"></textarea>
      <p class="text-red-500" v-if="errors.description">{{ errors.description[0] }}</p>
    </div>


    <div class="flex flex-col items-start justify-center space-y-4 mb-10">
      <label for="name" class="ml-3">Resim Yükle</label>
      <input type="file" ref="file" name="file-input" id="file-input" @change="showSelectedImage"
        class="block w-28 border border-gray-300 shadow-sm  text-sm focus:z-10 focus:border-gray-300 focus:ring-blue-500  file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4"
        required>

      <p class="text-red-500" v-if="errors.image">{{ errors.image[0] }}</p>
    </div>


    <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" type="submit">
      Ürün Ekle
    </button>
  </form>

  <div id="hs-slide-down-animation-modal"
    class="hs-overlay hidden w-full h-full fixed top-20 left-0 z-[60] overflow-x-hidden overflow-y-auto">
    <div
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
      <div
        class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
          <h3 class="font-bold text-gray-800 dark:text-white">
            Marka Ekle
          </h3>
          <button type="button"
            class="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
            data-hs-overlay="#hs-slide-down-animation-modal">
            <span class="sr-only">Close</span>
            <svg class="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                fill="currentColor" />
            </svg>
          </button>
        </div>
        <div class="p-4 overflow-y-auto">
          <div class="mb-0 flex items-center justify-center space-x-4">
            <form @submit.prevent="addBrand" class="w-full flex items-center justify-center">
              <input type="text" id="brand" name="brand" v-model="brand"
                class=" py-3 px-3 block w-full border-2 border-gray-400 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 focus:outline-none mb-5">
              <button class="px-6 py-3 bg-blue-600 text-white rounded-md mb-5" type="submit">Ekle</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>


  <CardCreate :product="form" :srcImg="selectedImage">
    <div class=" sm:block ">
      <img v-if="selectedImage" :src="selectedImage" alt="Seçilen Resim"
        class=" aspect-square max-h-[300px] w-full object-cover" />
    </div>
  </CardCreate>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useProductStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'
import axiosInstance from '@/api/api.js';
import CardCreate from '@/components/card/CardCreate.vue'

let form = ref({
  name: '',
  description: '',
  motor_model: '',
  oem_code: '',
  category_id: null,
  brand_id: null,
  vehicle_type_id: null
});


const file = ref(null)
const errors = ref({})
const selectedImage = ref(null);
const brand = ref('')

const store = useProductStore()


const addBrand = () => {
  store.addBrand(brand.value)
  brand.value = ''
}

const showSelectedImage = (event) => {
  const file = event.target.files[0];

  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();

    reader.onload = () => {
      selectedImage.value = reader.result;
    };

    reader.readAsDataURL(file);
  } else {
    selectedImage.value = null;
  }
};

const { categories, vehicleTypes, brands } = storeToRefs(store)


const submitForm = async () => {
  try {
    let formData = new FormData();

    formData.append('name', form.value.name);
    formData.append('description', form.value.description);
    if (file.value.files.length > 0) {
      formData.append('image', file.value.files[0]);
    }
    formData.append('motor_model', form.value.motor_model);
    formData.append('oem_code', form.value.oem_code);
    formData.append('category_id', form.value.category_id?.id);
    formData.append('brand_id', form.value.brand_id?.id);
    formData.append('vehicle_type_id', form.value.vehicle_type_id?.id);

    const response = await axiosInstance.post('/products', formData)
    if (response.status === 201) {
      form.value = {
        name: '',
        description: '',
        motor_model: '',
        oem_code: '',
        category_id: null,
        brand_id: null,
        vehicle_type_id: null
      };
      file.value = null;

      store.load()

    }
  } catch (error) {
    if (error.response && error.response.data.errors) {
      errors.value = error.response.data.errors;
    }
    console.log(error)
  }
};


onMounted(() => {
  store.loadCategories()
})




</script>


<style  scoped></style>
