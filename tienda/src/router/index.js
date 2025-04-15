import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../views/ProductsView.vue';
import HomeView from '../views/HomeView.vue';
import CartView from '../views/cartView.vue';
import ProductDetailView from '@/views/ProductDetailView.vue';

const routes = [
  
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  
  {
    path: '/products', 
    name: 'Products',
    component: ProductsView 
  },

  {
    path: '/cart', 
    name: 'Cart',
    component: CartView, // Componente de la página de detalle de compra
  },

  {
    path: '/product/:id', // Ruta dinámica con el ID del producto
    name: 'ProductDetail',
    component: ProductDetailView,
  },




];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
