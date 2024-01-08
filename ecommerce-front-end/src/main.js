import { createApp } from 'vue';
import App from './App.vue'

import * as VueRouter from 'vue-router';

import './main.css';

import ShoppingCartPage from './pages/ShoppingCartPage.vue';
import ProductsPage from './pages/ProductsPage.vue';
import ProductDetailPage from './pages/ProductDetailPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvK49HL1LK8TsocyrUU1jhucbZAkCLYJE",
  authDomain: "two-tree-ecommerce-app.firebaseapp.com",
  projectId: "two-tree-ecommerce-app",
  storageBucket: "two-tree-ecommerce-app.appspot.com",
  messagingSenderId: "114932978055",
  appId: "1:114932978055:web:1024f64d2b7b698ea64322"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App)
.use(VueRouter.createRouter({
    history: VueRouter.createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/cart',  component: ShoppingCartPage}, 
        { path: '/products',  component: ProductsPage}, 
        { path: '/products/:productId',  component: ProductDetailPage}, 
        { path: '/', redirect:'/products' },
        { path: '/:pathMatch(.*)', component: NotFoundPage}
    ]
})) 
.mount('#app')
