<template>
  <div>
    <li>
      <button to="/create-user" @click="openModal"
        class="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800">
        <span class="inline-flex items-center justify-center h-12 w-12 text-lg">
          <svg class="fill-gray-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path
              d="M720-400v-120H600v-80h120v-120h80v120h120v80H800v120h-80Zm-360-80q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm80-80h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0-80Zm0 400Z" />
          </svg>
        </span>
        <span class="text-sm font-medium">Kullanıcı Ekle</span>
      </button>
    </li>
  </div>
</template>

<script setup>
import { useCreateModal } from '@/stores/createUser';
const modalStore = useCreateModal();

const openModal = () => {
  modalStore.openModal();
};

</script>

<style  scoped></style>