// src/stores/product.js
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useToast } from "vue-toastification";
import axiosInstance from '@/api/api.js';


export const useProductStore = defineStore('product', () => {

  const products = ref([]);
  const categories = ref([]);
  const vehicleTypes = ref([]);
  const brands = ref([]);
  const productMain = ref([]);


  const category = ref('')

  const links = ref([]);
  const error = ref(null);
  const url = ref('/products')
  const searchQuery = ref('')

  const categoryId = ref(null)
  const vehicleTypeId = ref(null)
  
  const errorToast = useToast();
  const succesToast = useToast();

const loadCategories = async () => {
    const categoryResponse = await axiosInstance.get('/categories');
    categories.value = categoryResponse.data.categories;
    vehicleTypes.value = categoryResponse.data.vehicle_types;
    brands.value = categoryResponse.data.brands
};

const addCategory = async (categoryData) => {
  try {
    const response = await axiosInstance.post('/categories', categoryData);

    const categoryResponseData = response.data;
    categories.value.push(categoryResponseData);

    succesToast.success("Başarıyla Gerçekleşti.", {
      timeout: 2000
    });

} catch (error) {
    errorToast.error("Bir Hata Oluştur", {
      timeout: 2000
    });
  }
};

const addVehicleType = async (type) => {
  try {
    const response = await axiosInstance.post('/vehicle-types', { type });

    // Araç tipi eklemesi başarılıysa mağazanızı güncelleyin (örneğin, araç tiplerini yeniden yükleyin)
    // Bu işlemi store içindeki ilgili işlevi kullanarak yapabilirsiniz

    const vehicleResponseData = response.data;
    vehicleTypes.value.push(vehicleResponseData);
    succesToast.success("Başarıyla Gerçekleşti.", {
      timeout: 2000
    });
  } catch (error) {
    errorToast.error("Bir Hata Oluştur", {
      timeout: 2000
    });
  }
};
  
const addBrand = async (name) => {
  try {
    const response = await axiosInstance.post('/brands', { name });

    // Marka eklemesi başarılıysa mağazanızı güncelleyin (örneğin, markaları yeniden yükleyin)
    // Bu işlemi store içindeki ilgili işlevi kullanarak yapabilirsiniz

    const brandResponseData = response.data;
    brands.value.push(brandResponseData);
    succesToast.success("Başarıyla Gerçekleşti.", {
      timeout: 2000
    });
    } catch (error) {
      errorToast.error("Bir Hata Oluştur", {
        timeout: 2000
      });
  }
};

const load = async () => {
    try {
      const response = await axiosInstance.get(url.value, {
        params: {
          category_id: categoryId.value,
          vehicle_type_id: vehicleTypeId.value
        }
      })

      products.value = response.data.data;
      links.value = response.data.links;

    
    } catch (e) {
    }
};

const mainProduct = async () => {
    try {
      const response = await axiosInstance.get('/product-main')

      productMain.value = response.data;    
    } catch (e) {

    }
};

const search = async () => {
  try {
    const response = await axiosInstance.get('/products/search', {
      params: {
        search: searchQuery.value
      }
    })

    products.value = response.data.data;
    links.value = response.data.links;

  } catch (e) {
  }
}

const reset = () => {
  searchQuery.value = ''
  categoryId.value = null
  vehicleTypeId.value = null
}

const deleteBrand = async (brandId) =>{
  try {
      const response = await axiosInstance.delete(`/brands/${brandId}`);
      if (response.status === 200) {
        loadCategories()
      }

      succesToast.success("Başarıyla Gerçekleşti.", {
        timeout: 2000
      });
  }catch (error) {
    errorToast.error("Bir Hata Oluştur", {
      timeout: 2000
    });
  }
}

const deleteCategory = async (id) => {
  try {
    const response = await axiosInstance.delete(`/categories/${id}`);
    if (response.status === 200) {
      loadCategories()
    }

    succesToast.success("Başarıyla Gerçekleşti.", {
      timeout: 2000
    });

  }catch (error) {
  errorToast.error("Bir Hata Oluştur", {
    timeout: 2000
  });
}
}

const deleteVehicle = async (id) => {
  try {
    const response = await axiosInstance.delete(`/vehicle-types/${id}`);
    if (response.status === 200) {
      loadCategories()
  
      succesToast.success("Başarıyla Gerçekleşti.", {
        timeout: 2000
      });
    }

  }catch (error) {
  errorToast.error("Bir Hata Oluştur", {
    timeout: 2000
  });
}
}

const deleteProduct = async (id) => {
  try {
    const response = await axiosInstance.delete(`/products/${id}`);
    if (response.status === 204) {
      load()
      succesToast.success("Başarıyla Gerçekleşti.", {
        timeout: 2000
      });
    }

  }catch (error) {
  errorToast.error("Bir Hata Oluştur", {
    timeout: 2000
  });
}
}

const createProduct = async (productData) => {
  try {
    const response = await axiosInstance.post('/products', productData)


  } catch (err) {

    console.log(err)
  }
}


return { 
  // state
  error, 
  url,
  products, 
  links,
  categories , 
  vehicleTypes ,
  brands,
  productMain,
  // Search Parameters
  categoryId ,
  vehicleTypeId,
  searchQuery,
  category,
  // Fetch & Query 
  load,
  loadCategories ,
  search,
  mainProduct,
  // Post
  addCategory,
  addVehicleType,
  addBrand,
  // Reset Values
  reset,
  deleteBrand,
  deleteCategory,
  deleteVehicle,
  createProduct,
  deleteProduct
};
})
