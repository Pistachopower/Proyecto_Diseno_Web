import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
    categories: [],
    selectedCategory: null,
    loading: false, // Para mostrar un mensaje de "cargando..."
    error: null, // Para guardar cualquier error que ocurra
  }),
  actions: {
    async fetchProducts() {
      this.loading = true; // Indica que la carga ha comenzado
      this.error = null; // Reinicia cualquier error anterior
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        this.products = await response.json();
        this.categories = [...new Set(this.products.map((product) => product.category))];
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false; // Indica que la carga ha finalizado
      }
    },
    setCategory(category) {
      this.selectedCategory = category;
    },
  },
  getters: {
    filteredProducts: (state) => {
      if (!state.selectedCategory) {
        return state.products;
      }
      return state.products.filter((product) => product.category === state.selectedCategory);
    },
  },
});


/*
Explicación:

    state: Aquí guardamos los datos de los productos, las categorías, la categoría seleccionada, el estado de carga y cualquier error.
    actions: Aquí definimos funciones para obtener los productos de la API y cambiar la categoría seleccionada.
    getters: Aquí definimos una función para filtrar los productos según la categoría seleccionada.

*/