import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  id: 'products',
  state: () => ({
    products: [],
    selectedCategory: '', // Estado para la categoría seleccionada
  }),
  actions: {
    async fetchProducts(category = '') { // Aceptar un parámetro de categoría
      let url = 'https://fakestoreapi.com/products';
      if (category) {
        url += `/category/${category}`; // Agregar la categoría a la URL si está presente
      }
      const response = await fetch(url);
      this.products = await response.json();
    },
  },
});