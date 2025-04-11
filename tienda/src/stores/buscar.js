import { defineStore } from 'pinia';

export const useListaProductos = defineStore('buscar', {
  state: () => ({
    productos: [], // Guardamos productos
  }),
  actions: {
    setProductos(data) {
      this.productos = data;
    },
    clearProductos() {
      this.productos = [];
    }
  }
});
