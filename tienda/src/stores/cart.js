import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [], // Lista de productos en el carrito
  }),
  actions: {
    addToCart(product) {
      // Agrega el producto al carrito
      this.cartItems.push(product);
    },
    removeFromCart(productId) {
      // Elimina un producto del carrito por su ID(guarda los productos que no coinciden y deja fuera el que quieres eliminar)
      this.cartItems = this.cartItems.filter(item => item.id !== productId);
    },
  },
});