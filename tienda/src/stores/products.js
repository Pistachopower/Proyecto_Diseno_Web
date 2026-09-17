import { defineStore } from 'pinia';

export const useProductsStore = defineStore('allProduct', {
  state: () => ({
    allProduct: [], // Todos los productos
    categories: [], // Categorías únicas
    loading: false,
    error: null,
  }),
  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await fetch('https://dummyjson.com/products');

        if (!response.ok) {
          throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.json();
        this.allProduct = data.products.map(product => ({
          ...product,
          image: product.thumbnail || product.images?.[0],
        }));

        // Extraer categorías únicas
        this.categories = [...new Set(this.allProduct.map(product => product.category))];
      } catch (error) {
        this.error = error;
        console.error('Error al obtener los productos:', error);
      } finally {
        this.loading = false;
      }
    },
  },
});
