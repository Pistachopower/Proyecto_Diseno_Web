import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  //state: defines un store con Pinia que contiene el estado y las acciones necesarias
  state: () => ({
    products: [],// Aquí se almacenan los productos obtenidos de la API
    categories: [],// Aquí se almacenan las categorías únicas extraídas de los productos
    selectedCategory: null, // Categoría seleccionada por el usuario
    loading: false, // Indica si los datos están cargando
    error: null, // Guarda cualquier error que ocurra al obtener los datos
  }),
  actions: {
    async fetchProducts() {
      this.loading = true; // Indica que la carga ha comenzado
      this.error = null; // Reinicia cualquier error anterior
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        this.products = await response.json(); // Guarda los productos en el estado
        
        this.categories = [...new Set(this.products.map((product) => product.category))]; // Extrae categorías únicas
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false; // Indica que la carga ha finalizado
      }
    },
  },
});


/*
Explicación:

    state: Aquí guardamos los datos de los productos, las categorías, la categoría seleccionada, el estado de carga y cualquier error.
    actions: Aquí definimos funciones para obtener los productos de la API y cambiar la categoría seleccionada.
    getters: Aquí definimos una función para filtrar los productos según la categoría seleccionada.

*/