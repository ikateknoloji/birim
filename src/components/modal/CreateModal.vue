<template>
    <div id="authentication-modal" aria-hidden="true"
        class="z-50 w-[600px] overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-20 left-1/2 -translate-x-1/3  justify-center items-center"
        :class="isModalVisible ? '' : 'hidden'">
        <div class="relative w-full max-w-lg px-4 h-full md:h-auto z-50 ">
            <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
                <div class="flex justify-end p-2">
                    <button @click="closeModal" type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                        data-modal-toggle="authentication-modal">
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
                <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" @submit.prevent="createUser">
                    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
                        Kullanıcı Kaydı Oluşturma
                    </h3>
                    <div>
                        <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                            Email Adresinizi Giriniz
                        </label>
                        <input v-model="userData.email" type="email" name="email" id="email"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="name@company.com" required />
                        <!-- Display validation errors if any -->
                        <div v-if="errors.email" class="text-red-500">{{ errors.email }}</div>
                    </div>
                    <div>
                        <label for="name" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                            Kullanıcı Adı
                        </label>
                        <input v-model="userData.name" type="text" name="name" id="name"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="John Doe" required />
                        <!-- Display validation errors if any -->
                        <div v-if="errors.name" class="text-red-500">{{ errors.name }}</div>
                    </div>
                    <div>
                        <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                            Şifre Oluştur
                        </label>
                        <input v-model="userData.password" type="password" name="password" id="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="*******" required />
                        <!-- Display validation errors if any -->
                        <div v-if="errors.password" class="text-red-500">{{ errors.password }}</div>
                    </div>
                    <div>
                        <label for="password_confirmation"
                            class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
                            Şifre Doğrulama
                        </label>
                        <input v-model="userData.password_confirmation" type="password" name="password_confirmation"
                            id="password_confirmation"
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            placeholder="*******" required />
                        <!-- Display validation errors if any -->
                        <div v-if="errors.password_confirmation" class="text-red-500">{{ errors.password_confirmation }}
                        </div>
                    </div>

                    <!-- Submit-->
                    <button type="submit"
                        class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Yeni Bir Kullanıcı Oluştur
                    </button>
                </form>
            </div>
        </div>
    </div>
    <div class="absolute left-0 right-0 top-0 bottom-0 bg-[#00000060]" :class="isModalVisible ? '' : 'hidden'"
        @click="closeModal">

    </div>
</template>

<script setup>
import { useCreateModal } from '@/stores/createUser.js';
import { storeToRefs } from 'pinia'

const store = useCreateModal();

const { userData, errors, isModalVisible } = storeToRefs(store)

const closeModal = () => {
    store.closeModal()
}
const createUser = () => {
    store.createUser()
}

</script>

<style  scoped>
input:focus {
    outline: none;
}
</style>