import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../views/ProductsView.vue';
import HomeView from '../views/HomeView.vue';
import CartView from '../views/cartView.vue';

const routes = [
  //{path: '/', component: () => import('../components/Home.vue')}, 
  
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
    path: '/cart', // Nueva ruta
    name: 'Cart',
    component: CartView, // Componente de la página de detalle de compra
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
