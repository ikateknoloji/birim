// useApi.js
import { ref } from 'vue';
import axios from 'axios';

export default function useApi(url) {
  const data = ref(null);
  const error = ref(null);
  const links = ref(null)
  const newUrl = ref(url)

  const load = async () => {
    try {
      const response = await axios.get(newUrl.value);
      data.value = response.data;
    } catch (e) {
      error.value = e;
    }
  };




  return { data, error, load, };
}
