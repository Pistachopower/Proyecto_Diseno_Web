import { createRouter, createWebHistory } from 'vue-router';
import ProductsView from '../views/ProductsView.vue';
import HomeView from '../views/HomeView.vue';

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
    component: ProductsView },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
