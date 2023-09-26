import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'



const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView,
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/urunler',
    name: 'ProductsView',
    component: () => import('@/views/ProductsView.vue'),
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/cozumler',
    name: 'SolutionsView',
    component: () => import('@/views/SolutionsView.vue'),
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/destek',
    name: 'SupportView',
    component: () => import('@/views/SupportView.vue'),
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/hakkimizda',
    name: 'AboutView',
    component: () => import('@/views/AboutView.vue'),
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/iletisim',
    name: 'ContactView',
    component: () => import('@/views/ContactView.vue'),
    meta: { layout: 'DefaultLayout' },
  },
  {
    path: '/dashboard',
    name: 'DashboardView',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: { layout: 'PanelLayout',requiresAuth: true },
  },
  {
    path: '/login',
    name: 'LoginView',
    component: () => import('@/views/dashboard/Login.vue'),
    meta: { layout: 'PanelLayout' ,requiresAuth: false},
  },
  {
    path: '/create-product',
    name: 'CreateProduct',
    component: () => import('@/views/dashboard/CreateProduct.vue'),
    meta: { layout: 'PanelLayout' ,requiresAuth: true},
  },
  {
    path: '/edit',
    name: 'EditView',
    component: () => import('@/views/dashboard/EditView.vue'),
    meta: { layout: 'PanelLayout' ,requiresAuth: true},
  },
  {
    path: '/edit/:id',
    name: 'EditProduct',
    component: () => import('@/views/dashboard/EditProduct.vue'),
    meta: { layout: 'PanelLayout' ,requiresAuth: true},
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
}
})

function isAuthenticated() {
  const token = localStorage.getItem('token') ?? null;
  return token !== null && token !== '';
 }
 
 router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login');
  } else {
    // Kullanıcı kimlik doğruladı veya rota korumalı değilse, devam et.
    next();
  }
 });

 router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    // Sadece login rotasında token kontrolü yapılır.
    const token = localStorage.getItem('token');
    if (token) {

      next('/dashboard');
    } else {
      // Token yoksa veya değeri "false" ise, oturum açma sayfasına yönlendirilir.
      next();
    }
  } else {
    // Diğer rotalarda bu kontrolü yapmamıza gerek yok.
    next();
  }
});

export default router
