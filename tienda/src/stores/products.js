import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [], // Todos los productos
    categories: [], // Categorías únicas
    productsByCategory: {}, // Productos separados por categoría
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        this.products = await response.json();
    
      } catch (error) {
        this.error = error;
        console.error('Error al obtener los productos:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});