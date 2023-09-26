// modalStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import axiosInstance from '@/api/api.js';

export const useCreateModal = defineStore('modal', () => {
  const isModalVisible = ref(false);
  const userData = ref({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const errors = ref({});

  function openModal() {
    isModalVisible.value = true;
  }

  function closeModal() {
    isModalVisible.value = false;
  }

  async function createUser() {
    // Önce hataları temizle
    errors.value = {};
  
    try {
      // Kullanıcı verilerini hazırla
      // API'ye kullanıcı kaydı isteği gönder
      const response = await axiosInstance.post('/register', userData.value);
      // İsteğin başarılı olduğunu kontrol et
      if (response.status === 201) {
        // Kullanıcı başarıyla oluşturulduysa, modalı kapat
        closeModal();
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        // API'den gelen hataları kaydet
        errors.value = error.response.data.errors;
      } else {
        console.error('Kullanıcı oluşturma hatası:', error);
      }
    }
  }

  return {
    isModalVisible,
    userData,
    errors,
    openModal,
    closeModal,
    createUser,
  };
});
