<template>
  <div class="flex items-center justify-center">
    <img :src="form.image_url" alt="" class="w-[300px] mb-5">
  </div>
  <form @submit.prevent="updateImage" enctype="multipart/form-data">
    <div class="flex flex-col items-start justify-center space-y-4 mb-10">
      <input type="file" ref="imageInput" @change="onFileChange" accept="image/*"
        class="block w-28 border border-gray-300 shadow-sm  text-sm focus:z-10 focus:border-gray-300 focus:ring-blue-500  file:bg-transparent file:border-0 file:bg-gray-100 file:mr-4 file:py-3 file:px-4"
        required>
      <p class="text-red-500" v-if="errors.image">{{ errors.image[0] }}</p>
      <button class="w-62 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" type="submit">
        Resmi Güncelle
      </button>
    </div>
  </form>

  <form v-if="form" @submit.prevent="submitForm" class="w-full mx-auto mt-10 font-montserrat font-medium p-12">
    <div class="mb-5 grid  grid-cols-1 md:grid-cols-2 gap-3">
      <div class="">
        <h4 class="mb-3 text-gray-950">Kategori</h4>
        <div class="text-sm text-gray-900 font-montserrat font-medium border border-gray-300">
          <label for="hs-hidden-select" class="sr-only">Label</label>
          <select v-model="form.category_id" id="hs-hidden-select" class="focus:outline-none py-3 px-4 pr-9 block w-full">
            <option v-for="category in categories" :key="category.id" :value="form.category_id">
              {{ category.name }}
            </option>
          </select>
        </div>
        <p class="text-red-500" v-if="errors.category">{{ errors.category[0] }}</p>
      </div>

      <div>
        <h4 class="mb-3 text-gray-950">Araç Tipi</h4>
        <div class=" text-sm text-gray-900 font-montserrat font-medium border border-gray-300">
          <label for="hs-hidden-select" class="sr-only">Label</label>
          <select v-model="form.vehicle_type_id" id="hs-hidden-select"
            class="focus:outline-none py-3 px-4 pr-9 block w-full">
            <option v-for="vehicleType in vehicleTypes" :key="vehicleType.id" :value="form.vehicle_type_id">
              {{ vehicleType.type }}
            </option>
          </select>
        </div>
        <p class="text-red-500" v-if="errors.vehicle_type">{{ errors.vehicle_type[0] }}</p>
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
      <div>
        <h4 class="mb-3 text-gray-950">Ürünün Markası</h4>
        <div class=" text-sm text-gray-900 font-montserrat font-medium border border-gray-300">
          <label for="hs-hidden-select" class="sr-only">Label</label>
          <select v-model="form.brand_id" id="hs-hidden-select" class="focus:outline-none py-3 px-4 pr-9 block w-full">
            <option v-for="brand in brands" :key="brand.id" :value="form.brand_id">
              {{ brand.name }}
            </option>
          </select>
        </div>
        <p class="text-red-500" v-if="errors.brand">{{ errors.brand[0] }}</p>
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
        <label for="oem_code">OEM Code:</label>
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

    <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded" type="submit">
      Ürün Ekle
    </button>
  </form>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useProductStore } from '@/stores/index.js'
import { storeToRefs } from 'pinia'
import axiosInstance from '@/api/api.js';
import { useRoute } from 'vue-router';
import { useToast } from "vue-toastification";


const route = useRoute();
const id = route.params.id;

const errorToast = useToast();
const succesToast = useToast();

let form = ref({});
const errors = ref({})
const imageFile = ref(null);


const store = useProductStore()
const { categories, vehicleTypes, brands } = storeToRefs(store)

const submitForm = async () => {
  try {

    const response = await axiosInstance.put(`/products/${id}`, form.value)

    succesToast.success("Güncellemeleriniz Gerçekleşiyor", {
      timeout: 2000
    });

    if (response.status === 201) {
      store.load()
    }
  } catch (error) {
    if (error.response && error.response.data.errors) {
      errors.value = error.response.data.errors;
    }
    errorToast.error("Formu Lütfen Eksiksiz Girin.", {
      timeout: 2000
    });
  }
};

const onFileChange = (event) => {
  imageFile.value = event.target.files[0];
};

const updateImage = async () => {

  if (!imageFile.value) {
    errorToast.error("Lütfen bir resim seçiniz", {
      timeout: 2000
    });
    return;
  }

  const formData = new FormData();
  formData.append('image', imageFile.value);

  try {
    const response = await axiosInstance.post(`/products/${id}/update-image/`, formData);
    if (response.status >= 200 && response.status < 300) {
      succesToast.success("Resiminiz Güncellendi", {
        timeout: 2000
      });
    }
    form.value.image_url = response.data;
    imageFile.value = null

  } catch (error) {

    errorToast.error("Bir Hata Oluştur", {
      timeout: 2000
    });
  }
};

onMounted(async () => {
  try {
    const response = await axiosInstance.get(`/products/${id}`);
    form.value = response.data;
  } catch (error) {
    console.error(error);
  }
  store.loadCategories()
})

</script>


<style  scoped></style>
