import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useToast } from "vue-toastification";
import { useRouter } from 'vue-router';
import axiosInstance from '@/api/api.js';


export const useAuthStore = defineStore('auth', () => {
  
  const token = ref(null);
  const error = ref(null);

  const router = useRouter();

  const errorToast = useToast();
  const succesToast = useToast();


  const login = async (email, password) => {
    try {
      const response = await axiosInstance.post('/login', { email, password });
      token.value = response.data.token;

      if (response.status === 200) {
        localStorage.setItem('token', response.data.access_token);
        router.push('/dashboard');
      }

      succesToast.success("Başarıyla Giriş Yapıldı", {
        timeout: 2000
      });

    } catch (e) {
      error.value = e.response.data; 
      errorToast.error("Kullanıcı Bilgileri Geçerli değil", {
        timeout: 2000
      });
    }
  };

  const logout = async () => {
    try {
      const response = await axiosInstance.post('/logout')
      
      token.value = null
      localStorage.removeItem('token')

      router.push('/login');

      succesToast.success("Başarıyla Oturum Kapatıldı.", {
        timeout: 2000
      });

    } catch (error) {
      console.error(error)
    }
  };

  return { token, error, login, logout };
});

