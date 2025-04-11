import { defineStore } from 'pinia';

export const listaProductos = defineStore('buscar', {
  state: () => ({
    // Inicialmente, no hay productos
    productos: [], // Guardamos productos
  }),
  actions: {
    setProductos(data) {
      this.productos = data; //Actualiza el estado de los productos y los almacena en productos
    },
    clearProductos() {
      this.productos = []; //limpiar productos
    }
  }
});
