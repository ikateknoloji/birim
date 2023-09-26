import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp , provide } from 'vue'
import App from './App.vue'
import router from './router'
import anime from 'animejs';
import DefaultLayout from './layouts/DefaultLayout.vue'
import PanelLayout from './layouts/PanelLayout.vue'
import { MotionPlugin } from '@vueuse/motion'
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import '../node_modules/vue-preloader/dist/style.css'
import('preline')

const pinia = createPinia()
const app = createApp(App)
const options = {
 transition: "Vue-Toastification__bounce",
 maxToasts: 20,
 newestOnTop: true
};

app.component('DefaultLayout', DefaultLayout)
app.component('PanelLayout', PanelLayout)




app.use(router)
app.use(pinia)
app.provide('$anime', anime);
app.use(MotionPlugin)

app.use(Toast, options);





app.mount('#app')
